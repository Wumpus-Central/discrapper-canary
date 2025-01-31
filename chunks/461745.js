l.d(t, {
    BK: () => v,
    Fj: () => E,
    ZP: () => C
}),
    l(653041),
    l(47120);
var n,
    a,
    r = l(200651),
    s = l(192379),
    o = l(120356),
    i = l.n(o),
    u = l(481060),
    c = l(565138),
    p = l(981631),
    h = l(388032),
    d = l(272786);
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
var E = (((a = {}).MEMBER = 'MEMBER'), (a.ROLE = 'ROLE'), (a.CHANNEL = 'CHANNEL'), (a.GUILD = 'GUILD'), (a.USER = 'USER'), a);
let v = (e) => {
    let { hasContent: t, onClear: l, className: n, themeOverride: a, size: s = f.SMALL } = e;
    return (0, r.jsx)(u.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsx)(u.P3F, {
                className: i()(n, d.iconLayout, s, e, { [d.clear]: t }),
                onClick: (e) => {
                    e.stopPropagation(), null != l && l(e);
                },
                onMouseDown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                tabIndex: t ? 0 : -1,
                'aria-hidden': !t,
                'aria-label': h.intl.string(h.t['78fJND']),
                focusProps: { offset: 4 },
                children: (0, r.jsxs)('div', {
                    className: d.iconContainer,
                    children: [
                        (0, r.jsx)(u._Ve, {
                            size: 'md',
                            color: 'currentColor',
                            className: i()({
                                [d.icon]: !0,
                                [d.visible]: !t
                            })
                        }),
                        (0, r.jsx)(u.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: i()({
                                [d.icon]: !0,
                                [d.visible]: t
                            })
                        })
                    ]
                })
            })
    });
};
class y extends (n = s.Component) {
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: l } = this.props;
        t && !e.isReady && l && this.focus();
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: l, sections: n, query: a, tags: r, onSelectionChange: s, onSelect: o, onRemoveTag: i, preventEscapePropagation: u } = this.props;
        if (0 !== n.length) {
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    (null == a || 0 === a.length) && null != r && r.length > 0 && (e.preventDefault(), e.stopPropagation(), null == i || i(r.length - 1));
                    break;
                case p.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (l = 0)) : ((t += 1) >= n.length && (t = n.length - 1), l >= n[t] && (l = n[t] - 1));
                    break;
                case p.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (l = 0)) : l >= n[t] && (l = n[t] - 1);
                    break;
                case p.yXg.ARROW_LEFT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? (l = n[t] - 1) : t < 0 && ((t = 0), (l = 0)));
                    break;
                case p.yXg.ARROW_RIGHT:
                    e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l += 1) >= n[t] && ((l = 0), (t += 1) >= n.length && ((t = n.length - 1), (l = n[t] - 1)));
                    break;
                case p.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === l && (l = 0), t >= n.length || l >= n[t])) return;
                    null != o && o(t, l, e);
                    return;
                case p.yXg.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                    return;
                default:
                    return;
            }
            null != s && s(t, l);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: l, selectedRow: n, onSelect: a, onSelectionChange: r, query: s, tags: o, preventEscapePropagation: i } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != o && o.length > 0) {
                        var c, h;
                        e.preventDefault(), e.stopPropagation(), null === (c = (h = this.props).onRemoveTag) || void 0 === c || c.call(h, o.length - 1);
                    }
                    break;
                case p.yXg.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > l && ++n >= t[l] && (++l >= t.length && (l = 0), (n = 0)), null == r || r(l, n);
                    break;
                case p.yXg.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --n < 0 && (--l < 0 && (l = t.length - 1), (n = t[l] - 1)), null == r || r(l, n);
                    break;
                case p.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > n && (null == a || a(l, n, e));
                    break;
                case p.yXg.ESCAPE:
                    e.preventDefault(), i && e.stopPropagation(), null == a || a(null, null, e), u.blur();
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: l = h.intl.string(h.t.LzcpeX), themeOverride: n, disabled: a, onClear: s, size: o, maxHeight: p, tags: g, onActivate: f, className: E, inputProps: y, focusAfterReady: C } = this.props,
            b = null != t && t.length > 0,
            R = !1,
            N = [];
        return (
            null != g &&
                g.length > 0 &&
                ('string' == typeof g[0]
                    ? g.forEach((e, t) =>
                          N.push(
                              (0, r.jsxs)(
                                  u.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: d.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, r.jsx)(u.Dio, {
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
                      g.forEach((e, t) =>
                          N.push(
                              (0, r.jsxs)(
                                  u.eee,
                                  {
                                      className: i()(d.tag, d.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, r.jsx)(u.qEK, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: u.EFr.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, r.jsx)('span', {
                                                  className: d.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, r.jsx)(c.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: c.Z.Sizes.SMOL
                                              }),
                                          (0, r.jsx)('span', {
                                              className: d.tagLabel,
                                              children: e.label
                                          }),
                                          (0, r.jsx)(u.Dio, {
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
            (0, r.jsx)(u.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, r.jsx)(u.f6W, {
                    theme: n,
                    children: (c) =>
                        (0, r.jsx)('div', {
                            ref: this.containerRef,
                            className: i()(E, d.container, o, c, { [d.disabled]: a }),
                            children: (0, r.jsxs)(u.zJl, {
                                className: d.inner,
                                style: { maxHeight: p },
                                children: [
                                    N,
                                    (0, r.jsx)('input', {
                                        className: i()(d.input, { [d.richTagInput]: R }),
                                        type: 'text',
                                        ref: this.ref,
                                        spellCheck: 'false',
                                        placeholder: l,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: a,
                                        'aria-disabled': a,
                                        autoFocus: !C && e,
                                        onMouseDown: f,
                                        ...this.defaultInputProps,
                                        ...y
                                    }),
                                    null != s
                                        ? (0, r.jsx)(v, {
                                              size: o,
                                              themeOverride: n,
                                              hasContent: b,
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
        super(...e),
            g(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            g(this, 'ref', s.createRef()),
            g(this, 'containerRef', s.createRef()),
            g(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: l, onQueryChange: n, useKeyboardNavigation: a } = this.props;
                null != l && l(e);
                let { current: r } = this.ref;
                if (null == r || null != t) {
                    e.keyCode !== p.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === p.yXg.ESCAPE && null != r.value && '' !== r.value && r.value.length > 0) {
                    (r.value = ''), null != n && n('');
                    return;
                }
                a && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
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
                null != e && e(), null != t && t.focus();
            }),
            g(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            g(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
g(y, 'Sizes', f),
    g(y, 'defaultProps', {
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
    });
let C = y;
