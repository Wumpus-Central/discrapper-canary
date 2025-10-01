t.d(n, { default: () => R }), t(388685);
var l = t(951288),
    r = t(647438),
    i = t(793030),
    s = t(442837),
    c = t(481060),
    o = t(100527),
    a = t(906732),
    d = t(313201),
    u = t(41776),
    _ = t(592125),
    h = t(430824),
    m = t(626135),
    f = t(981888),
    x = t(897285),
    g = t(924301),
    v = t(951539),
    j = t(376108),
    p = t(711373),
    b = t(274311),
    N = t(954313),
    I = t(405613),
    Z = t(285784),
    y = t(95291),
    C = t(464766),
    S = t(724278),
    P = t(462747),
    E = t(462179),
    k = t(765305),
    w = t(981631),
    T = t(70092);
function O(e) {
    let { guildEvent: n, guild: t, channel: r, onActionTaken: c, recurrenceId: o } = e,
        a = (0, g.xt)(n),
        d = (0, s.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(n.id, o), [o, n]),
        _ = (0, v.ZP)(n),
        h = (0, s.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
        m = (0, b.T)(null == r ? void 0 : r.id, n.id),
        f = (0, E.Z)({
            guild: t,
            channel: r,
            guildScheduledEvent: n,
            isActive: a,
            recurrenceId: o,
            onActionTaken: c,
        }),
        x = (0, Z.Zs)(
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
                    isUserLurking: h,
                    rsvped: d,
                    isChannelPublic: m,
                    canInvite: _,
                    entityType: n.entity_type,
                },
                f,
            ),
        ),
        j =
            null != f.onContextMenu
                ? (0, l.jsx)("div", {
                      className: T.leadingAction,
                      children: (0, l.jsx)(Z.b5, { onClick: f.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(i.Go$, {
        leading: j,
        actions: x,
    });
}
let R = (e) => {
    let { guildScheduledEventId: n, transitionState: t, initialRecurrenceId: u, onClose: v } = e,
        { analyticsLocations: b } = (0, a.ZP)(o.Z.GUILD_EVENT_MODAL),
        [Z, E] = r.useState(u),
        R = (0, s.e7)([g.ZP], () => g.ZP.getGuildScheduledEvent(n), [n]),
        L = null == R ? void 0 : R.id,
        B = null == R ? void 0 : R.guild_id,
        D = (0, s.e7)([h.Z], () => h.Z.getGuild(B), [B]),
        F = null == R ? void 0 : R.channel_id,
        M = (0, s.e7)([_.Z], () => _.Z.getChannel(F), [F]),
        A = (0, d.Dt)(),
        [z, U] = r.useState(k.fL.EVENT_INFO),
        G = (0, p.Z)(L, Z),
        V = (0, j.Z)(B, L, Z),
        [X, { loading: W, error: q }] = (0, f.Z)(() => x.Z.getGuildEventUsers(null == R ? void 0 : R.id, Z, B));
    r.useEffect(() => {
        null == R
            ? v()
            : m.default.track(w.rMx.OPEN_MODAL, {
                  type: k.zw,
                  guild_id: R.guild_id,
              });
    }, [R, v]);
    let H = r.useRef(null),
        [J, K] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && K(e[0].contentRect.width);
        });
        return null != H.current && e.observe(H.current), () => e.disconnect();
    }, [H]);
    let Q = r.useRef(null),
        [$, Y] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, n;
            let t = 16 * ((null == R ? void 0 : R.recurrence_rule) != null);
            Y((null != (n = null == Q || null == (e = Q.current) ? void 0 : e.offsetHeight) ? n : 0) + t);
        }, [Q, null == R ? void 0 : R.recurrence_rule]),
        null == R || null == D)
    )
        return null;
    let ee = (e) => {
            e !== z && (e === k.fL.RSVP_LIST && X(), U(e));
        },
        en = null != Z ? Z : (0, N.DK)(R);
    return (0, l.jsx)(a.Gt, {
        value: b,
        children: (0, l.jsxs)(i.IX, {
            transitionState: t,
            size: "lg",
            onClose: v,
            children: [
                (0, l.jsx)(i.xBx, { title: R.name }),
                (null == R ? void 0 : R.image) != null &&
                    (0, l.jsx)(y.Z, {
                        source: (0, I.Z)(R),
                        className: T.banner,
                    }),
                (0, l.jsx)(i.fef, {
                    controls: (0, l.jsx)(C.Z, {
                        selectedTab: z,
                        onTabSelected: ee,
                        userCount: V,
                    }),
                    children: (0, l.jsx)("div", {
                        className: T.container,
                        ref: H,
                        children: (0, l.jsxs)(c.MyZ, {
                            activeSlide: z,
                            width: J,
                            centered: !1,
                            children: [
                                (0, l.jsx)(c.Mi4, {
                                    id: k.fL.EVENT_INFO,
                                    children: (0, l.jsx)(S.Z, {
                                        guildEvent: R,
                                        guild: D,
                                        channel: M,
                                        headerId: A,
                                        onClose: v,
                                        onClickInterestedCount: () => ee(k.fL.RSVP_LIST),
                                        containerRef: Q,
                                        recurrenceId: en,
                                        setRecurrenceId: E,
                                    }),
                                }),
                                (0, l.jsx)(c.Mi4, {
                                    id: k.fL.RSVP_LIST,
                                    children: (0, l.jsx)(P.Z, {
                                        guildEvent: R,
                                        recurrenceId: en,
                                        eventUsers: G,
                                        loading: W,
                                        containerHeight: $,
                                        error: q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(O, {
                    guildEvent: R,
                    guild: D,
                    channel: M,
                    onActionTaken: v,
                    recurrenceId: en,
                }),
            ],
        }),
    });
};
