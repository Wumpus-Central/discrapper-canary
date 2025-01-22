r.d(n, {
    EB: function () {
        return A;
    },
    cl: function () {
        return T;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(544891),
    u = r(570140),
    c = r(592125),
    d = r(709054),
    f = r(238349),
    p = r(660189);
r(682474);
var h = r(981631);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = 10,
    g = 5;
class E {
    get(e) {
        return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e];
    }
    delete(e) {
        delete this._set[e];
    }
    hasNext() {
        return !o().isEmpty(this._set);
    }
    next() {
        return d.default.keys(this._set)[0];
    }
    constructor(e) {
        _(this, '_set', void 0), _(this, '_defaultValueFunc', void 0), (this._set = {}), (this._defaultValueFunc = e);
    }
}
class v {
    request(e, n) {
        this.requested.get(e).add(n);
    }
    hasRequested(e, n) {
        return this.requested.get(e).has(n);
    }
    finishRequesting(e, n) {
        let r = this.requested.get(e);
        n.forEach((e) => r.delete(e)), y.compact(e);
    }
    getRequested(e) {
        return this.requested.get(e);
    }
    getNextBatch(e, n) {
        return Array.from(this.requested.get(e)).slice(0, n);
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
        _(this, 'requested', void 0), (this.requested = new E(() => new Set()));
    }
}
let y = new v(),
    b = null;
function I(e, n) {
    return !e && null == n;
}
function T(e) {
    let { loaded: n, firstMessage: r } = (0, s.cj)([p.Z], () => p.Z.getMessage(e.id)),
        i = (0, s.e7)([c.Z], () => c.Z.getChannel(e.parent_id));
    return (
        null != i && I(n, r) && C(i, e.id),
        {
            loaded: n,
            firstMessage: r
        }
    );
}
function S(e, n) {
    let r = !1;
    n.forEach((n) => {
        let { loaded: i, firstMessage: a } = p.Z.getMessage(n);
        I(i, a) && (y.request(e.id, n), (r = !0));
    }),
        r && null == b && (b = setTimeout(N, 0));
}
function A(e) {
    S(e, (0, f.U)(e.id).slice(0, m));
}
function C(e, n) {
    if (y.hasRequested(e.id, n)) return;
    let r = (0, f.U)(e.id),
        i = r.findIndex((e) => e === n),
        a = r.slice(i, i + g).filter((n) => !y.hasRequested(e.id, n));
    S(e, a);
}
async function N() {
    try {
        for (; y.hasNext(); ) await R(y.next());
    } finally {
        b = null;
    }
}
async function R(e) {
    let n = y.getNextBatch(e, m);
    try {
        var r;
        if (0 === n.length) return;
        let i = null === (r = c.Z.getChannel(e)) || void 0 === r ? void 0 : r.guild_id;
        if (null == i) return;
        let {
            body: { threads: a }
        } = await l.tn.post({
            url: h.ANM.FORUM_POSTS(e),
            body: { thread_ids: n },
            rejectWithError: !0
        });
        u.Z.dispatch({
            type: 'LOAD_FORUM_POSTS',
            guildId: i,
            threads: a
        });
    } catch (e) {
    } finally {
        y.finishRequesting(e, n);
    }
}
