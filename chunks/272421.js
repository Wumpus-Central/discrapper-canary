n.d(i, { default: () => S });
var e = n(477900),
    s = n(582128),
    l = n(132500),
    r = n(189213),
    o = n(509434),
    c = n(95035),
    a = n(632738),
    p = n(975571),
    A = n(379257),
    R = n(306537),
    d = n(36149),
    E = n(652215),
    _ = n(375708),
    M = n(750481),
    u = n(381944);
let S = function (t) {
    let { transitionState: i, entryPoint: n, onClose: S } = t,
        { loading: T, initiateAgeVerification: C } = (0, M.n)({ onComplete: S, entryPoint: n }),
        g = s.useMemo(() => (0, l.A)(), []);
    return (
        s.useEffect(() => {
            (0, R.Bs)(g, R.WU.PRIMARY, n);
        }, [g, n]),
        (0, e.jsx)(r.a, {
            transitionState: i,
            onClose: S,
            title: (0, d.ST)(n),
            subtitle: (0, d.mK)(n),
            actions: [
                {
                    text: _.intl.string(_.t.SJMnkX),
                    loading: T,
                    icon: o.I,
                    iconPosition: "end",
                    onClick: async () => {
                        ((0, R.St)(g, R.WU.PRIMARY, R._7.GET_STARTED), await C());
                    },
                },
            ],
            actionBarInput: (0, e.jsxs)(c.A, {
                onClick: () => {
                    (A.A.openUrl(p.A.getArticleURL(E.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, R.St)(g, R.WU.PRIMARY, R._7.LEARN_MORE));
                },
                className: u.A,
                children: [_.intl.string(_.t["aA6q/z"]), (0, e.jsx)(o.I, { size: "xs", color: "currentColor" })],
            }),
            children: [
                { title: _.intl.string(_.t.HphYKp), description: _.intl.string(_.t["GCZC+9"]) },
                { title: _.intl.string(_.t.nkO4L3), description: _.intl.string(_.t.rHZFsH) },
                {
                    title: _.intl.string(_.t.aVwLfn),
                    description: _.intl.format(_.t.n5vd1E, {
                        handleOnHelpUrlHook: () => {
                            (A.A.openUrl(p.A.getArticleURL(E.MVz.TIGGER_PAWTECT_SYSTEM_DMS)),
                                (0, R.St)(g, R.WU.PRIMARY, R._7.SYSTEM_DMS_LEARN_MORE));
                        },
                    }),
                },
            ].map((t, i) => {
                let { title: n, description: s } = t;
                return (0, e.jsx)(a.PQ, { title: n, description: s, listType: "numbered", index: i }, i);
            }),
        })
    );
};
