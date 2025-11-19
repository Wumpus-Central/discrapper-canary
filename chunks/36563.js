n.d(t, { Z: () => I }), n(388685);
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
    _ = n(5192),
    p = n(51144),
    h = n(388032),
    m = n(772530);
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
            return m.size16;
        case u.EFr.SIZE_20:
            return m.size20;
        case u.EFr.SIZE_24:
        default:
            return m.size24;
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
function I(e) {
    let {
            users: t,
            maxUsers: a,
            guildId: s,
            channelId: g,
            className: b,
            size: I = u.EFr.SIZE_24,
            overflowCountVariant: T,
            overflowCountColor: S = "interactive-normal",
            overflowCountClassName: A,
            hideOverflowCount: C = !1,
            disableUsernameTooltip: N = !1,
            disableUserPopout: R = !1,
            onClickOverflow: P,
            onFocusOverflow: D,
            onUserClick: w,
            onUserPopoutRequestClose: L,
            "aria-label": x,
            "aria-labelledby": M,
            "aria-hidden": j,
        } = e,
        [k, U] = i.useState(!1),
        G = O(I),
        B = i.useRef(null),
        Z = t.length - a,
        F = Z + 1,
        V = Z > 0 && !C && !j,
        H = () =>
            (0, r.jsx)(u.VqE, {
                className: m.popoutWrapper,
                "aria-label": x,
                "aria-labelledby": M,
                children: (0, r.jsx)(u.Ttm, {
                    className: m.scroller,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                user: e,
                                guildId: s,
                                channelId: g,
                                nick: _.ZP.getNickname(s, g, e),
                                disablePopout: "function" == typeof R ? R(e.id) : R,
                                onClick: w,
                                onPopoutRequestClose: () => {
                                    U(!1), null == L || L();
                                },
                                onContextMenu: (t) =>
                                    (0, d.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("69220"),
                                                n.e("73444"),
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
                        let i = _.ZP.getNickname(s, g, e),
                            a = null != i ? i : p.ZP.getName(e),
                            l = t === n && !V,
                            d = o()(m.avatar, G, l && m.isLast),
                            f = (0, r.jsx)(u.qEK, {
                                src: e.getAvatarURL(s, 24),
                                size: I,
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
                className: m.avatars,
                children: i,
            });
        },
        W = () => {
            if (!V) return null;
            let e = null != T ? T : v(I);
            return (0, r.jsx)(
                u.yRy,
                {
                    targetElementRef: B,
                    renderPopout: H,
                    shouldShow: k,
                    position: "bottom",
                    onRequestClose: () => U(!1),
                    children: (t) =>
                        (0, r.jsx)(
                            u.P3F,
                            y(E({}, t), {
                                innerRef: B,
                                className: o()(m.overflow, G, A),
                                onFocus: D,
                                onClick: (e) => {
                                    null == P || P(e), U(!0);
                                },
                                "aria-label": h.intl.formatToPlainString(h.t.R8Z8Qr, { count: F }),
                                children: (0, r.jsx)(u.Text, {
                                    variant: e,
                                    color: S,
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
              "aria-label": x,
              "aria-labelledby": M,
              className: o()(b, m.avatars),
              "aria-hidden": j,
              children: [Y(), W()],
          });
}
