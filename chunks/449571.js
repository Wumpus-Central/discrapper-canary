n.d(t, { A: () => Y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(367513),
    d = n(951001),
    f = n(398590),
    p = n(793574),
    _ = n(688810),
    h = n(429913),
    m = n(568598),
    g = n(313961),
    E = n(976860),
    b = n(272812),
    y = n(461782),
    O = n(334463),
    A = n(309010),
    v = n(287809),
    S = n(795816),
    I = n(933958),
    T = n(851907),
    C = n(838274),
    N = n(536246),
    R = n(108959),
    w = n(398866),
    P = n(56129),
    D = n(360469),
    x = n(5867),
    L = n(652215),
    j = n(806931),
    M = n(463967),
    k = n(319567),
    U = n(976092);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = B(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function H(e) {
    var t, n, a;
    let { channel: p, isLoading: _ } = e,
        [C, G] = i.useState(!1),
        V = (0, o.bG)([I.Ay], () => I.Ay.getCurrentEmbeddedActivity()),
        F = null == V ? void 0 : V.applicationId,
        B = (0, o.bG)([I.Ay], () => null != F && I.Ay.isProxyTicketRefreshing(F), [F]),
        H = (0, o.bG)([I.Ay], () => I.Ay.getActivityPanelMode()),
        Y = (0, h.h)(F),
        W = null == V ? void 0 : V.launchId,
        K = (0, o.bG)([A.A], () => A.A.getChannelId() === (null == p ? void 0 : p.id)),
        { dockedRect: z, isHidden: q } = (0, o.cf)([O.A], () => {
            let e = O.A.pipWindow;
            return {
                dockedRect: null != e ? O.A.getDockedRect(e.id) : null,
                isHidden: O.A.isEmbeddedActivityHidden(),
            };
        }),
        X = (0, T.xi)({ channelId: null == p ? void 0 : p.id }),
        {
            activityParticipant: Z,
            selectedParticipant: Q,
            participantsOpen: $,
        } = (0, o.cf)([g.A], () => ({
            activityParticipant:
                null != V && null != p
                    ? g.A.getParticipant(
                          p.id,
                          (0, m.Qt)({
                              applicationId: V.applicationId,
                              instanceId: V.compositeInstanceId,
                          }),
                      )
                    : null,
            selectedParticipant: null != p ? g.A.getSelectedParticipant(p.id) : null,
            participantsOpen: null != p && g.A.getParticipantsOpen(p.id),
        })),
        J = K || null != X,
        ee = (0, R.A)(null == p ? void 0 : p.id),
        et = ee && (null == Q ? void 0 : Q.type) !== j.lp.ACTIVITY,
        en = !ee && H === x.Gd.PIP,
        er = J && (et || en) && null == z,
        ei = (!J || er) && !q,
        ea = ei && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;
    function es() {
        if (null != p) {
            var e;
            null != V &&
                u.A.selectParticipant(
                    p.id,
                    (0, m.Qt)({
                        applicationId: V.applicationId,
                        instanceId: V.compositeInstanceId,
                    }),
                );
            let t = null != (e = p.getGuildId()) ? e : L.ME;
            d.A.channelListScrollTo(t, p.id), (0, E.uh)(t, p.id);
        }
        null == X && (0, f.bz)();
    }
    function eo() {
        G(!C);
    }
    function el(e) {
        var t;
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: s, users: o } = e;
        return ei && null != V && ((null == Z ? void 0 : Z.type) === j.lp.ACTIVITY || s)
            ? (null == (t = V.config) ? void 0 : t.useInteractivePIP)
                ? (0, r.jsx)(P.tM, {
                      onJumpToChannel: es,
                      applicationId: V.applicationId,
                      channel: p,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: eo,
                      isExpanded: C,
                      hideExpandedButton: s,
                      embeddedActivity: V,
                  })
                : s
                  ? (0, r.jsx)(P.Mp, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            es(), (0, S.gk)(x.Gd.PANEL);
                        },
                        channel: p,
                        applicationId: V.applicationId,
                        users: o,
                        embeddedActivity: V,
                    })
                  : null == Z
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: M.OB,
                                  onDoubleClick: es,
                              }),
                              (0, r.jsx)(P.gE, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: es,
                                  channel: p,
                                  applicationId: V.applicationId,
                                  selectedParticipant: Z,
                                  embeddedActivity: V,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != F) {
                let e = ei ? D.bN.PIP : D.bN.FOCUSED;
                c.h.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: F,
                });
            }
        }, [F, ei]),
        null == V || null == W || ((0, R.A)(null == p ? void 0 : p.id) && null == Z) || null == Y)
    )
        return null;
    let ec = Array.from(V.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e),
        eu = {
            instance_id: null != (t = null != (n = V.compositeInstanceId) ? n : V.launchId) ? t : "",
            location_id: null == (a = V.location) ? void 0 : a.id,
            launch_id: V.launchId,
            referrer_id: V.referrerId,
            custom_id: V.customId,
        };
    return (
        null != V.proxyTicket && (eu.discord_proxy_ticket = V.proxyTicket),
        (null == p ? void 0 : p.guild_id) != null &&
            (null == p ? void 0 : p.guild_id) !== "" &&
            (eu.guild_id = p.guild_id),
        (null == p ? void 0 : p.id) != null && (null == p ? void 0 : p.id) !== "" && (eu.channel_id = p.id),
        (0, r.jsx)(y.Ay, {
            timeout: 2000,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: a, onForceIdle: o } = e;
                return (0, r.jsxs)(b.A, {
                    className: s()(M.zr, {
                        [M.NW]: ei,
                        [U.a8]: ei,
                        [k.N7]: i && !(null == (t = V.config) ? void 0 : t.useInteractivePIP),
                        [M.p0]: ei && !C,
                        [M.ST]: ei && C,
                        [M.R]: q,
                        [M.Gq]: ea,
                    }),
                    noBorder: !ei,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: el({
                                onActive: a,
                                onForceIdle: o,
                                idle: i,
                                isActivityInTextChannel: en,
                                users: ec,
                            }),
                        }),
                        _ || B
                            ? (0, r.jsx)(l.y$y, {
                                  className: s()(M.pU, {
                                      [M.p0]: ei && !C,
                                      [M.ST]: ei && C,
                                  }),
                              })
                            : (0, r.jsx)(w.o, {
                                  allowPopups: (0, N.b)(Y),
                                  referrerPolicy: D.$J.has(V.applicationId) ? "no-referrer" : "origin",
                                  url: V.url,
                                  queryParams: eu,
                                  className: s()(M.pU, {
                                      [M.p0]: ei && !C,
                                      [M.ST]: ei && C,
                                      [M.v8]: ei && !(null == (n = V.config) ? void 0 : n.useInteractivePIP),
                                  }),
                                  shouldRefocus: !ei && K,
                              }),
                        !ei &&
                            null != p &&
                            (0, r.jsx)(P.ll, {
                                participantsOpen: $,
                                showToggleParticipants: !1,
                                channelId: p.id,
                            }),
                    ],
                });
            },
        })
    );
}
let Y = (e) => {
    let { channel: t } = e,
        n = F(e, ["channel"]),
        i = I.Ay.getCurrentEmbeddedActivity();
    (0, C.A)({ connectedEmbeddedActivity: i });
    let { analyticsLocations: a } = (0, _.Ay)(p.A.ACTIVITY_PIP),
        s = null == i;
    return (0, r.jsx)(_.f5, {
        value: a,
        children: (0, r.jsx)(
            H,
            V(
                {
                    channel: t,
                    isLoading: s,
                },
                n,
            ),
        ),
    });
};
