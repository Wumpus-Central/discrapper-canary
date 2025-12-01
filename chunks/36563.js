n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(28664),
    u = n(481060),
    d = n(239091),
    f = n(751688),
    p = n(5192),
    _ = n(51144),
    m = n(388032),
    h = n(120230);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.EFr.SIZE_24;
    switch (e) {
        case u.EFr.SIZE_16:
            return h.size16;
        case u.EFr.SIZE_20:
            return h.size20;
        case u.EFr.SIZE_24:
        default:
            return h.size24;
    }
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.EFr.SIZE_24;
    switch (e) {
        case u.EFr.SIZE_16:
        case u.EFr.SIZE_20:
            return "text-xxs/semibold";
        case u.EFr.SIZE_24:
        default:
            return "text-xs/medium";
    }
}
function S(e) {
    let {
            users: t,
            maxUsers: a,
            guildId: s,
            channelId: g,
            className: b,
            size: S = u.EFr.SIZE_24,
            overflowCountVariant: I,
            overflowCountColor: T = "interactive-normal",
            overflowCountClassName: A,
            hideOverflowCount: C = !1,
            disableUsernameTooltip: N = !1,
            disableUserPopout: P = !1,
            onClickOverflow: R,
            onFocusOverflow: w,
            onUserClick: D,
            onUserPopoutRequestClose: x,
            "aria-label": L,
            "aria-labelledby": j,
            "aria-hidden": M,
        } = e,
        [k, U] = i.useState(!1),
        G = O(S),
        Z = i.useRef(null),
        B = t.length - a,
        F = B + 1,
        V = B > 0 && !C && !M,
        H = () =>
            (0, r.jsx)(u.VqE, {
                className: h.popoutWrapper,
                "aria-label": L,
                "aria-labelledby": j,
                children: (0, r.jsx)(u.Ttm, {
                    className: h.scroller,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                user: e,
                                guildId: s,
                                channelId: g,
                                nick: p.ZP.getNickname(s, g, e),
                                disablePopout: "function" == typeof P ? P(e.id) : P,
                                onClick: D,
                                onPopoutRequestClose: () => {
                                    U(!1), null == x || x();
                                },
                                onContextMenu: (t) =>
                                    (0, d.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("69220"),
                                                n.e("77635"),
                                            ]).then(n.bind(n, 881351));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    y(E({}, n), {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: g,
                                                    }),
                                                );
                                        },
                                        { onClose: () => U(!1) },
                                    ),
                            },
                            e.id,
                        ),
                    ),
                }),
            }),
        Y = () => {
            let e = V ? a - 1 : Math.min(t.length, a),
                n = e - 1,
                i = l()(t)
                    .take(e)
                    .map((e, t) => {
                        let i = p.ZP.getNickname(s, g, e),
                            a = null != i ? i : _.ZP.getName(e),
                            l = t === n && !V,
                            d = o()(h.avatar, G, l && h.isLast),
                            f = (0, r.jsx)(u.qEK, {
                                src: e.getAvatarURL(s, 24),
                                size: S,
                                "aria-hidden": !0,
                            });
                        return (0, r.jsx)(
                            "li",
                            {
                                className: d,
                                children: N
                                    ? (0, r.jsx)("span", {
                                          role: "img",
                                          "aria-label": a,
                                          children: f,
                                      })
                                    : (0, r.jsx)(c.u, {
                                          __unsupportedReactNodeAsText: a,
                                          "aria-label": !1,
                                          children: (0, r.jsx)("span", {
                                              role: "img",
                                              "aria-label": a,
                                              children: f,
                                          }),
                                      }),
                            },
                            e.id,
                        );
                    })
                    .value();
            return (0, r.jsx)("ul", {
                className: h.avatars,
                children: i,
            });
        },
        W = () => {
            if (!V) return null;
            let e = null != I ? I : v(S);
            return (0, r.jsx)(
                u.yRy,
                {
                    targetElementRef: Z,
                    renderPopout: H,
                    shouldShow: k,
                    position: "bottom",
                    onRequestClose: () => U(!1),
                    children: (t) =>
                        (0, r.jsx)(
                            u.P3F,
                            y(E({}, t), {
                                innerRef: Z,
                                className: o()(h.overflow, G, A),
                                onFocus: w,
                                onClick: (e) => {
                                    null == R || R(e), U(!0);
                                },
                                "aria-label": m.intl.formatToPlainString(m.t.R8Z8Qr, { count: F }),
                                children: (0, r.jsx)(u.Text, {
                                    variant: e,
                                    color: T,
                                    children: F > 99 ? ">99" : "+".concat(F),
                                }),
                            }),
                        ),
                },
                "overflow",
            );
        };
    return t.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-label": L,
              "aria-labelledby": j,
              className: o()(b, h.avatars),
              "aria-hidden": M,
              children: [Y(), W()],
          });
}
