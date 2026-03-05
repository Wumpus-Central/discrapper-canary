n.d(t, { e: () => w, r: () => V });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(774300),
    u = n(566903),
    c = n(714114),
    g = n(864436),
    h = n(835072),
    A = n(313961),
    p = n(85448),
    I = n(571694),
    x = n(47167),
    m = n(10862),
    v = n(410876),
    S = n(71393),
    y = n(535820),
    E = n(290863),
    f = n(994500),
    _ = n(287809),
    T = n(486020),
    C = n(240248),
    N = n(427262),
    b = n(222075),
    M = n(652215),
    j = n(806931),
    R = n(985018),
    G = n(67501);
let V = 48;
function U(e, t) {
    if (null != e) return { suggestionData: y.A.getSelectedInviteMetadata(e), source: t };
}
let w = i.memo(
    function (e) {
        let t,
            {
                user: n,
                channel: s,
                inviteKey: y,
                location: V,
                row: w,
                source: O,
                ringingEnabled: D,
                inviteChannel: P,
                guildId: L,
            } = e,
            [k, F] = i.useState(!1),
            [B, H] = i.useState(!1),
            K = (0, r.bG)([S.A], () => S.A.getGuild(s?.guild_id)),
            { showActivityStatus: z } = b.o.useExperiment(
                { guildId: L, location: "InviteRow" },
                { autoTrackExposure: !1 },
            ),
            {
                status: Q,
                isMobileOnline: q,
                activities: W,
            } = (0, r.cf)(
                [E.A],
                () =>
                    null == n
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: E.A.getStatus(n.id, L),
                              isMobileOnline: E.A.isMobileOnline(n.id),
                              activities: E.A.getActivities(n.id, L),
                          },
                [n, L],
            ),
            { activityStatusText: Y, activityStatusIcon: J } = i.useMemo(() => {
                if (!z || null == W) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = W.find((e) => e.type !== M.$pd.CUSTOM_STATUS && e.type !== M.$pd.HANG_STATUS);
                return { activityStatusText: (0, u.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, h.f)(e) };
            }, [z, W]),
            { voiceChannel: Z } = (0, c.A)({ userId: n?.id }),
            X = (0, x.Ay)(Z),
            $ = (0, r.bG)([A.A], () => (null != P && null != n ? A.A.getParticipant(P.id, n.id) : null)),
            ee = D && null != $ && $.type === j.lp.USER && $.ringing,
            et = (0, o.S31)(o.clD.ONLINE),
            en = i.useCallback(() => {
                null != y &&
                    (null != s
                        ? (F(!0),
                          d.A.enqueue(
                              {
                                  type: d.F.GROUP_DM,
                                  channel: s,
                                  inviteKey: y,
                                  location: V,
                                  inviteAnalyticsMetadata: U(w, O),
                              },
                              (e) => {
                                  F(!1), H(e);
                              },
                          ))
                        : null != n &&
                          (F(!0),
                          d.A.enqueue(
                              { type: d.F.USER, user: n, inviteKey: y, location: V, inviteAnalyticsMetadata: U(w, O) },
                              (e) => {
                                  F(!1), H(e);
                              },
                          )));
            }, [y, s, n, V, w, O]),
            el = N.Ay.getName(n),
            ei = null != n ? f.A.getNickname(n.id) : null,
            es = null != s ? (0, x.m1)(s, _.default, f.A) : null,
            ea = null != n ? n.getAvatarURL(s?.guild_id, 32) : null,
            er = null != s ? (0, I.Y)(s) : null,
            eo =
                null != K && null != s && null == er
                    ? T.Ay.getGuildIconURL({ id: s.guild_id, icon: K.icon, size: 32 })
                    : null,
            ed = Q !== o.clD.OFFLINE ? Q : void 0,
            eu = ea ?? er ?? eo,
            ec = el ?? es ?? void 0,
            eg = null != K && null == K.icon ? (0, C.oN)(K.name) : null,
            eh = null != eu && null != ec;
        null != n && (t = ei ?? el);
        let eA = N.Ay.getUserTag(n, { decoration: "never" }),
            ep = (0, l.jsx)(o.Button, {
                variant: "secondary",
                text: B ? R.intl.string(R.t.dVT149) : R.intl.string(R.t.jYnGPG),
                size: "sm",
                loading: k,
                onClick: en,
                disabled: B,
            }),
            eI = z && null != Y.text,
            ex = z && null != Z && null != X,
            em = ex || eI || null != n;
        return (0, l.jsxs)("div", {
            className: G.Og,
            children: [
                (0, l.jsxs)("div", {
                    className: G.mQ,
                    children: [
                        eh
                            ? ee
                                ? (0, l.jsx)(p.A, { size: o._3J.SIZE_32, ringing: ee, src: eu, className: G.hO })
                                : (0, l.jsx)(o.euF, {
                                      src: eu,
                                      "aria-label": ec,
                                      size: o._3J.SIZE_32,
                                      className: G.hO,
                                      status: z && null != n ? ed : void 0,
                                      isMobile: z && null != n ? q : void 0,
                                  })
                            : (0, l.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: G.q9,
                                  "aria-hidden": !0,
                                  children: eg,
                              }),
                        (0, l.jsxs)("div", {
                            className: a()(G.BT, { [G.DF]: ee }),
                            children: [
                                (0, l.jsxs)(o.Text, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != s ? (0, x.m1)(s, _.default, f.A, !0) : null],
                                }),
                                em &&
                                    (0, l.jsxs)("div", {
                                        className: a()(G.eq, { [G.DF]: ee }),
                                        children: [
                                            ex
                                                ? (0, l.jsx)(m.A, {
                                                      size: "custom",
                                                      color: et,
                                                      channel: Z,
                                                      className: G.j8,
                                                  })
                                                : null != J
                                                  ? (0, l.jsx)(g.A, { icon: J, className: G.j8 })
                                                  : null,
                                            ex
                                                ? (0, l.jsx)(o.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: X,
                                                  })
                                                : eI
                                                  ? (0, l.jsx)(o.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: Y.text,
                                                    })
                                                  : (0, l.jsx)(o.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: eA,
                                                    }),
                                            (0, l.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: ee && ` • ${R.intl.string(R.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: G.t$,
                    children: [
                        D && null != n && null != P && (0, l.jsx)(v.A, { user: n, channel: P, location: "InviteRow" }),
                        ep,
                    ],
                }),
            ],
        });
    },
    (e, t) =>
        e.user === t.user &&
        e.channel === t.channel &&
        e.guildId === t.guildId &&
        e.inviteChannel?.id === t.inviteChannel?.id &&
        e.inviteKey === t.inviteKey &&
        e.ringingEnabled === t.ringingEnabled,
);
