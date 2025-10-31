n.d(t, { Z: () => R });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(579407),
    _ = n(386725),
    p = n(821795),
    h = n(892567),
    m = n(172751),
    g = n(150039),
    E = n(654904),
    b = n(210887),
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
        default: c.EFr.SIZE_32,
    },
    R = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: R,
                className: P,
                innerClassName: w,
                isHighlighted: D,
                showStatus: x,
                showPlaceholderUser: L,
                pendingGlobalName: M,
                pendingNickname: j,
                pendingAvatarDecoration: k,
                pendingDisplayNameStyles: U,
                nameplatePreviewSize: G = "default",
                isPurchased: B = !1,
                skipEffectDisplayName: Z = !1,
                width: F,
            } = e,
            V = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            H = null != a ? (0, f.EU)(a) : R,
            Y = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            W = V ? "#706F74" : "#aaaab2",
            K = i.useRef(null),
            z = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            q =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: j,
                          pendingGlobalName: M,
                          user: t,
                          guildMember: z,
                      })
                    : void 0,
            X = (0, g.Ys)({
                pendingValue: k,
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == z ? void 0 : z.avatarDecoration,
                guildId: n,
            }),
            Q = i.useMemo(() => N[G], [G]),
            J = (0, _.Z)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: U,
            }),
            $ = i.useMemo(
                () =>
                    null != a
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: a.label })
                        : T.intl.string(T.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": $,
            style: {
                color: V ? "white" : "black",
                width: null != F ? "".concat(F, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(P, S.nameplatePreview, {
                    [S.nameplatePurchased]: B && !D,
                    [S.large]: "large" === G,
                    [S.xlarge]: "xlarge" === G,
                    [S.inheritWidth]: null != F,
                }),
                children: [
                    null != H &&
                        (0, r.jsx)(
                            I.Z,
                            {
                                nameplate: H,
                                hovered: D,
                                placement: v.i.PREVIEW,
                                content: L ? void 0 : K,
                            },
                            null == a ? void 0 : a.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: S.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(S.avatarContainer, !L && S.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: K,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: Q,
                                              status: x ? Y : void 0,
                                              avatarDecorationOverride: X,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(m.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: S.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(h.Z, {
                                              userName: q,
                                              displayNameStyles: J,
                                              effectDisplayType: Z ? p.F.PLAIN : p.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != J,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(S.avatarContainer, L && S.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: V ? A : C,
                                        size: Q,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: W,
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
    });
