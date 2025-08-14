n.d(t, { default: () => j }), n(388685);
var r = n(255367),
    l = n(73800),
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
    y = n(207003),
    x = n(959517),
    v = n(388032),
    S = n(834505),
    E = n(621054);
function j(e) {
    let {
            applicationId: t,
            customId: n,
            linkId: j,
            message: Z,
            onClose: O,
            onCopyLink: _,
            onShare: P,
            transitionState: C,
        } = e,
        [L] = (0, c.Z)([t]),
        T = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        [N, w] = l.useState(!1),
        [D, R] = l.useState(""),
        [M, k] = l.useState("");
    l.useEffect(() => {
        k(
            (0, o.H)({
                applicationId: t,
                referrerId: null == T ? void 0 : T.id,
                customId: n,
                linkId: j,
            }),
        );
    }, [t, T, n, j, k]);
    let A = l.useRef(0),
        [I, U] = l.useState([]),
        H = I.length,
        F = H >= 5;
    l.useEffect(() => {
        if ("" === D) {
            var e;
            null == (e = z.current) || e.focus();
        }
    }, [D]);
    let q = l.useCallback(() => {
            R("");
        }, [R]),
        z = l.useRef(null),
        { results: G, updateSearchText: V } = (0, b.s)({
            selectedDestinations: I,
            includeMissingDMs: !0,
        }),
        W = l.useCallback(
            (e) => {
                R(e), V(e);
            },
            [R, V],
        ),
        X = l.useCallback(
            (e) => {
                U((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return F ? t : (R(""), (A.current += 1), [e, ...t]);
                    let r = [...t];
                    return r.splice(n, 1), (A.current += 1), r;
                });
            },
            [F],
        ),
        J = l.useCallback(
            async (e) => {
                if (null == L) return;
                let t = v.intl.formatToMarkdownString(v.t.dZJpdH, {
                        applicationName: L.name,
                        link: M,
                    }),
                    n = "".concat(Z, "\n\n").concat(t);
                w(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let t = p.Z.getChannel(e);
                        null != t &&
                            (await u.Z.sendMessage(e, d.ZP.parse(t, n), !1, { location: x.dy.ACTIVITY_SHARE }));
                    }),
                    (0, s.showToast)(
                        (0, s.createToast)(
                            v.intl.formatToPlainString(v.t.jQULqK, { applicationName: L.name }),
                            s.ToastType.SUCCESS,
                        ),
                    ),
                    P(!0),
                    O();
            },
            [Z, M, O, P, L],
        ),
        Q = l.useCallback(() => {
            (0, m.JG)(M, () => {
                _(), (0, s.showToast)((0, s.createToast)(v.intl.string(v.t["t5VZ8/"]), s.ToastType.SUCCESS));
            });
        }, [M, _]),
        B =
            G.length > 0
                ? (0, r.jsx)(y.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: G,
                      handleToggleDestination: X,
                      selectedDestinations: I,
                      disableSelection: F,
                  })
                : (0, r.jsxs)("div", {
                      className: S.noResults,
                      children: [
                          (0, r.jsx)("img", {
                              className: S.noResultsImg,
                              src: E,
                              alt: "",
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: v.intl.string(v.t.V6nAfH),
                          }),
                      ],
                  });
    return (0, r.jsx)(i.Modal, {
        transitionState: C,
        onClose: O,
        title: v.intl.string(v.t.r9qKo6),
        subtitle: Z,
        size: "md",
        input: (0, r.jsx)(s.E1j, {
            ref: z,
            query: D,
            onChange: W,
            onClear: q,
            placeholder: v.intl.string(v.t["5h0QOD"]),
            "aria-label": v.intl.string(v.t["5h0QOD"]),
            autoFocus: !0,
        }),
        actions: [
            {
                text: v.intl.string(v.t.WqhZsr),
                variant: "secondary",
                onClick: Q,
            },
            {
                text: v.intl.string(v.t.TXNS7e),
                variant: "primary",
                onClick: () => J(I),
                loading: N,
                disabled: !(H > 0),
            },
        ],
        children: B,
    });
}
