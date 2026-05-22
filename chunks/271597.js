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
        { resetFilters: o, setSelectedGameId: l } = s.P.getState();
    o(),
        null != t && l(t),
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("34053"),
                    n.e("71104"),
                    n.e("94908"),
                    n.e("18113"),
                    n.e("47648"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("39894"),
                    n.e("30920"),
                    n.e("81202"),
                    n.e("1962"),
                    n.e("88990"),
                    n.e("74049"),
                    n.e("86745"),
                    n.e("20342"),
                    n.e("24507"),
                ]).then(n.bind(n, 92502));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: a.nm },
        );
};
