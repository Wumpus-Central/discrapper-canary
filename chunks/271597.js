n.d(t, { p: () => r });
var i = n(477900);
n(582128);
var l = n(192308),
    a = n(792852),
    s = n(696016);
function r() {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: r, setGameFacet: o } = a.P.getState();
    (r(),
        null != t && o(t),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("459368"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("718955"),
                    n.e("323589"),
                    n.e("895840"),
                    n.e("287946"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("430877"),
                    n.e("48055"),
                    n.e("914553"),
                    n.e("586467"),
                    n.e("875842"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("496268"),
                    n.e("466147"),
                    n.e("507406"),
                    n.e("501962"),
                    n.e("583518"),
                    n.e("974049"),
                    n.e("352566"),
                    n.e("731772"),
                    n.e("689160"),
                    n.e("231782"),
                    n.e("520342"),
                    n.e("432262"),
                ]).then(n.bind(n, 25682));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: s.nm },
        ));
}
