t.d(n, { default: () => R }), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    d = t(100527),
    s = t(906732),
    o = t(313201),
    c = t(540059),
    u = t(724912),
    _ = t(41776),
    m = t(592125),
    g = t(626135),
    p = t(981888),
    v = t(897285),
    h = t(924301),
    I = t(951539),
    f = t(592126),
    E = t(315416),
    x = t(711373),
    C = t(274311),
    N = t(854698),
    T = t(405613),
    L = t(285784),
    b = t(95291),
    S = t(187443),
    j = t(464766),
    D = t(724278),
    y = t(462747),
    Z = t(462179),
    U = t(765305),
    G = t(981631),
    z = t(883127);
function k(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: r, isHub: d, isMember: s, recurrenceId: o } = e,
        c = (0, h.xt)(n),
        u = (0, a.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]),
        m = (0, I.ZP)(n),
        g = (0, a.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        p = (0, C.T)(null == l ? void 0 : l.id, n.id),
        v = (0, Z.Z)({
            guild: t,
            channel: l,
            guildScheduledEvent: n,
            isActive: c,
            recurrenceId: o,
            onActionTaken: r
        }),
        { entity_type: f } = n;
    return d
        ? (0, i.jsx)(S.Z, {
              isActive: c,
              isUserLurking: g,
              rsvped: u,
              isMember: s,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: p,
              canInvite: m,
              ...v
          })
        : (0, i.jsx)(L.ZP, {
              isActive: c,
              isUserLurking: g,
              rsvped: u,
              isChannelPublic: p,
              canInvite: m,
              entityType: f,
              ...v
          });
}
let R = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: _, initialRecurrenceId: I, onClose: C } = e,
        L = (0, c.Q3)('GuildScheduledEventModal'),
        { analyticsLocations: S } = (0, s.ZP)(d.Z.GUILD_EVENT_MODAL),
        [Z, R] = l.useState(I),
        B = (0, a.e7)([h.ZP], () => h.ZP.getGuildScheduledEvent(n), [n]),
        P = null == B ? void 0 : B.id,
        A = null == B ? void 0 : B.guild_id,
        { guild: O, isMember: w } = (0, f.Z)(A, P),
        M = (0, u.Z)(t),
        H = null == B ? void 0 : B.channel_id,
        X = (0, a.e7)([m.Z], () => m.Z.getChannel(H), [H]),
        V = (0, o.Dt)(),
        [F, Y] = l.useState(U.fL.EVENT_INFO),
        W = (0, x.Z)(P, Z),
        q = (0, E.Z)(A, P, Z),
        [K, { loading: J, error: Q }] = (0, p.Z)(() => v.Z.getGuildEventUsers(null == B ? void 0 : B.id, Z, A));
    l.useEffect(() => {
        null == B
            ? C()
            : g.default.track(G.rMx.OPEN_MODAL, {
                  type: U.zw,
                  guild_id: B.guild_id
              });
    }, [B, C]);
    let $ = l.useRef(null),
        [ee, en] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            var e, n;
            let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
            en((null !== (n = null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [$, null == B ? void 0 : B.recurrence_rule]),
        null == B || null == O || (!w && !M))
    )
        return null;
    let et = (e) => {
            e !== F && (e === U.fL.RSVP_LIST && K(), Y(e));
        },
        ei = null != Z ? Z : (0, N.DK)(B);
    return (0, i.jsx)(s.Gt, {
        value: S,
        children: (0, i.jsxs)(r.Y0X, {
            size: r.CgR.MEDIUM,
            transitionState: _,
            'aria-labelledby': V,
            className: z.root,
            children: [
                (null == B ? void 0 : B.image) != null &&
                    (0, i.jsx)(b.Z, {
                        source: (0, T.Z)(B),
                        className: z.banner
                    }),
                (0, i.jsx)(j.Z, {
                    onClose: C,
                    selectedTab: F,
                    onTabSelected: et,
                    userCount: q,
                    hasBanner: (null == B ? void 0 : B.image) != null,
                    isHub: M
                }),
                (0, i.jsx)('div', {
                    className: z.container,
                    children: (0, i.jsx)(r.hzk, {
                        className: z.contentContainer,
                        style: { height: ee },
                        children: (0, i.jsxs)(r.MyZ, {
                            activeSlide: F,
                            width: L ? 552 : 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(r.Mi4, {
                                    id: U.fL.EVENT_INFO,
                                    children: (0, i.jsx)(D.Z, {
                                        guildEvent: B,
                                        guild: O,
                                        channel: X,
                                        headerId: V,
                                        onClose: C,
                                        onClickInterestedCount: () => et(U.fL.RSVP_LIST),
                                        isHub: M,
                                        containerRef: $,
                                        recurrenceId: ei,
                                        setRecurrenceId: R
                                    })
                                }),
                                (0, i.jsx)(r.Mi4, {
                                    id: U.fL.RSVP_LIST,
                                    children: (0, i.jsx)(y.Z, {
                                        guildEvent: B,
                                        recurrenceId: ei,
                                        eventUsers: W,
                                        loading: J,
                                        containerHeight: ee,
                                        error: Q
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(r.mzw, {
                    className: z.footer,
                    children: (0, i.jsx)(k, {
                        guildEvent: B,
                        isHub: M,
                        isMember: w,
                        guild: O,
                        channel: X,
                        onActionTaken: C,
                        recurrenceId: ei
                    })
                })
            ]
        })
    });
};
