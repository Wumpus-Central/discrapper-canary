"use strict";
n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153);
async function s(e) {
    let t = await (0, i.mMO)(
        async () => {
            let { default: t } = await Promise.all([n.e("28936"), n.e("18687")]).then(n.bind(n, 144482));
            return (n) => (0, r.jsx)(t, { ...n, ...e });
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: e.application.id });
            },
        },
    );
    a.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_KEY_CREATE", modalKey: t });
}
