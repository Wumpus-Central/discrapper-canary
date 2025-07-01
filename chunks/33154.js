(n.d(t, {
    Z: () => g,
    s: () => f
}),
    n(388685));
var i,
    r = n(255367),
    l = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    h = n(981631),
    p = n(388032),
    m = n(695256),
    f = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let g = (e) => {
    let { type: t, guild: i, closePopout: f, ctaRef: g } = e,
        b = (0, c.Dt)(),
        [j, O] = l.useState(!1),
        y = (0, o.e7)([d.Z], () => d.Z.isLurking(i.id), [i.id]);
    l.useEffect(() => {
        j && !y && f();
    }, [j, y, f]);
    let v = null,
        T = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            v = p.intl.string(p.t.Xiwf1d);
            break;
        case 1:
            v = p.intl.string(p.t.GXvlU1);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == v) return null;
    let x = async () => {
        O(!0);
        try {
            (await s.Z.joinGuild(i.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), f());
        } catch (e) {
            O(!1);
        }
    };
    return (0, r.jsxs)(a.VqE, {
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
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        id: b,
                        children: v
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: T
                    }),
                    (0, r.jsxs)('div', {
                        className: m.buttonContainer,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                buttonRef: g,
                                onClick: x,
                                submitting: j,
                                children: p.intl.string(p.t['9VLmlZ'])
                            }),
                            (0, r.jsx)(a.zxk, {
                                onClick: f,
                                look: a.zxk.Looks.BLANK,
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
