a.d(t, { K: () => s, R: () => o });
var n = a(627968),
    r = a(192308),
    l = a(892491),
    i = a(700331);
let s = "Media Viewer Modal";
function o(e, t) {
    let { location: o, contextKey: c, onClose: d, ...u } = e,
        h = u.items[u.startingIndex ?? 0]?.sourceMetadata?.message;
    i.l.markSessionStarted({
        channelId: h?.channel_id,
        numMediaItems: u.items.length,
        source: o,
        hasMediaOptions: !u.shouldHideMediaOptions,
    }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("24199"),
                    a.e("57036"),
                    a.e("88394"),
                    a.e("80527"),
                    a.e("58710"),
                    a.e("31825"),
                    a.e("23353"),
                    a.e("7175"),
                    a.e("37249"),
                    a.e("14138"),
                    a.e("8971"),
                    a.e("85071"),
                    a.e("88017"),
                    a.e("1040"),
                    a.e("64615"),
                    a.e("17239"),
                    a.e("66950"),
                    a.e("58164"),
                    a.e("20861"),
                    a.e("36682"),
                    a.e("45723"),
                    a.e("56871"),
                    a.e("69601"),
                    a.e("47511"),
                    a.e("51444"),
                    a.e("62290"),
                    a.e("80973"),
                    a.e("82731"),
                    a.e("46506"),
                    a.e("20382"),
                    a.e("5046"),
                ]).then(a.bind(a, 315790));
                return function (t) {
                    return (0, n.jsx)(e, {
                        ...t,
                        ...u,
                        onClose: () => {
                            d?.(), t.onClose();
                        },
                    });
                };
            },
            {
                modalKey: s,
                contextKey: c,
                onCloseCallback: i.l.markSessionCompleted,
                backdropStyle: l.F.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
