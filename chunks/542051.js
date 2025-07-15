(r.d(t, {
    M: () => m,
    Z: () => y
}),
    r(415506),
    r(781311),
    r(388685));
var n,
    s = r(255367),
    l = r(73800),
    a = r(120356),
    o = r.n(a),
    i = r(481060),
    c = r(405656),
    u = r(388032),
    d = r(953928);
function h(e, t, r) {
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
function p(e) {
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
                h(e, t, r[t]);
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
function g(e) {
    (e.stopPropagation(), e.preventDefault());
}
function m(e, t, r) {
    return {
        id: ''.concat(e, '-').concat(t),
        role: 'option',
        tabIndex: -1,
        'aria-selected': r
    };
}
class b extends (n = l.PureComponent) {
    renderQuery(e) {
        let { query: t, navId: r, focusedIndex: n, onSelectQuery: l, onSelectSearchEverywhere: a, onHighlightQuery: c, hideQuery: h, searchFavorites: g } = this.props;
        if (e || h) return null;
        let b = -1 === n;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(
                    i.P3F,
                    f(p({ className: o()(d.queryContainer, { [d.focused]: b }) }, m(r, -1, b)), {
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
                        f(p({ className: o()(d.queryContainer, { [d.focused]: b }) }, m(r, -1, b)), {
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
            onMouseDown: g,
            role: 'listbox',
            id: r,
            tabIndex: -1,
            'aria-activedescendant': ''.concat(r, '-').concat(t),
            children: [this.renderQuery(l), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(l)]
        });
    }
    constructor(...e) {
        (super(...e),
            h(this, 'renderSearchInSelectedChannelAutocomplete', () => {
                let { navId: e, channel: t, showSearchInSelectedChannel: r, focusedIndex: n, onSelectSearchInSelectedChannel: l, renderChannel: a } = this.props;
                if (!r || null == t) return null;
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
                    f(p({}, m(e, -1, -1 === n)), {
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
