"use strict";
n.d(t, { SD: () => d, Vm: () => l, eE: () => c, g$: () => _, u5: () => u, uJ: () => f });
var i = n(265690),
    r = n(562708),
    s = n(121894);
let a = Object.freeze({ debugTrackedData: null, impressions: [] }),
    o = (0, i.h)((e) => a),
    l = (e) => {
        (0, s.r)(() => {
            o.setState((t) => ({ impressions: [...t.impressions, e] }));
        });
    },
    u = (e) => {
        (0, s.r)(() => {
            o.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    c = (e, t) => {
        (0, s.r)(() => {
            o.setState(() => ({ debugTrackedData: { name: e, ...t } }));
        });
    },
    d = o;
function _() {
    let e = {};
    return (
        o.getState().impressions.forEach((t) => {
            t.type === r.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function f() {
    return o.getState().impressions;
}
