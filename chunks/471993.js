n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(401843),
    s = n(874124),
    o = n(734057),
    l = n(71393),
    c = n(430452),
    u = n(287809),
    d = n(723702),
    f = n(753070);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
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
function g(e, t, p) {
    if (d.isPlatformEmbedded)
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("96811"), n.e("14476")]).then(n.bind(n, 648230));
            return (t) => (0, r.jsx)(e, m(_({}, t), { analyticsLocations: p }));
        });
    else {
        var h;
        let n = o.A.getChannel(t),
            r = (0, s.A)(
                f.jQ.PRESET_CUSTOM,
                f.on.RESOLUTION_1080,
                f.kn.FPS_30,
                u.default.getCurrentUser(),
                null == (h = l.A.getGuild(e)) ? void 0 : h.premiumTier,
                n,
            )
                ? {
                      width: 1920,
                      height: 1080,
                  }
                : {
                      width: 1280,
                      height: 720,
                  };
        (0, a.Xd)({
            preset: f.jQ.PRESET_CUSTOM,
            resolution: r.height,
            frameRate: f.kn.FPS_30,
            soundshareEnabled: !0,
        }),
            c.A.getMediaEngine()
                .getDesktopSource(r, !0)
                .then((n) => {
                    (0, a.XI)(e, t, {
                        pid: null,
                        sourceId: n,
                        sourceName: null,
                        analyticsLocations: p,
                    });
                });
    }
}
