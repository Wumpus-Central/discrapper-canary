"use strict";
n.d(t, { A: () => P });
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
    E = n(850992),
    m = n(887695),
    g = n(286509),
    A = n(721768),
    I = n(842209),
    T = n(210978),
    S = n(392054),
    y = n(168186),
    N = n(546587),
    v = n(746388),
    C = n(664929),
    O = n(73510),
    R = n(652215),
    b = n(985018),
    D = n(13297),
    L = n(911385);
let w = [8, 8, 0, 8],
    M = l().debounce(() => {
        (0, d.zV)(R.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    P = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = i.useRef(!1),
            l = i.useRef(0),
            [P, k] = i.useState(0),
            U = i.useRef(null),
            [G, F] = i.useState(!1),
            V = E.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.zV)(R.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: B,
                activeSections: H,
                commandsByActiveSection: j,
                hasMoreAfter: Y,
                commands: W,
                filteredSectionId: K,
                scrollDown: $,
                filterSection: z,
            } = I.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [c.kc.CHAT],
                    builtIns: s ? T.n.ONLY_TEXT : T.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: O.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            q = (0, m.Fk)({
                activeCategoryIndex: V,
                isScrolling: o,
                listRef: U,
                onActiveCategoryIndexChange: (e) => {
                    let t = H[e];
                    if (null != t) {
                        let e = B.findIndex((e) => e.id === t.id);
                        E.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            X = (e) => {
                let t = H.length,
                    n = j.reduce((e, t) => e + t.data.length, 0) - 7 * !!Y;
                Y && e + 420 > 48 * t + 56 * n - 512 && $(), q(e), M(), (l.current = e);
            },
            Q = i.useRef(X);
        i.useEffect(() => {
            Q.current = X;
        }),
            i.useEffect(() => {
                Q.current(l.current);
            }, [W]);
        let Z = i.useCallback((e) => (e !== H.length - 1 || Y ? 16 : 0), [H.length, Y]),
            J = j.map((e) => e.data.length);
        i.useEffect(() => {
            null != U.current && G && null != P && U.current.scrollRowIntoView(P);
        }, [G, P]),
            i.useLayoutEffect(() => {
                null != K && U.current?.scrollToSectionTop(0);
            }, [W, K]);
        let ee = i.useCallback(
                (e) => {
                    e.id === K || e.id === O.Ik.FRECENCY ? (z(null), U.current?.scrollToSectionTop(0)) : z(e.id);
                },
                [z, K],
            ),
            et = i.useCallback(
                (e, t, r) => {
                    A.Gf({ channelId: n.id, command: e, section: t, location: S.Oh.DISCOVERY, triggerSection: r });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == P) return !e && (k(0), !0);
                    if (null == P) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of j)
                        if (((t = n), P < (n += e.data.length))) {
                            let n = e.data[P - t],
                                r = B.find((e) => e.id === n.applicationId);
                            et(n, r, (0, y.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === W.length) return !0;
                    let t = 7 * !!Y,
                        n = W.length + t,
                        r = null == P ? 0 : P + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), k(r), F(!0), !0;
                },
            }),
            [W.length, j, Y, B, et, P],
        );
        let en = i.useCallback(
                (e) => {
                    let t = H[e];
                    if (null == t) return null;
                    let i = (0, C.Rg)(t),
                        s = (0, r.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, r.jsx)(g.A, { className: D.Km, icon: s, children: t.name }, e);
                },
                [n, H],
            ),
            er = i.useCallback(
                (e, t) => {
                    let n = e === H.length - 1,
                        i = H[e],
                        { data: s } = j[e];
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
                [H, j],
            ),
            ei = i.useCallback(
                (e, t) => {
                    let i = j[t.sectionIndex],
                        s = i.data[t.sectionRowIndex],
                        a = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== O.Ik.FRECENCY) ||
                        s.inputType === S.y$.PLACEHOLDER
                    )
                        return (0, r.jsx)(v.A, {}, a);
                    let o = B.find((e) => e.id === s.applicationId);
                    return (0, r.jsx)(
                        _.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: D.D5,
                            selected: P === e,
                            showImage: i.section.id !== s.applicationId,
                            section: o,
                            onClick: () => et(s, o, (0, y.$S)(i.section)),
                            onHover: () => {
                                k(null), F(!1);
                            },
                        },
                        a,
                    );
                },
                [n, j, et, B, P],
            ),
            es = (0, h.GV)();
        return (
            (0, f.gf)(es, !0, (0, _.aI)(P)),
            i.useEffect(
                () => () => {
                    (0, f.nQ)();
                },
                [],
            ),
            (0, r.jsxs)(_.Ay, {
                id: es,
                className: D.x9,
                innerClassName: D.iE,
                onMouseDown: x,
                children: [
                    (0, r.jsx)(N.A, {
                        className: D.H$,
                        channel: n,
                        sections: B,
                        filteredSectionId: K,
                        activeCategoryIndex: V,
                        onSectionClick: ee,
                        applicationCommandListRef: U,
                    }),
                    (0, r.jsx)(p.A, {
                        role: "listbox",
                        className: D.p_,
                        listPadding: w,
                        onScroll: X,
                        renderRow: ei,
                        renderSection: er,
                        renderSectionHeader: en,
                        rowCount: H.length,
                        rowCountBySection: J,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: Z,
                        ref: U,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function x(e) {
    e.preventDefault();
}
