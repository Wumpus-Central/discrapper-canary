n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(570908),
    d = n(204418),
    f = n(181430),
    _ = n(821795),
    p = n(892567),
    h = n(172751),
    m = n(359135),
    g = n(516817),
    E = n(654904),
    b = n(210887),
    y = n(271383),
    O = n(158776),
    v = n(579407),
    I = n(388032),
    T = n(198921),
    S = n(460400),
    A = n(943549);
let C = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32,
    },
    N = (e) => {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: N,
                className: R,
                innerClassName: P,
                isHighlighted: w,
                showStatus: D,
                showPlaceholderUser: x,
                pendingGlobalName: L,
                pendingDisplayNameStyles: j,
                nameplatePreviewSize: M = "default",
                isPurchased: k = !1,
                avatarDecorationOverride: U,
            } = e,
            G = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            B = null != a ? (0, v.EU)(a) : N,
            Z = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            V = G ? "#706F74" : "#aaaab2",
            F = i.useRef(null),
            H = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            Y =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: L,
                          user: t,
                          guildMember: H,
                      })
                    : void 0,
            W = C[M],
            K = (0, f.Y)({ location: "NameplatePreview" }),
            z = void 0 !== j ? j : null == t ? void 0 : t.displayNameStyles;
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": I.intl.string(I.t.SZeUdX),
            style: {
                color: G ? "white" : "black",
                width: "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: k && !w,
                    [T.large]: "large" === M,
                    [T.xlarge]: "xlarge" === M,
                }),
                children: [
                    null != B &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: B,
                                hovered: w,
                                placement: m.i.PREVIEW,
                                content: x ? void 0 : F,
                            },
                            null == a ? void 0 : a.id,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(T.avatarContainer, !x && T.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: F,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: W,
                                              status: D ? Z : void 0,
                                              "aria-hidden": !0,
                                              avatarDecorationOverride: null != U ? { asset: U.asset } : void 0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: Y,
                                              displayNameStyles: z,
                                              effectDisplayType: _.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: K && null != z,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(T.avatarContainer, x && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: G ? S : A,
                                        size: W,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: V,
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
    };
