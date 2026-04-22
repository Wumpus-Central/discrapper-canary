"use strict";
a.d(t, { A: () => O, a: () => L });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(311907),
    o = a(462887),
    d = a(778712),
    c = a(652215),
    u = a(247928),
    h = a(97808),
    p = a(736653),
    _ = a(262295),
    m = a(609425),
    b = a(922301),
    g = a(750112),
    f = a(685073),
    x = a(534400),
    v = a(919395),
    A = a(385612),
    E = a(696451),
    y = a(290863),
    j = a(162232),
    I = a(88686),
    S = a(780898),
    C = a(214881),
    T = a(985018),
    w = a(136958),
    R = a(16533),
    k = a(312653);
let N = { xlarge: d._3.SIZE_48, large: d._3.SIZE_40, small: d._3.SIZE_24, xsmall: d._3.SIZE_20, default: d._3.SIZE_32 },
    L = l.memo(function (e) {
        let {
                user: t,
                guildId: a,
                nameplate: n,
                nameplateData: d,
                className: L,
                innerClassName: O,
                isHighlighted: P,
                showStatus: M,
                showPlaceholderUser: V,
                pendingGlobalName: U,
                pendingNickname: D,
                pendingAvatarDecoration: B,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: G,
                nameplatePreviewSize: H = "default",
                skipEffectDisplayName: W = !1,
                width: z,
            } = e,
            Z = (0, p.Ay)(),
            Y = (0, o.M)(Z),
            K = (0, S.WK)(n) ?? d,
            J = (0, s.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : c.clD.ONLINE)),
            $ = l.useRef(null),
            q = (0, s.bG)([E.Ay], () => (null != a && null != t ? E.Ay.getMember(a, t.id) : null)),
            X = null != t ? (0, A.eh)({ pendingNickname: D, pendingGlobalName: U, user: t, guildMember: q }) : void 0,
            Q = (0, v.lw)({
                pendingValue: B,
                userValue: t?.avatarDecoration,
                guildValue: q?.avatarDecoration,
                guildId: a,
            }),
            ee = l.useMemo(() => N[H], [H]),
            et = (0, m.A)({ userId: t?.id, guildId: a, pendingDisplayNameStyles: F }),
            ea = (0, f.gS)(G),
            er = l.useMemo(
                () =>
                    null != n
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: n.label })
                        : T.intl.string(T.t.SZeUdR),
                [n],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": er,
            style: { color: Y ? "white" : "black", width: null != z ? `${z}px` : "100%" },
            children: (0, r.jsxs)(u.M, {
                className: i()(L, w.M4, {
                    [w.s]: "xsmall" === H,
                    [w.EX]: "small" === H,
                    [w.as]: "large" === H,
                    [w.AQ]: "xlarge" === H,
                    [w.gf]: null != z,
                }),
                children: [
                    null != K &&
                        (0, r.jsx)(
                            C.A,
                            { nameplate: K, hovered: P, placement: I.u.PREVIEW, content: V ? void 0 : $ },
                            n?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: w.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: i()(w.H, !V && w.Mk),
                                      children: (0, r.jsx)(_.A, {
                                          ref: $,
                                          avatar: (0, r.jsx)(j.A, {
                                              user: t,
                                              guildId: a,
                                              avatarSize: ee,
                                              status: M ? J : void 0,
                                              avatarDecorationOverride: Q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(x.Ay, {
                                              primaryGuild: ea,
                                              userId: t.id,
                                              contextGuildId: a,
                                              className: w.id,
                                          }),
                                          name: (0, r.jsx)(g.A, {
                                              userName: X,
                                              displayNameStyles: et,
                                              effectDisplayType: W ? b.G.PLAIN : b.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: O,
                                          withDisplayNameStyles: null != et,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: i()(w.H, V && w.Mk),
                                children: [
                                    (0, r.jsx)(h.eu, {
                                        src: Y ? R : k,
                                        size: ee,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: Y ? "#706F74" : "#aaaab2",
                                        className: w.my,
                                    }),
                                    (0, r.jsx)("div", { className: w.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    O = L;
