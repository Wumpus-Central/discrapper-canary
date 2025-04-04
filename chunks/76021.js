n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(872810),
    a = n(451467),
    s = n(592125),
    l = n(430824),
    c = n(131951),
    u = n(594174),
    d = n(358085),
    f = n(37113);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t, _) {
    if (d.isPlatformEmbedded)
        (0, i.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('46746'), n.e('24184')]).then(n.bind(n, 60594));
            return (n) =>
                (0, r.jsx)(
                    t,
                    m(p({}, n), {
                        guildId: e,
                        analyticsLocation: _
                    })
                );
        });
    else {
        var h;
        let n = s.Z.getChannel(t),
            r = (0, a.Z)(f.tI.PRESET_CUSTOM, f.LY.RESOLUTION_1080, f.ws.FPS_30, u.default.getCurrentUser(), null == (h = l.Z.getGuild(e)) ? void 0 : h.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        c.Z.getMediaEngine()
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
