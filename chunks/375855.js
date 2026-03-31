n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(933958),
    u = n(104171),
    h = n(297334),
    A = n(47167),
    _ = n(21119),
    m = n(907459),
    g = n(616356),
    p = n(994500),
    f = n(543465),
    x = n(287809),
    E = n(607567),
    I = n(145408),
    C = n(985018),
    N = n(826427);
function T(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: N.nM,
              children: [
                  (0, i.jsx)(t, { className: N.RI, color: "currentColor" }),
                  (0, i.jsx)(u.Ay, { users: n, max: 6 }),
              ],
          });
}
function S(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: C.intl.string(C.t.fpKdS1),
          })
        : (0, i.jsx)(I.A, { muteConfig: t, className: n });
}
function b(e) {
    let t,
        n,
        s,
        o,
        u,
        A,
        I,
        C,
        b,
        y,
        v,
        j,
        R,
        { channel: O } = e,
        L = O.id,
        {
            activityUsers: M,
            streamUsers: D,
            voiceUsers: U,
        } = ((t = O.id),
        (n = (0, r.yK)([p.A], () => p.A.getBlockedOrIgnoredIDs())),
        (s = (0, r.bG)([_.A], () => _.A.getUserAffinitiesMap(), [])),
        (o = (0, r.yK)(
            [d.Ay, x.default],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => x.default.getUser(e)),
            [t],
        )),
        (u = l.useMemo(() => (0, h.aw)(o, n), [o, n])),
        (A = l.useMemo(() => (0, m.L)(u, s, "DirectMessageTooltip - activityUsers"), [u, s])),
        (I = (0, r.yK)([g.A, x.default], () => {
            let e = g.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => x.default.getUser(e));
            return (0, h.aw)(e, n);
        }, [t, n])),
        (C = l.useMemo(() => (0, h.aw)(I, n), [I, n])),
        (b = l.useMemo(() => (0, m.L)(C, s, "DirectMessageTooltip - activityUsers"), [C, s])),
        (y = l.useMemo(() => b.filter((e) => !A.some((t) => t.id === e.id)), [b, A])),
        (v = (0, r.yK)([E.Ay], () => {
            let e = E.Ay.getVoiceStatesForChannel(O).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, h.aw)(e, n);
        }, [O, n])),
        (j = l.useMemo(() => (0, h.aw)(v, n), [v, n])),
        (R = l.useMemo(() => (0, m.L)(j, s, "DirectMessageTooltip - voiceUsers"), [j, s])),
        {
            voiceUsers: l.useMemo(
                () => R.filter((e) => !A.some((t) => t.id === e.id) && !b.some((t) => t.id === e.id)),
                [R, A, b],
            ),
            streamUsers: y,
            activityUsers: A,
        }),
        G = (0, i.jsx)(T, { icon: c.HKD, users: U }),
        P = (0, i.jsx)(T, { icon: c.Fzq, users: D }),
        k = (0, i.jsx)(T, { icon: c.k9F, users: M }),
        { isMuted: w, muteConfig: B } = (0, r.cf)(
            [f.Ay],
            () => ({ isMuted: f.Ay.isChannelMuted(null, L), muteConfig: f.Ay.getChannelMuteConfig(null, L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            G,
            P,
            k,
            w ? (0, i.jsx)(S, { muteConfig: B, className: a()(N.LM, { [N.Sx]: null != G || null != P }) }) : null,
        ],
    });
}
function y(e) {
    let { channel: t } = e,
        n = (0, A.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(N.nM, N.Dl),
                children: (0, i.jsx)("span", { className: a()(N.cN, N.NT), children: n }),
            }),
            (0, i.jsx)(b, { channel: t }),
        ],
    });
}
function v(e) {
    let { channel: t, children: n } = e,
        s = (0, A.Ay)(t),
        a = l.useMemo(() => (0, i.jsx)("div", { className: N.A_, children: (0, i.jsx)(y, { channel: t }) }), [t]);
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
