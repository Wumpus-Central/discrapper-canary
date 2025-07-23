n.d(t, { F: () => d });
var r = n(255367);
n(73800);
var i = n(835473),
    a = n(600164),
    o = n(618158),
    s = n(922745),
    l = n(611500),
    c = n(816083),
    u = n(992955);
function d(e) {
    var t;
    let { applicationId: n, onMouseDown: d, onMouseMove: _, onMouseLeave: f, onFocus: p, idle: h } = e,
        m = (0, i.q)(n);
    return (0, r.jsxs)('div', {
        className: u.videoControls,
        onMouseMove: _,
        onMouseDown: d,
        onMouseLeave: f,
        children: [
            (0, r.jsx)('div', {
                className: u.topControls,
                children: (0, r.jsx)(s.r, {
                    idle: h,
                    title: null != (t = null == m ? void 0 : m.name) ? t : '',
                    onJumpToChannel: p,
                    preventIdleComponent: o.Z
                })
            }),
            (0, r.jsx)('div', {
                className: u.bottomControls,
                children: (0, r.jsx)(a.Z, {
                    grow: 1,
                    shrink: 1,
                    justify: a.Z.Justify.END,
                    align: a.Z.Align.CENTER,
                    children: (0, r.jsx)(l.Z, {
                        applicationId: n,
                        className: c.rightPipIcon
                    })
                })
            })
        ]
    });
}
