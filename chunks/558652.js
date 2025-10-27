n.d(t, { Z: () => m }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(481060),
    s = n(113434),
    o = n(264282),
    c = n(78606),
    u = n(710914),
    d = n(46140),
    p = n(388032),
    f = n(872058);
let h = [];
function m() {
    let [e, t] = i.useState(d.yq.SUGGESTED),
        [n, m] = i.useState(h),
        {
            quests: g,
            isFetchingCurrentQuests: _,
            hasFetched: b,
        } = (0, s.bA)(
            s.e5.ALL,
            i.useMemo(
                () => ({
                    sortMethod: e,
                    filters: n,
                }),
                [e, n],
            ),
        ),
        E = i.useCallback(() => {
            m(h);
        }, []),
        O = i.useRef(null),
        I = i.useRef(null),
        v = (0, l.TH)(),
        y = (0, l.k6)();
    return (
        i.useEffect(() => {
            if ("" !== v.hash && null != O.current && null != I.current) {
                var t, r;
                (e !== O.current || n !== I.current) &&
                    y.replace(
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, v)),
                        (r = r = { hash: void 0 }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        t),
                    );
            }
        }, [e, n, v, y]),
        i.useEffect(() => {
            O.current = e;
        }, [e]),
        i.useEffect(() => {
            I.current = n;
        }, [n]),
        (0, s.SU)({
            selectedSortMethod: e,
            selectedFilters: n,
            numQuestsVisible: g.length,
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: f.headingWrapper,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/medium",
                            children: p.intl.string(p.t.giYD00),
                        }),
                        (0, r.jsxs)("div", {
                            className: f.headingControls,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    onChange: t,
                                    optionClassName: f.filterSortOption,
                                    selectedSortMethod: e,
                                }),
                                (0, r.jsx)(o.Z, {
                                    onChange: m,
                                    optionClassName: f.filterSortOption,
                                    selectedFilters: n,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.Z, {
                    quests: g,
                    isFetching: _,
                    hasFetched: b,
                    hasFiltersApplied: n.length > 0,
                    onClearFilters: E,
                }),
            ],
        })
    );
}
