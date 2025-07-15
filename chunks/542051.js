(n.d(t, {
    M: () => m,
    Z: () => y
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
    c = n(405656),
    u = n(388032),
    d = n(953928);
function h(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
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
function g(e) {
    (e.stopPropagation(), e.preventDefault());
}
function m(e, t, n) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': n
    };
}
class b extends (r = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: n, focusedIndex: r, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: h, searchFavorites: g } = this.props;
        if (e || h) return null;
        let b = -1 === r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    i.P3F,
                    f(p({ className: o()(d.queryContainer, { [d.focused]: b }) }, m(n, -1, b)), {
                        onMouseEnter: c,
                        onClick: l,
                        children: [
                            (0, s.jsx)('div', {
                                className: d.queryText,
                                children: g ? u.intl.string(u.t['6RVtLC']) : u.intl.format(u.t.ub226e, { value: t })
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
                g &&
                    (0, s.jsxs)(
                        i.P3F,
                        f(p({ className: o()(d.queryContainer, { [d.focused]: b }) }, m(n, -1, b)), {
                            onMouseEnter: c,
                            onClick: a,
                            children: [
                                (0, s.jsx)('div', {
                                    className: d.queryText,
                                    children: u.intl.string(u.t.FtSUxc)
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
            onMouseDown: g,
            role: 'listbox',
            id: n,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(n, '-').concat(t),
            children: [this.renderQuery(l), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(l)]
        });
    }
    constructor(...e) {
        (super(...e),
            h(this, 'renderSearchInSelectedChannelAutocomplete', () => {
                let { navId: e, channel: t, showSearchInSelectedChannel: n, focusedIndex: r, onSelectSearchInSelectedChannel: l, renderChannel: a } = this.props;
                if (!n || null == t) return null;
                let o = (0, c.X3)(t),
                    h = a(
                        null,
                        '',
                        {
                            channel: t,
                            text: u.intl.formatToPlainString(u.t.LDpotL, { guildName: o })
                        },
                        d.channelName
                    );
                return (0, s.jsx)(
                    i.P3F,
                    f(p({}, m(e, -1, -1 === r)), {
                        className: d.inChannelOptionContainer,
                        onClick: l,
                        children: (0, s.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'interactive-normal',
                            className: d.inChannelOption,
                            children: u.intl.format(u.t.LDpotL, { guildName: h })
                        })
                    })
                );
            }));
    }
}
h(b, 'defaultProps', {
    renderInitialState: () => null,
    hideQuery: !1,
    width: 320
});
let y = b;
