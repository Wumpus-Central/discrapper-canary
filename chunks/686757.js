"use strict";
n.d(t, { SD: () => d, Vm: () => l, eE: () => c, g$: () => _, u5: () => u, uJ: () => f });
var r = n(265690),
    i = n(110259),
    a = n(121894);
let s = Object.freeze({ debugTrackedData: null, impressions: [] }),
    o = (0, r.h)((e) => s),
    l = (e) => {
        (0, a.r)(() => {
            o.setState((t) => ({ impressions: [...t.impressions, e] }));
        });
    },
    u = (e) => {
        (0, a.r)(() => {
            o.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    c = (e, t) => {
        (0, a.r)(() => {
            o.setState(() => ({ debugTrackedData: { name: e, ...t } }));
        });
    },
    d = o;
function _() {
    let e = {};
    return (
        o.getState().impressions.forEach((t) => {
            t.type === i.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function f() {
    return o.getState().impressions;
}
