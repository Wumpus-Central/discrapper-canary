n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(287259),
    u = n(819640),
    h = n(490983),
    m = n(799777),
    p = n(5967),
    g = n(346329),
    _ = n(981631),
    f = n(388032),
    E = n(425233);
function I(e, t, n) {
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
class C extends l.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        c.Z.wait(() => d.wX(null)), document.removeEventListener('keydown', this.handleKeyDown);
    }
    reset() {
        d.wX(null), d.JZ('');
    }
    focusInput() {
        let { searchBarRef: e } = this;
        null != e && e.focus();
    }
    updateActiveRow(e) {
        let { applicationViewItems: t, activeRowKey: n } = this.props,
            i = t.findIndex((e) => e.key === n),
            l = 0;
        i >= 0 && (l = (i + e) % t.length) < 0 && (l = t.length - 1);
        let r = t[l];
        d.wX(null != r ? r.key : null, !0);
    }
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, i.jsx)('div', {
            className: a()({
                [E.libraryFilter]: !0,
                [E.focused]: t
            }),
            children: (0, i.jsx)(o.E1j, {
                className: E.searchBar,
                ref: this.setRef,
                onChange: d.JZ,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                name: 'filter',
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                maxLength: 100,
                query: e,
                placeholder: f.intl.string(f.t.aSxWSk)
            })
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'searchBarRef', null),
            I(this, 'state', { focused: !1 }),
            I(this, 'setRef', (e) => {
                this.searchBarRef = e;
            }),
            I(this, 'handleKeyDown', (e) => {
                var t;
                let { activeRowKey: n, hasModalOpen: i, applicationViewItems: l } = this.props,
                    { searchBarRef: r } = this;
                if (i || e.ctrlKey || e.altKey || e.metaKey || null == r) return;
                let a = null === (t = (0, p.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                if (!(a !== r.inputRef.current && (0, p.VG)(a)))
                    switch (e.which) {
                        case _.yXg.ESCAPE:
                            e.target !== r.inputRef.current ? this.reset() : null != r.inputRef.current && r.blur();
                            break;
                        case _.yXg.ENTER:
                            if (null != n) {
                                e.preventDefault();
                                let t = l.find((e) => e.key === n);
                                if (null == t) return;
                                let i = t.libraryApplication;
                                g.performDefaultLibraryApplicationAction(i, {
                                    analyticsParams: {
                                        source: _.Sbl.APPLICATION_LIBRARY,
                                        location: {
                                            page: _.ZY5.LIBRARY,
                                            section: _.jXE.LIBRARY_APPLICATION_LIST,
                                            object: _.qAy.BUTTON_CTA
                                        }
                                    }
                                });
                            }
                            break;
                        case _.yXg.ARROW_DOWN:
                        case _.yXg.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === _.yXg.ARROW_DOWN ? 1 : -1);
                            break;
                        default:
                            null != r.inputRef.current && e.target !== r.inputRef.current && r.focus();
                    }
            });
    }
}
function v() {
    let e = (0, s.e7)([u.Z], () => u.Z.hasLayers()),
        t = (0, o.s9z)(o.JQI);
    return (0, i.jsx)(C, {
        activeRowKey: (0, s.e7)([m.Z], () => m.Z.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, s.e7)([h.Z], () => h.Z.applicationFilterQuery),
        applicationViewItems: (0, s.e7)([h.Z], () => h.Z.sortedFilteredLibraryApplicationViewItems)
    });
}
