n.d(t, {
    R: () => R,
    Z: () => P,
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
    _ = n(579407),
    p = n(386725),
    h = n(821795),
    m = n(892567),
    g = n(172751),
    E = n(150039),
    b = n(654904),
    y = n(271383),
    O = n(158776),
    v = n(359135),
    I = n(516817),
    T = n(388032),
    S = n(63053),
    A = n(460400),
    C = n(943549);
let N = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        small: c.EFr.SIZE_24,
        xsmall: c.EFr.SIZE_20,
        default: c.EFr.SIZE_32,
    },
    R = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: R,
                className: P,
                innerClassName: D,
                isHighlighted: w,
                showStatus: L,
                showPlaceholderUser: x,
                pendingGlobalName: M,
                pendingNickname: j,
                pendingAvatarDecoration: k,
                pendingDisplayNameStyles: U,
                nameplatePreviewSize: G = "default",
                isPurchased: B = !1,
                skipEffectDisplayName: Z = !1,
                width: F,
            } = e,
            V = (0, u.ZP)(),
            H = (0, l.wj)(V),
            Y = null != a ? (0, _.EU)(a) : R,
            W = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            K = H ? "#706F74" : "#aaaab2",
            z = i.useRef(null),
            q = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            X =
                null != t
                    ? (0, b.Ly)({
                          pendingNickname: j,
                          pendingGlobalName: M,
                          user: t,
                          guildMember: q,
                      })
                    : void 0,
            Q = (0, E.Ys)({
                pendingValue: k,
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == q ? void 0 : q.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => N[G], [G]),
            $ = (0, p.Z)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: U,
            }),
            ee = i.useMemo(
                () =>
                    null != a
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: a.label })
                        : T.intl.string(T.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ee,
            style: {
                color: H ? "white" : "black",
                width: null != F ? "".concat(F, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(P, S.nameplatePreview, {
                    [S.nameplatePurchased]: B && !w,
                    [S.xsmall]: "xsmall" === G,
                    [S.small]: "small" === G,
                    [S.large]: "large" === G,
                    [S.xlarge]: "xlarge" === G,
                    [S.inheritWidth]: null != F,
                }),
                children: [
                    null != Y &&
                        (0, r.jsx)(
                            I.Z,
                            {
                                nameplate: Y,
                                hovered: w,
                                placement: v.i.PREVIEW,
                                content: x ? void 0 : z,
                            },
                            null == a ? void 0 : a.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: S.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(S.avatarContainer, !x && S.avatarVisible),
                                      children: (0, r.jsx)(d.Z, {
                                          ref: z,
                                          avatar: (0, r.jsx)(f.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: L ? W : void 0,
                                              avatarDecorationOverride: Q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(g.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: S.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(m.Z, {
                                              userName: X,
                                              displayNameStyles: $,
                                              effectDisplayType: Z ? h.F.PLAIN : h.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: D,
                                          withDisplayNameStyles: null != $,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(S.avatarContainer, x && S.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: H ? A : C,
                                        size: J,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: K,
                                        className: S.avatar,
                                    }),
                                    (0, r.jsx)("div", { className: S.placeholderUsername }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    P = R;
