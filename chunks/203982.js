n.d(t, {
    H: () => i.H,
    _: () => c,
}),
    n(896048);
var r = n(423034),
    i = n(769991),
    a = n(626584),
    s = n(652215);

function o(e, t, n) {
    var i;
    let a = null != (i = Object.values(s.zOV).find((t) => e.startsWith(t))) ? i : e;
    r.HF({
        type: "ComponentDispatch",
        description: a,
        data: {
            actionData: t,
            fullActionName: e,
        },
        durationMs: n,
    });
}
let l = new a.A("ComponentDispatchUtils"),
    c = new i.H({
        maxListeners: 100,
        enableDevtools: !1,
        logger: {
            warn: function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return l.warn(e, ...n);
            },
        },
        devtoolsReporter: o,
    });
