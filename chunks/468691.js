n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    p = n(650583),
    E = n(985018),
    I = n(326112);
class f extends l.Component {
    searchBarRef = l.createRef();
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
            l = 0;
        i >= 0 && (l = (i + e) % t.length) < 0 && (l = t.length - 1);
        let a = t[l];
        u.pU(null != a ? a.key : null, !0);
    }
    handleKeyDown = (e) => {
        let { activeRowKey: t, hasModalOpen: n, applicationViewItems: i } = this.props,
            { searchBarRef: l } = this;
        if (n || e.ctrlKey || e.altKey || e.metaKey || null == l) return;
        let a = (0, s.BF)(e)?.activeElement;
        if (!(a !== l.current && (0, s.Cw)(a)))
            switch (e.key) {
                case p.dh.ESCAPE:
                    e.target !== l.current ? this.reset() : null != l.current && l.current?.blur();
                    break;
                case p.dh.ENTER:
                    if (null != t) {
                        e.preventDefault();
                        let n = i.find((e) => e.key === t);
                        if (null == n) return;
                        let l = n.libraryApplication;
                        m.performDefaultLibraryApplicationAction(l, {
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
                case p.dh.ARROW_DOWN:
                case p.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.key === p.dh.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != l.current && e.target !== l.current && l.current?.focus();
            }
    };
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, i.jsx)("div", {
            className: r()({ [I.sw]: !0, [I.in]: t }),
            children: (0, i.jsx)(d.IWV, {
                ref: this.searchBarRef,
                onChange: u.n9,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: E.intl.string(E.t.aSxWSo),
            }),
        });
    }
}
function C() {
    let e = (0, o.bG)([A.A], () => A.A.hasLayers()),
        t = (0, d.red)(d.DXt);
    return (0, i.jsx)(f, {
        activeRowKey: (0, o.bG)([_.A], () => _.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.bG)([h.A], () => h.A.applicationFilterQuery),
        applicationViewItems: (0, o.bG)([h.A], () => h.A.sortedFilteredLibraryApplicationViewItems),
    });
}
