var i = r(47120);
var a = r(724458);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(788911),
    _ = r(911969),
    h = r(367907),
    p = r(588468),
    m = r(30465),
    g = r(218867),
    E = r(313201),
    v = r(806966),
    I = r(98528),
    T = r(551058),
    b = r(555573),
    y = r(10718),
    S = r(367790),
    A = r(895924),
    N = r(581364),
    C = r(56801),
    R = r(342687),
    O = r(826298),
    D = r(689079),
    L = r(981631),
    x = r(388032),
    w = r(926030),
    P = r(239840);
let M = 512,
    k = 7,
    U = 56,
    B = 16,
    G = 32,
    Z = 20,
    F = 420,
    V = [8, 8, 0, 8],
    j = d().debounce(() => {
        (0, h.yw)(L.rMx.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300);
function H(e) {
    e.preventDefault();
}
n.Z = o.forwardRef(function (e, n) {
    let { channel: r, canOnlyUseTextCommands: i } = e,
        a = o.useRef(!1),
        l = o.useRef(0),
        [c, d] = o.useState(0),
        Y = o.useRef(null),
        [W, K] = o.useState(!1),
        z = v.Xn.useStore((e) => e.activeCategoryIndex);
    o.useEffect(() => {
        (0, h.yw)(L.rMx.APPLICATION_COMMAND_BROWSER_OPENED);
    }, []);
    let {
            sectionDescriptors: q,
            activeSections: Q,
            commandsByActiveSection: X,
            hasMoreAfter: J,
            commands: $,
            filteredSectionId: ee,
            scrollDown: et,
            filterSection: en
        } = y.wi({
            channel: r,
            filters: {
                commandTypes: [_.yU.CHAT],
                builtIns: i ? S.D.ONLY_TEXT : S.D.ALLOW,
                applicationCommands: !i
            },
            options: {
                placeholderCount: k,
                limit: D.tn,
                includeFrecency: !0
            },
            allowFetch: !0
        }),
        er = (0, I.Qs)({
            activeCategoryIndex: z,
            isScrolling: a,
            listRef: Y,
            onActiveCategoryIndexChange: (e) => {
                let n = Q[e];
                if (null != n) {
                    let e = q.findIndex((e) => e.id === n.id);
                    v.Xn.setActiveCategoryIndex(e);
                }
            },
            scrollOffset: Z,
            searchQuery: ''
        }),
        ei = (e) => {
            let n = Q.length,
                r = n * (G + B) + (X.reduce((e, n) => e + n.data.length, 0) - (J ? k : 0)) * U - M;
            J && e + F > r && et(), er(e), j(), (l.current = e);
        },
        ea = o.useRef(ei);
    o.useEffect(() => {
        ea.current = ei;
    }),
        o.useEffect(() => {
            ea.current(l.current);
        }, [$]);
    let es = o.useCallback((e) => (e !== Q.length - 1 || J ? B : 0), [Q.length, J]),
        eo = X.map((e) => e.data.length);
    o.useEffect(() => {
        null != Y.current && W && null != c && Y.current.scrollRowIntoView(c);
    }, [W, c]),
        o.useLayoutEffect(() => {
            if (null != ee) {
                var e;
                null === (e = Y.current) || void 0 === e || e.scrollToSectionTop(0);
            }
        }, [$, ee]);
    let el = o.useCallback(
            (e) => {
                if (e.id === ee || e.id === D.bi.FRECENCY) {
                    var n;
                    en(null), null === (n = Y.current) || void 0 === n || n.scrollToSectionTop(0);
                } else en(e.id);
            },
            [en, ee]
        ),
        eu = o.useCallback(
            (e, n, i) => {
                b.Po({
                    channelId: r.id,
                    command: e,
                    section: n,
                    location: A.Vh.DISCOVERY,
                    triggerSection: i
                });
            },
            [r.id]
        );
    o.useImperativeHandle(
        n,
        () => ({
            onTabOrEnter: (e) => {
                if (null == c) return !e && (d(0), !0);
                if (null == c) return !1;
                let n = 0,
                    r = 0;
                for (let e of X)
                    if (((n = r), c < (r += e.data.length))) {
                        let r = e.data[c - n],
                            i = q.find((e) => e.id === r.applicationId);
                        eu(r, i, (0, N.tI)(e.section));
                        break;
                    }
                return !0;
            },
            onMoveSelection: (e) => {
                if (0 === $.length) return !0;
                let n = J ? k : 0,
                    r = $.length + n,
                    i = null == c ? 0 : c + e;
                return i >= r ? (i = r - 1) : i < 0 && (i = 0), d(i), K(!0), !0;
            }
        }),
        [$.length, X, J, q, eu, c]
    );
    let ec = o.useCallback(
            (e) => {
                let n = Q[e];
                if (null == n) return null;
                let i = (0, O.ky)(n),
                    a = (0, s.jsx)(i, {
                        channel: r,
                        section: n,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, s.jsx)(
                    T.Z,
                    {
                        className: w.categoryHeader,
                        icon: a,
                        children: n.name
                    },
                    e
                );
            },
            [r, Q]
        ),
        ed = o.useCallback(
            (e, n) => {
                let r = e === Q.length - 1,
                    i = Q[e],
                    { data: a } = X[e];
                return (0, s.jsxs)(
                    'ul',
                    {
                        role: 'group',
                        'aria-label': i.name,
                        className: u()(w.categorySection, { [w.categorySectionLast]: r }),
                        children: [
                            n,
                            0 === a.length &&
                                (0, s.jsx)(f.Z, {
                                    message: x.intl.format(x.t.WoQXT0, { applicationName: i.name }),
                                    noResultsImageURL: P,
                                    className: w.noSearchResults
                                })
                        ]
                    },
                    e
                );
            },
            [Q, X]
        ),
        ef = o.useCallback(
            (e, n) => {
                var i;
                let a = X[n.sectionIndex],
                    o = a.data[n.sectionRowIndex],
                    l = ''.concat(a.section.id, ':').concat(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : e);
                if (null == o || (a.section.id !== o.applicationId && a.section.id !== D.bi.FRECENCY) || o.inputType === A.iw.PLACEHOLDER) return (0, s.jsx)(R.Z, {}, l);
                let u = q.find((e) => e.id === o.applicationId);
                return (0, s.jsx)(
                    p.ZP.NewCommand,
                    {
                        index: e,
                        command: o,
                        channel: r,
                        className: w.itemWrapper,
                        selected: c === e,
                        showImage: a.section.id !== o.applicationId,
                        section: u,
                        onClick: () => eu(o, u, (0, N.tI)(a.section)),
                        onHover: () => {
                            d(null), K(!1);
                        }
                    },
                    l
                );
            },
            [r, X, eu, q, c]
        ),
        e_ = (0, E.Dt)();
    return (
        (0, m.KR)(e_, !0, (0, p.DJ)(c)),
        o.useEffect(
            () => () => {
                (0, m.sJ)();
            },
            []
        ),
        (0, s.jsxs)(p.ZP, {
            id: e_,
            className: w.outerWrapper,
            innerClassName: w.wrapper,
            onMouseDown: H,
            children: [
                (0, s.jsx)(C.Z, {
                    className: w.rail,
                    channel: r,
                    sections: q,
                    filteredSectionId: ee,
                    activeCategoryIndex: z,
                    onSectionClick: el,
                    applicationCommandListRef: Y
                }),
                (0, s.jsx)(g.Z, {
                    role: 'listbox',
                    className: w.list,
                    listPadding: V,
                    onScroll: ei,
                    renderRow: ef,
                    renderSection: ed,
                    renderSectionHeader: ec,
                    rowCount: Q.length,
                    rowCountBySection: eo,
                    rowHeight: U,
                    sectionHeaderHeight: G,
                    sectionMarginBottom: es,
                    ref: Y,
                    stickyHeaders: !0
                })
            ]
        })
    );
});
