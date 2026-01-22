a.d(n, {
    default: () => p,
}),
    a(896048);
var e = a(627968),
    i = a(64700),
    l = a(158954),
    s = a(397927),
    o = a(843472),
    c = a(855057),
    r = a(309010),
    d = a(954571),
    u = a(652215),
    h = a(381941),
    g = a(985018),
    j = a(787790);

function p(t) {
    let {
            transitionState: n,
            onClose: a,
            onGIFSelected: p,
            hideFavorites: C = !1,
            modalTitle: E = g.intl.string(g.t["0VinIJ"]),
            defaultText: b = g.intl.string(g.t.OrwKgi),
            giftIntentType: N,
            analyticsLocationHistory: S,
        } = t,
        [k, I] = i.useState(null),
        [T, v] = i.useState(""),
        _ = i.useCallback(
            (t) => {
                I(t), null == p || p(t);
            },
            [p],
        ),
        f = i.useCallback(async () => {
            if (null != k) {
                let t = r.A.getChannelId();
                null != t &&
                    ("" !== T &&
                        (await o.A.sendMessage(
                            t,
                            {
                                content: T,
                                tts: !1,
                                invalidEmojis: [],
                                validNonShortcutEmojis: [],
                            },
                            !0,
                            {
                                location: h.Hx.GIFTING,
                            },
                        )),
                    await o.A.sendMessage(
                        t,
                        {
                            content: k.url,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                        },
                        !0,
                        {
                            location: h.Hx.GIFTING,
                        },
                    ),
                    null != N &&
                        d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: N,
                            location_stack: S,
                        }),
                    await a());
            }
        }, [k, T, a, N, S]);
    return (0, e.jsx)(l.Modal, {
        transitionState: n,
        onClose: a,
        title: E,
        input: (0, e.jsx)(s.fs1, {
            value: T,
            onChange: (t) => v(t),
            placeholder: b,
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
                onClick: f,
                loading: !1,
                disabled: null == k,
            },
        ],
        children: (0, e.jsx)(c.A, {
            hideFavorites: C,
            onSelectGIF: _,
            selectedGIF: k,
            initialQuery: g.intl.string(g.t.jrtJi4),
            className: j.jT,
            headerClassName: j.Hc,
            contentClassName: j.jE,
        }),
    });
}
