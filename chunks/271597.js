n.d(t, { p: () => r });
var l = n(627968);
n(64700);
var s = n(192308),
    i = n(792852),
    a = n(696016);
let r = function () {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetFilters: r, setSelectedGameId: o } = i.P.getState();
    r(),
        null != t && o(t),
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("34053"),
                    n.e("71104"),
                    n.e("26705"),
                    n.e("72283"),
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
                    n.e("73273"),
                ]).then(n.bind(n, 818080));
                return (n) => (0, l.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: a.nm },
        );
};
