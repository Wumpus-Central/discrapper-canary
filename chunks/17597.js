n.d(t, { default: () => O }), n(388685), n(953529);
var a = n(54381),
    l = n(473749),
    r = n(772848),
    i = n(793030),
    s = n(704215),
    o = n(481060),
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
    j = n(800530),
    _ = n(241751),
    y = n(388032),
    C = n(70402),
    S = n(736056);
function E(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, m.GE)()
        ? (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              children: y.intl.format(_.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      x.Z.openUrl(j.sQ.LEARN_MORE_UU_APPEAL_LINK),
                          (0, f.x3)(t, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE);
                  },
              }),
          })
        : n === f.cU.SAFETY_FLOWS
          ? (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: y.intl.string(y.t["2jxGer"]),
                onClick: () => {
                    (0, f.x3)(t, f.d_.EXPRESSIVE_PRIMARY, f.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
                },
            })
          : null;
}
let O = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: j, dismissable: O, classificationId: N } = e,
        [T, P] = l.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = l.useRef(T),
        [w, k] = (0, c.US)([T], void 0, !0),
        R = l.useMemo(() => (0, r.Z)(), []),
        A = l.useRef(!1),
        Z = (0, m.GE)();
    l.useEffect(() => {
        I.current = w;
    }, [w]);
    let { loading: D, ageVerificationMethods: L } = (0, b.Z)({
        onClose: () => {
            null == j || j(), u();
        },
        onMethodClick: () => {
            P(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: N,
    });
    return (
        l.useLayoutEffect(
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
        l.useEffect(() => {
            (0, f.lA)(R, f.d_.EXPRESSIVE_PRIMARY, n);
        }, [R, n]),
        (0, a.jsx)(i.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: O,
            graphic: {
                type: "image",
                src: S.Z,
            },
            title: y.intl.string(y.t.JHNunj),
            subtitle: Z
                ? y.intl.string(_.default["1/6wta"])
                : y.intl.format(_.default.RpMIT0, {
                      handleOnHelpUrlHook: () => {
                          x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                              (0, f.x3)(R, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE);
                      },
                  }),
            actionBarInput: (0, a.jsx)(E, {
                modalSessionId: R,
                entryPoint: n,
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
                    null == L || 0 === L.length
                        ? (0, a.jsxs)(o.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, a.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: y.intl.string(_.default.cR6336),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: y.intl.string(_.default.hDvmYP),
                                      onClick: () => {
                                          (0, g.Jh)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.Kqy, {
                              direction: "vertical",
                              gap: 8,
                              children: L.map((e) => {
                                  let { title: t, description: n, onClick: l } = e;
                                  return (0, a.jsx)(
                                      d.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: D,
                                          onButtonPress: () => l(R),
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
