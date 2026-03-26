"use strict";
n.d(t, { A: () => L, a: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(262295),
    _ = n(609425),
    f = n(922301),
    p = n(750112),
    h = n(685073),
    m = n(534400),
    E = n(919395),
    g = n(385612),
    A = n(696451),
    I = n(290863),
    T = n(162232),
    S = n(88686),
    y = n(780898),
    v = n(214881),
    N = n(985018),
    C = n(855789),
    R = n(16533),
    O = n(312653);
let b = {
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
                nameplate: s,
                nameplateData: D,
                className: L,
                innerClassName: w,
                isHighlighted: M,
                showStatus: x,
                showPlaceholderUser: P,
                pendingGlobalName: k,
                pendingNickname: U,
                pendingAvatarDecoration: G,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: V,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: H = !1,
                width: j,
            } = e,
            Y = (0, c.Ay)(),
            W = (0, l.Mw)(Y),
            K = (0, y.WK)(s) ?? D,
            $ = (0, o.bG)([I.A], () => (null != t ? I.A.getStatus(t.id) : u.clD.ONLINE)),
            z = W ? "#706F74" : "#aaaab2",
            q = i.useRef(null),
            Z = (0, o.bG)([A.Ay], () => (null != n && null != t ? A.Ay.getMember(n, t.id) : null)),
            X = null != t ? (0, g.eh)({ pendingNickname: U, pendingGlobalName: k, user: t, guildMember: Z }) : void 0,
            Q = (0, E.lw)({
                pendingValue: G,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => b[B], [B]),
            ee = (0, _.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            et = (0, h.gS)(V),
            en = i.useMemo(
                () =>
                    null != s
                        ? N.intl.formatToPlainString(N.t.YJig7C, { a11y_text: s.label })
                        : N.intl.string(N.t.SZeUdR),
                [s],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: { color: W ? "white" : "black", width: null != j ? `${j}px` : "100%" },
            children: (0, r.jsxs)(u.M1G, {
                className: a()(L, C.M4, {
                    [C.s]: "xsmall" === B,
                    [C.EX]: "small" === B,
                    [C.as]: "large" === B,
                    [C.AQ]: "xlarge" === B,
                    [C.gf]: null != j,
                }),
                children: [
                    null != K &&
                        (0, r.jsx)(
                            v.A,
                            { nameplate: K, hovered: M, placement: S.u.PREVIEW, content: P ? void 0 : q },
                            s?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: C.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: a()(C.H, !P && C.Mk),
                                      children: (0, r.jsx)(d.A, {
                                          ref: q,
                                          avatar: (0, r.jsx)(T.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: x ? $ : void 0,
                                              avatarDecorationOverride: Q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(m.Ay, {
                                              primaryGuild: et,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: C.id,
                                          }),
                                          name: (0, r.jsx)(p.A, {
                                              userName: X,
                                              displayNameStyles: ee,
                                              effectDisplayType: H ? f.G.PLAIN : f.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: a()(C.H, P && C.Mk),
                                children: [
                                    (0, r.jsx)(u.euF, {
                                        src: W ? R : O,
                                        size: J,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: z,
                                        className: C.my,
                                    }),
                                    (0, r.jsx)("div", { className: C.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    L = D;
