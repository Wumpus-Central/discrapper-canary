n.d(t, { p: () => r });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(792852),
    a = n(696016);
let r = function () {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: r, setGameFacet: o } = s.P.getState();
    r(),
        null != t && o(t),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("38873"),
                    n.e("23887"),
                    n.e("24554"),
                    n.e("21277"),
                    n.e("29244"),
                    n.e("45043"),
                    n.e("30204"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("1962"),
                    n.e("83518"),
                    n.e("74049"),
                    n.e("69201"),
                    n.e("52566"),
                    n.e("73954"),
                    n.e("89160"),
                    n.e("31782"),
                    n.e("20342"),
                    n.e("85577"),
                ]).then(n.bind(n, 310480));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: a.nm },
        );
};
