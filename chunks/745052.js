(n.d(t, { Z: () => es }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(755721),
    p = n(481060),
    h = n(150063),
    f = n(230711),
    g = n(112724),
    m = n(183126),
    b = n(493773),
    _ = n(607070),
    O = n(209613),
    E = n(325708),
    y = n(320149),
    v = n(82295),
    I = n(252618),
    C = n(605236),
    S = n(243778),
    N = n(984370),
    T = n(797614),
    P = n(359110),
    j = n(6025),
    A = n(897473),
    Z = n(108427),
    x = n(970731),
    w = n(210887),
    L = n(433355),
    R = n(592125),
    D = n(819640),
    k = n(626135),
    M = n(647090),
    U = n(385956),
    G = n(610697),
    V = n(26373),
    B = n(486622),
    H = n(488634),
    F = n(899740),
    z = n(177033),
    W = n(355350),
    Y = n(307947),
    K = n(96479),
    q = n(480874),
    X = n(687683),
    Q = n(981631),
    J = n(921944),
    $ = n(526761),
    ee = n(388032),
    et = n(596576),
    en = n(100658);
function er() {
    let e = i.useRef(null),
        t = (0, F.q)(),
        n = (0, z.Z)(),
        l = (0, V.K)(),
        c = (0, m.N)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)(ee.intl.string(ee.t.EDYbS0), p.ToastType.FAILURE));
        }, []),
        { rejectAll: h } = (0, B.m)({ onError: u }),
        f = (0, O.Z)('message-requests-list'),
        { channelId: g } = (0, H._)(),
        b = i.useCallback(() => {
            h(n.map((e) => e.channel.id));
        }, [n, h]),
        _ = i.useCallback(
            (e) => {
                var t, i;
                let { row: o } = e,
                    s = n[o],
                    c = null == (i = n[o + 1]) || null == (t = i.channel) ? void 0 : t.id,
                    u = s.channel.id;
                return (0, r.jsx)(
                    K.Z,
                    {
                        index: o,
                        className: a()({
                            [et.selected]: null != g && g === u,
                            [et.siblingSelected]: null != g && g === c
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l
                    },
                    u
                );
            },
            [l, n, g]
        ),
        E = i.useCallback(
            () =>
                (0, r.jsxs)(
                    v.Z,
                    {
                        className: et.sectionTitle,
                        children: [
                            t > 0 ? ee.intl.formatToPlainString(ee.t.rA4iWV, { count: t }) : ee.intl.string(ee.t.flPU6u),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              className: et.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, r.jsx)(d.zx, {
                                              onClick: b,
                                              look: d.iL.LINK,
                                              color: d.Tt.LINK,
                                              size: d.Ph.NONE,
                                              className: et.clearAllButton,
                                              'aria-label': ee.intl.string(ee.t.p6t7RE),
                                              children: ee.intl.string(ee.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, b, c]
        );
    return (n.length !== t && T.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(Y.Z, { section: X.pS.REQUESTS })
        : (0, r.jsx)(o.bG, {
              navigator: f,
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
                                  className: et.list,
                                  innerRole: l,
                                  innerAriaLabel: ee.intl.string(ee.t.e7GWjY),
                                  ref: (t) => {
                                      var n;
                                      ((e.current = t), (i.current = null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null));
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: X.oi,
                                  rowHeight: X.WN,
                                  renderSection: E,
                                  renderRow: _,
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
        i = (0, c.e7)([L.ZP], () => L.ZP.getSidebarState(L.uZ)),
        l = (0, c.e7)([R.Z], () => R.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== A.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.R7I;
    return (0, r.jsx)(E.Z, {
        sidebarType: E.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(y.Z, {
            channel: l,
            baseChannelId: L.uZ
        })
    });
}
let el = function (e) {
        let { markAsDismissed: t } = e;
        return (0, r.jsx)(x.ZP, {
            header: ee.intl.string(ee.t.hRT8tb),
            content: ee.intl.string(ee.t.apPgJC),
            buttonCTA: ee.intl.string(ee.t.LNoAQU),
            className: et.messageRequestCoachmark,
            onClick: () => t(J.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: x.DF.TOP_CENTER,
            headerClassName: et.__invalid_header
        });
    },
    ea = (e) => {
        let t = (0, G.Z)(),
            n = () => D.Z.hasLayers() || (0, p.$sL)(),
            l = (0, c.e7)([_.Z], () => _.Z.useReducedMotion);
        return (
            i.useEffect(() => {
                (0, C.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, r.jsx)(S.ZP, {
                contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (i) => {
                    let { visibleContent: a, markAsDismissed: o } = i;
                    return a === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                        ? (0, r.jsx)(p.yRy, {
                              targetElementRef: e.targetElementRef,
                              renderPopout: () =>
                                  t
                                      ? (0, r.jsx)(el, { markAsDismissed: o })
                                      : (0, r.jsx)(x.ZP, {
                                            header: ee.intl.string(ee.t.hRT8tb),
                                            content: ee.intl.string(ee.t['8JWodn']),
                                            buttonCTA: ee.intl.string(ee.t.JN6EOD),
                                            secondaryButtonCTA: ee.intl.string(ee.t.LNoAQU),
                                            className: et.messageRequestCoachmark,
                                            onClick: (e) => {
                                                (e.stopPropagation(), f.Z.open(Q.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: $.FY.MESSAGE_REQUESTS_V2 }));
                                            },
                                            markAsDismissed: o,
                                            caretPosition: x.DF.TOP_CENTER,
                                            headerClassName: et.__invalid_header
                                        }),
                              position: 'bottom',
                              align: 'center',
                              animation: l ? p.yRy.Animation.NONE : p.yRy.Animation.TRANSLATE,
                              shouldShow: !n(),
                              spacing: 16,
                              children: () => e.children
                          })
                        : e.children;
                }
            })
        );
    };
function eo(e) {
    let { section: t } = e;
    return t === X.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(er, {});
}
let es = (0, g.Z)(function (e) {
    let { width: t } = e,
        n = (0, F.q)();
    (0, b.ZP)(() => {
        (h.Y(Q.Z5c.MESSAGE_REQUESTS), (0, Z.e)('message-requests'), k.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), T.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW }));
    });
    let l = (0, c.e7)([w.Z], () => w.Z.theme),
        o = (0, W.w)(),
        [u, d] = i.useState(!1),
        f = (0, c.e7)([L.ZP], () => {
            let e = L.ZP.getSidebarState(L.uZ);
            return null != e && e.type === A.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == f ? void 0 : f.channelId,
        m = null != f,
        _ = (0, U.T)(g),
        O = (0, M.J)(g),
        E = i.useRef(null);
    i.useEffect(() => {
        null != g && !_ && O && m && ((0, P.Kh)(g), j.Z.closeChannelSidebar(L.uZ));
    }, [g, O, m, _]);
    let [y, v] = i.useState(X.pS.REQUESTS),
        C = (e) => {
            v(e);
        };
    return (
        (0, I.Tt)({ location: ee.intl.string(ee.t.e7GWjY) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(en.chat, et.container, {
                        [en.threadSidebarOpen]: m,
                        [en.threadSidebarFloating]: m && u
                    }),
                    children: [
                        (0, r.jsx)(p.f6W, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsxs)(N.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, r.jsx)(N.Z.Icon, {
                                            icon: p._XJ,
                                            'aria-hidden': !0
                                        }),
                                        (0, r.jsx)(ea, {
                                            targetElementRef: E,
                                            children: (0, r.jsx)(N.Z.Title, {
                                                ref: E,
                                                children: ee.intl.string(ee.t.e7GWjY)
                                            })
                                        }),
                                        (0, r.jsx)(N.Z.Divider, {}),
                                        (0, r.jsxs)(p.njP, {
                                            'aria-label': ee.intl.string(ee.t.e7GWjY),
                                            selectedItem: y,
                                            type: 'top-pill',
                                            onItemSelect: C,
                                            children: [
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: X.pS.REQUESTS,
                                                    className: et.item,
                                                    children: ee.intl.string(ee.t['7RFcXV'])
                                                }),
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: X.pS.SPAM,
                                                    className: et.item,
                                                    children: 0 === o ? ee.intl.string(ee.t.ulKXHh) : ee.intl.formatToPlainString(ee.t['5jtrlZ'], { count: o })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, r.jsx)('div', {
                            className: en.content,
                            children: (0, r.jsx)(eo, { section: y })
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
