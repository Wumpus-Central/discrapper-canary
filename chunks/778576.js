a.d(t, { A: () => F });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(311907),
    c = a(990078),
    o = a(939249),
    u = a(187322),
    d = a(241326),
    A = a(638495),
    h = a(192308),
    f = a(140735),
    g = a(452027),
    m = a(289873),
    x = a(287809),
    p = a(101058),
    C = a(989299),
    E = a(348),
    N = a(783173),
    j = a(656925),
    T = a(652215),
    R = a(339984);
a(363385);
var y = a(985018),
    v = a(712839);
function b(e) {
    let { avatar: t, index: a, onSelectRecentAvatar: r, onDeleteRecentAvatar: s, avatarButtonRef: i } = e,
        { id: A, storageHash: h, description: f = y.intl.string(y.t.lqaIxI) } = t,
        { avatarSrc: g, eventHandlers: m } = (0, j.A)({ avatarId: A, storageHash: h }),
        { onMouseEnter: x, onMouseLeave: p } = m,
        C = l.useRef(null),
        E = f ?? h.substring(0, 6).toUpperCase(),
        N = y.intl.formatToPlainString(y.t.tmJ75y, { orderNumber: a + 1, description: E }),
        T = y.intl.formatToPlainString(y.t.pBzwhc, { orderNumber: a + 1, description: E });
    return (0, n.jsxs)("div", {
        className: v.ge,
        children: [
            (0, n.jsx)(o.D, {
                onClick: () => r(t),
                onMouseEnter: x,
                onMouseLeave: p,
                className: v.Hk,
                "aria-label": N,
                innerRef: i,
                children: (0, n.jsx)("img", { src: g, alt: f, className: v.Hc }),
            }),
            (0, n.jsx)(c.m, {
                text: y.intl.string(y.t.N86XcP),
                anchorRef: C,
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(u.vN, {
                    children: (0, n.jsx)("button", {
                        type: "button",
                        ref: C,
                        "aria-label": T,
                        onClick: (e) => s(e, a, A, h, T),
                        className: v.G5,
                        children: (0, n.jsx)(d.u, { size: "xs", color: "currentColor", className: v.fy }),
                    }),
                }),
            }),
        ],
    });
}
function _(e) {
    let { avatars: t, onComplete: r, setFetchError: c, className: o } = e,
        u = (0, i.bG)([x.default], () => x.default.getCurrentUser()),
        d = l.useRef([]),
        g = l.useRef(null),
        m = l.useRef(t.length),
        E = l.useRef(null),
        [j, _] = l.useState(!1),
        [F, L] = l.useState(!1),
        S = t.length,
        H = Math.max(6 - S, 0),
        w = (0, A.k)(),
        I = l.useCallback(
            async (e) => {
                if (null == u || j) return;
                _(!0), c(null);
                let { id: t, storageHash: l, description: s } = e,
                    i = (0, p.Xp)({
                        userId: u.id,
                        avatarId: t,
                        storageHash: l,
                        size: T.XAf,
                        canAnimate: !0,
                        allowWebp: !1,
                    });
                try {
                    let t = await fetch(i),
                        c = await t.blob(),
                        { filename: o, type: u } = (0, p.yM)(l, s);
                    (0, h.openModalLazy)(
                        async () => {
                            let { default: t } = await Promise.all([
                                a.e("24199"),
                                a.e("55202"),
                                a.e("51793"),
                                a.e("29259"),
                                a.e("74571"),
                                a.e("69752"),
                            ]).then(a.bind(a, 142630));
                            return (a) =>
                                (0, n.jsx)(t, {
                                    imageUri: i,
                                    file: new File([c], o, { type: u }),
                                    originalAsset: e,
                                    onCrop: r,
                                    uploadType: R.HL.AVATAR,
                                    showUpsellHeader: !0,
                                    ...a,
                                });
                        },
                        { contextKey: w },
                    );
                } catch (e) {
                    c(y.intl.string(y.t.fZRH9P));
                } finally {
                    _(!1);
                }
            },
            [w, j, r, c, u],
        ),
        M = l.useCallback(
            (e, l, r, s, i) => {
                let c = l + 1 < t.length ? l + 1 : l - 1;
                (E.current = c >= 0 ? d.current[c] : g.current),
                    e.shiftKey
                        ? (0, C.O)(r)
                        : (L(!0),
                          (0, h.openModalLazy)(async () => {
                              let { default: e } = await a.e("26563").then(a.bind(a, 555251));
                              return (t) => {
                                  let { onClose: a, ...l } = t;
                                  return (0, n.jsx)(e, {
                                      avatarId: r,
                                      storageHash: s,
                                      avatarDescription: i,
                                      onConfirmDelete: () => (0, C.O)(r),
                                      onClose: async () => {
                                          await a(),
                                              requestAnimationFrame(() => {
                                                  L(!1);
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
            F ||
                (t.length < m.current &&
                    null != E.current &&
                    requestAnimationFrame(() => {
                        E.current?.focus();
                    }),
                (m.current = t.length));
        }, [t.length, F]),
        (0, n.jsx)("div", {
            className: s()(v.AU, o),
            children: (0, n.jsxs)("div", {
                className: v.mE,
                children: [
                    S > 0 &&
                        (0, n.jsx)("ul", {
                            "aria-label": y.intl.string(y.t.lsU63N),
                            className: v.xL,
                            children: t.map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        children: (0, n.jsx)(b, {
                                            avatar: e,
                                            index: t,
                                            onSelectRecentAvatar: I,
                                            onDeleteRecentAvatar: M,
                                            avatarButtonRef: (e) => {
                                                d.current[t] = e;
                                            },
                                        }),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    H > 0 &&
                        (0, n.jsxs)("div", {
                            className: v.wh,
                            tabIndex: -1,
                            ref: g,
                            children: [
                                (0, n.jsxs)(f.A, {
                                    children: [
                                        0 === S &&
                                            (0, n.jsxs)(n.Fragment, { children: [y.intl.string(y.t.x0DsRS), " "] }),
                                        y.intl.format(y.t["8W2HO3"], { numberOfEmptyAvatarSlots: H }),
                                    ],
                                }),
                                [...Array(H)].map((e, t) => (0, n.jsx)(N.A, { className: v.rZ }, t)),
                            ],
                        }),
                ],
            }),
        })
    );
}
function F(e) {
    let { className: t, onComplete: a } = e,
        { avatars: r, loading: i, error: c } = (0, E.b)(),
        [o, u] = l.useState(null),
        d = o ?? c?.message;
    return (
        l.useEffect(() => {
            (0, C.I)();
        }, []),
        (0, n.jsx)("div", {
            className: s()(v.kL, t),
            children: (0, n.jsx)(g.D, {
                label: y.intl.string(y.t.Bnq9zK),
                description: y.intl.format(y.t["+CyJu3"], { recentAvatarsLimit: 6 }),
                errorMessage: d,
                children: i
                    ? (0, n.jsx)(m.y, { className: v.u1 })
                    : (0, n.jsx)(_, {
                          avatars: r,
                          onComplete: a,
                          setFetchError: u,
                          className: null != d ? v.JD : void 0,
                      }),
            }),
        })
    );
}
