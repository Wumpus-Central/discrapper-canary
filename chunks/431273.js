n.d(e, { default: () => tx });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(14877),
    o = n(855986),
    u = n(843282),
    d = n(189213);
n(321073);
var h = n(115560),
    c = n(668639),
    g = n(559106),
    m = n(140735),
    p = n(834730),
    f = n(826745),
    x = n(792996),
    T = n(218117),
    y = n(151167),
    A = n(969490);
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
        (super(t), (this.state = { dirty: t.defaultDirty ?? !1 }));
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
        return (e && (n += `${t} / `.length), 7.23 * n + 10);
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
                  variant: "body-xs/normal",
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
                required: D,
                onInvalid: N,
                inputRef: O,
            } = this.props,
            C = w ? f.y : "textarea",
            b = this.hasError(),
            E = this.props["aria-labelledby"] ?? this.context?.titleId,
            P = this.getAriaDescribedBy();
        return (0, l.jsxs)("div", {
            className: a()(y.I6, { [T.Uu]: S }),
            children: [
                (0, l.jsxs)("div", {
                    className: a()(T.b4, { [T.Uu]: S }),
                    children: [
                        (0, l.jsx)(g.vN, {
                            children: (0, l.jsx)(C, {
                                type: "text",
                                className: a()(y.hF, T.Tg, A.qD, h, { [y.z3]: b, [y.r9]: t, [T.Xl]: d }),
                                "aria-labelledby": E,
                                "aria-describedby": P,
                                "aria-invalid": b,
                                style: { paddingRight: this.getPaddingRight() },
                                id: c,
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
        (e?.(t.currentTarget.value, n), this.setState({ dirty: !0 }));
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
var D = n(265872),
    N = n(939249),
    O = n(285796),
    C = n(565645),
    b = n(765671),
    E = n(964486),
    P = n(793574),
    R = n(688810),
    U = n(375499),
    M = n(920134),
    _ = n(287809),
    I = n(129230),
    L = n(536637),
    k = n.n(L),
    H = n(253932),
    F = n(284009),
    Y = n.n(F),
    $ = n(403918);
function z(t) {
    if (t !== $.yt.TODAY) return (Y()("number" == typeof t, "Invalid custom status clear timeout"), t);
    {
        let t = new Date(),
            e = new Date(t);
        return (e.setDate(t.getDate() + 1), e.getTime() - t.getTime());
    }
}
var B = n(652215);
let K = [$.yt.MINUTES_30, $.yt.HOURS_1, $.yt.HOURS_4];
var q = n(5377),
    G = n(927813),
    J = n(403362);
function X(t) {
    let e = Date.now() + t;
    return (0, q.ro)(new Date(), new Date(e))
        ? x.intl.formatToPlainString(x.t["+3jw2j"], { time: x.intl.data.formatTime(e, { format: "short" }) })
        : x.intl.formatToPlainString(x.t["/Avy4C"], { time: x.intl.data.formatTime(e, { format: "short" }) });
}
function V(t) {
    switch (t) {
        case $.yt.TODAY:
            return X(z($.yt.TODAY));
        case $.yt.HOURS_4:
            return X(4 * G.A.Millis.HOUR);
        case $.yt.HOURS_1:
            return X(+G.A.Millis.HOUR);
        case $.yt.MINUTES_30:
            return X(30 * G.A.Millis.MINUTE);
        case $.yt.DONT_CLEAR:
            return x.intl.string(x.t.bRn8cq);
        default:
            (0, J.xb)(t);
    }
}
function Z(t) {
    let e = Date.now() + t;
    return (0, q.ro)(new Date(), new Date(e))
        ? x.intl.data.formatTime(e, { format: "short" })
        : x.intl.formatToPlainString(x.t.DN91Jz, { time: x.intl.data.formatTime(e, { format: "short" }) });
}
var Q = n(685396),
    W = n(231723),
    tt = n(971217),
    te = n(208971),
    tn = n(527212),
    tl = n(718019),
    tr = n(567556),
    ti = n(915614),
    ta = n(946356),
    ts = n(465829),
    to = n(680581),
    tu = n(562153),
    td = n(996988),
    th = n(207634),
    tc = n(356365);
function tg(t) {
    let { user: e, previewText: n, previewEmoji: r, previewStatus: i, placeHolderText: a, transitionState: s } = t,
        o = (0, tn.Ay)(e.id),
        u = (0, te.G)(n),
        d =
            (null != n && "" !== n) || null != r
                ? x.intl.formatToPlainString(x.t.SMkS7x, { emoji: r?.name ?? "", text: u })
                : x.intl.formatToPlainString(x.t.IKBvFl, { placeholder: a ?? "" });
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": d,
        children: (0, l.jsxs)(ta.A, {
            user: e,
            displayProfile: o,
            themeType: td.d.POPOUT,
            className: tc.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(ti.A, { user: e, displayProfile: o, themeType: td.d.POPOUT }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(tl.A, {
                                user: e,
                                displayProfile: o,
                                avatarSize: th.T[td.d.POPOUT].avatarSize,
                                previewStatus: i,
                                className: tc.my,
                            }),
                        }),
                        (0, l.jsx)(to.A, {
                            user: e,
                            themeType: td.d.POPOUT,
                            previewText: n,
                            previewEmoji: r,
                            placeholderText: a,
                            hasEntered: s === W.ip.ENTERED,
                        }),
                    ],
                }),
                o?.profileEffect != null && (0, l.jsx)(tt.A, { skuId: o.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: tc.QV,
                    inert: !0,
                    children: (0, l.jsx)(ts.Ay, {
                        user: e,
                        displayName: tu.Ay.getName(null, null, e),
                        pronouns: o?.pronouns,
                        trailing: (0, l.jsx)(tr.A, { displayProfile: o, themeType: td.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
var tm = n(307731),
    tp = n(68450);
let tf = "CLEAR_AFTER";
function tx(t) {
    let { transitionState: e, onClose: n, returnRef: i, sourceAnalyticsLocations: h = [], prompt: c = null } = t,
        { analyticsLocations: g } = (0, R.Ay)(h, P.A.CUSTOM_STATUS_MODAL),
        m = (0, o.bG)([_.default], () => _.default.getCurrentUser() ?? null),
        f = (0, Q.K)(),
        [T, y] = r.useState(f?.state ?? ""),
        [A, S] = r.useState(f?.emoji ?? null),
        [v, j] = r.useState(
            (function () {
                let t = H.G2.getSetting();
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
        L = r.useRef(null),
        F = r.useRef(null),
        Y = r.useRef(null),
        q = null != c ? c.label() : x.intl.string(x.t.xod367),
        [X, W] = r.useState(q),
        { ref: tt, width: te } = (0, b.Ay)(q);
    function tn() {
        v !== tf &&
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
                (H.G2.updateSetting({
                    text: o.length > 0 ? o : "",
                    expiresAtMs:
                        null != l && l !== $.yt.DONT_CLEAR ? String(k()().add(z(l), "ms").toDate().getTime()) : "0",
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
                    }));
            })({ text: T, emojiInfo: A, clearAfter: v, prompt: c, analyticsLocations: g }),
            n());
    }
    (r.useEffect(() => {
        let t = Y.current;
        if (null == te || null == t) return;
        let e = te - 78;
        t.textContent = q;
        let n = t.getBoundingClientRect().width;
        if (n <= e) W(q);
        else {
            let t = n / q.length,
                l = Math.floor((e - 3 * t) / t);
            W(`${q.substring(0, l)}...`);
        }
    }, [te, q]),
        r.useEffect(() => {
            I.default.track(B.HAw.OPEN_MODAL, { type: P.A.CUSTOM_STATUS_MODAL, location_stack: g });
        }, [g]),
        (0, E.Ay)(() => {
            (L.current?.focus(), L.current?.setSelection(T.length, T.length));
        }),
        (0, s.$)({ currentLength: T.length, maxLength: 128, message: x.intl.string(x.t.c2Jqed) }));
    let tl = x.intl.string(x.t.rp0ahn),
        tr = "custom-status-input";
    return (0, l.jsxs)(d.a, {
        title: x.intl.string(x.t.Zx4jzN),
        returnRef: i,
        actionBarInput: (0, l.jsx)("div", {
            className: tp.l3,
            children: (0, l.jsx)(u.Te, {
                "aria-label": x.intl.formatToPlainString(x.t.NFJUPa, {
                    value: v === tf ? x.intl.string(x.t.E45wvP) : V(v),
                }),
                maxVisibleItems: $.SX.length + 1,
                value: v,
                options: [
                    { value: tf, key: tf, label: x.intl.string(x.t.E45wvP), disabled: !0 },
                    ...$.SX.map((t) => ({ value: t, key: t, label: V(t) })),
                ],
                onChange: (t) => j(t),
                optionClassName: tp.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: r } = t;
                    return (0, l.jsx)("span", {
                        className: a()(tp.j3, r ? tp.r9 : void 0),
                        children:
                            e === tf
                                ? n
                                : (function (t) {
                                      switch (t) {
                                          case $.yt.TODAY:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 24 })} (${Z(z($.yt.TODAY))})`;
                                          case $.yt.HOURS_4:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 4 })} (${Z(4 * G.A.Millis.HOUR)})`;
                                          case $.yt.HOURS_1:
                                              return `${x.intl.formatToPlainString(x.t.Rea2gR, { hours: 1 })} (${Z(G.A.Millis.HOUR)})`;
                                          case $.yt.MINUTES_30:
                                              return `${x.intl.formatToPlainString(x.t.TS3eJb, { minutes: 30 })} (${Z(30 * G.A.Millis.MINUTE)})`;
                                          case $.yt.DONT_CLEAR:
                                              return x.intl.string(x.t.bRn8cq);
                                          default:
                                              (0, J.xb)(t);
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
        actions: [{ text: x.intl.string(x.t["R3BPH+"]), variant: "primary", onClick: tn }],
        children: [
            null != m &&
                (0, l.jsx)("div", {
                    className: tp.q5,
                    children: (0, l.jsx)(tg, {
                        user: m,
                        previewText: T,
                        previewEmoji: A,
                        placeHolderText: q,
                        transitionState: e,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: tp.eH,
                children: [
                    (0, l.jsx)(p.E, {
                        tag: "label",
                        htmlFor: tr,
                        variant: "heading-sm/semibold",
                        className: tp.wW,
                        children: tl,
                    }),
                    (0, l.jsxs)("div", {
                        className: tp.Kf,
                        ref: tt,
                        children: [
                            (0, l.jsx)("span", { ref: Y, className: tp._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: tp.S0,
                                children: (0, l.jsx)(D.Y, {
                                    targetElementRef: F,
                                    renderPopout: function (t) {
                                        let { closePopout: e } = t;
                                        return (0, l.jsx)(M.A, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                let { emoji: n, willClose: l } = t;
                                                (null == n ||
                                                    S(
                                                        null != n.id
                                                            ? { id: n.id, name: n.name, animated: n.animated }
                                                            : {
                                                                  id: null,
                                                                  name: n.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    l && e());
                                            },
                                            pickerIntention: tm.EmojiIntention.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: D.Y.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        let { isShown: n } = e;
                                        return (0, l.jsx)(U.A, {
                                            ...t,
                                            ref: F,
                                            active: n,
                                            "aria-label":
                                                null != A
                                                    ? x.intl.formatToPlainString(x.t["urEr+I"], {
                                                          currentValue: A.name,
                                                      })
                                                    : x.intl.string(x.t.psHnw8),
                                            className: tp.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == A
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(C.A, {
                                                              className: tp.Zg,
                                                              emojiId: A.id,
                                                              emojiName: A.name,
                                                              animated: !!A.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, l.jsx)(w, {
                                autosize: !0,
                                value: T,
                                maxLength: 128,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: X,
                                onChange: function (t) {
                                    y(t);
                                },
                                onKeyDown: function (t) {
                                    "Enter" === t.key && (t.preventDefault(), t.shiftKey || tn());
                                },
                                className: tp.hF,
                                inputRef: L,
                                id: tr,
                            }),
                            (T.length > 0 || null != A) &&
                                (0, l.jsx)(N.D, {
                                    "aria-label": x.intl.string(x.t.wfYTHe),
                                    className: tp.mt,
                                    onClick: function () {
                                        (y(""), S(null));
                                    },
                                    children: (0, l.jsx)(O.CircleXIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: tp.hj,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
