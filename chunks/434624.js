n.d(t, { l: () => T }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(866442),
    l = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    f = n(566006),
    _ = n(287151),
    p = n(837601),
    h = n(371958);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = i.memo(function (e) {
    let t,
        n,
        {
            useChatFontScaling: i,
            hideEmoji: o,
            emoji: c,
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
            emojiSize: N,
        } = e,
        C = A === f.O.BURST,
        R = (0, _.y4)(E, b, A),
        P = (0, d.v)(C && null != O ? O : []),
        w = i ? h : p,
        D = C ? y : g,
        L = (0, u.y)(D, _.aO),
        x = {};
    if (C && null != P) {
        var M;
        let { accentColor: e, backgroundColor: r, opacity: i } = P,
            o = null != (M = (0, s.wK)(null != r ? r : "", i)) ? M : "";
        R && (x.borderColor = r), (x.background = o), (t = e), (n = e);
    }
    let j = {
        minWidth: L,
        color: t,
        borderColor: n,
    };
    return (0, r.jsxs)("div", {
        className: a()(w.reaction, w.reactionInner, m, {
            [w.reactionMe]: R,
            [w.reactionReadOnly]: v && !I && !S && !T,
        }),
        style: x,
        children: [
            (0, r.jsx)(l.Z, {
                className: a()({ [w.hideEmoji]: o }),
                emojiId: c.id,
                emojiName: c.name,
                size: N,
                animated: C && c.animated,
            }),
            (0, r.jsx)("div", {
                className: w.reactionCount,
                style: j,
                children: D,
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
        o = y(e, ["showImmediate", "reactions"]);
    let [a, s] = i.useState(!1),
        [l, u] = i.useTransition(),
        d = i.useCallback(
            (e) => {
                !e ||
                    a ||
                    l ||
                    u(() => {
                        s(!0);
                    });
            },
            [a, l],
        ),
        f = (0, c.O)(d),
        p = (a && !l) || t ? _.le : v;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: f }),
            n.map((e) => (0, r.jsx)(p, b(g({}, o, e), { emojiSize: "reaction" }), I(e))),
        ],
    });
});
