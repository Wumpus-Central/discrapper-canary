n.d(e, { default: () => M });
var i = n(477900),
    s = n(582128),
    o = n(132500),
    r = n(189213),
    c = n(509434),
    l = n(95035),
    a = n(632738),
    u = n(975571),
    A = n(379257),
    p = n(306537),
    R = n(36149),
    d = n(40449),
    E = n(652215),
    _ = n(375708),
    C = n(381944);
let M = function (t) {
    let { transitionState: e, entryPoint: n, onClose: M } = t,
        { loading: T, initiateAgeVerification: h } = (0, R.nn)({ onComplete: M, entryPoint: n }),
        k = s.useMemo(() => (0, o.A)(), []);
    return (
        s.useEffect(() => {
            (0, p.Bs)(k, p.WU.PRIMARY, n);
        }, [k, n]),
        (0, i.jsx)(r.a, {
            transitionState: e,
            onClose: M,
            title: (0, R.ST)(n),
            subtitle: (0, R.mK)(n),
            actions: [
                {
                    text: _.intl.string(_.t.SJMnkX),
                    loading: T,
                    icon: c.I,
                    iconPosition: "end",
                    onClick: async () => {
                        ((0, p.St)(k, p.WU.PRIMARY, p._7.GET_STARTED), await h());
                    },
                },
            ],
            actionBarInput: (0, i.jsxs)(l.A, {
                onClick: () => {
                    (A.A.openUrl(u.A.getArticleURL(E.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, p.St)(k, p.WU.PRIMARY, p._7.LEARN_MORE));
                },
                className: C.A,
                children: [_.intl.string(_.t["aA6q/z"]), (0, i.jsx)(c.I, { size: "xs", color: "currentColor" })],
            }),
            children: (0, d.f6)(k).map((t, e) => {
                let { title: n, description: s } = t;
                return (0, i.jsx)(a.PQ, { title: n, description: s, listType: "numbered", index: e }, e);
            }),
        })
    );
};
