var i = n(792996);
let r = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = i.intl.string(i.t.FeUKeA);
            return (
                null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName),
                { sanitizedTitle: t.replace(r, ""), title: t }
            );
        },
    },
);
