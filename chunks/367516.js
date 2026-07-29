a.d(i, { default: () => m });
var e = a(477900),
    n = a(582128),
    s = a(224640),
    l = a(20742),
    r = a(707554),
    c = a(696208),
    o = a(260598),
    d = a(308528),
    u = a(148494),
    h = a(622142),
    g = a(309010),
    j = a(174459),
    p = a(652215),
    v = a(381941),
    x = a(375708),
    C = a(129973);
function m(t) {
    let {
            transitionState: i,
            onClose: a,
            onGIFSelected: m,
            hideFavorites: I = !1,
            modalTitle: N = x.intl.string(x.t["0VinIJ"]),
            defaultText: S = x.intl.string(x.t.OrwKgi),
            giftIntentType: k,
            analyticsLocationHistory: E,
            recipient: _,
        } = t,
        [w, F] = n.useState(null),
        [G, T] = n.useState(""),
        f = n.useCallback(
            (t) => {
                F(t), m?.(t);
            },
            [m],
        ),
        A = n.useCallback(async () => {
            if (null != w) {
                let t = null != _ ? await d.A.openPrivateChannel({ recipientIds: _.id }) : g.Ay.getChannelId();
                null != t &&
                    ("" !== G &&
                        (await u.A.sendMessage(
                            t,
                            { content: G, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                            !0,
                            { location: v.Hx.GIFTING },
                        )),
                    await u.A.sendMessage(
                        t,
                        { content: w.url, tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] },
                        !0,
                        { location: v.Hx.GIFTING },
                    ),
                    null != k &&
                        j.default.track(p.HAw.GIFT_INTENT_MESSAGE_SENT, {
                            gift_intent_type: k,
                            is_custom_message: "" !== G,
                            location_stack: E,
                        }),
                    await a());
            }
        }, [w, G, a, k, E, _]);
    return (0, e.jsxs)(s.d, {
        transitionState: i,
        onClose: a,
        "aria-label": N,
        size: "md",
        children: [
            (0, e.jsx)(l.rQ, { title: N }),
            (0, e.jsx)("div", {
                className: C.ne,
                children: (0, e.jsx)(o.f, { value: G, onChange: (t) => T(t), placeholder: S }),
            }),
            (0, e.jsx)("div", {
                className: C.rf,
                children: (0, e.jsx)(r.F, {
                    children: (0, e.jsx)(h.A, {
                        hideFavorites: I,
                        onSelectGIF: f,
                        selectedGIF: w,
                        initialQuery: x.intl.string(x.t.jrtJi4),
                        headerClassName: C.Hc,
                    }),
                }),
            }),
            (0, e.jsx)(c.H, {
                actionsFullWidth: !0,
                actions: [
                    { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: a },
                    {
                        variant: "primary",
                        text: x.intl.string(x.t.TXNS7S),
                        onClick: A,
                        loading: !1,
                        disabled: null == w,
                    },
                ],
            }),
        ],
    });
}
