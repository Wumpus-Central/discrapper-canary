n.d(t, {
    A: () => B,
}),
    n(114821),
    n(339614),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    f = n(933958),
    p = n(104171),
    h = n(297334),
    b = n(454938),
    g = n(714991),
    m = n(57991),
    A = n(513461),
    y = n(199285),
    O = n(347951),
    j = n(164956),
    v = n(392567),
    x = n(63995),
    E = n(69407),
    _ = n(624265),
    C = n(970278),
    S = n(21119),
    I = n(907459),
    N = n(616356),
    T = n(808728),
    P = n(994500),
    w = n(543465),
    R = n(287809),
    D = n(607567),
    M = n(652215),
    L = n(985018),
    G = n(653750);

function k(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: G.nM,
              children: [
                  (0, r.jsx)(e, {
                      className: G.RI,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(p.Ay, {
                      guildId: n,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}

function U(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: L.intl.string(L.t.fpKdS1),
          })
        : (0, r.jsx)(v.A, {
              muteConfig: t,
              className: n,
          });
}

function V(e) {
    let t,
        n,
        i,
        s,
        u,
        b,
        g,
        m,
        A,
        y,
        O,
        j,
        v,
        L,
        V,
        F,
        H,
        B,
        K,
        W,
        { guild: z } = e,
        Y = z.id,
        {
            voiceUsersToShow: q,
            stageSpeakers: X,
            numStageListeners: J,
            streamUsersToShow: Q,
            embeddedActivitiesUsers: Z,
        } = ((t = z.id),
        (n = (0, c.yK)(
            [T.Ay, C.A],
            () => [
                ...T.Ay.getChannels(t)
                    [T.vM].filter((e) => {
                        let { channel: t } = e;
                        return t.type === M.rbe.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(C.A.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        )),
        (i = (0, _.Ay)(t)),
        (s = l.useMemo(() => i.map((e) => e.id), [i])),
        (u = (0, c.bG)([D.Ay], () => D.Ay.getVoiceStates(t), [t])),
        (b = (0, c.yK)([P.A], () => P.A.getBlockedOrIgnoredIDs())),
        (g = o().flatMap(n, (e) => {
            var t;
            if (e === z.afkChannelId) return [];
            let n = (null != (t = u[e]) ? t : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, h.aw)(n, b);
        })),
        (m = (0, c.yK)([x.A], () =>
            o().flatMap(s, (e) => {
                if (e === z.afkChannelId) return [];
                let t = x.A.getMutableParticipants(e, E.ip.SPEAKER)
                    .filter((e) => e.type === E.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, h.aw)(t, b);
            }),
        )),
        (A = (0, c.bG)([x.A], () => {
            let e = 0;
            for (let t of s) e += x.A.getParticipantCount(t, E.ip.AUDIENCE);
            return e;
        })),
        (y = (0, c.yK)([N.A], () => {
            let e = N.A.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, h.F7)(e, b);
        }, [b, t])),
        (O = (0, c.yK)([f.Ay], () => {
            let e = f.Ay.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, h.F7)(e, b);
        }, [t, b])),
        (j = (0, c.yK)([R.default], () => {
            let e = O.map((e) => R.default.getUser(e));
            return (0, h.aw)(e);
        }, [O])),
        (v = (0, c.yK)([R.default], () => y.map((e) => R.default.getUser(e)), [y])),
        (L = g.filter((e) => !y.includes(e.id) && !O.includes(e.id))),
        (V = (0, h.aw)(L)),
        (F = v.filter((e) => null != e && !O.includes(e.id))),
        (H = (0, c.bG)([S.A], () => S.A.getUserAffinitiesMap(), [])),
        (B = l.useMemo(() => (0, I.L)(V, H, "GuildTooltip - nonBlockedUsers"), [V, H])),
        (K = l.useMemo(() => (0, I.L)(m, H, "GuildTooltip - stageSpeakers"), [m, H])),
        (W = l.useMemo(() => (0, I.L)(F, H, "GuildTooltip - streamUsers"), [F, H])),
        {
            voiceUsersToShow: B,
            stageSpeakers: K,
            numStageListeners: A,
            streamUsersToShow: W,
            embeddedActivitiesUsers: l.useMemo(() => (0, I.L)(j, H, "GuildTooltip - embeddedActivitiesUsers"), [j, H]),
            hasActivity: m.length > 0 || L.length > 0 || F.length > 0 || j.length > 0,
        }),
        $ = k(d.HKD, q, Y),
        ee =
            0 === X.length
                ? null
                : (0, r.jsxs)("div", {
                      className: G.nM,
                      children: [
                          (0, r.jsx)(d.qux, {
                              size: "lg",
                              color: "currentColor",
                              className: G.RI,
                          }),
                          (0, r.jsx)(p.Ay, {
                              guildId: Y,
                              users: X,
                              max: 3,
                          }),
                          (0, r.jsxs)("div", {
                              className: G.GZ,
                              children: [
                                  (0, r.jsx)(d.LoC, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: G._I,
                                      color: "text-default",
                                      variant: "text-xs/normal",
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
        et = k(d.Fzq, Q, Y),
        en = k(d.bxf, Z, Y),
        { isMuted: er, muteConfig: el } = (0, c.cf)(
            [w.Ay],
            () => ({
                isMuted: w.Ay.isMuted(Y),
                muteConfig: w.Ay.getMuteConfig(Y),
            }),
            [Y],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            ee,
            $,
            et,
            en,
            er
                ? (0, r.jsx)(U, {
                      muteConfig: el,
                      className: a()(G.LM, {
                          [G.Sx]: null != $ || null != et,
                      }),
                  })
                : null,
        ],
    });
}

function F(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(d.Text, {
        className: G.BT,
        color: "text-default",
        variant: "text-xs/normal",
        children: (function (e) {
            switch (e) {
                case A.B5.SUBMITTED:
                    return L.intl.string(L.t["9KFC98"]);
                case A.B5.REJECTED:
                    return L.intl.string(L.t["TQY/Rd"]);
                case A.B5.APPROVED:
                    return L.intl.string(L.t.WXHcq5);
                default:
                    return L.intl.string(L.t.fjHFC8);
            }
        })(t),
    });
}

function H(e) {
    let { guild: t } = e,
        n = (0, b.A)(t),
        l = (0, y.a)(t),
        i =
            null != l
                ? (0, r.jsx)(F, {
                      guildJoinRequestStatus: l,
                  })
                : null,
        s = (0, r.jsx)(V, {
            guild: t,
        }),
        o = (0, c.bG)([j.A], () => j.A.isViewingRoles(t.id)),
        u = (0, O.Ig)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()(G.nM, G.Dl),
                children: [
                    n
                        ? (0, r.jsx)(m.A, {
                              guild: t,
                              className: G.WX,
                          })
                        : (0, r.jsx)(g.A, {
                              guild: t,
                              size: 20,
                              className: G.aL,
                          }),
                    (0, r.jsx)("span", {
                        className: a()(G.cN, G.NT),
                        children: t.name,
                    }),
                ],
            }),
            u
                ? (0, r.jsx)(d.Text, {
                      className: G.Ef,
                      color: "text-default",
                      variant: "text-sm/medium",
                      children: L.intl.string(L.t["2n0/Fk"]),
                  })
                : null,
            o
                ? (0, r.jsx)(d.Text, {
                      className: G.BT,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: L.intl.string(L.t["5LwN89"]),
                  })
                : null != i
                  ? i
                  : s,
        ],
    });
}

function B(e) {
    let { guild: t, disabled: n = !1, "aria-label": i = !1, children: a } = e,
        s = l.useMemo(
            () =>
                n
                    ? null
                    : (0, r.jsx)("div", {
                          className: G.A_,
                          children: (0, r.jsx)(H, {
                              guild: t,
                          }),
                      }),
            [n, t],
        );
    return (0, r.jsx)(u.m_, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === i ? void 0 : i,
        asContainer: !0,
        children: a,
    });
}
