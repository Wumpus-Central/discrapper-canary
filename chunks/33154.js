n.d(t, {
    Z: () => f,
    s: () => g
}),
    n(47120);
var i,
    a = n(200651),
    o = n(192379),
    s = n(442837),
    l = n(481060),
    r = n(749210),
    c = n(313201),
    d = n(823379),
    u = n(41776),
    h = n(981631),
    m = n(388032),
    p = n(904424),
    g = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let f = (e) => {
    let { type: t, guild: i, closePopout: g, ctaRef: f } = e,
        v = (0, c.Dt)(),
        [T, x] = o.useState(!1),
        _ = (0, s.e7)([u.Z], () => u.Z.isLurking(i.id), [i.id]);
    o.useEffect(() => {
        T && !_ && g();
    }, [T, _, g]);
    let b = null,
        j = m.intl.string(m.t.d7b1p6);
    switch (t) {
        case 0:
            b = m.intl.string(m.t.Xiwf1d);
            break;
        case 1:
            b = m.intl.string(m.t.GXvlU1);
            break;
        default:
            return (0, d.vE)(t);
    }
    if (null == b) return null;
    let C = async () => {
        x(!0);
        try {
            await r.Z.joinGuild(i.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), g();
        } catch {
            x(!1);
        }
    };
    return (0, a.jsxs)(l.VqE, {
        className: p.container,
        'aria-labelledby': v,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: p.image,
                src: n(64395)
            }),
            (0, a.jsxs)('div', {
                className: p.content,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        id: v,
                        children: b
                    }),
                    (0, a.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: j
                    }),
                    (0, a.jsxs)('div', {
                        className: p.buttonContainer,
                        children: [
                            (0, a.jsx)(l.zxk, {
                                buttonRef: f,
                                onClick: C,
                                submitting: T,
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
