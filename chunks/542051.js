n.d(t, {
    M: () => h,
    Z: () => _
}),
    n(411104),
    n(566702);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
    e.stopPropagation(), e.preventDefault();
}
function h(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class g extends (r = a.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: a, onSelectSearchEverywhere: l, onHighlightQuery: d, hideQuery: f, searchFavorites: g } = this.props;
        if (e || f) return null;
        let _ = -1 === r;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(
                    s.P3F,
                    m(p({ className: o()(u.queryContainer, { [u.focused]: _ }) }, h(n, -1, _)), {
                        onMouseEnter: d,
                        onClick: a,
                        children: [
                            (0, i.jsx)('div', {
                                className: u.queryText,
                                children: g ? c.NW.string(c.t['6RVtLC']) : c.NW.format(c.t.ub226e, { value: t })
                            }),
                            (0, i.jsx)('div', {
                                className: u.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, i.jsx)(s.M2$, {
                                    shortcut: 'return',
                                    dim: !0,
                                    className: u.keyCombo
                                })
                            })
                        ]
                    })
                ),
                g &&
                    (0, i.jsxs)(
                        s.P3F,
                        m(p({ className: o()(u.queryContainer, { [u.focused]: _ }) }, h(n, -1, _)), {
                            onMouseEnter: d,
                            onClick: l,
                            children: [
                                (0, i.jsx)('div', {
                                    className: u.queryText,
                                    children: c.NW.string(c.t.FtSUxc)
                                }),
                                (0, i.jsx)('div', {
                                    className: u.queryShortcut,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(s.M2$, {
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
        let { numResults: t, renderNoResults: n, renderInitialState: r, renderResult: i, renderCustomResults: a } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != i) return Array.from({ length: t }).map((e, t) => i(t));
        if (null != a) return a();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, width: r } = this.props,
            a = '' === e.trim();
        return (0, i.jsxs)('div', {
            className: u.container,
            style: { width: r },
            onMouseDown: f,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(a), this.renderResults(a)]
        });
    }
}
d(g, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let _ = g;
