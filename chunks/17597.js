n.d(t, { Z: () => _ }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(704215),
    o = n(667202),
    c = n(481060),
    s = n(243778),
    u = n(138201),
    d = n(210825),
    f = n(420846),
    p = n(63063),
    h = n(168107),
    m = n(480916),
    y = n(352138),
    g = n(629235),
    b = n(981631),
    E = n(398158),
    x = n(388032),
    v = n(70402),
    j = n(765896);
let _ = function (e) {
    let { transitionState: t, entryPoint: n, onClose: _, onComplete: O, dismissable: A } = e,
        [S, I] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        R = i.useRef(S),
        [w, P] = (0, s.US)([S], void 0, !0),
        C = i.useMemo(() => (0, l.Z)(), []),
        N = i.useRef(!1);
    i.useEffect(() => {
        R.current = w;
    }, [w]);
    let { loading: k, ageVerificationMethods: T } = (0, g.Z)(
        () => {
            null == O || O(), _();
        },
        () => {
            I(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
    );
    return (
        i.useLayoutEffect(
            () => () => {
                if (N.current) return;
                let e = R.current;
                null != e &&
                    ((N.current = !0),
                    f.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, m.lA)(C, m.d_.EXPRESSIVE_PRIMARY, n);
        }, [C, n]),
        (0, r.jsx)(o.I, {
            transitionState: t,
            onClose: _,
            gradientColor: "blue",
            dismissable: A,
            graphic: {
                type: "image",
                src: j.Z,
            },
            title: x.intl.string(x.t.JHNunp),
            subtitle: x.intl.format(E.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    h.Z.openUrl(p.Z.getArticleURL(b.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, m.x3)(C, m.d_.EXPRESSIVE_PRIMARY, m.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, r.jsx)(c.Avr, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: x.intl.string(x.t["2jxGen"]),
                onClick: () => {
                    (0, m.x3)(C, m.d_.EXPRESSIVE_PRIMARY, m.sU.LOG_OUT), (0, d.R)("age_verification_get_started_modal");
                },
            }),
            children: (0, r.jsxs)(c.Kqy, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, r.jsxs)(c.Kqy, {
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
                        className: v.dataAssurance,
                        children: [
                            (0, r.jsx)(c.d3s, {
                                size: "lg",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: x.intl.string(E.default.ar3a3t),
                            }),
                        ],
                    }),
                    null == T || 0 === T.length
                        ? (0, r.jsxs)(c.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: x.intl.string(E.default.cR6339),
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      variant: "primary",
                                      size: "sm",
                                      text: x.intl.string(E.default.hDvmYG),
                                      onClick: () => {
                                          (0, y.J)();
                                      },
                                  }),
                              ],
                          })
                        : (0, r.jsx)(c.Kqy, {
                              direction: "vertical",
                              gap: 8,
                              children: T.map((e) => {
                                  let { title: t, description: n, onClick: i } = e;
                                  return (0, r.jsx)(
                                      u.JZ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: k,
                                          onButtonPress: () => i(C),
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
