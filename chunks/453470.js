n.d(t, { M: () => _ }), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(286379),
    a = n(481060),
    o = n(87051),
    s = n(797614),
    c = n(681678),
    u = n(819557),
    d = n(138201),
    p = n(378298),
    h = n(359119),
    f = n(473092),
    m = n(177342),
    g = n(621600),
    b = n(870991),
    C = n(981631),
    y = n(388032);
function _(e) {
    let { channelId: t, warningId: _, senderId: v } = e,
        O = (0, b.E4)(),
        x = r.useCallback(() => {
            (0, p.T)(t, [_]);
        }, [t, _]),
        E = (e) => {
            o.Z.updateChannelOverrideSettings(null, t, { muted: !0 }, g.ZB.Muted),
                c.Z.showMuteSuccessToast(v, t),
                (0, f.qc)({
                    channelId: t,
                    warningId: _,
                    senderId: v,
                    warningType: h.pj.LIKELY_ATO,
                    cta: e,
                }),
                x();
        };
    return (
        r.useEffect(() => {
            (0, f.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: _,
                senderId: v,
                warningType: h.pj.LIKELY_ATO,
            }),
                s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
        }, [t, _, v]),
        (0, i.jsx)(m.Q, {
            channelId: t,
            warningId: _,
            senderId: v,
            warningType: h.pj.LIKELY_ATO,
            header: y.intl.string(y.t.R8UsiI),
            description: y.intl.string(y.t.lI8nQl),
            onDismiss: x,
            buttons: [
                {
                    text: y.intl.string(y.t.tC1pvL),
                    variant: "primary",
                    onClick: () => {
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e("59385").then(n.bind(n, 480884));
                            return (n) => {
                                let { transitionState: r, onClose: l } = n;
                                return (0, i.jsx)(e, {
                                    transitionState: r,
                                    onClose: l,
                                    channelId: t,
                                    warningId: _,
                                    senderId: v,
                                    description: y.intl.string(y.t["/uid3p"]),
                                    safetyTipRows: O.map((e, t) =>
                                        (0, i.jsx)(
                                            u.q,
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
                                            d.JZ,
                                            {
                                                title: y.intl.string(y.t.ftIK2A),
                                                description: y.intl.string(y.t.w2ve0t),
                                                buttonText: y.intl.string(y.t.ftIK2A),
                                                onButtonPress: () => {
                                                    E(f.NM.USER_MODAL_MUTE), l();
                                                },
                                            },
                                            "likely-ato-mute",
                                        ),
                                    ],
                                    learnMore: (0, i.jsx)(a.P3F, {
                                        onClick: () =>
                                            (0, f.qc)({
                                                channelId: t,
                                                warningId: _,
                                                senderId: v,
                                                warningType: h.pj.LIKELY_ATO,
                                                cta: f.NM.USER_MODAL_LEARN_MORE,
                                            }),
                                        children: (0, i.jsx)(a.Heading, {
                                            variant: "heading-sm/medium",
                                            color: "text-link",
                                            children: y.intl.format(y.t.UkH122, { learnMoreLink: b.D8 }),
                                        }),
                                    }),
                                });
                            };
                        }),
                            (0, f.qc)({
                                channelId: t,
                                warningId: _,
                                senderId: v,
                                warningType: h.pj.LIKELY_ATO,
                                cta: f.NM.OPEN_MORE_TIPS,
                            });
                    },
                },
                {
                    text: y.intl.string(y.t.ftIK2A),
                    onClick: () => E(f.NM.USER_BANNER_MUTE),
                },
            ],
        })
    );
}
