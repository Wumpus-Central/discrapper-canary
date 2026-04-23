t.d(i, { default: () => e0 });
var l = t(627968),
    s = t(64700),
    a = t(110259),
    n = t(189213),
    r = t(224640),
    o = t(289873),
    d = t(331322),
    c = t(821609),
    u = t(825484),
    h = t(123292),
    m = t(702841),
    _ = t(778712),
    x = t(504394),
    g = t(966327),
    p = t(964486),
    v = t(503698),
    A = t.n(v),
    E = t(20742),
    j = t(834730),
    I = t(241524),
    f = t(260451),
    C = t(287809),
    N = t(985018),
    y = t(197691);
function T(e) {
    let { friendMemberIds: i, className: t, avatarSize: a = _._3.SIZE_16 } = e,
        n = (0, m.yK)([C.default], () =>
            i
                .slice(0, 3)
                .map((e) => C.default.getUser(e))
                .filter((e) => null != e),
        ),
        { enabled: r } = f.SH.useConfig({ location: "InviteFriendMembers" }),
        o = s.useCallback(
            (e, i) => (0, l.jsx)(j.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: e }, i),
            [],
        );
    if (0 === n.length) return null;
    let d = n[0],
        c = {
            count: i.length - 1,
            username: d.username,
            username2: 2 === i.length && n.length >= 2 ? n[1].username : "",
        },
        u = r ? N.intl.format(N.t.qnYumI, { usernameHook: o, ...c }) : N.intl.format(N.t["5NHEPu"], c);
    return (0, l.jsxs)("div", {
        className: A()(y.kL, t),
        children: [
            (0, l.jsx)("div", {
                className: y.yA,
                style: { maxHeight: `${(0, _.FT)(a)}px` },
                children: n.map((e, i) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: y.R3,
                            style: { zIndex: n.length - i },
                            children: (0, l.jsx)(g.A, { user: e, size: a }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsx)(j.E, { variant: "text-sm/normal", color: "text-subtle", children: u }),
        ],
    });
}
var D = t(460760),
    b = t(115703),
    L = t(47762),
    R = t(990078),
    S = t(825860),
    w = t(661531),
    U = t(939249),
    O = t(573435),
    G = t(569926),
    M = t(822017);
function V(e) {
    let { game: i, activityLevel: t } = e,
        { data: s } = (0, G.I)(i.id),
        a = s?.getCoverURL();
    if (null == a) return null;
    let n = t?.level === L._.HIGH;
    return (0, l.jsx)(R.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, l.jsxs)("div", {
            className: M.Xy,
            children: [
                (0, l.jsx)("img", { className: M._s, src: a, alt: i.name }),
                n &&
                    (0, l.jsx)(O.Ay, {
                        mask: O.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: M.Sy,
                        children: (0, l.jsx)("div", {
                            className: M.oZ,
                            children: (0, l.jsx)(S.Y, {
                                color: w.A.unsafe_rawColors.ORANGE_330.css,
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
function k(e) {
    let { gamesToDisplay: i, lastGameToDisplay: t, remainingGames: a, activity: n, onExpandClick: r } = e,
        [o, c] = s.useState(!1),
        { data: u } = (0, G.I)(t?.id),
        h = s.useCallback(() => {
            r?.(), c(!0);
        }, [r]),
        m = s.useMemo(() => {
            if (null == t) return null;
            let e = u?.getCoverURL();
            return null == e
                ? null
                : 0 === a.length || o
                  ? (0, l.jsx)(V, { game: t, activityLevel: n?.[t.id] })
                  : (0, l.jsx)(R.m, {
                        position: "bottom",
                        "aria-label": N.intl.string(N.t.yohc6E),
                        text: N.intl.string(N.t.yohc6E),
                        children: (0, l.jsxs)(U.D, {
                            className: A()(M.Xy, M.oL, M.vk),
                            onClick: h,
                            "aria-label": `Show ${a.length} more games`,
                            children: [
                                (0, l.jsx)("img", { className: A()(M._s, M.tJ), src: e, alt: t.name }),
                                (0, l.jsx)("div", { className: M.Fg }),
                                (0, l.jsx)("div", {
                                    className: M.AZ,
                                    children: (0, l.jsx)(j.E, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${a.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [t, u, a, n, o, h]);
    if (null == i || 0 === i.length) return null;
    let _ = o && a.length > 0 ? a : [];
    return (0, l.jsxs)(d.B, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            i.map((e) => (0, l.jsx)(V, { game: e, activityLevel: n?.[e.id] }, e.id)),
            o && a.length > 0 ? _.map((e) => (0, l.jsx)(V, { game: e, activityLevel: n?.[e.id] }, e.id)) : m,
        ],
    });
}
var P = t(438842),
    Y = t(879472),
    F = t(649640),
    z = t(954571),
    Z = t(17928),
    H = t(683071),
    B = t(922016),
    W = t(408278),
    q = t(625903),
    J = t(972387),
    K = t(539895),
    X = t(403581),
    $ = t(793574),
    Q = t(688810),
    ee = t(404374),
    ei = t(772366),
    et = t(652215),
    el = t(788868),
    es = t(310253);
function ea(e) {
    let { className: i } = e,
        { analyticsLocations: t, sourceAnalyticsLocations: a } = (0, Q.Ay)($.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        s.useEffect(() => {
            z.default.track(et.HAw.PREMIUM_UPSELL_VIEWED, {
                type: el.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: et.liQ.NATIVE_INVITE_MODAL },
                location_stack: a,
            });
        }, [a]),
        (0, l.jsxs)(U.D, {
            onClick: () =>
                (0, ei.A)({
                    analyticsSource: { page: et.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: et.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: et.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: t,
                }),
            className: A()(es.fA, i),
            children: [
                (0, l.jsx)(X.t, { size: "md", className: es.Y2, color: ee.k0.PREMIUM_TIER_2 }),
                (0, l.jsx)("span", { className: es.Cq, children: N.intl.string(N.t["4/W4Pz"]) }),
                (0, l.jsx)("span", { className: es.MY, children: N.intl.string(N.t.b6KOkI) }),
            ],
        })
    );
}
var en = t(960736),
    er = t(398884),
    eo = t(550079),
    ed = t(477782),
    ec = t(253932);
function eu(e) {
    let { invite: i, closePopout: t } = e,
        s = ec.tz.useSetting(),
        {
            nickname: a,
            dmsAllowed: n,
            showActivity: r,
            setNickname: o,
            setDmsAllowed: d,
            setShowActivity: c,
        } = (0, en.lD)(),
        u = i.is_nickname_changeable;
    return (0, l.jsxs)(eo.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: t,
        "aria-label": N.intl.string(N.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            u
                ? (0, l.jsx)(ed.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: N.intl.string(N.t.me1lRk),
                      value: a,
                      onChange: o,
                      placeholder: N.intl.string(N.t["09Q8yp"]),
                      maxLength: et.d0r,
                  })
                : null,
            (0, l.jsx)(ed.fP, {
                id: "accept-invite-modal-settings-dms",
                label: N.intl.string(N.t["/2ed37"]),
                action: d,
                checked: n,
            }),
            s
                ? (0, l.jsx)(ed.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: N.intl.string(N.t.bN4m1G),
                      action: c,
                      checked: r,
                  })
                : null,
        ],
    });
}
var eh = t(963120);
function em(e) {
    let { invite: i, guild: t, className: a } = e,
        n = (0, Z.bG)([C.default], () => C.default.getCurrentUser()),
        { submitting: r, error: o, invite_instance_id: d } = (0, Z.cf)([K.A], () => K.A.getProps()),
        h = s.useCallback(() => {
            J.A.acceptInvite(i, d);
        }, [i, d]),
        m = (0, en.uE)(),
        x =
            "" !== m
                ? N.intl.format(N.t["9sWQNT"], { usernameHook: (e, i) => (0, l.jsx)("span", { children: m }, i) })
                : N.intl.string(N.t["e/6Ogt"]),
        p = s.useRef(null),
        [v, A] = s.useState(!1),
        E = s.useCallback(() => {
            v ||
                z.default.track(et.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: t.id,
                    invite_code: i.code,
                    location: "accept_invite_modal_redesign",
                }),
                A(!v);
        }, [t.id, i.code, v]),
        j = (0, er.Sn)();
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            null != o
                ? (0, l.jsx)("div", { className: eh.Un, children: (0, l.jsx)(H.w, { type: "critical", children: o }) })
                : null,
            j ? (0, l.jsx)(ea, { className: eh.sX }) : null,
            (0, l.jsxs)(u.e, {
                fullWidthContainer: !0,
                fullWidth: !0,
                direction: "horizontal",
                children: [
                    (0, l.jsx)(c.$, {
                        onClick: h,
                        loading: r,
                        variant: "primary",
                        disabled: j,
                        text: j ? N.intl.string(N.t.ZNCziL) : x,
                        icon:
                            j || null == n
                                ? void 0
                                : () => (0, l.jsx)(g.A, { "aria-hidden": !0, size: _._3.SIZE_16, user: n }),
                    }),
                    j
                        ? null
                        : (0, l.jsx)(B.Y, {
                              targetElementRef: p,
                              animation: B.Y.Animation.NONE,
                              position: "top",
                              align: "right",
                              shouldShow: v,
                              autoInvert: !1,
                              onRequestClose: () => A(!1),
                              renderPopout: (e) => (0, l.jsx)(eu, { invite: i, ...e }),
                              children: (e) =>
                                  (0, l.jsx)("div", {
                                      ref: p,
                                      children: (0, l.jsx)(W.K, {
                                          ...e,
                                          icon: q.Z,
                                          "aria-label": N.intl.string(N.t["3D5yo/"]),
                                          variant: "secondary",
                                          onClick: E,
                                      }),
                                  }),
                          }),
                ],
            }),
        ],
    });
}
var e_ = t(473644),
    ex = t(57930),
    eg = t(991660),
    ep = t(534514),
    ev = t(404778),
    eA = t(847374),
    eE = t(900797),
    ej = t(565645),
    eI = t(59520),
    ef = t(997590),
    eC = t(454346),
    eN = t(80500),
    ey = t(274997),
    eT = t(319745),
    eD = t(488225),
    eb = t(72265),
    eL = t(218471),
    eR = t(109487),
    eS = t(967492),
    ew = t(998445),
    eU = t(9578),
    eO = t(573648);
let eG = {
    [et.fg2.TWITCH]: eC.a,
    [et.fg2.YOUTUBE]: eN.C,
    [et.fg2.TWITTER]: ey.p,
    [et.fg2.TWITTER_LEGACY]: ey.p,
    [et.fg2.FACEBOOK]: eT.Z,
    [et.fg2.INSTAGRAM]: eD.L,
    [et.fg2.REDDIT]: eb.T,
    [et.fg2.TIKTOK]: eL.X,
    [et.fg2.SPOTIFY]: eR.L,
    [et.fg2.BLUESKY]: eS.a,
};
function eM(e) {
    let { url: i, invite: t } = e,
        a = eO.A.getByUrl(i),
        n = null != a ? eG[a.type] : void 0,
        r = s.useCallback(
            () => (
                z.default.track(et.HAw.INVITE_ACCEPT_SOCIAL_LINK_CLICKED, {
                    guild_id: t.guild?.id,
                    invite_code: t.code,
                    social_platform: a?.type,
                    social_platform_url: i,
                }),
                null
            ),
            [t.code, t.guild?.id, a, i],
        );
    return (0, l.jsx)(eU.A, {
        href: i,
        trusted: null != a,
        useDefaultUnderlineStyles: !1,
        onClick: r,
        children:
            null != n
                ? (0, l.jsx)(n, { className: eh.zg, size: "xs", color: w.A.colors.ICON_MUTED, "aria-hidden": !0 })
                : (0, l.jsx)(ew.L, {
                      className: eh.zg,
                      color: w.A.colors.ICON_MUTED,
                      width: 16,
                      height: 16,
                      size: "custom",
                  }),
    });
}
function eV(e) {
    let { categoryIds: i } = e,
        t = (0, Z.yK)([ef.A], () => i.map((e) => ef.A.getCategoryName(e)));
    return (0, l.jsxs)("div", {
        className: eh.Ff,
        children: [
            (0, l.jsx)(ep.D, {
                className: eh.Uo,
                variant: "heading-sm/medium",
                color: "text-default",
                children: N.intl.string(N.t.ffgJrs),
            }),
            (0, l.jsx)(j.E, {
                className: eh._O,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, l.jsx)("span", { children: t.join(", ") }),
            }),
        ],
    });
}
function ek(e) {
    let { discoveryGuild: i, invite: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            i?.reasons_to_join != null &&
                i.reasons_to_join.length > 0 &&
                (0, l.jsx)(d.B, {
                    direction: "vertical",
                    gap: 8,
                    className: eh.$s,
                    children: i.reasons_to_join.map((e, i) =>
                        (0, l.jsxs)(
                            d.B,
                            {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, l.jsx)(ej.A, {
                                        className: eh.E2,
                                        size: "reaction",
                                        emojiId: e.emoji_id,
                                        emojiName: e.emoji_name,
                                    }),
                                    (0, l.jsx)(j.E, {
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
                (0, l.jsxs)("div", {
                    className: eh.lu,
                    id: "invite-about-section",
                    children: [
                        (0, l.jsx)(j.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: N.intl.string(N.t.xcsPye),
                        }),
                        (0, l.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: i.about }),
                    ],
                }),
            null != i &&
                (0, l.jsxs)("div", {
                    className: eh.xw,
                    children: [
                        null != i.social_links &&
                            i.social_links.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ev.c, {}),
                                    (0, l.jsxs)("div", {
                                        className: eh.Ff,
                                        children: [
                                            (0, l.jsx)(ep.D, {
                                                className: eh.Uo,
                                                variant: "heading-sm/medium",
                                                color: "text-default",
                                                children: N.intl.string(N.t.jGVzY5),
                                            }),
                                            (0, l.jsx)(j.E, {
                                                className: eh.qv,
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: i.social_links.map((e) =>
                                                    (0, l.jsx)(eM, { url: e, invite: t }, e),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        null != i.category_ids &&
                            i.category_ids.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(ev.c, {}), (0, l.jsx)(eV, { categoryIds: i.category_ids })],
                            }),
                    ],
                }),
        ],
    });
}
function eP(e) {
    let { invite: i, guild: t, discoveryGuild: a, scrollableSectionClassName: n, expanded: r, setExpanded: o } = e,
        c = null != o,
        u = (a?.about != null && "" !== a.about) || (a?.reasons_to_join != null && a.reasons_to_join.length > 0),
        m = s.useCallback((e, i) => {
            z.default.track(et.HAw.INVITE_ACCEPT_DETAILS_VIEWED, { guild_id: i, invite_code: e, action: "scrolled" });
        }, []),
        _ = (0, eI.I)(m, 3e3, [i.code, t.id], { trailing: !1 }),
        x = s.useCallback(() => {
            _(i.code, t.id);
        }, [i.code, t.id, _]);
    return u
        ? (0, l.jsx)(eg.A, {
              className: n,
              gradientClassName: eh.wH,
              onScroll: x,
              children: (0, l.jsxs)("div", {
                  className: eh.Bn,
                  children: [
                      null != t.description &&
                          "" !== t.description &&
                          (0, l.jsx)(j.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: t.description,
                          }),
                      !r &&
                          c &&
                          (0, l.jsxs)(d.B, {
                              direction: "horizontal",
                              gap: 4,
                              className: eh.qh,
                              children: [
                                  (0, l.jsx)(h.Q, {
                                      text: N.intl.string(N.t["k+2jmZ"]),
                                      onClick: () => o?.(!0),
                                      "aria-expanded": r,
                                      "aria-controls": "invite-about-section",
                                      size: "sm",
                                      variant: "secondary",
                                      textVariant: "text-xs/medium",
                                  }),
                                  (0, l.jsx)(eA.a, { size: "xs", color: w.A.colors.ICON_DEFAULT }),
                              ],
                          }),
                      (0, l.jsx)("div", {
                          className: eh.y,
                          "data-expanded": r || !c,
                          "aria-hidden": c && !r,
                          children: (0, l.jsxs)("div", {
                              className: eh.Cz,
                              children: [
                                  (0, l.jsx)(ek, { discoveryGuild: a, invite: i }),
                                  r &&
                                      c &&
                                      (0, l.jsxs)(d.B, {
                                          direction: "horizontal",
                                          gap: 4,
                                          className: eh.qh,
                                          children: [
                                              (0, l.jsx)(h.Q, {
                                                  text: N.intl.string(N.t["3G783D"]),
                                                  onClick: () => o?.(!1),
                                                  "aria-expanded": r,
                                                  "aria-controls": "invite-about-section",
                                                  size: "sm",
                                                  variant: "secondary",
                                                  textVariant: "text-xs/medium",
                                              }),
                                              (0, l.jsx)(eE.t, { size: "xs", color: w.A.colors.ICON_DEFAULT }),
                                          ],
                                      }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, l.jsx)("div", {
              className: n,
              children: (0, l.jsx)("div", {
                  className: eh.Bn,
                  children:
                      null != t.description &&
                      "" !== t.description &&
                      (0, l.jsx)(j.E, { variant: "text-md/normal", color: "text-default", children: t.description }),
              }),
          });
}
function eY(e) {
    let { className: i, splashURL: t, backgroundColor: s, expanded: a } = e,
        n = (0, F.b2)();
    return null == t
        ? (0, l.jsx)("div", { className: A()(i, eh.D7), style: { background: (0, F.n6)(s ?? n.hex()) } })
        : (0, l.jsx)("div", {
              className: i,
              style: { backgroundImage: `url(${t})` },
              "aria-hidden": !0,
              "data-expanded": a,
          });
}
function eF(e) {
    let { invite: i, guild: t, splashURL: a, friendMemberIds: n, discoveryGuild: r } = e,
        o = null != n && n.length > 0,
        [c, u] = s.useState(!1),
        h = s.useCallback(
            (e) => {
                u(e),
                    z.default.track(et.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                        guild_id: t.id,
                        invite_code: i.code,
                        action: e ? "expanded" : "collapsed",
                    });
            },
            [t.id, i.code],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: eh.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(eY, { className: eh.se, splashURL: a, expanded: c }),
                    (0, l.jsxs)("div", {
                        className: A()(eh.qm, { [eh.rd]: c }),
                        children: [
                            (0, l.jsx)(ex.A, { guild: t, outline: !0 }),
                            (0, l.jsxs)(d.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(e_.A, { guild: t, invite: i, discoveryGuild: r }),
                                    o &&
                                        (0, l.jsx)(T, {
                                            friendMemberIds: n,
                                            className: eh.QS,
                                            avatarSize: _._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsx)(eP, {
                                invite: i,
                                guild: t,
                                discoveryGuild: r,
                                expanded: c,
                                setExpanded: h,
                                scrollableSectionClassName: eh.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(em, { invite: i, guild: t, className: eh.i }),
        ],
    });
}
function ez(e) {
    let { invite: i, guild: t, splashURL: s, friendMemberIds: a, discoveryGuild: n } = e,
        r = null != a && a.length > 0;
    return (0, l.jsxs)("div", {
        className: eh.$5,
        id: "invite-details",
        children: [
            (0, l.jsx)(eY, { className: eh.je, splashURL: s }),
            (0, l.jsxs)("div", {
                className: eh.x6,
                children: [
                    (0, l.jsx)(ex.A, { guild: t }),
                    (0, l.jsxs)(d.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, l.jsx)(e_.A, { guild: t, invite: i, discoveryGuild: n }),
                            r && (0, l.jsx)(T, { friendMemberIds: a, className: eh.QS, avatarSize: _._3.SIZE_24 }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: eh.Sd,
                        children: (0, l.jsx)(eP, {
                            invite: i,
                            guild: t,
                            discoveryGuild: n,
                            scrollableSectionClassName: eh.r_,
                        }),
                    }),
                    (0, l.jsx)(em, { invite: i, guild: t, className: eh.pU }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { guild: i, invite: t, discoveryGuild: n, transitionState: o, headerId: d, channel: c, onClose: u } = e;
    s.useEffect(() => {
        (0, D.Mu)();
    }, []);
    let { treatment: h } = f.zQ.useConfig({ location: "AcceptInviteModalRedesign" }),
        m = (0, I.A)("(max-width: 600px)"),
        _ = "v1" === h || m,
        x = s.useMemo(() => (_ ? eF : ez), [_]);
    return (0, l.jsxs)(r.d, {
        size: _ ? "md" : "xxl",
        "aria-labelledby": d,
        "aria-label": i?.name ?? c?.name ?? "",
        transitionState: o,
        onClose: () => (u(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: a.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: i?.id, invite_code: t.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: eh.cG, children: (0, l.jsx)(E.s_, { shouldColorMix: !0 }) }),
            (0, l.jsx)(x, { ...e, discoveryGuild: n }),
        ],
    });
}
function eH(e) {
    let {
            invite: i,
            guild: t,
            splashURL: n,
            friendMemberIds: o,
            profile: c,
            transitionState: u,
            headerId: h,
            channel: m,
            onClose: x,
        } = e,
        { treatment: g } = f.SH.useConfig({ location: "AcceptInviteModalRedesign" }),
        p = null != o && o.length > 0,
        { gamesToDisplay: v, lastGameToDisplay: A, remainingGames: I } = (0, b.A)(c),
        C = s.useMemo(
            () => c.traits.map((e, i) => ({ key: `trait-${i}`, ...e })).filter((e) => e.label.length > 0),
            [c],
        ),
        N = (0, F.b2)(),
        y = (0, F.aG)({ profile: c, defaultColor: N.hex(), forceDefaultColor: null != c.brandColorPrimary }),
        D = c.brandColorPrimary ?? y;
    return (0, l.jsxs)(r.d, {
        size: "md",
        "aria-labelledby": h,
        "aria-label": t?.name ?? m?.name ?? "",
        transitionState: u,
        onClose: () => (x(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: a.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: t?.id, invite_code: i.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: eh.cG, children: (0, l.jsx)(E.s_, { shouldColorMix: !0 }) }),
            (0, l.jsxs)("div", {
                className: eh.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(eY, { className: eh.se, splashURL: n, backgroundColor: D }),
                    (0, l.jsxs)("div", {
                        className: eh.qm,
                        children: [
                            (0, l.jsx)(ex.A, { guild: t, outline: !0 }),
                            (0, l.jsxs)(d.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(e_.A, { guild: t, invite: i, showGuildTag: !0 }),
                                    p &&
                                        (0, l.jsx)(T, {
                                            friendMemberIds: o,
                                            className: eh.QS,
                                            avatarSize: _._3.SIZE_24,
                                        }),
                                    null != t.description &&
                                        "" !== t.description &&
                                        (0, l.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: t.description,
                                        }),
                                    0 === v.length
                                        ? null
                                        : "v1" === g
                                          ? (0, l.jsx)(P.A, {
                                                gamesToDisplay: v,
                                                lastGameToDisplay: A,
                                                remainingGames: I,
                                                activity: c.gameActivity,
                                            })
                                          : "v2" === g
                                            ? (0, l.jsx)(d.B, {
                                                  direction: "vertical",
                                                  gap: 8,
                                                  children: (0, l.jsx)(k, {
                                                      gamesToDisplay: v,
                                                      lastGameToDisplay: A,
                                                      remainingGames: I,
                                                      activity: c.gameActivity,
                                                      onExpandClick: () => {
                                                          z.default.track(et.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                                              guild_id: t.id,
                                                              invite_code: i.code,
                                                              action: "games_expanded",
                                                          });
                                                      },
                                                  }),
                                              })
                                            : null,
                                    (0, l.jsx)(Y.w, { items: C, traitColor: "text-subtle" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(em, { invite: i, guild: t, className: eh.i }),
        ],
    });
}
var eB = t(915089),
    eW = t(9994),
    eq = t(395671),
    eJ = t(299091),
    eK = t(486020),
    eX = t(723702),
    e$ = t(19575);
function eQ(e) {
    let { transitionState: i, inviteCode: t } = e,
        { analyticsLocations: s } = (0, Q.Ay)($.A.INVITE_MODAL);
    return (0, l.jsx)(Q.f5, {
        value: s,
        children: (0, l.jsx)(n.Modal, {
            "aria-label": N.intl.string(N.t.u9zxnX),
            title: N.intl.string(N.t.u9zxnX),
            subtitle: N.intl.string(N.t.FWkU6P),
            transitionState: i,
            onClose: () => (J.A.close(t), Promise.resolve()),
            size: "sm",
            actions: [{ text: N.intl.string(N.t.wcqOoF), onClick: () => J.A.close(t) }],
        }),
    });
}
function e0(e) {
    let i,
        t,
        n,
        { transitionState: v } = e;
    (0, m.bG)([C.default], () => C.default.getCurrentUser()?.premiumType);
    let A = (0, m.bG)([C.default], () => C.default.getCurrentUser()),
        { invite: E, error: j, submitting: I, invite_instance_id: y } = (0, m.cf)([K.A], () => K.A.getProps()),
        T = (0, m.bG)([eJ.A], () => eJ.A.getInvite(E?.code ?? "") ?? null),
        D = (0, m.bG)([eJ.A], () => eJ.A.getFriendMemberIds(E?.code ?? ""));
    s.useEffect(() => {
        null != E && null != E.guild && (0, en.dR)(E.approximate_member_count ?? 0, E.code, E.guild.id);
    }, [E, E?.approximate_member_count, E?.code, E?.guild?.id]);
    let b = (0, en.uE)(),
        { enabled: L, discoveryGuild: R, isLoading: S } = (0, f.qE)(E?.guild ?? null, "AcceptInviteModal"),
        { enabled: w } = f.SH.useConfig({ location: "AcceptInviteModal" }),
        U = w ? D : null;
    s.useEffect(() => {
        !__OVERLAY__ &&
            eX.isPlatformEmbedded &&
            ((0, eX.isWindows)() ? e$.Ay.minimize() : e$.Ay.restore(), e$.Ay.focus());
    }, []),
        (0, p.Ay)(() => {
            z.default.track(et.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: E?.code, guild_id: E?.guild?.id });
        });
    let O = (0, eB.GV)(),
        { analyticsLocations: G } = (0, Q.Ay)($.A.INVITE_MODAL),
        M = U?.length ?? 0,
        V = M > 0;
    if (
        (s.useEffect(() => {
            V &&
                E?.code != null &&
                z.default.track(et.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: E?.code,
                    guild_id: E.guild?.id,
                    friend_count: M,
                });
        }, [V, M, E?.code, E?.guild?.id]),
        null == E || null == A)
    )
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": O,
            transitionState: v,
            onClose: () => (J.A.close(E?.code), Promise.resolve()),
            children: (0, l.jsx)("div", { className: es.g4, children: (0, l.jsx)(o.y, {}) }),
        });
    if (E.state === et.elq.EXPIRED || E.state === et.elq.BANNED || E.state === et.elq.ERROR)
        return (0, l.jsx)(eQ, { transitionState: v, inviteCode: E.code });
    if (null == E.channel)
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": O,
            transitionState: v,
            onClose: () => (J.A.close(E.code), Promise.resolve()),
            children: (0, l.jsx)("div", { className: es.g4, children: (0, l.jsx)(o.y, {}) }),
        });
    function k() {
        null != E && J.A.acceptInvite(E, y);
    }
    function P() {
        z.default.track(et.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: E?.code, guild_id: E?.guild?.id }),
            J.A.close(E?.code);
    }
    let { guild: Y, channel: F, inviter: Z, target_application: H } = E,
        B = null == E.guild && null == E.channel && null != Z,
        W = null != Y;
    if (null != H) (i = Y?.name), (t = eq.Ay.createFromServer(H).getCoverImageURL(1024));
    else if (null != Y) (i = Y.name), (t = eK.Ay.getGuildSplashURL({ id: Y.id, splash: Y.splash }));
    else if (((null == (i = F.name) || "" === i) && null != Z && (i = Z.username), null == i))
        throw Error("no name for group DM invite");
    let q = (0, er.Sn)();
    if (
        ((n = B
            ? N.intl.string(N.t["e/6Ogt"])
            : N.intl.format(N.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: b }) })),
        S)
    )
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": O,
            transitionState: v,
            onClose: () => (P(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: es.g4, children: (0, l.jsx)(o.y, {}) }),
        });
    if (L && null != Y)
        return (0, l.jsx)(Q.f5, {
            value: G,
            children: (0, l.jsx)(eZ, {
                transitionState: v,
                headerId: O,
                channel: F,
                invite: E,
                guild: Y,
                splashURL: t,
                friendMemberIds: U ?? void 0,
                discoveryGuild: R,
                onClose: P,
            }),
        });
    let X = null != T ? (0, eW.oO)(T) : null,
        ee = (function (e) {
            if (null == e) return !1;
            let i = null != e.description && e.description.length > 0,
                t = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return i && (t || l);
        })(X);
    return null != X && ee && null != Y && (f.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), w)
        ? (0, l.jsx)(Q.f5, {
              value: G,
              children: (0, l.jsx)(eH, {
                  transitionState: v,
                  headerId: O,
                  channel: F,
                  invite: E,
                  guild: Y,
                  splashURL: t,
                  friendMemberIds: U ?? void 0,
                  profile: X,
                  onClose: P,
              }),
          })
        : (0, l.jsx)(Q.f5, {
              value: G,
              children: (0, l.jsx)(r.d, {
                  size: null != t ? "xl" : "sm",
                  "aria-labelledby": O,
                  "aria-label": Y?.name ?? F?.name ?? "",
                  transitionState: v,
                  onClose: () => (P(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: Y?.id, invite_code: E.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: es.jT,
                      children: [
                          (0, l.jsx)("div", {
                              className: es.FG,
                              children: (0, l.jsxs)("div", {
                                  className: es.Ro,
                                  children: [
                                      (0, l.jsx)("div", {
                                          id: O,
                                          children: (0, l.jsx)(x.A, { invite: E, disableUser: W, error: j }),
                                      }),
                                      (0, l.jsxs)("div", {
                                          children: [
                                              q ? (0, l.jsx)(ea, {}) : null,
                                              (0, l.jsxs)(d.B, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == H
                                                          ? (0, l.jsx)(c.$, {
                                                                onClick: k,
                                                                loading: I,
                                                                disabled: q,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: q ? N.intl.string(N.t.ZNCziL) : n,
                                                                icon:
                                                                    q || null == A
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, l.jsx)(g.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: _._3.SIZE_16,
                                                                                  user: A,
                                                                                  className: es.Mp,
                                                                              }),
                                                            })
                                                          : (0, l.jsxs)(u.e, {
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(c.$, {
                                                                        variant: "secondary",
                                                                        text: N.intl.string(N.t.eylRaY),
                                                                        onClick: k,
                                                                        loading: I,
                                                                    }),
                                                                    (0, l.jsx)(c.$, {
                                                                        variant: "primary",
                                                                        text: N.intl.string(N.t.RscU7I),
                                                                        onClick: k,
                                                                        loading: I,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, l.jsx)(h.Q, {
                                                          onClick: P,
                                                          variant: "secondary",
                                                          text: N.intl.string(N.t.ndsK4Z),
                                                          textVariant: "text-sm/medium",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          null != t && (0, l.jsx)("div", { className: es.ll, style: { backgroundImage: `url(${t})` } }),
                      ],
                  }),
              }),
          });
}
