n.d(a, { default: () => g });
var e = n(627968),
    i = n(64700),
    l = n(189213),
    s = n(260598),
    o = n(843472),
    c = n(855057),
    r = n(309010),
    d = n(954571),
    u = n(652215),
    C = n(381941),
    _ = n(985018),
    h = n(487837);
function g(t) {
    let {
            transitionState: a,
            onClose: n,
            onGIFSelected: g,
            hideFavorites: j = !1,
            modalTitle: p = _.intl.string(_.t["0VinIJ"]),
            defaultText: E = _.intl.string(_.t.OrwKgi),
            giftIntentType: m,
            analyticsLocationHistory: N,
        } = t,
        [S, k] = i.useState(null),
        [I, T] = i.useState(""),
        f = i.useCallback(
            (t) => {
                k(t), g?.(t);
            },
            [g],
        ),
        v = i.useCallback(async () => {
            if (null != S) {
                let t = r.A.getChannelId();
                null != t &&
                    ("" !== I &&
                        (await o.A.sendMessage(
                            t,
                            { content: I, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                            !0,
                            { location: C.Hx.GIFTING },
                        )),
                    await o.A.sendMessage(
                        t,
                        { content: S.url, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                        !0,
                        { location: C.Hx.GIFTING },
                    ),
                    null != m &&
                        d.default.track(u.HAw.GIFT_INTENT_MESSAGE_SENT, { gift_intent_type: m, location_stack: N }),
                    await n());
            }
        }, [S, I, n, m, N]);
    return (0, e.jsx)(l.Modal, {
        transitionState: a,
        onClose: n,
        title: p,
        input: (0, e.jsx)(s.f, { value: I, onChange: (t) => T(t), placeholder: E }),
        actions: [
            { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: _.intl.string(_.t.TXNS7S), onClick: v, loading: !1, disabled: null == S },
        ],
        children: (0, e.jsx)(c.A, {
            hideFavorites: j,
            onSelectGIF: f,
            selectedGIF: S,
            initialQuery: _.intl.string(_.t.jrtJi4),
            className: h.jT,
            headerClassName: h.Hc,
            contentClassName: h.jE,
        }),
    });
}
