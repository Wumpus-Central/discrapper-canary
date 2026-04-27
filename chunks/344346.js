"use strict";
r.d(t, { a: () => w, A: () => O });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    l = r.n(a),
    s = r(17928),
    o = r(462887),
    c = r(778712),
    u = r(652215),
    d = r(247928),
    _ = r(97808),
    p = r(736653),
    f = r(262295),
    m = r(609425),
    h = r(922301),
    g = r(368919),
    b = r(685073),
    A = r(534400),
    E = r(919395),
    v = r(252732),
    y = r(696451),
    I = r(290863),
    S = r(162232),
    T = r(88686),
    x = r(780898),
    C = r(174755),
    R = r(985018),
    N = r(136958);
let L = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    w = i.memo(function (e) {
        let {
                user: t,
                guildId: r,
                nameplate: a,
                nameplateData: c,
                className: w,
                innerClassName: O,
                isHighlighted: P,
                showStatus: D,
                showPlaceholderUser: M,
                pendingGlobalName: k,
                pendingNickname: j,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: G,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: H = !1,
                width: V,
            } = e,
            W = (0, p.Ay)(),
            z = (0, o.M)(W),
            Y = (0, x.WK)(a) ?? c,
            Z = (0, s.bG)([I.A], () => (null != t ? I.A.getStatus(t.id) : u.clD.ONLINE)),
            X = i.useRef(null),
            q = (0, s.bG)([y.Ay], () => (null != r && null != t ? y.Ay.getMember(r, t.id) : null)),
            $ = null != t ? (0, v.eh)({ pendingNickname: j, pendingGlobalName: k, user: t, guildMember: q }) : void 0,
            K = (0, E.lw)({
                pendingValue: U,
                userValue: t?.avatarDecoration,
                guildValue: q?.avatarDecoration,
                guildId: r,
            }),
            Q = i.useMemo(() => L[B], [B]),
            J = (0, m.A)({ userId: t?.id, guildId: r, pendingDisplayNameStyles: F }),
            ee = (0, b.gS)(G),
            et = i.useMemo(
                () =>
                    null != a
                        ? R.intl.formatToPlainString(R.t.YJig7C, { a11y_text: a.label })
                        : R.intl.string(R.t.SZeUdR),
                [a],
            );
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: z ? "white" : "black", width: null != V ? `${V}px` : "100%" },
            children: (0, n.jsxs)(d.M, {
                className: l()(w, N.M4, {
                    [N.s]: "xsmall" === B,
                    [N.EX]: "small" === B,
                    [N.as]: "large" === B,
                    [N.AQ]: "xlarge" === B,
                    [N.gf]: null != V,
                }),
                children: [
                    null != Y &&
                        (0, n.jsx)(
                            C.A,
                            { nameplate: Y, hovered: P, placement: T.u.PREVIEW, content: M ? void 0 : X },
                            a?.skuId,
                        ),
                    (0, n.jsxs)("div", {
                        className: N.MU,
                        children: [
                            null != t
                                ? (0, n.jsx)("div", {
                                      className: l()(N.H, !M && N.Mk),
                                      children: (0, n.jsx)(f.A, {
                                          ref: X,
                                          avatar: (0, n.jsx)(S.A, {
                                              user: t,
                                              guildId: r,
                                              avatarSize: Q,
                                              status: D ? Z : void 0,
                                              avatarDecorationOverride: K,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, n.jsx)(A.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: r,
                                              className: N.id,
                                          }),
                                          name: (0, n.jsx)(g.A, {
                                              userName: $,
                                              displayNameStyles: J,
                                              effectDisplayType: H ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: O,
                                          withDisplayNameStyles: null != J,
                                      }),
                                  })
                                : null,
                            (0, n.jsxs)("div", {
                                className: l()(N.H, M && N.Mk),
                                children: [
                                    (0, n.jsx)(_.eu, {
                                        src: z ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: Q,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: z ? "#706F74" : "#aaaab2",
                                        className: N.my,
                                    }),
                                    (0, n.jsx)("div", { className: N.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    O = w;
