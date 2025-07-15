n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(763472),
    l = n(49012),
    a = n(591759),
    o = n(915863);
function s(e) {
    let { activity: t, color: n, user: s, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let r = await (0, i.sd)(e, t);
            if (r.button_urls.length <= n) return;
            let o = r.button_urls[n];
            if ('string' != typeof o) return;
            let s = a.Z.safeParseWithQuery(o);
            if (null == s || null == s.protocol || null == s.hostname) return;
            (0, l.q)({
                href: a.Z.format(s),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, i) =>
            (0, r.jsx)(
                o.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        (null == u || u(), d(t, s.id, i));
                    },
                    children: e
                },
                'customButton-'.concat(i)
            )
        )
    });
}
