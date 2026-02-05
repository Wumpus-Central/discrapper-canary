"use strict";
n.d(t, { h: () => l });
var i = n(627968);
n(64700);
var s = n(192308);
function l(e) {
    let { demonetized: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, s.openModalLazy)(
        async () => {
            let { default: s } = await n.e("46529").then(n.bind(n, 633400));
            return (n) => (0, i.jsx)(s, { guildId: e, demonetized: t, ...n });
        },
        { onCloseRequest: () => {} },
    );
}
