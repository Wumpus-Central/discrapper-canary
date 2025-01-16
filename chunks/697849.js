t.r(n), t(47120);
var i = t(200651),
    a = t(192379),
    l = t(442837),
    r = t(481060),
    d = t(100527),
    o = t(906732),
    c = t(313201),
    s = t(540059),
    u = t(724912),
    _ = t(41776),
    g = t(592125),
    p = t(626135),
    m = t(981888),
    I = t(897285),
    v = t(924301),
    h = t(951539),
    f = t(592126),
    E = t(315416),
    C = t(711373),
    T = t(274311),
    b = t(854698),
    L = t(405613),
    x = t(285784),
    S = t(95291),
    D = t(187443),
    U = t(464766),
    y = t(724278),
    N = t(462747),
    G = t(462179),
    Z = t(765305),
    j = t(981631),
    O = t(706773);
function A(e) {
    let { guildEvent: n, guild: t, channel: a, onActionTaken: r, isHub: d, isMember: o, recurrenceId: c } = e,
        s = (0, v.xt)(n),
        u = (0, l.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(n.id, c), [c, n]),
        g = (0, h.ZP)(n),
        p = (0, l.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        m = (0, T.T)(null == a ? void 0 : a.id, n.id),
        I = (0, G.Z)({
            guild: t,
            channel: a,
            guildScheduledEvent: n,
            isActive: s,
            recurrenceId: c,
            onActionTaken: r
        }),
        { entity_type: f } = n;
    return d
        ? (0, i.jsx)(D.Z, {
              isActive: s,
              isUserLurking: p,
              rsvped: u,
              isMember: o,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: m,
              canInvite: g,
              ...I
          })
        : (0, i.jsx)(x.ZP, {
              isActive: s,
              isUserLurking: p,
              rsvped: u,
              isChannelPublic: m,
              canInvite: g,
              entityType: f,
              ...I
          });
}
n.default = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: _, initialRecurrenceId: h, onClose: T } = e,
        x = (0, s.Q3)('GuildScheduledEventModal'),
        { analyticsLocations: D } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
        [G, z] = a.useState(h),
        B = (0, l.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(n), [n]),
        R = null == B ? void 0 : B.id,
        P = null == B ? void 0 : B.guild_id,
        { guild: k, isMember: H } = (0, f.Z)(P, R),
        M = (0, u.Z)(t),
        w = null == B ? void 0 : B.channel_id,
        V = (0, l.e7)([g.Z], () => g.Z.getChannel(w), [w]),
        X = (0, c.Dt)(),
        [Y, F] = a.useState(Z.fL.EVENT_INFO),
        W = (0, C.Z)(R, G),
        q = (0, E.Z)(P, R, G),
        [K, { loading: J, error: Q }] = (0, m.Z)(() => I.Z.getGuildEventUsers(null == B ? void 0 : B.id, G, P));
    a.useEffect(() => {
        null == B
            ? T()
            : p.default.track(j.rMx.OPEN_MODAL, {
                  type: Z.zw,
                  guild_id: B.guild_id
              });
    }, [B, T]);
    let $ = a.useRef(null),
        [ee, en] = a.useState(0);
    if (
        (a.useLayoutEffect(() => {
            var e, n;
            let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
            en((null !== (n = null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [$, null == B ? void 0 : B.recurrence_rule]),
        null == B || null == k || (!H && !M))
    )
        return null;
    let et = (e) => {
            if (e !== Y) e === Z.fL.RSVP_LIST && K(), F(e);
        },
        ei = null != G ? G : (0, b.DK)(B);
    return (0, i.jsx)(o.Gt, {
        value: D,
        children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: _,
            'aria-labelledby': X,
            className: O.root,
            children: [
                (null == B ? void 0 : B.image) != null &&
                    (0, i.jsx)(S.Z, {
                        source: (0, L.Z)(B),
                        className: O.banner
                    }),
                (0, i.jsx)(U.Z, {
                    onClose: T,
                    selectedTab: Y,
                    onTabSelected: et,
                    userCount: q,
                    hasBanner: (null == B ? void 0 : B.image) != null,
                    isHub: M
                }),
                (0, i.jsx)('div', {
                    className: O.container,
                    children: (0, i.jsx)(r.ModalContent, {
                        className: O.contentContainer,
                        style: { height: ee },
                        children: (0, i.jsxs)(r.Slides, {
                            activeSlide: Y,
                            width: x ? 552 : 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(r.Slide, {
                                    id: Z.fL.EVENT_INFO,
                                    children: (0, i.jsx)(y.Z, {
                                        guildEvent: B,
                                        guild: k,
                                        channel: V,
                                        headerId: X,
                                        onClose: T,
                                        onClickInterestedCount: () => et(Z.fL.RSVP_LIST),
                                        isHub: M,
                                        containerRef: $,
                                        recurrenceId: ei,
                                        setRecurrenceId: z
                                    })
                                }),
                                (0, i.jsx)(r.Slide, {
                                    id: Z.fL.RSVP_LIST,
                                    children: (0, i.jsx)(N.Z, {
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
                (0, i.jsx)(r.ModalFooter, {
                    className: O.footer,
                    children: (0, i.jsx)(A, {
                        guildEvent: B,
                        isHub: M,
                        isMember: H,
                        guild: k,
                        channel: V,
                        onActionTaken: T,
                        recurrenceId: ei
                    })
                })
            ]
        })
    });
};
