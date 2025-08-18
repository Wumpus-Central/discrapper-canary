n.d(t, { default: () => L }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    o = n(772848),
    s = n(704215),
    l = n(82659),
    c = n(481060),
    a = n(243778),
    u = n(690221),
    _ = n(138201),
    E = n(420846),
    d = n(63063),
    p = n(168107),
    I = n(480916),
    O = n(81643),
    S = n(469775),
    f = n(981631),
    m = n(800530),
    N = n(388032),
    A = n(678189);
let L = function (e) {
    let { transitionState: t, entryPoint: n, onClose: L } = e,
        [T, b] = i.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        C = i.useRef(T),
        [P, R] = (0, a.US)([T], void 0, !0),
        { loading: x, initiateAgeVerification: h } = (0, O.WD)(L),
        M = i.useMemo(() => (0, o.Z)(), []),
        y = i.useRef(!1);
    return (
        i.useEffect(() => {
            C.current = P;
        }, [P]),
        i.useLayoutEffect(
            () => () => {
                if (y.current) return;
                let e = C.current;
                null != e &&
                    ((y.current = !0),
                    E.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, I.lA)(M, I.d_.PRIMARY, n);
        }, [M, n]),
        (0, r.jsxs)(l.Modal, {
            transitionState: t,
            onClose: L,
            title: N.intl.string(N.t.JHNunp),
            subtitle: N.intl.string(N.t["+BLIGh"]),
            actions: [
                {
                    text: N.intl.string(N.t.SJMnkZ),
                    loading: x,
                    icon: c.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, I.x3)(M, I.d_.PRIMARY, I.sU.GET_STARTED),
                            b(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await h();
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(u.Z, {
                onClick: () => {
                    p.Z.openUrl(d.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, I.x3)(M, I.d_.PRIMARY, I.sU.LEARN_MORE);
                },
                className: A.learnMoreButton,
                children: [
                    N.intl.string(N.t["aA6q//"]),
                    (0, r.jsx)(c.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, S.uH)(M).map((e, t) => {
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
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: A.requestContainer,
                    children: N.intl.format(N.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            p.Z.openUrl(m.sQ.APPEALS_LINK), (0, I.x3)(M, I.d_.PRIMARY, I.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
