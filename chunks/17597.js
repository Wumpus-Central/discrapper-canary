n.d(t, { default: () => _ }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(772848),
    l = n(704215),
    o = n(667202),
    c = n(481060),
    s = n(893776),
    u = n(243778),
    d = n(138201),
    f = n(420846),
    p = n(63063),
    m = n(168107),
    y = n(480916),
    g = n(352138),
    h = n(629235),
    E = n(981631),
    x = n(398158),
    v = n(388032),
    b = n(70402),
    j = n(736056);
let _ = function (e) {
    let { transitionState: t, entryPoint: n, onClose: _, onComplete: O } = e,
        [A, S] = i.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        I = i.useRef(A),
        [R, w] = (0, u.US)([A], void 0, !0),
        P = i.useMemo(() => (0, a.Z)(), []),
        C = i.useRef(!1);
    i.useEffect(() => {
        I.current = R;
    }, [R]);
    let { loading: T, ageVerificationMethods: N } = (0, h.Z)(
        () => {
            null == O || O(), _();
        },
        () => {
            S(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
    );
    return (
        i.useLayoutEffect(
            () => () => {
                if (C.current) return;
                let e = I.current;
                null != e &&
                    ((C.current = !0),
                    f.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, y.lA)(P, y.d_.EXPRESSIVE_PRIMARY, n);
        }, [P, n]),
        (0, r.jsx)(o.I, {
            transitionState: t,
            onClose: _,
            graphic: {
                type: "image",
                src: j.Z,
            },
            title: v.intl.string(v.t.JHNunp),
            subtitle: v.intl.format(x.default.RpMIT0, {
                handleOnHelpUrlHook: () => {
                    m.Z.openUrl(p.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, y.x3)(P, y.d_.EXPRESSIVE_PRIMARY, y.sU.LEARN_MORE);
                },
            }),
            actionBarInput: (0, r.jsx)(c.Avr, {
                textVariant: "text-xs/medium",
                color: "text-tertiary",
                text: v.intl.string(v.t["2jxGen"]),
                onClick: () => {
                    (0, y.x3)(P, y.d_.EXPRESSIVE_PRIMARY, y.sU.LOG_OUT),
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
                        className: b.dataAssurance,
                        children: [
                            (0, r.jsx)(c.d3s, {
                                size: "md",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-info",
                                children: v.intl.string(x.default.ar3a3t),
                            }),
                        ],
                    }),
                    null == N || 0 === N.length
                        ? (0, r.jsxs)(c.Kqy, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-secondary",
                                      children: v.intl.string(x.default.cR6339),
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      variant: "primary",
                                      size: "sm",
                                      text: v.intl.string(x.default.hDvmYG),
                                      onClick: () => {
                                          (0, g.J)();
                                      },
                                  }),
                              ],
                          })
                        : N.map((e) => {
                              let { title: t, description: n, onClick: i } = e;
                              return (0, r.jsx)(
                                  d.JZ,
                                  {
                                      variant: "clickable",
                                      title: t,
                                      description: n,
                                      buttonDisabled: T,
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
