(t.d(n, { default: () => z }), t(388685));
var i = t(255367),
    l = t(73800),
    r = t(442837),
    a = t(481060),
    d = t(100527),
    o = t(906732),
    s = t(313201),
    c = t(724912),
    u = t(41776),
    _ = t(592125),
    g = t(626135),
    p = t(981888),
    m = t(897285),
    f = t(924301),
    I = t(951539),
    v = t(592126),
    h = t(315416),
    C = t(711373),
    E = t(274311),
    b = t(854698),
    x = t(405613),
    T = t(285784),
    y = t(95291),
    L = t(187443),
    j = t(464766),
    N = t(724278),
    S = t(462747),
    D = t(462179),
    O = t(765305),
    U = t(981631),
    Z = t(40395);
function G(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
function P(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: a, isHub: d, isMember: o, recurrenceId: s } = e,
        c = (0, f.xt)(n),
        _ = (0, r.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(n.id, s), [s, n]),
        g = (0, I.ZP)(n),
        p = (0, r.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
        m = (0, E.T)(null == l ? void 0 : l.id, n.id),
        v = (0, D.Z)({
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
              L.Z,
              G(
                  {
                      isActive: c,
                      isUserLurking: p,
                      rsvped: _,
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
              G(
                  {
                      isActive: c,
                      isUserLurking: p,
                      rsvped: _,
                      isChannelPublic: m,
                      canInvite: g,
                      entityType: h
                  },
                  v
              )
          );
}
let z = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: u, initialRecurrenceId: I, onClose: E } = e,
        { analyticsLocations: T } = (0, o.ZP)(d.Z.GUILD_EVENT_MODAL),
        [L, D] = l.useState(I),
        G = (0, r.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(n), [n]),
        z = null == G ? void 0 : G.id,
        k = null == G ? void 0 : G.guild_id,
        { guild: A, isMember: R } = (0, v.Z)(k, z),
        B = (0, c.Z)(t),
        w = null == G ? void 0 : G.channel_id,
        H = (0, r.e7)([_.Z], () => _.Z.getChannel(w), [w]),
        M = (0, s.Dt)(),
        [X, V] = l.useState(O.fL.EVENT_INFO),
        F = (0, C.Z)(z, L),
        Y = (0, h.Z)(k, z, L),
        [W, { loading: q, error: K }] = (0, p.Z)(() => m.Z.getGuildEventUsers(null == G ? void 0 : G.id, L, k));
    l.useEffect(() => {
        null == G
            ? E()
            : g.default.track(U.rMx.OPEN_MODAL, {
                  type: O.zw,
                  guild_id: G.guild_id
              });
    }, [G, E]);
    let J = l.useRef(null),
        [Q, $] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == G ? void 0 : G.recurrence_rule) != null);
            $((null != (n = null == J || null == (e = J.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [J, null == G ? void 0 : G.recurrence_rule]),
        null == G || null == A || (!R && !B))
    )
        return null;
    let ee = (e) => {
            e !== X && (e === O.fL.RSVP_LIST && W(), V(e));
        },
        en = null != L ? L : (0, b.DK)(G);
    return (0, i.jsx)(o.Gt, {
        value: T,
        children: (0, i.jsxs)(a.Y0X, {
            size: a.CgR.MEDIUM,
            transitionState: u,
            'aria-labelledby': M,
            className: Z.root,
            parentComponent: 'GuildScheduledEventModal',
            children: [
                (null == G ? void 0 : G.image) != null &&
                    (0, i.jsx)(y.Z, {
                        source: (0, x.Z)(G),
                        className: Z.banner
                    }),
                (0, i.jsx)(j.Z, {
                    onClose: E,
                    selectedTab: X,
                    onTabSelected: ee,
                    userCount: Y,
                    hasBanner: (null == G ? void 0 : G.image) != null,
                    isHub: B
                }),
                (0, i.jsx)('div', {
                    className: Z.container,
                    children: (0, i.jsx)(a.hzk, {
                        className: Z.contentContainer,
                        style: { height: Q },
                        children: (0, i.jsxs)(a.MyZ, {
                            activeSlide: X,
                            width: 552,
                            centered: !1,
                            children: [
                                (0, i.jsx)(a.Mi4, {
                                    id: O.fL.EVENT_INFO,
                                    children: (0, i.jsx)(N.Z, {
                                        guildEvent: G,
                                        guild: A,
                                        channel: H,
                                        headerId: M,
                                        onClose: E,
                                        onClickInterestedCount: () => ee(O.fL.RSVP_LIST),
                                        isHub: B,
                                        containerRef: J,
                                        recurrenceId: en,
                                        setRecurrenceId: D
                                    })
                                }),
                                (0, i.jsx)(a.Mi4, {
                                    id: O.fL.RSVP_LIST,
                                    children: (0, i.jsx)(S.Z, {
                                        guildEvent: G,
                                        recurrenceId: en,
                                        eventUsers: F,
                                        loading: q,
                                        containerHeight: Q,
                                        error: K
                                    })
                                })
                            ]
                        })
                    })
                }),
                (0, i.jsx)(a.mzw, {
                    className: Z.footer,
                    children: (0, i.jsx)(P, {
                        guildEvent: G,
                        isHub: B,
                        isMember: R,
                        guild: A,
                        channel: H,
                        onActionTaken: E,
                        recurrenceId: en
                    })
                })
            ]
        })
    });
};
