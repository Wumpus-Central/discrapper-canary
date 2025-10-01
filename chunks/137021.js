n.d(t, { default: () => Z }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(442837),
    i = n(82659),
    s = n(481060),
    u = n(904245),
    o = n(311819),
    c = n(835473),
    d = n(957730),
    f = n(987509),
    b = n(72214),
    p = n(592125),
    h = n(594174),
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
            message: O,
            onClose: P,
            onCopyLink: _,
            onShare: C,
            transitionState: L,
        } = e,
        [T] = (0, c.Z)([t]),
        N = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        [w, D] = l.useState(!1),
        [R, M] = l.useState(""),
        [k, A] = l.useState("");
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
        [U, H] = l.useState([]),
        q = U.length,
        F = q >= 5;
    l.useEffect(() => {
        if ("" === R) {
            var e;
            null == (e = G.current) || e.focus();
        }
    }, [R]);
    let z = l.useCallback(() => {
            M("");
        }, [M]),
        G = l.useRef(null),
        { results: V, updateSearchText: W } = (0, b.s)({
            selectedDestinations: U,
            includeMissingDMs: !0,
        }),
        Q = l.useCallback(
            (e) => {
                M(e), W(e);
            },
            [M, W],
        ),
        X = l.useCallback(
            (e) => {
                H((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return F ? t : (M(""), (I.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (I.current += 1), r;
                });
            },
            [F],
        ),
        J = l.useCallback(
            async (e) => {
                if (null == T) return;
                let t = (0, y.P)(O, T, k);
                D(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let n = p.Z.getChannel(e);
                        null != n &&
                            (await u.Z.sendMessage(e, d.ZP.parse(n, t), !1, { location: v.dy.ACTIVITY_SHARE }));
                    }),
                    (0, s.showToast)(
                        (0, s.createToast)(
                            S.intl.formatToPlainString(S.t.jQULqK, { applicationName: T.name }),
                            s.ToastType.SUCCESS,
                        ),
                    ),
                    C(!0),
                    P();
            },
            [O, k, P, C, T],
        ),
        B = l.useCallback(() => {
            (0, m.JG)(k, () => {
                _(), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t["t5VZ8/"]), s.ToastType.SUCCESS));
            });
        }, [k, _]),
        K =
            V.length > 0
                ? (0, r.jsx)(x.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: V,
                      handleToggleDestination: X,
                      selectedDestinations: U,
                      disableSelection: F,
                  })
                : (0, r.jsxs)("div", {
                      className: E.noResults,
                      children: [
                          (0, r.jsx)("img", {
                              className: E.noResultsImg,
                              src: j,
                              alt: "",
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfH),
                          }),
                      ],
                  });
    return (0, r.jsx)(i.Modal, {
        transitionState: L,
        onClose: P,
        title: S.intl.string(S.t.r9qKo6),
        subtitle: O,
        size: "md",
        input: (0, r.jsx)(s.E1j, {
            ref: G,
            query: R,
            onChange: Q,
            onClear: z,
            placeholder: S.intl.string(S.t["5h0QOD"]),
            "aria-label": S.intl.string(S.t["5h0QOD"]),
            autoFocus: !0,
        }),
        actions: [
            {
                text: S.intl.string(S.t.WqhZsr),
                variant: "secondary",
                onClick: B,
            },
            {
                text: S.intl.string(S.t.TXNS7e),
                variant: "primary",
                onClick: () => J(U),
                loading: w,
                disabled: !(q > 0),
            },
        ],
        children: K,
    });
}
