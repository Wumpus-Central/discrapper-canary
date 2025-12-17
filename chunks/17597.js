n.d(t, { default: () => T }), n(388685), n(953529);
var a = n(54381),
    r = n(473749),
    l = n(772848),
    i = n(793030),
    s = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(138201),
    u = n(210825),
    m = n(788080),
    p = n(420846),
    h = n(63063),
    f = n(168107),
    x = n(480916),
    b = n(352138),
    g = n(629235),
    v = n(981631),
    j = n(800530),
    y = n(144287),
    C = n(388032),
    _ = n(39151),
    S = n(765896);
function E(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, m.GE)()
        ? (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              children: C.intl.format(y.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      f.Z.openUrl(j.sQ.LEARN_MORE_UU_APPEAL_LINK),
                          (0, x.x3)(t, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
                  },
              }),
          })
        : n === x.cU.SAFETY_FLOWS
          ? (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: C.intl.string(C.t["2jxGer"]),
                onClick: () => {
                    (0, x.x3)(t, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
                },
            })
          : null;
}
let T = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: j, dismissable: T, classificationId: O } = e,
        [N, w] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        P = r.useRef(N),
        [I, k] = (0, c.US)([N], void 0, !0),
        R = r.useMemo(() => (0, l.Z)(), []),
        A = r.useRef(!1),
        Z = (0, m.GE)();
    r.useEffect(() => {
        P.current = I;
    }, [I]);
    let { loading: D, ageVerificationMethods: L } = (0, g.Z)({
        onClose: () => {
            null == j || j(), u();
        },
        onMethodClick: () => {
            w(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: O,
    });
    return (
        r.useLayoutEffect(
            () => () => {
                if (A.current) return;
                let e = P.current;
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
            (0, x.lA)(R, x.d_.EXPRESSIVE_PRIMARY, n);
        }, [R, n]),
        (0, a.jsx)(i.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: T,
            graphic: {
                type: "image",
                src: S.Z,
            },
            title: C.intl.string(C.t.JHNunj),
            subtitle: Z
                ? C.intl.string(y.default["1/6wta"])
                : C.intl.format(y.default.RpMIT0, {
                      handleOnHelpUrlHook: () => {
                          f.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                              (0, x.x3)(R, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
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
                        className: _.dataAssurance,
                        children: [
                            (0, a.jsx)(o.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: C.intl.string(y.default.ar3a3q),
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
                                      children: C.intl.string(y.default.cR6336),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: C.intl.string(y.default.hDvmYP),
                                      onClick: () => {
                                          (0, b.Jh)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.Kqy, {
                              direction: "vertical",
                              gap: 8,
                              children: L.map((e) => {
                                  let { title: t, description: n, onClick: r } = e;
                                  return (0, a.jsx)(
                                      d.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: D,
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
