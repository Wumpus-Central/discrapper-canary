n.d(t, {
    R: () => w,
    Z: () => R,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(570908),
    f = n(204418),
    p = n(579407),
    _ = n(386725),
    h = n(821795),
    m = n(892567),
    g = n(731722),
    E = n(172751),
    b = n(150039),
    y = n(654904),
    O = n(271383),
    v = n(158776),
    S = n(359135),
    I = n(516817),
    T = n(388032),
    C = n(585633),
    A = n(460400),
    N = n(943549);
let P = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        small: c.EFr.SIZE_24,
        xsmall: c.EFr.SIZE_20,
        default: c.EFr.SIZE_32,
    },
    w = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: w,
                className: R,
                innerClassName: D,
                isHighlighted: x,
                showStatus: L,
                showPlaceholderUser: j,
                pendingGlobalName: M,
                pendingNickname: k,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: G,
                pendingPrimaryGuildId: Z,
                nameplatePreviewSize: F = "default",
                skipEffectDisplayName: B = !1,
                width: V,
            } = e,
            H = (0, u.ZP)(),
            Y = (0, l.wj)(H),
            W = null != a ? (0, p.E)(a) : w,
            K = (0, s.e7)([v.Z], () => (null != t ? v.Z.getStatus(t.id) : c.Skl.ONLINE)),
            z = Y ? "#706F74" : "#aaaab2",
            q = i.useRef(null),
            Q = (0, s.e7)([O.ZP], () => (null != n && null != t ? O.ZP.getMember(n, t.id) : null)),
            X =
                null != t
                    ? (0, y.Ly)({
                          pendingNickname: k,
                          pendingGlobalName: M,
                          user: t,
                          guildMember: Q,
                      })
                    : void 0,
            J = (0, b.Ys)({
                pendingValue: U,
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == Q ? void 0 : Q.avatarDecoration,
                guildId: n,
            }),
            $ = i.useMemo(() => P[F], [F]),
            ee = (0, _.Z)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: G,
            }),
            et = (0, g.oZ)(Z),
            en = i.useMemo(
                () =>
                    null != a
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: a.label })
                        : T.intl.string(T.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: {
                color: Y ? "white" : "black",
                width: null != V ? "".concat(V, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, C.nameplatePreview, {
                    [C.xsmall]: "xsmall" === F,
                    [C.small]: "small" === F,
                    [C.large]: "large" === F,
                    [C.xlarge]: "xlarge" === F,
                    [C.inheritWidth]: null != V,
                }),
                children: [
                    null != W &&
                        (0, r.jsx)(
                            I.Z,
                            {
                                nameplate: W,
                                hovered: x,
                                placement: S.i.PREVIEW,
                                content: j ? void 0 : q,
                            },
                            null == a ? void 0 : a.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: C.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(C.avatarContainer, !j && C.avatarVisible),
                                      children: (0, r.jsx)(d.Z, {
                                          ref: q,
                                          avatar: (0, r.jsx)(f.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: $,
                                              status: L ? K : void 0,
                                              avatarDecorationOverride: J,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(E.ZP, {
                                              primaryGuild: et,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: C.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(m.Z, {
                                              userName: X,
                                              displayNameStyles: ee,
                                              effectDisplayType: B ? h.F.PLAIN : h.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: D,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(C.avatarContainer, j && C.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: Y ? A : N,
                                        size: $,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: z,
                                        className: C.avatar,
                                    }),
                                    (0, r.jsx)("div", { className: C.placeholderUsername }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    R = w;
