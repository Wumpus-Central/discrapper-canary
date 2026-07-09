"use strict";
n.d(t, { K: () => l, R: () => o });
var i = n(627968),
    r = n(192308),
    a = n(892491),
    s = n(700331);
let l = "Media Viewer Modal";
function o(e, t) {
    let { location: o, contextKey: d, onClose: c, ...u } = e,
        _ = u.items[u.startingIndex ?? 0]?.sourceMetadata?.message;
    s.l.markSessionStarted({
        channelId: _?.channel_id,
        numMediaItems: u.items.length,
        source: o,
        hasMediaOptions: !u.shouldHideMediaOptions,
    }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("9862"),
                    n.e("10054"),
                    n.e("3586"),
                    n.e("38519"),
                    n.e("99326"),
                    n.e("20538"),
                    n.e("76602"),
                    n.e("39970"),
                    n.e("72789"),
                    n.e("77084"),
                    n.e("76428"),
                    n.e("96137"),
                    n.e("18997"),
                    n.e("34691"),
                    n.e("20287"),
                    n.e("18024"),
                    n.e("3131"),
                    n.e("47177"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("24914"),
                    n.e("20333"),
                    n.e("68532"),
                    n.e("20382"),
                    n.e("12682"),
                    n.e("80407"),
                    n.e("34936"),
                    n.e("6687"),
                    n.e("59459"),
                ]).then(n.bind(n, 315790));
                return function (t) {
                    return (0, i.jsx)(e, {
                        ...t,
                        ...u,
                        onClose: function () {
                            c?.(), t.onClose();
                        },
                    });
                };
            },
            {
                modalKey: l,
                contextKey: d,
                onCloseCallback: s.l.markSessionCompleted,
                backdropStyle: a.F.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
