n.d(t, { Z: () => O }), n(35282), n(388685), n(704826);
var r = n(54381),
    i = n(473749),
    l = n(828700),
    a = n(481060),
    s = n(823379),
    o = n(624138),
    c = n(313481),
    u = n(264282),
    d = n(78606),
    p = n(710914),
    f = n(395995),
    h = n(324805),
    g = n(388032),
    m = n(872058);
let _ = [],
    b = c.tR.SORT,
    E = c.tR.FILTER,
    O = i.forwardRef(function (e, t) {
        let [n, O] = (0, f.P)(),
            y = i.useMemo(() => {
                var e, t;
                return null !==
                    ((t = n.get(b)), (e = (0, o.Ew)(t) ? null : Object.values(h.yq).find((e) => e === t) || null)) &&
                    void 0 !== e
                    ? e
                    : h.yq.SUGGESTED;
            }, [n]),
            v = i.useMemo(() => {
                var e;
                return null !=
                    (e = (function (e) {
                        if ((0, o.Ew)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, h.fI)(e))
                            .filter(s.lm);
                        return t.length > 0 ? t : null;
                    })(n.get(E)))
                    ? e
                    : _;
            }, [n]),
            I = i.useCallback(
                (e) => {
                    O({ [b]: e });
                },
                [O],
            ),
            C = i.useCallback(
                (e) => {
                    O({
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
                [O],
            ),
            {
                quests: S,
                excludedQuests: T,
                isFetchingCurrentQuests: N,
                hasFetched: j,
            } = (0, c.bA)(
                c.e5.ALL,
                i.useMemo(
                    () => ({
                        sortMethod: y,
                        filters: v,
                    }),
                    [y, v],
                ),
            ),
            P = i.useCallback(() => {
                C(_);
            }, [C]),
            x = i.useRef(null),
            A = i.useRef(null),
            Z = (0, l.TH)(),
            w = (0, l.k6)();
        return (
            i.useEffect(() => {
                if ("" !== Z.hash && null != x.current && null != A.current) {
                    var e, t;
                    (y !== x.current || v !== A.current) &&
                        w.replace(
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
                            })({}, Z)),
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
            }, [y, v, Z, w]),
            i.useEffect(() => {
                x.current = y;
            }, [y]),
            i.useEffect(() => {
                A.current = v;
            }, [v]),
            (0, c.SU)({
                selectedSortMethod: y,
                selectedFilters: v,
                numQuestsVisible: S.length,
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        P(), I(h.yq.SUGGESTED);
                    },
                }),
                [P, I],
            ),
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
                                        onChange: I,
                                        optionClassName: m.filterSortOption,
                                        selectedSortMethod: y,
                                    }),
                                    (0, r.jsx)(u.Z, {
                                        onChange: C,
                                        selectedFilters: v,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.Z, {
                        quests: S,
                        excludedQuests: T,
                        isFetching: N,
                        hasFetched: j,
                        hasFiltersApplied: v.length > 0,
                        onClearFilters: P,
                    }),
                ],
            })
        );
    });
