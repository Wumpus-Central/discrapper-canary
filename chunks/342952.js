"use strict";
n.d(t, { A: () => R, I: () => N });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(990078),
    d = n(778712),
    u = n(97808),
    _ = n(834730),
    p = n(140735),
    f = n(305866),
    m = n(364522),
    h = n(922016),
    g = n(939249),
    b = n(442433),
    A = n(538451),
    E = n(562153),
    v = n(427262),
    I = n(985018),
    y = n(758963);
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d._3.SIZE_24;
    switch (e) {
        case d._3.SIZE_16:
            return y.nc;
        case d._3.SIZE_20:
            return y.qV;
        case d._3.SIZE_24:
        default:
            return y.q1;
    }
}
function S(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: a,
            channelId: i,
            size: s = d._3.SIZE_24,
            shouldShowOverflowCount: _,
            disableUsernameTooltip: p,
        } = e,
        f = x(s),
        m = _ ? n - 1 : Math.min(t.length, n),
        h = m - 1,
        g = o()(t)
            .take(m)
            .map((e, t) => {
                let n = E.Ay.getNickname(a, i, e) ?? v.Ay.getName(e),
                    o = l()(y.my, f, t === h && !_ && y.NE),
                    d = (0, r.jsx)(u.eu, { src: e.getAvatarURL(a, 24), size: s, "aria-hidden": !0 });
                return (0, r.jsx)(
                    "li",
                    {
                        className: o,
                        children: p
                            ? (0, r.jsx)("span", { role: "img", "aria-label": n, children: d })
                            : (0, r.jsx)(c.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: d }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("ul", { className: y.HD, children: g });
}
function T(e) {
    let { count: t, textVariant: n, color: a = "interactive-text-default", size: i = d._3.SIZE_24, className: s } = e,
        o = x(i),
        c =
            n ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d._3.SIZE_24;
                switch (e) {
                    case d._3.SIZE_16:
                    case d._3.SIZE_20:
                        return "text-xxs/semibold";
                    case d._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(i);
    return (0, r.jsxs)(_.E, {
        variant: c,
        color: a,
        className: l()(y.ju, o, s),
        children: [
            (0, r.jsx)(p.A, { children: I.intl.formatToPlainString(I.t.RGr9tj, { count: t }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function C(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: a,
            channelId: i,
            size: l = d._3.SIZE_24,
            overflowCountClassName: s,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        u = t.length - n,
        _ = u > 0 && !c;
    return t.length <= 0
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(S, {
                      users: t,
                      maxUsers: n,
                      guildId: a,
                      channelId: i,
                      size: l,
                      shouldShowOverflowCount: _,
                      disableUsernameTooltip: !0,
                  }),
                  _ && (0, r.jsx)(T, { count: u + 1, color: o, size: l, className: s }),
              ],
          });
}
function N(e) {
    let { className: t, "aria-label": n, "aria-labelledby": a, "aria-hidden": i, ...s } = e;
    return (0, r.jsx)("div", {
        role: "group",
        className: l()(t, y.HD),
        "aria-label": n,
        "aria-labelledby": a,
        "aria-hidden": i,
        children: (0, r.jsx)(C, { ...s }),
    });
}
function R(e) {
    let {
            users: t,
            maxUsers: i,
            guildId: s,
            channelId: o,
            className: c,
            size: u = d._3.SIZE_24,
            overflowCountVariant: _,
            overflowCountColor: p = "interactive-text-default",
            overflowCountClassName: v,
            hideOverflowCount: x = !1,
            disableUsernameTooltip: C = !1,
            disableUserPopout: N = !1,
            onClickOverflow: R,
            onFocusOverflow: w,
            onUserClick: L,
            onUserPopoutRequestClose: M,
            "aria-label": O,
            "aria-labelledby": D,
            "aria-hidden": P,
        } = e,
        [j, k] = a.useState(!1),
        U = a.useRef(null),
        F = t.length - i,
        B = F + 1,
        G = F > 0 && !x && !P;
    return t.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-label": O,
              "aria-labelledby": D,
              className: l()(c, y.HD),
              "aria-hidden": P,
              children: [
                  (0, r.jsx)(S, {
                      users: t,
                      maxUsers: i,
                      guildId: s,
                      channelId: o,
                      size: u,
                      shouldShowOverflowCount: G,
                      disableUsernameTooltip: C,
                  }),
                  G
                      ? (0, r.jsx)(
                            h.Y,
                            {
                                targetElementRef: U,
                                renderPopout: () =>
                                    (0, r.jsx)(f.l, {
                                        className: y.XM,
                                        "aria-label": O,
                                        "aria-labelledby": D,
                                        children: (0, r.jsx)(m.Ip, {
                                            className: y.XG,
                                            children: t.map((e) =>
                                                (0, r.jsx)(
                                                    A.A,
                                                    {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: o,
                                                        nick: E.Ay.getNickname(s, o, e),
                                                        disablePopout: "function" == typeof N ? N(e.id) : N,
                                                        onClick: L,
                                                        onPopoutRequestClose: () => {
                                                            k(!1), M?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, b.L3)(
                                                                t,
                                                                async () => {
                                                                    let { default: t } = await Promise.all([
                                                                        n.e("97262"),
                                                                        n.e("88017"),
                                                                        n.e("24170"),
                                                                        n.e("32418"),
                                                                        n.e("66961"),
                                                                    ]).then(n.bind(n, 668569));
                                                                    return (n) =>
                                                                        (0, r.jsx)(t, {
                                                                            ...n,
                                                                            user: e,
                                                                            guildId: s,
                                                                            channelId: o,
                                                                        });
                                                                },
                                                                { onClose: () => k(!1) },
                                                            ),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    }),
                                shouldShow: j,
                                position: "bottom",
                                onRequestClose: () => k(!1),
                                children: (e) =>
                                    (0, r.jsx)(g.D, {
                                        ...e,
                                        innerRef: U,
                                        className: y.x6,
                                        onFocus: w,
                                        onClick: (e) => {
                                            R?.(e), k(!0);
                                        },
                                        "aria-label": I.intl.formatToPlainString(I.t.R8Z8Qr, { count: B }),
                                        children: (0, r.jsx)(T, {
                                            count: B,
                                            textVariant: _,
                                            color: p,
                                            size: u,
                                            className: v,
                                        }),
                                    }),
                            },
                            "overflow",
                        )
                      : null,
              ],
          });
}
