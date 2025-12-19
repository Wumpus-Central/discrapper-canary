a.d(n, { default: () => g }), a(388685);
var e = a(54381),
    i = a(473749),
    l = a(793030),
    o = a(481060),
    s = a(904245),
    d = a(455708),
    r = a(944486),
    c = a(626135),
    u = a(981631),
    C = a(959517),
    m = a(388032),
    h = a(557142);
function g(t) {
    let {
            transitionState: n,
            onClose: a,
            onGIFSelected: g,
            hideFavorites: p = !1,
            modalTitle: b = m.intl.string(m.t["0VinIJ"]),
            defaultText: N = m.intl.string(m.t.OrwKgi),
            giftIntentType: S,
            analyticsLocationHistory: _,
        } = t,
        [f, k] = i.useState(null),
        [E, I] = i.useState(""),
        v = i.useCallback(
            (t) => {
                k(t), null == g || g(t);
            },
            [g],
        ),
        j = i.useCallback(async () => {
            if (null != f) {
                let t = r.Z.getChannelId();
                null != t &&
                    ("" !== E &&
                        (await s.Z.sendMessage(
                            t,
                            {
                                content: E,
                                tts: !1,
                                invalidEmojis: [],
                                validNonShortcutEmojis: [],
                            },
                            !0,
                            { location: C.dy.GIFTING },
                        )),
                    await s.Z.sendMessage(
                        t,
                        {
                            content: f.url,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                        },
                        !0,
                        { location: C.dy.GIFTING },
                    ),
                    null != S &&
                        c.default.track(u.rMx.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: S,
                            location_stack: _,
                        }),
                    await a());
            }
        }, [f, E, a, S, _]);
    return (0, e.jsx)(l.Modal, {
        transitionState: n,
        onClose: a,
        title: b,
        input: (0, e.jsx)(o.Kx8, {
            value: E,
            onChange: (t) => I(t),
            placeholder: N,
        }),
        actions: [
            {
                variant: "secondary",
                text: m.intl.string(m.t["ETE/oC"]),
                onClick: a,
            },
            {
                variant: "primary",
                text: m.intl.string(m.t.TXNS7S),
                onClick: j,
                loading: !1,
                disabled: null == f,
            },
        ],
        children: (0, e.jsx)(d.Z, {
            hideFavorites: p,
            onSelectGIF: v,
            selectedGIF: f,
            initialQuery: m.intl.string(m.t.jrtJi4),
            className: h.modalContainer,
            headerClassName: h.modalHeader,
            contentClassName: h.modalContent,
        }),
    });
}
