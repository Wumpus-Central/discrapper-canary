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
    d = n(346055),
    _ = n(97808),
    h = n(736653),
    f = n(262295),
    p = n(609425),
    E = n(922301),
    m = n(368919),
    g = n(685073),
    A = n(534400),
    I = n(919395),
    T = n(252732),
    S = n(696451),
    y = n(290863),
    N = n(162232),
    v = n(88686),
    C = n(780898),
    R = n(174755),
    O = n(375708),
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
                pendingGlobalName: k,
                pendingNickname: U,
                pendingAvatarDecoration: G,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: V,
                hideDecorators: B = !1,
                nameplatePreviewSize: H = "default",
                skipEffectDisplayName: j = !1,
                width: Y,
            } = e,
            W = (0, h.Ay)(),
            K = (0, l.M)(W),
            $ = (0, C.WK)(s) ?? u,
            z = (0, o.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : c.clD.ONLINE)),
            q = r.useRef(null),
            X = (0, o.bG)([S.Ay], () => (null != n && null != t ? S.Ay.getMember(n, t.id) : null)),
            Z = null != t ? (0, T.eh)({ pendingNickname: U, pendingGlobalName: k, user: t, guildMember: X }) : void 0,
            Q = (0, I.lw)({
                pendingValue: G,
                userValue: t?.avatarDecoration,
                guildValue: X?.avatarDecoration,
                guildId: n,
            }),
            J = r.useMemo(() => D[H], [H]),
            ee = (0, p.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            et = (0, g.gS)(V),
            en = r.useMemo(
                () =>
                    null != s
                        ? O.intl.formatToPlainString(O.t.YJig7C, { a11y_text: s.label })
                        : O.intl.string(O.t.SZeUdR),
                [s],
            );
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: { color: K ? "white" : "black", width: null != Y ? `${Y}px` : "100%" },
            children: (0, i.jsxs)(d.M, {
                className: a()(L, b.M4, {
                    [b.s]: "xsmall" === H,
                    [b.EX]: "small" === H,
                    [b.as]: "large" === H,
                    [b.AQ]: "xlarge" === H,
                    [b.gf]: null != Y,
                }),
                children: [
                    null != $ &&
                        (0, i.jsx)(
                            R.A,
                            { nameplate: $, hovered: M, placement: v.u.PREVIEW, content: x ? void 0 : q },
                            s?.skuId,
                        ),
                    (0, i.jsxs)("div", {
                        className: b.MU,
                        children: [
                            null != t
                                ? (0, i.jsx)("div", {
                                      className: a()(b.H, !x && b.Mk),
                                      children: (0, i.jsx)(f.A, {
                                          ref: q,
                                          avatar: (0, i.jsx)(N.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: P ? z : void 0,
                                              avatarDecorationOverride: Q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: B
                                              ? void 0
                                              : (0, i.jsx)(A.Ay, {
                                                    primaryGuild: et,
                                                    userId: t.id,
                                                    contextGuildId: n,
                                                    className: b.id,
                                                }),
                                          name: (0, i.jsx)(m.A, {
                                              userName: Z,
                                              displayNameStyles: ee,
                                              effectDisplayType: j ? E.G.PLAIN : E.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: w,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: a()(b.H, x && b.Mk),
                                children: [
                                    (0, i.jsx)(_.eu, {
                                        src: K ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: J,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: K ? "#706F74" : "#aaaab2",
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
