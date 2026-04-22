"use strict";
n.d(t, { A: () => j, I: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(990078),
    u = n(778712),
    d = n(97808),
    h = n(834730),
    m = n(140735),
    p = n(305866),
    f = n(573613),
    g = n(265872),
    _ = n(939249),
    x = n(442433),
    A = n(538451),
    C = n(562153),
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
function S(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: l,
            channelId: s,
            size: a = u._3.SIZE_24,
            shouldShowOverflowCount: h,
            disableUsernameTooltip: m,
        } = e,
        p = y(a),
        f = h ? n - 1 : Math.min(t.length, n),
        g = f - 1,
        _ = o()(t)
            .take(f)
            .map((e, t) => {
                let n = C.Ay.getNickname(l, s, e) ?? E.Ay.getName(e),
                    o = r()(v.my, p, t === g && !h && v.NE),
                    u = (0, i.jsx)(d.eu, { src: e.getAvatarURL(l, 24), size: a, "aria-hidden": !0 });
                return (0, i.jsx)(
                    "li",
                    {
                        className: o,
                        children: m
                            ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: u })
                            : (0, i.jsx)(c.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: u }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("ul", { className: v.HD, children: _ });
}
function b(e) {
    let { count: t, textVariant: n, color: l = "interactive-text-default", size: s = u._3.SIZE_24, className: a } = e,
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
    return (0, i.jsxs)(h.E, {
        variant: c,
        color: l,
        className: r()(v.ju, o, a),
        children: [
            (0, i.jsx)(m.A, { children: I.intl.formatToPlainString(I.t.RGr9tj, { count: t }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function N(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: l,
            channelId: s,
            size: r = u._3.SIZE_24,
            overflowCountClassName: a,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        d = t.length - n,
        h = d > 0 && !c;
    return t.length <= 0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S, {
                      users: t,
                      maxUsers: n,
                      guildId: l,
                      channelId: s,
                      size: r,
                      shouldShowOverflowCount: h,
                      disableUsernameTooltip: !0,
                  }),
                  h && (0, i.jsx)(b, { count: d + 1, color: o, size: r, className: a }),
              ],
          });
}
function T(e) {
    let { className: t, "aria-label": n, "aria-labelledby": l, "aria-hidden": s, ...a } = e;
    return (0, i.jsx)("div", {
        role: "group",
        className: r()(t, v.HD),
        "aria-label": n,
        "aria-labelledby": l,
        "aria-hidden": s,
        children: (0, i.jsx)(N, { ...a }),
    });
}
function j(e) {
    let {
            users: t,
            maxUsers: s,
            guildId: a,
            channelId: o,
            className: c,
            size: d = u._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: m = "interactive-text-default",
            overflowCountClassName: E,
            hideOverflowCount: y = !1,
            disableUsernameTooltip: N = !1,
            disableUserPopout: T = !1,
            onClickOverflow: j,
            onFocusOverflow: R,
            onUserClick: w,
            onUserPopoutRequestClose: L,
            "aria-label": M,
            "aria-labelledby": k,
            "aria-hidden": O,
        } = e,
        [P, D] = l.useState(!1),
        U = l.useRef(null),
        V = t.length - s,
        G = V + 1,
        F = V > 0 && !y && !O;
    return t.length <= 0
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-label": M,
              "aria-labelledby": k,
              className: r()(c, v.HD),
              "aria-hidden": O,
              children: [
                  (0, i.jsx)(S, {
                      users: t,
                      maxUsers: s,
                      guildId: a,
                      channelId: o,
                      size: d,
                      shouldShowOverflowCount: F,
                      disableUsernameTooltip: N,
                  }),
                  F
                      ? (0, i.jsx)(
                            g.Y,
                            {
                                targetElementRef: U,
                                renderPopout: () =>
                                    (0, i.jsx)(p.l, {
                                        className: v.XM,
                                        "aria-label": M,
                                        "aria-labelledby": k,
                                        children: (0, i.jsx)(f.Ip, {
                                            className: v.XG,
                                            children: t.map((e) =>
                                                (0, i.jsx)(
                                                    A.A,
                                                    {
                                                        user: e,
                                                        guildId: a,
                                                        channelId: o,
                                                        nick: C.Ay.getNickname(a, o, e),
                                                        disablePopout: "function" == typeof T ? T(e.id) : T,
                                                        onClick: w,
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
                                                                        n.e("92493"),
                                                                        n.e("53635"),
                                                                        n.e("32418"),
                                                                        n.e("67464"),
                                                                    ]).then(n.bind(n, 668569));
                                                                    return (n) =>
                                                                        (0, i.jsx)(t, {
                                                                            ...n,
                                                                            user: e,
                                                                            guildId: a,
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
                                    (0, i.jsx)(_.D, {
                                        ...e,
                                        innerRef: U,
                                        className: v.x6,
                                        onFocus: R,
                                        onClick: (e) => {
                                            j?.(e), D(!0);
                                        },
                                        "aria-label": I.intl.formatToPlainString(I.t.R8Z8Qr, { count: G }),
                                        children: (0, i.jsx)(b, {
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
