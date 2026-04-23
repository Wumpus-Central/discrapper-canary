"use strict";
n.d(t, { A: () => b, I: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(990078),
    c = n(778712),
    d = n(97808),
    _ = n(834730),
    f = n(140735),
    p = n(305866),
    h = n(573613),
    E = n(265872),
    m = n(939249),
    g = n(442433),
    A = n(538451),
    I = n(562153),
    T = n(427262),
    S = n(985018),
    y = n(758963);
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c._3.SIZE_24;
    switch (e) {
        case c._3.SIZE_16:
            return y.nc;
        case c._3.SIZE_20:
            return y.qV;
        case c._3.SIZE_24:
        default:
            return y.q1;
    }
}
function v(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
            channelId: s,
            size: o = c._3.SIZE_24,
            shouldShowOverflowCount: _,
            disableUsernameTooltip: f,
        } = e,
        p = N(o),
        h = _ ? n - 1 : Math.min(t.length, n),
        E = h - 1,
        m = l()(t)
            .take(h)
            .map((e, t) => {
                let n = I.Ay.getNickname(i, s, e) ?? T.Ay.getName(e),
                    l = a()(y.my, p, t === E && !_ && y.NE),
                    c = (0, r.jsx)(d.eu, { src: e.getAvatarURL(i, 24), size: o, "aria-hidden": !0 });
                return (0, r.jsx)(
                    "li",
                    {
                        className: l,
                        children: f
                            ? (0, r.jsx)("span", { role: "img", "aria-label": n, children: c })
                            : (0, r.jsx)(u.m, {
                                  text: n,
                                  ariaHidden: !0,
                                  children: (0, r.jsx)("span", { role: "img", "aria-label": n, children: c }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("ul", { className: y.HD, children: m });
}
function C(e) {
    let { count: t, textVariant: n, color: i = "interactive-text-default", size: s = c._3.SIZE_24, className: o } = e,
        l = N(s),
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
    return (0, r.jsxs)(_.E, {
        variant: u,
        color: i,
        className: a()(y.ju, l, o),
        children: [
            (0, r.jsx)(f.A, { children: S.intl.formatToPlainString(S.t.RGr9tj, { count: t }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function O(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: i,
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
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(v, {
                      users: t,
                      maxUsers: n,
                      guildId: i,
                      channelId: s,
                      size: a,
                      shouldShowOverflowCount: _,
                      disableUsernameTooltip: !0,
                  }),
                  _ && (0, r.jsx)(C, { count: d + 1, color: l, size: a, className: o }),
              ],
          });
}
function R(e) {
    let { className: t, "aria-label": n, "aria-labelledby": i, "aria-hidden": s, ...o } = e;
    return (0, r.jsx)("div", {
        role: "group",
        className: a()(t, y.HD),
        "aria-label": n,
        "aria-labelledby": i,
        "aria-hidden": s,
        children: (0, r.jsx)(O, { ...o }),
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
            hideOverflowCount: N = !1,
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
        [k, U] = i.useState(!1),
        G = i.useRef(null),
        F = t.length - s,
        V = F + 1,
        B = F > 0 && !N && !x;
    return t.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              role: "group",
              "aria-label": M,
              "aria-labelledby": P,
              className: a()(u, y.HD),
              "aria-hidden": x,
              children: [
                  (0, r.jsx)(v, {
                      users: t,
                      maxUsers: s,
                      guildId: o,
                      channelId: l,
                      size: d,
                      shouldShowOverflowCount: B,
                      disableUsernameTooltip: O,
                  }),
                  B
                      ? (0, r.jsx)(
                            E.Y,
                            {
                                targetElementRef: G,
                                renderPopout: () =>
                                    (0, r.jsx)(p.l, {
                                        className: y.XM,
                                        "aria-label": M,
                                        "aria-labelledby": P,
                                        children: (0, r.jsx)(h.Ip, {
                                            className: y.XG,
                                            children: t.map((e) =>
                                                (0, r.jsx)(
                                                    A.A,
                                                    {
                                                        user: e,
                                                        guildId: o,
                                                        channelId: l,
                                                        nick: I.Ay.getNickname(o, l, e),
                                                        disablePopout: "function" == typeof R ? R(e.id) : R,
                                                        onClick: L,
                                                        onPopoutRequestClose: () => {
                                                            U(!1), w?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, g.L3)(
                                                                t,
                                                                async () => {
                                                                    let { default: t } = await Promise.all([
                                                                        n.e("97262"),
                                                                        n.e("92493"),
                                                                        n.e("53635"),
                                                                        n.e("32418"),
                                                                        n.e("72090"),
                                                                    ]).then(n.bind(n, 668569));
                                                                    return (n) =>
                                                                        (0, r.jsx)(t, {
                                                                            ...n,
                                                                            user: e,
                                                                            guildId: o,
                                                                            channelId: l,
                                                                        });
                                                                },
                                                                { onClose: () => U(!1) },
                                                            ),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    }),
                                shouldShow: k,
                                position: "bottom",
                                onRequestClose: () => U(!1),
                                children: (e) =>
                                    (0, r.jsx)(m.D, {
                                        ...e,
                                        innerRef: G,
                                        className: y.x6,
                                        onFocus: D,
                                        onClick: (e) => {
                                            b?.(e), U(!0);
                                        },
                                        "aria-label": S.intl.formatToPlainString(S.t.R8Z8Qr, { count: V }),
                                        children: (0, r.jsx)(C, {
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
