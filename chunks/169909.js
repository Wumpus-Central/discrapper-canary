"use strict";
n.d(t, { Gt: () => ei, Ps: () => er, r0: () => K, wW: () => ea }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(696292),
    l = n(311907),
    u = n(990078),
    c = n(397927),
    d = n(442433),
    _ = n(155718),
    f = n(475743),
    p = n(775602),
    h = n(10716),
    m = n(933958),
    g = n(625929),
    E = n(435582),
    A = n(849269),
    I = n(283488),
    T = n(881343),
    y = n(697675),
    S = n(58149),
    v = n(654107),
    C = n(607470),
    b = n(91242),
    N = n(753845),
    R = n(611010),
    O = n(287809),
    D = n(147964),
    L = n(168936),
    w = n(486020),
    x = n(989837),
    P = n(735991),
    M = n(485878),
    k = n(297486),
    U = n(786115),
    G = n(346446),
    V = n(717048),
    F = n(652215),
    B = n(838541),
    j = n(985018),
    H = n(880445),
    Y = n(291071),
    W = n(3697),
    K = (function (e) {
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
            imageStyle: a,
            enableVideoBanner: s = !0,
            children: l,
            sectionName: u,
            resultsPosition: c,
            sectionOverallPosition: d,
            tracksImpression: _ = !0,
            disabled: p = !1,
            overrideImageUrl: h,
            showsPromoted: m,
        } = e,
        g = (0, f.A)(p) ?? p;
    return (0, r.jsx)($, {
        application: t,
        onClick: i,
        sectionName: u,
        resultsPosition: c,
        disabled: p,
        tracksImpression: _,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(N.A, {
            applicationId: t.id,
            questContent: o.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(q, { application: t, imageStyle: a, children: l })
                            : (0, r.jsx)(Z, {
                                  application: t,
                                  look: n,
                                  imageStyle: a,
                                  enableVideoBanner: s,
                                  disableBannerFadeIn: g !== p,
                                  overrideImageUrl: h,
                                  showsPromoted: m,
                                  children: l,
                              }),
                }),
        }),
    });
}
function $(e) {
    let {
            application: t,
            onClick: n,
            children: a,
            sectionName: o,
            resultsPosition: l,
            sectionOverallPosition: u,
            tracksImpression: _,
            disabled: f,
            containerStyle: p,
            look: h,
        } = e,
        m = i.useCallback(
            (e) => {
                if ((0, P.$B)(t)) {
                    let n = t instanceof R.Ay ? t : R.Ay.createFromServer(t);
                    (0, d.jA)(e, (e) => (0, r.jsx)(G.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: g, description: E } = i.useMemo(() => (0, P.X2)(t, { fakeAppIconURL: Y }), [t]),
        { trackItemImpressionRef: A } = (0, U.A)({
            applicationId: t.id,
            applicationFlags: (0, P.$B)(t) ? t.flags : void 0,
            sectionName: o,
            sectionPosition: l,
            sectionOverallPosition: u,
            promotionalLabel: (0, P.Ii)(t),
        }),
        I = i.useMemo(() => {
            let e = f ? H.Qz : H.kL;
            return s()(e, { [H.uS]: "row" !== h, [H.qd]: "row" === h, [H.oI]: "icon" === h }, p);
        }, [p, f, h]);
    return f
        ? (0, r.jsx)("div", { ref: _ ? A : void 0, className: I, children: a })
        : (0, r.jsx)(c.DUT, {
              innerRef: _ ? A : void 0,
              className: I,
              onClick: n,
              onContextMenu: m,
              "aria-label": j.intl.formatToPlainString(j.t["zLhr9+"], {
                  applicationName: g,
                  applicationDescription: E,
              }),
              children: (0, r.jsx)(c.M1G, { children: a }),
          });
}
function q(e) {
    let { application: t, imageStyle: n, children: a } = e,
        { name: o, iconURL: l } = i.useMemo(() => (0, P.X2)(t, { fakeAppIconURL: Y }), [t]);
    return (0, r.jsx)(u.m, {
        __unsupportedReactNodeAsText: o,
        children: (0, r.jsxs)("div", {
            className: s()(H.zc, n),
            children: [(0, r.jsx)(V.A, { src: l, className: H.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), a],
        }),
    });
}
function Z(e) {
    let {
            application: t,
            look: n,
            imageStyle: a,
            enableVideoBanner: o,
            disableBannerFadeIn: u,
            children: d,
            overrideImageUrl: f,
            showsPromoted: p,
        } = e,
        { iconURL: m, name: g, description: E } = i.useMemo(() => (0, P.X2)(t, { fakeAppIconURL: Y }), [t]),
        A = i.useMemo(() => (null == E ? null : (0, k.SD)(E)), [E]),
        I = (0, v.Ay)(m, ""),
        [T, S] = i.useState(!1),
        C = i.useCallback(() => {
            !0 === o && S(!0);
        }, [o]),
        b = p || (0, P.NO)(t),
        N = "large_banner" === n || "medium_banner" === n,
        R = i.useCallback(() => S(!1), []),
        O = (0, l.bG)([h.A, D.A], () => h.A.inDevModeForApplication(t.id) || D.A.inTestModeForApplication(t.id), [
            t.id,
        ]),
        L = (0, P.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N
                ? (0, r.jsxs)("div", {
                      onMouseEnter: C,
                      onFocus: C,
                      onMouseLeave: R,
                      onBlur: R,
                      className: s()(H.zK, { [H.i2]: "medium_banner" === n, [H.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: a,
                              children: (0, r.jsx)(J, {
                                  application: t,
                                  fallbackColor: I,
                                  showVideo: T,
                                  disableFadeIn: u,
                                  overrideImageUrl: f,
                              }),
                          }),
                          O || b || L !== _.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: H.YN,
                                    children: [
                                        b &&
                                            (0, r.jsx)("div", {
                                                className: H.Ag,
                                                children: (0, r.jsx)(c.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: j.intl.string(j.t["/eVltv"]),
                                                }),
                                            }),
                                        O && (0, r.jsx)(Q, {}),
                                        L !== _.Hr.NONE && (0, r.jsx)(y.A, { labelType: L }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: H.Re, children: d }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: s()(H.TD, { [H.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(V.A, {
                        src: m,
                        className: s()(H.Kk, { [H.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: H.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: H.mD,
                                children: [
                                    (0, r.jsx)(c.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: g,
                                    }),
                                    !N && b
                                        ? (0, r.jsx)("div", {
                                              className: H.nb,
                                              children: (0, r.jsx)(c.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: j.intl.string(j.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(X, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: A,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: H.ek }) : null,
                ],
            }),
        ],
    });
}
function Q() {
    return (0, r.jsx)(u.m, {
        text: j.intl.string(j.t.CfTySQ),
        children: (0, r.jsx)("div", { className: H.hh, children: (0, r.jsx)(L.A, { className: H.bB }) }),
    });
}
function X(e) {
    let { application: t } = e,
        n = O.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, P.Cx)(t);
    if (null == i || !(0, P.$B)(t)) return null;
    let a = (0, A.l$)(t, i);
    return null == a
        ? null
        : (0, r.jsx)(u.m, {
              __unsupportedReactNodeAsText: a,
              children: (0, r.jsx)("img", { className: H.io, alt: a, src: W }),
          });
}
function J(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)("img", { src: o, alt: (0, P.$B)(t) ? t.name : "", className: s()(H._e, { [H.cG]: a }) });
    if ((0, P.$B)(t)) {
        if ((0, P.Ag)(t)) return (0, r.jsx)(ee, { application: t, showVideo: i, disableFadeIn: a });
        if (null != t.bot) return (0, r.jsx)(et, { bot: t.bot, fallbackColor: n, disableFadeIn: a });
    }
    return (0, r.jsx)(en, { fallbackColor: n, disableFadeIn: a });
}
function ee(e) {
    let { application: t, showVideo: n, disableFadeIn: a } = e,
        o = (0, I.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        l = i.useMemo(() => {
            let e = (0, P.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, E.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [u, c] = i.useState(n);
    i.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = s()(H._e, { [H.cG]: a });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && u
                ? (0, r.jsx)("div", {
                      className: H.SF,
                      children: (0, r.jsx)("div", {
                          className: s()(H.T0, { [H.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(C.A, {
                              src: l,
                              mediaLayoutType: B.dG.MOSAIC,
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
function et(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, l.bG)([p.A], () => p.A.useReducedMotion),
        o = (0, w.z)({ id: t.id, banner: t.banner, canAnimate: !a, size: 600 });
    return null == o
        ? (0, r.jsx)(en, { fallbackColor: n, disableFadeIn: i })
        : (0, r.jsx)("img", { src: o, alt: "", className: s()(H._e, { [H.cG]: i }) });
}
function en(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: s()(H._e, { [H.cG]: n }), style: { backgroundColor: t } });
}
function er(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: a, installOnDemand: s, location: o } = e,
        { pushHistory: l } = (0, M.uM)(),
        { friends: u } = (0, g.A)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, S.zV)(F.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: x.A.entrypoint(),
                        promotional_label: (0, P.Ii)(t),
                        location: o,
                        query: a,
                        num_friends_who_play: u.length,
                    }),
                    l({ type: M.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n });
            },
            [t, s, o, l, a, r, n, u],
        ),
    };
}
function ei(e) {
    let { onClickAppCard: t } = er(e);
    return (0, r.jsx)(z, { ...e, onClick: t });
}
function ea(e) {
    let {
        context: t,
        application: n,
        location: a,
        sectionName: s,
        isOneClickCTA: o,
        fetchesApplication: u = !0,
        ...d
    } = e;
    if (!(0, P.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let _ = i.useId(),
        [f, p, h] = (0, l.yK)([m.Ay, b.A], () => [
            m.Ay.isLaunchingActivity(),
            m.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            b.A.isLaunchingFrame(n.id),
        ]),
        g = (null != p && p.isLaunching && p.componentId === _) || h,
        {
            onActivityItemSelected: E,
            activityAction: I,
            buttonVariant: T,
            buttonText: y,
        } = (0, k.dn)({
            context: t,
            application: n,
            location: a,
            sectionName: s,
            launchingComponentId: _,
            fetchesApplication: u,
        });
    return I === A.o6.START || I === A.o6.JOIN
        ? o
            ? (0, r.jsx)(z, {
                  ...d,
                  sectionName: s,
                  application: n,
                  onClick: E,
                  disabled: f || h,
                  enableVideoBanner: !g,
                  children: g ? (0, r.jsx)(c.y$y, { type: c.y$y.Type.PULSING_ELLIPSIS, className: H.u1 }) : null,
              })
            : (0, r.jsx)(ei, { ...d, context: t, sectionName: s, application: n, location: a })
        : (0, r.jsx)(z, {
              ...d,
              sectionName: s,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: H.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: H.BC,
                  children: (0, r.jsx)(c.Button, {
                      type: "submit",
                      size: "md",
                      variant: T,
                      disabled: f || h,
                      onClick: E,
                      "aria-label": j.intl.formatToPlainString(j.t["XjP/R+"], {
                          buttonText: y,
                          applicationName: n.name,
                      }),
                      loading: g,
                      text: y,
                  }),
              }),
          });
}
