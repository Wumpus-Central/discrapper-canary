"use strict";
n.d(t, { OA: () => p, kB: () => g });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(562465),
    o = n(73153),
    l = n(734057),
    u = n(661191),
    d = n(207777),
    c = n(969043);
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
        return !i().isEmpty(this._set);
    }
    next() {
        return u.default.keys(this._set)[0];
    }
}
let E = new (class {
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
    })(),
    h = null;
function p(e) {
    let { loaded: t, firstMessage: n } = (0, s.cf)([c.A], () => c.A.getMessage(e.id)),
        r = (0, s.bG)([l.A], () => l.A.getChannel(e.parent_id));
    return (
        null == r ||
            t ||
            null != n ||
            (function (e, t) {
                if (E.hasRequested(e.id, t)) return;
                let n = (0, d.S)(e.id),
                    r = n.findIndex((e) => e === t),
                    i = n.slice(r, r + 5).filter((t) => !E.hasRequested(e.id, t));
                m(e, i);
            })(r, e.id),
        { loaded: t, firstMessage: n }
    );
}
function m(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: r, firstMessage: i } = c.A.getMessage(t);
        r || null != i || (E.request(e.id, t), (n = !0));
    }),
        n && null == h && (h = setTimeout(A, 0));
}
function g(e) {
    m(e, (0, d.S)(e.id).slice(0, 10));
}
async function A() {
    try {
        for (; E.hasNext(); ) await I(E.next());
    } finally {
        h = null;
    }
}
async function I(e) {
    let t = E.getNextBatch(e, 10);
    try {
        if (0 === t.length) return;
        let n = l.A.getChannel(e)?.guild_id;
        if (null == n) return;
        let {
            body: { threads: r },
        } = await a.Bo.post({ url: _.Rsh.FORUM_POSTS(e), body: { thread_ids: t }, rejectWithError: !0 });
        o.h.dispatch({ type: "LOAD_FORUM_POSTS", guildId: n, threads: r });
    } catch (e) {
    } finally {
        E.finishRequesting(e, t);
    }
}
