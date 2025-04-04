n.d(t, {
    Z: () => f,
    s: () => d
});
var r = n(200651);
n(192379);
var i = n(763472),
    o = n(394821),
    a = n(49012),
    s = n(591759),
    l = n(475413),
    c = n(388032),
    u = n(227832);
async function d(e) {
    let { activity: t, user: n, index: r } = e;
    try {
        let e = await (0, i.sd)(t, n.id);
        if (e.button_urls.length <= r) return;
        let o = e.button_urls[r];
        if ('string' != typeof o) return;
        let l = s.Z.safeParseWithQuery(o);
        if ((null == l ? void 0 : l.protocol) == null || (null == l ? void 0 : l.hostname) == null) return;
        (0, a.q)({
            href: s.Z.format(l),
            trusted: !1
        });
    } catch (e) {}
}
function f(e) {
    let { user: t, activity: n, onAction: i } = e;
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let a = (0, o.Z)(n);
    return (0, r.jsx)(r.Fragment, {
        children: n.buttons.map((e, o) =>
            (0, r.jsx)(
                l.tG,
                {
                    text: a ? c.NW.string(c.t['I6JG4+']) : e,
                    className: u.customButton,
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(),
                            null == i || i({ action: a ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                            d({
                                user: t,
                                activity: n,
                                index: o
                            });
                    }
                },
                o
            )
        )
    });
}
