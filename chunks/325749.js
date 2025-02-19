n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    c = n(481060),
    d = n(13245),
    u = n(753972),
    s = n(812206),
    p = n(726721),
    f = n(610394),
    m = n(695346),
    v = n(390322),
    h = n(961048),
    x = n(871499),
    b = n(786915),
    j = n(592125),
    _ = n(271383),
    g = n(594174),
    Z = n(51144),
    y = n(145597),
    C = n(214629),
    I = n(317381),
    P = n(884338),
    S = n(473179),
    O = n(981631),
    w = n(388032),
    A = n(984736);
let N = P.u.SIZE_24;
function k(e) {
    let { applicationId: t, channelId: n } = e,
        o = (0, a.e7)([s.Z], () => s.Z.getApplication(t)),
        k = (0, a.e7)([I.ZP], () => I.ZP.getSelfEmbeddedActivities().get(t)),
        E = (0, a.e7)([j.Z], () => j.Z.getChannel(n)),
        T = m.Sb.useSetting(),
        R = (0, a.Wu)(
            [_.ZP],
            () => {
                var e;
                return null == E || null == k ? [] : Array.from(null !== (e = k.userIds) && void 0 !== e ? e : []).map((e) => _.ZP.getMember(E.guild_id, e));
            },
            [k, E]
        ),
        D = i.useMemo(() => {
            let e = new Map();
            return (
                R.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [R]),
        L = i.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let i = D.get(e.id),
                    o = null !== (n = null == i ? void 0 : i.nick) && void 0 !== n ? n : Z.ZP.getName(e);
                return (0, r.jsx)(
                    c.DY3,
                    {
                        text: o,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, N),
                                alt: o,
                                className: A.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [D]
        ),
        U = null == k ? void 0 : k.userIds,
        W = (0, a.Wu)(
            [g.default],
            () =>
                Array.from(null != U ? U : [])
                    .map((e) => g.default.getUser(e))
                    .filter((e) => null != e),
            [U]
        ),
        B = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        M = i.useCallback(() => {
            let e = (0, y.QF)();
            d.Z.setInputLocked(!f.ZP.isInputLocked(e), e);
        }, []),
        Y = (0, C.PR)();
    if (null == o || null == k) return null;
    let z = (0, r.jsx)(u.Z, {
        application: o,
        size: 24,
        className: A.appIcon
    });
    return (
        T &&
            (z = (0, r.jsx)(c.DY3, {
                text: k.compositeInstanceId,
                position: 'bottom',
                children: z
            })),
        (0, r.jsx)(c.f6W, {
            theme: O.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(A.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(A.headerSection, A.headerSectionLeft),
                            children: [
                                z,
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    children: o.name
                                }),
                                (0, r.jsx)('div', {
                                    className: A.dotSpacer,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(P.Z, {
                                    renderIcon: !1,
                                    users: W,
                                    size: N,
                                    max: 6,
                                    className: A.userAvatars,
                                    renderUser: (e) => L(e, E)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(A.headerSection, A.headerSectionRight),
                            children: (0, r.jsxs)('div', {
                                className: A.actionButtonsContainer,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        appContext: O.IlC.POPOUT,
                                        applicationId: t,
                                        channel: E,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: k
                                    }),
                                    Y
                                        ? (0, r.jsx)(x.Z, {
                                              onClick: M,
                                              iconComponent: c.epB,
                                              label: w.NW.string(w.t.mseZsL)
                                          })
                                        : null,
                                    B &&
                                        (0, r.jsx)(
                                            c.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, r.jsx)(v.Z, {
                                                        children: (0, r.jsx)(S.Z, {
                                                            application: o,
                                                            channelId: n,
                                                            onClose: t
                                                        })
                                                    });
                                                },
                                                children: (e, t) => {
                                                    var n, r;
                                                    let { isShown: o } = t;
                                                    return (0, i.createElement)(
                                                        h.Z,
                                                        ((n = (function (e) {
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
                                                        (r = r =
                                                            {
                                                                key: 'more-options',
                                                                isActive: o
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                                              }),
                                                        n)
                                                    );
                                                }
                                            },
                                            'more-options-popout'
                                        )
                                ]
                            })
                        })
                    ]
                })
        })
    );
}
