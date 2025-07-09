(n.d(t, {
    M: () => S,
    M4: () => N,
    WS: () => I,
    t4: () => C
}),
    n(388685),
    n(953529));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(755721),
    o = n(481060),
    c = n(350810),
    d = n(607070),
    u = n(70097),
    m = n(266454),
    p = n(605236),
    g = n(765585),
    h = n(930153),
    f = n(822857),
    b = n(622562),
    x = n(937860),
    _ = n(921944),
    j = n(973792),
    E = n(447489),
    O = n(484885);
let C = () => (0, h.Lk)(document.body.style.getPropertyValue('--custom-app-panels-height'), 56) + 8,
    v = {
        discover: a.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        shop: a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
    },
    S = (e) => {
        let { onboardingCoachmarkType: t, prevCoachmarksDismissed: n = !0, onShowCoachmarkHandler: i } = e,
            s = (0, m.Nj)(a.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
            { enabled: l } = (0, f.WX)({ location: 'virtual_currency_onboarding_coachmark' }),
            o = v[t],
            c = (0, m.Nj)(o),
            d = l && s && n && !c,
            u = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    c ||
                        (0, m.Q3)(v[t], {
                            forceTrack: !0,
                            dismissAction: 'CTA_CLICK' === e ? _.L.TAKE_ACTION : _.L.USER_DISMISS,
                            groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING
                        });
                },
                [c, t]
            ),
            [g, h] = r.useState(!1);
        return (
            r.useEffect(() => {
                d ? g || ((0, p.kk)(o, { groupName: _.R.VIRTUAL_CURRENCY_ONBOARDING }), void 0 !== i && i(), h(!0)) : g && h(!1);
            }, [d, i, g, o]),
            {
                shouldShow: g,
                closeCoachmarkIfOpen: u
            }
        );
    },
    T = (e) => {
        let { customIconSrcs: t } = e,
            n = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            r = void 0 !== t ? t.animated : O.Z,
            a = void 0 !== t ? t.static : E.Z;
        return n || null == r
            ? (0, i.jsx)('img', {
                  src: a,
                  className: j.orbAsset,
                  alt: 'Orb'
              })
            : (0, i.jsxs)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: j.orbAsset,
                  children: [
                      (0, i.jsx)('source', {
                          src: O.Z,
                          type: 'video/webm'
                      }),
                      (0, i.jsx)('img', {
                          src: E.Z,
                          className: j.orbAsset,
                          alt: 'Orb'
                      })
                  ]
              });
    },
    N = (e) => {
        let { titleText: t, descriptionText: n, ctaText: r, onCtaClick: s, onClose: c, customIconSrcs: d, position: u = 'right', align: m = 'bottom' } = e;
        return (0, i.jsx)(g.Z, {
            dismissibleContent: a.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
            inlineArt: !0,
            tryItText: r,
            onTryFeature: s,
            header: (0, i.jsx)(o.X6q, {
                className: j.title,
                variant: 'heading-md/bold',
                children: t
            }),
            body: (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: j.description,
                children: n
            }),
            position: u,
            align: m,
            hideDismissButton: !0,
            dismissIcon: (0, i.jsx)(x.s, {}),
            onDismissIconClick: c,
            contentClassName: j.container,
            pointerClassName: j.coachmarkPointer,
            tryItButtonColor: l.zx.Colors.BRAND,
            art: (0, i.jsx)(T, { customIconSrcs: d })
        });
    };
function I(e) {
    let { calculateVisibility: t, children: n, popoutElement: s, positionControlRef: a, targetElementRef: l, defaultCoachmarkAlign: d, disableAutoInvert: u, onGetTargetElementDimensions: m, spacing: p, position: g = 'right' } = e,
        [h, f] = r.useState('bottom' === d),
        [x, _] = r.useState(!0),
        [j, E] = r.useState(String(Date.now())),
        O = (0, c.Z)(),
        C = r.useCallback(
            (e) => {
                let n = t(e);
                n !== x && _(n);
            },
            [x, t]
        ),
        v = l.current,
        S = r.useCallback(() => {
            null != a && null != a.current && a.current.updateElementPosition();
        }, [a]);
    r.useEffect(
        () => (
            null != v && v.ownerDocument.addEventListener('scroll', S, !0),
            () => {
                null != v && v.ownerDocument.removeEventListener('scroll', S, !0);
            }
        ),
        [v, S]
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
                if ((C(i), r && E(String(Date.now())), u)) return;
                let e = i.top < window.innerHeight / 2;
                if (e === h) return;
                (f(e), E(String(Date.now())));
            }
        },
        [h, C, m, u]
    );
    (0, b.fu)({
        onGetElementDimensionsAndBoundingRect: T,
        positionControlRef: a,
        shouldPollPositionOnMount: !0,
        targetElementRef: l
    });
    let N = r.useMemo(() => (u ? (null != d ? d : 'bottom') : h ? 'top' : 'bottom'), [u, d, h]),
        I = x && !O,
        y = r.Children.map(s, (e) => r.cloneElement(e, { align: N }));
    return (0, i.jsx)(o.yRy, {
        autoInvert: !1,
        renderPopout: () => y,
        position: g,
        align: N,
        nudgeAlignIntoViewport: !1,
        shouldShow: I,
        spacing: p,
        positionKey: j,
        animation: o.yRy.Animation.TRANSLATE,
        targetElementRef: l,
        children: () => n
    });
}
