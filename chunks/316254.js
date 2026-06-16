l.d(t, { A: () => v });
var n = l(627968),
    r = l(64700),
    i = l(418781),
    u = l.n(i),
    a = l(621466),
    c = l(17928),
    s = l(477782),
    o = l(228366),
    p = l(638128),
    d = l(975571),
    E = l(916260),
    L = l(652215),
    f = l(375708);
function v(e) {
    let { text: t = "", target: l } = e,
        i = (0, c.bG)([p.A], () => p.A.isEnabled()),
        v = r.useRef({ ...e, spellcheckEnabled: i });
    v.current = { ...e, spellcheckEnabled: i };
    let T = r.useRef(!1),
        [h, m] = r.useState(""),
        [H, b] = r.useState([]),
        A = "" !== t ? t : (0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement) ? l.value : "",
        g = (0, c.bG)([p.A], () => p.A.findLearnedWordIn(A), [A]),
        x = r.useCallback(() => {
            let { spellcheckEnabled: e, onHeightUpdate: t } = v.current;
            e &&
                (0, E.TT)() &&
                (0, E.uz)().then((e) => {
                    let { misspelledWord: l, corrections: n } = e;
                    T.current && (m(l), b([...n]), t());
                });
        }, []),
        C = r.useCallback(() => {
            if ((0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement)) {
                let { selectionStart: e, selectionEnd: t, value: n } = l;
                (l.value = ""), (l.value = n), "email" !== l.type && ((l.selectionStart = e), (l.selectionEnd = t));
            }
        }, [l]);
    if (
        (r.useEffect(() => {
            let e = (0, E.nL)(x);
            return (
                (T.current = !0),
                () => {
                    (T.current = !1), e();
                }
            );
        }, [x]),
        r.useEffect(() => {
            x();
        }, [i, x]),
        !(0, E.TT)())
    )
        return [null, null];
    let M = H.map((e, t) =>
            (0, n.jsx)(
                s.Dr,
                {
                    id: `correction-${t}`,
                    label: e,
                    action: () => {
                        (0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement)
                            ? (function (e, t, l) {
                                  let n,
                                      r,
                                      i = e.selectionStart ?? e.value.length,
                                      c = (function (e, t, l) {
                                          if ("" === t) return null;
                                          let n = RegExp(`(?<![\\p{L}\\p{N}_])${u()(t)}(?![\\p{L}\\p{N}_])`, "gu"),
                                              r = null,
                                              i = 1 / 0;
                                          for (let u of e.matchAll(n)) {
                                              let e = u.index,
                                                  n = e + t.length,
                                                  a = l < e ? e - l : l > n ? l - n : 0;
                                              a < i && ((i = a), (r = [e, n]));
                                          }
                                          return r;
                                      })(e.value, t, i);
                                  if (null == c) {
                                      (0, E.rK)(l), e.focus();
                                      return;
                                  }
                                  let [s, o] = c,
                                      p = e.value.slice(0, s) + l + e.value.slice(o);
                                  if (
                                      ((n = (0, a.vq)(e, HTMLTextAreaElement)
                                          ? HTMLTextAreaElement.prototype
                                          : HTMLInputElement.prototype),
                                      null != (r = Object.getOwnPropertyDescriptor(n, "value")?.set)
                                          ? r.call(e, p)
                                          : (e.value = p),
                                      e.dispatchEvent(new Event("input", { bubbles: !0 })),
                                      e.focus(),
                                      "email" !== e.type)
                                  ) {
                                      let t = s + l.length;
                                      (e.selectionStart = t), (e.selectionEnd = t);
                                  }
                              })(l, h, e)
                            : ((0, E.rK)(e), (0, a.vq)(l, HTMLElement) && l.focus());
                    },
                },
                `correction-${t}`,
            ),
        ),
        y = "" !== h;
    return [
        M,
        (0, n.jsxs)(n.Fragment, {
            children: [
                y
                    ? (0, n.jsx)(s.Dr, {
                          id: "add-to-dictionary",
                          label: f.intl.string(f.t.HJmG1G),
                          action: () => {
                              o.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: h }), C();
                          },
                      })
                    : null,
                null == g || y
                    ? null
                    : (0, n.jsx)(s.Dr, {
                          id: "remove-from-dictionary",
                          label: f.intl.string(f.t.xXqIX0),
                          action: () => {
                              o.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: g }), C();
                          },
                      }),
                (0, n.jsx)(s.sL, {
                    id: "spellcheck",
                    label: f.intl.string(f.t.TKkotf),
                    checked: i,
                    action: () => {
                        o.h.dispatch({ type: "SPELLCHECK_TOGGLE" }), C();
                    },
                }),
                i
                    ? (0, n.jsx)(s.Dr, {
                          id: "languages",
                          label: f.intl.string(f.t.OlOHDH),
                          action: () => window.open(d.A.getArticleURL(L.MVz.SPELLCHECK)),
                      })
                    : null,
            ],
        }),
    ];
}
