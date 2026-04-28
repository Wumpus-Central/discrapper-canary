"use strict";
n.d(t, { f: () => c });
var l = n(627968),
    i = n(192308),
    s = n(954571),
    a = n(80569),
    r = n(308295),
    o = n(652215);
let c = async (e) => {
    let { analyticsLocation: t = null, ...c } = e;
    s.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, i.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([n.e("2956"), n.e("90821")]).then(n.bind(n, 227780));
                return (t) => (0, l.jsx)(e, { ...t, ...c });
            },
            {
                modalKey: a.y,
                onCloseRequest: () => {
                    (0, r.p)();
                },
            },
        );
};
