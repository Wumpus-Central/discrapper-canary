n.d(t, { Z: () => C }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(772848),
    l = n(793030),
    s = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(138201),
    u = n(210825),
    m = n(420846),
    p = n(63063),
    h = n(168107),
    x = n(480916),
    f = n(352138),
    b = n(629235),
    g = n(981631),
    v = n(398158),
    j = n(388032),
    _ = n(70402),
    y = n(736056);
let C = function (e) {
    let { transitionState: t, entryPoint: n, onClose: C, onComplete: S, dismissable: E } = e,
        [T, O] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        N = r.useRef(T),
        [P, I] = (0, c.US)([T], void 0, !0),
        w = r.useMemo(() => (0, i.Z)(), []),
        R = r.useRef(!1);
    r.useEffect(() => {
        N.current = P;
    }, [P]);
    let { loading: k, ageVerificationMethods: A } = (0, b.Z)(
        () => {
            null == S || S(), C();
        },
        () => {
            O(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
    );
    return (
        r.useLayoutEffect(
            () => () => {
                if (R.current) return;
                let e = N.current;
                null != e &&
                    ((R.current = !0),
                    m.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, x.lA)(w, x.d_.EXPRESSIVE_PRIMARY, n);
        }, [w, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: C,
            gradientColor: "blue",
            dismissable: E,
            graphic: {
                type: "image",
                src: y.Z,
            },
            title: j.intl.string(j.t.JHNunp),
            subtitle: j.intl.format(v.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    h.Z.openUrl(p.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, x.x3)(w, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: j.intl.string(j.t["2jxGen"]),
                onClick: () => {
                    (0, x.x3)(w, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
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
                                children: j.intl.string(v.default.ar3a3t),
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
                                      children: j.intl.string(v.default.cR6339),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: j.intl.string(v.default.hDvmYG),
                                      onClick: () => {
                                          (0, f.Jh)();
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
                                          buttonDisabled: k,
                                          onButtonPress: () => r(w),
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
