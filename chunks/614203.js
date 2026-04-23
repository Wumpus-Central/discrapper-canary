l.d(e, { A: () => E });
var n = l(627968),
    i = l(64700),
    r = l(621466),
    s = l(311907),
    a = l(477782),
    c = l(711581),
    u = l(638128),
    o = l(975571),
    d = l(454235),
    p = l(652215),
    h = l(985018);
function E(t) {
    let { text: e = "", target: l } = t,
        E = (0, s.bG)([u.A], () => u.A.isEnabled()),
        f = (0, s.bG)([u.A], () => u.A.hasLearnedWord(e), [e]),
        L = i.useRef({ ...t, spellcheckEnabled: E });
    L.current = { ...t, spellcheckEnabled: E };
    let m = i.useRef(!1),
        [x, C] = i.useState(!1),
        [b, A] = i.useState([]),
        T = i.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: l } = L.current;
            t &&
                (0, d.TT)() &&
                Promise.all([(0, d.PS)(e, !0), (0, d.Os)(e, !0)]).then((t) => {
                    let [e, n] = t;
                    m.current && (C(e), A(n), l());
                });
        }, []),
        g = i.useCallback(() => {
            if ((0, r.vq)(l, HTMLInputElement) || (0, r.vq)(l, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: n } = l;
                (l.value = ""), (l.value = n), "email" !== l.type && ((l.selectionStart = t), (l.selectionEnd = e));
            }
        }, [l]);
    return (i.useEffect(() => {
        let t = (0, d.nL)(T);
        return (
            (m.current = !0),
            () => {
                (m.current = !1), t();
            }
        );
    }, [T]),
    i.useEffect(() => {
        T();
    }, [e, E, T]),
    (0, d.TT)())
        ? [
              b.map((t, e) =>
                  (0, n.jsx)(
                      a.Dr,
                      {
                          id: `correction-${e}`,
                          label: t,
                          action: () => {
                              (0, d.rK)(t), l.focus();
                          },
                      },
                      `correction-${e}`,
                  ),
              ),
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      x
                          ? (0, n.jsx)(a.Dr, {
                                id: "add-to-dictionary",
                                label: h.intl.string(h.t.HJmG1G),
                                action: () => {
                                    (0, c.NG)(e), g();
                                },
                            })
                          : null,
                      f &&
                          (0, n.jsx)(a.Dr, {
                              id: "remove-from-dictionary",
                              label: h.intl.string(h.t.xXqIX0),
                              action: () => {
                                  (0, c.QZ)(e), g();
                              },
                          }),
                      (0, n.jsx)(a.sL, {
                          id: "spellcheck",
                          label: h.intl.string(h.t.TKkotf),
                          checked: E,
                          action: () => {
                              (0, c.Np)(), g();
                          },
                      }),
                      E
                          ? (0, n.jsx)(a.Dr, {
                                id: "languages",
                                label: h.intl.string(h.t.OlOHDH),
                                action: () => window.open(o.A.getArticleURL(p.MVz.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
