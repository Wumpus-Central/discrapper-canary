(n.d(t, { default: () => O }), n(953529));
var r = n(255367),
    o = n(73800),
    i = n(772848),
    l = n(82659),
    s = n(481060),
    c = n(690221),
    a = n(138201),
    u = n(63063),
    _ = n(168107),
    E = n(480916),
    d = n(81643),
    p = n(469775),
    I = n(981631),
    m = n(800530),
    N = n(388032),
    S = n(631843);
let O = function (e) {
    let { transitionState: t, entryPoint: n, onClose: O } = e,
        { loading: b, initiateAgeVerification: f } = (0, d.WD)(O),
        L = o.useMemo(() => (0, i.Z)(), []);
    return (
        o.useEffect(() => {
            (0, E.lA)(L, E.d_.PRIMARY, n);
        }, [L, n]),
        (0, r.jsxs)(l.Modal, {
            transitionState: t,
            onClose: O,
            title: N.intl.string(N.t.JHNunp),
            subtitle: N.intl.string(N.t['+BLIGh']),
            actions: [
                {
                    text: N.intl.string(N.t.SJMnkZ),
                    loading: b,
                    icon: s.Gr1,
                    iconPosition: 'end',
                    onClick: () => {
                        ((0, E.x3)(L, E.d_.PRIMARY, E.sU.GET_STARTED), f());
                    }
                }
            ],
            actionBarInput: (0, r.jsxs)(c.Z, {
                onClick: () => {
                    (_.Z.openUrl(u.Z.getArticleURL(I.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, E.x3)(L, E.d_.PRIMARY, E.sU.LEARN_MORE));
                },
                className: S.learnMoreButton,
                children: [
                    N.intl.string(N.t['aA6q//']),
                    (0, r.jsx)(s.Gr1, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                ]
            }),
            children: [
                (0, p.uH)(L).map((e, t) => {
                    let { title: n, description: o } = e;
                    return (0, r.jsx)(
                        a.ZP,
                        {
                            title: n,
                            description: o,
                            listType: 'numbered',
                            index: t
                        },
                        t
                    );
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    className: S.requestContainer,
                    children: N.intl.format(N.t.pJAxgY, {
                        handleOnRequestHook: () => {
                            (_.Z.openUrl(m.sQ.APPEALS_LINK), (0, E.x3)(L, E.d_.PRIMARY, E.sU.MANUAL_REVIEW_REQUEST));
                        }
                    })
                })
            ]
        })
    );
};
