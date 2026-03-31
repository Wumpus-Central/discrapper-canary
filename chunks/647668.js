n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    _ = n(297334),
    m = n(454938),
    g = n(714991),
    p = n(57991),
    f = n(513461),
    x = n(199285),
    E = n(347951),
    I = n(164956),
    C = n(63995),
    N = n(69407),
    T = n(624265),
    S = n(970278),
    b = n(21119),
    y = n(907459),
    v = n(616356),
    j = n(808728),
    R = n(994500),
    O = n(543465),
    L = n(287809),
    M = n(607567),
    D = n(145408),
    U = n(652215),
    G = n(985018),
    P = n(826427);
function k(e, t, n) {
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
function w(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: G.intl.string(G.t.fpKdS1),
          })
        : (0, i.jsx)(D.A, { muteConfig: t, className: n });
}
function B(e) {
    let t,
        n,
        s,
        r,
        d,
        m,
        g,
        p,
        f,
        x,
        E,
        I,
        D,
        G,
        B,
        V,
        H,
        F,
        K,
        W,
        { guild: Y } = e,
        z = Y.id,
        {
            voiceUsersToShow: q,
            stageSpeakers: X,
            numStageListeners: J,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: $,
        } = ((t = Y.id),
        (n = (0, c.yK)(
            [j.Ay, S.A],
            () => [
                ...j.Ay.getChannels(t)
                    [j.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === U.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(S.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (s = (0, T.Ay)(t)),
        (r = l.useMemo(() => s.map((e) => e.id), [s])),
        (d = (0, c.bG)([M.Ay], () => M.Ay.getVoiceStates(t), [t])),
        (m = (0, c.yK)([R.A], () => R.A.getBlockedOrIgnoredIDs())),
        (g = o().flatMap(n, (e) => {
            if (e === Y.afkChannelId) return [];
            let t = (d[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, _.aw)(t, m);
        })),
        (p = (0, c.yK)([C.A], () =>
            o().flatMap(r, (e) => {
                if (e === Y.afkChannelId) return [];
                let t = C.A.getMutableParticipants(e, N.ip.SPEAKER)
                    .filter((e) => e.type === N.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, _.aw)(t, m);
            }),
        )),
        (f = (0, c.bG)([C.A], () => {
            let e = 0;
            for (let t of r) e += C.A.getParticipantCount(t, N.ip.AUDIENCE);
            return e;
        })),
        (x = (0, c.yK)([v.A], () => {
            let e = v.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, _.F7)(e, m);
        }, [m, t])),
        (E = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, _.F7)(e, m);
        }, [t, m])),
        (I = (0, c.yK)([L.default], () => {
            let e = E.map((e) => L.default.getUser(e));
            return (0, _.aw)(e);
        }, [E])),
        (D = (0, c.yK)([L.default], () => x.map((e) => L.default.getUser(e)), [x])),
        (G = g.filter((e) => !x.includes(e.id) && !E.includes(e.id))),
        (B = (0, _.aw)(G)),
        (V = D.filter((e) => null != e && !E.includes(e.id))),
        (H = (0, c.bG)([b.A], () => b.A.getUserAffinitiesMap(), [])),
        (F = l.useMemo(() => (0, y.L)(B, H, "GuildTooltip - nonBlockedUsers"), [B, H])),
        (K = l.useMemo(() => (0, y.L)(p, H, "GuildTooltip - stageSpeakers"), [p, H])),
        (W = l.useMemo(() => (0, y.L)(V, H, "GuildTooltip - streamUsers"), [V, H])),
        {
            voiceUsersToShow: F,
            stageSpeakers: K,
            numStageListeners: f,
            streamUsersToShow: W,
            embeddedActivitiesUsers: l.useMemo(() => (0, y.L)(I, H, "GuildTooltip - embeddedActivitiesUsers"), [I, H]),
            hasActivity: p.length > 0 || G.length > 0 || V.length > 0 || I.length > 0,
        }),
        Z = k(u.HKD, q, z),
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
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
        et = k(u.Fzq, Q, z),
        en = k(u.k9F, $, z),
        { isMuted: ei, muteConfig: el } = (0, c.cf)(
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
            ei ? (0, i.jsx)(w, { muteConfig: el, className: a()(P.LM, { [P.Sx]: null != Z || null != et }) }) : null,
        ],
    });
}
function V(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(u.Text, {
        className: P.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case f.B5.SUBMITTED:
                    return G.intl.string(G.t["9KFC98"]);
                case f.B5.REJECTED:
                    return G.intl.string(G.t["TQY/Rd"]);
                case f.B5.APPROVED:
                    return G.intl.string(G.t.WXHcq5);
                default:
                    return G.intl.string(G.t.fjHFC8);
            }
        })(t),
    });
}
function H(e) {
    let { guild: t } = e,
        n = (0, m.A)(t),
        l = (0, x.a)(t),
        s = null != l ? (0, i.jsx)(V, { guildJoinRequestStatus: l }) : null,
        r = (0, i.jsx)(B, { guild: t }),
        o = (0, c.bG)([I.A], () => I.A.isViewingRoles(t.id)),
        d = (0, E.Ig)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(P.nM, P.Dl),
                children: [
                    n
                        ? (0, i.jsx)(p.A, { guild: t, className: P.WX })
                        : (0, i.jsx)(g.A, { guild: t, size: 20, className: P.aL }),
                    (0, i.jsx)("span", { className: a()(P.cN, P.NT), children: t.name }),
                ],
            }),
            d
                ? (0, i.jsx)(u.Text, {
                      className: P.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: G.intl.string(G.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, i.jsx)(u.Text, {
                      className: P.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: G.intl.string(G.t["5LwN89"]),
                  })
                : (s ?? r),
        ],
    });
}
function F(e) {
    let { guild: t, disabled: n = !1, "aria-label": s = !1, children: a } = e,
        r = l.useMemo(
            () => (n ? null : (0, i.jsx)("div", { className: P.A_, children: (0, i.jsx)(H, { guild: t }) })),
            [n, t],
        );
    return (0, i.jsx)(d.m_, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === s ? void 0 : s,
        asContainer: !0,
        children: a,
    });
}
