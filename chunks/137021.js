n.d(t, { default: () => Z }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(793030),
    s = n(442837),
    i = n(481060),
    u = n(904245),
    o = n(311819),
    c = n(835473),
    d = n(957730),
    f = n(987509),
    b = n(72214),
    h = n(592125),
    p = n(594174),
    m = n(572004),
    g = n(823379),
    y = n(479713),
    x = n(207003),
    v = n(959517),
    S = n(388032),
    E = n(834505),
    j = n(621054);
function Z(e) {
    let {
            applicationId: t,
            customId: n,
            linkId: Z,
            message: P,
            onClose: _,
            onCopyLink: O,
            onShare: C,
            transitionState: L,
        } = e,
        [T] = (0, c.Z)([t]),
        N = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        [w, R] = l.useState(!1),
        [k, D] = l.useState(""),
        [M, A] = l.useState("");
    l.useEffect(() => {
        A(
            (0, o.H)({
                applicationId: t,
                referrerId: null == N ? void 0 : N.id,
                customId: n,
                linkId: Z,
            }),
        );
    }, [t, N, n, Z, A]);
    let I = l.useRef(0),
        [U, F] = l.useState([]),
        H = U.length,
        q = H >= 5;
    l.useEffect(() => {
        if ("" === k) {
            var e;
            null == (e = z.current) || e.focus();
        }
    }, [k]);
    let G = l.useCallback(() => {
            D("");
        }, [D]),
        z = l.useRef(null),
        { results: V, updateSearchText: W } = (0, b.s)({
            selectedDestinations: U,
            includeMissingDMs: !0,
        }),
        Q = l.useCallback(
            (e) => {
                D(e), W(e);
            },
            [D, W],
        ),
        X = l.useCallback(
            (e) => {
                F((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return q ? t : (D(""), (I.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (I.current += 1), r;
                });
            },
            [q],
        ),
        J = l.useCallback(
            async (e) => {
                if (null == T) return;
                let t = (0, y.P)(P, T, M);
                R(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let n = h.Z.getChannel(e);
                        null != n &&
                            (await u.Z.sendMessage(e, d.ZP.parse(n, t), !1, { location: v.dy.ACTIVITY_SHARE }));
                    }),
                    (0, i.showToast)(
                        (0, i.createToast)(
                            S.intl.formatToPlainString(S.t.jQULqL, { applicationName: T.name }),
                            i.ToastType.SUCCESS,
                        ),
                    ),
                    C(!0),
                    _();
            },
            [P, M, _, C, T],
        ),
        Y = l.useCallback(() => {
            (0, m.JG)(M, () => {
                O(), (0, i.showToast)((0, i.createToast)(S.intl.string(S.t.t5VZ88), i.ToastType.SUCCESS));
            });
        }, [M, O]),
        B =
            V.length > 0
                ? (0, r.jsx)(x.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: V,
                      handleToggleDestination: X,
                      selectedDestinations: U,
                      disableSelection: q,
                  })
                : (0, r.jsxs)("div", {
                      className: E.noResults,
                      children: [
                          (0, r.jsx)("img", {
                              className: E.noResultsImg,
                              src: j,
                              alt: "",
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, r.jsx)(a.Modal, {
        transitionState: L,
        onClose: _,
        title: S.intl.string(S.t.r9qKow),
        subtitle: P,
        size: "md",
        input: (0, r.jsx)(i.E1j, {
            ref: z,
            query: k,
            onChange: Q,
            onClear: G,
            placeholder: S.intl.string(S.t["5h0QOP"]),
            "aria-label": S.intl.string(S.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            {
                text: S.intl.string(S.t.WqhZss),
                variant: "secondary",
                onClick: Y,
            },
            {
                text: S.intl.string(S.t.TXNS7S),
                variant: "primary",
                onClick: () => J(U),
                loading: w,
                disabled: !(H > 0),
            },
        ],
        children: B,
    });
}
