(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(652141),
    s = n(793030),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(239091),
    p = n(100527),
    f = n(243778),
    g = n(667815),
    m = n(531572),
    b = n(259580),
    _ = n(538445),
    O = n(639777),
    y = n(441536),
    C = n(447908),
    v = n(921944),
    j = n(93841),
    E = n(388032),
    S = n(27053);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { guild: t, tooltipTypes: l, withMargin: P } = e,
        N = i.useMemo(() => (0, C.Z)(t), [t]),
        w = (0, O.Z)(t.id),
        T = i.useCallback(() => {
            (0, y.Z)(t.id, p.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        Z = (0, c.e7)([m.Z], () => {
            var e;
            return null != (e = m.Z.getCountForGuild(t.id)) ? e : 0;
        });
    i.useEffect(() => {
        Z !== t.premiumSubscriberCount && (0, g.v)(t.id, t.premiumSubscriberCount);
    }, [t.id, Z, t.premiumSubscriberCount]);
    let A = Math.min((Z / N) * 100, 100),
        [R, D] = (0, d.q_F)(
            () => ({
                width: Z === t.premiumSubscriberCount ? 'calc('.concat(A, '% - 4px)') : '0%',
                config: {
                    tension: 250,
                    damping: 5,
                    mass: 1
                }
            }),
            'respect-motion-settings',
            [Z, t.premiumSubscriberCount]
        );
    i.useEffect(() => {
        D({ width: 'calc('.concat(A, '% - 4px)') });
    }, [A, D]);
    let L = Z >= N,
        M = i.useRef(null),
        [k, U] = (0, f.US)(l),
        G = (e) =>
            (0, r.jsx)(
                d.P3F,
                I(x({}, e), {
                    'aria-label': void 0,
                    role: 'button',
                    focusProps: {
                        offset: {
                            left: 10,
                            right: 4
                        }
                    },
                    onClick: () => {
                        var t;
                        (null == e || null == (t = e.onClick) || t.call(e), T());
                    },
                    className: o()(S.container, { [S.containerWithMargin]: P }),
                    onContextMenu: (e) => {
                        w &&
                            (0, h.jW)(e, async () => {
                                let { default: e } = await n.e('8570').then(n.bind(n, 651138));
                                return (n) => (0, r.jsx)(e, I(x({}, n), { guild: t }));
                            });
                    },
                    children: (0, r.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, r.jsx)('div', { className: S.progressContainer }),
                            (0, r.jsx)(a.animated.div, {
                                className: o()(S.progress, { [S.progressLow]: A <= 5 }),
                                style: R
                            }),
                            (0, r.jsxs)('div', {
                                className: S.textContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: S.textContentContainer,
                                        children: [
                                            (0, r.jsx)(s.xv, {
                                                className: S.text,
                                                variant: 'text-xs/semibold',
                                                children: E.intl.string(j.default.NI6IhY)
                                            }),
                                            t.premiumSubscriberCount >= N &&
                                                (0, r.jsx)(s.xv, {
                                                    className: S.text,
                                                    variant: 'text-xs/semibold',
                                                    children: '\uD83C\uDF89'
                                                })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: S.textContentContainer,
                                        children: [
                                            (0, r.jsx)(s.xv, {
                                                className: o()(S.text, S.boostCountText),
                                                variant: 'text-xs/semibold',
                                                children: L
                                                    ? E.intl.formatToPlainString(j.default['Ehpq+/'], { appliedBoostCount: Z })
                                                    : E.intl.formatToPlainString(j.default['/rbPDg'], {
                                                          appliedBoostCount: Z,
                                                          maxBoostCount: N
                                                      })
                                            }),
                                            (0, r.jsx)(b.Z, {
                                                width: 12,
                                                height: 12,
                                                direction: b.Z.Directions.RIGHT,
                                                className: o()(S.text, S.boostCountText)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            );
    return null != k
        ? (0, r.jsx)(d.yRy, {
              targetElementRef: M,
              renderPopout: () =>
                  k === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
                      ? (0, r.jsx)(_.Z, {
                            guild: t,
                            markAsDismissed: U
                        })
                      : null,
              position: 'right',
              align: 'top',
              shouldShow: !0,
              closeOnScroll: !0,
              onRequestClose: () => U(v.L.INDIRECT_ACTION),
              animation: d.yRy.Animation.TRANSLATE,
              children: (e) =>
                  (0, r.jsx)('div', {
                      ref: M,
                      children: G(e)
                  })
          })
        : G();
}
function N(e) {
    let { guild: t, tooltipTypes: n, withMargin: i } = e;
    return (0, r.jsx)(P, {
        guild: t,
        tooltipTypes: n,
        withMargin: i
    });
}
