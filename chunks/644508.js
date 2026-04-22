"use strict";
n.d(t, { f: () => c });
var i = n(627968),
    l = n(192308),
    s = n(954571),
    r = n(80569),
    a = n(421314),
    o = n(652215);
let c = async (e) => {
    let { analyticsLocation: t = null, ...c } = e;
    s.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, l.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("29259"), n.e("76443")]).then(n.bind(n, 849846));
                return (t) => (0, i.jsx)(e, { ...t, ...c });
            },
            {
                modalKey: r.y,
                onCloseRequest: () => {
                    (0, a.p)();
                },
            },
        );
};
