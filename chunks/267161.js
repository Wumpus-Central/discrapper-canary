n.r(t),
    n.d(t, {
        default: () => J,
        useAppSidebarState: () => K,
    });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(97519),
    o = n(442837),
    s = n(481060),
    c = n(230711),
    u = n(812206),
    d = n(174556),
    p = n(320007),
    h = n(540059),
    f = n(916069),
    g = n(591472),
    m = n(111666),
    b = n(565138),
    _ = n(300986),
    O = n(314451),
    E = n(35583),
    y = n(821020),
    v = n(370774),
    I = n(340137),
    C = n(522474),
    S = n(141321),
    N = n(819439),
    T = n(296241),
    P = n(165017),
    j = n(984802),
    x = n(592125),
    Z = n(430824),
    A = n(944486),
    w = n(914010),
    L = n(451478),
    R = n(768581),
    D = n(998502),
    k = n(228488),
    M = n(950796),
    U = n(981631),
    G = n(176505),
    V = n(741764),
    B = n(408491),
    H = n(388032),
    F = n(916723),
    z = n(538778);
function W(e) {
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
function Y(e, t) {
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
let K = (0, a.U)(() => ({ isOpen: !0 }));
function q(e) {
    let t,
        { selectedChannelId: n } = e,
        i = (0, l.TH)(),
        a = (0, o.e7)([w.Z], () => w.Z.getGuildId()),
        c = (0, o.e7)([x.Z], () => x.Z.getChannel(n), [n]),
        d = null != a ? a : null == c ? void 0 : c.guild_id,
        p = (0, o.e7)([Z.Z], () => Z.Z.getGuild(d), [d]),
        h = (0, f.Z)(),
        m = (0, v.D)(),
        { application: _, isFrameInFocusedMode: O } = (0, o.cj)([u.Z, g.Z], () => {
            let e = g.Z.getConnectedFrame();
            return {
                application: u.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: g.Z.getFrameLayoutMode() === B.U.FOCUSED,
            };
        }),
        E =
            null != _
                ? R.ZP.getApplicationIconURL({
                      id: _.id,
                      icon: _.icon,
                      bot: _.bot,
                  })
                : void 0,
        y = null;
    return (
        null != _ && O
            ? ((t = _.name),
              (y = (0, r.jsx)("img", {
                  className: z.appIcon,
                  alt: H.intl.string(H.t.X4IxWF),
                  src: E,
                  "aria-hidden": !0,
                  draggable: !1,
              })))
            : m
              ? ((t = H.intl.string(H.t.HcoRu7)), (y = (0, r.jsx)(s.Dkj, { size: "xs" })))
              : null != p
                ? ((y = h
                      ? (0, r.jsx)(s.r7p, { size: "xs" })
                      : (0, r.jsx)(b.Z, {
                            guild: p,
                            size: b.Z.Sizes.MINI,
                            active: !0,
                            className: z.guildIcon,
                        })),
                  (t = p.name))
                : null != c && (c.isDM() || c.isGroupDM())
                  ? ((t = H.intl.string(H.t.YUU0RE)), (y = (0, r.jsx)(s.gw7, { size: "xs" })))
                  : i.pathname.startsWith(U.Z5c.GLOBAL_DISCOVERY)
                    ? ((t = H.intl.string(H.t["4nEZLi"])), (y = (0, r.jsx)(s.Jmo, { size: "xs" })))
                    : i.pathname.startsWith(U.Z5c.NITRO_HOME)
                      ? ((t = H.intl.string(H.t.Ipxkoq)), (y = (0, r.jsx)(s.SrA, { size: "xs" })))
                      : i.pathname.startsWith(U.Z5c.COLLECTIBLES_SHOP)
                        ? ((t = H.intl.string(H.t.pWG4zc)), (y = (0, r.jsx)(s.EOn, { size: "xs" })))
                        : i.pathname.startsWith(U.Z5c.FRIENDS)
                          ? ((t = H.intl.string(H.t.TdEu5e)), (y = (0, r.jsx)(s.iFz, { size: "xs" })))
                          : i.pathname.startsWith(U.Z5c.FAMILY_CENTER) &&
                            ((t = H.intl.string(F.default.RZqaJi)), (y = (0, r.jsx)(s.BFJ, { size: "xs" }))),
        null != t &&
            "" !== t &&
            (0, r.jsxs)("div", {
                className: z.title,
                children: [
                    y,
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        lineClamp: 1,
                        children: t,
                    }),
                ],
            })
    );
}
function X(e) {
    let { selectedChannelId: t } = e,
        n = (0, o.e7)([w.Z, x.Z], () => {
            let e = w.Z.getGuildId(),
                n = x.Z.getChannel(t);
            return null != e ? e : null == n ? void 0 : n.guild_id;
        }),
        i = (0, P.H)({
            guildId: n,
            channelId: t,
        });
    return null == i ? (0, r.jsx)(q, { selectedChannelId: t }) : (0, r.jsx)(T.Z, { searchContext: i });
}
function Q() {
    let e = (0, o.e7)([A.Z], () => A.Z.getChannelId()),
        t = (0, N.$)({ location: "TitleText" }),
        n = (0, o.e7)([x.Z], () => {
            let t = x.Z.getChannel(e);
            return null != t && !t.isDirectory() && !t.isGuildVocal();
        });
    return t && null != e && !(0, G.AB)(e) && n
        ? (0, r.jsx)(X, { selectedChannelId: e })
        : (0, r.jsx)(q, { selectedChannelId: e });
}
let J = i.memo(function () {
    i.useLayoutEffect(() => {
        D.ZP.setMinimumSize(V.J, V.N);
    }, []);
    let e = (0, h.T)("AppTitleBar"),
        t = K((e) => e.isOpen),
        { notificationCenterVariant: n, entrypoint: l } = (0, y.pN)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: a } = d.Z.useExperiment({ location: "HeaderBar" }, { autoTrackExposure: !1 }),
        u = !t && e,
        f = null !== n && l === y.u3.TITLE_BAR_LEFT,
        g = null === n;
    i.useLayoutEffect(() => {
        D.ZP.setMinimumSize(V.J, V.N);
    }, []);
    let b = (0, j.Ll)(),
        v = (0, o.e7)([L.Z, C.Z], () => (0, k.rB)()),
        N = (function (e) {
            let { showCollapsedSidebarIcons: t, showNotificationsInbox: n, showRecentsButton: r } = e;
            return i.useMemo(() => (t ? "SIDEBAR" : n ? "NOTIFICATIONS_INBOX" : r ? "RECENTS" : "HELP"), [t, n, r]);
        })({
            showCollapsedSidebarIcons: u,
            showNotificationsInbox: f,
            showRecentsButton: g,
        });
    return v
        ? null
        : (0, r.jsx)(s.Wdt, {
              children: (e) =>
                  (0, r.jsx)(s.f6W, {
                      theme: b,
                      children: (t) =>
                          (0, r.jsx)(M.TF, {
                              className: t,
                              leading: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      u &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(
                                                      s.P3F,
                                                      Y(W({}, "SIDEBAR" === N ? e : {}), {
                                                          className: z.button,
                                                          onClick: () => {
                                                              K.setState({ isOpen: !K.getState().isOpen });
                                                          },
                                                          children: (0, r.jsx)($, {}),
                                                      }),
                                                  ),
                                                  (0, r.jsx)(s.P3F, {
                                                      className: z.button,
                                                      onClick: () => {
                                                          c.Z.open(U.oAB.ACCOUNT);
                                                      },
                                                      children: (0, r.jsx)(s.ewm, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      f &&
                                          (0, r.jsx)(I.Z, {
                                              focusSectionProps: "NOTIFICATIONS_INBOX" === N ? e : void 0,
                                          }),
                                  ],
                              }),
                              title: (0, r.jsx)(Q, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.Z, { className: z.button }),
                                      (0, r.jsx)(p.Z, {
                                          canShowReminder: !0,
                                          className: z.button,
                                      }),
                                      g && (0, r.jsx)(S.Z, Y(W({}, "RECENTS" === N ? e : {}), { className: z.button })),
                                      a
                                          ? (0, r.jsx)(O.Z, {
                                                focusSectionProps: "HELP" === N ? e : void 0,
                                                className: z.button,
                                            })
                                          : (0, r.jsx)(_.Z, {
                                                focusSectionProps: "HELP" === N ? e : void 0,
                                                className: z.button,
                                            }),
                                      (0, r.jsx)(E.Z, { className: z.button }),
                                  ],
                              }),
                          }),
                  }),
          });
});
function $() {
    return (0, r.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: z.icon,
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
