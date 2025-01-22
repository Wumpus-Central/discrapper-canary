n.d(t, {
    $G: function () {
        return c;
    },
    OR: function () {
        return u;
    },
    aL: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(345898),
    o = n(746879);
let s = 660,
    c = (e) =>
        (0, i.jsx)(a.Z, {
            ...e,
            className: l()(e.className, {
                [o.embedVertical]: !e.isHorizontal,
                [o.embedHorizontal]: e.isHorizontal
            })
        }),
    u = (e) => {
        let { isHorizontal: t } = e;
        return (0, i.jsx)(c, {
            ...e,
            media: () =>
                (0, i.jsx)('div', {
                    className: l()(o.loadingDescription),
                    children: (0, i.jsx)('div', {
                        className: l()(o.loadingBackgroundWrapper, { [o.loadingBackgroundWrapperHorizontal]: t }),
                        children: (0, i.jsx)('div', { className: o.loadingBackground })
                    })
                }),
            title: () => (0, i.jsx)('div', { className: l()(o.loadingImage, { [o.loadingImageHorizontal]: t }) })
        });
    };
