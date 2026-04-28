"use strict";
n.d(t, { A: () => T, I: () => j });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(990078),
    u = n(778712),
    d = n(97808),
    h = n(834730),
    m = n(140735),
    p = n(305866),
    f = n(364522),
    g = n(922016),
    _ = n(939249),
    x = n(442433),
    C = n(538451),
    A = n(562153),
    E = n(427262),
    I = n(985018),
    v = n(758963);
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._3.SIZE_24;
    switch (e) {
        case u._3.SIZE_16:
            return v.nc;
        case u._3.SIZE_20:
            return v.qV;
        case u._3.SIZE_24:
        default:
            return v.q1;
    }
}
function b(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: s,
            size: r = u._3.SIZE_24,
            shouldShowOverflowCount: h,
            disableUsernameTooltip: m,
        } = e,
        p = y(r),
        f = h ? n - 1 : Math.min(t.length, n),
        g = f - 1,
        _ = o()(t)
            .take(f)
            .map((e, t) => {
                let n = A.Ay.getNickname(i, s, e) ?? E.Ay.getName(e),
                    o = a()(v.my, p, t === g && !h && v.NE),
                    u = (0, l.jsx)(d.eu, { src: e.getAvatarURL(i, 24), size: r, "aria-hidden": !0 });
                return (0, l.jsx)(
                    "li",
                    {
                        className: o,
                        children: m
                            ? (0, l.jsx)("span", { role: "img", "aria-label": n, children: u })
                            : (0, l.jsx)(c.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, l.jsx)("span", { role: "img", "aria-label": n, children: u }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, l.jsx)("ul", { className: v.HD, children: _ });
}
function S(e) {
    let { count: t, textVariant: n, color: i = "interactive-text-default", size: s = u._3.SIZE_24, className: r } = e,
        o = y(s),
        c =
            n ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._3.SIZE_24;
                switch (e) {
                    case u._3.SIZE_16:
                    case u._3.SIZE_20:
                        return "text-xxs/semibold";
                    case u._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(s);
    return (0, l.jsxs)(h.E, {
        variant: c,
        color: i,
        className: a()(v.ju, o, r),
        children: [
            (0, l.jsx)(m.A, { children: I.intl.formatToPlainString(I.t.RGr9tj, { count: t }) }),
            (0, l.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function N(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: s,
            size: a = u._3.SIZE_24,
            overflowCountClassName: r,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        d = t.length - n,
        h = d > 0 && !c;
    return t.length <= 0
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(b, {
                      users: t,
                      maxUsers: n,
                      guildId: i,
                      channelId: s,
                      size: a,
                      shouldShowOverflowCount: h,
                      disableUsernameTooltip: !0,
                  }),
                  h && (0, l.jsx)(S, { count: d + 1, color: o, size: a, className: r }),
              ],
          });
}
function j(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, "aria-hidden": s, ...r } = e;
    return (0, l.jsx)("div", {
        role: "group",
        className: a()(t, v.HD),
        "aria-label": n,
        "aria-labelledby": i,
        "aria-hidden": s,
        children: (0, l.jsx)(N, { ...r }),
    });
}
function T(e) {
    let {
            users: t,
            maxUsers: s,
            guildId: r,
            channelId: o,
            className: c,
            size: d = u._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: m = "interactive-text-default",
            overflowCountClassName: E,
            hideOverflowCount: y = !1,
            disableUsernameTooltip: N = !1,
            disableUserPopout: j = !1,
            onClickOverflow: T,
            onFocusOverflow: w,
            onUserClick: R,
            onUserPopoutRequestClose: L,
            "aria-label": k,
            "aria-labelledby": M,
            "aria-hidden": O,
        } = e,
        [P, D] = i.useState(!1),
        U = i.useRef(null),
        V = t.length - s,
        G = V + 1,
        F = V > 0 && !y && !O;
    return t.length <= 0
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-label": k,
              "aria-labelledby": M,
              className: a()(c, v.HD),
              "aria-hidden": O,
              children: [
                  (0, l.jsx)(b, {
                      users: t,
                      maxUsers: s,
                      guildId: r,
                      channelId: o,
                      size: d,
                      shouldShowOverflowCount: F,
                      disableUsernameTooltip: N,
                  }),
                  F
                      ? (0, l.jsx)(
                            g.Y,
                            {
                                targetElementRef: U,
                                renderPopout: () =>
                                    (0, l.jsx)(p.l, {
                                        className: v.XM,
                                        "aria-label": k,
                                        "aria-labelledby": M,
                                        children: (0, l.jsx)(f.Ip, {
                                            className: v.XG,
                                            children: t.map((e) =>
                                                (0, l.jsx)(
                                                    C.A,
                                                    {
                                                        user: e,
                                                        guildId: r,
                                                        channelId: o,
                                                        nick: A.Ay.getNickname(r, o, e),
                                                        disablePopout: "function" == typeof j ? j(e.id) : j,
                                                        onClick: R,
                                                        onPopoutRequestClose: () => {
                                                            D(!1), L?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, x.L3)(
                                                                t,
                                                                async () => {
                                                                    let { default: t } = await Promise.all([
                                                                        n.e("97262"),
                                                                        n.e("88017"),
                                                                        n.e("24170"),
                                                                        n.e("32418"),
                                                                        n.e("4467"),
                                                                    ]).then(n.bind(n, 668569));
                                                                    return (n) =>
                                                                        (0, l.jsx)(t, {
                                                                            ...n,
                                                                            user: e,
                                                                            guildId: r,
                                                                            channelId: o,
                                                                        });
                                                                },
                                                                { onClose: () => D(!1) },
                                                            ),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    }),
                                shouldShow: P,
                                position: "bottom",
                                onRequestClose: () => D(!1),
                                children: (e) =>
                                    (0, l.jsx)(_.D, {
                                        ...e,
                                        innerRef: U,
                                        className: v.x6,
                                        onFocus: w,
                                        onClick: (e) => {
                                            T?.(e), D(!0);
                                        },
                                        "aria-label": I.intl.formatToPlainString(I.t.R8Z8Qr, { count: G }),
                                        children: (0, l.jsx)(S, {
                                            count: G,
                                            textVariant: h,
                                            color: m,
                                            size: d,
                                            className: E,
                                        }),
                                    }),
                            },
                            "overflow",
                        )
                      : null,
              ],
          });
}
