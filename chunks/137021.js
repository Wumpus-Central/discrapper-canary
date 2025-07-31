(n.d(t, { default: () => E }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    s = n(82659),
    i = n(481060),
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
    x = n(388032),
    v = n(277580),
    S = n(621054);
function E(e) {
    let { applicationId: t, customId: n, linkId: E, message: j, onClose: Z, onCopyLink: O, onShare: _, transitionState: P } = e,
        [C] = (0, c.Z)([t]),
        L = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        [T, N] = l.useState(!1),
        [w, D] = l.useState(''),
        [R, M] = l.useState('');
    l.useEffect(() => {
        M(
            (0, o.H)({
                applicationId: t,
                referrerId: null == L ? void 0 : L.id,
                customId: n,
                linkId: E
            })
        );
    }, [t, L, n, E, M]);
    let k = l.useRef(0),
        [A, I] = l.useState([]),
        U = A.length,
        H = U >= 5;
    l.useEffect(() => {
        if ('' === w) {
            var e;
            null == (e = q.current) || e.focus();
        }
    }, [w]);
    let F = l.useCallback(() => {
            D('');
        }, [D]),
        q = l.useRef(null),
        { results: z, updateSearchText: G } = (0, b.s)({
            selectedDestinations: A,
            includeMissingDMs: !0
        }),
        W = l.useCallback(
            (e) => {
                (D(e), G(e));
            },
            [D, G]
        ),
        V = l.useCallback(
            (e) => {
                I((t) => {
                    let n = t.findIndex((t) => {
                        let { type: n, id: r } = t;
                        return n === e.type && r === e.id;
                    });
                    if (-1 === n) return H ? t : (D(''), (k.current += 1), [e, ...t]);
                    let r = [...t];
                    return (r.splice(n, 1), (k.current += 1), r);
                });
            },
            [H]
        ),
        X = l.useCallback(
            async (e) => {
                if (null == C) return;
                let t = x.intl.formatToMarkdownString(x.t.dZJpdH, {
                        applicationName: C.name,
                        link: R
                    }),
                    n = ''.concat(j, '\n\n').concat(t);
                (N(!0),
                    (await Promise.all(e.map(f.qx))).filter(g.lm).forEach(async (e) => {
                        let t = p.Z.getChannel(e);
                        null != t && (await u.Z.sendMessage(e, d.ZP.parse(t, n), !1));
                    }),
                    (0, i.showToast)((0, i.createToast)(x.intl.formatToPlainString(x.t.jQULqK, { applicationName: C.name }), i.ToastType.SUCCESS)),
                    _(!0),
                    Z());
            },
            [j, R, Z, _, C]
        ),
        J = l.useCallback(() => {
            (0, m.JG)(R, () => {
                (O(), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t['t5VZ8/']), i.ToastType.SUCCESS)));
            });
        }, [R, O]),
        Q =
            z.length > 0
                ? (0, r.jsx)(y.Q, {
                      paddingBottom: 8,
                      paddingTop: 8,
                      rowData: z,
                      handleToggleDestination: V,
                      selectedDestinations: A,
                      disableSelection: H
                  })
                : (0, r.jsxs)('div', {
                      className: v.noResults,
                      children: [
                          (0, r.jsx)('img', {
                              className: v.noResultsImg,
                              src: S,
                              alt: ''
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: x.intl.string(x.t.V6nAfH)
                          })
                      ]
                  });
    return (0, r.jsx)(s.Modal, {
        transitionState: P,
        onClose: Z,
        title: x.intl.string(x.t.r9qKo6),
        subtitle: j,
        size: 'md',
        input: (0, r.jsx)(i.E1j, {
            ref: q,
            query: w,
            onChange: W,
            onClear: F,
            placeholder: x.intl.string(x.t['5h0QOD']),
            'aria-label': x.intl.string(x.t['5h0QOD']),
            autoFocus: !0
        }),
        actions: [
            {
                text: x.intl.string(x.t.WqhZsr),
                variant: 'secondary',
                onClick: J
            },
            {
                text: x.intl.string(x.t.TXNS7e),
                variant: 'primary',
                onClick: () => X(A),
                loading: T,
                disabled: !(U > 0)
            }
        ],
        children: Q
    });
}
