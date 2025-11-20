n.d(t, { default: () => T }), n(388685), n(953529);
var i = n(54381),
    r = n(473749),
    s = n(772848),
    o = n(793030),
    a = n(704215),
    l = n(481060),
    u = n(243778),
    c = n(690221),
    d = n(138201),
    _ = n(420846),
    E = n(63063),
    R = n(168107),
    A = n(480916),
    f = n(81643),
    p = n(257639),
    x = n(469775),
    C = n(981631),
    m = n(800530),
    I = n(388032),
    M = n(678189);
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: T } = e,
        [g, h] = r.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        U = r.useRef(g),
        [k, L] = (0, u.US)([g], void 0, !0),
        { loading: S, initiateAgeVerification: N } = (0, f.WD)({
            onComplete: T,
            entryPoint: n,
        }),
        b = r.useMemo(() => (0, s.Z)(), []),
        G = (0, p.W)("age_verification_get_started_modal"),
        O = r.useRef(!1);
    return (
        r.useEffect(() => {
            U.current = k;
        }, [k]),
        r.useLayoutEffect(
            () => () => {
                if (O.current) return;
                let e = U.current;
                null != e &&
                    ((O.current = !0),
                    _.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, A.lA)(b, A.d_.PRIMARY, n);
        }, [b, n]),
        (0, i.jsxs)(o.Modal, {
            transitionState: t,
            onClose: T,
            title: I.intl.string(I.t.JHNunj),
            subtitle: I.intl.string(I.t["+BLIGh"]),
            actions: [
                {
                    text: I.intl.string(I.t.SJMnkX),
                    loading: S,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, A.x3)(b, A.d_.PRIMARY, A.sU.GET_STARTED),
                            h(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await N();
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(c.Z, {
                onClick: () => {
                    R.Z.openUrl(E.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, A.x3)(b, A.d_.PRIMARY, A.sU.LEARN_MORE);
                },
                className: M.learnMoreButton,
                children: [
                    I.intl.string(I.t["aA6q/z"]),
                    (0, i.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, x.uH)(b).map((e, t) => {
                    let { title: n, description: r } = e;
                    return (0, i.jsx)(
                        d.JZ,
                        {
                            title: n,
                            description: r,
                            listType: "numbered",
                            index: t,
                        },
                        t,
                    );
                }),
                !G &&
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: M.requestContainer,
                        children: I.intl.format(I.t.pJAxgQ, {
                            handleOnRequestHook: () => {
                                R.Z.openUrl(m.sQ.APPEALS_LINK), (0, A.x3)(b, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST);
                            },
                        }),
                    }),
            ],
        })
    );
};
