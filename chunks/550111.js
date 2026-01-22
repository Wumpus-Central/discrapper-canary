n.d(t, {
    A: () => P,
    a: () => w,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(262295),
    f = n(291661),
    p = n(628856),
    _ = n(609425),
    h = n(922301),
    m = n(750112),
    g = n(685073),
    E = n(534400),
    b = n(919395),
    y = n(385612),
    O = n(696451),
    A = n(290863),
    v = n(226540),
    S = n(227),
    I = n(985018),
    T = n(662567),
    C = n(16533),
    N = n(312653);
let R = {
        xlarge: c._3J.SIZE_48,
        large: c._3J.SIZE_40,
        small: c._3J.SIZE_24,
        xsmall: c._3J.SIZE_20,
        default: c._3J.SIZE_32,
    },
    w = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: w,
                className: P,
                innerClassName: D,
                isHighlighted: x,
                showStatus: L,
                showPlaceholderUser: j,
                pendingGlobalName: M,
                pendingNickname: k,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: G,
                pendingPrimaryGuildId: V,
                nameplatePreviewSize: F = "default",
                skipEffectDisplayName: B = !1,
                width: H,
            } = e,
            Y = (0, u.Ay)(),
            W = (0, l.Mw)(Y),
            K = null != a ? (0, p.D)(a) : w,
            z = (0, o.bG)([A.A], () => (null != t ? A.A.getStatus(t.id) : c.clD.ONLINE)),
            q = W ? "#706F74" : "#aaaab2",
            X = i.useRef(null),
            Z = (0, o.bG)([O.Ay], () => (null != n && null != t ? O.Ay.getMember(n, t.id) : null)),
            Q =
                null != t
                    ? (0, y.eh)({
                          pendingNickname: k,
                          pendingGlobalName: M,
                          user: t,
                          guildMember: Z,
                      })
                    : void 0,
            $ = (0, b.lw)({
                pendingValue: U,
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == Z ? void 0 : Z.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => R[F], [F]),
            ee = (0, _.A)({
                userId: null == t ? void 0 : t.id,
                guildId: n,
                pendingDisplayNameStyles: G,
            }),
            et = (0, g.gS)(V),
            en = i.useMemo(
                () =>
                    null != a
                        ? I.intl.formatToPlainString(I.t.YJig7C, { a11y_text: a.label })
                        : I.intl.string(I.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: {
                color: W ? "white" : "black",
                width: null != H ? "".concat(H, "px") : "100%",
            },
            children: (0, r.jsxs)(c.M1G, {
                className: s()(P, T.M4, {
                    [T.s]: "xsmall" === F,
                    [T.EX]: "small" === F,
                    [T.as]: "large" === F,
                    [T.AQ]: "xlarge" === F,
                    [T.gf]: null != H,
                }),
                children: [
                    null != K &&
                        (0, r.jsx)(
                            S.A,
                            {
                                nameplate: K,
                                hovered: x,
                                placement: v.u.PREVIEW,
                                content: j ? void 0 : X,
                            },
                            null == a ? void 0 : a.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: T.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: s()(T.H, !j && T.Mk),
                                      children: (0, r.jsx)(d.A, {
                                          ref: X,
                                          avatar: (0, r.jsx)(f.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: L ? z : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(E.Ay, {
                                              primaryGuild: et,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: T.id,
                                          }),
                                          name: (0, r.jsx)(m.A, {
                                              userName: Q,
                                              displayNameStyles: ee,
                                              effectDisplayType: B ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: D,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: s()(T.H, j && T.Mk),
                                children: [
                                    (0, r.jsx)(c.euF, {
                                        src: W ? C : N,
                                        size: J,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: q,
                                        className: T.my,
                                    }),
                                    (0, r.jsx)("div", { className: T.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    P = w;
