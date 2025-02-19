n.d(t, { default: () => F }), n(47120), n(653041);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    r = n(990547),
    c = n(442837),
    o = n(477690),
    d = n(481060),
    u = n(493773),
    p = n(110924),
    f = n(40851),
    g = n(367907),
    m = n(565384),
    v = n(906732),
    h = n(835473),
    b = n(600164),
    x = n(592125),
    _ = n(451478),
    C = n(626135),
    I = n(585483),
    y = n(624138),
    T = n(115130),
    j = n(566620),
    N = n(421),
    Z = n(895395),
    S = n(49978),
    O = n(427996),
    E = n(701488),
    A = n(981631),
    M = n(388032),
    P = n(790331),
    w = n(361205),
    L = n(812320);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let D = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    W = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    R = (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + D + (0, y.Mg)(o.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function F(e) {
    var t,
        n,
        { channel: l, guildId: o, locationObject: f, onClose: _, initialSelectedApplicationId: y, initialSlide: D = E.ag.DIRECTORY, enableSelectedTextChannelInvite: R, analyticsLocations: F } = e,
        V = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        i = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'guildId', 'locationObject', 'onClose', 'initialSelectedApplicationId', 'initialSlide', 'enableSelectedTextChannelInvite', 'analyticsLocations']);
    let H = (0, c.e7)([T.Z], () => T.Z.getIsEnabled(), []),
        { analyticsLocations: U } = (0, v.ZP)(F),
        [Y, G] = i.useState(D),
        z = (0, p.Z)(Y),
        [q, J] = i.useState(null),
        [X, $] = i.useState(y),
        [Q, K] = i.useState(void 0),
        [ee] = (0, h.Z)(null == X ? [] : [X]),
        et = i.useRef(null),
        en = i.useMemo(
            () => ({
                application_id: X,
                source_section: f.section,
                impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [f.section, X]
        );
    i.useEffect(() => {
        if (Y === E.ag.DIRECTORY && null != z && z !== E.ag.DIRECTORY && null != q) {
            var e;
            null === (e = et.current) || void 0 === e || e.scrollTo({ top: q });
        }
    }, [q, z, Y]);
    let ea = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                a = null === (t = et.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && J(a), $(n), G(E.ag.SELECT_CHANNEL);
        }, []),
        ei = i.useCallback((e) => {
            let { applicationId: t } = e;
            $(t), G(E.ag.DETAIL_PAGE);
        }, []);
    i.useEffect(() => {
        C.default.track(A.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == l ? void 0 : l.id,
            guild_id: o
        });
    }, [l, o]),
        i.useEffect(
            () => (
                I.S.subscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ea),
                () => {
                    I.S.unsubscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ea);
                }
            ),
            [ea]
        ),
        i.useEffect(
            () => (
                I.S.subscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ei),
                () => {
                    I.S.unsubscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ei);
                }
            ),
            [ei]
        ),
        i.useEffect(() => {
            j.ux();
        }, []);
    let el = () => {
            G(E.ag.DIRECTORY);
        },
        es = i.useRef(Date.now()),
        er = i.useRef(!1),
        ec = i.useRef([]),
        eo = i.useCallback((e) => {
            null == ec.current.find((t) => t === e.applicationId) && ec.current.push(e.applicationId);
        }, []);
    return (
        i.useEffect(() => {
            let e = et.current;
            if (null != e) {
                let t = () => (er.current = !0);
                return (
                    null != e && e.addEventListener('scroll', t),
                    () => {
                        null != e && e.removeEventListener('scroll', t);
                    }
                );
            }
        }, []),
        (0, u.ZP)(() => () => {
            let e = {
                    activity_tiles_viewed: ec.current,
                    duration_ms: Date.now() - es.current,
                    scrolled: er.current
                },
                t = k(
                    {
                        channel_id: null == l ? void 0 : l.id,
                        guild_id: o,
                        location: (0, m.k$)()
                    },
                    (0, g.hH)(o),
                    (0, g.v_)(x.Z.getChannel(null == l ? void 0 : l.id)),
                    en,
                    e
                );
            C.default.track(A.rMx.ACTIVITY_SHELF_CLOSE, t);
        }),
        (0, a.jsx)(v.Gt, {
            value: U,
            children: (0, a.jsxs)(
                d.Y0X,
                ((t = k(
                    {
                        className: s()(P.root),
                        'aria-label': M.NW.string(M.t.shUONj)
                    },
                    V
                )),
                (n = n =
                    {
                        children: [
                            (0, a.jsx)('img', {
                                alt: M.NW.string(M.t['3Y9xdH']),
                                src: w,
                                className: P.shelfTopBackground
                            }),
                            (0, a.jsx)('img', {
                                alt: M.NW.string(M.t['3Y9xdH']),
                                src: L,
                                className: P.shelfTopForeground
                            }),
                            (0, a.jsxs)(d.xBx, {
                                separator: !1,
                                justify: b.Z.Justify.BETWEEN,
                                className: s()(P.modalHeader),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: P.headerTextContainer,
                                        children: [
                                            Y === E.ag.DETAIL_PAGE
                                                ? null == ee
                                                    ? null
                                                    : (0, a.jsxs)('div', {
                                                          className: P.activityShelfTitle,
                                                          children: [
                                                              (0, a.jsx)(d.X6q, {
                                                                  variant: 'heading-xl/extrabold',
                                                                  children: ee.name
                                                              }),
                                                              (0, a.jsxs)(d.P3F, {
                                                                  className: P.headerBackButton,
                                                                  onClick: el,
                                                                  children: [
                                                                      (0, a.jsx)(d.V7D, {
                                                                          size: 'md',
                                                                          color: 'currentColor'
                                                                      }),
                                                                      (0, a.jsx)(d.Text, {
                                                                          variant: 'text-sm/semibold',
                                                                          children: M.NW.string(M.t['13/7kZ'])
                                                                      })
                                                                  ]
                                                              })
                                                          ]
                                                      })
                                                : (0, a.jsx)('div', {
                                                      className: P.activityShelfTitle,
                                                      children: (0, a.jsx)(d.X6q, {
                                                          variant: 'heading-xl/extrabold',
                                                          children: M.NW.string(M.t.shUONj)
                                                      })
                                                  }),
                                            Y === E.ag.DIRECTORY
                                                ? (0, a.jsx)(d.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: H ? M.NW.string(M.t.tZ3FNj) : M.NW.string(M.t.Cye3SU)
                                                  })
                                                : null
                                        ]
                                    }),
                                    (0, a.jsx)(d.olH, {
                                        className: P.modalCloseButton,
                                        onClick: _
                                    })
                                ]
                            }),
                            Y === E.ag.DIRECTORY && H ? (0, a.jsx)(O.W, {}) : null,
                            (0, a.jsx)('div', { className: P.modalDivider }),
                            (0, a.jsxs)(d.MyZ, {
                                activeSlide: Y,
                                centered: !1,
                                width: W,
                                children: [
                                    (0, a.jsx)(d.Mi4, {
                                        id: E.ag.DIRECTORY,
                                        impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                                        impressionProperties: {
                                            source_section: f.section,
                                            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                        },
                                        children: (0, a.jsx)(B, {
                                            slide: Y,
                                            children: (0, a.jsx)(Z.Z, {
                                                scrollerRef: et,
                                                channel: l,
                                                guildId: o,
                                                locationObject: f,
                                                onActivityItemVisible: eo,
                                                onClose: _
                                            })
                                        })
                                    }),
                                    (0, a.jsx)(d.Mi4, {
                                        id: E.ag.SELECT_CHANNEL,
                                        impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                        impressionProperties: {
                                            source_section: f.section,
                                            impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                            application_id: X
                                        },
                                        children: (0, a.jsx)(B, {
                                            slide: Y,
                                            children: (0, a.jsx)(S.Z, {
                                                applicationId: X,
                                                selectedChannelId: Q,
                                                setSelectedChannelId: K,
                                                guildId: o,
                                                enableSelectedTextChannelInvite: R
                                            })
                                        })
                                    }),
                                    (0, a.jsx)(d.Mi4, {
                                        id: E.ag.DETAIL_PAGE,
                                        impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                                        impressionProperties: en,
                                        children: (0, a.jsx)(B, {
                                            slide: Y,
                                            children:
                                                null == X
                                                    ? null
                                                    : (0, a.jsx)(N.Z, {
                                                          applicationId: X,
                                                          channelId: null == l ? void 0 : l.id,
                                                          guildId: o,
                                                          onActivityLaunch: _
                                                      })
                                        })
                                    })
                                ]
                            }),
                            (0, a.jsx)('div', { className: P.modalDivider }),
                            (0, a.jsx)(d.mzw, {
                                separator: !1,
                                className: P.footer,
                                children: (() => {
                                    switch (Y) {
                                        case E.ag.DIRECTORY:
                                            return (0, a.jsx)(Z.d, {});
                                        case E.ag.SELECT_CHANNEL:
                                            return (0, a.jsx)(S.q, {
                                                onBack: el,
                                                onClose: _,
                                                guildId: o,
                                                applicationId: X,
                                                locationObject: f,
                                                selectedChannelId: Q,
                                                enableSelectedTextChannelInvite: R
                                            });
                                        case E.ag.DETAIL_PAGE:
                                        case E.ag.DIRECTORY:
                                        default:
                                            return null;
                                    }
                                })()
                            })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        })
    );
}
let B = (e) => {
    let { children: t, slide: n } = e,
        l = (0, c.e7)([T.Z], () => T.Z.getIsEnabled(), []),
        r = i.useContext(f.ZP),
        o = (0, c.e7)([_.Z], () => _.Z.windowSize(r.windowId).height, [r.windowId]);
    return (0, a.jsx)('div', {
        className: s()(P.slideContentOuterContainerSquished, {
            [P.slideContentOuterContainerSquishedWithDev]: n === E.ag.DIRECTORY && l,
            [P.slideContentOuterContainerTall]: n === E.ag.DIRECTORY && o > R,
            [P.slideContentOuterContainerTallWithDev]: n === E.ag.DIRECTORY && o > R && l,
            [P.slideContentOuterContainerNoMetaTextSquished]: n === E.ag.SELECT_CHANNEL,
            [P.slideContentOuterContainerNoMetaTextTall]: n === E.ag.SELECT_CHANNEL && o > R,
            [P.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === E.ag.DETAIL_PAGE,
            [P.slideContentOuterContainerNoMetaTextNoFooterTall]: n === E.ag.DETAIL_PAGE && o > R
        }),
        children: t
    });
};
