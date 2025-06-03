n.d(t, {
    Z: () => g,
    s: () => m
}),
    n(388685);
var i,
    r = n(255367),
    o = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(749210),
    c = n(313201),
    u = n(823379),
    d = n(41776),
    h = n(981631),
    p = n(388032),
    f = n(695256),
    m = (((i = {})[(i.CHAT = 0)] = 'CHAT'), (i[(i.REACTIONS = 1)] = 'REACTIONS'), i);
let g = (e) => {
    let { type: t, guild: i, closePopout: m, ctaRef: g } = e,
        b = (0, c.Dt)(),
        [O, v] = o.useState(!1),
        j = (0, l.e7)([d.Z], () => d.Z.isLurking(i.id), [i.id]);
    o.useEffect(() => {
        O && !j && m();
    }, [O, j, m]);
    let y = null,
        _ = p.intl.string(p.t.d7b1p6);
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
            await a.Z.joinGuild(i.id, { source: h.vtS.CHAT_INPUT_BLOCKER }), m();
        } catch (e) {
            v(!1);
        }
    };
    return (0, r.jsxs)(s.VqE, {
        className: f.container,
        'aria-labelledby': b,
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
                        id: b,
                        children: y
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: _
                    }),
                    (0, r.jsxs)('div', {
                        className: f.buttonContainer,
                        children: [
                            (0, r.jsx)(s.zxk, {
                                buttonRef: g,
                                onClick: S,
                                submitting: O,
                                children: p.intl.string(p.t['9VLmlZ'])
                            }),
                            (0, r.jsx)(s.zxk, {
                                onClick: m,
                                look: s.zxk.Looks.BLANK,
                                className: f.cancel,
                                children: p.intl.string(p.t['2m+Sqq'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
