l.d(t, { A: () => T });
var n = l(477900),
    r = l(582128),
    i = l(377941),
    u = l.n(i),
    a = l(621466),
    c = l(855986),
    s = l(477782),
    o = l(73153),
    p = l(638128),
    d = l(975571),
    E = l(334604),
    L = l(652215),
    f = l(792996);
function v(e) {
    let t = e.ownerDocument.defaultView;
    return t?.windowKey;
}
function T(e) {
    let { text: t = "", target: l } = e,
        i = (0, c.bG)([p.A], () => p.A.isEnabled()),
        T = r.useRef({ ...e, spellcheckEnabled: i });
    T.current = { ...e, spellcheckEnabled: i };
    let h = r.useRef(!1),
        [m, H] = r.useState(""),
        [b, A] = r.useState([]),
        g = "" !== t ? t : (0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement) ? l.value : "",
        x = (0, c.bG)([p.A], () => p.A.findLearnedWordIn(g), [g]),
        w = r.useCallback(() => {
            let { spellcheckEnabled: e, onHeightUpdate: t } = T.current;
            e &&
                (0, E.TT)() &&
                (0, E.uz)().then((e) => {
                    let { misspelledWord: l, corrections: n } = e;
                    h.current && (H(l), A([...n]), t());
                });
        }, []),
        C = r.useCallback(() => {
            if ((0, a.vq)(l, HTMLInputElement) || (0, a.vq)(l, HTMLTextAreaElement)) {
                let { selectionStart: e, selectionEnd: t, value: n } = l;
                ((l.value = ""), (l.value = n), "email" !== l.type && ((l.selectionStart = e), (l.selectionEnd = t)));
            }
        }, [l]);
    if (
        (r.useEffect(() => {
            let e = (0, E.nL)(w);
            return (
                (h.current = !0),
                () => {
                    ((h.current = !1), e());
                }
            );
        }, [w]),
        r.useEffect(() => {
            w();
        }, [i, w]),
        !(0, E.TT)())
    )
        return [null, null];
    let y = b.map((e, t) =>
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
                                      ((0, E.rK)(l, v(e)), e.focus());
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
                                      ((e.selectionStart = t), (e.selectionEnd = t));
                                  }
                              })(l, m, e)
                            : ((0, E.rK)(e, v(l)), (0, a.vq)(l, HTMLElement) && l.focus());
                    },
                },
                `correction-${t}`,
            ),
        ),
        M = "" !== m;
    return [
        y,
        (0, n.jsxs)(n.Fragment, {
            children: [
                M
                    ? (0, n.jsx)(s.Dr, {
                          id: "add-to-dictionary",
                          label: f.intl.string(f.t.HJmG1G),
                          action: () => {
                              (o.h.dispatch({ type: "SPELLCHECK_LEARN_WORD", word: m }), C());
                          },
                      })
                    : null,
                null == x || M
                    ? null
                    : (0, n.jsx)(s.Dr, {
                          id: "remove-from-dictionary",
                          label: f.intl.string(f.t.xXqIX0),
                          action: () => {
                              (o.h.dispatch({ type: "SPELLCHECK_UNLEARN_WORD", word: x }), C());
                          },
                      }),
                (0, n.jsx)(s.sL, {
                    id: "spellcheck",
                    label: f.intl.string(f.t.TKkotf),
                    checked: i,
                    action: () => {
                        (o.h.dispatch({ type: "SPELLCHECK_TOGGLE" }), C());
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
