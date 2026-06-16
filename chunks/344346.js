l.d(e, { a: () => w, A: () => G });
var s = l(627968),
    i = l(64700),
    d = l(503698),
    r = l.n(d),
    t = l(17928),
    n = l(462887),
    c = l(778712),
    u = l(652215),
    m = l(346055),
    o = l(97808),
    v = l(736653),
    x = l(262295),
    h = l(609425),
    N = l(922301),
    p = l(660184),
    g = l(685073),
    j = l(534400),
    A = l(919395),
    y = l(252732),
    I = l(696451),
    S = l(290863),
    f = l(162232),
    _ = l(88686),
    E = l(780898),
    M = l(174755),
    b = l(375708),
    k = l(136958);
let D = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    w = i.memo(function (a) {
        let {
                user: e,
                guildId: l,
                nameplate: d,
                nameplateData: c,
                className: w,
                innerClassName: G,
                isHighlighted: Z,
                showStatus: C,
                showPlaceholderUser: U,
                pendingGlobalName: R,
                pendingNickname: T,
                pendingAvatarDecoration: V,
                pendingDisplayNameStyles: L,
                pendingPrimaryGuildId: O,
                hideDecorators: P = !1,
                nameplatePreviewSize: W = "default",
                skipEffectDisplayName: z = !1,
                width: H,
            } = a,
            Q = (0, v.Ay)(),
            B = (0, n.M)(Q),
            F = (0, E.WK)(d) ?? c,
            J = (0, t.bG)([S.A], () => (null != e ? S.A.getStatus(e.id) : u.clD.ONLINE)),
            K = i.useRef(null),
            X = (0, t.bG)([I.Ay], () => (null != l && null != e ? I.Ay.getMember(l, e.id) : null)),
            Y = null != e ? (0, y.eh)({ pendingNickname: T, pendingGlobalName: R, user: e, guildMember: X }) : void 0,
            $ = (0, A.lw)({
                pendingValue: V,
                userValue: e?.avatarDecoration,
                guildValue: X?.avatarDecoration,
                guildId: l,
            }),
            q = i.useMemo(() => D[W], [W]),
            aa = (0, h.A)({ userId: e?.id, guildId: l, pendingDisplayNameStyles: L }),
            ae = (0, g.gS)(O),
            al = i.useMemo(
                () =>
                    null != d
                        ? b.intl.formatToPlainString(b.t.YJig7C, { a11y_text: d.label })
                        : b.intl.string(b.t.SZeUdR),
                [d],
            );
        return (0, s.jsx)("div", {
            role: "img",
            "aria-label": al,
            style: { color: B ? "white" : "black", width: null != H ? `${H}px` : "100%" },
            children: (0, s.jsxs)(m.M, {
                className: r()(w, k.M4, {
                    [k.s]: "xsmall" === W,
                    [k.EX]: "small" === W,
                    [k.as]: "large" === W,
                    [k.AQ]: "xlarge" === W,
                    [k.gf]: null != H,
                }),
                children: [
                    null != F &&
                        (0, s.jsx)(
                            M.A,
                            { nameplate: F, hovered: Z, placement: _.u.PREVIEW, content: U ? void 0 : K },
                            d?.skuId,
                        ),
                    (0, s.jsxs)("div", {
                        className: k.MU,
                        children: [
                            null != e
                                ? (0, s.jsx)("div", {
                                      className: r()(k.H, !U && k.Mk),
                                      children: (0, s.jsx)(x.A, {
                                          ref: K,
                                          avatar: (0, s.jsx)(f.A, {
                                              user: e,
                                              guildId: l,
                                              avatarSize: q,
                                              status: C ? J : void 0,
                                              avatarDecorationOverride: $,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: P
                                              ? void 0
                                              : (0, s.jsx)(j.Ay, {
                                                    primaryGuild: ae,
                                                    userId: e.id,
                                                    contextGuildId: l,
                                                    className: k.id,
                                                }),
                                          name: (0, s.jsx)(p.A, {
                                              userName: Y,
                                              displayNameStyles: aa,
                                              effectDisplayType: z ? N.G.PLAIN : N.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: G,
                                          withDisplayNameStyles: null != aa,
                                      }),
                                  })
                                : null,
                            (0, s.jsxs)("div", {
                                className: r()(k.H, U && k.Mk),
                                children: [
                                    (0, s.jsx)(o.eu, {
                                        src: B ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: q,
                                        "aria-hidden": !0,
                                        status: u.clD.ONLINE,
                                        statusColor: B ? "#706F74" : "#aaaab2",
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
