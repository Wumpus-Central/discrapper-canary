n.d(t, {
    s: function () {
        return i;
    }
}),
    n(47120);
var i,
    o,
    a = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    c = n(749210),
    d = n(313201),
    u = n(823379),
    h = n(41776),
    m = n(981631),
    p = n(388032),
    f = n(904424);
((o = i || (i = {}))[(o.CHAT = 0)] = 'CHAT'), (o[(o.REACTIONS = 1)] = 'REACTIONS');
t.Z = (e) => {
    let { type: t, guild: i, closePopout: o, ctaRef: g } = e,
        v = (0, d.Dt)(),
        [b, T] = s.useState(!1),
        x = (0, l.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
    s.useEffect(() => {
        b && !x && o();
    }, [b, x, o]);
    let _ = null,
        j = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            _ = p.intl.string(p.t.Xiwf1d);
            break;
        case 1:
            _ = p.intl.string(p.t.GXvlU1);
            break;
        default:
            return (0, u.vE)(t);
    }
    if (null == _) return null;
    let C = async () => {
        T(!0);
        try {
            await c.Z.joinGuild(i.id, { source: m.vtS.CHAT_INPUT_BLOCKER }), o();
        } catch {
            T(!1);
        }
    };
    return (0, a.jsxs)(r.Dialog, {
        className: f.container,
        'aria-labelledby': v,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: f.image,
                src: n(64395)
            }),
            (0, a.jsxs)('div', {
                className: f.content,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        id: v,
                        children: _
                    }),
                    (0, a.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: j
                    }),
                    (0, a.jsxs)('div', {
                        className: f.buttonContainer,
                        children: [
                            (0, a.jsx)(r.Button, {
                                buttonRef: g,
                                onClick: C,
                                submitting: b,
                                children: p.intl.string(p.t['9VLmlZ'])
                            }),
                            (0, a.jsx)(r.Button, {
                                onClick: o,
                                look: r.Button.Looks.BLANK,
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
