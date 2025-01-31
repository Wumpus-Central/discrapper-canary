n.d(t, { i: () => c }), n(47120);
var i = n(200651);
n(192379);
var s = n(704215),
    r = n(952265),
    l = n(481060),
    a = n(243778),
    o = n(921944);
function c() {
    let e = [s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL],
        [t, c] = (0, a.US)(e, void 0, !0);
    return () => {
        t === s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            (0, r.ZD)(async () => {
                let { AnnouncementModal: e } = await n.e('54663').then(n.bind(n, 520156));
                return function (t) {
                    let { onClose: n, transitionState: s } = t;
                    return (
                        s === l.Dvm.EXITING && c(o.L.UNKNOWN),
                        (0, i.jsx)(e, {
                            transitionState: s,
                            onClose: n,
                            ctaOnClick: n
                        })
                    );
                };
            });
    };
}
