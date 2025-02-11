n.d(t, { i: () => C }), n(47120);
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
function C() {
    let { enabled: e } = (0, d.W)({ location: 'vc-announcement-modal' }),
        t = e ? [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL] : [],
        [C, _] = (0, s.US)(t, void 0, !0),
        [h, I] = i.useState(!1);
    i.useEffect(() => {
        e &&
            C === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
            !h &&
            (I(!0),
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
    }, [C, e, h, _]);
}
