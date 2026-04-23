"use strict";
n.d(t, { f: () => d });
var i = n(627968),
    r = n(192308),
    s = n(954571),
    a = n(80569),
    o = n(308295),
    l = n(652215);
let d = async (e) => {
    let { analyticsLocation: t = null, ...d } = e;
    s.default.track(l.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, r.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("2956"), n.e("90821")]).then(n.bind(n, 227780));
                return (t) => (0, i.jsx)(e, { ...t, ...d });
            },
            {
                modalKey: a.y,
                onCloseRequest: () => {
                    (0, o.p)();
                },
            },
        );
};
