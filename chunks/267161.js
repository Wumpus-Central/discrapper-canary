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
    _ = n(257966),
    O = n(916069),
    E = n(591472),
    y = n(111666),
    v = n(565138),
    I = n(300986),
    C = n(314451),
    S = n(35583),
    N = n(821020),
    T = n(370774),
    P = n(340137),
    j = n(522474),
    A = n(51596),
    x = n(141321),
    Z = n(819439),
    w = n(296241),
    L = n(165017),
    R = n(984802),
    D = n(592125),
    k = n(430824),
    M = n(944486),
    U = n(914010),
    G = n(451478),
    B = n(768581),
    V = n(998502),
    H = n(228488),
    F = n(950796),
    z = n(981631),
    W = n(176505),
    Y = n(741764),
    K = n(408491),
    q = n(388032),
    Q = n(345909),
    X = n(82504);
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
        f = (0, c.e7)([U.Z], () => U.Z.getGuildId()),
        h = (0, c.e7)([D.Z], () => D.Z.getChannel(n), [n]),
        g = null != f ? f : null == h ? void 0 : h.guild_id,
        m = (0, c.e7)([k.Z], () => k.Z.getGuild(g), [g]),
        b = (0, O.Z)(),
        _ = (0, T.D)(),
        { application: y, isFrameInFocusedMode: I } = (0, c.cj)([p.Z, E.Z], () => {
            let e = E.Z.getConnectedFrame();
            return {
                application: p.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: E.Z.getFrameLayoutMode() === K.U.FOCUSED,
            };
        }),
        C =
            null != y
                ? B.ZP.getApplicationIconURL({
                      id: y.id,
                      icon: y.icon,
                      bot: y.bot,
                  })
                : void 0,
        S = null;
    null != y && I
        ? ((t = y.name),
          (S = (0, r.jsx)("img", {
              className: X.appIcon,
              alt: q.intl.string(q.t.X4IxWF),
              src: C,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : _
          ? ((t = q.intl.string(q.t.HcoRu7)), (S = (0, r.jsx)(u.Dkj, { size: "xs" })))
          : null != m
            ? ((S = b
                  ? (0, r.jsx)(u.r7p, { size: "xs" })
                  : (0, r.jsx)(v.Z, {
                        guild: m,
                        size: v.Z.Sizes.MINI,
                        active: !0,
                        className: X.guildIcon,
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
                        ((t = q.intl.string(Q.default.RZqaJi)), (S = (0, r.jsx)(u.BFJ, { size: "xs" })));
    let N = i.useCallback((e) => {
        (0, A.ZN)("fast-travel");
    }, []);
    return null == t || "" === t
        ? null
        : (0, r.jsx)(u.ua7, {
              shouldShow: l,
              "aria-label": q.intl.string(q.t["7P/+q6"]),
              tooltipContentClassName: X.navigationTooltip,
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
                      $(J({ className: a()(X.title, { [X.fastTravel]: l }) }, e, s), {
                          onClick: l ? N : void 0,
                          children: [
                              S,
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  lineClamp: 1,
                                  children: t,
                              }),
                              l && (0, r.jsx)(u.Fbu, { size: "xs" }),
                          ],
                      }),
                  ),
          });
}
function en(e) {
    let { selectedChannelId: t, withFastTravel: n, focusSectionProps: i } = e,
        l = (0, c.e7)([U.Z, D.Z], () => {
            let e = U.Z.getGuildId(),
                n = D.Z.getChannel(t);
            return null != e ? e : null == n ? void 0 : n.guild_id;
        }),
        a = (0, L.H)({
            guildId: l,
            channelId: t,
        });
    return null == a
        ? (0, r.jsx)(et, {
              selectedChannelId: t,
              withFastTravel: n,
              focusSectionProps: i,
          })
        : (0, r.jsx)(w.Z, {
              searchContext: a,
              focusSectionProps: i,
          });
}
function er(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: i } = e,
        l = (0, c.e7)([M.Z], () => M.Z.getChannelId()),
        a = (0, Z.$)({ location: "TitleText" }),
        o = (0, c.e7)([D.Z], () => {
            let e = D.Z.getChannel(l);
            return null != e && !e.isDirectory() && !e.isGuildVocal();
        });
    return a && null != l && !(0, W.AB)(l) && o
        ? (0, r.jsx)(en, {
              selectedChannelId: l,
              withFastTravel: t,
              focusSectionProps: i,
          })
        : n
          ? (0, r.jsx)(_.R, { focusSectionProps: i })
          : (0, r.jsx)(et, {
                selectedChannelId: l,
                withFastTravel: t,
                focusSectionProps: i,
            });
}
let ei = i.memo(function () {
    i.useLayoutEffect(() => {
        V.ZP.setMinimumSize(Y.J, Y.N);
    }, []);
    let e = (0, g.T)("AppTitleBar"),
        t = ee((e) => e.isOpen),
        { notificationCenterVariant: n, entrypoint: l } = (0, N.pN)({ location: "AppTitleBar" }),
        {
            backForwardButtons: a,
            titlebarFastTravel: o,
            quickSwitcherInsteadOfTitle: s,
        } = (0, m.t)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: p } = f.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        _ = !t && e,
        O = null !== n && l === N.u3.TITLE_BAR_LEFT,
        E = null === n;
    i.useLayoutEffect(() => {
        V.ZP.setMinimumSize(Y.J, Y.N);
    }, []);
    let v = (0, R.Ll)(),
        T = (0, c.e7)([G.Z, j.Z], () => (0, H.rB)()),
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
            showBackForwardButtons: a,
            showCollapsedSidebarIcons: _,
            showNotificationsInbox: O,
            titlebarFastTravel: o,
            showRecentsButton: E,
        });
    return T
        ? null
        : (0, r.jsx)(u.Wdt, {
              children: (e) =>
                  (0, r.jsx)(u.f6W, {
                      theme: v,
                      children: (t) =>
                          (0, r.jsx)(F.TF, {
                              className: t,
                              leading: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      a &&
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
                                                          className: X.button,
                                                          onClick: () => {
                                                              ee.setState({ isOpen: !ee.getState().isOpen });
                                                          },
                                                          children: (0, r.jsx)(el, {}),
                                                      }),
                                                  ),
                                                  (0, r.jsx)(u.P3F, {
                                                      className: X.button,
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
                                          (0, r.jsx)(P.Z, {
                                              focusSectionProps: "NOTIFICATIONS_INBOX" === A ? e : void 0,
                                          }),
                                  ],
                              }),
                              title: (0, r.jsx)(er, {
                                  withFastTravel: o,
                                  quickSwitcherInsteadOfTitle: s,
                                  focusSectionProps: "TITLEBAR_FAST_TRAVEL" === A ? e : void 0,
                              }),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(y.Z, { className: X.button }),
                                      (0, r.jsx)(h.Z, {
                                          canShowReminder: !0,
                                          className: X.button,
                                      }),
                                      E && (0, r.jsx)(x.Z, $(J({}, "RECENTS" === A ? e : {}), { className: X.button })),
                                      p
                                          ? (0, r.jsx)(C.Z, {
                                                focusSectionProps: "HELP" === A ? e : void 0,
                                                className: X.button,
                                            })
                                          : (0, r.jsx)(I.Z, {
                                                focusSectionProps: "HELP" === A ? e : void 0,
                                                className: X.button,
                                            }),
                                      (0, r.jsx)(S.Z, { className: X.button }),
                                  ],
                              }),
                          }),
                  }),
          });
});
function el() {
    return (0, r.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: X.icon,
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
