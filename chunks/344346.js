"use strict";
n.d(t, { a: () => L, A: () => M });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(17928),
    o = n(462887),
    c = n(778712),
    d = n(652215),
    u = n(247928),
    _ = n(97808),
    p = n(736653),
    f = n(262295),
    m = n(609425),
    h = n(922301),
    g = n(368919),
    b = n(685073),
    A = n(534400),
    E = n(919395),
    v = n(252732),
    I = n(696451),
    y = n(290863),
    x = n(162232),
    S = n(88686),
    T = n(780898),
    C = n(174755),
    N = n(985018),
    R = n(136958);
let w = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    L = a.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: i,
                nameplateData: c,
                className: L,
                innerClassName: M,
                isHighlighted: O,
                showStatus: D,
                showPlaceholderUser: P,
                pendingGlobalName: j,
                pendingNickname: k,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: B,
                nameplatePreviewSize: G = "default",
                skipEffectDisplayName: V = !1,
                width: H,
            } = e,
            W = (0, p.Ay)(),
            Z = (0, o.M)(W),
            z = (0, T.WK)(i) ?? c,
            Y = (0, s.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : d.clD.ONLINE)),
            X = a.useRef(null),
            q = (0, s.bG)([I.Ay], () => (null != n && null != t ? I.Ay.getMember(n, t.id) : null)),
            J = null != t ? (0, v.eh)({ pendingNickname: k, pendingGlobalName: j, user: t, guildMember: q }) : void 0,
            $ = (0, E.lw)({
                pendingValue: U,
                userValue: t?.avatarDecoration,
                guildValue: q?.avatarDecoration,
                guildId: n,
            }),
            K = a.useMemo(() => w[G], [G]),
            Q = (0, m.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            ee = (0, b.gS)(B),
            et = a.useMemo(
                () =>
                    null != i
                        ? N.intl.formatToPlainString(N.t.YJig7C, { a11y_text: i.label })
                        : N.intl.string(N.t.SZeUdR),
                [i],
            );
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: Z ? "white" : "black", width: null != H ? `${H}px` : "100%" },
            children: (0, r.jsxs)(u.M, {
                className: l()(L, R.M4, {
                    [R.s]: "xsmall" === G,
                    [R.EX]: "small" === G,
                    [R.as]: "large" === G,
                    [R.AQ]: "xlarge" === G,
                    [R.gf]: null != H,
                }),
                children: [
                    null != z &&
                        (0, r.jsx)(
                            C.A,
                            { nameplate: z, hovered: O, placement: S.u.PREVIEW, content: P ? void 0 : X },
                            i?.skuId,
                        ),
                    (0, r.jsxs)("div", {
                        className: R.MU,
                        children: [
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: l()(R.H, !P && R.Mk),
                                      children: (0, r.jsx)(f.A, {
                                          ref: X,
                                          avatar: (0, r.jsx)(x.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: K,
                                              status: D ? Y : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, r.jsx)(A.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: R.id,
                                          }),
                                          name: (0, r.jsx)(g.A, {
                                              userName: J,
                                              displayNameStyles: Q,
                                              effectDisplayType: V ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: M,
                                          withDisplayNameStyles: null != Q,
                                      }),
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: l()(R.H, P && R.Mk),
                                children: [
                                    (0, r.jsx)(_.eu, {
                                        src: Z ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: K,
                                        "aria-hidden": !0,
                                        status: d.clD.ONLINE,
                                        statusColor: Z ? "#706F74" : "#aaaab2",
                                        className: R.my,
                                    }),
                                    (0, r.jsx)("div", { className: R.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    M = L;
