n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(570140),
    u = n(287259),
    d = n(819640),
    p = n(490983),
    f = n(799777),
    h = n(5967),
    g = n(346329),
    m = n(981631),
    b = n(388032),
    _ = n(108201);
function O(e, t, n) {
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
        c.Z.wait(() => u.wX(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        u.wX(null), u.JZ("");
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
        u.wX(null != l ? l.key : null, !0);
    }
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, r.jsx)("div", {
            className: a()({
                [_.libraryFilter]: !0,
                [_.focused]: t,
            }),
            children: (0, r.jsx)(s.E1j, {
                ref: this.searchBarRef,
                onChange: u.JZ,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: b.intl.string(b.t.aSxWSk),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "searchBarRef", i.createRef()),
            O(this, "state", { focused: !1 }),
            O(this, "handleKeyDown", (e) => {
                var t, n, r;
                let { activeRowKey: i, hasModalOpen: l, applicationViewItems: a } = this.props,
                    { searchBarRef: o } = this;
                if (l || e.ctrlKey || e.altKey || e.metaKey || null == o) return;
                let s = null == (t = (0, h.uB)(e)) ? void 0 : t.activeElement;
                if (!(s !== o.current && (0, h.VG)(s)))
                    switch (e.which) {
                        case m.yXg.ESCAPE:
                            e.target !== o.current
                                ? this.reset()
                                : null != o.current && (null == (n = o.current) || n.blur());
                            break;
                        case m.yXg.ENTER:
                            if (null != i) {
                                e.preventDefault();
                                let t = a.find((e) => e.key === i);
                                if (null == t) return;
                                let n = t.libraryApplication;
                                g.performDefaultLibraryApplicationAction(n, {
                                    analyticsParams: {
                                        source: m.Sbl.APPLICATION_LIBRARY,
                                        location: {
                                            page: m.ZY5.LIBRARY,
                                            section: m.jXE.LIBRARY_APPLICATION_LIST,
                                            object: m.qAy.BUTTON_CTA,
                                        },
                                    },
                                });
                            }
                            break;
                        case m.yXg.ARROW_DOWN:
                        case m.yXg.ARROW_UP:
                            e.preventDefault(),
                                e.stopPropagation(),
                                this.updateActiveRow(e.which === m.yXg.ARROW_DOWN ? 1 : -1);
                            break;
                        default:
                            null != o.current && e.target !== o.current && (null == (r = o.current) || r.focus());
                    }
            });
    }
}
function y() {
    let e = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
        t = (0, s.s9z)(s.JQI);
    return (0, r.jsx)(E, {
        activeRowKey: (0, o.e7)([f.Z], () => f.Z.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.e7)([p.Z], () => p.Z.applicationFilterQuery),
        applicationViewItems: (0, o.e7)([p.Z], () => p.Z.sortedFilteredLibraryApplicationViewItems),
    });
}
