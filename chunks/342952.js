"use strict";
n.d(t, { A: () => b, I: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(778712),
    d = n(97808),
    _ = n(834730),
    f = n(140735),
    h = n(305866),
    p = n(364522),
    E = n(922016),
    m = n(939249),
    g = n(442433),
    A = n(538451),
    I = n(562153),
    T = n(427262),
    S = n(375708),
    N = n(758963);
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
    switch (e) {
        case c._3.SIZE_16:
            return N.nc;
        case c._3.SIZE_20:
            return N.qV;
        case c._3.SIZE_24:
        default:
            return N.q1;
    }
}
function C(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: s,
            size: o = c._3.SIZE_24,
            shouldShowOverflowCount: _,
            disableUsernameTooltip: f,
        } = e,
        h = y(o),
        p = _ ? n - 1 : Math.min(t.length, n),
        E = p - 1,
        m = l()(t)
            .take(p)
            .map((e, t) => {
                let n = I.Ay.getNickname(r, s, e) ?? T.Ay.getName(e),
                    l = a()(N.my, h, t === E && !_ && N.NE),
                    c = (0, i.jsx)(d.eu, { src: e.getAvatarURL(r, 24), size: o, "aria-hidden": !0 });
                return (0, i.jsx)(
                    "li",
                    {
                        className: l,
                        children: f
                            ? (0, i.jsx)("span", { role: "img", "aria-label": n, children: c })
                            : (0, i.jsx)(u.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)("span", { role: "img", "aria-label": n, children: c }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("ul", { className: N.HD, children: m });
}
function v(e) {
    let { count: t, textVariant: n, color: r = "interactive-text-default", size: s = c._3.SIZE_24, className: o } = e,
        l = y(s),
        u =
            n ??
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
                switch (e) {
                    case c._3.SIZE_16:
                    case c._3.SIZE_20:
                        return "text-xxs/semibold";
                    case c._3.SIZE_24:
                    default:
                        return "text-xs/medium";
                }
            })(s);
    return (0, i.jsxs)(_.E, {
        variant: u,
        color: r,
        className: a()(N.ju, l, o),
        children: [
            (0, i.jsx)(f.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: t }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function O(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: r,
            channelId: s,
            size: a = c._3.SIZE_24,
            overflowCountClassName: o,
            overflowCountColor: l = "interactive-text-default",
            hideOverflowCount: u = !1,
        } = e,
        d = t.length - n,
        _ = d > 0 && !u;
    return t.length <= 0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(C, {
                      users: t,
                      maxUsers: n,
                      guildId: r,
                      channelId: s,
                      size: a,
                      shouldShowOverflowCount: _,
                      disableUsernameTooltip: !0,
                  }),
                  _ && (0, i.jsx)(v, { count: d + 1, color: l, size: a, className: o }),
              ],
          });
}
function R(e) {
    let { className: t, "aria-label": n, "aria-labelledby": r, "aria-hidden": s, ...o } = e;
    return (0, i.jsx)("div", {
        role: "group",
        className: a()(t, N.HD),
        "aria-label": n,
        "aria-labelledby": r,
        "aria-hidden": s,
        children: (0, i.jsx)(O, { ...o }),
    });
}
function b(e) {
    let {
            users: t,
            maxUsers: s,
            guildId: o,
            channelId: l,
            className: u,
            size: d = c._3.SIZE_24,
            overflowCountVariant: _,
            overflowCountColor: f = "interactive-text-default",
            overflowCountClassName: T,
            hideOverflowCount: y = !1,
            disableUsernameTooltip: O = !1,
            disableUserPopout: R = !1,
            onClickOverflow: b,
            onFocusOverflow: D,
            onUserClick: L,
            onUserPopoutRequestClose: w,
            "aria-label": M,
            "aria-labelledby": P,
            "aria-hidden": x,
        } = e,
        [U, k] = r.useState(!1),
        G = r.useRef(null),
        F = t.length - s,
        V = F + 1,
        B = F > 0 && !y && !x;
    return t.length <= 0
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-label": M,
              "aria-labelledby": P,
              className: a()(u, N.HD),
              "aria-hidden": x,
              children: [
                  (0, i.jsx)(C, {
                      users: t,
                      maxUsers: s,
                      guildId: o,
                      channelId: l,
                      size: d,
                      shouldShowOverflowCount: B,
                      disableUsernameTooltip: O,
                  }),
                  B
                      ? (0, i.jsx)(
                            E.Y,
                            {
                                targetElementRef: G,
                                renderPopout: () =>
                                    (0, i.jsx)(h.l, {
                                        className: N.XM,
                                        "aria-label": M,
                                        "aria-labelledby": P,
                                        children: (0, i.jsx)(p.Ip, {
                                            className: N.XG,
                                            children: t.map((e) =>
                                                (0, i.jsx)(
                                                    A.A,
                                                    {
                                                        user: e,
                                                        guildId: o,
                                                        channelId: l,
                                                        nick: I.Ay.getNickname(o, l, e),
                                                        disablePopout: "function" == typeof R ? R(e.id) : R,
                                                        onClick: L,
                                                        onPopoutRequestClose: () => {
                                                            k(!1), w?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, g.L3)(
                                                                t,
                                                                async () => {
                                                                    let { default: t } = await Promise.all([
                                                                        n.e("80203"),
                                                                        n.e("25719"),
                                                                        n.e("26132"),
                                                                        n.e("46652"),
                                                                        n.e("93190"),
                                                                        n.e("34552"),
                                                                        n.e("8757"),
                                                                        n.e("34530"),
                                                                        n.e("89673"),
                                                                        n.e("85968"),
                                                                        n.e("60195"),
                                                                        n.e("68403"),
                                                                        n.e("29787"),
                                                                        n.e("97558"),
                                                                        n.e("94000"),
                                                                        n.e("91994"),
                                                                        n.e("76665"),
                                                                        n.e("36320"),
                                                                        n.e("90889"),
                                                                        n.e("96443"),
                                                                        n.e("76273"),
                                                                        n.e("24198"),
                                                                        n.e("56753"),
                                                                        n.e("25486"),
                                                                        n.e("14461"),
                                                                        n.e("72883"),
                                                                        n.e("49644"),
                                                                        n.e("42204"),
                                                                        n.e("83972"),
                                                                        n.e("32418"),
                                                                    ]).then(n.bind(n, 668569));
                                                                    return (n) =>
                                                                        (0, i.jsx)(t, {
                                                                            ...n,
                                                                            user: e,
                                                                            guildId: o,
                                                                            channelId: l,
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
                                shouldShow: U,
                                position: "bottom",
                                onRequestClose: () => k(!1),
                                children: (e) =>
                                    (0, i.jsx)(m.D, {
                                        ...e,
                                        innerRef: G,
                                        className: N.x6,
                                        onFocus: D,
                                        onClick: (e) => {
                                            b?.(e), k(!0);
                                        },
                                        "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: V }),
                                        children: (0, i.jsx)(v, {
                                            count: V,
                                            textVariant: _,
                                            color: f,
                                            size: d,
                                            className: T,
                                        }),
                                    }),
                            },
                            "overflow",
                        )
                      : null,
              ],
          });
}
