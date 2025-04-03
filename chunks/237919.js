n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(570140),
    u = n(287259),
    d = n(819640),
    p = n(490983),
    h = n(799777),
    f = n(5967),
    g = n(346329),
    m = n(981631),
    b = n(388032),
    _ = n(285915);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class O extends i.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        c.Z.wait(() => u.wX(null)), document.removeEventListener('keydown', this.handleKeyDown);
    }
    reset() {
        u.wX(null), u.JZ('');
    }
    focusInput() {
        let { searchBarRef: e } = this;
        null != e && e.focus();
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
        return (0, r.jsx)('div', {
            className: a()({
                [_.libraryFilter]: !0,
                [_.focused]: t
            }),
            children: (0, r.jsx)(s.E1j, {
                className: _.searchBar,
                ref: this.setRef,
                onChange: u.JZ,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                name: 'filter',
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                maxLength: 100,
                query: e,
                placeholder: b.NW.string(b.t.aSxWSk)
            })
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'searchBarRef', null),
            E(this, 'state', { focused: !1 }),
            E(this, 'setRef', (e) => {
                this.searchBarRef = e;
            }),
            E(this, 'handleKeyDown', (e) => {
                var t;
                let { activeRowKey: n, hasModalOpen: r, applicationViewItems: i } = this.props,
                    { searchBarRef: l } = this;
                if (r || e.ctrlKey || e.altKey || e.metaKey || null == l) return;
                let a = null == (t = (0, f.uB)(e)) ? void 0 : t.activeElement;
                if (!(a !== l.inputRef.current && (0, f.VG)(a)))
                    switch (e.which) {
                        case m.yXg.ESCAPE:
                            e.target !== l.inputRef.current ? this.reset() : null != l.inputRef.current && l.blur();
                            break;
                        case m.yXg.ENTER:
                            if (null != n) {
                                e.preventDefault();
                                let t = i.find((e) => e.key === n);
                                if (null == t) return;
                                let r = t.libraryApplication;
                                g.performDefaultLibraryApplicationAction(r, {
                                    analyticsParams: {
                                        source: m.Sbl.APPLICATION_LIBRARY,
                                        location: {
                                            page: m.ZY5.LIBRARY,
                                            section: m.jXE.LIBRARY_APPLICATION_LIST,
                                            object: m.qAy.BUTTON_CTA
                                        }
                                    }
                                });
                            }
                            break;
                        case m.yXg.ARROW_DOWN:
                        case m.yXg.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === m.yXg.ARROW_DOWN ? 1 : -1);
                            break;
                        default:
                            null != l.inputRef.current && e.target !== l.inputRef.current && l.focus();
                    }
            });
    }
}
function N() {
    let e = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
        t = (0, s.s9z)(s.JQI);
    return (0, r.jsx)(O, {
        activeRowKey: (0, o.e7)([h.Z], () => h.Z.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, o.e7)([p.Z], () => p.Z.applicationFilterQuery),
        applicationViewItems: (0, o.e7)([p.Z], () => p.Z.sortedFilteredLibraryApplicationViewItems)
    });
}
