(n.d(t, { Z: () => eo }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(907862),
    p = n(481060),
    h = n(150063),
    f = n(230711),
    g = n(112724),
    m = n(183126),
    b = n(493773),
    _ = n(209613),
    O = n(325708),
    E = n(320149),
    y = n(82295),
    v = n(252618),
    I = n(605236),
    C = n(243778),
    S = n(984370),
    N = n(797614),
    T = n(359110),
    P = n(6025),
    j = n(897473),
    A = n(108427),
    Z = n(210887),
    x = n(433355),
    w = n(592125),
    L = n(819640),
    R = n(626135),
    D = n(647090),
    k = n(385956),
    M = n(610697),
    U = n(26373),
    G = n(486622),
    V = n(488634),
    B = n(899740),
    H = n(177033),
    F = n(355350),
    z = n(307947),
    W = n(96479),
    Y = n(480874),
    K = n(687683),
    q = n(981631),
    X = n(921944),
    Q = n(526761),
    J = n(388032),
    $ = n(596576),
    ee = n(100658);
function et(e) {
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
}
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function er() {
    let e = i.useRef(null),
        t = (0, B.q)(),
        n = (0, H.Z)(),
        l = (0, U.K)(),
        c = (0, m.N)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)(J.intl.string(J.t.EDYbS0), p.ToastType.FAILURE));
        }, []),
        { rejectAll: d } = (0, G.m)({ onError: u }),
        h = (0, _.Z)('message-requests-list'),
        { channelId: f } = (0, V._)(),
        g = i.useCallback(() => {
            d(n.map((e) => e.channel.id));
        }, [n, d]),
        b = i.useCallback(
            (e) => {
                var t, i;
                let { row: o } = e,
                    s = n[o],
                    c = null == (i = n[o + 1]) || null == (t = i.channel) ? void 0 : t.id,
                    u = s.channel.id;
                return (0, r.jsx)(
                    W.Z,
                    {
                        index: o,
                        className: a()({
                            [$.selected]: null != f && f === u,
                            [$.siblingSelected]: null != f && f === c
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l
                    },
                    u
                );
            },
            [l, n, f]
        ),
        O = i.useCallback(
            () =>
                (0, r.jsxs)(
                    y.Z,
                    {
                        className: $.sectionTitle,
                        children: [
                            t > 0 ? J.intl.formatToPlainString(J.t.rA4iWV, { count: t }) : J.intl.string(J.t.flPU6u),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              className: $.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, r.jsx)(p.Avr, {
                                              onClick: g,
                                              textVariant: 'text-sm/normal',
                                              text: J.intl.string(J.t.p6t7RE),
                                              'aria-label': J.intl.string(J.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, g, c]
        );
    return (n.length !== t && N.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(z.Z, { section: K.pS.REQUESTS })
        : (0, r.jsx)(o.bG, {
              navigator: h,
              children: (0, r.jsx)(o.SJ, {
                  children: (t) => {
                      var { ref: i, role: l } = t,
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
                          })(t, ['ref', 'role']);
                      return (0, r.jsx)(
                          p.aVo,
                          et(
                              {
                                  className: $.list,
                                  innerRole: l,
                                  innerAriaLabel: J.intl.string(J.t.e7GWjY),
                                  ref: (t) => {
                                      var n;
                                      ((e.current = t), (i.current = null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null));
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: K.oi,
                                  rowHeight: K.WN,
                                  renderSection: O,
                                  renderRow: b,
                                  sections: [n.length],
                                  chunkSize: 30,
                                  fade: !0
                              },
                              a
                          ),
                          'message-requests-list'
                      );
                  }
              })
          });
}
function ei(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.e7)([x.ZP], () => x.ZP.getSidebarState(x.uZ)),
        l = (0, c.e7)([w.Z], () => w.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - q.R7I;
    return (0, r.jsx)(O.Z, {
        sidebarType: O.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(E.Z, {
            channel: l,
            baseChannelId: x.uZ
        })
    });
}
let el = (e) => {
    let t = (0, M.Z)();
    return (i.useEffect(() => {
        (0, I.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || L.Z.hasLayers() || (0, p.$sL)())
        ? e.children
        : (0, r.jsx)(C.ZP, {
              contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: i, markAsDismissed: l } = n,
                      a = {
                          position: 'bottom',
                          caretConfig: {
                              position: 'top',
                              align: 'center'
                          },
                          shouldShow: !0,
                          onRequestClose: () => l(X.L.USER_DISMISS),
                          targetElementRef: e.targetElementRef
                      };
                  return i === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, r.jsx)(
                                          d.J2,
                                          en(et({}, a), {
                                              title: J.intl.string(J.t.hRT8tb),
                                              body: J.intl.string(J.t.apPgJC),
                                              actions: [
                                                  {
                                                      text: J.intl.string(J.t.LNoAQU),
                                                      onClick: () => l(X.L.TAKE_ACTION)
                                                  }
                                              ]
                                          })
                                      )
                                    : (0, r.jsx)(
                                          d.J2,
                                          en(et({}, a), {
                                              title: J.intl.string(J.t.hRT8tb),
                                              body: J.intl.string(J.t['8JWodn']),
                                              actions: [
                                                  {
                                                      text: J.intl.string(J.t.JN6EOD),
                                                      onClick: (e) => {
                                                          (e.stopPropagation(), f.Z.open(q.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: Q.FY.MESSAGE_REQUESTS_V2 }), l(X.L.TAKE_ACTION));
                                                      }
                                                  },
                                                  {
                                                      text: J.intl.string(J.t.LNoAQU),
                                                      onClick: () => l(X.L.USER_DISMISS),
                                                      variant: 'secondary'
                                                  }
                                              ]
                                          })
                                      )
                            ]
                        })
                      : e.children;
              }
          });
};
function ea(e) {
    let { section: t } = e;
    return t === K.pS.SPAM ? (0, r.jsx)(Y.Z, {}) : (0, r.jsx)(er, {});
}
let eo = (0, g.Z)(function (e) {
    let { width: t } = e,
        n = (0, B.q)();
    (0, b.ZP)(() => {
        (h.Y(q.Z5c.MESSAGE_REQUESTS), (0, A.e)('message-requests'), R.default.track(q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), N.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW }));
    });
    let l = (0, c.e7)([Z.Z], () => Z.Z.theme),
        o = (0, F.w)(),
        [u, d] = i.useState(!1),
        f = (0, c.e7)([x.ZP], () => {
            let e = x.ZP.getSidebarState(x.uZ);
            return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == f ? void 0 : f.channelId,
        m = null != f,
        _ = (0, k.T)(g),
        O = (0, D.J)(g),
        E = i.useRef(null);
    i.useEffect(() => {
        null != g && !_ && O && m && ((0, T.Kh)(g), P.Z.closeChannelSidebar(x.uZ));
    }, [g, O, m, _]);
    let [y, I] = i.useState(K.pS.REQUESTS),
        C = (e) => {
            I(e);
        };
    return (
        (0, v.Tt)({ location: J.intl.string(J.t.e7GWjY) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(ee.chat, $.container, {
                        [ee.threadSidebarOpen]: m,
                        [ee.threadSidebarFloating]: m && u
                    }),
                    children: [
                        (0, r.jsx)(p.f6W, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsxs)(S.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, r.jsx)(S.Z.Icon, {
                                            icon: p._XJ,
                                            'aria-hidden': !0
                                        }),
                                        (0, r.jsx)(el, {
                                            targetElementRef: E,
                                            children: (0, r.jsx)(S.Z.Title, {
                                                ref: E,
                                                children: J.intl.string(J.t.e7GWjY)
                                            })
                                        }),
                                        (0, r.jsx)(S.Z.Divider, {}),
                                        (0, r.jsxs)(p.njP, {
                                            'aria-label': J.intl.string(J.t.e7GWjY),
                                            selectedItem: y,
                                            type: 'top-pill',
                                            onItemSelect: C,
                                            children: [
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.REQUESTS,
                                                    className: $.item,
                                                    children: J.intl.string(J.t['7RFcXV'])
                                                }),
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.SPAM,
                                                    className: $.item,
                                                    children: 0 === o ? J.intl.string(J.t.ulKXHh) : J.intl.formatToPlainString(J.t['5jtrlZ'], { count: o })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, r.jsx)('div', {
                            className: ee.content,
                            children: (0, r.jsx)(ea, { section: y })
                        })
                    ]
                }),
                m &&
                    (0, r.jsx)(ei, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            d(t);
                        }
                    })
            ]
        })
    );
});
