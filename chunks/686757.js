n.d(t, { SD: () => d, Vm: () => u, eE: () => c, g$: () => p, u5: () => o, uJ: () => h });
var i = n(265690),
    r = n(110259),
    l = n(121894);
let s = Object.freeze({ debugTrackedData: null, impressions: [] }),
    a = (0, i.h)((e) => s),
    u = (e) => {
        (0, l.r)(() => {
            a.setState((t) => ({ impressions: [...t.impressions, e] }));
        });
    },
    o = (e) => {
        (0, l.r)(() => {
            a.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    c = (e, t) => {
        (0, l.r)(() => {
            a.setState(() => ({ debugTrackedData: { name: e, ...t } }));
        });
    },
    d = a;
function p() {
    let e = {};
    return (
        a.getState().impressions.forEach((t) => {
            t.type === r.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function h() {
    return a.getState().impressions;
}
