n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(872810),
    a = n(451467),
    s = n(174609),
    l = n(928518),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(594174),
    p = n(358085),
    _ = n(981631),
    h = n(37113);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v(e, t) {
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
function b(e, t, m) {
    let E = l.Z.getWindowOpen(_.KJ3.CHANNEL_CALL_POPOUT) ? _.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, s.Z)(E), p.isPlatformEmbedded))
        (0, i.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('93382'), n.e('79477'), n.e('42225')]).then(n.bind(n, 60594));
            return (n) =>
                (0, r.jsx)(
                    t,
                    v(g({}, n), {
                        guildId: e,
                        analyticsLocation: m
                    })
                );
        });
    else {
        var b;
        let n = c.Z.getChannel(t),
            r = (0, a.Z)(h.tI.PRESET_CUSTOM, h.LY.RESOLUTION_1080, h.ws.FPS_30, f.default.getCurrentUser(), null === (b = u.Z.getGuild(e)) || void 0 === b ? void 0 : b.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        d.Z.getMediaEngine()
            .getDesktopSource(r, !0)
            .then((n) => {
                (0, o.WH)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                });
            });
    }
}
