n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(933958),
    u = n(104171),
    h = n(297334),
    A = n(47167),
    g = n(392567),
    m = n(21119),
    p = n(907459),
    _ = n(616356),
    x = n(994500),
    f = n(543465),
    E = n(287809),
    C = n(607567),
    I = n(985018),
    S = n(653750);
function b(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: S.nM,
              children: [
                  (0, i.jsx)(t, { className: S.RI, color: "currentColor" }),
                  (0, i.jsx)(u.Ay, { users: n, max: 6 }),
              ],
          });
}
function N(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: I.intl.string(I.t.fpKdS1),
          })
        : (0, i.jsx)(g.A, { muteConfig: t, className: n });
}
function T(e) {
    let t,
        n,
        s,
        o,
        u,
        A,
        g,
        I,
        T,
        j,
        v,
        y,
        R,
        { channel: O } = e,
        L = O.id,
        {
            activityUsers: D,
            streamUsers: M,
            voiceUsers: G,
        } = ((t = O.id),
        (n = (0, r.yK)([x.A], () => x.A.getBlockedOrIgnoredIDs())),
        (s = (0, r.bG)([m.A], () => m.A.getUserAffinitiesMap(), [])),
        (o = (0, r.yK)(
            [c.Ay, E.default],
            () =>
                c.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => E.default.getUser(e)),
            [t],
        )),
        (u = l.useMemo(() => (0, h.aw)(o, n), [o, n])),
        (A = l.useMemo(() => (0, p.L)(u, s, "DirectMessageTooltip - activityUsers"), [u, s])),
        (g = (0, r.yK)([_.A, E.default], () => {
            let e = _.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => E.default.getUser(e));
            return (0, h.aw)(e, n);
        }, [t, n])),
        (I = l.useMemo(() => (0, h.aw)(g, n), [g, n])),
        (T = l.useMemo(() => (0, p.L)(I, s, "DirectMessageTooltip - activityUsers"), [I, s])),
        (j = l.useMemo(() => T.filter((e) => !A.some((t) => t.id === e.id)), [T, A])),
        (v = (0, r.yK)([C.Ay], () => {
            let e = C.Ay.getVoiceStatesForChannel(O).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, h.aw)(e, n);
        }, [O, n])),
        (y = l.useMemo(() => (0, h.aw)(v, n), [v, n])),
        (R = l.useMemo(() => (0, p.L)(y, s, "DirectMessageTooltip - voiceUsers"), [y, s])),
        {
            voiceUsers: l.useMemo(
                () => R.filter((e) => !A.some((t) => t.id === e.id) && !T.some((t) => t.id === e.id)),
                [R, A, T],
            ),
            streamUsers: j,
            activityUsers: A,
        }),
        U = (0, i.jsx)(b, { icon: d.HKD, users: G }),
        P = (0, i.jsx)(b, { icon: d.Fzq, users: M }),
        k = (0, i.jsx)(b, { icon: d.k9F, users: D }),
        { isMuted: w, muteConfig: V } = (0, r.cf)(
            [f.Ay],
            () => ({ isMuted: f.Ay.isChannelMuted(null, L), muteConfig: f.Ay.getChannelMuteConfig(null, L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            P,
            k,
            w ? (0, i.jsx)(N, { muteConfig: V, className: a()(S.LM, { [S.Sx]: null != U || null != P }) }) : null,
        ],
    });
}
function j(e) {
    let { channel: t } = e,
        n = (0, A.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(S.nM, S.Dl),
                children: (0, i.jsx)("span", { className: a()(S.cN, S.NT), children: n }),
            }),
            (0, i.jsx)(T, { channel: t }),
        ],
    });
}
function v(e) {
    let { channel: t, children: n } = e,
        s = (0, A.Ay)(t),
        a = l.useMemo(() => (0, i.jsx)("div", { className: S.A_, children: (0, i.jsx)(j, { channel: t }) }), [t]);
    return (0, i.jsx)(o.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": s ?? void 0,
        asContainer: !0,
        children: n,
    });
}
