t.d(n, { default: () => D }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(442837),
    s = t(257465),
    c = t(369585),
    o = t(103866),
    a = t(37148),
    d = t(481060),
    u = t(100527),
    _ = t(906732),
    h = t(313201),
    m = t(41776),
    f = t(592125),
    x = t(430824),
    g = t(626135),
    v = t(981888),
    j = t(897285),
    p = t(924301),
    b = t(951539),
    N = t(376108),
    I = t(711373),
    Z = t(274311),
    y = t(954313),
    C = t(405613),
    S = t(285784),
    P = t(95291),
    E = t(464766),
    k = t(724278),
    w = t(462747),
    T = t(462179),
    O = t(765305),
    R = t(981631),
    L = t(70092);
function B(e) {
    let { guildEvent: n, guild: t, channel: r, onActionTaken: s, recurrenceId: o } = e,
        a = (0, p.xt)(n),
        d = (0, i.e7)([p.ZP], () => p.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]),
        u = (0, b.ZP)(n),
        _ = (0, i.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]),
        h = (0, Z.T)(null == r ? void 0 : r.id, n.id),
        f = (0, T.Z)({
            guild: t,
            channel: r,
            guildScheduledEvent: n,
            isActive: a,
            recurrenceId: o,
            onActionTaken: s,
        }),
        x = (0, S.Zs)(
            (function (e) {
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
            })(
                {
                    isActive: a,
                    isUserLurking: _,
                    rsvped: d,
                    isChannelPublic: h,
                    canInvite: u,
                    entityType: n.entity_type,
                },
                f,
            ),
        ),
        g =
            null != f.onContextMenu
                ? (0, l.jsx)("div", {
                      className: L.leadingAction,
                      children: (0, l.jsx)(S.b5, { onClick: f.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(c.G, {
        leading: g,
        actions: x,
    });
}
let D = (e) => {
    let { guildScheduledEventId: n, transitionState: t, initialRecurrenceId: c, onClose: m } = e,
        { analyticsLocations: b } = (0, _.ZP)(u.Z.GUILD_EVENT_MODAL),
        [Z, S] = r.useState(c),
        T = (0, i.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(n), [n]),
        D = null == T ? void 0 : T.id,
        F = null == T ? void 0 : T.guild_id,
        M = (0, i.e7)([x.Z], () => x.Z.getGuild(F), [F]),
        A = null == T ? void 0 : T.channel_id,
        z = (0, i.e7)([f.Z], () => f.Z.getChannel(A), [A]),
        U = (0, h.Dt)(),
        [G, V] = r.useState(O.fL.EVENT_INFO),
        X = (0, I.Z)(D, Z),
        W = (0, N.Z)(F, D, Z),
        [q, { loading: H, error: J }] = (0, v.Z)(() => j.Z.getGuildEventUsers(null == T ? void 0 : T.id, Z, F));
    r.useEffect(() => {
        null == T
            ? m()
            : g.default.track(R.rMx.OPEN_MODAL, {
                  type: O.zw,
                  guild_id: T.guild_id,
              });
    }, [T, m]);
    let K = r.useRef(null),
        [Q, $] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && $(e[0].contentRect.width);
        });
        return null != K.current && e.observe(K.current), () => e.disconnect();
    }, [K]);
    let Y = r.useRef(null),
        [ee, en] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == T ? void 0 : T.recurrence_rule) != null);
            en((null != (n = null == Y || null == (e = Y.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [Y, null == T ? void 0 : T.recurrence_rule]),
        null == T || null == M)
    )
        return null;
    let et = (e) => {
            e !== G && (e === O.fL.RSVP_LIST && q(), V(e));
        },
        el = null != Z ? Z : (0, y.DK)(T);
    return (0, l.jsx)(_.Gt, {
        value: b,
        children: (0, l.jsxs)(s.IX, {
            transitionState: t,
            size: "lg",
            onClose: m,
            children: [
                (0, l.jsx)(a.x, { title: T.name }),
                (null == T ? void 0 : T.image) != null &&
                    (0, l.jsx)(P.Z, {
                        source: (0, C.Z)(T),
                        className: L.banner,
                    }),
                (0, l.jsx)(o.f, {
                    controls: (0, l.jsx)(E.Z, {
                        selectedTab: G,
                        onTabSelected: et,
                        userCount: W,
                    }),
                    children: (0, l.jsx)("div", {
                        className: L.container,
                        ref: K,
                        children: (0, l.jsxs)(d.MyZ, {
                            activeSlide: G,
                            width: Q,
                            centered: !1,
                            children: [
                                (0, l.jsx)(d.Mi4, {
                                    id: O.fL.EVENT_INFO,
                                    children: (0, l.jsx)(k.Z, {
                                        guildEvent: T,
                                        guild: M,
                                        channel: z,
                                        headerId: U,
                                        onClose: m,
                                        onClickInterestedCount: () => et(O.fL.RSVP_LIST),
                                        containerRef: Y,
                                        recurrenceId: el,
                                        setRecurrenceId: S,
                                    }),
                                }),
                                (0, l.jsx)(d.Mi4, {
                                    id: O.fL.RSVP_LIST,
                                    children: (0, l.jsx)(w.Z, {
                                        guildEvent: T,
                                        recurrenceId: el,
                                        eventUsers: X,
                                        loading: H,
                                        containerHeight: ee,
                                        error: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(B, {
                    guildEvent: T,
                    guild: M,
                    channel: z,
                    onActionTaken: m,
                    recurrenceId: el,
                }),
            ],
        }),
    });
};
