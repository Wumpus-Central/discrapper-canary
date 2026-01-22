n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(621466),
    o = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(194894),
    p = n(186111),
    f = n(742077),
    h = n(268387),
    A = n(715671),
    g = n(652215),
    m = n(985018),
    b = n(75755);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class E extends i.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        u.h.wait(() => d.pU(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        d.pU(null), d.n9("");
    }
    focusInput() {
        var e;
        let { searchBarRef: t } = this;
        null != t && (null == (e = t.current) || e.focus());
    }
    updateActiveRow(e) {
        let { applicationViewItems: t, activeRowKey: n } = this.props,
            r = t.findIndex((e) => e.key === n),
            i = 0;
        r >= 0 && (i = (r + e) % t.length) < 0 && (i = t.length - 1);
        let l = t[i];
        d.pU(null != l ? l.key : null, !0);
    }
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, r.jsx)("div", {
            className: a()({
                [b.sw]: !0,
                [b.in]: t,
            }),
            children: (0, r.jsx)(c.IWV, {
                ref: this.searchBarRef,
                onChange: d.n9,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: m.intl.string(m.t.aSxWSo),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "searchBarRef", i.createRef()),
            _(this, "state", { focused: !1 }),
            _(this, "handleKeyDown", (e) => {
                var t, n, r;
                let { activeRowKey: i, hasModalOpen: l, applicationViewItems: a } = this.props,
                    { searchBarRef: o } = this;
                if (l || e.ctrlKey || e.altKey || e.metaKey || null == o) return;
                let c = null == (t = (0, s.BF)(e)) ? void 0 : t.activeElement;
                if (!(c !== o.current && (0, s.Cw)(c)))
                    switch (e.which) {
                        case g.Ks6.ESCAPE:
                            e.target !== o.current
                                ? this.reset()
                                : null != o.current && (null == (n = o.current) || n.blur());
                            break;
                        case g.Ks6.ENTER:
                            if (null != i) {
                                e.preventDefault();
                                let t = a.find((e) => e.key === i);
                                if (null == t) return;
                                let n = t.libraryApplication;
                                A.performDefaultLibraryApplicationAction(n, {
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
                            null != o.current && e.target !== o.current && (null == (r = o.current) || r.focus());
                    }
            });
    }
}
function O() {
    let e = (0, o.bG)([p.A], () => p.A.hasLayers()),
        t = (0, c.red)(c.DXt);
    return (0, r.jsx)(E, {
        activeRowKey: (0, o.bG)([h.A], () => h.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.bG)([f.A], () => f.A.applicationFilterQuery),
        applicationViewItems: (0, o.bG)([f.A], () => f.A.sortedFilteredLibraryApplicationViewItems),
    });
}
