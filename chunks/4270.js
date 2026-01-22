n.d(t, {
    A: () => N,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(731738),
    c = n(397927),
    u = n(55400),
    d = n(964486),
    p = n(260762),
    f = n(485947),
    h = n(831062),
    A = n(954571),
    g = n(336590),
    m = n(471271),
    b = n(957283),
    _ = n(284306),
    E = n(790499),
    O = n(514426),
    y = n(977524),
    I = n(687599),
    v = n(652215),
    S = n(985018),
    C = n(843284);

function N() {
    let e = i.useRef(null),
        t = (0, _.A)(),
        n = (0, E.I)(),
        l = (0, g.r)(),
        N = (0, u.w)(),
        T = (0, p.A)("message-requests-spam-list"),
        { channelId: j } = (0, b.N)(),
        x = i.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["EDYbS+"]), c.ToastType.FAILURE));
        }, []),
        { rejectAll: P } = (0, m.t)({
            onError: x,
        }),
        w = i.useCallback(() => {
            P(t.map((e) => e.channel.id));
        }, [t, P]);
    (0, d.Ay)(() => {
        A.default.track(v.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, {
            num_spam_message_requests: n,
        }),
            h.A.increment({
                name: o.K.SPAM_MESSAGE_REQUEST_VIEW,
            });
    });
    let L = i.useCallback(
            (e) => {
                var n, i;
                let { row: s } = e,
                    o = t[s],
                    c = null == (i = t[s + 1]) || null == (n = i.channel) ? void 0 : n.id,
                    u = o.channel.id;
                return (0, r.jsx)(
                    y.A,
                    {
                        index: s,
                        className: a()({
                            [C.wH]: null != j && j === u,
                            [C.wZ]: null != j && j === c,
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [t, l, j],
        ),
        R = i.useCallback(
            () =>
                (0, r.jsxs)(
                    f.A,
                    {
                        className: C.Gf,
                        children: [
                            S.intl.format(S.t.C79Edh, {
                                count: n,
                            }),
                            N && n > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.Text, {
                                              className: C.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, r.jsx)(c.QWc, {
                                              textVariant: "text-sm/normal",
                                              text: S.intl.string(S.t.p6t7RC),
                                              onClick: w,
                                              "aria-label": S.intl.string(S.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [n, w, N],
        );
    return 0 === t.length
        ? (0, r.jsx)(O.A, {
              section: I.zz.SPAM,
          })
        : (0, r.jsx)(s.hD, {
              navigator: T,
              children: (0, r.jsx)(s.PR, {
                  children: (n) => {
                      let { ref: i, role: l } = n,
                          a = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  r,
                                  i,
                                  l = {};
                              if ("u" > typeof Reflect && Reflect.ownKeys) {
                                  for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                      (r = n[i]),
                                          !(t.indexOf(r) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, r) &&
                                              (l[r] = e[r]);
                                  return l;
                              }
                              if (
                                  ((l = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          r,
                                          i = {},
                                          l = Object.getOwnPropertyNames(e);
                                      for (r = 0; r < l.length; r++)
                                          (n = l[r]),
                                              !(t.indexOf(n) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                  (i[n] = e[n]);
                                      return i;
                                  })(e, t)),
                                  Object.getOwnPropertySymbols)
                              )
                                  for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                      (r = n[i]),
                                          !(t.indexOf(r) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, r) &&
                                              (l[r] = e[r]);
                              return l;
                          })(n, ["ref", "role"]);
                      return (0, r.jsx)(
                          c.B8B,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  className: C.p_,
                                  innerRole: l,
                                  innerAriaLabel: S.intl.string(S.t.e7GWjQ),
                                  ref: (t) => {
                                      var n;
                                      (e.current = t),
                                          (i.current =
                                              null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null);
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: 26,
                                  rowHeight: 73,
                                  renderSection: R,
                                  renderRow: L,
                                  sections: [t.length],
                                  chunkSize: 30,
                                  fade: !0,
                              },
                              a,
                          ),
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
