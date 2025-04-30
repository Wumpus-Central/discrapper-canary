n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(763472),
    i = n(49012),
    o = n(591759),
    a = n(915863);
function s(e) {
    let { activity: t, color: n, user: s, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let r = await (0, l.sd)(e, t);
            if (r.button_urls.length <= n) return;
            let a = r.button_urls[n];
            if ('string' != typeof a) return;
            let s = o.Z.safeParseWithQuery(a);
            if (null == s || null == s.protocol || null == s.hostname) return;
            (0, i.q)({
                href: o.Z.format(s),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, l) =>
            (0, r.jsx)(
                a.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        null == u || u(), d(t, s.id, l);
                    },
                    children: e
                },
                'customButton-'.concat(l)
            )
        )
    });
}
