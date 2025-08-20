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
            } = e,
            U = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            G = null != a ? (0, v.EU)(a) : N,
            B = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            Z = U ? "#706F74" : "#aaaab2",
            V = i.useRef(null),
            F = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            H =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: L,
                          user: t,
                          guildMember: F,
                      })
                    : void 0,
            Y = C[M],
            W = (0, f.Y)({ location: "NameplatePreview" }),
            K = void 0 !== j ? j : null == t ? void 0 : t.displayNameStyles;
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": I.intl.string(I.t.SZeUdX),
            style: {
                color: U ? "white" : "black",
                width: "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: k && !w,
                    [T.large]: "large" === M,
                    [T.xlarge]: "xlarge" === M,
                }),
                children: [
                    null != G &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: G,
                                hovered: w,
                                placement: m.i.PREVIEW,
                                content: x ? void 0 : V,
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
                                          ref: V,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: Y,
                                              status: D ? B : void 0,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: H,
                                              displayNameStyles: K,
                                              effectDisplayType: _.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: W && null != K,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(T.avatarContainer, x && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: U ? S : A,
                                        size: Y,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: Z,
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
