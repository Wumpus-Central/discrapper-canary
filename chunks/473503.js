n.d(t, { OA: () => I, kB: () => p });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(636537),
    l = n(228366),
    o = n(734057),
    d = n(935208),
    c = n(207777),
    u = n(969043);
n(246943);
var _ = n(652215);
class E {
    _set;
    _defaultValueFunc;
    constructor(e) {
        (this._set = {}), (this._defaultValueFunc = e);
    }
    get(e) {
        return this._set.hasOwnProperty(e) || (this._set[e] = this._defaultValueFunc()), this._set[e];
    }
    delete(e) {
        delete this._set[e];
    }
    hasNext() {
        return !r().isEmpty(this._set);
    }
    next() {
        return d.default.keys(this._set)[0];
    }
}
let A = new (class {
        requested;
        constructor() {
            this.requested = new E(() => new Set());
        }
        request(e, t) {
            this.requested.get(e).add(t);
        }
        hasRequested(e, t) {
            return this.requested.get(e).has(t);
        }
        finishRequesting(e, t) {
            let n = this.requested.get(e);
            t.forEach((e) => n.delete(e)), A.compact(e);
        }
        getRequested(e) {
            return this.requested.get(e);
        }
        getNextBatch(e, t) {
            return Array.from(this.requested.get(e)).slice(0, t);
        }
        hasNext() {
            return this.requested.hasNext();
        }
        next() {
            return this.requested.next();
        }
        compact(e) {
            0 === this.requested.get(e).size && this.requested.delete(e);
        }
    })(),
    h = null;
function I(e) {
    let { enabled: t = !0, allowArchived: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { loaded: i, firstMessage: r } = (0, a.cf)([u.A], () => u.A.getMessage(e.id)),
        s = (0, a.bG)([o.A], () => o.A.getChannel(e.parent_id));
    return (
        t &&
            null != s &&
            !i &&
            null == r &&
            (n
                ? f(s, [e.id])
                : (function (e, t) {
                      if (A.hasRequested(e.id, t)) return;
                      let n = (0, c.S)(e.id),
                          i = n.findIndex((e) => e === t),
                          r = n.slice(i, i + 5).filter((t) => !A.hasRequested(e.id, t));
                      f(e, r);
                  })(s, e.id)),
        { loaded: i, firstMessage: t ? r : null }
    );
}
function f(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: i, firstMessage: r } = u.A.getMessage(t);
        i || null != r || (A.request(e.id, t), (n = !0));
    }),
        n && null == h && (h = setTimeout(T, 0));
}
function p(e) {
    f(e, (0, c.S)(e.id).slice(0, 10));
}
async function T() {
    try {
        for (; A.hasNext(); ) await m(A.next());
    } finally {
        h = null;
    }
}
async function m(e) {
    let t = A.getNextBatch(e, 10);
    try {
        if (0 === t.length) return;
        let n = o.A.getChannel(e)?.guild_id;
        if (null == n) return;
        let {
            body: { threads: i },
        } = await s.Bo.post({ url: _.Rsh.FORUM_POSTS(e), body: { thread_ids: t }, rejectWithError: !0 });
        l.h.dispatch({ type: "LOAD_FORUM_POSTS", guildId: n, threads: i });
    } catch (e) {
    } finally {
        A.finishRequesting(e, t);
    }
}
