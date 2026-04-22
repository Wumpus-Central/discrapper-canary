n.d(t, { L: () => S });
var i = n(627968),
    l = n(64700),
    a = n(731738),
    s = n(192308),
    r = n(939249),
    o = n(534514),
    c = n(832712),
    d = n(831062),
    u = n(662502),
    h = n(754302),
    m = n(632738),
    A = n(544231),
    g = n(349435),
    p = n(665909),
    _ = n(576045),
    f = n(477427),
    E = n(56462),
    C = n(652215),
    x = n(985018);
function S(e) {
    let { channelId: t, warningId: S, senderId: I } = e,
        N = (0, E.CW)(),
        v = l.useCallback(() => {
            (0, A.xi)(t, [S]);
        }, [t, S]),
        T = (e) => {
            c.A.updateChannelOverrideSettings(null, t, { muted: !0 }, f.fd.Muted),
                u.A.showMuteSuccessToast(I, t),
                (0, p._$)({ channelId: t, warningId: S, senderId: I, warningType: g._j.LIKELY_ATO, cta: e }),
                v();
        };
    return (
        l.useEffect(() => {
            (0, p.mO)(C.HAw.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: S,
                senderId: I,
                warningType: g._j.LIKELY_ATO,
            }),
                d.A.increment({ name: a.K.SAFETY_WARNING_VIEW });
        }, [t, S, I]),
        (0, i.jsx)(_.N, {
            channelId: t,
            warningId: S,
            senderId: I,
            warningType: g._j.LIKELY_ATO,
            header: x.intl.string(x.t.R8UsiI),
            description: x.intl.string(x.t.lI8nQl),
            onDismiss: v,
            buttons: [
                {
                    text: x.intl.string(x.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await n.e("8546").then(n.bind(n, 63865));
                            return (n) => {
                                let { transitionState: l, onClose: a } = n;
                                return (0, i.jsx)(e, {
                                    transitionState: l,
                                    onClose: a,
                                    channelId: t,
                                    warningId: S,
                                    senderId: I,
                                    description: x.intl.string(x.t["/uid3p"]),
                                    safetyTipRows: N.map((e, t) =>
                                        (0, i.jsx)(
                                            h.B,
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
                                            m.PQ,
                                            {
                                                title: x.intl.string(x.t.ftIK2A),
                                                description: x.intl.string(x.t.w2ve0t),
                                                buttonText: x.intl.string(x.t.ftIK2A),
                                                onButtonPress: () => {
                                                    T(p.Wm.USER_MODAL_MUTE), a();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, i.jsx)(r.D, {
                                        onClick: () =>
                                            (0, p._$)({
                                                channelId: t,
                                                warningId: S,
                                                senderId: I,
                                                warningType: g._j.LIKELY_ATO,
                                                cta: p.Wm.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, i.jsx)(o.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: x.intl.format(x.t.UkH122, { learnMoreLink: E.u6 }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, p._$)({
                                channelId: t,
                                warningId: S,
                                senderId: I,
                                warningType: g._j.LIKELY_ATO,
                                cta: p.Wm.OPEN_MORE_TIPS,
                            });
                    },
                },
                { text: x.intl.string(x.t.ftIK2A), onClick: () => T(p.Wm.USER_BANNER_MUTE) },
            ],
        })
    );
}
