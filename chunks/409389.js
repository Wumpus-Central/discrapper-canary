n.d(t, { A: () => I });
var i = n(627968),
    r = n(64700),
    a = n(960488),
    l = n(397927),
    s = n(403362),
    o = n(240248),
    d = n(890687),
    c = n(936356),
    u = n(505478),
    A = n(349555),
    h = n(352670),
    _ = n(654487),
    m = n(985018),
    p = n(153153);
let g = [],
    E = d.L1.SORT,
    f = d.L1.FILTER,
    I = r.forwardRef(function (e, t) {
        let [n, I] = (0, h.Y)(),
            C = r.useMemo(() => {
                var e;
                return (
                    (e = n.get(E)),
                    ((0, o.uJ)(e) ? null : Object.values(_.kL).find((t) => t === e) || null) ?? _.kL.SUGGESTED
                );
            }, [n]),
            N = r.useMemo(
                () =>
                    (function (e) {
                        if ((0, o.uJ)(e)) return null;
                        let t = e
                            .split(",")
                            .map((e) => (0, _.WQ)(e))
                            .filter(s.Vq);
                        return t.length > 0 ? t : null;
                    })(n.get(f)) ?? g,
                [n],
            ),
            T = r.useCallback(
                (e) => {
                    I({ [E]: e });
                },
                [I],
            ),
            S = r.useCallback(
                (e) => {
                    I({
                        [f]:
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
                [I],
            ),
            {
                quests: x,
                excludedQuests: v,
                isFetchingCurrentQuests: b,
                hasFetched: y,
            } = (0, d.Qh)(
                d.NC.ALL,
                r.useMemo(() => ({ sortMethod: C, filters: N }), [C, N]),
            ),
            L = r.useCallback(() => {
                S(g);
            }, [S]),
            O = r.useRef(null),
            R = r.useRef(null),
            P = (0, a.zy)(),
            j = (0, a.W6)();
        return (
            r.useEffect(() => {
                "" !== P.hash &&
                    null != O.current &&
                    null != R.current &&
                    (C !== O.current || N !== R.current) &&
                    j.replace({ ...P, hash: void 0 });
            }, [C, N, P, j]),
            r.useEffect(() => {
                O.current = C;
            }, [C]),
            r.useEffect(() => {
                R.current = N;
            }, [N]),
            (0, d.$P)({ selectedSortMethod: C, selectedFilters: N, numQuestsVisible: x.length }),
            r.useImperativeHandle(
                t,
                () => ({
                    resetSortingFiltering: () => {
                        L(), T(_.kL.SUGGESTED);
                    },
                }),
                [L, T],
            ),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: p.Mj,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-lg/medium",
                                children: m.intl.string(m.t.giYD00),
                            }),
                            (0, i.jsxs)("div", {
                                className: p.Nf,
                                children: [
                                    (0, i.jsx)(u.A, { onChange: T, optionClassName: p.Uq, selectedSortMethod: C }),
                                    (0, i.jsx)(c.A, { onChange: S, selectedFilters: N }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(A.A, {
                        quests: x,
                        excludedQuests: v,
                        isFetching: b,
                        hasFetched: y,
                        hasFiltersApplied: N.length > 0,
                        onClearFilters: L,
                    }),
                ],
            })
        );
    });
