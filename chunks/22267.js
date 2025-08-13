n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    T = n(805920),
    S = n(460400),
    A = n(943549);
let N = {
        xlarge: c.EFr.SIZE_48,
        large: c.EFr.SIZE_40,
        default: c.EFr.SIZE_32,
    },
    C = (e) => {
        let {
                user: t,
                guildId: n,
                nameplate: o,
                nameplateData: C,
                className: R,
                innerClassName: P,
                isHighlighted: w,
                showStatus: D,
                showPlaceholderUser: L,
                pendingGlobalName: x,
                nameplatePreviewSize: M = "default",
                isPurchased: j = !1,
            } = e,
            k = (0, s.e7)([b.Z], () => (0, l.wj)(b.Z.theme)),
            U = null != o ? (0, v.EU)(o) : C,
            G = (0, s.e7)([O.Z], () => (null != t ? O.Z.getStatus(t.id) : c.Skl.ONLINE)),
            B = k ? "#706F74" : "#aaaab2",
            Z = i.useRef(null),
            F = (0, s.e7)([y.ZP], () => (null != n && null != t ? y.ZP.getMember(n, t.id) : null)),
            V =
                null != t
                    ? (0, E.Ly)({
                          pendingNickname: void 0,
                          pendingGlobalName: x,
                          user: t,
                          guildMember: F,
                      })
                    : void 0,
            H = N[M],
            Y = (0, f.Y)({ location: "NameplatePreview" });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": I.intl.string(I.t.SZeUdX),
            style: {
                color: k ? "white" : "black",
                width: "100%",
            },
            children: (0, r.jsxs)(c.Rny, {
                className: a()(R, T.nameplatePreview, {
                    [T.nameplatePurchased]: j && !w,
                    [T.large]: "large" === M,
                    [T.xlarge]: "xlarge" === M,
                }),
                children: [
                    null != U &&
                        (0, r.jsx)(
                            g.Z,
                            {
                                nameplate: U,
                                hovered: w,
                                placement: m.i.PREVIEW,
                                content: L ? void 0 : Z,
                            },
                            null == o ? void 0 : o.id,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.overlayContainer,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: a()(T.avatarContainer, !L && T.avatarVisible),
                                      children: (0, r.jsx)(u.Z, {
                                          ref: Z,
                                          avatar: (0, r.jsx)(d.Z, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: H,
                                              status: D ? G : void 0,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(h.ZP, {
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.tagChiplet,
                                          }),
                                          name: (0, r.jsx)(p.Z, {
                                              userName: V,
                                              displayNameStyles: t.displayNameStyles,
                                              effectDisplayType: _.F.ANIMATED,
                                          }),
                                          innerClassName: P,
                                          withDisplayNameStyles: Y && null != t.displayNameStyles,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: a()(T.avatarContainer, L && T.avatarVisible),
                                children: [
                                    (0, r.jsx)(c.qEK, {
                                        src: k ? S : A,
                                        size: H,
                                        "aria-hidden": !0,
                                        status: c.Skl.ONLINE,
                                        statusColor: B,
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
