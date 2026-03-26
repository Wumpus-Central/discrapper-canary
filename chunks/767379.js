n.d(t, { default: () => E });
var a = n(627968),
    i = n(64700),
    s = n(835245),
    l = n(158954),
    r = n(554146),
    o = n(397927),
    d = n(932001),
    c = n(632738),
    u = n(627575),
    m = n(393033),
    h = n(105428),
    x = n(975571),
    p = n(935649),
    g = n(847599),
    f = n(295972),
    _ = n(36149),
    v = n(807734),
    b = n(652215),
    j = n(239093),
    A = n(536242),
    C = n(985018),
    y = n(774992),
    T = n(700129);
function S(e) {
    let { modalSessionId: t, entryPoint: n } = e;
    return (0, m.W$)()
        ? (0, a.jsx)(o.Text, {
              variant: "text-xs/medium",
              children: C.intl.format(A.default.htWh1G, {
                  handleOnHelpUrlHook: () => {
                      p.A.openUrl(j.d$.LEARN_MORE_UU_APPEAL_LINK),
                          (0, g.St)(t, g.WU.EXPRESSIVE_PRIMARY, g._7.LEARN_MORE);
                  },
              }),
          })
        : n === g.q1.SAFETY_FLOWS
          ? (0, a.jsx)(o.QWc, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: C.intl.string(C.t["2jxGer"]),
                onClick: () => {
                    (0, g.St)(t, g.WU.EXPRESSIVE_PRIMARY, g._7.LOG_OUT), (0, u.k)("age_verification_get_started_modal");
                },
            })
          : null;
}
let E = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: j, dismissable: E, classificationId: N } = e,
        [I, k] = i.useState(r.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        O = i.useRef(I),
        [R, w] = (0, d.kn)([I], void 0, !0),
        D = i.useMemo(() => (0, s.A)(), []),
        P = i.useRef(!1),
        M = (0, m.W$)();
    i.useEffect(() => {
        O.current = R;
    }, [R]);
    let { loading: L, ageVerificationMethods: U } = (0, v.A)({
        onClose: () => {
            j?.(), u();
        },
        onMethodClick: () => {
            k(r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: N,
    });
    return (
        i.useLayoutEffect(
            () => () => {
                if (P.current) return;
                let e = O.current;
                null != e &&
                    ((P.current = !0),
                    h.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        i.useEffect(() => {
            (0, g.Bs)(D, g.WU.EXPRESSIVE_PRIMARY, n);
        }, [D, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: E,
            graphic: { type: "image", src: T.A },
            title: (0, _.ST)(n),
            subtitle: (0, _.mK)(
                n,
                () => {
                    p.A.openUrl(x.A.getArticleURL(b.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, g.St)(D, g.WU.EXPRESSIVE_PRIMARY, g._7.LEARN_MORE);
                },
                M,
            ),
            actionBarInput: (0, a.jsx)(S, { modalSessionId: D, entryPoint: n }),
            children: (0, a.jsxs)(o.BJc, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, a.jsxs)(o.BJc, {
                        fullWidth: !1,
                        direction: "horizontal",
                        gap: 8,
                        padding: { top: 8, bottom: 8, left: 12, right: 12 },
                        align: "center",
                        className: y.W,
                        children: [
                            (0, a.jsx)(o.mir, { size: "lg", color: "currentColor" }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-feedback-info",
                                children: C.intl.string(A.default.ar3a3q),
                            }),
                        ],
                    }),
                    null == U || 0 === U.length
                        ? (0, a.jsxs)(o.BJc, {
                              direction: "vertical",
                              align: "center",
                              gap: 16,
                              children: [
                                  (0, a.jsx)(o.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: C.intl.string(A.default.cR6336),
                                  }),
                                  (0, a.jsx)(o.Button, {
                                      variant: "primary",
                                      size: "sm",
                                      text: C.intl.string(A.default.hDvmYP),
                                      onClick: () => {
                                          (0, f.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.BJc, {
                              direction: "vertical",
                              gap: 8,
                              children: U.map((e) => {
                                  let { title: t, description: n, onClick: i } = e;
                                  return (0, a.jsx)(
                                      c.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: L,
                                          onButtonPress: () => i(D),
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
