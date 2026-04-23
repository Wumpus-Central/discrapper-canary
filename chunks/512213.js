l.d(t, { A: () => L, a: () => O });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(311907),
    c = l(462887),
    o = l(778712),
    u = l(652215),
    d = l(247928),
    m = l(97808),
    A = l(736653),
    p = l(262295),
    _ = l(609425),
    h = l(922301),
    g = l(750112),
    f = l(685073),
    x = l(534400),
    E = l(919395),
    I = l(385612),
    v = l(696451),
    C = l(290863),
    b = l(162232),
    N = l(88686),
    y = l(780898),
    T = l(214881),
    j = l(985018),
    R = l(741246),
    w = l(16533),
    M = l(312653);
let S = { xlarge: o._3.SIZE_48, large: o._3.SIZE_40, small: o._3.SIZE_24, xsmall: o._3.SIZE_20, default: o._3.SIZE_32 },
    O = a.memo(function (e) {
        let {
                user: t,
                guildId: l,
                nameplate: s,
                nameplateData: o,
                className: O,
                innerClassName: L,
                isHighlighted: P,
                showStatus: U,
                showPlaceholderUser: D,
                pendingGlobalName: k,
                pendingNickname: G,
                pendingAvatarDecoration: H,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: B,
                nameplatePreviewSize: V = "default",
                skipEffectDisplayName: z = !1,
                width: K,
            } = e,
            Z = (0, A.Ay)(),
            W = (0, c.M)(Z),
            J = (0, y.WK)(s) ?? o,
            $ = (0, i.bG)([C.A], () => (null != t ? C.A.getStatus(t.id) : u.clD.ONLINE)),
            X = a.useRef(null),
            Q = (0, i.bG)([v.Ay], () => (null != l && null != t ? v.Ay.getMember(l, t.id) : null)),
            q = null != t ? (0, I.eh)({ pendingNickname: G, pendingGlobalName: k, user: t, guildMember: Q }) : void 0,
            Y = (0, E.lw)({
                pendingValue: H,
                userValue: t?.avatarDecoration,
                guildValue: Q?.avatarDecoration,
                guildId: l,
            }),
            ee = a.useMemo(() => S[V], [V]),
            et = (0, _.A)({ userId: t?.id, guildId: l, pendingDisplayNameStyles: F }),
            el = (0, f.gS)(B),
            er = a.useMemo(
                () =>
                    null != s
                        ? j.intl.formatToPlainString(j.t.YJig7C, { a11y_text: s.label })
                        : j.intl.string(j.t.SZeUdR),
                [s],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": er,
            style: { color: W ? "white" : "black", width: null != K ? `${K}px` : "100%" },
            children: (0, r.jsxs)(d.M, {
                className: n()(O, R.M4, {
                    [R.s]: "xsmall" === V,
                    [R.EX]: "small" === V,
                    [R.as]: "large" === V,
                    [R.AQ]: "xlarge" === V,
                    [R.gf]: null != K,
                }),
                children: [
                    null != J &&
                        (0, r.jsx)(
                            T.A,
                            { nameplate: J, hovered: P, placement: N.u.PREVIEW, content: D ? void 0 : X },
                            s?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: R.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: n()(R.H, !D && R.Mk),
                                      children: (0, r.jsx)(p.A, {
                                          ref: X,
                                          avatar: (0, r.jsx)(b.A, {
                                              user: t,
                                              guildId: l,
                                              avatarSize: ee,
                                              status: U ? $ : void 0,
                                              avatarDecorationOverride: Y,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(x.Ay, {
                                              primaryGuild: el,
                                              userId: t.id,
                                              contextGuildId: l,
                                              className: R.id,
                                          }),
                                          name: (0, r.jsx)(g.A, {
                                              userName: q,
                                              displayNameStyles: et,
                                              effectDisplayType: z ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: L,
                                          withDisplayNameStyles: null != et,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: n()(R.H, D && R.Mk),
                                children: [
                                    (0, r.jsx)(m.eu, {
                                        src: W ? w : M,
                                        size: ee,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: W ? "#706F74" : "#aaaab2",
                                        className: R.my,
                                    }),
                                    (0, r.jsx)("div", { className: R.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    L = O;
