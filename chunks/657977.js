n.d(e, { default: () => tc });
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
    x = n(792034),
    T = n(482188),
    y = n(429128);
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
                required: D,
                onInvalid: N,
                inputRef: O,
            } = this.props,
            C = w ? p.y : "textarea",
            R = this.hasError(),
            b = this.props["aria-labelledby"] ?? this.context?.titleId,
            E = this.getAriaDescribedBy();
        return (0, l.jsxs)("div", {
            className: a()(T.I6, { [x.Uu]: S }),
            children: [
                (0, l.jsxs)("div", {
                    className: a()(x.b4, { [x.Uu]: S }),
                    children: [
                        (0, l.jsx)(h.vN, {
                            children: (0, l.jsx)(C, {
                                type: "text",
                                className: a()(T.hF, x.Tg, y.qD, m, { [T.z3]: R, [T.r9]: t, [x.Xl]: d }),
                                "aria-labelledby": b,
                                "aria-describedby": E,
                                "aria-invalid": R,
                                style: { paddingRight: this.getPaddingRight() },
                                id: g,
                                disabled: t,
                                placeholder: n,
                                value: e,
                                autoFocus: r,
                                minLength: i,
                                maxLength: o ? void 0 : s,
                                spellCheck: u,
                                required: D,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: N,
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
    D = n(939249),
    N = n(285796),
    O = n(565645),
    C = n(765671),
    R = n(964486),
    b = n(793574),
    E = n(688810),
    P = n(375499),
    U = n(267889),
    M = n(287809),
    _ = n(174459),
    I = n(989349),
    L = n.n(I),
    k = n(885386),
    F = n(284009),
    H = n.n(F),
    Y = n(403918),
    $ = n(652215);
let B = [Y.yt.MINUTES_30, Y.yt.HOURS_1, Y.yt.HOURS_4];
var K = n(58703),
    z = n(927813),
    q = n(403362);
let G = (t) => {
        let e = Date.now() + t;
        return (0, K.ro)(new Date(), new Date(e))
            ? f.intl.formatToPlainString(f.t["+3jw2j"], { time: f.intl.data.formatTime(e, { format: "short" }) })
            : f.intl.formatToPlainString(f.t["/Avy4C"], { time: f.intl.data.formatTime(e, { format: "short" }) });
    },
    Q = (t) => {
        let e = Date.now() + t;
        return (0, K.ro)(new Date(), new Date(e))
            ? f.intl.data.formatTime(e, { format: "short" })
            : f.intl.formatToPlainString(f.t.DN91Jz, { time: f.intl.data.formatTime(e, { format: "short" }) });
    };
var J = n(685396),
    X = n(231723),
    Z = n(480335),
    V = n(999291),
    W = n(718019),
    tt = n(694720),
    te = n(915614),
    tn = n(946356),
    tl = n(878555),
    tr = n(983495),
    ti = n(562153),
    ta = n(996988),
    ts = n(823788);
function to(t) {
    let { user: e, previewText: n, previewEmoji: r, previewStatus: i, placeHolderText: a, transitionState: s } = t,
        o = (0, V.Ay)(e.id),
        u =
            (null != n && "" !== n) || null != r
                ? f.intl.formatToPlainString(f.t.UpF5Qa, { emoji: r?.name ?? "", status: n })
                : f.intl.formatToPlainString(f.t.IKBvFl, { placeholder: a ?? "" });
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": u,
        children: (0, l.jsxs)(tn.A, {
            user: e,
            displayProfile: o,
            themeType: ta.d.POPOUT,
            className: ts.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(te.A, { user: e, displayProfile: o, themeType: ta.d.POPOUT }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(W.A, {
                                user: e,
                                displayProfile: o,
                                themeType: ta.d.POPOUT,
                                previewStatus: i,
                                className: ts.my,
                            }),
                        }),
                        (0, l.jsx)(tr.A, {
                            user: e,
                            themeType: ta.d.POPOUT,
                            previewText: n,
                            previewEmoji: r,
                            placeholderText: a,
                            hasEntered: s === X.ip.ENTERED,
                        }),
                    ],
                }),
                o?.profileEffect != null && (0, l.jsx)(Z.A, { skuId: o.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: ts.QV,
                    inert: !0,
                    children: (0, l.jsx)(tl.Ay, {
                        user: e,
                        displayName: ti.Ay.getName(null, null, e),
                        pronouns: o?.pronouns,
                        trailing: (0, l.jsx)(tt.A, { displayProfile: o, themeType: ta.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
var tu = n(307731),
    td = n(320523);
let th = "CLEAR_AFTER";
function tc(t) {
    let { transitionState: e, onClose: n, sourceAnalyticsLocations: i = [], prompt: d = null } = t,
        { analyticsLocations: h } = (0, E.Ay)(i, b.A.CUSTOM_STATUS_MODAL),
        m = (0, o.bG)([M.default], () => M.default.getCurrentUser() ?? null),
        p = (0, J.K)(),
        [x, T] = r.useState(p?.state ?? ""),
        [y, A] = r.useState(p?.emoji ?? null),
        [j, v] = r.useState(
            (function () {
                let t = k.G2.getSetting();
                if (null == t || "" === t.expiresAtMs) return Y.yt.TODAY;
                let e = Number(t.expiresAtMs);
                if (isNaN(e)) return Y.yt.TODAY;
                if (0 === e) return Y.yt.DONT_CLEAR;
                let n = new Date(),
                    l = new Date(e);
                if (n.getFullYear() !== l.getFullYear() || n.getMonth() !== l.getMonth() || n.getDate() !== l.getDate())
                    return Y.yt.TODAY;
                let r = Number(e) - Date.now();
                return B.find((t) => r <= t) ?? Y.yt.TODAY;
            })(),
        ),
        I = r.useRef(null),
        F = r.useRef(null),
        K = r.useRef(null),
        X = null != d ? d.label() : f.intl.string(f.t.xod367),
        [Z, V] = r.useState(X),
        { ref: W, width: tt } = (0, C.Ay)(X);
    r.useEffect(() => {
        let t = K.current;
        if (null == tt || null == t) return;
        let e = tt - 78;
        t.textContent = X;
        let n = t.getBoundingClientRect().width;
        if (n <= e) V(X);
        else {
            let t = n / X.length,
                l = Math.floor((e - 3 * t) / t);
            V(`${X.substring(0, l)}...`);
        }
    }, [tt, X]),
        r.useEffect(() => {
            _.default.track($.HAw.OPEN_MODAL, { type: b.A.CUSTOM_STATUS_MODAL, location_stack: h });
        }, [h]),
        (0, R.Ay)(() => {
            I.current?.focus(), I.current?.setSelection(x.length, x.length);
        });
    let te = () => {
            j !== th &&
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
                            null != l && l !== Y.yt.DONT_CLEAR
                                ? String(
                                      L()()
                                          .add(
                                              (function (t) {
                                                  if (t !== Y.yt.TODAY)
                                                      return (
                                                          H()(
                                                              "number" == typeof t,
                                                              "Invalid custom status clear timeout",
                                                          ),
                                                          t
                                                      );
                                                  {
                                                      let t = new Date();
                                                      return (
                                                          new Date(
                                                              t.getFullYear(),
                                                              t.getMonth(),
                                                              t.getDate() + 1,
                                                          ).getTime() - t.getTime()
                                                      );
                                                  }
                                              })(l),
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
                        _.default.track($.HAw.CUSTOM_STATUS_UPDATED, {
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
            className: td.l3,
            children: (0, l.jsx)(u.Te, {
                maxVisibleItems: Y.SX.length + 1,
                value: j,
                options: [
                    { value: th, key: th, label: f.intl.string(f.t.E45wvP), disabled: !0 },
                    ...Y.SX.map((t) => ({
                        value: t,
                        key: t,
                        label: (function (t) {
                            switch (t) {
                                case Y.yt.TODAY:
                                    return G(z.A.Millis.DAY);
                                case Y.yt.HOURS_4:
                                    return G(4 * z.A.Millis.HOUR);
                                case Y.yt.HOURS_1:
                                    return G(+z.A.Millis.HOUR);
                                case Y.yt.MINUTES_30:
                                    return G(30 * z.A.Millis.MINUTE);
                                case Y.yt.DONT_CLEAR:
                                    return f.intl.string(f.t.bRn8cq);
                                default:
                                    (0, q.xb)(t);
                            }
                        })(t),
                    })),
                ],
                onChange: (t) => v(t),
                optionClassName: td.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: r } = t;
                    return (0, l.jsx)("span", {
                        className: a()(td.j3, r ? td.r9 : void 0),
                        children:
                            e === th
                                ? n
                                : (function (t) {
                                      switch (t) {
                                          case Y.yt.TODAY:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 24 })} (${Q(z.A.Millis.DAY)})`;
                                          case Y.yt.HOURS_4:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 4 })} (${Q(4 * z.A.Millis.HOUR)})`;
                                          case Y.yt.HOURS_1:
                                              return `${f.intl.formatToPlainString(f.t.Rea2gR, { hours: 1 })} (${Q(z.A.Millis.HOUR)})`;
                                          case Y.yt.MINUTES_30:
                                              return `${f.intl.formatToPlainString(f.t.TS3eJb, { minutes: 30 })} (${Q(30 * z.A.Millis.MINUTE)})`;
                                          case Y.yt.DONT_CLEAR:
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
                    className: td.q5,
                    children: (0, l.jsx)(to, {
                        user: m,
                        previewText: x,
                        previewEmoji: y,
                        placeHolderText: X,
                        transitionState: e,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: td.eH,
                children: [
                    (0, l.jsx)(g.E, {
                        tag: "label",
                        htmlFor: tl,
                        variant: "heading-md/semibold",
                        className: td.wW,
                        children: tn,
                    }),
                    (0, l.jsxs)("div", {
                        className: td.Kf,
                        ref: W,
                        children: [
                            (0, l.jsx)("span", { ref: K, className: td._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: td.S0,
                                children: (0, l.jsx)(w.Y, {
                                    targetElementRef: F,
                                    renderPopout: (t) => {
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
                                            pickerIntention: tu.EmojiIntention.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: w.Y.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        let { isShown: n } = e;
                                        return (0, l.jsx)(P.A, {
                                            ...t,
                                            ref: F,
                                            active: n,
                                            "aria-label":
                                                null != y
                                                    ? f.intl.formatToPlainString(f.t.UQ53sj, { emojiName: y.name })
                                                    : void 0,
                                            className: td.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == y
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(O.A, {
                                                              className: td.Zg,
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
                                maxLength: Y.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: Z,
                                onChange: (t) => {
                                    T(t);
                                },
                                onKeyDown: (t) => {
                                    "Enter" === t.key && (t.preventDefault(), t.shiftKey || te());
                                },
                                className: td.hF,
                                inputRef: I,
                                id: tl,
                            }),
                            (x.length > 0 || null != y) &&
                                (0, l.jsx)(D.D, {
                                    "aria-label": f.intl.string(f.t.wfYTHe),
                                    className: td.mt,
                                    onClick: () => {
                                        T(""), A(null);
                                    },
                                    children: (0, l.jsx)(N.a, { size: "md", color: "currentColor", className: td.hj }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(c.A, { children: f.intl.formatToPlainString(f.t.IKBvFl, { placeholder: X ?? "" }) }),
                ],
            }),
        ],
    });
}
