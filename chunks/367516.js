a.d(i, { default: () => C });
var e = a(477900),
    n = a(582128),
    s = a(224640),
    l = a(20742),
    c = a(707554),
    o = a(696208),
    r = a(260598),
    d = a(148494),
    u = a(622142),
    h = a(309010),
    g = a(174459),
    j = a(652215),
    x = a(381941),
    m = a(375708),
    v = a(129973);
function C(t) {
    let {
            transitionState: i,
            onClose: a,
            onGIFSelected: C,
            hideFavorites: N = !1,
            modalTitle: S = m.intl.string(m.t["0VinIJ"]),
            defaultText: k = m.intl.string(m.t.OrwKgi),
            giftIntentType: p,
            analyticsLocationHistory: E,
        } = t,
        [I, _] = n.useState(null),
        [F, G] = n.useState(""),
        T = n.useCallback(
            (t) => {
                _(t), C?.(t);
            },
            [C],
        ),
        f = n.useCallback(async () => {
            if (null != I) {
                let t = h.Ay.getChannelId();
                null != t &&
                    ("" !== F &&
                        (await d.A.sendMessage(
                            t,
                            { content: F, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                            !0,
                            { location: x.Hx.GIFTING },
                        )),
                    await d.A.sendMessage(
                        t,
                        { content: I.url, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                        !0,
                        { location: x.Hx.GIFTING },
                    ),
                    null != p &&
                        g.default.track(j.HAw.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: p,
                            is_custom_message: "" !== F,
                            location_stack: E,
                        }),
                    await a());
            }
        }, [I, F, a, p, E]);
    return (0, e.jsxs)(s.d, {
        transitionState: i,
        onClose: a,
        "aria-label": S,
        size: "md",
        children: [
            (0, e.jsx)(l.rQ, { title: S }),
            (0, e.jsx)("div", {
                className: v.ne,
                children: (0, e.jsx)(r.f, { value: F, onChange: (t) => G(t), placeholder: k }),
            }),
            (0, e.jsx)("div", {
                className: v.rf,
                children: (0, e.jsx)(c.F, {
                    children: (0, e.jsx)(u.A, {
                        hideFavorites: N,
                        onSelectGIF: T,
                        selectedGIF: I,
                        initialQuery: m.intl.string(m.t.jrtJi4),
                        headerClassName: v.Hc,
                    }),
                }),
            }),
            (0, e.jsx)(o.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: a },
                    {
                        variant: "primary",
                        text: m.intl.string(m.t.TXNS7S),
                        onClick: f,
                        loading: !1,
                        disabled: null == I,
                    },
                ],
            }),
        ],
    });
}
