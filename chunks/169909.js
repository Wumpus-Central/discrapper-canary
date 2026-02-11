"use strict";
n.d(t, { Gt: () => eo, Ps: () => es, r0: () => q, wW: () => el });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(696292),
    l = n(136722),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(442433),
    f = n(155718),
    h = n(475743),
    p = n(775602),
    g = n(10716),
    E = n(933958),
    A = n(625929),
    I = n(435582),
    T = n(849269),
    y = n(283488),
    S = n(881343),
    v = n(697675),
    C = n(58149),
    b = n(20015),
    N = n(654107),
    R = n(607470),
    O = n(91242),
    D = n(753845),
    L = n(611010),
    w = n(287809),
    x = n(147964),
    P = n(168936),
    M = n(486020),
    k = n(989837),
    U = n(735991),
    G = n(485878),
    F = n(297486),
    V = n(786115),
    B = n(346446),
    j = n(717048),
    H = n(652215),
    Y = n(838541),
    W = n(985018),
    K = n(880445),
    $ = n(291071),
    z = n(3697),
    q = (function (e) {
        return (
            (e.ICON = "icon"),
            (e.ROW = "row"),
            (e.NO_BANNER = "no_banner"),
            (e.MEDIUM_BANNER = "medium_banner"),
            (e.LARGE_BANNER = "large_banner"),
            e
        );
    })({});
function X(e) {
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
            disabled: f = !1,
            overrideImageUrl: p,
            showsPromoted: g,
        } = e,
        E = (0, h.A)(f) ?? f;
    return (0, r.jsx)(Z, {
        application: t,
        onClick: i,
        sectionName: u,
        resultsPosition: c,
        disabled: f,
        tracksImpression: _,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(D.A, {
            applicationId: t.id,
            questContent: o.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(Q, { application: t, imageStyle: a, children: l })
                            : (0, r.jsx)(J, {
                                  application: t,
                                  look: n,
                                  imageStyle: a,
                                  enableVideoBanner: s,
                                  disableBannerFadeIn: E !== f,
                                  overrideImageUrl: p,
                                  showsPromoted: g,
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
            children: a,
            sectionName: o,
            resultsPosition: u,
            sectionOverallPosition: c,
            tracksImpression: f,
            disabled: h,
            containerStyle: p,
            look: g,
        } = e,
        E = i.useCallback(
            (e) => {
                if ((0, U.$B)(t)) {
                    let n = t instanceof L.Ay ? t : L.Ay.createFromServer(t);
                    (0, _.jA)(e, (e) => (0, r.jsx)(B.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: A, description: I } = i.useMemo(() => (0, U.X2)(t, { fakeAppIconURL: $ }), [t]),
        { trackItemImpressionRef: T } = (0, V.A)({
            applicationId: t.id,
            applicationFlags: (0, U.$B)(t) ? l.pG(32, (0, b.K)(t)) : void 0,
            sectionName: o,
            sectionPosition: u,
            sectionOverallPosition: c,
            promotionalLabel: (0, U.Ii)(t),
        }),
        y = i.useMemo(() => {
            let e = h ? K.Qz : K.kL;
            return s()(e, { [K.uS]: "row" !== g, [K.qd]: "row" === g, [K.oI]: "icon" === g }, p);
        }, [p, h, g]);
    return h
        ? (0, r.jsx)("div", { ref: f ? T : void 0, className: y, children: a })
        : (0, r.jsx)(d.DUT, {
              innerRef: f ? T : void 0,
              className: y,
              onClick: n,
              onContextMenu: E,
              "aria-label": W.intl.formatToPlainString(W.t["zLhr9+"], {
                  applicationName: A,
                  applicationDescription: I,
              }),
              children: (0, r.jsx)(d.M1G, { children: a }),
          });
}
function Q(e) {
    let { application: t, imageStyle: n, children: a } = e,
        { name: o, iconURL: l } = i.useMemo(() => (0, U.X2)(t, { fakeAppIconURL: $ }), [t]);
    return (0, r.jsx)(c.m, {
        __unsupportedReactNodeAsText: o,
        children: (0, r.jsxs)("div", {
            className: s()(K.zc, n),
            children: [(0, r.jsx)(j.A, { src: l, className: K.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), a],
        }),
    });
}
function J(e) {
    let {
            application: t,
            look: n,
            imageStyle: a,
            enableVideoBanner: o,
            disableBannerFadeIn: l,
            children: c,
            overrideImageUrl: _,
            showsPromoted: h,
        } = e,
        { iconURL: p, name: E, description: A } = i.useMemo(() => (0, U.X2)(t, { fakeAppIconURL: $ }), [t]),
        I = i.useMemo(() => (null == A ? null : (0, F.SD)(A)), [A]),
        T = (0, N.Ay)(p, ""),
        [y, S] = i.useState(!1),
        C = i.useCallback(() => {
            !0 === o && S(!0);
        }, [o]),
        b = h || (0, U.NO)(t),
        R = "large_banner" === n || "medium_banner" === n,
        O = i.useCallback(() => S(!1), []),
        D = (0, u.bG)([g.A, x.A], () => g.A.inDevModeForApplication(t.id) || x.A.inTestModeForApplication(t.id), [
            t.id,
        ]),
        L = (0, U.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R
                ? (0, r.jsxs)("div", {
                      onMouseEnter: C,
                      onFocus: C,
                      onMouseLeave: O,
                      onBlur: O,
                      className: s()(K.zK, { [K.i2]: "medium_banner" === n, [K.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: a,
                              children: (0, r.jsx)(en, {
                                  application: t,
                                  fallbackColor: T,
                                  showVideo: y,
                                  disableFadeIn: l,
                                  overrideImageUrl: _,
                              }),
                          }),
                          D || b || L !== f.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: K.YN,
                                    children: [
                                        b &&
                                            (0, r.jsx)("div", {
                                                className: K.Ag,
                                                children: (0, r.jsx)(d.Heading, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: W.intl.string(W.t["/eVltv"]),
                                                }),
                                            }),
                                        D && (0, r.jsx)(ee, {}),
                                        L !== f.Hr.NONE && (0, r.jsx)(v.A, { labelType: L }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: K.Re, children: c }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: s()(K.TD, { [K.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(j.A, {
                        src: p,
                        className: s()(K.Kk, { [K.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: K.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: K.mD,
                                children: [
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: E,
                                    }),
                                    !R && b
                                        ? (0, r.jsx)("div", {
                                              className: K.nb,
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: W.intl.string(W.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(et, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: I,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: K.ek }) : null,
                ],
            }),
        ],
    });
}
function ee() {
    return (0, r.jsx)(c.m, {
        text: W.intl.string(W.t.CfTySQ),
        children: (0, r.jsx)("div", { className: K.hh, children: (0, r.jsx)(P.A, { className: K.bB }) }),
    });
}
function et(e) {
    let { application: t } = e,
        n = w.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, U.Cx)(t);
    if (null == i || !(0, U.$B)(t)) return null;
    let a = (0, T.l$)(t, i);
    return null == a
        ? null
        : (0, r.jsx)(c.m, {
              __unsupportedReactNodeAsText: a,
              children: (0, r.jsx)("img", { className: K.io, alt: a, src: z }),
          });
}
function en(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: o } = e;
    if (null != o)
        return (0, r.jsx)("img", { src: o, alt: (0, U.$B)(t) ? t.name : "", className: s()(K._e, { [K.cG]: a }) });
    if ((0, U.$B)(t)) {
        if ((0, U.Ag)(t)) return (0, r.jsx)(er, { application: t, showVideo: i, disableFadeIn: a });
        if (null != t.bot) return (0, r.jsx)(ei, { bot: t.bot, fallbackColor: n, disableFadeIn: a });
    }
    return (0, r.jsx)(ea, { fallbackColor: n, disableFadeIn: a });
}
function er(e) {
    let { application: t, showVideo: n, disableFadeIn: a } = e,
        o = (0, y.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        l = i.useMemo(() => {
            let e = (0, U.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, I.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [u, c] = i.useState(n);
    i.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = s()(K._e, { [K.cG]: a });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l && u
                ? (0, r.jsx)("div", {
                      className: K.SF,
                      children: (0, r.jsx)("div", {
                          className: s()(K.T0, { [K.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(R.A, {
                              src: l,
                              mediaLayoutType: Y.dG.MOSAIC,
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
function ei(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, u.bG)([p.A], () => p.A.useReducedMotion),
        o = (0, M.z)({ id: t.id, banner: t.banner, canAnimate: !a, size: 600 });
    return null == o
        ? (0, r.jsx)(ea, { fallbackColor: n, disableFadeIn: i })
        : (0, r.jsx)("img", { src: o, alt: "", className: s()(K._e, { [K.cG]: i }) });
}
function ea(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: s()(K._e, { [K.cG]: n }), style: { backgroundColor: t } });
}
function es(e) {
    let { application: t, sectionName: n, resultsPosition: r, query: a, installOnDemand: s, location: o } = e,
        { pushHistory: l } = (0, G.uM)(),
        { friends: u } = (0, A.A)(t);
    return {
        onClickAppCard: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, C.zV)(H.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: r,
                        source: k.A.entrypoint(),
                        promotional_label: (0, U.Ii)(t),
                        location: o,
                        query: a,
                        num_friends_who_play: u.length,
                    }),
                    l({ type: G.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n });
            },
            [t, s, o, l, a, r, n, u],
        ),
    };
}
function eo(e) {
    let { onClickAppCard: t } = es(e);
    return (0, r.jsx)(X, { ...e, onClick: t });
}
function el(e) {
    let {
        context: t,
        application: n,
        location: a,
        sectionName: s,
        isOneClickCTA: o,
        fetchesApplication: l = !0,
        ...c
    } = e;
    if (!(0, U.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let _ = i.useId(),
        [f, h, p] = (0, u.yK)([E.Ay, O.A], () => [
            E.Ay.isLaunchingActivity(),
            E.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            O.A.isLaunchingFrame(n.id),
        ]),
        g = (null != h && h.isLaunching && h.componentId === _) || p,
        {
            onActivityItemSelected: A,
            activityAction: I,
            buttonVariant: y,
            buttonText: S,
        } = (0, F.dn)({
            context: t,
            application: n,
            location: a,
            sectionName: s,
            launchingComponentId: _,
            fetchesApplication: l,
        });
    return I === T.o6.START || I === T.o6.JOIN
        ? o
            ? (0, r.jsx)(X, {
                  ...c,
                  sectionName: s,
                  application: n,
                  onClick: A,
                  disabled: f || p,
                  enableVideoBanner: !g,
                  children: g ? (0, r.jsx)(d.y$y, { type: d.y$y.Type.PULSING_ELLIPSIS, className: K.u1 }) : null,
              })
            : (0, r.jsx)(eo, { ...c, context: t, sectionName: s, application: n, location: a })
        : (0, r.jsx)(X, {
              ...c,
              sectionName: s,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: K.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: K.BC,
                  children: (0, r.jsx)(d.Button, {
                      type: "submit",
                      size: "md",
                      variant: y,
                      disabled: f || p,
                      onClick: A,
                      "aria-label": W.intl.formatToPlainString(W.t["XjP/R+"], {
                          buttonText: S,
                          applicationName: n.name,
                      }),
                      loading: g,
                      text: S,
                  }),
              }),
          });
}
