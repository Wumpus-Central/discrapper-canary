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
    p = n(297334),
    g = n(454938),
    m = n(714991),
    _ = n(57991),
    f = n(513461),
    x = n(199285),
    C = n(347951),
    E = n(164956),
    I = n(392567),
    b = n(63995),
    N = n(69407),
    S = n(624265),
    T = n(970278),
    v = n(21119),
    y = n(907459),
    j = n(616356),
    R = n(808728),
    O = n(994500),
    L = n(543465),
    M = n(287809),
    D = n(607567),
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
        : (0, i.jsx)(I.A, { muteConfig: t, className: n });
}
function V(e) {
    let t,
        n,
        l,
        a,
        d,
        g,
        m,
        _,
        f,
        x,
        C,
        E,
        I,
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
            voiceUsersToShow: X,
            stageSpeakers: q,
            numStageListeners: J,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: $,
        } = ((t = Y.id),
        (n = (0, c.yK)(
            [R.Ay, T.A],
            () => [
                ...R.Ay.getChannels(t)
                    [R.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === G.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(T.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (l = (0, S.Ay)(t)),
        (a = s.useMemo(() => l.map((e) => e.id), [l])),
        (d = (0, c.bG)([D.Ay], () => D.Ay.getVoiceStates(t), [t])),
        (g = (0, c.yK)([O.A], () => O.A.getBlockedOrIgnoredIDs())),
        (m = o().flatMap(n, (e) => {
            if (e === Y.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, p.aw)(t, g);
        })),
        (_ = (0, c.yK)([b.A], () =>
            o().flatMap(a, (e) => {
                if (e === Y.afkChannelId) return [];
                let t = b.A.getMutableParticipants(e, N.ip.SPEAKER)
                    .filter((e) => e.type === N.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, p.aw)(t, g);
            }),
        )),
        (f = (0, c.bG)([b.A], () => {
            let e = 0;
            for (let t of a) e += b.A.getParticipantCount(t, N.ip.AUDIENCE);
            return e;
        })),
        (x = (0, c.yK)([j.A], () => {
            let e = j.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, p.F7)(e, g);
        }, [g, t])),
        (C = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, p.F7)(e, g);
        }, [t, g])),
        (E = (0, c.yK)([M.default], () => {
            let e = C.map((e) => M.default.getUser(e));
            return (0, p.aw)(e);
        }, [C])),
        (I = (0, c.yK)([M.default], () => x.map((e) => M.default.getUser(e)), [x])),
        (U = m.filter((e) => !x.includes(e.id) && !C.includes(e.id))),
        (V = (0, p.aw)(U)),
        (B = I.filter((e) => null != e && !C.includes(e.id))),
        (H = (0, c.bG)([v.A], () => v.A.getUserAffinitiesMap(), [])),
        (F = s.useMemo(() => (0, y.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H])),
        (K = s.useMemo(() => (0, y.L)(_, H, "GuildTooltip - stageSpeakers"), [_, H])),
        (W = s.useMemo(() => (0, y.L)(B, H, "GuildTooltip - streamUsers"), [B, H])),
        {
            voiceUsersToShow: F,
            stageSpeakers: K,
            numStageListeners: f,
            streamUsersToShow: W,
            embeddedActivitiesUsers: s.useMemo(() => (0, y.L)(E, H, "GuildTooltip - embeddedActivitiesUsers"), [E, H]),
            hasActivity: _.length > 0 || U.length > 0 || B.length > 0 || E.length > 0,
        }),
        Z = w(u.HKD, X, z),
        ee =
            0 === q.length
                ? null
                : (0, i.jsxs)("div", {
                      className: P.nM,
                      children: [
                          (0, i.jsx)(u.qux, { size: "lg", color: "currentColor", className: P.RI }),
                          (0, i.jsx)(A.Ay, { guildId: z, users: q, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: P.GZ,
                              children: [
                                  (0, i.jsx)(u.LoC, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(u.Text, {
                                      className: P._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
        et = w(u.Fzq, Q, z),
        en = w(u.k9F, $, z),
        { isMuted: ei, muteConfig: es } = (0, c.cf)(
            [L.Ay],
            () => ({ isMuted: L.Ay.isMuted(z), muteConfig: L.Ay.getMuteConfig(z) }),
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
        n = (0, g.A)(t),
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
                        : (0, i.jsx)(m.A, { guild: t, size: 20, className: P.aL }),
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
