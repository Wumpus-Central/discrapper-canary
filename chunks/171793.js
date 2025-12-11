e.d(n, { default: () => g }), e(388685);
var i = e(54381),
    a = e(473749),
    l = e(793030),
    s = e(481060),
    o = e(904245),
    d = e(455708),
    r = e(944486),
    c = e(959517),
    u = e(388032),
    h = e(557142);
function g(t) {
    let {
            transitionState: n,
            onClose: e,
            onGIFSelected: g,
            hideFavorites: p = !1,
            modalTitle: C = u.intl.string(u.t["0VinIJ"]),
            defaultText: m = u.intl.string(u.t.OrwKgi),
        } = t,
        [v, j] = a.useState(null),
        [k, I] = a.useState(""),
        S = a.useCallback(
            (t) => {
                j(t), null == g || g(t);
            },
            [g],
        ),
        b = a.useCallback(async () => {
            if (null != v) {
                let t = r.Z.getChannelId();
                null != t &&
                    ("" !== k &&
                        (await o.Z.sendMessage(
                            t,
                            {
                                content: k,
                                tts: !1,
                                invalidEmojis: [],
                                validNonShortcutEmojis: [],
                            },
                            !0,
                            { location: c.dy.GIFTING },
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
                        { location: c.dy.GIFTING },
                    ),
                    await e());
            }
        }, [v, k, e]);
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: e,
        title: C,
        input: (0, i.jsx)(s.Kx8, {
            value: k,
            onChange: (t) => I(t),
            placeholder: m,
        }),
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: e,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.TXNS7S),
                onClick: b,
                loading: !1,
                disabled: null == v,
            },
        ],
        children: (0, i.jsx)(d.Z, {
            hideFavorites: p,
            onSelectGIF: S,
            selectedGIF: v,
            initialQuery: u.intl.string(u.t.jrtJi4),
            headerClassName: h.modalHeader,
        }),
    });
}
