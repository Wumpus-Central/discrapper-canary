a.d(t, { a: () => k, A: () => L });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(17928),
    o = a(462887),
    c = a(778712),
    d = a(652215),
    u = a(247928),
    h = a(97808),
    p = a(736653),
    m = a(262295),
    f = a(609425),
    b = a(922301),
    _ = a(368919),
    g = a(685073),
    x = a(534400),
    v = a(919395),
    A = a(252732),
    E = a(696451),
    y = a(290863),
    I = a(162232),
    S = a(88686),
    j = a(780898),
    C = a(174755),
    T = a(985018),
    R = a(136958);
let w = { xlarge: c._3.SIZE_48, large: c._3.SIZE_40, small: c._3.SIZE_24, xsmall: c._3.SIZE_20, default: c._3.SIZE_32 },
    k = r.memo(function (e) {
        let {
                user: t,
                guildId: a,
                nameplate: l,
                nameplateData: c,
                className: k,
                innerClassName: L,
                isHighlighted: N,
                showStatus: O,
                showPlaceholderUser: P,
                pendingGlobalName: D,
                pendingNickname: M,
                pendingAvatarDecoration: U,
                pendingDisplayNameStyles: F,
                pendingPrimaryGuildId: V,
                nameplatePreviewSize: B = "default",
                skipEffectDisplayName: G = !1,
                width: H,
            } = e,
            W = (0, p.Ay)(),
            z = (0, o.M)(W),
            Z = (0, j.WK)(l) ?? c,
            K = (0, s.bG)([y.A], () => (null != t ? y.A.getStatus(t.id) : d.clD.ONLINE)),
            Y = r.useRef(null),
            X = (0, s.bG)([E.Ay], () => (null != a && null != t ? E.Ay.getMember(a, t.id) : null)),
            $ = null != t ? (0, A.eh)({ pendingNickname: M, pendingGlobalName: D, user: t, guildMember: X }) : void 0,
            J = (0, v.lw)({
                pendingValue: U,
                userValue: t?.avatarDecoration,
                guildValue: X?.avatarDecoration,
                guildId: a,
            }),
            q = r.useMemo(() => w[B], [B]),
            Q = (0, f.A)({ userId: t?.id, guildId: a, pendingDisplayNameStyles: F }),
            ee = (0, g.gS)(V),
            et = r.useMemo(
                () =>
                    null != l
                        ? T.intl.formatToPlainString(T.t.YJig7C, { a11y_text: l.label })
                        : T.intl.string(T.t.SZeUdR),
                [l],
            );
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": et,
            style: { color: z ? "white" : "black", width: null != H ? `${H}px` : "100%" },
            children: (0, n.jsxs)(u.M, {
                className: i()(k, R.M4, {
                    [R.s]: "xsmall" === B,
                    [R.EX]: "small" === B,
                    [R.as]: "large" === B,
                    [R.AQ]: "xlarge" === B,
                    [R.gf]: null != H,
                }),
                children: [
                    null != Z &&
                        (0, n.jsx)(
                            C.A,
                            { nameplate: Z, hovered: N, placement: S.u.PREVIEW, content: P ? void 0 : Y },
                            l?.skuId,
                        ),
                    (0, n.jsxs)("div", {
                        className: R.MU,
                        children: [
                            null != t
                                ? (0, n.jsx)("div", {
                                      className: i()(R.H, !P && R.Mk),
                                      children: (0, n.jsx)(m.A, {
                                          ref: Y,
                                          avatar: (0, n.jsx)(I.A, {
                                              user: t,
                                              guildId: a,
                                              avatarSize: q,
                                              status: O ? K : void 0,
                                              avatarDecorationOverride: J,
                                              "aria-hidden": !0,
                                          }),
                                          decorators: (0, n.jsx)(x.Ay, {
                                              primaryGuild: ee,
                                              userId: t.id,
                                              contextGuildId: a,
                                              className: R.id,
                                          }),
                                          name: (0, n.jsx)(_.A, {
                                              userName: $,
                                              displayNameStyles: Q,
                                              effectDisplayType: G ? b.G.PLAIN : b.G.ANIMATED,
                                              loop: !0,
                                          }),
                                          innerClassName: L,
                                          withDisplayNameStyles: null != Q,
                                      }),
                                  })
                                : null,
                            (0, n.jsxs)("div", {
                                className: i()(R.H, P && R.Mk),
                                children: [
                                    (0, n.jsx)(h.eu, {
                                        src: z ? "/assets/2ca6b6f4a73913ed.png" : "/assets/9d8606c1376ca484.png",
                                        size: q,
                                        "aria-hidden": !0,
                                        status: d.clD.ONLINE,
                                        statusColor: z ? "#706F74" : "#aaaab2",
                                        className: R.my,
                                    }),
                                    (0, n.jsx)("div", { className: R.gM }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    L = k;
