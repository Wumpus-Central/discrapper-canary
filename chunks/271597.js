n.d(t, { p: () => a });
var i = n(477900);
n(582128);
var s = n(192308),
    r = n(792852),
    l = n(696016);
function a() {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: a, setGameFacet: o } = r.P.getState();
    (a(),
        null != t && o(t),
        (0, s.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("459368"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("718955"),
                    n.e("126301"),
                    n.e("498167"),
                    n.e("553829"),
                    n.e("895840"),
                    n.e("865257"),
                    n.e("228767"),
                    n.e("323079"),
                    n.e("437655"),
                    n.e("616045"),
                    n.e("970846"),
                    n.e("334179"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("466147"),
                    n.e("507406"),
                    n.e("501962"),
                    n.e("583518"),
                    n.e("746623"),
                    n.e("280559"),
                    n.e("974049"),
                    n.e("895008"),
                    n.e("231782"),
                    n.e("306270"),
                    n.e("98717"),
                    n.e("717278"),
                    n.e("689160"),
                    n.e("520342"),
                    n.e("790614"),
                ]).then(n.bind(n, 972405));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: l.nm },
        ));
}
