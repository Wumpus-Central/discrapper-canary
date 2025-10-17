n.d(t, {
    S: () => c,
    b: () => i.b,
}),
    n(388685);
var r = n(17089),
    i = n(330477),
    a = n(710845),
    o = n(981631);
function s(e, t, n) {
    var i;
    let a = null != (i = Object.values(o.LPv).find((t) => e.startsWith(t))) ? i : e;
    r.LN({
        type: "ComponentDispatch",
        description: a,
        data: {
            actionData: t,
            fullActionName: e,
        },
        durationMs: n,
    });
}
let l = new a.Z("ComponentDispatchUtils"),
    c = new i.b({
        maxListeners: 100,
        enableDevtools: !1,
        logger: {
            warn: function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return l.warn(e, ...n);
            },
        },
        devtoolsReporter: s,
    });
