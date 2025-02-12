n.d(t, { default: () => F }), n(47120), n(653041);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(990547),
    o = n(442837),
    r = n(477690),
    d = n(481060),
    u = n(493773),
    p = n(110924),
    m = n(40851),
    g = n(367907),
    f = n(565384),
    v = n(906732),
    h = n(835473),
    x = n(600164),
    _ = n(592125),
    b = n(451478),
    C = n(626135),
    I = n(585483),
    T = n(624138),
    Z = n(115130),
    S = n(566620),
    y = n(421),
    N = n(895395),
    j = n(49978),
    E = n(427996),
    A = n(701488),
    M = n(981631),
    O = n(388032),
    L = n(679903),
    k = n(361205),
    w = n(812320);
let P = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    D = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    R = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + P + (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function F(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, initialSelectedApplicationId: m, initialSlide: b = A.ag.DIRECTORY, enableSelectedTextChannelInvite: T, analyticsLocations: P, ...R } = e,
        F = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
        { analyticsLocations: V } = (0, v.ZP)(P),
        [H, U] = i.useState(b),
        Y = (0, p.Z)(H),
        [G, z] = i.useState(null),
        [W, q] = i.useState(m),
        [J, X] = i.useState(void 0),
        [$] = (0, h.Z)(null == W ? [] : [W]),
        Q = i.useRef(null),
        K = i.useMemo(
            () => ({
                application_id: W,
                source_section: l.section,
                impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, W]
        );
    i.useEffect(() => {
        if (H === A.ag.DIRECTORY && null != Y && Y !== A.ag.DIRECTORY && null != G) {
            var e;
            null === (e = Q.current) || void 0 === e || e.scrollTo({ top: G });
        }
    }, [G, Y, H]);
    let ee = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                a = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && z(a), q(n), U(A.ag.SELECT_CHANNEL);
        }, []),
        et = i.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), U(A.ag.DETAIL_PAGE);
        }, []);
    i.useEffect(() => {
        C.default.track(M.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        i.useEffect(
            () => (
                I.S.subscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee),
                () => {
                    I.S.unsubscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee);
                }
            ),
            [ee]
        ),
        i.useEffect(
            () => (
                I.S.subscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et),
                () => {
                    I.S.unsubscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et);
                }
            ),
            [et]
        ),
        i.useEffect(() => {
            S.ux();
        }, []);
    let en = () => {
            U(A.ag.DIRECTORY);
        },
        ea = i.useRef(Date.now()),
        ei = i.useRef(!1),
        el = i.useRef([]),
        es = i.useCallback((e) => {
            null == el.current.find((t) => t === e.applicationId) && el.current.push(e.applicationId);
        }, []);
    return (
        i.useEffect(() => {
            let e = Q.current;
            if (null != e) {
                let t = () => (ei.current = !0);
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
                    activity_tiles_viewed: el.current,
                    duration_ms: Date.now() - ea.current,
                    scrolled: ei.current
                },
                a = {
                    channel_id: null == t ? void 0 : t.id,
                    guild_id: n,
                    location: (0, f.k$)(),
                    ...(0, g.hH)(n),
                    ...(0, g.v_)(_.Z.getChannel(null == t ? void 0 : t.id)),
                    ...K,
                    ...e
                };
            C.default.track(M.rMx.ACTIVITY_SHELF_CLOSE, a);
        }),
        (0, a.jsx)(v.Gt, {
            value: V,
            children: (0, a.jsxs)(d.Y0X, {
                className: s()(L.root),
                'aria-label': O.intl.string(O.t.shUONj),
                ...R,
                children: [
                    (0, a.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: k,
                        className: L.shelfTopBackground
                    }),
                    (0, a.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: w,
                        className: L.shelfTopForeground
                    }),
                    (0, a.jsxs)(d.xBx, {
                        separator: !1,
                        justify: x.Z.Justify.BETWEEN,
                        className: s()(L.modalHeader),
                        children: [
                            (0, a.jsxs)('div', {
                                className: L.headerTextContainer,
                                children: [
                                    H === A.ag.DETAIL_PAGE
                                        ? null == $
                                            ? null
                                            : (0, a.jsxs)('div', {
                                                  className: L.activityShelfTitle,
                                                  children: [
                                                      (0, a.jsx)(d.X6q, {
                                                          variant: 'heading-xl/extrabold',
                                                          children: $.name
                                                      }),
                                                      (0, a.jsxs)(d.P3F, {
                                                          className: L.headerBackButton,
                                                          onClick: en,
                                                          children: [
                                                              (0, a.jsx)(d.V7D, {
                                                                  size: 'md',
                                                                  color: 'currentColor'
                                                              }),
                                                              (0, a.jsx)(d.Text, {
                                                                  variant: 'text-sm/semibold',
                                                                  children: O.intl.string(O.t['13/7kZ'])
                                                              })
                                                          ]
                                                      })
                                                  ]
                                              })
                                        : (0, a.jsx)('div', {
                                              className: L.activityShelfTitle,
                                              children: (0, a.jsx)(d.X6q, {
                                                  variant: 'heading-xl/extrabold',
                                                  children: O.intl.string(O.t.shUONj)
                                              })
                                          }),
                                    H === A.ag.DIRECTORY
                                        ? (0, a.jsx)(d.Text, {
                                              variant: 'text-sm/normal',
                                              children: F ? O.intl.string(O.t.tZ3FNj) : O.intl.string(O.t.Cye3SU)
                                          })
                                        : null
                                ]
                            }),
                            (0, a.jsx)(d.olH, {
                                className: L.modalCloseButton,
                                onClick: r
                            })
                        ]
                    }),
                    H === A.ag.DIRECTORY && F ? (0, a.jsx)(E.W, {}) : null,
                    (0, a.jsx)('div', { className: L.modalDivider }),
                    (0, a.jsxs)(d.MyZ, {
                        activeSlide: H,
                        centered: !1,
                        width: D,
                        children: [
                            (0, a.jsx)(d.Mi4, {
                                id: A.ag.DIRECTORY,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, a.jsx)(B, {
                                    slide: H,
                                    children: (0, a.jsx)(N.Z, {
                                        scrollerRef: Q,
                                        channel: t,
                                        guildId: n,
                                        locationObject: l,
                                        onActivityItemVisible: es,
                                        onClose: r
                                    })
                                })
                            }),
                            (0, a.jsx)(d.Mi4, {
                                id: A.ag.SELECT_CHANNEL,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: W
                                },
                                children: (0, a.jsx)(B, {
                                    slide: H,
                                    children: (0, a.jsx)(j.Z, {
                                        applicationId: W,
                                        selectedChannelId: J,
                                        setSelectedChannelId: X,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: T
                                    })
                                })
                            }),
                            (0, a.jsx)(d.Mi4, {
                                id: A.ag.DETAIL_PAGE,
                                impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: K,
                                children: (0, a.jsx)(B, {
                                    slide: H,
                                    children:
                                        null == W
                                            ? null
                                            : (0, a.jsx)(y.Z, {
                                                  applicationId: W,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: r
                                              })
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: L.modalDivider }),
                    (0, a.jsx)(d.mzw, {
                        separator: !1,
                        className: L.footer,
                        children: (() => {
                            switch (H) {
                                case A.ag.DIRECTORY:
                                    return (0, a.jsx)(N.d, {});
                                case A.ag.SELECT_CHANNEL:
                                    return (0, a.jsx)(j.q, {
                                        onBack: en,
                                        onClose: r,
                                        guildId: n,
                                        applicationId: W,
                                        locationObject: l,
                                        selectedChannelId: J,
                                        enableSelectedTextChannelInvite: T
                                    });
                                case A.ag.DETAIL_PAGE:
                                case A.ag.DIRECTORY:
                                default:
                                    return null;
                            }
                        })()
                    })
                ]
            })
        })
    );
}
let B = (e) => {
    let { children: t, slide: n } = e,
        l = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
        c = i.useContext(m.ZP),
        r = (0, o.e7)([b.Z], () => b.Z.windowSize(c.windowId).height, [c.windowId]);
    return (0, a.jsx)('div', {
        className: s()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]: n === A.ag.DIRECTORY && l,
            [L.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && r > R,
            [L.slideContentOuterContainerTallWithDev]: n === A.ag.DIRECTORY && r > R && l,
            [L.slideContentOuterContainerNoMetaTextSquished]: n === A.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]: n === A.ag.SELECT_CHANNEL && r > R,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === A.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]: n === A.ag.DETAIL_PAGE && r > R
        }),
        children: t
    });
};
