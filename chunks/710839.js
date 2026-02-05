"use strict";
n.d(t, { i: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(851907);
let s = "activity-age-gate";
function o(e) {
    let { application: t, channelId: o, onAgree: l, onDisagree: u } = e,
        c = null != (0, a.Ay)({ application: t, channelId: o }) ? i.KX8 : i.SYi;
    return (
        (0, i.mMO)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e("75710").then(n.bind(n, 89805));
                return (n) => (0, r.jsx)(e, { ...n, channelId: o, application: t, onAgree: l, onDisagree: u });
            },
            { modalKey: s, contextKey: c },
        ),
        Promise.resolve()
    );
}
