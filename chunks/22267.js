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
    f = n(386725),
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
    N = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: N,
                className: R,
                innerClassName: P,
                isHighlighted: D,
                showStatus: w,
                showPlaceholderUser: L,
                pendingGlobalName: x,
                pendingNickname: M,
                pendingDisplayNameStyles: k,
                avatarDecorationOverride: j,
                nameplatePreviewSize: U = "default",
                isPurchased: G = !1,
                skipEffectDisplayName: B = !1,
                width: Z,
            } = e,
            F = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            V = null != a ? (0, v.EU)(a) : N,
            H = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            Y = F ? "#706F74" : "#aaaab2",
            W = i.useRef(null),
            K = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            z =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: M,
                          pendingGlobalName: x,
                          user: t,
                          guildMember: K,
                      })
                    : void 0,
            q = i.useMemo(() => C[U], [U]),
            X = (0, f.Z)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: k,
            }),
            Q = i.useMemo(
                () =>
                    null != a
                        ? I.intl.formatToPlainString(I.t.YJig7C, { a11y_text: a.label })
                        : I.intl.string(I.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": Q,
            style: {
                color: F ? "white" : "black",
                width: null != Z ? "".concat(Z, "px") : "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: o()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: G && !D,
                    [T.large]: "large" === U,
                    [T.xlarge]: "xlarge" === U,
                    [T.inheritWidth]: null != Z,
                }),
                children: [
                    null != V &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: V,
                                hovered: D,
                                placement: m.i.PREVIEW,
                                content: L ? void 0 : W,
                            },
                            null == a ? void 0 : a.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: o()(T.avatarContainer, !L && T.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: W,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: q,
                                              status: w ? H : void 0,
                                              "aria-hidden": !0,
                                              avatarDecorationOverride: null != j ? { asset: j.asset } : void 0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: z,
                                              displayNameStyles: X,
                                              effectDisplayType: B ? _.F.PLAIN : _.F.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: null != X,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: o()(T.avatarContainer, L && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: F ? S : A,
                                        size: q,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: Y,
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
    });
