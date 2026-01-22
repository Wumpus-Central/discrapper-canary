n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(956793),
    s = n(688810),
    o = n(806246),
    l = n(378570),
    c = n(734057),
    u = n(383501),
    d = n(977997),
    f = n(954571),
    p = n(993401),
    _ = n(652215),
    h = n(985018);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
    let { user: t, activity: n, onAction: m, onClose: E } = e,
        { newestAnalyticsLocation: y } = (0, s.Ay)(),
        O = (0, i.bG)([d.A, c.A], () => {
            var e;
            return c.A.getChannel(null == (e = d.A.getVoiceStateForUser(t.id)) ? void 0 : e.channelId);
        }),
        A = (0, i.bG)([u.A], () => u.A.getChannelId() === (null == O ? void 0 : O.id));
    return (null == n ? void 0 : n.type) !== _.$pd.HANG_STATUS || null == O
        ? null
        : (0, r.jsx)(p.FD, {
              text: A ? h.intl.string(h.t.BXxdl7) : h.intl.string(h.t["9C444m"]),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(),
                      null == m || m({ action: "PRESS_HANG_STATUS_BUTTON" }),
                      a.default.selectVoiceChannel(O.id),
                      (0, l.iN)(O.id),
                      f.default.track(
                          _.HAw.HANG_STATUS_CTA_CLICKED,
                          b(g({}, (0, o.A)(O.id)), {
                              source: y,
                              other_user_id: t.id,
                              cta_type: A ? "open" : "join",
                          }),
                      ),
                      null == E || E();
              },
          });
}
