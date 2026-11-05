n.d(l, { w: () => Z, A: () => q });
var i = n(477900),
    t = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(855986),
    u = n(646514),
    a = n(862482),
    c = n(417098),
    d = n(265872),
    g = n(866665),
    h = n(695366),
    A = n(669953),
    m = n(713125),
    x = n(197463),
    S = n(739455),
    f = n(727419),
    N = n(976860),
    v = n(309010),
    j = n(967198),
    R = n(792831),
    b = n(147925),
    E = n(723702),
    p = n(529942),
    I = n(164956);
n(321073);
var w = n(136722),
    O = n(834730),
    C = n(873200),
    k = n(44482),
    T = n(260509),
    G = n(34457),
    B = n(696451),
    L = n(317525),
    y = n(71393),
    _ = n(287809),
    P = n(488926),
    X = n(811091),
    U = n(209700),
    D = n(652215),
    M = n(792996),
    F = n(588397);
function V(e) {
    let { guildId: l } = e,
        n = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        s = (0, o.bG)([y.A], () => y.A.getGuild(l)),
        r = (0, o.bG)([L.A], () => L.A.getRolesSnapshot(l)),
        u = (0, o.bG)([L.A], () => L.A.getSortedRoles(l)),
        { impersonateType: a, viewingRoles: c } = (0, o.cf)([I.A], () => ({
            impersonateType: I.A.getImpersonateType(l),
            viewingRoles: I.A.getViewingRoles(l),
        })),
        d = a === U._.SERVER_SHOP,
        g = (0, o.bG)([B.Ay], () => (null != n ? B.Ay.getTrueMember(l, n.id) : null)),
        h = null != s ? r[(0, T.af)(s)] : null,
        [A, m] = t.useState(() => {
            let e = null == c ? [] : X.default.keys(c);
            return (null != h && e.push(h.id), e);
        }),
        x = t.useRef(s);
    t.useEffect(() => {
        let e = {},
            l = x.current;
        if (null != l && null != a) {
            for (let l of A) {
                let n = r[l];
                null != n && (e[l] = n);
            }
            (0, p.IA)(l.id, { type: a, roles: e });
        }
    }, [A, a, r]);
    let S = null != s && null != n && null != g ? u.find((e) => g.roles.includes(e.id)) : void 0,
        f = t.useMemo(
            () =>
                null != s && null != n
                    ? u
                          .filter((e) => !(0, G.Oy)(e))
                          .filter((e) => !d || e.tags?.subscription_listing_id != null)
                          .filter((e) => S?.id === e.id || P.wO(s, n.id, S, e))
                    : [],
            [s, n, d, S, u],
        ),
        N = t.useMemo(() => {
            let e = Array.from(f).map((e) => ({
                leading: z(e),
                value: e.id,
                label: e.name,
                id: e.id.toString(),
                disabled: !1,
            }));
            return (
                null != s &&
                    null != h &&
                    e.push({ leading: z(h), value: h.id, label: h.name, id: h.id.toString(), disabled: !0 }),
                e
            );
        }, [f, s, h]);
    if (null == n || null == s || null == g) return null;
    let v = {};
    return (g.roles.forEach((e) => {
        let l = r[e];
        null != l && (v[l.id] = l);
    }),
    w.zy(P.aH({ forceRoles: v, context: s }), w.kg(D.xBc.MANAGE_GUILD, D.xBc.MANAGE_ROLES)) || (0, T.bM)(s, n))
        ? (0, i.jsx)("div", {
              className: F.kL,
              children: (0, i.jsxs)(C.iS, {
                  selectionMode: "multiple",
                  options: N,
                  value: A,
                  onSelectionChange: (e) => {
                      m(e);
                  },
                  children: [
                      (0, i.jsx)(C.a3, { hideTags: !0, autoFocus: !0, placeholder: M.intl.string(M.t.Sojqsr) }),
                      (0, i.jsx)(C.X2, { renderListItem: (e) => (0, i.jsx)(k.c, { ...e }) }),
                  ],
              }),
          })
        : (0, i.jsx)(O.E, { variant: "body-md/medium", children: M.intl.string(M.t.MNSTbY) });
}
function z(e) {
    return () =>
        (0, i.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("circle", { cx: "6", cy: "6", r: "6", fill: e.colorString ?? "currentColor" }),
        });
}
var H = n(746080);
(n(500208), n(2242));
var W = n(539009);
function Y(e) {
    let { className: l, onClick: n, children: t, buttonRef: s } = e;
    return (0, i.jsx)(a.$n, {
        buttonRef: s,
        className: r()(W.x6, l),
        innerClassName: W.hZ,
        look: a.$n.Looks.OUTLINED,
        color: a.$n.Colors.WHITE,
        size: a.$n.Sizes.NONE,
        onClick: n,
        children: t,
    });
}
function $(e) {
    let { onClick: l, className: n } = e;
    return (0, i.jsx)(Y, { onClick: l, className: n, children: M.intl.string(M.t.R9GHya) });
}
function q() {
    let e = t.useRef(null),
        l = (0, o.bG)([j.A], () => j.A.getGuildId()),
        n = (0, o.bG)([v.Ay], () => v.Ay.getChannelId(l)),
        {
            viewingRoles: s,
            backNavigationSection: r,
            isFullServerPreview: a,
            isServerShopPreview: E,
        } = (0, o.cf)([I.A], () => ({
            viewingRoles: null != l ? I.A.getViewingRoles(l) : null,
            backNavigationSection: I.A.getBackNavigationSection(l),
            isFullServerPreview: null != l && I.A.isFullServerPreview(l),
            isServerShopPreview: null != l && I.A.isViewingServerShop(l),
        }));
    if (null == s || null == l) return null;
    let w = (function (e) {
            switch (e) {
                case D.BEX.INTEGRATIONS:
                    return M.intl.string(M.t.k7LGdh);
                case D.BEX.ROLE_SUBSCRIPTIONS:
                    return M.intl.string(M.t.bRqiqa);
                case D.BEX.ONBOARDING:
                    return M.intl.string(M.t.qZpU3S);
                default:
                    return M.intl.string(M.t.MTIXhi);
            }
        })(r),
        O = r === D.BEX.ROLE_SUBSCRIPTIONS ? M.intl.string(M.t.hZUCzd) : M.intl.string(M.t["/djIh7"]),
        C = n === H.VV.GUILD_ONBOARDING;
    function k(e) {
        let { backToSettings: n } = e;
        null != l &&
            (I.A.isFullServerPreview(l) && (0, N.pX)(D.BVt.CHANNEL(l)),
            m.Ay.shouldShowOnboarding(l) && (A.A.finishOnboarding(l), (0, x.Jg)(l)),
            (0, p.rf)(l),
            n && f.A.open(l, r),
            r === D.BEX.ROLE_SUBSCRIPTIONS && (0, S.Fx)(l));
    }
    return (0, i.jsxs)(c.$T, {
        color: c.Hv.BRAND,
        className: W.lm,
        children: [
            (0, i.jsxs)(Y, {
                onClick: () => k({ backToSettings: !0 }),
                className: W.R4,
                children: [
                    (0, i.jsx)(R.A, { width: 16, height: 16, direction: R.A.Directions.LEFT, className: W.lJ }),
                    w,
                ],
            }),
            C && a
                ? (0, i.jsx)("div", {
                      className: W.XI,
                      children: (0, i.jsx)("div", { className: W.ut, children: M.intl.string(M.t.PxbiAf) }),
                  })
                : (0, i.jsxs)("div", {
                      className: W.XI,
                      children: [
                          (0, i.jsx)("div", {
                              className: W.ut,
                              children: a
                                  ? M.intl.formatToPlainString(M.t["0PHahI"], { numRoles: Object.keys(s).length })
                                  : M.intl.formatToPlainString(M.t.vMlK8t, { numRoles: Object.keys(s).length }),
                          }),
                          (0, i.jsx)(d.Y, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, i.jsx)(V, { guildId: l }),
                              children: (l) => {
                                  let { onClick: n } = l;
                                  return (0, i.jsxs)(Y, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          O,
                                          (0, i.jsx)(b.A, {
                                              width: 16,
                                              height: 16,
                                              direction: b.A.Directions.DOWN,
                                              className: W.k5,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          a &&
                              (0, i.jsx)(g.m, {
                                  asContainer: !0,
                                  text: M.intl.string(M.t.mW4DUE),
                                  children: (0, i.jsx)(h.CircleErrorIcon, {
                                      size: "xs",
                                      color: u.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          E &&
                              (0, i.jsx)(g.m, {
                                  asContainer: !0,
                                  text: M.intl.formatToPlainString(M.t.eummvd, { maxTiers: 3, maxProducts: 50 }),
                                  children: (0, i.jsx)(h.CircleErrorIcon, {
                                      size: "xs",
                                      color: u.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            a || r === D.BEX.ROLE_SUBSCRIPTIONS
                ? null
                : (0, i.jsx)($, { onClick: () => k({ backToSettings: !1 }), className: W.ZY }),
        ],
    });
}
function Z(e) {
    let { guildId: l } = e;
    return (0, o.bG)([I.A], () => I.A.isViewingRoles(l))
        ? (0, i.jsx)("div", {
              className: r()(W.xd, { [W.KF]: (0, E.uF)(), [W.Xz]: (0, E.cX)(), [W.pS]: (0, E.j9)() }),
              children: (0, i.jsx)(q, {}),
          })
        : null;
}
