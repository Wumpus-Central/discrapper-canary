"use strict";
n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(73153);
async function a(e) {
    let t = await (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("28936"), n.e("3666")]).then(n.bind(n, 144482));
            return (n) => (0, r.jsx)(t, { ...n, ...e });
        },
        {
            onCloseCallback: () => {
                s.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: e.application.id });
            },
        },
    );
    s.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_KEY_CREATE", modalKey: t });
}
