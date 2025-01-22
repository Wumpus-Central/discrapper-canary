r.d(n, {
    M: function () {
        return c;
    },
    V: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(597442),
    s = r(84735),
    l = r(481060),
    u = r(793903);
let c = a.createContext(void 0),
    d = a.forwardRef(function (e, n) {
        let { children: r, impressionType: d, impression: f, disableTrack: p, returnRef: h, ..._ } = e,
            m = a.useRef(null);
        return (
            (0, o.T)(m, { returnRef: h }),
            a.useContext(u.Z)(
                {
                    type: d,
                    name: null == f ? void 0 : f.impressionName,
                    properties: null == f ? void 0 : f.impressionProperties
                },
                { disableTrack: p }
            ),
            a.useImperativeHandle(n, () => m.current),
            (0, i.jsx)(c.Provider, {
                value: !0,
                children: (0, i.jsx)('div', {
                    ..._,
                    ref: m,
                    role: 'dialog',
                    tabIndex: -1,
                    'aria-modal': !0,
                    children: (0, i.jsx)(l.HeadingLevel, {
                        forceLevel: 1,
                        children: (0, i.jsx)(s.J, {
                            containerRef: m,
                            children: r
                        })
                    })
                })
            })
        );
    });
