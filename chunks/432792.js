n.d(t, {
    M: () => O,
    M4: () => v,
    WS: () => T,
    t4: () => j
}),
    n(388685),
    n(953529);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(350810),
    c = n(607070),
    d = n(70097),
    u = n(605236),
    m = n(765585),
    g = n(930153),
    p = n(822857),
    h = n(622562),
    f = n(937860),
    b = n(921944),
    _ = n(973792),
    x = n(447489),
    E = n(484885);
let j = () => (0, g.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    C = {
        discover: l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    O = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: i } = e,
            s = (0, u.wE)(l.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: a } = (0, p.WX)({ location: 'virtual_currency_onboarding_coachmark' }),
            o = C[t],
            c = (0, u.wE)(o),
            d = a && s && n && !c,
            m = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, u.EW)(C[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? b.L.TAKE_ACTION : b.L.USER_DISMISS,
                            groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [g, h] = r.useState(!1);
        return (
            r.useEffect(() => {
                d ? g || ((0, u.kk)(o, { groupName: b.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== i && i(), h(!0)) : g && h(!1);
            }, [d, i, g, o]),
            {
                shouldShow: g,
                closeCoachmarkIfOpen: m
            }
        );
    },
    S = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            r = void 0 !== t ? t.animated : E.Z,
            l = void 0 !== t ? t.static : x.Z;
        return n || null == r
            ? (0, i.jsx)('img', {
                  src: l,
                  className: _.orbAsset,
                  alt: 'Orb'
              })
            : (0, i.jsxs)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: _.orbAsset,
                  children: [
                      (0, i.jsx)('source', {
                          src: E.Z,
                          type: 'video/webm'
                      }),
                      (0, i.jsx)('img', {
                          src: x.Z,
                          className: _.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    v = (e) => {
        let { titleText: t, descriptionText: n, ctaText: r, onCtaClick: s, onClose: o, customIconSrcs: c, position: d = 'right', align: u = 'bottom' } = e;
        return (0, i.jsx)(m.Z, {
            dismissibleContent: l.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
            inlineArt: !0,
            tryItText: r,
            onTryFeature: s,
            header: (0, i.jsx)(a.X6q, {
                className: _.title,
                variant: 'heading-md/bold',
                children: t
            }),
            body: (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: _.description,
                children: n
            }),
            position: d,
            align: u,
            hideDismissButton: !0,
            dismissIcon: (0, i.jsx)(f.s, {}),
            onDismissIconClick: o,
            contentClassName: _.container,
            pointerClassName: _.coachmarkPointer,
            tryItButtonColor: a.zxk.Colors.BRAND,
            art: (0, i.jsx)(S, { customIconSrcs: c })
        });
    };
function T(e) {
    let { calculateVisibility: t, children: n, popoutElement: s, positionControlRef: l, targetElementRef: c, defaultCoachmarkAlign: d, disableAutoInvert: u, onGetTargetElementDimensions: m, spacing: g, position: p = 'right' } = e,
        [f, b] = r.useState('bottom' === d),
        [_, x] = r.useState(!0),
        [E, j] = r.useState(String(Date.now())),
        C = (0, o.Z)(),
        O = r.useCallback(
            (e) => {
                let n = t(e);
                n !== _ && x(n);
            },
            [_, t]
        ),
        S = c.current,
        v = r.useCallback(() => {
            null != l && null != l.current && l.current.updateElementPosition();
        }, [l]);
    r.useEffect(
        () => (
            null != S && S.ownerDocument.addEventListener('scroll', v, !0),
            () => {
                null != S && S.ownerDocument.removeEventListener('scroll', v, !0);
            }
        ),
        [S, v]
    );
    let T = r.useCallback(
        (e) => {
            let { height: t, width: n, elementBoundingRect: i, hasElementPositionChanged: r } = e;
            if (
                (null != m &&
                    m({
                        height: t,
                        width: n
                    }),
                null != i)
            ) {
                if ((O(i), r && j(String(Date.now())), u)) return;
                let e = i.top < window.innerHeight / 2;
                if (e === f) return;
                b(e), j(String(Date.now()));
            }
        },
        [f, O, m, u]
    );
    (0, h.fu)({
        onGetElementDimensionsAndBoundingRect: T,
        positionControlRef: l,
        shouldPollPositionOnMount: !0,
        targetElementRef: c
    });
    let I = r.useMemo(() => (u ? (null != d ? d : 'bottom') : f ? 'top' : 'bottom'), [u, d, f]),
        N = _ && !C,
        y = r.Children.map(s, (e) => r.cloneElement(e, { align: I }));
    return (0, i.jsx)(a.yRy, {
        autoInvert: !1,
        renderPopout: () => y,
        position: p,
        align: I,
        nudgeAlignIntoViewport: !1,
        shouldShow: N,
        spacing: g,
        positionKey: E,
        animation: a.yRy.Animation.TRANSLATE,
        targetElementRef: c,
        children: () => n
    });
}
