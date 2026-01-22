n.d(t, {
    OA: () => O,
    kB: () => v,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(734057),
    c = n(661191),
    u = n(207777),
    d = n(969043);
n(246943);
var f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 10,
    h = 5;
class m {
    get(e) {
        return this._set.hasOwnProperty(e) || (this._set[e] = this._defaultValueFunc()), this._set[e];
    }
    delete(e) {
        delete this._set[e];
    }
    hasNext() {
        return !i().isEmpty(this._set);
    }
    next() {
        return c.default.keys(this._set)[0];
    }
    constructor(e) {
        p(this, "_set", void 0), p(this, "_defaultValueFunc", void 0), (this._set = {}), (this._defaultValueFunc = e);
    }
}
class g {
    request(e, t) {
        this.requested.get(e).add(t);
    }
    hasRequested(e, t) {
        return this.requested.get(e).has(t);
    }
    finishRequesting(e, t) {
        let n = this.requested.get(e);
        t.forEach((e) => n.delete(e)), E.compact(e);
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
    constructor() {
        p(this, "requested", void 0), (this.requested = new m(() => new Set()));
    }
}
let E = new g(),
    b = null;

function y(e, t) {
    return !e && null == t;
}

function O(e) {
    let { loaded: t, firstMessage: n } = (0, a.cf)([d.A], () => d.A.getMessage(e.id)),
        r = (0, a.bG)([l.A], () => l.A.getChannel(e.parent_id));
    return (
        null != r && y(t, n) && S(r, e.id),
        {
            loaded: t,
            firstMessage: n,
        }
    );
}

function A(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: r, firstMessage: i } = d.A.getMessage(t);
        y(r, i) && (E.request(e.id, t), (n = !0));
    }),
        n && null == b && (b = setTimeout(I, 0));
}

function v(e) {
    A(e, (0, u.S)(e.id).slice(0, _));
}

function S(e, t) {
    if (E.hasRequested(e.id, t)) return;
    let n = (0, u.S)(e.id),
        r = n.findIndex((e) => e === t),
        i = n.slice(r, r + h).filter((t) => !E.hasRequested(e.id, t));
    A(e, i);
}
async function I() {
    try {
        for (; E.hasNext(); ) await T(E.next());
    } finally {
        b = null;
    }
}
async function T(e) {
    let t = E.getNextBatch(e, _);
    try {
        var n;
        if (0 === t.length) return;
        let r = null == (n = l.A.getChannel(e)) ? void 0 : n.guild_id;
        if (null == r) return;
        let {
            body: { threads: i },
        } = await s.Bo.post({
            url: f.Rsh.FORUM_POSTS(e),
            body: {
                thread_ids: t,
            },
            rejectWithError: !0,
        });
        o.h.dispatch({
            type: "LOAD_FORUM_POSTS",
            guildId: r,
            threads: i,
        });
    } catch (e) {
    } finally {
        E.finishRequesting(e, t);
    }
}
