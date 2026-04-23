n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(451394),
    h = n(597601),
    A = n(834730),
    _ = n(983851),
    m = n(183623),
    g = n(323384),
    p = n(933958),
    f = n(104171),
    E = n(297334),
    x = n(454938),
    I = n(714991),
    C = n(57991),
    b = n(513461),
    N = n(199285),
    S = n(347951),
    v = n(164956),
    T = n(63995),
    y = n(69407),
    j = n(624265),
    R = n(970278),
    L = n(21119),
    O = n(907459),
    G = n(616356),
    M = n(808728),
    D = n(994500),
    U = n(543465),
    P = n(287809),
    w = n(607567),
    k = n(145408),
    V = n(652215),
    B = n(985018),
    H = n(621035);
function F(e, t, n) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: H.nM,
              children: [
                  (0, i.jsx)(e, { className: H.RI, color: "currentColor" }),
                  (0, i.jsx)(f.Ay, { guildId: n, users: t, max: 6 }),
              ],
          });
}
function W(e) {
    let { muteConfig: t, className: n } = e;
    return t?.end_time == null
        ? (0, i.jsx)(A.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: B.intl.string(B.t.fpKdS1),
          })
        : (0, i.jsx)(k.A, { muteConfig: t, className: n });
}
function Y(e) {
    let t,
        n,
        s,
        r,
        c,
        x,
        I,
        C,
        b,
        N,
        S,
        v,
        k,
        B,
        Y,
        K,
        z,
        q,
        X,
        Q,
        { guild: Z } = e,
        J = Z.id,
        {
            voiceUsersToShow: $,
            stageSpeakers: ee,
            numStageListeners: et,
            streamUsersToShow: en,
            embeddedActivitiesUsers: ei,
        } = ((t = Z.id),
        (n = (0, d.yK)(
            [M.Ay, R.A],
            () => [
                ...M.Ay.getChannels(t)
                    [M.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === V.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(R.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (s = (0, j.Ay)(t)),
        (r = l.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, d.bG)([w.Ay], () => w.Ay.getVoiceStates(t), [t])),
        (x = (0, d.yK)([D.A], () => D.A.getBlockedOrIgnoredIDs())),
        (I = o().flatMap(n, (e) => {
            if (e === Z.afkChannelId) return [];
            let t = (c[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, E.aw)(t, x);
        })),
        (C = (0, d.yK)([T.A], () =>
            o().flatMap(r, (e) => {
                if (e === Z.afkChannelId) return [];
                let t = T.A.getMutableParticipants(e, y.ip.SPEAKER)
                    .filter((e) => e.type === y.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, E.aw)(t, x);
            }),
        )),
        (b = (0, d.bG)([T.A], () => {
            let e = 0;
            for (let t of r) e += T.A.getParticipantCount(t, y.ip.AUDIENCE);
            return e;
        })),
        (N = (0, d.yK)([G.A], () => {
            let e = G.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, E.F7)(e, x);
        }, [x, t])),
        (S = (0, d.yK)([p.Ay], () => {
            let e = p.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, E.F7)(e, x);
        }, [t, x])),
        (v = (0, d.yK)([P.default], () => {
            let e = S.map((e) => P.default.getUser(e));
            return (0, E.aw)(e);
        }, [S])),
        (k = (0, d.yK)([P.default], () => N.map((e) => P.default.getUser(e)), [N])),
        (B = I.filter((e) => !N.includes(e.id) && !S.includes(e.id))),
        (Y = (0, E.aw)(B)),
        (K = k.filter((e) => null != e && !S.includes(e.id))),
        (z = (0, d.bG)([L.A], () => L.A.getUserAffinitiesMap(), [])),
        (q = l.useMemo(() => (0, O.L)(Y, z, "GuildTooltip - nonBlockedUsers"), [Y, z])),
        (X = l.useMemo(() => (0, O.L)(C, z, "GuildTooltip - stageSpeakers"), [C, z])),
        (Q = l.useMemo(() => (0, O.L)(K, z, "GuildTooltip - streamUsers"), [K, z])),
        {
            voiceUsersToShow: q,
            stageSpeakers: X,
            numStageListeners: b,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: l.useMemo(() => (0, O.L)(v, z, "GuildTooltip - embeddedActivitiesUsers"), [v, z]),
            hasActivity: C.length > 0 || B.length > 0 || K.length > 0 || v.length > 0,
        }),
        el = F(_.H, $, J),
        es =
            0 === ee.length
                ? null
                : (0, i.jsxs)("div", {
                      className: H.nM,
                      children: [
                          (0, i.jsx)(u.q, { size: "lg", color: "currentColor", className: H.RI }),
                          (0, i.jsx)(f.Ay, { guildId: J, users: ee, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: H.GZ,
                              children: [
                                  (0, i.jsx)(h.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(A.E, {
                                      className: H._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: et,
                                  }),
                              ],
                          }),
                      ],
                  }),
        ea = F(m.F, en, J),
        er = F(g.k, ei, J),
        { isMuted: eo, muteConfig: ed } = (0, d.cf)(
            [U.Ay],
            () => ({ isMuted: U.Ay.isMuted(J), muteConfig: U.Ay.getMuteConfig(J) }),
            [J],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            es,
            el,
            ea,
            er,
            eo ? (0, i.jsx)(W, { muteConfig: ed, className: a()(H.LM, { [H.Sx]: null != el || null != ea }) }) : null,
        ],
    });
}
function K(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, i.jsx)(A.E, {
        className: H.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case b.B5.SUBMITTED:
                    return B.intl.string(B.t["9KFC98"]);
                case b.B5.REJECTED:
                    return B.intl.string(B.t["TQY/Rd"]);
                case b.B5.APPROVED:
                    return B.intl.string(B.t.WXHcq5);
                default:
                    return B.intl.string(B.t.fjHFC8);
            }
        })(t),
    });
}
function z(e) {
    let { guild: t } = e,
        n = (0, x.A)(t),
        l = (0, N.a)(t),
        s = null != l ? (0, i.jsx)(K, { guildJoinRequestStatus: l }) : null,
        r = (0, i.jsx)(Y, { guild: t }),
        o = (0, d.bG)([v.A], () => v.A.isViewingRoles(t.id)),
        c = (0, S.Ig)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(H.nM, H.Dl),
                children: [
                    n
                        ? (0, i.jsx)(C.A, { guild: t, className: H.WX })
                        : (0, i.jsx)(I.A, { guild: t, size: 20, className: H.aL }),
                    (0, i.jsx)("span", { className: a()(H.cN, H.NT), children: t.name }),
                ],
            }),
            c
                ? (0, i.jsx)(A.E, {
                      className: H.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: B.intl.string(B.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, i.jsx)(A.E, {
                      className: H.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: B.intl.string(B.t["5LwN89"]),
                  })
                : (s ?? r),
        ],
    });
}
function q(e) {
    let { guild: t, disabled: n = !1, "aria-label": s = !1, children: a } = e,
        r = l.useMemo(
            () => (n ? null : (0, i.jsx)("div", { className: H.A_, children: (0, i.jsx)(z, { guild: t }) })),
            [n, t],
        );
    return (0, i.jsx)(c.m, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === s ? void 0 : s,
        asContainer: !0,
        children: a,
    });
}
