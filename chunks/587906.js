n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(657707),
    o = n(481060),
    s = n(626135),
    a = n(981631),
    r = n(388032);
function u(e) {
    let { className: t, onClick: n } = e,
        u = (e) => {
            s.default.track(a.rMx.MEDIA_VIEWER_AFFORDANCE_CLICKED), n(e);
        };
    return (0, i.jsx)(o.Tooltip, {
        text: r.intl.string(r.t.rTQZY2),
        children: (e) =>
            (0, i.jsx)(o.Clickable, {
                ...e,
                className: t,
                focusProps: { offset: 2 },
                onClick: u,
                'aria-label': r.intl.string(r.t.rTQZY2),
                children: (0, i.jsx)(l.bJT, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 20,
                    height: 20
                })
            })
    });
}
