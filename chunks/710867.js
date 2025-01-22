var i = r(200651);
r(192379);
var a = r(293335),
    o = r(264275);
let s = (e) => {
    let { profileEffectConfig: n, onReady: r } = e,
        { pendingRef: s, setPending: l } = (0, a.Z)(n.effects, r);
    return (0, i.jsx)('div', {
        className: o.profileEffects,
        children: (0, i.jsx)('div', {
            className: o.inner,
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
                            l(s.current - 1), (s.current = s.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
n.Z = s;
