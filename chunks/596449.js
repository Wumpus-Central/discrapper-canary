n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(692547),
    r = n(481060),
    a = n(576749),
    s = n(688641),
    o = n(388032);
function c(e) {
    let { className: t, guildId: c } = e,
        d = (0, a.Z)();
    return (0, i.jsx)(s.Z, {
        className: t,
        icon: (0, i.jsx)(r.CalendarIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: l.Z.unsafe_rawColors.BRAND_500.css,
        title: o.intl.string(o.t['60lJ0N']),
        description: o.intl.string(o.t['EYn7//']),
        onClick: function () {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('22347'), n.e('58023'), n.e('2439')]).then(n.bind(n, 779250));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: c
                    });
            }, d);
        }
    });
}
