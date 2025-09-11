t.d(n, { default: () => R }), t(388685), t(953529);
var r = t(951288),
    o = t(647438),
    i = t(772848),
    l = t(704215),
    a = t(82659),
    c = t(481060),
    s = t(243778),
    d = t(690221),
    u = t(138201),
    x = t(420846),
    b = t(63063),
    m = t(168107),
    f = t(480916),
    _ = t(81643),
    h = t(469775),
    j = t(981631),
    p = t(800530),
    v = t(388032),
    E = t(678189);
let R = function (e) {
    let { transitionState: n, entryPoint: t, onClose: R } = e,
        [y, A] = o.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        C = o.useRef(y),
        [O, g] = (0, s.US)([y], void 0, !0),
        { loading: T, initiateAgeVerification: I } = (0, _.WD)(R),
        N = o.useMemo(() => (0, i.Z)(), []),
        k = o.useRef(!1);
    return (
        o.useEffect(() => {
            C.current = O;
        }, [O]),
        o.useLayoutEffect(
            () => () => {
                if (k.current) return;
                let e = C.current;
                null != e &&
                    ((k.current = !0),
                    x.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        o.useEffect(() => {
            (0, f.lA)(N, f.d_.PRIMARY, t);
        }, [N, t]),
        (0, r.jsxs)(a.Modal, {
            transitionState: n,
            onClose: R,
            title: v.intl.string(v.t.JHNunp),
            subtitle: v.intl.string(v.t["+BLIGh"]),
            actions: [
                {
                    text: v.intl.string(v.t.SJMnkZ),
                    loading: T,
                    icon: c.Gr1,
                    iconPosition: "end",
                    onClick: async () => {
                        (0, f.x3)(N, f.d_.PRIMARY, f.sU.GET_STARTED),
                            A(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE),
                            await I(f.cU.GET_STARTED_MODAL);
                    },
                },
            ],
            actionBarInput: (0, r.jsxs)(d.Z, {
                onClick: () => {
                    m.Z.openUrl(b.Z.getArticleURL(j.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, f.x3)(N, f.d_.PRIMARY, f.sU.LEARN_MORE);
                },
                className: E.learnMoreButton,
                children: [
                    v.intl.string(v.t["aA6q//"]),
                    (0, r.jsx)(c.Gr1, {
                        size: "xs",
                        color: "currentColor",
                    }),
                ],
            }),
            children: [
                (0, h.uH)(N).map((e, n) => {
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
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: E.requestContainer,
                    children: v.intl.format(v.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            m.Z.openUrl(p.sQ.APPEALS_LINK), (0, f.x3)(N, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST);
                        },
                    }),
                }),
            ],
        })
    );
};
