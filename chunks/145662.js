a.d(t, { default: () => g });
var s = a(477900),
    n = a(582128),
    i = a(554146),
    l = a(772707),
    r = a(192308),
    c = a(228366),
    u = a(367727),
    d = a(780964),
    o = a(766075),
    N = a(174459),
    _ = a(899847),
    f = a(695515),
    A = a(191627),
    S = a(652215),
    p = a(49999),
    E = a(513687),
    R = a(375708);
let b = "modal",
    C = i.M.PARENTAL_CONSENT_GRACE_WARNING;
function g(e) {
    let { daysRemaining: t, transitionState: i, onClose: g } = e;
    (0, R.useSyncMessages)(E.messagesLoader);
    let k = n.useRef(!1),
        T = n.useCallback(
            () => !k.current && ((k.current = !0), (0, u.uh)(C, { dismissAction: p.i.USER_DISMISS }), !0),
            [],
        );
    n.useEffect(() => {
        N.default.track(S.HAw.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, { surface_type: b, days_remaining: t }),
            c.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
    }, []);
    let m = n.useCallback(
            () => (
                T() &&
                    N.default.track(S.HAw.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, {
                        surface_type: b,
                        days_remaining: t,
                    }),
                g()
            ),
            [t, g, T],
        ),
        y = n.useCallback(() => {
            if (
                (T(),
                g(),
                Object.values(f.A.getLinkedUsers()).some(
                    (e) => e.link_status === A.Ef.PENDING && e.link_type === A.QM.PARENT,
                ))
            ) {
                _.Ay.selectTab(A.u9.REQUESTS), (0, o.openUserSettings)(d.X.FAMILY_CENTER_PANEL);
                return;
            }
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    a.e("262546"),
                    a.e("776915"),
                    a.e("595429"),
                    a.e("290106"),
                    a.e("170653"),
                    a.e("143549"),
                    a.e("154630"),
                    a.e("748370"),
                    a.e("689419"),
                    a.e("94570"),
                ]).then(a.bind(a, 414833));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        }, [g, T]),
        h = 0 === t,
        I = h ? R.intl.string(E.default.Zo5YZD) : R.intl.formatToPlainString(E.default.b4sYUn, { count: t }),
        L = h ? R.intl.string(E.default.CRZBSY) : R.intl.formatToPlainString(E.default.mQcGGY, { count: t });
    return (0, s.jsx)(l.k, {
        transitionState: i,
        onClose: m,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f476cb6f746195eb40948b6e306ee343417b7b78be15a0e4f7930f8efdb3d0d4.svg",
            aspectRatio: "16/9",
        },
        title: I,
        subtitle: L,
        actions: [
            { variant: "primary", text: R.intl.string(E.default.Kp7sjX), onClick: y },
            { variant: "secondary", text: R.intl.string(E.default.hST5o8), onClick: m },
        ],
    });
}
