n.d(t, {
    Z: () => f,
    s: () => d
});
var i = n(200651);
n(192379);
var r = n(763472),
    a = n(394821),
    s = n(49012),
    o = n(591759),
    l = n(475413),
    u = n(388032),
    c = n(309584);
async function d(e) {
    let { activity: t, user: n, index: i } = e;
    try {
        let e = await (0, r.sd)(t, n.id);
        if (e.button_urls.length <= i) return;
        let a = e.button_urls[i];
        if ('string' != typeof a) return;
        let l = o.Z.safeParseWithQuery(a);
        if ((null == l ? void 0 : l.protocol) == null || (null == l ? void 0 : l.hostname) == null) return;
        (0, s.q)({
            href: o.Z.format(l),
            trusted: !1
        });
    } catch (e) {}
}
function f(e) {
    let { user: t, activity: n, onAction: r } = e;
    if ((null == n ? void 0 : n.buttons) == null || n.buttons.length < 1) return null;
    let s = (0, a.Z)(n);
    return (0, i.jsx)(i.Fragment, {
        children: n.buttons.map((e, a) =>
            (0, i.jsx)(
                l.tG,
                {
                    text: s ? u.intl.string(u.t['I6JG4+']) : e,
                    className: c.customButton,
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(),
                            null == r || r({ action: s ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                            d({
                                user: t,
                                activity: n,
                                index: a
                            });
                    }
                },
                a
            )
        )
    });
}
