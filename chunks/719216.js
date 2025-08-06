n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(763472),
    o = n(49012),
    a = n(591759),
    s = n(915863);
function l(e) {
    let { activity: t, color: n, user: l, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let r = await (0, i.sd)(e, t);
            if (r.button_urls.length <= n) return;
            let s = r.button_urls[n];
            if ('string' != typeof s) return;
            let l = a.Z.safeParseWithQuery(s);
            if (null == l || null == l.protocol || null == l.hostname) return;
            (0, o.q)({
                href: a.Z.format(l),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, i) =>
            (0, r.jsx)(
                s.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        (null == u || u(), d(t, l.id, i));
                    },
                    children: e
                },
                'customButton-'.concat(i)
            )
        )
    });
}
