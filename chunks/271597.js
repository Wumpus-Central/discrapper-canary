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
    r(),
        null != t && o(t),
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("425751"),
                    n.e("718757"),
                    n.e("547899"),
                    n.e("294373"),
                    n.e("457860"),
                    n.e("852123"),
                    n.e("21398"),
                    n.e("681277"),
                    n.e("268877"),
                    n.e("241882"),
                    n.e("357066"),
                    n.e("548442"),
                    n.e("437944"),
                    n.e("627392"),
                    n.e("493218"),
                    n.e("614146"),
                    n.e("875842"),
                    n.e("883952"),
                    n.e("203930"),
                    n.e("903663"),
                    n.e("496268"),
                    n.e("466147"),
                    n.e("501962"),
                    n.e("583518"),
                    n.e("974049"),
                    n.e("352566"),
                    n.e("489492"),
                    n.e("689160"),
                    n.e("231782"),
                    n.e("520342"),
                    n.e("771453"),
                ]).then(n.bind(n, 671884));
                return (n) => (0, i.jsx)(t, { initialEditingClipId: e, ...n });
            },
            { modalKey: s.nm },
        );
}
