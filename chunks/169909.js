n.d(t, { Gt: () => eu, Ps: () => ed, r0: () => J, wW: () => em });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(696292),
    c = n(136722),
    d = n(311907),
    u = n(990078),
    m = n(939249),
    p = n(247928),
    _ = n(534514),
    A = n(834730),
    h = n(289873),
    f = n(821609),
    x = n(442433),
    C = n(155718),
    g = n(475743),
    N = n(775602),
    E = n(933958),
    b = n(625929),
    I = n(435582),
    v = n(849269),
    y = n(283488),
    j = n(881343),
    P = n(697675),
    L = n(58149),
    T = n(20015),
    S = n(654107),
    R = n(607470),
    O = n(91242),
    k = n(977445),
    M = n(932413),
    w = n(611010),
    D = n(287809),
    U = n(168936),
    H = n(486020),
    V = n(989837),
    W = n(735991),
    B = n(485878),
    G = n(297486),
    F = n(786115),
    z = n(346446),
    $ = n(717048),
    K = n(652215),
    q = n(838541),
    Y = n(985018),
    X = n(666280),
    Z = n(291071),
    Q = n(3697),
    J =
        (((i = {}).ICON = "icon"),
        (i.ROW = "row"),
        (i.NO_BANNER = "no_banner"),
        (i.MEDIUM_BANNER = "medium_banner"),
        (i.LARGE_BANNER = "large_banner"),
        i);
function ee(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: i,
            imageStyle: a,
            enableVideoBanner: s = !0,
            children: r,
            sectionName: c,
            resultsPosition: d,
            sectionOverallPosition: u,
            tracksImpression: m = !0,
            disabled: p = !1,
            overrideImageUrl: _,
            showsPromoted: A,
        } = e,
        h = (0, g.A)(p) ?? p;
    return (0, l.jsx)(et, {
        application: t,
        onClick: i,
        sectionName: c,
        resultsPosition: d,
        disabled: p,
        tracksImpression: m,
        look: n,
        sectionOverallPosition: u,
        children: (0, l.jsx)(M.A, {
            applicationId: t.id,
            questContent: o.u.APP_LAUNCHER,
            children: (e) =>
                (0, l.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, l.jsx)(en, { application: t, imageStyle: a, children: r })
                            : (0, l.jsx)(ei, {
                                  application: t,
                                  look: n,
                                  imageStyle: a,
                                  enableVideoBanner: s,
                                  disableBannerFadeIn: h !== p,
                                  overrideImageUrl: _,
                                  showsPromoted: A,
                                  children: r,
                              }),
                }),
        }),
    });
}
function et(e) {
    let {
            application: t,
            onClick: n,
            children: i,
            sectionName: s,
            resultsPosition: o,
            sectionOverallPosition: d,
            tracksImpression: u,
            disabled: _,
            containerStyle: A,
            look: h,
        } = e,
        f = a.useCallback(
            (e) => {
                if ((0, W.$B)(t)) {
                    let n = t instanceof w.Ay ? t : w.Ay.createFromServer(t);
                    (0, x.jA)(e, (e) => (0, l.jsx)(z.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: C, description: g } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]),
        { trackItemImpressionRef: N } = (0, F.A)({
            applicationId: t.id,
            applicationFlags: (0, W.$B)(t) ? c.pG(32, (0, T.K)(t)) : void 0,
            sectionName: s,
            sectionPosition: o,
            sectionOverallPosition: d,
            promotionalLabel: (0, W.Ii)(t),
        }),
        E = a.useMemo(() => {
            let e = _ ? X.Qz : X.kL;
            return r()(e, { [X.uS]: "row" !== h, [X.qd]: "row" === h, [X.oI]: "icon" === h }, A);
        }, [A, _, h]);
    return _
        ? (0, l.jsx)("div", { ref: u ? N : void 0, className: E, children: i })
        : (0, l.jsx)(m.D, {
              innerRef: u ? N : void 0,
              className: E,
              onClick: n,
              onContextMenu: f,
              "aria-label": Y.intl.formatToPlainString(Y.t["zLhr9+"], {
                  applicationName: C,
                  applicationDescription: g,
              }),
              children: (0, l.jsx)(p.M, { children: i }),
          });
}
function en(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: s, iconURL: o } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]);
    return (0, l.jsx)(u.m, {
        __unsupportedReactNodeAsText: s,
        children: (0, l.jsxs)("div", {
            className: r()(X.zc, n),
            children: [(0, l.jsx)($.A, { src: o, className: X.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), i],
        }),
    });
}
function ei(e) {
    let {
            application: t,
            look: n,
            imageStyle: i,
            enableVideoBanner: s,
            disableBannerFadeIn: o,
            children: c,
            overrideImageUrl: d,
            showsPromoted: u,
        } = e,
        { iconURL: m, name: p, description: h } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]),
        f = a.useMemo(() => (null == h ? null : (0, G.SD)(h)), [h]),
        x = (0, S.Ay)(m, ""),
        [g, N] = a.useState(!1),
        E = a.useCallback(() => {
            !0 === s && N(!0);
        }, [s]),
        b = u || (0, W.NO)(t),
        I = "large_banner" === n || "medium_banner" === n,
        v = a.useCallback(() => N(!1), []),
        y = (0, k.u)(t.id),
        j = (0, W.fl)(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            I
                ? (0, l.jsxs)("div", {
                      onMouseEnter: E,
                      onFocus: E,
                      onMouseLeave: v,
                      onBlur: v,
                      className: r()(X.zK, { [X.i2]: "medium_banner" === n, [X.ir]: "large_banner" === n }),
                      children: [
                          (0, l.jsx)("span", {
                              className: i,
                              children: (0, l.jsx)(es, {
                                  application: t,
                                  fallbackColor: x,
                                  showVideo: g,
                                  disableFadeIn: o,
                                  overrideImageUrl: d,
                              }),
                          }),
                          y || b || j !== C.Hr.NONE
                              ? (0, l.jsxs)("div", {
                                    className: X.YN,
                                    children: [
                                        b &&
                                            (0, l.jsx)("div", {
                                                className: X.Ag,
                                                children: (0, l.jsx)(_.D, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: Y.intl.string(Y.t["/eVltv"]),
                                                }),
                                            }),
                                        y && (0, l.jsx)(el, {}),
                                        j !== C.Hr.NONE && (0, l.jsx)(P.A, { labelType: j }),
                                    ],
                                })
                              : null,
                          (0, l.jsx)("div", { className: X.Re, children: c }),
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: r()(X.TD, { [X.Ne]: "row" === n }),
                children: [
                    (0, l.jsx)($.A, {
                        src: m,
                        className: r()(X.Kk, { [X.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, l.jsxs)("div", {
                        className: X.eV,
                        children: [
                            (0, l.jsxs)("div", {
                                className: X.mD,
                                children: [
                                    (0, l.jsx)(_.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: p,
                                    }),
                                    !I && b
                                        ? (0, l.jsx)("div", {
                                              className: X.nb,
                                              children: (0, l.jsx)(A.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: Y.intl.string(Y.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(ea, { application: t }),
                                ],
                            }),
                            (0, l.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: f,
                            }),
                        ],
                    }),
                    "row" === n ? (0, l.jsx)("div", { className: X.ek }) : null,
                ],
            }),
        ],
    });
}
function el() {
    return (0, l.jsx)(u.m, {
        text: Y.intl.string(Y.t.CfTySQ),
        children: (0, l.jsx)("div", { className: X.hh, children: (0, l.jsx)(U.A, { className: X.bB }) }),
    });
}
function ea(e) {
    let { application: t } = e,
        n = D.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, W.Cx)(t);
    if (null == i || !(0, W.$B)(t)) return null;
    let a = (0, v.l$)(t, i);
    return null == a
        ? null
        : (0, l.jsx)(u.m, {
              __unsupportedReactNodeAsText: a,
              children: (0, l.jsx)("img", { className: X.io, alt: a, src: Q }),
          });
}
function es(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: a, overrideImageUrl: s } = e;
    if (null != s)
        return (0, l.jsx)("img", { src: s, alt: (0, W.$B)(t) ? t.name : "", className: r()(X._e, { [X.cG]: a }) });
    if ((0, W.$B)(t)) {
        if ((0, W.Ag)(t)) return (0, l.jsx)(er, { application: t, showVideo: i, disableFadeIn: a });
        if (null != t.bot) return (0, l.jsx)(eo, { bot: t.bot, fallbackColor: n, disableFadeIn: a });
    }
    return (0, l.jsx)(ec, { fallbackColor: n, disableFadeIn: a });
}
function er(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        s = (0, y.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        o = a.useMemo(() => {
            let e = (0, W.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, I.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, d] = a.useState(n);
    a.useEffect(() => {
        n && d(!0);
    }, [n]);
    let u = r()(X._e, { [X.cG]: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != o && c
                ? (0, l.jsx)("div", {
                      className: X.SF,
                      children: (0, l.jsx)("div", {
                          className: r()(X.T0, { [X.Q]: !n }),
                          onAnimationEnd: () => (n ? null : d(!1)),
                          children: (0, l.jsx)(R.A, {
                              src: o,
                              mediaLayoutType: q.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, l.jsx)(j.A, {
                imageBackground: s,
                applicationName: t.name,
                imageClassName: u,
                imageNotFoundClassName: u,
            }),
        ],
    });
}
function eo(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        a = (0, d.bG)([N.A], () => N.A.useReducedMotion),
        s = (0, H.z)({ id: t.id, banner: t.banner, canAnimate: !a, size: 600 });
    return null == s
        ? (0, l.jsx)(ec, { fallbackColor: n, disableFadeIn: i })
        : (0, l.jsx)("img", { src: s, alt: "", className: r()(X._e, { [X.cG]: i }) });
}
function ec(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, l.jsx)("div", { className: r()(X._e, { [X.cG]: n }), style: { backgroundColor: t } });
}
function ed(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: s, location: r } = e,
        { pushHistory: o } = (0, B.uM)(),
        { friends: c } = (0, b.A)(t);
    return {
        onClickAppCard: a.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, L.zV)(K.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: V.A.entrypoint(),
                        promotional_label: (0, W.Ii)(t),
                        location: r,
                        query: l,
                        num_friends_who_play: c.length,
                    }),
                    o({ type: B.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n });
            },
            [t, s, r, o, l, i, n, c],
        ),
    };
}
function eu(e) {
    let { onClickAppCard: t } = ed(e);
    return (0, l.jsx)(ee, { ...e, onClick: t });
}
function em(e) {
    let {
        context: t,
        application: n,
        location: i,
        sectionName: s,
        isOneClickCTA: r,
        fetchesApplication: o = !0,
        ...c
    } = e;
    if (!(0, W.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let u = a.useId(),
        [m, p, _] = (0, d.yK)([E.Ay, O.A], () => [
            E.Ay.isLaunchingActivity(),
            E.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            O.A.isLaunchingFrame(n.id),
        ]),
        A = (null != p && p.isLaunching && p.componentId === u) || _,
        {
            onActivityItemSelected: x,
            activityAction: C,
            buttonVariant: g,
            buttonText: N,
        } = (0, G.dn)({
            context: t,
            application: n,
            location: i,
            sectionName: s,
            launchingComponentId: u,
            fetchesApplication: o,
        });
    return C === v.o6.START || C === v.o6.JOIN
        ? r
            ? (0, l.jsx)(ee, {
                  ...c,
                  sectionName: s,
                  application: n,
                  onClick: x,
                  disabled: m || _,
                  enableVideoBanner: !A,
                  children: A ? (0, l.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS, className: X.u1 }) : null,
              })
            : (0, l.jsx)(eu, { ...c, context: t, sectionName: s, application: n, location: i })
        : (0, l.jsx)(ee, {
              ...c,
              sectionName: s,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: X.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, l.jsx)("div", {
                  className: X.BC,
                  children: (0, l.jsx)(f.$, {
                      type: "submit",
                      size: "md",
                      variant: g,
                      disabled: m || _,
                      onClick: x,
                      "aria-label": Y.intl.formatToPlainString(Y.t["XjP/R+"], {
                          buttonText: N,
                          applicationName: n.name,
                      }),
                      loading: A,
                      text: N,
                  }),
              }),
          });
}
