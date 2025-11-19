n.d(t, {
    K: () => X,
    Z: () => Q,
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
    h = n(666188),
    m = n(372769),
    g = n(523751),
    E = n(246364),
    b = n(746916),
    y = n(634755),
    O = n(160404),
    v = n(777861),
    I = n(565799),
    T = n(501655),
    S = n(517334),
    A = n(344185),
    C = n(752048),
    N = n(439944),
    R = n(199902),
    P = n(984933),
    D = n(699516),
    w = n(9156),
    L = n(594174),
    x = n(938475),
    M = n(981631),
    j = n(388032),
    k = n(132789),
    U = n(78480);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = F(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function V(e) {
    let t = e.id,
        n = (0, c.Wu)(
            [P.ZP, A.Z],
            () => [
                ...P.ZP.getChannels(t)
                    [P.Zb].filter((e) => {
                        let { channel: t } = e;
                        return t.type === M.d4z.GUILD_VOICE;
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t.id;
                    }),
                ...Object.values(A.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e)),
            ],
            [t],
        ),
        r = (0, S.ZP)(t),
        a = i.useMemo(() => r.map((e) => e.id), [r]),
        o = (0, c.e7)([x.ZP], () => x.ZP.getVoiceStates(t), [t]),
        s = (0, c.Wu)([D.Z], () => D.Z.getBlockedOrIgnoredIDs()),
        u = l().flatMap(n, (t) => {
            var n;
            if (t === e.afkChannelId) return [];
            let r = (null != (n = o[t]) ? n : []).map((e) => {
                let { user: t } = e;
                return t;
            });
            return (0, p.dq)(r, s);
        }),
        d = (0, c.Wu)([I.Z], () =>
            l().flatMap(a, (t) => {
                if (t === e.afkChannelId) return [];
                let n = I.Z.getMutableParticipants(t, T.pV.SPEAKER)
                    .filter((e) => e.type === T.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                return (0, p.dq)(n, s);
            }),
        ),
        _ = (0, c.e7)([I.Z], () => {
            let e = 0;
            for (let t of a) e += I.Z.getParticipantCount(t, T.pV.AUDIENCE);
            return e;
        }),
        h = (0, c.Wu)([R.Z], () => {
            let e = R.Z.getAllApplicationStreams()
                .filter((e) => e.guildId === t)
                .map((e) => e.ownerId);
            return (0, p._j)(e, s);
        }, [s, t]),
        m = (0, c.Wu)([f.ZP], () => {
            let e = f.ZP.getEmbeddedActivitiesForGuild(t).flatMap((e) => Array.from(e.userIds));
            return (0, p._j)(e, s);
        }, [t, s]),
        g = (0, c.Wu)([L.default], () => {
            let e = m.map((e) => L.default.getUser(e));
            return (0, p.dq)(e);
        }, [m]),
        E = (0, c.Wu)([L.default], () => h.map((e) => L.default.getUser(e)), [h]),
        b = u.filter((e) => !h.includes(e.id) && !m.includes(e.id)),
        y = (0, p.dq)(b),
        O = E.filter((e) => null != e && !m.includes(e.id)),
        v = (0, c.e7)([C.Z], () => C.Z.getUserAffinitiesMap(), []),
        w = i.useMemo(() => (0, N.C)(y, v, "GuildTooltip - nonBlockedUsers"), [y, v]),
        j = i.useMemo(() => (0, N.C)(d, v, "GuildTooltip - stageSpeakers"), [d, v]),
        k = i.useMemo(() => (0, N.C)(O, v, "GuildTooltip - streamUsers"), [O, v]);
    return {
        voiceUsersToShow: w,
        stageSpeakers: j,
        numStageListeners: _,
        streamUsersToShow: k,
        embeddedActivitiesUsers: i.useMemo(() => (0, N.C)(g, v, "GuildTooltip - embeddedActivitiesUsers"), [g, v]),
        hasActivity: d.length > 0 || b.length > 0 || O.length > 0 || g.length > 0,
    };
}
function H(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: k.row,
              children: [
                  (0, r.jsx)(e, {
                      className: k.activityIcon,
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
function Y(e, t, n) {
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: k.row,
              children: [
                  (0, r.jsx)(u.ewx, {
                      size: "lg",
                      color: "currentColor",
                      className: k.activityIcon,
                  }),
                  (0, r.jsx)(_.ZP, {
                      guildId: e,
                      users: t,
                      max: 3,
                  }),
                  (0, r.jsxs)("div", {
                      className: k.stageListenerPill,
                      children: [
                          (0, r.jsx)(u.VWR, {
                              size: "xs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(u.Text, {
                              className: k.stageListenerCount,
                              color: "text-default",
                              variant: "text-xs/normal",
                              children: n,
                          }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(u.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: j.intl.string(j.t.fpKdS1),
          })
        : (0, r.jsx)(v.Z, {
              muteConfig: t,
              className: n,
          });
}
function K(e) {
    let { guild: t } = e,
        n = t.id,
        { enabled: i } = d.c.useExperiment({ location: "GuildTooltip" }, { autoTrackExposure: !0 }),
        {
            voiceUsersToShow: a,
            stageSpeakers: s,
            numStageListeners: l,
            streamUsersToShow: f,
            embeddedActivitiesUsers: _,
        } = V(t),
        p = H(u.gj8, a, n),
        h = Y(n, s, l),
        m = H(u.hGI, f, n),
        g = H(i ? u.iWm : u.nG3, _, n),
        { isMuted: E, muteConfig: b } = (0, c.cj)(
            [w.ZP],
            () => ({
                isMuted: w.ZP.isMuted(n),
                muteConfig: w.ZP.getMuteConfig(n),
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
                ? (0, r.jsx)(W, {
                      muteConfig: b,
                      className: o()(k.muteText, { [k.muteTextWithActivity]: y }),
                  })
                : null,
        ],
    });
}
function z(e) {
    switch (e) {
        case E.wB.SUBMITTED:
            return j.intl.string(j.t["9KFC98"]);
        case E.wB.REJECTED:
            return j.intl.string(j.t["TQY/Rd"]);
        case E.wB.APPROVED:
            return j.intl.string(j.t.WXHcq5);
        default:
            return j.intl.string(j.t.fjHFC8);
    }
}
function q(e) {
    let { guildJoinRequestStatus: t } = e;
    return (0, r.jsx)(u.Text, {
        className: k.viewAsRolesWarning,
        color: "text-default",
        variant: "text-xs/normal",
        children: z(t),
    });
}
function X(e) {
    let { guild: t, includeActivity: n = !0 } = e,
        i = (0, h.Z)(t),
        a = (0, b.E)(t),
        s = null != a ? (0, r.jsx)(q, { guildJoinRequestStatus: a }) : null,
        l = n ? (0, r.jsx)(K, { guild: t }) : null,
        d = (0, c.e7)([O.Z], () => O.Z.isViewingRoles(t.id)),
        f = null != s ? s : l,
        _ = (0, y.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(k.row, k.rowGuildName),
                children: [
                    i
                        ? (0, r.jsx)(g.Z, {
                              guild: t,
                              className: k.rowIconV2,
                          })
                        : (0, r.jsx)(m.Z, {
                              guild: t,
                              size: 20,
                              className: k.rowIcon,
                          }),
                    (0, r.jsx)("span", {
                        className: o()(k.guildNameText, { [k.guildNameTextLimitedSize]: null != l }),
                        children: t.name,
                    }),
                ],
            }),
            _
                ? (0, r.jsx)(u.Text, {
                      className: k.invitesDisabledTooltip,
                      color: "header-secondary",
                      variant: "text-sm/medium",
                      children: j.intl.string(j.t["2n0/Fk"]),
                  })
                : null,
            d
                ? (0, r.jsx)(u.Text, {
                      className: k.viewAsRolesWarning,
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: j.intl.string(j.t["5LwN89"]),
                  })
                : f,
        ],
    });
}
function Q(e) {
    let { guild: t, disabled: n = !1, "aria-label": a = !1, children: o, includeActivity: s = !0 } = e;
    return (0, r.jsx)(u.aML, {
        "data-migration-pending": !0,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        text: n
            ? null
            : (0, r.jsx)(X, {
                  guild: t,
                  includeActivity: s,
              }),
        "aria-label": a,
        tooltipClassName: U.listItemTooltip,
        tooltipContentClassName: U.listItemTooltipContent,
        children: (e) => {
            var { onFocus: t, onBlur: n } = e,
                a = Z(e, ["onFocus", "onBlur"]);
            return (0, r.jsx)("div", {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(i.Children.only(o), B({}, a)),
            });
        },
    });
}
