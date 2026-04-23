"use strict";
n.d(t, { j: () => a });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(559868);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    (!e && (0, i.hasAnyModalOpen)()) ||
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("25412"), n.e("40396"), n.e("16565")]).then(
                    n.bind(n, 88872),
                );
                return (t) => (0, r.jsx)(e, { ...t });
            },
            { modalKey: s.lb },
        );
}
