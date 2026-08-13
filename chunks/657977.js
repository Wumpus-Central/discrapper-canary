n.d(e, { default: () => tf });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(14877),
    o = n(189213),
    u = n(17928),
    d = n(843282);
n(321073);
var h = n(132500),
    c = n(668639),
    g = n(259678),
    m = n(140735),
    p = n(834730),
    f = n(826745),
    x = n(375708),
    T = n(790634),
    y = n(498740),
    A = n(15328);
let S = (0, h.A)(),
    v = (0, h.A)(),
    j = (0, h.A)();
class w extends r.Component {
    static contextType = c.cK;
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
            null != n ? l.push(S) : (null != t && l.push(j), null != e && l.push(v)),
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
                className: a()(T.Ru, { [T.hz]: this.hasError() }),
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
            : (0, l.jsx)("div", { className: a()(T.Ru, { [T.hz]: t < 0 }), "aria-hidden": "true", children: t });
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
            l = this.getIsOverflowing() ? x.intl.formatToPlainString(x.t.ICT5S6, { maxLength: e }) : null,
            r = this.getIsUnderflowing() ? x.intl.formatToPlainString(x.t["62rk1K"], { minLength: n }) : null;
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
            : (0, l.jsx)(p.E, {
                  id: S,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: T.gJ,
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
                className: h,
                id: c,
                rows: p,
                flex: S,
                autosize: w,
                required: N,
                onInvalid: D,
                inputRef: O,
            } = this.props,
            C = w ? f.y : "textarea",
            E = this.hasError(),
            P = this.props["aria-labelledby"] ?? this.context?.titleId,
            b = this.getAriaDescribedBy();
        return (0, l.jsxs)("div", {
            className: a()(y.I6, { [T.Uu]: S }),
            children: [
                (0, l.jsxs)("div", {
                    className: a()(T.b4, { [T.Uu]: S }),
                    children: [
                        (0, l.jsx)(g.vN, {
                            children: (0, l.jsx)(C, {
                                type: "text",
                                className: a()(y.hF, T.Tg, A.qD, h, { [y.z3]: E, [y.r9]: t, [T.Xl]: d }),
                                "aria-labelledby": P,
                                "aria-describedby": b,
                                "aria-invalid": E,
                                style: { paddingRight: this.getPaddingRight() },
                                id: c,
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
                                rows: p,
                                ref: O,
                            }),
                        }),
                        null != i &&
                            (0, l.jsx)(m.A, { id: v, children: x.intl.format(x.t["bmQU//"], { minLength: i }) }),
                        null != s &&
                            (0, l.jsx)(m.A, { id: j, children: x.intl.format(x.t["+DFxLc"], { maxLength: s }) }),
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
var N = n(922016),
    D = n(939249),
    O = n(285796),
    C = n(565645),
    E = n(765671),
    P = n(964486),
    b = n(793574),
    R = n(688810),
    U = n(375499),
    M = n(267889),
    _ = n(287809),
    I = n(174459),
    L = n(989349),
    k = n.n(L),
    H = n(885386),
    Y = n(284009),
    F = n.n(Y),
    $ = n(927813),
    z = n(403918),
    B = n(652215);
let K = [z.yt.MINUTES_30, z.yt.HOURS_1, z.yt.HOURS_4];
var q = n(58703),
    G = n(403362);
function J(t) {
    let e = Date.now() + t;
    return (0, q.ro)(new Date(), new Date(e))
        ? x.intl.formatToPlainString(x.t["+3jw2j"], { time: x.intl.data.formatTime(e, { format: "short" }) })
        : x.intl.formatToPlainString(x.t["/Avy4C"], { time: x.intl.data.formatTime(e, { format: "short" }) });
}
function V(t) {
    switch (t) {
        case z.yt.TODAY:
            return J($.A.Millis.DAY);
        case z.yt.HOURS_4:
            return J(4 * $.A.Millis.HOUR);
        case z.yt.HOURS_1:
            return J(+$.A.Millis.HOUR);
        case z.yt.MINUTES_30:
            return J(30 * $.A.Millis.MINUTE);
        case z.yt.DONT_CLEAR:
            return x.intl.string(x.t.bRn8cq);
        default:
            (0, G.xb)(t);
    }
}
function X(t) {
    let e = Date.now() + t;
    return (0, q.ro)(new Date(), new Date(e))
        ? x.intl.data.formatTime(e, { format: "short" })
        : x.intl.formatToPlainString(x.t.DN91Jz, { time: x.intl.data.formatTime(e, { format: "short" }) });
}
var Z = n(685396),
    Q = n(231723),
    W = n(480335),
    tt = n(208971),
    te = n(999291),
    tn = n(718019),
    tl = n(413492),
    tr = n(915614),
    ti = n(946356),
    ta = n(465829),
    ts = n(983495),
    to = n(562153),
    tu = n(996988),
    td = n(985253),
    th = n(344580);
function tc(t) {
    let { user: e, previewText: n, previewEmoji: r, previewStatus: i, placeHolderText: a, transitionState: s } = t,
        o = (0, te.Ay)(e.id),
        u = (0, tt.G)(n),
        d =
            (null != n && "" !== n) || null != r
                ? x.intl.formatToPlainString(x.t.SMkS7x, { emoji: r?.name ?? "", text: u })
                : x.intl.formatToPlainString(x.t.IKBvFl, { placeholder: a ?? "" });
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": d,
        children: (0, l.jsxs)(ti.A, {
            user: e,
            displayProfile: o,
            themeType: tu.d.POPOUT,
            className: th.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(tr.A, { user: e, displayProfile: o, themeType: tu.d.POPOUT }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(tn.A, {
                                user: e,
                                displayProfile: o,
                                avatarSize: td.T[tu.d.POPOUT].avatarSize,
                                previewStatus: i,
                                className: th.my,
                            }),
                        }),
                        (0, l.jsx)(ts.A, {
                            user: e,
                            themeType: tu.d.POPOUT,
                            previewText: n,
                            previewEmoji: r,
                            placeholderText: a,
                            hasEntered: s === Q.ip.ENTERED,
                        }),
                    ],
                }),
                o?.profileEffect != null && (0, l.jsx)(W.A, { skuId: o.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: th.QV,
                    inert: !0,
                    children: (0, l.jsx)(ta.Ay, {
                        user: e,
                        displayName: to.Ay.getName(null, null, e),
                        pronouns: o?.pronouns,
                        trailing: (0, l.jsx)(tl.A, { displayProfile: o, themeType: tu.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
var tg = n(307731),
    tm = n(180259);
let tp = "CLEAR_AFTER";
function tf(t) {
    let { transitionState: e, onClose: n, sourceAnalyticsLocations: i = [], prompt: h = null } = t,
        { analyticsLocations: c } = (0, R.Ay)(i, b.A.CUSTOM_STATUS_MODAL),
        g = (0, u.bG)([_.default], () => _.default.getCurrentUser() ?? null),
        m = (0, Z.K)(),
        [f, T] = r.useState(m?.state ?? ""),
        [y, A] = r.useState(m?.emoji ?? null),
        [S, v] = r.useState(
            (function () {
                let t = H.G2.getSetting();
                if (null == t || "" === t.expiresAtMs) return z.yt.TODAY;
                let e = Number(t.expiresAtMs);
                if (isNaN(e)) return z.yt.TODAY;
                if (0 === e) return z.yt.DONT_CLEAR;
                let n = new Date(),
                    l = new Date(e);
                if (n.getFullYear() !== l.getFullYear() || n.getMonth() !== l.getMonth() || n.getDate() !== l.getDate())
                    return z.yt.TODAY;
                let r = Number(e) - Date.now();
                return K.find((t) => r <= t) ?? z.yt.TODAY;
            })(),
        ),
        j = r.useRef(null),
        L = r.useRef(null),
        Y = r.useRef(null),
        q = null != h ? h.label() : x.intl.string(x.t.xod367),
        [J, Q] = r.useState(q),
        { ref: W, width: tt } = (0, E.Ay)(q);
    function te() {
        S !== tp &&
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
                if (!(o.length > 0) && null == n) return H.G2.updateSetting(void 0);
                H.G2.updateSetting({
                    text: o.length > 0 ? o : "",
                    expiresAtMs:
                        null != l && l !== z.yt.DONT_CLEAR
                            ? String(
                                  k()()
                                      .add(
                                          l === z.yt.TODAY
                                              ? $.A.Millis.DAY
                                              : (F()("number" == typeof l, "Invalid custom status clear timeout"), l),
                                          "ms",
                                      )
                                      .toDate()
                                      .getTime(),
                              )
                            : "0",
                    emojiId: null != n && null != n.id ? n.id : "0",
                    emojiName: null != n ? n.name : "",
                    createdAtMs: String(i ?? k()().toDate().getTime()),
                }),
                    I.default.track(B.HAw.CUSTOM_STATUS_UPDATED, {
                        location: null != r ? r.location : null,
                        emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
                        text_len: o.length,
                        clear_after: null != l ? `${l}` : null,
                        prompt_type: a?.value,
                        location_stack: s,
                    });
            })({ text: f, emojiInfo: y, clearAfter: S, prompt: h, analyticsLocations: c }),
            n());
    }
    r.useEffect(() => {
        let t = Y.current;
        if (null == tt || null == t) return;
        let e = tt - 78;
        t.textContent = q;
        let n = t.getBoundingClientRect().width;
        if (n <= e) Q(q);
        else {
            let t = n / q.length,
                l = Math.floor((e - 3 * t) / t);
            Q(`${q.substring(0, l)}...`);
        }
    }, [tt, q]),
        r.useEffect(() => {
            I.default.track(B.HAw.OPEN_MODAL, { type: b.A.CUSTOM_STATUS_MODAL, location_stack: c });
        }, [c]),
        (0, P.Ay)(() => {
            j.current?.focus(), j.current?.setSelection(f.length, f.length);
        }),
        (0, s.$)({ currentLength: f.length, maxLength: z.hp, message: x.intl.string(x.t.c2Jqed) });
    let tn = x.intl.string(x.t.rp0ahn),
        tl = "custom-status-input";
    return (0, l.jsxs)(o.Modal, {
        title: x.intl.string(x.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: tm.l3,
            children: (0, l.jsx)(d.Te, {
                "aria-label": x.intl.formatToPlainString(x.t.NFJUPa, {
                    value: S === tp ? x.intl.string(x.t.E45wvP) : V(S),
                }),
                maxVisibleItems: z.SX.length + 1,
                value: S,
                options: [
                    { value: tp, key: tp, label: x.intl.string(x.t.E45wvP), disabled: !0 },
                    ...z.SX.map((t) => ({ value: t, key: t, label: V(t) })),
                ],
                onChange: (t) => v(t),
                optionClassName: tm.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: r } = t;
                    return (0, l.jsx)("span", {
                        className: a()(tm.j3, r ? tm.r9 : void 0),
                        children:
                            e === tp
                                ? n
                                : (function (t) {
                                      switch (t) {
                                          case z.yt.TODAY:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 24 })} (${X($.A.Millis.DAY)})`;
                                          case z.yt.HOURS_4:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 4 })} (${X(4 * $.A.Millis.HOUR)})`;
                                          case z.yt.HOURS_1:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 1 })} (${X($.A.Millis.HOUR)})`;
                                          case z.yt.MINUTES_30:
                                              return `${x.intl.formatToPlainString(x.t.TS3eJb, { minutes: 30 })} (${X(30 * $.A.Millis.MINUTE)})`;
                                          case z.yt.DONT_CLEAR:
                                              return x.intl.string(x.t.bRn8cq);
                                          default:
                                              (0, G.xb)(t);
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
        actions: [{ text: x.intl.string(x.t["R3BPH+"]), variant: "primary", onClick: te }],
        children: [
            null != g &&
                (0, l.jsx)("div", {
                    className: tm.q5,
                    children: (0, l.jsx)(tc, {
                        user: g,
                        previewText: f,
                        previewEmoji: y,
                        placeHolderText: q,
                        transitionState: e,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: tm.eH,
                children: [
                    (0, l.jsx)(p.E, {
                        tag: "label",
                        htmlFor: tl,
                        variant: "heading-md/semibold",
                        className: tm.wW,
                        children: tn,
                    }),
                    (0, l.jsxs)("div", {
                        className: tm.Kf,
                        ref: W,
                        children: [
                            (0, l.jsx)("span", { ref: Y, className: tm._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: tm.S0,
                                children: (0, l.jsx)(N.Y, {
                                    targetElementRef: L,
                                    renderPopout: function (t) {
                                        let { closePopout: e } = t;
                                        return (0, l.jsx)(M.A, {
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
                                            pickerIntention: tg.EmojiIntention.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: N.Y.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        let { isShown: n } = e;
                                        return (0, l.jsx)(U.A, {
                                            ...t,
                                            ref: L,
                                            active: n,
                                            "aria-label":
                                                null != y
                                                    ? x.intl.formatToPlainString(x.t["urEr+I"], {
                                                          currentValue: y.name,
                                                      })
                                                    : x.intl.string(x.t.psHnw8),
                                            className: tm.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == y
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(C.A, {
                                                              className: tm.Zg,
                                                              emojiId: y.id,
                                                              emojiName: y.name,
                                                              animated: !!y.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, l.jsx)(w, {
                                autosize: !0,
                                value: f,
                                maxLength: z.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: J,
                                onChange: function (t) {
                                    T(t);
                                },
                                onKeyDown: function (t) {
                                    "Enter" === t.key && (t.preventDefault(), t.shiftKey || te());
                                },
                                className: tm.hF,
                                inputRef: j,
                                id: tl,
                            }),
                            (f.length > 0 || null != y) &&
                                (0, l.jsx)(D.D, {
                                    "aria-label": x.intl.string(x.t.wfYTHe),
                                    className: tm.mt,
                                    onClick: function () {
                                        T(""), A(null);
                                    },
                                    children: (0, l.jsx)(O.a, { size: "md", color: "currentColor", className: tm.hj }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
