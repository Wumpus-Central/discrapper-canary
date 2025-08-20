n.d(t, { default: () => B }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(442837),
    a = n(257465),
    d = n(369585),
    s = n(103866),
    o = n(37148),
    c = n(481060),
    u = n(100527),
    _ = n(906732),
    g = n(313201),
    p = n(724912),
    m = n(41776),
    I = n(592125),
    E = n(626135),
    f = n(981888),
    h = n(897285),
    v = n(924301),
    T = n(951539),
    y = n(592126),
    C = n(376108),
    x = n(711373),
    L = n(274311),
    j = n(954313),
    b = n(405613),
    O = n(285784),
    S = n(95291),
    U = n(187443),
    D = n(464766),
    G = n(724278),
    N = n(462747),
    Z = n(462179),
    P = n(765305),
    A = n(981631),
    R = n(70092);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function w(e) {
    let { guildEvent: t, guild: n, channel: l, onActionTaken: r, recurrenceId: a } = e,
        {
            isActive: s,
            rsvped: o,
            canInvite: c,
            isUserLurking: u,
            isChannelPublic: _,
            footerActions: g,
        } = k({
            guildEvent: t,
            guild: n,
            channel: l,
            onActionTaken: r,
            recurrenceId: a,
        }),
        { entity_type: p } = t,
        m = (0, O.Zs)(
            z(
                {
                    isActive: s,
                    isUserLurking: u,
                    rsvped: o,
                    isChannelPublic: _,
                    canInvite: c,
                    entityType: p,
                },
                g,
            ),
        ),
        I =
            null != g.onContextMenu
                ? (0, i.jsx)("div", {
                      className: R.leadingAction,
                      children: (0, i.jsx)(O.b5, { onClick: g.onContextMenu }),
                  })
                : void 0;
    return (0, i.jsx)(d.G, {
        leading: I,
        actions: m,
    });
}
function H(e) {
    let { guildEvent: t, guild: n, channel: l, onActionTaken: r, isMember: a, recurrenceId: s } = e,
        {
            isActive: o,
            rsvped: c,
            canInvite: u,
            isUserLurking: _,
            isChannelPublic: g,
            footerActions: p,
        } = k({
            guildEvent: t,
            guild: n,
            channel: l,
            onActionTaken: r,
            recurrenceId: s,
        }),
        m = (0, U.u)(
            z(
                {
                    isActive: o,
                    isUserLurking: _,
                    rsvped: c,
                    isMember: a,
                    isChannelPublic: g,
                    canInvite: u,
                    guildName: null == n ? void 0 : n.name,
                    isDetailsView: !0,
                },
                p,
            ),
        ),
        I =
            null != p.onContextMenu
                ? (0, i.jsx)("div", {
                      className: R.leadingAction,
                      children: (0, i.jsx)(O.b5, { onClick: p.onContextMenu }),
                  })
                : void 0;
    return (0, i.jsx)(d.G, {
        leading: I,
        actions: m,
    });
}
function k(e) {
    let { guildEvent: t, guild: n, channel: i, onActionTaken: l, recurrenceId: a } = e,
        d = (0, v.xt)(t),
        s = (0, r.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(t.id, a), [a, t]),
        o = (0, T.ZP)(t),
        c = (0, r.e7)([m.Z], () => m.Z.isLurking(n.id), [n.id]),
        u = (0, L.T)(null == i ? void 0 : i.id, t.id),
        _ = (0, Z.Z)({
            guild: n,
            channel: i,
            guildScheduledEvent: t,
            isActive: d,
            recurrenceId: a,
            onActionTaken: l,
        });
    return {
        isActive: d,
        rsvped: s,
        canInvite: o,
        isUserLurking: c,
        isChannelPublic: u,
        footerActions: _,
    };
}
let B = (e) => {
    let { guildScheduledEventId: t, parentGuildId: n, transitionState: d, initialRecurrenceId: m, onClose: T } = e,
        { analyticsLocations: L } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL),
        [O, U] = l.useState(m),
        Z = (0, r.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(t), [t]),
        z = null == Z ? void 0 : Z.id,
        k = null == Z ? void 0 : Z.guild_id,
        { guild: B, isMember: M } = (0, y.Z)(k, z),
        X = (0, p.Z)(n),
        V = null == Z ? void 0 : Z.channel_id,
        Y = (0, r.e7)([I.Z], () => I.Z.getChannel(V), [V]),
        F = (0, g.Dt)(),
        [q, K] = l.useState(P.fL.EVENT_INFO),
        W = (0, x.Z)(z, O),
        J = (0, C.Z)(k, z, O),
        [Q, { loading: $, error: ee }] = (0, f.Z)(() => h.Z.getGuildEventUsers(null == Z ? void 0 : Z.id, O, k));
    l.useEffect(() => {
        null == Z
            ? T()
            : E.default.track(A.rMx.OPEN_MODAL, {
                  type: P.zw,
                  guild_id: Z.guild_id,
              });
    }, [Z, T]);
    let et = l.useRef(null),
        [en, ei] = l.useState(680);
    l.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && ei(e[0].contentRect.width);
        });
        return null != et.current && e.observe(et.current), () => e.disconnect();
    }, [et]);
    let el = l.useRef(null),
        [er, ea] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            var e, t;
            let n = 16 * ((null == Z ? void 0 : Z.recurrence_rule) != null);
            ea((null != (t = null == el || null == (e = el.current) ? void 0 : e.offsetHeight) ? t : 0) + n);
        }, [el, null == Z ? void 0 : Z.recurrence_rule]),
        null == Z || null == B || (!M && !X))
    )
        return null;
    let ed = (e) => {
            e !== q && (e === P.fL.RSVP_LIST && Q(), K(e));
        },
        es = null != O ? O : (0, j.DK)(Z);
    return (0, i.jsx)(_.Gt, {
        value: L,
        children: (0, i.jsxs)(a.I, {
            transitionState: d,
            size: "lg",
            onClose: T,
            children: [
                (0, i.jsx)(o.x, { title: Z.name }),
                (null == Z ? void 0 : Z.image) != null &&
                    (0, i.jsx)(S.Z, {
                        source: (0, b.Z)(Z),
                        className: R.banner,
                    }),
                (0, i.jsx)(s.f, {
                    controls: (0, i.jsx)(D.Z, {
                        selectedTab: q,
                        onTabSelected: ed,
                        userCount: J,
                        isHub: X,
                    }),
                    children: (0, i.jsx)("div", {
                        className: R.container,
                        ref: et,
                        children: (0, i.jsxs)(c.MyZ, {
                            activeSlide: q,
                            width: en,
                            centered: !1,
                            children: [
                                (0, i.jsx)(c.Mi4, {
                                    id: P.fL.EVENT_INFO,
                                    children: (0, i.jsx)(G.Z, {
                                        guildEvent: Z,
                                        guild: B,
                                        channel: Y,
                                        headerId: F,
                                        onClose: T,
                                        onClickInterestedCount: () => ed(P.fL.RSVP_LIST),
                                        isHub: X,
                                        containerRef: el,
                                        recurrenceId: es,
                                        setRecurrenceId: U,
                                    }),
                                }),
                                (0, i.jsx)(c.Mi4, {
                                    id: P.fL.RSVP_LIST,
                                    children: (0, i.jsx)(N.Z, {
                                        guildEvent: Z,
                                        recurrenceId: es,
                                        eventUsers: W,
                                        loading: $,
                                        containerHeight: er,
                                        error: ee,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                X
                    ? (0, i.jsx)(H, {
                          guildEvent: Z,
                          isMember: M,
                          guild: B,
                          channel: Y,
                          onActionTaken: T,
                          recurrenceId: es,
                      })
                    : (0, i.jsx)(w, {
                          guildEvent: Z,
                          guild: B,
                          channel: Y,
                          onActionTaken: T,
                          recurrenceId: es,
                      }),
            ],
        }),
    });
};
