l.d(t, { default: () => P });
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(189213),
    u = l(311907),
    o = l(843282),
    d = l(784599),
    c = l(834730),
    A = l(265872),
    _ = l(939249),
    T = l(285796),
    h = l(140735),
    g = l(565645),
    E = l(765671),
    O = l(964486),
    m = l(793574),
    N = l(688810),
    S = l(375499),
    p = l(937773),
    I = l(287809),
    b = l(954571),
    D = l(57990),
    f = l(569921),
    R = l(267859),
    v = l(334310),
    C = l(685396),
    x = l(16663),
    M = l(403918),
    U = l(652215),
    y = l(307731),
    L = l(985018),
    j = l(320523);
let H = "CLEAR_AFTER";
function P(e) {
    let { transitionState: t, onClose: l, sourceAnalyticsLocations: r = [], prompt: P = null } = e,
        { analyticsLocations: w } = (0, N.Ay)(r, m.A.CUSTOM_STATUS_MODAL),
        G = (0, u.bG)([I.default], () => I.default.getCurrentUser() ?? null),
        Y = (0, C.K)(),
        [F, V] = i.useState(Y?.state ?? ""),
        [B, k] = i.useState(Y?.emoji ?? null),
        [K, W] = i.useState((0, f.A)()),
        z = i.useRef(null),
        $ = i.useRef(null),
        J = i.useRef(null),
        q = null != P ? P.label() : L.intl.string(L.t.xod367),
        [X, Z] = i.useState(q),
        { ref: Q, width: ee } = (0, E.Ay)(q);
    i.useEffect(() => {
        let e = J.current;
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
            b.default.track(U.HAw.OPEN_MODAL, { type: m.A.CUSTOM_STATUS_MODAL, location_stack: w });
        }, [w]),
        (0, O.Ay)(() => {
            z.current?.focus(), z.current?.setSelection(F.length, F.length);
        });
    let et = () => {
            K !== H && ((0, D.A)({ text: F, emojiInfo: B, clearAfter: K, prompt: P, analyticsLocations: w }), l());
        },
        el = L.intl.string(L.t.rp0ahn),
        en = "custom-status-input";
    return (0, n.jsxs)(s.Modal, {
        title: L.intl.string(L.t.Zx4jzN),
        actionBarInput: (0, n.jsx)("div", {
            className: j.l3,
            children: (0, n.jsx)(o.Te, {
                maxVisibleItems: M.SX.length + 1,
                value: K,
                options: [
                    { value: H, key: H, label: L.intl.string(L.t.E45wvP), disabled: !0 },
                    ...M.SX.map((e) => ({ value: e, key: e, label: (0, R.A)(e) })),
                ],
                onChange: (e) => W(e),
                optionClassName: j.Pl,
                renderOptionLabel: (e) => {
                    let { value: t, label: l, disabled: i } = e;
                    return (0, n.jsx)("span", {
                        className: a()(j.j3, i ? j.r9 : void 0),
                        children: t === H ? l : (0, v.A)(t),
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
                (0, n.jsx)("div", {
                    className: j.q5,
                    children: (0, n.jsx)(x.A, {
                        user: G,
                        previewText: F,
                        previewEmoji: B,
                        placeHolderText: q,
                        transitionState: t,
                    }),
                }),
            (0, n.jsxs)("div", {
                className: j.eH,
                children: [
                    (0, n.jsx)(c.E, {
                        tag: "label",
                        htmlFor: en,
                        variant: "heading-md/semibold",
                        className: j.wW,
                        children: el,
                    }),
                    (0, n.jsxs)("div", {
                        className: j.Kf,
                        ref: Q,
                        children: [
                            (0, n.jsx)("span", { ref: J, className: j._D, "aria-hidden": "true" }),
                            (0, n.jsx)("div", {
                                className: j.S0,
                                children: (0, n.jsx)(A.Y, {
                                    targetElementRef: $,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, n.jsx)(p.A, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                let { emoji: l, willClose: n } = e;
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
                                                    n && t();
                                            },
                                            pickerIntention: y.EmojiIntention.STATUS,
                                            onNavigateAway: l,
                                        });
                                    },
                                    position: "left",
                                    animation: A.Y.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        let { isShown: l } = t;
                                        return (0, n.jsx)(S.A, {
                                            ...e,
                                            ref: $,
                                            active: l,
                                            className: j.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == B
                                                    ? null
                                                    : () =>
                                                          (0, n.jsx)(g.A, {
                                                              className: j.Zg,
                                                              emojiId: B.id,
                                                              emojiName: B.name,
                                                              animated: !!B.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, n.jsx)(d.U, {
                                autosize: !0,
                                value: F,
                                maxLength: M.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: X,
                                onChange: (e) => {
                                    V(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && (e.preventDefault(), e.shiftKey || et());
                                },
                                className: j.hF,
                                inputRef: z,
                                id: en,
                            }),
                            (F.length > 0 || null != B) &&
                                (0, n.jsx)(_.D, {
                                    "aria-label": L.intl.string(L.t.wfYTHe),
                                    className: j.mt,
                                    onClick: () => {
                                        V(""), k(null);
                                    },
                                    children: (0, n.jsx)(T.a, { size: "md", color: "currentColor", className: j.hj }),
                                }),
                        ],
                    }),
                    (0, n.jsx)(h.A, { children: `${L.intl.string(L.t.EVV6uZ)}: ${q}` }),
                ],
            }),
        ],
    });
}
