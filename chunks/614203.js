"use strict";
s.d(e, { A: () => b });
var n = s(627968),
    a = s(64700),
    r = s(621466),
    i = s(311907),
    c = s(397927),
    l = s(711581),
    o = s(638128),
    p = s(975571),
    u = s(454235),
    g = s(652215),
    d = s(985018);
function b(t) {
    let { text: e = "", target: s } = t,
        b = (0, i.bG)([o.A], () => o.A.isEnabled()),
        f = (0, i.bG)([o.A], () => o.A.hasLearnedWord(e), [e]),
        x = a.useRef({ ...t, spellcheckEnabled: b });
    x.current = { ...t, spellcheckEnabled: b };
    let h = a.useRef(!1),
        [m, T] = a.useState(!1),
        [S, y] = a.useState([]),
        C = a.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: s } = x.current;
            t &&
                (0, u.TT)() &&
                Promise.all([(0, u.PS)(e, !0), (0, u.Os)(e, !0)]).then((t) => {
                    let [e, n] = t;
                    h.current && (T(e), y(n), s());
                });
        }, []),
        E = a.useCallback(() => {
            if ((0, r.vq)(s, HTMLInputElement) || (0, r.vq)(s, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: n } = s;
                (s.value = ""), (s.value = n), "email" !== s.type && ((s.selectionStart = t), (s.selectionEnd = e));
            }
        }, [s]);
    return (a.useEffect(() => {
        let t = (0, u.nL)(C);
        return (
            (h.current = !0),
            () => {
                (h.current = !1), t();
            }
        );
    }, [C]),
    a.useEffect(() => {
        C();
    }, [e, b, C]),
    (0, u.TT)())
        ? [
              S.map((t, e) =>
                  (0, n.jsx)(
                      c.Drp,
                      {
                          id: `correction-${e}`,
                          label: t,
                          action: () => {
                              (0, u.rK)(t), s.focus();
                          },
                      },
                      `correction-${e}`,
                  ),
              ),
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      m
                          ? (0, n.jsx)(c.Drp, {
                                id: "add-to-dictionary",
                                label: d.intl.string(d.t.HJmG1G),
                                action: () => {
                                    (0, l.NG)(e), E();
                                },
                            })
                          : null,
                      f &&
                          (0, n.jsx)(c.Drp, {
                              id: "remove-from-dictionary",
                              label: d.intl.string(d.t.xXqIX0),
                              action: () => {
                                  (0, l.QZ)(e), E();
                              },
                          }),
                      (0, n.jsx)(c.sLh, {
                          id: "spellcheck",
                          label: d.intl.string(d.t.TKkotf),
                          checked: b,
                          action: () => {
                              (0, l.Np)(), E();
                          },
                      }),
                      b
                          ? (0, n.jsx)(c.Drp, {
                                id: "languages",
                                label: d.intl.string(d.t.OlOHDH),
                                action: () => window.open(p.A.getArticleURL(g.MVz.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
