s.d(t, { A: () => A });
var n = s(627968),
    l = s(64700),
    a = s(873263),
    r = s(534514),
    i = s(403362),
    o = s(240248),
    c = s(890687),
    u = s(936356),
    d = s(505478),
    _ = s(349555),
    m = s(352670),
    h = s(654487),
    x = s(985018),
    f = s(65990);
let E = [],
    p = c.L1.SORT,
    g = c.L1.FILTER,
    A = l.forwardRef(function (e, t) {
        let s = l.useRef(null),
            [A, C] = (0, m.Y)(),
            b = l.useMemo(() => {
                var e;
                return (
                    (e = A.get(p)),
                    ((0, o.uJ)(e) ? null : (Object.values(h.kL).find((t) => t === e) ?? null)) ?? h.kL.SUGGESTED
                );
            }, [A]),
            j = l.useMemo(
                () =>
                    (function (e) {
                        if ((0, o.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, h.WQ)(e))
                            .filter(i.Vq);
                        return t.length > 0 ? t : null;
                    })(A.get(g)) ?? E,
                [A],
            ),
            v = l.useCallback(
                (e) => {
                    C({ [p]: e });
                },
                [C],
            ),
            N = l.useCallback(
                (e) => {
                    C({
                        [g]:
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
                [C],
            ),
            {
                quests: T,
                excludedQuests: S,
                isFetchingCurrentQuests: O,
                hasFetched: L,
            } = (0, c.Qh)(
                c.NC.ALL,
                l.useMemo(() => ({ sortMethod: b, filters: j }), [b, j]),
            ),
            I = l.useCallback(() => {
                N(E);
            }, [N]),
            y = l.useRef(null),
            R = l.useRef(null),
            Q = (0, a.zy)(),
            H = (0, a.W6)();
        return (
            l.useEffect(() => {
                "" !== Q.hash &&
                    null != y.current &&
                    null != R.current &&
                    (b !== y.current || j !== R.current) &&
                    H.replace({ ...Q, hash: void 0 });
            }, [b, j, Q, H]),
            l.useEffect(() => {
                y.current = b;
            }, [b]),
            l.useEffect(() => {
                R.current = j;
            }, [j]),
            (0, c.$P)({ selectedSortMethod: b, selectedFilters: j, numQuestsVisible: T.length }),
            l.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        I(), v(h.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        s.current?.scrollToQuest(e);
                    },
                }),
                [I, v],
            ),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", {
                        className: f.Mj,
                        children: [
                            (0, n.jsx)(r.D, { variant: "heading-lg/medium", children: x.intl.string(x.t.giYD00) }),
                            (0, n.jsxs)("div", {
                                className: f.Nf,
                                children: [
                                    (0, n.jsx)(d.A, { onChange: v, optionClassName: f.Uq, selectedSortMethod: b }),
                                    (0, n.jsx)(u.A, { onChange: N, selectedFilters: j }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(_.A, {
                        ref: s,
                        quests: T,
                        excludedQuests: S,
                        isFetching: O,
                        hasFetched: L,
                        hasFiltersApplied: j.length > 0,
                        onClearFilters: I,
                    }),
                ],
            })
        );
    });
