n.d(t, {
    EB: () => T,
    cl: () => I
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(442837),
    s = n(544891),
    o = n(570140),
    l = n(592125),
    u = n(709054),
    c = n(238349),
    d = n(660189);
n(682474);
var f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = 10,
    h = 5;
class m {
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
    constructor(e) {
        _(this, '_set', void 0), _(this, '_defaultValueFunc', void 0), (this._set = {}), (this._defaultValueFunc = e);
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
        _(this, 'requested', void 0), (this.requested = new m(() => new Set()));
    }
}
let E = new g(),
    v = null;
function y(e, t) {
    return !e && null == t;
}
function I(e) {
    let { loaded: t, firstMessage: n } = (0, a.cj)([d.Z], () => d.Z.getMessage(e.id)),
        i = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
    return (
        null != i && y(t, n) && S(i, e.id),
        {
            loaded: t,
            firstMessage: n
        }
    );
}
function b(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: i, firstMessage: r } = d.Z.getMessage(t);
        y(i, r) && (E.request(e.id, t), (n = !0));
    }),
        n && null == v && (v = setTimeout(A, 0));
}
function T(e) {
    b(e, (0, c.U)(e.id).slice(0, p));
}
function S(e, t) {
    if (E.hasRequested(e.id, t)) return;
    let n = (0, c.U)(e.id),
        i = n.findIndex((e) => e === t),
        r = n.slice(i, i + h).filter((t) => !E.hasRequested(e.id, t));
    b(e, r);
}
async function A() {
    try {
        for (; E.hasNext(); ) await N(E.next());
    } finally {
        v = null;
    }
}
async function N(e) {
    let t = E.getNextBatch(e, p);
    try {
        var n;
        if (0 === t.length) return;
        let i = null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
        if (null == i) return;
        let {
            body: { threads: r }
        } = await s.tn.post({
            url: f.ANM.FORUM_POSTS(e),
            body: { thread_ids: t },
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'LOAD_FORUM_POSTS',
            guildId: i,
            threads: r
        });
    } catch (e) {
    } finally {
        E.finishRequesting(e, t);
    }
}
