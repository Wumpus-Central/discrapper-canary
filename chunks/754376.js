n.d(t, { F: () => d });
var r = n(54381);
n(473749);
var i = n(835473),
    a = n(600164),
    o = n(618158),
    s = n(922745),
    l = n(611500),
    c = n(702952),
    u = n(186880);
function d(e) {
    var t;
    let { applicationId: n, onMouseDown: d, onMouseMove: f, onMouseLeave: p, onFocus: _, idle: m } = e,
        h = (0, i.q)(n);
    return (0, r.jsxs)("div", {
        className: u.videoControls,
        onMouseMove: f,
        onMouseDown: d,
        onMouseLeave: p,
        children: [
            (0, r.jsx)("div", {
                className: u.topControls,
                children: (0, r.jsx)(s.r, {
                    idle: m,
                    title: null != (t = null == h ? void 0 : h.name) ? t : "",
                    onJumpToChannel: _,
                    preventIdleComponent: o.Z,
                }),
            }),
            (0, r.jsx)("div", {
                className: u.bottomControls,
                children: (0, r.jsx)(a.Z, {
                    grow: 1,
                    shrink: 1,
                    justify: a.Z.Justify.END,
                    align: a.Z.Align.CENTER,
                    children: (0, r.jsx)(l.Z, {
                        applicationId: n,
                        className: c.rightPipIcon,
                    }),
                }),
            }),
        ],
    });
}
