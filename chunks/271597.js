"use strict";
n.d(t, { p: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(792852),
    a = n(696016);
let o = function () {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetFilters: o, setSelectedGameId: l } = s.Pu.getState();
    o(),
        null != t && l(t),
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("6447"),
                    n.e("22367"),
                    n.e("60584"),
                    n.e("5735"),
                    n.e("88623"),
                    n.e("2979"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("39894"),
                    n.e("1962"),
                    n.e("74049"),
                    n.e("69201"),
                    n.e("73954"),
                    n.e("20342"),
                    n.e("64237"),
                ]).then(n.bind(n, 244028));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: a.nm },
        );
};
