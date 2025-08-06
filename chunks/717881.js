n.d(t, {
    P: () => R,
    Z: () => P,
});
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(755721),
    s = n(620662),
    l = n(387903),
    c = n(850827),
    u = n(812206),
    d = n(741570),
    f = n(952164),
    _ = n(199902),
    p = n(592125),
    h = n(430824),
    m = n(979651),
    g = n(626135),
    E = n(153066),
    b = n(981631),
    y = n(66569);
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function N(e) {
    let {
        type: t,
        source: n,
        activity: i,
        applicationStream: o,
        user: s,
        guildId: l,
        channelId: u,
        onAction: d,
        actionColor: f,
    } = e;
    return (0, r.jsx)(c.Z, {
        className: (0, E.l)(y, "actions", t),
        type: t,
        source: n,
        activity: i,
        applicationStream: o,
        user: s,
        guildId: l,
        look: a.zx.Looks.FILLED,
        color: null != f ? f : a.zx.Colors.PRIMARY,
        channelId: u,
        onAction: d,
    });
}
function C(e) {
    var {
            activity: t,
            user: n,
            useStoreStream: a = !0,
            showActions: c = !0,
            hideHeader: E = !1,
            showChannelDetails: y = !1,
        } = e,
        O = S(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
    let I = (0, o.e7)([m.Z, p.Z], () => {
            var e;
            return p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId);
        }),
        A = (0, d.E)("UserActivityContainer", I),
        C = (0, o.e7)([_.Z], () => (a ? _.Z.getAnyStreamForUser(n.id) : null)),
        R = (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS && A ? I : null,
        P = (0, o.e7)([h.Z, m.Z, p.Z], () => {
            var e, r;
            return (0, s.Z)(t, b.xjy.EMBEDDED)
                ? h.Z.getGuild(
                      null ==
                          (e = p.Z.getChannel(
                              null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id))
                                  ? void 0
                                  : r.channelId,
                          ))
                          ? void 0
                          : e.getGuildId(),
                  )
                : null != R
                  ? h.Z.getGuild(R.getGuildId())
                  : null;
        }),
        w = (0, o.e7)([h.Z], () => (null != C ? h.Z.getGuild(C.guildId) : null)),
        D = (0, o.e7)([u.Z], () => {
            if (null != t)
                if (null != t.application_id) return u.Z.getApplication(t.application_id);
                else return u.Z.getApplicationByName(t.name);
            return null;
        });
    return (i.useEffect(() => {
        (null == t ? void 0 : t.type) === b.IIU.HANG_STATUS &&
            A &&
            g.default.track(b.rMx.VIEW_HANG_STATUS, {
                source: "UserProfilePopout",
                guild_id: null == R ? void 0 : R.guild_id,
                channel_id: null == R ? void 0 : R.id,
            });
    }, [null == t ? void 0 : t.type, A, R]),
    (null == t ? void 0 : t.type) !== b.IIU.HANG_STATUS || A)
        ? (0, r.jsx)(
              l.Z,
              T(v({}, O), {
                  activity: t,
                  user: n,
                  application: D,
                  hideHeader: E,
                  activityGuild: null != P ? P : w,
                  showChannelDetails: y,
                  channel: y ? I : void 0,
                  renderActions: c
                      ? () =>
                            (0, r.jsx)(
                                N,
                                T(v({}, O), {
                                    applicationStream: C,
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
let R = l.Z.Types,
    P = C;
