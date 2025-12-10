n.d(t, { l: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(907331),
    l = n(866442),
    c = n(596454),
    u = n(446489),
    d = n(56314),
    f = n(566006),
    p = n(287151),
    _ = n(127947),
    m = n(893973);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
            className: h,
            count: g,
            me: E,
            me_burst: b,
            burst_count: y,
            burst_colors: O,
            readOnly: v,
            isLurking: S,
            isGuest: I,
            isPendingMember: T,
            type: C,
            emojiSize: A,
        } = e,
        N = C === f.O.BURST,
        P = (0, p.y4)(E, b, C),
        R = (0, d.v)(N && null != O ? O : []),
        D = i ? m : _,
        w = N ? y : g,
        x = (0, u.y)(w, p.aO),
        L = {};
    if (N && null != R) {
        var j;
        let { accentColor: e, backgroundColor: r, opacity: i } = R,
            a = null != (j = (0, l.wK)(null != r ? r : "", i)) ? j : "";
        P && (L.borderColor = r), (L.background = a), (t = e), (n = e);
    }
    let M = {
        minWidth: x,
        color: t,
        borderColor: n,
    };
    return (0, r.jsxs)("div", {
        className: o()(D.reaction, D.reactionInner, h, {
            [D.reactionMe]: P,
            [D.reactionReadOnly]: v && !S && !T && !I,
        }),
        style: L,
        children: [
            (0, r.jsx)(c.Z, {
                className: o()({ [D.hideEmoji]: a }),
                emojiId: s.id,
                emojiName: s.name,
                size: A,
                animated: N && s.animated,
            }),
            (0, r.jsx)("div", {
                className: D.reactionCount,
                style: M,
                children: w,
            }),
        ],
    });
});
function S(e) {
    var t;
    return ""
        .concat(e.type === f.O.BURST ? "burst:" : "")
        .concat(null != (t = e.emoji.id) ? t : 0, ":")
        .concat(e.emoji.name);
}
let I = i.memo(function (e) {
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
        _ = (o && !c) || t ? p.le : v;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: f }),
            n.map((e) => (0, r.jsx)(_, b(g({}, a, e), { emojiSize: "reaction" }), S(e))),
        ],
    });
});
