n.d(t, { default: () => M });
var i = n(627968),
    r = n(64700),
    a = n(835245),
    s = n(158954),
    o = n(554146),
    l = n(397927),
    u = n(379848),
    c = n(95035),
    d = n(632738),
    A = n(105428),
    _ = n(975571),
    E = n(935649),
    f = n(847599),
    R = n(36149),
    p = n(737567),
    C = n(40449),
    m = n(652215),
    I = n(239093),
    h = n(985018),
    x = n(891921);
let M = function (e) {
    let { transitionState: t, entryPoint: n, onClose: M } = e,
        [T, k] = r.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        S = r.useRef(T),
        [b, g] = (0, u.kn)([T], void 0, !0),
        { loading: P, initiateAgeVerification: U } = (0, R.nn)({ onComplete: M, entryPoint: n }),
        v = r.useMemo(() => (0, a.A)(), []),
        L = (0, p.I)("age_verification_get_started_modal"),
        N = r.useRef(!1);
    return (
        r.useEffect(() => {
            S.current = b;
        }, [b]),
        r.useLayoutEffect(
            () => () => {
                if (N.current) return;
                let e = S.current;
                null != e &&
                    ((N.current = !0),
                    A.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, f.Bs)(v, f.WU.PRIMARY, n);
        }, [v, n]),
        (0, i.jsxs)(s.Modal, {
            transitionState: t,
            onClose: M,
            title: (0, R.ST)(n),
            subtitle: (0, R.mK)(n),
            actions: [
                {
                    text: h.intl.string(h.t.SJMnkX),
                    loading: P,
                    icon: l.I9m,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, f.St)(v, f.WU.PRIMARY, f._7.GET_STARTED),
                            k(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await U();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(c.A, {
                onClick: () => {
                    E.A.openUrl(_.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.St)(v, f.WU.PRIMARY, f._7.LEARN_MORE);
                },
                className: x.A,
                children: [h.intl.string(h.t["aA6q/z"]), (0, i.jsx)(l.I9m, { size: "xs", color: "currentColor" })],
            }),
            children: [
                (0, C.f6)(v).map((e, t) => {
                    let { title: n, description: r } = e;
                    return (0, i.jsx)(d.PQ, { title: n, description: r, listType: "numbered", index: t }, t);
                }),
                !L &&
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: x.B,
                        children: h.intl.format(h.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                E.A.openUrl(I.d$.APPEALS_LINK), (0, f.St)(v, f.WU.PRIMARY, f._7.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
