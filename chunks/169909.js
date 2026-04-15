"use strict";
n.d(t, { Gt: () => es, Ps: () => ei, r0: () => $, wW: () => ea });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(696292),
    l = n(136722),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(442433),
    f = n(155718),
    p = n(475743),
    h = n(775602),
    m = n(933958),
    E = n(625929),
    g = n(435582),
    A = n(849269),
    I = n(283488),
    T = n(881343),
    S = n(697675),
    y = n(58149),
    v = n(20015),
    N = n(654107),
    C = n(607470),
    R = n(91242),
    O = n(977445),
    b = n(932413),
    D = n(611010),
    L = n(287809),
    w = n(168936),
    M = n(486020),
    P = n(989837),
    x = n(735991),
    k = n(485878),
    U = n(297486),
    G = n(786115),
    F = n(346446),
    V = n(717048),
    B = n(652215),
    H = n(838541),
    j = n(985018),
    Y = n(535640),
    W = n(291071),
    K = n(3697),
    $ = (function (e) {
        return (
            (e.ICON = "icon"),
            (e.ROW = "row"),
            (e.NO_BANNER = "no_banner"),
            (e.MEDIUM_BANNER = "medium_banner"),
            (e.LARGE_BANNER = "large_banner"),
            e
        );
    })({});
function z(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: i,
            imageStyle: s,
            enableVideoBanner: a = !0,
            children: l,
            sectionName: u,
            resultsPosition: c,
            sectionOverallPosition: d,
            tracksImpression: _ = !0,
            disabled: f = !1,
            overrideImageUrl: h,
            showsPromoted: m,
        } = e,
        E = (0, p.A)(f) ?? f;
    return (0, r.jsx)(q, {
        application: t,
        onClick: i,
        sectionName: u,
        resultsPosition: c,
        disabled: f,
        tracksImpression: _,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(b.A, {
            applicationId: t.id,
            questContent: o.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(Z, { application: t, imageStyle: s, children: l })
                            : (0, r.jsx)(X, {
                                  application: t,
                                  look: n,
                                  imageStyle: s,
                                  enableVideoBanner: a,
                                  disableBannerFadeIn: E !== f,
                                  overrideImageUrl: h,
                                  showsPromoted: m,
                                  children: l,
                              }),
                }),
        }),
    });
}
function q(e) {
    let {
            application: t,
            onClick: n,
            children: s,
            sectionName: o,
            resultsPosition: u,
            sectionOverallPosition: c,
            tracksImpression: f,
            disabled: p,
            containerStyle: h,
            look: m,
        } = e,
        E = i.useCallback(
            (e) => {
                if ((0, x.$B)(t)) {
                    let n = t instanceof D.Ay ? t : D.Ay.createFromServer(t);
                    (0, _.jA)(e, (e) => (0, r.jsx)(F.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: g, description: A } = i.useMemo(() => (0, x.X2)(t, { fakeAppIconURL: W }), [t]),
        { trackItemImpressionRef: I } = (0, G.A)({
            applicationId: t.id,
            applicationFlags: (0, x.$B)(t) ? l.pG(32, (0, v.K)(t)) : void 0,
            sectionName: o,
            sectionPosition: u,
            sectionOverallPosition: c,
            promotionalLabel: (0, x.Ii)(t),
        }),
        T = i.useMemo(() => {
            let e = p ? Y.Qz : Y.kL;
            return a()(e, { [Y.uS]: "row" !== m, [Y.qd]: "row" === m, [Y.oI]: "icon" === m }, h);
        }, [h, p, m]);
    return p
        ? (0, r.jsx)("div", { ref: f ? I : void 0, className: T, children: s })
        : (0, r.jsx)(d.DUT, {
              innerRef: f ? I : void 0,
              className: T,
              onClick: n,
              onContextMenu: E,
              "aria-label": j.intl.formatToPlainString(j.t["zLhr9+"], {
                  applicationName: g,
                  applicationDescription: A,
              }),
              children: (0, r.jsx)(d.M1G, { children: s }),
          });
}
function Z(e) {
    let { application: t, imageStyle: n, children: s } = e,
        { name: o, iconURL: l } = i.useMemo(() => (0, x.X2)(t, { fakeAppIconURL: W }), [t]);
    return (0, r.jsx)(c.m, {
        __unsupportedReactNodeAsText: o,
        children: (0, r.jsxs)("div", {
            className: a()(Y.zc, n),
            children: [(0, r.jsx)(V.A, { src: l, className: Y.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), s],
        }),
    });
}
function X(e) {
    let {
            application: t,
            look: n,
            imageStyle: s,
            enableVideoBanner: o,
            disableBannerFadeIn: l,
            children: u,
            overrideImageUrl: c,
            showsPromoted: _,
        } = e,
        { iconURL: p, name: h, description: m } = i.useMemo(() => (0, x.X2)(t, { fakeAppIconURL: W }), [t]),
        E = i.useMemo(() => (null == m ? null : (0, U.SD)(m)), [m]),
        g = (0, N.Ay)(p, ""),
        [A, I] = i.useState(!1),
        T = i.useCallback(() => {
            !0 === o && I(!0);
        }, [o]),
        y = _ || (0, x.NO)(t),
        v = "large_banner" === n || "medium_banner" === n,
        C = i.useCallback(() => I(!1), []),
        R = (0, O.u)(t.id),
        b = (0, x.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            v
                ? (0, r.jsxs)("div", {
                      onMouseEnter: T,
                      onFocus: T,
                      onMouseLeave: C,
                      onBlur: C,
                      className: a()(Y.zK, { [Y.i2]: "medium_banner" === n, [Y.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: s,
                              children: (0, r.jsx)(ee, {
                                  application: t,
                                  fallbackColor: g,
                                  showVideo: A,
                                  disableFadeIn: l,
                                  overrideImageUrl: c,
                              }),
                          }),
                          R || y || b !== f.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: Y.YN,
                                    children: [
                                        y &&
                                            (0, r.jsx)("div", {
                                                className: Y.Ag,
                                                children: (0, r.jsx)(d.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: j.intl.string(j.t["/eVltv"]),
                                                }),
                                            }),
                                        R && (0, r.jsx)(Q, {}),
                                        b !== f.Hr.NONE && (0, r.jsx)(S.A, { labelType: b }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: Y.Re, children: u }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: a()(Y.TD, { [Y.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(V.A, {
                        src: p,
                        className: a()(Y.Kk, { [Y.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: Y.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: Y.mD,
                                children: [
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: h,
                                    }),
                                    !v && y
                                        ? (0, r.jsx)("div", {
                                              className: Y.nb,
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: j.intl.string(j.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(J, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: E,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: Y.ek }) : null,
                ],
            }),
        ],
    });
}
function Q() {
    return (0, r.jsx)(c.m, {
        text: j.intl.string(j.t.CfTySQ),
        children: (0, r.jsx)("div", { className: Y.hh, children: (0, r.jsx)(w.A, { className: Y.bB }) }),
    });
}
function J(e) {
    let { application: t } = e,
        n = L.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, x.Cx)(t);
    if (null == i || !(0, x.$B)(t)) return null;
    let s = (0, A.l$)(t, i);
    return null == s
        ? null
        : (0, r.jsx)(c.m, {
              __unsupportedReactNodeAsText: s,
              children: (0, r.jsx)("img", { className: Y.io, alt: s, src: K }),
          });
}
function ee(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: s, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)("img", { src: o, alt: (0, x.$B)(t) ? t.name : "", className: a()(Y._e, { [Y.cG]: s }) });
    if ((0, x.$B)(t)) {
        if ((0, x.Ag)(t)) return (0, r.jsx)(et, { application: t, showVideo: i, disableFadeIn: s });
        if (null != t.bot) return (0, r.jsx)(en, { bot: t.bot, fallbackColor: n, disableFadeIn: s });
    }
    return (0, r.jsx)(er, { fallbackColor: n, disableFadeIn: s });
}
function et(e) {
    let { application: t, showVideo: n, disableFadeIn: s } = e,
        o = (0, I.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        l = i.useMemo(() => {
            let e = (0, x.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, g.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [u, c] = i.useState(n);
    i.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = a()(Y._e, { [Y.cG]: s });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && u
                ? (0, r.jsx)("div", {
                      className: Y.SF,
                      children: (0, r.jsx)("div", {
                          className: a()(Y.T0, { [Y.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(C.A, {
                              src: l,
                              mediaLayoutType: H.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(T.A, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function en(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        s = (0, u.bG)([h.A], () => h.A.useReducedMotion),
        o = (0, M.z)({ id: t.id, banner: t.banner, canAnimate: !s, size: 600 });
    return null == o
        ? (0, r.jsx)(er, { fallbackColor: n, disableFadeIn: i })
        : (0, r.jsx)("img", { src: o, alt: "", className: a()(Y._e, { [Y.cG]: i }) });
}
function er(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: a()(Y._e, { [Y.cG]: n }), style: { backgroundColor: t } });
}
function ei(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: s, installOnDemand: a, location: o } = e,
        { pushHistory: l } = (0, k.uM)(),
        { friends: u } = (0, E.A)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, y.zV)(B.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: P.A.entrypoint(),
                        promotional_label: (0, x.Ii)(t),
                        location: o,
                        query: s,
                        num_friends_who_play: u.length,
                    }),
                    l({ type: k.Wy.APPLICATION, application: t, installOnDemand: a, sectionName: n });
            },
            [t, a, o, l, s, r, n, u],
        ),
    };
}
function es(e) {
    let { onClickAppCard: t } = ei(e);
    return (0, r.jsx)(z, { ...e, onClick: t });
}
function ea(e) {
    let {
        context: t,
        application: n,
        location: s,
        sectionName: a,
        isOneClickCTA: o,
        fetchesApplication: l = !0,
        ...c
    } = e;
    if (!(0, x.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let _ = i.useId(),
        [f, p, h] = (0, u.yK)([m.Ay, R.A], () => [
            m.Ay.isLaunchingActivity(),
            m.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            R.A.isLaunchingFrame(n.id),
        ]),
        E = (null != p && p.isLaunching && p.componentId === _) || h,
        {
            onActivityItemSelected: g,
            activityAction: I,
            buttonVariant: T,
            buttonText: S,
        } = (0, U.dn)({
            context: t,
            application: n,
            location: s,
            sectionName: a,
            launchingComponentId: _,
            fetchesApplication: l,
        });
    return I === A.o6.START || I === A.o6.JOIN
        ? o
            ? (0, r.jsx)(z, {
                  ...c,
                  sectionName: a,
                  application: n,
                  onClick: g,
                  disabled: f || h,
                  enableVideoBanner: !E,
                  children: E ? (0, r.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS, className: Y.u1 }) : null,
              })
            : (0, r.jsx)(es, { ...c, context: t, sectionName: a, application: n, location: s })
        : (0, r.jsx)(z, {
              ...c,
              sectionName: a,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: Y.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: Y.BC,
                  children: (0, r.jsx)(d.Button, {
                      type: "submit",
                      size: "md",
                      variant: T,
                      disabled: f || h,
                      onClick: g,
                      "aria-label": j.intl.formatToPlainString(j.t["XjP/R+"], {
                          buttonText: S,
                          applicationName: n.name,
                      }),
                      loading: E,
                      text: S,
                  }),
              }),
          });
}
