n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(873263),
    r = n(397927),
    s = n(403362),
    o = n(240248),
    d = n(890687),
    c = n(936356),
    u = n(505478),
    A = n(349555),
    h = n(352670),
    _ = n(654487),
    m = n(985018),
    p = n(258547);
let g = [],
    E = d.L1.SORT,
    I = d.L1.FILTER,
    f = l.forwardRef(function (e, t) {
        let n = l.useRef(null),
            [f, C] = (0, h.Y)(),
            T = l.useMemo(() => {
                var e;
                return (
                    (e = f.get(E)),
                    ((0, o.uJ)(e) ? null : (Object.values(_.kL).find((t) => t === e) ?? null)) ?? _.kL.SUGGESTED
                );
            }, [f]),
            N = l.useMemo(
                () =>
                    (function (e) {
                        if ((0, o.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, _.WQ)(e))
                            .filter(s.Vq);
                        return t.length > 0 ? t : null;
                    })(f.get(I)) ?? g,
                [f],
            ),
            S = l.useCallback(
                (e) => {
                    C({ [E]: e });
                },
                [C],
            ),
            x = l.useCallback(
                (e) => {
                    C({
                        [I]:
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
                quests: v,
                excludedQuests: b,
                isFetchingCurrentQuests: y,
                hasFetched: O,
            } = (0, d.Qh)(
                d.NC.ALL,
                l.useMemo(() => ({ sortMethod: T, filters: N }), [T, N]),
            ),
            L = l.useCallback(() => {
                x(g);
            }, [x]),
            R = l.useRef(null),
            P = l.useRef(null),
            D = (0, a.zy)(),
            M = (0, a.W6)();
        return (
            l.useEffect(() => {
                "" !== D.hash &&
                    null != R.current &&
                    null != P.current &&
                    (T !== R.current || N !== P.current) &&
                    M.replace({ ...D, hash: void 0 });
            }, [T, N, D, M]),
            l.useEffect(() => {
                R.current = T;
            }, [T]),
            l.useEffect(() => {
                P.current = N;
            }, [N]),
            (0, d.$P)({ selectedSortMethod: T, selectedFilters: N, numQuestsVisible: v.length }),
            l.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        L(), S(_.kL.SUGGESTED);
                    },
                    scrollToQuest: (e) => {
                        n.current?.scrollToQuest(e);
                    },
                }),
                [L, S],
            ),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: p.Mj,
                        children: [
                            (0, i.jsx)(r.Heading, {
                                variant: "heading-lg/medium",
                                children: m.intl.string(m.t.giYD00),
                            }),
                            (0, i.jsxs)("div", {
                                className: p.Nf,
                                children: [
                                    (0, i.jsx)(u.A, { onChange: S, optionClassName: p.Uq, selectedSortMethod: T }),
                                    (0, i.jsx)(c.A, { onChange: x, selectedFilters: N }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(A.A, {
                        ref: n,
                        quests: v,
                        excludedQuests: b,
                        isFetching: y,
                        hasFetched: O,
                        hasFiltersApplied: N.length > 0,
                        onClearFilters: L,
                    }),
                ],
            })
        );
    });
