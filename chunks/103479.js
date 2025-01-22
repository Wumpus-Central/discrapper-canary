r.d(n, {
    Z: function () {
        return p;
    },
    s: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(763472),
    o = r(394821),
    s = r(49012),
    l = r(591759),
    u = r(475413),
    c = r(388032),
    d = r(249942);
async function f(e) {
    let { activity: n, user: r, index: i } = e;
    try {
        let e = await (0, a.sd)(n, r.id);
        if (e.button_urls.length <= i) return;
        let o = e.button_urls[i];
        if ('string' != typeof o) return;
        let u = l.Z.safeParseWithQuery(o);
        if ((null == u ? void 0 : u.protocol) == null || (null == u ? void 0 : u.hostname) == null) return;
        (0, s.q)({
            href: l.Z.format(u),
            trusted: !1
        });
    } catch (e) {}
}
function p(e) {
    let { user: n, activity: r, onAction: a } = e;
    if ((null == r ? void 0 : r.buttons) == null || r.buttons.length < 1) return null;
    let s = (0, o.Z)(r);
    return (0, i.jsx)(i.Fragment, {
        children: r.buttons.map((e, o) =>
            (0, i.jsx)(
                u.tG,
                {
                    text: s ? c.intl.string(c.t['I6JG4+']) : e,
                    className: d.customButton,
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(),
                            null == a || a({ action: s ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                            f({
                                user: n,
                                activity: r,
                                index: o
                            });
                    }
                },
                o
            )
        )
    });
}
