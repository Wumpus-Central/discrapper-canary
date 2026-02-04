n.d(t, {
    A: () => I,
    M: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(833349),
    o = n(153331),
    s = n(592182),
    c = n(587895),
    u = n(806246),
    d = n(890330),
    f = n(172710),
    p = n(616356),
    m = n(734057),
    g = n(71393),
    y = n(977997),
    b = n(954571),
    h = n(821589),
    A = n(652215),
    _ = n(654471);

function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e) {
    let { type: t, source: n, activity: i, applicationStream: l, user: a, guildId: o, channelId: c, onAction: u } = e;
    return (0, r.jsx)(s.A, {
        className: (0, h.t)(_, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: l,
        user: a,
        guildId: o,
        buttonVariant: "primary",
        channelId: c,
        onAction: u,
    });
}
let j = o.A.Types,
    I = function (e) {
        let {
                activity: t,
                user: n,
                useStoreStream: s = !0,
                showActions: h = !0,
                hideHeader: _ = !1,
                showChannelDetails: j = !1,
            } = e,
            I = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]),
            x = (0, l.bG)([y.A, m.A], () => {
                var e;
                return m.A.getChannel(null == (e = y.A.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
            }),
            E = (0, d.v)("UserActivityContainer", x),
            P = (0, l.bG)([p.A], () => (s ? p.A.getAnyStreamForUser(n.id) : null)),
            C = (null == t ? void 0 : t.type) === A.$pd.HANG_STATUS && E ? x : null,
            T = (0, l.bG)([g.A, y.A, m.A], () => {
                var e, r;
                return (0, a.A)(t, A.jUm.EMBEDDED)
                    ? g.A.getGuild(
                          null ==
                              (e = m.A.getChannel(
                                  null == (r = y.A.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id))
                                      ? void 0
                                      : r.channelId,
                              ))
                              ? void 0
                              : e.getGuildId(),
                      )
                    : null != C
                      ? g.A.getGuild(C.getGuildId())
                      : null;
            }),
            N = (0, l.bG)([g.A], () => (null != P ? g.A.getGuild(P.guildId) : null)),
            w = (0, l.bG)([c.A], () => {
                if (null != t)
                    if (null != t.application_id) return c.A.getApplication(t.application_id);
                    else return c.A.getApplicationByName(t.name);
                return null;
            });
        return (i.useEffect(() => {
            (null == t ? void 0 : t.type) === A.$pd.HANG_STATUS &&
                E &&
                b.default.track(
                    A.HAw.VIEW_HANG_STATUS,
                    v(
                        {
                            source: "UserActivity",
                            other_user_id: n.id,
                        },
                        (0, u.A)(null == C ? void 0 : C.id),
                    ),
                );
        }, [null == t ? void 0 : t.type, E, C, n.id]),
        (null == t ? void 0 : t.type) !== A.$pd.HANG_STATUS || E)
            ? (0, r.jsx)(
                  o.A,
                  O(v({}, I), {
                      activity: t,
                      user: n,
                      application: w,
                      hideHeader: _,
                      activityGuild: null != T ? T : N,
                      showChannelDetails: j,
                      channel: j ? x : void 0,
                      enableUserHoverActivities: I.enableUserHoverActivities,
                      renderActions: h
                          ? () =>
                                (0, r.jsx)(
                                    S,
                                    O(v({}, I), {
                                        applicationStream: P,
                                        activity: t,
                                        user: n,
                                    }),
                                )
                          : null,
                      onOpenSpotifyTrack: f.Mp,
                      onOpenSpotifyArtist: f.mN,
                      onOpenSpotifyAlbum: f.QX,
                  }),
              )
            : null;
    };
