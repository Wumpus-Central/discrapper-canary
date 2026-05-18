i.d(a, { default: () => p });
var n = i(627968),
    e = i(64700),
    s = i(189213),
    l = i(260598),
    o = i(720149),
    c = i(622142),
    r = i(309010),
    d = i(174459),
    u = i(652215),
    g = i(381941),
    h = i(375708),
    C = i(487837);
function p(t) {
    let {
            transitionState: a,
            onClose: i,
            onGIFSelected: p,
            hideFavorites: E = !1,
            modalTitle: N = h.intl.string(h.t["0VinIJ"]),
            defaultText: S = h.intl.string(h.t.OrwKgi),
            giftIntentType: j,
            analyticsLocationHistory: k,
        } = t,
        [m, I] = e.useState(null),
        [_, v] = e.useState(""),
        T = e.useCallback(
            (t) => {
                I(t), p?.(t);
            },
            [p],
        ),
        G = e.useCallback(async () => {
            if (null != m) {
                let t = r.A.getChannelId();
                null != t &&
                    ("" !== _ &&
                        (await o.A.sendMessage(
                            t,
                            { content: _, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                            !0,
                            { location: g.Hx.GIFTING },
                        )),
                    await o.A.sendMessage(
                        t,
                        { content: m.url, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                        !0,
                        { location: g.Hx.GIFTING },
                    ),
                    null != j &&
                        d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: j,
                            is_custom_message: "" !== _,
                            location_stack: k,
                        }),
                    await i());
            }
        }, [m, _, i, j, k]);
    return (0, n.jsx)(s.Modal, {
        transitionState: a,
        onClose: i,
        title: N,
        input: (0, n.jsx)(l.f, { value: _, onChange: (t) => v(t), placeholder: S }),
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: i },
            { variant: "primary", text: h.intl.string(h.t.TXNS7S), onClick: G, loading: !1, disabled: null == m },
        ],
        children: (0, n.jsx)(c.A, {
            hideFavorites: E,
            onSelectGIF: T,
            selectedGIF: m,
            initialQuery: h.intl.string(h.t.jrtJi4),
            className: C.jT,
            headerClassName: C.Hc,
            contentClassName: C.jE,
        }),
    });
}
