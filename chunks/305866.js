"use strict";
n.d(t, { M: () => u, l: () => d });
var r = n(627968),
    i = n(64700),
    s = n(315710),
    a = n(707554),
    o = n(187322),
    l = n(989395);
let u = i.createContext({ inDialog: void 0 }),
    d = i.forwardRef(function (e, t) {
        let { children: n, impressionType: d, impression: c, disableTrack: _, returnRef: f, ...E } = e,
            h = i.useRef(null),
            p = i.useRef(null),
            [m, g] = i.useState(!1),
            A = m ? p : h;
        (0, s.t)(A, { returnRef: f }),
            i.useContext(l.A)(
                { type: d, name: c?.impressionName, properties: c?.impressionProperties },
                { disableTrack: _ },
            ),
            i.useImperativeHandle(t, () => h.current);
        let I = i.useCallback(
            (e) => {
                m !== e && g(e);
            },
            [m],
        );
        return (0, r.jsx)(u.Provider, {
            value: { inDialog: !0, setFocusLockDisabled: I },
            children: (0, r.jsx)("div", {
                ...E,
                ref: h,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                children: (0, r.jsx)(a.F, {
                    forceLevel: 1,
                    children: (0, r.jsx)(o.xp, { containerRef: h, children: n }),
                }),
            }),
        });
    });
