n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(841784),
    s = n(503438),
    l = n(812206),
    c = n(835473),
    u = n(699263),
    d = n(741570),
    f = n(592125),
    p = n(430824),
    _ = n(979651),
    m = n(626135),
    h = n(409057),
    g = n(128277),
    E = n(981631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let { user: t, currentUser: n, activity: b, className: O, onClose: v } = e,
        { voiceGuild: S, voiceChannel: I } = (0, a.cj)([p.Z, _.Z, f.Z], () => {
            var e, n;
            let r = (0, o.Z)(b);
            if (!r && (null == b ? void 0 : b.type) !== E.IIU.HANG_STATUS) return {};
            let i = r
                    ? null == (e = _.Z.getVoiceStateForSession(t.id, null == b ? void 0 : b.session_id))
                        ? void 0
                        : e.channelId
                    : null == (n = _.Z.getVoiceStateForUser(t.id))
                      ? void 0
                      : n.channelId,
                a = f.Z.getChannel(i);
            return {
                voiceGuild: p.Z.getGuild(null == a ? void 0 : a.getGuildId()),
                voiceChannel: a,
            };
        }),
        T = (0, d.E)("UserProfileActivityCardWrapper", I),
        C = (null == b ? void 0 : b.type) === E.IIU.HANG_STATUS && T ? I : null;
    (0, c.q)(null == b ? void 0 : b.application_id);
    let A = (0, a.e7)([l.Z], () =>
        (null == b ? void 0 : b.application_id) != null
            ? l.Z.getApplication(b.application_id)
            : (null == b ? void 0 : b.name) != null
              ? l.Z.getApplicationByName(b.name)
              : null,
    );
    return (i.useEffect(() => {
        (null == b ? void 0 : b.type) === E.IIU.HANG_STATUS &&
            T &&
            m.default.track(
                E.rMx.VIEW_HANG_STATUS,
                y(
                    {
                        source: "UserProfilePopout",
                        other_user_id: t.id,
                    },
                    (0, u.Z)(null == C ? void 0 : C.id),
                ),
            );
    }, [null == b ? void 0 : b.type, T, null == C ? void 0 : C.id, t.id]),
    (null == b ? void 0 : b.type) !== E.IIU.CUSTOM_STATUS && ((null == b ? void 0 : b.type) !== E.IIU.HANG_STATUS || T))
        ? (0, s.Z)(b)
            ? (0, r.jsx)(g.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  className: O,
                  onClose: v,
              })
            : (0, r.jsx)(h.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  application: A,
                  voiceGuild: S,
                  voiceChannel: I,
                  className: O,
                  onClose: v,
              })
        : null;
}
