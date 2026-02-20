n.d(t, { default: () => E });
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
    h = n(964486),
    p = n(793574),
    A = n(688810),
    g = n(375499),
    T = n(937773),
    b = n(287809),
    S = n(954571),
    _ = n(576241),
    x = n(57990),
    j = n(569921),
    y = n(267859),
    O = n(334310),
    N = n(685396),
    D = n(16663),
    v = n(403918),
    w = n(652215),
    P = n(307731),
    R = n(985018),
    U = n(501336);
let C = "CLEAR_AFTER";
function E(e) {
    let { transitionState: t, onClose: n, sourceAnalyticsLocations: a = [], prompt: E = null } = e,
        M = (0, _.h)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: k } = (0, A.Ay)(a, p.A.CUSTOM_STATUS_MODAL),
        H = (0, o.bG)([b.default], () => b.default.getCurrentUser() ?? null),
        I = (0, N.K)(),
        [Y, $] = i.useState(I?.state ?? ""),
        [L, F] = i.useState(I?.emoji ?? null),
        [B, V] = i.useState((0, j.A)()),
        Z = i.useRef(null),
        q = i.useRef(null),
        z = i.useRef(null),
        G = M && null != E ? E.label() : R.intl.string(R.t.xod367),
        [K, W] = i.useState(G),
        { ref: Q, width: X } = (0, f.Ay)(G);
    i.useEffect(() => {
        let e = z.current;
        if (null == X || null == e) return;
        let t = X - 78;
        e.textContent = G;
        let n = e.getBoundingClientRect().width;
        if (n <= t) W(G);
        else {
            let e = n / G.length,
                l = Math.floor((t - 3 * e) / e);
            W(`${G.substring(0, l)}...`);
        }
    }, [X, G]),
        i.useEffect(() => {
            S.default.track(w.HAw.OPEN_MODAL, { type: p.A.CUSTOM_STATUS_MODAL, location_stack: k });
        }, [k]),
        (0, h.Ay)(() => {
            Z.current?.focus(), Z.current?.setSelection(Y.length, Y.length);
        });
    let J = () => {
            B !== C && ((0, x.A)({ text: Y, emojiInfo: L, clearAfter: B, prompt: E, analyticsLocations: k }), n());
        },
        ee = M ? R.intl.string(R.t.rp0ahn) : R.intl.string(R.t.UcdRn2),
        et = "custom-status-input";
    return (0, l.jsxs)(s.Modal, {
        title: R.intl.string(R.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: U.l3,
            children: (0, l.jsx)(u.Te, {
                maxVisibleItems: v.SX.length + 1,
                value: B,
                options: [
                    { value: C, key: C, label: R.intl.string(R.t.E45wvP), disabled: !0 },
                    ...v.SX.map((e) => ({ value: e, key: e, label: (0, y.A)(e) })),
                ],
                onChange: (e) => V(e),
                optionClassName: U.Pl,
                renderOptionLabel: (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return (0, l.jsx)("span", {
                        className: r()(U.j3, i ? U.r9 : void 0),
                        children: t === C ? n : (0, O.A)(t),
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
        actions: [{ text: R.intl.string(R.t["R3BPH+"]), variant: "primary", onClick: J }],
        children: [
            null != H &&
                (0, l.jsx)("div", {
                    className: U.q5,
                    children: (0, l.jsx)(D.A, {
                        user: H,
                        previewText: Y,
                        previewEmoji: L,
                        placeHolderText: G,
                        transitionState: t,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: U.eH,
                children: [
                    (0, l.jsx)(c.Text, {
                        tag: "label",
                        htmlFor: et,
                        variant: "heading-md/semibold",
                        className: U.wW,
                        children: ee,
                    }),
                    (0, l.jsxs)("div", {
                        className: U.Kf,
                        ref: Q,
                        children: [
                            (0, l.jsx)("span", { ref: z, className: U._D, "aria-hidden": "true" }),
                            (0, l.jsx)("div", {
                                className: U.S0,
                                children: (0, l.jsx)(c.YNO, {
                                    targetElementRef: q,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, l.jsx)(T.A, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                let { emoji: n, willClose: l } = e;
                                                null == n ||
                                                    F(
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
                                            pickerIntention: P.b_.STATUS,
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
                                            ref: q,
                                            active: n,
                                            className: U.Z8,
                                            spriteSize: 24,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null == L
                                                    ? null
                                                    : () =>
                                                          (0, l.jsx)(m.A, {
                                                              className: U.Zg,
                                                              emojiId: L.id,
                                                              emojiName: L.name,
                                                              animated: !!L.animated,
                                                          }),
                                        });
                                    },
                                }),
                            }),
                            (0, l.jsx)(d.f9, {
                                autosize: !0,
                                value: Y,
                                maxLength: v.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: K,
                                onChange: (e) => {
                                    $(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && J();
                                },
                                className: U.hF,
                                inputRef: Z,
                                id: et,
                            }),
                            (Y.length > 0 || null != L) &&
                                (0, l.jsx)(c.DUT, {
                                    "aria-label": R.intl.string(R.t.wfYTHe),
                                    className: U.mt,
                                    onClick: () => {
                                        $(""), F(null);
                                    },
                                    children: (0, l.jsx)(c.aXh, { size: "md", color: "currentColor", className: U.hj }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(c.AC4, { children: `${R.intl.string(R.t.EVV6uZ)}: ${G}` }),
                ],
            }),
        ],
    });
}
