n.d(t, { Z: () => C }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(772848),
    l = n(704215),
    s = n(667202),
    o = n(481060),
    c = n(243778),
    d = n(138201),
    u = n(210825),
    m = n(420846),
    h = n(63063),
    p = n(168107),
    x = n(480916),
    f = n(352138),
    b = n(629235),
    g = n(981631),
    j = n(131022),
    v = n(388032),
    _ = n(450192),
    y = n(736056);
let C = function (e) {
    let { transitionState: t, entryPoint: n, onClose: C, onComplete: E, dismissable: N } = e,
        [S, O] = r.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        T = r.useRef(S),
        [P, k] = (0, c.US)([S], void 0, !0),
        R = r.useMemo(() => (0, i.Z)(), []),
        I = r.useRef(!1);
    r.useEffect(() => {
        T.current = P;
    }, [P]);
    let { loading: w, ageVerificationMethods: A } = (0, b.Z)(
        () => {
            null == E || E(), C();
        },
        () => {
            O(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
    );
    return (
        r.useLayoutEffect(
            () => () => {
                if (I.current) return;
                let e = T.current;
                null != e &&
                    ((I.current = !0),
                    m.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, x.lA)(R, x.d_.EXPRESSIVE_PRIMARY, n);
        }, [R, n]),
        (0, a.jsx)(s.I, {
            transitionState: t,
            onClose: C,
            gradientColor: "blue",
            dismissable: N,
            graphic: {
                type: "image",
                src: y.Z,
            },
            title: v.intl.string(v.t.JHNunp),
            subtitle: v.intl.format(j.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    p.Z.openUrl(h.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, x.x3)(R, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: v.intl.string(v.t["2jxGen"]),
                onClick: () => {
                    (0, x.x3)(R, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
                },
            }),
            children: (0, a.jsxs)(o.Kqy, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, a.jsxs)(o.Kqy, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: {
                            top: 8,
                            bottom: 8,
                            left: 12,
                            right: 12,
                        },
                        align: "center",
                        className: _.dataAssurance,
                        children: [
                            (0, a.jsx)(o.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: v.intl.string(j.default.ar3a3t),
                            }),
                        ],
                    }),
                    null == A || 0 === A.length
                        ? (0, a.jsxs)(o.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, a.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: v.intl.string(j.default.cR6339),
                                  }),
                                  (0, a.jsx)(o.zxk, {
                                      variant: "primary",
                                      size: "sm",
                                      text: v.intl.string(j.default.hDvmYG),
                                      onClick: () => {
                                          (0, f.J)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.Kqy, {
                              direction: "vertical",
                              gap: 8,
                              children: A.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, a.jsx)(
                                      d.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: w,
                                          onButtonPress: () => r(R),
                                      },
                                      t,
                                  );
                              }),
                          }),
                ],
            }),
        })
    );
};
