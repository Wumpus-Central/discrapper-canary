(r.d(t, {
    M: () => y,
    Z: () => x
}),
    r(415506),
    r(781311),
    r(388685));
var n,
    s = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(481060),
    c = r(607802),
    u = r(579612),
    h = r(388032),
    d = r(953928);
function p(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                p(e, t, r[t]);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let m = (e) => {
    let { query: t, searchFavorites: r, showDMQueryText: n } = e,
        {
            filterCount: a,
            queryContent: i,
            isQueryEmpty: u
        } = l.useMemo(() => {
            var e, r, n;
            let s = (0, c.kG)(t),
                l = (0, c.$G)(s),
                a = null != (r = l.content) ? r : '';
            return {
                filterCount: null != (n = null == (e = l.channel_id) ? void 0 : e.length) ? n : 0,
                isQueryEmpty: 0 === a.length,
                queryContent: a
            };
        }, [t]);
    return r
        ? (0, s.jsx)('div', {
              className: d.queryText,
              children: h.intl.string(h.t['6RVtLC'])
          })
        : n
          ? a > 0
              ? (0, s.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: d.searchDMQueryText,
                    children: u
                        ? h.intl.format(h.t.iV2ftr, { filterCount: a })
                        : h.intl.format(h.t['5CTmUl'], {
                              filterCount: a,
                              value: i
                          })
                })
              : (0, s.jsx)(o.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-secondary',
                    className: d.searchDMQueryText,
                    children: u ? h.intl.string(h.t.w39VdH) : h.intl.format(h.t['9gKPv7'], { value: i })
                })
          : (0, s.jsx)('div', {
                className: d.queryText,
                children: h.intl.format(h.t.ub226e, { value: t })
            });
};
function _(e) {
    (e.stopPropagation(), e.preventDefault());
}
function y(e, t, r) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': r
    };
}
class S extends (n = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: r, focusedIndex: n, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: u, searchFavorites: p, showDMQueryText: _ } = this.props;
        if (e || u) return null;
        let S = -1 === n;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    o.P3F,
                    g(f({ className: i()(d.queryContainer, { [d.focused]: S }) }, y(r, -1, S)), {
                        onMouseEnter: c,
                        onClick: l,
                        children: [
                            (0, s.jsx)(m, {
                                query: t,
                                searchFavorites: p,
                                showDMQueryText: _
                            }),
                            (0, s.jsx)('div', {
                                className: d.queryShortcut,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(o.M2$, {
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
                        o.P3F,
                        g(f({ className: i()(d.queryContainer, { [d.focused]: S }) }, y(r, -1, S)), {
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
                                    children: (0, s.jsx)(o.M2$, {
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
        let { numResults: t, renderNoResults: r, renderInitialState: n, renderResult: s, renderCustomResults: l } = this.props;
        if (e) return n();
        if (0 === t) return r();
        if (null != s) return Array.from({ length: t }).map((e, t) => s(t));
        if (null != l) return l();
        throw Error('SearchResultsPopout.renderResults: Flow should never allow this...');
    }
    render() {
        let { query: e, focusedIndex: t, navId: r, width: n } = this.props,
            l = '' === e.trim();
        return (0, s.jsxs)('div', {
            className: d.container,
            style: { width: n },
            onMouseDown: _,
            role: 'listbox',
            id: r,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(r, '-').concat(t),
            children: [this.renderQuery(l), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(l)]
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'renderSearchInSelectedChannelAutocomplete', () => {
                let { navId: e, channel: t, showSearchInSelectedChannel: r, focusedIndex: n, onSelectSearchInSelectedChannel: l } = this.props;
                if (!r || null == t) return null;
                let a = (0, c.X3)(t),
                    i = (0, s.jsx)(u.ZP, {
                        channel: t,
                        text: h.intl.formatToPlainString(h.t.LDpotL, { guildName: a }),
                        channelContainerClassName: d.channelContainer,
                        textContainerClassName: d.searchResultNameContainer
                    });
                return (0, s.jsx)(
                    o.P3F,
                    g(f({}, y(e, -1, -1 === n)), {
                        className: d.inChannelOptionContainer,
                        onClick: l,
                        children: (0, s.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'interactive-normal',
                            className: d.inChannelOption,
                            children: h.intl.format(h.t.LDpotL, { guildName: i })
                        })
                    })
                );
            }));
    }
}
p(S, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let x = S;
