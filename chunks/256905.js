"use strict";
n.d(t, { K: () => o, R: () => l });
var r = n(627968),
    i = n(192308),
    s = n(892491),
    a = n(700331);
let o = "Media Viewer Modal";
function l(e, t) {
    let { location: l, contextKey: u, onClose: c, ...d } = e,
        _ = d.items[d.startingIndex ?? 0]?.sourceMetadata?.message;
    a.l.markSessionStarted({
        channelId: _?.channel_id,
        numMediaItems: d.items.length,
        source: l,
        hasMediaOptions: !d.shouldHideMediaOptions,
    }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("25412"), n.e("61486")]).then(n.bind(n, 321565));
                return function (t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        ...d,
                        onClose: () => {
                            c?.(), t.onClose();
                        },
                    });
                };
            },
            {
                modalKey: o,
                contextKey: u,
                onCloseCallback: a.l.markSessionCompleted,
                backdropStyle: s.F.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
