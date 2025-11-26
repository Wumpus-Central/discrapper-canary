n.d(i, { default: () => h }), n(388685);
var a = n(54381),
    e = n(473749),
    l = n(793030),
    s = n(481060),
    o = n(904245),
    r = n(455708),
    c = n(944486),
    d = n(959517),
    u = n(388032);
function h(t) {
    let {
            transitionState: i,
            onClose: n,
            onGIFSelected: h,
            hideFavorites: g = !1,
            modalTitle: p = u.intl.string(u.t["0VinIJ"]),
            defaultText: C = u.intl.string(u.t.OrwKgi),
        } = t,
        [v, j] = e.useState(null),
        [k, I] = e.useState(C),
        S = e.useCallback(
            (t) => {
                j(t), null == h || h(t);
            },
            [h],
        ),
        w = e.useCallback(async () => {
            if (null != v) {
                let t = c.Z.getChannelId();
                null != t &&
                    (await o.Z.sendMessage(
                        t,
                        {
                            content: k,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                        },
                        !0,
                        { location: d.dy.GIFTING },
                    ),
                    await o.Z.sendMessage(
                        t,
                        {
                            content: v.url,
                            tts: !1,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                        },
                        !0,
                        { location: d.dy.GIFTING },
                    ),
                    await n());
            }
        }, [v, k, n]);
    return (0, a.jsx)(l.Modal, {
        transitionState: i,
        onClose: n,
        title: p,
        input: (0, a.jsx)(s.Kx8, {
            value: k,
            onChange: (t) => I(t),
            placeholder: C,
        }),
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.TXNS7S),
                onClick: w,
                loading: !1,
            },
        ],
        children: (0, a.jsx)(r.Z, {
            hideFavorites: g,
            onSelectGIF: S,
            selectedGIF: v,
            initialQuery: u.intl.string(u.t.jrtJi4),
        }),
    });
}
