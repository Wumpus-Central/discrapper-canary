n.d(t, { l: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(907331),
    l = n(866442),
    c = n(596454),
    u = n(446489),
    d = n(56314),
    f = n(566006),
    _ = n(287151),
    p = n(127947),
    h = n(893973);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = i.memo(function (e) {
    let t,
        n,
        {
            useChatFontScaling: i,
            hideEmoji: a,
            emoji: s,
            className: m,
            count: g,
            me: E,
            me_burst: b,
            burst_count: y,
            burst_colors: O,
            readOnly: v,
            isLurking: I,
            isGuest: T,
            isPendingMember: S,
            type: A,
            emojiSize: C,
        } = e,
        N = A === f.O.BURST,
        R = (0, _.y4)(E, b, A),
        P = (0, d.v)(N && null != O ? O : []),
        D = i ? h : p,
        w = N ? y : g,
        x = (0, u.y)(w, _.aO),
        L = {};
    if (N && null != P) {
        var M;
        let { accentColor: e, backgroundColor: r, opacity: i } = P,
            a = null != (M = (0, l.wK)(null != r ? r : "", i)) ? M : "";
        R && (L.borderColor = r), (L.background = a), (t = e), (n = e);
    }
    let j = {
        minWidth: x,
        color: t,
        borderColor: n,
    };
    return (0, r.jsxs)("div", {
        className: o()(D.reaction, D.reactionInner, m, {
            [D.reactionMe]: R,
            [D.reactionReadOnly]: v && !I && !S && !T,
        }),
        style: L,
        children: [
            (0, r.jsx)(c.Z, {
                className: o()({ [D.hideEmoji]: a }),
                emojiId: s.id,
                emojiName: s.name,
                size: C,
                animated: N && s.animated,
            }),
            (0, r.jsx)("div", {
                className: D.reactionCount,
                style: j,
                children: w,
            }),
        ],
    });
});
function I(e) {
    var t;
    return ""
        .concat(e.type === f.O.BURST ? "burst:" : "")
        .concat(null != (t = e.emoji.id) ? t : 0, ":")
        .concat(e.emoji.name);
}
let T = i.memo(function (e) {
    var { showImmediate: t, reactions: n } = e,
        a = y(e, ["showImmediate", "reactions"]);
    let [o, l] = i.useState(!1),
        [c, u] = i.useTransition(),
        d = i.useCallback(
            (e) => {
                !e ||
                    o ||
                    c ||
                    u(() => {
                        l(!0);
                    });
            },
            [o, c],
        ),
        f = (0, s.O)(d),
        p = (o && !c) || t ? _.le : v;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: f }),
            n.map((e) => (0, r.jsx)(p, b(g({}, a, e), { emojiSize: "reaction" }), I(e))),
        ],
    });
});
