l.d(e, { a: () => w, A: () => G });
var s = l(477900),
    i = l(582128),
    t = l(503698),
    r = l.n(t),
    d = l(17928),
    n = l(462887),
    u = l(778712),
    c = l(652215),
    o = l(346055),
    m = l(97808),
    p = l(736653),
    v = l(262295),
    x = l(609425),
    g = l(922301),
    h = l(660184),
    N = l(685073),
    A = l(534400),
    I = l(919395),
    y = l(252732),
    _ = l(696451),
    j = l(290863),
    S = l(162232),
    E = l(88686),
    M = l(780898),
    b = l(174755),
    f = l(375708),
    k = l(307703);
let D = { xlarge: u._3.SIZE_48, large: u._3.SIZE_40, small: u._3.SIZE_24, xsmall: u._3.SIZE_20, default: u._3.SIZE_32 },
    w = i.memo(function (a) {
        let {
                user: e,
                guildId: l,
                nameplate: t,
                nameplateData: u,
                className: w,
                innerClassName: G,
                isHighlighted: Z,
                showStatus: C,
                showPlaceholderUser: O,
                pendingGlobalName: V,
                pendingNickname: L,
                pendingAvatar: P,
                pendingAvatarDecoration: R,
                pendingDisplayNameStyles: T,
                pendingPrimaryGuildId: z,
                hideDecorators: H = !1,
                nameplatePreviewSize: U = "default",
                skipEffectDisplayName: W = !1,
                width: F,
            } = a,
            J = (0, p.Ay)(),
            K = (0, n.M)(J),
            Q = (0, M.WK)(t) ?? u,
            X = (0, d.bG)([j.A], () => (null != e ? j.A.getStatus(e.id) : c.clD.ONLINE)),
            Y = i.useRef(null),
            $ = (0, d.bG)([_.Ay], () => (null != l && null != e ? _.Ay.getMember(l, e.id) : null)),
            q = null != e ? (0, y.eh)({ pendingNickname: L, pendingGlobalName: V, user: e, guildMember: $ }) : void 0,
            B = (0, I.lw)({
                pendingValue: R,
                userValue: e?.avatarDecoration,
                guildValue: $?.avatarDecoration,
                guildId: l,
            }),
            aa = i.useMemo(() => D[U], [U]),
            ae = (0, x.A)({ userId: e?.id, guildId: l, pendingDisplayNameStyles: T }),
            al = (0, N.gS)(z),
            as = i.useMemo(
                () =>
                    null != t
                        ? f.intl.formatToPlainString(f.t.YJig7C, { a11y_text: t.label })
                        : f.intl.string(f.t.SZeUdR),
                [t],
            );
        return (0, s.jsx)("div", {
            role: "img",
            "aria-label": as,
            style: { color: K ? "white" : "black", width: null != F ? `${F}px` : "100%" },
            children: (0, s.jsxs)(o.M, {
                className: r()(w, k.M4, {
                    [k.s]: "xsmall" === U,
                    [k.EX]: "small" === U,
                    [k.as]: "large" === U,
                    [k.AQ]: "xlarge" === U,
                    [k.gf]: null != F,
                }),
                children: [
                    null != Q &&
                        (0, s.jsx)(
                            b.A,
                            { nameplate: Q, hovered: Z, placement: E.u.PREVIEW, content: O ? void 0 : Y },
                            t?.skuId,
                        ),
                    (0, s.jsxs)("div", {
                        className: k.MU,
                        children: [
                            null != e
                                ? (0, s.jsx)("div", {
                                      className: r()(k.H, !O && k.Mk),
                                      children: (0, s.jsx)(v.A, {
                                          ref: Y,
                                          avatar: (0, s.jsx)(S.A, {
                                              user: e,
                                              guildId: l,
                                              avatarSize: aa,
                                              status: C ? X : void 0,
                                              avatarOverride: P,
                                              avatarDecorationOverride: B,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: H
                                              ? void 0
                                              : (0, s.jsx)(A.Ay, {
                                                    primaryGuild: al,
                                                    userId: e.id,
                                                    contextGuildId: l,
                                                    className: k.id,
                                                }),
                                          name: (0, s.jsx)(h.A, {
                                              userName: q,
                                              displayNameStyles: ae,
                                              effectDisplayType: W ? g.G.PLAIN : g.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: G,
                                          withDisplayNameStyles: null != ae,
                                      }),
                                  })
                                : null,
                            (0, s.jsxs)("div", {
                                className: r()(k.H, O && k.Mk),
                                children: [
                                    (0, s.jsx)(m.eu, {
                                        src: K ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: aa,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: K ? "#706F74" : "#aaaab2",
                                        className: k.my,
                                    }),
                                    (0, s.jsx)("div", { className: k.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    G = w;
