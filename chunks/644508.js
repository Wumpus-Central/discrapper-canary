"use strict";
n.d(t, { f: () => d });
var i = n(627968),
    r = n(192308),
    a = n(174459),
    s = n(80569),
    l = n(308295),
    o = n(652215);
async function d(e) {
    let { analyticsLocation: t = null, ...d } = e;
    a.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, r.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([
                    n.e("91766"),
                    n.e("24761"),
                    n.e("50342"),
                    n.e("7406"),
                    n.e("55524"),
                    n.e("71167"),
                    n.e("89908"),
                    n.e("34936"),
                    n.e("95903"),
                ]).then(n.bind(n, 227780));
                return (t) => (0, i.jsx)(e, { ...t, ...d });
            },
            {
                modalKey: s.y,
                onCloseRequest: () => {
                    (0, l.p)();
                },
            },
        );
}
