n.d(t, {
    A7: () => ee,
    BO: () => eu,
    DR: () => ei,
    G5: () => es,
    LE: () => ea,
    Rp: () => er,
    SE: () => ef,
    W_: () => ed,
    Y: () => ec,
    Yi: () => Q,
    b_: () => H,
    hX: () => z,
    iT: () => X,
    lV: () => K,
    ur: () => $,
    wj: () => q,
    xi: () => J
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(374470),
    c = n(442837),
    d = n(481060),
    f = n(904245),
    _ = n(45114),
    p = n(431279),
    h = n(794295),
    m = n(593472),
    g = n(110924),
    E = n(40330),
    v = n(249458),
    y = n(313201),
    I = n(540059),
    T = n(688465),
    b = n(425886),
    S = n(80966),
    A = n(593545),
    N = n(479313),
    C = n(765104),
    R = n(505953),
    O = n(695346),
    D = n(201542),
    L = n(306680),
    x = n(594174),
    P = n(259580),
    w = n(626135),
    M = n(823379),
    k = n(589530),
    U = n(709054),
    G = n(217702),
    B = n(981631),
    Z = n(420212),
    F = n(814249),
    V = n(388032),
    j = n(556905);
let H = {
        delay: 300,
        position: 'top'
    },
    Y = (e) => (t) => {
        null == e || e(t), (0, k.jA)(t);
    },
    W = (e) => (t) => {
        null == e || e(t), (0, k.Zj)(t);
    };
function K(e) {
    let { onVolumeChange: t, onMute: n, volume: a, autoMute: s, alt: o, renderAdjacentContent: l, renderOverlayContent: u, ...c } = e,
        d = Y(t),
        f = W(n);
    return (
        (a = null == a ? k.FC : a),
        (s = null == s ? k.rs : s),
        (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(S.Z, {
                    ...c,
                    alt: o,
                    volume: a,
                    autoMute: s,
                    onVolumeChange: d,
                    onMute: f,
                    renderLinkComponent: X,
                    renderOverlayContent: u
                }),
                null != l && l()
            ]
        })
    );
}
function z(e) {
    let { onVolumeChange: t, volume: n, onMute: a, onVolumeShow: s, onVolumeHide: o, renderAdjacentContent: l, ...u } = e,
        c = Y(t),
        d = W(a);
    n = null == n ? k.FC : n;
    let f = () => !1;
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)(b.Z, {
                ...u,
                onVolumeChange: c,
                onMute: d,
                onVolumeShow: s,
                onVolumeHide: o,
                volume: n,
                autoMute: f,
                renderLinkComponent: X
            }),
            null != l && l()
        ]
    });
}
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...a } = e,
        s = Y(t),
        o = W(r);
    return (
        (n = null == n ? k.FC : n),
        (0, i.jsx)(D.Z, {
            ...a,
            onVolumeChange: s,
            onMute: o,
            volume: n
        })
    );
}
function Q(e) {
    let { alt: t, hiddenSpoilers: n, renderAdjacentContent: a, containerClassName: o, imageContainerClassName: l, disableAltTextDisplay: u = !1, reducedSizeAltTextButton: c = !1, mediaLayoutType: f, imageContainerStyle: _ } = e,
        h = f === G.hV.MOSAIC,
        m = !u && O.H1.getSetting() && null != t && '' !== t && !0 !== n,
        g = (e) => {
            let { altText: t } = e;
            return (0, i.jsxs)(d.VqE, {
                'aria-label': V.intl.string(V.t.fSiQ3N),
                className: j.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === Z.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, i.jsx)('span', {
                        className: j.mediaMosaicAltTextPopoutTitle,
                        children: V.intl.string(V.t.fSiQ3N)
                    }),
                    (0, i.jsx)('span', {
                        className: j.mediaMosaicAltTextPopoutDescription,
                        children: t
                    })
                ]
            });
        },
        E = r.createRef();
    return (0, i.jsxs)('div', {
        className: s()(j.imageContent, o),
        children: [
            (0, i.jsxs)('div', {
                className: s()(j.imageContainer, l),
                style: _,
                children: [(0, i.jsx)(p.Z, { ...e }), null != a && a()]
            }),
            h &&
                m &&
                (0, i.jsx)('div', {
                    className: j.mediaMosaicAltTextContainer,
                    children: (0, i.jsx)(d.yRy, {
                        animation: d.yRy.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(g, { altText: t }),
                        children: (e) =>
                            (0, i.jsx)(d.tEY, {
                                offset: 4,
                                children: (0, i.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: E,
                                    'aria-label': V.intl.string(V.t.fSiQ3N),
                                    className: s()(j.mediaMosaicAltText, { [j.reducedSize]: c }),
                                    children: V.intl.string(V.t.jCV1T0)
                                })
                            })
                    })
                }),
            !h &&
                m &&
                (0, i.jsx)('span', {
                    className: j.altText,
                    children: t
                })
        ]
    });
}
function X(e) {
    return (0, i.jsx)(h.Z, { ...e });
}
function J(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsx)(A.Z, { ...n }), null != t && t()]
    });
}
function $(e) {
    return (0, i.jsx)(E.Z, { ...e });
}
var ee = (function (e) {
    return (e[(e.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (e[(e.REPLY = 1)] = 'REPLY'), e;
})({});
function et(e) {
    switch (e) {
        case 0:
            return V.intl.string(V.t['4EvBb2']);
        case 1:
            return V.intl.string(V.t['1J6Xq6']);
        default:
            return (0, M.vE)(e);
    }
}
function en(e) {
    switch (e) {
        case 0:
            return V.intl.string(V.t.gpoQsL);
        case 1:
            return V.intl.string(V.t['k3RM8/']);
        default:
            return (0, M.vE)(e);
    }
}
let ei = (e) => {
        let { type: t = 0, onClick: n, className: r } = e,
            a = (0, I.Q3)('JumpToPresentBar');
        return (0, i.jsx)(v.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)('div', {
                          className: s()(j.jumpToPresentBar, r),
                          children: [
                              (0, i.jsx)(d.tEY, {
                                  offset: 4,
                                  children: (0, i.jsx)('button', {
                                      type: 'button',
                                      onClick: n,
                                      className: j.barButtonMain,
                                      children: et(t)
                                  })
                              }),
                              null != n
                                  ? (0, i.jsx)(d.tEY, {
                                        offset: 4,
                                        children: a
                                            ? (0, i.jsx)(d.zxk, {
                                                  size: 'sm',
                                                  onClick: n,
                                                  children: en(t)
                                              })
                                            : (0, i.jsxs)('button', {
                                                  type: 'button',
                                                  onClick: n,
                                                  className: j.barButtonAlt,
                                                  children: [en(t), (0, i.jsx)(P.Z, { className: j.barButtonIcon })]
                                              })
                                    })
                                  : (0, i.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: j.spinner,
                                        itemClassName: j.spinnerItem
                                    })
                          ]
                      })
        });
    },
    er = (e) => {
        let { onClick: t, loading: n, className: r } = e;
        return (0, i.jsx)(v.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)(d.P3F, {
                          className: s()(j.messagesErrorBar, r),
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
                              (0, i.jsx)('div', {
                                  className: j.barButtonMain,
                                  children: V.intl.string(V.t['1zUvl5'])
                              }),
                              n
                                  ? (0, i.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: j.spinner,
                                        itemClassName: j.spinnerItem
                                    })
                                  : (0, i.jsx)('div', {
                                        className: j.barButtonAlt,
                                        children: V.intl.string(V.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function ea(e) {
    let { content: t, channelId: n } = e,
        [a] = r.useState(() => (0, y.hQ)('NewMessagesBarJumpToNewMessages_')),
        o = r.useCallback(() => {
            let e = L.ZP.ackMessageId(n);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: n,
                      messageId: U.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [n]),
        l = r.useCallback(() => {
            (0, _.In)(n);
        }, [n]),
        { disableInteractions: u } = r.useContext(v.G);
    return u
        ? null
        : (0, i.jsxs)('div', {
              className: s()(j.newMessagesBar, { [j.disableInteractions]: u }),
              children: [
                  (0, i.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, i.jsx)('button', {
                          type: 'button',
                          className: j.barButtonMain,
                          onClick: o,
                          'aria-label': V.intl.string(V.t.z0Mkp6),
                          'aria-describedby': a,
                          children: (0, i.jsx)('span', {
                              id: a,
                              className: j.span,
                              children: t
                          })
                      })
                  }),
                  (0, i.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, i.jsxs)('button', {
                          type: 'button',
                          onClick: l,
                          className: j.barButtonAlt,
                          children: [
                              V.intl.string(V.t.e6RscX),
                              (0, i.jsx)(d.eQA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function es(e) {
    var t, n, a;
    let { channel: o, content: p, scrollManager: h } = e,
        { disableInteractions: E } = r.useContext(v.G),
        [y, I] = r.useState(null),
        b = r.useRef(null),
        [S, A] = r.useState(null),
        O = r.useRef(null),
        D = (0, c.Wu)(
            [C.Z],
            () => {
                var e;
                return null !== (e = C.Z.summaries(o.id)) && void 0 !== e ? e : [];
            },
            [o]
        ),
        k = (0, g.Z)(D);
    r.useEffect(() => {
        l().isEqual(k, D) ||
            w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: o.guild_id,
                channel_id: o.id,
                channel_type: o.type
            });
    }, [D, k, o.guild_id, o.id, o.type]);
    let G = (0, c.e7)(
            [x.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == D
                            ? void 0
                            : D.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = x.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(M.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [D],
            el
        ),
        Z = null !== (n = (0, c.e7)([C.Z], () => C.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        H = null == D ? void 0 : null === (t = D[Z]) || void 0 === t ? void 0 : t.topic;
    null == H && null == y && (null == D ? void 0 : D.length) >= 1 && (H = null === (a = D[0]) || void 0 === a ? void 0 : a.topic);
    let Y = r.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    I(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [I]
        ),
        W = r.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, N.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        K = r.useCallback(
            (e) => {
                W(), Y(e);
            },
            [Y, W]
        ),
        [z, q] = r.useState(!1),
        Q = r.useCallback(() => {
            w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: D.length,
                message_counts: D.map((e) => e.count),
                start_message_ids: D.map((e) => e.startId),
                end_message_ids: D.map((e) => e.endId),
                num_participants: D.map((e) => e.people.length),
                guild_id: o.guild_id,
                channel_id: o.id,
                channel_type: o.type
            }),
                q(!z);
        }, [z, D, q, o]),
        X = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.DZ.PILL_DROPDOWN,
                    n = D[e];
                if (null == n) return;
                (0, N.wv)(o.id, n.id), (0, N.yK)(o.id, n.id);
                let i = () => {
                    h.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            h.addAutomaticAnchorCallback(K, !1);
                        }, 100);
                };
                h.removeAutomaticAnchorCallback(K),
                    h.addScrollCompleteCallback(i),
                    w.default.track(B.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: o.guild_id,
                        channel_id: o.id,
                        channel_type: o.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: o.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [D, o, K, h]
        ),
        J = r.useCallback((e) => {
            var t;
            q(e);
            let n = null === (t = O.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && A(n);
        }, []);
    r.useEffect(() => {
        if (null != S && z) {
            var e;
            null === (e = O.current) || void 0 === e || e.scrollTo({ top: S });
        }
    }, [S, z]);
    let $ = r.useCallback(
        (e) => {
            var t;
            !((0, u.k)(e.target) && (null === (t = b.current) || void 0 === t ? void 0 : t.contains(e.target))) &&
                (z &&
                    w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: D.length,
                        message_counts: D.map((e) => e.count),
                        start_message_ids: D.map((e) => e.startId),
                        end_message_ids: D.map((e) => e.endId),
                        num_participants: D.map((e) => e.people.length),
                        guild_id: o.guild_id,
                        channel_id: o.id,
                        channel_type: o.type
                    }),
                J(!1));
        },
        [z, D, o, J]
    );
    r.useEffect(
        () => (
            h.addAutomaticAnchorCallback(K),
            () => {
                h.removeAutomaticAnchorCallback(K);
            }
        ),
        [h, K]
    ),
        r.useEffect(() => {
            (0, N.G1)(o.id);
        }, [o.id]),
        r.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = r.useMemo(
            () =>
                (0, i.jsx)(R.Z, {
                    channel: o,
                    summaries: D,
                    summariesMembers: G,
                    selectTopic: X,
                    setOpen: J
                }),
            [D, G, X, J, o]
        ),
        et = r.useCallback(() => {
            let e = L.ZP.ackMessageId(o.id);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: o.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : f.Z.jumpToMessage({
                      channelId: o.id,
                      messageId: U.default.castChannelIdAsMessageId(o.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [o.id]),
        en = r.useCallback(() => {
            (0, _.In)(o.id);
        }, [o.id]),
        ei = V.intl.string(V.t['38qwgI']);
    return (
        D.length > 0 && (ei = '' === H || null == H ? V.intl.string(V.t.DwnFuL) : H),
        E
            ? null
            : (0, i.jsxs)('div', {
                  ref: b,
                  className: s()(j.newTopicsBarContainer, j.containerMarginTop),
                  children: [
                      (0, i.jsx)('div', {
                          className: s()(j.newTopicsBarTopicSection),
                          children: (0, i.jsx)(d.P3F, {
                              className: j.newTopicsBarTextClickable,
                              'aria-label': V.intl.string(V.t.RT3MPz),
                              onClick: Q,
                              children: (0, i.jsxs)('div', {
                                  className: s()({
                                      [j.newTopicsBarTextUnselected]: !z,
                                      [j.newTopicsBarTextSelected]: z
                                  }),
                                  children: [
                                      (0, i.jsx)(d.sVe, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: j.newTopicsBarIcon
                                      }),
                                      (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          className: s()(j.newTopicsBarCompact, j.newTopicsBarText),
                                          children: ei
                                      }),
                                      (0, i.jsx)(P.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: P.Z.Directions.DOWN,
                                          className: j.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, i.jsx)(d.P3F, {
                          onClick: et,
                          className: s()(j.newTopicsBarInitial),
                          children: p
                      }),
                      (0, i.jsxs)(d.P3F, {
                          onClick: en,
                          className: s()(j.barButtonAlt, j.flexEnd),
                          children: [
                              (0, i.jsx)('div', {
                                  className: j.newTopicsBarCompact,
                                  children: V.intl.string(V.t.e6RscX)
                              }),
                              (0, i.jsx)(d.eQA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: j.barButtonIcon
                              })
                          ]
                      }),
                      z &&
                          (0, i.jsxs)('div', {
                              className: j.topicsDropdown,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: j.topicsDropdownHeading,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: j.topicsDropdownHeadingText,
                                              children: [
                                                  (0, i.jsx)(d.sVe, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: j.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, i.jsx)(d.X6q, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: V.intl.string(V.t.q21fUl)
                                                  }),
                                                  (0, i.jsx)(T.Z, { className: j.summariesBetaTag })
                                              ]
                                          }),
                                          (0, i.jsx)(d.P3F, {
                                              'aria-label': V.intl.string(V.t.cpT0Cg),
                                              onClick: Q,
                                              className: j.topicsDropdownClose,
                                              children: (0, i.jsx)(d.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(d.Ttm, {
                                      ref: O,
                                      className: j.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
function eo(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function el(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !eo(e, t[n]));
}
function eu(e) {
    var t, n, a;
    let { channel: o, scrollManager: _ } = e,
        { disableInteractions: p } = r.useContext(v.G),
        [h, E] = r.useState(null),
        y = r.useRef(null),
        [I, b] = r.useState(null),
        S = r.useRef(null),
        A = (0, c.Wu)(
            [C.Z],
            () => {
                var e;
                return null !== (e = C.Z.summaries(o.id)) && void 0 !== e ? e : [];
            },
            [o]
        ),
        O = (0, g.Z)(A);
    r.useEffect(() => {
        l().isEqual(O, A) ||
            w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: o.guild_id,
                channel_id: o.id,
                channel_type: o.type
            });
    }, [A, O, o.guild_id, o.id, o.type]);
    let D = (0, c.e7)(
            [x.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == A
                            ? void 0
                            : A.map((e) => {
                                  var t;
                                  return null === (t = e.people) || void 0 === t
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null !== (t = x.default.getUser(e)) && void 0 !== t ? t : null;
                                            })
                                            .filter(M.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [A],
            el
        ),
        L = null !== (n = (0, c.e7)([C.Z], () => C.Z.visibleSummaryIndex())) && void 0 !== n ? n : -1,
        k = null == A ? void 0 : null === (t = A[L]) || void 0 === t ? void 0 : t.topic;
    null == k && null == h && (null == A ? void 0 : A.length) >= 1 && (k = null === (a = A[0]) || void 0 === a ? void 0 : a.topic);
    let U = r.useMemo(() => l().get(A, L - 1), [L, A]),
        G = r.useMemo(() => l().get(A, L + 1), [L, A]),
        Z = r.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    E(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null);
                }, 64),
            [E]
        ),
        H = r.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, N.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        Y = r.useCallback(
            (e) => {
                H(), Z(e);
            },
            [Z, H]
        ),
        [W, K] = r.useState(!1),
        z = r.useCallback(() => {
            w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: o.guild_id,
                channel_id: o.id,
                channel_type: o.type
            }),
                K(!W);
        }, [W, A, K, o]),
        q = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.DZ.PILL_DROPDOWN,
                    n = A[e];
                if (null == n) return;
                (0, N.wv)(o.id, n.id), (0, N.yK)(o.id, n.id);
                let i = () => {
                    _.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            _.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                _.removeAutomaticAnchorCallback(Y),
                    _.addScrollCompleteCallback(i),
                    w.default.track(B.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: o.guild_id,
                        channel_id: o.id,
                        channel_type: o.type
                    }),
                    f.Z.jumpToMessage({
                        channelId: o.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [A, o, Y, _]
        ),
        Q = r.useCallback(() => {
            q(L - 1, F.DZ.PILL_NEXT_ARROW);
        }, [q, L]),
        X = r.useCallback(() => {
            q(L + 1, F.DZ.PILL_PREVIOUS_ARROW);
        }, [L, q]),
        J = r.useCallback((e) => {
            var t;
            K(e);
            let n = null === (t = S.current) || void 0 === t ? void 0 : t.scrollTop;
            null != n && b(n);
        }, []);
    r.useEffect(() => {
        if (null != I && W) {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollTo({ top: I });
        }
    }, [I, W]);
    let $ = r.useCallback(
        (e) => {
            var t;
            !((0, u.k)(e.target) && (null === (t = y.current) || void 0 === t ? void 0 : t.contains(e.target))) &&
                (W &&
                    w.default.track(B.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: A.length,
                        message_counts: A.map((e) => e.count),
                        start_message_ids: A.map((e) => e.startId),
                        end_message_ids: A.map((e) => e.endId),
                        num_participants: A.map((e) => e.people.length),
                        guild_id: o.guild_id,
                        channel_id: o.id,
                        channel_type: o.type
                    }),
                J(!1));
        },
        [W, A, o, J]
    );
    r.useEffect(
        () => (
            _.addAutomaticAnchorCallback(Y),
            () => {
                _.removeAutomaticAnchorCallback(Y);
            }
        ),
        [_, Y]
    ),
        r.useEffect(() => {
            (0, N.G1)(o.id);
        }, [o.id]),
        r.useEffect(
            () => (
                document.addEventListener('mousedown', $),
                () => {
                    document.removeEventListener('mousedown', $);
                }
            ),
            [$]
        );
    let ee = r.useMemo(
        () =>
            (0, i.jsx)(R.Z, {
                channel: o,
                summaries: A,
                summariesMembers: D,
                selectTopic: q,
                setOpen: J
            }),
        [A, D, q, J, o]
    );
    if (!(0, c.e7)([C.Z], () => C.Z.shouldShowTopicsBar())) return null;
    let et = V.intl.string(V.t['38qwgI']);
    return (
        A.length > 0 && (et = '' === k || null == k ? V.intl.string(V.t.DwnFuL) : k),
        p
            ? null
            : (0, i.jsxs)('div', {
                  ref: y,
                  className: s()(j.topicsPillContainer, j.containerMarginTop),
                  children: [
                      (0, i.jsxs)('div', {
                          className: j.topicsPill,
                          children: [
                              (0, i.jsx)(d.P3F, {
                                  className: j.topicsPillText,
                                  'aria-label': V.intl.string(V.t.RT3MPz),
                                  onClick: z,
                                  children: (0, i.jsxs)('div', {
                                      className: s()({
                                          [j.topicsPillTextUnselected]: !W,
                                          [j.topicsPillTextSelected]: W
                                      }),
                                      children: [
                                          (0, i.jsx)(d.sVe, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: j.topicsPillSummaryIcon
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              className: j.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: et
                                          }),
                                          (0, i.jsx)(P.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: P.Z.Directions.DOWN,
                                              className: j.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsxs)('div', {
                                  className: j.topicsPillCarets,
                                  children: [
                                      (0, i.jsx)(d.P3F, {
                                          'aria-label': V.intl.string(V.t['4huCnJ']),
                                          onClick: X,
                                          className: s()(j.topicsPillCaret, j.topicsCaretLeft, { [j.topicsPillCaretDisabled]: null == G }),
                                          children: (0, i.jsx)(P.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: P.Z.Directions.UP
                                          })
                                      }),
                                      (0, i.jsx)(d.P3F, {
                                          'aria-label': V.intl.string(V.t['58KOoK']),
                                          onClick: Q,
                                          className: s()(j.topicsPillCaret, j.topicsCaretRight, { [j.topicsPillCaretDisabled]: null == U }),
                                          children: (0, i.jsx)(P.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: P.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      W &&
                          (0, i.jsxs)('div', {
                              className: j.topicsDropdown,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: j.topicsDropdownHeading,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: j.topicsDropdownHeadingText,
                                              children: [
                                                  (0, i.jsx)(d.sVe, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: j.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, i.jsx)(d.X6q, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: V.intl.string(V.t.q21fUl)
                                                  }),
                                                  (0, i.jsx)(T.Z, { className: j.summariesBetaTag })
                                              ]
                                          }),
                                          (0, i.jsx)(d.P3F, {
                                              'aria-label': V.intl.string(V.t.cpT0Cg),
                                              onClick: z,
                                              className: j.topicsDropdownClose,
                                              children: (0, i.jsx)(d.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(d.Ttm, {
                                      ref: S,
                                      className: j.topicsScroller,
                                      fade: !0,
                                      children: ee
                                  })
                              ]
                          })
                  ]
              })
    );
}
let ec = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, i.jsxs)('div', {
            className: j.tooltip,
            children: [
                (0, i.jsx)(d.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: j.tooltipEmojiName,
                    children: e
                }),
                t &&
                    (0, i.jsx)(d.Text, {
                        className: j.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: V.intl.string(V.t['515vjI'])
                    })
            ]
        });
    },
    ed = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)('div', {
            className: s()(j.popoutContainer, n),
            children: t
        });
    },
    ef = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(ed, {
            className: t,
            children: (0, i.jsx)('div', {
                className: j.popoutLoadingBackground,
                children: (0, i.jsx)('div', { className: j.popoutLoadingForeground })
            })
        });
    };
