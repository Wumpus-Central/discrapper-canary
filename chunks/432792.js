n.d(t, {
    M: () => x,
    M4: () => P,
    WS: () => I,
    t4: () => C,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(755721),
    s = n(481060),
    c = n(350810),
    u = n(607070),
    d = n(70097),
    p = n(266454),
    f = n(605236),
    h = n(765585),
    g = n(930153),
    m = n(822857),
    b = n(622562),
    O = n(937860),
    _ = n(921944),
    y = n(557766),
    v = n(447489),
    j = n(484885);
let C = () => (0, g.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
    E = {
        discover: o.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK,
    },
    x = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            l = (0, p.Nj)(o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: a } = (0, m.WX)({ location: "virtual_currency_onboarding_coachmark" }),
            s = E[t],
            c = (0, p.Nj)(s),
            u = a && l && n && !c,
            d = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "CLOSE";
                    c ||
                        (0, p.Q3)(E[t], {
                            forceTrack: !0,
                            dismissAction: "CTA_CLICK" === e ? _.L.TAKE_ACTION : _.L.USER_DISMISS,
                            groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING,
                        });
                },
                [c, t],
            ),
            [h, g] = i.useState(!1);
        return (
            i.useEffect(() => {
                u
                    ? h || ((0, f.kk)(s, { groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== r && r(), g(!0))
                    : h && g(!1);
            }, [u, r, h, s]),
            {
                shouldShow: h,
                closeCoachmarkIfOpen: d,
            }
        );
    },
    S = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            i = void 0 !== t ? t.animated : j.Z,
            o = void 0 !== t ? t.static : v.Z;
        return n || null == i
            ? (0, r.jsx)("img", {
                  src: o,
                  className: y.orbAsset,
                  alt: "Orb",
              })
            : (0, r.jsxs)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: y.orbAsset,
                  children: [
                      (0, r.jsx)("source", {
                          src: j.Z,
                          type: "video/webm",
                      }),
                      (0, r.jsx)("img", {
                          src: v.Z,
                          className: y.orbAsset,
                          alt: "Orb",
                      }),
                  ],
              });
    },
    P = (e) => {
        let {
            titleText: t,
            descriptionText: n,
            ctaText: i,
            onCtaClick: l,
            onClose: c,
            customIconSrcs: u,
            position: d = "right",
            align: p = "bottom",
        } = e;
        return (0, r.jsx)(h.Z, {
            "data-migration-pending": !0,
            dismissibleContent: o.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
            inlineArt: !0,
            tryItText: i,
            onTryFeature: l,
            header: (0, r.jsx)(s.X6q, {
                className: y.title,
                variant: "heading-md/bold",
                children: t,
            }),
            body: (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                className: y.description,
                children: n,
            }),
            position: d,
            align: p,
            hideDismissButton: !0,
            dismissIcon: (0, r.jsx)(O.s, {}),
            onDismissIconClick: c,
            contentClassName: y.container,
            pointerClassName: y.coachmarkPointer,
            tryItButtonColor: a.zx.Colors.BRAND,
            art: (0, r.jsx)(S, { customIconSrcs: u }),
        });
    };
function I(e) {
    let {
            calculateVisibility: t,
            children: n,
            popoutElement: l,
            positionControlRef: o,
            targetElementRef: a,
            defaultCoachmarkAlign: u,
            disableAutoInvert: d,
            onGetTargetElementDimensions: p,
            spacing: f,
            position: h = "right",
        } = e,
        [g, m] = i.useState("bottom" === u),
        [O, _] = i.useState(!0),
        [y, v] = i.useState(String(Date.now())),
        j = (0, c.Z)(),
        C = i.useCallback(
            (e) => {
                let n = t(e);
                n !== O && _(n);
            },
            [O, t],
        ),
        E = a.current,
        x = i.useCallback(() => {
            null != o && null != o.current && o.current.updateElementPosition();
        }, [o]);
    i.useEffect(
        () => (
            null != E && E.ownerDocument.addEventListener("scroll", x, !0),
            () => {
                null != E && E.ownerDocument.removeEventListener("scroll", x, !0);
            }
        ),
        [E, x],
    );
    let S = i.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: r, hasElementPositionChanged: i } = e;
            if (
                (null != p &&
                    p({
                        height: t,
                        width: n,
                    }),
                null != r)
            ) {
                if ((C(r), i && v(String(Date.now())), d)) return;
                let e = r.top < window.innerHeight / 2;
                if (e === g) return;
                m(e), v(String(Date.now()));
            }
        },
        [g, C, p, d],
    );
    (0, b.fu)({
        onGetElementDimensionsAndBoundingRect: S,
        positionControlRef: o,
        shouldPollPositionOnMount: !0,
        targetElementRef: a,
    });
    let P = i.useMemo(() => (d ? (null != u ? u : "bottom") : g ? "top" : "bottom"), [d, u, g]),
        I = O && !j,
        N = i.Children.map(l, (e) => i.cloneElement(e, { align: P }));
    return (0, r.jsx)(s.yRy, {
        autoInvert: !1,
        renderPopout: () => N,
        position: h,
        align: P,
        nudgeAlignIntoViewport: !1,
        shouldShow: I,
        spacing: f,
        positionKey: y,
        animation: s.yRy.Animation.TRANSLATE,
        targetElementRef: a,
        children: () => n,
    });
}
