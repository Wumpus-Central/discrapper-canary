n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(293335),
    a = n(422786);
let o = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: o, setPending: s } = (0, i.Z)(t.effects, n);
    return (0, r.jsx)('div', {
        className: a.profileEffects,
        children: (0, r.jsx)('div', {
            className: a.inner,
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
                            s(o.current - 1), (o.current = o.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
