n.d(t, {
    EB: () => S,
    cl: () => O,
}),
    n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(544891),
    s = n(570140),
    l = n(592125),
    c = n(709054),
    u = n(238349),
    d = n(660189);
n(682474);
var f = n(981631);
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
    m = 5;
class h {
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
        p(this, "requested", void 0), (this.requested = new h(() => new Set()));
    }
}
let E = new g(),
    b = null;
function y(e, t) {
    return !e && null == t;
}
function O(e) {
    let { loaded: t, firstMessage: n } = (0, a.cj)([d.Z], () => d.Z.getMessage(e.id)),
        r = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
    return (
        null != r && y(t, n) && I(r, e.id),
        {
            loaded: t,
            firstMessage: n,
        }
    );
}
function v(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: r, firstMessage: i } = d.Z.getMessage(t);
        y(r, i) && (E.request(e.id, t), (n = !0));
    }),
        n && null == b && (b = setTimeout(T, 0));
}
function S(e) {
    v(e, (0, u.U)(e.id).slice(0, _));
}
function I(e, t) {
    if (E.hasRequested(e.id, t)) return;
    let n = (0, u.U)(e.id),
        r = n.findIndex((e) => e === t),
        i = n.slice(r, r + m).filter((t) => !E.hasRequested(e.id, t));
    v(e, i);
}
async function T() {
    try {
        for (; E.hasNext(); ) await C(E.next());
    } finally {
        b = null;
    }
}
async function C(e) {
    let t = E.getNextBatch(e, _);
    try {
        var n;
        if (0 === t.length) return;
        let r = null == (n = l.Z.getChannel(e)) ? void 0 : n.guild_id;
        if (null == r) return;
        let {
            body: { threads: i },
        } = await o.tn.post({
            url: f.ANM.FORUM_POSTS(e),
            body: { thread_ids: t },
            rejectWithError: !0,
        });
        s.Z.dispatch({
            type: "LOAD_FORUM_POSTS",
            guildId: r,
            threads: i,
        });
    } catch (e) {
    } finally {
        E.finishRequesting(e, t);
    }
}
