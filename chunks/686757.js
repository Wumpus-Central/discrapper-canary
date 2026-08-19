"use strict";
n.d(t, { SD: () => u, Vm: () => o, eE: () => c, g$: () => _, u5: () => d, uJ: () => E });
var i = n(882035),
    r = n(562708),
    a = n(121894);
let s = Object.freeze({ debugTrackedData: null, impressions: [] }),
    l = (0, i.h)((e) => s);
function o(e) {
    (0, a.r)(() => {
        l.setState((t) => ({ impressions: [...t.impressions, e] }));
    });
}
function d(e) {
    (0, a.r)(() => {
        l.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
    });
}
function c(e, t) {
    (0, a.r)(() => {
        l.setState(() => ({ debugTrackedData: { name: e, ...t } }));
    });
}
let u = l;
function _() {
    let e = {};
    return (
        l.getState().impressions.forEach((t) => {
            t.type === r.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function E() {
    return l.getState().impressions;
}
