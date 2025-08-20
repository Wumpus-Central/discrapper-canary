n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(738018),
    s = n(607802),
    l = n(637879),
    c = n(356702);
let u = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: a } = e,
            o = -1,
            s = (e) => {
                e.stopPropagation(), e.preventDefault();
            };
        return (
            i.useImperativeHandle(t, () => ({
                selectedIndex: o,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => !1,
                handleSearchInChannel: () => !1,
                shouldShowSearchInSelectedChannel: () => !1,
            })),
            (0, r.jsx)("div", {
                onMouseDown: s,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(o),
                className: c.container,
                children: (0, r.jsx)(l.c, {
                    searchContext: n,
                    navId: a,
                    index: 0,
                    selected: !1,
                }),
            })
        );
    }),
    d = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: l } = e,
            [c, d] = (0, a.Wu)([o.Z], () => {
                let e = o.Z.getState(n),
                    t = (0, s.BU)(e.autocompletes);
                return [e, t];
            });
        return (0, r.jsx)(u, {
            ref: t,
            searchContext: n,
            navId: i,
            onSelectedIndexChanged: l,
            resultsState: c,
            totalResults: d,
        });
    });
