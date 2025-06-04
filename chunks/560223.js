n.d(t, { Z: () => b });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(975298),
    c = n(695349),
    d = n(119850),
    u = n(22189),
    m = n(391110),
    g = n(75077),
    p = n(51636),
    h = n(795067);
let f = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: s } = e,
            l = (0, i.jsx)(a.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : h.heading,
                children: r
            });
        return null == t
            ? l
            : n
              ? (0, i.jsxs)('div', {
                    className: h.sectionHeader,
                    children: [
                        l,
                        null != t &&
                            (0, i.jsx)('div', {
                                className: h.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, i.jsx)('div', {
                    className: h.container,
                    children: (0, i.jsx)('div', {
                        className: h.sectionHeaderSeeAll,
                        children: l
                    })
                });
    },
    b = (e) => {
        let { className: t, variant: n = m.gM.PERKS_DISCOVERABILITY, noBackground: s = !1, leftAlignHeaders: b = !1, showAllPerksButton: _, headerClassname: x, isFullScreen: E = !0 } = e,
            C = r.useRef(null),
            j = n === m.gM.WHATS_NEW,
            O = (0, d.x)();
        r.useEffect(() => {
            j && O();
        }, [O, j]);
        let S = (0, g.re)(j),
            v = (0, u.Z)(),
            T = (0, g.mN)(),
            { fractionalState: I } = (0, o.Z)(),
            N = (0, c.W)(),
            y = (0, g.ZM)({
                perksCards: v,
                variant: n,
                isFullScreen: E,
                isPremiumSubscriber: T,
                fractionalState: I,
                isInReverseTrial: N
            }),
            A = y.some((e) => null != e.pillText);
        return (0, i.jsxs)('div', {
            ref: C,
            className: l()(
                h.section,
                {
                    [h.centerAlignSection]: !b,
                    [h.leftAlignSection]: b
                },
                t
            ),
            children: [
                (0, i.jsx)(f, {
                    showAllPerksButton: _,
                    leftAlignHeaders: b,
                    title: S.title,
                    headerClassname: x
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-lg/normal',
                    color: 'header-primary',
                    className: l()(h.subtitle, {
                        [h.subtitle]: null == _ || b,
                        [h.subtitleWithButton]: null != _ && !b,
                        [h.fullWidth]: j || b,
                        [h.moreSubtitleMargin]: A,
                        [h.leftAlignSubtitle]: b,
                        [h.centerAlignSubtitle]: !b
                    }),
                    children: S.subtitle
                }),
                !b &&
                    null != _ &&
                    (0, i.jsx)('div', {
                        className: h.showAllPerksButtonCenter,
                        children: _
                    }),
                (0, i.jsx)('div', {
                    className: l()({
                        [h.cardContainer]: E,
                        [h.cardContainerNarrowWidth]: !E
                    }),
                    children: y.map((e, t) => {
                        var n, r;
                        return (0, i.jsx)(
                            p.Z,
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
