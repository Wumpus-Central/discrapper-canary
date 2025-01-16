n.r(t),
    n.d(t, {
        default: function () {
            return R;
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
    u = n(493773),
    p = n(110924),
    f = n(40851),
    m = n(367907),
    g = n(565384),
    v = n(906732),
    h = n(835473),
    x = n(600164),
    b = n(592125),
    C = n(451478),
    I = n(626135),
    T = n(585483),
    _ = n(624138),
    Z = n(115130),
    S = n(566620),
    N = n(421),
    y = n(895395),
    j = n(49978),
    E = n(427996),
    A = n(701488),
    M = n(981631),
    O = n(388032),
    L = n(788054),
    w = n(361205),
    k = n(812320);
let B = (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    D = (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    P = (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, _.Mg)(r.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function R(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: r, initialSelectedApplicationId: f, initialSlide: C = A.ag.DIRECTORY, enableSelectedTextChannelInvite: _, analyticsLocations: B, ...P } = e,
        R = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
        { analyticsLocations: H } = (0, v.ZP)(B),
        [V, U] = a.useState(C),
        Y = (0, p.Z)(V),
        [G, W] = a.useState(null),
        [z, q] = a.useState(f),
        [J, X] = a.useState(void 0),
        [Q] = (0, h.Z)(null == z ? [] : [z]),
        $ = a.useRef(null),
        K = a.useMemo(
            () => ({
                application_id: z,
                source_section: l.section,
                impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, z]
        );
    a.useEffect(() => {
        if (V === A.ag.DIRECTORY && null != Y && Y !== A.ag.DIRECTORY && null != G) {
            var e;
            null === (e = $.current) || void 0 === e || e.scrollTo({ top: G });
        }
    }, [G, Y, V]);
    let ee = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                i = null === (t = $.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && W(i), q(n), U(A.ag.SELECT_CHANNEL);
        }, []),
        et = a.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), U(A.ag.DETAIL_PAGE);
        }, []);
    a.useEffect(() => {
        I.default.track(M.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        a.useEffect(
            () => (
                T.S.subscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee),
                () => {
                    T.S.unsubscribe(M.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, ee);
                }
            ),
            [ee]
        ),
        a.useEffect(
            () => (
                T.S.subscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et),
                () => {
                    T.S.unsubscribe(M.CkL.SHOW_ACTIVITY_DETAILS, et);
                }
            ),
            [et]
        ),
        a.useEffect(() => {
            S.ux();
        }, []);
    let en = () => {
            U(A.ag.DIRECTORY);
        },
        ei = a.useRef(Date.now()),
        ea = a.useRef(!1),
        el = a.useRef([]),
        es = a.useCallback((e) => {
            null == el.current.find((t) => t === e.applicationId) && el.current.push(e.applicationId);
        }, []);
    return (
        a.useEffect(() => {
            let e = $.current;
            if (null != e) {
                let t = () => (ea.current = !0);
                return (
                    null != e && e.addEventListener('scroll', t),
                    () => {
                        null != e && e.removeEventListener('scroll', t);
                    }
                );
            }
        }, []),
        (0, u.Z)(() => () => {
            let e = {
                    activity_tiles_viewed: el.current,
                    duration_ms: Date.now() - ei.current,
                    scrolled: ea.current
                },
                i = {
                    channel_id: null == t ? void 0 : t.id,
                    guild_id: n,
                    location: (0, g.k$)(),
                    ...(0, m.hH)(n),
                    ...(0, m.v_)(b.Z.getChannel(null == t ? void 0 : t.id)),
                    ...K,
                    ...e
                };
            I.default.track(M.rMx.ACTIVITY_SHELF_CLOSE, i);
        }),
        (0, i.jsx)(v.Gt, {
            value: H,
            children: (0, i.jsxs)(d.ModalRoot, {
                className: s()(L.root),
                'aria-label': O.intl.string(O.t.shUONj),
                ...P,
                children: [
                    (0, i.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: w,
                        className: L.shelfTopBackground
                    }),
                    (0, i.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: k,
                        className: L.shelfTopForeground
                    }),
                    (0, i.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: x.Z.Justify.BETWEEN,
                        className: s()(L.modalHeader),
                        children: [
                            (0, i.jsxs)('div', {
                                className: L.headerTextContainer,
                                children: [
                                    (() => {
                                        if (V === A.ag.DETAIL_PAGE)
                                            return null == Q
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: L.activityShelfTitle,
                                                      children: [
                                                          (0, i.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: Q.name
                                                          }),
                                                          (0, i.jsxs)(d.Clickable, {
                                                              className: L.headerBackButton,
                                                              onClick: en,
                                                              children: [
                                                                  (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: O.intl.string(O.t['13/7kZ'])
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, i.jsx)('div', {
                                            className: L.activityShelfTitle,
                                            children: (0, i.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: O.intl.string(O.t.shUONj)
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (V === A.ag.DIRECTORY)
                                            return (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: R ? O.intl.string(O.t.tZ3FNj) : O.intl.string(O.t.Cye3SU)
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, i.jsx)(d.ModalCloseButton, {
                                className: L.modalCloseButton,
                                onClick: r
                            })
                        ]
                    }),
                    V === A.ag.DIRECTORY && R ? (0, i.jsx)(E.W, {}) : null,
                    (0, i.jsx)('div', { className: L.modalDivider }),
                    (0, i.jsxs)(d.Slides, {
                        activeSlide: V,
                        centered: !1,
                        width: D,
                        children: [
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DIRECTORY,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, i.jsx)(F, {
                                    slide: V,
                                    children: (0, i.jsx)(y.Z, {
                                        scrollerRef: $,
                                        channel: t,
                                        guildId: n,
                                        locationObject: l,
                                        onActivityItemVisible: es,
                                        onClose: r
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.SELECT_CHANNEL,
                                impressionName: c.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: c.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: z
                                },
                                children: (0, i.jsx)(F, {
                                    slide: V,
                                    children: (0, i.jsx)(j.Z, {
                                        applicationId: z,
                                        selectedChannelId: J,
                                        setSelectedChannelId: X,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: _
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DETAIL_PAGE,
                                impressionName: c.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: K,
                                children: (0, i.jsx)(F, {
                                    slide: V,
                                    children:
                                        null == z
                                            ? null
                                            : (0, i.jsx)(N.Z, {
                                                  applicationId: z,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: r
                                              })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: L.modalDivider }),
                    (0, i.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: L.footer,
                        children: (() => {
                            switch (V) {
                                case A.ag.DIRECTORY:
                                    return (0, i.jsx)(y.d, {});
                                case A.ag.SELECT_CHANNEL:
                                    return (0, i.jsx)(j.q, {
                                        onBack: en,
                                        onClose: r,
                                        guildId: n,
                                        applicationId: z,
                                        locationObject: l,
                                        selectedChannelId: J,
                                        enableSelectedTextChannelInvite: _
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
let F = (e) => {
    let { children: t, slide: n } = e,
        l = (0, o.e7)([Z.Z], () => Z.Z.getIsEnabled(), []),
        c = a.useContext(f.ZP),
        r = (0, o.e7)([C.Z], () => C.Z.windowSize(c.windowId).height, [c.windowId]);
    return (0, i.jsx)('div', {
        className: s()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]: n === A.ag.DIRECTORY && l,
            [L.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && r > P,
            [L.slideContentOuterContainerTallWithDev]: n === A.ag.DIRECTORY && r > P && l,
            [L.slideContentOuterContainerNoMetaTextSquished]: n === A.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]: n === A.ag.SELECT_CHANNEL && r > P,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === A.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]: n === A.ag.DETAIL_PAGE && r > P
        }),
        children: t
    });
};
