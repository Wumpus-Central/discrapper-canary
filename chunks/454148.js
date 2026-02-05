n.d(t, { L: () => C });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(397927),
    r = n(832712),
    o = n(831062),
    c = n(662502),
    d = n(754302),
    u = n(632738),
    h = n(544231),
    m = n(349435),
    A = n(665909),
    p = n(576045),
    g = n(477427),
    f = n(56462),
    _ = n(652215),
    E = n(985018);
function C(e) {
    let { channelId: t, warningId: C, senderId: x } = e,
        S = (0, f.CW)(),
        T = l.useCallback(() => {
            (0, h.xi)(t, [C]);
        }, [t, C]),
        I = (e) => {
            r.A.updateChannelOverrideSettings(null, t, { muted: !0 }, g.fd.Muted),
                c.A.showMuteSuccessToast(x, t),
                (0, A._$)({ channelId: t, warningId: C, senderId: x, warningType: m._j.LIKELY_ATO, cta: e }),
                T();
        };
    return (
        l.useEffect(() => {
            (0, A.mO)(_.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: C,
                senderId: x,
                warningType: m._j.LIKELY_ATO,
            }),
                o.A.increment({ name: a.K.SAFETY_WARNING_VIEW });
        }, [t, C, x]),
        (0, i.jsx)(p.N, {
            channelId: t,
            warningId: C,
            senderId: x,
            warningType: m._j.LIKELY_ATO,
            header: E.intl.string(E.t.R8UsiI),
            description: E.intl.string(E.t.lI8nQl),
            onDismiss: T,
            buttons: [
                {
                    text: E.intl.string(E.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, s.mMO)(async () => {
                            let { default: e } = await n.e("8546").then(n.bind(n, 63865));
                            return (n) => {
                                let { transitionState: l, onClose: a } = n;
                                return (0, i.jsx)(e, {
                                    transitionState: l,
                                    onClose: a,
                                    channelId: t,
                                    warningId: C,
                                    senderId: x,
                                    description: E.intl.string(E.t["/uid3p"]),
                                    safetyTipRows: S.map((e, t) =>
                                        (0, i.jsx)(
                                            d.B,
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
                                        (0, i.jsx)(
                                            u.PQ,
                                            {
                                                title: E.intl.string(E.t.ftIK2A),
                                                description: E.intl.string(E.t.w2ve0t),
                                                buttonText: E.intl.string(E.t.ftIK2A),
                                                onButtonPress: () => {
                                                    I(A.Wm.USER_MODAL_MUTE), a();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, i.jsx)(s.DUT, {
                                        onClick: () =>
                                            (0, A._$)({
                                                channelId: t,
                                                warningId: C,
                                                senderId: x,
                                                warningType: m._j.LIKELY_ATO,
                                                cta: A.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, i.jsx)(s.Heading, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: E.intl.format(E.t.UkH122, { learnMoreLink: f.u6 }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, A._$)({
                                channelId: t,
                                warningId: C,
                                senderId: x,
                                warningType: m._j.LIKELY_ATO,
                                cta: A.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: E.intl.string(E.t.ftIK2A), onClick: () => I(A.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
