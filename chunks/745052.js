n.d(t, { Z: () => es }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(286379),
    c = n(442837),
    u = n(704215),
    d = n(907862),
    p = n(481060),
    f = n(150063),
    h = n(112724),
    g = n(183126),
    m = n(493773),
    b = n(209613),
    _ = n(325708),
    O = n(320149),
    E = n(82295),
    y = n(252618),
    v = n(605236),
    I = n(243778),
    S = n(984370),
    C = n(797614),
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
    k = n(647090),
    M = n(385956),
    U = n(610697),
    G = n(26373),
    B = n(486622),
    V = n(488634),
    H = n(899740),
    F = n(177033),
    z = n(355350),
    W = n(307947),
    Y = n(96479),
    q = n(480874),
    K = n(687683),
    Q = n(981631),
    X = n(921944),
    J = n(526761),
    $ = n(388032),
    ee = n(803882),
    et = n(97009);
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
        t = (0, H.q)(),
        n = (0, F.Z)(),
        l = (0, G.K)(),
        c = (0, g.N)(),
        u = i.useCallback(() => {
            (0, p.showToast)((0, p.createToast)($.intl.string($.t.EDYbS0), p.ToastType.FAILURE));
        }, []),
        { rejectAll: d } = (0, B.m)({ onError: u }),
        f = (0, b.Z)("message-requests-list"),
        { channelId: h } = (0, V._)(),
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
                    Y.Z,
                    {
                        index: o,
                        className: a()({
                            [ee.selected]: null != h && h === u,
                            [ee.siblingSelected]: null != h && h === c,
                        }),
                        channel: s.channel,
                        user: s.user,
                        hasSingleMessageRequest: l,
                    },
                    u,
                );
            },
            [l, n, h],
        ),
        O = i.useCallback(
            () =>
                (0, r.jsxs)(
                    E.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.intl.formatToPlainString($.t.rA4iWV, { count: t }) : $.intl.string($.t.flPU6u),
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
                                              onClick: m,
                                              textVariant: "text-sm/normal",
                                              text: $.intl.string($.t.p6t7RE),
                                              "aria-label": $.intl.string($.t.p6t7RE),
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
    return (n.length !== t && C.Z.increment({ name: s.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, r.jsx)(W.Z, { section: K.pS.REQUESTS })
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
                          en(
                              {
                                  className: ee.list,
                                  innerRole: l,
                                  innerAriaLabel: $.intl.string($.t.e7GWjY),
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
                                  renderSection: O,
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
function el(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        i = (0, c.e7)([w.ZP], () => w.ZP.getSidebarState(w.uZ)),
        l = (0, c.e7)([L.Z], () => L.Z.getChannel(null == i ? void 0 : i.channelId));
    if (null == i || i.type !== j.tI.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let a = t - Q.R7I;
    return (0, r.jsx)(_.Z, {
        sidebarType: _.y.MessageRequestSidebar,
        maxWidth: a,
        onWidthChange: n,
        children: (0, r.jsx)(O.Z, {
            channel: l,
            baseChannelId: w.uZ,
        }),
    });
}
let ea = (e) => {
    let t = (0, U.Z)();
    return (i.useEffect(() => {
        (0, v.kk)(u.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || R.Z.hasLayers() || (0, p.$sL)())
        ? e.children
        : (0, r.jsx)(I.ZP, {
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
                                          er(en({}, a), {
                                              title: $.intl.string($.t.hRT8tb),
                                              body: $.intl.string($.t.apPgJC),
                                              actions: [
                                                  {
                                                      text: $.intl.string($.t.LNoAQU),
                                                      onClick: () => l(X.L.TAKE_ACTION),
                                                  },
                                              ],
                                          }),
                                      )
                                    : (0, r.jsx)(
                                          d.J2,
                                          er(en({}, a), {
                                              title: $.intl.string($.t.hRT8tb),
                                              body: $.intl.string($.t["8JWodn"]),
                                              actions: [
                                                  {
                                                      text: $.intl.string($.t.JN6EOD),
                                                      onClick: (e) => {
                                                          e.stopPropagation(),
                                                              (0, Z.openUserSettings)(A.n.CONTENT_AND_SOCIAL_PANEL, {
                                                                  section: Q.oAB.CONTENT_AND_SOCIAL,
                                                                  scrollPosition: J.FY.MESSAGE_REQUESTS_V2,
                                                              }),
                                                              l(X.L.TAKE_ACTION);
                                                      },
                                                  },
                                                  {
                                                      text: $.intl.string($.t.LNoAQU),
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
function eo(e) {
    let { section: t } = e;
    return t === K.pS.SPAM ? (0, r.jsx)(q.Z, {}) : (0, r.jsx)(ei, {});
}
let es = (0, h.Z)(function (e) {
    let { width: t } = e,
        n = (0, H.q)();
    (0, m.ZP)(() => {
        f.Y(Q.Z5c.MESSAGE_REQUESTS),
            (0, P.e)("message-requests"),
            D.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            C.Z.increment({ name: s.V.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, c.e7)([x.Z], () => x.Z.theme),
        o = (0, z.w)(),
        [u, d] = i.useState(!1),
        h = (0, c.e7)([w.ZP], () => {
            let e = w.ZP.getSidebarState(w.uZ);
            return null != e && e.type === j.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == h ? void 0 : h.channelId,
        b = null != h,
        _ = (0, M.T)(g),
        O = (0, k.J)(g),
        E = i.useRef(null);
    i.useEffect(() => {
        null != g && !_ && O && b && ((0, T.Kh)(g), N.Z.closeChannelSidebar(w.uZ));
    }, [g, O, b, _]);
    let [v, I] = i.useState(K.pS.REQUESTS),
        A = (e) => {
            I(e);
        };
    return (
        (0, y.Tt)({ location: $.intl.string($.t.e7GWjY) }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: a()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: b,
                        [et.threadSidebarFloating]: b && u,
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
                                            "aria-hidden": !0,
                                        }),
                                        (0, r.jsx)(ea, {
                                            targetElementRef: E,
                                            children: (0, r.jsx)(S.Z.Title, {
                                                ref: E,
                                                children: $.intl.string($.t.e7GWjY),
                                            }),
                                        }),
                                        (0, r.jsx)(S.Z.Divider, {}),
                                        (0, r.jsxs)(p.njP, {
                                            "aria-label": $.intl.string($.t.e7GWjY),
                                            selectedItem: v,
                                            type: "top-pill",
                                            onItemSelect: A,
                                            children: [
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.REQUESTS,
                                                    className: ee.item,
                                                    children: $.intl.string($.t["7RFcXV"]),
                                                }),
                                                (0, r.jsx)(p.njP.Item, {
                                                    id: K.pS.SPAM,
                                                    className: ee.item,
                                                    children:
                                                        0 === o
                                                            ? $.intl.string($.t.ulKXHh)
                                                            : $.intl.formatToPlainString($.t["5jtrlZ"], { count: o }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, r.jsx)("div", {
                            className: et.content,
                            children: (0, r.jsx)(eo, { section: v }),
                        }),
                    ],
                }),
                b &&
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
