l.r(n), l.d(n, { default: () => eT });
var a = l(627968),
    s = l(64700),
    t = l(17928),
    i = l(686956),
    r = l(456412),
    d = l(943712),
    c = l(736056),
    o = l(473529),
    u = l(503698),
    h = l.n(u),
    m = l(702841),
    x = l(855473),
    g = l(140735),
    _ = l(312138),
    A = l(689175),
    f = l(241524),
    j = l(58149),
    b = l(104510),
    I = l(750943),
    N = l(821609),
    C = l(192308),
    v = l(707554),
    p = l(534514),
    E = l(781696),
    y = l(736653),
    G = l(548118),
    M = l(57991),
    L = l(961973),
    D = l(997509),
    w = l(855687),
    R = l(576705),
    T = l(486020),
    S = l(652215),
    k = l(985018),
    H = l(589258);
function B(e) {
    let { guild: n } = e,
        {
            variant: l,
            icon: s,
            text: t,
        } = n.features.has(S.GuildFeatures.BANNER)
            ? { variant: "overlay-secondary", icon: I.X, text: k.intl.string(k.t.b0y3DL) }
            : { variant: "expressive", icon: b._, text: k.intl.string(k.t["+7XY31"]) };
    return (0, a.jsx)("div", {
        className: H.SY,
        children: (0, a.jsx)(N.$, {
            variant: l,
            icon: s,
            text: t,
            onClick: () => {
                D.A.open(n.id, S.BEX.ONBOARDING, void 0, S.nd0.SERVER_GUIDE);
            },
        }),
    });
}
let O = s.memo(function (e) {
    let n,
        { guild: i, titleClassName: r } = e,
        { homeHeaderImage: d, isHomeHeaderImageSet: c } = {
            homeHeaderImage: (n = s.useMemo(
                () => (null == i ? null : T.Ay.getGuildHomeHeaderURL({ id: i.id, homeHeader: i.homeHeader })),
                [i],
            )),
            isHomeHeaderImageSet: null != n,
            homeHeaderScroll: 200 * (null != n),
        },
        o = (0, L.A2)(i.id),
        u = (0, t.bG)([R.A], () => (0, w.K)(R.A, i)),
        m = (0, y.Ay)();
    return (0, a.jsxs)("div", {
        className: H.wx,
        children: [
            (0, a.jsxs)("div", {
                className: H.w5,
                children: [
                    (0, a.jsx)("div", {
                        className: h()(H.NC, { [H.KN]: !c }),
                        style: {
                            backgroundImage: `url(${c ? d : "dark" === m ? "/assets/36eaea47ad7cb391.svg" : "/assets/3655f5d8659277b4.svg"})`,
                        },
                    }),
                    o && (0, a.jsx)(B, { guild: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: H.oB,
                children: (0, a.jsxs)("div", {
                    className: r,
                    children: [
                        (0, a.jsx)(G.Ay, { className: H.nr, guild: i, size: G.Ay.Sizes.XLARGE, active: !0 }),
                        (0, a.jsx)(v.F, {
                            children: (0, a.jsxs)("div", {
                                className: H.Bv,
                                children: [
                                    (0, a.jsx)(p.D, { className: H.Bv, variant: "heading-xxl/bold", children: i.name }),
                                    (0, a.jsx)(M.A, {
                                        size: 24,
                                        guild: i,
                                        tooltipPosition: "bottom",
                                        tooltipColor: E.ST.Colors.PRIMARY,
                                    }),
                                    u &&
                                        (0, a.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: H.ak,
                                            children: (0, a.jsx)(N.$, {
                                                variant: "secondary",
                                                text: k.intl.string(k.t.VINpSK),
                                                onClick: () =>
                                                    (0, C.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            l.e("28136"),
                                                            l.e("22547"),
                                                            l.e("42738"),
                                                        ]).then(l.bind(l, 1310));
                                                        return (n) =>
                                                            (0, a.jsx)(e, { ...n, guild: i, source: S.PE1.GUILD_HOME });
                                                    }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
});
var U = l(742589),
    V = l(138298),
    z = l(761640),
    K = l(954571),
    $ = l(225142),
    W = l(701785),
    F = l(65995),
    P = l(978165),
    X = l(140130),
    Y = l(274541),
    Q = l(746080);
function Z(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        s = (0, t.bG)([z.Ay], () => z.Ay.getSidebarState(Q.VV.GUILD_HOME));
    if (null == s || null == s.channelId) return null;
    let i = n - S.MdR - 656;
    return (0, a.jsx)(X.A, {
        sidebarType: X.X.HomeSidebar,
        maxWidth: i,
        onWidthChange: l,
        children: (0, a.jsx)(Y.A, {
            channelId: s.channelId,
            baseChannelId: Q.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
var q = l(261958),
    J = l(939249),
    ee = l(834730),
    en = l(359778),
    el = l(720149),
    ea = l(256265),
    es = l(90084),
    et = l(42780),
    ei = l(734057),
    er = l(232835);
function ed(e) {
    return (0, m.yK)([W.h, ei.A], () => W.h.getResourceChannels(e).filter((e) => null != ei.A.getChannel(e.channelId)));
}
var ec = l(354476);
let eo = s.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: l, fetchGuildProfile: t } = (0, es.u)(n.id);
        return (s.useEffect(() => {
            t();
        }, [t]),
        null == l)
            ? null
            : (0, a.jsx)(et.Ay, { profile: l, disableCTA: !0, disableGuildNameClick: !0 });
    }),
    eu = (e) => {
        let n,
            { channelId: l, title: t, icon: i } = e,
            r = (0, m.bG)([ei.A], () => ei.A.getChannel(l)),
            d = (0, m.bG)([er.A], () => er.A.getMessages(l)),
            c = (0, m.bG)([R.A], () => R.A.can(S.xBc.VIEW_CHANNEL, r)),
            o = d.first(),
            u = (0, ea.yC)(o, !1),
            h = u?.length > 0 ? u[0] : null,
            x = null != r && null == o && !d.loadingMore && !d.ready && !d.hasFetched && c;
        return (
            s.useEffect(() => {
                x && el.A.fetchMessages({ channelId: l, after: l, limit: 5 });
            }, [l, x]),
            (0, a.jsx)(
                J.D,
                {
                    className: ec.Km,
                    onClick: (e) => {
                        null != r &&
                            (e.shiftKey
                                ? (0, $.bN)(r.guild_id, r.id)
                                : V.A.openResourceChannelAsSidebar({ guildId: r.guild_id, channelId: r.id }));
                    },
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [
                            ((n = T.Ay.getResourceChannelIconURL({ channelId: l, icon: i })),
                            null != i && null != n
                                ? (0, a.jsx)("img", { src: n, className: ec.Oz, alt: "", "aria-hidden": !0 })
                                : null != h
                                  ? (0, a.jsx)("img", { className: ec.Oz, src: h.src, alt: h.alt })
                                  : (0, a.jsx)("div", {
                                        className: ec.jM,
                                        children: (0, a.jsx)(q.u, { size: "xs", color: "currentColor" }),
                                    })),
                            (0, a.jsx)(ee.E, {
                                className: ec.T2,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: t,
                            }),
                        ],
                    }),
                },
                l,
            )
        );
    },
    eh = s.memo(function (e) {
        let { guild: n } = e,
            l = ed(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)(en.Z, {
                  className: ec.u2,
                  children: (0, a.jsxs)("div", {
                      className: ec.Ln,
                      children: [
                          (0, a.jsx)(p.D, {
                              className: ec.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: k.intl.string(k.t.xwY4La),
                          }),
                          (0, a.jsx)("div", {
                              className: ec.Tb,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      eu,
                                      { channelId: e.channelId, title: e.title, icon: e.icon },
                                      `widget-resource-${e.channelId}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    em = s.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)("aside", {
            className: ec.pz,
            children: [(0, a.jsx)(eo, { guild: n }), l && (0, a.jsx)(eh, { guild: n })],
        });
    });
var ex = l(283012),
    eg = l(710948),
    e_ = l(46054),
    eA = l(77350),
    ef = l(294520),
    ej = l(34337),
    eb = l(976860),
    eI = l(253932),
    eN = l(808728),
    eC = l(531685),
    ev = l(361723),
    ep = l(992595);
function eE(e) {
    let n,
        l,
        { firstMedia: s, channelId: i } = e,
        r = (0, t.bG)([ei.A], () => ei.A.getChannel(i)),
        [d, c] = (0, ef.eJ)({ media: s, channel: r }),
        o = (0, ef.rx)(c),
        u = (0, t.bG)([eC.A], () => eC.A.isFocused()),
        m = (0, eA.ge)(s.src),
        x = eI.kt.useSetting(),
        { src: g, width: _, height: A, alt: f } = s;
    return (
        A > _ ? (l = 72) : (n = 72),
        (0, a.jsxs)("div", {
            className: ev.$_,
            children: [
                (0, ej.LL)({
                    src: g,
                    maxHeight: n,
                    maxWidth: l,
                    width: _,
                    height: A,
                    alt: null != f && d && null != o ? o : f,
                    autoPlay: x,
                    animated: m && !d && u,
                    containerClassName: ev.iT,
                    imageClassName: h()({ [ev.cd]: d }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                d && (0, a.jsx)(eg.A, { obscureReason: c, iconClassname: ev.yo }),
            ],
        })
    );
}
function ey(e) {
    let { resource: n } = e,
        l = (0, t.bG)([ei.A], () => ei.A.getChannel(n.channelId)),
        i = (0, t.bG)([er.A], () => er.A.getMessages(n.channelId)),
        r = (0, t.bG)([R.A], () => R.A.can(S.xBc.VIEW_CHANNEL, l)),
        d = i.first(),
        c = (function (e) {
            if (null == e) return null;
            if (e.content?.length > 0) return e.content;
            if (e.embeds?.length > 0) {
                for (let n of e.embeds)
                    if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription;
            }
            return null;
        })(d),
        o = (0, ea.yC)(d, !1),
        u = o?.length > 0 ? o[0] : null,
        m = null != l && null == i.first() && !i.loadingMore && !i.ready && !i.hasFetched && r;
    if (
        (s.useEffect(() => {
            m && el.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, m]),
        null == l || null == l.guild_id)
    )
        return null;
    let x = T.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        g = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(J.D, {
        className: ev.G9,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, $.bN)(l.guild_id, l.id)
                    : V.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, a.jsxs)("div", {
                className: ev.Qs,
                children: [
                    (0, a.jsx)(ee.E, {
                        className: ev.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    g &&
                        null != c &&
                        (0, a.jsx)(ee.E, {
                            className: ev.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: e_.A.parse(c, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !g &&
                        (0, a.jsx)(ee.E, {
                            className: h()(ev.BK, ep.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: e_.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != x
                ? (0, a.jsx)("div", {
                      className: ev.$_,
                      children: (0, a.jsx)("img", {
                          src: x,
                          className: ev.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == x && null != u ? (0, a.jsx)(eE, { firstMedia: u, channelId: n.channelId }) : null,
        ],
    });
}
function eG(e) {
    let { guild: n, isNewMember: l } = e,
        s = ed(n.id);
    return 0 === s.length
        ? l
            ? null
            : (0, a.jsxs)("div", {
                  className: ev.do,
                  children: [
                      (0, a.jsx)(p.D, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: k.intl.string(k.t.owvC9U),
                      }),
                      (0, a.jsx)("img", { className: ev.QT, src: "/assets/159a09aadfe4a53d.svg", alt: "" }),
                      (0, a.jsx)("div", {
                          className: ev.nM,
                          children: (0, a.jsx)(N.$, {
                              size: "md",
                              variant: "primary",
                              onClick: () => {
                                  let e = eN.Ay.getDefaultChannel(n.id);
                                  null != e && (0, eb.pX)(S.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: k.intl.string(k.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, a.jsxs)("div", {
              className: ev.kL,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: k.intl.string(k.t.xwY4La),
                  }),
                  s.map((e) => (0, a.jsx)(ey, { resource: e }, e.channelId)),
              ],
          });
}
var eM = l(913423),
    eL = l(964623);
let eD = s.memo(function (e) {
    let { guild: n } = e;
    return (0, a.jsxs)(U.A, {
        channelId: Q.VV.GUILD_HOME,
        guildId: n.id,
        className: h()(ec.DD, ec.Tp),
        innerClassname: ec.vi,
        children: [
            (0, a.jsx)(U.A.Icon, { icon: x.Z, "aria-hidden": !0 }),
            (0, a.jsxs)(U.A.Title, { children: [(0, a.jsx)(g.A, { children: n.name }), k.intl.string(k.t.VbpLyU)] }),
        ],
    });
});
var ew = l(71393);
let eR = (0, r.A)(function (e) {
        let { guild: n, width: l } = e,
            t = (0, m.bG)([z.Ay], () => z.Ay.getSection(Q.VV.GUILD_HOME)),
            [r, d] = s.useState(!1),
            [c, o] = s.useState(S.da6),
            u = t === S.YvQ.SIDEBAR_CHAT,
            x = (0, _.R7)(),
            g = (0, m.bG)([W.h], () => W.h.getSettings(n.id)),
            b = g?.welcomeMessage,
            I = (0, P.A)(n.id),
            N = !I && (g?.resourceChannels?.length ?? 0) === 0,
            C = (0, f.A)("(max-width: 1300px)"),
            v = l - S.MdR - c,
            p = (u && v < 1020) || C || N;
        return (s.useEffect(() => {
            g === W.A
                ? (0, $.ag)(n.id)
                : null != g &&
                  K.default.track(S.HAw.SERVER_GUIDE_VIEWED, {
                      ...(0, j.H$)(n.id),
                      num_member_actions: g.newMemberActions?.length ?? 0,
                      num_member_actions_completed: Object.keys(F.A.getCompletedActions(n.id) ?? {}).length,
                      num_resource_channels: g.resourceChannels?.length ?? 0,
                  });
        }, [n.id, g]),
        s.useEffect(
            () => () => {
                V.A.closeChannelSidebar(Q.VV.GUILD_HOME);
            },
            [],
        ),
        s.useEffect(() => {
            N && g !== W.A && i.A.escapeToDefaultChannel(n.id);
        }, [n.id, N, g]),
        N)
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsxs)("div", {
                          className: h()(eL.TE, ec.Tp, { [eL.js]: u, [eL.jl]: u && r }),
                          children: [
                              (0, a.jsx)(eD, { guild: n }),
                              (0, a.jsx)(A.Gt, {
                                  ...x,
                                  children: (0, a.jsxs)("div", {
                                      className: h()(ec.$d, { [ec.Mk]: p }),
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: ec.QI,
                                              children: (0, a.jsx)(O, { guild: n, titleClassName: C ? ec.H2 : void 0 }),
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: h()(ec.xr, ec.QI),
                                              children: [
                                                  (0, a.jsxs)("div", {
                                                      className: ec.rb,
                                                      children: [
                                                          I && (0, a.jsx)(eM.A, { guildId: n.id, welcomeMessage: b }),
                                                          I && (0, a.jsx)(ex.A, { guildId: n.id }),
                                                          !I || p ? (0, a.jsx)(eG, { guild: n, isNewMember: I }) : null,
                                                      ],
                                                  }),
                                                  p ? null : (0, a.jsx)(em, { guild: n, isNewMember: I }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          ],
                      }),
                      u
                          ? (0, a.jsx)(Z, {
                                pageWidth: l,
                                onSidebarResize: (e, n) => {
                                    d(n), o(e);
                                },
                            })
                          : null,
                  ],
              });
    }),
    eT = function (e) {
        let { guildId: n } = e,
            l = (0, t.bG)([ew.A], () => ew.A.getGuild(n), [n]),
            r = (0, t.bG)([c.A], () => c.A.hasLoadedExperiments),
            u = (0, o.d)(n);
        return (s.useEffect(() => {
            if (r && !u) return void i.A.escapeToDefaultChannel(n);
        }, [n, r, u]),
        null != l && u)
            ? (0, a.jsx)(eR, { guild: l })
            : (0, a.jsx)(d.A, { channelId: void 0 });
    };
