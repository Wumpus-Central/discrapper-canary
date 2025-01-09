n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(730671),
    c = n(388032),
    d = n(865552);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: m, initialValue: h } = e,
        g = r.useMemo(() => (null != h ? h : []), [h]),
        { value: x, onChange: p, errorMessage: f } = (0, o.Z)(t, h, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: s()(d.keywordsContainer, l),
                children: [
                    (0, i.jsx)(a.TextAreaAutosize, {
                        className: s()(d.keywordsTextArea, u),
                        value: x,
                        onChange: p,
                        placeholder: c.intl.string(c.t.UyaxJy)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: d.keywordsCounter,
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: ''.concat(g.length, ' / ').concat(n)
                    })
                ]
            }),
            null != f
                ? (0, i.jsx)(a.Text, {
                      className: s()(d.paddingTop, d.errorText),
                      variant: 'text-xs/medium',
                      color: 'text-danger',
                      children: f
                  })
                : (0, i.jsx)(a.Text, {
                      className: d.paddingTop,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: null != m ? m : c.intl.string(c.t['Gm6G5+'])
                  })
        ]
    });
}
