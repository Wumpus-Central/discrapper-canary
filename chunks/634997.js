r.d(t, { default: () => h }), r(388685), r(953529);
var n = r(255367),
    o = r(73800),
    i = r(772848),
    l = r(704215),
    c = r(82659),
    s = r(481060),
    u = r(243778),
    a = r(690221),
    f = r(138201),
    p = r(420846),
    b = r(63063),
    O = r(168107),
    d = r(480916),
    y = r(81643),
    E = r(469775),
    _ = r(981631),
    R = r(800530),
    g = r(388032),
    P = r(108443);
let h = function (e) {
    let { transitionState: t, entryPoint: r, onClose: h } = e,
        [j, A] = o.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        m = o.useRef(j),
        [x, C] = (0, u.US)([j], void 0, !0),
        { loading: v, initiateAgeVerification: S } = (0, y.WD)(h),
        k = o.useMemo(() => (0, i.Z)(), []),
        I = o.useRef(!1);
    return (
        o.useEffect(() => {
            m.current = x;
        }, [x]),
        o.useLayoutEffect(
            () => () => {
                if (I.current) return;
                let e = m.current;
                null != e &&
                    ((I.current = !0),
                    p.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        o.useEffect(() => {
            (0, d.lA)(k, d.d_.PRIMARY, r);
        }, [k, r]),
        (0, n.jsxs)(c.Modal, {
            transitionState: t,
            onClose: h,
            title: g.intl.string(g.t.JHNunp),
            subtitle: g.intl.string(g.t["+BLIGh"]),
            actions: [
                {
                    text: g.intl.string(g.t.SJMnkZ),
                    loading: v,
                    icon: s.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, d.x3)(k, d.d_.PRIMARY, d.sU.GET_STARTED),
                            A(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await S();
                    },
                },
            ],
            actionBarInput: (0, n.jsxs)(a.Z, {
                onClick: () => {
                    O.Z.openUrl(b.Z.getArticleURL(_.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, d.x3)(k, d.d_.PRIMARY, d.sU.LEARN_MORE);
                },
                className: P.learnMoreButton,
                children: [
                    g.intl.string(g.t["aA6q//"]),
                    (0, n.jsx)(s.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, E.uH)(k).map((e, t) => {
                    let { title: r, description: o } = e;
                    return (0, n.jsx)(
                        f.JZ,
                        {
                            title: r,
                            description: o,
                            listType: "numbered",
                            index: t,
                        },
                        t,
                    );
                }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: P.requestContainer,
                    children: g.intl.format(g.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            O.Z.openUrl(R.sQ.APPEALS_LINK), (0, d.x3)(k, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
