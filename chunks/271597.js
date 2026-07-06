n.d(t, { p: () => r });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(792852),
    a = n(696016);
function r() {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: r, setGameFacet: o } = s.P.getState();
    r(),
        null != t && o(t),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("50884"),
                    n.e("97782"),
                    n.e("16227"),
                    n.e("23549"),
                    n.e("93594"),
                    n.e("31199"),
                    n.e("74794"),
                    n.e("78898"),
                    n.e("31938"),
                    n.e("72136"),
                    n.e("57123"),
                    n.e("89418"),
                    n.e("30204"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("96268"),
                    n.e("1962"),
                    n.e("83518"),
                    n.e("74049"),
                    n.e("69201"),
                    n.e("52566"),
                    n.e("1830"),
                    n.e("89160"),
                    n.e("31782"),
                    n.e("20342"),
                    n.e("7270"),
                ]).then(n.bind(n, 10757));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: a.nm },
        );
}
