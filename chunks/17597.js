n.d(t, { default: () => T }), n(388685), n(953529);
var a = n(951288),
    i = n(647438),
    r = n(772848),
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
    _ = n(760902),
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
                          (0, g.x3)(t, g.d_.EXPRESSIVE_PRIMARY, g.sU.LEARN_MORE);
                  },
              }),
          })
        : n === g.cU.SAFETY_FLOWS
          ? (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: y.intl.string(y.t["2jxGer"]),
                onClick: () => {
                    (0, g.x3)(t, g.d_.EXPRESSIVE_PRIMARY, g.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
                },
            })
          : null;
}
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: j, dismissable: T, classificationId: O } = e,
        [N, P] = i.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = i.useRef(N),
        [w, k] = (0, c.US)([N], void 0, !0),
        R = i.useMemo(() => (0, r.Z)(), []),
        A = i.useRef(!1),
        Z = (0, m.GE)();
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let { loading: D, ageVerificationMethods: L } = (0, b.Z)({
        onClose: () => {
            null == j || j(), u();
        },
        onMethodClick: () => {
            P(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: O,
    });
    return (
        i.useLayoutEffect(
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
        i.useEffect(() => {
            (0, g.lA)(R, g.d_.EXPRESSIVE_PRIMARY, n);
        }, [R, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: T,
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
                              (0, g.x3)(R, g.d_.EXPRESSIVE_PRIMARY, g.sU.LEARN_MORE);
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
                              children: L.map((e) => {
                                  let { title: t, description: n, onClick: i } = e;
                                  return (0, a.jsx)(
                                      d.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: D,
                                          onButtonPress: () => i(R),
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
