n.d(t, { default: () => E }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(772848),
    l = n(793030),
    s = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(138201),
    u = n(210825),
    m = n(788080),
    p = n(420846),
    h = n(63063),
    x = n(168107),
    g = n(480916),
    f = n(352138),
    b = n(629235),
    v = n(981631),
    j = n(800530),
    _ = n(153177),
    y = n(388032),
    C = n(70402),
    S = n(736056);
let E = function (e) {
    let { transitionState: t, entryPoint: n, onClose: E, onComplete: T, dismissable: N, classificationId: O } = e,
        [P, I] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        w = r.useRef(P),
        [k, R] = (0, c.US)([P], void 0, !0),
        A = r.useMemo(() => (0, i.Z)(), []),
        Z = r.useRef(!1),
        D = (0, m.GE)();
    r.useEffect(() => {
        w.current = k;
    }, [k]);
    let { loading: L, ageVerificationMethods: M } = (0, b.Z)({
        onClose: () => {
            null == T || T(), E();
        },
        onMethodClick: () => {
            I(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: O,
    });
    return (
        r.useLayoutEffect(
            () => () => {
                if (Z.current) return;
                let e = w.current;
                null != e &&
                    ((Z.current = !0),
                    p.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, g.lA)(A, g.d_.EXPRESSIVE_PRIMARY, n);
        }, [A, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: E,
            gradientColor: "blue",
            dismissable: N,
            graphic: {
                type: "image",
                src: S.Z,
            },
            title: y.intl.string(y.t.JHNunj),
            subtitle: D
                ? y.intl.string(_.default["1/6wta"])
                : y.intl.format(_.default.RpMIT0, {
                      handleOnHelpUrlHook: () => {
                          x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                              (0, g.x3)(A, g.d_.EXPRESSIVE_PRIMARY, g.sU.LEARN_MORE);
                      },
                  }),
            actionBarInput: D
                ? (0, a.jsx)(o.Text, {
                      variant: "text-xs/medium",
                      children: y.intl.format(_.default.htWh1G, {
                          handleOnHelpUrlHook: () => {
                              x.Z.openUrl(j.sQ.LEARN_MORE_UU_APPEAL_LINK),
                                  (0, g.x3)(A, g.d_.EXPRESSIVE_PRIMARY, g.sU.LEARN_MORE);
                          },
                      }),
                  })
                : (0, a.jsx)(o.Avr, {
                      size: "sm",
                      textVariant: "text-sm/medium",
                      text: y.intl.string(y.t["2jxGer"]),
                      onClick: () => {
                          (0, g.x3)(A, g.d_.EXPRESSIVE_PRIMARY, g.sU.LOG_OUT),
                              (0, u.R)("age_verification_get_started_modal");
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
                        className: C.dataAssurance,
                        children: [
                            (0, a.jsx)(o.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: y.intl.string(_.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == M || 0 === M.length
                        ? (0, a.jsxs)(o.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, a.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: y.intl.string(_.default.cR6336),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: y.intl.string(_.default.hDvmYP),
                                      onClick: () => {
                                          (0, f.Jh)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.Kqy, {
                              direction: "vertical",
                              gap: 8,
                              children: M.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, a.jsx)(
                                      d.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: L,
                                          onButtonPress: () => r(A),
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
