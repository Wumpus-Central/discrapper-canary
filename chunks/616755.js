i.d(t, { A: () => I });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(110259),
    d = i(397927),
    c = i(241524),
    o = i(260451),
    u = i(444316),
    m = i(460760),
    x = i(954571),
    h = i(54959),
    _ = i(473644),
    g = i(57930),
    A = i(450382),
    p = i(652215),
    E = i(306989);
function j(e) {
    let { invite: t, guild: i, splashURL: s, friendMemberIds: r, discoveryGuild: c } = e,
        o = null != r && r.length > 0,
        [m, j] = n.useState(!1),
        v = n.useCallback(
            (e) => {
                j(e),
                    x.default.track(p.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
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
                className: E.g3,
                id: "invite-details",
                children: [
                    null != s &&
                        (0, l.jsx)("div", {
                            className: E.se,
                            style: { backgroundImage: `url(${s})` },
                            "aria-hidden": !0,
                            "data-expanded": m,
                        }),
                    (0, l.jsxs)("div", {
                        className: a()(E.qm, { [E.rd]: m }),
                        children: [
                            (0, l.jsx)(g.A, { guild: i, outline: !0 }),
                            (0, l.jsxs)("div", {
                                className: E.X$,
                                children: [
                                    (0, l.jsx)(_.A, { guild: i, invite: t, discoveryGuild: c }),
                                    o &&
                                        (0, l.jsx)(u.A, {
                                            friendMemberIds: r,
                                            className: E.QS,
                                            avatarSize: d._3J.SIZE_24,
                                        }),
                                ],
                            }),
                            (0, l.jsx)(A.A, {
                                invite: t,
                                guild: i,
                                discoveryGuild: c,
                                expanded: m,
                                setExpanded: v,
                                scrollableSectionClassName: E.kw,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(h.A, { invite: t, guild: i, className: E.i }),
        ],
    });
}
function v(e) {
    let { invite: t, guild: i, splashURL: n, friendMemberIds: s, discoveryGuild: a } = e,
        r = null != s && s.length > 0;
    return (0, l.jsxs)("div", {
        className: E.$5,
        id: "invite-details",
        children: [
            null != n &&
                (0, l.jsx)("div", { className: E.je, style: { backgroundImage: `url(${n})` }, "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: E.x6,
                children: [
                    (0, l.jsx)(g.A, { guild: i }),
                    (0, l.jsxs)("div", {
                        className: E.X$,
                        children: [
                            (0, l.jsx)(_.A, { guild: i, invite: t, discoveryGuild: a }),
                            r && (0, l.jsx)(u.A, { friendMemberIds: s, className: E.QS, avatarSize: d._3J.SIZE_24 }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: E.Sd,
                        children: (0, l.jsx)(A.A, {
                            invite: t,
                            guild: i,
                            discoveryGuild: a,
                            scrollableSectionClassName: E.r_,
                        }),
                    }),
                    (0, l.jsx)(h.A, { invite: t, guild: i, className: E.pU }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { guild: t, invite: i, discoveryGuild: s, transitionState: a, headerId: u, channel: x, onClose: h } = e;
    n.useEffect(() => {
        (0, m.Mu)();
    }, []);
    let { treatment: _ } = o.z.useConfig({ location: "AcceptInviteModalRedesign" }),
        g = (0, c.A)("(max-width: 600px)"),
        A = "v1" === _ || g,
        p = n.useMemo(() => (A ? j : v), [A]);
    return (0, l.jsx)(d.dWK, {
        size: A ? "md" : "xxl",
        "aria-labelledby": u,
        "aria-label": t?.name ?? x?.name ?? "",
        transitionState: a,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: { guild_id: t?.id, invite_code: i.code },
            },
        },
        children: (0, l.jsx)(p, { ...e, discoveryGuild: s }),
    });
}
