t.d(n, { Z: () => m });
var i = t(200651);
t(192379);
var l = t(481060),
    s = t(239091),
    a = t(838221),
    r = t(246364),
    o = t(540457),
    c = t(700833),
    d = t(388032),
    u = t(470457);
function x(e) {
    let { addFormField: n, onSelect: t, guild: o, allowTerms: x } = e;
    return (0, i.jsx)(l.v2r, {
        navId: 'add-questions',
        className: u.menu,
        onClose: s.Zy,
        'aria-label': d.intl.string(d.t.liqwPD),
        onSelect: t,
        children: (0, i.jsxs)(l.kSQ, {
            children: [
                (0, i.jsx)(l.sNh, {
                    id: 'text-input',
                    icon: (0, l.GSL)(a.Z),
                    label: d.intl.string(d.t.w6Q9w8),
                    action: () => (0, c.Md)(r.QJ.TEXT_INPUT, n, o)
                }),
                (0, i.jsx)(l.sNh, {
                    id: 'paragraph',
                    icon: l.OvV,
                    label: d.intl.string(d.t.gG0JBA),
                    action: () => (0, c.Md)(r.QJ.PARAGRAPH, n, o)
                }),
                (0, i.jsx)(l.sNh, {
                    id: 'multiple-choice',
                    icon: l.jE$,
                    label: d.intl.string(d.t.ooKh3t),
                    action: () => (0, c.Md)(r.QJ.MULTIPLE_CHOICE, n, o)
                }),
                x &&
                    (0, i.jsx)(l.sNh, {
                        id: 'terms',
                        icon: l.snC,
                        label: d.intl.string(d.t['3pz9t7']),
                        action: () => (0, c.Md)(r.QJ.TERMS, n, o)
                    })
            ]
        })
    });
}
let m = function (e) {
    let { addFormField: n, guild: t, allowTerms: l } = e;
    return (0, i.jsx)(o.A, {
        text: d.intl.string(d.t.CoHdoK),
        tooltipText: d.intl.string(d.t.nsI4dX),
        onClick: (e) => {
            (0, s.vq)(
                e,
                (e) =>
                    (0, i.jsx)(x, {
                        ...e,
                        addFormField: n,
                        guild: t,
                        allowTerms: l
                    }),
                {
                    position: 'top',
                    align: 'center'
                }
            );
        }
    });
};
