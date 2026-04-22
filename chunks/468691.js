"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(621466),
    o = n(311907),
    c = n(892547),
    d = n(192308),
    h = n(73153),
    p = n(194894),
    u = n(186111),
    A = n(742077),
    m = n(268387),
    g = n(715671),
    f = n(652215),
    _ = n(650583),
    x = n(985018),
    y = n(326112);
class N extends s.Component {
    searchBarRef = s.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        h.h.wait(() => p.pU(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        p.pU(null), p.n9("");
    }
    focusInput() {
        let { searchBarRef: e } = this;
        null != e && e.current?.focus();
    }
    updateActiveRow(e) {
        let { applicationViewItems: t, activeRowKey: n } = this.props,
            i = t.findIndex((e) => e.key === n),
            s = 0;
        i >= 0 && (s = (i + e) % t.length) < 0 && (s = t.length - 1);
        let l = t[s];
        p.pU(null != l ? l.key : null, !0);
    }
    handleKeyDown = (e) => {
        let { activeRowKey: t, hasModalOpen: n, applicationViewItems: i } = this.props,
            { searchBarRef: s } = this;
        if (n || e.ctrlKey || e.altKey || e.metaKey || null == s) return;
        let l = (0, a.BF)(e)?.activeElement;
        if (!(l !== s.current && (0, a.Cw)(l)))
            switch (e.key) {
                case _.dh.ESCAPE:
                    e.target !== s.current ? this.reset() : null != s.current && s.current?.blur();
                    break;
                case _.dh.ENTER:
                    if (null != t) {
                        e.preventDefault();
                        let n = i.find((e) => e.key === t);
                        if (null == n) return;
                        let s = n.libraryApplication;
                        g.performDefaultLibraryApplicationAction(s, {
                            analyticsParams: {
                                source: f.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: f.liQ.LIBRARY,
                                    section: f.JJy.LIBRARY_APPLICATION_LIST,
                                    object: f.ZSU.BUTTON_CTA,
                                },
                            },
                        });
                    }
                    break;
                case _.dh.ARROW_DOWN:
                case _.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.key === _.dh.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != s.current && e.target !== s.current && s.current?.focus();
            }
    };
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, i.jsx)("div", {
            className: r()({ [y.sw]: !0, [y.in]: t }),
            children: (0, i.jsx)(c.I, {
                ref: this.searchBarRef,
                onChange: p.n9,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: x.intl.string(x.t.aSxWSo),
            }),
        });
    }
}
function C() {
    let e = (0, o.bG)([u.A], () => u.A.hasLayers()),
        t = (0, d.useModalsStore)(d.hasAnyModalOpenSelector);
    return (0, i.jsx)(N, {
        activeRowKey: (0, o.bG)([m.A], () => m.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.bG)([A.A], () => A.A.applicationFilterQuery),
        applicationViewItems: (0, o.bG)([A.A], () => A.A.sortedFilteredLibraryApplicationViewItems),
    });
}
