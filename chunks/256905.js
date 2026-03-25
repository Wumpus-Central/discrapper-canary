"use strict";
n.d(t, { K: () => a, R: () => o });
var r = n(627968),
    i = n(397927),
    s = n(700331);
let a = "Media Viewer Modal";
function o(e, t) {
    let { location: o, contextKey: l, onClose: u, ...c } = e,
        d = c.items[c.startingIndex ?? 0]?.sourceMetadata?.message;
    s.l.markSessionStarted({
        channelId: d?.channel_id,
        numMediaItems: c.items.length,
        source: o,
        hasMediaOptions: !c.shouldHideMediaOptions,
    }),
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("48654").then(n.bind(n, 321565));
                return function (t) {
                    let n = () => {
                        u?.(), t.onClose();
                    };
                    return (0, r.jsx)(e, { ...t, ...c, onClose: n });
                };
            },
            {
                modalKey: a,
                contextKey: l,
                onCloseCallback: s.l.markSessionCompleted,
                backdropStyle: i.F2Z.LIGHTBOX,
                stackingBehavior: t,
            },
        );
}
