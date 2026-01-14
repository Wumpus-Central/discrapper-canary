n.d(t, { Z: () => ec }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(907862),
    p = n(481060),
    f = n(150063),
    g = n(112724),
    h = n(183126),
    m = n(493773),
    b = n(209613),
    _ = n(325708),
    E = n(320149),
    O = n(82295),
    v = n(252618),
    I = n(605236),
    y = n(243778),
    C = n(984370),
    S = n(797614),
    T = n(359110),
    N = n(6025),
    j = n(897473),
    x = n(108427),
    P = n(210887),
    A = n(313789),
    Z = n(526665),
    w = n(518596),
    L = n(433355),
    R = n(592125),
    D = n(819640),
    M = n(626135),
    k = n(647090),
    U = n(385956),
    G = n(610697),
    H = n(26373),
    B = n(486622),
    V = n(488634),
    F = n(899740),
    z = n(177033),
    Y = n(355350),
    W = n(307947),
    K = n(96479),
    q = n(480874),
    Q = n(687683),
    J = n(981631),
    X = n(921944),
    $ = n(526761),
    ee = n(388032),
    et = n(439700),
    en = n(978966);
function er(e) {
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
}
function ei(e, t) {
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
function el() {
    let e = i.useRef(null),
        t = (0, F.q)(),
        n = (0, z.Z)(),
        l = (0, H.K)(),
        c = (0, h.N)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)(ee.intl.string(ee.t["EDYbS+"]), p.ToastType.FAILURE));
        }, []),
        { rejectAll: d } = (0, B.m)({ onError: u }),
        f = (0, b.Z)("message-requests-list"),
        { channelId: g } = (0, V._)(),
        m = i.useCallback(() => {
            d(n.map((e) => e.channel.id));
        }, [n, d]),
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
                            [et.siblingSelected]: null != g && g === c,
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [l, n, g],
        ),
        E = i.useCallback(
            () =>
                (0, r.jsxs)(
                    O.Z,
                    {
                        className: et.sectionTitle,
                        children: [
                            t > 0
                                ? ee.intl.formatToPlainString(ee.t.rA4iWY, { count: t })
                                : ee.intl.string(ee.t.flPU6g),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              className: et.titleDivider,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, r.jsx)(p.Avr, {
                                              onClick: m,
                                              textVariant: "text-sm/normal",
                                              text: ee.intl.string(ee.t.p6t7RC),
                                              "aria-label": ee.intl.string(ee.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [t, m, c],
        );
    return (n.length !== t && S.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(W.Z, { section: Q.pS.REQUESTS })
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
                          })(t, ["ref", "role"]);
                      return (0, r.jsx)(
                          p.aVo,
                          er(
                              {
                                  className: et.list,
                                  innerRole: l,
                                  innerAriaLabel: ee.intl.string(ee.t.e7GWjQ),
                                  ref: (t) => {
                                      var n;
                                      (e.current = t),
                                          (i.current =
                                              null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null);
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: Q.oi,
                                  rowHeight: Q.WN,
                                  renderSection: E,
                                  renderRow: _,
                                  sections: [n.length],
                                  chunkSize: 30,
                                  fade: !0,
                              },
                              a,
                          ),
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function ea(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.e7)([L.ZP], () => L.ZP.getSidebarState(L.uZ)),
        l = (0, c.e7)([R.Z], () => R.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - J.R7I;
    return (0, r.jsx)(_.Z, {
        sidebarType: _.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(E.Z, {
            channel: l,
            baseChannelId: L.uZ,
        }),
    });
}
let eo = (e) => {
    let t = (0, G.Z)();
    return (i.useEffect(() => {
        (0, I.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || D.Z.hasLayers() || (0, p.$sL)())
        ? e.children
        : (0, r.jsx)(y.ZP, {
              contentTypes: [u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: i, markAsDismissed: l } = n,
                      a = {
                          position: "bottom",
                          caretConfig: {
                              position: "top",
                              align: "center",
                          },
                          shouldShow: !0,
                          onRequestClose: () => l(X.L.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return i === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, r.jsx)(
                                          d.J2,
                                          ei(er({}, a), {
                                              title: ee.intl.string(ee.t.hRT8tc),
                                              body: ee.intl.string(ee.t.apPgJG),
                                              actions: [
                                                  {
                                                      text: ee.intl.string(ee.t.LNoAQW),
                                                      onClick: () => l(X.L.TAKE_ACTION),
                                                  },
                                              ],
                                          }),
                                      )
                                    : (0, r.jsx)(
                                          d.J2,
                                          ei(er({}, a), {
                                              title: ee.intl.string(ee.t.hRT8tc),
                                              body: ee.intl.string(ee.t["8JWods"]),
                                              actions: [
                                                  {
                                                      text: ee.intl.string(ee.t.JN6EOJ),
                                                      onClick: (e) => {
                                                          e.stopPropagation();
                                                          let t = (0, Z.Gl)("MessageRequestCoachmark");
                                                          (0, w.openUserSettings)(
                                                              t
                                                                  ? A.n
                                                                        .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING
                                                                  : A.n.CONTENT_AND_SOCIAL_PANEL,
                                                              {
                                                                  section: J.oAB.CONTENT_AND_SOCIAL,
                                                                  scrollPosition: t ? void 0 : $.FY.MESSAGE_REQUESTS_V2,
                                                              },
                                                          ),
                                                              l(X.L.TAKE_ACTION);
                                                      },
                                                  },
                                                  {
                                                      text: ee.intl.string(ee.t.LNoAQW),
                                                      onClick: () => l(X.L.USER_DISMISS),
                                                      variant: "secondary",
                                                  },
                                              ],
                                          }),
                                      ),
                            ],
                        })
                      : e.children;
              },
          });
};
function es(e) {
    let { section: t } = e;
    return t === Q.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(el, {});
}
let ec = (0, g.Z)(function (e) {
    let { width: t } = e,
        n = (0, F.q)();
    (0, m.ZP)(() => {
        f.Y(J.Z5c.MESSAGE_REQUESTS),
            (0, x.e)("message-requests"),
            M.default.track(J.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            S.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.e7)([P.Z], () => P.Z.theme),
        o = (0, Y.w)(),
        [u, d] = i.useState(!1),
        g = (0, c.e7)([L.ZP], () => {
            let e = L.ZP.getSidebarState(L.uZ);
            return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        h = null == g ? void 0 : g.channelId,
        b = null != g,
        _ = (0, U.T)(h),
        E = (0, k.J)(h),
        O = i.useRef(null);
    i.useEffect(() => {
        null != h && !_ && E && b && ((0, T.Kh)(h), N.Z.closeChannelSidebar(L.uZ));
    }, [h, E, b, _]);
    let [I, y] = i.useState(Q.pS.REQUESTS),
        A = (e) => {
            y(e);
        };
    return (
        (0, v.Tt)({ location: ee.intl.string(ee.t.e7GWjQ) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(en.chat, et.container, {
                        [en.threadSidebarOpen]: b,
                        [en.threadSidebarFloating]: b && u,
                    }),
                    children: [
                        (0, r.jsx)(p.f6W, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsxs)(C.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, r.jsx)(C.Z.Icon, {
                                            icon: p._XJ,
                                            "aria-hidden": !0,
                                        }),
                                        (0, r.jsx)(eo, {
                                            targetElementRef: O,
                                            children: (0, r.jsx)(C.Z.Title, {
                                                ref: O,
                                                children: ee.intl.string(ee.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, r.jsx)(C.Z.Divider, {}),
                                        (0, r.jsxs)(p.njP, {
                                            "aria-label": ee.intl.string(ee.t.e7GWjQ),
                                            selectedItem: I,
                                            type: "top-pill",
                                            onItemSelect: A,
                                            children: [
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: Q.pS.REQUESTS,
                                                    className: et.item,
                                                    children: ee.intl.string(ee.t["7RFcXZ"]),
                                                }),
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: Q.pS.SPAM,
                                                    className: et.item,
                                                    children:
                                                        0 === o
                                                            ? ee.intl.string(ee.t.ulKXHp)
                                                            : ee.intl.formatToPlainString(ee.t["5jtrlZ"], { count: o }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: en.content,
                            children: (0, r.jsx)(es, { section: I }),
                        }),
                    ],
                }),
                b &&
                    (0, r.jsx)(ea, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            d(t);
                        },
                    }),
            ],
        })
    );
});
