"use strict";
n.d(t, { p: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(696016);
let a = function () {
    let { initialEditingClipId: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("96123"),
                n.e("17239"),
                n.e("20861"),
                n.e("74068"),
                n.e("59934"),
            ]).then(n.bind(n, 867487));
            return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
        },
        { modalKey: s.nm },
    );
};
