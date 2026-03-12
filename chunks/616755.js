i.d(t, { A: () => T });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(110259),
    d = i(158954),
    c = i(397927),
    o = i(241524),
    u = i(260451),
    m = i(444316),
    x = i(460760),
    _ = i(954571),
    h = i(54959),
    g = i(473644),
    A = i(57930),
    E = i(450382),
    p = i(652215),
    j = i(306989);
function I(e) {
    let { invite: t, guild: i, splashURL: s, friendMemberIds: r, discoveryGuild: d } = e,
        o = null != r && r.length > 0,
        [u, x] = n.useState(!1),
        I = n.useCallback(
            (e) => {
                x(e),
                    _.default.track(p.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
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
                className: j.g3,
                id: "invite-details",
                children: [
                    null != s &&
                        (0, l.jsx)("div", {
                            className: j.se,
                            style: { backgroundImage: `url(${s})` },
                            "aria-hidden": !0,
                            "data-expanded": u,
                        }),
                    (0, l.jsxs)("div", {
                        className: a()(j.qm, { [j.rd]: u }),
                        children: [
                            (0, l.jsx)(A.A, { guild: i, outline: !0 }),
                            (0, l.jsxs)("div", {
                                className: j.X$,
                                children: [
                                    (0, l.jsx)(g.A, { guild: i, invite: t, discoveryGuild: d }),
                                    o &&
                                        (0, l.jsx)(m.A, {
                                            friendMemberIds: r,
                                            className: j.QS,
                                            avatarSize: c._3J.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsx)(E.A, {
                                invite: t,
                                guild: i,
                                discoveryGuild: d,
                                expanded: u,
                                setExpanded: I,
                                scrollableSectionClassName: j.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(h.A, { invite: t, guild: i, className: j.i }),
        ],
    });
}
function v(e) {
    let { invite: t, guild: i, splashURL: n, friendMemberIds: s, discoveryGuild: a } = e,
        r = null != s && s.length > 0;
    return (0, l.jsxs)("div", {
        className: j.$5,
        id: "invite-details",
        children: [
            null != n &&
                (0, l.jsx)("div", { className: j.je, style: { backgroundImage: `url(${n})` }, "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: j.x6,
                children: [
                    (0, l.jsx)(A.A, { guild: i }),
                    (0, l.jsxs)("div", {
                        className: j.X$,
                        children: [
                            (0, l.jsx)(g.A, { guild: i, invite: t, discoveryGuild: a }),
                            r && (0, l.jsx)(m.A, { friendMemberIds: s, className: j.QS, avatarSize: c._3J.SIZE_24 }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: j.Sd,
                        children: (0, l.jsx)(E.A, {
                            invite: t,
                            guild: i,
                            discoveryGuild: a,
                            scrollableSectionClassName: j.r_,
                        }),
                    }),
                    (0, l.jsx)(h.A, { invite: t, guild: i, className: j.pU }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { guild: t, invite: i, discoveryGuild: s, transitionState: a, headerId: m, channel: _, onClose: h } = e;
    n.useEffect(() => {
        (0, x.Mu)();
    }, []);
    let { treatment: g } = u.z.useConfig({ location: "AcceptInviteModalRedesign" }),
        A = (0, o.A)("(max-width: 600px)"),
        E = "v1" === g || A,
        p = n.useMemo(() => (E ? I : v), [E]);
    return (0, l.jsxs)(c.dWK, {
        size: E ? "md" : "xxl",
        "aria-labelledby": m,
        "aria-label": t?.name ?? _?.name ?? "",
        transitionState: a,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: t?.id, invite_code: i.code },
            },
        },
        children: [
            (0, l.jsx)("div", { className: j.cG, children: (0, l.jsx)(d.s_y, { shouldColorMix: !0 }) }),
            (0, l.jsx)(p, { ...e, discoveryGuild: s }),
        ],
    });
}
