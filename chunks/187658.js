i.d(n, { default: () => c });
var r = i(200651);
i(192379);
var e = i(481060),
    a = i(239091),
    s = i(716161),
    l = i(647177),
    o = i(388032);
function c(t) {
    let { onSelect: n, backgroundOption: i, optionIsInUse: c } = t;
    return (0, r.jsx)(e.v2r, {
        navId: 'video-background-context',
        onClose: a.Zy,
        onSelect: n,
        'aria-label': o.intl.string(o.t.ptxALC),
        children: (0, r.jsx)(e.sNh, {
            id: 'remove',
            action: () => {
                (0, l.rD)(i) && ((0, s.KH)(i), (0, l.$w)(i));
            },
            label: (0, l.rD)(i) ? (c ? o.intl.string(o.t['xh/P//']) : o.intl.string(o.t.oKuPwc)) : o.intl.string(o.t.hFYUDA),
            disabled: !(0, l.rD)(i) || c,
            color: 'danger'
        })
    });
}
