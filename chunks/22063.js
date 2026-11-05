a.d(t, { default: () => g });
var s = a(477900),
    i = a(582128),
    n = a(554146),
    l = a(772707),
    r = a(192308),
    c = a(73153),
    u = a(543862),
    d = a(780964),
    o = a(766075),
    N = a(129230),
    _ = a(899847),
    f = a(695515),
    A = a(191627),
    S = a(652215),
    E = a(49999),
    p = a(665956),
    R = a(792996);
let b = "modal",
    C = n.M.PARENTAL_CONSENT_GRACE_WARNING;
function g(e) {
    let { daysRemaining: t, transitionState: n, onClose: g } = e;
    (0, R.useSyncMessages)(p.messagesLoader);
    let k = i.useRef(!1),
        m = i.useCallback(
            () => !k.current && ((k.current = !0), (0, u.uh)(C, { dismissAction: E.i.USER_DISMISS }), !0),
            [],
        );
    i.useEffect(() => {
        (N.default.track(S.HAw.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, { surface_type: b, days_remaining: t }),
            c.h.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" }));
    }, []);
    let T = i.useCallback(
            () => (
                m() &&
                    N.default.track(S.HAw.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, {
                        surface_type: b,
                        days_remaining: t,
                    }),
                g()
            ),
            [t, g, m],
        ),
        h = i.useCallback(() => {
            if (
                (m(),
                g(),
                Object.values(f.A.getLinkedUsers()).some(
                    (e) => e.link_status === A.Ef.PENDING && e.link_type === A.QM.PARENT,
                ))
            ) {
                (_.Ay.selectTab(A.u9.REQUESTS), (0, o.openUserSettings)(d.X.FAMILY_CENTER_PANEL));
                return;
            }
            (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    a.e(72338),
                    a.e(776915),
                    a.e(595429),
                    a.e(595948),
                    a.e(490028),
                    a.e(783988),
                    a.e(170653),
                    a.e(143549),
                    a.e(154630),
                    a.e(525989),
                    a.e(813036),
                    a.e(735611),
                ]).then(a.bind(a, 207049));
                return (t) => (0, s.jsx)(e, { ...t });
            });
        }, [g, m]),
        y = 0 === t,
        I = y ? R.intl.string(p.default.Zo5YZD) : R.intl.formatToPlainString(p.default.b4sYUn, { count: t }),
        P = y ? R.intl.string(p.default.CRZBSY) : R.intl.formatToPlainString(p.default.mQcGGY, { count: t });
    return (0, s.jsx)(l.k, {
        transitionState: n,
        onClose: T,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f476cb6f746195eb40948b6e306ee343417b7b78be15a0e4f7930f8efdb3d0d4.svg",
            aspectRatio: "16/9",
        },
        title: I,
        subtitle: P,
        actions: [
            { variant: "primary", text: R.intl.string(p.default.Kp7sjX), onClick: h },
            { variant: "secondary", text: R.intl.string(p.default.hST5o8), onClick: T },
        ],
    });
}
