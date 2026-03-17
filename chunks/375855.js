"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(933958),
    u = n(104171),
    h = n(297334),
    A = n(47167),
    m = n(21119),
    p = n(907459),
    g = n(616356),
    _ = n(994500),
    f = n(543465),
    x = n(287809),
    C = n(607567),
    E = n(145408),
    I = n(985018),
    N = n(653750);
function b(e) {
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
              children: I.intl.string(I.t.fpKdS1),
          })
        : (0, i.jsx)(E.A, { muteConfig: t, className: n });
}
function T(e) {
    let t,
        n,
        l,
        o,
        u,
        A,
        E,
        I,
        T,
        v,
        y,
        j,
        R,
        { channel: O } = e,
        L = O.id,
        {
            activityUsers: M,
            streamUsers: D,
            voiceUsers: G,
        } = ((t = O.id),
        (n = (0, a.yK)([_.A], () => _.A.getBlockedOrIgnoredIDs())),
        (l = (0, a.bG)([m.A], () => m.A.getUserAffinitiesMap(), [])),
        (o = (0, a.yK)(
            [d.Ay, x.default],
            () =>
                d.Ay.getEmbeddedActivitiesForChannel(t)
                    .flatMap((e) => Array.from(e.userIds))
                    .map((e) => x.default.getUser(e)),
            [t],
        )),
        (u = s.useMemo(() => (0, h.aw)(o, n), [o, n])),
        (A = s.useMemo(() => (0, p.L)(u, l, "DirectMessageTooltip - activityUsers"), [u, l])),
        (E = (0, a.yK)([g.A, x.default], () => {
            let e = g.A.getAllApplicationStreamsForChannel(t)
                .map((e) => e.ownerId)
                .map((e) => x.default.getUser(e));
            return (0, h.aw)(e, n);
        }, [t, n])),
        (I = s.useMemo(() => (0, h.aw)(E, n), [E, n])),
        (T = s.useMemo(() => (0, p.L)(I, l, "DirectMessageTooltip - activityUsers"), [I, l])),
        (v = s.useMemo(() => T.filter((e) => !A.some((t) => t.id === e.id)), [T, A])),
        (y = (0, a.yK)([C.Ay], () => {
            let e = C.Ay.getVoiceStatesForChannel(O).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, h.aw)(e, n);
        }, [O, n])),
        (j = s.useMemo(() => (0, h.aw)(y, n), [y, n])),
        (R = s.useMemo(() => (0, p.L)(j, l, "DirectMessageTooltip - voiceUsers"), [j, l])),
        {
            voiceUsers: s.useMemo(
                () => R.filter((e) => !A.some((t) => t.id === e.id) && !T.some((t) => t.id === e.id)),
                [R, A, T],
            ),
            streamUsers: v,
            activityUsers: A,
        }),
        U = (0, i.jsx)(b, { icon: c.HKD, users: G }),
        P = (0, i.jsx)(b, { icon: c.Fzq, users: D }),
        w = (0, i.jsx)(b, { icon: c.k9F, users: M }),
        { isMuted: k, muteConfig: V } = (0, a.cf)(
            [f.Ay],
            () => ({ isMuted: f.Ay.isChannelMuted(null, L), muteConfig: f.Ay.getChannelMuteConfig(null, L) }),
            [L],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            U,
            P,
            w,
            k ? (0, i.jsx)(S, { muteConfig: V, className: r()(N.LM, { [N.Sx]: null != U || null != P }) }) : null,
        ],
    });
}
function v(e) {
    let { channel: t } = e,
        n = (0, A.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: r()(N.nM, N.Dl),
                children: (0, i.jsx)("span", { className: r()(N.cN, N.NT), children: n }),
            }),
            (0, i.jsx)(T, { channel: t }),
        ],
    });
}
function y(e) {
    let { channel: t, children: n } = e,
        l = (0, A.Ay)(t),
        r = s.useMemo(() => (0, i.jsx)("div", { className: N.A_, children: (0, i.jsx)(v, { channel: t }) }), [t]);
    return (0, i.jsx)(o.m_, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": l ?? void 0,
        asContainer: !0,
        children: n,
    });
}
