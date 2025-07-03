(n.d(t, {
    M: () => S,
    M4: () => T,
    WS: () => N,
    t4: () => C
}),
    n(388685),
    n(953529));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(350810),
    c = n(607070),
    d = n(70097),
    u = n(266454),
    m = n(605236),
    p = n(765585),
    g = n(930153),
    h = n(822857),
    f = n(622562),
    b = n(937860),
    x = n(921944),
    _ = n(973792),
    E = n(447489),
    j = n(484885);
let C = () => (0, g.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    O = {
        discover: l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    S = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: i } = e,
            s = (0, u.Nj)(l.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: a } = (0, h.WX)({ location: 'virtual_currency_onboarding_coachmark' }),
            o = O[t],
            c = (0, u.Nj)(o),
            d = a && s && n && !c,
            p = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, u.Q3)(O[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? x.L.TAKE_ACTION : x.L.USER_DISMISS,
                            groupName: x.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [g, f] = r.useState(!1);
        return (
            r.useEffect(() => {
                d ? g || ((0, m.kk)(o, { groupName: x.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== i && i(), f(!0)) : g && f(!1);
            }, [d, i, g, o]),
            {
                shouldShow: g,
                closeCoachmarkIfOpen: p
            }
        );
    },
    v = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
            r = void 0 !== t ? t.animated : j.Z,
            l = void 0 !== t ? t.static : E.Z;
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
                          src: j.Z,
                          type: 'video/webm'
                      }),
                      (0, i.jsx)('img', {
                          src: E.Z,
                          className: _.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    T = (e) => {
        let { titleText: t, descriptionText: n, ctaText: r, onCtaClick: s, onClose: o, customIconSrcs: c, position: d = 'right', align: u = 'bottom' } = e;
        return (0, i.jsx)(p.Z, {
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
            dismissIcon: (0, i.jsx)(b.s, {}),
            onDismissIconClick: o,
            contentClassName: _.container,
            pointerClassName: _.coachmarkPointer,
            tryItButtonColor: a.zxk.Colors.BRAND,
            art: (0, i.jsx)(v, { customIconSrcs: c })
        });
    };
function N(e) {
    let { calculateVisibility: t, children: n, popoutElement: s, positionControlRef: l, targetElementRef: c, defaultCoachmarkAlign: d, disableAutoInvert: u, onGetTargetElementDimensions: m, spacing: p, position: g = 'right' } = e,
        [h, b] = r.useState('bottom' === d),
        [x, _] = r.useState(!0),
        [E, j] = r.useState(String(Date.now())),
        C = (0, o.Z)(),
        O = r.useCallback(
            (e) => {
                let n = t(e);
                n !== x && _(n);
            },
            [x, t]
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
                if (e === h) return;
                (b(e), j(String(Date.now())));
            }
        },
        [h, O, m, u]
    );
    (0, f.fu)({
        onGetElementDimensionsAndBoundingRect: T,
        positionControlRef: l,
        shouldPollPositionOnMount: !0,
        targetElementRef: c
    });
    let N = r.useMemo(() => (u ? (null != d ? d : 'bottom') : h ? 'top' : 'bottom'), [u, d, h]),
        I = x && !C,
        y = r.Children.map(s, (e) => r.cloneElement(e, { align: N }));
    return (0, i.jsx)(a.yRy, {
        autoInvert: !1,
        renderPopout: () => y,
        position: g,
        align: N,
        nudgeAlignIntoViewport: !1,
        shouldShow: I,
        spacing: p,
        positionKey: E,
        animation: a.yRy.Animation.TRANSLATE,
        targetElementRef: c,
        children: () => n
    });
}
