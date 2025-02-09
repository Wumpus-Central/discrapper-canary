n.d(t, { i: () => C }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(704215),
    r = n(952265),
    s = n(243778),
    o = n(497505),
    u = n(341907),
    d = n(751648),
    c = n(822857),
    E = n(921944),
    _ = n(46140);
function C() {
    let e = [a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL],
        [t, C] = (0, s.US)(e, void 0, !0),
        [h, I] = i.useState(!1),
        { enabled: T } = (0, c.W)({ location: 'vc-announcement-modal' });
    i.useEffect(() => {
        T &&
            t === a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL &&
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
                                (0, d.jM)(), (0, u.navigateToQuestHome)(_.dr.ORBS_ANNOUNCEMENT_MODAL, o.jn.QUEST_BAR), n();
                            }
                        });
                    };
                },
                {
                    onCloseCallback: () => {
                        C(E.L.UNKNOWN), (0, d.U9)();
                    }
                }
            ));
    }, [t, T, h, C]);
}
