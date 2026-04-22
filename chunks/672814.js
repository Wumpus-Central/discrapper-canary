n.d(t, { e: () => P, r: () => O });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(935154),
    d = n(652215),
    u = n(834730),
    c = n(778712),
    g = n(97808),
    h = n(821609),
    A = n(774300),
    p = n(566903),
    I = n(714114),
    x = n(864436),
    m = n(835072),
    S = n(313961),
    v = n(85448),
    f = n(571694),
    y = n(47167),
    E = n(10862),
    _ = n(410876),
    C = n(71393),
    T = n(535820),
    N = n(290863),
    b = n(994500),
    M = n(287809),
    j = n(486020),
    G = n(240248),
    R = n(427262),
    w = n(806931),
    V = n(985018),
    U = n(640852);
let O = 48;
function D(e, t) {
    if (null != e) return { suggestionData: T.A.getSelectedInviteMetadata(e), source: t };
}
let P = i.memo(
    function (e) {
        let t,
            {
                user: n,
                channel: a,
                inviteKey: T,
                location: O,
                row: P,
                source: L,
                ringingEnabled: k,
                inviteChannel: F,
                guildId: B,
            } = e,
            [H, K] = i.useState(!1),
            [Q, z] = i.useState(!1),
            q = (0, r.bG)([C.A], () => C.A.getGuild(a?.guild_id)),
            {
                status: W,
                isMobileOnline: Y,
                activities: J,
            } = (0, r.cf)(
                [N.A],
                () =>
                    null == n
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: N.A.getStatus(n.id, B),
                              isMobileOnline: N.A.isMobileOnline(n.id),
                              activities: N.A.getActivities(n.id, B),
                          },
                [n, B],
            ),
            { activityStatusText: X, activityStatusIcon: Z } = i.useMemo(() => {
                if (null == J) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = J.find((e) => e.type !== d.$pd.CUSTOM_STATUS && e.type !== d.$pd.HANG_STATUS);
                return { activityStatusText: (0, p.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, m.f)(e) };
            }, [J]),
            { voiceChannel: $ } = (0, I.A)({ userId: n?.id }),
            ee = (0, y.Ay)($),
            et = (0, r.bG)([S.A], () => (null != F && null != n ? S.A.getParticipant(F.id, n.id) : null)),
            en = k && null != et && et.type === w.lp.USER && et.ringing,
            el = (0, o.S3)(d.clD.ONLINE),
            ei = i.useCallback(() => {
                null != T &&
                    (null != a
                        ? (K(!0),
                          A.A.enqueue(
                              {
                                  type: A.F.GROUP_DM,
                                  channel: a,
                                  inviteKey: T,
                                  location: O,
                                  inviteAnalyticsMetadata: D(P, L),
                              },
                              (e) => {
                                  K(!1), z(e);
                              },
                          ))
                        : null != n &&
                          (K(!0),
                          A.A.enqueue(
                              { type: A.F.USER, user: n, inviteKey: T, location: O, inviteAnalyticsMetadata: D(P, L) },
                              (e) => {
                                  K(!1), z(e);
                              },
                          )));
            }, [T, a, n, O, P, L]),
            ea = R.Ay.getName(n),
            es = null != n ? b.A.getNickname(n.id) : null,
            er = null != a ? (0, y.m1)(a, M.default, b.A) : null,
            eo = null != n ? n.getAvatarURL(a?.guild_id, 32) : null,
            ed = null != a ? (0, f.Y)(a) : null,
            eu =
                null != q && null != a && null == ed
                    ? j.Ay.getGuildIconURL({ id: a.guild_id, icon: q.icon, size: 32 })
                    : null,
            ec = W !== d.clD.OFFLINE ? W : void 0,
            eg = eo ?? ed ?? eu,
            eh = ea ?? er ?? void 0,
            eA = null != q && null == q.icon ? (0, G.oN)(q.name) : null,
            ep = null != eg && null != eh;
        null != n && (t = es ?? ea);
        let eI = R.Ay.getUserTag(n, { decoration: "never" }),
            ex = (0, l.jsx)(h.$, {
                variant: "secondary",
                text: Q ? V.intl.string(V.t.dVT149) : V.intl.string(V.t.jYnGPG),
                size: "sm",
                loading: H,
                onClick: ei,
                disabled: Q,
            }),
            em = null != X.text,
            eS = null != $ && null != ee,
            ev = eS || em || null != n;
        return (0, l.jsxs)("div", {
            className: U.Og,
            children: [
                (0, l.jsxs)("div", {
                    className: U.mQ,
                    children: [
                        ep
                            ? en
                                ? (0, l.jsx)(v.A, { size: c._3.SIZE_32, ringing: en, src: eg, className: U.hO })
                                : (0, l.jsx)(g.eu, {
                                      src: eg,
                                      "aria-label": eh,
                                      size: c._3.SIZE_32,
                                      className: U.hO,
                                      status: null != n ? ec : void 0,
                                      isMobile: null != n ? Y : void 0,
                                  })
                            : (0, l.jsx)(u.E, {
                                  variant: "text-md/medium",
                                  className: U.q9,
                                  "aria-hidden": !0,
                                  children: eA,
                              }),
                        (0, l.jsxs)("div", {
                            className: s()(U.BT, { [U.DF]: en }),
                            children: [
                                (0, l.jsxs)(u.E, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != a ? (0, y.m1)(a, M.default, b.A, !0) : null],
                                }),
                                ev &&
                                    (0, l.jsxs)("div", {
                                        className: s()(U.eq, { [U.DF]: en }),
                                        children: [
                                            eS
                                                ? (0, l.jsx)(E.A, {
                                                      size: "custom",
                                                      color: el,
                                                      channel: $,
                                                      className: U.j8,
                                                  })
                                                : null != Z
                                                  ? (0, l.jsx)(x.A, { icon: Z, className: U.j8 })
                                                  : null,
                                            eS
                                                ? (0, l.jsx)(u.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: ee,
                                                  })
                                                : em
                                                  ? (0, l.jsx)(u.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: X.text,
                                                    })
                                                  : (0, l.jsx)(u.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: eI,
                                                    }),
                                            (0, l.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: en && ` • ${V.intl.string(V.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: U.t$,
                    children: [
                        k && null != n && null != F && (0, l.jsx)(_.A, { user: n, channel: F, location: "InviteRow" }),
                        ex,
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
