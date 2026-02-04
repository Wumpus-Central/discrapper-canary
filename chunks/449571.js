n.d(t, {
    A: () => Y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
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
    y = n(272812),
    b = n(461782),
    O = n(334463),
    v = n(309010),
    A = n(287809),
    I = n(795816),
    S = n(933958),
    T = n(851907),
    C = n(838274),
    N = n(536246),
    w = n(108959),
    R = n(398866),
    P = n(56129),
    D = n(360469),
    L = n(5867),
    x = n(652215),
    M = n(806931),
    j = n(463967),
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

function F(e) {
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

function V(e, t) {
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
        F = (0, s.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
        V = null == F ? void 0 : F.applicationId,
        B = (0, s.bG)([S.Ay], () => null != V && S.Ay.isProxyTicketRefreshing(V), [V]),
        H = (0, s.bG)([S.Ay], () => S.Ay.getActivityPanelMode()),
        Y = (0, h.h)(V),
        W = null == F ? void 0 : F.launchId,
        K = (0, s.bG)([v.A], () => v.A.getChannelId() === (null == p ? void 0 : p.id)),
        { dockedRect: z, isHidden: q } = (0, s.cf)([O.A], () => {
            let e = O.A.pipWindow;
            return {
                dockedRect: null != e ? O.A.getDockedRect(e.id) : null,
                isHidden: O.A.isEmbeddedActivityHidden(),
            };
        }),
        Z = (0, T.xi)({
            channelId: null == p ? void 0 : p.id,
        }),
        {
            activityParticipant: Q,
            selectedParticipant: X,
            participantsOpen: J,
        } = (0, s.cf)([g.A], () => ({
            activityParticipant:
                null != F && null != p
                    ? g.A.getParticipant(
                          p.id,
                          (0, m.Qt)({
                              applicationId: F.applicationId,
                              instanceId: F.compositeInstanceId,
                          }),
                      )
                    : null,
            selectedParticipant: null != p ? g.A.getSelectedParticipant(p.id) : null,
            participantsOpen: null != p && g.A.getParticipantsOpen(p.id),
        })),
        $ = K || null != Z,
        ee = (0, w.A)(null == p ? void 0 : p.id),
        et = ee && (null == X ? void 0 : X.type) !== M.lp.ACTIVITY,
        en = !ee && H === L.Gd.PIP,
        er = $ && (et || en) && null == z,
        ei = (!$ || er) && !q,
        ea = ei && null != O.A.pipVideoWindow && null != O.A.pipActivityWindow;

    function eo() {
        if (null != p) {
            var e;
            null != F &&
                u.A.selectParticipant(
                    p.id,
                    (0, m.Qt)({
                        applicationId: F.applicationId,
                        instanceId: F.compositeInstanceId,
                    }),
                );
            let t = null != (e = p.getGuildId()) ? e : x.ME;
            d.A.channelListScrollTo(t, p.id), (0, E.uh)(t, p.id);
        }
        null == Z && (0, f.bz)();
    }

    function es() {
        G(!C);
    }

    function el(e) {
        var t;
        let { onActive: n, onForceIdle: i, idle: a, isActivityInTextChannel: o, users: s } = e;
        return ei && null != F && ((null == Q ? void 0 : Q.type) === M.lp.ACTIVITY || o)
            ? (null == (t = F.config) ? void 0 : t.useInteractivePIP)
                ? (0, r.jsx)(P.tM, {
                      onJumpToChannel: eo,
                      applicationId: F.applicationId,
                      channel: p,
                      showControls: !a,
                      onMouseDown: n,
                      onMouseMove: n,
                      onMouseLeave: i,
                      onToggleHeight: es,
                      isExpanded: C,
                      hideExpandedButton: o,
                      embeddedActivity: F,
                  })
                : o
                  ? (0, r.jsx)(P.Mp, {
                        idle: a,
                        onMouseMove: n,
                        onMouseDown: n,
                        onMouseLeave: i,
                        onJumpToChannel: () => {
                            eo(), (0, I.gk)(L.Gd.PANEL);
                        },
                        channel: p,
                        applicationId: F.applicationId,
                        users: s,
                        embeddedActivity: F,
                    })
                  : null == Q
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  className: j.OB,
                                  onDoubleClick: eo,
                              }),
                              (0, r.jsx)(P.gE, {
                                  idle: a,
                                  onMouseMove: n,
                                  onMouseDown: n,
                                  onMouseLeave: i,
                                  onJumpToChannel: eo,
                                  channel: p,
                                  applicationId: F.applicationId,
                                  selectedParticipant: Q,
                                  embeddedActivity: F,
                              }),
                          ],
                      })
            : null;
    }
    if (
        (i.useEffect(() => {
            if (null != V) {
                let e = ei ? D.bN.PIP : D.bN.FOCUSED;
                c.h.dispatch({
                    type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                    layoutMode: e,
                    applicationId: V,
                });
            }
        }, [V, ei]),
        null == F || null == W || ((0, w.A)(null == p ? void 0 : p.id) && null == Q) || null == Y)
    )
        return null;
    let ec = Array.from(F.userIds)
            .map((e) => A.default.getUser(e))
            .filter((e) => null != e),
        eu = {
            instance_id: null != (t = null != (n = F.compositeInstanceId) ? n : F.launchId) ? t : "",
            location_id: null == (a = F.location) ? void 0 : a.id,
            launch_id: F.launchId,
            referrer_id: F.referrerId,
            custom_id: F.customId,
        };
    return (
        null != F.proxyTicket && (eu.discord_proxy_ticket = F.proxyTicket),
        (null == p ? void 0 : p.guild_id) != null &&
            (null == p ? void 0 : p.guild_id) !== "" &&
            (eu.guild_id = p.guild_id),
        (null == p ? void 0 : p.id) != null && (null == p ? void 0 : p.id) !== "" && (eu.channel_id = p.id),
        (0, r.jsx)(b.Ay, {
            timeout: 2e3,
            children: (e) => {
                var t, n;
                let { idle: i, onActive: a, onForceIdle: s } = e;
                return (0, r.jsxs)(y.A, {
                    className: o()(j.zr, {
                        [j.NW]: ei,
                        [U.a8]: ei,
                        [k.N7]: i && !(null == (t = F.config) ? void 0 : t.useInteractivePIP),
                        [j.p0]: ei && !C,
                        [j.ST]: ei && C,
                        [j.R]: q,
                        [j.Gq]: ea,
                    }),
                    noBorder: !ei,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: el({
                                onActive: a,
                                onForceIdle: s,
                                idle: i,
                                isActivityInTextChannel: en,
                                users: ec,
                            }),
                        }),
                        _ || B
                            ? (0, r.jsx)(l.y$y, {
                                  className: o()(j.pU, {
                                      [j.p0]: ei && !C,
                                      [j.ST]: ei && C,
                                  }),
                              })
                            : (0, r.jsx)(R.o, {
                                  allowPopups: (0, N.b)(Y),
                                  referrerPolicy: "origin",
                                  url: F.url,
                                  queryParams: eu,
                                  className: o()(j.pU, {
                                      [j.p0]: ei && !C,
                                      [j.ST]: ei && C,
                                      [j.v8]: ei && !(null == (n = F.config) ? void 0 : n.useInteractivePIP),
                                  }),
                                  shouldRefocus: !ei && K,
                              }),
                        !ei &&
                            null != p &&
                            (0, r.jsx)(P.ll, {
                                participantsOpen: J,
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
        n = V(e, ["channel"]),
        i = S.Ay.getCurrentEmbeddedActivity();
    (0, C.A)({
        connectedEmbeddedActivity: i,
    });
    let { analyticsLocations: a } = (0, _.Ay)(p.A.ACTIVITY_PIP),
        o = null == i;
    return (0, r.jsx)(_.f5, {
        value: a,
        children: (0, r.jsx)(
            H,
            F(
                {
                    channel: t,
                    isLoading: o,
                },
                n,
            ),
        ),
    });
};
