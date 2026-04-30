r.d(t, { SD: () => d, Vm: () => c, eE: () => l, g$: () => h, u5: () => u, uJ: () => p });
var i = r(265690),
    n = r(110259),
    s = r(121894);
let a = Object.freeze({ debugTrackedData: null, impressions: [] }),
    o = (0, i.h)((e) => a),
    c = (e) => {
        (0, s.r)(() => {
            o.setState((t) => ({ impressions: [...t.impressions, e] }));
        });
    },
    u = (e) => {
        (0, s.r)(() => {
            o.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    l = (e, t) => {
        (0, s.r)(() => {
            o.setState(() => ({ debugTrackedData: { name: e, ...t } }));
        });
    },
    d = o;
function h() {
    let e = {};
    return (
        o.getState().impressions.forEach((t) => {
            t.type === n.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function p() {
    return o.getState().impressions;
}
