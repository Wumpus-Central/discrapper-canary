"use strict";
n.d(t, { p: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(792852),
    a = n(696016);
function o() {
    let { initialEditingClipId: e, selectedGameId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { resetAll: o, setGameFacet: l } = s.P.getState();
    o(),
        null != t && l(t),
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("27028"),
                    n.e("3586"),
                    n.e("43363"),
                    n.e("8273"),
                    n.e("52150"),
                    n.e("47673"),
                    n.e("93142"),
                    n.e("94802"),
                    n.e("39298"),
                    n.e("99520"),
                    n.e("30204"),
                    n.e("75842"),
                    n.e("83952"),
                    n.e("83518"),
                    n.e("1962"),
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
