"use strict";
n.d(t, { j: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(559868);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (!e && (0, r.hasAnyModalOpen)()) ||
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("44575"), n.e("34268"), n.e("65067")]).then(
                    n.bind(n, 636254),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: s.lb },
        );
}
