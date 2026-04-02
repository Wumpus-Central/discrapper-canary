n.d(t, { A: () => R });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(311907),
    c = n(990078),
    o = n(397927),
    u = n(287809),
    A = n(101058),
    d = n(989299),
    g = n(348),
    h = n(783173),
    f = n(656925),
    C = n(652215),
    m = n(339984);
n(363385);
var x = n(985018),
    E = n(941668);
function p(e) {
    let { avatar: t, index: n, onSelectRecentAvatar: i, onDeleteRecentAvatar: s, avatarButtonRef: r } = e,
        { id: u, storageHash: A, description: d = x.intl.string(x.t.lqaIxI) } = t,
        { avatarSrc: g, eventHandlers: h } = (0, f.A)({ avatarId: u, storageHash: A }),
        { onMouseEnter: C, onMouseLeave: m } = h,
        p = l.useRef(null),
        T = d ?? A.substring(0, 6).toUpperCase(),
        R = x.intl.formatToPlainString(x.t.tmJ75y, { orderNumber: n + 1, description: T }),
        N = x.intl.formatToPlainString(x.t.pBzwhc, { orderNumber: n + 1, description: T });
    return (0, a.jsxs)("div", {
        className: E.ge,
        children: [
            (0, a.jsx)(o.DUT, {
                onClick: () => i(t),
                onMouseEnter: C,
                onMouseLeave: m,
                className: E.Hk,
                "aria-label": R,
                innerRef: r,
                children: (0, a.jsx)("img", { src: g, alt: d, className: E.Hc }),
            }),
            (0, a.jsx)(c.m, {
                text: x.intl.string(x.t.N86XcP),
                anchorRef: p,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, a.jsx)(o.vN3, {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        ref: p,
                        "aria-label": N,
                        onClick: (e) => s(e, n, u, A, N),
                        className: E.G5,
                        children: (0, a.jsx)(o.ucK, { size: "xs", color: "currentColor", className: E.fy }),
                    }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { avatars: t, onComplete: i, setFetchError: c, className: g } = e,
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
                let { id: t, storageHash: l, description: s } = e,
                    r = (0, A.Xp)({
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
                        { filename: u, type: d } = (0, A.yM)(l, s);
                    (0, o.mMO)(
                        async () => {
                            let { default: t } = await Promise.all([n.e("35929"), n.e("74571"), n.e("3142")]).then(
                                n.bind(n, 142630),
                            );
                            return (n) =>
                                (0, a.jsx)(t, {
                                    imageUri: r,
                                    file: new File([c], u, { type: d }),
                                    originalAsset: e,
                                    onCrop: i,
                                    uploadType: m.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...n,
                                });
                        },
                        { contextKey: F },
                    );
                } catch (e) {
                    c(x.intl.string(x.t.fZRH9P));
                } finally {
                    _(!1);
                }
            },
            [F, y, i, c, f],
        ),
        U = l.useCallback(
            (e, l, i, s, r) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (L.current = c >= 0 ? T.current[c] : R.current),
                    e.shiftKey
                        ? (0, d.O)(i)
                        : (v(!0),
                          (0, o.mMO)(async () => {
                              let { default: e } = await n.e("48944").then(n.bind(n, 555251));
                              return (t) => {
                                  let { onClose: n, ...l } = t;
                                  return (0, a.jsx)(e, {
                                      avatarId: i,
                                      storageHash: s,
                                      avatarDescription: r,
                                      onConfirmDelete: () => (0, d.O)(i),
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
            className: s()(E.AU, g),
            children: (0, a.jsxs)("div", {
                className: E.mE,
                children: [
                    S > 0 &&
                        (0, a.jsx)("ul", {
                            "aria-label": x.intl.string(x.t.lsU63N),
                            className: E.xL,
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
                            className: E.wh,
                            tabIndex: -1,
                            ref: R,
                            children: [
                                (0, a.jsxs)(o.AC4, {
                                    children: [
                                        0 === S &&
                                            (0, a.jsxs)(a.Fragment, { children: [x.intl.string(x.t.x0DsRS), " "] }),
                                        x.intl.format(x.t["8W2HO3"], { numberOfEmptyAvatarSlots: b }),
                                    ],
                                }),
                                [...Array(b)].map((e, t) => (0, a.jsx)(h.A, { className: E.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function R(e) {
    let { className: t, onComplete: n } = e,
        { avatars: i, loading: r, error: c } = (0, g.b)(),
        [u, A] = l.useState(null),
        h = u ?? c?.message;
    return (
        l.useEffect(() => {
            (0, d.I)();
        }, []),
        (0, a.jsx)("div", {
            className: s()(E.kL, t),
            children: (0, a.jsx)(o.D0$, {
                label: x.intl.string(x.t.Bnq9zK),
                description: x.intl.format(x.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: h,
                children: r
                    ? (0, a.jsx)(o.y$y, { className: E.u1 })
                    : (0, a.jsx)(T, {
                          avatars: i,
                          onComplete: n,
                          setFetchError: A,
                          className: null != h ? E.JD : void 0,
                      }),
            }),
        })
    );
}
