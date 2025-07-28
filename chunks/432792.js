(n.d(t, {
    M: () => S,
    M4: () => I,
    WS: () => P,
    t4: () => j
}),
    n(388685),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    a = n(755721),
    s = n(481060),
    c = n(350810),
    u = n(607070),
    d = n(70097),
    h = n(266454),
    p = n(605236),
    f = n(765585),
    g = n(930153),
    m = n(822857),
    b = n(622562),
    _ = n(937860),
    O = n(921944),
    y = n(973792),
    C = n(447489),
    v = n(484885);
let j = () => (0, g.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    E = {
        discover: o.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: o.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    S = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: r } = e,
            l = (0, h.Nj)(o.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: a } = (0, m.WX)({ location: 'virtual_currency_onboarding_coachmark' }),
            s = E[t],
            c = (0, h.Nj)(s),
            u = a && l && n && !c,
            d = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, h.Q3)(E[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? O.L.TAKE_ACTION : O.L.USER_DISMISS,
                            groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [f, g] = i.useState(!1);
        return (
            i.useEffect(() => {
                u ? f || ((0, p.kk)(s, { groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== r && r(), g(!0)) : f && g(!1);
            }, [u, r, f, s]),
            {
                shouldShow: f,
                closeCoachmarkIfOpen: d
            }
        );
    },
    x = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            i = void 0 !== t ? t.animated : v.Z,
            o = void 0 !== t ? t.static : C.Z;
        return n || null == i
            ? (0, r.jsx)('img', {
                  src: o,
                  className: y.orbAsset,
                  alt: 'Orb'
              })
            : (0, r.jsxs)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: y.orbAsset,
                  children: [
                      (0, r.jsx)('source', {
                          src: v.Z,
                          type: 'video/webm'
                      }),
                      (0, r.jsx)('img', {
                          src: C.Z,
                          className: y.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    I = (e) => {
        let { titleText: t, descriptionText: n, ctaText: i, onCtaClick: l, onClose: c, customIconSrcs: u, position: d = 'right', align: h = 'bottom' } = e;
        return (0, r.jsx)(f.Z, {
            dismissibleContent: o.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
            inlineArt: !0,
            tryItText: i,
            onTryFeature: l,
            header: (0, r.jsx)(s.X6q, {
                className: y.title,
                variant: 'heading-md/bold',
                children: t
            }),
            body: (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: y.description,
                children: n
            }),
            position: d,
            align: h,
            hideDismissButton: !0,
            dismissIcon: (0, r.jsx)(_.s, {}),
            onDismissIconClick: c,
            contentClassName: y.container,
            pointerClassName: y.coachmarkPointer,
            tryItButtonColor: a.zx.Colors.BRAND,
            art: (0, r.jsx)(x, { customIconSrcs: u })
        });
    };
function P(e) {
    let { calculateVisibility: t, children: n, popoutElement: l, positionControlRef: o, targetElementRef: a, defaultCoachmarkAlign: u, disableAutoInvert: d, onGetTargetElementDimensions: h, spacing: p, position: f = 'right' } = e,
        [g, m] = i.useState('bottom' === u),
        [_, O] = i.useState(!0),
        [y, C] = i.useState(String(Date.now())),
        v = (0, c.Z)(),
        j = i.useCallback(
            (e) => {
                let n = t(e);
                n !== _ && O(n);
            },
            [_, t]
        ),
        E = a.current,
        S = i.useCallback(() => {
            null != o && null != o.current && o.current.updateElementPosition();
        }, [o]);
    i.useEffect(
        () => (
            null != E && E.ownerDocument.addEventListener('scroll', S, !0),
            () => {
                null != E && E.ownerDocument.removeEventListener('scroll', S, !0);
            }
        ),
        [E, S]
    );
    let x = i.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: r, hasElementPositionChanged: i } = e;
            if (
                (null != h &&
                    h({
                        height: t,
                        width: n
                    }),
                null != r)
            ) {
                if ((j(r), i && C(String(Date.now())), d)) return;
                let e = r.top < window.innerHeight / 2;
                if (e === g) return;
                (m(e), C(String(Date.now())));
            }
        },
        [g, j, h, d]
    );
    (0, b.fu)({
        onGetElementDimensionsAndBoundingRect: x,
        positionControlRef: o,
        shouldPollPositionOnMount: !0,
        targetElementRef: a
    });
    let I = i.useMemo(() => (d ? (null != u ? u : 'bottom') : g ? 'top' : 'bottom'), [d, u, g]),
        P = _ && !v,
        N = i.Children.map(l, (e) => i.cloneElement(e, { align: I }));
    return (0, r.jsx)(s.yRy, {
        autoInvert: !1,
        renderPopout: () => N,
        position: f,
        align: I,
        nudgeAlignIntoViewport: !1,
        shouldShow: P,
        spacing: p,
        positionKey: y,
        animation: s.yRy.Animation.TRANSLATE,
        targetElementRef: a,
        children: () => n
    });
}
