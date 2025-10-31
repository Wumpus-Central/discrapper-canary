n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(374470),
    o = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(287259),
    p = n(819640),
    f = n(490983),
    m = n(799777),
    h = n(346329),
    g = n(981631),
    _ = n(388032),
    b = n(108201);
function E(e, t, n) {
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
class O extends i.Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        u.Z.wait(() => d.wX(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        d.wX(null), d.JZ("");
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
        d.wX(null != l ? l.key : null, !0);
    }
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, r.jsx)("div", {
            className: a()({
                [b.libraryFilter]: !0,
                [b.focused]: t,
            }),
            children: (0, r.jsx)(c.E1j, {
                ref: this.searchBarRef,
                onChange: d.JZ,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: _.intl.string(_.t.aSxWSo),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "searchBarRef", i.createRef()),
            E(this, "state", { focused: !1 }),
            E(this, "handleKeyDown", (e) => {
                var t, n, r;
                let { activeRowKey: i, hasModalOpen: l, applicationViewItems: a } = this.props,
                    { searchBarRef: o } = this;
                if (l || e.ctrlKey || e.altKey || e.metaKey || null == o) return;
                let c = null == (t = (0, s.uB)(e)) ? void 0 : t.activeElement;
                if (!(c !== o.current && (0, s.VG)(c)))
                    switch (e.which) {
                        case g.yXg.ESCAPE:
                            e.target !== o.current
                                ? this.reset()
                                : null != o.current && (null == (n = o.current) || n.blur());
                            break;
                        case g.yXg.ENTER:
                            if (null != i) {
                                e.preventDefault();
                                let t = a.find((e) => e.key === i);
                                if (null == t) return;
                                let n = t.libraryApplication;
                                h.performDefaultLibraryApplicationAction(n, {
                                    analyticsParams: {
                                        source: g.Sbl.APPLICATION_LIBRARY,
                                        location: {
                                            page: g.ZY5.LIBRARY,
                                            section: g.jXE.LIBRARY_APPLICATION_LIST,
                                            object: g.qAy.BUTTON_CTA,
                                        },
                                    },
                                });
                            }
                            break;
                        case g.yXg.ARROW_DOWN:
                        case g.yXg.ARROW_UP:
                            e.preventDefault(),
                                e.stopPropagation(),
                                this.updateActiveRow(e.which === g.yXg.ARROW_DOWN ? 1 : -1);
                            break;
                        default:
                            null != o.current && e.target !== o.current && (null == (r = o.current) || r.focus());
                    }
            });
    }
}
function I() {
    let e = (0, o.e7)([p.Z], () => p.Z.hasLayers()),
        t = (0, c.s9z)(c.JQI);
    return (0, r.jsx)(O, {
        activeRowKey: (0, o.e7)([m.Z], () => m.Z.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.e7)([f.Z], () => f.Z.applicationFilterQuery),
        applicationViewItems: (0, o.e7)([f.Z], () => f.Z.sortedFilteredLibraryApplicationViewItems),
    });
}
