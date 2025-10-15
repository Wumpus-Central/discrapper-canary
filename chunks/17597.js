n.d(t, { default: () => S }), n(388685), n(953529);
var a = n(951288),
    r = n(647438),
    i = n(772848),
    l = n(793030),
    o = n(704215),
    s = n(481060),
    c = n(243778),
    d = n(138201),
    u = n(210825),
    m = n(788080),
    p = n(420846),
    h = n(63063),
    x = n(168107),
    f = n(480916),
    g = n(352138),
    b = n(629235),
    v = n(981631),
    j = n(847678),
    _ = n(388032),
    y = n(70402),
    C = n(736056);
let S = function (e) {
    let { transitionState: t, entryPoint: n, onClose: S, onComplete: E, dismissable: T, classificationId: O } = e,
        [N, P] = r.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = r.useRef(N),
        [w, R] = (0, c.US)([N], void 0, !0),
        k = r.useMemo(() => (0, i.Z)(), []),
        A = r.useRef(!1),
        D = (0, m.GE)();
    r.useEffect(() => {
        I.current = w;
    }, [w]);
    let { loading: Z, ageVerificationMethods: M } = (0, b.Z)({
        onClose: () => {
            null == E || E(), S();
        },
        onMethodClick: () => {
            P(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: O,
    });
    return (
        r.useLayoutEffect(
            () => () => {
                if (A.current) return;
                let e = I.current;
                null != e &&
                    ((A.current = !0),
                    p.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        r.useEffect(() => {
            (0, f.lA)(k, f.d_.EXPRESSIVE_PRIMARY, n);
        }, [k, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: S,
            gradientColor: "blue",
            dismissable: T,
            graphic: {
                type: "image",
                src: C.Z,
            },
            title: _.intl.string(_.t.JHNunj),
            subtitle: D
                ? _.intl.string(j.default["1/6wta"])
                : _.intl.format(j.default.RpMIT0, {
                      handleOnHelpUrlHook: () => {
                          x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                              (0, f.x3)(k, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE);
                      },
                  }),
            actionBarInput: D
                ? (0, a.jsx)(s.Text, {
                      variant: "text-xs/medium",
                      children: _.intl.format(j.default.htWh1G, {
                          handleOnHelpUrlHook: () => {
                              x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                  (0, f.x3)(k, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE);
                          },
                      }),
                  })
                : (0, a.jsx)(s.Avr, {
                      size: "sm",
                      textVariant: "text-sm/medium",
                      text: _.intl.string(_.t["2jxGer"]),
                      onClick: () => {
                          (0, f.x3)(k, f.d_.EXPRESSIVE_PRIMARY, f.sU.LOG_OUT),
                              (0, u.R)("age_verification_get_started_modal");
                      },
                  }),
            children: (0, a.jsxs)(s.Kqy, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, a.jsxs)(s.Kqy, {
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
                        className: y.dataAssurance,
                        children: [
                            (0, a.jsx)(s.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, a.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: _.intl.string(j.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == M || 0 === M.length
                        ? (0, a.jsxs)(s.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, a.jsx)(s.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: _.intl.string(j.default.cR6336),
                                  }),
                                  (0, a.jsx)(s.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: _.intl.string(j.default.hDvmYP),
                                      onClick: () => {
                                          (0, g.Jh)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(s.Kqy, {
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
                                          buttonDisabled: Z,
                                          onButtonPress: () => r(k),
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
