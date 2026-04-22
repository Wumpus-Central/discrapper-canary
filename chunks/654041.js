n.d(t, { default: () => g });
var i = n(627968),
    l = n(64700),
    r = n(835245),
    s = n(189213),
    a = n(554146),
    o = n(509434),
    c = n(834730),
    d = n(932001),
    u = n(95035),
    x = n(632738),
    _ = n(105428),
    m = n(975571),
    h = n(935649),
    f = n(847599),
    E = n(36149),
    v = n(737567),
    A = n(40449),
    j = n(652215),
    b = n(239093),
    p = n(985018),
    R = n(481446);
let g = function (e) {
    let { transitionState: t, entryPoint: n, onClose: g } = e,
        [k, C] = l.useState(a.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        N = l.useRef(k),
        [I, M] = (0, d.kn)([k], void 0, !0),
        { loading: T, initiateAgeVerification: S } = (0, E.nn)({ onComplete: g, entryPoint: n }),
        P = l.useMemo(() => (0, r.A)(), []),
        w = (0, v.I)("age_verification_get_started_modal"),
        L = l.useRef(!1);
    return (
        l.useEffect(() => {
            N.current = I;
        }, [I]),
        l.useLayoutEffect(
            () => () => {
                if (L.current) return;
                let e = N.current;
                null != e &&
                    ((L.current = !0),
                    _.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        l.useEffect(() => {
            (0, f.Bs)(P, f.WU.PRIMARY, n);
        }, [P, n]),
        (0, i.jsxs)(s.Modal, {
            transitionState: t,
            onClose: g,
            title: (0, E.ST)(n),
            subtitle: (0, E.mK)(n),
            actions: [
                {
                    text: p.intl.string(p.t.SJMnkX),
                    loading: T,
                    icon: o.I,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, f.St)(P, f.WU.PRIMARY, f._7.GET_STARTED),
                            C(a.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await S();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(u.A, {
                onClick: () => {
                    h.A.openUrl(m.A.getArticleURL(j.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.St)(P, f.WU.PRIMARY, f._7.LEARN_MORE);
                },
                className: R.A,
                children: [p.intl.string(p.t["aA6q/z"]), (0, i.jsx)(o.I, { size: "xs", color: "currentColor" })],
            }),
            children: [
                (0, A.f6)(P).map((e, t) => {
                    let { title: n, description: l } = e;
                    return (0, i.jsx)(x.PQ, { title: n, description: l, listType: "numbered", index: t }, t);
                }),
                !w &&
                    (0, i.jsx)(c.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: R.B,
                        children: p.intl.format(p.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                h.A.openUrl(b.d$.APPEALS_LINK), (0, f.St)(P, f.WU.PRIMARY, f._7.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
