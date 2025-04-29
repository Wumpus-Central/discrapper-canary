n.d(t, { Z: () => V }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(788911),
    u = n(911969),
    d = n(367907),
    f = n(588468),
    _ = n(30465),
    p = n(218867),
    h = n(313201),
    m = n(806966),
    g = n(98528),
    E = n(551058),
    b = n(555573),
    y = n(10718),
    O = n(367790),
    v = n(895924),
    I = n(581364),
    S = n(56801),
    T = n(342687),
    A = n(826298),
    N = n(689079),
    C = n(981631),
    R = n(388032),
    P = n(702854),
    w = n(239840);
let D = 512,
    L = 7,
    x = 56,
    M = 16,
    k = 32,
    j = 20,
    U = 420,
    G = [8, 8, 0, 8],
    B = l().debounce(() => {
        (0, d.yw)(C.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    V = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: o } = e,
            s = i.useRef(!1),
            l = i.useRef(0),
            [V, Z] = i.useState(0),
            H = i.useRef(null),
            [Y, W] = i.useState(!1),
            K = m.Xn.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.yw)(C.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: z,
                activeSections: q,
                commandsByActiveSection: Q,
                hasMoreAfter: X,
                commands: J,
                filteredSectionId: $,
                scrollDown: ee,
                filterSection: et
            } = y.wi({
                context: {
                    channel: n,
                    type: 'channel'
                },
                filters: {
                    commandTypes: [u.yU.CHAT],
                    builtIns: o ? O.D.ONLY_TEXT : O.D.ALLOW,
                    applicationCommands: !o
                },
                options: {
                    placeholderCount: L,
                    limit: N.tn,
                    includeFrecency: !0
                },
                allowFetch: !0
            }),
            en = (0, g.Qs)({
                activeCategoryIndex: K,
                isScrolling: s,
                listRef: H,
                onActiveCategoryIndexChange: (e) => {
                    let t = q[e];
                    if (null != t) {
                        let e = z.findIndex((e) => e.id === t.id);
                        m.Xn.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: j,
                searchQuery: ''
            }),
            er = (e) => {
                let t = q.length * (k + M) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? L : 0)) * x - D;
                X && e + U > t && ee(), en(e), B(), (l.current = e);
            },
            ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er;
        }),
            i.useEffect(() => {
                ei.current(l.current);
            }, [J]);
        let eo = i.useCallback((e) => (e !== q.length - 1 || X ? M : 0), [q.length, X]),
            ea = Q.map((e) => e.data.length);
        i.useEffect(() => {
            null != H.current && Y && null != V && H.current.scrollRowIntoView(V);
        }, [Y, V]),
            i.useLayoutEffect(() => {
                if (null != $) {
                    var e;
                    null == (e = H.current) || e.scrollToSectionTop(0);
                }
            }, [J, $]);
        let es = i.useCallback(
                (e) => {
                    if (e.id === $ || e.id === N.bi.FRECENCY) {
                        var t;
                        et(null), null == (t = H.current) || t.scrollToSectionTop(0);
                    } else et(e.id);
                },
                [et, $]
            ),
            el = i.useCallback(
                (e, t, r) => {
                    b.Po({
                        channelId: n.id,
                        command: e,
                        section: t,
                        location: v.Vh.DISCOVERY,
                        triggerSection: r
                    });
                },
                [n.id]
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == V) return !e && (Z(0), !0);
                    if (null == V) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of Q)
                        if (((t = n), V < (n += e.data.length))) {
                            let n = e.data[V - t],
                                r = z.find((e) => e.id === n.applicationId);
                            el(n, r, (0, I.tI)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === J.length) return !0;
                    let t = X ? L : 0,
                        n = J.length + t,
                        r = null == V ? 0 : V + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), Z(r), W(!0), !0;
                }
            }),
            [J.length, Q, X, z, el, V]
        );
        let ec = i.useCallback(
                (e) => {
                    let t = q[e];
                    if (null == t) return null;
                    let i = (0, A.ky)(t),
                        o = (0, r.jsx)(i, {
                            channel: n,
                            section: t,
                            width: 16,
                            height: 16,
                            padding: 0
                        });
                    return (0, r.jsx)(
                        E.Z,
                        {
                            className: P.categoryHeader,
                            icon: o,
                            children: t.name
                        },
                        e
                    );
                },
                [n, q]
            ),
            eu = i.useCallback(
                (e, t) => {
                    let n = e === q.length - 1,
                        i = q[e],
                        { data: o } = Q[e];
                    return (0, r.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-label': i.name,
                            className: a()(P.categorySection, { [P.categorySectionLast]: n }),
                            children: [
                                t,
                                0 === o.length &&
                                    (0, r.jsx)(c.Z, {
                                        message: R.intl.format(R.t.WoQXT0, { applicationName: i.name }),
                                        noResultsImageURL: w,
                                        className: P.noSearchResults
                                    })
                            ]
                        },
                        e
                    );
                },
                [q, Q]
            ),
            ed = i.useCallback(
                (e, t) => {
                    var i;
                    let o = Q[t.sectionIndex],
                        a = o.data[t.sectionRowIndex],
                        s = ''.concat(o.section.id, ':').concat(null != (i = null == a ? void 0 : a.id) ? i : e);
                    if (null == a || (o.section.id !== a.applicationId && o.section.id !== N.bi.FRECENCY) || a.inputType === v.iw.PLACEHOLDER) return (0, r.jsx)(T.Z, {}, s);
                    let l = z.find((e) => e.id === a.applicationId);
                    return (0, r.jsx)(
                        f.ZP.NewCommand,
                        {
                            index: e,
                            command: a,
                            channel: n,
                            className: P.itemWrapper,
                            selected: V === e,
                            showImage: o.section.id !== a.applicationId,
                            section: l,
                            onClick: () => el(a, l, (0, I.tI)(o.section)),
                            onHover: () => {
                                Z(null), W(!1);
                            }
                        },
                        s
                    );
                },
                [n, Q, el, z, V]
            ),
            ef = (0, h.Dt)();
        return (
            (0, _.KR)(ef, !0, (0, f.DJ)(V)),
            i.useEffect(
                () => () => {
                    (0, _.sJ)();
                },
                []
            ),
            (0, r.jsxs)(f.ZP, {
                id: ef,
                className: P.outerWrapper,
                innerClassName: P.wrapper,
                onMouseDown: F,
                children: [
                    (0, r.jsx)(S.Z, {
                        className: P.rail,
                        channel: n,
                        sections: z,
                        filteredSectionId: $,
                        activeCategoryIndex: K,
                        onSectionClick: es,
                        applicationCommandListRef: H
                    }),
                    (0, r.jsx)(p.Z, {
                        role: 'listbox',
                        className: P.list,
                        listPadding: G,
                        onScroll: er,
                        renderRow: ed,
                        renderSection: eu,
                        renderSectionHeader: ec,
                        rowCount: q.length,
                        rowCountBySection: ea,
                        rowHeight: x,
                        sectionHeaderHeight: k,
                        sectionMarginBottom: eo,
                        ref: H,
                        stickyHeaders: !0
                    })
                ]
            })
        );
    });
function F(e) {
    e.preventDefault();
}
