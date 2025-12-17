a.d(n, { default: () => C }), a(388685);
var e = a(54381),
    i = a(473749),
    l = a(793030),
    s = a(481060),
    o = a(904245),
    d = a(455708),
    r = a(944486),
    c = a(626135),
    u = a(981631),
    h = a(959517),
    g = a(388032),
    p = a(557142);
function C(t) {
    let {
            transitionState: n,
            onClose: a,
            onGIFSelected: C,
            hideFavorites: S = !1,
            modalTitle: k = g.intl.string(g.t["0VinIJ"]),
            defaultText: E = g.intl.string(g.t.OrwKgi),
            giftIntentType: I,
            analyticsLocationHistory: m,
        } = t,
        [v, N] = i.useState(null),
        [_, f] = i.useState(""),
        j = i.useCallback(
            (t) => {
                N(t), null == C || C(t);
            },
            [C],
        ),
        x = i.useCallback(async () => {
            if (null != v) {
                let t = r.Z.getChannelId();
                null != t &&
                    ("" !== _ &&
                        (await o.Z.sendMessage(
                            t,
                            {
                                content: _,
                                tts: !1,
                                invalidEmojis: [],
                                validNonShortcutEmojis: [],
                            },
                            !0,
                            { location: h.dy.GIFTING },
                        )),
                    await o.Z.sendMessage(
                        t,
                        {
                            content: v.url,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                        },
                        !0,
                        { location: h.dy.GIFTING },
                    ),
                    null != I &&
                        c.default.track(u.rMx.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: I,
                            location_stack: m,
                        }),
                    await a());
            }
        }, [v, _, a, I, m]);
    return (0, e.jsx)(l.Modal, {
        transitionState: n,
        onClose: a,
        title: k,
        input: (0, e.jsx)(s.Kx8, {
            value: _,
            onChange: (t) => f(t),
            placeholder: E,
        }),
        actions: [
            {
                variant: "secondary",
                text: g.intl.string(g.t["ETE/oC"]),
                onClick: a,
            },
            {
                variant: "primary",
                text: g.intl.string(g.t.TXNS7S),
                onClick: x,
                loading: !1,
                disabled: null == v,
            },
        ],
        children: (0, e.jsx)(d.Z, {
            hideFavorites: S,
            onSelectGIF: j,
            selectedGIF: v,
            initialQuery: g.intl.string(g.t.jrtJi4),
            headerClassName: p.modalHeader,
        }),
    });
}
