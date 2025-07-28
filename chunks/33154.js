(n.d(t, {
    Z: () => b,
    s: () => g
}),
    n(388685));
var i,
    r = n(255367),
    l = n(73800),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    c = n(749210),
    u = n(313201),
    d = n(823379),
    h = n(41776),
    p = n(981631),
    m = n(388032),
    f = n(695256),
    g = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let b = (e) => {
    let { type: t, guild: i, closePopout: g, ctaRef: b } = e,
        j = (0, u.Dt)(),
        [O, y] = l.useState(!1),
        v = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
    l.useEffect(() => {
        O && !v && g();
    }, [O, v, g]);
    let T = null,
        S = m.intl.string(m.t.d7b1p6);
    switch (t) {
        case 0:
            T = m.intl.string(m.t.Xiwf1d);
            break;
        case 1:
            T = m.intl.string(m.t.GXvlU1);
            break;
        default:
            return (0, d.vE)(t);
    }
    if (null == T) return null;
    let x = async () => {
        y(!0);
        try {
            (await c.Z.joinGuild(i.id, { source: p.vtS.CHAT_INPUT_BLOCKER }), g());
        } catch (e) {
            y(!1);
        }
    };
    return (0, r.jsxs)(s.VqE, {
        className: f.container,
        'aria-labelledby': j,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: f.image,
                src: n(64395)
            }),
            (0, r.jsxs)('div', {
                className: f.content,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: j,
                        children: T
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: S
                    }),
                    (0, r.jsxs)('div', {
                        className: f.buttonContainer,
                        children: [
                            (0, r.jsx)(s.zxk, {
                                variant: 'primary',
                                text: m.intl.string(m.t['9VLmlZ']),
                                buttonRef: b,
                                onClick: x,
                                loading: O
                            }),
                            (0, r.jsx)(a.zx, {
                                onClick: g,
                                look: a.zx.Looks.BLANK,
                                className: f.cancel,
                                children: m.intl.string(m.t['2m+Sqq'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
