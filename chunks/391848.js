"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(537652),
    u = n(155718),
    d = n(58149),
    h = n(580424),
    m = n(579940),
    p = n(962125),
    f = n(915089),
    g = n(850992),
    _ = n(887695),
    x = n(286509),
    A = n(721768),
    C = n(842209),
    E = n(210978),
    I = n(392054),
    v = n(168186),
    y = n(546587),
    S = n(746388),
    b = n(664929),
    N = n(73510),
    T = n(652215),
    j = n(985018),
    R = n(13297),
    w = n(911385);
let L = [8, 8, 0, 8],
    M = o().debounce(() => {
        (0, d.zV)(T.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    k = l.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            a = l.useRef(!1),
            o = l.useRef(0),
            [k, P] = l.useState(0),
            D = l.useRef(null),
            [U, V] = l.useState(!1),
            G = g.LS.useStore((e) => e.activeCategoryIndex);
        l.useEffect(() => {
            (0, d.zV)(T.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: F,
                activeSections: B,
                commandsByActiveSection: H,
                hasMoreAfter: W,
                commands: K,
                filteredSectionId: z,
                scrollDown: Z,
                filterSection: q,
            } = C.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [u.kc.CHAT],
                    builtIns: s ? E.n.ONLY_TEXT : E.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: N.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            Y = (0, _.Fk)({
                activeCategoryIndex: G,
                isScrolling: a,
                listRef: D,
                onActiveCategoryIndexChange: (e) => {
                    let t = B[e];
                    if (null != t) {
                        let e = F.findIndex((e) => e.id === t.id);
                        g.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            J = (e) => {
                let t = B.length,
                    n = H.reduce((e, t) => e + t.data.length, 0) - 7 * !!W;
                W && e + 420 > 48 * t + 56 * n - 512 && Z(), Y(e), M(), (o.current = e);
            },
            $ = l.useRef(J);
        l.useEffect(() => {
            $.current = J;
        }),
            l.useEffect(() => {
                $.current(o.current);
            }, [K]);
        let X = l.useCallback((e) => (e !== B.length - 1 || W ? 16 : 0), [B.length, W]),
            Q = H.map((e) => e.data.length);
        l.useEffect(() => {
            null != D.current && U && null != k && D.current.scrollRowIntoView(k);
        }, [U, k]),
            l.useLayoutEffect(() => {
                null != z && D.current?.scrollToSectionTop(0);
            }, [K, z]);
        let ee = l.useCallback(
                (e) => {
                    e.id === z || e.id === N.Ik.FRECENCY ? (q(null), D.current?.scrollToSectionTop(0)) : q(e.id);
                },
                [q, z],
            ),
            et = l.useCallback(
                (e, t, i) => {
                    A.Gf({ channelId: n.id, command: e, section: t, location: I.Oh.DISCOVERY, triggerSection: i });
                },
                [n.id],
            );
        l.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == k) return !e && (P(0), !0);
                    if (null == k) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of H)
                        if (((t = n), k < (n += e.data.length))) {
                            let n = e.data[k - t],
                                i = F.find((e) => e.id === n.applicationId);
                            et(n, i, (0, v.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === K.length) return !0;
                    let t = 7 * !!W,
                        n = K.length + t,
                        i = null == k ? 0 : k + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), P(i), V(!0), !0;
                },
            }),
            [K.length, H, W, F, et, k],
        );
        let en = l.useCallback(
                (e) => {
                    let t = B[e];
                    if (null == t) return null;
                    let l = (0, b.Rg)(t),
                        s = (0, i.jsx)(l, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, i.jsx)(x.A, { className: R.Km, icon: s, children: t.name }, e);
                },
                [n, B],
            ),
            ei = l.useCallback(
                (e, t) => {
                    let n = e === B.length - 1,
                        l = B[e],
                        { data: s } = H[e];
                    return (0, i.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": l.name,
                            className: r()(R.Wy, { [R.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, i.jsx)(c.A, {
                                        message: j.intl.format(j.t.WoQXT6, { applicationName: l.name }),
                                        noResultsImageURL: w,
                                        className: R.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [B, H],
            ),
            el = l.useCallback(
                (e, t) => {
                    let l = H[t.sectionIndex],
                        s = l.data[t.sectionRowIndex],
                        r = `${l.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (l.section.id !== s.applicationId && l.section.id !== N.Ik.FRECENCY) ||
                        s.inputType === I.y$.PLACEHOLDER
                    )
                        return (0, i.jsx)(S.A, {}, r);
                    let a = F.find((e) => e.id === s.applicationId);
                    return (0, i.jsx)(
                        h.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: R.D5,
                            selected: k === e,
                            showImage: l.section.id !== s.applicationId,
                            section: a,
                            onClick: () => et(s, a, (0, v.$S)(l.section)),
                            onHover: () => {
                                P(null), V(!1);
                            },
                        },
                        r,
                    );
                },
                [n, H, et, F, k],
            ),
            es = (0, f.GV)();
        return (
            (0, m.gf)(es, !0, (0, h.aI)(k)),
            l.useEffect(
                () => () => {
                    (0, m.nQ)();
                },
                [],
            ),
            (0, i.jsxs)(h.Ay, {
                id: es,
                className: R.x9,
                innerClassName: R.iE,
                onMouseDown: O,
                children: [
                    (0, i.jsx)(y.A, {
                        className: R.H$,
                        channel: n,
                        sections: F,
                        filteredSectionId: z,
                        activeCategoryIndex: G,
                        onSectionClick: ee,
                        applicationCommandListRef: D,
                    }),
                    (0, i.jsx)(p.A, {
                        role: "listbox",
                        className: R.p_,
                        listPadding: L,
                        onScroll: J,
                        renderRow: el,
                        renderSection: ei,
                        renderSectionHeader: en,
                        rowCount: B.length,
                        rowCountBySection: Q,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: X,
                        ref: D,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function O(e) {
    e.preventDefault();
}
