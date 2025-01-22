r.d(n, {
    $G: function () {
        return v;
    },
    BU: function () {
        return T;
    },
    Fr: function () {
        return O;
    },
    Fz: function () {
        return R;
    },
    Ko: function () {
        return _;
    },
    Pe: function () {
        return D;
    },
    WU: function () {
        return N;
    },
    cl: function () {
        return S;
    },
    g9: function () {
        return y;
    },
    jW: function () {
        return E;
    },
    kG: function () {
        return C;
    },
    qc: function () {
        return b;
    },
    zV: function () {
        return I;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(392711),
    s = r.n(o),
    l = r(349033),
    u = r(999650),
    c = r(731290),
    d = r(594174),
    f = r(709054),
    p = r(981631),
    h = r(388032);
function _(e) {
    switch (e) {
        case p.dCx.FILTER_FROM:
            return h.intl.string(h.t.E466pK);
        case p.dCx.FILTER_MENTIONS:
            return h.intl.string(h.t.BYvFWl);
        case p.dCx.FILTER_HAS:
            return h.intl.string(h.t.bhSYbW);
        case p.dCx.FILTER_BEFORE:
        case p.dCx.FILTER_ON:
        case p.dCx.FILTER_AFTER:
            return h.intl.string(h.t.Zbbc1N);
        case p.dCx.FILTER_IN:
            return h.intl.string(h.t['GpM+//']);
        case p.dCx.FILTER_FILE_TYPE:
            return h.intl.string(h.t.FXcAFR);
        case p.dCx.FILTER_FILE_NAME:
            return h.intl.string(h.t.uAbFDA);
        case p.dCx.FILTER_PINNED:
            return h.intl.string(h.t.UJxL3d);
    }
}
let m = {
    [p.dCx.FILTER_BEFORE]: !0,
    [p.dCx.FILTER_AFTER]: !0,
    [p.dCx.FILTER_ON]: !0
};
function g(e) {
    let n = u.ZP[e],
        r = null != n ? n.queryKey : null;
    return null == r && (r = 'content'), r;
}
function E(e, n) {
    if (c.Z.didAgree(n)) {
        let n = d.default.getCurrentUser();
        null != n && (e.include_nsfw = null == n.nsfwAllowed || n.nsfwAllowed);
    }
}
function v(e) {
    let n = {};
    for (let [r, i] of (e.forEach((e) => {
        let { type: r } = e;
        if (p.TNx.test(r)) return;
        switch (r) {
            case p.dCx.ANSWER_BEFORE:
            case p.dCx.ANSWER_ON:
            case p.dCx.ANSWER_AFTER:
                let i = e.getData('start'),
                    a = e.getData('end');
                i && (n.min_id = f.default.fromTimestamp(i)), a && (n.max_id = f.default.fromTimestamp(a));
                return;
        }
        let o = g(r);
        null == n[o] && (n[o] = new Set());
        let s = n[o];
        switch (r) {
            case p.dCx.ANSWER_USERNAME_FROM:
            case p.dCx.ANSWER_USERNAME_MENTIONS:
                s.add(e.getData('userId'));
                break;
            case p.dCx.ANSWER_FILE_TYPE:
            case p.dCx.ANSWER_FILE_NAME:
                s.add(e.getMatch(1));
                break;
            case p.dCx.ANSWER_IN:
                s.add(e.getData('channel').id);
                break;
            case p.dCx.ANSWER_HAS:
                s.add(e.getData('has'));
                break;
            case p.dCx.ANSWER_PINNED:
                s.add(e.getData('pinned'));
                break;
            default:
                s.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(n)))
        i instanceof Set && (n[r] = Array.from(i));
    return n.content && ((n.content = n.content.join(' ').trim()), !n.content && delete n.content), n;
}
function y(e, n, r) {
    let i, a;
    let o = e.find((o, s) => (n >= o.start && n <= o.end && r >= o.start && r <= o.end ? (null != e[s + 1] && (a = e[s + 1]), !0) : ((i = o), !1)));
    return null == o
        ? null
        : {
              previousToken: i,
              currentToken: o,
              nextToken: a,
              focusOffset: n,
              anchorOffset: r
          };
}
function b(e, n) {
    let r;
    let { currentToken: i, nextToken: a, previousToken: o } = (e = null != e ? e : {});
    if (0 === n.length)
        return {
            type: p.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == i)
        return {
            type: p.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (p.TNx.test(i.type)) {
        if (null == a || a.type === l.ZP.NON_TOKEN_TYPE)
            return {
                type: p.Sap.FILTER,
                filter: i.type,
                token: a
            };
        if (null != a && !p.KA4.test(a.type))
            return {
                type: p.Sap.FILTER,
                filter: i.type,
                token: null
            };
    }
    return i.type === l.ZP.NON_TOKEN_TYPE && null != o && p.TNx.test(o.type)
        ? {
              type: p.Sap.FILTER,
              filter: o.type,
              token: i
          }
        : (i.type === l.ZP.NON_TOKEN_TYPE && (r = i),
          {
              type: p.Sap.FILTER_ALL,
              filter: null,
              token: r
          });
}
function I(e, n) {
    let r = [];
    return (
        s()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let i = e.group;
            r = r.concat(
                e.results.map((e) => {
                    let r = e.text;
                    if (n === p.Sap.FILTER_ALL) {
                        var a;
                        i = null !== (a = e.group) && void 0 !== a ? a : i;
                        let n = u.ZP[i];
                        (null == n ? void 0 : n.key) != null && (null == n ? void 0 : n.key) !== '' && (r = ''.concat(n.key, ' ').concat(r));
                    }
                    return r;
                })
            );
        }),
        r.filter((e) => e)
    );
}
function T(e) {
    return e.reduce((e, n) => (null == n ? e : n.results.length + e), 0);
}
function S(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let A = new l.ZP();
function C(e) {
    return A.tokenize(e);
}
function N() {
    return A.clearCache();
}
function R(e) {
    return null != e ? m[e] : null;
}
function O(e, n) {
    let r = p.TNx.test(e.type);
    return (null != n || !r) && (null == n || !r || !!p.KA4.test(n.type)) && !0;
}
function D() {
    (0, u.Pe)(),
        A.reset(),
        s()(u.ZP).forOwn((e, n) =>
            A.addRule({
                type: n,
                ...e
            })
        );
}
