i.d(t, {
    Z: () => f,
    s: () => g
}),
    i(47120);
var n,
    a = i(200651),
    o = i(192379),
    s = i(442837),
    l = i(481060),
    r = i(749210),
    c = i(313201),
    d = i(823379),
    u = i(41776),
    h = i(981631),
    m = i(388032),
    p = i(934964),
    g = (((n = {})[(n.CHAT = 0)] = 'CHAT'), (n[(n.REACTIONS = 1)] = 'REACTIONS'), n);
let f = (e) => {
    let { type: t, guild: n, closePopout: g, ctaRef: f } = e,
        v = (0, c.Dt)(),
        [x, b] = o.useState(!1),
        T = (0, s.e7)([u.Z], () => u.Z.isLurking(n.id), [n.id]);
    o.useEffect(() => {
        x && !T && g();
    }, [x, T, g]);
    let j = null,
        _ = m.intl.string(m.t.d7b1p6);
    switch (t) {
        case 0:
            j = m.intl.string(m.t.Xiwf1d);
            break;
        case 1:
            j = m.intl.string(m.t.GXvlU1);
            break;
        default:
            return (0, d.vE)(t);
    }
    if (null == j) return null;
    let C = async () => {
        b(!0);
        try {
            await r.Z.joinGuild(n.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), g();
        } catch {
            b(!1);
        }
    };
    return (0, a.jsxs)(l.VqE, {
        className: p.container,
        'aria-labelledby': v,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: p.image,
                src: i(64395)
            }),
            (0, a.jsxs)('div', {
                className: p.content,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        id: v,
                        children: j
                    }),
                    (0, a.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: _
                    }),
                    (0, a.jsxs)('div', {
                        className: p.buttonContainer,
                        children: [
                            (0, a.jsx)(l.zxk, {
                                buttonRef: f,
                                onClick: C,
                                submitting: x,
                                children: m.intl.string(m.t['9VLmlZ'])
                            }),
                            (0, a.jsx)(l.zxk, {
                                onClick: g,
                                look: l.zxk.Looks.BLANK,
                                className: p.cancel,
                                children: m.intl.string(m.t['2m+Sqq'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
