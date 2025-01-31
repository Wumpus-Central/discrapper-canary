n.d(t, { V: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(531826);
let s = 'activity-age-gate';
function o(e) {
    let { application: t, channelId: o, onAgree: l, onDisagree: u } = e,
        c =
            null !=
            (0, a.ZP)({
                application: t,
                channelId: o
            })
                ? r.u1M
                : r.z1l;
    return (
        (0, r.ZDy)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e('57951').then(n.bind(n, 252528));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        application: t,
                        onAgree: l,
                        onDisagree: u
                    });
            },
            {
                modalKey: s,
                contextKey: c
            }
        ),
        Promise.resolve()
    );
}
