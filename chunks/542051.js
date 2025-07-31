(n.d(t, {
    M: () => x,
    Z: () => S
}),
    n(415506),
    n(781311),
    n(388685));
var r,
    s = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(481060),
    c = n(607802),
    u = n(579612),
    h = n(388032),
    d = n(953928);
function p(e, t, n) {
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
function f(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
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
let m = (e) => {
    let { query: t, searchFavorites: n, showDMQueryText: r } = e,
        {
            filterCount: a,
            queryContent: o,
            isQueryEmpty: u
        } = l.useMemo(() => {
            var e, n, r;
            let s = (0, c.kG)(t),
                l = (0, c.$G)(s),
                a = null != (n = l.content) ? n : '';
            return {
                filterCount: null != (r = null == (e = l.channel_id) ? void 0 : e.length) ? r : 0,
                isQueryEmpty: 0 === a.length,
                queryContent: a
            };
        }, [t]);
    return n
        ? (0, s.jsx)('div', {
              className: d.queryText,
              children: h.intl.string(h.t['6RVtLC'])
          })
        : r
          ? a > 0
              ? (0, s.jsx)(i.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: d.searchDMQueryText,
                    children: u
                        ? h.intl.format(h.t.iV2ftr, { filterCount: a })
                        : h.intl.format(h.t['5CTmUl'], {
                              filterCount: a,
                              value: o
                          })
                })
              : (0, s.jsx)(i.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: d.searchDMQueryText,
                    children: u ? h.intl.string(h.t.w39VdH) : h.intl.format(h.t['9gKPv7'], { value: o })
                })
          : (0, s.jsx)('div', {
                className: d.queryText,
                children: h.intl.format(h.t.ub226e, { value: t })
            });
};
function y(e) {
    (e.stopPropagation(), e.preventDefault());
}
function x(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class b extends (r = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: u, searchFavorites: p, showDMQueryText: y } = this.props;
        if (e || u) return null;
        let b = -1 === r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    i.P3F,
                    g(f({ className: o()(d.queryContainer, { [d.focused]: b }) }, x(n, -1, b)), {
                        onMouseEnter: c,
                        onClick: l,
                        children: [
                            (0, s.jsx)(m, {
                                query: t,
                                searchFavorites: p,
                                showDMQueryText: y
                            }),
                            (0, s.jsx)('div', {
                                className: d.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(i.M2$, {
                                    shortcut: 'return',
                                    dim: !0,
                                    className: d.keyCombo
                                })
                            })
                        ]
                    })
                ),
                p &&
                    (0, s.jsxs)(
                        i.P3F,
                        g(f({ className: o()(d.queryContainer, { [d.focused]: b }) }, x(n, -1, b)), {
                            onMouseEnter: c,
                            onClick: a,
                            children: [
                                (0, s.jsx)('div', {
                                    className: d.queryText,
                                    children: h.intl.string(h.t.FtSUxc)
                                }),
                                (0, s.jsx)('div', {
                                    className: d.queryShortcut,
                                    'aria-hidden': !0,
                                    children: (0, s.jsx)(i.M2$, {
                                        shortcut: 'shift+return',
                                        dim: !0,
                                        className: d.keyCombo
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
            className: d.container,
            style: { width: r },
            onMouseDown: y,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(l), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(l)]
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'renderSearchInSelectedChannelAutocomplete', () => {
                let { navId: e, channel: t, showSearchInSelectedChannel: n, focusedIndex: r, onSelectSearchInSelectedChannel: l } = this.props;
                if (!n || null == t) return null;
                let a = (0, c.X3)(t),
                    o = (0, s.jsx)(u.ZP, {
                        channel: t,
                        text: h.intl.formatToPlainString(h.t.LDpotL, { guildName: a }),
                        channelContainerClassName: d.channelContainer,
                        textContainerClassName: d.searchResultNameContainer
                    });
                return (0, s.jsx)(
                    i.P3F,
                    g(f({}, x(e, -1, -1 === r)), {
                        className: d.inChannelOptionContainer,
                        onClick: l,
                        children: (0, s.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'interactive-normal',
                            className: d.inChannelOption,
                            children: h.intl.format(h.t.LDpotL, { guildName: o })
                        })
                    })
                );
            }));
    }
}
p(b, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let S = b;
