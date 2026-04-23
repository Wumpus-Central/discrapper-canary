l.d(t, { default: () => eA });
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(189213),
    u = l(17928),
    o = l(843282);
l(321073);
var d = l(132500),
    c = l(187322),
    A = l(140735),
    _ = l(504345),
    T = l(834730),
    h = l(826745),
    g = l(985018),
    E = l(792034),
    O = l(482188),
    m = l(429128);
let N = (0, d.A)(),
    S = (0, d.A)(),
    p = (0, d.A)();
class I extends i.Component {
    static contextType = _.cK;
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
    constructor(e) {
        super(e), (this.state = { dirty: e.defaultDirty ?? !1 });
    }
    getAriaDescribedBy = () => {
        let { maxLength: e, minLength: t, error: l } = this.props,
            n = [],
            i = this.context?.errorId;
        return (
            null != i && n.push(i),
            null != l ? n.push(N) : (null != e && n.push(p), null != t && n.push(S)),
            n.length > 0 ? n.join(" ") : void 0
        );
    };
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return 10;
        let l = `${e}`.length;
        return t && (l += `${e} / `.length), 7.23 * l + 10;
    }
    getCharsLeftLength() {
        let { maxLength: e, value: t } = this.props;
        return null == e ? null : e - (null != t ? t.length : 0);
    }
    getIsOverflowing() {
        let e = this.getCharsLeftLength();
        return null != e && e < 0;
    }
    getIsUnderflowing() {
        let { minLength: e, value: t } = this.props;
        return null != e && (null != t ? t.length : 0) < e;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            let { value: e, maxLength: t } = this.props;
            return (0, n.jsxs)("div", {
                className: a()(E.Ru, { [E.hz]: this.hasError() }),
                "aria-hidden": "true",
                children: [e?.length ?? 0, " ", null != t && `/ ${t}`],
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, n.jsx)("div", { className: a()(E.Ru, { [E.hz]: e < 0 }), "aria-hidden": "true", children: e });
    }
    hasError() {
        return (
            null != this.props.error ||
            null != this.context.error ||
            (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1))
        );
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: l } = this.props,
            n = this.getIsOverflowing() ? g.intl.formatToPlainString(g.t.ICT5S6, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? g.intl.formatToPlainString(g.t["62rk1K"], { minLength: l }) : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : (n ?? i);
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, n.jsx)(T.E, {
                  id: N,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: E.gJ,
                  children: e,
              });
    }
    render() {
        let {
                disabled: e,
                value: t,
                placeholder: l,
                autoFocus: i,
                minLength: r,
                maxLength: s,
                allowOverflow: u,
                spellCheck: o,
                resizeable: d,
                className: _,
                id: T,
                rows: N,
                flex: I,
                autosize: b,
                required: D,
                onInvalid: f,
                inputRef: R,
            } = this.props,
            v = b ? h.y : "textarea",
            C = this.hasError(),
            x = this.props["aria-labelledby"] ?? this.context?.titleId,
            M = this.getAriaDescribedBy();
        return (0, n.jsxs)("div", {
            className: a()(O.I6, { [E.Uu]: I }),
            children: [
                (0, n.jsxs)("div", {
                    className: a()(E.b4, { [E.Uu]: I }),
                    children: [
                        (0, n.jsx)(c.vN, {
                            children: (0, n.jsx)(v, {
                                type: "text",
                                className: a()(O.hF, E.Tg, m.qD, _, { [O.z3]: C, [O.r9]: e, [E.Xl]: d }),
                                "aria-labelledby": x,
                                "aria-describedby": M,
                                "aria-invalid": C,
                                style: { paddingRight: this.getPaddingRight() },
                                id: T,
                                disabled: e,
                                placeholder: l,
                                value: t,
                                autoFocus: i,
                                minLength: r,
                                maxLength: u ? void 0 : s,
                                spellCheck: o,
                                required: D,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: f,
                                rows: N,
                                ref: R,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(A.A, { id: S, children: g.intl.format(g.t["bmQU//"], { minLength: r }) }),
                        null != s &&
                            (0, n.jsx)(A.A, { id: p, children: g.intl.format(g.t["+DFxLc"], { maxLength: s }) }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    onChange = (e) => {
        let { onChange: t, name: l } = this.props;
        t?.(e.currentTarget.value, l), this.setState({ dirty: !0 });
    };
    onFocus = (e) => {
        let { onFocus: t, name: l } = this.props;
        t?.(e, l);
    };
    onBlur = (e) => {
        let { onBlur: t, name: l } = this.props;
        t?.(e, l);
    };
    onKeyDown = (e) => {
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
}
var b = l(922016),
    D = l(939249),
    f = l(285796),
    R = l(565645),
    v = l(765671),
    C = l(964486),
    x = l(793574),
    M = l(688810),
    y = l(375499),
    U = l(267889),
    L = l(287809),
    j = l(954571),
    H = l(989349),
    P = l.n(H),
    w = l(253932),
    G = l(284009),
    Y = l.n(G),
    F = l(403918),
    V = l(652215);
let B = [F.yt.MINUTES_30, F.yt.HOURS_1, F.yt.HOURS_4];
var k = l(58703),
    K = l(927813),
    W = l(403362);
let z = (e) => {
        let t = Date.now() + e;
        return (0, k.ro)(new Date(), new Date(t))
            ? g.intl.formatToPlainString(g.t["+3jw2j"], { time: g.intl.data.formatTime(t, { format: "short" }) })
            : g.intl.formatToPlainString(g.t["/Avy4C"], { time: g.intl.data.formatTime(t, { format: "short" }) });
    },
    $ = (e) => {
        let t = Date.now() + e;
        return (0, k.ro)(new Date(), new Date(t))
            ? g.intl.data.formatTime(t, { format: "short" })
            : g.intl.formatToPlainString(g.t.DN91Jz, { time: g.intl.data.formatTime(t, { format: "short" }) });
    };
var J = l(685396),
    q = l(231723),
    X = l(480335),
    Z = l(999291),
    Q = l(718019),
    ee = l(694720),
    et = l(915614),
    el = l(946356),
    en = l(878555),
    ei = l(983495),
    er = l(562153),
    ea = l(996988),
    es = l(823788);
function eu(e) {
    let { user: t, previewText: l, previewEmoji: i, previewStatus: r, placeHolderText: a, transitionState: s } = e,
        u = (0, Z.Ay)(t.id),
        o =
            (null != l && "" !== l) || null != i
                ? g.intl.formatToPlainString(g.t.UpF5Qa, { emoji: i?.name ?? "", status: l })
                : `${g.intl.string(g.t.EVV6uZ)}: ${a}`;
    return (0, n.jsx)("div", {
        role: "img",
        "aria-label": o,
        children: (0, n.jsxs)(el.A, {
            user: t,
            displayProfile: u,
            themeType: ea.d.POPOUT,
            className: es.ti,
            "aria-hidden": "true",
            children: [
                (0, n.jsxs)("header", {
                    children: [
                        (0, n.jsx)(et.A, { user: t, displayProfile: u, themeType: ea.d.POPOUT }),
                        (0, n.jsx)("div", {
                            inert: !0,
                            children: (0, n.jsx)(Q.A, {
                                user: t,
                                displayProfile: u,
                                themeType: ea.d.POPOUT,
                                previewStatus: r,
                                className: es.my,
                            }),
                        }),
                        (0, n.jsx)(ei.A, {
                            user: t,
                            themeType: ea.d.POPOUT,
                            previewText: l,
                            previewEmoji: i,
                            placeholderText: a,
                            hasEntered: s === q.ip.ENTERED,
                        }),
                    ],
                }),
                u?.profileEffect != null && (0, n.jsx)(X.A, { skuId: u.profileEffect.skuId }),
                (0, n.jsx)("div", {
                    className: es.QV,
                    inert: !0,
                    children: (0, n.jsx)(en.Ay, {
                        user: t,
                        displayName: er.Ay.getName(null, null, t),
                        pronouns: u?.pronouns,
                        trailing: (0, n.jsx)(ee.A, { displayProfile: u, themeType: ea.d.POPOUT }),
                    }),
                }),
            ],
        }),
    });
}
var eo = l(307731),
    ed = l(320523);
let ec = "CLEAR_AFTER";
function eA(e) {
    let { transitionState: t, onClose: l, sourceAnalyticsLocations: r = [], prompt: d = null } = e,
        { analyticsLocations: c } = (0, M.Ay)(r, x.A.CUSTOM_STATUS_MODAL),
        _ = (0, u.bG)([L.default], () => L.default.getCurrentUser() ?? null),
        h = (0, J.K)(),
        [E, O] = i.useState(h?.state ?? ""),
        [m, N] = i.useState(h?.emoji ?? null),
        [S, p] = i.useState(
            (function () {
                let e = w.G2.getSetting();
                if (null == e || "" === e.expiresAtMs) return F.yt.TODAY;
                let t = Number(e.expiresAtMs);
                if (isNaN(t)) return F.yt.TODAY;
                if (0 === t) return F.yt.DONT_CLEAR;
                let l = new Date(),
                    n = new Date(t);
                if (l.getFullYear() !== n.getFullYear() || l.getMonth() !== n.getMonth() || l.getDate() !== n.getDate())
                    return F.yt.TODAY;
                let i = Number(t) - Date.now();
                return B.find((e) => i <= e) ?? F.yt.TODAY;
            })(),
        ),
        H = i.useRef(null),
        G = i.useRef(null),
        k = i.useRef(null),
        q = null != d ? d.label() : g.intl.string(g.t.xod367),
        [X, Z] = i.useState(q),
        { ref: Q, width: ee } = (0, v.Ay)(q);
    i.useEffect(() => {
        let e = k.current;
        if (null == ee || null == e) return;
        let t = ee - 78;
        e.textContent = q;
        let l = e.getBoundingClientRect().width;
        if (l <= t) Z(q);
        else {
            let e = l / q.length,
                n = Math.floor((t - 3 * e) / e);
            Z(`${q.substring(0, n)}...`);
        }
    }, [ee, q]),
        i.useEffect(() => {
            j.default.track(V.HAw.OPEN_MODAL, { type: x.A.CUSTOM_STATUS_MODAL, location_stack: c });
        }, [c]),
        (0, C.Ay)(() => {
            H.current?.focus(), H.current?.setSelection(E.length, E.length);
        });
    let et = () => {
            S !== ec &&
                (!(function (e) {
                    let {
                            text: t,
                            emojiInfo: l,
                            clearAfter: n,
                            analyticsContext: i,
                            createdAtMs: r,
                            prompt: a,
                            analyticsLocations: s,
                        } = e,
                        u = t.trim();
                    if (!(u.length > 0) && null == l) return w.G2.updateSetting(void 0);
                    w.G2.updateSetting({
                        text: u.length > 0 ? u : "",
                        expiresAtMs:
                            null != n && n !== F.yt.DONT_CLEAR
                                ? String(
                                      P()()
                                          .add(
                                              (function (e) {
                                                  if (e !== F.yt.TODAY)
                                                      return (
                                                          Y()(
                                                              "number" == typeof e,
                                                              "Invalid custom status clear timeout",
                                                          ),
                                                          e
                                                      );
                                                  {
                                                      let e = new Date();
                                                      return (
                                                          new Date(
                                                              e.getFullYear(),
                                                              e.getMonth(),
                                                              e.getDate() + 1,
                                                          ).getTime() - e.getTime()
                                                      );
                                                  }
                                              })(n),
                                              "ms",
                                          )
                                          .toDate()
                                          .getTime(),
                                  )
                                : "0",
                        emojiId: null != l && null != l.id ? l.id : "0",
                        emojiName: null != l ? l.name : "",
                        createdAtMs: String(r ?? P()().toDate().getTime()),
                    }),
                        j.default.track(V.HAw.CUSTOM_STATUS_UPDATED, {
                            location: null != i ? i.location : null,
                            emoji_type: null == l ? null : null != l.id ? "custom" : "unicode",
                            text_len: u.length,
                            clear_after: null != n ? `${n}` : null,
                            prompt_type: a?.value,
                            location_stack: s,
                        });
                })({ text: E, emojiInfo: m, clearAfter: S, prompt: d, analyticsLocations: c }),
                l());
        },
        el = g.intl.string(g.t.rp0ahn),
        en = "custom-status-input";
    return (0, n.jsxs)(s.Modal, {
        title: g.intl.string(g.t.Zx4jzN),
        actionBarInput: (0, n.jsx)("div", {
            className: ed.l3,
            children: (0, n.jsx)(o.Te, {
                maxVisibleItems: F.SX.length + 1,
                value: S,
                options: [
                    { value: ec, key: ec, label: g.intl.string(g.t.E45wvP), disabled: !0 },
                    ...F.SX.map((e) => ({
                        value: e,
                        key: e,
                        label: (function (e) {
                            switch (e) {
                                case F.yt.TODAY:
                                    return z(K.A.Millis.DAY);
                                case F.yt.HOURS_4:
                                    return z(4 * K.A.Millis.HOUR);
                                case F.yt.HOURS_1:
                                    return z(+K.A.Millis.HOUR);
                                case F.yt.MINUTES_30:
                                    return z(30 * K.A.Millis.MINUTE);
                                case F.yt.DONT_CLEAR:
                                    return g.intl.string(g.t.bRn8cq);
                                default:
                                    (0, W.xb)(e);
                            }
                        })(e),
                    })),
                ],
                onChange: (e) => p(e),
                optionClassName: ed.Pl,
                renderOptionLabel: (e) => {
                    let { value: t, label: l, disabled: i } = e;
                    return (0, n.jsx)("span", {
                        className: a()(ed.j3, i ? ed.r9 : void 0),
                        children:
                            t === ec
                                ? l
                                : (function (e) {
                                      switch (e) {
                                          case F.yt.TODAY:
                                              return `${g.intl.formatToPlainString(g.t.Rea2gR, { hours: 24 })} (${$(K.A.Millis.DAY)})`;
                                          case F.yt.HOURS_4:
                                              return `${g.intl.formatToPlainString(g.t.Rea2gR, { hours: 4 })} (${$(4 * K.A.Millis.HOUR)})`;
                                          case F.yt.HOURS_1:
                                              return `${g.intl.formatToPlainString(g.t.Rea2gR, { hours: 1 })} (${$(K.A.Millis.HOUR)})`;
                                          case F.yt.MINUTES_30:
                                              return `${g.intl.formatToPlainString(g.t.TS3eJb, { minutes: 30 })} (${$(30 * K.A.Millis.MINUTE)})`;
                                          case F.yt.DONT_CLEAR:
                                              return g.intl.string(g.t.bRn8cq);
                                          default:
                                              (0, W.xb)(e);
                                      }
                                  })(t),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
                "data-migration-pending": !0,
            }),
        }),
        onClose: async () => {
            await l();
        },
        transitionState: t,
        actions: [{ text: g.intl.string(g.t["R3BPH+"]), variant: "primary", onClick: et }],
        children: [
            null != _ &&
                (0, n.jsx)("div", {
                    className: ed.q5,
                    children: (0, n.jsx)(eu, {
                        user: _,
                        previewText: E,
                        previewEmoji: m,
                        placeHolderText: q,
                        transitionState: t,
                    }),
                }),
            (0, n.jsxs)("div", {
                className: ed.eH,
                children: [
                    (0, n.jsx)(T.E, {
                        tag: "label",
                        htmlFor: en,
                        variant: "heading-md/semibold",
                        className: ed.wW,
                        children: el,
                    }),
                    (0, n.jsxs)("div", {
                        className: ed.Kf,
                        ref: Q,
                        children: [
                            (0, n.jsx)("span", { ref: k, className: ed._D, "aria-hidden": "true" }),
                            (0, n.jsx)("div", {
                                className: ed.S0,
                                children: (0, n.jsx)(b.Y, {
                                    targetElementRef: G,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, n.jsx)(U.A, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                let { emoji: l, willClose: n } = e;
                                                null == l ||
                                                    N(
                                                        null != l.id
                                                            ? { id: l.id, name: l.name, animated: l.animated }
                                                            : {
                                                                  id: null,
                                                                  name: l.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    n && t();
                                            },
                                            pickerIntention: eo.EmojiIntention.STATUS,
                                            onNavigateAway: l,
                                        });
                                    },
                                    position: "left",
                                    animation: b.Y.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        let { isShown: l } = t;
                                        return (0, n.jsx)(y.A, {
                                            ...e,
                                            ref: G,
                                            active: l,
                                            className: ed.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == m
                                                    ? null
                                                    : () =>
                                                          (0, n.jsx)(R.A, {
                                                              className: ed.Zg,
                                                              emojiId: m.id,
                                                              emojiName: m.name,
                                                              animated: !!m.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, n.jsx)(I, {
                                autosize: !0,
                                value: E,
                                maxLength: F.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: X,
                                onChange: (e) => {
                                    O(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && (e.preventDefault(), e.shiftKey || et());
                                },
                                className: ed.hF,
                                inputRef: H,
                                id: en,
                            }),
                            (E.length > 0 || null != m) &&
                                (0, n.jsx)(D.D, {
                                    "aria-label": g.intl.string(g.t.wfYTHe),
                                    className: ed.mt,
                                    onClick: () => {
                                        O(""), N(null);
                                    },
                                    children: (0, n.jsx)(f.a, { size: "md", color: "currentColor", className: ed.hj }),
                                }),
                        ],
                    }),
                    (0, n.jsx)(A.A, { children: `${g.intl.string(g.t.EVV6uZ)}: ${q}` }),
                ],
            }),
        ],
    });
}
