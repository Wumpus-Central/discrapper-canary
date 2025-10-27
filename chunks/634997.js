n.d(t, { default: () => I }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    s = n(772848),
    o = n(793030),
    a = n(704215),
    l = n(481060),
    u = n(243778),
    c = n(690221),
    _ = n(138201),
    E = n(420846),
    A = n(63063),
    R = n(168107),
    d = n(480916),
    p = n(81643),
    x = n(469775),
    T = n(981631),
    f = n(800530),
    M = n(388032),
    C = n(678189);
let I = function (e) {
    let { transitionState: t, entryPoint: n, onClose: I } = e,
        [U, m] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        L = i.useRef(U),
        [S, h] = (0, u.US)([U], void 0, !0),
        { loading: G, initiateAgeVerification: N } = (0, p.WD)({ onComplete: I }),
        O = i.useMemo(() => (0, s.Z)(), []),
        b = i.useRef(!1);
    return (
        i.useEffect(() => {
            L.current = S;
        }, [S]),
        i.useLayoutEffect(
            () => () => {
                if (b.current) return;
                let e = L.current;
                null != e &&
                    ((b.current = !0),
                    E.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, d.lA)(O, d.d_.PRIMARY, n);
        }, [O, n]),
        (0, r.jsxs)(o.Modal, {
            transitionState: t,
            onClose: I,
            title: M.intl.string(M.t.JHNunj),
            subtitle: M.intl.string(M.t["+BLIGh"]),
            actions: [
                {
                    text: M.intl.string(M.t.SJMnkX),
                    loading: G,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, d.x3)(O, d.d_.PRIMARY, d.sU.GET_STARTED),
                            m(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await N(d.cU.GET_STARTED_MODAL);
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(c.Z, {
                onClick: () => {
                    R.Z.openUrl(A.Z.getArticleURL(T.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, d.x3)(O, d.d_.PRIMARY, d.sU.LEARN_MORE);
                },
                className: C.learnMoreButton,
                children: [
                    M.intl.string(M.t["aA6q/z"]),
                    (0, r.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, x.uH)(O).map((e, t) => {
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
                    className: C.requestContainer,
                    children: M.intl.format(M.t.pJAxgQ, {
                        handleOnRequestHook: () => {
                            R.Z.openUrl(f.sQ.APPEALS_LINK), (0, d.x3)(O, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
