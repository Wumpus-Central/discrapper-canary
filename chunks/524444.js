(n.d(t, {
    A7: () => ea,
    BO: () => ep,
    DR: () => el,
    G5: () => ed,
    LE: () => eu,
    Rp: () => ec,
    SE: () => eg,
    W_: () => em,
    Y: () => eh,
    Yi: () => et,
    b_: () => q,
    hX: () => $,
    iT: () => en,
    lV: () => J,
    ur: () => ei,
    wj: () => ee,
    xi: () => er
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    f = n(904245),
    _ = n(45114),
    p = n(431279),
    h = n(794295),
    m = n(593472),
    g = n(110924),
    E = n(40330),
    b = n(249458),
    y = n(313201),
    O = n(688465),
    v = n(425886),
    I = n(80966),
    T = n(593545),
    S = n(479313),
    A = n(765104),
    N = n(505953),
    C = n(695346),
    R = n(201542),
    P = n(306680),
    w = n(594174),
    D = n(259580),
    L = n(626135),
    x = n(823379),
    k = n(589530),
    M = n(709054),
    j = n(217702),
    U = n(981631),
    G = n(420212),
    B = n(814249),
    V = n(388032),
    F = n(672);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let q = {
        delay: 300,
        position: 'top'
    },
    X = (e) => (t) => {
        (null == e || e(t), (0, k.jA)(t));
    },
    Q = (e) => (t) => {
        (null == e || e(t), (0, k.Zj)(t));
    };
function J(e) {
    var { onVolumeChange: t, onMute: n, volume: a, autoMute: o, alt: s, renderAdjacentContent: l, renderOverlayContent: c } = e,
        u = K(e, ['onVolumeChange', 'onMute', 'volume', 'autoMute', 'alt', 'renderAdjacentContent', 'renderOverlayContent']);
    let d = X(t),
        f = Q(n);
    return (
        (a = null == a ? k.FC : a),
        (o = null == o ? k.rs : o),
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(
                    I.Z,
                    W(H({}, u), {
                        alt: s,
                        volume: a,
                        autoMute: o,
                        onVolumeChange: d,
                        onMute: f,
                        renderLinkComponent: en,
                        renderOverlayContent: c
                    })
                ),
                null != l && l()
            ]
        })
    );
}
function $(e) {
    var { onVolumeChange: t, volume: n, onMute: a, onVolumeShow: o, onVolumeHide: s, renderAdjacentContent: l } = e,
        c = K(e, ['onVolumeChange', 'volume', 'onMute', 'onVolumeShow', 'onVolumeHide', 'renderAdjacentContent']);
    let u = X(t),
        d = Q(a);
    n = null == n ? k.FC : n;
    let f = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(
                v.Z,
                W(H({}, c), {
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: o,
                    onVolumeHide: s,
                    volume: n,
                    autoMute: f,
                    renderLinkComponent: en
                })
            ),
            null != l && l()
        ]
    });
}
function ee(e) {
    var { onVolumeChange: t, volume: n, onMute: i } = e,
        a = K(e, ['onVolumeChange', 'volume', 'onMute']);
    let o = X(t),
        s = Q(i);
    return (
        (n = null == n ? k.FC : n),
        (0, r.jsx)(
            R.Z,
            W(H({}, a), {
                onVolumeChange: o,
                onMute: s,
                volume: n
            })
        )
    );
}
function et(e) {
    let { alt: t, hiddenSpoilers: n, renderAdjacentContent: a, containerClassName: s, imageContainerClassName: l, disableAltTextDisplay: c = !1, reducedSizeAltTextButton: u = !1, mediaLayoutType: f, imageContainerStyle: _, mosaicStyleAlt: h } = e,
        m = f === j.hV.MOSAIC || !0 === h,
        g = !c && C.H1.getSetting() && null != t && '' !== t && !0 !== n,
        E = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.VqE, {
                'aria-label': V.intl.string(V.t.fSiQ3N),
                className: F.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === G.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null == (e = b.current) ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, r.jsx)('span', {
                        className: F.mediaMosaicAltTextPopoutTitle,
                        children: V.intl.string(V.t.fSiQ3N)
                    }),
                    (0, r.jsx)('span', {
                        className: F.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        b = i.createRef();
    return (0, r.jsxs)('div', {
        className: o()(F.imageContent, s),
        children: [
            (0, r.jsxs)('div', {
                className: o()(F.imageContainer, l),
                style: _,
                children: [(0, r.jsx)(p.Z, H({}, e)), null != a && a()]
            }),
            m &&
                g &&
                (0, r.jsx)('div', {
                    className: F.mediaMosaicAltTextContainer,
                    children: (0, r.jsx)(d.yRy, {
                        targetElementRef: b,
                        animation: d.yRy.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(E, { altText: t }),
                        children: (e) =>
                            (0, r.jsx)(d.tEY, {
                                offset: 4,
                                children: (0, r.jsx)(
                                    'button',
                                    W(H({}, e), {
                                        type: 'button',
                                        ref: b,
                                        'aria-label': V.intl.string(V.t.fSiQ3N),
                                        className: o()(F.mediaMosaicAltText, { [F.reducedSize]: u }),
                                        children: V.intl.string(V.t.jCV1T0)
                                    })
                                )
                            })
                    })
                }),
            !m &&
                g &&
                (0, r.jsx)('span', {
                    className: F.altText,
                    children: t
                })
        ]
    });
}
function en(e) {
    return (0, r.jsx)(h.Z, H({}, e));
}
function er(e) {
    var { renderAdjacentContent: t } = e,
        n = K(e, ['renderAdjacentContent']);
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(T.Z, H({}, n)), null != t && t()]
    });
}
function ei(e) {
    return (0, r.jsx)(E.Z, H({}, e));
}
var ea = (function (e) {
    return ((e[(e.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (e[(e.REPLY = 1)] = 'REPLY'), e);
})({});
function eo(e) {
    switch (e) {
        case 0:
            return V.intl.string(V.t['4EvBb2']);
        case 1:
            return V.intl.string(V.t['1J6Xq6']);
        default:
            return (0, x.vE)(e);
    }
}
function es(e) {
    switch (e) {
        case 0:
            return V.intl.string(V.t.gpoQsL);
        case 1:
            return V.intl.string(V.t['k3RM8/']);
        default:
            return (0, x.vE)(e);
    }
}
let el = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, r.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)('div', {
                          onClick: n,
                          className: o()(F.jumpToPresentBar, i),
                          children: [
                              (0, r.jsx)('div', {
                                  className: F.barButtonMain,
                                  children: eo(t)
                              }),
                              null != n
                                  ? (0, r.jsx)(d.tEY, {
                                        offset: -2,
                                        children: (0, r.jsx)(d.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: es(t),
                                            onClick: n
                                        })
                                    })
                                  : (0, r.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: F.spinner,
                                        itemClassName: F.spinnerItem
                                    })
                          ]
                      })
        });
    },
    ec = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, r.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)(d.P3F, {
                          className: o()(F.messagesErrorBar, i),
                          onClick: t,
                          focusProps: {
                              offset: {
                                  top: 4,
                                  right: 4,
                                  bottom: 12,
                                  left: 4
                              }
                          },
                          children: [
                              (0, r.jsx)('div', {
                                  className: F.barButtonMain,
                                  children: V.intl.string(V.t['1zUvl5'])
                              }),
                              n
                                  ? (0, r.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: F.spinner,
                                        itemClassName: F.spinnerItem
                                    })
                                  : (0, r.jsx)('div', {
                                        className: F.barButtonAlt,
                                        children: V.intl.string(V.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function eu(e) {
    let { content: t, channelId: n } = e,
        [a] = i.useState(() => (0, y.hQ)('NewMessagesBarJumpToNewMessages_')),
        s = i.useCallback(() => {
            let e = P.ZP.ackMessageId(n);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: n,
                      messageId: M.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        l = i.useCallback(() => {
            (0, _.In)(n, {
                section: U.jXE.NEW_MESSAGES_BANNER,
                object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: U.Qqv.ACK_MANUAL
            });
        }, [n]),
        { disableInteractions: c } = i.useContext(b.G);
    return c
        ? null
        : (0, r.jsxs)('div', {
              className: o()(F.newMessagesBar, { [F.disableInteractions]: c }),
              children: [
                  (0, r.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, r.jsx)('button', {
                          type: 'button',
                          className: F.barButtonMain,
                          onClick: s,
                          'aria-label': V.intl.string(V.t.z0Mkp6),
                          'aria-describedby': a,
                          children: (0, r.jsx)('span', {
                              id: a,
                              className: F.span,
                              children: t
                          })
                      })
                  }),
                  (0, r.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, r.jsxs)('button', {
                          type: 'button',
                          onClick: l,
                          className: F.barButtonAlt,
                          children: [
                              V.intl.string(V.t.e6RscX),
                              (0, r.jsx)(d.eQA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: F.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function ed(e) {
    var t, n, a;
    let { channel: s, content: p, scrollManager: h } = e,
        { disableInteractions: E } = i.useContext(b.G),
        [y, v] = i.useState(null),
        I = i.useRef(null),
        [T, C] = i.useState(null),
        R = i.useRef(null),
        k = (0, u.Wu)(
            [A.Z],
            () => {
                var e;
                return null != (e = A.Z.summaries(s.id)) ? e : [];
            },
            [s]
        ),
        j = (0, g.Z)(k);
    i.useEffect(() => {
        l().isEqual(j, k) ||
            L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: k.length,
                message_counts: k.map((e) => e.count),
                start_message_ids: k.map((e) => e.startId),
                end_message_ids: k.map((e) => e.endId),
                num_participants: k.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            });
    }, [k, j, s.guild_id, s.id, s.type]);
    let G = (0, u.e7)(
            [w.default],
            () => {
                var e;
                return null !=
                    (e =
                        null == k
                            ? void 0
                            : k.map((e) => {
                                  var t;
                                  return null == (t = e.people)
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null != (t = w.default.getUser(e)) ? t : null;
                                            })
                                            .filter(x.lm);
                              }))
                    ? e
                    : [];
            },
            [k],
            e_
        ),
        Z = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : -1,
        H = null == k || null == (t = k[Z]) ? void 0 : t.topic;
    null == H && null == y && (null == k ? void 0 : k.length) >= 1 && (H = null == (a = k[0]) ? void 0 : a.topic);
    let Y = i.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    v(null != (t = null == e ? void 0 : e.id) ? t : null);
                }, 64),
            [v]
        ),
        W = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, S.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        K = i.useCallback(
            (e) => {
                (W(), Y(e));
            },
            [Y, W]
        ),
        [z, q] = i.useState(!1),
        X = i.useCallback(() => {
            (L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: k.length,
                message_counts: k.map((e) => e.count),
                start_message_ids: k.map((e) => e.startId),
                end_message_ids: k.map((e) => e.endId),
                num_participants: k.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }),
                q(!z));
        }, [z, k, q, s]),
        Q = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.DZ.PILL_DROPDOWN,
                    n = k[e];
                if (null == n) return;
                ((0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id));
                let r = () => {
                    (h.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            h.addAutomaticAnchorCallback(K, !1);
                        }, 100));
                };
                (h.removeAutomaticAnchorCallback(K),
                    h.addScrollCompleteCallback(r),
                    L.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: s.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: 'Summary Jump'
                    }));
            },
            [k, s, K, h]
        ),
        J = i.useCallback((e) => {
            var t;
            q(e);
            let n = null == (t = R.current) ? void 0 : t.scrollTop;
            null != n && C(n);
        }, []);
    i.useEffect(() => {
        if (null != T && z) {
            var e;
            null == (e = R.current) || e.scrollTo({ top: T });
        }
    }, [T, z]);
    let $ = i.useCallback(
        (e) => {
            var t;
            ((0, c.k)(e.target) && (null == (t = I.current) ? void 0 : t.contains(e.target))) ||
                (z &&
                    L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: k.length,
                        message_counts: k.map((e) => e.count),
                        start_message_ids: k.map((e) => e.startId),
                        end_message_ids: k.map((e) => e.endId),
                        num_participants: k.map((e) => e.people.length),
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type
                    }),
                J(!1));
        },
        [z, k, s, J]
    );
    (i.useEffect(
        () => (
            h.addAutomaticAnchorCallback(K),
            () => {
                h.removeAutomaticAnchorCallback(K);
            }
        ),
        [h, K]
    ),
        i.useEffect(() => {
            (0, S.G1)(s.id);
        }, [s.id]),
        i.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        ));
    let ee = i.useMemo(
            () =>
                (0, r.jsx)(N.Z, {
                    channel: s,
                    summaries: k,
                    summariesMembers: G,
                    selectTopic: Q,
                    setOpen: J
                }),
            [k, G, Q, J, s]
        ),
        et = i.useCallback(() => {
            let e = P.ZP.ackMessageId(s.id);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: s.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: s.id,
                      messageId: M.default.castChannelIdAsMessageId(s.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [s.id]),
        en = i.useCallback(() => {
            (0, _.In)(s.id, {
                section: U.jXE.NEW_TOPICS_BAR,
                object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: U.Qqv.ACK_MANUAL
            });
        }, [s.id]),
        er = V.intl.string(V.t['38qwgI']);
    return (
        k.length > 0 && (er = '' === H || null == H ? V.intl.string(V.t.DwnFuL) : H),
        E
            ? null
            : (0, r.jsxs)('div', {
                  ref: I,
                  className: o()(F.newTopicsBarContainer, F.containerMarginTop),
                  children: [
                      (0, r.jsx)('div', {
                          className: F.newTopicsBarTopicSection,
                          children: (0, r.jsx)(d.P3F, {
                              className: F.newTopicsBarTextClickable,
                              'aria-label': V.intl.string(V.t.RT3MPz),
                              onClick: X,
                              children: (0, r.jsxs)('div', {
                                  className: o()({
                                      [F.newTopicsBarTextUnselected]: !z,
                                      [F.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, r.jsx)(d.sVe, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: F.newTopicsBarIcon
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          className: o()(F.newTopicsBarCompact, F.newTopicsBarText),
                                          children: er
                                      }),
                                      (0, r.jsx)(D.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: D.Z.Directions.DOWN,
                                          className: F.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, r.jsx)(d.P3F, {
                          onClick: et,
                          className: F.newTopicsBarInitial,
                          children: p
                      }),
                      (0, r.jsxs)(d.P3F, {
                          onClick: en,
                          className: o()(F.barButtonAlt, F.flexEnd),
                          children: [
                              (0, r.jsx)('div', {
                                  className: F.newTopicsBarCompact,
                                  children: V.intl.string(V.t.e6RscX)
                              }),
                              (0, r.jsx)(d.eQA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: F.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, r.jsxs)('div', {
                              className: F.topicsDropdown,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: F.topicsDropdownHeading,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: F.topicsDropdownHeadingText,
                                              children: [
                                                  (0, r.jsx)(d.sVe, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: F.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, r.jsx)(d.X6q, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: V.intl.string(V.t.q21fUl)
                                                  }),
                                                  (0, r.jsx)(O.Z, { className: F.summariesBetaTag })
                                              ]
                                          }),
                                          (0, r.jsx)(d.P3F, {
                                              'aria-label': V.intl.string(V.t.cpT0Cg),
                                              onClick: X,
                                              className: F.topicsDropdownClose,
                                              children: (0, r.jsx)(d.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(d.Ttm, {
                                      ref: R,
                                      className: F.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
function ef(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function e_(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !ef(e, t[n]));
}
function ep(e) {
    var t, n, a;
    let { channel: s, scrollManager: _ } = e,
        { disableInteractions: p } = i.useContext(b.G),
        [h, E] = i.useState(null),
        y = i.useRef(null),
        [v, I] = i.useState(null),
        T = i.useRef(null),
        C = (0, u.Wu)(
            [A.Z],
            () => {
                var e;
                return null != (e = A.Z.summaries(s.id)) ? e : [];
            },
            [s]
        ),
        R = (0, g.Z)(C);
    i.useEffect(() => {
        l().isEqual(R, C) ||
            L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            });
    }, [C, R, s.guild_id, s.id, s.type]);
    let P = (0, u.e7)(
            [w.default],
            () => {
                var e;
                return null !=
                    (e =
                        null == C
                            ? void 0
                            : C.map((e) => {
                                  var t;
                                  return null == (t = e.people)
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null != (t = w.default.getUser(e)) ? t : null;
                                            })
                                            .filter(x.lm);
                              }))
                    ? e
                    : [];
            },
            [C],
            e_
        ),
        k = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : -1,
        M = null == C || null == (t = C[k]) ? void 0 : t.topic;
    null == M && null == h && (null == C ? void 0 : C.length) >= 1 && (M = null == (a = C[0]) ? void 0 : a.topic);
    let j = i.useMemo(() => l().get(C, k - 1), [k, C]),
        G = i.useMemo(() => l().get(C, k + 1), [k, C]),
        Z = i.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    E(null != (t = null == e ? void 0 : e.id) ? t : null);
                }, 64),
            [E]
        ),
        H = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, S.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        Y = i.useCallback(
            (e) => {
                (H(), Z(e));
            },
            [Z, H]
        ),
        [W, K] = i.useState(!1),
        z = i.useCallback(() => {
            (L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }),
                K(!W));
        }, [W, C, K, s]),
        q = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B.DZ.PILL_DROPDOWN,
                    n = C[e];
                if (null == n) return;
                ((0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id));
                let r = () => {
                    (_.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            _.addAutomaticAnchorCallback(Y, !1);
                        }, 100));
                };
                (_.removeAutomaticAnchorCallback(Y),
                    _.addScrollCompleteCallback(r),
                    L.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: s.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: 'Summary Jump'
                    }));
            },
            [C, s, Y, _]
        ),
        X = i.useCallback(() => {
            q(k - 1, B.DZ.PILL_NEXT_ARROW);
        }, [q, k]),
        Q = i.useCallback(() => {
            q(k + 1, B.DZ.PILL_PREVIOUS_ARROW);
        }, [k, q]),
        J = i.useCallback((e) => {
            var t;
            K(e);
            let n = null == (t = T.current) ? void 0 : t.scrollTop;
            null != n && I(n);
        }, []);
    i.useEffect(() => {
        if (null != v && W) {
            var e;
            null == (e = T.current) || e.scrollTo({ top: v });
        }
    }, [v, W]);
    let $ = i.useCallback(
        (e) => {
            var t;
            ((0, c.k)(e.target) && (null == (t = y.current) ? void 0 : t.contains(e.target))) ||
                (W &&
                    L.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: C.length,
                        message_counts: C.map((e) => e.count),
                        start_message_ids: C.map((e) => e.startId),
                        end_message_ids: C.map((e) => e.endId),
                        num_participants: C.map((e) => e.people.length),
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type
                    }),
                J(!1));
        },
        [W, C, s, J]
    );
    (i.useEffect(
        () => (
            _.addAutomaticAnchorCallback(Y),
            () => {
                _.removeAutomaticAnchorCallback(Y);
            }
        ),
        [_, Y]
    ),
        i.useEffect(() => {
            (0, S.G1)(s.id);
        }, [s.id]),
        i.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        ));
    let ee = i.useMemo(
        () =>
            (0, r.jsx)(N.Z, {
                channel: s,
                summaries: C,
                summariesMembers: P,
                selectTopic: q,
                setOpen: J
            }),
        [C, P, q, J, s]
    );
    if (!(0, u.e7)([A.Z], () => A.Z.shouldShowTopicsBar())) return null;
    let et = V.intl.string(V.t['38qwgI']);
    return (
        C.length > 0 && (et = '' === M || null == M ? V.intl.string(V.t.DwnFuL) : M),
        p
            ? null
            : (0, r.jsxs)('div', {
                  ref: y,
                  className: o()(F.topicsPillContainer, F.containerMarginTop),
                  children: [
                      (0, r.jsxs)('div', {
                          className: F.topicsPill,
                          children: [
                              (0, r.jsx)(d.P3F, {
                                  className: F.topicsPillText,
                                  'aria-label': V.intl.string(V.t.RT3MPz),
                                  onClick: z,
                                  children: (0, r.jsxs)('div', {
                                      className: o()({
                                          [F.topicsPillTextUnselected]: !W,
                                          [F.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, r.jsx)(d.sVe, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: F.topicsPillSummaryIcon
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              className: F.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.DOWN,
                                              className: F.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, r.jsxs)('div', {
                                  className: F.topicsPillCarets,
                                  children: [
                                      (0, r.jsx)(d.P3F, {
                                          'aria-label': V.intl.string(V.t['4huCnJ']),
                                          onClick: Q,
                                          className: o()(F.topicsPillCaret, F.topicsCaretLeft, { [F.topicsPillCaretDisabled]: null == G }),
                                          children: (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.UP
                                          })
                                      }),
                                      (0, r.jsx)(d.P3F, {
                                          'aria-label': V.intl.string(V.t['58KOoK']),
                                          onClick: X,
                                          className: o()(F.topicsPillCaret, F.topicsCaretRight, { [F.topicsPillCaretDisabled]: null == j }),
                                          children: (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      W &&
                          (0, r.jsxs)('div', {
                              className: F.topicsDropdown,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: F.topicsDropdownHeading,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: F.topicsDropdownHeadingText,
                                              children: [
                                                  (0, r.jsx)(d.sVe, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: F.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, r.jsx)(d.X6q, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: V.intl.string(V.t.q21fUl)
                                                  }),
                                                  (0, r.jsx)(O.Z, { className: F.summariesBetaTag })
                                              ]
                                          }),
                                          (0, r.jsx)(d.P3F, {
                                              'aria-label': V.intl.string(V.t.cpT0Cg),
                                              onClick: z,
                                              className: F.topicsDropdownClose,
                                              children: (0, r.jsx)(d.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(d.Ttm, {
                                      ref: T,
                                      className: F.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
let eh = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)('div', {
            className: F.tooltip,
            children: [
                (0, r.jsx)(d.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: F.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, r.jsx)(d.Text, {
                        className: F.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: V.intl.string(V.t['515vjI'])
                    })
            ]
        });
    },
    em = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)('div', {
            className: o()(F.popoutContainer, n),
            children: t
        });
    },
    eg = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(em, {
            className: t,
            children: (0, r.jsx)('div', {
                className: F.popoutLoadingBackground,
                children: (0, r.jsx)('div', { className: F.popoutLoadingForeground })
            })
        });
    };
