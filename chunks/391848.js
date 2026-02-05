"use strict";
n.d(t, { A: () => B });
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
    p = n(962125),
    h = n(915089),
    m = n(850992),
    g = n(887695),
    E = n(286509),
    A = n(721768),
    I = n(842209),
    T = n(210978),
    y = n(392054),
    S = n(168186),
    v = n(546587),
    C = n(746388),
    b = n(664929),
    N = n(73510),
    R = n(652215),
    O = n(985018),
    D = n(993538),
    L = n(911385);
let w = 512,
    x = 7,
    P = 56,
    M = 16,
    k = 32,
    U = 20,
    G = 420,
    V = [8, 8, 0, 8],
    F = l().debounce(() => {
        (0, d.zV)(R.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    B = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: a } = e,
            o = i.useRef(!1),
            l = i.useRef(0),
            [B, H] = i.useState(0),
            Y = i.useRef(null),
            [W, K] = i.useState(!1),
            z = m.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(R.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: $,
                activeSections: q,
                commandsByActiveSection: Z,
                hasMoreAfter: Q,
                commands: X,
                filteredSectionId: J,
                scrollDown: ee,
                filterSection: et,
            } = I.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [c.kc.CHAT],
                    builtIns: a ? T.n.ONLY_TEXT : T.n.ALLOW,
                    applicationCommands: !a,
                },
                options: { placeholderCount: x, limit: N.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            en = (0, g.Fk)({
                activeCategoryIndex: z,
                isScrolling: o,
                listRef: Y,
                onActiveCategoryIndexChange: (e) => {
                    let t = q[e];
                    if (null != t) {
                        let e = $.findIndex((e) => e.id === t.id);
                        m.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: U,
                searchQuery: "",
            }),
            er = (e) => {
                let t = q.length * (k + M) + (Z.reduce((e, t) => e + t.data.length, 0) - (Q ? x : 0)) * P - w;
                Q && e + G > t && ee(), en(e), F(), (l.current = e);
            },
            ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er;
        }),
            i.useEffect(() => {
                ei.current(l.current);
            }, [X]);
        let ea = i.useCallback((e) => (e !== q.length - 1 || Q ? M : 0), [q.length, Q]),
            es = Z.map((e) => e.data.length);
        i.useEffect(() => {
            null != Y.current && W && null != B && Y.current.scrollRowIntoView(B);
        }, [W, B]),
            i.useLayoutEffect(() => {
                null != J && Y.current?.scrollToSectionTop(0);
            }, [X, J]);
        let eo = i.useCallback(
                (e) => {
                    e.id === J || e.id === N.Ik.FRECENCY ? (et(null), Y.current?.scrollToSectionTop(0)) : et(e.id);
                },
                [et, J],
            ),
            el = i.useCallback(
                (e, t, r) => {
                    A.Gf({ channelId: n.id, command: e, section: t, location: y.Oh.DISCOVERY, triggerSection: r });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == B) return !e && (H(0), !0);
                    if (null == B) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of Z)
                        if (((t = n), B < (n += e.data.length))) {
                            let n = e.data[B - t],
                                r = $.find((e) => e.id === n.applicationId);
                            el(n, r, (0, S.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === X.length) return !0;
                    let t = Q ? x : 0,
                        n = X.length + t,
                        r = null == B ? 0 : B + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), H(r), K(!0), !0;
                },
            }),
            [X.length, Z, Q, $, el, B],
        );
        let eu = i.useCallback(
                (e) => {
                    let t = q[e];
                    if (null == t) return null;
                    let i = (0, b.Rg)(t),
                        a = (0, r.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, r.jsx)(E.A, { className: D.Km, icon: a, children: t.name }, e);
                },
                [n, q],
            ),
            ec = i.useCallback(
                (e, t) => {
                    let n = e === q.length - 1,
                        i = q[e],
                        { data: a } = Z[e];
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: s()(D.Wy, { [D.YD]: n }),
                            children: [
                                t,
                                0 === a.length &&
                                    (0, r.jsx)(u.A, {
                                        message: O.intl.format(O.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: L,
                                        className: D.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [q, Z],
            ),
            ed = i.useCallback(
                (e, t) => {
                    let i = Z[t.sectionIndex],
                        a = i.data[t.sectionRowIndex],
                        s = `${i.section.id}:${a?.id ?? e}`;
                    if (
                        null == a ||
                        (i.section.id !== a.applicationId && i.section.id !== N.Ik.FRECENCY) ||
                        a.inputType === y.y$.PLACEHOLDER
                    )
                        return (0, r.jsx)(C.A, {}, s);
                    let o = $.find((e) => e.id === a.applicationId);
                    return (0, r.jsx)(
                        _.Ay.NewCommand,
                        {
                            index: e,
                            command: a,
                            channel: n,
                            className: D.D5,
                            selected: B === e,
                            showImage: i.section.id !== a.applicationId,
                            section: o,
                            onClick: () => el(a, o, (0, S.$S)(i.section)),
                            onHover: () => {
                                H(null), K(!1);
                            },
                        },
                        s,
                    );
                },
                [n, Z, el, $, B],
            ),
            e_ = (0, h.GV)();
        return (
            (0, f.gf)(e_, !0, (0, _.aI)(B)),
            i.useEffect(
                () => () => {
                    (0, f.nQ)();
                },
                [],
            ),
            (0, r.jsxs)(_.Ay, {
                id: e_,
                className: D.x9,
                innerClassName: D.iE,
                onMouseDown: j,
                children: [
                    (0, r.jsx)(v.A, {
                        className: D.H$,
                        channel: n,
                        sections: $,
                        filteredSectionId: J,
                        activeCategoryIndex: z,
                        onSectionClick: eo,
                        applicationCommandListRef: Y,
                    }),
                    (0, r.jsx)(p.A, {
                        role: "listbox",
                        className: D.p_,
                        listPadding: V,
                        onScroll: er,
                        renderRow: ed,
                        renderSection: ec,
                        renderSectionHeader: eu,
                        rowCount: q.length,
                        rowCountBySection: es,
                        rowHeight: P,
                        sectionHeaderHeight: k,
                        sectionMarginBottom: ea,
                        ref: Y,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function j(e) {
    e.preventDefault();
}
