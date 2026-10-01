n.d(t, { f: () => c });
var i = n(477900),
    s = n(192308),
    l = n(174459),
    r = n(80569),
    a = n(308295),
    o = n(652215);
async function c(e) {
    let { analyticsLocation: t = null, ...c } = e;
    (l.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
        await (0, s.openModalLazy)(
            async () => {
                let { EmojiStudioModal: e } = await Promise.all([
                    n.e("684954"),
                    n.e("324761"),
                    n.e("50342"),
                    n.e("507406"),
                    n.e("455524"),
                    n.e("489908"),
                    n.e("71167"),
                    n.e("534936"),
                    n.e("195903"),
                ]).then(n.bind(n, 227780));
                return (t) => (0, i.jsx)(e, { ...t, ...c });
            },
            {
                modalKey: r.y,
                onCloseRequest: () => {
                    (0, a.p)();
                },
            },
        ));
}
