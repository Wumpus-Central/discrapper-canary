n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(755721),
    u = n(481060),
    d = n(183126),
    p = n(493773),
    h = n(209613),
    f = n(82295),
    g = n(797614),
    m = n(626135),
    b = n(26373),
    _ = n(486622),
    O = n(488634),
    E = n(110287),
    y = n(355350),
    v = n(307947),
    I = n(125855),
    C = n(687683),
    S = n(981631),
    N = n(388032),
    T = n(39276);
function P() {
    let e = i.useRef(null),
        t = (0, E.Z)(),
        n = (0, y.w)(),
        l = (0, b.V)(),
        P = (0, d.N)(),
        j = (0, h.Z)('message-requests-spam-list'),
        { channelId: A } = (0, O._)(),
        Z = i.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(N.intl.string(N.t.EDYbS0), u.ToastType.FAILURE));
        }, []),
        { rejectAll: x } = (0, _.m)({ onError: Z }),
        w = i.useCallback(() => {
            x(t.map((e) => e.channel.id));
        }, [t, x]);
    (0, p.ZP)(() => {
        (m.default.track(S.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), g.Z.increment({ name: s.V.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let L = i.useCallback(
            (e) => {
                var n, i;
                let { row: o } = e,
                    s = t[o],
                    c = null == (i = t[o + 1]) || null == (n = i.channel) ? void 0 : n.id,
                    u = s.channel.id;
                return (0, r.jsx)(
                    I.Z,
                    {
                        index: o,
                        className: a()({
                            [T.selected]: null != A && A === u,
                            [T.siblingSelected]: null != A && A === c
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l
                    },
                    u
                );
            },
            [t, l, A]
        ),
        R = i.useCallback(
            () =>
                (0, r.jsxs)(
                    f.Z,
                    {
                        className: T.sectionTitle,
                        children: [
                            N.intl.format(N.t.C79Edn, { count: n }),
                            P && n > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(u.Text, {
                                              className: T.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, r.jsx)(c.zx, {
                                              onClick: w,
                                              look: c.iL.LINK,
                                              color: c.Tt.LINK,
                                              size: c.Ph.SMALL,
                                              className: T.clearAllButton,
                                              'aria-label': N.intl.string(N.t.p6t7RE),
                                              children: N.intl.string(N.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, w, P]
        );
    return 0 === t.length
        ? (0, r.jsx)(v.Z, { section: C.pS.SPAM })
        : (0, r.jsx)(o.bG, {
              navigator: j,
              children: (0, r.jsx)(o.SJ, {
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
                                      for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                              }
                              return i;
                          })(n, ['ref', 'role']);
                      return (0, r.jsx)(
                          u.aVo,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          ((r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r));
                                      }));
                              }
                              return e;
                          })(
                              {
                                  className: T.list,
                                  innerRole: l,
                                  innerAriaLabel: N.intl.string(N.t.e7GWjY),
                                  ref: (t) => {
                                      var n;
                                      ((e.current = t), (i.current = null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null));
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: C.oi,
                                  rowHeight: C.WN,
                                  renderSection: R,
                                  renderRow: L,
                                  sections: [t.length],
                                  chunkSize: 30,
                                  fade: !0
                              },
                              a
                          ),
                          'message-requests-spam-list'
                      );
                  }
              })
          });
}
