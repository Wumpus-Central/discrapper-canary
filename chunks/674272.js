"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(892491);
function a(e) {
    let { source: t, onClose: a } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("68011"), n.e("98199"), n.e("92223"), n.e("61376")]).then(
                n.bind(n, 999235),
            );
            return (n) => (0, i.jsx)(e, { ...n, source: t });
        },
        { onCloseCallback: a, backdropStyle: s.F.BLUR },
    );
}
