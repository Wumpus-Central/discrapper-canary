n.d(t, { V: () => p });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(554146),
    a = n(342494),
    s = n(397927),
    o = n(793574),
    d = n(617617),
    c = n(954571),
    u = n(851746),
    A = n(727949),
    h = n(652215),
    _ = n(985018),
    m = n(954457);
let p = (e) => {
    let { targetElementRef: t } = e,
        p = (0, A.Tp)(),
        g = (0, r.bG)([u.A], () => u.A.getReminderStateId()),
        E = (0, r.bG)([u.A], () => u.A.getReferralsRemaining()),
        I = (0, r.bG)([d.A], () => {
            let e = d.A.settings.userContent?.recurringDismissibleContentStates[l.M.REFERRAL_PROGRAM_POPOVER_V2];
            return e?.numTimesDismissed ?? 0;
        }),
        f = () => {
            (0, A.ne)(g);
        };
    return (0, i.jsx)(a.AM, {
        targetElementRef: t,
        title: _.intl.string(_.t.K2DyeS),
        body: _.intl.string(_.t["JICo+3"]),
        graphic: { type: "image", src: m.A },
        size: "md",
        shouldShow: p,
        align: "top",
        position: "right",
        gradientColor: "nitro-pink",
        caretConfig: { align: "start" },
        actions: [
            {
                text: _.intl.string(_.t.t2N81y),
                onClick: () => {
                    c.default.track(h.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: [o.A.HOME_PAGE_PREMIUM_TAB],
                        times_dismissed: null != g ? I + 1 : null,
                        referrals_remaining: E,
                    }),
                        f(),
                        (0, s.mMO)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                            return (t) => (0, i.jsx)(e, { ...t });
                        });
                },
            },
        ],
        onRequestClose: f,
    });
};
