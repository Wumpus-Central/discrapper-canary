n.d(t, {
    Z: () => g,
    s: () => f
}),
    n(47120);
var i,
    o = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    l = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    h = n(981631),
    p = n(388032),
    m = n(209168),
    f = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let g = (e) => {
    let { type: t, guild: i, closePopout: f, ctaRef: g } = e,
        b = (0, c.Dt)(),
        [v, j] = r.useState(!1),
        O = (0, a.e7)([d.Z], () => d.Z.isLurking(i.id), [i.id]);
    r.useEffect(() => {
        v && !O && f();
    }, [v, O, f]);
    let y = null,
        x = p.NW.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            y = p.NW.string(p.t.Xiwf1d);
            break;
        case 1:
            y = p.NW.string(p.t.GXvlU1);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == y) return null;
    let T = async () => {
        j(!0);
        try {
            await l.Z.joinGuild(i.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), f();
        } catch (e) {
            j(!1);
        }
    };
    return (0, o.jsxs)(s.VqE, {
        className: m.container,
        'aria-labelledby': b,
        children: [
            (0, o.jsx)('img', {
                alt: '',
                className: m.image,
                src: n(64395)
            }),
            (0, o.jsxs)('div', {
                className: m.content,
                children: [
                    (0, o.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: b,
                        children: y
                    }),
                    (0, o.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: x
                    }),
                    (0, o.jsxs)('div', {
                        className: m.buttonContainer,
                        children: [
                            (0, o.jsx)(s.zxk, {
                                buttonRef: g,
                                onClick: T,
                                submitting: v,
                                children: p.NW.string(p.t['9VLmlZ'])
                            }),
                            (0, o.jsx)(s.zxk, {
                                onClick: f,
                                look: s.zxk.Looks.BLANK,
                                className: m.cancel,
                                children: p.NW.string(p.t['2m+Sqq'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
