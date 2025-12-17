n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(374470),
    s = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(287259),
    p = n(819640),
    f = n(490983),
    g = n(799777),
    h = n(346329),
    m = n(981631),
    b = n(388032),
    _ = n(132841);
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
                [_.libraryFilter]: !0,
                [_.focused]: t,
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
                placeholder: b.intl.string(b.t.aSxWSo),
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
                    { searchBarRef: s } = this;
                if (l || e.ctrlKey || e.altKey || e.metaKey || null == s) return;
                let c = null == (t = (0, o.uB)(e)) ? void 0 : t.activeElement;
                if (!(c !== s.current && (0, o.VG)(c)))
                    switch (e.which) {
                        case m.yXg.ESCAPE:
                            e.target !== s.current
                                ? this.reset()
                                : null != s.current && (null == (n = s.current) || n.blur());
                            break;
                        case m.yXg.ENTER:
                            if (null != i) {
                                e.preventDefault();
                                let t = a.find((e) => e.key === i);
                                if (null == t) return;
                                let n = t.libraryApplication;
                                h.performDefaultLibraryApplicationAction(n, {
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
                            null != s.current && e.target !== s.current && (null == (r = s.current) || r.focus());
                    }
            });
    }
}
function v() {
    let e = (0, s.e7)([p.Z], () => p.Z.hasLayers()),
        t = (0, c.s9z)(c.JQI);
    return (0, r.jsx)(O, {
        activeRowKey: (0, s.e7)([g.Z], () => g.Z.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, s.e7)([f.Z], () => f.Z.applicationFilterQuery),
        applicationViewItems: (0, s.e7)([f.Z], () => f.Z.sortedFilteredLibraryApplicationViewItems),
    });
}
