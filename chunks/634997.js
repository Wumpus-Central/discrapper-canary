t.d(n, { default: () => C }), t(388685), t(953529);
var r = t(951288),
    o = t(647438),
    i = t(772848),
    a = t(704215),
    s = t(82659),
    l = t(481060),
    c = t(243778),
    d = t(690221),
    u = t(138201),
    x = t(420846),
    _ = t(63063),
    m = t(168107),
    f = t(480916),
    R = t(81643),
    h = t(469775),
    E = t(981631),
    b = t(800530),
    A = t(388032),
    p = t(678189);
let C = function (e) {
    let { transitionState: n, entryPoint: t, onClose: C } = e,
        [v, j] = o.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = o.useRef(v),
        [T, M] = (0, c.US)([v], void 0, !0),
        { loading: N, initiateAgeVerification: g } = (0, R.WD)(C),
        w = o.useMemo(() => (0, i.Z)(), []),
        G = o.useRef(!1);
    return (
        o.useEffect(() => {
            I.current = T;
        }, [T]),
        o.useLayoutEffect(
            () => () => {
                if (G.current) return;
                let e = I.current;
                null != e &&
                    ((G.current = !0),
                    x.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        o.useEffect(() => {
            (0, f.lA)(w, f.d_.PRIMARY, t);
        }, [w, t]),
        (0, r.jsxs)(s.Modal, {
            transitionState: n,
            onClose: C,
            title: A.intl.string(A.t.JHNunp),
            subtitle: A.intl.string(A.t["+BLIGh"]),
            actions: [
                {
                    text: A.intl.string(A.t.SJMnkZ),
                    loading: N,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, f.x3)(w, f.d_.PRIMARY, f.sU.GET_STARTED),
                            j(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await g();
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(d.Z, {
                onClick: () => {
                    m.Z.openUrl(_.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.x3)(w, f.d_.PRIMARY, f.sU.LEARN_MORE);
                },
                className: p.learnMoreButton,
                children: [
                    A.intl.string(A.t["aA6q//"]),
                    (0, r.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, h.uH)(w).map((e, n) => {
                    let { title: t, description: o } = e;
                    return (0, r.jsx)(
                        u.JZ,
                        {
                            title: t,
                            description: o,
                            listType: "numbered",
                            index: n,
                        },
                        n,
                    );
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: p.requestContainer,
                    children: A.intl.format(A.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            m.Z.openUrl(b.sQ.APPEALS_LINK), (0, f.x3)(w, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
