n.d(t, { M: () => c, l: () => u });
var i = n(477900),
    r = n(582128),
    a = n(113325),
    s = n(315710),
    l = n(707554),
    o = n(259678),
    d = n(989395);
let c = r.createContext({ inDialog: void 0 }),
    u = r.forwardRef(function (e, t) {
        let { children: n, impressionType: u, impression: _, disableTrack: E, returnRef: A, ...h } = e,
            I = r.useRef(null),
            f = r.useRef(null),
            [p, T] = r.useState(!1),
            m = p ? f : I;
        (0, s.tj)(m, { returnRef: A }),
            r.useContext(d.A)(
                { type: u, name: _?.impressionName, properties: _?.impressionProperties },
                { disableTrack: E },
            );
        let g = r.useCallback(
                (e) => {
                    (I.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                [t],
            ),
            S = r.useCallback(
                (e) => {
                    p !== e && T(e);
                },
                [p],
            );
        return (0, i.jsx)(c.Provider, {
            value: { inDialog: !0, setFocusLockDisabled: S },
            children: (0, i.jsxs)("div", {
                ...h,
                ref: g,
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                children: [
                    (0, i.jsx)(a.zR, {}),
                    (0, i.jsx)(l.F, { forceLevel: 1, children: (0, i.jsx)(o.xp, { containerRef: I, children: n }) }),
                ],
            }),
        });
    });
