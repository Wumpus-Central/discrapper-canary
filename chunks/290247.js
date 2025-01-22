n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(403339);
function s(e) {
    let { supportedLanguages: t } = e;
    return (0, i.jsx)('ul', {
        className: o.outerContainer,
        children: t.map((e) =>
            (0, i.jsx)(
                'li',
                {
                    className: r()(o.innerContainer, o.languageItem),
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: e
                    })
                },
                e
            )
        )
    });
}
