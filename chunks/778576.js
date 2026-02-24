n.d(t, { A: () => R });
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    c = n(990078),
    o = n(397927),
    u = n(287809),
    d = n(101058),
    A = n(989299),
    g = n(348),
    h = n(783173),
    f = n(656925),
    C = n(652215),
    m = n(339984);
n(363385);
var E = n(985018),
    x = n(606836);
function p(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: s, onDeleteRecentAvatar: i, avatarButtonRef: r } = e,
        { id: u, storageHash: d, description: A = E.intl.string(E.t.lqaIxI) } = t,
        { avatarSrc: g, eventHandlers: h } = (0, f.A)({ avatarId: u, storageHash: d }),
        { onMouseEnter: C, onMouseLeave: m } = h,
        p = l.useRef(null),
        T = A ?? d.substring(0, 6).toUpperCase(),
        R = E.intl.formatToPlainString(E.t.tmJ75y, { orderNumber: n + 1, description: T }),
        N = E.intl.formatToPlainString(E.t.pBzwhc, { orderNumber: n + 1, description: T });
    return (0, a.jsxs)("div", {
        className: x.ge,
        children: [
            (0, a.jsx)(o.DUT, {
                onClick: () => s(t),
                onMouseEnter: C,
                onMouseLeave: m,
                className: x.Hk,
                "aria-label": R,
                innerRef: r,
                children: (0, a.jsx)("img", { src: g, alt: A, className: x.Hc }),
            }),
            (0, a.jsx)(c.m, {
                text: E.intl.string(E.t.N86XcP),
                anchorRef: p,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, a.jsx)(o.vN3, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        ref: p,
                        "aria-label": N,
                        onClick: (e) => i(e, n, u, d, N),
                        className: x.G5,
                        children: (0, a.jsx)(o.ucK, { size: "xs", color: "currentColor", className: x.fy }),
                    }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { avatars: t, onComplete: s, setFetchError: c, className: g } = e,
        f = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        T = l.useRef([]),
        R = l.useRef(null),
        N = l.useRef(t.length),
        L = l.useRef(null),
        [y, _] = l.useState(!1),
        [j, v] = l.useState(!1),
        S = t.length,
        b = Math.max(6 - S, 0),
        F = (0, o.k34)(),
        H = l.useCallback(
            async (e) => {
                if (null == f || y) return;
                _(!0), c(null);
                let { id: t, storageHash: l, description: i } = e,
                    r = (0, d.Xp)({
                        userId: f.id,
                        avatarId: t,
                        storageHash: l,
                        size: C.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(r),
                        c = await t.blob(),
                        { filename: u, type: A } = (0, d.yM)(l, i);
                    (0, o.mMO)(
                        async () => {
                            let { default: t } = await Promise.all([n.e("35929"), n.e("74571"), n.e("53062")]).then(
                                n.bind(n, 142630),
                            );
                            return (n) =>
                                (0, a.jsx)(t, {
                                    imageUri: r,
                                    file: new File([c], u, { type: A }),
                                    originalAsset: e,
                                    onCrop: s,
                                    uploadType: m.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...n,
                                });
                        },
                        { contextKey: F },
                    );
                } catch (e) {
                    c(E.intl.string(E.t.fZRH9P));
                } finally {
                    _(!1);
                }
            },
            [F, y, s, c, f],
        ),
        U = l.useCallback(
            (e, l, s, i, r) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (L.current = c >= 0 ? T.current[c] : R.current),
                    e.shiftKey
                        ? (0, A.O)(s)
                        : (v(!0),
                          (0, o.mMO)(async () => {
                              let { default: e } = await n.e("48944").then(n.bind(n, 555251));
                              return (t) => {
                                  let { onClose: n, ...l } = t;
                                  return (0, a.jsx)(e, {
                                      avatarId: s,
                                      storageHash: i,
                                      avatarDescription: r,
                                      onConfirmDelete: () => (0, A.O)(s),
                                      onClose: async () => {
                                          await n(),
                                              requestAnimationFrame(() => {
                                                  v(!1);
                                              });
                                      },
                                      ...l,
                                  });
                              };
                          }));
            },
            [t],
        );
    return (
        l.useEffect(() => {
            j ||
                (t.length < N.current &&
                    null != L.current &&
                    requestAnimationFrame(() => {
                        L.current?.focus();
                    }),
                (N.current = t.length));
        }, [t.length, j]),
        (0, a.jsx)("div", {
            className: i()(x.AU, g),
            children: (0, a.jsxs)("div", {
                className: x.mE,
                children: [
                    S > 0 &&
                        (0, a.jsx)("ul", {
                            "aria-label": E.intl.string(E.t.lsU63N),
                            className: x.xL,
                            children: t.map((e, t) =>
                                (0, a.jsx)(
                                    "li",
                                    {
                                        children: (0, a.jsx)(p, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: H,
                                            onDeleteRecentAvatar: U,
                                            avatarButtonRef: (e) => {
                                                T.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    b > 0 &&
                        (0, a.jsxs)("div", {
                            className: x.wh,
                            tabIndex: -1,
                            ref: R,
                            children: [
                                (0, a.jsxs)(o.AC4, {
                                    children: [
                                        0 === S &&
                                            (0, a.jsxs)(a.Fragment, { children: [E.intl.string(E.t.x0DsRS), " "] }),
                                        E.intl.format(E.t["8W2HO3"], { numberOfEmptyAvatarSlots: b }),
                                    ],
                                }),
                                [...Array(b)].map((e, t) => (0, a.jsx)(h.A, { className: x.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function R(e) {
    let { className: t, onComplete: n } = e,
        { avatars: s, loading: r, error: c } = (0, g.b)(),
        [u, d] = l.useState(null),
        h = u ?? c?.message;
    return (
        l.useEffect(() => {
            (0, A.I)();
        }, []),
        (0, a.jsx)("div", {
            className: i()(x.kL, t),
            children: (0, a.jsx)(o.D0$, {
                label: E.intl.string(E.t.Bnq9zK),
                description: E.intl.format(E.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: h,
                children: r
                    ? (0, a.jsx)(o.y$y, { className: x.u1 })
                    : (0, a.jsx)(T, {
                          avatars: s,
                          onComplete: n,
                          setFetchError: d,
                          className: null != h ? x.JD : void 0,
                      }),
            }),
        })
    );
}
