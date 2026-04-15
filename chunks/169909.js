"use strict";
n.d(t, { Gt: () => ea, Ps: () => es, r0: () => z, wW: () => eo });
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
    m = n(10716),
    E = n(933958),
    g = n(625929),
    A = n(435582),
    I = n(849269),
    T = n(283488),
    S = n(881343),
    y = n(697675),
    v = n(58149),
    N = n(20015),
    C = n(654107),
    R = n(607470),
    O = n(91242),
    b = n(932413),
    D = n(611010),
    L = n(287809),
    w = n(147964),
    M = n(168936),
    P = n(486020),
    x = n(989837),
    k = n(735991),
    U = n(485878),
    G = n(297486),
    F = n(786115),
    V = n(346446),
    B = n(717048),
    H = n(652215),
    j = n(838541),
    Y = n(985018),
    W = n(535640),
    K = n(291071),
    $ = n(3697),
    z = (function (e) {
        return (
            (e.ICON = "icon"),
            (e.ROW = "row"),
            (e.NO_BANNER = "no_banner"),
            (e.MEDIUM_BANNER = "medium_banner"),
            (e.LARGE_BANNER = "large_banner"),
            e
        );
    })({});
function q(e) {
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
    return (0, r.jsx)(Z, {
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
                            ? (0, r.jsx)(X, { application: t, imageStyle: s, children: l })
                            : (0, r.jsx)(Q, {
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
function Z(e) {
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
                if ((0, k.$B)(t)) {
                    let n = t instanceof D.Ay ? t : D.Ay.createFromServer(t);
                    (0, _.jA)(e, (e) => (0, r.jsx)(V.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: g, description: A } = i.useMemo(() => (0, k.X2)(t, { fakeAppIconURL: K }), [t]),
        { trackItemImpressionRef: I } = (0, F.A)({
            applicationId: t.id,
            applicationFlags: (0, k.$B)(t) ? l.pG(32, (0, N.K)(t)) : void 0,
            sectionName: o,
            sectionPosition: u,
            sectionOverallPosition: c,
            promotionalLabel: (0, k.Ii)(t),
        }),
        T = i.useMemo(() => {
            let e = p ? W.Qz : W.kL;
            return a()(e, { [W.uS]: "row" !== m, [W.qd]: "row" === m, [W.oI]: "icon" === m }, h);
        }, [h, p, m]);
    return p
        ? (0, r.jsx)("div", { ref: f ? I : void 0, className: T, children: s })
        : (0, r.jsx)(d.DUT, {
              innerRef: f ? I : void 0,
              className: T,
              onClick: n,
              onContextMenu: E,
              "aria-label": Y.intl.formatToPlainString(Y.t["zLhr9+"], {
                  applicationName: g,
                  applicationDescription: A,
              }),
              children: (0, r.jsx)(d.M1G, { children: s }),
          });
}
function X(e) {
    let { application: t, imageStyle: n, children: s } = e,
        { name: o, iconURL: l } = i.useMemo(() => (0, k.X2)(t, { fakeAppIconURL: K }), [t]);
    return (0, r.jsx)(c.m, {
        __unsupportedReactNodeAsText: o,
        children: (0, r.jsxs)("div", {
            className: a()(W.zc, n),
            children: [(0, r.jsx)(B.A, { src: l, className: W.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), s],
        }),
    });
}
function Q(e) {
    let {
            application: t,
            look: n,
            imageStyle: s,
            enableVideoBanner: o,
            disableBannerFadeIn: l,
            children: c,
            overrideImageUrl: _,
            showsPromoted: p,
        } = e,
        { iconURL: h, name: E, description: g } = i.useMemo(() => (0, k.X2)(t, { fakeAppIconURL: K }), [t]),
        A = i.useMemo(() => (null == g ? null : (0, G.SD)(g)), [g]),
        I = (0, C.Ay)(h, ""),
        [T, S] = i.useState(!1),
        v = i.useCallback(() => {
            !0 === o && S(!0);
        }, [o]),
        N = p || (0, k.NO)(t),
        R = "large_banner" === n || "medium_banner" === n,
        O = i.useCallback(() => S(!1), []),
        b = (0, u.bG)([m.A, w.A], () => m.A.inDevModeForApplication(t.id) || w.A.inTestModeForApplication(t.id), [
            t.id,
        ]),
        D = (0, k.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? (0, r.jsxs)("div", {
                      onMouseEnter: v,
                      onFocus: v,
                      onMouseLeave: O,
                      onBlur: O,
                      className: a()(W.zK, { [W.i2]: "medium_banner" === n, [W.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: s,
                              children: (0, r.jsx)(et, {
                                  application: t,
                                  fallbackColor: I,
                                  showVideo: T,
                                  disableFadeIn: l,
                                  overrideImageUrl: _,
                              }),
                          }),
                          b || N || D !== f.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: W.YN,
                                    children: [
                                        N &&
                                            (0, r.jsx)("div", {
                                                className: W.Ag,
                                                children: (0, r.jsx)(d.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: Y.intl.string(Y.t["/eVltv"]),
                                                }),
                                            }),
                                        b && (0, r.jsx)(J, {}),
                                        D !== f.Hr.NONE && (0, r.jsx)(y.A, { labelType: D }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: W.Re, children: c }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: a()(W.TD, { [W.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(B.A, {
                        src: h,
                        className: a()(W.Kk, { [W.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: W.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: W.mD,
                                children: [
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: E,
                                    }),
                                    !R && N
                                        ? (0, r.jsx)("div", {
                                              className: W.nb,
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: Y.intl.string(Y.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(ee, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: A,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: W.ek }) : null,
                ],
            }),
        ],
    });
}
function J() {
    return (0, r.jsx)(c.m, {
        text: Y.intl.string(Y.t.CfTySQ),
        children: (0, r.jsx)("div", { className: W.hh, children: (0, r.jsx)(M.A, { className: W.bB }) }),
    });
}
function ee(e) {
    let { application: t } = e,
        n = L.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, k.Cx)(t);
    if (null == i || !(0, k.$B)(t)) return null;
    let s = (0, I.l$)(t, i);
    return null == s
        ? null
        : (0, r.jsx)(c.m, {
              __unsupportedReactNodeAsText: s,
              children: (0, r.jsx)("img", { className: W.io, alt: s, src: $ }),
          });
}
function et(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: s, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)("img", { src: o, alt: (0, k.$B)(t) ? t.name : "", className: a()(W._e, { [W.cG]: s }) });
    if ((0, k.$B)(t)) {
        if ((0, k.Ag)(t)) return (0, r.jsx)(en, { application: t, showVideo: i, disableFadeIn: s });
        if (null != t.bot) return (0, r.jsx)(er, { bot: t.bot, fallbackColor: n, disableFadeIn: s });
    }
    return (0, r.jsx)(ei, { fallbackColor: n, disableFadeIn: s });
}
function en(e) {
    let { application: t, showVideo: n, disableFadeIn: s } = e,
        o = (0, T.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        l = i.useMemo(() => {
            let e = (0, k.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, A.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [u, c] = i.useState(n);
    i.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = a()(W._e, { [W.cG]: s });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && u
                ? (0, r.jsx)("div", {
                      className: W.SF,
                      children: (0, r.jsx)("div", {
                          className: a()(W.T0, { [W.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(R.A, {
                              src: l,
                              mediaLayoutType: j.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(S.A, {
                imageBackground: o,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function er(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        s = (0, u.bG)([h.A], () => h.A.useReducedMotion),
        o = (0, P.z)({ id: t.id, banner: t.banner, canAnimate: !s, size: 600 });
    return null == o
        ? (0, r.jsx)(ei, { fallbackColor: n, disableFadeIn: i })
        : (0, r.jsx)("img", { src: o, alt: "", className: a()(W._e, { [W.cG]: i }) });
}
function ei(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: a()(W._e, { [W.cG]: n }), style: { backgroundColor: t } });
}
function es(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: s, installOnDemand: a, location: o } = e,
        { pushHistory: l } = (0, U.uM)(),
        { friends: u } = (0, g.A)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, v.zV)(H.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: x.A.entrypoint(),
                        promotional_label: (0, k.Ii)(t),
                        location: o,
                        query: s,
                        num_friends_who_play: u.length,
                    }),
                    l({ type: U.Wy.APPLICATION, application: t, installOnDemand: a, sectionName: n });
            },
            [t, a, o, l, s, r, n, u],
        ),
    };
}
function ea(e) {
    let { onClickAppCard: t } = es(e);
    return (0, r.jsx)(q, { ...e, onClick: t });
}
function eo(e) {
    let {
        context: t,
        application: n,
        location: s,
        sectionName: a,
        isOneClickCTA: o,
        fetchesApplication: l = !0,
        ...c
    } = e;
    if (!(0, k.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let _ = i.useId(),
        [f, p, h] = (0, u.yK)([E.Ay, O.A], () => [
            E.Ay.isLaunchingActivity(),
            E.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            O.A.isLaunchingFrame(n.id),
        ]),
        m = (null != p && p.isLaunching && p.componentId === _) || h,
        {
            onActivityItemSelected: g,
            activityAction: A,
            buttonVariant: T,
            buttonText: S,
        } = (0, G.dn)({
            context: t,
            application: n,
            location: s,
            sectionName: a,
            launchingComponentId: _,
            fetchesApplication: l,
        });
    return A === I.o6.START || A === I.o6.JOIN
        ? o
            ? (0, r.jsx)(q, {
                  ...c,
                  sectionName: a,
                  application: n,
                  onClick: g,
                  disabled: f || h,
                  enableVideoBanner: !m,
                  children: m ? (0, r.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS, className: W.u1 }) : null,
              })
            : (0, r.jsx)(ea, { ...c, context: t, sectionName: a, application: n, location: s })
        : (0, r.jsx)(q, {
              ...c,
              sectionName: a,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: W.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: W.BC,
                  children: (0, r.jsx)(d.Button, {
                      type: "submit",
                      size: "md",
                      variant: T,
                      disabled: f || h,
                      onClick: g,
                      "aria-label": Y.intl.formatToPlainString(Y.t["XjP/R+"], {
                          buttonText: S,
                          applicationName: n.name,
                      }),
                      loading: m,
                      text: S,
                  }),
              }),
          });
}
