n.d(t, {
    A: () => f,
    _: () => A,
}),
    n(321073),
    n(896048);
var l,
    r,
    a = n(627968),
    i = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(397927),
    u = n(650583),
    E = n(985018),
    d = n(633175);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let g = Object.freeze({
    SMALL: d.EX,
    MEDIUM: d.Y,
    LARGE: d.as,
});
var A = (((r = {}).MEMBER = "MEMBER"), (r.ROLE = "ROLE"), (r.CHANNEL = "CHANNEL"), (r.USER = "USER"), r);
class T extends (l = i.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        t && !e.isReady && n && this.focus(),
            (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange();
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            n = t - this.previousHeight;
        if (0 !== n) {
            var l, r;
            (this.previousHeight = t), null == (l = (r = this.props).onHeightChange) || l.call(r, n);
        }
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: l,
            query: r,
            tags: a,
            onSelectionChange: i,
            onSelect: s,
            onRemoveTag: o,
            preventEscapePropagation: c,
        } = this.props;
        if (0 !== l.length) {
            switch (e.key) {
                case u.dh.BACKSPACE:
                    (null == r || 0 === r.length) &&
                        null != a &&
                        a.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), null == o || o(a.length - 1));
                    break;
                case u.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (n = 0))
                            : ((t += 1) >= l.length && (t = l.length - 1), n >= l[t] && (n = l[t] - 1));
                    break;
                case u.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= l[t] && (n = l[t] - 1);
                    break;
                case u.dh.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = l[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case u.dh.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n += 1) >= l[t] && ((n = 0), (t += 1) >= l.length && ((t = l.length - 1), (n = l[t] - 1)));
                    break;
                case u.dh.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === n && (n = 0),
                        t >= l.length || n >= l[t])
                    )
                        return;
                    null != s && s(t, n, e);
                    return;
                case u.dh.ESCAPE:
                    e.preventDefault(), c && e.stopPropagation(), null != s && s(null, null, e);
                    return;
                default:
                    return;
            }
            null != i && i(t, n);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: n,
                selectedRow: l,
                onSelect: r,
                onSelectionChange: a,
                query: i,
                tags: s,
                preventEscapePropagation: o,
            } = this.props,
            { current: c } = this.ref;
        if (null != c)
            switch (e.key) {
                case u.dh.BACKSPACE:
                    if ((null == i || 0 === i.length) && null != s && s.length > 0) {
                        var E, d;
                        e.preventDefault(),
                            e.stopPropagation(),
                            null == (E = (d = this.props).onRemoveTag) || E.call(d, s.length - 1);
                    }
                    break;
                case u.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++l >= t[n] && (++n >= t.length && (n = 0), (l = 0)),
                        null == a || a(n, l);
                    break;
                case u.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --l < 0 && (--n < 0 && (n = t.length - 1), (l = t[n] - 1)),
                        null == a || a(n, l);
                    break;
                case u.dh.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > l && (null == r || r(n, l, e));
                    break;
                case u.dh.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), null == r || r(null, null, e), c.blur();
            }
    }
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: n = E.intl.string(E.t.LzcpeZ),
                themeOverride: l,
                disabled: r,
                size: i,
                maxHeight: s,
                tags: u,
                onActivate: g,
                className: A,
                inputProps: T,
                focusAfterReady: f,
            } = this.props,
            h = !1,
            I = [];
        return (
            null != u &&
                u.length > 0 &&
                ("string" == typeof u[0]
                    ? u.forEach((e, t) =>
                          I.push(
                              (0, a.jsxs)(
                                  c.MzZ,
                                  {
                                      focusProps: { offset: 4 },
                                      className: d.Tc,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, a.jsx)(c.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.VN,
                                              "aria-label": E.intl.string(E.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((h = !0),
                      u.forEach((e, t) =>
                          I.push(
                              (0, a.jsxs)(
                                  c.MzZ,
                                  {
                                      className: o()(d.Tc, d.J2),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, a.jsx)(c.euF, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: c._3J.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, a.jsx)("span", {
                                                  className: d.Mk,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, a.jsx)("span", {
                                              className: d.v6,
                                              children: e.label,
                                          }),
                                          (0, a.jsx)(c.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.VN,
                                              "aria-label": E.intl.string(E.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, a.jsx)(c.vN3, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, a.jsx)(c.NPJ, {
                    theme: l,
                    children: (l) =>
                        (0, a.jsx)("div", {
                            ref: this.containerRef,
                            className: o()(A, d.kL, i, l, { [d.r9]: r }),
                            children: (0, a.jsxs)(c.IpV, {
                                className: d.vW,
                                style: { maxHeight: s },
                                children: [
                                    I,
                                    (0, a.jsx)(
                                        "input",
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    l = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (l = l.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    l.forEach(function (t) {
                                                        _(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                className: o()(d.hF, { [d.He]: h }),
                                                type: "text",
                                                ref: this.ref,
                                                spellCheck: "false",
                                                placeholder: n,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: r,
                                                "aria-disabled": r,
                                                autoFocus: !f && e,
                                                onMouseDown: g,
                                            },
                                            this.defaultInputProps,
                                            T,
                                        ),
                                    ),
                                ],
                            }),
                        }),
                }),
            })
        );
    }
    constructor(...e) {
        super(...e),
            _(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
            }),
            _(this, "ref", i.createRef()),
            _(this, "containerRef", i.createRef()),
            _(this, "previousHeight", 0),
            _(this, "handleKeyDown", (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: l, useKeyboardNavigation: r } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.key !== u.dh.TAB && (null == t || t(e));
                    return;
                }
                if (e.key === u.dh.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                    (a.value = ""), null != l && l("");
                    return;
                }
                r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            _(this, "handleChange", (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            _(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            _(this, "handleRemoveTag", (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            _(this, "focus", () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
_(T, "Sizes", g),
    _(T, "defaultProps", {
        size: g.SMALL,
        query: "",
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0,
    });
let f = T;
