n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(763472),
    a = n(49012),
    r = n(591759),
    s = n(915863);
function o(e) {
    let { activity: t, color: n, user: o, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let i = await (0, l.sd)(e, t);
            if (i.button_urls.length <= n) return;
            let s = i.button_urls[n];
            if ('string' != typeof s) return;
            let o = r.Z.safeParseWithQuery(s);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, a.q)({
                href: r.Z.format(o),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, i.jsx)(i.Fragment, {
        children: t.buttons.map((e, l) =>
            (0, i.jsx)(
                s.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        null == u || u(), d(t, o.id, l);
                    },
                    children: e
                },
                'customButton-'.concat(l)
            )
        )
    });
}
