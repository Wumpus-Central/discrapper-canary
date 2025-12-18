n.d(t, { default: () => O }), n(388685), n(953529);
var a = n(54381),
    r = n(473749),
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
    f = n(168107),
    x = n(480916),
    b = n(352138),
    g = n(81643),
    v = n(629235),
    j = n(981631),
    y = n(800530),
    C = n(144287),
    _ = n(388032),
    S = n(39151),
    E = n(765896);
function T(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, m.GE)()
        ? (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              children: _.intl.format(C.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      f.Z.openUrl(y.sQ.LEARN_MORE_UU_APPEAL_LINK),
                          (0, x.x3)(t, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
                  },
              }),
          })
        : n === x.cU.SAFETY_FLOWS
          ? (0, a.jsx)(o.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: _.intl.string(_.t["2jxGer"]),
                onClick: () => {
                    (0, x.x3)(t, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal");
                },
            })
          : null;
}
let O = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: y, dismissable: O, classificationId: N } = e,
        [w, P] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = r.useRef(w),
        [k, R] = (0, c.US)([w], void 0, !0),
        A = r.useMemo(() => (0, i.Z)(), []),
        Z = r.useRef(!1),
        D = (0, m.GE)();
    r.useEffect(() => {
        I.current = k;
    }, [k]);
    let { loading: L, ageVerificationMethods: M } = (0, v.Z)({
        onClose: () => {
            null == y || y(), u();
        },
        onMethodClick: () => {
            P(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: N,
    });
    return (
        r.useLayoutEffect(
            () => () => {
                if (Z.current) return;
                let e = I.current;
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
            (0, x.lA)(A, x.d_.EXPRESSIVE_PRIMARY, n);
        }, [A, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: O,
            graphic: {
                type: "image",
                src: E.Z,
            },
            title: (0, g.B7)(n),
            subtitle: (0, g.s2)(
                n,
                () => {
                    f.Z.openUrl(h.Z.getArticleURL(j.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, x.x3)(A, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE);
                },
                D,
            ),
            actionBarInput: (0, a.jsx)(T, {
                modalSessionId: A,
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
                        className: S.dataAssurance,
                        children: [
                            (0, a.jsx)(o.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: _.intl.string(C.default.ar3a3q),
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
                                      color: "text-subtle",
                                      children: _.intl.string(C.default.cR6336),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: _.intl.string(C.default.hDvmYP),
                                      onClick: () => {
                                          (0, b.Jh)();
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
