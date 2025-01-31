n.d(t, {
    M: () => _,
    Z: () => g
}),
    n(411104);
var i,
    l,
    a,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(481060),
    u = n(388032),
    m = n(708332);
function h(e) {
    e.stopPropagation(), e.preventDefault();
}
function _(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class p extends (i = s.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: i, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: s, hideQuery: o, searchFavorites: h } = this.props;
        if (e || o) return null;
        let p = -1 === i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(d.P3F, {
                    className: c()(m.queryContainer, { [m.focused]: p }),
                    ..._(n, -1, p),
                    onMouseEnter: s,
                    onClick: l,
                    children: [
                        (0, r.jsx)('div', {
                            className: m.queryText,
                            children: h ? u.intl.string(u.t['6RVtLC']) : u.intl.format(u.t.ub226e, { value: t })
                        }),
                        (0, r.jsx)('div', {
                            className: m.queryShortcut,
                            'aria-hidden': !0,
                            children: (0, r.jsx)(d.M2$, {
                                shortcut: 'return',
                                dim: !0,
                                className: m.keyCombo
                            })
                        })
                    ]
                }),
                h &&
                    (0, r.jsxs)(d.P3F, {
                        className: c()(m.queryContainer, { [m.focused]: p }),
                        ..._(n, -1, p),
                        onMouseEnter: s,
                        onClick: a,
                        children: [
                            (0, r.jsx)('div', {
                                className: m.queryText,
                                children: u.intl.string(u.t.FtSUxc)
                            }),
                            (0, r.jsx)('div', {
                                className: m.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(d.M2$, {
                                    shortcut: 'shift+return',
                                    dim: !0,
                                    className: m.keyCombo
                                })
                            })
                        ]
                    })
            ]
        });
    }
    renderResults(e) {
        let { numResults: t, renderNoResults: n, renderInitialState: i, renderResult: l, renderCustomResults: a } = this.props;
        if (e) return i();
        if (0 === t) return n();
        if (null != l) return Array.from({ length: t }).map((e, t) => l(t));
        if (null != a) return a();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: i } = this.props,
            l = '' === e.trim();
        return (0, r.jsxs)('div', {
            className: m.container,
            style: { width: i },
            onMouseDown: h,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(l), this.renderResults(l)]
        });
    }
}
(a = {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
}),
    (l = 'defaultProps') in p
        ? Object.defineProperty(p, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = a);
let g = p;
