n.d(t, { F: () => d });
var r = n(255367);
n(73800);
var i = n(835473),
    o = n(600164),
    a = n(618158),
    s = n(922745),
    l = n(611500),
    c = n(246499),
    u = n(538668);
function d(e) {
    var t;
    let { applicationId: n, onMouseDown: d, onMouseMove: f, onMouseLeave: _, onFocus: p, idle: h } = e,
        m = (0, i.q)(n);
    return (0, r.jsxs)("div", {
        className: u.videoControls,
        onMouseMove: f,
        onMouseDown: d,
        onMouseLeave: _,
        children: [
            (0, r.jsx)("div", {
                className: u.topControls,
                children: (0, r.jsx)(s.r, {
                    idle: h,
                    title: null != (t = null == m ? void 0 : m.name) ? t : "",
                    onJumpToChannel: p,
                    preventIdleComponent: a.Z,
                }),
            }),
            (0, r.jsx)("div", {
                className: u.bottomControls,
                children: (0, r.jsx)(o.Z, {
                    grow: 1,
                    shrink: 1,
                    justify: o.Z.Justify.END,
                    align: o.Z.Align.CENTER,
                    children: (0, r.jsx)(l.Z, {
                        applicationId: n,
                        className: c.rightPipIcon,
                    }),
                }),
            }),
        ],
    });
}
