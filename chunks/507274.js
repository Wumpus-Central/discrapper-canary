n.d(t, {
    M: () => u,
    V: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(597442),
    s = n(84735),
    o = n(481060),
    l = n(793903);
let u = r.createContext(void 0),
    c = r.forwardRef(function (e, t) {
        let { children: n, impressionType: c, impression: d, disableTrack: f, returnRef: _, ...p } = e,
            h = r.useRef(null);
        return (
            (0, a.T)(h, { returnRef: _ }),
            r.useContext(l.Z)(
                {
                    type: c,
                    name: null == d ? void 0 : d.impressionName,
                    properties: null == d ? void 0 : d.impressionProperties
                },
                { disableTrack: f }
            ),
            r.useImperativeHandle(t, () => h.current),
            (0, i.jsx)(u.Provider, {
                value: !0,
                children: (0, i.jsx)('div', {
                    ...p,
                    ref: h,
                    role: 'dialog',
                    tabIndex: -1,
                    'aria-modal': !0,
                    children: (0, i.jsx)(o.y5t, {
                        forceLevel: 1,
                        children: (0, i.jsx)(s.J, {
                            containerRef: h,
                            children: n
                        })
                    })
                })
            })
        );
    });
