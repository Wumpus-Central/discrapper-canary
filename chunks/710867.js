n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(293335),
    a = n(264275);
let s = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: s, setPending: o } = (0, r.Z)(t.effects, n);
    return (0, i.jsx)('div', {
        className: a.profileEffects,
        children: (0, i.jsx)('div', {
            className: a.inner,
            children: t.effects.map((e) =>
                (0, i.jsx)(
                    'img',
                    {
                        src: e.src,
                        alt: 'Preload Profile Effect Asset',
                        'aria-hidden': !0,
                        style: {
                            opacity: 0,
                            position: 'absolute'
                        },
                        onLoad: () => {
                            o(s.current - 1), (s.current = s.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
