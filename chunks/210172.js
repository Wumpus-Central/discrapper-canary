r.d(t, { default: () => y }), r(47120), r(266796);
var s = r(200651),
    a = r(192379),
    i = r(442837),
    n = r(481060),
    c = r(367907),
    l = r(313201),
    o = r(456268),
    d = r(416162),
    u = r(434404),
    m = r(999382),
    g = r(449543),
    p = r(681518),
    h = r(627573),
    x = r(814008),
    N = r(259674),
    v = r(981631),
    b = r(128449),
    f = r(388032),
    j = r(878003),
    S = r(438825);
let y = (e) => {
    let { transitionState: t, onClose: y } = e,
        { guild: I, guildMetadata: C } = (0, i.cj)([m.Z], () => m.Z.getProps()),
        E = (0, l.Dt)(),
        [k, _] = a.useState(!1),
        [O, T] = a.useState(0),
        [w, W] = a.useState(!1);
    if (
        (a.useEffect(() => {
            c.ZP.trackWithMetadata(v.rMx.OPEN_MODAL, { type: v.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == I)
    )
        return null;
    let R = (0, s.jsx)(p.Z, {
            guild: I,
            headerId: E
        }),
        P = (0, s.jsx)(g.Z, {
            guild: I,
            guildMetadata: C,
            headerId: E
        }),
        D = (0, s.jsx)(x.Z, {
            guild: I,
            guildMetadata: C,
            headerId: E
        }),
        A = (0, s.jsx)(h.Z, {
            guild: I,
            headerId: E,
            onAgreedChange: W
        }),
        Z = (0, s.jsx)('img', {
            alt: '',
            src: S,
            className: j.footerImage,
            width: 240
        }),
        L = async () => {
            if (0 === O) {
                _(!0);
                try {
                    await u.Z.saveGuild(
                        I.id,
                        { description: I.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        T(O + 1),
                        (0, N.Nx)(N.tK.DESCRIPTION, N.tK.CATEGORIES, I.id);
                } catch (e) {}
            } else if (1 === O) T(O + 1), (0, N.Nx)(N.tK.CATEGORIES, N.tK.TAGS, I.id);
            else if (2 === O) {
                _(!0);
                try {
                    await (0, o.Vv)({
                        guildId: I.id,
                        primaryCategoryId: C.primaryCategoryId,
                        keywords: C.keywords,
                        emojiDiscoverabilityEnabled: C.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: C.partnerActionedTimestamp,
                        partnerApplicationTimestamp: C.partnerApplicationTimestamp,
                        isPublished: C.isPublished,
                        reasonsToJoin: C.reasonsToJoin,
                        socialLinks: C.socialLinks,
                        about: C.about
                    }),
                        T(O + 1),
                        (0, N.Nx)(N.tK.TAGS, N.tK.AGREE_TO_RULES, I.id);
                } catch (e) {}
            }
            _(!1);
        },
        G = [
            {
                modalContent: R,
                disableNextStep: null == I.description,
                overviewTitle: f.NW.string(f.t.RHP0kJ)
            },
            {
                modalContent: P,
                disableNextStep: C.primaryCategoryId === b.o3 || null == C.primaryCategoryId,
                overviewTitle: f.NW.string(f.t.Rv9An5)
            },
            {
                modalContent: D,
                disableNextStep: 0 === C.keywords.length,
                overviewTitle: f.NW.string(f.t['0PJZXl'])
            },
            {
                modalContent: A,
                disableNextStep: !w,
                overviewTitle: f.NW.string(f.t.Q8OFNz)
            }
        ];
    return (0, s.jsx)(d.Z, {
        stepData: G,
        title: f.NW.string(f.t.uyuIen),
        transitionState: t,
        onClose: y,
        completeButtonText: f.NW.string(f.t.wYi2lJ),
        onNextPressed: L,
        onPrevPressed: () => {
            T(O - 1);
        },
        forceStep: O,
        onComplete: () => {
            let e = I.features;
            I.hasFeature(v.oNc.DISCOVERABLE) || e.add(v.oNc.DISCOVERABLE),
                u.Z.saveGuild(I.id, {
                    features: e,
                    description: I.description
                }),
                (0, n.ZDy)(async () => {
                    let { default: e } = await r.e('263').then(r.bind(r, 477520));
                    return (t) => {
                        var r, a;
                        return (0, s.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        s = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (s = s.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        s.forEach(function (t) {
                                            var s;
                                            (s = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: s,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = s);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (a = a = { guild: I }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var s = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, s);
                                      }
                                      return r;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            r)
                        );
                    };
                });
        },
        overviewFooter: Z,
        submitting: k,
        sequencerClassName: j.container
    });
};
