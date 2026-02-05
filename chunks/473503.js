"use strict";
n.d(t, { OA: () => I, kB: () => y });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(562465),
    o = n(73153),
    l = n(734057),
    u = n(661191),
    c = n(207777),
    d = n(969043);
n(246943);
var _ = n(652215);
let f = 10,
    p = 5;
class h {
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
class m {
    requested;
    constructor() {
        this.requested = new h(() => new Set());
    }
    request(e, t) {
        this.requested.get(e).add(t);
    }
    hasRequested(e, t) {
        return this.requested.get(e).has(t);
    }
    finishRequesting(e, t) {
        let n = this.requested.get(e);
        t.forEach((e) => n.delete(e)), g.compact(e);
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
}
let g = new m(),
    E = null;
function A(e, t) {
    return !e && null == t;
}
function I(e) {
    let { loaded: t, firstMessage: n } = (0, a.cf)([d.A], () => d.A.getMessage(e.id)),
        r = (0, a.bG)([l.A], () => l.A.getChannel(e.parent_id));
    return null != r && A(t, n) && S(r, e.id), { loaded: t, firstMessage: n };
}
function T(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: r, firstMessage: i } = d.A.getMessage(t);
        A(r, i) && (g.request(e.id, t), (n = !0));
    }),
        n && null == E && (E = setTimeout(v, 0));
}
function y(e) {
    T(e, (0, c.S)(e.id).slice(0, f));
}
function S(e, t) {
    if (g.hasRequested(e.id, t)) return;
    let n = (0, c.S)(e.id),
        r = n.findIndex((e) => e === t),
        i = n.slice(r, r + p).filter((t) => !g.hasRequested(e.id, t));
    T(e, i);
}
async function v() {
    try {
        for (; g.hasNext(); ) await C(g.next());
    } finally {
        E = null;
    }
}
async function C(e) {
    let t = g.getNextBatch(e, f);
    try {
        if (0 === t.length) return;
        let n = l.A.getChannel(e)?.guild_id;
        if (null == n) return;
        let {
            body: { threads: r },
        } = await s.Bo.post({ url: _.Rsh.FORUM_POSTS(e), body: { thread_ids: t }, rejectWithError: !0 });
        o.h.dispatch({ type: "LOAD_FORUM_POSTS", guildId: n, threads: r });
    } catch (e) {
    } finally {
        g.finishRequesting(e, t);
    }
}
