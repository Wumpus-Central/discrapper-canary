n.d(t, { A: () => f });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(621466),
    o = n(311907),
    d = n(397927),
    c = n(73153),
    u = n(194894),
    A = n(186111),
    h = n(742077),
    _ = n(268387),
    m = n(715671),
    g = n(652215),
    p = n(985018),
    E = n(560125);
class I extends a.Component {
    searchBarRef = a.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        c.h.wait(() => u.pU(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        u.pU(null), u.n9("");
    }
    focusInput() {
        let { searchBarRef: e } = this;
        null != e && e.current?.focus();
    }
    updateActiveRow(e) {
        let { applicationViewItems: t, activeRowKey: n } = this.props,
            i = t.findIndex((e) => e.key === n),
            a = 0;
        i >= 0 && (a = (i + e) % t.length) < 0 && (a = t.length - 1);
        let r = t[a];
        u.pU(null != r ? r.key : null, !0);
    }
    handleKeyDown = (e) => {
        let { activeRowKey: t, hasModalOpen: n, applicationViewItems: i } = this.props,
            { searchBarRef: a } = this;
        if (n || e.ctrlKey || e.altKey || e.metaKey || null == a) return;
        let r = (0, s.BF)(e)?.activeElement;
        if (!(r !== a.current && (0, s.Cw)(r)))
            switch (e.which) {
                case g.Ks6.ESCAPE:
                    e.target !== a.current ? this.reset() : null != a.current && a.current?.blur();
                    break;
                case g.Ks6.ENTER:
                    if (null != t) {
                        e.preventDefault();
                        let n = i.find((e) => e.key === t);
                        if (null == n) return;
                        let a = n.libraryApplication;
                        m.performDefaultLibraryApplicationAction(a, {
                            analyticsParams: {
                                source: g.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: g.liQ.LIBRARY,
                                    section: g.JJy.LIBRARY_APPLICATION_LIST,
                                    object: g.ZSU.BUTTON_CTA,
                                },
                            },
                        });
                    }
                    break;
                case g.Ks6.ARROW_DOWN:
                case g.Ks6.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        this.updateActiveRow(e.which === g.Ks6.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != a.current && e.target !== a.current && a.current?.focus();
            }
    };
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, i.jsx)("div", {
            className: l()({ [E.sw]: !0, [E.in]: t }),
            children: (0, i.jsx)(d.IWV, {
                ref: this.searchBarRef,
                onChange: u.n9,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: p.intl.string(p.t.aSxWSo),
            }),
        });
    }
}
function f() {
    let e = (0, o.bG)([A.A], () => A.A.hasLayers()),
        t = (0, d.red)(d.DXt);
    return (0, i.jsx)(I, {
        activeRowKey: (0, o.bG)([_.A], () => _.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.bG)([h.A], () => h.A.applicationFilterQuery),
        applicationViewItems: (0, o.bG)([h.A], () => h.A.sortedFilteredLibraryApplicationViewItems),
    });
}
