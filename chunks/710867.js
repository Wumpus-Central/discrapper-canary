var i = r(200651);
r(192379);
var a = r(293335),
    s = r(264275);
let o = (e) => {
    let { profileEffectConfig: n, onReady: r } = e,
        { pendingRef: o, setPending: l } = (0, a.Z)(n.effects, r);
    return (0, i.jsx)('div', {
        className: s.profileEffects,
        children: (0, i.jsx)('div', {
            className: s.inner,
            children: n.effects.map((e) =>
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
                            l(o.current - 1), (o.current = o.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
n.Z = o;
