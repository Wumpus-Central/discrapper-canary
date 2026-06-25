n.d(e, { default: () => tm });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(189213),
    o = n(17928),
    u = n(843282);
n(321073);
var d = n(835245),
    h = n(187322),
    c = n(140735),
    m = n(504345),
    g = n(834730),
    p = n(826745),
    f = n(375708),
    x = n(397090),
    T = n(661772),
    y = n(134536);
let A = (0, d.A)(),
    j = (0, d.A)(),
    v = (0, d.A)();
class S extends r.Component {
    static contextType = m.cK;
    static defaultProps = {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1,
    };
    constructor(t) {
        super(t), (this.state = { dirty: t.defaultDirty ?? !1 });
    }
    getAriaDescribedBy = () => {
        let { maxLength: t, minLength: e, error: n } = this.props,
            l = [],
            r = this.context?.errorId;
        return (
            null != r && l.push(r),
            null != n ? l.push(A) : (null != t && l.push(v), null != e && l.push(j)),
            l.length > 0 ? l.join(" ") : void 0
        );
    };
    getPaddingRight() {
        let { maxLength: t, showCharacterCountFullPadding: e } = this.props;
        if (null == t) return 10;
        let n = `${t}`.length;
        return e && (n += `${t} / `.length), 7.23 * n + 10;
    }
    getCharsLeftLength() {
        let { maxLength: t, value: e } = this.props;
        return null == t ? null : t - (null != e ? e.length : 0);
    }
    getIsOverflowing() {
        let t = this.getCharsLeftLength();
        return null != t && t < 0;
    }
    getIsUnderflowing() {
        let { minLength: t, value: e } = this.props;
        return null != t && (null != e ? e.length : 0) < t;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            let { value: t, maxLength: e } = this.props;
            return (0, l.jsxs)("div", {
                className: a()(x.Ru, { [x.hz]: this.hasError() }),
                "aria-hidden": "true",
                children: [t?.length ?? 0, " ", null != e && `/ ${e}`],
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let t = this.getCharsLeftLength();
        return null == t
            ? null
            : (0, l.jsx)("div", { className: a()(x.Ru, { [x.hz]: t < 0 }), "aria-hidden": "true", children: t });
    }
    hasError() {
        return (
            null != this.props.error ||
            null != this.context.error ||
            (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1))
        );
    }
    getErrorMessage() {
        let { error: t, maxLength: e, minLength: n } = this.props,
            l = this.getIsOverflowing() ? f.intl.formatToPlainString(f.t.ICT5S6, { maxLength: e }) : null,
            r = this.getIsUnderflowing() ? f.intl.formatToPlainString(f.t["62rk1K"], { minLength: n }) : null;
        return (null != t && "" === t) || null === t
            ? null
            : void 0 !== t
              ? t
              : !1 === this.state.dirty
                ? null
                : (l ?? r);
    }
    renderErrorMessage() {
        let t = this.getErrorMessage();
        return null == t
            ? null
            : (0, l.jsx)(g.E, {
                  id: A,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: x.gJ,
                  children: t,
              });
    }
    render() {
        let {
                disabled: t,
                value: e,
                placeholder: n,
                autoFocus: r,
                minLength: i,
                maxLength: s,
                allowOverflow: o,
                spellCheck: u,
                resizeable: d,
                className: m,
                id: g,
                rows: A,
                flex: S,
                autosize: w,
                required: N,
                onInvalid: D,
                inputRef: O,
            } = this.props,
            C = w ? p.y : "textarea",
            P = this.hasError(),
            E = this.props["aria-labelledby"] ?? this.context?.titleId,
            b = this.getAriaDescribedBy();
        return (0, l.jsxs)("div", {
            className: a()(T.I6, { [x.Uu]: S }),
            children: [
                (0, l.jsxs)("div", {
                    className: a()(x.b4, { [x.Uu]: S }),
                    children: [
                        (0, l.jsx)(h.vN, {
                            children: (0, l.jsx)(C, {
                                type: "text",
                                className: a()(T.hF, x.Tg, y.qD, m, { [T.z3]: P, [T.r9]: t, [x.Xl]: d }),
                                "aria-labelledby": E,
                                "aria-describedby": b,
                                "aria-invalid": P,
                                style: { paddingRight: this.getPaddingRight() },
                                id: g,
                                disabled: t,
                                placeholder: n,
                                value: e,
                                autoFocus: r,
                                minLength: i,
                                maxLength: o ? void 0 : s,
                                spellCheck: u,
                                required: N,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: D,
                                rows: A,
                                ref: O,
                            }),
                        }),
                        null != i &&
                            (0, l.jsx)(c.A, { id: j, children: f.intl.format(f.t["bmQU//"], { minLength: i }) }),
                        null != s &&
                            (0, l.jsx)(c.A, { id: v, children: f.intl.format(f.t["+DFxLc"], { maxLength: s }) }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    onChange = (t) => {
        let { onChange: e, name: n } = this.props;
        e?.(t.currentTarget.value, n), this.setState({ dirty: !0 });
    };
    onFocus = (t) => {
        let { onFocus: e, name: n } = this.props;
        e?.(t, n);
    };
    onBlur = (t) => {
        let { onBlur: e, name: n } = this.props;
        e?.(t, n);
    };
    onKeyDown = (t) => {
        let { onKeyDown: e } = this.props;
        e?.(t);
    };
}
var w = n(922016),
    N = n(939249),
    D = n(285796),
    O = n(565645),
    C = n(765671),
    P = n(964486),
    E = n(793574),
    b = n(688810),
    R = n(375499),
    U = n(334295),
    M = n(287809),
    _ = n(174459),
    I = n(989349),
    L = n.n(I),
    k = n(885386),
    H = n(284009),
    F = n.n(H),
    Y = n(927813),
    $ = n(403918),
    B = n(652215);
let K = [$.yt.MINUTES_30, $.yt.HOURS_1, $.yt.HOURS_4];
var z = n(58703),
    q = n(403362);
function G(t) {
    let e = Date.now() + t;
    return (0, z.ro)(new Date(), new Date(e))
        ? f.intl.formatToPlainString(f.t["+3jw2j"], { time: f.intl.data.formatTime(e, { format: "short" }) })
        : f.intl.formatToPlainString(f.t["/Avy4C"], { time: f.intl.data.formatTime(e, { format: "short" }) });
}
function J(t) {
    switch (t) {
        case $.yt.TODAY:
            return G(Y.A.Millis.DAY);
        case $.yt.HOURS_4:
            return G(4 * Y.A.Millis.HOUR);
        case $.yt.HOURS_1:
            return G(+Y.A.Millis.HOUR);
        case $.yt.MINUTES_30:
            return G(30 * Y.A.Millis.MINUTE);
        case $.yt.DONT_CLEAR:
            return f.intl.string(f.t.bRn8cq);
        default:
            (0, q.xb)(t);
    }
}
function Q(t) {
    let e = Date.now() + t;
    return (0, z.ro)(new Date(), new Date(e))
        ? f.intl.data.formatTime(e, { format: "short" })
        : f.intl.formatToPlainString(f.t.DN91Jz, { time: f.intl.data.formatTime(e, { format: "short" }) });
}
var V = n(685396),
    X = n(231723),
    Z = n(480335),
    W = n(999291),
    tt = n(718019),
    te = n(413492),
    tn = n(915614),
    tl = n(946356),
    tr = n(878555),
    ti = n(983495),
    ta = n(562153),
    ts = n(996988),
    to = n(556);
function tu(t) {
    let { user: e, previewText: n, previewEmoji: r, previewStatus: i, placeHolderText: a, transitionState: s } = t,
        o = (0, W.Ay)(e.id),
        u =
            (null != n && "" !== n) || null != r
                ? f.intl.formatToPlainString(f.t.UpF5Qa, { emoji: r?.name ?? "", status: n })
                : f.intl.formatToPlainString(f.t.IKBvFl, { placeholder: a ?? "" });
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": u,
        children: (0, l.jsxs)(tl.A, {
            user: e,
            displayProfile: o,
            themeType: ts.d.POPOUT,
            className: to.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(tn.A, { user: e, displayProfile: o, themeType: ts.d.POPOUT }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(tt.A, {
                                user: e,
                                displayProfile: o,
                                themeType: ts.d.POPOUT,
                                previewStatus: i,
                                className: to.my,
                            }),
                        }),
                        (0, l.jsx)(ti.A, {
                            user: e,
                            themeType: ts.d.POPOUT,
                            previewText: n,
                            previewEmoji: r,
                            placeholderText: a,
                            hasEntered: s === X.ip.ENTERED,
                        }),
                    ],
                }),
                o?.profileEffect != null && (0, l.jsx)(Z.A, { skuId: o.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: to.QV,
                    inert: !0,
                    children: (0, l.jsx)(tr.Ay, {
                        user: e,
                        displayName: ta.Ay.getName(null, null, e),
                        pronouns: o?.pronouns,
                        trailing: (0, l.jsx)(te.A, { displayProfile: o, themeType: ts.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
var td = n(307731),
    th = n(722827);
let tc = "CLEAR_AFTER";
function tm(t) {
    let { transitionState: e, onClose: n, sourceAnalyticsLocations: i = [], prompt: d = null } = t,
        { analyticsLocations: h } = (0, b.Ay)(i, E.A.CUSTOM_STATUS_MODAL),
        m = (0, o.bG)([M.default], () => M.default.getCurrentUser() ?? null),
        p = (0, V.K)(),
        [x, T] = r.useState(p?.state ?? ""),
        [y, A] = r.useState(p?.emoji ?? null),
        [j, v] = r.useState(
            (function () {
                let t = k.G2.getSetting();
                if (null == t || "" === t.expiresAtMs) return $.yt.TODAY;
                let e = Number(t.expiresAtMs);
                if (isNaN(e)) return $.yt.TODAY;
                if (0 === e) return $.yt.DONT_CLEAR;
                let n = new Date(),
                    l = new Date(e);
                if (n.getFullYear() !== l.getFullYear() || n.getMonth() !== l.getMonth() || n.getDate() !== l.getDate())
                    return $.yt.TODAY;
                let r = Number(e) - Date.now();
                return K.find((t) => r <= t) ?? $.yt.TODAY;
            })(),
        ),
        I = r.useRef(null),
        H = r.useRef(null),
        z = r.useRef(null),
        G = null != d ? d.label() : f.intl.string(f.t.xod367),
        [X, Z] = r.useState(G),
        { ref: W, width: tt } = (0, C.Ay)(G);
    r.useEffect(() => {
        let t = z.current;
        if (null == tt || null == t) return;
        let e = tt - 78;
        t.textContent = G;
        let n = t.getBoundingClientRect().width;
        if (n <= e) Z(G);
        else {
            let t = n / G.length,
                l = Math.floor((e - 3 * t) / t);
            Z(`${G.substring(0, l)}...`);
        }
    }, [tt, G]),
        r.useEffect(() => {
            _.default.track(B.HAw.OPEN_MODAL, { type: E.A.CUSTOM_STATUS_MODAL, location_stack: h });
        }, [h]),
        (0, P.Ay)(() => {
            I.current?.focus(), I.current?.setSelection(x.length, x.length);
        });
    let te = () => {
            j !== tc &&
                (!(function (t) {
                    let {
                            text: e,
                            emojiInfo: n,
                            clearAfter: l,
                            analyticsContext: r,
                            createdAtMs: i,
                            prompt: a,
                            analyticsLocations: s,
                        } = t,
                        o = e.trim();
                    if (!(o.length > 0) && null == n) return k.G2.updateSetting(void 0);
                    k.G2.updateSetting({
                        text: o.length > 0 ? o : "",
                        expiresAtMs:
                            null != l && l !== $.yt.DONT_CLEAR
                                ? String(
                                      L()()
                                          .add(
                                              l === $.yt.TODAY
                                                  ? Y.A.Millis.DAY
                                                  : (F()("number" == typeof l, "Invalid custom status clear timeout"),
                                                    l),
                                              "ms",
                                          )
                                          .toDate()
                                          .getTime(),
                                  )
                                : "0",
                        emojiId: null != n && null != n.id ? n.id : "0",
                        emojiName: null != n ? n.name : "",
                        createdAtMs: String(i ?? L()().toDate().getTime()),
                    }),
                        _.default.track(B.HAw.CUSTOM_STATUS_UPDATED, {
                            location: null != r ? r.location : null,
                            emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                            text_len: o.length,
                            clear_after: null != l ? `${l}` : null,
                            prompt_type: a?.value,
                            location_stack: s,
                        });
                })({ text: x, emojiInfo: y, clearAfter: j, prompt: d, analyticsLocations: h }),
                n());
        },
        tn = f.intl.string(f.t.rp0ahn),
        tl = "custom-status-input";
    return (0, l.jsxs)(s.Modal, {
        title: f.intl.string(f.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: th.l3,
            children: (0, l.jsx)(u.Te, {
                "aria-label": f.intl.formatToPlainString(f.t.NFJUPa, {
                    value: j === tc ? f.intl.string(f.t.E45wvP) : J(j),
                }),
                maxVisibleItems: $.SX.length + 1,
                value: j,
                options: [
                    { value: tc, key: tc, label: f.intl.string(f.t.E45wvP), disabled: !0 },
                    ...$.SX.map((t) => ({ value: t, key: t, label: J(t) })),
                ],
                onChange: (t) => v(t),
                optionClassName: th.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: r } = t;
                    return (0, l.jsx)("span", {
                        className: a()(th.j3, r ? th.r9 : void 0),
                        children:
                            e === tc
                                ? n
                                : (function (t) {
                                      switch (t) {
                                          case $.yt.TODAY:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 24 })} (${Q(Y.A.Millis.DAY)})`;
                                          case $.yt.HOURS_4:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 4 })} (${Q(4 * Y.A.Millis.HOUR)})`;
                                          case $.yt.HOURS_1:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 1 })} (${Q(Y.A.Millis.HOUR)})`;
                                          case $.yt.MINUTES_30:
                                              return `${f.intl.formatToPlainString(f.t.TS3eJb, { minutes: 30 })} (${Q(30 * Y.A.Millis.MINUTE)})`;
                                          case $.yt.DONT_CLEAR:
                                              return f.intl.string(f.t.bRn8cq);
                                          default:
                                              (0, q.xb)(t);
                                      }
                                  })(e),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
                "data-migration-pending": !0,
            }),
        }),
        onClose: async () => {
            await n();
        },
        transitionState: e,
        actions: [{ text: f.intl.string(f.t["R3BPH+"]), variant: "primary", onClick: te }],
        children: [
            null != m &&
                (0, l.jsx)("div", {
                    className: th.q5,
                    children: (0, l.jsx)(tu, {
                        user: m,
                        previewText: x,
                        previewEmoji: y,
                        placeHolderText: G,
                        transitionState: e,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: th.eH,
                children: [
                    (0, l.jsx)(g.E, {
                        tag: "label",
                        htmlFor: tl,
                        variant: "heading-md/semibold",
                        className: th.wW,
                        children: tn,
                    }),
                    (0, l.jsxs)("div", {
                        className: th.Kf,
                        ref: W,
                        children: [
                            (0, l.jsx)("span", { ref: z, className: th._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: th.S0,
                                children: (0, l.jsx)(w.Y, {
                                    targetElementRef: H,
                                    renderPopout: function (t) {
                                        let { closePopout: e } = t;
                                        return (0, l.jsx)(U.A, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                let { emoji: n, willClose: l } = t;
                                                null == n ||
                                                    A(
                                                        null != n.id
                                                            ? { id: n.id, name: n.name, animated: n.animated }
                                                            : {
                                                                  id: null,
                                                                  name: n.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    l && e();
                                            },
                                            pickerIntention: td.EmojiIntention.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: w.Y.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        let { isShown: n } = e;
                                        return (0, l.jsx)(R.A, {
                                            ...t,
                                            ref: H,
                                            active: n,
                                            "aria-label":
                                                null != y
                                                    ? f.intl.formatToPlainString(f.t["urEr+I"], {
                                                          currentValue: y.name,
                                                      })
                                                    : f.intl.string(f.t.psHnw8),
                                            className: th.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == y
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(O.A, {
                                                              className: th.Zg,
                                                              emojiId: y.id,
                                                              emojiName: y.name,
                                                              animated: !!y.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, l.jsx)(S, {
                                autosize: !0,
                                value: x,
                                maxLength: $.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: X,
                                onChange: function (t) {
                                    T(t);
                                },
                                onKeyDown: function (t) {
                                    "Enter" === t.key && (t.preventDefault(), t.shiftKey || te());
                                },
                                className: th.hF,
                                inputRef: I,
                                id: tl,
                            }),
                            (x.length > 0 || null != y) &&
                                (0, l.jsx)(N.D, {
                                    "aria-label": f.intl.string(f.t.wfYTHe),
                                    className: th.mt,
                                    onClick: function () {
                                        T(""), A(null);
                                    },
                                    children: (0, l.jsx)(D.a, { size: "md", color: "currentColor", className: th.hj }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(c.A, { children: f.intl.formatToPlainString(f.t.IKBvFl, { placeholder: G ?? "" }) }),
                ],
            }),
        ],
    });
}
