"use strict";
n.d(t, { OA: () => E, kB: () => g });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(636537),
    o = n(228366),
    l = n(734057),
    u = n(935208),
    c = n(207777),
    d = n(969043);
n(246943);
var _ = n(652215);
class f {
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
        return u.default.keys(this._set)[0];
    }
}
let h = new (class {
        requested;
        constructor() {
            this.requested = new f(() => new Set());
        }
        request(e, t) {
            this.requested.get(e).add(t);
        }
        hasRequested(e, t) {
            return this.requested.get(e).has(t);
        }
        finishRequesting(e, t) {
            let n = this.requested.get(e);
            t.forEach((e) => n.delete(e)), h.compact(e);
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
    p = null;
function E(e) {
    let { enabled: t = !0, allowArchived: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { loaded: i, firstMessage: r } = (0, s.cf)([d.A], () => d.A.getMessage(e.id)),
        a = (0, s.bG)([l.A], () => l.A.getChannel(e.parent_id));
    return (
        t &&
            null != a &&
            !i &&
            null == r &&
            (n
                ? m(a, [e.id])
                : (function (e, t) {
                      if (h.hasRequested(e.id, t)) return;
                      let n = (0, c.S)(e.id),
                          i = n.findIndex((e) => e === t),
                          r = n.slice(i, i + 5).filter((t) => !h.hasRequested(e.id, t));
                      m(e, r);
                  })(a, e.id)),
        { loaded: i, firstMessage: t ? r : null }
    );
}
function m(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: i, firstMessage: r } = d.A.getMessage(t);
        i || null != r || (h.request(e.id, t), (n = !0));
    }),
        n && null == p && (p = setTimeout(A, 0));
}
function g(e) {
    m(e, (0, c.S)(e.id).slice(0, 10));
}
async function A() {
    try {
        for (; h.hasNext(); ) await I(h.next());
    } finally {
        p = null;
    }
}
async function I(e) {
    let t = h.getNextBatch(e, 10);
    try {
        if (0 === t.length) return;
        let n = l.A.getChannel(e)?.guild_id;
        if (null == n) return;
        let {
            body: { threads: i },
        } = await a.Bo.post({ url: _.Rsh.FORUM_POSTS(e), body: { thread_ids: t }, rejectWithError: !0 });
        o.h.dispatch({ type: "LOAD_FORUM_POSTS", guildId: n, threads: i });
    } catch (e) {
    } finally {
        h.finishRequesting(e, t);
    }
}
