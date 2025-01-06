n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    c = n(990547),
    o = n(442837),
    r = n(477690),
    d = n(481060),
    u = n(110924),
    p = n(40851),
    f = n(367907),
    m = n(565384),
    g = n(906732),
    v = n(835473),
    h = n(600164),
    x = n(592125),
    b = n(451478),
    C = n(626135),
    I = n(585483),
    T = n(624138),
    _ = n(115130),
    Z = n(566620),
    S = n(421),
    N = n(895395),
    y = n(49978),
    j = n(427996),
    E = n(701488),
    A = n(981631),
    M = n(388032),
    O = n(788054),
    L = n(361205),
    w = n(812320);
let k = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    B = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    D = (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + k + (0, T.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function P(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, initialSelectedApplicationId: p, initialSlide: b = E.ag.DIRECTORY, enableSelectedTextChannelInvite: T, analyticsLocations: k, ...D } = e,
        P = (0, o.e7)([_.Z], () => _.Z.getIsEnabled(), []),
        { analyticsLocations: F } = (0, g.ZP)(k),
        [H, V] = a.useState(b),
        U = (0, u.Z)(H),
        [Y, G] = a.useState(null),
        [W, z] = a.useState(p),
        [q, J] = a.useState(void 0),
        [X] = (0, v.Z)(null == W ? [] : [W]),
        Q = a.useRef(null),
        $ = a.useMemo(
            () => ({
                application_id: W,
                source_section: l.section,
                impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, W]
        );
    a.useEffect(() => {
        if (H === E.ag.DIRECTORY && null != U && U !== E.ag.DIRECTORY && null != Y) {
            var e;
            null === (e = Q.current) || void 0 === e || e.scrollTo({ top: Y });
        }
    }, [Y, U, H]);
    let K = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                i = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), z(n), V(E.ag.SELECT_CHANNEL);
        }, []),
        ee = a.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), V(E.ag.DETAIL_PAGE);
        }, []);
    a.useEffect(() => {
        C.default.track(A.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        a.useEffect(
            () => (
                I.S.subscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K),
                () => {
                    I.S.unsubscribe(A.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
                }
            ),
            [K]
        ),
        a.useEffect(
            () => (
                I.S.subscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ee),
                () => {
                    I.S.unsubscribe(A.CkL.SHOW_ACTIVITY_DETAILS, ee);
                }
            ),
            [ee]
        ),
        a.useEffect(() => {
            Z.ux();
        }, []);
    let et = () => {
            V(E.ag.DIRECTORY);
        },
        en = a.useRef(Date.now()),
        ei = a.useRef(!1),
        ea = a.useRef([]),
        el = a.useCallback((e) => {
            null == ea.current.find((t) => t === e.applicationId) && ea.current.push(e.applicationId);
        }, []);
    return (
        a.useEffect(() => {
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
        a.useEffect(
            () => () => {
                let e = {
                        activity_tiles_viewed: ea.current,
                        duration_ms: Date.now() - en.current,
                        scrolled: ei.current
                    },
                    i = {
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n,
                        location: (0, m.k$)(),
                        ...(0, f.hH)(n),
                        ...(0, f.v_)(x.Z.getChannel(null == t ? void 0 : t.id)),
                        ...$,
                        ...e
                    };
                C.default.track(A.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n]
        ),
        (0, i.jsx)(g.Gt, {
            value: F,
            children: (0, i.jsxs)(d.ModalRoot, {
                className: s()(O.root),
                'aria-label': M.intl.string(M.t.shUONj),
                ...D,
                children: [
                    (0, i.jsx)('img', {
                        alt: M.intl.string(M.t['3Y9xdH']),
                        src: L,
                        className: O.shelfTopBackground
                    }),
                    (0, i.jsx)('img', {
                        alt: M.intl.string(M.t['3Y9xdH']),
                        src: w,
                        className: O.shelfTopForeground
                    }),
                    (0, i.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: h.Z.Justify.BETWEEN,
                        className: s()(O.modalHeader),
                        children: [
                            (0, i.jsxs)('div', {
                                className: O.headerTextContainer,
                                children: [
                                    (() => {
                                        if (H === E.ag.DETAIL_PAGE)
                                            return null == X
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: O.activityShelfTitle,
                                                      children: [
                                                          (0, i.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: X.name
                                                          }),
                                                          (0, i.jsxs)(d.Clickable, {
                                                              className: O.headerBackButton,
                                                              onClick: et,
                                                              children: [
                                                                  (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: M.intl.string(M.t['13/7kZ'])
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, i.jsx)('div', {
                                            className: O.activityShelfTitle,
                                            children: (0, i.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: M.intl.string(M.t.shUONj)
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (H === E.ag.DIRECTORY)
                                            return (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: P ? M.intl.string(M.t.tZ3FNj) : M.intl.string(M.t.Cye3SU)
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, i.jsx)(d.ModalCloseButton, {
                                className: O.modalCloseButton,
                                onClick: r
                            })
                        ]
                    }),
                    H === E.ag.DIRECTORY && P ? (0, i.jsx)(j.W, {}) : null,
                    (0, i.jsx)('div', { className: O.modalDivider }),
                    (0, i.jsxs)(d.Slides, {
                        activeSlide: H,
                        centered: !1,
                        width: B,
                        children: [
                            (0, i.jsx)(d.Slide, {
                                id: E.ag.DIRECTORY,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, i.jsx)(R, {
                                    slide: H,
                                    children: (0, i.jsx)(N.Z, {
                                        scrollerRef: Q,
                                        channel: t,
                                        guildId: n,
                                        locationObject: l,
                                        onActivityItemVisible: el,
                                        onClose: r
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: E.ag.SELECT_CHANNEL,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: W
                                },
                                children: (0, i.jsx)(R, {
                                    slide: H,
                                    children: (0, i.jsx)(y.Z, {
                                        applicationId: W,
                                        selectedChannelId: q,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: T
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: E.ag.DETAIL_PAGE,
                                impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: $,
                                children: (0, i.jsx)(R, {
                                    slide: H,
                                    children:
                                        null == W
                                            ? null
                                            : (0, i.jsx)(S.Z, {
                                                  applicationId: W,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: r
                                              })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: O.modalDivider }),
                    (0, i.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: O.footer,
                        children: (() => {
                            switch (H) {
                                case E.ag.DIRECTORY:
                                    return (0, i.jsx)(N.d, {});
                                case E.ag.SELECT_CHANNEL:
                                    return (0, i.jsx)(y.q, {
                                        onBack: et,
                                        onClose: r,
                                        guildId: n,
                                        applicationId: W,
                                        locationObject: l,
                                        selectedChannelId: q,
                                        enableSelectedTextChannelInvite: T
                                    });
                                case E.ag.DETAIL_PAGE:
                                case E.ag.DIRECTORY:
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
let R = (e) => {
    let { children: t, slide: n } = e,
        l = (0, o.e7)([_.Z], () => _.Z.getIsEnabled(), []),
        c = a.useContext(p.ZP),
        r = (0, o.e7)([b.Z], () => b.Z.windowSize(c.windowId).height, [c.windowId]);
    return (0, i.jsx)('div', {
        className: s()(O.slideContentOuterContainerSquished, {
            [O.slideContentOuterContainerSquishedWithDev]: n === E.ag.DIRECTORY && l,
            [O.slideContentOuterContainerTall]: n === E.ag.DIRECTORY && r > D,
            [O.slideContentOuterContainerTallWithDev]: n === E.ag.DIRECTORY && r > D && l,
            [O.slideContentOuterContainerNoMetaTextSquished]: n === E.ag.SELECT_CHANNEL,
            [O.slideContentOuterContainerNoMetaTextTall]: n === E.ag.SELECT_CHANNEL && r > D,
            [O.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === E.ag.DETAIL_PAGE,
            [O.slideContentOuterContainerNoMetaTextNoFooterTall]: n === E.ag.DETAIL_PAGE && r > D
        }),
        children: t
    });
};
