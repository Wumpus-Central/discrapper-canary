a.d(t, { A: () => w, I: () => T });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(735438),
    o = a.n(s),
    c = a(990078),
    d = a(778712),
    u = a(97808),
    h = a(834730),
    p = a(140735),
    m = a(305866),
    f = a(364522),
    _ = a(922016),
    b = a(939249),
    g = a(442433),
    x = a(538451),
    v = a(562153),
    A = a(427262),
    E = a(985018),
    y = a(758963);
function I() {
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
            maxUsers: a,
            guildId: l,
            channelId: r,
            size: s = d._3.SIZE_24,
            shouldShowOverflowCount: h,
            disableUsernameTooltip: p,
        } = e,
        m = I(s),
        f = h ? a - 1 : Math.min(t.length, a),
        _ = f - 1,
        b = o()(t)
            .take(f)
            .map((e, t) => {
                let a = v.Ay.getNickname(l, r, e) ?? A.Ay.getName(e),
                    o = i()(y.my, m, t === _ && !h && y.NE),
                    d = (0, n.jsx)(u.eu, { src: e.getAvatarURL(l, 24), size: s, "aria-hidden": !0 });
                return (0, n.jsx)(
                    "li",
                    {
                        className: o,
                        children: p
                            ? (0, n.jsx)("span", { role: "img", "aria-label": a, children: d })
                            : (0, n.jsx)(c.m, {
                                  text: a,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)("span", { role: "img", "aria-label": a, children: d }),
                              }),
                    },
                    e.id,
                );
            })
            .value();
    return (0, n.jsx)("ul", { className: y.HD, children: b });
}
function j(e) {
    let { count: t, textVariant: a, color: l = "interactive-text-default", size: r = d._3.SIZE_24, className: s } = e,
        o = I(r),
        c =
            a ??
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
            })(r);
    return (0, n.jsxs)(h.E, {
        variant: c,
        color: l,
        className: i()(y.ju, o, s),
        children: [
            (0, n.jsx)(p.A, { children: E.intl.formatToPlainString(E.t.RGr9tj, { count: t }) }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: t > 99 ? ">99" : `+${t}` }),
        ],
    });
}
function C(e) {
    let {
            users: t,
            maxUsers: a,
            guildId: l,
            channelId: r,
            size: i = d._3.SIZE_24,
            overflowCountClassName: s,
            overflowCountColor: o = "interactive-text-default",
            hideOverflowCount: c = !1,
        } = e,
        u = t.length - a,
        h = u > 0 && !c;
    return t.length <= 0
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(S, {
                      users: t,
                      maxUsers: a,
                      guildId: l,
                      channelId: r,
                      size: i,
                      shouldShowOverflowCount: h,
                      disableUsernameTooltip: !0,
                  }),
                  h && (0, n.jsx)(j, { count: u + 1, color: o, size: i, className: s }),
              ],
          });
}
function T(e) {
    let { className: t, "aria-label": a, "aria-labelledby": l, "aria-hidden": r, ...s } = e;
    return (0, n.jsx)("div", {
        role: "group",
        className: i()(t, y.HD),
        "aria-label": a,
        "aria-labelledby": l,
        "aria-hidden": r,
        children: (0, n.jsx)(C, { ...s }),
    });
}
function w(e) {
    let {
            users: t,
            maxUsers: r,
            guildId: s,
            channelId: o,
            className: c,
            size: u = d._3.SIZE_24,
            overflowCountVariant: h,
            overflowCountColor: p = "interactive-text-default",
            overflowCountClassName: A,
            hideOverflowCount: I = !1,
            disableUsernameTooltip: C = !1,
            disableUserPopout: T = !1,
            onClickOverflow: w,
            onFocusOverflow: R,
            onUserClick: N,
            onUserPopoutRequestClose: k,
            "aria-label": L,
            "aria-labelledby": O,
            "aria-hidden": M,
        } = e,
        [P, D] = l.useState(!1),
        U = l.useRef(null),
        V = t.length - r,
        F = V + 1,
        B = V > 0 && !I && !M;
    return t.length <= 0
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-label": L,
              "aria-labelledby": O,
              className: i()(c, y.HD),
              "aria-hidden": M,
              children: [
                  (0, n.jsx)(S, {
                      users: t,
                      maxUsers: r,
                      guildId: s,
                      channelId: o,
                      size: u,
                      shouldShowOverflowCount: B,
                      disableUsernameTooltip: C,
                  }),
                  B
                      ? (0, n.jsx)(
                            _.Y,
                            {
                                targetElementRef: U,
                                renderPopout: () =>
                                    (0, n.jsx)(m.l, {
                                        className: y.XM,
                                        "aria-label": L,
                                        "aria-labelledby": O,
                                        children: (0, n.jsx)(f.Ip, {
                                            className: y.XG,
                                            children: t.map((e) =>
                                                (0, n.jsx)(
                                                    x.A,
                                                    {
                                                        user: e,
                                                        guildId: s,
                                                        channelId: o,
                                                        nick: v.Ay.getNickname(s, o, e),
                                                        disablePopout: "function" == typeof T ? T(e.id) : T,
                                                        onClick: N,
                                                        onPopoutRequestClose: () => {
                                                            D(!1), k?.();
                                                        },
                                                        onContextMenu: (t) =>
                                                            (0, g.L3)(
                                                                t,
                                                                async () => {
                                                                    let { default: t } = await Promise.all([
                                                                        a.e("97262"),
                                                                        a.e("88017"),
                                                                        a.e("24170"),
                                                                        a.e("32418"),
                                                                        a.e("66961"),
                                                                    ]).then(a.bind(a, 668569));
                                                                    return (a) =>
                                                                        (0, n.jsx)(t, {
                                                                            ...a,
                                                                            user: e,
                                                                            guildId: s,
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
                                    (0, n.jsx)(b.D, {
                                        ...e,
                                        innerRef: U,
                                        className: y.x6,
                                        onFocus: R,
                                        onClick: (e) => {
                                            w?.(e), D(!0);
                                        },
                                        "aria-label": E.intl.formatToPlainString(E.t.R8Z8Qr, { count: F }),
                                        children: (0, n.jsx)(j, {
                                            count: F,
                                            textVariant: h,
                                            color: p,
                                            size: u,
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
