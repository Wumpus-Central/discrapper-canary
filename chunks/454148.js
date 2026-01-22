n.d(t, { L: () => O }), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    a = n(397927),
    s = n(832712),
    o = n(831062),
    c = n(662502),
    u = n(754302),
    d = n(632738),
    f = n(544231),
    p = n(349435),
    h = n(665909),
    b = n(576045),
    g = n(477427),
    m = n(56462),
    A = n(652215),
    y = n(985018);
function O(e) {
    let { channelId: t, warningId: O, senderId: j } = e,
        v = (0, m.CW)(),
        x = l.useCallback(() => {
            (0, f.xi)(t, [O]);
        }, [t, O]),
        E = (e) => {
            s.A.updateChannelOverrideSettings(null, t, { muted: !0 }, g.fd.Muted),
                c.A.showMuteSuccessToast(j, t),
                (0, h._$)({
                    channelId: t,
                    warningId: O,
                    senderId: j,
                    warningType: p._j.LIKELY_ATO,
                    cta: e,
                }),
                x();
        };
    return (
        l.useEffect(() => {
            (0, h.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: O,
                senderId: j,
                warningType: p._j.LIKELY_ATO,
            }),
                o.A.increment({ name: i.K.SAFETY_WARNING_VIEW });
        }, [t, O, j]),
        (0, r.jsx)(b.N, {
            channelId: t,
            warningId: O,
            senderId: j,
            warningType: p._j.LIKELY_ATO,
            header: y.intl.string(y.t.R8UsiI),
            description: y.intl.string(y.t.lI8nQl),
            onDismiss: x,
            buttons: [
                {
                    text: y.intl.string(y.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, a.mMO)(async () => {
                            let { default: e } = await n.e("8546").then(n.bind(n, 63865));
                            return (n) => {
                                let { transitionState: l, onClose: i } = n;
                                return (0, r.jsx)(e, {
                                    transitionState: l,
                                    onClose: i,
                                    channelId: t,
                                    warningId: O,
                                    senderId: j,
                                    description: y.intl.string(y.t["/uid3p"]),
                                    safetyTipRows: v.map((e, t) =>
                                        (0, r.jsx)(
                                            u.B,
                                            {
                                                listType: "numbered",
                                                index: t,
                                                title: e.title,
                                                description: e.description,
                                            },
                                            t,
                                        ),
                                    ),
                                    actionRows: [
                                        (0, r.jsx)(
                                            d.PQ,
                                            {
                                                title: y.intl.string(y.t.ftIK2A),
                                                description: y.intl.string(y.t.w2ve0t),
                                                buttonText: y.intl.string(y.t.ftIK2A),
                                                onButtonPress: () => {
                                                    E(h.Wm.USER_MODAL_MUTE), i();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, r.jsx)(a.DUT, {
                                        onClick: () =>
                                            (0, h._$)({
                                                channelId: t,
                                                warningId: O,
                                                senderId: j,
                                                warningType: p._j.LIKELY_ATO,
                                                cta: h.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, r.jsx)(a.Heading, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: y.intl.format(y.t.UkH122, { learnMoreLink: m.u6 }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, h._$)({
                                channelId: t,
                                warningId: O,
                                senderId: j,
                                warningType: p._j.LIKELY_ATO,
                                cta: h.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                {
                    text: y.intl.string(y.t.ftIK2A),
                    onClick: () => E(h.Wm.USER_BANNER_MUTE),
                },
            ],
        })
    );
}
