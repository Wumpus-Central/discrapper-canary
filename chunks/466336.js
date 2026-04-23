a.d(l, { V: () => f });
var t = a(627968);
a(64700);
var s = a(311907),
    i = a(554146),
    n = a(265486),
    c = a(192308),
    h = a(793574),
    r = a(617617),
    o = a(954571),
    d = a(851746),
    v = a(727949),
    g = a(652215),
    p = a(985018),
    m = a(954457);
let f = (e) => {
    let { targetElementRef: l } = e,
        f = (0, v.Tp)(),
        w = (0, s.bG)([d.A], () => d.A.getReminderStateId()),
        x = (0, s.bG)([d.A], () => d.A.getReferralsRemaining()),
        u = (0, s.bG)([r.A], () => {
            let e = r.A.settings.userContent?.recurringDismissibleContentStates[i.M.REFERRAL_PROGRAM_POPOVER_V2];
            return e?.numTimesDismissed ?? 0;
        }),
        A = () => {
            (0, v.ne)(w);
        };
    return (0, t.jsx)(n.A, {
        targetElementRef: l,
        title: p.intl.string(p.t.K2DyeS),
        body: p.intl.string(p.t["JICo+3"]),
        graphic: { type: "image", src: m.A },
        size: "md",
        shouldShow: f,
        align: "top",
        position: "right",
        gradientColor: "nitro-pink",
        caretConfig: { align: "start" },
        actions: [
            {
                text: p.intl.string(p.t.t2N81y),
                onClick: () => {
                    o.default.track(g.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: [h.A.HOME_PAGE_PREMIUM_TAB],
                        times_dismissed: null != w ? u + 1 : null,
                        referrals_remaining: x,
                    }),
                        A(),
                        (0, c.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(a.bind(a, 303682));
                            return (l) => (0, t.jsx)(e, { ...l });
                        });
                },
            },
        ],
        onRequestClose: A,
    });
};
