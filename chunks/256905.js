"use strict";
n.d(t, { K: () => o, R: () => l });
var i = n(627968),
    r = n(192308),
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
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("34454"),
                    n.e("79154"),
                    n.e("97782"),
                    n.e("45588"),
                    n.e("67454"),
                    n.e("37634"),
                    n.e("76602"),
                    n.e("39970"),
                    n.e("72789"),
                    n.e("20287"),
                    n.e("18997"),
                    n.e("34691"),
                    n.e("18024"),
                    n.e("47177"),
                    n.e("3131"),
                    n.e("27272"),
                    n.e("36149"),
                    n.e("51778"),
                    n.e("24914"),
                    n.e("42714"),
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
                        ...d,
                        onClose: function () {
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
