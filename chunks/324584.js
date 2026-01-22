n.d(t, { default: () => R }), n(896048);
var l = n(627968),
    r = n(64700),
    s = n(158954),
    i = n(311907),
    a = n(397927),
    c = n(442433),
    d = n(793574),
    u = n(688810),
    o = n(915089),
    f = n(857071),
    b = n(734057),
    x = n(71393),
    h = n(954571),
    g = n(645034),
    j = n(285059),
    v = n(698441),
    m = n(485394),
    _ = n(826383),
    p = n(163382),
    y = n(530209),
    A = n(974930),
    N = n(691012),
    O = n(428978),
    k = n(850183),
    I = n(315960),
    S = n(659242),
    C = n(834991),
    E = n(482857),
    w = n(988794),
    P = n(652215),
    T = n(5818);
function D(e) {
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
}
function L(e) {
    let { guildEvent: t, guild: n, channel: r, onActionTaken: a, recurrenceId: c } = e,
        d = (0, v.Fd)(t),
        u = (0, i.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(t.id, c), [c, t]),
        o = (0, m.Ay)(t),
        b = (0, i.bG)([f.A], () => f.A.isLurking(n.id), [n.id]),
        x = (0, y.e)(null == r ? void 0 : r.id, t.id),
        h = (0, E.A)({
            guild: n,
            channel: r,
            guildScheduledEvent: t,
            isActive: d,
            recurrenceId: c,
            onActionTaken: a,
        }),
        g = (0, O.Zq)(
            D(
                {
                    isActive: d,
                    isUserLurking: b,
                    rsvped: u,
                    isChannelPublic: x,
                    canInvite: o,
                    entityType: t.entity_type,
                },
                h,
            ),
        ),
        j =
            null != h.onContextMenu
                ? (0, l.jsx)("div", {
                      className: T.Zv,
                      children: (0, l.jsx)(O.jD, { onClick: h.onContextMenu }),
                  })
                : void 0;
    return (0, l.jsx)(s.H7u, {
        leading: j,
        actions: g,
    });
}
let R = (e) => {
    let { guildScheduledEventId: t, transitionState: f, initialRecurrenceId: m, onClose: y } = e,
        { analyticsLocations: O } = (0, u.Ay)(d.A.GUILD_EVENT_MODAL),
        [E, R] = r.useState(m),
        U = (0, i.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(t), [t]),
        G = null == U ? void 0 : U.id,
        M = null == U ? void 0 : U.guild_id,
        F = (0, i.bG)([x.A], () => x.A.getGuild(M), [M]),
        K = null == U ? void 0 : U.channel_id,
        V = (0, i.bG)([b.A], () => b.A.getChannel(K), [K]),
        H = (0, o.GV)(),
        [z, Q] = r.useState(w.al.EVENT_INFO),
        Y = (0, p.A)(G, E),
        X = null != U ? (0, N.A)(U) : null,
        $ = r.useCallback(
            (e) => {
                null != X &&
                    (0, c.L3)(e, async () => {
                        let { default: e } = await n.e("31658").then(n.bind(n, 151006));
                        return (t) => {
                            var n, r;
                            return (0, l.jsx)(
                                e,
                                ((n = D({}, t)),
                                (r = r = { imageUrl: X }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                      }),
                                n),
                            );
                        };
                    });
            },
            [X],
        ),
        q = (0, _.A)(M, G, E),
        [Z, { loading: B, error: J }] = (0, g.A)(() => j.A.getGuildEventUsers(null == U ? void 0 : U.id, E, M));
    r.useEffect(() => {
        null == U
            ? y()
            : h.default.track(P.HAw.OPEN_MODAL, {
                  type: w.BV,
                  guild_id: U.guild_id,
              });
    }, [U, y]);
    let W = r.useRef(null),
        [ee, et] = r.useState(680);
    r.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && et(e[0].contentRect.width);
        });
        return null != W.current && e.observe(W.current), () => e.disconnect();
    }, [W]);
    let en = r.useRef(null),
        [el, er] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            var e, t;
            let n = 16 * ((null == U ? void 0 : U.recurrence_rule) != null);
            er((null != (e = null == en || null == (t = en.current) ? void 0 : t.offsetHeight) ? e : 0) + n);
        }, [en, null == U ? void 0 : U.recurrence_rule]),
        null == U || null == F)
    )
        return null;
    let es = (e) => {
            e !== z && (e === w.al.RSVP_LIST && Z(), Q(e));
        },
        ei = null != E ? E : (0, A.G3)(U);
    return (0, l.jsx)(u.f5, {
        value: O,
        children: (0, l.jsxs)(s.dWK, {
            transitionState: f,
            size: "lg",
            onClose: y,
            children: [
                (0, l.jsx)(s.rQ0, { title: U.name }),
                (null == U ? void 0 : U.image) != null &&
                    null != X &&
                    (0, l.jsx)("div", {
                        onContextMenu: $,
                        children: (0, l.jsx)(k.A, {
                            source: X,
                            className: T.vK,
                        }),
                    }),
                (0, l.jsx)(s.cwr, {
                    controls: (0, l.jsx)(I.A, {
                        selectedTab: z,
                        onTabSelected: es,
                        userCount: q,
                    }),
                    children: (0, l.jsx)("div", {
                        className: T.kL,
                        ref: W,
                        children: (0, l.jsxs)(a.tN_, {
                            activeSlide: z,
                            width: ee,
                            centered: !1,
                            children: [
                                (0, l.jsx)(a.q7S, {
                                    id: w.al.EVENT_INFO,
                                    children: (0, l.jsx)(S.A, {
                                        guildEvent: U,
                                        guild: F,
                                        channel: V,
                                        headerId: H,
                                        onClose: y,
                                        onClickInterestedCount: () => es(w.al.RSVP_LIST),
                                        containerRef: en,
                                        recurrenceId: ei,
                                        setRecurrenceId: R,
                                    }),
                                }),
                                (0, l.jsx)(a.q7S, {
                                    id: w.al.RSVP_LIST,
                                    children: (0, l.jsx)(C.A, {
                                        guildEvent: U,
                                        recurrenceId: ei,
                                        eventUsers: Y,
                                        loading: B,
                                        containerHeight: el,
                                        error: J,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(L, {
                    guildEvent: U,
                    guild: F,
                    channel: V,
                    onActionTaken: y,
                    recurrenceId: ei,
                }),
            ],
        }),
    });
};
