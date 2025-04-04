n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(293335),
    o = n(422786);
let a = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: a, setPending: s } = (0, i.Z)(t.effects, n);
    return (0, r.jsx)('div', {
        className: o.profileEffects,
        children: (0, r.jsx)('div', {
            className: o.inner,
            children: t.effects.map((e) =>
                (0, r.jsx)(
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
                            s(a.current - 1), (a.current = a.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
