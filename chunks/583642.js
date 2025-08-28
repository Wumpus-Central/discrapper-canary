n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(738018),
    s = n(607802),
    l = n(28964),
    c = n(637879),
    u = n(981631),
    d = n(388032),
    f = n(356702);
let _ = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: a, resultsState: o } = e,
            s = -1,
            _ = (0, l.KS)({
                isXDMSearch: n.type === u.aib.DMS,
                location: "SearchFiltersRedesignPopout",
            }),
            p = (e) => {
                e.stopPropagation(), e.preventDefault();
            };
        return (
            i.useImperativeHandle(t, () => ({
                selectedIndex: s,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => !1,
                handleSearchInChannel: () => !1,
                shouldShowSearchInSelectedChannel: () => !1,
            })),
            (0, r.jsxs)("div", {
                onMouseDown: p,
                role: "listbox",
                id: a,
                tabIndex: -1,
                "aria-activedescendant": "".concat(a, "-").concat(s),
                className: f.container,
                children: [
                    (0, r.jsx)(c.c2, {
                        searchContext: n,
                        navId: a,
                        index: 0,
                        selected: !1,
                    }),
                    (0, r.jsx)(c.N_, {
                        searchContext: n,
                        navId: a,
                        index: 1,
                        selected: !1,
                        label:
                            o.mode.type === u.Sap.EMPTY && _ ? d.intl.string(d.t.diOL4u) : d.intl.string(d.t["M1tf+/"]),
                    }),
                ],
            })
        );
    }),
    p = i.forwardRef(function (e, t) {
        let { searchContext: n, navId: i, onSelectedIndexChanged: l } = e,
            [c, u] = (0, a.Wu)([o.Z], () => {
                let e = o.Z.getState(n),
                    t = (0, s.BU)(e.autocompletes);
                return [e, t];
            });
        return (0, r.jsx)(_, {
            ref: t,
            searchContext: n,
            navId: i,
            onSelectedIndexChanged: l,
            resultsState: c,
            totalResults: u,
        });
    });
