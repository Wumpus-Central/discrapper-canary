l.d(i, { default: () => e0 });
var s = l(627968),
    t = l(64700),
    n = l(110259),
    a = l(189213),
    r = l(224640),
    d = l(289873),
    o = l(331322),
    c = l(821609),
    u = l(825484),
    m = l(123292),
    x = l(702841),
    g = l(778712),
    h = l(504394),
    j = l(966327),
    v = l(964486),
    _ = l(503698),
    p = l.n(_),
    f = l(20742),
    N = l(834730),
    I = l(241524),
    A = l(260451),
    E = l(287809),
    C = l(985018),
    b = l(197691);
function y(e) {
    let { friendMemberIds: i, className: l, avatarSize: n = g._3.SIZE_16 } = e,
        a = (0, x.yK)([E.default], () =>
            i
                .slice(0, 3)
                .map((e) => E.default.getUser(e))
                .filter((e) => null != e),
        ),
        { enabled: r } = A.SH.useConfig({ location: "InviteFriendMembers" }),
        d = t.useCallback(
            (e, i) => (0, s.jsx)(N.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: e }, i),
            [],
        );
    if (0 === a.length) return null;
    let o = a[0],
        c = {
            count: i.length - 1,
            username: o.username,
            username2: 2 === i.length && a.length >= 2 ? a[1].username : "",
        },
        u = r ? C.intl.format(C.t.qnYumI, { usernameHook: d, ...c }) : C.intl.format(C.t["5NHEPu"], c);
    return (0, s.jsxs)("div", {
        className: p()(b.kL, l),
        children: [
            (0, s.jsx)("div", {
                className: b.yA,
                style: { maxHeight: `${(0, g.FT)(n)}px` },
                children: a.map((e, i) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: b.R3,
                            style: { zIndex: a.length - i },
                            children: (0, s.jsx)(j.A, { user: e, size: n }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-subtle", children: u }),
        ],
    });
}
var T = l(460760),
    k = l(115703),
    S = l(47762),
    L = l(990078),
    P = l(825860),
    D = l(661531),
    M = l(939249),
    z = l(573435),
    R = l(569926),
    U = l(822017);
function G(e) {
    let { game: i, activityLevel: l } = e,
        { data: t } = (0, R.I)(i.id),
        n = t?.getCoverURL();
    if (null == n) return null;
    let a = l?.level === S._.HIGH;
    return (0, s.jsx)(L.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, s.jsxs)("div", {
            className: U.Xy,
            children: [
                (0, s.jsx)("img", { className: U._s, src: n, alt: i.name }),
                a &&
                    (0, s.jsx)(z.Ay, {
                        mask: z.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: U.Sy,
                        children: (0, s.jsx)("div", {
                            className: U.oZ,
                            children: (0, s.jsx)(P.Y, {
                                color: D.A.unsafe_rawColors.ORANGE_330.css,
                                width: 12,
                                height: 12,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function O(e) {
    let { gamesToDisplay: i, lastGameToDisplay: l, remainingGames: n, activity: a, onExpandClick: r } = e,
        [d, c] = t.useState(!1),
        { data: u } = (0, R.I)(l?.id),
        m = t.useCallback(() => {
            r?.(), c(!0);
        }, [r]),
        x = t.useMemo(() => {
            if (null == l) return null;
            let e = u?.getCoverURL();
            return null == e
                ? null
                : 0 === n.length || d
                  ? (0, s.jsx)(G, { game: l, activityLevel: a?.[l.id] })
                  : (0, s.jsx)(L.m, {
                        position: "bottom",
                        "aria-label": C.intl.string(C.t.yohc6E),
                        text: C.intl.string(C.t.yohc6E),
                        children: (0, s.jsxs)(M.D, {
                            className: p()(U.Xy, U.oL, U.vk),
                            onClick: m,
                            "aria-label": `Show ${n.length} more games`,
                            children: [
                                (0, s.jsx)("img", { className: p()(U._s, U.tJ), src: e, alt: l.name }),
                                (0, s.jsx)("div", { className: U.Fg }),
                                (0, s.jsx)("div", {
                                    className: U.AZ,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${n.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [l, u, n, a, d, m]);
    if (null == i || 0 === i.length) return null;
    let g = d && n.length > 0 ? n : [];
    return (0, s.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            i.map((e) => (0, s.jsx)(G, { game: e, activityLevel: a?.[e.id] }, e.id)),
            d && n.length > 0 ? g.map((e) => (0, s.jsx)(G, { game: e, activityLevel: a?.[e.id] }, e.id)) : x,
        ],
    });
}
var w = l(438842),
    V = l(879472),
    H = l(649640),
    F = l(954571),
    W = l(17928),
    B = l(683071),
    Y = l(922016),
    Z = l(408278),
    q = l(625903),
    K = l(972387),
    $ = l(539895),
    Q = l(403581),
    X = l(793574),
    J = l(688810),
    ee = l(404374),
    ei = l(772366),
    el = l(652215),
    es = l(788868),
    et = l(310253);
function en(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: n } = (0, J.Ay)(X.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        t.useEffect(() => {
            F.default.track(el.HAw.PREMIUM_UPSELL_VIEWED, {
                type: es.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: el.liQ.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, s.jsxs)(M.D, {
            onClick: () =>
                (0, ei.A)({
                    analyticsSource: { page: el.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: el.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: el.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: p()(et.fA, i),
            children: [
                (0, s.jsx)(Q.t, { size: "md", className: et.Y2, color: ee.k0.PREMIUM_TIER_2 }),
                (0, s.jsx)("span", { className: et.Cq, children: C.intl.string(C.t["4/W4Pz"]) }),
                (0, s.jsx)("span", { className: et.MY, children: C.intl.string(C.t.b6KOkI) }),
            ],
        })
    );
}
var ea = l(960736),
    er = l(398884),
    ed = l(550079),
    eo = l(477782),
    ec = l(253932);
function eu(e) {
    let { invite: i, closePopout: l } = e,
        t = ec.tz.useSetting(),
        {
            nickname: n,
            dmsAllowed: a,
            showActivity: r,
            setNickname: d,
            setDmsAllowed: o,
            setShowActivity: c,
        } = (0, ea.lD)(),
        u = i.is_nickname_changeable;
    return (0, s.jsxs)(ed.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: l,
        "aria-label": C.intl.string(C.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            u
                ? (0, s.jsx)(eo.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: C.intl.string(C.t.me1lRk),
                      value: n,
                      onChange: d,
                      placeholder: C.intl.string(C.t["09Q8yp"]),
                      maxLength: el.d0r,
                  })
                : null,
            (0, s.jsx)(eo.fP, {
                id: "accept-invite-modal-settings-dms",
                label: C.intl.string(C.t["/2ed37"]),
                action: o,
                checked: a,
            }),
            t
                ? (0, s.jsx)(eo.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: C.intl.string(C.t.bN4m1G),
                      action: c,
                      checked: r,
                  })
                : null,
        ],
    });
}
var em = l(963120);
function ex(e) {
    let { invite: i, guild: l, className: n } = e,
        a = (0, W.bG)([E.default], () => E.default.getCurrentUser()),
        { submitting: r, error: d, invite_instance_id: o } = (0, W.cf)([$.A], () => $.A.getProps()),
        m = t.useCallback(() => {
            K.A.acceptInvite(i, o);
        }, [i, o]),
        x = (0, ea.uE)(),
        h =
            "" !== x
                ? C.intl.format(C.t["9sWQNT"], {
                      usernameHook: (e, i) => (0, s.jsx)("span", { className: em.Pb, children: x }, i),
                  })
                : C.intl.string(C.t["e/6Ogt"]),
        v = t.useRef(null),
        [_, p] = t.useState(!1),
        f = t.useCallback(() => {
            _ ||
                F.default.track(el.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: l.id,
                    invite_code: i.code,
                    location: "accept_invite_modal_redesign",
                }),
                p(!_);
        }, [l.id, i.code, _]),
        N = (0, er.Sn)();
    return (0, s.jsxs)("div", {
        className: n,
        children: [
            null != d
                ? (0, s.jsx)("div", { className: em.Un, children: (0, s.jsx)(B.w, { type: "critical", children: d }) })
                : null,
            N ? (0, s.jsx)(en, { className: em.sX }) : null,
            (0, s.jsxs)(u.e, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                wrap: !1,
                children: [
                    (0, s.jsx)(c.$, {
                        onClick: m,
                        loading: r,
                        variant: "primary",
                        disabled: N,
                        text: N ? C.intl.string(C.t.ZNCziL) : h,
                        icon:
                            N || null == a
                                ? void 0
                                : () => (0, s.jsx)(j.A, { "aria-hidden": !0, size: g._3.SIZE_16, user: a }),
                    }),
                    N
                        ? null
                        : (0, s.jsx)(Y.Y, {
                              targetElementRef: v,
                              animation: Y.Y.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: _,
                              autoInvert: !1,
                              onRequestClose: () => p(!1),
                              renderPopout: (e) => (0, s.jsx)(eu, { invite: i, ...e }),
                              children: (e) =>
                                  (0, s.jsx)("div", {
                                      ref: v,
                                      children: (0, s.jsx)(Z.K, {
                                          ...e,
                                          icon: q.Z,
                                          "aria-label": C.intl.string(C.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: f,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
var eg = l(473644),
    eh = l(57930),
    ej = l(991660),
    ev = l(534514),
    e_ = l(404778),
    ep = l(847374),
    ef = l(900797),
    eN = l(565645),
    eI = l(59520),
    eA = l(997590),
    eE = l(454346),
    eC = l(80500),
    eb = l(274997),
    ey = l(319745),
    eT = l(488225),
    ek = l(72265),
    eS = l(218471),
    eL = l(109487),
    eP = l(967492),
    eD = l(998445),
    eM = l(9578),
    ez = l(573648);
let eR = {
    [el.fg2.TWITCH]: eE.a,
    [el.fg2.YOUTUBE]: eC.C,
    [el.fg2.TWITTER]: eb.p,
    [el.fg2.TWITTER_LEGACY]: eb.p,
    [el.fg2.FACEBOOK]: ey.Z,
    [el.fg2.INSTAGRAM]: eT.L,
    [el.fg2.REDDIT]: ek.T,
    [el.fg2.TIKTOK]: eS.X,
    [el.fg2.SPOTIFY]: eL.L,
    [el.fg2.BLUESKY]: eP.a,
};
function eU(e) {
    let { url: i, invite: l } = e,
        n = ez.A.getByUrl(i),
        a = null != n ? eR[n.type] : void 0,
        r = t.useCallback(
            () => (
                F.default.track(el.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
                    guild_id: l.guild?.id,
                    invite_code: l.code,
                    social_platform: n?.type,
                    social_platform_url: i,
                }),
                null
            ),
            [l.code, l.guild?.id, n, i],
        );
    return (0, s.jsx)(eM.A, {
        href: i,
        trusted: null != n,
        useDefaultUnderlineStyles: !1,
        onClick: r,
        children:
            null != a
                ? (0, s.jsx)(a, { className: em.zg, size: "xs", color: D.A.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, s.jsx)(eD.L, {
                      className: em.zg,
                      color: D.A.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
function eG(e) {
    let { categoryIds: i } = e,
        l = (0, W.yK)([eA.A], () => i.map((e) => eA.A.getCategoryName(e)));
    return (0, s.jsxs)("div", {
        className: em.Ff,
        children: [
            (0, s.jsx)(ev.D, {
                className: em.Uo,
                variant: "heading-sm/medium",
                color: "text-default",
                children: C.intl.string(C.t.ffgJrs),
            }),
            (0, s.jsx)(N.E, {
                className: em._O,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, s.jsx)("span", { children: l.join(", ") }),
            }),
        ],
    });
}
function eO(e) {
    let { discoveryGuild: i, invite: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i?.reasons_to_join != null &&
                i.reasons_to_join.length > 0 &&
                (0, s.jsx)(o.B, {
                    direction: "vertical",
                    gap: 8,
                    className: em.$s,
                    children: i.reasons_to_join.map((e, i) =>
                        (0, s.jsxs)(
                            o.B,
                            {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, s.jsx)(eN.A, {
                                        className: em.E2,
                                        size: "reaction",
                                        emojiId: e.emoji_id,
                                        emojiName: e.emoji_name,
                                    }),
                                    (0, s.jsx)(N.E, {
                                        tag: "span",
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: e.reason,
                                    }),
                                ],
                            },
                            i,
                        ),
                    ),
                }),
            i?.about != null &&
                "" !== i.about &&
                (0, s.jsxs)("div", {
                    className: em.lu,
                    id: "invite-about-section",
                    children: [
                        (0, s.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: C.intl.string(C.t.xcsPye),
                        }),
                        (0, s.jsx)(N.E, { variant: "text-md/normal", color: "text-default", children: i.about }),
                    ],
                }),
            null != i &&
                (0, s.jsxs)("div", {
                    className: em.xw,
                    children: [
                        null != i.social_links &&
                            i.social_links.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(e_.c, {}),
                                    (0, s.jsxs)("div", {
                                        className: em.Ff,
                                        children: [
                                            (0, s.jsx)(ev.D, {
                                                className: em.Uo,
                                                variant: "heading-sm/medium",
                                                color: "text-default",
                                                children: C.intl.string(C.t.jGVzY5),
                                            }),
                                            (0, s.jsx)(N.E, {
                                                className: em.qv,
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: i.social_links.map((e) =>
                                                    (0, s.jsx)(eU, { url: e, invite: l }, e),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        null != i.category_ids &&
                            i.category_ids.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(e_.c, {}), (0, s.jsx)(eG, { categoryIds: i.category_ids })],
                            }),
                    ],
                }),
        ],
    });
}
function ew(e) {
    let { invite: i, guild: l, discoveryGuild: n, scrollableSectionClassName: a, expanded: r, setExpanded: d } = e,
        c = null != d,
        u = (n?.about != null && "" !== n.about) || (n?.reasons_to_join != null && n.reasons_to_join.length > 0),
        x = t.useCallback((e, i) => {
            F.default.track(el.HAw.INVITE_ACCEPT_DETAILS_VIEWED, { guild_id: i, invite_code: e, action: "scrolled" });
        }, []),
        g = (0, eI.I)(x, 3e3, [i.code, l.id], { trailing: !1 }),
        h = t.useCallback(() => {
            g(i.code, l.id);
        }, [i.code, l.id, g]);
    return u
        ? (0, s.jsx)(ej.A, {
              className: a,
              gradientClassName: em.wH,
              onScroll: h,
              children: (0, s.jsxs)("div", {
                  className: em.Bn,
                  children: [
                      null != l.description &&
                          "" !== l.description &&
                          (0, s.jsx)(N.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: l.description,
                          }),
                      !r &&
                          c &&
                          (0, s.jsxs)(o.B, {
                              direction: "horizontal",
                              gap: 4,
                              className: em.qh,
                              children: [
                                  (0, s.jsx)(m.Q, {
                                      text: C.intl.string(C.t["k+2jmZ"]),
                                      onClick: () => d?.(!0),
                                      "aria-expanded": r,
                                      "aria-controls": "invite-about-section",
                                      size: "sm",
                                      variant: "secondary",
                                      textVariant: "text-xs/medium",
                                  }),
                                  (0, s.jsx)(ep.a, { size: "xs", color: D.A.colors.ICON_DEFAULT }),
                              ],
                          }),
                      (0, s.jsx)("div", {
                          className: em.y,
                          "data-expanded": r || !c,
                          "aria-hidden": c && !r,
                          children: (0, s.jsxs)("div", {
                              className: em.Cz,
                              children: [
                                  (0, s.jsx)(eO, { discoveryGuild: n, invite: i }),
                                  r &&
                                      c &&
                                      (0, s.jsxs)(o.B, {
                                          direction: "horizontal",
                                          gap: 4,
                                          className: em.qh,
                                          children: [
                                              (0, s.jsx)(m.Q, {
                                                  text: C.intl.string(C.t["3G783D"]),
                                                  onClick: () => d?.(!1),
                                                  "aria-expanded": r,
                                                  "aria-controls": "invite-about-section",
                                                  size: "sm",
                                                  variant: "secondary",
                                                  textVariant: "text-xs/medium",
                                              }),
                                              (0, s.jsx)(ef.t, { size: "xs", color: D.A.colors.ICON_DEFAULT }),
                                          ],
                                      }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, s.jsx)("div", {
              className: a,
              children: (0, s.jsx)("div", {
                  className: em.Bn,
                  children:
                      null != l.description &&
                      "" !== l.description &&
                      (0, s.jsx)(N.E, { variant: "text-md/normal", color: "text-default", children: l.description }),
              }),
          });
}
function eV(e) {
    let { className: i, splashURL: l, backgroundColor: t, expanded: n } = e,
        a = (0, H.b2)();
    return null == l
        ? (0, s.jsx)("div", { className: p()(i, em.D7), style: { background: (0, H.n6)(t ?? a.hex()) } })
        : (0, s.jsx)("div", {
              className: i,
              style: { backgroundImage: `url(${l})` },
              "aria-hidden": !0,
              "data-expanded": n,
          });
}
function eH(e) {
    let { invite: i, guild: l, splashURL: n, friendMemberIds: a, discoveryGuild: r } = e,
        d = null != a && a.length > 0,
        [c, u] = t.useState(!1),
        m = t.useCallback(
            (e) => {
                u(e),
                    F.default.track(el.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                        guild_id: l.id,
                        invite_code: i.code,
                        action: e ? "expanded" : "collapsed",
                    });
            },
            [l.id, i.code],
        );
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: em.g3,
                id: "invite-details",
                children: [
                    (0, s.jsx)(eV, { className: em.se, splashURL: n, expanded: c }),
                    (0, s.jsxs)("div", {
                        className: p()(em.qm, { [em.rd]: c }),
                        children: [
                            (0, s.jsx)(eh.A, { guild: l, outline: !0 }),
                            (0, s.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, s.jsx)(eg.A, { guild: l, invite: i, discoveryGuild: r }),
                                    d &&
                                        (0, s.jsx)(y, {
                                            friendMemberIds: a,
                                            className: em.QS,
                                            avatarSize: g._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, s.jsx)(ew, {
                                invite: i,
                                guild: l,
                                discoveryGuild: r,
                                expanded: c,
                                setExpanded: m,
                                scrollableSectionClassName: em.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(ex, { invite: i, guild: l, className: em.i }),
        ],
    });
}
function eF(e) {
    let { invite: i, guild: l, splashURL: t, friendMemberIds: n, discoveryGuild: a } = e,
        r = null != n && n.length > 0;
    return (0, s.jsxs)("div", {
        className: em.$5,
        id: "invite-details",
        children: [
            (0, s.jsx)(eV, { className: em.je, splashURL: t }),
            (0, s.jsxs)("div", {
                className: em.x6,
                children: [
                    (0, s.jsx)(eh.A, { guild: l }),
                    (0, s.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, s.jsx)(eg.A, { guild: l, invite: i, discoveryGuild: a }),
                            r && (0, s.jsx)(y, { friendMemberIds: n, className: em.QS, avatarSize: g._3.SIZE_24 }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: em.Sd,
                        children: (0, s.jsx)(ew, {
                            invite: i,
                            guild: l,
                            discoveryGuild: a,
                            scrollableSectionClassName: em.r_,
                        }),
                    }),
                    (0, s.jsx)(ex, { invite: i, guild: l, className: em.pU }),
                ],
            }),
        ],
    });
}
function eW(e) {
    let { guild: i, invite: l, discoveryGuild: a, transitionState: d, headerId: o, channel: c, onClose: u } = e;
    t.useEffect(() => {
        (0, T.Mu)();
    }, []);
    let { treatment: m } = A.zQ.useConfig({ location: "AcceptInviteModalRedesign" }),
        x = (0, I.A)("(max-width: 600px)"),
        g = "v1" === m || x,
        h = t.useMemo(() => (g ? eH : eF), [g]);
    return (0, s.jsxs)(r.d, {
        size: g ? "md" : "xxl",
        "aria-labelledby": o,
        "aria-label": i?.name ?? c?.name ?? "",
        transitionState: d,
        onClose: () => (u(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: n.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: i?.id, invite_code: l.code },
            },
        },
        children: [
            (0, s.jsx)("div", { className: em.cG, children: (0, s.jsx)(f.s_, { shouldColorMix: !0 }) }),
            (0, s.jsx)(h, { ...e, discoveryGuild: a }),
        ],
    });
}
function eB(e) {
    let {
            invite: i,
            guild: l,
            splashURL: a,
            friendMemberIds: d,
            profile: c,
            transitionState: u,
            headerId: m,
            channel: x,
            onClose: h,
        } = e,
        { treatment: j } = A.SH.useConfig({ location: "AcceptInviteModalRedesign" }),
        v = null != d && d.length > 0,
        { gamesToDisplay: _, lastGameToDisplay: p, remainingGames: I } = (0, k.A)(c),
        E = t.useMemo(
            () => c.traits.map((e, i) => ({ key: `trait-${i}`, ...e })).filter((e) => e.label.length > 0),
            [c],
        ),
        C = (0, H.b2)(),
        b = (0, H.aG)({ profile: c, defaultColor: C.hex(), forceDefaultColor: null != c.brandColorPrimary }),
        T = c.brandColorPrimary ?? b;
    return (0, s.jsxs)(r.d, {
        size: "md",
        "aria-labelledby": m,
        "aria-label": l?.name ?? x?.name ?? "",
        transitionState: u,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: n.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: l?.id, invite_code: i.code },
            },
        },
        children: [
            (0, s.jsx)("div", { className: em.cG, children: (0, s.jsx)(f.s_, { shouldColorMix: !0 }) }),
            (0, s.jsxs)("div", {
                className: em.g3,
                id: "invite-details",
                children: [
                    (0, s.jsx)(eV, { className: em.se, splashURL: a, backgroundColor: T }),
                    (0, s.jsxs)("div", {
                        className: em.qm,
                        children: [
                            (0, s.jsx)(eh.A, { guild: l, outline: !0 }),
                            (0, s.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, s.jsx)(eg.A, { guild: l, invite: i, showGuildTag: !0 }),
                                    v &&
                                        (0, s.jsx)(y, {
                                            friendMemberIds: d,
                                            className: em.QS,
                                            avatarSize: g._3.SIZE_24,
                                        }),
                                    null != l.description &&
                                        "" !== l.description &&
                                        (0, s.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: l.description,
                                        }),
                                    0 === _.length
                                        ? null
                                        : "v1" === j
                                          ? (0, s.jsx)(w.A, {
                                                gamesToDisplay: _,
                                                lastGameToDisplay: p,
                                                remainingGames: I,
                                                activity: c.gameActivity,
                                            })
                                          : "v2" === j
                                            ? (0, s.jsx)(o.B, {
                                                  direction: "vertical",
                                                  gap: 8,
                                                  children: (0, s.jsx)(O, {
                                                      gamesToDisplay: _,
                                                      lastGameToDisplay: p,
                                                      remainingGames: I,
                                                      activity: c.gameActivity,
                                                      onExpandClick: () => {
                                                          F.default.track(el.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                                              guild_id: l.id,
                                                              invite_code: i.code,
                                                              action: "games_expanded",
                                                          });
                                                      },
                                                  }),
                                              })
                                            : null,
                                    (0, s.jsx)(V.w, { items: E, traitColor: "text-subtle" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(ex, { invite: i, guild: l, className: em.i }),
        ],
    });
}
var eY = l(915089),
    eZ = l(9994),
    eq = l(395671),
    eK = l(299091),
    e$ = l(486020),
    eQ = l(723702),
    eX = l(19575);
function eJ(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: t } = (0, J.Ay)(X.A.INVITE_MODAL);
    return (0, s.jsx)(J.f5, {
        value: t,
        children: (0, s.jsx)(a.Modal, {
            "aria-label": C.intl.string(C.t.u9zxnX),
            title: C.intl.string(C.t.u9zxnX),
            subtitle: C.intl.string(C.t.FWkU6P),
            transitionState: i,
            onClose: () => (K.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: C.intl.string(C.t.wcqOoF), onClick: () => K.A.close(l) }],
        }),
    });
}
function e0(e) {
    let i,
        l,
        a,
        { transitionState: _ } = e;
    (0, x.bG)([E.default], () => E.default.getCurrentUser()?.premiumType);
    let p = (0, x.bG)([E.default], () => E.default.getCurrentUser()),
        { invite: f, error: N, submitting: I, invite_instance_id: b } = (0, x.cf)([$.A], () => $.A.getProps()),
        y = (0, x.bG)([eK.A], () => eK.A.getInvite(f?.code ?? "") ?? null),
        T = (0, x.bG)([eK.A], () => eK.A.getFriendMemberIds(f?.code ?? ""));
    t.useEffect(() => {
        null != f && null != f.guild && (0, ea.dR)(f.approximate_member_count ?? 0, f.code, f.guild.id);
    }, [f, f?.approximate_member_count, f?.code, f?.guild?.id]);
    let k = (0, ea.uE)(),
        { enabled: S, discoveryGuild: L, isLoading: P } = (0, A.qE)(f?.guild ?? null, "AcceptInviteModal"),
        { enabled: D } = A.SH.useConfig({ location: "AcceptInviteModal" }),
        M = D ? T : null;
    t.useEffect(() => {
        !__OVERLAY__ &&
            eQ.isPlatformEmbedded &&
            ((0, eQ.isWindows)() ? eX.Ay.minimize() : eX.Ay.restore(), eX.Ay.focus());
    }, []),
        (0, v.Ay)(() => {
            F.default.track(el.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: f?.code, guild_id: f?.guild?.id });
        });
    let z = (0, eY.GV)(),
        { analyticsLocations: R } = (0, J.Ay)(X.A.INVITE_MODAL),
        U = M?.length ?? 0,
        G = U > 0;
    if (
        (t.useEffect(() => {
            G &&
                f?.code != null &&
                F.default.track(el.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: f?.code,
                    guild_id: f.guild?.id,
                    friend_count: U,
                });
        }, [G, U, f?.code, f?.guild?.id]),
        null == f || null == p)
    )
        return (0, s.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: _,
            onClose: () => (K.A.close(f?.code), Promise.resolve()),
            children: (0, s.jsx)("div", { className: et.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    if (f.state === el.elq.EXPIRED || f.state === el.elq.BANNED || f.state === el.elq.ERROR)
        return (0, s.jsx)(eJ, { transitionState: _, inviteCode: f.code });
    if (null == f.channel)
        return (0, s.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: _,
            onClose: () => (K.A.close(f.code), Promise.resolve()),
            children: (0, s.jsx)("div", { className: et.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    function O() {
        null != f && K.A.acceptInvite(f, b);
    }
    function w() {
        F.default.track(el.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: f?.code, guild_id: f?.guild?.id }),
            K.A.close(f?.code);
    }
    let { guild: V, channel: H, inviter: W, target_application: B } = f,
        Y = null == f.guild && null == f.channel && null != W,
        Z = null != V;
    if (null != B) (i = V?.name), (l = eq.Ay.createFromServer(B).getCoverImageURL(1024));
    else if (null != V) (i = V.name), (l = e$.Ay.getGuildSplashURL({ id: V.id, splash: V.splash }));
    else if (((null == (i = H.name) || "" === i) && null != W && (i = W.username), null == i))
        throw Error("no name for group DM invite");
    let q = (0, er.Sn)();
    if (
        ((a = Y
            ? C.intl.string(C.t["e/6Ogt"])
            : C.intl.format(C.t["9sWQNT"], {
                  usernameHook: () => (0, s.jsx)("span", { className: et.Pb, children: k }),
              })),
        P)
    )
        return (0, s.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: _,
            onClose: () => (w(), Promise.resolve()),
            children: (0, s.jsx)("div", { className: et.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    if (S && null != V)
        return (0, s.jsx)(J.f5, {
            value: R,
            children: (0, s.jsx)(eW, {
                transitionState: _,
                headerId: z,
                channel: H,
                invite: f,
                guild: V,
                splashURL: l,
                friendMemberIds: M ?? void 0,
                discoveryGuild: L,
                onClose: w,
            }),
        });
    let Q = null != y ? (0, eZ.oO)(y) : null,
        ee = (function (e) {
            if (null == e) return !1;
            let i = null != e.description && e.description.length > 0,
                l = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                s = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return i && (l || s);
        })(Q);
    return null != Q && ee && null != V && (A.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), D)
        ? (0, s.jsx)(J.f5, {
              value: R,
              children: (0, s.jsx)(eB, {
                  transitionState: _,
                  headerId: z,
                  channel: H,
                  invite: f,
                  guild: V,
                  splashURL: l,
                  friendMemberIds: M ?? void 0,
                  profile: Q,
                  onClose: w,
              }),
          })
        : (0, s.jsx)(J.f5, {
              value: R,
              children: (0, s.jsx)(r.d, {
                  size: null != l ? "xl" : "sm",
                  "aria-labelledby": z,
                  "aria-label": V?.name ?? H?.name ?? "",
                  transitionState: _,
                  onClose: () => (w(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: n.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: V?.id, invite_code: f.code },
                      },
                  },
                  children: (0, s.jsxs)("div", {
                      className: et.jT,
                      children: [
                          (0, s.jsx)("div", {
                              className: et.FG,
                              children: (0, s.jsxs)("div", {
                                  className: et.Ro,
                                  children: [
                                      (0, s.jsx)("div", {
                                          id: z,
                                          children: (0, s.jsx)(h.A, { invite: f, disableUser: Z, error: N }),
                                      }),
                                      (0, s.jsxs)("div", {
                                          children: [
                                              q ? (0, s.jsx)(en, {}) : null,
                                              (0, s.jsxs)(o.B, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == B
                                                          ? (0, s.jsx)(c.$, {
                                                                onClick: O,
                                                                loading: I,
                                                                disabled: q,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: q ? C.intl.string(C.t.ZNCziL) : a,
                                                                icon:
                                                                    q || null == p
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, s.jsx)(j.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: g._3.SIZE_16,
                                                                                  user: p,
                                                                                  className: et.Mp,
                                                                              }),
                                                            })
                                                          : (0, s.jsxs)(u.e, {
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, s.jsx)(c.$, {
                                                                        variant: "secondary",
                                                                        text: C.intl.string(C.t.eylRaY),
                                                                        onClick: O,
                                                                        loading: I,
                                                                    }),
                                                                    (0, s.jsx)(c.$, {
                                                                        variant: "primary",
                                                                        text: C.intl.string(C.t.RscU7I),
                                                                        onClick: O,
                                                                        loading: I,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, s.jsx)(m.Q, {
                                                          onClick: w,
                                                          variant: "secondary",
                                                          text: C.intl.string(C.t.ndsK4Z),
                                                          textVariant: "text-sm/medium",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          null != l && (0, s.jsx)("div", { className: et.ll, style: { backgroundImage: `url(${l})` } }),
                      ],
                  }),
              }),
          });
}
