n.d(t, { Z: () => _ }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(843611),
    a = n(481060),
    o = n(626135),
    s = n(113434),
    c = n(937797),
    u = n(264282),
    d = n(78606),
    p = n(710914),
    f = n(46140),
    h = n(981631),
    g = n(388032),
    m = n(872058);
let b = [];
function _() {
    let { enabled: e } = c.$d.useConfig({ location: f.dr.QUEST_HOME_DESKTOP }),
        [t, n] = i.useState(f.yq.SUGGESTED),
        [_, O] = i.useState(b),
        {
            quests: E,
            isFetchingCurrentQuests: y,
            hasFetched: v,
        } = (0, s.bA)(
            s.e5.ALL,
            i.useMemo(
                () => ({
                    sortMethod: t,
                    filters: _,
                }),
                [t, _],
            ),
        ),
        I = i.useCallback(() => {
            O(b);
        }, []),
        S = i.useRef(null),
        C = i.useRef(null),
        T = (0, l.TH)(),
        N = (0, l.k6)();
    return (
        i.useEffect(() => {
            if ("" !== T.hash && null != S.current && null != C.current) {
                var e, n;
                (t !== S.current || _ !== C.current) &&
                    N.replace(
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
                        })({}, T)),
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
        }, [t, _, T, N]),
        i.useEffect(() => {
            e &&
                (o.default.track(h.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
                    sort_method: t,
                    previous_sort_method: S.current,
                }),
                (S.current = t));
        }, [t, e]),
        i.useEffect(() => {
            var t, n;
            e &&
                (o.default.track(h.rMx.QUEST_HOME_FILTERS_CHANGED, {
                    filters: _.map((e) => e.filter),
                    previous_filters: null != (n = null == (t = C.current) ? void 0 : t.map((e) => e.filter)) ? n : [],
                    num_quests_visible: E.length,
                }),
                (C.current = _));
        }, [_, e, E.length]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                e &&
                    (0, r.jsxs)("div", {
                        className: m.headingWrapper,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: "heading-lg/medium",
                                children: g.intl.string(g.t.giYD09),
                            }),
                            (0, r.jsxs)("div", {
                                className: m.headingControls,
                                children: [
                                    (0, r.jsx)(d.Z, {
                                        onChange: n,
                                        optionClassName: m.filterSortOption,
                                        selectedSortMethod: t,
                                    }),
                                    (0, r.jsx)(u.Z, {
                                        onChange: O,
                                        optionClassName: m.filterSortOption,
                                        selectedFilters: _,
                                    }),
                                ],
                            }),
                        ],
                    }),
                (0, r.jsx)(p.Z, {
                    quests: E,
                    isFetching: y,
                    hasFetched: v,
                    hasFiltersApplied: _.length > 0,
                    onClearFilters: I,
                }),
            ],
        })
    );
}
