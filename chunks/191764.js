n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(287734),
    o = n(906732),
    s = n(699263),
    l = n(359110),
    c = n(592125),
    u = n(19780),
    d = n(979651),
    f = n(626135),
    p = n(475413),
    _ = n(981631),
    m = n(388032);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { user: t, activity: n, onAction: h, onClose: E } = e,
        { newestAnalyticsLocation: y } = (0, o.ZP)(),
        O = (0, i.e7)([d.Z, c.Z], () => {
            var e;
            return c.Z.getChannel(null == (e = d.Z.getVoiceStateForUser(t.id)) ? void 0 : e.channelId);
        }),
        v = (0, i.e7)([u.Z], () => u.Z.getChannelId() === (null == O ? void 0 : O.id));
    return (null == n ? void 0 : n.type) !== _.IIU.HANG_STATUS || null == O
        ? null
        : (0, r.jsx)(p.i6, {
              text: v ? m.intl.string(m.t.BXxdl7) : m.intl.string(m.t["9C444m"]),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(),
                      null == h || h({ action: "PRESS_HANG_STATUS_BUTTON" }),
                      a.default.selectVoiceChannel(O.id),
                      (0, l.Kh)(O.id),
                      f.default.track(
                          _.rMx.HANG_STATUS_CTA_CLICKED,
                          b(g({}, (0, s.Z)(O.id)), {
                              source: y,
                              other_user_id: t.id,
                              cta_type: v ? "open" : "join",
                          }),
                      ),
                      null == E || E();
              },
          });
}
