n.d(r, { default: () => d });
var e = n(200651);
n(192379);
var i = n(481060),
    a = n(239091),
    s = n(716161),
    o = n(647177),
    c = n(388032);
function d(t) {
    let { onSelect: r, backgroundOption: n, optionIsInUse: d } = t;
    return (0, e.jsx)(i.v2r, {
        navId: 'video-background-context',
        onClose: a.Zy,
        onSelect: r,
        'aria-label': c.NW.string(c.t.ptxALC),
        children: (0, e.jsx)(i.sNh, {
            id: 'remove',
            action: () => {
                (0, o.rD)(n) && ((0, s.KH)(n), (0, o.$w)(n));
            },
            label: (0, o.rD)(n) ? (d ? c.NW.string(c.t['xh/P//']) : c.NW.string(c.t.oKuPwc)) : c.NW.string(c.t.hFYUDA),
            disabled: !(0, o.rD)(n) || d,
            color: 'danger'
        })
    });
}
