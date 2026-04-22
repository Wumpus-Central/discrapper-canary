s.d(t, { A: () => g });
var n = s(627968),
    l = s(64700),
    a = s(873263),
    r = s(534514),
    i = s(403362),
    o = s(240248),
    c = s(890687),
    u = s(936356),
    d = s(505478),
    m = s(349555),
    _ = s(352670),
    h = s(654487),
    x = s(985018),
    f = s(346054);
let b = [],
    p = c.L1.SORT,
    A = c.L1.FILTER,
    g = l.forwardRef(function (e, t) {
        let s = l.useRef(null),
            [g, E] = (0, _.Y)(),
            C = l.useMemo(() => {
                var e;
                return (
                    (e = g.get(p)),
                    ((0, o.uJ)(e) ? null : (Object.values(h.kL).find((t) => t === e) ?? null)) ?? h.kL.SUGGESTED
                );
            }, [g]),
            j = l.useMemo(
                () =>
                    (function (e) {
                        if ((0, o.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, h.WQ)(e))
                            .filter(i.Vq);
                        return t.length > 0 ? t : null;
                    })(g.get(A)) ?? b,
                [g],
            ),
            v = l.useCallback(
                (e) => {
                    E({ [p]: e });
                },
                [E],
            ),
            N = l.useCallback(
                (e) => {
                    E({
                        [A]:
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
                [E],
            ),
            {
                quests: T,
                excludedQuests: S,
                isFetchingCurrentQuests: L,
                hasFetched: I,
            } = (0, c.Qh)(
                c.NC.ALL,
                l.useMemo(() => ({ sortMethod: C, filters: j }), [C, j]),
            ),
            y = l.useCallback(() => {
                N(b);
            }, [N]),
            O = l.useRef(null),
            R = l.useRef(null),
            P = (0, a.zy)(),
            Q = (0, a.W6)();
        return (
            l.useEffect(() => {
                "" !== P.hash &&
                    null != O.current &&
                    null != R.current &&
                    (C !== O.current || j !== R.current) &&
                    Q.replace({ ...P, hash: void 0 });
            }, [C, j, P, Q]),
            l.useEffect(() => {
                O.current = C;
            }, [C]),
            l.useEffect(() => {
                R.current = j;
            }, [j]),
            (0, c.$P)({ selectedSortMethod: C, selectedFilters: j, numQuestsVisible: T.length }),
            l.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        y(), v(h.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        s.current?.scrollToQuest(e);
                    },
                }),
                [y, v],
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
                                    (0, n.jsx)(d.A, { onChange: v, optionClassName: f.Uq, selectedSortMethod: C }),
                                    (0, n.jsx)(u.A, { onChange: N, selectedFilters: j }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(m.A, {
                        ref: s,
                        quests: T,
                        excludedQuests: S,
                        isFetching: L,
                        hasFetched: I,
                        hasFiltersApplied: j.length > 0,
                        onClearFilters: y,
                    }),
                ],
            })
        );
    });
