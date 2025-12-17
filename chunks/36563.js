n.d(t, {
    Z: () => P,
    g: () => N,
}),
    n(388685);
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
    h = n(826529);
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
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S() {
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
function I() {
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
function T(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: a,
            size: s = u.EFr.SIZE_24,
            shouldShowOverflowCount: d,
            disableUsernameTooltip: f,
        } = e,
        m = S(s),
        g = d ? n - 1 : Math.min(t.length, n),
        E = g - 1,
        b = l()(t)
            .take(g)
            .map((e, t) => {
                let n = p.ZP.getNickname(i, a, e),
                    l = null != n ? n : _.ZP.getName(e),
                    g = t === E && !d,
                    b = o()(h.avatar, m, g && h.isLast),
                    y = (0, r.jsx)(u.qEK, {
                        src: e.getAvatarURL(i, 24),
                        size: s,
                        "aria-hidden": !0,
                    });
                return (0, r.jsx)(
                    "li",
                    {
                        className: b,
                        children: f
                            ? (0, r.jsx)("span", {
                                  role: "img",
                                  "aria-label": l,
                                  children: y,
                              })
                            : (0, r.jsx)(c.u, {
                                  text: l,
                                  ariaHidden: !0,
                                  children: (0, r.jsx)("span", {
                                      role: "img",
                                      "aria-label": l,
                                      children: y,
                                  }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("ul", {
        className: h.avatars,
        children: b,
    });
}
function C(e) {
    let { count: t, textVariant: n, color: i = "interactive-text-default", size: a = u.EFr.SIZE_24, className: s } = e,
        l = S(a),
        c = null != n ? n : I(a);
    return (0, r.jsxs)(u.Text, {
        variant: c,
        color: i,
        className: o()(h.overflow, l, s),
        children: [
            (0, r.jsx)(u.nn4, { children: m.intl.formatToPlainString(m.t.RGr9tj, { count: t }) }),
            (0, r.jsx)("span", {
                "aria-hidden": !0,
                children: t > 99 ? ">99" : "+".concat(t),
            }),
        ],
    });
}
function A(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: a,
            size: o = u.EFr.SIZE_24,
            overflowCountClassName: s,
            overflowCountColor: l = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        d = t.length - n,
        f = d + 1,
        p = d > 0 && !c;
    return t.length <= 0
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T, {
                      users: t,
                      maxUsers: n,
                      guildId: i,
                      channelId: a,
                      size: o,
                      shouldShowOverflowCount: p,
                      disableUsernameTooltip: !0,
                  }),
                  p &&
                      (0, r.jsx)(C, {
                          count: f,
                          color: l,
                          size: o,
                          className: s,
                      }),
              ],
          });
}
function N(e) {
    var { className: t, "aria-label": n, "aria-labelledby": i, "aria-hidden": a } = e,
        s = O(e, ["className", "aria-label", "aria-labelledby", "aria-hidden"]);
    return (0, r.jsx)("div", {
        role: "group",
        className: o()(t, h.avatars),
        "aria-label": n,
        "aria-labelledby": i,
        "aria-hidden": a,
        children: (0, r.jsx)(A, E({}, s)),
    });
}
function P(e) {
    let {
            users: t,
            maxUsers: a,
            guildId: s,
            channelId: l,
            className: c,
            size: _ = u.EFr.SIZE_24,
            overflowCountVariant: g,
            overflowCountColor: b = "interactive-text-default",
            overflowCountClassName: O,
            hideOverflowCount: v = !1,
            disableUsernameTooltip: S = !1,
            disableUserPopout: I = !1,
            onClickOverflow: A,
            onFocusOverflow: N,
            onUserClick: P,
            onUserPopoutRequestClose: R,
            "aria-label": w,
            "aria-labelledby": D,
            "aria-hidden": x,
        } = e,
        [L, j] = i.useState(!1),
        M = i.useRef(null),
        k = t.length - a,
        U = k + 1,
        G = k > 0 && !v && !x,
        Z = () =>
            (0, r.jsx)(u.VqE, {
                className: h.popoutWrapper,
                "aria-label": w,
                "aria-labelledby": D,
                children: (0, r.jsx)(u.Ttm, {
                    className: h.scroller,
                    children: t.map((e) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                user: e,
                                guildId: s,
                                channelId: l,
                                nick: p.ZP.getNickname(s, l, e),
                                disablePopout: "function" == typeof I ? I(e.id) : I,
                                onClick: P,
                                onPopoutRequestClose: () => {
                                    j(!1), null == R || R();
                                },
                                onContextMenu: (t) =>
                                    (0, d.jW)(
                                        t,
                                        async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("79695"),
                                                n.e("69220"),
                                                n.e("26465"),
                                            ]).then(n.bind(n, 881351));
                                            return (n) =>
                                                (0, r.jsx)(
                                                    t,
                                                    y(E({}, n), {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: l,
                                                    }),
                                                );
                                        },
                                        { onClose: () => j(!1) },
                                    ),
                            },
                            e.id,
                        ),
                    ),
                }),
            }),
        F = () =>
            G
                ? (0, r.jsx)(
                      u.yRy,
                      {
                          targetElementRef: M,
                          renderPopout: Z,
                          shouldShow: L,
                          position: "bottom",
                          onRequestClose: () => j(!1),
                          children: (e) =>
                              (0, r.jsx)(
                                  u.P3F,
                                  y(E({}, e), {
                                      innerRef: M,
                                      className: h.button,
                                      onFocus: N,
                                      onClick: (e) => {
                                          null == A || A(e), j(!0);
                                      },
                                      "aria-label": m.intl.formatToPlainString(m.t.R8Z8Qr, { count: U }),
                                      children: (0, r.jsx)(C, {
                                          count: U,
                                          textVariant: g,
                                          color: b,
                                          size: _,
                                          className: O,
                                      }),
                                  }),
                              ),
                      },
                      "overflow",
                  )
                : null;
    return t.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-label": w,
              "aria-labelledby": D,
              className: o()(c, h.avatars),
              "aria-hidden": x,
              children: [
                  (0, r.jsx)(T, {
                      users: t,
                      maxUsers: a,
                      guildId: s,
                      channelId: l,
                      size: _,
                      shouldShowOverflowCount: G,
                      disableUsernameTooltip: S,
                  }),
                  F(),
              ],
          });
}
