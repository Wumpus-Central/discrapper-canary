n.d(t, {
    R: () => P,
    Z: () => R,
});
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(570908),
    f = n(204418),
    p = n(579407),
    _ = n(386725),
    m = n(821795),
    h = n(892567),
    g = n(172751),
    E = n(150039),
    b = n(654904),
    y = n(271383),
    O = n(158776),
    v = n(359135),
    S = n(516817),
    I = n(388032),
    T = n(63053),
    C = n(460400),
    A = n(943549);
let N = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        small: c.EFr.SIZE_24,
        xsmall: c.EFr.SIZE_20,
        default: c.EFr.SIZE_32,
    },
    P = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: o,
                nameplateData: P,
                className: R,
                innerClassName: w,
                isHighlighted: D,
                showStatus: x,
                showPlaceholderUser: L,
                pendingGlobalName: j,
                pendingNickname: M,
                pendingAvatarDecoration: k,
                pendingDisplayNameStyles: U,
                nameplatePreviewSize: G = "default",
                isPurchased: Z = !1,
                skipEffectDisplayName: F = !1,
                width: B,
            } = e,
            V = (0, u.ZP)(),
            H = (0, l.wj)(V),
            Y = null != o ? (0, p.E)(o) : P,
            W = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            K = H ? "#706F74" : "#aaaab2",
            z = i.useRef(null),
            q = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            Q =
                null != t
                    ? (0, b.Ly)({
                          pendingNickname: M,
                          pendingGlobalName: j,
                          user: t,
                          guildMember: q,
                      })
                    : void 0,
            X = (0, E.Ys)({
                pendingValue: k,
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == q ? void 0 : q.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => N[G], [G]),
            $ = (0, _.Z)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: U,
            }),
            ee = i.useMemo(
                () =>
                    null != o
                        ? I.intl.formatToPlainString(I.t.YJig7C, { a11y_text: o.label })
                        : I.intl.string(I.t.SZeUdR),
                [o],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ee,
            style: {
                color: H ? "white" : "black",
                width: null != B ? "".concat(B, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: a()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: Z && !D,
                    [T.xsmall]: "xsmall" === G,
                    [T.small]: "small" === G,
                    [T.large]: "large" === G,
                    [T.xlarge]: "xlarge" === G,
                    [T.inheritWidth]: null != B,
                }),
                children: [
                    null != Y &&
                        (0, r.jsx)(
                            S.Z,
                            {
                                nameplate: Y,
                                hovered: D,
                                placement: v.i.PREVIEW,
                                content: L ? void 0 : z,
                            },
                            null == o ? void 0 : o.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: a()(T.avatarContainer, !L && T.avatarVisible),
                                      children: (0, r.jsx)(d.Z, {
                                          ref: z,
                                          avatar: (0, r.jsx)(f.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: x ? W : void 0,
                                              avatarDecorationOverride: X,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(g.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(h.Z, {
                                              userName: Q,
                                              displayNameStyles: $,
                                              effectDisplayType: F ? m.F.PLAIN : m.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != $,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: a()(T.avatarContainer, L && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: H ? C : A,
                                        size: J,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: K,
                                        className: T.avatar,
                                    }),
                                    (0, r.jsx)("div", { className: T.placeholderUsername }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    R = P;
