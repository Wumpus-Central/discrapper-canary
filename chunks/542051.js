(n.d(t, {
    M: () => g,
    Z: () => S
}),
    n(415506),
    n(781311));
var r,
    s = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    c = n(388032),
    u = n(953928);
function d(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    (e.stopPropagation(), e.preventDefault());
}
function g(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class m extends (r = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: d, hideQuery: f, searchFavorites: m } = this.props;
        if (e || f) return null;
        let S = -1 === r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    o.P3F,
                    p(h({ className: i()(u.queryContainer, { [u.focused]: S }) }, g(n, -1, S)), {
                        onMouseEnter: d,
                        onClick: l,
                        children: [
                            (0, s.jsx)('div', {
                                className: u.queryText,
                                children: m ? c.intl.string(c.t['6RVtLC']) : c.intl.format(c.t.ub226e, { value: t })
                            }),
                            (0, s.jsx)('div', {
                                className: u.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(o.M2$, {
                                    shortcut: 'return',
                                    dim: !0,
                                    className: u.keyCombo
                                })
                            })
                        ]
                    })
                ),
                m &&
                    (0, s.jsxs)(
                        o.P3F,
                        p(h({ className: i()(u.queryContainer, { [u.focused]: S }) }, g(n, -1, S)), {
                            onMouseEnter: d,
                            onClick: a,
                            children: [
                                (0, s.jsx)('div', {
                                    className: u.queryText,
                                    children: c.intl.string(c.t.FtSUxc)
                                }),
                                (0, s.jsx)('div', {
                                    className: u.queryShortcut,
                                    'aria-hidden': !0,
                                    children: (0, s.jsx)(o.M2$, {
                                        shortcut: 'shift+return',
                                        dim: !0,
                                        className: u.keyCombo
                                    })
                                })
                            ]
                        })
                    )
            ]
        });
    }
    renderResults(e) {
        let { numResults: t, renderNoResults: n, renderInitialState: r, renderResult: s, renderCustomResults: l } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != s) return Array.from({ length: t }).map((e, t) => s(t));
        if (null != l) return l();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: r } = this.props,
            l = '' === e.trim();
        return (0, s.jsxs)('div', {
            className: u.container,
            style: { width: r },
            onMouseDown: f,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(l), this.renderResults(l)]
        });
    }
}
d(m, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let S = m;
