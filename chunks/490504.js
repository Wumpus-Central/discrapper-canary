var i = t(200651);
t(192379);
var r = t(481060),
    a = t(304075);
n.Z = function (e) {
    let { message: n } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            (0, i.jsx)(r.CircleInformationIcon, {
                size: 'custom',
                className: a.icon,
                width: 20,
                height: 20,
                color: r.tokens.colors.TEXT_WARNING
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-muted',
                children: n
            })
        ]
    });
};
