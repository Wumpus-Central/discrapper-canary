n.d(t, {
    $G: () => c,
    OR: () => d,
    aL: () => o
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(345898),
    s = n(198534);
let o = 660,
    c = (e) =>
        (0, i.jsx)(r.Z, {
            ...e,
            className: a()(e.className, {
                [s.embedVertical]: !e.isHorizontal,
                [s.embedHorizontal]: e.isHorizontal
            })
        }),
    d = (e) => {
        let { isHorizontal: t } = e;
        return (0, i.jsx)(c, {
            ...e,
            media: () =>
                (0, i.jsx)('div', {
                    className: a()(s.loadingDescription),
                    children: (0, i.jsx)('div', {
                        className: a()(s.loadingBackgroundWrapper, { [s.loadingBackgroundWrapperHorizontal]: t }),
                        children: (0, i.jsx)('div', { className: s.loadingBackground })
                    })
                }),
            title: () => (0, i.jsx)('div', { className: a()(s.loadingImage, { [s.loadingImageHorizontal]: t }) })
        });
    };
