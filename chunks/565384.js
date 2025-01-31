n.d(t, {
    Ez: () => _,
    Ps: () => l,
    Xo: () => d,
    dT: () => c,
    dw: () => u,
    k$: () => f
}),
    n(47120);
var i = n(65400),
    r = n(990547),
    a = n(731965);
let s = Object.freeze({
        debugTrackedData: null,
        impressions: []
    }),
    o = (0, i.F)((e) => s),
    l = (e) => {
        (0, a.j)(() => {
            o.setState((t) => ({
                impressions: [...t.impressions, e]
            }));
        });
    },
    u = (e) => {
        (0, a.j)(() => {
            o.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    c = (e, t) => {
        (0, a.j)(() => {
            o.setState(() => ({
                debugTrackedData: {
                    name: e,
                    ...t
                }
            }));
        });
    },
    d = o;
function f() {
    let e = {};
    return (
        o.getState().impressions.forEach((t) => {
            t.type === r.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function _() {
    return o.getState().impressions;
}
