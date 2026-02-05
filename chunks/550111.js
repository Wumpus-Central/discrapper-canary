"use strict";
n.d(t, { A: () => L, a: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(262295),
    _ = n(291661),
    f = n(628856),
    p = n(609425),
    h = n(922301),
    m = n(750112),
    g = n(685073),
    E = n(534400),
    A = n(919395),
    I = n(385612),
    T = n(696451),
    y = n(290863),
    S = n(226540),
    v = n(227),
    C = n(985018),
    b = n(662567),
    N = n(16533),
    R = n(312653);
let O = {
        xlarge: u._3J.SIZE_48,
        large: u._3J.SIZE_40,
        small: u._3J.SIZE_24,
        xsmall: u._3J.SIZE_20,
        default: u._3J.SIZE_32,
    },
    D = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: D,
                className: L,
                innerClassName: w,
                isHighlighted: x,
                showStatus: P,
                showPlaceholderUser: M,
                pendingGlobalName: k,
                pendingNickname: U,
                pendingAvatarDecoration: G,
                pendingDisplayNameStyles: V,
                pendingPrimaryGuildId: F,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: j = !1,
                width: H,
            } = e,
            Y = (0, c.Ay)(),
            W = (0, l.Mw)(Y),
            K = null != a ? (0, f.D)(a) : D,
            z = (0, o.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : u.clD.ONLINE)),
            $ = W ? "#706F74" : "#aaaab2",
            q = i.useRef(null),
            Z = (0, o.bG)([T.Ay], () => (null != n && null != t ? T.Ay.getMember(n, t.id) : null)),
            Q = null != t ? (0, I.eh)({ pendingNickname: U, pendingGlobalName: k, user: t, guildMember: Z }) : void 0,
            X = (0, A.lw)({
                pendingValue: G,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => O[B], [B]),
            ee = (0, p.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: V }),
            et = (0, g.gS)(F),
            en = i.useMemo(
                () =>
                    null != a
                        ? C.intl.formatToPlainString(C.t.YJig7C, { a11y_text: a.label })
                        : C.intl.string(C.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: { color: W ? "white" : "black", width: null != H ? `${H}px` : "100%" },
            children: (0, r.jsxs)(u.M1G, {
                className: s()(L, b.M4, {
                    [b.s]: "xsmall" === B,
                    [b.EX]: "small" === B,
                    [b.as]: "large" === B,
                    [b.AQ]: "xlarge" === B,
                    [b.gf]: null != H,
                }),
                children: [
                    null != K &&
                        (0, r.jsx)(
                            v.A,
                            { nameplate: K, hovered: x, placement: S.u.PREVIEW, content: M ? void 0 : q },
                            a?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: b.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: s()(b.H, !M && b.Mk),
                                      children: (0, r.jsx)(d.A, {
                                          ref: q,
                                          avatar: (0, r.jsx)(_.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: P ? z : void 0,
                                              avatarDecorationOverride: X,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(E.Ay, {
                                              primaryGuild: et,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: b.id,
                                          }),
                                          name: (0, r.jsx)(m.A, {
                                              userName: Q,
                                              displayNameStyles: ee,
                                              effectDisplayType: j ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: s()(b.H, M && b.Mk),
                                children: [
                                    (0, r.jsx)(u.euF, {
                                        src: W ? N : R,
                                        size: J,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: $,
                                        className: b.my,
                                    }),
                                    (0, r.jsx)("div", { className: b.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    L = D;
