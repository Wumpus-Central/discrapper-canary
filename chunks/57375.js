l.d(i, { default: () => eJ });
var s = l(627968),
    t = l(64700),
    n = l(562708),
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
    C = l(375708),
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
    R = l(822017);
function U(e) {
    let { game: i, activityLevel: l } = e,
        t = i.getCoverURL();
    if (null == t) return null;
    let n = l?.level === S._.HIGH;
    return (0, s.jsx)(L.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, s.jsxs)("div", {
            className: R.Xy,
            children: [
                (0, s.jsx)("img", { className: R._s, src: t, alt: i.name }),
                n &&
                    (0, s.jsx)(z.Ay, {
                        mask: z.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: R.Sy,
                        children: (0, s.jsx)("div", {
                            className: R.oZ,
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
function G(e) {
    let { gamesToDisplay: i, lastGameToDisplay: l, remainingGames: n, activity: a, onExpandClick: r } = e,
        [d, c] = t.useState(!1),
        u = t.useCallback(() => {
            r?.(), c(!0);
        }, [r]),
        m = t.useMemo(() => {
            if (null == l) return null;
            let e = l.getCoverURL();
            return null == e
                ? null
                : 0 === n.length || d
                  ? (0, s.jsx)(U, { game: l, activityLevel: a?.[l.id] })
                  : (0, s.jsx)(L.m, {
                        position: "bottom",
                        "aria-label": C.intl.string(C.t.yohc6E),
                        text: C.intl.string(C.t.yohc6E),
                        children: (0, s.jsxs)(M.D, {
                            className: p()(R.Xy, R.oL, R.vk),
                            onClick: u,
                            "aria-label": `Show ${n.length} more games`,
                            children: [
                                (0, s.jsx)("img", { className: p()(R._s, R.tJ), src: e, alt: l.name }),
                                (0, s.jsx)("div", { className: R.Fg }),
                                (0, s.jsx)("div", {
                                    className: R.AZ,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${n.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [l, n, a, d, u]);
    if (null == i || 0 === i.length) return null;
    let x = d && n.length > 0 ? n : [];
    return (0, s.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            i.map((e) => (0, s.jsx)(U, { game: e, activityLevel: a?.[e.id] }, e.id)),
            d && n.length > 0 ? x.map((e) => (0, s.jsx)(U, { game: e, activityLevel: a?.[e.id] }, e.id)) : m,
        ],
    });
}
var O = l(438842),
    w = l(879472),
    V = l(649640),
    H = l(174459),
    F = l(17928),
    W = l(683071),
    B = l(922016),
    Y = l(408278),
    Z = l(625903),
    q = l(972387),
    K = l(539895),
    $ = l(403581),
    Q = l(793574),
    X = l(688810),
    J = l(404374),
    ee = l(772366),
    ei = l(652215),
    el = l(788868),
    es = l(310253);
function et(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: n } = (0, X.Ay)(Q.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        t.useEffect(() => {
            H.default.track(ei.HAw.PREMIUM_UPSELL_VIEWED, {
                type: el.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: ei.liQ.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, s.jsxs)(M.D, {
            onClick: () =>
                (0, ee.A)({
                    analyticsSource: { page: ei.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: ei.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: ei.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: p()(es.fA, i),
            children: [
                (0, s.jsx)($.t, { size: "md", className: es.Y2, color: J.k0.PREMIUM_TIER_2 }),
                (0, s.jsx)("span", { className: es.Cq, children: C.intl.string(C.t["4/W4Pz"]) }),
                (0, s.jsx)("span", { className: es.MY, children: C.intl.string(C.t.b6KOkI) }),
            ],
        })
    );
}
var en = l(960736),
    ea = l(398884),
    er = l(980707),
    ed = l(477782),
    eo = l(885386);
function ec(e) {
    let { invite: i, closePopout: l } = e,
        t = eo.tz.useSetting(),
        {
            nickname: n,
            dmsAllowed: a,
            showActivity: r,
            setNickname: d,
            setDmsAllowed: o,
            setShowActivity: c,
        } = (0, en.lD)(),
        u = i.is_nickname_changeable;
    return (0, s.jsxs)(er.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: l,
        "aria-label": C.intl.string(C.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            u
                ? (0, s.jsx)(ed.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: C.intl.string(C.t.me1lRk),
                      value: n,
                      onChange: d,
                      placeholder: C.intl.string(C.t["09Q8yp"]),
                      maxLength: ei.d0r,
                  })
                : null,
            (0, s.jsx)(ed.fP, {
                id: "accept-invite-modal-settings-dms",
                label: C.intl.string(C.t["/2ed37"]),
                action: o,
                checked: a,
            }),
            t
                ? (0, s.jsx)(ed.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: C.intl.string(C.t.bN4m1G),
                      action: c,
                      checked: r,
                  })
                : null,
        ],
    });
}
var eu = l(963120);
function em(e) {
    let { invite: i, guild: l, className: n } = e,
        a = (0, F.bG)([E.default], () => E.default.getCurrentUser()),
        { submitting: r, error: d, invite_instance_id: o } = (0, F.cf)([K.A], () => K.A.getProps()),
        m = t.useCallback(() => {
            q.A.acceptInvite(i, o);
        }, [i, o]),
        x = (0, en.uE)(),
        h =
            "" !== x
                ? C.intl.format(C.t["9sWQNT"], {
                      usernameHook: (e, i) => (0, s.jsx)("span", { className: eu.Pb, children: x }, i),
                  })
                : C.intl.string(C.t["e/6Ogt"]),
        v = t.useRef(null),
        [_, p] = t.useState(!1),
        f = t.useCallback(() => {
            _ ||
                H.default.track(ei.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: l.id,
                    invite_code: i.code,
                    location: "accept_invite_modal_redesign",
                }),
                p(!_);
        }, [l.id, i.code, _]),
        N = (0, ea.Sn)();
    return (0, s.jsxs)("div", {
        className: n,
        children: [
            null != d
                ? (0, s.jsx)("div", { className: eu.Un, children: (0, s.jsx)(W.w, { type: "critical", children: d }) })
                : null,
            N ? (0, s.jsx)(et, { className: eu.sX }) : null,
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
                        : (0, s.jsx)(B.Y, {
                              targetElementRef: v,
                              animation: B.Y.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: _,
                              autoInvert: !1,
                              onRequestClose: () => p(!1),
                              renderPopout: (e) => (0, s.jsx)(ec, { invite: i, ...e }),
                              children: (e) =>
                                  (0, s.jsx)("div", {
                                      ref: v,
                                      children: (0, s.jsx)(Y.K, {
                                          ...e,
                                          icon: Z.Z,
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
var ex = l(473644),
    eg = l(57930),
    eh = l(991660),
    ej = l(534514),
    ev = l(404778),
    e_ = l(847374),
    ep = l(900797),
    ef = l(565645),
    eN = l(59520),
    eI = l(997590),
    eA = l(454346),
    eE = l(80500),
    eC = l(274997),
    eb = l(319745),
    ey = l(488225),
    eT = l(72265),
    ek = l(218471),
    eS = l(109487),
    eL = l(967492),
    eP = l(998445),
    eD = l(9578),
    eM = l(573648);
let ez = {
    [ei.fg2.TWITCH]: eA.a,
    [ei.fg2.YOUTUBE]: eE.C,
    [ei.fg2.TWITTER]: eC.p,
    [ei.fg2.TWITTER_LEGACY]: eC.p,
    [ei.fg2.FACEBOOK]: eb.Z,
    [ei.fg2.INSTAGRAM]: ey.L,
    [ei.fg2.REDDIT]: eT.T,
    [ei.fg2.TIKTOK]: ek.X,
    [ei.fg2.SPOTIFY]: eS.L,
    [ei.fg2.BLUESKY]: eL.a,
};
function eR(e) {
    let { url: i, invite: l } = e,
        n = eM.A.getByUrl(i),
        a = null != n ? ez[n.type] : void 0,
        r = t.useCallback(
            () => (
                H.default.track(ei.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
                    guild_id: l.guild?.id,
                    invite_code: l.code,
                    social_platform: n?.type,
                    social_platform_url: i,
                }),
                null
            ),
            [l.code, l.guild?.id, n, i],
        );
    return (0, s.jsx)(eD.A, {
        href: i,
        trusted: null != n,
        useDefaultUnderlineStyles: !1,
        onClick: r,
        children:
            null != a
                ? (0, s.jsx)(a, { className: eu.zg, size: "xs", color: D.A.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, s.jsx)(eP.L, {
                      className: eu.zg,
                      color: D.A.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
function eU(e) {
    let { categoryIds: i } = e,
        l = (0, F.yK)([eI.A], () => i.map((e) => eI.A.getCategoryName(e)));
    return (0, s.jsxs)("div", {
        className: eu.Ff,
        children: [
            (0, s.jsx)(ej.D, {
                className: eu.Uo,
                variant: "heading-sm/medium",
                color: "text-default",
                children: C.intl.string(C.t.ffgJrs),
            }),
            (0, s.jsx)(N.E, {
                className: eu._O,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, s.jsx)("span", { children: l.join(", ") }),
            }),
        ],
    });
}
function eG(e) {
    let { discoveryGuild: i, invite: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i?.reasons_to_join != null &&
                i.reasons_to_join.length > 0 &&
                (0, s.jsx)(o.B, {
                    direction: "vertical",
                    gap: 8,
                    className: eu.$s,
                    children: i.reasons_to_join.map((e, i) =>
                        (0, s.jsxs)(
                            o.B,
                            {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, s.jsx)(ef.A, {
                                        className: eu.E2,
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
                    className: eu.lu,
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
                    className: eu.xw,
                    children: [
                        null != i.social_links &&
                            i.social_links.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(ev.c, {}),
                                    (0, s.jsxs)("div", {
                                        className: eu.Ff,
                                        children: [
                                            (0, s.jsx)(ej.D, {
                                                className: eu.Uo,
                                                variant: "heading-sm/medium",
                                                color: "text-default",
                                                children: C.intl.string(C.t.jGVzY5),
                                            }),
                                            (0, s.jsx)(N.E, {
                                                className: eu.qv,
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: i.social_links.map((e) =>
                                                    (0, s.jsx)(eR, { url: e, invite: l }, e),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        null != i.category_ids &&
                            i.category_ids.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(ev.c, {}), (0, s.jsx)(eU, { categoryIds: i.category_ids })],
                            }),
                    ],
                }),
        ],
    });
}
function eO(e) {
    let { invite: i, guild: l, discoveryGuild: n, scrollableSectionClassName: a, expanded: r, setExpanded: d } = e,
        c = null != d,
        u = (n?.about != null && "" !== n.about) || (n?.reasons_to_join != null && n.reasons_to_join.length > 0),
        x = t.useCallback((e, i) => {
            H.default.track(ei.HAw.INVITE_ACCEPT_DETAILS_VIEWED, { guild_id: i, invite_code: e, action: "scrolled" });
        }, []),
        g = (0, eN.I)(x, 3e3, [i.code, l.id], { trailing: !1 }),
        h = t.useCallback(() => {
            g(i.code, l.id);
        }, [i.code, l.id, g]);
    return u
        ? (0, s.jsx)(eh.A, {
              className: a,
              gradientClassName: eu.wH,
              onScroll: h,
              children: (0, s.jsxs)("div", {
                  className: eu.Bn,
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
                              className: eu.qh,
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
                                  (0, s.jsx)(e_.a, { size: "xs", color: D.A.colors.ICON_DEFAULT }),
                              ],
                          }),
                      (0, s.jsx)("div", {
                          className: eu.y,
                          "data-expanded": r || !c,
                          "aria-hidden": c && !r,
                          children: (0, s.jsxs)("div", {
                              className: eu.Cz,
                              children: [
                                  (0, s.jsx)(eG, { discoveryGuild: n, invite: i }),
                                  r &&
                                      c &&
                                      (0, s.jsxs)(o.B, {
                                          direction: "horizontal",
                                          gap: 4,
                                          className: eu.qh,
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
                                              (0, s.jsx)(ep.t, { size: "xs", color: D.A.colors.ICON_DEFAULT }),
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
                  className: eu.Bn,
                  children:
                      null != l.description &&
                      "" !== l.description &&
                      (0, s.jsx)(N.E, { variant: "text-md/normal", color: "text-default", children: l.description }),
              }),
          });
}
function ew(e) {
    let { className: i, splashURL: l, backgroundColor: t, expanded: n } = e,
        a = (0, V.b2)();
    return null == l
        ? (0, s.jsx)("div", { className: p()(i, eu.D7), style: { background: (0, V.n6)(t ?? a.hex()) } })
        : (0, s.jsx)("div", {
              className: i,
              style: { backgroundImage: `url(${l})` },
              "aria-hidden": !0,
              "data-expanded": n,
          });
}
function eV(e) {
    let { invite: i, guild: l, splashURL: n, friendMemberIds: a, discoveryGuild: r } = e,
        d = null != a && a.length > 0,
        [c, u] = t.useState(!1),
        m = t.useCallback(
            (e) => {
                u(e),
                    H.default.track(ei.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
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
                className: eu.g3,
                id: "invite-details",
                children: [
                    (0, s.jsx)(ew, { className: eu.se, splashURL: n, expanded: c }),
                    (0, s.jsxs)("div", {
                        className: p()(eu.qm, { [eu.rd]: c }),
                        children: [
                            (0, s.jsx)(eg.A, { guild: l, outline: !0 }),
                            (0, s.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, s.jsx)(ex.A, { guild: l, invite: i, discoveryGuild: r }),
                                    d &&
                                        (0, s.jsx)(y, {
                                            friendMemberIds: a,
                                            className: eu.QS,
                                            avatarSize: g._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, s.jsx)(eO, {
                                invite: i,
                                guild: l,
                                discoveryGuild: r,
                                expanded: c,
                                setExpanded: m,
                                scrollableSectionClassName: eu.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(em, { invite: i, guild: l, className: eu.i }),
        ],
    });
}
function eH(e) {
    let { invite: i, guild: l, splashURL: t, friendMemberIds: n, discoveryGuild: a } = e,
        r = null != n && n.length > 0;
    return (0, s.jsxs)("div", {
        className: eu.$5,
        id: "invite-details",
        children: [
            (0, s.jsx)(ew, { className: eu.je, splashURL: t }),
            (0, s.jsxs)("div", {
                className: eu.x6,
                children: [
                    (0, s.jsx)(eg.A, { guild: l }),
                    (0, s.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, s.jsx)(ex.A, { guild: l, invite: i, discoveryGuild: a }),
                            r && (0, s.jsx)(y, { friendMemberIds: n, className: eu.QS, avatarSize: g._3.SIZE_24 }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: eu.Sd,
                        children: (0, s.jsx)(eO, {
                            invite: i,
                            guild: l,
                            discoveryGuild: a,
                            scrollableSectionClassName: eu.r_,
                        }),
                    }),
                    (0, s.jsx)(em, { invite: i, guild: l, className: eu.pU }),
                ],
            }),
        ],
    });
}
function eF(e) {
    let { guild: i, invite: l, discoveryGuild: a, transitionState: d, headerId: o, channel: c, onClose: u } = e;
    t.useEffect(() => {
        (0, T.Mu)();
    }, []);
    let { treatment: m } = A.zQ.useConfig({ location: "AcceptInviteModalRedesign" }),
        x = (0, I.A)("(max-width: 600px)"),
        g = "v1" === m || x,
        h = t.useMemo(() => (g ? eV : eH), [g]);
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
            (0, s.jsx)("div", { className: eu.cG, children: (0, s.jsx)(f.s_, { shouldColorMix: !0 }) }),
            (0, s.jsx)(h, { ...e, discoveryGuild: a }),
        ],
    });
}
function eW(e) {
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
        C = (0, V.b2)(),
        b = (0, V.aG)({ profile: c, defaultColor: C.hex(), forceDefaultColor: null != c.brandColorPrimary }),
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
            (0, s.jsx)("div", { className: eu.cG, children: (0, s.jsx)(f.s_, { shouldColorMix: !0 }) }),
            (0, s.jsxs)("div", {
                className: eu.g3,
                id: "invite-details",
                children: [
                    (0, s.jsx)(ew, { className: eu.se, splashURL: a, backgroundColor: T }),
                    (0, s.jsxs)("div", {
                        className: eu.qm,
                        children: [
                            (0, s.jsx)(eg.A, { guild: l, outline: !0 }),
                            (0, s.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, s.jsx)(ex.A, { guild: l, invite: i, showGuildTag: !0 }),
                                    v &&
                                        (0, s.jsx)(y, {
                                            friendMemberIds: d,
                                            className: eu.QS,
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
                                          ? (0, s.jsx)(O.A, {
                                                gamesToDisplay: _,
                                                lastGameToDisplay: p,
                                                remainingGames: I,
                                                activity: c.gameActivity,
                                            })
                                          : "v2" === j
                                            ? (0, s.jsx)(o.B, {
                                                  direction: "vertical",
                                                  gap: 8,
                                                  children: (0, s.jsx)(G, {
                                                      gamesToDisplay: _,
                                                      lastGameToDisplay: p,
                                                      remainingGames: I,
                                                      activity: c.gameActivity,
                                                      onExpandClick: () => {
                                                          H.default.track(ei.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                                              guild_id: l.id,
                                                              invite_code: i.code,
                                                              action: "games_expanded",
                                                          });
                                                      },
                                                  }),
                                              })
                                            : null,
                                    (0, s.jsx)(w.w, { items: E, traitColor: "text-subtle" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(em, { invite: i, guild: l, className: eu.i }),
        ],
    });
}
var eB = l(915089),
    eY = l(9994),
    eZ = l(395671),
    eq = l(299091),
    eK = l(486020),
    e$ = l(723702),
    eQ = l(19575);
function eX(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: t } = (0, X.Ay)(Q.A.INVITE_MODAL);
    return (0, s.jsx)(X.f5, {
        value: t,
        children: (0, s.jsx)(a.Modal, {
            "aria-label": C.intl.string(C.t.u9zxnX),
            title: C.intl.string(C.t.u9zxnX),
            subtitle: C.intl.string(C.t.FWkU6P),
            transitionState: i,
            onClose: () => (q.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: C.intl.string(C.t.wcqOoF), onClick: () => q.A.close(l) }],
        }),
    });
}
function eJ(e) {
    let i,
        l,
        a,
        { transitionState: _ } = e;
    (0, x.bG)([E.default], () => E.default.getCurrentUser()?.premiumType);
    let p = (0, x.bG)([E.default], () => E.default.getCurrentUser()),
        { invite: f, error: N, submitting: I, invite_instance_id: b } = (0, x.cf)([K.A], () => K.A.getProps()),
        y = (0, x.bG)([eq.A], () => eq.A.getInvite(f?.code ?? "") ?? null),
        T = (0, x.bG)([eq.A], () => eq.A.getFriendMemberIds(f?.code ?? ""));
    t.useEffect(() => {
        null != f && null != f.guild && (0, en.dR)(f.approximate_member_count ?? 0, f.code, f.guild.id);
    }, [f, f?.approximate_member_count, f?.code, f?.guild?.id]);
    let k = (0, en.uE)(),
        { enabled: S, discoveryGuild: L, isLoading: P } = (0, A.qE)(f?.guild ?? null, "AcceptInviteModal"),
        { enabled: D } = A.SH.useConfig({ location: "AcceptInviteModal" }),
        M = D ? T : null;
    t.useEffect(() => {
        !__OVERLAY__ &&
            e$.isPlatformEmbedded &&
            (document.hasFocus() || ((0, e$.isWindows)() ? eQ.Ay.minimize() : eQ.Ay.restore(), eQ.Ay.focus()));
    }, []),
        (0, v.Ay)(() => {
            H.default.track(ei.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: f?.code, guild_id: f?.guild?.id });
        });
    let z = (0, eB.GV)(),
        { analyticsLocations: R } = (0, X.Ay)(Q.A.INVITE_MODAL),
        U = M?.length ?? 0,
        G = U > 0;
    if (
        (t.useEffect(() => {
            G &&
                f?.code != null &&
                H.default.track(ei.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
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
            onClose: () => (q.A.close(f?.code), Promise.resolve()),
            children: (0, s.jsx)("div", { className: es.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    if (f.state === ei.elq.EXPIRED || f.state === ei.elq.BANNED || f.state === ei.elq.ERROR)
        return (0, s.jsx)(eX, { transitionState: _, inviteCode: f.code });
    if (null == f.channel)
        return (0, s.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: _,
            onClose: () => (q.A.close(f.code), Promise.resolve()),
            children: (0, s.jsx)("div", { className: es.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    function O() {
        null != f && q.A.acceptInvite(f, b);
    }
    function w() {
        H.default.track(ei.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: f?.code, guild_id: f?.guild?.id }),
            q.A.close(f?.code);
    }
    let { guild: V, channel: F, inviter: W, target_application: B } = f,
        Y = null == f.guild && null == f.channel && null != W,
        Z = null != V;
    if (null != B) (i = V?.name), (l = eZ.Ay.createFromServer(B).getCoverImageURL(1024));
    else if (null != V) (i = V.name), (l = eK.Ay.getGuildSplashURL({ id: V.id, splash: V.splash }));
    else if (((null == (i = F.name) || "" === i) && null != W && (i = W.username), null == i))
        throw Error("no name for group DM invite");
    let $ = (0, ea.Sn)();
    if (
        ((a = Y
            ? C.intl.string(C.t["e/6Ogt"])
            : C.intl.format(C.t["9sWQNT"], {
                  usernameHook: () => (0, s.jsx)("span", { className: es.Pb, children: k }),
              })),
        P)
    )
        return (0, s.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: _,
            onClose: () => (w(), Promise.resolve()),
            children: (0, s.jsx)("div", { className: es.g4, children: (0, s.jsx)(d.y, {}) }),
        });
    if (S && null != V)
        return (0, s.jsx)(X.f5, {
            value: R,
            children: (0, s.jsx)(eF, {
                transitionState: _,
                headerId: z,
                channel: F,
                invite: f,
                guild: V,
                splashURL: l,
                friendMemberIds: M ?? void 0,
                discoveryGuild: L,
                onClose: w,
            }),
        });
    let J = null != y ? (0, eY.oO)(y) : null,
        ee = (function (e) {
            if (null == e) return !1;
            let i = null != e.description && e.description.length > 0,
                l = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                s = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return i && (l || s);
        })(J);
    return null != J && ee && null != V && (A.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), D)
        ? (0, s.jsx)(X.f5, {
              value: R,
              children: (0, s.jsx)(eW, {
                  transitionState: _,
                  headerId: z,
                  channel: F,
                  invite: f,
                  guild: V,
                  splashURL: l,
                  friendMemberIds: M ?? void 0,
                  profile: J,
                  onClose: w,
              }),
          })
        : (0, s.jsx)(X.f5, {
              value: R,
              children: (0, s.jsx)(r.d, {
                  size: null != l ? "xl" : "sm",
                  "aria-labelledby": z,
                  "aria-label": V?.name ?? F?.name ?? "",
                  transitionState: _,
                  onClose: () => (w(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: n.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: V?.id, invite_code: f.code },
                      },
                  },
                  children: (0, s.jsxs)("div", {
                      className: es.jT,
                      children: [
                          (0, s.jsx)("div", {
                              className: es.FG,
                              children: (0, s.jsxs)("div", {
                                  className: es.Ro,
                                  children: [
                                      (0, s.jsx)("div", {
                                          id: z,
                                          children: (0, s.jsx)(h.A, { invite: f, disableUser: Z, error: N }),
                                      }),
                                      (0, s.jsxs)("div", {
                                          children: [
                                              $ ? (0, s.jsx)(et, {}) : null,
                                              (0, s.jsxs)(o.B, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == B
                                                          ? (0, s.jsx)(c.$, {
                                                                onClick: O,
                                                                loading: I,
                                                                disabled: $,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: $ ? C.intl.string(C.t.ZNCziL) : a,
                                                                icon:
                                                                    $ || null == p
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, s.jsx)(j.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: g._3.SIZE_16,
                                                                                  user: p,
                                                                                  className: es.Mp,
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
                          null != l && (0, s.jsx)("div", { className: es.ll, style: { backgroundImage: `url(${l})` } }),
                      ],
                  }),
              }),
          });
}
