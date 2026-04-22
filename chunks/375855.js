n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(834730),
    c = n(983851),
    u = n(183623),
    h = n(323384),
    A = n(933958),
    _ = n(104171),
    m = n(297334),
    g = n(47167),
    p = n(21119),
    f = n(907459),
    E = n(616356),
    x = n(994500),
    I = n(543465),
    C = n(287809),
    b = n(607567),
    N = n(145408),
    S = n(985018),
    v = n(621035);
function T(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: v.nM,
              children: [
                  (0, i.jsx)(t, { className: v.RI, color: "currentColor" }),
                  (0, i.jsx)(_.Ay, { users: n, max: 6 }),
              ],
          });
}
function y(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(d.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: S.intl.string(S.t.fpKdS1),
          })
        : (0, i.jsx)(N.A, { muteConfig: t, className: n });
}
function R(e) {
    let t,
        n,
        s,
        o,
        d,
        _,
        g,
        N,
        S,
        R,
        j,
        L,
        O,
        { channel: G } = e,
        D = G.id,
        {
            activityUsers: M,
            streamUsers: U,
            voiceUsers: P,
        } = ((t = G.id),
        (n = (0, r.yK)([x.A], () => x.A.getBlockedOrIgnoredIDs())),
        (s = (0, r.bG)([p.A], () => p.A.getUserAffinitiesMap(), [])),
        (o = (0, r.yK)(
            [A.Ay, C.default],
            () =>
                A.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => C.default.getUser(e)),
            [t],
        )),
        (d = l.useMemo(() => (0, m.aw)(o, n), [o, n])),
        (_ = l.useMemo(() => (0, f.L)(d, s, "DirectMessageTooltip - activityUsers"), [d, s])),
        (g = (0, r.yK)([E.A, C.default], () => {
            let e = E.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => C.default.getUser(e));
            return (0, m.aw)(e, n);
        }, [t, n])),
        (N = l.useMemo(() => (0, m.aw)(g, n), [g, n])),
        (S = l.useMemo(() => (0, f.L)(N, s, "DirectMessageTooltip - activityUsers"), [N, s])),
        (R = l.useMemo(() => S.filter((e) => !_.some((t) => t.id === e.id)), [S, _])),
        (j = (0, r.yK)([b.Ay], () => {
            let e = b.Ay.getVoiceStatesForChannel(G).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, m.aw)(e, n);
        }, [G, n])),
        (L = l.useMemo(() => (0, m.aw)(j, n), [j, n])),
        (O = l.useMemo(() => (0, f.L)(L, s, "DirectMessageTooltip - voiceUsers"), [L, s])),
        {
            voiceUsers: l.useMemo(
                () => O.filter((e) => !_.some((t) => t.id === e.id) && !S.some((t) => t.id === e.id)),
                [O, _, S],
            ),
            streamUsers: R,
            activityUsers: _,
        }),
        w = (0, i.jsx)(T, { icon: c.H, users: P }),
        k = (0, i.jsx)(T, { icon: u.F, users: U }),
        V = (0, i.jsx)(T, { icon: h.k, users: M }),
        { isMuted: B, muteConfig: H } = (0, r.cf)(
            [I.Ay],
            () => ({ isMuted: I.Ay.isChannelMuted(null, D), muteConfig: I.Ay.getChannelMuteConfig(null, D) }),
            [D],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            w,
            k,
            V,
            B ? (0, i.jsx)(y, { muteConfig: H, className: a()(v.LM, { [v.Sx]: null != w || null != k }) }) : null,
        ],
    });
}
function j(e) {
    let { channel: t } = e,
        n = (0, g.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(v.nM, v.Dl),
                children: (0, i.jsx)("span", { className: a()(v.cN, v.NT), children: n }),
            }),
            (0, i.jsx)(R, { channel: t }),
        ],
    });
}
function L(e) {
    let { channel: t, children: n } = e,
        s = (0, g.Ay)(t),
        a = l.useMemo(() => (0, i.jsx)("div", { className: v.A_, children: (0, i.jsx)(j, { channel: t }) }), [t]);
    return (0, i.jsx)(o.m, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": s ?? void 0,
        asContainer: !0,
        children: n,
    });
}
