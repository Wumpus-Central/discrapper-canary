"use strict";
n.d(t, { M: () => u, l: () => c });
var i = n(627968),
    r = n(64700),
    s = n(315710),
    a = n(707554),
    o = n(187322),
    l = n(989395);
let u = r.createContext({ inDialog: void 0 }),
    c = r.forwardRef(function (e, t) {
        let { children: n, impressionType: c, impression: d, disableTrack: _, returnRef: f, ...h } = e,
            p = r.useRef(null),
            E = r.useRef(null),
            [m, g] = r.useState(!1),
            A = m ? E : p;
        (0, s.t)(A, { returnRef: f }),
            r.useContext(l.A)(
                { type: c, name: d?.impressionName, properties: d?.impressionProperties },
                { disableTrack: _ },
            );
        let I = r.useCallback(
                (e) => {
                    (p.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                [t],
            ),
            T = r.useCallback(
                (e) => {
                    m !== e && g(e);
                },
                [m],
            );
        return (0, i.jsx)(u.Provider, {
            value: { inDialog: !0, setFocusLockDisabled: T },
            children: (0, i.jsx)("div", {
                ...h,
                ref: I,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                children: (0, i.jsx)(a.F, {
                    forceLevel: 1,
                    children: (0, i.jsx)(o.xp, { containerRef: p, children: n }),
                }),
            }),
        });
    });
