var i = t(200651);
t(192379);
var l = t(481060),
    a = t(239091),
    s = t(838221),
    r = t(246364),
    o = t(540457),
    c = t(700833),
    d = t(388032),
    u = t(117225);
function m(e) {
    let { addFormField: n, onSelect: t, guild: o, allowTerms: m } = e;
    return (0, i.jsx)(l.Menu, {
        navId: 'add-questions',
        className: u.menu,
        onClose: a.Zy,
        'aria-label': d.intl.string(d.t.liqwPD),
        onSelect: t,
        children: (0, i.jsxs)(l.MenuGroup, {
            children: [
                (0, i.jsx)(l.MenuItem, {
                    id: 'text-input',
                    icon: (0, l.makeIconCompat)(s.Z),
                    label: d.intl.string(d.t.w6Q9w8),
                    action: () => (0, c.Md)(r.QJ.TEXT_INPUT, n, o)
                }),
                (0, i.jsx)(l.MenuItem, {
                    id: 'paragraph',
                    icon: l.ChannelListIcon,
                    label: d.intl.string(d.t.gG0JBA),
                    action: () => (0, c.Md)(r.QJ.PARAGRAPH, n, o)
                }),
                (0, i.jsx)(l.MenuItem, {
                    id: 'multiple-choice',
                    icon: l.ListBulletsIcon,
                    label: d.intl.string(d.t.ooKh3t),
                    action: () => (0, c.Md)(r.QJ.MULTIPLE_CHOICE, n, o)
                }),
                m &&
                    (0, i.jsx)(l.MenuItem, {
                        id: 'terms',
                        icon: l.BookCheckIcon,
                        label: d.intl.string(d.t['3pz9t7']),
                        action: () => (0, c.Md)(r.QJ.TERMS, n, o)
                    })
            ]
        })
    });
}
n.Z = function (e) {
    let { addFormField: n, guild: t, allowTerms: l } = e;
    return (0, i.jsx)(o.A, {
        text: d.intl.string(d.t.CoHdoK),
        tooltipText: d.intl.string(d.t.nsI4dX),
        onClick: (e) => {
            (0, a.vq)(
                e,
                (e) =>
                    (0, i.jsx)(m, {
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
