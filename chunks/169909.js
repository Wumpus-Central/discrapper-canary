n.d(t, { Gt: () => eu, Ps: () => ed, r0: () => J, wW: () => em });
var l,
    i = n(627968),
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
    N = n(475743),
    g = n(775602),
    E = n(933958),
    v = n(625929),
    b = n(435582),
    I = n(849269),
    y = n(283488),
    j = n(881343),
    P = n(697675),
    T = n(58149),
    L = n(20015),
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
    F = n(297486),
    G = n(786115),
    z = n(346446),
    $ = n(717048),
    K = n(652215),
    Y = n(838541),
    q = n(985018),
    X = n(666280),
    Z = n(291071),
    Q = n(3697),
    J =
        (((l = {}).ICON = "icon"),
        (l.ROW = "row"),
        (l.NO_BANNER = "no_banner"),
        (l.MEDIUM_BANNER = "medium_banner"),
        (l.LARGE_BANNER = "large_banner"),
        l);
function ee(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: l,
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
        h = (0, N.A)(p) ?? p;
    return (0, i.jsx)(et, {
        application: t,
        onClick: l,
        sectionName: c,
        resultsPosition: d,
        disabled: p,
        tracksImpression: m,
        look: n,
        sectionOverallPosition: u,
        children: (0, i.jsx)(M.A, {
            applicationId: t.id,
            questContent: o.u.APP_LAUNCHER,
            children: (e) =>
                (0, i.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, i.jsx)(en, { application: t, imageStyle: a, children: r })
                            : (0, i.jsx)(el, {
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
            children: l,
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
                    (0, x.jA)(e, (e) => (0, i.jsx)(z.A, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: C, description: N } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]),
        { trackItemImpressionRef: g } = (0, G.A)({
            applicationId: t.id,
            applicationFlags: (0, W.$B)(t) ? c.pG(32, (0, L.K)(t)) : void 0,
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
        ? (0, i.jsx)("div", { ref: u ? g : void 0, className: E, children: l })
        : (0, i.jsx)(m.D, {
              innerRef: u ? g : void 0,
              className: E,
              onClick: n,
              onContextMenu: f,
              "aria-label": q.intl.formatToPlainString(q.t["zLhr9+"], {
                  applicationName: C,
                  applicationDescription: N,
              }),
              children: (0, i.jsx)(p.M, { children: l }),
          });
}
function en(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: s, iconURL: o } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]);
    return (0, i.jsx)(u.m, {
        __unsupportedReactNodeAsText: s,
        children: (0, i.jsxs)("div", {
            className: r()(X.zc, n),
            children: [(0, i.jsx)($.A, { src: o, className: X.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), l],
        }),
    });
}
function el(e) {
    let {
            application: t,
            look: n,
            imageStyle: l,
            enableVideoBanner: s,
            disableBannerFadeIn: o,
            children: c,
            overrideImageUrl: d,
            showsPromoted: u,
        } = e,
        { iconURL: m, name: p, description: h } = a.useMemo(() => (0, W.X2)(t, { fakeAppIconURL: Z }), [t]),
        f = a.useMemo(() => (null == h ? null : (0, F.SD)(h)), [h]),
        x = (0, S.Ay)(m, ""),
        [N, g] = a.useState(!1),
        E = a.useCallback(() => {
            !0 === s && g(!0);
        }, [s]),
        v = u || (0, W.NO)(t),
        b = "large_banner" === n || "medium_banner" === n,
        I = a.useCallback(() => g(!1), []),
        y = (0, k.u)(t.id),
        j = (0, W.fl)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b
                ? (0, i.jsxs)("div", {
                      onMouseEnter: E,
                      onFocus: E,
                      onMouseLeave: I,
                      onBlur: I,
                      className: r()(X.zK, { [X.i2]: "medium_banner" === n, [X.ir]: "large_banner" === n }),
                      children: [
                          (0, i.jsx)("span", {
                              className: l,
                              children: (0, i.jsx)(es, {
                                  application: t,
                                  fallbackColor: x,
                                  showVideo: N,
                                  disableFadeIn: o,
                                  overrideImageUrl: d,
                              }),
                          }),
                          y || v || j !== C.Hr.NONE
                              ? (0, i.jsxs)("div", {
                                    className: X.YN,
                                    children: [
                                        v &&
                                            (0, i.jsx)("div", {
                                                className: X.Ag,
                                                children: (0, i.jsx)(_.D, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: q.intl.string(q.t["/eVltv"]),
                                                }),
                                            }),
                                        y && (0, i.jsx)(ei, {}),
                                        j !== C.Hr.NONE && (0, i.jsx)(P.A, { labelType: j }),
                                    ],
                                })
                              : null,
                          (0, i.jsx)("div", { className: X.Re, children: c }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: r()(X.TD, { [X.Ne]: "row" === n }),
                children: [
                    (0, i.jsx)($.A, {
                        src: m,
                        className: r()(X.Kk, { [X.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, i.jsxs)("div", {
                        className: X.eV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: X.mD,
                                children: [
                                    (0, i.jsx)(_.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: p,
                                    }),
                                    !b && v
                                        ? (0, i.jsx)("div", {
                                              className: X.nb,
                                              children: (0, i.jsx)(A.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: q.intl.string(q.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, i.jsx)(ea, { application: t }),
                                ],
                            }),
                            (0, i.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: f,
                            }),
                        ],
                    }),
                    "row" === n ? (0, i.jsx)("div", { className: X.ek }) : null,
                ],
            }),
        ],
    });
}
function ei() {
    return (0, i.jsx)(u.m, {
        text: q.intl.string(q.t.CfTySQ),
        children: (0, i.jsx)("div", { className: X.hh, children: (0, i.jsx)(U.A, { className: X.bB }) }),
    });
}
function ea(e) {
    let { application: t } = e,
        n = D.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let l = (0, W.Cx)(t);
    if (null == l || !(0, W.$B)(t)) return null;
    let a = (0, I.l$)(t, l);
    return null == a
        ? null
        : (0, i.jsx)(u.m, {
              __unsupportedReactNodeAsText: a,
              children: (0, i.jsx)("img", { className: X.io, alt: a, src: Q }),
          });
}
function es(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: a, overrideImageUrl: s } = e;
    if (null != s)
        return (0, i.jsx)("img", { src: s, alt: (0, W.$B)(t) ? t.name : "", className: r()(X._e, { [X.cG]: a }) });
    if ((0, W.$B)(t)) {
        if ((0, W.Ag)(t)) return (0, i.jsx)(er, { application: t, showVideo: l, disableFadeIn: a });
        if (null != t.bot) return (0, i.jsx)(eo, { bot: t.bot, fallbackColor: n, disableFadeIn: a });
    }
    return (0, i.jsx)(ec, { fallbackColor: n, disableFadeIn: a });
}
function er(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        s = (0, y.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        o = a.useMemo(() => {
            let e = (0, W.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, b.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [c, d] = a.useState(n);
    a.useEffect(() => {
        n && d(!0);
    }, [n]);
    let u = r()(X._e, { [X.cG]: l });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && c
                ? (0, i.jsx)("div", {
                      className: X.SF,
                      children: (0, i.jsx)("div", {
                          className: r()(X.T0, { [X.Q]: !n }),
                          onAnimationEnd: () => (n ? null : d(!1)),
                          children: (0, i.jsx)(R.A, {
                              src: o,
                              mediaLayoutType: Y.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, i.jsx)(j.A, {
                imageBackground: s,
                applicationName: t.name,
                imageClassName: u,
                imageNotFoundClassName: u,
            }),
        ],
    });
}
function eo(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: l } = e,
        a = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        s = (0, H.z)({ id: t.id, banner: t.banner, canAnimate: !a, size: 600 });
    return null == s
        ? (0, i.jsx)(ec, { fallbackColor: n, disableFadeIn: l })
        : (0, i.jsx)("img", { src: s, alt: "", className: r()(X._e, { [X.cG]: l }) });
}
function ec(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, i.jsx)("div", { className: r()(X._e, { [X.cG]: n }), style: { backgroundColor: t } });
}
function ed(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: s, location: r } = e,
        { pushHistory: o } = (0, B.uM)(),
        { friends: c } = (0, v.A)(t);
    return {
        onClickAppCard: a.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, T.zV)(K.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: V.A.entrypoint(),
                        promotional_label: (0, W.Ii)(t),
                        location: r,
                        query: i,
                        num_friends_who_play: c.length,
                    }),
                    o({ type: B.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n });
            },
            [t, s, r, o, i, l, n, c],
        ),
    };
}
function eu(e) {
    let { onClickAppCard: t } = ed(e);
    return (0, i.jsx)(ee, { ...e, onClick: t });
}
function em(e) {
    let {
        context: t,
        application: n,
        location: l,
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
            buttonVariant: N,
            buttonText: g,
        } = (0, F.dn)({
            context: t,
            application: n,
            location: l,
            sectionName: s,
            launchingComponentId: u,
            fetchesApplication: o,
        });
    return C === I.o6.START || C === I.o6.JOIN
        ? r
            ? (0, i.jsx)(ee, {
                  ...c,
                  sectionName: s,
                  application: n,
                  onClick: x,
                  disabled: m || _,
                  enableVideoBanner: !A,
                  children: A ? (0, i.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS, className: X.u1 }) : null,
              })
            : (0, i.jsx)(eu, { ...c, context: t, sectionName: s, application: n, location: l })
        : (0, i.jsx)(ee, {
              ...c,
              sectionName: s,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: X.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, i.jsx)("div", {
                  className: X.BC,
                  children: (0, i.jsx)(f.$, {
                      type: "submit",
                      size: "md",
                      variant: N,
                      disabled: m || _,
                      onClick: x,
                      "aria-label": q.intl.formatToPlainString(q.t["XjP/R+"], {
                          buttonText: g,
                          applicationName: n.name,
                      }),
                      loading: A,
                      text: g,
                  }),
              }),
          });
}
