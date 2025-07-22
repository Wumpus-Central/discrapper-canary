(n.d(t, {
    M: () => _,
    Z: () => y
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
function m(e) {
    (e.stopPropagation(), e.preventDefault());
}
function _(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class S extends (r = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: u, searchFavorites: p } = this.props;
        if (e || u) return null;
        let m = -1 === r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    o.P3F,
                    g(f({ className: i()(h.queryContainer, { [h.focused]: m }) }, _(n, -1, m)), {
                        onMouseEnter: c,
                        onClick: l,
                        children: [
                            (0, s.jsx)('div', {
                                className: h.queryText,
                                children: p ? d.intl.string(d.t['6RVtLC']) : d.intl.format(d.t.ub226e, { value: t })
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
                        g(f({ className: i()(h.queryContainer, { [h.focused]: m }) }, _(n, -1, m)), {
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
            onMouseDown: m,
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
                    g(f({}, _(e, -1, -1 === r)), {
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
p(S, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let y = S;
