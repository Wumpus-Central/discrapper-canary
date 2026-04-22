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
                    a.e("70474"),
                    a.e("76640"),
                    a.e("7175"),
                    a.e("55202"),
                    a.e("23353"),
                    a.e("73667"),
                    a.e("11250"),
                    a.e("14138"),
                    a.e("3442"),
                    a.e("85071"),
                    a.e("88017"),
                    a.e("70994"),
                    a.e("17239"),
                    a.e("24267"),
                    a.e("51793"),
                    a.e("58164"),
                    a.e("36682"),
                    a.e("63070"),
                    a.e("25370"),
                    a.e("96313"),
                    a.e("37457"),
                    a.e("47397"),
                ]).then(a.bind(a, 321565));
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
