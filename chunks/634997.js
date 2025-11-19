n.d(t, { default: () => T }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    s = n(772848),
    o = n(793030),
    a = n(704215),
    l = n(481060),
    u = n(243778),
    c = n(690221),
    _ = n(138201),
    d = n(420846),
    E = n(63063),
    R = n(168107),
    A = n(480916),
    p = n(81643),
    x = n(469775),
    f = n(981631),
    C = n(800530),
    I = n(388032),
    M = n(889469);
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: T } = e,
        [m, U] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        h = i.useRef(m),
        [L, S] = (0, u.US)([m], void 0, !0),
        { loading: N, initiateAgeVerification: b } = (0, p.WD)({
            onComplete: T,
            entryPoint: n,
        }),
        g = i.useMemo(() => (0, s.Z)(), []),
        k = i.useRef(!1);
    return (
        i.useEffect(() => {
            h.current = L;
        }, [L]),
        i.useLayoutEffect(
            () => () => {
                if (k.current) return;
                let e = h.current;
                null != e &&
                    ((k.current = !0),
                    d.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, A.lA)(g, A.d_.PRIMARY, n);
        }, [g, n]),
        (0, r.jsxs)(o.Modal, {
            transitionState: t,
            onClose: T,
            title: I.intl.string(I.t.JHNunj),
            subtitle: I.intl.string(I.t["+BLIGh"]),
            actions: [
                {
                    text: I.intl.string(I.t.SJMnkX),
                    loading: N,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, A.x3)(g, A.d_.PRIMARY, A.sU.GET_STARTED),
                            U(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await b();
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(c.Z, {
                onClick: () => {
                    R.Z.openUrl(E.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, A.x3)(g, A.d_.PRIMARY, A.sU.LEARN_MORE);
                },
                className: M.learnMoreButton,
                children: [
                    I.intl.string(I.t["aA6q/z"]),
                    (0, r.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, x.uH)(g).map((e, t) => {
                    let { title: n, description: i } = e;
                    return (0, r.jsx)(
                        _.JZ,
                        {
                            title: n,
                            description: i,
                            listType: "numbered",
                            index: t,
                        },
                        t,
                    );
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: M.requestContainer,
                    children: I.intl.format(I.t.pJAxgQ, {
                        handleOnRequestHook: () => {
                            R.Z.openUrl(C.sQ.APPEALS_LINK), (0, A.x3)(g, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
