t.d(n, { default: () => H }), t(388685);
var i = t(255367),
    l = t(73800),
    r = t(442837),
    d = t(257465),
    a = t(369585),
    o = t(103866),
    s = t(37148),
    c = t(481060),
    u = t(100527),
    _ = t(906732),
    g = t(313201),
    p = t(724912),
    m = t(41776),
    f = t(592125),
    I = t(626135),
    v = t(981888),
    h = t(897285),
    E = t(924301),
    b = t(951539),
    C = t(592126),
    T = t(376108),
    y = t(711373),
    x = t(274311),
    L = t(854698),
    S = t(405613),
    D = t(285784),
    j = t(95291),
    O = t(187443),
    U = t(464766),
    N = t(724278),
    G = t(462747),
    Z = t(462179),
    P = t(765305),
    R = t(981631),
    z = t(70092);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function B(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: r, recurrenceId: d } = e,
        {
            isActive: o,
            rsvped: s,
            canInvite: c,
            isUserLurking: u,
            isChannelPublic: _,
            footerActions: g,
        } = k({
            guildEvent: n,
            guild: t,
            channel: l,
            onActionTaken: r,
            recurrenceId: d,
        }),
        { entity_type: p } = n,
        m = (0, D.Zs)(
            A(
                {
                    isActive: o,
                    isUserLurking: u,
                    rsvped: s,
                    isChannelPublic: _,
                    canInvite: c,
                    entityType: p,
                },
                g,
            ),
        ),
        f =
            null != g.onContextMenu
                ? (0, i.jsx)("div", {
                      className: z.leadingAction,
                      children: (0, i.jsx)(D.b5, { onClick: g.onContextMenu }),
                  })
                : void 0;
    return (0, i.jsx)(a.G, {
        leading: f,
        actions: m,
    });
}
function w(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: r, isMember: d, recurrenceId: o } = e,
        {
            isActive: s,
            rsvped: c,
            canInvite: u,
            isUserLurking: _,
            isChannelPublic: g,
            footerActions: p,
        } = k({
            guildEvent: n,
            guild: t,
            channel: l,
            onActionTaken: r,
            recurrenceId: o,
        }),
        m = (0, O.u)(
            A(
                {
                    isActive: s,
                    isUserLurking: _,
                    rsvped: c,
                    isMember: d,
                    isChannelPublic: g,
                    canInvite: u,
                    guildName: null == t ? void 0 : t.name,
                    isDetailsView: !0,
                },
                p,
            ),
        ),
        f =
            null != p.onContextMenu
                ? (0, i.jsx)("div", {
                      className: z.leadingAction,
                      children: (0, i.jsx)(D.b5, { onClick: p.onContextMenu }),
                  })
                : void 0;
    return (0, i.jsx)(a.G, {
        leading: f,
        actions: m,
    });
}
function k(e) {
    let { guildEvent: n, guild: t, channel: i, onActionTaken: l, recurrenceId: d } = e,
        a = (0, E.xt)(n),
        o = (0, r.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n.id, d), [d, n]),
        s = (0, b.ZP)(n),
        c = (0, r.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]),
        u = (0, x.T)(null == i ? void 0 : i.id, n.id),
        _ = (0, Z.Z)({
            guild: t,
            channel: i,
            guildScheduledEvent: n,
            isActive: a,
            recurrenceId: d,
            onActionTaken: l,
        });
    return {
        isActive: a,
        rsvped: o,
        canInvite: s,
        isUserLurking: c,
        isChannelPublic: u,
        footerActions: _,
    };
}
let H = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: a, initialRecurrenceId: m, onClose: b } = e,
        { analyticsLocations: x } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL),
        [D, O] = l.useState(m),
        Z = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(n), [n]),
        A = null == Z ? void 0 : Z.id,
        k = null == Z ? void 0 : Z.guild_id,
        { guild: H, isMember: M } = (0, C.Z)(k, A),
        X = (0, p.Z)(t),
        V = null == Z ? void 0 : Z.channel_id,
        F = (0, r.e7)([f.Z], () => f.Z.getChannel(V), [V]),
        Y = (0, g.Dt)(),
        [W, q] = l.useState(P.fL.EVENT_INFO),
        J = (0, y.Z)(A, D),
        K = (0, T.Z)(k, A, D),
        [Q, { loading: $, error: ee }] = (0, v.Z)(() => h.Z.getGuildEventUsers(null == Z ? void 0 : Z.id, D, k));
    l.useEffect(() => {
        null == Z
            ? b()
            : I.default.track(R.rMx.OPEN_MODAL, {
                  type: P.zw,
                  guild_id: Z.guild_id,
              });
    }, [Z, b]);
    let en = l.useRef(null),
        [et, ei] = l.useState(680);
    l.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && ei(e[0].contentRect.width);
        });
        return null != en.current && e.observe(en.current), () => e.disconnect();
    }, [en]);
    let el = l.useRef(null),
        [er, ed] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == Z ? void 0 : Z.recurrence_rule) != null);
            ed((null != (n = null == el || null == (e = el.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [el, null == Z ? void 0 : Z.recurrence_rule]),
        null == Z || null == H || (!M && !X))
    )
        return null;
    let ea = (e) => {
            e !== W && (e === P.fL.RSVP_LIST && Q(), q(e));
        },
        eo = null != D ? D : (0, L.DK)(Z);
    return (0, i.jsx)(_.Gt, {
        value: x,
        children: (0, i.jsxs)(d.I, {
            transitionState: a,
            size: "lg",
            onClose: b,
            children: [
                (0, i.jsx)(s.x, { title: Z.name }),
                (null == Z ? void 0 : Z.image) != null &&
                    (0, i.jsx)(j.Z, {
                        source: (0, S.Z)(Z),
                        className: z.banner,
                    }),
                (0, i.jsx)(o.f, {
                    controls: (0, i.jsx)(U.Z, {
                        selectedTab: W,
                        onTabSelected: ea,
                        userCount: K,
                        isHub: X,
                    }),
                    children: (0, i.jsx)("div", {
                        className: z.container,
                        ref: en,
                        children: (0, i.jsxs)(c.MyZ, {
                            activeSlide: W,
                            width: et,
                            centered: !1,
                            children: [
                                (0, i.jsx)(c.Mi4, {
                                    id: P.fL.EVENT_INFO,
                                    children: (0, i.jsx)(N.Z, {
                                        guildEvent: Z,
                                        guild: H,
                                        channel: F,
                                        headerId: Y,
                                        onClose: b,
                                        onClickInterestedCount: () => ea(P.fL.RSVP_LIST),
                                        isHub: X,
                                        containerRef: el,
                                        recurrenceId: eo,
                                        setRecurrenceId: O,
                                    }),
                                }),
                                (0, i.jsx)(c.Mi4, {
                                    id: P.fL.RSVP_LIST,
                                    children: (0, i.jsx)(G.Z, {
                                        guildEvent: Z,
                                        recurrenceId: eo,
                                        eventUsers: J,
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
                    ? (0, i.jsx)(w, {
                          guildEvent: Z,
                          isMember: M,
                          guild: H,
                          channel: F,
                          onActionTaken: b,
                          recurrenceId: eo,
                      })
                    : (0, i.jsx)(B, {
                          guildEvent: Z,
                          guild: H,
                          channel: F,
                          onActionTaken: b,
                          recurrenceId: eo,
                      }),
            ],
        }),
    });
};
