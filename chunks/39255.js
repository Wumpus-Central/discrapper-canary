n.d(t, { A: () => m, _: () => g }), n(321073);
var l,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(397927),
    u = n(650583),
    c = n(985018),
    d = n(633175);
let h = Object.freeze({ SMALL: d.EX, MEDIUM: d.Y, LARGE: d.as });
var g = (((l = {}).MEMBER = "MEMBER"), (l.ROLE = "ROLE"), (l.CHANNEL = "CHANNEL"), (l.USER = "USER"), l);
class f extends a.Component {
    static Sizes = h;
    static defaultProps = {
        size: h.SMALL,
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
    };
    defaultInputProps = { role: "combobox", "aria-haspopup": "listbox", "aria-autocomplete": "list" };
    ref = a.createRef();
    containerRef = a.createRef();
    previousHeight = 0;
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
        0 !== n && ((this.previousHeight = t), this.props.onHeightChange?.(n));
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: l,
            query: i,
            tags: a,
            onSelectionChange: s,
            onSelect: r,
            onRemoveTag: o,
            preventEscapePropagation: c,
        } = this.props;
        if (0 !== l.length) {
            switch (e.key) {
                case u.dh.BACKSPACE:
                    (null == i || 0 === i.length) &&
                        null != a &&
                        a.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), o?.(a.length - 1));
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
                    null != r && r(t, n, e);
                    return;
                case u.dh.ESCAPE:
                    e.preventDefault(), c && e.stopPropagation(), null != r && r(null, null, e);
                    return;
                default:
                    return;
            }
            null != s && s(t, n);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: n,
                selectedRow: l,
                onSelect: i,
                onSelectionChange: a,
                query: s,
                tags: r,
                preventEscapePropagation: o,
            } = this.props,
            { current: c } = this.ref;
        if (null != c)
            switch (e.key) {
                case u.dh.BACKSPACE:
                    (null == s || 0 === s.length) &&
                        null != r &&
                        r.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(r.length - 1));
                    break;
                case u.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++l >= t[n] && (++n >= t.length && (n = 0), (l = 0)),
                        a?.(n, l);
                    break;
                case u.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --l < 0 && (--n < 0 && (n = t.length - 1), (l = t[n] - 1)),
                        a?.(n, l);
                    break;
                case u.dh.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > l && i?.(n, l, e);
                    break;
                case u.dh.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), i?.(null, null, e), c.blur();
            }
    }
    handleKeyDown = (e) => {
        let { onActivate: t, onKeyDown: n, onQueryChange: l, useKeyboardNavigation: i } = this.props;
        null != n && n(e);
        let { current: a } = this.ref;
        if (null == a || null != t) {
            e.key !== u.dh.TAB && t?.(e);
            return;
        }
        if (e.key === u.dh.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
            (a.value = ""), null != l && l("");
            return;
        }
        i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
    };
    handleChange = (e) => {
        let { onQueryChange: t } = this.props;
        null != t && t(e.currentTarget.value);
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props;
        null != t && t(e);
    };
    handleRemoveTag = (e) => {
        let { onRemoveTag: t } = this.props;
        t?.(e);
    };
    focus = () => {
        let { current: e } = this.ref;
        null != e && e.focus();
    };
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: n = c.intl.string(c.t.LzcpeZ),
                themeOverride: l,
                disabled: a,
                size: s,
                maxHeight: u,
                tags: h,
                onActivate: g,
                className: f,
                inputProps: m,
                focusAfterReady: p,
            } = this.props,
            N = !1,
            A = [];
        return (
            null != h &&
                h.length > 0 &&
                ("string" == typeof h[0]
                    ? h.forEach((e, t) =>
                          A.push(
                              (0, i.jsxs)(
                                  o.MzZ,
                                  {
                                      focusProps: { offset: 4 },
                                      className: d.Tc,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(o.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.VN,
                                              "aria-label": c.intl.string(c.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((N = !0),
                      h.forEach((e, t) =>
                          A.push(
                              (0, i.jsxs)(
                                  o.MzZ,
                                  {
                                      className: r()(d.Tc, d.J2),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(o.euF, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: o._3J.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)("span", {
                                                  className: d.Mk,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, i.jsx)("span", { className: d.v6, children: e.label }),
                                          (0, i.jsx)(o.PGe, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.VN,
                                              "aria-label": c.intl.string(c.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, i.jsx)(o.vN3, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(o.NPJ, {
                    theme: l,
                    children: (l) =>
                        (0, i.jsx)("div", {
                            ref: this.containerRef,
                            className: r()(f, d.kL, s, l, { [d.r9]: a }),
                            children: (0, i.jsxs)(o.IpV, {
                                className: d.vW,
                                style: { maxHeight: u },
                                children: [
                                    A,
                                    (0, i.jsx)("input", {
                                        className: r()(d.hF, { [d.He]: N }),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: n,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: a,
                                        "aria-disabled": a,
                                        autoFocus: !p && e,
                                        onMouseDown: g,
                                        ...this.defaultInputProps,
                                        ...m,
                                    }),
                                ],
                            }),
                        }),
                }),
            })
        );
    }
}
let m = f;
