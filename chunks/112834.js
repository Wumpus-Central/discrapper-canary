var i = n(812743);
let r = new Map([
    [i.NJ.DARK, i.NJ.ASH],
    [i.NJ.ONYX, i.NJ.ASH],
]);
n.d(
    t,
    {},
    {
        m: function (e) {
            if (null == e) return;
            let t = r.get(e);
            return null != t ? `theme-${t} theme-${e} images-${t}` : `theme-${e} images-${e}`;
        },
    },
);
