n.d(t, { default: () => N });
var a = n(627968),
    s = n(64700),
    i = n(835245),
    l = n(158954),
    r = n(554146),
    o = n(397927),
    d = n(379848),
    c = n(632738),
    u = n(627575),
    m = n(393033),
    h = n(105428),
    x = n(975571),
    p = n(935649),
    g = n(847599),
    _ = n(295972),
    f = n(36149),
    v = n(807734),
    b = n(652215),
    j = n(239093),
    A = n(536242),
    C = n(985018),
    S = n(62959),
    T = n(700129);
function y(e) {
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
let N = function (e) {
    let { transitionState: t, entryPoint: n, onClose: u, onComplete: j, dismissable: N, classificationId: E } = e,
        [I, k] = s.useState(r.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
        R = s.useRef(I),
        [O, w] = (0, d.kn)([I], void 0, !0),
        D = s.useMemo(() => (0, i.A)(), []),
        M = s.useRef(!1),
        P = (0, m.W$)();
    s.useEffect(() => {
        R.current = O;
    }, [O]);
    let { loading: L, ageVerificationMethods: U } = (0, v.A)({
        onClose: () => {
            j?.(), u();
        },
        onMethodClick: () => {
            k(r.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
        },
        classificationId: E,
    });
    return (
        s.useLayoutEffect(
            () => () => {
                if (M.current) return;
                let e = R.current;
                null != e &&
                    ((M.current = !0),
                    h.A.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_get_started_modal",
                        visibleContent: e,
                    }));
            },
            [],
        ),
        s.useEffect(() => {
            (0, g.Bs)(D, g.WU.EXPRESSIVE_PRIMARY, n);
        }, [D, n]),
        (0, a.jsx)(l.ExpressiveModal, {
            transitionState: t,
            onClose: u,
            gradientColor: "blue",
            dismissable: N,
            graphic: { type: "image", src: T.A },
            title: (0, f.ST)(n),
            subtitle: (0, f.mK)(
                n,
                () => {
                    p.A.openUrl(x.A.getArticleURL(b.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                        (0, g.St)(D, g.WU.EXPRESSIVE_PRIMARY, g._7.LEARN_MORE);
                },
                P,
            ),
            actionBarInput: (0, a.jsx)(y, { modalSessionId: D, entryPoint: n }),
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
                        className: S.W,
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
                                          (0, _.DJ)();
                                      },
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.BJc, {
                              direction: "vertical",
                              gap: 8,
                              children: U.map((e) => {
                                  let { title: t, description: n, onClick: s } = e;
                                  return (0, a.jsx)(
                                      c.PQ,
                                      {
                                          variant: "clickable",
                                          title: t,
                                          description: n,
                                          buttonDisabled: L,
                                          onButtonPress: () => s(D),
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
