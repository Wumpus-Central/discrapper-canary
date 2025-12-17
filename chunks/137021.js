n.d(t, { default: () => O }), n(388685);
var l = n(54381),
    r = n(473749),
    s = n(793030),
    a = n(442837),
    i = n(481060),
    u = n(904245),
    o = n(311819),
    c = n(835473),
    d = n(957730),
    f = n(987509),
    b = n(72214),
    h = n(592125),
    m = n(594174),
    p = n(572004),
    g = n(823379),
    x = n(479713),
    y = n(207003),
    j = n(959517),
    v = n(388032),
    S = n(925969),
    P = n(621054);
function O(e) {
    let {
            applicationId: t,
            customId: n,
            linkId: O,
            message: Z,
            onClose: E,
            onCopyLink: L,
            onShare: T,
            transitionState: C,
        } = e,
        [w] = (0, c.Z)([t]),
        _ = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        [k, N] = r.useState(!1),
        [R, M] = r.useState(""),
        [D, A] = r.useState("");
    r.useEffect(() => {
        A(
            (0, o.H)({
                applicationId: t,
                referrerId: null == _ ? void 0 : _.id,
                customId: n,
                linkId: O,
            }),
        );
    }, [t, _, n, O, A]);
    let I = r.useRef(0),
        [F, U] = r.useState([]),
        q = F.length,
        G = q >= 5;
    r.useEffect(() => {
        if ("" === R) {
            var e;
            null == (e = z.current) || e.focus();
        }
    }, [R]);
    let H = r.useCallback(() => {
            M("");
        }, [M]),
        z = r.useRef(null),
        { results: W, updateSearchText: V } = (0, b.s)({
            selectedDestinations: F,
            includeMissingDMs: !0,
        }),
        Q = r.useCallback(
            (e) => {
                M(e), V(e);
            },
            [M, V],
        ),
        J = r.useCallback(
            (e) => {
                U((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: l } = t;
                        return n === e.type && l === e.id;
                    });
                    if (-1 === n) return G ? t : (M(""), (I.current += 1), [e, ...t]);
                    let l = [...t];
                    return l.splice(n, 1), (I.current += 1), l;
                });
            },
            [G],
        ),
        X = r.useCallback(
            async (e) => {
                if (null == w) return;
                let t = (0, x.P)(Z, w, D);
                N(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let n = h.Z.getChannel(e);
                        null != n &&
                            (await u.Z.sendMessage(e, d.ZP.parse(n, t), !1, { location: j.dy.ACTIVITY_SHARE }));
                    }),
                    (0, i.showToast)(
                        (0, i.createToast)(
                            v.intl.formatToPlainString(v.t.jQULqL, { applicationName: w.name }),
                            i.ToastType.SUCCESS,
                        ),
                    ),
                    T(!0),
                    E();
            },
            [Z, D, E, T, w],
        ),
        B = r.useCallback(() => {
            (0, p.JG)(D, () => {
                L(), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t.t5VZ88), i.ToastType.SUCCESS));
            });
        }, [D, L]),
        Y =
            W.length > 0
                ? (0, l.jsx)(y.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: W,
                      handleToggleDestination: J,
                      selectedDestinations: F,
                      disableSelection: G,
                  })
                : (0, l.jsxs)("div", {
                      className: S.noResults,
                      children: [
                          (0, l.jsx)("img", {
                              className: S.noResultsImg,
                              src: P,
                              alt: "",
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: v.intl.string(v.t.V6nAfF),
                          }),
                      ],
                  });
    return (0, l.jsx)(s.Modal, {
        transitionState: C,
        onClose: E,
        title: v.intl.string(v.t.r9qKow),
        subtitle: Z,
        size: "md",
        input: (0, l.jsx)(i.E1j, {
            ref: z,
            query: R,
            onChange: Q,
            onClear: H,
            placeholder: v.intl.string(v.t["5h0QOP"]),
            "aria-label": v.intl.string(v.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actions: [
            {
                text: v.intl.string(v.t.WqhZss),
                variant: "secondary",
                onClick: B,
            },
            {
                text: v.intl.string(v.t.TXNS7S),
                variant: "primary",
                onClick: () => X(F),
                loading: k,
                disabled: !(q > 0),
            },
        ],
        children: Y,
    });
}
