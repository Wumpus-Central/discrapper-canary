(n.d(t, {
    M: () => S,
    Z: () => b
}),
    n(415506),
    n(781311),
    n(388685));
var r,
    s = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    c = n(579612),
    u = n(405656),
    d = n(388032),
    h = n(953928);
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
            queryContent: i,
            isQueryEmpty: c
        } = l.useMemo(() => {
            var e, n, r;
            let s = (0, u.kG)(t),
                l = (0, u.$G)(s),
                a = null != (n = l.content) ? n : '';
            return {
                filterCount: null != (r = null == (e = l.channel_id) ? void 0 : e.length) ? r : 0,
                isQueryEmpty: 0 === a.length,
                queryContent: a
            };
        }, [t]);
    return n
        ? (0, s.jsx)('div', {
              className: h.queryText,
              children: d.intl.string(d.t['6RVtLC'])
          })
        : r
          ? a > 0
              ? (0, s.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: h.searchDMQueryText,
                    children: c
                        ? d.intl.format(d.t.iV2ftr, { filterCount: a })
                        : d.intl.format(d.t['5CTmUl'], {
                              filterCount: a,
                              value: i
                          })
                })
              : (0, s.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: h.searchDMQueryText,
                    children: c ? d.intl.string(d.t.w39VdH) : d.intl.format(d.t['9gKPv7'], { value: i })
                })
          : (0, s.jsx)('div', {
                className: h.queryText,
                children: d.intl.format(d.t.ub226e, { value: t })
            });
};
function _(e) {
    (e.stopPropagation(), e.preventDefault());
}
function S(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class y extends (r = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: u, searchFavorites: p, showDMQueryText: _ } = this.props;
        if (e || u) return null;
        let y = -1 === r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    o.P3F,
                    g(f({ className: i()(h.queryContainer, { [h.focused]: y }) }, S(n, -1, y)), {
                        onMouseEnter: c,
                        onClick: l,
                        children: [
                            (0, s.jsx)(m, {
                                query: t,
                                searchFavorites: p,
                                showDMQueryText: _
                            }),
                            (0, s.jsx)('div', {
                                className: h.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(o.M2$, {
                                    shortcut: 'return',
                                    dim: !0,
                                    className: h.keyCombo
                                })
                            })
                        ]
                    })
                ),
                p &&
                    (0, s.jsxs)(
                        o.P3F,
                        g(f({ className: i()(h.queryContainer, { [h.focused]: y }) }, S(n, -1, y)), {
                            onMouseEnter: c,
                            onClick: a,
                            children: [
                                (0, s.jsx)('div', {
                                    className: h.queryText,
                                    children: d.intl.string(d.t.FtSUxc)
                                }),
                                (0, s.jsx)('div', {
                                    className: h.queryShortcut,
                                    'aria-hidden': !0,
                                    children: (0, s.jsx)(o.M2$, {
                                        shortcut: 'shift+return',
                                        dim: !0,
                                        className: h.keyCombo
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
            className: h.container,
            style: { width: r },
            onMouseDown: _,
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
                let a = (0, u.X3)(t),
                    i = (0, s.jsx)(c.ZP, {
                        channel: t,
                        text: d.intl.formatToPlainString(d.t.LDpotL, { guildName: a }),
                        channelContainerClassName: h.channelContainer,
                        textContainerClassName: h.searchResultNameContainer
                    });
                return (0, s.jsx)(
                    o.P3F,
                    g(f({}, S(e, -1, -1 === r)), {
                        className: h.inChannelOptionContainer,
                        onClick: l,
                        children: (0, s.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'interactive-normal',
                            className: h.inChannelOption,
                            children: d.intl.format(d.t.LDpotL, { guildName: i })
                        })
                    })
                );
            }));
    }
}
p(y, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let b = y;
