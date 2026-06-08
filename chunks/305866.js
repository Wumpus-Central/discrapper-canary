"use strict";
n.d(t, { M: () => c, l: () => d });
var i = n(627968),
    r = n(64700),
    s = n(113325),
    a = n(315710),
    o = n(707554),
    l = n(187322),
    u = n(989395);
let c = r.createContext({ inDialog: void 0 }),
    d = r.forwardRef(function (e, t) {
        let { children: n, impressionType: d, impression: _, disableTrack: h, returnRef: f, ...p } = e,
            E = r.useRef(null),
            m = r.useRef(null),
            [g, A] = r.useState(!1),
            I = g ? m : E;
        (0, a.t)(I, { returnRef: f }),
            r.useContext(u.A)(
                { type: d, name: _?.impressionName, properties: _?.impressionProperties },
                { disableTrack: h },
            );
        let T = r.useCallback(
                (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                [t],
            ),
            S = r.useCallback(
                (e) => {
                    g !== e && A(e);
                },
                [g],
            );
        return (0, i.jsx)(c.Provider, {
            value: { inDialog: !0, setFocusLockDisabled: S },
            children: (0, i.jsxs)("div", {
                ...p,
                ref: T,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                children: [
                    (0, i.jsx)(s.zR, {}),
                    (0, i.jsx)(o.F, { forceLevel: 1, children: (0, i.jsx)(l.xp, { containerRef: E, children: n }) }),
                ],
            }),
        });
    });
