n.d(t, { default: () => C }), n(896048), n(228524);
var i = n(627968),
    s = n(64700),
    a = n(835245),
    r = n(158954),
    o = n(554146),
    l = n(397927),
    c = n(379848),
    d = n(95035),
    u = n(632738),
    _ = n(105428),
    A = n(975571),
    E = n(935649),
    R = n(847599),
    f = n(36149),
    m = n(737567),
    I = n(40449),
    p = n(652215),
    M = n(239093),
    T = n(985018),
    x = n(891921);
let C = function (e) {
    let { transitionState: t, entryPoint: n, onClose: C } = e,
        [S, k] = s.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        U = s.useRef(S),
        [g, h] = (0, c.kn)([S], void 0, !0),
        { loading: L, initiateAgeVerification: O } = (0, f.nn)({
            onComplete: C,
            entryPoint: n,
        }),
        P = s.useMemo(() => (0, a.A)(), []),
        b = (0, m.I)("age_verification_get_started_modal"),
        N = s.useRef(!1);
    return (
        s.useEffect(() => {
            U.current = g;
        }, [g]),
        s.useLayoutEffect(
            () => () => {
                if (N.current) return;
                let e = U.current;
                null != e &&
                    ((N.current = !0),
                    _.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        s.useEffect(() => {
            (0, R.Bs)(P, R.WU.PRIMARY, n);
        }, [P, n]),
        (0, i.jsxs)(r.Modal, {
            transitionState: t,
            onClose: C,
            title: (0, f.ST)(n),
            subtitle: (0, f.mK)(n),
            actions: [
                {
                    text: T.intl.string(T.t.SJMnkX),
                    loading: L,
                    icon: l.I9m,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, R.St)(P, R.WU.PRIMARY, R._7.GET_STARTED),
                            k(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await O();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(d.A, {
                onClick: () => {
                    E.A.openUrl(A.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, R.St)(P, R.WU.PRIMARY, R._7.LEARN_MORE);
                },
                className: x.A,
                children: [
                    T.intl.string(T.t["aA6q/z"]),
                    (0, i.jsx)(l.I9m, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, I.f6)(P).map((e, t) => {
                    let { title: n, description: s } = e;
                    return (0, i.jsx)(
                        u.PQ,
                        {
                            title: n,
                            description: s,
                            listType: "numbered",
                            index: t,
                        },
                        t,
                    );
                }),
                !b &&
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: x.B,
                        children: T.intl.format(T.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                E.A.openUrl(M.d$.APPEALS_LINK), (0, R.St)(P, R.WU.PRIMARY, R._7.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
