n.d(t, {
    P: () => P,
    Z: () => R,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(620662),
    s = n(942596),
    l = n(850827),
    c = n(812206),
    u = n(699263),
    d = n(741570),
    f = n(952164),
    p = n(199902),
    _ = n(592125),
    m = n(430824),
    h = n(979651),
    g = n(626135),
    E = n(153066),
    b = n(981631),
    y = n(855364);
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
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
        className: (0, E.l)(y, "actions", t),
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
function N(e) {
    var {
            activity: t,
            user: n,
            useStoreStream: l = !0,
            showActions: E = !0,
            hideHeader: y = !1,
            showChannelDetails: O = !1,
        } = e,
        S = T(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
    let C = (0, a.e7)([h.Z, _.Z], () => {
            var e;
            return _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
        }),
        N = (0, d.E)("UserActivityContainer", C),
        P = (0, a.e7)([p.Z], () => (l ? p.Z.getAnyStreamForUser(n.id) : null)),
        R = (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS && N ? C : null,
        D = (0, a.e7)([m.Z, h.Z, _.Z], () => {
            var e, r;
            return (0, o.Z)(t, b.xjy.EMBEDDED)
                ? m.Z.getGuild(
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
                  ? m.Z.getGuild(R.getGuildId())
                  : null;
        }),
        w = (0, a.e7)([m.Z], () => (null != P ? m.Z.getGuild(P.guildId) : null)),
        x = (0, a.e7)([c.Z], () => {
            if (null != t)
                if (null != t.application_id) return c.Z.getApplication(t.application_id);
                else return c.Z.getApplicationByName(t.name);
            return null;
        });
    return (i.useEffect(() => {
        (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS &&
            N &&
            g.default.track(
                b.rMx.VIEW_HANG_STATUS,
                v(
                    {
                        source: "UserActivity",
                        other_user_id: n.id,
                    },
                    (0, u.Z)(null == R ? void 0 : R.id),
                ),
            );
    }, [null == t ? void 0 : t.type, N, R, n.id]),
    (null == t ? void 0 : t.type) !== b.IIU.HANG_STATUS || N)
        ? (0, r.jsx)(
              s.Z,
              I(v({}, S), {
                  activity: t,
                  user: n,
                  application: x,
                  hideHeader: y,
                  activityGuild: null != D ? D : w,
                  showChannelDetails: O,
                  channel: O ? C : void 0,
                  renderActions: E
                      ? () =>
                            (0, r.jsx)(
                                A,
                                I(v({}, S), {
                                    applicationStream: P,
                                    activity: t,
                                    user: n,
                                }),
                            )
                      : null,
                  onOpenSpotifyTrack: f.aG,
                  onOpenSpotifyArtist: f.d$,
                  onOpenSpotifyAlbum: f.Z5,
              }),
          )
        : null;
}
let P = s.Z.Types,
    R = N;
