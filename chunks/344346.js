n.d(t, { a: () => T, A: () => k });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(17928),
    o = n(462887),
    c = n(778712),
    d = n(652215),
    u = n(247928),
    m = n(97808),
    h = n(736653),
    f = n(262295),
    _ = n(609425),
    g = n(922301),
    p = n(368919),
    x = n(685073),
    E = n(534400),
    v = n(919395),
    A = n(252732),
    I = n(696451),
    b = n(290863),
    j = n(162232),
    C = n(88686),
    N = n(780898),
    S = n(174755),
    y = n(985018),
    R = n(136958);
let L = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    T = a.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: i,
                nameplateData: c,
                className: T,
                innerClassName: k,
                isHighlighted: w,
                showStatus: M,
                showPlaceholderUser: O,
                pendingGlobalName: G,
                pendingNickname: P,
                pendingAvatarDecoration: D,
                pendingDisplayNameStyles: U,
                pendingPrimaryGuildId: V,
                nameplatePreviewSize: F = "default",
                skipEffectDisplayName: W = !1,
                width: B,
            } = e,
            H = (0, h.Ay)(),
            Y = (0, o.M)(H),
            z = (0, N.WK)(i) ?? c,
            K = (0, s.bG)([b.A], () => (null != t ? b.A.getStatus(t.id) : d.clD.ONLINE)),
            Z = a.useRef(null),
            X = (0, s.bG)([I.Ay], () => (null != n && null != t ? I.Ay.getMember(n, t.id) : null)),
            J = null != t ? (0, A.eh)({ pendingNickname: P, pendingGlobalName: G, user: t, guildMember: X }) : void 0,
            $ = (0, v.lw)({
                pendingValue: D,
                userValue: t?.avatarDecoration,
                guildValue: X?.avatarDecoration,
                guildId: n,
            }),
            q = a.useMemo(() => L[F], [F]),
            Q = (0, _.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: U }),
            ee = (0, x.gS)(V),
            et = a.useMemo(
                () =>
                    null != i
                        ? y.intl.formatToPlainString(y.t.YJig7C, { a11y_text: i.label })
                        : y.intl.string(y.t.SZeUdR),
                [i],
            );
        return (0, l.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: Y ? "white" : "black", width: null != B ? `${B}px` : "100%" },
            children: (0, l.jsxs)(u.M, {
                className: r()(T, R.M4, {
                    [R.s]: "xsmall" === F,
                    [R.EX]: "small" === F,
                    [R.as]: "large" === F,
                    [R.AQ]: "xlarge" === F,
                    [R.gf]: null != B,
                }),
                children: [
                    null != z &&
                        (0, l.jsx)(
                            S.A,
                            { nameplate: z, hovered: w, placement: C.u.PREVIEW, content: O ? void 0 : Z },
                            i?.skuId,
                        ),
                    (0, l.jsxs)("div", {
                        className: R.MU,
                        children: [
                            null != t
                                ? (0, l.jsx)("div", {
                                      className: r()(R.H, !O && R.Mk),
                                      children: (0, l.jsx)(f.A, {
                                          ref: Z,
                                          avatar: (0, l.jsx)(j.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: q,
                                              status: M ? K : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, l.jsx)(E.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: R.id,
                                          }),
                                          name: (0, l.jsx)(p.A, {
                                              userName: J,
                                              displayNameStyles: Q,
                                              effectDisplayType: W ? g.G.PLAIN : g.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: k,
                                          withDisplayNameStyles: null != Q,
                                      }),
                                  })
                                : null,
                            (0, l.jsxs)("div", {
                                className: r()(R.H, O && R.Mk),
                                children: [
                                    (0, l.jsx)(m.eu, {
                                        src: Y ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: q,
                                        "aria-hidden": !0,
                                        status: d.clD.ONLINE,
                                        statusColor: Y ? "#706F74" : "#aaaab2",
                                        className: R.my,
                                    }),
                                    (0, l.jsx)("div", { className: R.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    k = T;
