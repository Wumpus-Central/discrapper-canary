(n.d(t, { default: () => A }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    o = n(772848),
    l = n(704215),
    s = n(82659),
    c = n(481060),
    a = n(243778),
    u = n(690221),
    d = n(138201),
    _ = n(420846),
    E = n(63063),
    m = n(168107),
    I = n(480916),
    p = n(81643),
    N = n(469775),
    b = n(981631),
    S = n(800530),
    f = n(388032),
    O = n(631843);
let A = function (e) {
    let { transitionState: t, entryPoint: n, onClose: A } = e,
        [L, C] = i.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        x = i.useRef(L),
        [T, P] = (0, a.US)([L], void 0, !0),
        { loading: R, initiateAgeVerification: h } = (0, p.WD)(A),
        j = i.useMemo(() => (0, o.Z)(), []),
        v = i.useRef(!1);
    return (
        i.useEffect(() => {
            x.current = T;
        }, [T]),
        i.useLayoutEffect(
            () => () => {
                if (v.current) return;
                let e = x.current;
                null != e &&
                    ((v.current = !0),
                    _.Z.maybeOpenAgeVerificationUserFeedback({
                        location: 'age_verification_get_started_modal',
                        visibleContent: e
                    }));
            },
            []
        ),
        i.useEffect(() => {
            (0, I.lA)(j, I.d_.PRIMARY, n);
        }, [j, n]),
        (0, r.jsxs)(s.Modal, {
            transitionState: t,
            onClose: A,
            title: f.intl.string(f.t.JHNunp),
            subtitle: f.intl.string(f.t['+BLIGh']),
            actions: [
                {
                    text: f.intl.string(f.t.SJMnkZ),
                    loading: R,
                    icon: c.Gr1,
                    iconPosition: 'end',
                    onClick: async () => {
                        ((0, I.x3)(j, I.d_.PRIMARY, I.sU.GET_STARTED), C(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await h());
                    }
                }
            ],
            actionBarInput: (0, r.jsxs)(u.Z, {
                onClick: () => {
                    (m.Z.openUrl(E.Z.getArticleURL(b.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, I.x3)(j, I.d_.PRIMARY, I.sU.LEARN_MORE));
                },
                className: O.learnMoreButton,
                children: [
                    f.intl.string(f.t['aA6q//']),
                    (0, r.jsx)(c.Gr1, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                ]
            }),
            children: [
                (0, N.uH)(j).map((e, t) => {
                    let { title: n, description: i } = e;
                    return (0, r.jsx)(
                        d.JZ,
                        {
                            title: n,
                            description: i,
                            listType: 'numbered',
                            index: t
                        },
                        t
                    );
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: O.requestContainer,
                    children: f.intl.format(f.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            (m.Z.openUrl(S.sQ.APPEALS_LINK), (0, I.x3)(j, I.d_.PRIMARY, I.sU.MANUAL_REVIEW_REQUEST));
                        }
                    })
                })
            ]
        })
    );
};
