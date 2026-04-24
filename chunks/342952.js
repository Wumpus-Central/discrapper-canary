n.d(t, { A: () => C, I: () => j });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(990078),
    u = n(778712),
    d = n(97808),
    h = n(834730),
    g = n(140735),
    f = n(305866),
    m = n(364522),
    v = n(922016),
    _ = n(939249),
    p = n(442433),
    I = n(538451),
    x = n(562153),
    A = n(427262),
    b = n(985018),
    E = n(758963);
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._3.SIZE_24;
    switch (e) {
        case u._3.SIZE_16:
            return E.nc;
        case u._3.SIZE_20:
            return E.qV;
        case u._3.SIZE_24:
        default:
            return E.q1;
    }
}
function D(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: a,
            channelId: i,
            size: s = u._3.SIZE_24,
            shouldShowOverflowCount: h,
            disableUsernameTooltip: g,
        } = e,
        f = S(s),
        m = h ? n - 1 : Math.min(t.length, n),
        v = m - 1,
        _ = o()(t)
            .take(m)
            .map((e, t) => {
                let n = x.Ay.getNickname(a, i, e) ?? A.Ay.getName(e),
                    o = r()(E.my, f, t === v && !h && E.NE),
                    u = (0, l.jsx)(d.eu, { src: e.getAvatarURL(a, 24), size: s, "aria-hidden": !0 });
                return (0, l.jsx)(
                    "li",
                    {
                        className: o,
                        children: g
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
    return (0, l.jsx)("ul", { className: E.HD, children: _ });
}
function y(e) {
    let { count: t, textVariant: n, color: a = "interactive-text-default", size: i = u._3.SIZE_24, className: s } = e,
        o = S(i),
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
            })(i);
    return (0, l.jsxs)(h.E, {
        variant: c,
        color: a,
        className: r()(E.ju, o, s),
        children: [
            (0, l.jsx)(g.A, { children: b.intl.formatToPlainString(b.t.RGr9tj, { count: t }) }),
            (0, l.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function w(e) {
    let {
            users: t,
            maxUsers: n,
            guildId: a,
            channelId: i,
            size: r = u._3.SIZE_24,
            overflowCountClassName: s,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        d = t.length - n,
        h = d > 0 && !c;
    return t.length <= 0
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(D, {
                      users: t,
                      maxUsers: n,
                      guildId: a,
                      channelId: i,
                      size: r,
                      shouldShowOverflowCount: h,
                      disableUsernameTooltip: !0,
                  }),
                  h && (0, l.jsx)(y, { count: d + 1, color: o, size: r, className: s }),
              ],
          });
}
function j(e) {
    let { className: t, "aria-label": n, "aria-labelledby": a, "aria-hidden": i, ...s } = e;
    return (0, l.jsx)("div", {
        role: "group",
        className: r()(t, E.HD),
        "aria-label": n,
        "aria-labelledby": a,
        "aria-hidden": i,
        children: (0, l.jsx)(w, { ...s }),
    });
}
function C(e) {
    let {
            users: t,
            maxUsers: i,
            guildId: s,
            channelId: o,
            className: c,
            size: d = u._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: g = "interactive-text-default",
            overflowCountClassName: A,
            hideOverflowCount: S = !1,
            disableUsernameTooltip: w = !1,
            disableUserPopout: j = !1,
            onClickOverflow: C,
            onFocusOverflow: R,
            onUserClick: N,
            onUserPopoutRequestClose: L,
            "aria-label": M,
            "aria-labelledby": P,
            "aria-hidden": T,
        } = e,
        [O, U] = a.useState(!1),
        k = a.useRef(null),
        Z = t.length - i,
        V = Z + 1,
        G = Z > 0 && !S && !T;
    return t.length <= 0
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-label": M,
              "aria-labelledby": P,
              className: r()(c, E.HD),
              "aria-hidden": T,
              children: [
                  (0, l.jsx)(D, {
                      users: t,
                      maxUsers: i,
                      guildId: s,
                      channelId: o,
                      size: d,
                      shouldShowOverflowCount: G,
                      disableUsernameTooltip: w,
                  }),
                  G
                      ? (0, l.jsx)(
                            v.Y,
                            {
                                targetElementRef: k,
                                renderPopout: () =>
                                    (0, l.jsx)(f.l, {
                                        className: E.XM,
                                        "aria-label": M,
                                        "aria-labelledby": P,
                                        children: (0, l.jsx)(m.Ip, {
                                            className: E.XG,
                                            children: t.map((e) =>
                                                (0, l.jsx)(
                                                    I.A,
                                                    {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: o,
                                                        nick: x.Ay.getNickname(s, o, e),
                                                        disablePopout: "function" == typeof j ? j(e.id) : j,
                                                        onClick: N,
                                                        onPopoutRequestClose: () => {
                                                            U(!1), L?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, p.L3)(
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
                                                                            guildId: s,
                                                                            channelId: o,
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
                                shouldShow: O,
                                position: "bottom",
                                onRequestClose: () => U(!1),
                                children: (e) =>
                                    (0, l.jsx)(_.D, {
                                        ...e,
                                        innerRef: k,
                                        className: E.x6,
                                        onFocus: R,
                                        onClick: (e) => {
                                            C?.(e), U(!0);
                                        },
                                        "aria-label": b.intl.formatToPlainString(b.t.R8Z8Qr, { count: V }),
                                        children: (0, l.jsx)(y, {
                                            count: V,
                                            textVariant: h,
                                            color: g,
                                            size: d,
                                            className: A,
                                        }),
                                    }),
                            },
                            "overflow",
                        )
                      : null,
              ],
          });
}
