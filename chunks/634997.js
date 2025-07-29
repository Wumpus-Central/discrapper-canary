(n.d(t, { default: () => b }), n(388685), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(772848),
    s = n(704215),
    l = n(82659),
    c = n(481060),
    a = n(243778),
    u = n(690221),
    _ = n(138201),
    E = n(420846),
    d = n(63063),
    I = n(168107),
    p = n(480916),
    m = n(81643),
    N = n(469775),
    S = n(981631),
    f = n(800530),
    O = n(388032),
    A = n(631843);
let b = function (e) {
    let { transitionState: t, entryPoint: n, onClose: b } = e,
        [L, C] = o.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        T = o.useRef(L),
        [P, R] = (0, a.US)([L], void 0, !0),
        { loading: x, initiateAgeVerification: h } = (0, m.WD)(b),
        M = o.useMemo(() => (0, i.Z)(), []),
        y = o.useRef(!1);
    return (
        o.useEffect(() => {
            T.current = P;
        }, [P]),
        o.useLayoutEffect(
            () => () => {
                if (y.current) return;
                let e = T.current;
                null != e &&
                    ((y.current = !0),
                    E.Z.maybeOpenAgeVerificationUserFeedback({
                        location: 'age_verification_get_started_modal',
                        visibleContent: e
                    }));
            },
            []
        ),
        o.useEffect(() => {
            (0, p.lA)(M, p.d_.PRIMARY, n);
        }, [M, n]),
        (0, r.jsxs)(l.Modal, {
            transitionState: t,
            onClose: b,
            title: O.intl.string(O.t.JHNunp),
            subtitle: O.intl.string(O.t['+BLIGh']),
            actions: [
                {
                    text: O.intl.string(O.t.SJMnkZ),
                    loading: x,
                    icon: c.Gr1,
                    iconPosition: 'end',
                    onClick: async () => {
                        ((0, p.x3)(M, p.d_.PRIMARY, p.sU.GET_STARTED), C(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await h());
                    }
                }
            ],
            actionBarInput: (0, r.jsxs)(u.Z, {
                onClick: () => {
                    (I.Z.openUrl(d.Z.getArticleURL(S.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, p.x3)(M, p.d_.PRIMARY, p.sU.LEARN_MORE));
                },
                className: A.learnMoreButton,
                children: [
                    O.intl.string(O.t['aA6q//']),
                    (0, r.jsx)(c.Gr1, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                ]
            }),
            children: [
                (0, N.uH)(M).map((e, t) => {
                    let { title: n, description: o } = e;
                    return (0, r.jsx)(
                        _.ZP,
                        {
                            title: n,
                            description: o,
                            listType: 'numbered',
                            index: t
                        },
                        t
                    );
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: A.requestContainer,
                    children: O.intl.format(O.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            (I.Z.openUrl(f.sQ.APPEALS_LINK), (0, p.x3)(M, p.d_.PRIMARY, p.sU.MANUAL_REVIEW_REQUEST));
                        }
                    })
                })
            ]
        })
    );
};
