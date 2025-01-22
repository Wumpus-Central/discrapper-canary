r.d(n, {
    Ez: function () {
        return _;
    },
    Ps: function () {
        return c;
    },
    Xo: function () {
        return p;
    },
    dT: function () {
        return f;
    },
    dw: function () {
        return d;
    },
    k$: function () {
        return h;
    }
});
var i = r(47120);
var a = r(65400),
    o = r(990547),
    s = r(731965);
let l = Object.freeze({
        debugTrackedData: null,
        impressions: []
    }),
    u = (0, a.F)((e) => l),
    c = (e) => {
        (0, s.j)(() => {
            u.setState((n) => ({
                impressions: [...n.impressions, e]
            }));
        });
    },
    d = (e) => {
        (0, s.j)(() => {
            u.setState((n) => ({ impressions: n.impressions.filter((n) => n.sequenceId !== e.sequenceId) }));
        });
    },
    f = (e, n) => {
        (0, s.j)(() => {
            u.setState(() => ({
                debugTrackedData: {
                    name: e,
                    ...n
                }
            }));
        });
    },
    p = u;
function h() {
    let e = {};
    return (
        u.getState().impressions.forEach((n) => {
            n.type === o.ImpressionTypes.PAGE ? (e.page = n.name) : (e.section = n.name);
        }),
        e
    );
}
function _() {
    return u.getState().impressions;
}
