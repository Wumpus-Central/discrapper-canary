t.d(n, { default: () => z }), t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    a = t(481060),
    d = t(100527),
    o = t(906732),
    s = t(313201),
    c = t(540059),
    u = t(724912),
    _ = t(41776),
    g = t(592125),
    p = t(626135),
    m = t(981888),
    v = t(897285),
    I = t(924301),
    f = t(951539),
    h = t(592126),
    N = t(315416),
    E = t(711373),
    C = t(274311),
    b = t(854698),
    x = t(405613),
    T = t(285784),
    y = t(95291),
    L = t(187443),
    j = t(464766),
    S = t(724278),
    D = t(462747),
    O = t(462179),
    U = t(765305),
    Z = t(981631),
    G = t(855749);
function P(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function W(e) {
    let { guildEvent: n, guild: t, channel: r, onActionTaken: a, isHub: d, isMember: o, recurrenceId: s } = e,
        c = (0, I.xt)(n),
        u = (0, l.e7)([I.ZP], () => I.ZP.isInterestedInEventRecurrence(n.id, s), [s, n]),
        g = (0, f.ZP)(n),
        p = (0, l.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        m = (0, C.T)(null == r ? void 0 : r.id, n.id),
        v = (0, O.Z)({
            guild: t,
            channel: r,
            guildScheduledEvent: n,
            isActive: c,
            recurrenceId: s,
            onActionTaken: a
        }),
        { entity_type: h } = n;
    return d
        ? (0, i.jsx)(
              L.Z,
              P(
                  {
                      isActive: c,
                      isUserLurking: p,
                      rsvped: u,
                      isMember: o,
                      isDetailsView: !0,
                      guildName: null == t ? void 0 : t.name,
                      isChannelPublic: m,
                      canInvite: g
                  },
                  v
              )
          )
        : (0, i.jsx)(
              T.ZP,
              P(
                  {
                      isActive: c,
                      isUserLurking: p,
                      rsvped: u,
                      isChannelPublic: m,
                      canInvite: g,
                      entityType: h
                  },
                  v
              )
          );
}
let z = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: _, initialRecurrenceId: f, onClose: C } = e,
        T = (0, c.Q3)('GuildScheduledEventModal'),
        { analyticsLocations: L } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
        [O, P] = r.useState(f),
        z = (0, l.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(n), [n]),
        k = null == z ? void 0 : z.id,
        A = null == z ? void 0 : z.guild_id,
        { guild: R, isMember: B } = (0, h.Z)(A, k),
        w = (0, u.Z)(t),
        H = null == z ? void 0 : z.channel_id,
        M = (0, l.e7)([g.Z], () => g.Z.getChannel(H), [H]),
        X = (0, s.Dt)(),
        [V, F] = r.useState(U.fL.EVENT_INFO),
        Y = (0, E.Z)(k, O),
        q = (0, N.Z)(A, k, O),
        [K, { loading: J, error: Q }] = (0, m.Z)(() => v.Z.getGuildEventUsers(null == z ? void 0 : z.id, O, A));
    r.useEffect(() => {
        null == z
            ? C()
            : p.default.track(Z.rMx.OPEN_MODAL, {
                  type: U.zw,
                  guild_id: z.guild_id
              });
    }, [z, C]);
    let $ = r.useRef(null),
        [ee, en] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == z ? void 0 : z.recurrence_rule) != null);
            en((null !== (n = null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
        }, [$, null == z ? void 0 : z.recurrence_rule]),
        null == z || null == R || (!B && !w))
    )
        return null;
    let et = (e) => {
            e !== V && (e === U.fL.RSVP_LIST && K(), F(e));
        },
        ei = null != O ? O : (0, b.DK)(z);
    return (0, i.jsx)(o.Gt, {
        value: L,
        children: (0, i.jsxs)(a.Y0X, {
            size: a.CgR.MEDIUM,
            transitionState: _,
            'aria-labelledby': X,
            className: G.root,
            children: [
                (null == z ? void 0 : z.image) != null &&
                    (0, i.jsx)(y.Z, {
                        source: (0, x.Z)(z),
                        className: G.banner
                    }),
                (0, i.jsx)(j.Z, {
                    onClose: C,
                    selectedTab: V,
                    onTabSelected: et,
                    userCount: q,
                    hasBanner: (null == z ? void 0 : z.image) != null,
                    isHub: w
                }),
                (0, i.jsx)('div', {
                    className: G.container,
                    children: (0, i.jsx)(a.hzk, {
                        className: G.contentContainer,
                        style: { height: ee },
                        children: (0, i.jsxs)(a.MyZ, {
                            activeSlide: V,
                            width: T ? 552 : 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(a.Mi4, {
                                    id: U.fL.EVENT_INFO,
                                    children: (0, i.jsx)(S.Z, {
                                        guildEvent: z,
                                        guild: R,
                                        channel: M,
                                        headerId: X,
                                        onClose: C,
                                        onClickInterestedCount: () => et(U.fL.RSVP_LIST),
                                        isHub: w,
                                        containerRef: $,
                                        recurrenceId: ei,
                                        setRecurrenceId: P
                                    })
                                }),
                                (0, i.jsx)(a.Mi4, {
                                    id: U.fL.RSVP_LIST,
                                    children: (0, i.jsx)(D.Z, {
                                        guildEvent: z,
                                        recurrenceId: ei,
                                        eventUsers: Y,
                                        loading: J,
                                        containerHeight: ee,
                                        error: Q
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(a.mzw, {
                    className: G.footer,
                    children: (0, i.jsx)(W, {
                        guildEvent: z,
                        isHub: w,
                        isMember: B,
                        guild: R,
                        channel: M,
                        onActionTaken: C,
                        recurrenceId: ei
                    })
                })
            ]
        })
    });
};
