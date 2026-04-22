n.d(t, { AV: () => P, Ay: () => M, P4: () => U, kD: () => w, sM: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    d = n(3026),
    c = n(990078),
    u = n(821609),
    h = n(192308),
    A = n(187322),
    _ = n(939249),
    m = n(847374),
    g = n(499373),
    p = n(285796),
    f = n(983851),
    E = n(914430),
    x = n(442433),
    I = n(676002),
    C = n(47167),
    b = n(485947),
    N = n(924985),
    S = n(71393),
    v = n(576705),
    T = n(543465),
    y = n(551851),
    R = n(879124),
    j = n(652215),
    L = n(985018),
    O = n(546980);
function G(e) {
    e.stopPropagation();
}
let D = l.memo(function (e) {
        let t,
            {
                channel: s,
                connectChannelDragSource: u,
                connectChannelDropTarget: p,
                disableManageChannels: f,
                position: I,
                sortingPosition: y,
                hideIcon: R,
                children: D,
            } = e,
            M = (0, o.bG)([T.Ay], () => T.Ay.isChannelMuted(s.getGuildId(), s.id)),
            U = (0, o.bG)([N.A], () => N.A.isCollapsed(s.id)),
            P = (0, o.bG)([v.A], () => v.A.can(j.xBc.MANAGE_CHANNELS, s)),
            w = (0, C.Ay)(s);
        t = null != y ? (I > y ? O.mU : O.TR) : O.fx;
        let k = l.useCallback(() => {
                U ? (0, E.fh)(s.id) : (0, E.Gv)(s.id);
            }, [s.id, U]),
            V = l.useCallback(
                (e) => {
                    if ("null" !== s.id) {
                        let t = S.A.getGuild(s.getGuildId());
                        null != t &&
                            (0, x.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("75149"), n.e("30997")]).then(
                                    n.bind(n, 725756),
                                );
                                return (n) => (0, i.jsx)(e, { ...n, channel: s, guild: t });
                            });
                    }
                },
                [s],
            ),
            B = l.useCallback(() => {
                let e = s.type === j.rbe.GUILD_CATEGORY ? null : s.type,
                    t = s.getGuildId();
                null != t &&
                    (0, h.openModalLazy)(async () => {
                        let { default: l } = await Promise.all([n.e("64233"), n.e("40988")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== s.id ? s.id : null,
                            });
                    });
            }, [s]),
            { role: H, tabIndex: F, ...W } = (0, r.rm)(s.id),
            Y = l.useRef(null),
            K = l.useRef(null),
            z = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": w,
                children: [
                    (0, i.jsx)(A.vN, {
                        focusTarget: Y,
                        ringTarget: K,
                        offset: { left: 4, right: 4 },
                        children: (0, i.jsxs)("div", {
                            ref: K,
                            className: a()(O.Ki, O.iE, { [O.yZ]: U, [O.SU]: M, [O.vk]: !0 }),
                            onContextMenu: V,
                            children: [
                                (0, i.jsxs)(_.D, {
                                    innerRef: Y,
                                    className: O.rb,
                                    tabIndex: F,
                                    ...W,
                                    onClick: k,
                                    "aria-label": L.intl.formatToPlainString(L.t.y5l3J2, { categoryName: w }),
                                    "aria-expanded": !U,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            className: O.UU,
                                            children: (0, i.jsx)(d.A, { children: w }),
                                        }),
                                        R
                                            ? null
                                            : (0, i.jsx)(m.a, { size: "md", color: "currentColor", className: O.Kk }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    onClick: G,
                                    className: O.Y_,
                                    children:
                                        P && !f
                                            ? (0, i.jsx)(c.m, {
                                                  text: L.intl.string(L.t["fUYU+j"]),
                                                  children: (0, i.jsx)(_.D, {
                                                      className: a()(O.c9, O.ih),
                                                      onClick: B,
                                                      tabIndex: F,
                                                      role: "button",
                                                      "aria-label": L.intl.string(L.t["fUYU+j"]),
                                                      children: (0, i.jsx)(g.T, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: O.hs,
                                                      }),
                                                  }),
                                              })
                                            : null,
                                }),
                            ],
                        }),
                    }),
                    D,
                ],
            });
        return null != p && null != u ? p(u(z)) : z;
    }),
    M = (0, I.a)(D),
    U = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)("li", {
            className: a()(l, O.fx),
            children: (0, i.jsxs)("div", {
                className: a()(O.Ki, O._V),
                children: [
                    (0, i.jsx)("div", {
                        className: O.rb,
                        children: (0, i.jsx)(b.A, { className: O.UU, children: (0, i.jsx)(d.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, i.jsx)(c.m, {
                              asContainer: !0,
                              text: L.intl.string(L.t["5qNmsU"]),
                              children: (0, i.jsx)(_.D, {
                                  className: O.r,
                                  onClick: n,
                                  children: (0, i.jsx)(p.a, { size: "md", color: "currentColor", className: O.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    P = l.memo(function (e) {
        let { category: t } = e,
            n = (0, o.bG)([y.A], () => y.A.isVoiceCategoryCollapsed(t.guild.id)),
            s = l.useCallback(() => {
                n ? (0, R.T)(t.guild.id) : (0, R.E)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: O.oA,
            children: (0, i.jsx)(u.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: s,
                icon: f.H,
                text: n ? L.intl.string(L.t["/eB9Bg"]) : L.intl.string(L.t.Q2gPWl),
            }),
        });
    }),
    w = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, o.bG)([y.A], () => y.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === j.rbe.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)("li", {
                      className: O.fx,
                      children: (0, i.jsx)("div", {
                          className: a()(O.Ki, O._V),
                          children: (0, i.jsx)(b.A, {
                              className: O.UU,
                              children: (0, i.jsx)(d.A, { children: L.intl.string(L.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, i.jsx)("div", { style: { height: 16 } });
    }),
    k = l.memo(function (e) {
        let { channel: t } = e,
            n = (0, C.Ay)(t);
        return (0, i.jsx)("li", {
            className: O.fx,
            children: (0, i.jsx)("div", {
                className: a()(O.Ki, O._V),
                children: (0, i.jsx)(b.A, { className: O.UU, children: (0, i.jsx)(d.A, { children: n }) }),
            }),
        });
    });
