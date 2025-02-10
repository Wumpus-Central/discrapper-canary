n.d(t, { i: () => _ }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(704215),
    r = n(952265),
    s = n(243778),
    o = n(341907),
    u = n(751648),
    d = n(822857),
    c = n(921944),
    E = n(642145);
function _() {
    let e = [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL],
        [t, _] = (0, s.US)(e, void 0, !0),
        [C, h] = i.useState(!1),
        { enabled: I } = (0, d.W)({ location: 'vc-announcement-modal' });
    i.useEffect(() => {
        I &&
            t === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            !C &&
            (h(!0),
            (0, r.ZD)(
                async () => {
                    let { AnnouncementModal: e } = await n.e('3073').then(n.bind(n, 520156));
                    return function (t) {
                        let { onClose: n, transitionState: i } = t;
                        return (0, l.jsx)(e, {
                            transitionState: i,
                            onClose: n,
                            ctaOnClick: () => {
                                (0, u.jM)(), (0, o.navigateToQuestHome)({ questId: E.V }), n();
                            }
                        });
                    };
                },
                {
                    onCloseCallback: () => {
                        _(c.L.UNKNOWN), (0, u.U9)();
                    }
                }
            ));
    }, [t, I, C, _]);
}
