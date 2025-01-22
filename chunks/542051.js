n.d(t, {
    M: function () {
        return p;
    }
}),
    n(411104);
var i,
    r,
    l,
    a,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    u = n.n(c),
    d = n(481060),
    m = n(388032),
    h = n(708332);
function f(e) {
    e.stopPropagation(), e.preventDefault();
}
function p(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class _ extends (i = s.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: i, onSelectQuery: r, onSelectSearchEverywhere: l, onHighlightQuery: a, hideQuery: s, searchFavorites: c } = this.props;
        if (e || s) return null;
        let f = -1 === i;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(d.Clickable, {
                    className: u()(h.queryContainer, { [h.focused]: f }),
                    ...p(n, -1, f),
                    onMouseEnter: a,
                    onClick: r,
                    children: [
                        (0, o.jsx)('div', {
                            className: h.queryText,
                            children: c ? m.intl.string(m.t['6RVtLC']) : m.intl.format(m.t.ub226e, { value: t })
                        }),
                        (0, o.jsx)('div', {
                            className: h.queryShortcut,
                            'aria-hidden': !0,
                            children: (0, o.jsx)(d.KeyCombo, {
                                shortcut: 'return',
                                dim: !0,
                                className: h.keyCombo
                            })
                        })
                    ]
                }),
                c &&
                    (0, o.jsxs)(d.Clickable, {
                        className: u()(h.queryContainer, { [h.focused]: f }),
                        ...p(n, -1, f),
                        onMouseEnter: a,
                        onClick: l,
                        children: [
                            (0, o.jsx)('div', {
                                className: h.queryText,
                                children: m.intl.string(m.t.FtSUxc)
                            }),
                            (0, o.jsx)('div', {
                                className: h.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, o.jsx)(d.KeyCombo, {
                                    shortcut: 'shift+return',
                                    dim: !0,
                                    className: h.keyCombo
                                })
                            })
                        ]
                    })
            ]
        });
    }
    renderResults(e) {
        let { numResults: t, renderNoResults: n, renderInitialState: i, renderResult: r, renderCustomResults: l } = this.props;
        if (e) return i();
        if (0 === t) return n();
        if (null != r) return Array.from({ length: t }).map((e, t) => r(t));
        if (null != l) return l();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: i } = this.props,
            r = '' === e.trim();
        return (0, o.jsxs)('div', {
            className: h.container,
            style: { width: i },
            onMouseDown: f,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(r), this.renderResults(r)]
        });
    }
}
(a = {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
}),
    (l = 'defaultProps') in (r = _)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = _);
