(l.d(t, {
    BK: () => b,
    Fj: () => E,
    ZP: () => y
}),
    l(539854),
    l(388685));
var n,
    r,
    a = l(255367),
    i = l(73800),
    s = l(120356),
    o = l.n(s),
    u = l(481060),
    c = l(565138),
    p = l(981631),
    h = l(388032),
    d = l(708554);
function g(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
        e
    );
}
let f = Object.freeze({
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
});
var E = (((r = {}).MEMBER = 'MEMBER'), (r.ROLE = 'ROLE'), (r.CHANNEL = 'CHANNEL'), (r.GUILD = 'GUILD'), (r.USER = 'USER'), r);
let b = (e) => {
    let { hasContent: t, onClear: l, className: n, themeOverride: r, size: i = f.SMALL } = e;
    return (0, a.jsx)(u.f6W, {
        theme: r,
        children: (e) =>
            (0, a.jsx)(u.P3F, {
                className: o()(n, d.iconLayout, i, e, { [d.clear]: t }),
                onClick: (e) => {
                    (e.stopPropagation(), null != l && l(e));
                },
                onMouseDown: (e) => {
                    (e.preventDefault(), e.stopPropagation());
                },
                tabIndex: t ? 0 : -1,
                'aria-hidden': !t,
                'aria-label': h.intl.string(h.t['78fJND']),
                focusProps: { offset: 4 },
                children: (0, a.jsxs)('div', {
                    className: d.iconContainer,
                    children: [
                        (0, a.jsx)(u._Ve, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()({
                                [d.icon]: !0,
                                [d.visible]: !t
                            })
                        }),
                        (0, a.jsx)(u.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: o()({
                                [d.icon]: !0,
                                [d.visible]: t
                            })
                        })
                    ]
                })
            })
    });
};
class v extends (n = i.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: l } = this.props;
        (t && !e.isReady && l && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange());
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            l = t - this.previousHeight;
        if (0 !== l) {
            var n, r;
            ((this.previousHeight = t), null == (n = (r = this.props).onHeightChange) || n.call(r, l));
        }
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: l, sections: n, query: r, tags: a, onSelectionChange: i, onSelect: s, onRemoveTag: o, preventEscapePropagation: u } = this.props;
        if (0 !== n.length) {
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    (null == r || 0 === r.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(a.length - 1));
                    break;
                case p.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (l = 0)) : ((t += 1) >= n.length && (t = n.length - 1), l >= n[t] && (l = n[t] - 1)));
                    break;
                case p.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (l = 0)) : l >= n[t] && (l = n[t] - 1));
                    break;
                case p.yXg.ARROW_LEFT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? (l = n[t] - 1) : t < 0 && ((t = 0), (l = 0))));
                    break;
                case p.yXg.ARROW_RIGHT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l += 1) >= n[t] && ((l = 0), (t += 1) >= n.length && ((t = n.length - 1), (l = n[t] - 1))));
                    break;
                case p.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === l && (l = 0), t >= n.length || l >= n[t])) return;
                    null != s && s(t, l, e);
                    return;
                case p.yXg.ESCAPE:
                    (e.preventDefault(), u && e.stopPropagation(), null != s && s(null, null, e));
                    return;
                default:
                    return;
            }
            null != i && i(t, l);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: l, selectedRow: n, onSelect: r, onSelectionChange: a, query: i, tags: s, preventEscapePropagation: o } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    if ((null == i || 0 === i.length) && null != s && s.length > 0) {
                        var c, h;
                        (e.preventDefault(), e.stopPropagation(), null == (c = (h = this.props).onRemoveTag) || c.call(h, s.length - 1));
                    }
                    break;
                case p.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), t.length > l && ++n >= t[l] && (++l >= t.length && (l = 0), (n = 0)), null == a || a(l, n));
                    break;
                case p.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), --n < 0 && (--l < 0 && (l = t.length - 1), (n = t[l] - 1)), null == a || a(l, n));
                    break;
                case p.yXg.ENTER:
                    (e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > n && (null == r || r(l, n, e)));
                    break;
                case p.yXg.ESCAPE:
                    (e.preventDefault(), o && e.stopPropagation(), null == r || r(null, null, e), u.blur());
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: l = h.intl.string(h.t.LzcpeX), themeOverride: n, disabled: r, onClear: i, size: s, maxHeight: p, tags: f, onActivate: E, className: v, inputProps: y, focusAfterReady: m } = this.props,
            C = null != t && t.length > 0,
            R = !1,
            _ = [];
        return (
            null != f &&
                f.length > 0 &&
                ('string' == typeof f[0]
                    ? f.forEach((e, t) =>
                          _.push(
                              (0, a.jsxs)(
                                  u.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: d.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, a.jsx)(u.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.close,
                                              'aria-label': h.intl.string(h.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((R = !0),
                      f.forEach((e, t) =>
                          _.push(
                              (0, a.jsxs)(
                                  u.eee,
                                  {
                                      className: o()(d.tag, d.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, a.jsx)(u.qEK, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: u.EFr.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, a.jsx)('span', {
                                                  className: d.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, a.jsx)(c.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: c.Z.Sizes.SMOL
                                              }),
                                          (0, a.jsx)('span', {
                                              className: d.tagLabel,
                                              children: e.label
                                          }),
                                          (0, a.jsx)(u.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.close,
                                              'aria-label': h.intl.string(h.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, a.jsx)(u.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, a.jsx)(u.f6W, {
                    theme: n,
                    children: (c) =>
                        (0, a.jsx)('div', {
                            ref: this.containerRef,
                            className: o()(v, d.container, s, c, { [d.disabled]: r }),
                            children: (0, a.jsxs)(u.zJl, {
                                className: d.inner,
                                style: { maxHeight: p },
                                children: [
                                    _,
                                    (0, a.jsx)(
                                        'input',
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var l = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(l);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        g(e, t, l[t]);
                                                    }));
                                            }
                                            return e;
                                        })(
                                            {
                                                className: o()(d.input, { [d.richTagInput]: R }),
                                                type: 'text',
                                                ref: this.ref,
                                                spellCheck: 'false',
                                                placeholder: l,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: r,
                                                'aria-disabled': r,
                                                autoFocus: !m && e,
                                                onMouseDown: E
                                            },
                                            this.defaultInputProps,
                                            y
                                        )
                                    ),
                                    null != i
                                        ? (0, a.jsx)(b, {
                                              size: s,
                                              themeOverride: n,
                                              hasContent: C,
                                              onClear: this.handleClear
                                          })
                                        : null
                                ]
                            })
                        })
                })
            })
        );
    }
    constructor(...e) {
        (super(...e),
            g(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            g(this, 'ref', i.createRef()),
            g(this, 'containerRef', i.createRef()),
            g(this, 'previousHeight', 0),
            g(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: l, onQueryChange: n, useKeyboardNavigation: r } = this.props;
                null != l && l(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== p.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === p.yXg.ESCAPE && null != a.value && '' !== a.value && a.value.length > 0) {
                    ((a.value = ''), null != n && n(''));
                    return;
                }
                r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            g(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            g(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            g(this, 'handleClear', () => {
                let { onClear: e } = this.props,
                    { current: t } = this.ref;
                (null != e && e(), null != t && t.focus());
            }),
            g(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            g(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            }));
    }
}
(g(v, 'Sizes', f),
    g(v, 'defaultProps', {
        size: f.SMALL,
        query: '',
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    }));
let y = v;
