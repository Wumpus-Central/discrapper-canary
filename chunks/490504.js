var i = r(200651);
r(192379);
var a = r(481060),
    o = r(181076);
function s(e) {
    let { message: n } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(a.CircleInformationIcon, {
                size: 'custom',
                className: o.icon,
                width: 20,
                height: 20,
                color: a.tokens.colors.TEXT_WARNING
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-muted',
                children: n
            })
        ]
    });
}
n.Z = s;
