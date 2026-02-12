"use strict";
n.d(t, { A: () => w, a: () => L });
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
    f = n(609425),
    h = n(922301),
    p = n(750112),
    g = n(685073),
    E = n(534400),
    A = n(919395),
    I = n(385612),
    T = n(696451),
    y = n(290863),
    S = n(226540),
    v = n(369496),
    C = n(227),
    b = n(985018),
    N = n(662567),
    R = n(16533),
    O = n(312653);
let D = {
        xlarge: u._3J.SIZE_48,
        large: u._3J.SIZE_40,
        small: u._3J.SIZE_24,
        xsmall: u._3J.SIZE_20,
        default: u._3J.SIZE_32,
    },
    L = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: L,
                className: w,
                innerClassName: x,
                isHighlighted: P,
                showStatus: M,
                showPlaceholderUser: k,
                pendingGlobalName: U,
                pendingNickname: G,
                pendingAvatarDecoration: F,
                pendingDisplayNameStyles: V,
                pendingPrimaryGuildId: B,
                nameplatePreviewSize: j = "default",
                skipEffectDisplayName: H = !1,
                width: Y,
            } = e,
            W = (0, c.Ay)(),
            K = (0, l.Mw)(W),
            $ = (0, v.WK)(a) ?? L,
            z = (0, o.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : u.clD.ONLINE)),
            q = K ? "#706F74" : "#aaaab2",
            X = i.useRef(null),
            Z = (0, o.bG)([T.Ay], () => (null != n && null != t ? T.Ay.getMember(n, t.id) : null)),
            Q = null != t ? (0, I.eh)({ pendingNickname: G, pendingGlobalName: U, user: t, guildMember: Z }) : void 0,
            J = (0, A.lw)({
                pendingValue: F,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            ee = i.useMemo(() => D[j], [j]),
            et = (0, f.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: V }),
            en = (0, g.gS)(B),
            er = i.useMemo(
                () =>
                    null != a
                        ? b.intl.formatToPlainString(b.t.YJig7C, { a11y_text: a.label })
                        : b.intl.string(b.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": er,
            style: { color: K ? "white" : "black", width: null != Y ? `${Y}px` : "100%" },
            children: (0, r.jsxs)(u.M1G, {
                className: s()(w, N.M4, {
                    [N.s]: "xsmall" === j,
                    [N.EX]: "small" === j,
                    [N.as]: "large" === j,
                    [N.AQ]: "xlarge" === j,
                    [N.gf]: null != Y,
                }),
                children: [
                    null != $ &&
                        (0, r.jsx)(
                            C.A,
                            { nameplate: $, hovered: P, placement: S.u.PREVIEW, content: k ? void 0 : X },
                            a?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: N.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: s()(N.H, !k && N.Mk),
                                      children: (0, r.jsx)(d.A, {
                                          ref: X,
                                          avatar: (0, r.jsx)(_.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: ee,
                                              status: M ? z : void 0,
                                              avatarDecorationOverride: J,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(E.Ay, {
                                              primaryGuild: en,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: N.id,
                                          }),
                                          name: (0, r.jsx)(p.A, {
                                              userName: Q,
                                              displayNameStyles: et,
                                              effectDisplayType: H ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: x,
                                          withDisplayNameStyles: null != et,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: s()(N.H, k && N.Mk),
                                children: [
                                    (0, r.jsx)(u.euF, {
                                        src: K ? R : O,
                                        size: ee,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: q,
                                        className: N.my,
                                    }),
                                    (0, r.jsx)("div", { className: N.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    w = L;
