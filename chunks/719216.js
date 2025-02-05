n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(763472),
    r = n(49012),
    a = n(591759),
    s = n(915863);
function o(e) {
    let { activity: t, color: n, user: o, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let l = await (0, i.sd)(e, t);
            if (l.button_urls.length <= n) return;
            let s = l.button_urls[n];
            if ('string' != typeof s) return;
            let o = a.Z.safeParseWithQuery(s);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, r.q)({
                href: a.Z.format(o),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, l.jsx)(l.Fragment, {
        children: t.buttons.map((e, i) =>
            (0, l.jsx)(
                s.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        null == u || u(), d(t, o.id, i);
                    },
                    children: e
                },
                'customButton-'.concat(i)
            )
        )
    });
}
