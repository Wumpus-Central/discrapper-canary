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
                avatarDecorationOverride: M,
                nameplatePreviewSize: k = "default",
                isPurchased: U = !1,
                skipEffectDisplayName: G = !1,
            } = e,
            B = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            Z = null != a ? (0, v.EU)(a) : N,
            V = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            F = B ? "#706F74" : "#aaaab2",
            H = i.useRef(null),
            Y = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            W =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: L,
                          user: t,
                          guildMember: Y,
                      })
                    : void 0,
            K = C[k],
            z = (0, f.Y)({ location: "NameplatePreview" }),
            q = void 0 !== j ? j : null == t ? void 0 : t.displayNameStyles;
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": I.intl.string(I.t.SZeUdX),
            style: {
                color: B ? "white" : "black",
                width: "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: U && !w,
                    [T.large]: "large" === k,
                    [T.xlarge]: "xlarge" === k,
                }),
                children: [
                    null != Z &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: Z,
                                hovered: w,
                                placement: m.i.PREVIEW,
                                content: x ? void 0 : H,
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
                                          ref: H,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: K,
                                              status: D ? V : void 0,
                                              "aria-hidden": !0,
                                              avatarDecorationOverride: null != M ? { asset: M.asset } : void 0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: W,
                                              displayNameStyles: q,
                                              effectDisplayType: G ? _.F.PLAIN : _.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: z && null != q,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(T.avatarContainer, x && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: B ? S : A,
                                        size: K,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: F,
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
