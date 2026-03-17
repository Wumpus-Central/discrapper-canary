"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    m = n(297334),
    p = n(454938),
    g = n(714991),
    _ = n(57991),
    f = n(513461),
    x = n(199285),
    C = n(347951),
    E = n(164956),
    I = n(63995),
    N = n(69407),
    b = n(624265),
    S = n(970278),
    T = n(21119),
    v = n(907459),
    y = n(616356),
    j = n(808728),
    R = n(994500),
    O = n(543465),
    L = n(287809),
    M = n(607567),
    D = n(145408),
    G = n(652215),
    U = n(985018),
    P = n(653750);
function w(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: P.nM,
              children: [
                  (0, i.jsx)(e, { className: P.RI, color: "currentColor" }),
                  (0, i.jsx)(A.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function k(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: U.intl.string(U.t.fpKdS1),
          })
        : (0, i.jsx)(D.A, { muteConfig: t, className: n });
}
function V(e) {
    let t,
        n,
        l,
        a,
        d,
        p,
        g,
        _,
        f,
        x,
        C,
        E,
        D,
        U,
        V,
        B,
        H,
        F,
        K,
        W,
        { guild: Y } = e,
        z = Y.id,
        {
            voiceUsersToShow: q,
            stageSpeakers: X,
            numStageListeners: Q,
            streamUsersToShow: J,
            embeddedActivitiesUsers: $,
        } = ((t = Y.id),
        (n = (0, c.yK)(
            [j.Ay, S.A],
            () => [
                ...j.Ay.getChannels(t)
                    [j.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === G.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(S.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (l = (0, b.Ay)(t)),
        (a = s.useMemo(() => l.map((e) => e.id), [l])),
        (d = (0, c.bG)([M.Ay], () => M.Ay.getVoiceStates(t), [t])),
        (p = (0, c.yK)([R.A], () => R.A.getBlockedOrIgnoredIDs())),
        (g = o().flatMap(n, (e) => {
            if (e === Y.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, m.aw)(t, p);
        })),
        (_ = (0, c.yK)([I.A], () =>
            o().flatMap(a, (e) => {
                if (e === Y.afkChannelId) return [];
                let t = I.A.getMutableParticipants(e, N.ip.SPEAKER)
                    .filter((e) => e.type === N.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, m.aw)(t, p);
            }),
        )),
        (f = (0, c.bG)([I.A], () => {
            let e = 0;
            for (let t of a) e += I.A.getParticipantCount(t, N.ip.AUDIENCE);
            return e;
        })),
        (x = (0, c.yK)([y.A], () => {
            let e = y.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, m.F7)(e, p);
        }, [p, t])),
        (C = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, m.F7)(e, p);
        }, [t, p])),
        (E = (0, c.yK)([L.default], () => {
            let e = C.map((e) => L.default.getUser(e));
            return (0, m.aw)(e);
        }, [C])),
        (D = (0, c.yK)([L.default], () => x.map((e) => L.default.getUser(e)), [x])),
        (U = g.filter((e) => !x.includes(e.id) && !C.includes(e.id))),
        (V = (0, m.aw)(U)),
        (B = D.filter((e) => null != e && !C.includes(e.id))),
        (H = (0, c.bG)([T.A], () => T.A.getUserAffinitiesMap(), [])),
        (F = s.useMemo(() => (0, v.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H])),
        (K = s.useMemo(() => (0, v.L)(_, H, "GuildTooltip - stageSpeakers"), [_, H])),
        (W = s.useMemo(() => (0, v.L)(B, H, "GuildTooltip - streamUsers"), [B, H])),
        {
            voiceUsersToShow: F,
            stageSpeakers: K,
            numStageListeners: f,
            streamUsersToShow: W,
            embeddedActivitiesUsers: s.useMemo(() => (0, v.L)(E, H, "GuildTooltip - embeddedActivitiesUsers"), [E, H]),
            hasActivity: _.length > 0 || U.length > 0 || B.length > 0 || E.length > 0,
        }),
        Z = w(u.HKD, q, z),
        ee =
            0 === X.length
                ? null
                : (0, i.jsxs)("div", {
                      className: P.nM,
                      children: [
                          (0, i.jsx)(u.qux, { size: "lg", color: "currentColor", className: P.RI }),
                          (0, i.jsx)(A.Ay, { guildId: z, users: X, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: P.GZ,
                              children: [
                                  (0, i.jsx)(u.LoC, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(u.Text, {
                                      className: P._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: Q,
                                  }),
                              ],
                          }),
                      ],
                  }),
        et = w(u.Fzq, J, z),
        en = w(u.k9F, $, z),
        { isMuted: ei, muteConfig: es } = (0, c.cf)(
            [O.Ay],
            () => ({ isMuted: O.Ay.isMuted(z), muteConfig: O.Ay.getMuteConfig(z) }),
            [z],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ee,
            Z,
            et,
            en,
            ei ? (0, i.jsx)(k, { muteConfig: es, className: r()(P.LM, { [P.Sx]: null != Z || null != et }) }) : null,
        ],
    });
}
function B(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(u.Text, {
        className: P.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case f.B5.SUBMITTED:
                    return U.intl.string(U.t["9KFC98"]);
                case f.B5.REJECTED:
                    return U.intl.string(U.t["TQY/Rd"]);
                case f.B5.APPROVED:
                    return U.intl.string(U.t.WXHcq5);
                default:
                    return U.intl.string(U.t.fjHFC8);
            }
        })(t),
    });
}
function H(e) {
    let { guild: t } = e,
        n = (0, p.A)(t),
        s = (0, x.a)(t),
        l = null != s ? (0, i.jsx)(B, { guildJoinRequestStatus: s }) : null,
        a = (0, i.jsx)(V, { guild: t }),
        o = (0, c.bG)([E.A], () => E.A.isViewingRoles(t.id)),
        d = (0, C.Ig)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: r()(P.nM, P.Dl),
                children: [
                    n
                        ? (0, i.jsx)(_.A, { guild: t, className: P.WX })
                        : (0, i.jsx)(g.A, { guild: t, size: 20, className: P.aL }),
                    (0, i.jsx)("span", { className: r()(P.cN, P.NT), children: t.name }),
                ],
            }),
            d
                ? (0, i.jsx)(u.Text, {
                      className: P.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: U.intl.string(U.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, i.jsx)(u.Text, {
                      className: P.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: U.intl.string(U.t["5LwN89"]),
                  })
                : (l ?? a),
        ],
    });
}
function F(e) {
    let { guild: t, disabled: n = !1, "aria-label": l = !1, children: r } = e,
        a = s.useMemo(
            () => (n ? null : (0, i.jsx)("div", { className: P.A_, children: (0, i.jsx)(H, { guild: t }) })),
            [n, t],
        );
    return (0, i.jsx)(d.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === l ? void 0 : l,
        asContainer: !0,
        children: r,
    });
}
