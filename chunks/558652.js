n.d(t, { Z: () => m }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(481060),
    o = n(113434),
    s = n(937797),
    c = n(264282),
    u = n(78606),
    d = n(710914),
    p = n(46140),
    f = n(388032),
    h = n(872058);
let g = [];
function m() {
    let { enabled: e } = s.$d.useConfig({ location: p.dr.QUEST_HOME_DESKTOP }),
        [t, n] = i.useState(p.yq.SUGGESTED),
        [m, b] = i.useState(g),
        {
            quests: _,
            isFetchingCurrentQuests: O,
            hasFetched: E,
        } = (0, o.bA)(
            o.e5.ALL,
            i.useMemo(
                () => ({
                    sortMethod: t,
                    filters: m,
                }),
                [t, m],
            ),
        ),
        y = i.useCallback(() => {
            b(g);
        }, []),
        v = i.useRef(null),
        I = i.useRef(null),
        S = (0, l.TH)(),
        C = (0, l.k6)();
    return (
        i.useEffect(() => {
            if ("" !== S.hash && null != v.current && null != I.current) {
                var e, n;
                (t !== v.current || m !== I.current) &&
                    C.replace(
                        ((e = (function (e) {
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
                        })({}, S)),
                        (n = n = { hash: void 0 }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              }),
                        e),
                    );
            }
        }, [t, m, S, C]),
        i.useEffect(() => {
            v.current = t;
        }, [t]),
        i.useEffect(() => {
            I.current = m;
        }, [m]),
        (0, o.SU)({
            selectedSortMethod: t,
            selectedFilters: m,
            numQuestsVisible: _.length,
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                e &&
                    (0, r.jsxs)("div", {
                        className: h.headingWrapper,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "heading-lg/medium",
                                children: f.intl.string(f.t.giYD09),
                            }),
                            (0, r.jsxs)("div", {
                                className: h.headingControls,
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        onChange: n,
                                        optionClassName: h.filterSortOption,
                                        selectedSortMethod: t,
                                    }),
                                    (0, r.jsx)(c.Z, {
                                        onChange: b,
                                        optionClassName: h.filterSortOption,
                                        selectedFilters: m,
                                    }),
                                ],
                            }),
                        ],
                    }),
                (0, r.jsx)(d.Z, {
                    quests: _,
                    isFetching: O,
                    hasFetched: E,
                    hasFiltersApplied: m.length > 0,
                    onClearFilters: y,
                }),
            ],
        })
    );
}
