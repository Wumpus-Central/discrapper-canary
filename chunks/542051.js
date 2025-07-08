(n.d(t, {
    M: () => g,
    Z: () => y
}),
    n(415506),
    n(781311));
var r,
    l = n(255367),
    s = n(73800),
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
class m extends (r = s.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: s, onSelectSearchEverywhere: a, onHighlightQuery: d, hideQuery: f, searchFavorites: m } = this.props;
        if (e || f) return null;
        let y = -1 === r;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(
                    o.P3F,
                    p(h({ className: i()(u.queryContainer, { [u.focused]: y }) }, g(n, -1, y)), {
                        onMouseEnter: d,
                        onClick: s,
                        children: [
                            (0, l.jsx)('div', {
                                className: u.queryText,
                                children: m ? c.intl.string(c.t['6RVtLC']) : c.intl.format(c.t.ub226e, { value: t })
                            }),
                            (0, l.jsx)('div', {
                                className: u.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, l.jsx)(o.M2$, {
                                    shortcut: 'return',
                                    dim: !0,
                                    className: u.keyCombo
                                })
                            })
                        ]
                    })
                ),
                m &&
                    (0, l.jsxs)(
                        o.P3F,
                        p(h({ className: i()(u.queryContainer, { [u.focused]: y }) }, g(n, -1, y)), {
                            onMouseEnter: d,
                            onClick: a,
                            children: [
                                (0, l.jsx)('div', {
                                    className: u.queryText,
                                    children: c.intl.string(c.t.FtSUxc)
                                }),
                                (0, l.jsx)('div', {
                                    className: u.queryShortcut,
                                    'aria-hidden': !0,
                                    children: (0, l.jsx)(o.M2$, {
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
        let { numResults: t, renderNoResults: n, renderInitialState: r, renderResult: l, renderCustomResults: s } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != l) return Array.from({ length: t }).map((e, t) => l(t));
        if (null != s) return s();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: r } = this.props,
            s = '' === e.trim();
        return (0, l.jsxs)('div', {
            className: u.container,
            style: { width: r },
            onMouseDown: f,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(s), this.renderResults(s)]
        });
    }
}
d(m, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let y = m;
