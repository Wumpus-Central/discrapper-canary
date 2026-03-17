i.d(t, { A: () => S, H: () => b });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(110259),
    d = i(158954),
    o = i(397927),
    c = i(241524),
    u = i(260451),
    m = i(444316),
    x = i(460760),
    g = i(115703),
    h = i(63342),
    _ = i(438842),
    p = i(879472),
    A = i(649640),
    j = i(954571),
    E = i(54959),
    v = i(473644),
    I = i(57930),
    f = i(450382),
    T = i(652215),
    C = i(492171);
function N(e) {
    let { className: t, splashURL: i, backgroundColor: n, expanded: a } = e,
        r = (0, A.b2)();
    return null == i
        ? (0, l.jsx)("div", { className: s()(t, C.D7), style: { background: (0, A.n6)(n ?? r.hex()) } })
        : (0, l.jsx)("div", {
              className: t,
              style: { backgroundImage: `url(${i})` },
              "aria-hidden": !0,
              "data-expanded": a,
          });
}
function y(e) {
    let { invite: t, guild: i, splashURL: a, friendMemberIds: r, discoveryGuild: d } = e,
        c = null != r && r.length > 0,
        [u, x] = n.useState(!1),
        g = n.useCallback(
            (e) => {
                x(e),
                    j.default.track(T.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                        guild_id: i.id,
                        invite_code: t.code,
                        action: e ? "expanded" : "collapsed",
                    });
            },
            [i.id, t.code],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: C.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(N, { className: C.se, splashURL: a, expanded: u }),
                    (0, l.jsxs)("div", {
                        className: s()(C.qm, { [C.rd]: u }),
                        children: [
                            (0, l.jsx)(I.A, { guild: i, outline: !0 }),
                            (0, l.jsxs)(o.BJc, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(v.A, { guild: i, invite: t, discoveryGuild: d }),
                                    c &&
                                        (0, l.jsx)(m.A, {
                                            friendMemberIds: r,
                                            className: C.QS,
                                            avatarSize: o._3J.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsx)(f.A, {
                                invite: t,
                                guild: i,
                                discoveryGuild: d,
                                expanded: u,
                                setExpanded: g,
                                scrollableSectionClassName: C.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(E.A, { invite: t, guild: i, className: C.i }),
        ],
    });
}
function D(e) {
    let { invite: t, guild: i, splashURL: n, friendMemberIds: a, discoveryGuild: s } = e,
        r = null != a && a.length > 0;
    return (0, l.jsxs)("div", {
        className: C.$5,
        id: "invite-details",
        children: [
            (0, l.jsx)(N, { className: C.je, splashURL: n }),
            (0, l.jsxs)("div", {
                className: C.x6,
                children: [
                    (0, l.jsx)(I.A, { guild: i }),
                    (0, l.jsxs)(o.BJc, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, l.jsx)(v.A, { guild: i, invite: t, discoveryGuild: s }),
                            r && (0, l.jsx)(m.A, { friendMemberIds: a, className: C.QS, avatarSize: o._3J.SIZE_24 }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: C.Sd,
                        children: (0, l.jsx)(f.A, {
                            invite: t,
                            guild: i,
                            discoveryGuild: s,
                            scrollableSectionClassName: C.r_,
                        }),
                    }),
                    (0, l.jsx)(E.A, { invite: t, guild: i, className: C.pU }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { guild: t, invite: i, discoveryGuild: a, transitionState: s, headerId: m, channel: g, onClose: h } = e;
    n.useEffect(() => {
        (0, x.Mu)();
    }, []);
    let { treatment: _ } = u.zQ.useConfig({ location: "AcceptInviteModalRedesign" }),
        p = (0, c.A)("(max-width: 600px)"),
        A = "v1" === _ || p,
        j = n.useMemo(() => (A ? y : D), [A]);
    return (0, l.jsxs)(o.dWK, {
        size: A ? "md" : "xxl",
        "aria-labelledby": m,
        "aria-label": t?.name ?? g?.name ?? "",
        transitionState: s,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: t?.id, invite_code: i.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: C.cG, children: (0, l.jsx)(d.s_y, { shouldColorMix: !0 }) }),
            (0, l.jsx)(j, { ...e, discoveryGuild: a }),
        ],
    });
}
function b(e) {
    let {
            invite: t,
            guild: i,
            splashURL: a,
            friendMemberIds: s,
            profile: c,
            transitionState: x,
            headerId: f,
            channel: y,
            onClose: D,
        } = e,
        { treatment: S } = u.SH.useConfig({ location: "AcceptInviteModalRedesign" }),
        b = null != s && s.length > 0,
        { gamesToDisplay: L, lastGameToDisplay: R, remainingGames: U } = (0, g.A)(c),
        O = n.useMemo(
            () => c.traits.map((e, t) => ({ key: `trait-${t}`, ...e })).filter((e) => e.label.length > 0),
            [c],
        ),
        G = (0, A.b2)(),
        k = (0, A.aG)({ profile: c, defaultColor: G.hex(), forceDefaultColor: null != c.brandColorPrimary }),
        M = c.brandColorPrimary ?? k;
    return (0, l.jsxs)(o.dWK, {
        size: "md",
        "aria-labelledby": f,
        "aria-label": i?.name ?? y?.name ?? "",
        transitionState: x,
        onClose: () => (D(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: i?.id, invite_code: t.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: C.cG, children: (0, l.jsx)(d.s_y, { shouldColorMix: !0 }) }),
            (0, l.jsxs)("div", {
                className: C.g3,
                id: "invite-details",
                children: [
                    (0, l.jsx)(N, { className: C.se, splashURL: a, backgroundColor: M }),
                    (0, l.jsxs)("div", {
                        className: C.qm,
                        children: [
                            (0, l.jsx)(I.A, { guild: i, outline: !0 }),
                            (0, l.jsxs)(o.BJc, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(v.A, { guild: i, invite: t, showGuildTag: !0 }),
                                    b &&
                                        (0, l.jsx)(m.A, {
                                            friendMemberIds: s,
                                            className: C.QS,
                                            avatarSize: o._3J.SIZE_24,
                                        }),
                                    null != i.description &&
                                        "" !== i.description &&
                                        (0, l.jsx)(o.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: i.description,
                                        }),
                                    0 === L.length
                                        ? null
                                        : "v1" === S
                                          ? (0, l.jsx)(_.A, {
                                                gamesToDisplay: L,
                                                lastGameToDisplay: R,
                                                remainingGames: U,
                                                activity: c.gameActivity,
                                            })
                                          : "v2" === S
                                            ? (0, l.jsx)(o.BJc, {
                                                  direction: "vertical",
                                                  gap: 8,
                                                  children: (0, l.jsx)(h.A, {
                                                      gamesToDisplay: L,
                                                      lastGameToDisplay: R,
                                                      remainingGames: U,
                                                      activity: c.gameActivity,
                                                      onExpandClick: () => {
                                                          j.default.track(T.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                                              guild_id: i.id,
                                                              invite_code: t.code,
                                                              action: "games_expanded",
                                                          });
                                                      },
                                                  }),
                                              })
                                            : null,
                                    (0, l.jsx)(p.w, { items: O, traitColor: "text-subtle" }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(E.A, { invite: t, guild: i, className: C.i }),
        ],
    });
}
