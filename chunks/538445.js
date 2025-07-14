n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(18857),
    a = n(970731),
    c = n(921944),
    u = n(93841),
    d = n(388032),
    h = n(951078),
    p = n(128647);
function f(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0 ? a.DF.LEFT_TOP : a.DF.TOP_CENTER,
        f = (0, s.Z)(t),
        g = i === a.DF.TOP_CENTER || i === a.DF.LEFT_TOP ? h[i] : '';
    return (0, r.jsx)(a.ZP, {
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
                    innerClassName: h.innerClose,
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
