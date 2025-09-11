n.d(t, { Z: () => _ }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(704215),
    o = n(667202),
    c = n(481060),
    s = n(893776),
    u = n(243778),
    d = n(138201),
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
    let { transitionState: t, entryPoint: n, onClose: _, onComplete: O } = e,
        [A, S] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = i.useRef(A),
        [R, w] = (0, u.US)([A], void 0, !0),
        P = i.useMemo(() => (0, l.Z)(), []),
        N = i.useRef(!1);
    i.useEffect(() => {
        I.current = R;
    }, [R]);
    let { loading: C, ageVerificationMethods: k } = (0, g.Z)(
        () => {
            null == O || O(), _();
        },
        () => {
            S(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
    );
    return (
        i.useLayoutEffect(
            () => () => {
                if (N.current) return;
                let e = I.current;
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
            (0, m.lA)(P, m.d_.EXPRESSIVE_PRIMARY, n);
        }, [P, n]),
        (0, r.jsx)(o.I, {
            transitionState: t,
            onClose: _,
            graphic: {
                type: "image",
                src: j.Z,
            },
            title: x.intl.string(x.t.JHNunp),
            subtitle: x.intl.format(E.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    h.Z.openUrl(p.Z.getArticleURL(b.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, m.x3)(P, m.d_.EXPRESSIVE_PRIMARY, m.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, r.jsx)(c.Avr, {
                textVariant: "text-xs/medium",
                color: "text-tertiary",
                text: x.intl.string(x.t["2jxGen"]),
                onClick: () => {
                    (0, m.x3)(P, m.d_.EXPRESSIVE_PRIMARY, m.sU.LOG_OUT),
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
                        className: v.dataAssurance,
                        children: [
                            (0, r.jsx)(c.d3s, {
                                size: "md",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-info",
                                children: x.intl.string(E.default.ar3a3t),
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
                        : k.map((e) => {
                              let { title: t, description: n, onClick: i } = e;
                              return (0, r.jsx)(
                                  d.JZ,
                                  {
                                      variant: "clickable",
                                      title: t,
                                      description: n,
                                      buttonDisabled: C,
                                      onButtonPress: () => i(P),
                                  },
                                  t,
                              );
                          }),
                ],
            }),
        })
    );
};
