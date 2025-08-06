t.d(n, { default: () => B }), t(388685);
var l = t(255367),
    i = t(73800),
    r = t(442837),
    o = t(481060),
    c = t(100527),
    s = t(906732),
    a = t(313201),
    u = t(724912),
    d = t(41776),
    _ = t(592125),
    f = t(626135),
    h = t(981888),
    g = t(897285),
    m = t(924301),
    v = t(951539),
    p = t(592126),
    x = t(376108),
    j = t(711373),
    b = t(274311),
    Z = t(854698),
    y = t(405613),
    P = t(285784),
    C = t(95291),
    I = t(187443),
    N = t(464766),
    E = t(724278),
    O = t(462747),
    S = t(462179),
    T = t(765305),
    k = t(981631),
    w = t(40395);
function R(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function L(e) {
    let { guildEvent: n, guild: t, channel: i, onActionTaken: o, isHub: c, isMember: s, recurrenceId: a } = e,
        u = (0, m.xt)(n),
        _ = (0, r.e7)([m.ZP], () => m.ZP.isInterestedInEventRecurrence(n.id, a), [a, n]),
        f = (0, v.ZP)(n),
        h = (0, r.e7)([d.Z], () => d.Z.isLurking(t.id), [t.id]),
        g = (0, b.T)(null == i ? void 0 : i.id, n.id),
        p = (0, S.Z)({
            guild: t,
            channel: i,
            guildScheduledEvent: n,
            isActive: u,
            recurrenceId: a,
            onActionTaken: o,
        }),
        { entity_type: x } = n;
    return c
        ? (0, l.jsx)(
              I.Z,
              R(
                  {
                      isActive: u,
                      isUserLurking: h,
                      rsvped: _,
                      isMember: s,
                      isDetailsView: !0,
                      guildName: null == t ? void 0 : t.name,
                      isChannelPublic: g,
                      canInvite: f,
                  },
                  p,
              ),
          )
        : (0, l.jsx)(
              P.ZP,
              R(
                  {
                      isActive: u,
                      isUserLurking: h,
                      rsvped: _,
                      isChannelPublic: g,
                      canInvite: f,
                      entityType: x,
                  },
                  p,
              ),
          );
}
let B = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: d, initialRecurrenceId: v, onClose: b } = e,
        { analyticsLocations: P } = (0, s.ZP)(c.Z.GUILD_EVENT_MODAL),
        [I, S] = i.useState(v),
        R = (0, r.e7)([m.ZP], () => m.ZP.getGuildScheduledEvent(n), [n]),
        B = null == R ? void 0 : R.id,
        D = null == R ? void 0 : R.guild_id,
        { guild: G, isMember: M } = (0, p.Z)(D, B),
        U = (0, u.Z)(t),
        F = null == R ? void 0 : R.channel_id,
        V = (0, r.e7)([_.Z], () => _.Z.getChannel(F), [F]),
        A = (0, a.Dt)(),
        [X, z] = i.useState(T.fL.EVENT_INFO),
        H = (0, j.Z)(B, I),
        W = (0, x.Z)(D, B, I),
        [q, { loading: J, error: K }] = (0, h.Z)(() => g.Z.getGuildEventUsers(null == R ? void 0 : R.id, I, D));
    i.useEffect(() => {
        null == R
            ? b()
            : f.default.track(k.rMx.OPEN_MODAL, {
                  type: T.zw,
                  guild_id: R.guild_id,
              });
    }, [R, b]);
    let Q = i.useRef(null),
        [Y, $] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            $((null != (n = null == Q || null == (e = Q.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [Q, null == R ? void 0 : R.recurrence_rule]),
        null == R || null == G || (!M && !U))
    )
        return null;
    let ee = (e) => {
            e !== X && (e === T.fL.RSVP_LIST && q(), z(e));
        },
        en = null != I ? I : (0, Z.DK)(R);
    return (0, l.jsx)(s.Gt, {
        value: P,
        children: (0, l.jsxs)(o.Y0X, {
            size: o.CgR.MEDIUM,
            transitionState: d,
            "aria-labelledby": A,
            className: w.root,
            parentComponent: "GuildScheduledEventModal",
            children: [
                (null == R ? void 0 : R.image) != null &&
                    (0, l.jsx)(C.Z, {
                        source: (0, y.Z)(R),
                        className: w.banner,
                    }),
                (0, l.jsx)(N.Z, {
                    onClose: b,
                    selectedTab: X,
                    onTabSelected: ee,
                    userCount: W,
                    hasBanner: (null == R ? void 0 : R.image) != null,
                    isHub: U,
                }),
                (0, l.jsx)("div", {
                    className: w.container,
                    children: (0, l.jsx)(o.hzk, {
                        className: w.contentContainer,
                        style: { height: Y },
                        children: (0, l.jsxs)(o.MyZ, {
                            activeSlide: X,
                            width: 552,
                            centered: !1,
                            children: [
                                (0, l.jsx)(o.Mi4, {
                                    id: T.fL.EVENT_INFO,
                                    children: (0, l.jsx)(E.Z, {
                                        guildEvent: R,
                                        guild: G,
                                        channel: V,
                                        headerId: A,
                                        onClose: b,
                                        onClickInterestedCount: () => ee(T.fL.RSVP_LIST),
                                        isHub: U,
                                        containerRef: Q,
                                        recurrenceId: en,
                                        setRecurrenceId: S,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: T.fL.RSVP_LIST,
                                    children: (0, l.jsx)(O.Z, {
                                        guildEvent: R,
                                        recurrenceId: en,
                                        eventUsers: H,
                                        loading: J,
                                        containerHeight: Y,
                                        error: K,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(o.mzw, {
                    className: w.footer,
                    children: (0, l.jsx)(L, {
                        guildEvent: R,
                        isHub: U,
                        isMember: M,
                        guild: G,
                        channel: V,
                        onActionTaken: b,
                        recurrenceId: en,
                    }),
                }),
            ],
        }),
    });
};
