n.d(t, { default: () => T }), n(388685), n(953529);
var i = n(54381),
    r = n(473749),
    s = n(772848),
    o = n(793030),
    a = n(704215),
    l = n(481060),
    d = n(243778),
    u = n(690221),
    c = n(138201),
    _ = n(420846),
    E = n(63063),
    R = n(168107),
    A = n(480916),
    f = n(81643),
    p = n(257639),
    x = n(469775),
    C = n(981631),
    m = n(800530),
    M = n(388032),
    I = n(320463);
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: T } = e,
        [U, b] = r.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        g = r.useRef(U),
        [h, k] = (0, d.US)([U], void 0, !0),
        { loading: S, initiateAgeVerification: L } = (0, f.WD)({
            onComplete: T,
            entryPoint: n,
        }),
        N = r.useMemo(() => (0, s.Z)(), []),
        O = (0, p.W)("age_verification_get_started_modal"),
        G = r.useRef(!1);
    return (
        r.useEffect(() => {
            g.current = h;
        }, [h]),
        r.useLayoutEffect(
            () => () => {
                if (G.current) return;
                let e = g.current;
                null != e &&
                    ((G.current = !0),
                    _.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, A.lA)(N, A.d_.PRIMARY, n);
        }, [N, n]),
        (0, i.jsxs)(o.Modal, {
            transitionState: t,
            onClose: T,
            title: (0, f.B7)(n),
            subtitle: (0, f.s2)(n),
            actions: [
                {
                    text: M.intl.string(M.t.SJMnkX),
                    loading: S,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, A.x3)(N, A.d_.PRIMARY, A.sU.GET_STARTED),
                            b(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await L();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(u.Z, {
                onClick: () => {
                    R.Z.openUrl(E.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, A.x3)(N, A.d_.PRIMARY, A.sU.LEARN_MORE);
                },
                className: I.learnMoreButton,
                children: [
                    M.intl.string(M.t["aA6q/z"]),
                    (0, i.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, x.uH)(N).map((e, t) => {
                    let { title: n, description: r } = e;
                    return (0, i.jsx)(
                        c.JZ,
                        {
                            title: n,
                            description: r,
                            listType: "numbered",
                            index: t,
                        },
                        t,
                    );
                }),
                !O &&
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: I.requestContainer,
                        children: M.intl.format(M.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                R.Z.openUrl(m.sQ.APPEALS_LINK), (0, A.x3)(N, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
