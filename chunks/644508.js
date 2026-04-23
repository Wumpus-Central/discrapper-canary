"use strict";
n.d(t, { f: () => u });
var r = n(627968),
    i = n(192308),
    s = n(954571),
    a = n(80569),
    o = n(421314),
    l = n(652215);
let u = async (e) => {
    let { analyticsLocation: t = null, ...u } = e;
    s.default.track(l.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, i.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("29259"), n.e("76443")]).then(n.bind(n, 849846));
                return (t) => (0, r.jsx)(e, { ...t, ...u });
            },
            {
                modalKey: a.y,
                onCloseRequest: () => {
                    (0, o.p)();
                },
            },
        );
};
