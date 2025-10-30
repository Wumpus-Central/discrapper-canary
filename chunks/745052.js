n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(907862),
    p = n(481060),
    f = n(150063),
    m = n(112724),
    h = n(183126),
    g = n(493773),
    _ = n(209613),
    b = n(325708),
    E = n(320149),
    O = n(82295),
    I = n(252618),
    y = n(605236),
    v = n(243778),
    C = n(984370),
    S = n(797614),
    T = n(359110),
    N = n(6025),
    j = n(897473),
    P = n(108427),
    x = n(210887),
    A = n(313789),
    Z = n(518596),
    w = n(433355),
    L = n(592125),
    R = n(819640),
    D = n(626135),
    M = n(647090),
    k = n(385956),
    U = n(610697),
    G = n(26373),
    B = n(486622),
    H = n(488634),
    V = n(899740),
    F = n(177033),
    z = n(355350),
    Y = n(307947),
    W = n(96479),
    q = n(480874),
    K = n(687683),
    Q = n(981631),
    J = n(921944),
    X = n(526761),
    $ = n(388032),
    ee = n(735516),
    et = n(161655);
function en(e) {
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
function er(e, t) {
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
function ei() {
    let e = i.useRef(null),
        t = (0, V.q)(),
        n = (0, F.Z)(),
        l = (0, G.K)(),
        c = (0, h.N)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)($.intl.string($.t["EDYbS+"]), p.ToastType.FAILURE));
        }, []),
        { rejectAll: d } = (0, B.m)({ onError: u }),
        f = (0, _.Z)("message-requests-list"),
        { channelId: m } = (0, H._)(),
        g = i.useCallback(() => {
            d(n.map((e) => e.channel.id));
        }, [n, d]),
        b = i.useCallback(
            (e) => {
                var t, i;
                let { row: s } = e,
                    o = n[s],
                    c = null == (i = n[s + 1]) || null == (t = i.channel) ? void 0 : t.id,
                    u = o.channel.id;
                return (0, r.jsx)(
                    W.Z,
                    {
                        index: s,
                        className: a()({
                            [ee.selected]: null != m && m === u,
                            [ee.siblingSelected]: null != m && m === c,
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [l, n, m],
        ),
        E = i.useCallback(
            () =>
                (0, r.jsxs)(
                    O.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.intl.formatToPlainString($.t.rA4iWY, { count: t }) : $.intl.string($.t.flPU6g),
                            c && t > 0
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(p.Text, {
                                              className: ee.titleDivider,
                                              variant: "eyebrow",
                                              color: "header-secondary",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, r.jsx)(p.Avr, {
                                              onClick: g,
                                              textVariant: "text-sm/normal",
                                              text: $.intl.string($.t.p6t7RC),
                                              "aria-label": $.intl.string($.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [t, g, c],
        );
    return (n.length !== t && S.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(Y.Z, { section: K.pS.REQUESTS })
        : (0, r.jsx)(s.bG, {
              navigator: f,
              children: (0, r.jsx)(s.SJ, {
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
                          en(
                              {
                                  className: ee.list,
                                  innerRole: l,
                                  innerAriaLabel: $.intl.string($.t.e7GWjQ),
                                  ref: (t) => {
                                      var n;
                                      (e.current = t),
                                          (i.current =
                                              null != (n = null == t ? void 0 : t.getScrollerNode()) ? n : null);
                                  },
                                  paddingTop: 24,
                                  paddingBottom: 24,
                                  sectionHeight: K.oi,
                                  rowHeight: K.WN,
                                  renderSection: E,
                                  renderRow: b,
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
function el(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.e7)([w.ZP], () => w.ZP.getSidebarState(w.uZ)),
        l = (0, c.e7)([L.Z], () => L.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.R7I;
    return (0, r.jsx)(b.Z, {
        sidebarType: b.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(E.Z, {
            channel: l,
            baseChannelId: w.uZ,
        }),
    });
}
let ea = (e) => {
    let t = (0, U.Z)();
    return (i.useEffect(() => {
        (0, y.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || R.Z.hasLayers() || (0, p.$sL)())
        ? e.children
        : (0, r.jsx)(v.ZP, {
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
                          onRequestClose: () => l(J.L.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return i === u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, r.jsx)(
                                          d.J2,
                                          er(en({}, a), {
                                              title: $.intl.string($.t.hRT8tc),
                                              body: $.intl.string($.t.apPgJG),
                                              actions: [
                                                  {
                                                      text: $.intl.string($.t.LNoAQW),
                                                      onClick: () => l(J.L.TAKE_ACTION),
                                                  },
                                              ],
                                          }),
                                      )
                                    : (0, r.jsx)(
                                          d.J2,
                                          er(en({}, a), {
                                              title: $.intl.string($.t.hRT8tc),
                                              body: $.intl.string($.t["8JWods"]),
                                              actions: [
                                                  {
                                                      text: $.intl.string($.t.JN6EOJ),
                                                      onClick: (e) => {
                                                          e.stopPropagation(),
                                                              (0, Z.openUserSettings)(A.n.CONTENT_AND_SOCIAL_PANEL, {
                                                                  section: Q.oAB.CONTENT_AND_SOCIAL,
                                                                  scrollPosition: X.FY.MESSAGE_REQUESTS_V2,
                                                              }),
                                                              l(J.L.TAKE_ACTION);
                                                      },
                                                  },
                                                  {
                                                      text: $.intl.string($.t.LNoAQW),
                                                      onClick: () => l(J.L.USER_DISMISS),
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
    return t === K.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(ei, {});
}
let eo = (0, m.Z)(function (e) {
    let { width: t } = e,
        n = (0, V.q)();
    (0, g.ZP)(() => {
        f.Y(Q.Z5c.MESSAGE_REQUESTS),
            (0, P.e)("message-requests"),
            D.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            S.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.e7)([x.Z], () => x.Z.theme),
        s = (0, z.w)(),
        [u, d] = i.useState(!1),
        m = (0, c.e7)([w.ZP], () => {
            let e = w.ZP.getSidebarState(w.uZ);
            return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        h = null == m ? void 0 : m.channelId,
        _ = null != m,
        b = (0, k.T)(h),
        E = (0, M.J)(h),
        O = i.useRef(null);
    i.useEffect(() => {
        null != h && !b && E && _ && ((0, T.Kh)(h), N.Z.closeChannelSidebar(w.uZ));
    }, [h, E, _, b]);
    let [y, v] = i.useState(K.pS.REQUESTS),
        A = (e) => {
            v(e);
        };
    return (
        (0, I.Tt)({ location: $.intl.string($.t.e7GWjQ) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: _,
                        [et.threadSidebarFloating]: _ && u,
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
                                        (0, r.jsx)(ea, {
                                            targetElementRef: O,
                                            children: (0, r.jsx)(C.Z.Title, {
                                                ref: O,
                                                children: $.intl.string($.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, r.jsx)(C.Z.Divider, {}),
                                        (0, r.jsxs)(p.njP, {
                                            "aria-label": $.intl.string($.t.e7GWjQ),
                                            selectedItem: y,
                                            type: "top-pill",
                                            onItemSelect: A,
                                            children: [
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.REQUESTS,
                                                    className: ee.item,
                                                    children: $.intl.string($.t["7RFcXZ"]),
                                                }),
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.SPAM,
                                                    className: ee.item,
                                                    children:
                                                        0 === s
                                                            ? $.intl.string($.t.ulKXHp)
                                                            : $.intl.formatToPlainString($.t["5jtrlZ"], { count: s }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: et.content,
                            children: (0, r.jsx)(es, { section: y }),
                        }),
                    ],
                }),
                _ &&
                    (0, r.jsx)(el, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            d(t);
                        },
                    }),
            ],
        })
    );
});
