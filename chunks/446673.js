n.d(t, { C: () => l });
var r = n(255367),
    i = n(481060),
    a = n(388032),
    o = n(121541);
let s = (e) => {
    switch (e) {
        case 'new':
            return a.intl.string(a.t.y2b7CA);
        case 'beta':
            return a.intl.string(a.t.oW0eUV);
        case 'early_access':
            return a.intl.string(a.t.EYxi0t);
        case 'free_trial':
            return a.intl.string(a.t.IBYG5e);
    }
};
function l(e) {
    let { badge: t } = e;
    return (0, r.jsx)(i.Text, {
        variant: 'eyebrow',
        className: o.badge,
        children: s(t)
    });
}
