l.d(t, { A: () => L });
var n = l(627968),
    r = l(64700),
    i = l(621466),
    a = l(17928),
    s = l(477782),
    c = l(228366),
    u = l(638128),
    o = l(975571),
    d = l(454235),
    p = l(652215),
    E = l(985018);
function L(e) {
    let { text: t = "", target: l } = e,
        L = (0, a.bG)([u.A], () => u.A.isEnabled()),
        h = (0, a.bG)([u.A], () => u.A.hasLearnedWord(t), [t]),
        b = r.useRef({ ...e, spellcheckEnabled: L });
    b.current = { ...e, spellcheckEnabled: L };
    let C = r.useRef(!1),
        [f, A] = r.useState(!1),
        [k, m] = r.useState([]),
        H = r.useCallback(() => {
            let { spellcheckEnabled: e, text: t, onHeightUpdate: l } = b.current;
            e &&
                (0, d.TT)() &&
                Promise.all([(0, d.PS)(t, !0), (0, d.Os)(t, !0)]).then((e) => {
                    let [t, n] = e;
                    C.current && (A(t), m(n), l());
                });
        }, []),
        T = r.useCallback(() => {
            if ((0, i.vq)(l, HTMLInputElement) || (0, i.vq)(l, HTMLTextAreaElement)) {
                let { selectionStart: e, selectionEnd: t, value: n } = l;
                (l.value = ""), (l.value = n), "email" !== l.type && ((l.selectionStart = e), (l.selectionEnd = t));
            }
        }, [l]);
    return (r.useEffect(() => {
        let e = (0, d.nL)(H);
        return (
            (C.current = !0),
            () => {
                (C.current = !1), e();
            }
        );
    }, [H]),
    r.useEffect(() => {
        H();
    }, [t, L, H]),
    (0, d.TT)())
        ? [
              k.map((e, t) =>
                  (0, n.jsx)(
                      s.Dr,
                      {
                          id: `correction-${t}`,
                          label: e,
                          action: () => {
                              (0, d.rK)(e), l.focus();
                          },
                      },
                      `correction-${t}`,
                  ),
              ),
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      f
                          ? (0, n.jsx)(s.Dr, {
                                id: "add-to-dictionary",
                                label: E.intl.string(E.t.HJmG1G),
                                action: () => {
                                    c.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: t }), T();
                                },
                            })
                          : null,
                      h &&
                          (0, n.jsx)(s.Dr, {
                              id: "remove-from-dictionary",
                              label: E.intl.string(E.t.xXqIX0),
                              action: () => {
                                  c.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: t }), T();
                              },
                          }),
                      (0, n.jsx)(s.sL, {
                          id: "spellcheck",
                          label: E.intl.string(E.t.TKkotf),
                          checked: L,
                          action: () => {
                              c.h.dispatch({ type: "SPELLCHECK_TOGGLE" }), T();
                          },
                      }),
                      L
                          ? (0, n.jsx)(s.Dr, {
                                id: "languages",
                                label: E.intl.string(E.t.OlOHDH),
                                action: () => window.open(o.A.getArticleURL(p.MVz.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
