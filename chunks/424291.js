r.d(n, {
    V: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(531826);
let s = 'activity-age-gate';
function l(e) {
    let { application: n, channelId: l, onAgree: u, onDisagree: c } = e,
        d =
            null !=
            (0, o.ZP)({
                application: n,
                channelId: l
            })
                ? a.POPOUT_MODAL_CONTEXT
                : a.DEFAULT_MODAL_CONTEXT;
    return (
        (0, a.openModalLazy)(
            async () => {
                let { ActivityAgeGateModal: e } = await r.e('57951').then(r.bind(r, 252528));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        application: n,
                        onAgree: u,
                        onDisagree: c
                    });
            },
            {
                modalKey: s,
                contextKey: d
            }
        ),
        Promise.resolve()
    );
}
