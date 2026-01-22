n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(172218),
    l = n(317097),
    c = n(565645),
    u = n(114166),
    d = n(891734),
    f = n(505527),
    p = n(260821),
    _ = n(233080),
    h = n(710504);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let A = i.memo(function (e) {
    let t,
        n,
        {
            useChatFontScaling: i,
            hideEmoji: a,
            emoji: o,
            className: m,
            count: g,
            me: E,
            me_burst: b,
            burst_count: y,
            burst_colors: O,
            readOnly: A,
            isLurking: v,
            isGuest: S,
            isPendingMember: I,
            type: T,
            emojiSize: C,
        } = e,
        N = T === f.v.BURST,
        R = (0, p.IN)(E, b, T),
        w = (0, d.g)(N && null != O ? O : []),
        P = i ? h : _,
        D = N ? y : g,
        x = (0, u.x)(D, p.$Z),
        L = {};
    if (N && null != w) {
        var j;
        let { accentColor: e, backgroundColor: r, opacity: i } = w,
            a = null != (j = (0, l.xp)(null != r ? r : "", i)) ? j : "";
        R && (L.borderColor = r), (L.background = a), (t = e), (n = e);
    }
    let M = {
        minWidth: x,
        color: t,
        borderColor: n,
    };
    return (0, r.jsxs)("div", {
        className: s()(P.reaction, P.reactionInner, m, {
            [P.reactionMe]: R,
            [P.reactionReadOnly]: A && !v && !I && !S,
        }),
        style: L,
        children: [
            (0, r.jsx)(c.A, {
                className: s()({
                    [P.hideEmoji]: a,
                }),
                emojiId: o.id,
                emojiName: o.name,
                size: C,
                animated: N && o.animated,
            }),
            (0, r.jsx)("div", {
                className: P.reactionCount,
                style: M,
                children: D,
            }),
        ],
    });
});

function v(e) {
    var t;
    return ""
        .concat(e.type === f.v.BURST ? "burst:" : "")
        .concat(null != (t = e.emoji.id) ? t : 0, ":")
        .concat(e.emoji.name);
}
let S = i.memo(function (e) {
    let { showImmediate: t, reactions: n } = e,
        a = y(e, ["showImmediate", "reactions"]),
        [s, l] = i.useState(!1),
        [c, u] = i.useTransition(),
        d = i.useCallback(
            (e) => {
                !e ||
                    s ||
                    c ||
                    u(() => {
                        l(!0);
                    });
            },
            [s, c],
        ),
        f = (0, o.K)(d),
        _ = (s && !c) || t ? p.qT : A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: f,
            }),
            n.map((e) =>
                (0, r.jsx)(
                    _,
                    b(g({}, a, e), {
                        emojiSize: "reaction",
                    }),
                    v(e),
                ),
            ),
        ],
    });
});
