n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(692547),
    a = n(481060),
    r = n(576749),
    s = n(688641),
    o = n(388032);
function c(e) {
    let { className: t, guildId: c } = e,
        d = (0, r.Z)();
    return (0, i.jsx)(s.Z, {
        className: t,
        icon: (0, i.jsx)(a.Que, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: l.Z.unsafe_rawColors.BRAND_500.css,
        title: o.intl.string(o.t['60lJ0N']),
        description: o.intl.string(o.t['EYn7//']),
        onClick: function () {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('22347'), n.e('58023'), n.e('65254')]).then(n.bind(n, 779250));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        guildId: c
                    });
            }, d);
        }
    });
}
