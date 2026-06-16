s.d(t, { A: () => C, _: () => P }), s(321073);
var a,
    l = s(627968),
    n = s(64700),
    r = s(503698),
    o = s.n(r),
    i = s(349288),
    h = s(789645),
    p = s(97808),
    u = s(778712),
    c = s(187322),
    d = s(43990),
    g = s(364522),
    f = s(650583),
    R = s(375708),
    v = s(820988);
let E = Object.freeze({ SMALL: v.EX, MEDIUM: v.Y, LARGE: v.as });
var P = (((a = {}).MEMBER = "MEMBER"), (a.ROLE = "ROLE"), (a.CHANNEL = "CHANNEL"), (a.USER = "USER"), a);
class b extends n.Component {
    static Sizes = E;
    static defaultProps = {
        size: E.SMALL,
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
    ref = n.createRef();
    containerRef = n.createRef();
    previousHeight = 0;
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: s } = this.props;
        t && !e.isReady && s && this.focus(),
            (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange();
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            s = t - this.previousHeight;
        0 !== s && ((this.previousHeight = t), this.props.onHeightChange?.(s));
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: s,
            sections: a,
            query: l,
            tags: n,
            onSelectionChange: r,
            onSelect: o,
            onRemoveTag: i,
            preventEscapePropagation: h,
        } = this.props;
        if (0 !== a.length) {
            switch (e.key) {
                case f.dh.BACKSPACE:
                    (null == l || 0 === l.length) &&
                        null != n &&
                        n.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), i?.(n.length - 1));
                    break;
                case f.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (s = 0))
                            : ((t += 1) >= a.length && (t = a.length - 1), s >= a[t] && (s = a[t] - 1));
                    break;
                case f.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (s = 0)) : s >= a[t] && (s = a[t] - 1);
                    break;
                case f.dh.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (s -= 1) < 0 && ((t -= 1) >= 0 ? (s = a[t] - 1) : t < 0 && ((t = 0), (s = 0)));
                    break;
                case f.dh.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (s += 1) >= a[t] && ((s = 0), (t += 1) >= a.length && ((t = a.length - 1), (s = a[t] - 1)));
                    break;
                case f.dh.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === s && (s = 0),
                        t >= a.length || s >= a[t])
                    )
                        return;
                    null != o && o(t, s, e);
                    return;
                case f.dh.ESCAPE:
                    e.preventDefault(), h && e.stopPropagation(), null != o && o(null, null, e);
                    return;
                default:
                    return;
            }
            null != r && r(t, s);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: s,
                selectedRow: a,
                onSelect: l,
                onSelectionChange: n,
                query: r,
                tags: o,
                preventEscapePropagation: i,
            } = this.props,
            { current: h } = this.ref;
        if (null != h)
            switch (e.key) {
                case f.dh.BACKSPACE:
                    (null == r || 0 === r.length) &&
                        null != o &&
                        o.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(o.length - 1));
                    break;
                case f.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > s && ++a >= t[s] && (++s >= t.length && (s = 0), (a = 0)),
                        n?.(s, a);
                    break;
                case f.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --a < 0 && (--s < 0 && (s = t.length - 1), (a = t[s] - 1)),
                        n?.(s, a);
                    break;
                case f.dh.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > s && t[s] > a && l?.(s, a, e);
                    break;
                case f.dh.ESCAPE:
                    e.preventDefault(), i && e.stopPropagation(), l?.(null, null, e), h.blur();
            }
    }
    handleKeyDown = (e) => {
        let { onActivate: t, onKeyDown: s, onQueryChange: a, useKeyboardNavigation: l } = this.props;
        null != s && s(e);
        let { current: n } = this.ref;
        if (null == n || null != t) {
            e.key !== f.dh.TAB && t?.(e);
            return;
        }
        if (e.key === f.dh.ESCAPE && null != n.value && "" !== n.value && n.value.length > 0) {
            (n.value = ""), null != a && a("");
            return;
        }
        l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
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
                placeholder: s = R.intl.string(R.t.LzcpeZ),
                themeOverride: a,
                disabled: n,
                size: r,
                maxHeight: f,
                tags: E,
                onActivate: P,
                className: b,
                inputProps: C,
                focusAfterReady: D,
            } = this.props,
            N = !1,
            k = [];
        return (
            null != E &&
                E.length > 0 &&
                ("string" == typeof E[0]
                    ? E.forEach((e, t) =>
                          k.push(
                              (0, l.jsxs)(
                                  i.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: v.Tc,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, l.jsx)(h.P, {
                                              size: "md",
                                              color: "currentColor",
                                              className: v.VN,
                                              "aria-label": R.intl.string(R.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((N = !0),
                      E.forEach((e, t) =>
                          k.push(
                              (0, l.jsxs)(
                                  i.Anchor,
                                  {
                                      className: o()(v.Tc, v.J2),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, l.jsx)(p.eu, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: u._3.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, l.jsx)("span", {
                                                  className: v.Mk,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, l.jsx)("span", { className: v.v6, children: e.label }),
                                          (0, l.jsx)(h.P, {
                                              size: "md",
                                              color: "currentColor",
                                              className: v.VN,
                                              "aria-label": R.intl.string(R.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, l.jsx)(c.vN, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, l.jsx)(d.N, {
                    theme: a,
                    children: (a) =>
                        (0, l.jsx)("div", {
                            ref: this.containerRef,
                            className: o()(b, v.kL, r, a, { [v.r9]: n }),
                            children: (0, l.jsxs)(g.Ip, {
                                className: v.vW,
                                style: { maxHeight: f },
                                children: [
                                    k,
                                    (0, l.jsx)("input", {
                                        className: o()(v.hF, { [v.He]: N }),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: s,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: n,
                                        "aria-disabled": n,
                                        autoFocus: !D && e,
                                        onMouseDown: P,
                                        ...this.defaultInputProps,
                                        ...C,
                                    }),
                                ],
                            }),
                        }),
                }),
            })
        );
    }
}
let C = b;
