r.d(n, {
    Z: function () {
        return _;
    },
    s: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(763472),
    s = r(394821),
    o = r(49012),
    l = r(591759),
    u = r(475413),
    c = r(388032),
    d = r(249942);
async function f(e) {
    let { activity: n, user: r, index: i } = e;
    try {
        let e = await (0, a.sd)(n, r.id);
        if (e.button_urls.length <= i) return;
        let s = e.button_urls[i];
        if ('string' != typeof s) return;
        let u = l.Z.safeParseWithQuery(s);
        if ((null == u ? void 0 : u.protocol) == null || (null == u ? void 0 : u.hostname) == null) return;
        (0, o.q)({
            href: l.Z.format(u),
            trusted: !1
        });
    } catch (e) {}
}
function _(e) {
    let { user: n, activity: r, onAction: a } = e;
    if ((null == r ? void 0 : r.buttons) == null || r.buttons.length < 1) return null;
    let o = (0, s.Z)(r);
    return (0, i.jsx)(i.Fragment, {
        children: r.buttons.map((e, s) =>
            (0, i.jsx)(
                u.tG,
                {
                    text: o ? c.intl.string(c.t['I6JG4+']) : e,
                    className: d.customButton,
                    fullWidth: !0,
                    onClick: (e) => {
                        e.stopPropagation(),
                            null == a || a({ action: o ? 'PRESS_WATCH_ON_CRUNCHYROLL_BUTTON' : 'PRESS_CUSTOM_BUTTON' }),
                            f({
                                user: n,
                                activity: r,
                                index: s
                            });
                    }
                },
                s
            )
        )
    });
}
