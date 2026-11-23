n.d(t, { A: () => M });
var r = n(477900),
    l = n(582128),
    i = n(403581),
    u = n(448645),
    a = n(240248),
    o = n(183555),
    s = n(501925),
    c = n(83013),
    d = n(855986),
    g = n(81400),
    f = n(287809),
    b = n(84540),
    m = n(836602),
    v = n(290386),
    p = n(621466);
n(321073);
var h = n(503698),
    C = n.n(h),
    x = n(695366),
    I = n(738188),
    E = n(834730),
    A = n(939249),
    k = n(775602),
    w = n(792996),
    R = n(404760);
function j(e) {
    let { id: t, message: n, type: l } = e,
        i = "error" === l,
        u = i ? x.CircleErrorIcon : I.WarningIcon;
    return (0, r.jsxs)(E.E, {
        id: t,
        role: i ? "alert" : void 0,
        variant: "body-xs/normal",
        color: i ? "text-feedback-critical" : "text-feedback-warning",
        className: R.VP,
        children: [(0, r.jsx)(u, { size: "xs", color: "currentColor", className: i ? R.ik : R.QW }), n],
    });
}
function y(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: i,
            input: u,
            editButtonRef: a,
            editButtonAriaLabel: o,
            onStartEditing: s,
            previewErrorMessage: c,
            previewWarningMessage: d,
            className: g,
            wrapperRef: f,
            onBlur: b,
            onKeyDown: m,
        } = e,
        v = l.useRef(null),
        h = l.useId(),
        x = l.useId(),
        I = null == n,
        k = null != c,
        w = null != d && !k,
        y = k ? "error" : w ? "warning" : null,
        L = k ? c : d,
        N = null != y && null != L,
        P = [];
    (I && P.push(h), N && P.push(x));
    let _ = P.length > 0 ? P.join(" ") : void 0;
    function B() {
        let { activeElement: e } = v.current?.ownerDocument ?? document;
        ((0, p.vq)(e, HTMLElement) && e.blur(), s());
    }
    let D = (0, r.jsxs)("div", {
        ref: v,
        className: C()(R.LL, { [R.JD]: k, [R.xe]: w }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: B,
        children: [
            I
                ? (0, r.jsx)(E.E, {
                      id: h,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: R.qf,
                      children: i,
                  })
                : n,
            (0, r.jsx)(A.D, {
                innerRef: a,
                "aria-label": o,
                "aria-describedby": _,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), B());
                },
                focusProps: { ringTarget: v },
            }),
        ],
    });
    return (0, r.jsx)("div", {
        ref: f,
        className: C()(R.kL, g),
        onBlur: b,
        onKeyDown: m,
        children: (0, r.jsx)(
            "div",
            {
                children: t
                    ? u
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", { className: R.VH, children: D }),
                              N && (0, r.jsx)(j, { id: x, message: L, type: y }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var L = n(786826);
function N(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function P(e) {
    var t;
    let {
            isEditing: n,
            committedValue: l,
            editedValue: i,
            setEditedValue: u,
            editButtonRef: a,
            handleStartEditing: o,
            wrapperRef: s,
            onBlur: c,
            onContainerKeyDown: d,
            inputRef: g,
            onInputFocus: f,
            onInputKeyDown: b,
            preview: m,
            placeholder: v,
            editButtonAriaLabel: p,
            label: h,
            maxLength: C,
            emojiPickerIntention: x,
            error: I,
            warning: E,
            className: A,
        } = e,
        k =
            ((t = n ? i : l),
            (null != C && t.length > C ? w.intl.formatToPlainString(w.t.ICT5S6, { maxLength: C }) : void 0) ?? I);
    return (0, r.jsx)(y, {
        isEditing: n,
        preview: m,
        placeholder: v,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: o,
        className: A,
        wrapperRef: s,
        onBlur: c,
        onKeyDown: d,
        previewErrorMessage: k,
        previewWarningMessage: E,
        input: (0, r.jsx)(L.f, {
            editorRef: g,
            label: h,
            hideLabel: !0,
            value: n ? i : l,
            onChange: u,
            onFocus: f,
            onKeyDown: b,
            maxLength: C,
            error: k,
            helperText: E,
            placeholder: v,
            emojiPickerIntention: x,
        }),
    });
}
let _ = [
    { value: "HAIKU", label: () => w.intl.string(w.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => w.intl.string(w.t.CXkR1L) },
    { value: "TELL_US", label: () => w.intl.string(w.t.eutr4P) },
    { value: "FUN_FACT", label: () => w.intl.string(w.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => w.intl.string(w.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => w.intl.string(w.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => w.intl.string(w.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => w.intl.string(w.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => w.intl.string(w.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => w.intl.string(w.t.u7WCGI) },
];
var B = n(307731);
function D(e) {
    let t,
        n,
        i,
        o,
        c,
        { displayProfile: h, className: C } = e,
        x = (0, d.bG)([f.default], () => f.default.getCurrentUser()),
        I = h?.guildId != null,
        E = h?.guildId ?? null,
        A = u.Ay.canUsePremiumProfileCustomization(x),
        R = (0, v.U)({ location: "user_profile_modal_edit" }),
        {
            value: j,
            previewValue: y,
            onCommit: L,
        } = ((t = h?.guildId ?? null),
        (n = h?.guildId != null),
        (i = (0, d.bG)([m.A], () => m.A.getPendingChanges(t).pendingBio)),
        (o = n ? h?._guildMemberProfile?.bio : h?.bio),
        (c = h?.getPreviewBio(i) ?? void 0),
        {
            value: i ?? o ?? "",
            previewValue: c,
            onCommit: l.useCallback(
                (e) => {
                    (0, b.p)({ bio: e.trim(), guildId: h?.guildId ?? void 0 });
                },
                [h?.guildId],
            ),
        }),
        D = (function (e) {
            let {
                    isEditing: t,
                    wrapperRef: n,
                    handleCommit: r,
                    ...i
                } = (function (e) {
                    let { value: t, onCommit: n, disabled: r = !1 } = e,
                        [i, u] = l.useState("idle"),
                        [a, o] = l.useState(t),
                        s = "editing" === i && !r,
                        c = (0, d.bG)([k.Ay], () => k.Ay.useReducedMotion),
                        g = l.useRef(null),
                        f = l.useRef(null),
                        b = l.useRef(null),
                        m = l.useRef(!1),
                        v = l.useRef(!0),
                        p = l.useRef(!1),
                        h = l.useCallback(() => {
                            ((v.current = !1), o(t), u("editing"));
                        }, [t]),
                        C = l.useRef(a);
                    l.useLayoutEffect(() => {
                        C.current = a;
                    });
                    let x = l.useCallback(() => {
                            v.current || ((v.current = !0), n(C.current), u("done"));
                        }, [n]),
                        I = l.useCallback(() => {
                            v.current || ((v.current = !0), u("done"));
                        }, []);
                    (l.useEffect(() => {
                        "done" === i && (m.current && g.current?.focus({ preventScroll: !0 }), (m.current = !1));
                    }, [i]),
                        l.useEffect(() => {
                            let e = p.current;
                            ((p.current = !1),
                                s &&
                                    (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || b.current?.focus({ preventScroll: !0 })));
                        }, [s, c]));
                    let E = l.useCallback(
                            (e) => {
                                s &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (m.current = !0), I());
                            },
                            [s, I],
                        ),
                        A = l.useCallback(() => {
                            ((m.current = !0), x(), b.current?.blur());
                        }, [x]),
                        w = l.useCallback(() => {
                            ((m.current = !0), I(), b.current?.blur());
                        }, [I]),
                        R = l.useCallback(() => {
                            s || ((p.current = !0), h());
                        }, [s, h]);
                    return {
                        isEditing: s,
                        committedValue: t,
                        editedValue: a,
                        setEditedValue: o,
                        onCommit: n,
                        editButtonRef: g,
                        wrapperRef: f,
                        inputRef: b,
                        handleStartEditing: h,
                        handleCommit: x,
                        handleCancel: I,
                        onInputFocus: R,
                        onInputKeyDown: l.useCallback(
                            (e) => {
                                "Enter" !== e.key || e.shiftKey
                                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), w())
                                    : (e.preventDefault(), A());
                            },
                            [A, w],
                        ),
                        onContainerKeyDown: E,
                    };
                })(e),
                u = l.useCallback(
                    (e) =>
                        (function (e, t) {
                            if (t?.contains(e)) return !0;
                            let n = N(t),
                                r = n?.getAttribute("aria-controls");
                            return null != r && null != e.closest(`#${r}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, p.vq)(e.target) && !u(e.target) && r();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, u, r]);
            let a = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, p.vq)(l) || u(l) || (null == N(n.current) && r());
                },
                [t, u, r, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: r, ...i, onBlur: a };
        })({ value: j, onCommit: L }),
        T = !(0, a.uJ)(y),
        M = (0, d.bG)([m.A], () => m.A.getErrors(E)),
        S = (0, g.EC)(E),
        F = M.bio?.[0],
        V = S?.bio?.[0],
        W = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * _.length)), _[e]);
        }, []),
        J = I ? w.intl.string(w.t.yPJ9xr) : W.label();
    return !I || A
        ? (0, r.jsx)(P, {
              ...D,
              className: C,
              preview: T ? (0, r.jsx)(s.A, { userBio: y, setLineClamp: !1 }) : null,
              placeholder: J,
              editButtonAriaLabel: w.intl.string(w.t.lO3n7a),
              label: w.intl.string(w.t["YWo+Zd"]),
              emojiPickerIntention: B.EmojiIntention.PROFILE,
              maxLength: R,
              error: F,
              warning: V,
          })
        : T
          ? (0, r.jsx)(s.A, { userBio: y, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var T = n(430626);
function M(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: d } = (0, o.NJ)(),
        g = n?.bio,
        f = !(0, a.uJ)(g),
        b = n?.guildId != null,
        m = b && u.Ay.canUsePremiumProfileCustomization(t),
        v = m ? w.intl.string(w.t.jVai8N) : w.intl.string(w.t.ZzAR2Y),
        p = (0, u.TW)(t) ? w.intl.string(w.t["5AFxuK"]) : w.intl.string(w.t.N6ixy8),
        h = l && m ? { icon: i.NitroWheelIcon, tooltip: p } : void 0;
    return (l || f) && (!l || !b || f || m)
        ? (0, r.jsx)(c.A, {
              heading: v,
              hideHeading: !l,
              headingIcon: h,
              children: l
                  ? (0, r.jsx)(D, { displayProfile: n, className: T.u })
                  : (0, r.jsx)(s.A, { userBio: g, guildId: d?.guildId, setLineClamp: !1 }),
          })
        : null;
}
