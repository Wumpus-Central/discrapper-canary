n.d(t, { A: () => M, a: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(462887),
    d = n(778712),
    c = n(652215),
    u = n(247928),
    h = n(97808),
    A = n(736653),
    _ = n(262295),
    m = n(609425),
    g = n(922301),
    p = n(750112),
    f = n(685073),
    E = n(534400),
    x = n(919395),
    I = n(385612),
    C = n(696451),
    b = n(290863),
    N = n(162232),
    S = n(88686),
    v = n(780898),
    T = n(214881),
    y = n(985018),
    j = n(136958),
    R = n(16533),
    L = n(312653);
let O = { xlarge: d._3.SIZE_48, large: d._3.SIZE_40, small: d._3.SIZE_24, xsmall: d._3.SIZE_20, default: d._3.SIZE_32 },
    G = l.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: s,
                nameplateData: d,
                className: G,
                innerClassName: M,
                isHighlighted: D,
                showStatus: U,
                showPlaceholderUser: P,
                pendingGlobalName: w,
                pendingNickname: k,
                pendingAvatarDecoration: V,
                pendingDisplayNameStyles: B,
                pendingPrimaryGuildId: H,
                nameplatePreviewSize: F = "default",
                skipEffectDisplayName: W = !1,
                width: Y,
            } = e,
            K = (0, A.Ay)(),
            z = (0, o.M)(K),
            q = (0, v.WK)(s) ?? d,
            X = (0, r.bG)([b.A], () => (null != t ? b.A.getStatus(t.id) : c.clD.ONLINE)),
            Q = l.useRef(null),
            Z = (0, r.bG)([C.Ay], () => (null != n && null != t ? C.Ay.getMember(n, t.id) : null)),
            J = null != t ? (0, I.eh)({ pendingNickname: k, pendingGlobalName: w, user: t, guildMember: Z }) : void 0,
            $ = (0, x.lw)({
                pendingValue: V,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            ee = l.useMemo(() => O[F], [F]),
            et = (0, m.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: B }),
            en = (0, f.gS)(H),
            ei = l.useMemo(
                () =>
                    null != s
                        ? y.intl.formatToPlainString(y.t.YJig7C, { a11y_text: s.label })
                        : y.intl.string(y.t.SZeUdR),
                [s],
            );
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": ei,
            style: { color: z ? "white" : "black", width: null != Y ? `${Y}px` : "100%" },
            children: (0, i.jsxs)(u.M, {
                className: a()(G, j.M4, {
                    [j.s]: "xsmall" === F,
                    [j.EX]: "small" === F,
                    [j.as]: "large" === F,
                    [j.AQ]: "xlarge" === F,
                    [j.gf]: null != Y,
                }),
                children: [
                    null != q &&
                        (0, i.jsx)(
                            T.A,
                            { nameplate: q, hovered: D, placement: S.u.PREVIEW, content: P ? void 0 : Q },
                            s?.skuId,
                        ),
                    (0, i.jsxs)("div", {
                        className: j.MU,
                        children: [
                            null != t
                                ? (0, i.jsx)("div", {
                                      className: a()(j.H, !P && j.Mk),
                                      children: (0, i.jsx)(_.A, {
                                          ref: Q,
                                          avatar: (0, i.jsx)(N.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: ee,
                                              status: U ? X : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, i.jsx)(E.Ay, {
                                              primaryGuild: en,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: j.id,
                                          }),
                                          name: (0, i.jsx)(p.A, {
                                              userName: J,
                                              displayNameStyles: et,
                                              effectDisplayType: W ? g.G.PLAIN : g.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: M,
                                          withDisplayNameStyles: null != et,
                                      }),
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: a()(j.H, P && j.Mk),
                                children: [
                                    (0, i.jsx)(h.eu, {
                                        src: z ? R : L,
                                        size: ee,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: z ? "#706F74" : "#aaaab2",
                                        className: j.my,
                                    }),
                                    (0, i.jsx)("div", { className: j.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    M = G;
