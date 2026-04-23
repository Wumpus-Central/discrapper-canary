"use strict";
s.d(e, { A: () => f });
var n = s(627968),
    r = s(64700),
    a = s(621466),
    i = s(17928),
    l = s(477782),
    o = s(228366),
    c = s(638128),
    u = s(975571),
    p = s(454235),
    d = s(652215),
    g = s(985018);
function f(t) {
    let { text: e = "", target: s } = t,
        f = (0, i.bG)([c.A], () => c.A.isEnabled()),
        b = (0, i.bG)([c.A], () => c.A.hasLearnedWord(e), [e]),
        x = r.useRef({ ...t, spellcheckEnabled: f });
    x.current = { ...t, spellcheckEnabled: f };
    let m = r.useRef(!1),
        [S, h] = r.useState(!1),
        [C, T] = r.useState([]),
        y = r.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: s } = x.current;
            t &&
                (0, p.TT)() &&
                Promise.all([(0, p.PS)(e, !0), (0, p.Os)(e, !0)]).then((t) => {
                    let [e, n] = t;
                    m.current && (h(e), T(n), s());
                });
        }, []),
        A = r.useCallback(() => {
            if ((0, a.vq)(s, HTMLInputElement) || (0, a.vq)(s, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: n } = s;
                (s.value = ""), (s.value = n), "email" !== s.type && ((s.selectionStart = t), (s.selectionEnd = e));
            }
        }, [s]);
    return (r.useEffect(() => {
        let t = (0, p.nL)(y);
        return (
            (m.current = !0),
            () => {
                (m.current = !1), t();
            }
        );
    }, [y]),
    r.useEffect(() => {
        y();
    }, [e, f, y]),
    (0, p.TT)())
        ? [
              C.map((t, e) =>
                  (0, n.jsx)(
                      l.Dr,
                      {
                          id: `correction-${e}`,
                          label: t,
                          action: () => {
                              (0, p.rK)(t), s.focus();
                          },
                      },
                      `correction-${e}`,
                  ),
              ),
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      S
                          ? (0, n.jsx)(l.Dr, {
                                id: "add-to-dictionary",
                                label: g.intl.string(g.t.HJmG1G),
                                action: () => {
                                    o.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: e }), A();
                                },
                            })
                          : null,
                      b &&
                          (0, n.jsx)(l.Dr, {
                              id: "remove-from-dictionary",
                              label: g.intl.string(g.t.xXqIX0),
                              action: () => {
                                  o.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: e }), A();
                              },
                          }),
                      (0, n.jsx)(l.sL, {
                          id: "spellcheck",
                          label: g.intl.string(g.t.TKkotf),
                          checked: f,
                          action: () => {
                              o.h.dispatch({ type: "SPELLCHECK_TOGGLE" }), A();
                          },
                      }),
                      f
                          ? (0, n.jsx)(l.Dr, {
                                id: "languages",
                                label: g.intl.string(g.t.OlOHDH),
                                action: () => window.open(u.A.getArticleURL(d.MVz.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
