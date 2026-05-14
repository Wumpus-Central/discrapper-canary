"use strict";
n.d(t, { R: () => l, v: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(204925),
    a = n(818348);
function o(e) {
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("37025"),
                n.e("20969"),
                n.e("28367"),
                n.e("20287"),
                n.e("19623"),
                n.e("82758"),
                n.e("80022"),
                n.e("1143"),
            ]).then(n.bind(n, 284778));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: s.jc, onCloseRequest: a.tE, onCloseCallback: e },
    );
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, r.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("94513"),
                n.e("40933"),
                n.e("88941"),
                n.e("62680"),
                n.e("27323"),
                n.e("19623"),
                n.e("21007"),
            ]).then(n.bind(n, 888363));
            return (n) => (0, i.jsx)(t, { claimRequired: e, ...n });
        },
        { onCloseRequest: e ? a.tE : null, onCloseCallback: t },
    );
}
