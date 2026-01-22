n.d(t, {
    A: () => w,
    M: () => R,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(833349),
    o = n(153331),
    l = n(592182),
    c = n(587895),
    u = n(806246),
    d = n(890330),
    f = n(172710),
    p = n(616356),
    _ = n(734057),
    h = n(71393),
    m = n(977997),
    g = n(954571),
    E = n(821589),
    b = n(652215),
    y = n(654471);
function O(e, t, n) {
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
function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
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
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function C(e) {
    let { type: t, source: n, activity: i, applicationStream: a, user: s, guildId: o, channelId: c, onAction: u } = e;
    return (0, r.jsx)(l.A, {
        className: (0, E.t)(y, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: s,
        guildId: o,
        buttonVariant: "primary",
        channelId: c,
        onAction: u,
    });
}
function N(e) {
    let {
            activity: t,
            user: n,
            useStoreStream: l = !0,
            showActions: E = !0,
            hideHeader: y = !1,
            showChannelDetails: O = !1,
        } = e,
        v = I(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]),
        T = (0, a.bG)([m.A, _.A], () => {
            var e;
            return _.A.getChannel(null == (e = m.A.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
        }),
        N = (0, d.v)("UserActivityContainer", T),
        R = (0, a.bG)([p.A], () => (l ? p.A.getAnyStreamForUser(n.id) : null)),
        w = (null == t ? void 0 : t.type) === b.$pd.HANG_STATUS && N ? T : null,
        P = (0, a.bG)([h.A, m.A, _.A], () => {
            var e, r;
            return (0, s.A)(t, b.jUm.EMBEDDED)
                ? h.A.getGuild(
                      null ==
                          (e = _.A.getChannel(
                              null == (r = m.A.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id))
                                  ? void 0
                                  : r.channelId,
                          ))
                          ? void 0
                          : e.getGuildId(),
                  )
                : null != w
                  ? h.A.getGuild(w.getGuildId())
                  : null;
        }),
        D = (0, a.bG)([h.A], () => (null != R ? h.A.getGuild(R.guildId) : null)),
        x = (0, a.bG)([c.A], () => {
            if (null != t)
                if (null != t.application_id) return c.A.getApplication(t.application_id);
                else return c.A.getApplicationByName(t.name);
            return null;
        });
    return (i.useEffect(() => {
        (null == t ? void 0 : t.type) === b.$pd.HANG_STATUS &&
            N &&
            g.default.track(
                b.HAw.VIEW_HANG_STATUS,
                A(
                    {
                        source: "UserActivity",
                        other_user_id: n.id,
                    },
                    (0, u.A)(null == w ? void 0 : w.id),
                ),
            );
    }, [null == t ? void 0 : t.type, N, w, n.id]),
    (null == t ? void 0 : t.type) !== b.$pd.HANG_STATUS || N)
        ? (0, r.jsx)(
              o.A,
              S(A({}, v), {
                  activity: t,
                  user: n,
                  application: x,
                  hideHeader: y,
                  activityGuild: null != P ? P : D,
                  showChannelDetails: O,
                  channel: O ? T : void 0,
                  renderActions: E
                      ? () =>
                            (0, r.jsx)(
                                C,
                                S(A({}, v), {
                                    applicationStream: R,
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
}
let R = o.A.Types,
    w = N;
