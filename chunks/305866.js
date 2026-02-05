"use strict";
n.d(t, { M: () => o, l: () => l });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(989395);
let o = i.createContext({ inDialog: void 0 }),
    l = i.forwardRef(function (e, t) {
        let { children: n, impressionType: l, impression: u, disableTrack: c, returnRef: d, ..._ } = e,
            f = i.useRef(null),
            p = i.useRef(null),
            [h, m] = i.useState(!1),
            g = h ? p : f;
        (0, a.tjt)(g, { returnRef: d }),
            i.useContext(s.A)(
                { type: l, name: u?.impressionName, properties: u?.impressionProperties },
                { disableTrack: c },
            ),
            i.useImperativeHandle(t, () => f.current);
        let E = i.useCallback(
            (e) => {
                h !== e && m(e);
            },
            [h],
        );
        return (0, r.jsx)(o.Provider, {
            value: { inDialog: !0, setFocusLockDisabled: E },
            children: (0, r.jsx)("div", {
                ..._,
                ref: f,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                children: (0, r.jsx)(a.Fmo, {
                    forceLevel: 1,
                    children: (0, r.jsx)(a.xpW, { containerRef: f, children: n }),
                }),
            }),
        });
    });
