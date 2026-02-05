a.d(t, { A: () => j });
var n = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    i = a(311907),
    c = a(990078),
    u = a(397927),
    o = a(287809),
    d = a(101058),
    A = a(989299),
    h = a(348),
    f = a(783173),
    g = a(656925),
    x = a(652215),
    m = a(339984);
a(363385);
var C = a(985018),
    p = a(449998);
function E(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: l, onDeleteRecentAvatar: r, avatarButtonRef: i } = e,
        { id: o, storageHash: d, description: A = C.intl.string(C.t.lqaIxI) } = t,
        { avatarSrc: h, eventHandlers: f } = (0, g.A)({ avatarId: o, storageHash: d }),
        { onMouseEnter: x, onMouseLeave: m } = f,
        E = s.useRef(null),
        T = A ?? d.substring(0, 6).toUpperCase(),
        j = C.intl.formatToPlainString(C.t.tmJ75y, { orderNumber: a + 1, description: T }),
        N = C.intl.formatToPlainString(C.t.pBzwhc, { orderNumber: a + 1, description: T });
    return (0, n.jsxs)("div", {
        className: p.ge,
        children: [
            (0, n.jsx)(u.DUT, {
                onClick: () => l(t),
                onMouseEnter: x,
                onMouseLeave: m,
                className: p.Hk,
                "aria-label": j,
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
                        "aria-label": N,
                        onClick: (e) => r(e, a, o, d, N),
                        className: p.G5,
                        children: (0, n.jsx)(u.ucK, { size: "xs", color: "currentColor", className: p.fy }),
                    }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { avatars: t, onComplete: l, setFetchError: c, className: h } = e,
        g = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        T = s.useRef([]),
        j = s.useRef(null),
        N = s.useRef(t.length),
        R = s.useRef(null),
        [v, y] = s.useState(!1),
        [_, F] = s.useState(!1),
        b = t.length,
        S = Math.max(6 - b, 0),
        L = (0, u.k34)(),
        w = s.useCallback(
            async (e) => {
                if (null == g || v) return;
                y(!0), c(null);
                let { id: t, storageHash: s, description: r } = e,
                    i = (0, d.Xp)({
                        userId: g.id,
                        avatarId: t,
                        storageHash: s,
                        size: x.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: A } = (0, d.yM)(s, r);
                    (0, u.mMO)(
                        async () => {
                            let { default: t } = await Promise.all([a.e("35929"), a.e("74571"), a.e("1208")]).then(
                                a.bind(a, 142630),
                            );
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: A }),
                                    originalAsset: e,
                                    onCrop: l,
                                    uploadType: m.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: L },
                    );
                } catch (e) {
                    c(C.intl.string(C.t.fZRH9P));
                } finally {
                    y(!1);
                }
            },
            [L, v, l, c, g],
        ),
        I = s.useCallback(
            (e, s, l, r, i) => {
                let c = s + 1 < t.length ? s + 1 : s - 1;
                (R.current = c >= 0 ? T.current[c] : j.current),
                    e.shiftKey
                        ? (0, A.O)(l)
                        : (F(!0),
                          (0, u.mMO)(async () => {
                              let { default: e } = await a.e("48944").then(a.bind(a, 555251));
                              return (t) => {
                                  let { onClose: a, ...s } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: l,
                                      storageHash: r,
                                      avatarDescription: i,
                                      onConfirmDelete: () => (0, A.O)(l),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  F(!1);
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
            _ ||
                (t.length < N.current &&
                    null != R.current &&
                    requestAnimationFrame(() => {
                        R.current?.focus();
                    }),
                (N.current = t.length));
        }, [t.length, _]),
        (0, n.jsx)("div", {
            className: r()(p.AU, h),
            children: (0, n.jsxs)("div", {
                className: p.mE,
                children: [
                    b > 0 &&
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
                                            onSelectRecentAvatar: w,
                                            onDeleteRecentAvatar: I,
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
                            ref: j,
                            children: [
                                (0, n.jsxs)(u.AC4, {
                                    children: [
                                        0 === b &&
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
function j(e) {
    let { className: t, onComplete: a } = e,
        { avatars: l, loading: i, error: c } = (0, h.b)(),
        [o, d] = s.useState(null),
        f = o ?? c?.message;
    return (
        s.useEffect(() => {
            (0, A.I)();
        }, []),
        (0, n.jsx)("div", {
            className: r()(p.kL, t),
            children: (0, n.jsx)(u.D0$, {
                label: C.intl.string(C.t.Bnq9zK),
                description: C.intl.format(C.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: f,
                children: i
                    ? (0, n.jsx)(u.y$y, { className: p.u1 })
                    : (0, n.jsx)(T, {
                          avatars: l,
                          onComplete: a,
                          setFetchError: d,
                          className: null != f ? p.JD : void 0,
                      }),
            }),
        })
    );
}
