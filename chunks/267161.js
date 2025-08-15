n.r(t),
    n.d(t, {
        default: () => ei,
        useAppSidebarState: () => ee,
    });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(843611),
    s = n(879690),
    c = n(442837),
    u = n(481060),
    d = n(230711),
    p = n(812206),
    f = n(174556),
    h = n(320007),
    g = n(540059),
    m = n(336219),
    b = n(609174),
    _ = n(916069),
    O = n(591472),
    E = n(111666),
    y = n(565138),
    v = n(300986),
    I = n(314451),
    C = n(35583),
    S = n(821020),
    N = n(370774),
    T = n(340137),
    P = n(522474),
    j = n(51596),
    x = n(141321),
    A = n(819439),
    Z = n(296241),
    w = n(165017),
    L = n(984802),
    R = n(592125),
    D = n(430824),
    k = n(944486),
    M = n(914010),
    U = n(451478),
    G = n(768581),
    B = n(358085),
    V = n(998502),
    H = n(228488),
    F = n(950796),
    z = n(981631),
    W = n(176505),
    Y = n(741764),
    K = n(408491),
    q = n(388032),
    X = n(345909),
    Q = n(82504);
function J(e) {
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
function $(e, t) {
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
let ee = (0, s.U)(() => ({ isOpen: !0 }));
function et(e) {
    let t,
        { selectedChannelId: n, withFastTravel: l, focusSectionProps: s } = e,
        d = (0, o.TH)(),
        f = (0, c.e7)([M.Z], () => M.Z.getGuildId()),
        h = (0, c.e7)([R.Z], () => R.Z.getChannel(n), [n]),
        g = null != f ? f : null == h ? void 0 : h.guild_id,
        m = (0, c.e7)([D.Z], () => D.Z.getGuild(g), [g]),
        b = (0, _.Z)(),
        E = (0, N.D)(),
        { application: v, isFrameInFocusedMode: I } = (0, c.cj)([p.Z, O.Z], () => {
            let e = O.Z.getConnectedFrame();
            return {
                application: p.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: O.Z.getFrameLayoutMode() === K.U.FOCUSED,
            };
        }),
        C =
            null != v
                ? G.ZP.getApplicationIconURL({
                      id: v.id,
                      icon: v.icon,
                      bot: v.bot,
                  })
                : void 0,
        S = null;
    null != v && I
        ? ((t = v.name),
          (S = (0, r.jsx)("img", {
              className: Q.appIcon,
              alt: q.intl.string(q.t.X4IxWF),
              src: C,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : E
          ? ((t = q.intl.string(q.t.HcoRu7)), (S = (0, r.jsx)(u.Dkj, { size: "xs" })))
          : null != m
            ? ((S = b
                  ? (0, r.jsx)(u.r7p, { size: "xs" })
                  : (0, r.jsx)(y.Z, {
                        guild: m,
                        size: y.Z.Sizes.MINI,
                        active: !0,
                        className: Q.guildIcon,
                    })),
              (t = m.name))
            : null != h && (h.isDM() || h.isGroupDM())
              ? ((t = q.intl.string(q.t.YUU0RE)), (S = (0, r.jsx)(u.gw7, { size: "xs" })))
              : d.pathname.startsWith(z.Z5c.GLOBAL_DISCOVERY)
                ? ((t = q.intl.string(q.t["4nEZLi"])), (S = (0, r.jsx)(u.Jmo, { size: "xs" })))
                : d.pathname.startsWith(z.Z5c.NITRO_HOME)
                  ? ((t = q.intl.string(q.t.Ipxkoq)), (S = (0, r.jsx)(u.SrA, { size: "xs" })))
                  : d.pathname.startsWith(z.Z5c.COLLECTIBLES_SHOP)
                    ? ((t = q.intl.string(q.t.pWG4zc)), (S = (0, r.jsx)(u.EOn, { size: "xs" })))
                    : d.pathname.startsWith(z.Z5c.FRIENDS)
                      ? ((t = q.intl.string(q.t.TdEu5e)), (S = (0, r.jsx)(u.iFz, { size: "xs" })))
                      : d.pathname.startsWith(z.Z5c.FAMILY_CENTER) &&
                        ((t = q.intl.string(X.default.RZqaJi)), (S = (0, r.jsx)(u.BFJ, { size: "xs" })));
    let T = i.useCallback((e) => {
        (0, j.ZN)("fast-travel");
    }, []);
    return null == t || "" === t
        ? null
        : (0, r.jsx)(u.ua7, {
              shouldShow: l,
              "aria-label": q.intl.string(q.t["7P/+q6"]),
              tooltipContentClassName: Q.navigationTooltip,
              text: (0, r.jsxs)(r.Fragment, {
                  children: [
                      q.intl.string(q.t["7P/+q6"]),
                      (0, r.jsx)(u.M2$, {
                          shortcut: ["mod", "k"],
                      }),
                  ],
              }),
              children: (e) =>
                  (0, r.jsxs)(
                      u.P3F,
                      $(J({ className: a()(Q.title, { [Q.fastTravel]: l }) }, e, s), {
                          onClick: l ? T : void 0,
                          children: [
                              S,
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  lineClamp: 1,
                                  children: t,
                              }),
                              l && (0, r.jsx)(u.hic, { size: "xs" }),
                          ],
                      }),
                  ),
          });
}
function en(e) {
    let { selectedChannelId: t, withFastTravel: n, focusSectionProps: i } = e,
        l = (0, c.e7)([M.Z, R.Z], () => {
            let e = M.Z.getGuildId(),
                n = R.Z.getChannel(t);
            return null != e ? e : null == n ? void 0 : n.guild_id;
        }),
        a = (0, w.H)({
            guildId: l,
            channelId: t,
        });
    return null == a
        ? (0, r.jsx)(et, {
              selectedChannelId: t,
              withFastTravel: n,
              focusSectionProps: i,
          })
        : (0, r.jsx)(Z.Z, {
              searchContext: a,
              focusSectionProps: i,
          });
}
function er(e) {
    let { withFastTravel: t, focusSectionProps: n } = e,
        i = (0, c.e7)([k.Z], () => k.Z.getChannelId()),
        l = (0, A.$)({ location: "TitleText" }),
        a = (0, c.e7)([R.Z], () => {
            let e = R.Z.getChannel(i);
            return null != e && !e.isDirectory() && !e.isGuildVocal();
        });
    return l && null != i && !(0, W.AB)(i) && a
        ? (0, r.jsx)(en, {
              selectedChannelId: i,
              withFastTravel: t,
              focusSectionProps: n,
          })
        : (0, r.jsx)(et, {
              selectedChannelId: i,
              withFastTravel: t,
              focusSectionProps: n,
          });
}
let ei = i.memo(function () {
    i.useLayoutEffect(() => {
        V.ZP.setMinimumSize(Y.J, Y.N);
    }, []);
    let e = (0, g.T)("AppTitleBar"),
        t = ee((e) => e.isOpen),
        { notificationCenterVariant: n, entrypoint: l } = (0, S.pN)({ location: "AppTitleBar" }),
        { backForwardButtons: a, titlebarFastTravel: o } = m.ZP.useExperiment({ location: "AppTitleBar" }),
        s = (0, B.isDesktop)() && a,
        { hasBugReporterAccess: p } = f.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        _ = !t && e,
        O = null !== n && l === S.u3.TITLE_BAR_LEFT,
        y = null === n;
    i.useLayoutEffect(() => {
        V.ZP.setMinimumSize(Y.J, Y.N);
    }, []);
    let N = (0, L.Ll)(),
        j = (0, c.e7)([U.Z, P.Z], () => (0, H.rB)()),
        A = (function (e) {
            let {
                showBackForwardButtons: t,
                showCollapsedSidebarIcons: n,
                showNotificationsInbox: r,
                titlebarFastTravel: l,
                showRecentsButton: a,
            } = e;
            return i.useMemo(
                () =>
                    t
                        ? "BACK_FORWARD_NAVIGATION"
                        : n
                          ? "SIDEBAR"
                          : r
                            ? "NOTIFICATIONS_INBOX"
                            : l
                              ? "TITLEBAR_FAST_TRAVEL"
                              : a
                                ? "RECENTS"
                                : "HELP",
                [t, n, r, l, a],
            );
        })({
            showBackForwardButtons: s,
            showCollapsedSidebarIcons: _,
            showNotificationsInbox: O,
            titlebarFastTravel: o,
            showRecentsButton: y,
        });
    return j
        ? null
        : (0, r.jsx)(u.Wdt, {
              children: (e) =>
                  (0, r.jsx)(u.f6W, {
                      theme: N,
                      children: (t) =>
                          (0, r.jsx)(F.TF, {
                              className: t,
                              leading: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      s &&
                                          (0, r.jsx)(b.Z, {
                                              firstElementFocusJumpSectionProps:
                                                  "BACK_FORWARD_NAVIGATION" === A ? e : void 0,
                                          }),
                                      _ &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(
                                                      u.P3F,
                                                      $(J({}, "SIDEBAR" === A ? e : {}), {
                                                          className: Q.button,
                                                          onClick: () => {
                                                              ee.setState({ isOpen: !ee.getState().isOpen });
                                                          },
                                                          children: (0, r.jsx)(el, {}),
                                                      }),
                                                  ),
                                                  (0, r.jsx)(u.P3F, {
                                                      className: Q.button,
                                                      onClick: () => {
                                                          d.Z.open(z.oAB.ACCOUNT);
                                                      },
                                                      children: (0, r.jsx)(u.ewm, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      O &&
                                          (0, r.jsx)(T.Z, {
                                              focusSectionProps: "NOTIFICATIONS_INBOX" === A ? e : void 0,
                                          }),
                                  ],
                              }),
                              title: (0, r.jsx)(er, {
                                  withFastTravel: o,
                                  focusSectionProps: "TITLEBAR_FAST_TRAVEL" === A ? e : void 0,
                              }),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(E.Z, { className: Q.button }),
                                      (0, r.jsx)(h.Z, {
                                          canShowReminder: !0,
                                          className: Q.button,
                                      }),
                                      y && (0, r.jsx)(x.Z, $(J({}, "RECENTS" === A ? e : {}), { className: Q.button })),
                                      p
                                          ? (0, r.jsx)(I.Z, {
                                                focusSectionProps: "HELP" === A ? e : void 0,
                                                className: Q.button,
                                            })
                                          : (0, r.jsx)(v.Z, {
                                                focusSectionProps: "HELP" === A ? e : void 0,
                                                className: Q.button,
                                            }),
                                      (0, r.jsx)(C.Z, { className: Q.button }),
                                  ],
                              }),
                          }),
                  }),
          });
});
function el() {
    return (0, r.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: Q.icon,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        children: [
            (0, r.jsx)("rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
            }),
            (0, r.jsx)("path", { d: "M9 3v18" }),
        ],
    });
}
