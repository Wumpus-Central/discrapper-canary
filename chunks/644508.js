"use strict";
n.d(t, { f: () => u });
var i = n(627968),
    r = n(192308),
    s = n(174459),
    a = n(80569),
    o = n(308295),
    l = n(652215);
let u = async (e) => {
    let { analyticsLocation: t = null, ...u } = e;
    s.default.track(l.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, r.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([
                    n.e("91766"),
                    n.e("50342"),
                    n.e("7406"),
                    n.e("55524"),
                    n.e("71167"),
                    n.e("89908"),
                    n.e("34936"),
                    n.e("95903"),
                ]).then(n.bind(n, 227780));
                return (t) => (0, i.jsx)(e, { ...t, ...u });
            },
            {
                modalKey: a.y,
                onCloseRequest: () => {
                    (0, o.p)();
                },
            },
        );
};
