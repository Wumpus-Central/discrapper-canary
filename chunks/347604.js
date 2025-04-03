n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(252759),
    o = n(442837),
    c = n(481060),
    d = n(650774),
    u = n(21297),
    m = n(118215),
    g = n(30766),
    p = n(166184),
    h = n(654351),
    f = n(259674),
    b = n(845377),
    x = n(981631),
    j = n(388032),
    N = n(88470),
    _ = n(716455);
let v = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
    C = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'],
    O = (e) => {
        let { guild: t, onEnableDiscovery: n, isGuildAdmin: s } = e,
            [O, y] = (0, l.Z)(() => [a().sample(v), a().sample(C)], []);
        i.useEffect(() => {
            (0, u.z)([O, y]);
        }, [O, y]);
        let [I, E] = (0, o.Wu)([g.Z], () => [g.Z.getGuild(O), g.Z.getGuild(y)], [O, y]),
            { canEnableDiscovery: S, isPendingSuccess: T } = (0, o.cj)(
                [m.ZP],
                () => ({
                    canEnableDiscovery: m.ZP.passesChecklist(t.id),
                    isPendingSuccess: m.ZP.isPendingSuccess(t.id)
                }),
                [t.id]
            ),
            [P, w] = (0, o.Wu)([d.Z], () => [null, d.Z.getMemberCount(t.id)], [t.id]),
            R = i.useCallback(() => {
                null != n && n();
            }, [n]),
            Z = null;
        return (
            s ? (T ? (Z = j.NW.string(j.t.zP8DFx)) : S || (Z = j.NW.string(j.t.ABFu19))) : (Z = j.NW.string(j.t['5VbUBw'])),
            (0, r.jsxs)('div', {
                className: N.container,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: _,
                        className: N.sparkles
                    }),
                    (0, r.jsxs)('div', {
                        className: N.discoverPreview,
                        children: [
                            (0, r.jsx)(p.Z, {
                                className: N.placeholderCard,
                                disabled: !0,
                                small: !0,
                                loading: null == I,
                                guild: I
                            }),
                            (0, r.jsx)(p.Z, {
                                className: N.previewCard,
                                guild: t,
                                description: j.NW.string(j.t['0k7fyM']),
                                presenceCount: P,
                                memberCount: w
                            }),
                            (0, r.jsx)(p.Z, {
                                className: N.placeholderCard,
                                disabled: !0,
                                small: !0,
                                loading: null == E,
                                guild: E
                            })
                        ]
                    }),
                    (0, r.jsx)(c.X6q, {
                        className: N.header,
                        variant: 'heading-xl/semibold',
                        children: j.NW.string(j.t.UwPrKS)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        className: N.valueProp,
                        color: 'header-secondary',
                        children: j.NW.format(j.t.BhkgBg, {
                            onLinkClick: () =>
                                (0, f.lW)({
                                    articleId: x.BhN.SERVER_DISCOVERY,
                                    guildId: t.id,
                                    pageView: h.d5.INTRO
                                })
                        })
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        className: N.byline,
                        color: 'header-secondary',
                        children: j.NW.format(j.t.ALSi8v, {
                            onGuidelinesClick: () =>
                                (0, f.lW)({
                                    articleId: x.BhN.SERVER_DISCOVERY_GUIDELINES,
                                    guildId: t.id,
                                    pageView: h.d5.INTRO
                                })
                        })
                    }),
                    (0, r.jsx)(c.ua7, {
                        text: Z,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                c.zxk,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        className: N.enableButton,
                                        color: c.zxk.Colors.BRAND,
                                        size: c.zxk.Sizes.LARGE,
                                        disabled: !S || !s,
                                        onClick: R,
                                        children: j.NW.string(j.t.oBIZwc)
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    }),
                    (0, r.jsx)(b.Z, {
                        className: N.checklist,
                        guild: t,
                        guildId: t.id,
                        headerContent: (0, r.jsx)(c.X6q, {
                            variant: 'heading-md/semibold',
                            children: S
                                ? j.NW.string(j.t.XAgDU1)
                                : j.NW.format(j.t['+6Hylp'], {
                                      doesNotHook: (e, t) =>
                                          (0, r.jsx)(
                                              'strong',
                                              {
                                                  className: N.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                        })
                    })
                ]
            })
        );
    };
