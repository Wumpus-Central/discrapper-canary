n.d(t, { Z: () => O }), n(35282), n(388685), n(704826);
var r = n(54381),
    i = n(473749),
    l = n(828700),
    a = n(481060),
    s = n(823379),
    o = n(624138),
    c = n(113434),
    u = n(264282),
    d = n(78606),
    p = n(710914),
    f = n(395995),
    h = n(46140),
    g = n(388032),
    m = n(872058);
let _ = [],
    b = c.tR.SORT,
    E = c.tR.FILTER;
function O() {
    let [e, t] = (0, f.P)(),
        n = i.useMemo(() => {
            var t, n;
            return null !==
                ((n = e.get(b)), (t = (0, o.Ew)(n) ? null : Object.values(h.yq).find((e) => e === n) || null)) &&
                void 0 !== t
                ? t
                : h.yq.SUGGESTED;
        }, [e]),
        O = i.useMemo(() => {
            var t;
            return null !=
                (t = (function (e) {
                    if ((0, o.Ew)(e)) return null;
                    let t = e
                        .split(",")
                        .map((e) => (0, h.fI)(e))
                        .filter(s.lm);
                    return t.length > 0 ? t : null;
                })(e.get(E)))
                ? t
                : _;
        }, [e]),
        y = i.useCallback(
            (e) => {
                t({ [b]: e });
            },
            [t],
        ),
        v = i.useCallback(
            (e) => {
                t({
                    [E]:
                        0 === e.length
                            ? null
                            : e
                                  .map((e) => {
                                      let { filter: t } = e;
                                      return t;
                                  })
                                  .join(","),
                });
            },
            [t],
        ),
        {
            quests: I,
            excludedQuests: C,
            isFetchingCurrentQuests: S,
            hasFetched: T,
        } = (0, c.bA)(
            c.e5.ALL,
            i.useMemo(
                () => ({
                    sortMethod: n,
                    filters: O,
                }),
                [n, O],
            ),
        ),
        N = i.useCallback(() => {
            v(_);
        }, [v]),
        j = i.useRef(null),
        P = i.useRef(null),
        x = (0, l.TH)(),
        A = (0, l.k6)();
    return (
        i.useEffect(() => {
            if ("" !== x.hash && null != j.current && null != P.current) {
                var e, t;
                (n !== j.current || O !== P.current) &&
                    A.replace(
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
                        })({}, x)),
                        (t = t = { hash: void 0 }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              }),
                        e),
                    );
            }
        }, [n, O, x, A]),
        i.useEffect(() => {
            j.current = n;
        }, [n]),
        i.useEffect(() => {
            P.current = O;
        }, [O]),
        (0, c.SU)({
            selectedSortMethod: n,
            selectedFilters: O,
            numQuestsVisible: I.length,
        }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: m.headingWrapper,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/medium",
                            children: g.intl.string(g.t.giYD00),
                        }),
                        (0, r.jsxs)("div", {
                            className: m.headingControls,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    onChange: y,
                                    optionClassName: m.filterSortOption,
                                    selectedSortMethod: n,
                                }),
                                (0, r.jsx)(u.Z, {
                                    onChange: v,
                                    selectedFilters: O,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(p.Z, {
                    quests: I,
                    excludedQuests: C,
                    isFetching: S,
                    hasFetched: T,
                    hasFiltersApplied: O.length > 0,
                    onClearFilters: N,
                }),
            ],
        })
    );
}
