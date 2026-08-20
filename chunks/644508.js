"use strict";
n.d(t, { f: () => u });
var l = n(477900),
    i = n(192308),
    s = n(174459),
    r = n(80569),
    a = n(308295),
    o = n(652215);
async function u(e) {
    let { analyticsLocation: t = null, ...u } = e;
    s.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, i.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([
                    n.e("684954"),
                    n.e("324761"),
                    n.e("50342"),
                    n.e("507406"),
                    n.e("455524"),
                    n.e("71167"),
                    n.e("489908"),
                    n.e("534936"),
                    n.e("195903"),
                ]).then(n.bind(n, 227780));
                return (t) => (0, l.jsx)(e, { ...t, ...u });
            },
            {
                modalKey: r.y,
                onCloseRequest: () => {
                    (0, a.p)();
                },
            },
        );
}
