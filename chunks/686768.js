n.d(e, { default: () => R }), n(539854);
var i = n(54381),
    r = n(473749),
    o = n(772848),
    l = n(793030),
    s = n(481060),
    a = n(138201),
    c = n(63063),
    d = n(168107),
    u = n(480916),
    f = n(81643),
    p = n(257639),
    g = n(981631),
    x = n(800530),
    b = n(388032),
    m = n(252153),
    E = n(765896);
let R = function (t) {
    let { transitionState: e, entryPoint: n, onClose: R } = t,
        { loading: _, initiateAgeVerification: O } = (0, f.WD)({
            onComplete: R,
            entryPoint: u.cU.RETRY_MODAL,
            isRetry: !0,
        }),
        h = r.useMemo(() => (0, o.Z)(), []),
        T = (0, p.W)("age_verification_retry_modal");
    r.useEffect(() => {
        (0, u.lA)(h, u.d_.RETRY, n);
    }, [h, n]);
    let y = r.useMemo(() => {
        let t = [
            {
                title: b.intl.string(b.t.FYkioq),
                description: b.intl.string(b.t.xMfbRz),
                buttonText: b.intl.string(b.t.RtOE1v),
                buttonLoading: _,
                onButtonPress: () => {
                    O(), (0, u.x3)(h, u.d_.RETRY, u.sU.GET_STARTED);
                },
            },
        ];
        return (
            T ||
                t.push({
                    title: b.intl.string(b.t["LZO+Hd"]),
                    description: b.intl.string(b.t.N2mHaK),
                    buttonText: b.intl.string(b.t["LZO+Hd"]),
                    buttonLoading: _,
                    onButtonPress: () => {
                        d.Z.openUrl(x.sQ.APPEALS_LINK), (0, u.x3)(h, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST);
                    },
                }),
            t
        );
    }, [O, h, _, T]);
    return (0, i.jsx)(l.ExpressiveModal, {
        transitionState: e,
        onClose: R,
        gradientColor: "blue",
        graphic: {
            src: E.Z,
            type: "image",
        },
        title: b.intl.string(b.t["5l3R/m"]),
        subtitle: b.intl.string(b.t.O7SO0D),
        children: (0, i.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, i.jsx)(s.Wn, {
                    messageType: s.QYI.INFO,
                    className: m.infoBox,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: b.intl.string(b.t.El4aXl),
                }),
                y.map((t, e) =>
                    (0, i.jsx)(
                        a.JZ,
                        (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (e) {
                                        var i;
                                        (i = n[e]),
                                            e in t
                                                ? Object.defineProperty(t, e, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (t[e] = i);
                                    });
                            }
                            return t;
                        })({ variant: "clickable" }, t),
                        e,
                    ),
                ),
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: b.intl.format(b.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            d.Z.openUrl(c.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, u.x3)(h, u.d_.RETRY, u.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
