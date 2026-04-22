"use strict";
n.d(t, { H: () => i.H, _: () => l });
var r = n(423034),
    i = n(769991),
    s = n(626584),
    a = n(652215);
let o = new s.A("ComponentDispatchUtils"),
    l = new i.H({
        maxListeners: 100,
        enableDevtools: !1,
        logger: {
            warn: function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return o.warn(e, ...n);
            },
        },
        devtoolsReporter: function (e, t, n) {
            let i = Object.values(a.zOV).find((t) => e.startsWith(t)) ?? e;
            r.HF({
                type: "ComponentDispatch",
                description: i,
                data: { actionData: t, fullActionName: e },
                durationMs: n,
            });
        },
    });
