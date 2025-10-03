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
                showPlaceholderUser: L,
                pendingGlobalName: x,
                pendingDisplayNameStyles: M,
                avatarDecorationOverride: j,
                nameplatePreviewSize: k = "default",
                isPurchased: U = !1,
                skipEffectDisplayName: G = !1,
                width: B,
            } = e,
            Z = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            F = null != a ? (0, v.EU)(a) : N,
            V = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            H = Z ? "#706F74" : "#aaaab2",
            Y = i.useRef(null),
            W = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            K =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: x,
                          user: t,
                          guildMember: W,
                      })
                    : void 0,
            z = C[k],
            q = (0, f.Y)({ location: "NameplatePreview" }),
            X = void 0 !== M ? M : null == t ? void 0 : t.displayNameStyles,
            Q = null != a ? I.intl.formatToPlainString(I.t.YJig7O, { a11y_text: a.label }) : I.intl.string(I.t.SZeUdX);
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": Q,
            style: {
                color: Z ? "white" : "black",
                width: null != B ? "".concat(B, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: U && !w,
                    [T.large]: "large" === k,
                    [T.xlarge]: "xlarge" === k,
                    [T.inheritWidth]: null != B,
                }),
                children: [
                    null != F &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: F,
                                hovered: w,
                                placement: m.i.PREVIEW,
                                content: L ? void 0 : Y,
                            },
                            null == a ? void 0 : a.id,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(T.avatarContainer, !L && T.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: Y,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: z,
                                              status: D ? V : void 0,
                                              "aria-hidden": !0,
                                              avatarDecorationOverride: null != j ? { asset: j.asset } : void 0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: K,
                                              displayNameStyles: X,
                                              effectDisplayType: G ? _.F.PLAIN : _.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: q && null != X,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(T.avatarContainer, L && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: Z ? S : A,
                                        size: z,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: H,
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
