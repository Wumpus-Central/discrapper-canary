n.d(t, { default: () => h });
var r = n(951288),
    o = n(647438),
    i = n(772848),
    l = n(667202),
    c = n(481060),
    a = n(138201),
    s = n(63063),
    d = n(168107),
    u = n(480916),
    b = n(81643),
    x = n(981631),
    m = n(800530),
    f = n(388032),
    p = n(740076),
    j = n(736056);
let h = function (e) {
    let { transitionState: t, entryPoint: n, onClose: h } = e,
        { loading: g, initiateAgeVerification: v } = (0, b.WD)(h, !0),
        y = o.useMemo(() => (0, i.Z)(), []);
    o.useEffect(() => {
        (0, u.lA)(y, u.d_.RETRY, n);
    }, [y, n]);
    let _ = o.useMemo(
        () => [
            {
                title: f.intl.string(f.t.FYkioq),
                description: f.intl.string(f.t.xMfbR0),
                buttonText: f.intl.string(f.t.RtOE1t),
                buttonLoading: g,
                onButtonPress: () => {
                    v(u.cU.RETRY_MODAL), (0, u.x3)(y, u.d_.RETRY, u.sU.GET_STARTED);
                },
            },
            {
                title: f.intl.string(f.t["LZO+HR"]),
                description: f.intl.string(f.t.N2mHaG),
                buttonText: f.intl.string(f.t["LZO+HR"]),
                buttonLoading: g,
                onButtonPress: () => {
                    d.Z.openUrl(m.sQ.APPEALS_LINK), (0, u.x3)(y, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST);
                },
            },
        ],
        [v, y, g],
    );
    return (0, r.jsx)(l.I, {
        transitionState: t,
        onClose: h,
        gradientColor: "blue",
        graphic: {
            src: j.Z,
            type: "image",
        },
        title: f.intl.string(f.t["5l3R/v"]),
        subtitle: f.intl.string(f.t.O7SO0N),
        children: (0, r.jsxs)(c.Kqy, {
            direction: "vertical",
            gap: 16,
            children: [
                (0, r.jsx)(c.Wn, {
                    messageType: c.QYI.INFO,
                    className: p.infoBox,
                    textColor: "text-feedback-info",
                    textVariant: "text-sm/medium",
                    children: f.intl.string(f.t.El4aXl),
                }),
                _.map((e, t) =>
                    (0, r.jsx)(
                        a.JZ,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({ variant: "clickable" }, e),
                        t,
                    ),
                ),
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: f.intl.format(f.t["L+FgkZ"], {
                        handleOnHelpUrlHook: () => {
                            d.Z.openUrl(s.Z.getArticleURL(x.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                (0, u.x3)(y, u.d_.RETRY, u.sU.LEARN_MORE);
                        },
                    }),
                }),
            ],
        }),
    });
};
