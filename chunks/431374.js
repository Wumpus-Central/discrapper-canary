l.d(t, { default: () => H });
var a = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    s = l(189213),
    o = l(311907),
    u = l(843282),
    d = l(784599),
    _ = l(834730),
    c = l(265872),
    A = l(939249),
    T = l(285796),
    h = l(140735),
    g = l(565645),
    E = l(765671),
    p = l(964486),
    m = l(793574),
    O = l(688810),
    S = l(375499),
    N = l(937773),
    I = l(287809),
    f = l(954571),
    b = l(57990),
    D = l(569921),
    v = l(267859),
    R = l(334310),
    C = l(685396),
    x = l(16663),
    U = l(403918),
    y = l(652215),
    M = l(307731),
    L = l(985018),
    P = l(320523);
let j = "CLEAR_AFTER";
function H(e) {
    let { transitionState: t, onClose: l, sourceAnalyticsLocations: i = [], prompt: H = null } = e,
        { analyticsLocations: w } = (0, O.Ay)(i, m.A.CUSTOM_STATUS_MODAL),
        G = (0, o.bG)([I.default], () => I.default.getCurrentUser() ?? null),
        Y = (0, C.K)(),
        [F, V] = n.useState(Y?.state ?? ""),
        [B, k] = n.useState(Y?.emoji ?? null),
        [W, K] = n.useState((0, D.A)()),
        z = n.useRef(null),
        $ = n.useRef(null),
        J = n.useRef(null),
        q = null != H ? H.label() : L.intl.string(L.t.xod367),
        [Z, X] = n.useState(q),
        { ref: Q, width: ee } = (0, E.Ay)(q);
    n.useEffect(() => {
        let e = J.current;
        if (null == ee || null == e) return;
        let t = ee - 78;
        e.textContent = q;
        let l = e.getBoundingClientRect().width;
        if (l <= t) X(q);
        else {
            let e = l / q.length,
                a = Math.floor((t - 3 * e) / e);
            X(`${q.substring(0, a)}...`);
        }
    }, [ee, q]),
        n.useEffect(() => {
            f.default.track(y.HAw.OPEN_MODAL, { type: m.A.CUSTOM_STATUS_MODAL, location_stack: w });
        }, [w]),
        (0, p.Ay)(() => {
            z.current?.focus(), z.current?.setSelection(F.length, F.length);
        });
    let et = () => {
            W !== j && ((0, b.A)({ text: F, emojiInfo: B, clearAfter: W, prompt: H, analyticsLocations: w }), l());
        },
        el = L.intl.string(L.t.rp0ahn),
        ea = "custom-status-input";
    return (0, a.jsxs)(s.Modal, {
        title: L.intl.string(L.t.Zx4jzN),
        actionBarInput: (0, a.jsx)("div", {
            className: P.l3,
            children: (0, a.jsx)(u.Te, {
                maxVisibleItems: U.SX.length + 1,
                value: W,
                options: [
                    { value: j, key: j, label: L.intl.string(L.t.E45wvP), disabled: !0 },
                    ...U.SX.map((e) => ({ value: e, key: e, label: (0, v.A)(e) })),
                ],
                onChange: (e) => K(e),
                optionClassName: P.Pl,
                renderOptionLabel: (e) => {
                    let { value: t, label: l, disabled: n } = e;
                    return (0, a.jsx)("span", {
                        className: r()(P.j3, n ? P.r9 : void 0),
                        children: t === j ? l : (0, R.A)(t),
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
        actions: [{ text: L.intl.string(L.t["R3BPH+"]), variant: "primary", onClick: et }],
        children: [
            null != G &&
                (0, a.jsx)("div", {
                    className: P.q5,
                    children: (0, a.jsx)(x.A, {
                        user: G,
                        previewText: F,
                        previewEmoji: B,
                        placeHolderText: q,
                        transitionState: t,
                    }),
                }),
            (0, a.jsxs)("div", {
                className: P.eH,
                children: [
                    (0, a.jsx)(_.E, {
                        tag: "label",
                        htmlFor: ea,
                        variant: "heading-md/semibold",
                        className: P.wW,
                        children: el,
                    }),
                    (0, a.jsxs)("div", {
                        className: P.Kf,
                        ref: Q,
                        children: [
                            (0, a.jsx)("span", { ref: J, className: P._D, "aria-hidden": "true" }),
                            (0, a.jsx)("div", {
                                className: P.S0,
                                children: (0, a.jsx)(c.Y, {
                                    targetElementRef: $,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, a.jsx)(N.A, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                let { emoji: l, willClose: a } = e;
                                                null == l ||
                                                    k(
                                                        null != l.id
                                                            ? { id: l.id, name: l.name, animated: l.animated }
                                                            : {
                                                                  id: null,
                                                                  name: l.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    a && t();
                                            },
                                            pickerIntention: M.EmojiIntention.STATUS,
                                            onNavigateAway: l,
                                        });
                                    },
                                    position: "left",
                                    animation: c.Y.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        let { isShown: l } = t;
                                        return (0, a.jsx)(S.A, {
                                            ...e,
                                            ref: $,
                                            active: l,
                                            className: P.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == B
                                                    ? null
                                                    : () =>
                                                          (0, a.jsx)(g.A, {
                                                              className: P.Zg,
                                                              emojiId: B.id,
                                                              emojiName: B.name,
                                                              animated: !!B.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, a.jsx)(d.U, {
                                autosize: !0,
                                value: F,
                                maxLength: U.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: Z,
                                onChange: (e) => {
                                    V(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && (e.preventDefault(), e.shiftKey || et());
                                },
                                className: P.hF,
                                inputRef: z,
                                id: ea,
                            }),
                            (F.length > 0 || null != B) &&
                                (0, a.jsx)(A.D, {
                                    "aria-label": L.intl.string(L.t.wfYTHe),
                                    className: P.mt,
                                    onClick: () => {
                                        V(""), k(null);
                                    },
                                    children: (0, a.jsx)(T.a, { size: "md", color: "currentColor", className: P.hj }),
                                }),
                        ],
                    }),
                    (0, a.jsx)(h.A, { children: `${L.intl.string(L.t.EVV6uZ)}: ${q}` }),
                ],
            }),
        ],
    });
}
