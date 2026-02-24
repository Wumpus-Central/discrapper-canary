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
    m = n(47167),
    x = n(10862),
    v = n(410876),
    S = n(71393),
    y = n(535820),
    E = n(290863),
    f = n(994500),
    T = n(287809),
    C = n(486020),
    _ = n(240248),
    b = n(427262),
    N = n(222075),
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
                shouldRenameButtonCTA: D,
                ringingEnabled: P,
                inviteChannel: L,
                guildId: k,
            } = e,
            [B, F] = i.useState(!1),
            [H, K] = i.useState(!1),
            z = (0, r.bG)([S.A], () => S.A.getGuild(s?.guild_id)),
            { showActivityStatus: Q } = N.o.useExperiment(
                { guildId: k, location: "InviteRow" },
                { autoTrackExposure: !1 },
            ),
            {
                status: W,
                isMobileOnline: q,
                activities: Y,
            } = (0, r.cf)(
                [E.A],
                () =>
                    null == n
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: E.A.getStatus(n.id, k),
                              isMobileOnline: E.A.isMobileOnline(n.id),
                              activities: E.A.getActivities(n.id, k),
                          },
                [n, k],
            ),
            { activityStatusText: J, activityStatusIcon: Z } = i.useMemo(() => {
                if (!Q || null == Y) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = Y.find((e) => e.type !== M.$pd.CUSTOM_STATUS && e.type !== M.$pd.HANG_STATUS);
                return { activityStatusText: (0, u.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, h.f)(e) };
            }, [Q, Y]),
            { voiceChannel: X } = (0, c.A)({ userId: n?.id }),
            $ = (0, m.Ay)(X),
            ee = (0, r.bG)([A.A], () => (null != L && null != n ? A.A.getParticipant(L.id, n.id) : null)),
            et = P && null != ee && ee.type === j.lp.USER && ee.ringing,
            en = (0, o.S31)(o.clD.ONLINE),
            el = i.useCallback(() => {
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
                                  F(!1), K(e);
                              },
                          ))
                        : null != n &&
                          (F(!0),
                          d.A.enqueue(
                              { type: d.F.USER, user: n, inviteKey: y, location: V, inviteAnalyticsMetadata: U(w, O) },
                              (e) => {
                                  F(!1), K(e);
                              },
                          )));
            }, [y, s, n, V, w, O]),
            ei = b.Ay.getName(n),
            es = null != n ? f.A.getNickname(n.id) : null,
            ea = null != s ? (0, m.m1)(s, T.default, f.A) : null,
            er = null != n ? n.getAvatarURL(s?.guild_id, 32) : null,
            eo = null != s ? (0, I.Y)(s) : null,
            ed =
                null != z && null != s && null == eo
                    ? C.Ay.getGuildIconURL({ id: s.guild_id, icon: z.icon, size: 32 })
                    : null,
            eu = er ?? eo ?? ed,
            ec = ei ?? ea ?? void 0,
            eg = null != z && null == z.icon ? (0, _.oN)(z.name) : null,
            eh = null != eu && null != ec;
        null != n && (t = es ?? ei);
        let eA = b.Ay.getUserTag(n, { decoration: "never" }),
            ep = (0, l.jsx)(o.Button, {
                variant: "secondary",
                text: H ? R.intl.string(R.t.dVT149) : D ? R.intl.string(R.t.AWLVgR) : R.intl.string(R.t.jYnGPG),
                size: "sm",
                loading: B,
                onClick: el,
                disabled: H,
            }),
            eI = Q && null != J.text,
            em = Q && null != X && null != $,
            ex = em || eI || null != n;
        return (0, l.jsxs)("div", {
            className: G.Og,
            children: [
                (0, l.jsxs)("div", {
                    className: G.mQ,
                    children: [
                        eh
                            ? et
                                ? (0, l.jsx)(p.A, { size: o._3J.SIZE_32, ringing: et, src: eu, className: G.hO })
                                : (0, l.jsx)(o.euF, {
                                      src: eu,
                                      "aria-label": ec,
                                      size: o._3J.SIZE_32,
                                      className: G.hO,
                                      status: Q && null != n ? W : void 0,
                                      isMobile: Q && null != n ? q : void 0,
                                  })
                            : (0, l.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: G.q9,
                                  "aria-hidden": !0,
                                  children: eg,
                              }),
                        (0, l.jsxs)("div", {
                            className: a()(G.BT, { [G.DF]: et }),
                            children: [
                                (0, l.jsxs)(o.Text, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != s ? (0, m.m1)(s, T.default, f.A, !0) : null],
                                }),
                                ex &&
                                    (0, l.jsxs)("div", {
                                        className: a()(G.eq, { [G.DF]: et }),
                                        children: [
                                            em
                                                ? (0, l.jsx)(x.A, {
                                                      size: "custom",
                                                      color: en,
                                                      channel: X,
                                                      className: G.j8,
                                                  })
                                                : null != Z
                                                  ? (0, l.jsx)(g.A, { icon: Z, className: G.j8 })
                                                  : null,
                                            em
                                                ? (0, l.jsx)(o.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: $,
                                                  })
                                                : eI
                                                  ? (0, l.jsx)(o.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: J.text,
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
                                                children: et && ` • ${R.intl.string(R.t.sURrjb)}`,
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
                        P && null != n && null != L && (0, l.jsx)(v.A, { user: n, channel: L, location: "InviteRow" }),
                        ep,
                    ],
                }),
            ],
        });
    },
    (e, t) =>
        e.user === t.user &&
        e.channel === t.channel &&
        e.shouldRenameButtonCTA === t.shouldRenameButtonCTA &&
        e.guildId === t.guildId &&
        e.inviteChannel?.id === t.inviteChannel?.id &&
        e.inviteKey === t.inviteKey &&
        e.ringingEnabled === t.ringingEnabled,
);
