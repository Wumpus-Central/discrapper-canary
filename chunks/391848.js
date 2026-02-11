"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(537652),
    c = n(155718),
    d = n(58149),
    _ = n(580424),
    f = n(579940),
    h = n(962125),
    p = n(915089),
    g = n(850992),
    E = n(887695),
    A = n(286509),
    I = n(721768),
    T = n(842209),
    y = n(210978),
    S = n(392054),
    v = n(168186),
    C = n(546587),
    b = n(746388),
    N = n(664929),
    R = n(73510),
    O = n(652215),
    D = n(985018),
    L = n(993538),
    w = n(911385);
let x = 512,
    P = 7,
    M = 56,
    k = 16,
    U = 32,
    G = 20,
    F = 420,
    V = [8, 8, 0, 8],
    B = l().debounce(() => {
        (0, d.zV)(O.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    j = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: a } = e,
            o = i.useRef(!1),
            l = i.useRef(0),
            [j, Y] = i.useState(0),
            W = i.useRef(null),
            [K, $] = i.useState(!1),
            z = g.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(O.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: q,
                activeSections: X,
                commandsByActiveSection: Z,
                hasMoreAfter: Q,
                commands: J,
                filteredSectionId: ee,
                scrollDown: et,
                filterSection: en,
            } = T.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [c.kc.CHAT],
                    builtIns: a ? y.n.ONLY_TEXT : y.n.ALLOW,
                    applicationCommands: !a,
                },
                options: { placeholderCount: P, limit: R.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            er = (0, E.Fk)({
                activeCategoryIndex: z,
                isScrolling: o,
                listRef: W,
                onActiveCategoryIndexChange: (e) => {
                    let t = X[e];
                    if (null != t) {
                        let e = q.findIndex((e) => e.id === t.id);
                        g.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: G,
                searchQuery: "",
            }),
            ei = (e) => {
                let t = X.length * (U + k) + (Z.reduce((e, t) => e + t.data.length, 0) - (Q ? P : 0)) * M - x;
                Q && e + F > t && et(), er(e), B(), (l.current = e);
            },
            ea = i.useRef(ei);
        i.useEffect(() => {
            ea.current = ei;
        }),
            i.useEffect(() => {
                ea.current(l.current);
            }, [J]);
        let es = i.useCallback((e) => (e !== X.length - 1 || Q ? k : 0), [X.length, Q]),
            eo = Z.map((e) => e.data.length);
        i.useEffect(() => {
            null != W.current && K && null != j && W.current.scrollRowIntoView(j);
        }, [K, j]),
            i.useLayoutEffect(() => {
                null != ee && W.current?.scrollToSectionTop(0);
            }, [J, ee]);
        let el = i.useCallback(
                (e) => {
                    e.id === ee || e.id === R.Ik.FRECENCY ? (en(null), W.current?.scrollToSectionTop(0)) : en(e.id);
                },
                [en, ee],
            ),
            eu = i.useCallback(
                (e, t, r) => {
                    I.Gf({ channelId: n.id, command: e, section: t, location: S.Oh.DISCOVERY, triggerSection: r });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == j) return !e && (Y(0), !0);
                    if (null == j) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of Z)
                        if (((t = n), j < (n += e.data.length))) {
                            let n = e.data[j - t],
                                r = q.find((e) => e.id === n.applicationId);
                            eu(n, r, (0, v.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === J.length) return !0;
                    let t = Q ? P : 0,
                        n = J.length + t,
                        r = null == j ? 0 : j + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), Y(r), $(!0), !0;
                },
            }),
            [J.length, Z, Q, q, eu, j],
        );
        let ec = i.useCallback(
                (e) => {
                    let t = X[e];
                    if (null == t) return null;
                    let i = (0, N.Rg)(t),
                        a = (0, r.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, r.jsx)(A.A, { className: L.Km, icon: a, children: t.name }, e);
                },
                [n, X],
            ),
            ed = i.useCallback(
                (e, t) => {
                    let n = e === X.length - 1,
                        i = X[e],
                        { data: a } = Z[e];
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: s()(L.Wy, { [L.YD]: n }),
                            children: [
                                t,
                                0 === a.length &&
                                    (0, r.jsx)(u.A, {
                                        message: D.intl.format(D.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: w,
                                        className: L.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [X, Z],
            ),
            e_ = i.useCallback(
                (e, t) => {
                    let i = Z[t.sectionIndex],
                        a = i.data[t.sectionRowIndex],
                        s = `${i.section.id}:${a?.id ?? e}`;
                    if (
                        null == a ||
                        (i.section.id !== a.applicationId && i.section.id !== R.Ik.FRECENCY) ||
                        a.inputType === S.y$.PLACEHOLDER
                    )
                        return (0, r.jsx)(b.A, {}, s);
                    let o = q.find((e) => e.id === a.applicationId);
                    return (0, r.jsx)(
                        _.Ay.NewCommand,
                        {
                            index: e,
                            command: a,
                            channel: n,
                            className: L.D5,
                            selected: j === e,
                            showImage: i.section.id !== a.applicationId,
                            section: o,
                            onClick: () => eu(a, o, (0, v.$S)(i.section)),
                            onHover: () => {
                                Y(null), $(!1);
                            },
                        },
                        s,
                    );
                },
                [n, Z, eu, q, j],
            ),
            ef = (0, p.GV)();
        return (
            (0, f.gf)(ef, !0, (0, _.aI)(j)),
            i.useEffect(
                () => () => {
                    (0, f.nQ)();
                },
                [],
            ),
            (0, r.jsxs)(_.Ay, {
                id: ef,
                className: L.x9,
                innerClassName: L.iE,
                onMouseDown: H,
                children: [
                    (0, r.jsx)(C.A, {
                        className: L.H$,
                        channel: n,
                        sections: q,
                        filteredSectionId: ee,
                        activeCategoryIndex: z,
                        onSectionClick: el,
                        applicationCommandListRef: W,
                    }),
                    (0, r.jsx)(h.A, {
                        role: "listbox",
                        className: L.p_,
                        listPadding: V,
                        onScroll: ei,
                        renderRow: e_,
                        renderSection: ed,
                        renderSectionHeader: ec,
                        rowCount: X.length,
                        rowCountBySection: eo,
                        rowHeight: M,
                        sectionHeaderHeight: U,
                        sectionMarginBottom: es,
                        ref: W,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function H(e) {
    e.preventDefault();
}
