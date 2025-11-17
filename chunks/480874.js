n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(286379),
    c = n(481060),
    u = n(183126),
    d = n(493773),
    p = n(209613),
    f = n(82295),
    h = n(797614),
    g = n(626135),
    m = n(26373),
    _ = n(486622),
    b = n(488634),
    E = n(727813),
    O = n(355350),
    y = n(307947),
    v = n(125855),
    I = n(687683),
    C = n(981631),
    S = n(388032),
    T = n(797303);
function N() {
    let e = i.useRef(null),
        t = (0, E.Z)(),
        n = (0, O.w)(),
        l = (0, m.V)(),
        N = (0, u.N)(),
        j = (0, p.Z)("message-requests-spam-list"),
        { channelId: P } = (0, b._)(),
        x = i.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(S.intl.string(S.t["EDYbS+"]), c.ToastType.FAILURE));
        }, []),
        { rejectAll: A } = (0, _.m)({ onError: x }),
        Z = i.useCallback(() => {
            A(t.map((e) => e.channel.id));
        }, [t, A]);
    (0, d.ZP)(() => {
        g.default.track(C.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }),
            h.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let w = i.useCallback(
            (e) => {
                var n, i;
                let { row: s } = e,
                    o = t[s],
                    c = null == (i = t[s + 1]) || null == (n = i.channel) ? void 0 : n.id,
                    u = o.channel.id;
                return (0, r.jsx)(
                    v.Z,
                    {
                        index: s,
                        className: a()({
                            [T.selected]: null != P && P === u,
                            [T.siblingSelected]: null != P && P === c,
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [t, l, P],
        ),
        L = i.useCallback(
            () =>
                (0, r.jsxs)(
                    f.Z,
                    {
                        className: T.sectionTitle,
                        children: [
                            S.intl.format(S.t.C79Edh, { count: n }),
                            N && n > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(c.Text, {
                                              className: T.titleDivider,
                                              variant: "eyebrow",
                                              color: "header-secondary",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, r.jsx)(c.Avr, {
                                              textVariant: "text-sm/normal",
                                              text: S.intl.string(S.t.p6t7RC),
                                              onClick: Z,
                                              "aria-label": S.intl.string(S.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [n, Z, N],
        );
    return 0 === t.length
        ? (0, r.jsx)(y.Z, { section: I.pS.SPAM })
        : (0, r.jsx)(s.bG, {
              navigator: j,
              children: (0, r.jsx)(s.SJ, {
                  children: (n) => {
                      var { ref: i, role: l } = n,
                          a = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                  r,
                                  i = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          r,
                                          i = {},
                                          l = Object.keys(e);
                                      for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  for (r = 0; r < l.length; r++)
                                      (n = l[r]),
                                          !(t.indexOf(n) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                              (i[n] = e[n]);
                              }
                              return i;
                          })(n, ["ref", "role"]);
                      return (0, r.jsx)(
                          c.aVo,
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
                                  className: T.list,
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
                                  sectionHeight: I.oi,
                                  rowHeight: I.WN,
                                  renderSection: L,
                                  renderRow: w,
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
