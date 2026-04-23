"use strict";
n.d(t, { A: () => O, a: () => M });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    d = n(462887),
    o = n(778712),
    c = n(652215),
    u = n(247928),
    _ = n(97808),
    m = n(736653),
    p = n(262295),
    h = n(609425),
    g = n(922301),
    f = n(750112),
    b = n(685073),
    A = n(534400),
    x = n(919395),
    v = n(385612),
    E = n(696451),
    I = n(290863),
    T = n(162232),
    S = n(88686),
    N = n(780898),
    C = n(214881),
    y = n(985018),
    j = n(741246),
    w = n(16533),
    R = n(312653);
let L = { xlarge: o._3.SIZE_48, large: o._3.SIZE_40, small: o._3.SIZE_24, xsmall: o._3.SIZE_20, default: o._3.SIZE_32 },
    M = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: r,
                nameplateData: o,
                className: M,
                innerClassName: O,
                isHighlighted: P,
                showStatus: k,
                showPlaceholderUser: D,
                pendingGlobalName: U,
                pendingNickname: G,
                pendingAvatarDecoration: B,
                pendingDisplayNameStyles: H,
                pendingPrimaryGuildId: F,
                nameplatePreviewSize: V = "default",
                skipEffectDisplayName: W = !1,
                width: Z,
            } = e,
            z = (0, m.Ay)(),
            Y = (0, d.M)(z),
            $ = (0, N.WK)(r) ?? o,
            K = (0, s.bG)([I.A], () => (null != t ? I.A.getStatus(t.id) : c.clD.ONLINE)),
            J = i.useRef(null),
            Q = (0, s.bG)([E.Ay], () => (null != n && null != t ? E.Ay.getMember(n, t.id) : null)),
            q = null != t ? (0, v.eh)({ pendingNickname: G, pendingGlobalName: U, user: t, guildMember: Q }) : void 0,
            X = (0, x.lw)({
                pendingValue: B,
                userValue: t?.avatarDecoration,
                guildValue: Q?.avatarDecoration,
                guildId: n,
            }),
            ee = i.useMemo(() => L[V], [V]),
            et = (0, h.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: H }),
            en = (0, b.gS)(F),
            ea = i.useMemo(
                () =>
                    null != r
                        ? y.intl.formatToPlainString(y.t.YJig7C, { a11y_text: r.label })
                        : y.intl.string(y.t.SZeUdR),
                [r],
            );
        return (0, a.jsx)("div", {
            role: "img",
            "aria-label": ea,
            style: { color: Y ? "white" : "black", width: null != Z ? `${Z}px` : "100%" },
            children: (0, a.jsxs)(u.M, {
                className: l()(M, j.M4, {
                    [j.s]: "xsmall" === V,
                    [j.EX]: "small" === V,
                    [j.as]: "large" === V,
                    [j.AQ]: "xlarge" === V,
                    [j.gf]: null != Z,
                }),
                children: [
                    null != $ &&
                        (0, a.jsx)(
                            C.A,
                            { nameplate: $, hovered: P, placement: S.u.PREVIEW, content: D ? void 0 : J },
                            r?.skuId,
                        ),
                    (0, a.jsxs)("div", {
                        className: j.MU,
                        children: [
                            null != t
                                ? (0, a.jsx)("div", {
                                      className: l()(j.H, !D && j.Mk),
                                      children: (0, a.jsx)(p.A, {
                                          ref: J,
                                          avatar: (0, a.jsx)(T.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: ee,
                                              status: k ? K : void 0,
                                              avatarDecorationOverride: X,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, a.jsx)(A.Ay, {
                                              primaryGuild: en,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: j.id,
                                          }),
                                          name: (0, a.jsx)(f.A, {
                                              userName: q,
                                              displayNameStyles: et,
                                              effectDisplayType: W ? g.G.PLAIN : g.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: O,
                                          withDisplayNameStyles: null != et,
                                      }),
                                  })
                                : null,
                            (0, a.jsxs)("div", {
                                className: l()(j.H, D && j.Mk),
                                children: [
                                    (0, a.jsx)(_.eu, {
                                        src: Y ? w : R,
                                        size: ee,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: Y ? "#706F74" : "#aaaab2",
                                        className: j.my,
                                    }),
                                    (0, a.jsx)("div", { className: j.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    O = M;
