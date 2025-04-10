n.d(t, { BO: () => c });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060);
n(489813), n(707592);
var o = n(667084);
function c(e) {
    let { disabled: t, field: n, value: s, radioItemClassName: c, radioItemIconClassName: d, onChange: u } = e,
        { choices: m } = n,
        g = i.useMemo(
            () =>
                m.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: a()(o.multipleChoiceIcon, d)
                })),
            [m, d]
        );
    return (0, r.jsx)(l.FXm, {
        disabled: t,
        options: g,
        value: s,
        onChange: u,
        radioItemClassName: c,
        withTransparentBackground: !0
    });
}
