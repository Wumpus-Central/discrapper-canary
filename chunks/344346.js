l.d(e, { a: () => w, A: () => G });
var s = l(627968),
    i = l(64700),
    t = l(503698),
    d = l.n(t),
    r = l(17928),
    n = l(462887),
    u = l(778712),
    c = l(652215),
    o = l(346055),
    m = l(97808),
    p = l(736653),
    x = l(262295),
    g = l(609425),
    h = l(922301),
    v = l(660184),
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
    k = l(136958);
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
                showPlaceholderUser: V,
                pendingGlobalName: L,
                pendingNickname: O,
                pendingAvatarDecoration: P,
                pendingDisplayNameStyles: R,
                pendingPrimaryGuildId: T,
                hideDecorators: z = !1,
                nameplatePreviewSize: H = "default",
                skipEffectDisplayName: U = !1,
                width: W,
            } = a,
            F = (0, p.Ay)(),
            J = (0, n.M)(F),
            K = (0, M.WK)(t) ?? u,
            Q = (0, r.bG)([j.A], () => (null != e ? j.A.getStatus(e.id) : c.clD.ONLINE)),
            X = i.useRef(null),
            Y = (0, r.bG)([_.Ay], () => (null != l && null != e ? _.Ay.getMember(l, e.id) : null)),
            $ = null != e ? (0, y.eh)({ pendingNickname: O, pendingGlobalName: L, user: e, guildMember: Y }) : void 0,
            q = (0, I.lw)({
                pendingValue: P,
                userValue: e?.avatarDecoration,
                guildValue: Y?.avatarDecoration,
                guildId: l,
            }),
            B = i.useMemo(() => D[H], [H]),
            aa = (0, g.A)({ userId: e?.id, guildId: l, pendingDisplayNameStyles: R }),
            ae = (0, N.gS)(T),
            al = i.useMemo(
                () =>
                    null != t
                        ? f.intl.formatToPlainString(f.t.YJig7C, { a11y_text: t.label })
                        : f.intl.string(f.t.SZeUdR),
                [t],
            );
        return (0, s.jsx)("div", {
            role: "img",
            "aria-label": al,
            style: { color: J ? "white" : "black", width: null != W ? `${W}px` : "100%" },
            children: (0, s.jsxs)(o.M, {
                className: d()(w, k.M4, {
                    [k.s]: "xsmall" === H,
                    [k.EX]: "small" === H,
                    [k.as]: "large" === H,
                    [k.AQ]: "xlarge" === H,
                    [k.gf]: null != W,
                }),
                children: [
                    null != K &&
                        (0, s.jsx)(
                            b.A,
                            { nameplate: K, hovered: Z, placement: E.u.PREVIEW, content: V ? void 0 : X },
                            t?.skuId,
                        ),
                    (0, s.jsxs)("div", {
                        className: k.MU,
                        children: [
                            null != e
                                ? (0, s.jsx)("div", {
                                      className: d()(k.H, !V && k.Mk),
                                      children: (0, s.jsx)(x.A, {
                                          ref: X,
                                          avatar: (0, s.jsx)(S.A, {
                                              user: e,
                                              guildId: l,
                                              avatarSize: B,
                                              status: C ? Q : void 0,
                                              avatarDecorationOverride: q,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: z
                                              ? void 0
                                              : (0, s.jsx)(A.Ay, {
                                                    primaryGuild: ae,
                                                    userId: e.id,
                                                    contextGuildId: l,
                                                    className: k.id,
                                                }),
                                          name: (0, s.jsx)(v.A, {
                                              userName: $,
                                              displayNameStyles: aa,
                                              effectDisplayType: U ? h.G.PLAIN : h.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: G,
                                          withDisplayNameStyles: null != aa,
                                      }),
                                  })
                                : null,
                            (0, s.jsxs)("div", {
                                className: d()(k.H, V && k.Mk),
                                children: [
                                    (0, s.jsx)(m.eu, {
                                        src: J ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: B,
                                        "aria-hidden": !0,
                                        status: c.clD.ONLINE,
                                        statusColor: J ? "#706F74" : "#aaaab2",
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
