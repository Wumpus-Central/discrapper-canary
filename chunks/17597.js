n.d(t, { default: () => O }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    o = n(704215),
    a = n(667202),
    c = n(481060),
    s = n(893776),
    d = n(243778),
    u = n(138201),
    x = n(420846),
    f = n(63063),
    m = n(168107),
    _ = n(480916),
    b = n(352138),
    h = n(629235),
    E = n(981631),
    g = n(398158),
    j = n(388032),
    p = n(70402),
    v = n(736056);
let O = function (e) {
    let { transitionState: t, entryPoint: n, onClose: O } = e,
        [R, y] = i.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = i.useRef(R),
        [A, S] = (0, d.US)([R], void 0, !0),
        T = i.useMemo(() => (0, l.Z)(), []),
        C = i.useRef(!1);
    i.useEffect(() => {
        I.current = A;
    }, [A]);
    let { loading: N, ageVerificationMethods: k } = (0, h.Z)(O, () => {
        y(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
    });
    return (
        i.useLayoutEffect(
            () => () => {
                if (C.current) return;
                let e = I.current;
                null != e &&
                    ((C.current = !0),
                    x.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, _.lA)(T, _.d_.EXPRESSIVE_PRIMARY, n);
        }, [T, n]),
        (0, r.jsx)(a.I, {
            transitionState: t,
            onClose: O,
            graphic: {
                type: "image",
                src: v.Z,
            },
            title: j.intl.string(j.t.JHNunp),
            subtitle: j.intl.format(g.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    m.Z.openUrl(f.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, _.x3)(T, _.d_.EXPRESSIVE_PRIMARY, _.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, r.jsx)(c.Avr, {
                textVariant: "text-xs/medium",
                color: "text-tertiary",
                text: j.intl.string(j.t["2jxGen"]),
                onClick: () => {
                    (0, _.x3)(T, _.d_.EXPRESSIVE_PRIMARY, _.sU.LOG_OUT),
                        s.Z.logout("age_verification_get_started_modal");
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
                            top: 12,
                            bottom: 12,
                            left: 8,
                            right: 8,
                        },
                        align: "center",
                        className: p.dataAssurance,
                        children: [
                            (0, r.jsx)(c.d3s, {
                                size: "md",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-info",
                                children: j.intl.string(g.default.ar3a3t),
                            }),
                        ],
                    }),
                    null == k || 0 === k.length
                        ? (0, r.jsxs)(c.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: j.intl.string(g.default.cR6339),
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      variant: "primary",
                                      size: "sm",
                                      text: j.intl.string(g.default.hDvmYG),
                                      onClick: () => {
                                          (0, b.J)();
                                      },
                                  }),
                              ],
                          })
                        : k.map((e) => {
                              let { title: t, description: n, onClick: i } = e;
                              return (0, r.jsx)(
                                  u.JZ,
                                  {
                                      variant: "clickable",
                                      title: t,
                                      description: n,
                                      buttonDisabled: N,
                                      onButtonPress: () => i(T),
                                  },
                                  t,
                              );
                          }),
                ],
            }),
        })
    );
};
