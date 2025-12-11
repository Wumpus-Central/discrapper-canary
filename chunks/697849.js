n.d(t, { default: () => R }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(793030),
    a = n(442837),
    s = n(481060),
    c = n(100527),
    o = n(906732),
    d = n(313201),
    u = n(41776),
    f = n(592125),
    b = n(430824),
    h = n(626135),
    m = n(981888),
    x = n(897285),
    g = n(924301),
    v = n(951539),
    j = n(315416),
    _ = n(711373),
    p = n(274311),
    N = n(854698),
    I = n(405613),
    Z = n(285784),
    y = n(95291),
    S = n(464766),
    E = n(724278),
    C = n(462747),
    P = n(462179),
    T = n(765305),
    w = n(981631),
    k = n(209442);
function O(e) {
    let { guildEvent: t, guild: n, channel: r, onActionTaken: s, recurrenceId: c } = e,
        o = (0, g.xt)(t),
        d = (0, a.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(t.id, c), [c, t]),
        f = (0, v.ZP)(t),
        b = (0, a.e7)([u.Z], () => u.Z.isLurking(n.id), [n.id]),
        h = (0, p.T)(null == r ? void 0 : r.id, t.id),
        m = (0, P.Z)({
            guild: n,
            channel: r,
            guildScheduledEvent: t,
            isActive: o,
            recurrenceId: c,
            onActionTaken: s,
        }),
        x = (0, Z.Zs)(
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })(
                {
                    isActive: o,
                    isUserLurking: b,
                    rsvped: d,
                    isChannelPublic: h,
                    canInvite: f,
                    entityType: t.entity_type,
                },
                m,
            ),
        ),
        j =
            null != m.onContextMenu
                ? (0, l.jsx)("div", {
                      className: k.leadingAction,
                      children: (0, l.jsx)(Z.b5, { onClick: m.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(i.Go$, {
        leading: j,
        actions: x,
    });
}
let R = (e) => {
    let { guildScheduledEventId: t, transitionState: n, initialRecurrenceId: u, onClose: v } = e,
        { analyticsLocations: p } = (0, o.ZP)(c.Z.GUILD_EVENT_MODAL),
        [Z, P] = r.useState(u),
        R = (0, a.e7)([g.ZP], () => g.ZP.getGuildScheduledEvent(t), [t]),
        L = null == R ? void 0 : R.id,
        B = null == R ? void 0 : R.guild_id,
        F = (0, a.e7)([b.Z], () => b.Z.getGuild(B), [B]),
        D = null == R ? void 0 : R.channel_id,
        M = (0, a.e7)([f.Z], () => f.Z.getChannel(D), [D]),
        A = (0, d.Dt)(),
        [V, z] = r.useState(T.fL.EVENT_INFO),
        G = (0, _.Z)(L, Z),
        U = (0, j.Z)(B, L, Z),
        [X, { loading: W, error: H }] = (0, m.Z)(() => x.Z.getGuildEventUsers(null == R ? void 0 : R.id, Z, B));
    r.useEffect(() => {
        null == R
            ? v()
            : h.default.track(w.rMx.OPEN_MODAL, {
                  type: T.zw,
                  guild_id: R.guild_id,
              });
    }, [R, v]);
    let J = r.useRef(null),
        [K, q] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && q(e[0].contentRect.width);
        });
        return null != J.current && e.observe(J.current), () => e.disconnect();
    }, [J]);
    let $ = r.useRef(null),
        [Q, Y] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, t;
            let n = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            Y((null != (t = null == $ || null == (e = $.current) ? void 0 : e.offsetHeight) ? t : 0) + n);
        }, [$, null == R ? void 0 : R.recurrence_rule]),
        null == R || null == F)
    )
        return null;
    let ee = (e) => {
            e !== V && (e === T.fL.RSVP_LIST && X(), z(e));
        },
        et = null != Z ? Z : (0, N.DK)(R);
    return (0, l.jsx)(o.Gt, {
        value: p,
        children: (0, l.jsxs)(i.IX, {
            transitionState: n,
            size: "lg",
            onClose: v,
            children: [
                (0, l.jsx)(i.xBx, { title: R.name }),
                (null == R ? void 0 : R.image) != null &&
                    (0, l.jsx)(y.Z, {
                        source: (0, I.Z)(R),
                        className: k.banner,
                    }),
                (0, l.jsx)(i.fef, {
                    controls: (0, l.jsx)(S.Z, {
                        selectedTab: V,
                        onTabSelected: ee,
                        userCount: U,
                    }),
                    children: (0, l.jsx)("div", {
                        className: k.container,
                        ref: J,
                        children: (0, l.jsxs)(s.MyZ, {
                            activeSlide: V,
                            width: K,
                            centered: !1,
                            children: [
                                (0, l.jsx)(s.Mi4, {
                                    id: T.fL.EVENT_INFO,
                                    children: (0, l.jsx)(E.Z, {
                                        guildEvent: R,
                                        guild: F,
                                        channel: M,
                                        headerId: A,
                                        onClose: v,
                                        onClickInterestedCount: () => ee(T.fL.RSVP_LIST),
                                        containerRef: $,
                                        recurrenceId: et,
                                        setRecurrenceId: P,
                                    }),
                                }),
                                (0, l.jsx)(s.Mi4, {
                                    id: T.fL.RSVP_LIST,
                                    children: (0, l.jsx)(C.Z, {
                                        guildEvent: R,
                                        recurrenceId: et,
                                        eventUsers: G,
                                        loading: W,
                                        containerHeight: Q,
                                        error: H,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(O, {
                    guildEvent: R,
                    guild: F,
                    channel: M,
                    onActionTaken: v,
                    recurrenceId: et,
                }),
            ],
        }),
    });
};
