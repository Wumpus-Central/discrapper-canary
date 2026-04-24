"use strict";
n.d(t, { a: () => w, A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(17928),
    o = n(462887),
    c = n(778712),
    u = n(652215),
    d = n(247928),
    _ = n(97808),
    p = n(736653),
    f = n(262295),
    h = n(609425),
    m = n(922301),
    g = n(368919),
    b = n(685073),
    A = n(534400),
    E = n(919395),
    v = n(252732),
    y = n(696451),
    I = n(290863),
    S = n(162232),
    T = n(88686),
    C = n(780898),
    x = n(174755),
    R = n(985018),
    N = n(136958);
let L = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    w = i.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: c,
                className: w,
                innerClassName: O,
                isHighlighted: D,
                showStatus: P,
                showPlaceholderUser: M,
                pendingGlobalName: k,
                pendingNickname: j,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: B,
                nameplatePreviewSize: G = "default",
                skipEffectDisplayName: H = !1,
                width: V,
            } = e,
            W = (0, p.Ay)(),
            z = (0, o.M)(W),
            Y = (0, C.WK)(a) ?? c,
            Z = (0, s.bG)([I.A], () => (null != t ? I.A.getStatus(t.id) : u.clD.ONLINE)),
            X = i.useRef(null),
            q = (0, s.bG)([y.Ay], () => (null != n && null != t ? y.Ay.getMember(n, t.id) : null)),
            K = null != t ? (0, v.eh)({ pendingNickname: j, pendingGlobalName: k, user: t, guildMember: q }) : void 0,
            $ = (0, E.lw)({
                pendingValue: U,
                userValue: t?.avatarDecoration,
                guildValue: q?.avatarDecoration,
                guildId: n,
            }),
            J = i.useMemo(() => L[G], [G]),
            Q = (0, h.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            ee = (0, b.gS)(B),
            et = i.useMemo(
                () =>
                    null != a
                        ? R.intl.formatToPlainString(R.t.YJig7C, { a11y_text: a.label })
                        : R.intl.string(R.t.SZeUdR),
                [a],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: z ? "white" : "black", width: null != V ? `${V}px` : "100%" },
            children: (0, r.jsxs)(d.M, {
                className: l()(w, N.M4, {
                    [N.s]: "xsmall" === G,
                    [N.EX]: "small" === G,
                    [N.as]: "large" === G,
                    [N.AQ]: "xlarge" === G,
                    [N.gf]: null != V,
                }),
                children: [
                    null != Y &&
                        (0, r.jsx)(
                            x.A,
                            { nameplate: Y, hovered: D, placement: T.u.PREVIEW, content: M ? void 0 : X },
                            a?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: N.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: l()(N.H, !M && N.Mk),
                                      children: (0, r.jsx)(f.A, {
                                          ref: X,
                                          avatar: (0, r.jsx)(S.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: P ? Z : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(A.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: N.id,
                                          }),
                                          name: (0, r.jsx)(g.A, {
                                              userName: K,
                                              displayNameStyles: Q,
                                              effectDisplayType: H ? m.G.PLAIN : m.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: O,
                                          withDisplayNameStyles: null != Q,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: l()(N.H, M && N.Mk),
                                children: [
                                    (0, r.jsx)(_.eu, {
                                        src: z ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: J,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: z ? "#706F74" : "#aaaab2",
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
    O = w;
