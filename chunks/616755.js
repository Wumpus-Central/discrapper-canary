t.d(i, { A: () => S, H: () => w });
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(110259),
    d = t(20742),
    o = t(331322),
    c = t(778712),
    u = t(224640),
    h = t(834730),
    m = t(241524),
    _ = t(260451),
    x = t(444316),
    g = t(460760),
    A = t(115703),
    p = t(63342),
    v = t(438842),
    E = t(879472),
    j = t(649640),
    I = t(954571),
    f = t(54959),
    C = t(473644),
    N = t(57930),
    y = t(450382),
    T = t(652215),
    D = t(963120);
function b(e) {
    let { className: i, splashURL: t, backgroundColor: s, expanded: a } = e,
        r = (0, j.b2)();
    return null == t
        ? (0, l.jsx)("div", { className: n()(i, D.D7), style: { background: (0, j.n6)(s ?? r.hex()) } })
        : (0, l.jsx)("div", {
              className: i,
              style: { backgroundImage: `url(${t})` },
              "aria-hidden": !0,
              "data-expanded": a,
          });
}
function L(e) {
    let { invite: i, guild: t, splashURL: a, friendMemberIds: r, discoveryGuild: d } = e,
        u = null != r && r.length > 0,
        [h, m] = s.useState(!1),
        _ = s.useCallback(
            (e) => {
                m(e),
                    I.default.track(T.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
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
                className: D.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(b, { className: D.se, splashURL: a, expanded: h }),
                    (0, l.jsxs)("div", {
                        className: n()(D.qm, { [D.rd]: h }),
                        children: [
                            (0, l.jsx)(N.A, { guild: t, outline: !0 }),
                            (0, l.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(C.A, { guild: t, invite: i, discoveryGuild: d }),
                                    u &&
                                        (0, l.jsx)(x.A, {
                                            friendMemberIds: r,
                                            className: D.QS,
                                            avatarSize: c._3.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsx)(y.A, {
                                invite: i,
                                guild: t,
                                discoveryGuild: d,
                                expanded: h,
                                setExpanded: _,
                                scrollableSectionClassName: D.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(f.A, { invite: i, guild: t, className: D.i }),
        ],
    });
}
function R(e) {
    let { invite: i, guild: t, splashURL: s, friendMemberIds: a, discoveryGuild: n } = e,
        r = null != a && a.length > 0;
    return (0, l.jsxs)("div", {
        className: D.$5,
        id: "invite-details",
        children: [
            (0, l.jsx)(b, { className: D.je, splashURL: s }),
            (0, l.jsxs)("div", {
                className: D.x6,
                children: [
                    (0, l.jsx)(N.A, { guild: t }),
                    (0, l.jsxs)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, l.jsx)(C.A, { guild: t, invite: i, discoveryGuild: n }),
                            r && (0, l.jsx)(x.A, { friendMemberIds: a, className: D.QS, avatarSize: c._3.SIZE_24 }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: D.Sd,
                        children: (0, l.jsx)(y.A, {
                            invite: i,
                            guild: t,
                            discoveryGuild: n,
                            scrollableSectionClassName: D.r_,
                        }),
                    }),
                    (0, l.jsx)(f.A, { invite: i, guild: t, className: D.pU }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { guild: i, invite: t, discoveryGuild: a, transitionState: n, headerId: o, channel: c, onClose: h } = e;
    s.useEffect(() => {
        (0, g.Mu)();
    }, []);
    let { treatment: x } = _.zQ.useConfig({ location: "AcceptInviteModalRedesign" }),
        A = (0, m.A)("(max-width: 600px)"),
        p = "v1" === x || A,
        v = s.useMemo(() => (p ? L : R), [p]);
    return (0, l.jsxs)(u.d, {
        size: p ? "md" : "xxl",
        "aria-labelledby": o,
        "aria-label": i?.name ?? c?.name ?? "",
        transitionState: n,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: i?.id, invite_code: t.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: D.cG, children: (0, l.jsx)(d.s_, { shouldColorMix: !0 }) }),
            (0, l.jsx)(v, { ...e, discoveryGuild: a }),
        ],
    });
}
function w(e) {
    let {
            invite: i,
            guild: t,
            splashURL: a,
            friendMemberIds: n,
            profile: m,
            transitionState: g,
            headerId: y,
            channel: L,
            onClose: R,
        } = e,
        { treatment: S } = _.SH.useConfig({ location: "AcceptInviteModalRedesign" }),
        w = null != n && n.length > 0,
        { gamesToDisplay: U, lastGameToDisplay: O, remainingGames: G } = (0, A.A)(m),
        M = s.useMemo(
            () => m.traits.map((e, i) => ({ key: `trait-${i}`, ...e })).filter((e) => e.label.length > 0),
            [m],
        ),
        V = (0, j.b2)(),
        k = (0, j.aG)({ profile: m, defaultColor: V.hex(), forceDefaultColor: null != m.brandColorPrimary }),
        P = m.brandColorPrimary ?? k;
    return (0, l.jsxs)(u.d, {
        size: "md",
        "aria-labelledby": y,
        "aria-label": t?.name ?? L?.name ?? "",
        transitionState: g,
        onClose: () => (R(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: t?.id, invite_code: i.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: D.cG, children: (0, l.jsx)(d.s_, { shouldColorMix: !0 }) }),
            (0, l.jsxs)("div", {
                className: D.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(b, { className: D.se, splashURL: a, backgroundColor: P }),
                    (0, l.jsxs)("div", {
                        className: D.qm,
                        children: [
                            (0, l.jsx)(N.A, { guild: t, outline: !0 }),
                            (0, l.jsxs)(o.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(C.A, { guild: t, invite: i, showGuildTag: !0 }),
                                    w &&
                                        (0, l.jsx)(x.A, {
                                            friendMemberIds: n,
                                            className: D.QS,
                                            avatarSize: c._3.SIZE_24,
                                        }),
                                    null != t.description &&
                                        "" !== t.description &&
                                        (0, l.jsx)(h.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: t.description,
                                        }),
                                    0 === U.length
                                        ? null
                                        : "v1" === S
                                          ? (0, l.jsx)(v.A, {
                                                gamesToDisplay: U,
                                                lastGameToDisplay: O,
                                                remainingGames: G,
                                                activity: m.gameActivity,
                                            })
                                          : "v2" === S
                                            ? (0, l.jsx)(o.B, {
                                                  direction: "vertical",
                                                  gap: 8,
                                                  children: (0, l.jsx)(p.A, {
                                                      gamesToDisplay: U,
                                                      lastGameToDisplay: O,
                                                      remainingGames: G,
                                                      activity: m.gameActivity,
                                                      onExpandClick: () => {
                                                          I.default.track(T.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                                              guild_id: t.id,
                                                              invite_code: i.code,
                                                              action: "games_expanded",
                                                          });
                                                      },
                                                  }),
                                              })
                                            : null,
                                    (0, l.jsx)(E.w, { items: M, traitColor: "text-subtle" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(f.A, { invite: i, guild: t, className: D.i }),
        ],
    });
}
