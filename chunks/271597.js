n.d(t, { p: () => r });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(792852),
    s = n(696016);
function r() {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: r, setGameFacet: o } = a.P.getState();
    r(),
        null != t && o(t),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("69884"),
                    n.e("18757"),
                    n.e("47899"),
                    n.e("94373"),
                    n.e("95282"),
                    n.e("47949"),
                    n.e("41882"),
                    n.e("57066"),
                    n.e("48442"),
                    n.e("37944"),
                    n.e("27392"),
                    n.e("93218"),
                    n.e("30204"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("96268"),
                    n.e("1962"),
                    n.e("83518"),
                    n.e("32736"),
                    n.e("74049"),
                    n.e("52566"),
                    n.e("1830"),
                    n.e("89160"),
                    n.e("31782"),
                    n.e("20342"),
                    n.e("71453"),
                ]).then(n.bind(n, 671884));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: s.nm },
        );
}
