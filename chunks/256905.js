"use strict";
n.d(t, { K: () => s, R: () => o });
var r = n(627968),
    i = n(397927),
    a = n(700331);
let s = "Media Viewer Modal";
function o(e, t) {
    let { location: o, contextKey: l, ...u } = e,
        c = u.items[u.startingIndex ?? 0]?.sourceMetadata?.message;
    a.l.markSessionStarted({
        channelId: c?.channel_id,
        numMediaItems: u.items.length,
        source: o,
        hasMediaOptions: !u.shouldHideMediaOptions,
    }),
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("48654").then(n.bind(n, 321565));
                return (t) => (0, r.jsx)(e, { ...t, ...u });
            },
            {
                modalKey: s,
                contextKey: l,
                onCloseCallback: a.l.markSessionCompleted,
                backdropStyle: i.F2Z.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
