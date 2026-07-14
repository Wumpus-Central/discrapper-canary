"use strict";
n.d(t, { a: () => b, A: () => M });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(462887),
    d = n(778712),
    c = n(652215),
    u = n(346055),
    _ = n(97808),
    E = n(736653),
    A = n(262295),
    h = n(609425),
    I = n(922301),
    f = n(660184),
    p = n(685073),
    T = n(534400),
    m = n(919395),
    g = n(252732),
    S = n(696451),
    N = n(290863),
    C = n(162232),
    O = n(88686),
    R = n(780898),
    L = n(174755),
    D = n(375708),
    y = n(136958);
let v = { xlarge: d._3.SIZE_48, large: d._3.SIZE_40, small: d._3.SIZE_24, xsmall: d._3.SIZE_20, default: d._3.SIZE_32 },
    b = r.memo(function (e) {
        let {
                user: t,
                guildId: n,
                nameplate: a,
                nameplateData: d,
                className: b,
                innerClassName: M,
                isHighlighted: P,
                showStatus: U,
                showPlaceholderUser: w,
                pendingGlobalName: G,
                pendingNickname: x,
                pendingAvatarDecoration: k,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: V,
                hideDecorators: B = !1,
                nameplatePreviewSize: H = "default",
                skipEffectDisplayName: j = !1,
                width: W,
            } = e,
            Y = (0, E.Ay)(),
            K = (0, o.M)(Y),
            $ = (0, R.WK)(a) ?? d,
            z = (0, l.bG)([N.A], () => (null != t ? N.A.getStatus(t.id) : c.clD.ONLINE)),
            q = r.useRef(null),
            Z = (0, l.bG)([S.Ay], () => (null != n && null != t ? S.Ay.getMember(n, t.id) : null)),
            X = null != t ? (0, g.eh)({ pendingNickname: x, pendingGlobalName: G, user: t, guildMember: Z }) : void 0,
            Q = (0, m.lw)({
                pendingValue: k,
                userValue: t?.avatarDecoration,
                guildValue: Z?.avatarDecoration,
                guildId: n,
            }),
            J = r.useMemo(() => v[H], [H]),
            ee = (0, h.A)({ userId: t?.id, guildId: n, pendingDisplayNameStyles: F }),
            et = (0, p.gS)(V),
            en = r.useMemo(
                () =>
                    null != a
                        ? D.intl.formatToPlainString(D.t.YJig7C, { a11y_text: a.label })
                        : D.intl.string(D.t.SZeUdR),
                [a],
            );
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": en,
            style: { color: K ? "white" : "black", width: null != W ? `${W}px` : "100%" },
            children: (0, i.jsxs)(u.M, {
                className: s()(b, y.M4, {
                    [y.s]: "xsmall" === H,
                    [y.EX]: "small" === H,
                    [y.as]: "large" === H,
                    [y.AQ]: "xlarge" === H,
                    [y.gf]: null != W,
                }),
                children: [
                    null != $ &&
                        (0, i.jsx)(
                            L.A,
                            { nameplate: $, hovered: P, placement: O.u.PREVIEW, content: w ? void 0 : q },
                            a?.skuId,
                        ),
                    (0, i.jsxs)("div", {
                        className: y.MU,
                        children: [
                            null != t
                                ? (0, i.jsx)("div", {
                                      className: s()(y.H, !w && y.Mk),
                                      children: (0, i.jsx)(A.A, {
                                          ref: q,
                                          avatar: (0, i.jsx)(C.A, {
                                              user: t,
                                              guildId: n,
                                              avatarSize: J,
                                              status: U ? z : void 0,
                                              avatarDecorationOverride: Q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: B
                                              ? void 0
                                              : (0, i.jsx)(T.Ay, {
                                                    primaryGuild: et,
                                                    userId: t.id,
                                                    contextGuildId: n,
                                                    className: y.id,
                                                }),
                                          name: (0, i.jsx)(f.A, {
                                              userName: X,
                                              displayNameStyles: ee,
                                              effectDisplayType: j ? I.G.PLAIN : I.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: M,
                                          withDisplayNameStyles: null != ee,
                                      }),
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: s()(y.H, w && y.Mk),
                                children: [
                                    (0, i.jsx)(_.eu, {
                                        src: K ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: J,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: K ? "#706F74" : "#aaaab2",
                                        className: y.my,
                                    }),
                                    (0, i.jsx)("div", { className: y.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    M = b;
