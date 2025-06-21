n.d(t, {
    Z: () => f,
    s: () => g
}),
    n(388685);
var i,
    r = n(255367),
    l = n(73800),
    o = n(442837),
    s = n(481060),
    a = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    h = n(981631),
    p = n(388032),
    m = n(695256),
    g = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let f = (e) => {
    let { type: t, guild: i, closePopout: g, ctaRef: f } = e,
        b = (0, c.Dt)(),
        [j, v] = l.useState(!1),
        O = (0, o.e7)([d.Z], () => d.Z.isLurking(i.id), [i.id]);
    l.useEffect(() => {
        j && !O && g();
    }, [j, O, g]);
    let y = null,
        x = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            y = p.intl.string(p.t.Xiwf1d);
            break;
        case 1:
            y = p.intl.string(p.t.GXvlU1);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == y) return null;
    let S = async () => {
        v(!0);
        try {
            await a.Z.joinGuild(i.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), g();
        } catch (e) {
            v(!1);
        }
    };
    return (0, r.jsxs)(s.VqE, {
        className: m.container,
        'aria-labelledby': b,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                className: m.image,
                src: n(64395)
            }),
            (0, r.jsxs)('div', {
                className: m.content,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: b,
                        children: y
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: x
                    }),
                    (0, r.jsxs)('div', {
                        className: m.buttonContainer,
                        children: [
                            (0, r.jsx)(s.zxk, {
                                buttonRef: f,
                                onClick: S,
                                submitting: j,
                                children: p.intl.string(p.t['9VLmlZ'])
                            }),
                            (0, r.jsx)(s.zxk, {
                                onClick: g,
                                look: s.zxk.Looks.BLANK,
                                className: m.cancel,
                                children: p.intl.string(p.t['2m+Sqq'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
