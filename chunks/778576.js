a.d(t, { A: () => N });
var n = a(627968),
    s = a(64700),
    r = a(503698),
    l = a.n(r),
    i = a(311907),
    c = a(990078),
    u = a(397927),
    o = a(287809),
    d = a(101058),
    A = a(989299),
    h = a(348),
    f = a(783173),
    g = a(656925),
    m = a(652215),
    x = a(339984);
a(363385);
var C = a(985018),
    p = a(593335);
function E(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: l, avatarButtonRef: i } = e,
        { id: o, storageHash: d, description: A = C.intl.string(C.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: f } = (0, g.A)({ avatarId: o, storageHash: d }),
        { onMouseEnter: m, onMouseLeave: x } = f,
        E = s.useRef(null),
        T = A ?? d.substring(0, 6).toUpperCase(),
        N = C.intl.formatToPlainString(C.t.tmJ75y, { orderNumber: a + 1, description: T }),
        R = C.intl.formatToPlainString(C.t.pBzwhc, { orderNumber: a + 1, description: T });
    return (0, n.jsxs)("div", {
        className: p.ge,
        children: [
            (0, n.jsx)(u.DUT, {
                onClick: () => r(t),
                onMouseEnter: m,
                onMouseLeave: x,
                className: p.Hk,
                "aria-label": N,
                innerRef: i,
                children: (0, n.jsx)("img", { src: h, alt: A, className: p.Hc }),
            }),
            (0, n.jsx)(c.m, {
                text: C.intl.string(C.t.N86XcP),
                anchorRef: E,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(u.vN3, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        ref: E,
                        "aria-label": R,
                        onClick: (e) => l(e, a, o, d, R),
                        className: p.G5,
                        children: (0, n.jsx)(u.ucK, { size: "xs", color: "currentColor", className: p.fy }),
                    }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: h } = e,
        g = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        T = s.useRef([]),
        N = s.useRef(null),
        R = s.useRef(t.length),
        j = s.useRef(null),
        [v, b] = s.useState(!1),
        [y, _] = s.useState(!1),
        F = t.length,
        S = Math.max(6 - F, 0),
        L = (0, u.k34)(),
        H = s.useCallback(
            async (e) => {
                if (null == g || v) return;
                b(!0), c(null);
                let { id: t, storageHash: s, description: l } = e,
                    i = (0, d.Xp)({
                        userId: g.id,
                        avatarId: t,
                        storageHash: s,
                        size: m.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: A } = (0, d.yM)(s, l);
                    (0, u.mMO)(
                        async () => {
                            let { default: t } = await Promise.all([a.e("35929"), a.e("74571"), a.e("29077")]).then(
                                a.bind(a, 142630),
                            );
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: A }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: x.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: L },
                    );
                } catch (e) {
                    c(C.intl.string(C.t.fZRH9P));
                } finally {
                    b(!1);
                }
            },
            [L, v, r, c, g],
        ),
        w = s.useCallback(
            (e, s, r, l, i) => {
                let c = s + 1 < t.length ? s + 1 : s - 1;
                (j.current = c >= 0 ? T.current[c] : N.current),
                    e.shiftKey
                        ? (0, A.O)(r)
                        : (_(!0),
                          (0, u.mMO)(async () => {
                              let { default: e } = await a.e("48944").then(a.bind(a, 555251));
                              return (t) => {
                                  let { onClose: a, ...s } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: r,
                                      storageHash: l,
                                      avatarDescription: i,
                                      onConfirmDelete: () => (0, A.O)(r),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  _(!1);
                                              });
                                      },
                                      ...s,
                                  });
                              };
                          }));
            },
            [t],
        );
    return (
        s.useEffect(() => {
            y ||
                (t.length < R.current &&
                    null != j.current &&
                    requestAnimationFrame(() => {
                        j.current?.focus();
                    }),
                (R.current = t.length));
        }, [t.length, y]),
        (0, n.jsx)("div", {
            className: l()(p.AU, h),
            children: (0, n.jsxs)("div", {
                className: p.mE,
                children: [
                    F > 0 &&
                        (0, n.jsx)("ul", {
                            "aria-label": C.intl.string(C.t.lsU63N),
                            className: p.xL,
                            children: t.map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        children: (0, n.jsx)(E, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: H,
                                            onDeleteRecentAvatar: w,
                                            avatarButtonRef: (e) => {
                                                T.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    S > 0 &&
                        (0, n.jsxs)("div", {
                            className: p.wh,
                            tabIndex: -1,
                            ref: N,
                            children: [
                                (0, n.jsxs)(u.AC4, {
                                    children: [
                                        0 === F &&
                                            (0, n.jsxs)(n.Fragment, { children: [C.intl.string(C.t.x0DsRS), " "] }),
                                        C.intl.format(C.t["8W2HO3"], { numberOfEmptyAvatarSlots: S }),
                                    ],
                                }),
                                [...Array(S)].map((e, t) => (0, n.jsx)(f.A, { className: p.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function N(e) {
    let { className: t, onComplete: a } = e,
        { avatars: r, loading: i, error: c } = (0, h.b)(),
        [o, d] = s.useState(null),
        f = o ?? c?.message;
    return (
        s.useEffect(() => {
            (0, A.I)();
        }, []),
        (0, n.jsx)("div", {
            className: l()(p.kL, t),
            children: (0, n.jsx)(u.D0$, {
                label: C.intl.string(C.t.Bnq9zK),
                description: C.intl.format(C.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: f,
                children: i
                    ? (0, n.jsx)(u.y$y, { className: p.u1 })
                    : (0, n.jsx)(T, {
                          avatars: r,
                          onComplete: a,
                          setFetchError: d,
                          className: null != f ? p.JD : void 0,
                      }),
            }),
        })
    );
}
