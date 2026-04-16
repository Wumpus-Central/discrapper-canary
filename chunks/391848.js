"use strict";
n.d(t, { A: () => B });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(887695),
    g = n(286509),
    A = n(721768),
    I = n(842209),
    T = n(210978),
    S = n(392054),
    y = n(168186),
    v = n(546587),
    N = n(746388),
    C = n(664929),
    R = n(73510),
    O = n(652215),
    b = n(985018),
    D = n(13297),
    L = n(911385);
let w = 512,
    M = 7,
    P = 56,
    x = 16,
    k = 32,
    U = 20,
    G = 420,
    F = [8, 8, 0, 8],
    V = l().debounce(() => {
        (0, d.zV)(O.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    B = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = i.useRef(!1),
            l = i.useRef(0),
            [B, j] = i.useState(0),
            Y = i.useRef(null),
            [W, K] = i.useState(!1),
            $ = m.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(O.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: z,
                activeSections: q,
                commandsByActiveSection: Z,
                hasMoreAfter: X,
                commands: Q,
                filteredSectionId: J,
                scrollDown: ee,
                filterSection: et,
            } = I.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [c.kc.CHAT],
                    builtIns: s ? T.n.ONLY_TEXT : T.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: M, limit: R.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            en = (0, E.Fk)({
                activeCategoryIndex: $,
                isScrolling: o,
                listRef: Y,
                onActiveCategoryIndexChange: (e) => {
                    let t = q[e];
                    if (null != t) {
                        let e = z.findIndex((e) => e.id === t.id);
                        m.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: U,
                searchQuery: "",
            }),
            er = (e) => {
                let t = q.length * (k + x) + (Z.reduce((e, t) => e + t.data.length, 0) - (X ? M : 0)) * P - w;
                X && e + G > t && ee(), en(e), V(), (l.current = e);
            },
            ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er;
        }),
            i.useEffect(() => {
                ei.current(l.current);
            }, [Q]);
        let es = i.useCallback((e) => (e !== q.length - 1 || X ? x : 0), [q.length, X]),
            ea = Z.map((e) => e.data.length);
        i.useEffect(() => {
            null != Y.current && W && null != B && Y.current.scrollRowIntoView(B);
        }, [W, B]),
            i.useLayoutEffect(() => {
                null != J && Y.current?.scrollToSectionTop(0);
            }, [Q, J]);
        let eo = i.useCallback(
                (e) => {
                    e.id === J || e.id === R.Ik.FRECENCY ? (et(null), Y.current?.scrollToSectionTop(0)) : et(e.id);
                },
                [et, J],
            ),
            el = i.useCallback(
                (e, t, r) => {
                    A.Gf({ channelId: n.id, command: e, section: t, location: S.Oh.DISCOVERY, triggerSection: r });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == B) return !e && (j(0), !0);
                    if (null == B) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of Z)
                        if (((t = n), B < (n += e.data.length))) {
                            let n = e.data[B - t],
                                r = z.find((e) => e.id === n.applicationId);
                            el(n, r, (0, y.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === Q.length) return !0;
                    let t = X ? M : 0,
                        n = Q.length + t,
                        r = null == B ? 0 : B + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), j(r), K(!0), !0;
                },
            }),
            [Q.length, Z, X, z, el, B],
        );
        let eu = i.useCallback(
                (e) => {
                    let t = q[e];
                    if (null == t) return null;
                    let i = (0, C.Rg)(t),
                        s = (0, r.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, r.jsx)(g.A, { className: D.Km, icon: s, children: t.name }, e);
                },
                [n, q],
            ),
            ec = i.useCallback(
                (e, t) => {
                    let n = e === q.length - 1,
                        i = q[e],
                        { data: s } = Z[e];
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: a()(D.Wy, { [D.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, r.jsx)(u.A, {
                                        message: b.intl.format(b.t.WoQXT6, { applicationName: i.name }),
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
                        s = i.data[t.sectionRowIndex],
                        a = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== R.Ik.FRECENCY) ||
                        s.inputType === S.y$.PLACEHOLDER
                    )
                        return (0, r.jsx)(N.A, {}, a);
                    let o = z.find((e) => e.id === s.applicationId);
                    return (0, r.jsx)(
                        _.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: D.D5,
                            selected: B === e,
                            showImage: i.section.id !== s.applicationId,
                            section: o,
                            onClick: () => el(s, o, (0, y.$S)(i.section)),
                            onHover: () => {
                                j(null), K(!1);
                            },
                        },
                        a,
                    );
                },
                [n, Z, el, z, B],
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
                onMouseDown: H,
                children: [
                    (0, r.jsx)(v.A, {
                        className: D.H$,
                        channel: n,
                        sections: z,
                        filteredSectionId: J,
                        activeCategoryIndex: $,
                        onSectionClick: eo,
                        applicationCommandListRef: Y,
                    }),
                    (0, r.jsx)(p.A, {
                        role: "listbox",
                        className: D.p_,
                        listPadding: F,
                        onScroll: er,
                        renderRow: ed,
                        renderSection: ec,
                        renderSectionHeader: eu,
                        rowCount: q.length,
                        rowCountBySection: ea,
                        rowHeight: P,
                        sectionHeaderHeight: k,
                        sectionMarginBottom: es,
                        ref: Y,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function H(e) {
    e.preventDefault();
}
