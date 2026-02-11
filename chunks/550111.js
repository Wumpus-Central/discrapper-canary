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
    f = n(628856),
    h = n(609425),
    p = n(922301),
    g = n(750112),
    E = n(685073),
    A = n(534400),
    I = n(919395),
    T = n(385612),
    y = n(696451),
    S = n(290863),
    v = n(226540),
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
            $ = null != a ? (0, f.D)(a) : L,
            z = (0, o.bG)([S.A], () => (null != t ? S.A.getStatus(t.id) : u.clD.ONLINE)),
            q = K ? "#706F74" : "#aaaab2",
            X = i.useRef(null),
            Z = (0, o.bG)([y.Ay], () => (null != n && null != t ? y.Ay.getMember(n, t.id) : null)),
            Q = null != t ? (0, T.eh)({ pendingNickname: G, pendingGlobalName: U, user: t, guildMember: Z }) : void 0,
            J = (0, I.lw)({
                pendingValue: F,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            ee = i.useMemo(() => D[j], [j]),
            et = (0, h.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: V }),
            en = (0, E.gS)(B),
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
                            { nameplate: $, hovered: P, placement: v.u.PREVIEW, content: k ? void 0 : X },
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
                                          decorators: (0, r.jsx)(A.Ay, {
                                              primaryGuild: en,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: N.id,
                                          }),
                                          name: (0, r.jsx)(g.A, {
                                              userName: Q,
                                              displayNameStyles: et,
                                              effectDisplayType: H ? p.G.PLAIN : p.G.ANIMATED,
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
