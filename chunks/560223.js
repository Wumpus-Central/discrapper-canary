n.d(t, { Z: () => x });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(975298),
    c = n(695349),
    d = n(963590),
    u = n(119850),
    m = n(22189),
    p = n(391110),
    g = n(75077),
    h = n(51636),
    f = n(795067);
let b = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: s } = e,
            a = (0, i.jsx)(l.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : f.heading,
                children: r
            });
        return null == t
            ? a
            : n
              ? (0, i.jsxs)('div', {
                    className: f.sectionHeader,
                    children: [
                        a,
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
                        children: a
                    })
                });
    },
    x = (e) => {
        let { className: t, variant: n, noBackground: s = !1, leftAlignHeaders: x = !1, showAllPerksButton: _, headerClassname: j } = e,
            O = r.useRef(null),
            C = n === p.gM.WHATS_NEW,
            E = (0, u.x)();
        r.useEffect(() => {
            C && E();
        }, [E, C]);
        let v = (0, g.re)(C),
            S = (0, m.Z)(),
            T = (0, g.mN)(),
            { fractionalState: N } = (0, o.Z)(),
            I = (0, c.W)(),
            y = (0, d.Z)({ location: 'WhatsNewSection' }),
            A = (0, g.ZM)({
                perksCards: S,
                variant: n,
                hideCardsOnNarrowScreen: !1,
                isPremiumSubscriber: T,
                fractionalState: N,
                isInReverseTrial: I,
                showVoiceFiltersCard: y
            }),
            P = A.some((e) => null != e.pillText);
        return (0, i.jsxs)('div', {
            ref: O,
            className: a()(
                f.section,
                {
                    [f.centerAlignSection]: !x,
                    [f.leftAlignSection]: x
                },
                t
            ),
            children: [
                (0, i.jsx)(b, {
                    showAllPerksButton: _,
                    leftAlignHeaders: x,
                    title: v.title,
                    headerClassname: j
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-lg/normal',
                    color: 'header-primary',
                    className: a()(f.subtitle, {
                        [f.subtitle]: null == _ || x,
                        [f.subtitleWithButton]: null != _ && !x,
                        [f.fullWidth]: C || x,
                        [f.moreSubtitleMargin]: P,
                        [f.leftAlignSubtitle]: x,
                        [f.centerAlignSubtitle]: !x
                    }),
                    children: v.subtitle
                }),
                !x &&
                    null != _ &&
                    (0, i.jsx)('div', {
                        className: f.showAllPerksButtonCenter,
                        children: _
                    }),
                (0, i.jsx)('div', {
                    className: f.cardContainer,
                    children: A.map((e, t) => {
                        var n, r;
                        return (0, i.jsx)(
                            h.Z,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            ((i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i));
                                        }));
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
