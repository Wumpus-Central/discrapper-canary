"use strict";
n.d(t, { K: () => s, R: () => o });
var r = n(627968),
    a = n(192308),
    i = n(892491),
    l = n(700331);
let s = "Media Viewer Modal";
function o(e, t) {
    let { location: o, contextKey: c, onClose: d, ...u } = e,
        _ = u.items[u.startingIndex ?? 0]?.sourceMetadata?.message;
    l.l.markSessionStarted({
        channelId: _?.channel_id,
        numMediaItems: u.items.length,
        source: o,
        hasMediaOptions: !u.shouldHideMediaOptions,
    }),
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("67849"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("80973"),
                    n.e("20382"),
                    n.e("88038"),
                ]).then(n.bind(n, 315790));
                return function (t) {
                    return (0, r.jsx)(e, {
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
                onCloseCallback: l.l.markSessionCompleted,
                backdropStyle: i.F.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
