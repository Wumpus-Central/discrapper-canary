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
    E = t(469775),
    h = t(981631),
    A = t(800530),
    b = t(388032),
    p = t(678189);
let C = function (e) {
    let { transitionState: n, entryPoint: t, onClose: C } = e,
        [T, v] = o.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        j = o.useRef(T),
        [I, M] = (0, c.US)([T], void 0, !0),
        { loading: N, initiateAgeVerification: g } = (0, R.WD)(C),
        G = o.useMemo(() => (0, i.Z)(), []),
        U = o.useRef(!1);
    return (
        o.useEffect(() => {
            j.current = I;
        }, [I]),
        o.useLayoutEffect(
            () => () => {
                if (U.current) return;
                let e = j.current;
                null != e &&
                    ((U.current = !0),
                    x.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        o.useEffect(() => {
            (0, f.lA)(G, f.d_.PRIMARY, t);
        }, [G, t]),
        (0, r.jsxs)(s.Modal, {
            transitionState: n,
            onClose: C,
            title: b.intl.string(b.t.JHNunp),
            subtitle: b.intl.string(b.t["+BLIGh"]),
            actions: [
                {
                    text: b.intl.string(b.t.SJMnkZ),
                    loading: N,
                    icon: l.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, f.x3)(G, f.d_.PRIMARY, f.sU.GET_STARTED),
                            v(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await g(f.cU.GET_STARTED_MODAL);
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(d.Z, {
                onClick: () => {
                    m.Z.openUrl(_.Z.getArticleURL(h.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.x3)(G, f.d_.PRIMARY, f.sU.LEARN_MORE);
                },
                className: p.learnMoreButton,
                children: [
                    b.intl.string(b.t["aA6q//"]),
                    (0, r.jsx)(l.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, E.uH)(G).map((e, n) => {
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
                    children: b.intl.format(b.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            m.Z.openUrl(A.sQ.APPEALS_LINK), (0, f.x3)(G, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
