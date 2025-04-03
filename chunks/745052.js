n.d(t, { Z: () => eo }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(150063),
    h = n(230711),
    f = n(112724),
    g = n(183126),
    m = n(493773),
    b = n(607070),
    _ = n(209613),
    E = n(325708),
    O = n(320149),
    N = n(82295),
    y = n(252618),
    I = n(605236),
    v = n(243778),
    C = n(984370),
    S = n(797614),
    T = n(359110),
    P = n(6025),
    j = n(897473),
    A = n(108427),
    Z = n(970731),
    x = n(210887),
    L = n(433355),
    w = n(592125),
    R = n(819640),
    D = n(626135),
    k = n(647090),
    M = n(385956),
    U = n(610697),
    G = n(26373),
    W = n(486622),
    V = n(922409),
    B = n(899740),
    H = n(177033),
    F = n(355350),
    z = n(307947),
    Y = n(96479),
    K = n(480874),
    q = n(687683),
    Q = n(981631),
    X = n(921944),
    J = n(526761),
    $ = n(388032),
    ee = n(596576),
    et = n(100658);
function en() {
    let e = i.useRef(null),
        t = (0, B.q)(),
        n = (0, H.Z)(),
        l = (0, G.K)(),
        c = (0, g.N)(),
        u = i.useCallback(() => {
            (0, d.showToast)((0, d.createToast)($.NW.string($.t.EDYbS0), d.ToastType.FAILURE));
        }, []),
        { rejectAll: p } = (0, W.m)({ onError: u }),
        h = (0, _.Z)('message-requests-list'),
        { channelId: f } = (0, V._)(),
        m = i.useCallback(() => {
            p(n.map((e) => e.channel.id));
        }, [n, p]),
        b = i.useCallback(
            (e) => {
                var t, i;
                let { row: o } = e,
                    s = n[o],
                    c = null == (i = n[o + 1]) || null == (t = i.channel) ? void 0 : t.id,
                    u = s.channel.id;
                return (0, r.jsx)(
                    Y.Z,
                    {
                        index: o,
                        className: a()({
                            [ee.selected]: null != f && f === u,
                            [ee.siblingSelected]: null != f && f === c
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
        E = i.useCallback(
            () =>
                (0, r.jsxs)(
                    N.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.NW.formatToPlainString($.t.rA4iWV, { count: t }) : $.NW.string($.t.flPU6u),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(d.Text, {
                                              className: ee.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, r.jsx)(d.zxk, {
                                              onClick: m,
                                              look: d.iLD.LINK,
                                              color: d.Ttl.LINK,
                                              size: d.PhG.NONE,
                                              className: ee.clearAllButton,
                                              'aria-label': $.NW.string($.t.p6t7RE),
                                              children: $.NW.string($.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, m, c]
        );
    return (n.length !== t && S.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(z.Z, { section: q.pS.REQUESTS })
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
                                      for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                      return i;
                                  })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                              }
                              return i;
                          })(t, ['ref', 'role']);
                      return (0, r.jsx)(
                          d.aVo,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  className: ee.list,
                                  innerRole: l,
                                  innerAriaLabel: $.NW.string($.t.e7GWjY),
                                  ref: (t) => {
                                      var n;
                                      (e.current = t), (i.current = null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null);
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: q.oi,
                                  rowHeight: q.WN,
                                  renderSection: E,
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
function er(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.e7)([L.ZP], () => L.ZP.getSidebarState(L.uZ)),
        l = (0, c.e7)([w.Z], () => w.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.R7I;
    return (0, r.jsx)(E.Z, {
        sidebarType: E.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(O.Z, {
            channel: l,
            baseChannelId: L.uZ
        })
    });
}
let ei = function (e) {
        let { markAsDismissed: t } = e;
        return (0, r.jsx)(Z.ZP, {
            header: $.NW.string($.t.hRT8tb),
            content: $.NW.string($.t.apPgJC),
            buttonCTA: $.NW.string($.t.LNoAQU),
            className: ee.messageRequestCoachmark,
            onClick: () => t(X.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: Z.DF.TOP_CENTER,
            headerClassName: ee.__invalid_header
        });
    },
    el = (e) => {
        let t = (0, U.Z)(),
            n = () => R.Z.hasLayers() || (0, d.$sL)(),
            l = (0, c.e7)([b.Z], () => b.Z.useReducedMotion);
        return (
            i.useEffect(() => {
                (0, I.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, r.jsx)(v.ZP, {
                contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (i) => {
                    let { visibleContent: a, markAsDismissed: o } = i;
                    return a === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                        ? (0, r.jsx)(d.yRy, {
                              renderPopout: () =>
                                  t
                                      ? (0, r.jsx)(ei, { markAsDismissed: o })
                                      : (0, r.jsx)(Z.ZP, {
                                            header: $.NW.string($.t.hRT8tb),
                                            content: $.NW.string($.t['8JWodn']),
                                            buttonCTA: $.NW.string($.t.JN6EOD),
                                            secondaryButtonCTA: $.NW.string($.t.LNoAQU),
                                            className: ee.messageRequestCoachmark,
                                            onClick: (e) => {
                                                e.stopPropagation(), h.Z.open(Q.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: J.FY.MESSAGE_REQUESTS_V2 });
                                            },
                                            markAsDismissed: o,
                                            caretPosition: Z.DF.TOP_CENTER,
                                            headerClassName: ee.__invalid_header
                                        }),
                              position: 'bottom',
                              align: 'center',
                              animation: l ? d.yRy.Animation.NONE : d.yRy.Animation.TRANSLATE,
                              shouldShow: !n(),
                              spacing: 16,
                              children: () => e.children
                          })
                        : e.children;
                }
            })
        );
    };
function ea(e) {
    let { section: t } = e;
    return t === q.pS.SPAM ? (0, r.jsx)(K.Z, {}) : (0, r.jsx)(en, {});
}
let eo = (0, f.Z)(function (e) {
    let { width: t } = e,
        n = (0, B.q)();
    (0, m.ZP)(() => {
        p.Y(Q.Z5c.MESSAGE_REQUESTS), (0, A.e)('message-requests'), D.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), S.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.e7)([x.Z], () => x.Z.theme),
        o = (0, F.w)(),
        [u, h] = i.useState(!1),
        f = (0, c.e7)([L.ZP], () => {
            let e = L.ZP.getSidebarState(L.uZ);
            return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == f ? void 0 : f.channelId,
        b = null != f,
        _ = (0, M.T)(g),
        E = (0, k.J)(g);
    i.useEffect(() => {
        null != g && !_ && E && b && ((0, T.Kh)(g), P.Z.closeChannelSidebar(L.uZ));
    }, [g, E, b, _]);
    let [O, N] = i.useState(q.pS.REQUESTS),
        I = (e) => {
            N(e);
        };
    return (
        (0, y.Tt)({ location: $.NW.string($.t.e7GWjY) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: b,
                        [et.threadSidebarFloating]: b && u
                    }),
                    children: [
                        (0, r.jsx)(d.f6W, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsxs)(C.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, r.jsx)(C.Z.Icon, {
                                            icon: d._XJ,
                                            'aria-hidden': !0
                                        }),
                                        (0, r.jsx)(el, { children: (0, r.jsx)(C.Z.Title, { children: $.NW.string($.t.e7GWjY) }) }),
                                        (0, r.jsx)(C.Z.Divider, {}),
                                        (0, r.jsxs)(d.njP, {
                                            'aria-label': $.NW.string($.t.e7GWjY),
                                            selectedItem: O,
                                            type: 'top-pill',
                                            onItemSelect: I,
                                            children: [
                                                (0, r.jsx)(d.njP.Item, {
                                                    id: q.pS.REQUESTS,
                                                    className: ee.item,
                                                    children: $.NW.string($.t['7RFcXV'])
                                                }),
                                                (0, r.jsx)(d.njP.Item, {
                                                    id: q.pS.SPAM,
                                                    className: ee.item,
                                                    children: 0 === o ? $.NW.string($.t.ulKXHh) : $.NW.formatToPlainString($.t['5jtrlZ'], { count: o })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, r.jsx)('div', {
                            className: et.content,
                            children: (0, r.jsx)(ea, { section: O })
                        })
                    ]
                }),
                b &&
                    (0, r.jsx)(er, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            h(t);
                        }
                    })
            ]
        })
    );
});
