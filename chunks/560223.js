n.d(t, { Z: () => _ });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(975298),
    c = n(695349),
    d = n(963590),
    u = n(119850),
    m = n(22189),
    g = n(391110),
    p = n(75077),
    h = n(51636),
    f = n(795067);
let b = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: s } = e,
            l = (0, i.jsx)(a.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : f.heading,
                children: r
            });
        return null == t
            ? l
            : n
              ? (0, i.jsxs)('div', {
                    className: f.sectionHeader,
                    children: [
                        l,
                        null != t &&
                            (0, i.jsx)('div', {
                                className: f.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, i.jsx)('div', {
                    className: f.container,
                    children: (0, i.jsx)('div', {
                        className: f.sectionHeaderSeeAll,
                        children: l
                    })
                });
    },
    _ = (e) => {
        let { className: t, variant: n = g.gM.PERKS_DISCOVERABILITY, noBackground: s = !1, leftAlignHeaders: _ = !1, showAllPerksButton: x, headerClassname: E, isFullScreen: j = !0 } = e,
            C = r.useRef(null),
            O = n === g.gM.WHATS_NEW,
            S = (0, u.x)();
        r.useEffect(() => {
            O && S();
        }, [S, O]);
        let v = (0, p.re)(O),
            T = (0, m.Z)(),
            I = (0, p.mN)(),
            { fractionalState: N } = (0, o.Z)(),
            y = (0, c.W)(),
            A = (0, d.Z)({ location: 'WhatsNewSection' }),
            P = (0, p.ZM)({
                perksCards: T,
                variant: n,
                isFullScreen: j,
                isPremiumSubscriber: I,
                fractionalState: N,
                isInReverseTrial: y,
                showVoiceFiltersCard: A
            }),
            R = P.some((e) => null != e.pillText);
        return (0, i.jsxs)('div', {
            ref: C,
            className: l()(
                f.section,
                {
                    [f.centerAlignSection]: !_,
                    [f.leftAlignSection]: _
                },
                t
            ),
            children: [
                (0, i.jsx)(b, {
                    showAllPerksButton: x,
                    leftAlignHeaders: _,
                    title: v.title,
                    headerClassname: E
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-lg/normal',
                    color: 'header-primary',
                    className: l()(f.subtitle, {
                        [f.subtitle]: null == x || _,
                        [f.subtitleWithButton]: null != x && !_,
                        [f.fullWidth]: O || _,
                        [f.moreSubtitleMargin]: R,
                        [f.leftAlignSubtitle]: _,
                        [f.centerAlignSubtitle]: !_
                    }),
                    children: v.subtitle
                }),
                !_ &&
                    null != x &&
                    (0, i.jsx)('div', {
                        className: f.showAllPerksButtonCenter,
                        children: x
                    }),
                (0, i.jsx)('div', {
                    className: l()({
                        [f.cardContainer]: j,
                        [f.cardContainerNarrowWidth]: !j
                    }),
                    children: P.map((e, t) => {
                        var n, r;
                        return (0, i.jsx)(
                            h.Z,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (r = r = { forceShadow: s }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                            ''.concat(e.name, '_').concat(t)
                        );
                    })
                })
            ]
        });
    };
