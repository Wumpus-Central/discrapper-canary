"use strict";
n.d(t, { i: () => o });
var r = n(627968);
n(64700);
var i = n(231723),
    s = n(192308),
    a = n(851907);
function o(e) {
    let { application: t, channelId: o, onAgree: l, onDisagree: u } = e,
        d = null != (0, a.Ay)({ application: t, channelId: o }) ? i.KX : i.SY;
    return (
        (0, s.openModalLazy)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e("75710").then(n.bind(n, 89805));
                return (n) => (0, r.jsx)(e, { ...n, channelId: o, application: t, onAgree: l, onDisagree: u });
            },
            { modalKey: "activity-age-gate", contextKey: d },
        ),
        Promise.resolve()
    );
}
