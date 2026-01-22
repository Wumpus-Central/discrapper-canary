n.d(e, { A: () => h }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(621466),
    i = n(311907),
    s = n(397927),
    o = n(711581),
    c = n(638128),
    u = n(975571),
    d = n(454235),
    p = n(652215),
    b = n(985018);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function f(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function h(t) {
    let { text: e = "", target: n } = t,
        h = (0, i.bG)([c.A], () => c.A.isEnabled()),
        y = (0, i.bG)([c.A], () => c.A.hasLearnedWord(e), [e]),
        m = r.useRef(f(g({}, t), { spellcheckEnabled: h }));
    m.current = f(g({}, t), { spellcheckEnabled: h });
    let T = r.useRef(!1),
        [S, j] = r.useState(!1),
        [x, C] = r.useState([]),
        O = r.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = m.current;
            t &&
                (0, d.TT)() &&
                Promise.all([(0, d.PS)(e, !0), (0, d.Os)(e, !0)]).then((t) => {
                    let [e, l] = t;
                    T.current && (j(e), C(l), n());
                });
        }, []),
        A = r.useCallback(() => {
            if ((0, a.vq)(n, HTMLInputElement) || (0, a.vq)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: l } = n;
                (n.value = ""), (n.value = l), "email" !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    return (r.useEffect(() => {
        let t = (0, d.nL)(O);
        return (
            (T.current = !0),
            () => {
                (T.current = !1), t();
            }
        );
    }, [O]),
    r.useEffect(() => {
        O();
    }, [e, h, O]),
    (0, d.TT)())
        ? [
              x.map((t, e) =>
                  (0, l.jsx)(
                      s.Drp,
                      {
                          id: "correction-".concat(e),
                          label: t,
                          action: () => {
                              (0, d.rK)(t), n.focus();
                          },
                      },
                      "correction-".concat(e),
                  ),
              ),
              (0, l.jsxs)(l.Fragment, {
                  children: [
                      S
                          ? (0, l.jsx)(s.Drp, {
                                id: "add-to-dictionary",
                                label: b.intl.string(b.t.HJmG1G),
                                action: () => {
                                    (0, o.NG)(e), A();
                                },
                            })
                          : null,
                      y &&
                          (0, l.jsx)(s.Drp, {
                              id: "remove-from-dictionary",
                              label: b.intl.string(b.t.xXqIX0),
                              action: () => {
                                  (0, o.QZ)(e), A();
                              },
                          }),
                      (0, l.jsx)(s.sLh, {
                          id: "spellcheck",
                          label: b.intl.string(b.t.TKkotf),
                          checked: h,
                          action: () => {
                              (0, o.Np)(), A();
                          },
                      }),
                      h
                          ? (0, l.jsx)(s.Drp, {
                                id: "languages",
                                label: b.intl.string(b.t.OlOHDH),
                                action: () => window.open(u.A.getArticleURL(p.MVz.SPELLCHECK)),
                            })
                          : null,
                  ],
              }),
          ]
        : [null, null];
}
