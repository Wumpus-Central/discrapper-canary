n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
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
    T = n(56801),
    S = n(342687),
    A = n(826298),
    C = n(689079),
    N = n(981631),
    R = n(388032),
    P = n(587222),
    w = n(239840);
let D = 512,
    x = 7,
    L = 56,
    M = 16,
    k = 32,
    j = 20,
    U = 420,
    G = [8, 8, 0, 8],
    B = l().debounce(() => {
        (0, d.yw)(N.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    Z = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: a } = e,
            s = i.useRef(!1),
            l = i.useRef(0),
            [Z, V] = i.useState(0),
            H = i.useRef(null),
            [Y, W] = i.useState(!1),
            K = m.Xn.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, d.yw)(N.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: z,
                activeSections: q,
                commandsByActiveSection: X,
                hasMoreAfter: Q,
                commands: J,
                filteredSectionId: $,
                scrollDown: ee,
                filterSection: et,
            } = y.wi({
                context: {
                    channel: n,
                    type: "channel",
                },
                filters: {
                    commandTypes: [u.yU.CHAT],
                    builtIns: a ? O.D.ONLY_TEXT : O.D.ALLOW,
                    applicationCommands: !a,
                },
                options: {
                    placeholderCount: x,
                    limit: C.tn,
                    includeFrecency: !0,
                },
                allowFetch: !0,
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
                searchQuery: "",
            }),
            er = (e) => {
                let t = q.length * (k + M) + (X.reduce((e, t) => e + t.data.length, 0) - (Q ? x : 0)) * L - D;
                Q && e + U > t && ee(), en(e), B(), (l.current = e);
            },
            ei = i.useRef(er);
        i.useEffect(() => {
            ei.current = er;
        }),
            i.useEffect(() => {
                ei.current(l.current);
            }, [J]);
        let ea = i.useCallback((e) => (e !== q.length - 1 || Q ? M : 0), [q.length, Q]),
            eo = X.map((e) => e.data.length);
        i.useEffect(() => {
            null != H.current && Y && null != Z && H.current.scrollRowIntoView(Z);
        }, [Y, Z]),
            i.useLayoutEffect(() => {
                if (null != $) {
                    var e;
                    null == (e = H.current) || e.scrollToSectionTop(0);
                }
            }, [J, $]);
        let es = i.useCallback(
                (e) => {
                    if (e.id === $ || e.id === C.bi.FRECENCY) {
                        var t;
                        et(null), null == (t = H.current) || t.scrollToSectionTop(0);
                    } else et(e.id);
                },
                [et, $],
            ),
            el = i.useCallback(
                (e, t, r) => {
                    b.Po({
                        channelId: n.id,
                        command: e,
                        section: t,
                        location: v.Vh.DISCOVERY,
                        triggerSection: r,
                    });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == Z) return !e && (V(0), !0);
                    if (null == Z) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of X)
                        if (((t = n), Z < (n += e.data.length))) {
                            let n = e.data[Z - t],
                                r = z.find((e) => e.id === n.applicationId);
                            el(n, r, (0, I.tI)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === J.length) return !0;
                    let t = Q ? x : 0,
                        n = J.length + t,
                        r = null == Z ? 0 : Z + e;
                    return r >= n ? (r = n - 1) : r < 0 && (r = 0), V(r), W(!0), !0;
                },
            }),
            [J.length, X, Q, z, el, Z],
        );
        let ec = i.useCallback(
                (e) => {
                    let t = q[e];
                    if (null == t) return null;
                    let i = (0, A.ky)(t),
                        a = (0, r.jsx)(i, {
                            channel: n,
                            section: t,
                            width: 16,
                            height: 16,
                            padding: 0,
                        });
                    return (0, r.jsx)(
                        E.Z,
                        {
                            className: P.categoryHeader,
                            icon: a,
                            children: t.name,
                        },
                        e,
                    );
                },
                [n, q],
            ),
            eu = i.useCallback(
                (e, t) => {
                    let n = e === q.length - 1,
                        i = q[e],
                        { data: a } = X[e];
                    return (0, r.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: o()(P.categorySection, { [P.categorySectionLast]: n }),
                            children: [
                                t,
                                0 === a.length &&
                                    (0, r.jsx)(c.Z, {
                                        message: R.intl.format(R.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: w,
                                        className: P.noSearchResults,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [q, X],
            ),
            ed = i.useCallback(
                (e, t) => {
                    var i;
                    let a = X[t.sectionIndex],
                        o = a.data[t.sectionRowIndex],
                        s = "".concat(a.section.id, ":").concat(null != (i = null == o ? void 0 : o.id) ? i : e);
                    if (
                        null == o ||
                        (a.section.id !== o.applicationId && a.section.id !== C.bi.FRECENCY) ||
                        o.inputType === v.iw.PLACEHOLDER
                    )
                        return (0, r.jsx)(S.Z, {}, s);
                    let l = z.find((e) => e.id === o.applicationId);
                    return (0, r.jsx)(
                        f.ZP.NewCommand,
                        {
                            index: e,
                            command: o,
                            channel: n,
                            className: P.itemWrapper,
                            selected: Z === e,
                            showImage: a.section.id !== o.applicationId,
                            section: l,
                            onClick: () => el(o, l, (0, I.tI)(a.section)),
                            onHover: () => {
                                V(null), W(!1);
                            },
                        },
                        s,
                    );
                },
                [n, X, el, z, Z],
            ),
            ef = (0, h.Dt)();
        return (
            (0, _.KR)(ef, !0, (0, f.DJ)(Z)),
            i.useEffect(
                () => () => {
                    (0, _.sJ)();
                },
                [],
            ),
            (0, r.jsxs)(f.ZP, {
                id: ef,
                className: P.outerWrapper,
                innerClassName: P.wrapper,
                onMouseDown: F,
                children: [
                    (0, r.jsx)(T.Z, {
                        className: P.rail,
                        channel: n,
                        sections: z,
                        filteredSectionId: $,
                        activeCategoryIndex: K,
                        onSectionClick: es,
                        applicationCommandListRef: H,
                    }),
                    (0, r.jsx)(p.Z, {
                        role: "listbox",
                        className: P.list,
                        listPadding: G,
                        onScroll: er,
                        renderRow: ed,
                        renderSection: eu,
                        renderSectionHeader: ec,
                        rowCount: q.length,
                        rowCountBySection: eo,
                        rowHeight: L,
                        sectionHeaderHeight: k,
                        sectionMarginBottom: ea,
                        ref: H,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function F(e) {
    e.preventDefault();
}
