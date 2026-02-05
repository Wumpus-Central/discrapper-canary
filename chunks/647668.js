n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    g = n(297334),
    m = n(454938),
    p = n(714991),
    _ = n(57991),
    x = n(513461),
    f = n(199285),
    E = n(347951),
    C = n(164956),
    I = n(392567),
    S = n(63995),
    b = n(69407),
    N = n(624265),
    T = n(970278),
    j = n(21119),
    v = n(907459),
    y = n(616356),
    R = n(808728),
    O = n(994500),
    L = n(543465),
    D = n(287809),
    M = n(607567),
    G = n(652215),
    U = n(985018),
    P = n(653750);
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
              children: U.intl.string(U.t.fpKdS1),
          })
        : (0, i.jsx)(I.A, { muteConfig: t, className: n });
}
function V(e) {
    let t,
        n,
        s,
        r,
        c,
        m,
        p,
        _,
        x,
        f,
        E,
        C,
        I,
        U,
        V,
        B,
        H,
        F,
        Y,
        W,
        { guild: K } = e,
        z = K.id,
        {
            voiceUsersToShow: X,
            stageSpeakers: q,
            numStageListeners: J,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: Z,
        } = ((t = K.id),
        (n = (0, d.yK)(
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
        (s = (0, N.Ay)(t)),
        (r = l.useMemo(() => s.map((e) => e.id), [s])),
        (c = (0, d.bG)([M.Ay], () => M.Ay.getVoiceStates(t), [t])),
        (m = (0, d.yK)([O.A], () => O.A.getBlockedOrIgnoredIDs())),
        (p = o().flatMap(n, (e) => {
            if (e === K.afkChannelId) return [];
            let t = (c[e] ?? []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, g.aw)(t, m);
        })),
        (_ = (0, d.yK)([S.A], () =>
            o().flatMap(r, (e) => {
                if (e === K.afkChannelId) return [];
                let t = S.A.getMutableParticipants(e, b.ip.SPEAKER)
                    .filter((e) => e.type === b.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, g.aw)(t, m);
            }),
        )),
        (x = (0, d.bG)([S.A], () => {
            let e = 0;
            for (let t of r) e += S.A.getParticipantCount(t, b.ip.AUDIENCE);
            return e;
        })),
        (f = (0, d.yK)([y.A], () => {
            let e = y.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, g.F7)(e, m);
        }, [m, t])),
        (E = (0, d.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, g.F7)(e, m);
        }, [t, m])),
        (C = (0, d.yK)([D.default], () => {
            let e = E.map((e) => D.default.getUser(e));
            return (0, g.aw)(e);
        }, [E])),
        (I = (0, d.yK)([D.default], () => f.map((e) => D.default.getUser(e)), [f])),
        (U = p.filter((e) => !f.includes(e.id) && !E.includes(e.id))),
        (V = (0, g.aw)(U)),
        (B = I.filter((e) => null != e && !E.includes(e.id))),
        (H = (0, d.bG)([j.A], () => j.A.getUserAffinitiesMap(), [])),
        (F = l.useMemo(() => (0, v.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H])),
        (Y = l.useMemo(() => (0, v.L)(_, H, "GuildTooltip - stageSpeakers"), [_, H])),
        (W = l.useMemo(() => (0, v.L)(B, H, "GuildTooltip - streamUsers"), [B, H])),
        {
            voiceUsersToShow: F,
            stageSpeakers: Y,
            numStageListeners: x,
            streamUsersToShow: W,
            embeddedActivitiesUsers: l.useMemo(() => (0, v.L)(C, H, "GuildTooltip - embeddedActivitiesUsers"), [C, H]),
            hasActivity: _.length > 0 || U.length > 0 || B.length > 0 || C.length > 0,
        }),
        $ = k(u.HKD, X, z),
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
        et = k(u.Fzq, Q, z),
        en = k(u.k9F, Z, z),
        { isMuted: ei, muteConfig: el } = (0, d.cf)(
            [L.Ay],
            () => ({ isMuted: L.Ay.isMuted(z), muteConfig: L.Ay.getMuteConfig(z) }),
            [z],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ee,
            $,
            et,
            en,
            ei ? (0, i.jsx)(w, { muteConfig: el, className: a()(P.LM, { [P.Sx]: null != $ || null != et }) }) : null,
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
                case x.B5.SUBMITTED:
                    return U.intl.string(U.t["9KFC98"]);
                case x.B5.REJECTED:
                    return U.intl.string(U.t["TQY/Rd"]);
                case x.B5.APPROVED:
                    return U.intl.string(U.t.WXHcq5);
                default:
                    return U.intl.string(U.t.fjHFC8);
            }
        })(t),
    });
}
function H(e) {
    let { guild: t } = e,
        n = (0, m.A)(t),
        l = (0, f.a)(t),
        s = null != l ? (0, i.jsx)(B, { guildJoinRequestStatus: l }) : null,
        r = (0, i.jsx)(V, { guild: t }),
        o = (0, d.bG)([C.A], () => C.A.isViewingRoles(t.id)),
        c = (0, E.Ig)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(P.nM, P.Dl),
                children: [
                    n
                        ? (0, i.jsx)(_.A, { guild: t, className: P.WX })
                        : (0, i.jsx)(p.A, { guild: t, size: 20, className: P.aL }),
                    (0, i.jsx)("span", { className: a()(P.cN, P.NT), children: t.name }),
                ],
            }),
            c
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
    return (0, i.jsx)(c.m_, {
        __unsupportedReactNodeAsText: r,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === s ? void 0 : s,
        asContainer: !0,
        children: a,
    });
}
