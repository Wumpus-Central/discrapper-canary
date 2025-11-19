n.d(t, {
    K: () => W,
    Z: () => K,
}),
    n(361932),
    n(187205),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(456100),
    f = n(317381),
    _ = n(884338),
    p = n(470883),
    h = n(104505),
    m = n(666188),
    g = n(372769),
    E = n(523751),
    b = n(246364),
    y = n(746916),
    O = n(634755),
    v = n(160404),
    I = n(777861),
    T = n(565799),
    S = n(501655),
    A = n(517334),
    C = n(344185),
    N = n(752048),
    R = n(439944),
    P = n(199902),
    D = n(984933),
    w = n(699516),
    L = n(9156),
    x = n(594174),
    M = n(938475),
    j = n(981631),
    k = n(388032),
    U = n(102647);
function G(e) {
    let t = e.id,
        n = (0, c.Wu)(
            [D.ZP, C.Z],
            () => [
                ...D.ZP.getChannels(t)
                    [D.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === j.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        ),
        r = (0, A.ZP)(t),
        a = i.useMemo(() => r.map((e) => e.id), [r]),
        o = (0, c.e7)([M.ZP], () => M.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([w.Z], () => w.Z.getBlockedOrIgnoredIDs()),
        u = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null != (n = o[t]) ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, p.dq)(r, s);
        }),
        d = (0, c.Wu)([T.Z], () =>
            l().flatMap(a, (t) => {
                if (t === e.afkChannelId) return [];
                let n = T.Z.getMutableParticipants(t, S.pV.SPEAKER)
                    .filter((e) => e.type === S.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, p.dq)(n, s);
            }),
        ),
        _ = (0, c.e7)([T.Z], () => {
            let e = 0;
            for (let t of a) e += T.Z.getParticipantCount(t, S.pV.AUDIENCE);
            return e;
        }),
        h = (0, c.Wu)([P.Z], () => {
            let e = P.Z.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, p._j)(e, s);
        }, [s, t]),
        m = (0, c.Wu)([f.ZP], () => {
            let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, p._j)(e, s);
        }, [t, s]),
        g = (0, c.Wu)([x.default], () => {
            let e = m.map((e) => x.default.getUser(e));
            return (0, p.dq)(e);
        }, [m]),
        E = (0, c.Wu)([x.default], () => h.map((e) => x.default.getUser(e)), [h]),
        b = u.filter((e) => !h.includes(e.id) && !m.includes(e.id)),
        y = (0, p.dq)(b),
        O = E.filter((e) => null != e && !m.includes(e.id)),
        v = (0, c.e7)([N.Z], () => N.Z.getUserAffinitiesMap(), []),
        I = i.useMemo(() => (0, R.C)(y, v, "GuildTooltip - nonBlockedUsers"), [y, v]),
        L = i.useMemo(() => (0, R.C)(d, v, "GuildTooltip - stageSpeakers"), [d, v]),
        k = i.useMemo(() => (0, R.C)(O, v, "GuildTooltip - streamUsers"), [O, v]);
    return {
        voiceUsersToShow: I,
        stageSpeakers: L,
        numStageListeners: _,
        streamUsersToShow: k,
        embeddedActivitiesUsers: i.useMemo(() => (0, R.C)(g, v, "GuildTooltip - embeddedActivitiesUsers"), [g, v]),
        hasActivity: d.length > 0 || b.length > 0 || O.length > 0 || g.length > 0,
    };
}
function B(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: U.row,
              children: [
                  (0, r.jsx)(e, {
                      className: U.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(_.ZP, {
                      guildId: n,
                      users: t,
                      max: 6,
                  }),
              ],
          });
}
function Z(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: U.row,
              children: [
                  (0, r.jsx)(u.ewx, {
                      size: "lg",
                      color: "currentColor",
                      className: U.activityIcon,
                  }),
                  (0, r.jsx)(_.ZP, {
                      guildId: e,
                      users: t,
                      max: 3,
                  }),
                  (0, r.jsxs)("div", {
                      className: U.stageListenerPill,
                      children: [
                          (0, r.jsx)(u.VWR, {
                              size: "xs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(u.Text, {
                              className: U.stageListenerCount,
                              color: "text-default",
                              variant: "text-xs/normal",
                              children: n,
                          }),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: k.intl.string(k.t.fpKdS1),
          })
        : (0, r.jsx)(I.Z, {
              muteConfig: t,
              className: n,
          });
}
function V(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: i } = d.c.useExperiment({ location: "GuildTooltip" }, { autoTrackExposure: !0 }),
        {
            voiceUsersToShow: a,
            stageSpeakers: s,
            numStageListeners: l,
            streamUsersToShow: f,
            embeddedActivitiesUsers: _,
        } = G(t),
        p = B(u.gj8, a, n),
        h = Z(n, s, l),
        m = B(u.hGI, f, n),
        g = B(i ? u.iWm : u.nG3, _, n),
        { isMuted: E, muteConfig: b } = (0, c.cj)(
            [L.ZP],
            () => ({
                isMuted: L.ZP.isMuted(n),
                muteConfig: L.ZP.getMuteConfig(n),
            }),
            [n],
        ),
        y = null != p || null != m;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h,
            p,
            m,
            g,
            E
                ? (0, r.jsx)(F, {
                      muteConfig: b,
                      className: o()(U.muteText, { [U.muteTextWithActivity]: y }),
                  })
                : null,
        ],
    });
}
function H(e) {
    switch (e) {
        case b.wB.SUBMITTED:
            return k.intl.string(k.t["9KFC98"]);
        case b.wB.REJECTED:
            return k.intl.string(k.t["TQY/Rd"]);
        case b.wB.APPROVED:
            return k.intl.string(k.t.WXHcq5);
        default:
            return k.intl.string(k.t.fjHFC8);
    }
}
function Y(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: U.viewAsRolesWarning,
        color: "text-default",
        variant: "text-xs/normal",
        children: H(t),
    });
}
function W(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, m.Z)(t),
        a = (0, y.E)(t),
        s = null != a ? (0, r.jsx)(Y, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(V, { guild: t }) : null,
        d = (0, c.e7)([v.Z], () => v.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        _ = (0, O.Ij)(t);
    return (0, r.jsxs)("div", {
        className: U.dialogWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: o()(U.row, U.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(E.Z, {
                              guild: t,
                              className: U.rowIconV2,
                          })
                        : (0, r.jsx)(g.Z, {
                              guild: t,
                              size: 20,
                              className: U.rowIcon,
                          }),
                    (0, r.jsx)("span", {
                        className: o()(U.guildNameText, { [U.guildNameTextLimitedSize]: null != l }),
                        children: t.name,
                    }),
                ],
            }),
            _
                ? (0, r.jsx)(u.Text, {
                      className: U.invitesDisabledTooltip,
                      color: "header-secondary",
                      variant: "text-sm/medium",
                      children: k.intl.string(k.t["2n0/Fk"]),
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: U.viewAsRolesWarning,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: k.intl.string(k.t["5LwN89"]),
                  })
                : f,
        ],
    });
}
function K(e) {
    let { guild: t, disabled: n = !1, "aria-label": a = !1, children: o, includeActivity: s = !0 } = e,
        [l, c] = i.useState(!1),
        d = i.useRef(null),
        { isHoveringOrFocusing: f } = (0, h.Z)(d),
        _ = i.useCallback(() => {
            c(!1);
        }, []);
    return (i.useEffect(() => {
        c(f);
    }, [f]),
    n)
        ? o
        : (0, r.jsx)(u.yRy, {
              targetElementRef: d,
              position: "right",
              spacing: 12,
              shouldShow: l,
              onRequestClose: _,
              renderPopout: () =>
                  (0, r.jsx)(W, {
                      guild: t,
                      includeActivity: s,
                  }),
              "aria-label": a,
              disablePointerEvents: !0,
              clickTrap: !1,
              children: () =>
                  (0, r.jsx)(u.P3F, {
                      innerRef: d,
                      onClick: _,
                      children: i.cloneElement(i.Children.only(o)),
                  }),
          });
}
