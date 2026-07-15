a.d(e, { default: () => g });
var s = a(627968),
    n = a(64700),
    i = a(554146),
    l = a(772707),
    r = a(192308),
    c = a(228366),
    d = a(367727),
    u = a(780964),
    o = a(766075),
    N = a(174459),
    _ = a(899847),
    A = a(695515),
    S = a(191627),
    f = a(652215),
    p = a(49999),
    E = a(602339),
    b = a(375708);
let R = "modal",
    C = i.M.PARENTAL_CONSENT_GRACE_WARNING;
function g(t) {
    let { daysRemaining: e, transitionState: i, onClose: g } = t;
    (0, b.useSyncMessages)(E.messagesLoader);
    let k = n.useRef(!1),
        T = n.useCallback(
            () => !k.current && ((k.current = !0), (0, d.uh)(C, { dismissAction: p.i.USER_DISMISS }), !0),
            [],
        );
    n.useEffect(() => {
        N.default.track(f.HAw.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, { surface_type: R, days_remaining: e }),
            c.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
    }, []);
    let m = n.useCallback(
            () => (
                T() &&
                    N.default.track(f.HAw.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, {
                        surface_type: R,
                        days_remaining: e,
                    }),
                g()
            ),
            [e, g, T],
        ),
        y = n.useCallback(() => {
            if (
                (T(),
                g(),
                Object.values(A.A.getLinkedUsers()).some(
                    (t) => t.link_status === S.Ef.PENDING && t.link_type === S.QM.PARENT,
                ))
            ) {
                _.Ay.selectTab(S.u9.REQUESTS), (0, o.openUserSettings)(u.X.FAMILY_CENTER_PANEL);
                return;
            }
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    a.e("37757"),
                    a.e("91990"),
                    a.e("95429"),
                    a.e("45488"),
                    a.e("43549"),
                    a.e("54630"),
                    a.e("48370"),
                    a.e("89419"),
                    a.e("94570"),
                ]).then(a.bind(a, 414833));
                return (e) => (0, s.jsx)(t, { ...e });
            });
        }, [g, T]),
        h = 0 === e,
        I = h ? b.intl.string(E.default.Zo5YZD) : b.intl.formatToPlainString(E.default.b4sYUn, { count: e }),
        L = h ? b.intl.string(E.default.CRZBSY) : b.intl.formatToPlainString(E.default.mQcGGY, { count: e });
    return (0, s.jsx)(l.k, {
        transitionState: i,
        onClose: m,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/29c21d5b5fa36b3b4d34d6b61f356260d61a6602220f121b7b9bd43cc2270bd5.svg",
            aspectRatio: "16/9",
        },
        title: I,
        subtitle: L,
        actions: [
            { variant: "primary", text: b.intl.string(E.default.Kp7sjX), onClick: y },
            { variant: "secondary", text: b.intl.string(E.default.hST5o8), onClick: m },
        ],
    });
}
