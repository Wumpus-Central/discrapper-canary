a.d(e, { default: () => A });
var s = a(627968),
    i = a(64700),
    n = a(554146),
    l = a(772707),
    c = a(192308),
    r = a(228366),
    d = a(367727),
    u = a(174459),
    o = a(652215),
    N = a(49999),
    _ = a(602339),
    f = a(375708);
let S = "modal",
    p = n.M.PARENTAL_CONSENT_GRACE_WARNING;
function A(t) {
    let { daysRemaining: e, transitionState: n, onClose: A } = t;
    (0, f.useSyncMessages)(_.messagesLoader);
    let b = i.useRef(!1),
        C = i.useCallback(
            () => !b.current && ((b.current = !0), (0, d.uh)(p, { dismissAction: N.i.USER_DISMISS }), !0),
            [],
        );
    i.useEffect(() => {
        u.default.track(o.HAw.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, { surface_type: S, days_remaining: e }),
            r.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
    }, []);
    let R = i.useCallback(
            () => (
                C() &&
                    u.default.track(o.HAw.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, {
                        surface_type: S,
                        days_remaining: e,
                    }),
                A()
            ),
            [e, A, C],
        ),
        E = i.useCallback(() => {
            C(),
                A(),
                (0, c.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        a.e("37757"),
                        a.e("91990"),
                        a.e("95429"),
                        a.e("45488"),
                        a.e("43549"),
                        a.e("54630"),
                        a.e("48370"),
                        a.e("57895"),
                        a.e("50748"),
                    ]).then(a.bind(a, 723482));
                    return (e) => (0, s.jsx)(t, { ...e });
                });
        }, [A, C]),
        g = 0 === e,
        m = g ? f.intl.string(_.default.Zo5YZD) : f.intl.formatToPlainString(_.default.b4sYUn, { count: e }),
        h = g ? f.intl.string(_.default.CRZBSY) : f.intl.formatToPlainString(_.default.mQcGGY, { count: e });
    return (0, s.jsx)(l.k, {
        transitionState: n,
        onClose: R,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/29c21d5b5fa36b3b4d34d6b61f356260d61a6602220f121b7b9bd43cc2270bd5.svg",
            aspectRatio: "16/9",
        },
        title: m,
        subtitle: h,
        actions: [
            { variant: "primary", text: f.intl.string(_.default.Kp7sjX), onClick: E },
            { variant: "secondary", text: f.intl.string(_.default.hST5o8), onClick: R },
        ],
    });
}
