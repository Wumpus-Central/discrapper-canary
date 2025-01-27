n.d(t, {
    i: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(952265),
    a = n(481060),
    l = n(243778),
    o = n(921944);
function c() {
    let e = [r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL],
        [t, c] = (0, l.US)(e, void 0, !0);
    return () => {
        if (t === r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)
            (0, s.ZD)(async () => {
                let { AnnouncementModal: e } = await n.e('54663').then(n.bind(n, 520156));
                return function (t) {
                    let { onClose: n, transitionState: r } = t;
                    return (
                        r === a.ModalTransitionState.EXITING && c(o.L.UNKNOWN),
                        (0, i.jsx)(e, {
                            transitionState: r,
                            onClose: n,
                            onCTA: n
                        })
                    );
                };
            });
    };
}
