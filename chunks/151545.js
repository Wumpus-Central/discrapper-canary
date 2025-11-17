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
    _ = n(430824),
    p = n(979651),
    h = n(626135),
    m = n(409057),
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
        { voiceGuild: I, voiceChannel: T } = (0, a.cj)([_.Z, p.Z, f.Z], () => {
            var e, n;
            let r = (0, o.Z)(b);
            if (!r && (null == b ? void 0 : b.type) !== E.IIU.HANG_STATUS) return {};
            let i = r
                    ? null == (e = p.Z.getVoiceStateForSession(t.id, null == b ? void 0 : b.session_id))
                        ? void 0
                        : e.channelId
                    : null == (n = p.Z.getVoiceStateForUser(t.id))
                      ? void 0
                      : n.channelId,
                a = f.Z.getChannel(i);
            return {
                voiceGuild: _.Z.getGuild(null == a ? void 0 : a.getGuildId()),
                voiceChannel: a,
            };
        }),
        S = (0, d.E)("UserProfileActivityCardWrapper", T),
        A = (null == b ? void 0 : b.type) === E.IIU.HANG_STATUS && S ? T : null;
    (0, c.q)(null == b ? void 0 : b.application_id);
    let C = (0, a.e7)([l.Z], () =>
        (null == b ? void 0 : b.application_id) != null
            ? l.Z.getApplication(b.application_id)
            : (null == b ? void 0 : b.name) != null
              ? l.Z.getApplicationByName(b.name)
              : null,
    );
    return (i.useEffect(() => {
        (null == b ? void 0 : b.type) === E.IIU.HANG_STATUS &&
            S &&
            h.default.track(
                E.rMx.VIEW_HANG_STATUS,
                y(
                    {
                        source: "UserProfilePopout",
                        other_user_id: t.id,
                    },
                    (0, u.Z)(null == A ? void 0 : A.id),
                ),
            );
    }, [null == b ? void 0 : b.type, S, null == A ? void 0 : A.id, t.id]),
    (null == b ? void 0 : b.type) !== E.IIU.CUSTOM_STATUS && ((null == b ? void 0 : b.type) !== E.IIU.HANG_STATUS || S))
        ? (0, s.Z)(b)
            ? (0, r.jsx)(g.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  className: O,
                  onClose: v,
              })
            : (0, r.jsx)(m.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  application: C,
                  voiceGuild: I,
                  voiceChannel: T,
                  className: O,
                  onClose: v,
              })
        : null;
}
