"use strict";
n.d(t, { a: () => L, A: () => w });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(462887),
    u = n(778712),
    c = n(652215),
    d = n(247928),
    _ = n(97808),
    f = n(736653),
    h = n(262295),
    p = n(609425),
    E = n(922301),
    m = n(368919),
    g = n(685073),
    A = n(534400),
    I = n(919395),
    T = n(252732),
    S = n(696451),
    N = n(290863),
    y = n(162232),
    C = n(88686),
    v = n(780898),
    O = n(174755),
    R = n(375708),
    b = n(136958);
let D = { xlarge: u._3.SIZE_48, large: u._3.SIZE_40, small: u._3.SIZE_24, xsmall: u._3.SIZE_20, default: u._3.SIZE_32 },
    L = r.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: s,
                nameplateData: u,
                className: L,
                innerClassName: w,
                isHighlighted: M,
                showStatus: P,
                showPlaceholderUser: x,
                pendingGlobalName: U,
                pendingNickname: k,
                pendingAvatarDecoration: G,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: V,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: H = !1,
                width: j,
            } = e,
            Y = (0, f.Ay)(),
            W = (0, l.M)(Y),
            K = (0, v.WK)(s) ?? u,
            z = (0, o.bG)([N.A], () => (null != t ? N.A.getStatus(t.id) : c.clD.ONLINE)),
            $ = r.useRef(null),
            q = (0, o.bG)([S.Ay], () => (null != n && null != t ? S.Ay.getMember(n, t.id) : null)),
            Z = null != t ? (0, T.eh)({ pendingNickname: k, pendingGlobalName: U, user: t, guildMember: q }) : void 0,
            X = (0, I.lw)({
                pendingValue: G,
                userValue: t?.avatarDecoration,
                guildValue: q?.avatarDecoration,
                guildId: n,
            }),
            Q = r.useMemo(() => D[B], [B]),
            J = (0, p.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            ee = (0, g.gS)(V),
            et = r.useMemo(
                () =>
                    null != s
                        ? R.intl.formatToPlainString(R.t.YJig7C, { a11y_text: s.label })
                        : R.intl.string(R.t.SZeUdR),
                [s],
            );
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: W ? "white" : "black", width: null != j ? `${j}px` : "100%" },
            children: (0, i.jsxs)(d.M, {
                className: a()(L, b.M4, {
                    [b.s]: "xsmall" === B,
                    [b.EX]: "small" === B,
                    [b.as]: "large" === B,
                    [b.AQ]: "xlarge" === B,
                    [b.gf]: null != j,
                }),
                children: [
                    null != K &&
                        (0, i.jsx)(
                            O.A,
                            { nameplate: K, hovered: M, placement: C.u.PREVIEW, content: x ? void 0 : $ },
                            s?.skuId,
                        ),
                    (0, i.jsxs)("div", {
                        className: b.MU,
                        children: [
                            null != t
                                ? (0, i.jsx)("div", {
                                      className: a()(b.H, !x && b.Mk),
                                      children: (0, i.jsx)(h.A, {
                                          ref: $,
                                          avatar: (0, i.jsx)(y.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: Q,
                                              status: P ? z : void 0,
                                              avatarDecorationOverride: X,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, i.jsx)(A.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: n,
                                              className: b.id,
                                          }),
                                          name: (0, i.jsx)(m.A, {
                                              userName: Z,
                                              displayNameStyles: J,
                                              effectDisplayType: H ? E.G.PLAIN : E.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != J,
                                      }),
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: a()(b.H, x && b.Mk),
                                children: [
                                    (0, i.jsx)(_.eu, {
                                        src: W ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: Q,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: W ? "#706F74" : "#aaaab2",
                                        className: b.my,
                                    }),
                                    (0, i.jsx)("div", { className: b.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    w = L;
