n.d(e, { default: () => M });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    u = n(843282),
    d = n(421380),
    c = n(397927),
    m = n(565645),
    f = n(765671),
    g = n(964486),
    h = n(793574),
    p = n(688810),
    A = n(375499),
    T = n(937773),
    S = n(287809),
    b = n(954571),
    _ = n(177975),
    x = n(576241),
    y = n(57990),
    j = n(569921),
    O = n(267859),
    v = n(334310),
    N = n(685396),
    P = n(16663),
    D = n(403918),
    R = n(652215),
    w = n(307731),
    C = n(985018),
    E = n(501336);
let U = "CLEAR_AFTER";
function M(t) {
    let { transitionState: e, onClose: n, sourceAnalyticsLocations: a = [], prompt: M = null } = t,
        k = (0, x.h)({ location: "CustomStatusModalWithPreview" }),
        H = (0, _.R)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: Y } = (0, p.Ay)(a, h.A.CUSTOM_STATUS_MODAL),
        I = (0, o.bG)([S.default], () => S.default.getCurrentUser() ?? null),
        $ = (0, N.K)(),
        [L, F] = l.useState($?.state ?? ""),
        [Z, z] = l.useState($?.emoji ?? null),
        [B, V] = l.useState((0, j.A)()),
        W = l.useRef(null),
        q = l.useRef(null),
        G = l.useRef(null),
        X = k && null != M ? M.label() : C.intl.string(C.t.xod367),
        [K, Q] = l.useState(X),
        { ref: J, width: tt } = (0, f.Ay)(X);
    l.useEffect(() => {
        let t = G.current;
        if (null == tt || null == t) return;
        let e = tt - 78;
        t.textContent = X;
        let n = t.getBoundingClientRect().width;
        if (n <= e) Q(X);
        else {
            let t = n / X.length,
                i = Math.floor((e - 3 * t) / t);
            Q(`${X.substring(0, i)}...`);
        }
    }, [tt, X]),
        l.useEffect(() => {
            b.default.track(R.HAw.OPEN_MODAL, { type: h.A.CUSTOM_STATUS_MODAL, location_stack: Y });
        }, [Y]),
        (0, g.Ay)(() => {
            W.current?.focus(), W.current?.setSelection(L.length, L.length);
        });
    let te = () => {
            B !== U && ((0, y.A)({ text: L, emojiInfo: Z, clearAfter: B, prompt: M, analyticsLocations: Y }), n());
        },
        tn = k ? C.intl.string(C.t.rp0ahn) : C.intl.string(C.t.UcdRn2),
        ti = "custom-status-input";
    return (0, i.jsxs)(s.Modal, {
        title: C.intl.string(C.t.Zx4jzN),
        actionBarInput: (0, i.jsx)("div", {
            className: E.l3,
            children: (0, i.jsx)(u.Te, {
                maxVisibleItems: D.SX.length + 1,
                value: B,
                options: H
                    ? [
                          { value: U, key: U, label: C.intl.string(C.t.E45wvP), disabled: !0 },
                          ...D.SX.map((t) => ({ value: t, key: t, label: (0, O.A)(t, !0) })),
                      ]
                    : D.SX.map((t) => ({ value: t, key: t, label: (0, O.A)(t) })),
                onChange: (t) => V(t),
                optionClassName: E.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: l } = t;
                    return (0, i.jsx)("span", {
                        className: r()(E.j3, l ? E.r9 : void 0),
                        children: e === U ? n : (0, v.A)(e, H),
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
        actions: [{ text: C.intl.string(C.t["R3BPH+"]), variant: "primary", onClick: te }],
        children: [
            null != I &&
                (0, i.jsx)("div", {
                    className: E.q5,
                    children: (0, i.jsx)(P.A, {
                        user: I,
                        previewText: L,
                        previewEmoji: Z,
                        placeHolderText: X,
                        transitionState: e,
                    }),
                }),
            (0, i.jsxs)("div", {
                className: E.eH,
                children: [
                    (0, i.jsx)(c.Text, {
                        tag: "label",
                        htmlFor: ti,
                        variant: "heading-md/semibold",
                        className: E.wW,
                        children: tn,
                    }),
                    (0, i.jsxs)("div", {
                        className: E.Kf,
                        ref: J,
                        children: [
                            (0, i.jsx)("span", { ref: G, className: E._D, "aria-hidden": "true" }),
                            (0, i.jsx)("div", {
                                className: E.S0,
                                children: (0, i.jsx)(c.YNO, {
                                    targetElementRef: q,
                                    renderPopout: (t) => {
                                        let { closePopout: e } = t;
                                        return (0, i.jsx)(T.A, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                let { emoji: n, willClose: i } = t;
                                                null == n ||
                                                    z(
                                                        null != n.id
                                                            ? { id: n.id, name: n.name, animated: n.animated }
                                                            : {
                                                                  id: null,
                                                                  name: n.optionallyDiverseSequence,
                                                                  animated: !1,
                                                              },
                                                    ),
                                                    i && e();
                                            },
                                            pickerIntention: w.b_.STATUS,
                                            onNavigateAway: n,
                                        });
                                    },
                                    position: "left",
                                    animation: c.YNO.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        let { isShown: n } = e;
                                        return (0, i.jsx)(A.A, {
                                            ...t,
                                            ref: q,
                                            active: n,
                                            className: E.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == Z
                                                    ? null
                                                    : () =>
                                                          (0, i.jsx)(m.A, {
                                                              className: E.Zg,
                                                              emojiId: Z.id,
                                                              emojiName: Z.name,
                                                              animated: !!Z.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, i.jsx)(d.f9, {
                                autosize: !0,
                                value: L,
                                maxLength: D.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: K,
                                onChange: (t) => {
                                    F(t);
                                },
                                onKeyDown: (t) => {
                                    "Enter" === t.key && te();
                                },
                                className: E.hF,
                                inputRef: W,
                                id: ti,
                            }),
                            (L.length > 0 || null != Z) &&
                                (0, i.jsx)(c.DUT, {
                                    "aria-label": C.intl.string(C.t.wfYTHe),
                                    className: E.mt,
                                    onClick: () => {
                                        F(""), z(null);
                                    },
                                    children: (0, i.jsx)(c.aXh, { size: "md", color: "currentColor", className: E.hj }),
                                }),
                        ],
                    }),
                    (0, i.jsx)(c.AC4, { children: `${C.intl.string(C.t.EVV6uZ)}: ${X}` }),
                ],
            }),
        ],
    });
}
