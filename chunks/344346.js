a.d(t, { a: () => N, A: () => k });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(17928),
    o = a(462887),
    c = a(778712),
    d = a(652215),
    u = a(247928),
    h = a(97808),
    p = a(736653),
    m = a(262295),
    f = a(609425),
    _ = a(922301),
    b = a(368919),
    g = a(685073),
    x = a(534400),
    v = a(919395),
    A = a(252732),
    E = a(696451),
    y = a(290863),
    I = a(162232),
    S = a(88686),
    j = a(780898),
    C = a(174755),
    T = a(985018),
    w = a(136958);
let R = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    N = l.memo(function (e) {
        let {
                user: t,
                guildId: a,
                nameplate: r,
                nameplateData: c,
                className: N,
                innerClassName: k,
                isHighlighted: L,
                showStatus: O,
                showPlaceholderUser: M,
                pendingGlobalName: P,
                pendingNickname: D,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: V,
                pendingPrimaryGuildId: F,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: G = !1,
                width: H,
            } = e,
            W = (0, p.Ay)(),
            Z = (0, o.M)(W),
            z = (0, j.WK)(r) ?? c,
            K = (0, s.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : d.clD.ONLINE)),
            Y = l.useRef(null),
            X = (0, s.bG)([E.Ay], () => (null != a && null != t ? E.Ay.getMember(a, t.id) : null)),
            J = null != t ? (0, A.eh)({ pendingNickname: D, pendingGlobalName: P, user: t, guildMember: X }) : void 0,
            $ = (0, v.lw)({
                pendingValue: U,
                userValue: t?.avatarDecoration,
                guildValue: X?.avatarDecoration,
                guildId: a,
            }),
            q = l.useMemo(() => R[B], [B]),
            Q = (0, f.A)({ userId: t?.id, guildId: a, pendingDisplayNameStyles: V }),
            ee = (0, g.gS)(F),
            et = l.useMemo(
                () =>
                    null != r
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: r.label })
                        : T.intl.string(T.t.SZeUdR),
                [r],
            );
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: Z ? "white" : "black", width: null != H ? `${H}px` : "100%" },
            children: (0, n.jsxs)(u.M, {
                className: i()(N, w.M4, {
                    [w.s]: "xsmall" === B,
                    [w.EX]: "small" === B,
                    [w.as]: "large" === B,
                    [w.AQ]: "xlarge" === B,
                    [w.gf]: null != H,
                }),
                children: [
                    null != z &&
                        (0, n.jsx)(
                            C.A,
                            { nameplate: z, hovered: L, placement: S.u.PREVIEW, content: M ? void 0 : Y },
                            r?.skuId,
                        ),
                    (0, n.jsxs)("div", {
                        className: w.MU,
                        children: [
                            null != t
                                ? (0, n.jsx)("div", {
                                      className: i()(w.H, !M && w.Mk),
                                      children: (0, n.jsx)(m.A, {
                                          ref: Y,
                                          avatar: (0, n.jsx)(I.A, {
                                              user: t,
                                              guildId: a,
                                              avatarSize: q,
                                              status: O ? K : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, n.jsx)(x.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: a,
                                              className: w.id,
                                          }),
                                          name: (0, n.jsx)(b.A, {
                                              userName: J,
                                              displayNameStyles: Q,
                                              effectDisplayType: G ? _.G.PLAIN : _.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: k,
                                          withDisplayNameStyles: null != Q,
                                      }),
                                  })
                                : null,
                            (0, n.jsxs)("div", {
                                className: i()(w.H, M && w.Mk),
                                children: [
                                    (0, n.jsx)(h.eu, {
                                        src: Z ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: q,
                                        "aria-hidden": !0,
                                        status: d.clD.ONLINE,
                                        statusColor: Z ? "#706F74" : "#aaaab2",
                                        className: w.my,
                                    }),
                                    (0, n.jsx)("div", { className: w.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    k = N;
