t.d(n, { default: () => k }), t(388685);
var i = t(255367),
    l = t(73800),
    r = t(442837),
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
    I = t(897285),
    f = t(924301),
    v = t(951539),
    h = t(592126),
    C = t(315416),
    E = t(711373),
    b = t(274311),
    x = t(854698),
    T = t(405613),
    y = t(285784),
    L = t(95291),
    j = t(187443),
    N = t(464766),
    S = t(724278),
    D = t(462747),
    O = t(462179),
    U = t(765305),
    Z = t(981631),
    G = t(40395);
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
function z(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: a, isHub: d, isMember: o, recurrenceId: s } = e,
        c = (0, f.xt)(n),
        u = (0, r.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(n.id, s), [s, n]),
        g = (0, v.ZP)(n),
        p = (0, r.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        m = (0, b.T)(null == l ? void 0 : l.id, n.id),
        I = (0, O.Z)({
            guild: t,
            channel: l,
            guildScheduledEvent: n,
            isActive: c,
            recurrenceId: s,
            onActionTaken: a
        }),
        { entity_type: h } = n;
    return d
        ? (0, i.jsx)(
              j.Z,
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
                  I
              )
          )
        : (0, i.jsx)(
              y.ZP,
              P(
                  {
                      isActive: c,
                      isUserLurking: p,
                      rsvped: u,
                      isChannelPublic: m,
                      canInvite: g,
                      entityType: h
                  },
                  I
              )
          );
}
let k = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: _, initialRecurrenceId: v, onClose: b } = e,
        y = (0, c.Q3)('GuildScheduledEventModal'),
        { analyticsLocations: j } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
        [O, P] = l.useState(v),
        k = (0, r.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(n), [n]),
        A = null == k ? void 0 : k.id,
        R = null == k ? void 0 : k.guild_id,
        { guild: B, isMember: w } = (0, h.Z)(R, A),
        H = (0, u.Z)(t),
        M = null == k ? void 0 : k.channel_id,
        X = (0, r.e7)([g.Z], () => g.Z.getChannel(M), [M]),
        V = (0, s.Dt)(),
        [F, Y] = l.useState(U.fL.EVENT_INFO),
        W = (0, E.Z)(A, O),
        q = (0, C.Z)(R, A, O),
        [K, { loading: J, error: Q }] = (0, m.Z)(() => I.Z.getGuildEventUsers(null == k ? void 0 : k.id, O, R));
    l.useEffect(() => {
        null == k
            ? b()
            : p.default.track(Z.rMx.OPEN_MODAL, {
                  type: U.zw,
                  guild_id: k.guild_id
              });
    }, [k, b]);
    let $ = l.useRef(null),
        [ee, en] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == k ? void 0 : k.recurrence_rule) != null);
            en((null != (n = null == $ || null == (e = $.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [$, null == k ? void 0 : k.recurrence_rule]),
        null == k || null == B || (!w && !H))
    )
        return null;
    let et = (e) => {
            e !== F && (e === U.fL.RSVP_LIST && K(), Y(e));
        },
        ei = null != O ? O : (0, x.DK)(k);
    return (0, i.jsx)(o.Gt, {
        value: j,
        children: (0, i.jsxs)(a.Y0X, {
            size: a.CgR.MEDIUM,
            transitionState: _,
            'aria-labelledby': V,
            className: G.root,
            children: [
                (null == k ? void 0 : k.image) != null &&
                    (0, i.jsx)(L.Z, {
                        source: (0, T.Z)(k),
                        className: G.banner
                    }),
                (0, i.jsx)(N.Z, {
                    onClose: b,
                    selectedTab: F,
                    onTabSelected: et,
                    userCount: q,
                    hasBanner: (null == k ? void 0 : k.image) != null,
                    isHub: H
                }),
                (0, i.jsx)('div', {
                    className: G.container,
                    children: (0, i.jsx)(a.hzk, {
                        className: G.contentContainer,
                        style: { height: ee },
                        children: (0, i.jsxs)(a.MyZ, {
                            activeSlide: F,
                            width: y ? 552 : 600,
                            centered: !1,
                            children: [
                                (0, i.jsx)(a.Mi4, {
                                    id: U.fL.EVENT_INFO,
                                    children: (0, i.jsx)(S.Z, {
                                        guildEvent: k,
                                        guild: B,
                                        channel: X,
                                        headerId: V,
                                        onClose: b,
                                        onClickInterestedCount: () => et(U.fL.RSVP_LIST),
                                        isHub: H,
                                        containerRef: $,
                                        recurrenceId: ei,
                                        setRecurrenceId: P
                                    })
                                }),
                                (0, i.jsx)(a.Mi4, {
                                    id: U.fL.RSVP_LIST,
                                    children: (0, i.jsx)(D.Z, {
                                        guildEvent: k,
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
                (0, i.jsx)(a.mzw, {
                    className: G.footer,
                    children: (0, i.jsx)(z, {
                        guildEvent: k,
                        isHub: H,
                        isMember: w,
                        guild: B,
                        channel: X,
                        onActionTaken: b,
                        recurrenceId: ei
                    })
                })
            ]
        })
    });
};
