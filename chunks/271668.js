n.d(t, { Z: () => F }), n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(788911),
    c = n(911969),
    d = n(367907),
    f = n(588468),
    _ = n(30465),
    p = n(218867),
    h = n(313201),
    m = n(806966),
    g = n(98528),
    E = n(551058),
    v = n(555573),
    y = n(10718),
    I = n(367790),
    b = n(895924),
    T = n(581364),
    S = n(56801),
    A = n(342687),
    N = n(826298),
    C = n(689079),
    R = n(981631),
    O = n(388032),
    D = n(926030),
    x = n(239840);
let L = 512,
    P = 7,
    w = 56,
    M = 16,
    k = 32,
    U = 20,
    G = 420,
    B = [8, 8, 0, 8],
    Z = l().debounce(() => {
        (0, d.yw)(R.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    F = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: a } = e,
            o = r.useRef(!1),
            l = r.useRef(0),
            [F, j] = r.useState(0),
            H = r.useRef(null),
            [Y, W] = r.useState(!1),
            K = m.Xn.useStore((e) => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, d.yw)(R.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
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
                    commandTypes: [c.yU.CHAT],
                    builtIns: a ? I.D.ONLY_TEXT : I.D.ALLOW,
                    applicationCommands: !a
                },
                options: {
                    placeholderCount: P,
                    limit: C.tn,
                    includeFrecency: !0
                },
                allowFetch: !0
            }),
            en = (0, g.Qs)({
                activeCategoryIndex: K,
                isScrolling: o,
                listRef: H,
                onActiveCategoryIndexChange: (e) => {
                    let t = q[e];
                    if (null != t) {
                        let e = z.findIndex((e) => e.id === t.id);
                        m.Xn.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: U,
                searchQuery: ''
            }),
            ei = (e) => {
                let t = q.length * (k + M) + (Q.reduce((e, t) => e + t.data.length, 0) - (X ? P : 0)) * w - L;
                X && e + G > t && ee(), en(e), Z(), (l.current = e);
            },
            er = r.useRef(ei);
        r.useEffect(() => {
            er.current = ei;
        }),
            r.useEffect(() => {
                er.current(l.current);
            }, [J]);
        let ea = r.useCallback((e) => (e !== q.length - 1 || X ? M : 0), [q.length, X]),
            es = Q.map((e) => e.data.length);
        r.useEffect(() => {
            null != H.current && Y && null != F && H.current.scrollRowIntoView(F);
        }, [Y, F]),
            r.useLayoutEffect(() => {
                if (null != $) {
                    var e;
                    null === (e = H.current) || void 0 === e || e.scrollToSectionTop(0);
                }
            }, [J, $]);
        let eo = r.useCallback(
                (e) => {
                    if (e.id === $ || e.id === C.bi.FRECENCY) {
                        var t;
                        et(null), null === (t = H.current) || void 0 === t || t.scrollToSectionTop(0);
                    } else et(e.id);
                },
                [et, $]
            ),
            el = r.useCallback(
                (e, t, i) => {
                    v.Po({
                        channelId: n.id,
                        command: e,
                        section: t,
                        location: b.Vh.DISCOVERY,
                        triggerSection: i
                    });
                },
                [n.id]
            );
        r.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == F) return !e && (j(0), !0);
                    if (null == F) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of Q)
                        if (((t = n), F < (n += e.data.length))) {
                            let n = e.data[F - t],
                                i = z.find((e) => e.id === n.applicationId);
                            el(n, i, (0, T.tI)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === J.length) return !0;
                    let t = X ? P : 0,
                        n = J.length + t,
                        i = null == F ? 0 : F + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), j(i), W(!0), !0;
                }
            }),
            [J.length, Q, X, z, el, F]
        );
        let eu = r.useCallback(
                (e) => {
                    let t = q[e];
                    if (null == t) return null;
                    let r = (0, N.ky)(t),
                        a = (0, i.jsx)(r, {
                            channel: n,
                            section: t,
                            width: 16,
                            height: 16,
                            padding: 0
                        });
                    return (0, i.jsx)(
                        E.Z,
                        {
                            className: D.categoryHeader,
                            icon: a,
                            children: t.name
                        },
                        e
                    );
                },
                [n, q]
            ),
            ec = r.useCallback(
                (e, t) => {
                    let n = e === q.length - 1,
                        r = q[e],
                        { data: a } = Q[e];
                    return (0, i.jsxs)(
                        'ul',
                        {
                            role: 'group',
                            'aria-label': r.name,
                            className: s()(D.categorySection, { [D.categorySectionLast]: n }),
                            children: [
                                t,
                                0 === a.length &&
                                    (0, i.jsx)(u.Z, {
                                        message: O.intl.format(O.t.WoQXT0, { applicationName: r.name }),
                                        noResultsImageURL: x,
                                        className: D.noSearchResults
                                    })
                            ]
                        },
                        e
                    );
                },
                [q, Q]
            ),
            ed = r.useCallback(
                (e, t) => {
                    var r;
                    let a = Q[t.sectionIndex],
                        s = a.data[t.sectionRowIndex],
                        o = ''.concat(a.section.id, ':').concat(null !== (r = null == s ? void 0 : s.id) && void 0 !== r ? r : e);
                    if (null == s || (a.section.id !== s.applicationId && a.section.id !== C.bi.FRECENCY) || s.inputType === b.iw.PLACEHOLDER) return (0, i.jsx)(A.Z, {}, o);
                    let l = z.find((e) => e.id === s.applicationId);
                    return (0, i.jsx)(
                        f.ZP.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: D.itemWrapper,
                            selected: F === e,
                            showImage: a.section.id !== s.applicationId,
                            section: l,
                            onClick: () => el(s, l, (0, T.tI)(a.section)),
                            onHover: () => {
                                j(null), W(!1);
                            }
                        },
                        o
                    );
                },
                [n, Q, el, z, F]
            ),
            ef = (0, h.Dt)();
        return (
            (0, _.KR)(ef, !0, (0, f.DJ)(F)),
            r.useEffect(
                () => () => {
                    (0, _.sJ)();
                },
                []
            ),
            (0, i.jsxs)(f.ZP, {
                id: ef,
                className: D.outerWrapper,
                innerClassName: D.wrapper,
                onMouseDown: V,
                children: [
                    (0, i.jsx)(S.Z, {
                        className: D.rail,
                        channel: n,
                        sections: z,
                        filteredSectionId: $,
                        activeCategoryIndex: K,
                        onSectionClick: eo,
                        applicationCommandListRef: H
                    }),
                    (0, i.jsx)(p.Z, {
                        role: 'listbox',
                        className: D.list,
                        listPadding: B,
                        onScroll: ei,
                        renderRow: ed,
                        renderSection: ec,
                        renderSectionHeader: eu,
                        rowCount: q.length,
                        rowCountBySection: es,
                        rowHeight: w,
                        sectionHeaderHeight: k,
                        sectionMarginBottom: ea,
                        ref: H,
                        stickyHeaders: !0
                    })
                ]
            })
        );
    });
function V(e) {
    e.preventDefault();
}
