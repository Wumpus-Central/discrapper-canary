t.d(n, { default: () => F }), t(388685);
var l = t(255367),
    i = t(73800),
    r = t(442837),
    o = t(257465),
    c = t(369585),
    s = t(103866),
    a = t(37148),
    u = t(481060),
    d = t(100527),
    f = t(906732),
    g = t(313201),
    h = t(724912),
    _ = t(41776),
    v = t(592125),
    m = t(626135),
    x = t(981888),
    j = t(897285),
    p = t(924301),
    b = t(951539),
    Z = t(592126),
    y = t(376108),
    P = t(711373),
    C = t(274311),
    N = t(854698),
    E = t(405613),
    I = t(285784),
    O = t(95291),
    S = t(187443),
    T = t(464766),
    w = t(724278),
    k = t(462747),
    R = t(462179),
    L = t(765305),
    D = t(981631),
    G = t(70092);
function B(e) {
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
function M(e) {
    let { guildEvent: n, guild: t, channel: i, onActionTaken: r, recurrenceId: o } = e,
        {
            isActive: s,
            rsvped: a,
            canInvite: u,
            isUserLurking: d,
            isChannelPublic: f,
            footerActions: g,
        } = U({
            guildEvent: n,
            guild: t,
            channel: i,
            onActionTaken: r,
            recurrenceId: o,
        }),
        { entity_type: h } = n,
        _ = (0, I.Zs)(
            B(
                {
                    isActive: s,
                    isUserLurking: d,
                    rsvped: a,
                    isChannelPublic: f,
                    canInvite: u,
                    entityType: h,
                },
                g,
            ),
        ),
        v =
            null != g.onContextMenu
                ? (0, l.jsx)("div", {
                      className: G.leadingAction,
                      children: (0, l.jsx)(I.b5, { onClick: g.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(c.G, {
        leading: v,
        actions: _,
    });
}
function A(e) {
    let { guildEvent: n, guild: t, channel: i, onActionTaken: r, isMember: o, recurrenceId: s } = e,
        {
            isActive: a,
            rsvped: u,
            canInvite: d,
            isUserLurking: f,
            isChannelPublic: g,
            footerActions: h,
        } = U({
            guildEvent: n,
            guild: t,
            channel: i,
            onActionTaken: r,
            recurrenceId: s,
        }),
        _ = (0, S.u)(
            B(
                {
                    isActive: a,
                    isUserLurking: f,
                    rsvped: u,
                    isMember: o,
                    isChannelPublic: g,
                    canInvite: d,
                    guildName: null == t ? void 0 : t.name,
                    isDetailsView: !0,
                },
                h,
            ),
        ),
        v =
            null != h.onContextMenu
                ? (0, l.jsx)("div", {
                      className: G.leadingAction,
                      children: (0, l.jsx)(I.b5, { onClick: h.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(c.G, {
        leading: v,
        actions: _,
    });
}
function U(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: i, recurrenceId: o } = e,
        c = (0, p.xt)(n),
        s = (0, r.e7)([p.ZP], () => p.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]),
        a = (0, b.ZP)(n),
        u = (0, r.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        d = (0, C.T)(null == l ? void 0 : l.id, n.id),
        f = (0, R.Z)({
            guild: t,
            channel: l,
            guildScheduledEvent: n,
            isActive: c,
            recurrenceId: o,
            onActionTaken: i,
        });
    return {
        isActive: c,
        rsvped: s,
        canInvite: a,
        isUserLurking: u,
        isChannelPublic: d,
        footerActions: f,
    };
}
let F = (e) => {
    let { guildScheduledEventId: n, parentGuildId: t, transitionState: c, initialRecurrenceId: _, onClose: b } = e,
        { analyticsLocations: C } = (0, f.ZP)(d.Z.GUILD_EVENT_MODAL),
        [I, S] = i.useState(_),
        R = (0, r.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(n), [n]),
        B = null == R ? void 0 : R.id,
        U = null == R ? void 0 : R.guild_id,
        { guild: F, isMember: V } = (0, Z.Z)(U, B),
        X = (0, h.Z)(t),
        z = null == R ? void 0 : R.channel_id,
        H = (0, r.e7)([v.Z], () => v.Z.getChannel(z), [z]),
        W = (0, g.Dt)(),
        [q, J] = i.useState(L.fL.EVENT_INFO),
        K = (0, P.Z)(B, I),
        Q = (0, y.Z)(U, B, I),
        [Y, { loading: $, error: ee }] = (0, x.Z)(() => j.Z.getGuildEventUsers(null == R ? void 0 : R.id, I, U));
    i.useEffect(() => {
        null == R
            ? b()
            : m.default.track(D.rMx.OPEN_MODAL, {
                  type: L.zw,
                  guild_id: R.guild_id,
              });
    }, [R, b]);
    let en = i.useRef(null),
        [et, el] = i.useState(680);
    i.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && el(e[0].contentRect.width);
        });
        return null != en.current && e.observe(en.current), () => e.disconnect();
    }, [en]);
    let ei = i.useRef(null),
        [er, eo] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            eo((null != (n = null == ei || null == (e = ei.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [ei, null == R ? void 0 : R.recurrence_rule]),
        null == R || null == F || (!V && !X))
    )
        return null;
    let ec = (e) => {
            e !== q && (e === L.fL.RSVP_LIST && Y(), J(e));
        },
        es = null != I ? I : (0, N.DK)(R);
    return (0, l.jsx)(f.Gt, {
        value: C,
        children: (0, l.jsxs)(o.I, {
            transitionState: c,
            size: "lg",
            onClose: b,
            children: [
                (0, l.jsx)(a.x, { title: R.name }),
                (null == R ? void 0 : R.image) != null &&
                    (0, l.jsx)(O.Z, {
                        source: (0, E.Z)(R),
                        className: G.banner,
                    }),
                (0, l.jsx)(s.f, {
                    controls: (0, l.jsx)(T.Z, {
                        selectedTab: q,
                        onTabSelected: ec,
                        userCount: Q,
                        isHub: X,
                    }),
                    children: (0, l.jsx)("div", {
                        className: G.container,
                        ref: en,
                        children: (0, l.jsxs)(u.MyZ, {
                            activeSlide: q,
                            width: et,
                            centered: !1,
                            children: [
                                (0, l.jsx)(u.Mi4, {
                                    id: L.fL.EVENT_INFO,
                                    children: (0, l.jsx)(w.Z, {
                                        guildEvent: R,
                                        guild: F,
                                        channel: H,
                                        headerId: W,
                                        onClose: b,
                                        onClickInterestedCount: () => ec(L.fL.RSVP_LIST),
                                        isHub: X,
                                        containerRef: ei,
                                        recurrenceId: es,
                                        setRecurrenceId: S,
                                    }),
                                }),
                                (0, l.jsx)(u.Mi4, {
                                    id: L.fL.RSVP_LIST,
                                    children: (0, l.jsx)(k.Z, {
                                        guildEvent: R,
                                        recurrenceId: es,
                                        eventUsers: K,
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
                    ? (0, l.jsx)(A, {
                          guildEvent: R,
                          isMember: V,
                          guild: F,
                          channel: H,
                          onActionTaken: b,
                          recurrenceId: es,
                      })
                    : (0, l.jsx)(M, {
                          guildEvent: R,
                          guild: F,
                          channel: H,
                          onActionTaken: b,
                          recurrenceId: es,
                      }),
            ],
        }),
    });
};
