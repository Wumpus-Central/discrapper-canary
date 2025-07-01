n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(18857),
    s = n(970731),
    c = n(921944),
    u = n(93841),
    d = n(388032),
    h = n(951078),
    p = n(128647);
function f(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0 ? s.DF.LEFT_TOP : s.DF.TOP_CENTER,
        f = (0, a.Z)(t),
        g = i === s.DF.TOP_CENTER || i === s.DF.LEFT_TOP ? h[i] : '';
    return (0, r.jsx)(s.ZP, {
        asset: (0, r.jsxs)('div', {
            className: h.imageContainer,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: p.Z,
                    className: h.image
                }),
                (0, r.jsx)(o.olH, {
                    className: h.close,
                    onClick: () => (null == n ? void 0 : n(c.L.USER_DISMISS))
                })
            ]
        }),
        header: (0, r.jsx)(o.Text, {
            variant: 'text-md/semibold',
            children: d.intl.string(u.default.bw76aG)
        }),
        content: (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: d.intl.string(u.default['/DTbiY'])
        }),
        buttonCTA: d.intl.string(d.t['oPAx7+']),
        onClick: f,
        className: l()(h.container, g),
        caretPosition: i,
        markAsDismissed: n
    });
}
