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
    x = n(626135),
    h = n(981888),
    g = n(897285),
    m = n(924301),
    v = n(951539),
    j = n(315416),
    _ = n(711373),
    p = n(274311),
    N = n(854698),
    I = n(405613),
    Z = n(285784),
    C = n(95291),
    S = n(464766),
    y = n(724278),
    P = n(462747),
    k = n(462179),
    E = n(765305),
    w = n(981631),
    O = n(209442);
function T(e) {
    let { guildEvent: t, guild: n, channel: r, onActionTaken: s, recurrenceId: c } = e,
        o = (0, m.xt)(t),
        d = (0, a.e7)([m.ZP], () => m.ZP.isInterestedInEventRecurrence(t.id, c), [c, t]),
        f = (0, v.ZP)(t),
        b = (0, a.e7)([u.Z], () => u.Z.isLurking(n.id), [n.id]),
        x = (0, p.T)(null == r ? void 0 : r.id, t.id),
        h = (0, k.Z)({
            guild: n,
            channel: r,
            guildScheduledEvent: t,
            isActive: o,
            recurrenceId: c,
            onActionTaken: s,
        }),
        g = (0, Z.Zs)(
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
                    isChannelPublic: x,
                    canInvite: f,
                    entityType: t.entity_type,
                },
                h,
            ),
        ),
        j =
            null != h.onContextMenu
                ? (0, l.jsx)("div", {
                      className: O.leadingAction,
                      children: (0, l.jsx)(Z.b5, { onClick: h.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(i.Go$, {
        leading: j,
        actions: g,
    });
}
let R = (e) => {
    let { guildScheduledEventId: t, transitionState: n, initialRecurrenceId: u, onClose: v } = e,
        { analyticsLocations: p } = (0, o.ZP)(c.Z.GUILD_EVENT_MODAL),
        [Z, k] = r.useState(u),
        R = (0, a.e7)([m.ZP], () => m.ZP.getGuildScheduledEvent(t), [t]),
        L = null == R ? void 0 : R.id,
        B = null == R ? void 0 : R.guild_id,
        D = (0, a.e7)([b.Z], () => b.Z.getGuild(B), [B]),
        F = null == R ? void 0 : R.channel_id,
        M = (0, a.e7)([f.Z], () => f.Z.getChannel(F), [F]),
        A = (0, d.Dt)(),
        [z, U] = r.useState(E.fL.EVENT_INFO),
        G = (0, _.Z)(L, Z),
        V = (0, j.Z)(B, L, Z),
        [H, { loading: W, error: X }] = (0, h.Z)(() => g.Z.getGuildEventUsers(null == R ? void 0 : R.id, Z, B));
    r.useEffect(() => {
        null == R
            ? v()
            : x.default.track(w.rMx.OPEN_MODAL, {
                  type: E.zw,
                  guild_id: R.guild_id,
              });
    }, [R, v]);
    let J = r.useRef(null),
        [K, $] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && $(e[0].contentRect.width);
        });
        return null != J.current && e.observe(J.current), () => e.disconnect();
    }, [J]);
    let q = r.useRef(null),
        [Q, Y] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, t;
            let n = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            Y((null != (t = null == q || null == (e = q.current) ? void 0 : e.offsetHeight) ? t : 0) + n);
        }, [q, null == R ? void 0 : R.recurrence_rule]),
        null == R || null == D)
    )
        return null;
    let ee = (e) => {
            e !== z && (e === E.fL.RSVP_LIST && H(), U(e));
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
                    (0, l.jsx)(C.Z, {
                        source: (0, I.Z)(R),
                        className: O.banner,
                    }),
                (0, l.jsx)(i.fef, {
                    controls: (0, l.jsx)(S.Z, {
                        selectedTab: z,
                        onTabSelected: ee,
                        userCount: V,
                    }),
                    children: (0, l.jsx)("div", {
                        className: O.container,
                        ref: J,
                        children: (0, l.jsxs)(s.MyZ, {
                            activeSlide: z,
                            width: K,
                            centered: !1,
                            children: [
                                (0, l.jsx)(s.Mi4, {
                                    id: E.fL.EVENT_INFO,
                                    children: (0, l.jsx)(y.Z, {
                                        guildEvent: R,
                                        guild: D,
                                        channel: M,
                                        headerId: A,
                                        onClose: v,
                                        onClickInterestedCount: () => ee(E.fL.RSVP_LIST),
                                        containerRef: q,
                                        recurrenceId: et,
                                        setRecurrenceId: k,
                                    }),
                                }),
                                (0, l.jsx)(s.Mi4, {
                                    id: E.fL.RSVP_LIST,
                                    children: (0, l.jsx)(P.Z, {
                                        guildEvent: R,
                                        recurrenceId: et,
                                        eventUsers: G,
                                        loading: W,
                                        containerHeight: Q,
                                        error: X,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(T, {
                    guildEvent: R,
                    guild: D,
                    channel: M,
                    onActionTaken: v,
                    recurrenceId: et,
                }),
            ],
        }),
    });
};
