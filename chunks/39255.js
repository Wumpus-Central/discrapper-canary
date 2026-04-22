n.d(t, { A: () => R, _: () => N }), n(321073);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(349288),
    u = n(789645),
    c = n(97808),
    d = n(778712),
    h = n(187322),
    p = n(43990),
    f = n(573613),
    g = n(650583),
    E = n(985018),
    T = n(820988);
let A = Object.freeze({ SMALL: T.EX, MEDIUM: T.Y, LARGE: T.as });
var N = (((r = {}).MEMBER = "MEMBER"), (r.ROLE = "ROLE"), (r.CHANNEL = "CHANNEL"), (r.USER = "USER"), r);
class S extends l.Component {
    static Sizes = A;
    static defaultProps = {
        size: A.SMALL,
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
    ref = l.createRef();
    containerRef = l.createRef();
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
            sections: r,
            query: i,
            tags: l,
            onSelectionChange: s,
            onSelect: a,
            onRemoveTag: o,
            preventEscapePropagation: u,
        } = this.props;
        if (0 !== r.length) {
            switch (e.key) {
                case g.dh.BACKSPACE:
                    (null == i || 0 === i.length) &&
                        null != l &&
                        l.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), o?.(l.length - 1));
                    break;
                case g.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (n = 0))
                            : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case g.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1);
                    break;
                case g.dh.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case g.dh.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n += 1) >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1)));
                    break;
                case g.dh.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === n && (n = 0),
                        t >= r.length || n >= r[t])
                    )
                        return;
                    null != a && a(t, n, e);
                    return;
                case g.dh.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
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
                selectedRow: r,
                onSelect: i,
                onSelectionChange: l,
                query: s,
                tags: a,
                preventEscapePropagation: o,
            } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.key) {
                case g.dh.BACKSPACE:
                    (null == s || 0 === s.length) &&
                        null != a &&
                        a.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), this.props.onRemoveTag?.(a.length - 1));
                    break;
                case g.dh.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)),
                        l?.(n, r);
                    break;
                case g.dh.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)),
                        l?.(n, r);
                    break;
                case g.dh.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && i?.(n, r, e);
                    break;
                case g.dh.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), i?.(null, null, e), u.blur();
            }
    }
    handleKeyDown = (e) => {
        let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
        null != n && n(e);
        let { current: l } = this.ref;
        if (null == l || null != t) {
            e.key !== g.dh.TAB && t?.(e);
            return;
        }
        if (e.key === g.dh.ESCAPE && null != l.value && "" !== l.value && l.value.length > 0) {
            (l.value = ""), null != r && r("");
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
                placeholder: n = E.intl.string(E.t.LzcpeZ),
                themeOverride: r,
                disabled: l,
                size: s,
                maxHeight: g,
                tags: A,
                onActivate: N,
                className: S,
                inputProps: R,
                focusAfterReady: m,
            } = this.props,
            y = !1,
            v = [];
        return (
            null != A &&
                A.length > 0 &&
                ("string" == typeof A[0]
                    ? A.forEach((e, t) =>
                          v.push(
                              (0, i.jsxs)(
                                  o.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: T.Tc,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(u.P, {
                                              size: "md",
                                              color: "currentColor",
                                              className: T.VN,
                                              "aria-label": E.intl.string(E.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((y = !0),
                      A.forEach((e, t) =>
                          v.push(
                              (0, i.jsxs)(
                                  o.Anchor,
                                  {
                                      className: a()(T.Tc, T.J2),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(c.eu, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: d._3.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)("span", {
                                                  className: T.Mk,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, i.jsx)("span", { className: T.v6, children: e.label }),
                                          (0, i.jsx)(u.P, {
                                              size: "md",
                                              color: "currentColor",
                                              className: T.VN,
                                              "aria-label": E.intl.string(E.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, i.jsx)(h.vN, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(p.N, {
                    theme: r,
                    children: (r) =>
                        (0, i.jsx)("div", {
                            ref: this.containerRef,
                            className: a()(S, T.kL, s, r, { [T.r9]: l }),
                            children: (0, i.jsxs)(f.Ip, {
                                className: T.vW,
                                style: { maxHeight: g },
                                children: [
                                    v,
                                    (0, i.jsx)("input", {
                                        className: a()(T.hF, { [T.He]: y }),
                                        type: "text",
                                        ref: this.ref,
                                        spellCheck: "false",
                                        placeholder: n,
                                        value: t,
                                        onChange: this.handleChange,
                                        onKeyDown: this.handleKeyDown,
                                        onFocus: this.handleFocus,
                                        disabled: l,
                                        "aria-disabled": l,
                                        autoFocus: !m && e,
                                        onMouseDown: N,
                                        ...this.defaultInputProps,
                                        ...R,
                                    }),
                                ],
                            }),
                        }),
                }),
            })
        );
    }
}
let R = S;
