n.d(t, {
    P: () => N,
    Z: () => R,
});
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(620662),
    s = n(387903),
    l = n(850827),
    c = n(812206),
    u = n(741570),
    d = n(952164),
    f = n(199902),
    _ = n(592125),
    p = n(430824),
    h = n(979651),
    m = n(626135),
    g = n(153066),
    E = n(981631),
    b = n(855364);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e) {
    let { type: t, source: n, activity: i, applicationStream: a, user: o, guildId: s, channelId: c, onAction: u } = e;
    return (0, r.jsx)(l.Z, {
        className: (0, g.l)(b, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: o,
        guildId: s,
        buttonVariant: "primary",
        channelId: c,
        onAction: u,
    });
}
function C(e) {
    var {
            activity: t,
            user: n,
            useStoreStream: l = !0,
            showActions: g = !0,
            hideHeader: b = !1,
            showChannelDetails: y = !1,
        } = e,
        v = T(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
    let S = (0, a.e7)([h.Z, _.Z], () => {
            var e;
            return _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
        }),
        C = (0, u.E)("UserActivityContainer", S),
        N = (0, a.e7)([f.Z], () => (l ? f.Z.getAnyStreamForUser(n.id) : null)),
        R = (null == t ? void 0 : t.type) === E.IIU.HANG_STATUS && C ? S : null,
        P = (0, a.e7)([p.Z, h.Z, _.Z], () => {
            var e, r;
            return (0, o.Z)(t, E.xjy.EMBEDDED)
                ? p.Z.getGuild(
                      null ==
                          (e = _.Z.getChannel(
                              null == (r = h.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id))
                                  ? void 0
                                  : r.channelId,
                          ))
                          ? void 0
                          : e.getGuildId(),
                  )
                : null != R
                  ? p.Z.getGuild(R.getGuildId())
                  : null;
        }),
        w = (0, a.e7)([p.Z], () => (null != N ? p.Z.getGuild(N.guildId) : null)),
        D = (0, a.e7)([c.Z], () => {
            if (null != t)
                if (null != t.application_id) return c.Z.getApplication(t.application_id);
                else return c.Z.getApplicationByName(t.name);
            return null;
        });
    return (i.useEffect(() => {
        (null == t ? void 0 : t.type) === E.IIU.HANG_STATUS &&
            C &&
            m.default.track(E.rMx.VIEW_HANG_STATUS, {
                source: "UserActivity",
                guild_id: null == R ? void 0 : R.guild_id,
                channel_id: null == R ? void 0 : R.id,
            });
    }, [null == t ? void 0 : t.type, C, R]),
    (null == t ? void 0 : t.type) !== E.IIU.HANG_STATUS || C)
        ? (0, r.jsx)(
              s.Z,
              I(O({}, v), {
                  activity: t,
                  user: n,
                  application: D,
                  hideHeader: b,
                  activityGuild: null != P ? P : w,
                  showChannelDetails: y,
                  channel: y ? S : void 0,
                  renderActions: g
                      ? () =>
                            (0, r.jsx)(
                                A,
                                I(O({}, v), {
                                    applicationStream: N,
                                    activity: t,
                                    user: n,
                                }),
                            )
                      : null,
                  onOpenSpotifyTrack: d.aG,
                  onOpenSpotifyArtist: d.d$,
                  onOpenSpotifyAlbum: d.Z5,
              }),
          )
        : null;
}
let N = s.Z.Types,
    R = C;
