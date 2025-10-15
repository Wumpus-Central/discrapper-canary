n.d(t, { default: () => Z }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(793030),
    i = n(442837),
    s = n(481060),
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
    j = n(834505),
    E = n(621054);
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
        N = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        [w, D] = l.useState(!1),
        [R, k] = l.useState(""),
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
        [U, H] = l.useState([]),
        F = U.length,
        q = F >= 5;
    l.useEffect(() => {
        if ("" === R) {
            var e;
            null == (e = z.current) || e.focus();
        }
    }, [R]);
    let G = l.useCallback(() => {
            k("");
        }, [k]),
        z = l.useRef(null),
        { results: W, updateSearchText: V } = (0, b.s)({
            selectedDestinations: U,
            includeMissingDMs: !0,
        }),
        Q = l.useCallback(
            (e) => {
                k(e), V(e);
            },
            [k, V],
        ),
        X = l.useCallback(
            (e) => {
                H((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return q ? t : (k(""), (I.current += 1), [e, ...t]);
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
                D(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let n = h.Z.getChannel(e);
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
                    _();
            },
            [P, M, _, C, T],
        ),
        B = l.useCallback(() => {
            (0, m.JG)(M, () => {
                O(), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t["t5VZ8/"]), s.ToastType.SUCCESS));
            });
        }, [M, O]),
        K =
            W.length > 0
                ? (0, r.jsx)(x.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: W,
                      handleToggleDestination: X,
                      selectedDestinations: U,
                      disableSelection: q,
                  })
                : (0, r.jsxs)("div", {
                      className: j.noResults,
                      children: [
                          (0, r.jsx)("img", {
                              className: j.noResultsImg,
                              src: E,
                              alt: "",
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t.V6nAfH),
                          }),
                      ],
                  });
    return (0, r.jsx)(a.Modal, {
        transitionState: L,
        onClose: _,
        title: S.intl.string(S.t.r9qKo6),
        subtitle: P,
        size: "md",
        input: (0, r.jsx)(s.E1j, {
            ref: z,
            query: R,
            onChange: Q,
            onClear: G,
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
                disabled: !(F > 0),
            },
        ],
        children: K,
    });
}
