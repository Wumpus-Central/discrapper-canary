n.d(t, { default: () => U });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    u = n(843282),
    d = n(421380),
    c = n(397927),
    m = n(565645),
    f = n(765671),
    p = n(964486),
    h = n(793574),
    A = n(688810),
    g = n(375499),
    T = n(937773),
    b = n(287809),
    S = n(954571),
    x = n(57990),
    _ = n(569921),
    j = n(267859),
    y = n(334310),
    O = n(685396),
    N = n(16663),
    D = n(403918),
    v = n(652215),
    w = n(307731),
    P = n(985018),
    R = n(762331);
let E = "CLEAR_AFTER";
function U(e) {
    let { transitionState: t, onClose: n, sourceAnalyticsLocations: a = [], prompt: U = null } = e,
        { analyticsLocations: C } = (0, A.Ay)(a, h.A.CUSTOM_STATUS_MODAL),
        M = (0, o.bG)([b.default], () => b.default.getCurrentUser() ?? null),
        k = (0, O.K)(),
        [H, I] = i.useState(k?.state ?? ""),
        [Y, $] = i.useState(k?.emoji ?? null),
        [L, F] = i.useState((0, _.A)()),
        B = i.useRef(null),
        V = i.useRef(null),
        Z = i.useRef(null),
        q = null != U ? U.label() : P.intl.string(P.t.xod367),
        [z, G] = i.useState(q),
        { ref: K, width: Q } = (0, f.Ay)(q);
    i.useEffect(() => {
        let e = Z.current;
        if (null == Q || null == e) return;
        let t = Q - 78;
        e.textContent = q;
        let n = e.getBoundingClientRect().width;
        if (n <= t) G(q);
        else {
            let e = n / q.length,
                l = Math.floor((t - 3 * e) / e);
            G(`${q.substring(0, l)}...`);
        }
    }, [Q, q]),
        i.useEffect(() => {
            S.default.track(v.HAw.OPEN_MODAL, { type: h.A.CUSTOM_STATUS_MODAL, location_stack: C });
        }, [C]),
        (0, p.Ay)(() => {
            B.current?.focus(), B.current?.setSelection(H.length, H.length);
        });
    let W = () => {
            L !== E && ((0, x.A)({ text: H, emojiInfo: Y, clearAfter: L, prompt: U, analyticsLocations: C }), n());
        },
        X = P.intl.string(P.t.rp0ahn),
        J = "custom-status-input";
    return (0, l.jsxs)(s.Modal, {
        title: P.intl.string(P.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: R.l3,
            children: (0, l.jsx)(u.Te, {
                maxVisibleItems: D.SX.length + 1,
                value: L,
                options: [
                    { value: E, key: E, label: P.intl.string(P.t.E45wvP), disabled: !0 },
                    ...D.SX.map((e) => ({ value: e, key: e, label: (0, j.A)(e) })),
                ],
                onChange: (e) => F(e),
                optionClassName: R.Pl,
                renderOptionLabel: (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return (0, l.jsx)("span", {
                        className: r()(R.j3, i ? R.r9 : void 0),
                        children: t === E ? n : (0, y.A)(t),
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
        transitionState: t,
        actions: [{ text: P.intl.string(P.t["R3BPH+"]), variant: "primary", onClick: W }],
        children: [
            null != M &&
                (0, l.jsx)("div", {
                    className: R.q5,
                    children: (0, l.jsx)(N.A, {
                        user: M,
                        previewText: H,
                        previewEmoji: Y,
                        placeHolderText: q,
                        transitionState: t,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: R.eH,
                children: [
                    (0, l.jsx)(c.Text, {
                        tag: "label",
                        htmlFor: J,
                        variant: "heading-md/semibold",
                        className: R.wW,
                        children: X,
                    }),
                    (0, l.jsxs)("div", {
                        className: R.Kf,
                        ref: K,
                        children: [
                            (0, l.jsx)("span", { ref: Z, className: R._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: R.S0,
                                children: (0, l.jsx)(c.YNO, {
                                    targetElementRef: V,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, l.jsx)(T.A, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                let { emoji: n, willClose: l } = e;
                                                null == n ||
                                                    $(
                                                        null != n.id
                                                            ? { id: n.id, name: n.name, animated: n.animated }
                                                            : {
                                                                  id: null,
                                                                  name: n.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    l && t();
                                            },
                                            pickerIntention: w.EmojiIntention.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: c.YNO.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        let { isShown: n } = t;
                                        return (0, l.jsx)(g.A, {
                                            ...e,
                                            ref: V,
                                            active: n,
                                            className: R.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == Y
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(m.A, {
                                                              className: R.Zg,
                                                              emojiId: Y.id,
                                                              emojiName: Y.name,
                                                              animated: !!Y.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, l.jsx)(d.f9, {
                                autosize: !0,
                                value: H,
                                maxLength: D.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: z,
                                onChange: (e) => {
                                    I(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && W();
                                },
                                className: R.hF,
                                inputRef: B,
                                id: J,
                            }),
                            (H.length > 0 || null != Y) &&
                                (0, l.jsx)(c.DUT, {
                                    "aria-label": P.intl.string(P.t.wfYTHe),
                                    className: R.mt,
                                    onClick: () => {
                                        I(""), $(null);
                                    },
                                    children: (0, l.jsx)(c.aXh, { size: "md", color: "currentColor", className: R.hj }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(c.AC4, { children: `${P.intl.string(P.t.EVV6uZ)}: ${q}` }),
                ],
            }),
        ],
    });
}
