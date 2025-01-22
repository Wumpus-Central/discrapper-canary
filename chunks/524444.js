r.d(n, {
    A7: function () {
        return i;
    },
    BO: function () {
        return ed;
    },
    DR: function () {
        return ea;
    },
    G5: function () {
        return el;
    },
    LE: function () {
        return es;
    },
    Rp: function () {
        return eo;
    },
    SE: function () {
        return eh;
    },
    W_: function () {
        return ep;
    },
    Y: function () {
        return ef;
    },
    Yi: function () {
        return $;
    },
    b_: function () {
        return K;
    },
    hX: function () {
        return X;
    },
    iT: function () {
        return ee;
    },
    lV: function () {
        return Q;
    },
    ur: function () {
        return en;
    },
    wj: function () {
        return J;
    },
    xi: function () {
        return et;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(513431),
    p = r(442837),
    h = r(481060),
    _ = r(904245),
    m = r(45114),
    g = r(431279),
    E = r(794295),
    v = r(593472),
    y = r(110924),
    b = r(40330),
    I = r(249458),
    T = r(313201),
    S = r(540059),
    A = r(688465),
    C = r(425886),
    N = r(80966),
    R = r(593545),
    O = r(479313),
    D = r(765104),
    L = r(505953),
    x = r(695346),
    w = r(201542),
    P = r(306680),
    M = r(594174),
    k = r(259580),
    U = r(626135),
    B = r(823379),
    G = r(589530),
    Z = r(709054),
    F = r(217702),
    V = r(981631),
    j = r(420212),
    H = r(814249),
    Y = r(388032),
    W = r(89111);
let K = {
        delay: 300,
        position: 'top'
    },
    z = (e) => (n) => {
        null == e || e(n), (0, G.jA)(n);
    },
    q = (e) => (n) => {
        null == e || e(n), (0, G.Zj)(n);
    };
function Q(e) {
    let { onVolumeChange: n, onMute: r, volume: i, autoMute: a, alt: l, renderAdjacentContent: u, renderOverlayContent: c, ...d } = e,
        f = z(n),
        p = q(r);
    return (
        (i = null == i ? G.FC : i),
        (a = null == a ? G.rs : a),
        (0, o.jsxs)(s.Fragment, {
            children: [
                (0, o.jsx)(N.Z, {
                    ...d,
                    alt: l,
                    volume: i,
                    autoMute: a,
                    onVolumeChange: f,
                    onMute: p,
                    renderLinkComponent: ee,
                    renderOverlayContent: c
                }),
                null != u && u()
            ]
        })
    );
}
function X(e) {
    let { onVolumeChange: n, volume: r, onMute: i, onVolumeShow: a, onVolumeHide: l, renderAdjacentContent: u, ...c } = e,
        d = z(n),
        f = q(i);
    r = null == r ? G.FC : r;
    let p = () => !1;
    return (0, o.jsxs)(s.Fragment, {
        children: [
            (0, o.jsx)(C.Z, {
                ...c,
                onVolumeChange: d,
                onMute: f,
                onVolumeShow: a,
                onVolumeHide: l,
                volume: r,
                autoMute: p,
                renderLinkComponent: ee
            }),
            null != u && u()
        ]
    });
}
function J(e) {
    let { onVolumeChange: n, volume: r, onMute: i, ...a } = e,
        s = z(n),
        l = q(i);
    return (
        (r = null == r ? G.FC : r),
        (0, o.jsx)(w.Z, {
            ...a,
            onVolumeChange: s,
            onMute: l,
            volume: r
        })
    );
}
function $(e) {
    let { alt: n, hiddenSpoilers: r, renderAdjacentContent: i, containerClassName: a, imageContainerClassName: l, disableAltTextDisplay: c = !1, mediaLayoutType: d, imageContainerStyle: f } = e,
        p = d === F.hV.MOSAIC,
        _ = !c && x.H1.getSetting() && null != n && '' !== n && !0 !== r,
        m = (e) => {
            let { altText: n } = e;
            return (0, o.jsxs)(h.Dialog, {
                'aria-label': Y.intl.string(Y.t.fSiQ3N),
                className: W.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === j.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, o.jsx)('span', {
                        className: W.mediaMosaicAltTextPopoutTitle,
                        children: Y.intl.string(Y.t.fSiQ3N)
                    }),
                    (0, o.jsx)('span', {
                        className: W.mediaMosaicAltTextPopoutDescription,
                        children: n
                    })
                ]
            });
        },
        E = s.createRef();
    return (0, o.jsxs)('div', {
        className: u()(W.imageContent, a),
        children: [
            (0, o.jsxs)('div', {
                className: u()(W.imageContainer, l),
                style: f,
                children: [(0, o.jsx)(g.Z, { ...e }), null != i && i()]
            }),
            p &&
                _ &&
                (0, o.jsx)('div', {
                    className: W.mediaMosaicAltTextContainer,
                    children: (0, o.jsx)(h.Popout, {
                        animation: h.Popout.Animation.FADE,
                        renderPopout: () => (0, o.jsx)(m, { altText: n }),
                        children: (e) =>
                            (0, o.jsx)(h.FocusRing, {
                                offset: 4,
                                children: (0, o.jsx)('button', {
                                    ...e,
                                    type: 'button',
                                    ref: E,
                                    'aria-label': Y.intl.string(Y.t.fSiQ3N),
                                    className: W.mediaMosaicAltText,
                                    children: Y.intl.string(Y.t.jCV1T0)
                                })
                            })
                    })
                }),
            !p &&
                _ &&
                (0, o.jsx)('span', {
                    className: W.altText,
                    children: n
                })
        ]
    });
}
function ee(e) {
    return (0, o.jsx)(E.Z, { ...e });
}
function et(e) {
    let { renderAdjacentContent: n, ...r } = e;
    return (0, o.jsxs)(s.Fragment, {
        children: [(0, o.jsx)(R.Z, { ...r }), null != n && n()]
    });
}
function en(e) {
    return (0, o.jsx)(b.Z, { ...e });
}
function er(e) {
    switch (e) {
        case 0:
            return Y.intl.string(Y.t['4EvBb2']);
        case 1:
            return Y.intl.string(Y.t['1J6Xq6']);
        default:
            return (0, B.vE)(e);
    }
}
function ei(e) {
    switch (e) {
        case 0:
            return Y.intl.string(Y.t.gpoQsL);
        case 1:
            return Y.intl.string(Y.t['k3RM8/']);
        default:
            return (0, B.vE)(e);
    }
}
!(function (e) {
    (e[(e.OLD_MESSAGES = 0)] = 'OLD_MESSAGES'), (e[(e.REPLY = 1)] = 'REPLY');
})(i || (i = {}));
let ea = (e) => {
        let { type: n = 0, onClick: r, className: i } = e,
            a = (0, S.Q3)('JumpToPresentBar');
        return (0, o.jsx)(I.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, o.jsxs)('div', {
                          className: u()(W.jumpToPresentBar, i),
                          children: [
                              (0, o.jsx)(h.FocusRing, {
                                  offset: 4,
                                  children: (0, o.jsx)('button', {
                                      type: 'button',
                                      onClick: r,
                                      className: W.barButtonMain,
                                      children: er(n)
                                  })
                              }),
                              null != r
                                  ? (0, o.jsx)(h.FocusRing, {
                                        offset: 4,
                                        children: a
                                            ? (0, o.jsx)(h.Button, {
                                                  size: 'sm',
                                                  onClick: r,
                                                  children: ei(n)
                                              })
                                            : (0, o.jsxs)('button', {
                                                  type: 'button',
                                                  onClick: r,
                                                  className: W.barButtonAlt,
                                                  children: [ei(n), (0, o.jsx)(k.Z, { className: W.barButtonIcon })]
                                              })
                                    })
                                  : (0, o.jsx)(h.Spinner, {
                                        type: h.Spinner.Type.PULSING_ELLIPSIS,
                                        className: W.spinner,
                                        itemClassName: W.spinnerItem
                                    })
                          ]
                      })
        });
    },
    eo = (e) => {
        let { onClick: n, loading: r, className: i } = e;
        return (0, o.jsx)(I.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, o.jsxs)(h.Clickable, {
                          className: u()(W.messagesErrorBar, i),
                          onClick: n,
                          focusProps: {
                              offset: {
                                  top: 4,
                                  right: 4,
                                  bottom: 12,
                                  left: 4
                              }
                          },
                          children: [
                              (0, o.jsx)('div', {
                                  className: W.barButtonMain,
                                  children: Y.intl.string(Y.t['1zUvl5'])
                              }),
                              r
                                  ? (0, o.jsx)(h.Spinner, {
                                        type: h.Spinner.Type.PULSING_ELLIPSIS,
                                        className: W.spinner,
                                        itemClassName: W.spinnerItem
                                    })
                                  : (0, o.jsx)('div', {
                                        className: W.barButtonAlt,
                                        children: Y.intl.string(Y.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function es(e) {
    let { content: n, channelId: r } = e,
        [i] = s.useState(() => (0, T.hQ)('NewMessagesBarJumpToNewMessages_')),
        a = s.useCallback(() => {
            let e = P.ZP.ackMessageId(r);
            null != e
                ? _.Z.jumpToMessage({
                      channelId: r,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : _.Z.jumpToMessage({
                      channelId: r,
                      messageId: Z.default.castChannelIdAsMessageId(r),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [r]),
        l = s.useCallback(() => {
            (0, m.In)(r);
        }, [r]),
        { disableInteractions: c } = s.useContext(I.G);
    return c
        ? null
        : (0, o.jsxs)('div', {
              className: u()(W.newMessagesBar, { [W.disableInteractions]: c }),
              children: [
                  (0, o.jsx)(h.FocusRing, {
                      offset: 4,
                      children: (0, o.jsx)('button', {
                          type: 'button',
                          className: W.barButtonMain,
                          onClick: a,
                          'aria-label': Y.intl.string(Y.t.z0Mkp6),
                          'aria-describedby': i,
                          children: (0, o.jsx)('span', {
                              id: i,
                              className: W.span,
                              children: n
                          })
                      })
                  }),
                  (0, o.jsx)(h.FocusRing, {
                      offset: 4,
                      children: (0, o.jsxs)('button', {
                          type: 'button',
                          onClick: l,
                          className: W.barButtonAlt,
                          children: [
                              Y.intl.string(Y.t.e6RscX),
                              (0, o.jsx)(h.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: W.barButtonIcon
                              })
                          ]
                      })
                  })
              ]
          });
}
function el(e) {
    var n, r, i;
    let { channel: a, content: l, scrollManager: c } = e,
        { disableInteractions: g } = s.useContext(I.G),
        [E, b] = s.useState(null),
        T = s.useRef(null),
        [S, C] = s.useState(null),
        N = s.useRef(null),
        R = (0, p.Wu)(
            [D.Z],
            () => {
                var e;
                return null !== (e = D.Z.summaries(a.id)) && void 0 !== e ? e : [];
            },
            [a]
        ),
        x = (0, y.Z)(R);
    s.useEffect(() => {
        !d().isEqual(x, R) &&
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: R.length,
                message_counts: R.map((e) => e.count),
                start_message_ids: R.map((e) => e.startId),
                end_message_ids: R.map((e) => e.endId),
                num_participants: R.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            });
    }, [R, x, a.guild_id, a.id, a.type]);
    let w = (0, p.e7)(
            [M.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == R
                            ? void 0
                            : R.map((e) => {
                                  var n;
                                  return null === (n = e.people) || void 0 === n
                                      ? void 0
                                      : n
                                            .map((e) => {
                                                var n;
                                                return null !== (n = M.default.getUser(e)) && void 0 !== n ? n : null;
                                            })
                                            .filter(B.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [R],
            ec
        ),
        G = null !== (r = (0, p.e7)([D.Z], () => D.Z.visibleSummaryIndex())) && void 0 !== r ? r : -1,
        F = null == R ? void 0 : null === (n = R[G]) || void 0 === n ? void 0 : n.topic;
    null == F && null == E && (null == R ? void 0 : R.length) >= 1 && (F = null === (i = R[0]) || void 0 === i ? void 0 : i.topic);
    let j = s.useMemo(
            () =>
                d().debounce((e) => {
                    var n;
                    b(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null);
                }, 64),
            [b]
        ),
        K = s.useMemo(
            () =>
                d().throttle(
                    () => {
                        (0, O.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        z = s.useCallback(
            (e) => {
                K(), j(e);
            },
            [j, K]
        ),
        [q, Q] = s.useState(!1),
        X = s.useCallback(() => {
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !q,
                num_summaries: R.length,
                message_counts: R.map((e) => e.count),
                start_message_ids: R.map((e) => e.startId),
                end_message_ids: R.map((e) => e.endId),
                num_participants: R.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            }),
                Q(!q);
        }, [q, R, Q, a]),
        J = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
                    r = R[e];
                if (null == r) return;
                (0, O.wv)(a.id, r.id), (0, O.yK)(a.id, r.id);
                let i = () => {
                    c.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            c.addAutomaticAnchorCallback(z, !1);
                        }, 100);
                };
                c.removeAutomaticAnchorCallback(z),
                    c.addScrollCompleteCallback(i),
                    U.default.track(V.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: r.startId,
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }),
                    _.Z.jumpToMessage({
                        channelId: a.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: v.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [R, a, z, c]
        ),
        $ = s.useCallback((e) => {
            var n;
            Q(e);
            let r = null === (n = N.current) || void 0 === n ? void 0 : n.scrollTop;
            null != r && C(r);
        }, []);
    s.useEffect(() => {
        if (null != S && q) {
            var e;
            null === (e = N.current) || void 0 === e || e.scrollTo({ top: S });
        }
    }, [S, q]);
    let ee = s.useCallback(
        (e) => {
            var n;
            if (!((0, f.k)(e.target) && (null === (n = T.current) || void 0 === n ? void 0 : n.contains(e.target))))
                q &&
                    U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: R.length,
                        message_counts: R.map((e) => e.count),
                        start_message_ids: R.map((e) => e.startId),
                        end_message_ids: R.map((e) => e.endId),
                        num_participants: R.map((e) => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }),
                    $(!1);
        },
        [q, R, a, $]
    );
    s.useEffect(
        () => (
            c.addAutomaticAnchorCallback(z),
            () => {
                c.removeAutomaticAnchorCallback(z);
            }
        ),
        [c, z]
    ),
        s.useEffect(() => {
            (0, O.G1)(a.id);
        }, [a.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', ee),
                () => {
                    document.removeEventListener('mousedown', ee);
                }
            ),
            [ee]
        );
    let et = s.useMemo(
            () =>
                (0, o.jsx)(L.Z, {
                    channel: a,
                    summaries: R,
                    summariesMembers: w,
                    selectTopic: J,
                    setOpen: $
                }),
            [R, w, J, $, a]
        ),
        en = s.useCallback(() => {
            let e = P.ZP.ackMessageId(a.id);
            null != e
                ? _.Z.jumpToMessage({
                      channelId: a.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : _.Z.jumpToMessage({
                      channelId: a.id,
                      messageId: Z.default.castChannelIdAsMessageId(a.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [a.id]),
        er = s.useCallback(() => {
            (0, m.In)(a.id);
        }, [a.id]),
        ei = Y.intl.string(Y.t['38qwgI']);
    return (
        R.length > 0 && (ei = '' === F || null == F ? Y.intl.string(Y.t.DwnFuL) : F),
        g
            ? null
            : (0, o.jsxs)('div', {
                  ref: T,
                  className: u()(W.newTopicsBarContainer, W.containerMarginTop),
                  children: [
                      (0, o.jsx)('div', {
                          className: u()(W.newTopicsBarTopicSection),
                          children: (0, o.jsx)(h.Clickable, {
                              className: W.newTopicsBarTextClickable,
                              'aria-label': Y.intl.string(Y.t.RT3MPz),
                              onClick: X,
                              children: (0, o.jsxs)('div', {
                                  className: u()({
                                      [W.newTopicsBarTextUnselected]: !q,
                                      [W.newTopicsBarTextSelected]: q
                                  }),
                                  children: [
                                      (0, o.jsx)(h.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: W.newTopicsBarIcon
                                      }),
                                      (0, o.jsx)(h.Text, {
                                          variant: 'text-sm/medium',
                                          className: u()(W.newTopicsBarCompact, W.newTopicsBarText),
                                          children: ei
                                      }),
                                      (0, o.jsx)(k.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: k.Z.Directions.DOWN,
                                          className: W.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, o.jsx)(h.Clickable, {
                          onClick: en,
                          className: u()(W.barButtonMain, W.newTopicsBarInitial),
                          children: l
                      }),
                      (0, o.jsxs)(h.Clickable, {
                          onClick: er,
                          className: u()(W.barButtonAlt, W.flexEnd),
                          children: [
                              (0, o.jsx)('div', {
                                  className: W.newTopicsBarCompact,
                                  children: Y.intl.string(Y.t.e6RscX)
                              }),
                              (0, o.jsx)(h.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: W.barButtonIcon
                              })
                          ]
                      }),
                      q &&
                          (0, o.jsxs)('div', {
                              className: W.topicsDropdown,
                              children: [
                                  (0, o.jsxs)('div', {
                                      className: W.topicsDropdownHeading,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: W.topicsDropdownHeadingText,
                                              children: [
                                                  (0, o.jsx)(h.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: W.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, o.jsx)(h.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Y.intl.string(Y.t.q21fUl)
                                                  }),
                                                  (0, o.jsx)(A.Z, { className: W.summariesBetaTag })
                                              ]
                                          }),
                                          (0, o.jsx)(h.Clickable, {
                                              'aria-label': Y.intl.string(Y.t.cpT0Cg),
                                              onClick: X,
                                              className: W.topicsDropdownClose,
                                              children: (0, o.jsx)(h.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, o.jsx)(h.Scroller, {
                                      ref: N,
                                      className: W.topicsScroller,
                                      fade: !0,
                                      children: et
                                  })
                              ]
                          })
                  ]
              })
    );
}
function eu(e, n) {
    return null != n && e.length === n.length && !e.some((e, r) => n[r] !== e);
}
function ec(e, n) {
    return null != n && e.length === n.length && !e.some((e, r) => !eu(e, n[r]));
}
function ed(e) {
    var n, r, i;
    let { channel: a, scrollManager: l } = e,
        { disableInteractions: c } = s.useContext(I.G),
        [m, g] = s.useState(null),
        E = s.useRef(null),
        [b, T] = s.useState(null),
        S = s.useRef(null),
        C = (0, p.Wu)(
            [D.Z],
            () => {
                var e;
                return null !== (e = D.Z.summaries(a.id)) && void 0 !== e ? e : [];
            },
            [a]
        ),
        N = (0, y.Z)(C);
    s.useEffect(() => {
        !d().isEqual(N, C) &&
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            });
    }, [C, N, a.guild_id, a.id, a.type]);
    let R = (0, p.e7)(
            [M.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == C
                            ? void 0
                            : C.map((e) => {
                                  var n;
                                  return null === (n = e.people) || void 0 === n
                                      ? void 0
                                      : n
                                            .map((e) => {
                                                var n;
                                                return null !== (n = M.default.getUser(e)) && void 0 !== n ? n : null;
                                            })
                                            .filter(B.lm);
                              })) && void 0 !== e
                    ? e
                    : [];
            },
            [C],
            ec
        ),
        x = null !== (r = (0, p.e7)([D.Z], () => D.Z.visibleSummaryIndex())) && void 0 !== r ? r : -1,
        w = null == C ? void 0 : null === (n = C[x]) || void 0 === n ? void 0 : n.topic;
    null == w && null == m && (null == C ? void 0 : C.length) >= 1 && (w = null === (i = C[0]) || void 0 === i ? void 0 : i.topic);
    let P = s.useMemo(() => d().get(C, x - 1), [x, C]),
        G = s.useMemo(() => d().get(C, x + 1), [x, C]),
        Z = s.useMemo(
            () =>
                d().debounce((e) => {
                    var n;
                    g(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null);
                }, 64),
            [g]
        ),
        F = s.useMemo(
            () =>
                d().throttle(
                    () => {
                        (0, O.yK)(null);
                    },
                    1200,
                    { trailing: !1 }
                ),
            []
        ),
        j = s.useCallback(
            (e) => {
                F(), Z(e);
            },
            [Z, F]
        ),
        [K, z] = s.useState(!1),
        q = s.useCallback(() => {
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !K,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            }),
                z(!K);
        }, [K, C, z, a]),
        Q = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
                    r = C[e];
                if (null == r) return;
                (0, O.wv)(a.id, r.id), (0, O.yK)(a.id, r.id);
                let i = () => {
                    l.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            l.addAutomaticAnchorCallback(j, !1);
                        }, 100);
                };
                l.removeAutomaticAnchorCallback(j),
                    l.addScrollCompleteCallback(i),
                    U.default.track(V.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: r.startId,
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }),
                    _.Z.jumpToMessage({
                        channelId: a.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: v.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [C, a, j, l]
        ),
        X = s.useCallback(() => {
            Q(x - 1, H.DZ.PILL_NEXT_ARROW);
        }, [Q, x]),
        J = s.useCallback(() => {
            Q(x + 1, H.DZ.PILL_PREVIOUS_ARROW);
        }, [x, Q]),
        $ = s.useCallback((e) => {
            var n;
            z(e);
            let r = null === (n = S.current) || void 0 === n ? void 0 : n.scrollTop;
            null != r && T(r);
        }, []);
    s.useEffect(() => {
        if (null != b && K) {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollTo({ top: b });
        }
    }, [b, K]);
    let ee = s.useCallback(
        (e) => {
            var n;
            if (!((0, f.k)(e.target) && (null === (n = E.current) || void 0 === n ? void 0 : n.contains(e.target))))
                K &&
                    U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: C.length,
                        message_counts: C.map((e) => e.count),
                        start_message_ids: C.map((e) => e.startId),
                        end_message_ids: C.map((e) => e.endId),
                        num_participants: C.map((e) => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }),
                    $(!1);
        },
        [K, C, a, $]
    );
    s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(j),
            () => {
                l.removeAutomaticAnchorCallback(j);
            }
        ),
        [l, j]
    ),
        s.useEffect(() => {
            (0, O.G1)(a.id);
        }, [a.id]),
        s.useEffect(
            () => (
                document.addEventListener('mousedown', ee),
                () => {
                    document.removeEventListener('mousedown', ee);
                }
            ),
            [ee]
        );
    let et = s.useMemo(
        () =>
            (0, o.jsx)(L.Z, {
                channel: a,
                summaries: C,
                summariesMembers: R,
                selectTopic: Q,
                setOpen: $
            }),
        [C, R, Q, $, a]
    );
    if (!(0, p.e7)([D.Z], () => D.Z.shouldShowTopicsBar())) return null;
    let en = Y.intl.string(Y.t['38qwgI']);
    return (
        C.length > 0 && (en = '' === w || null == w ? Y.intl.string(Y.t.DwnFuL) : w),
        c
            ? null
            : (0, o.jsxs)('div', {
                  ref: E,
                  className: u()(W.topicsPillContainer, W.containerMarginTop),
                  children: [
                      (0, o.jsxs)('div', {
                          className: W.topicsPill,
                          children: [
                              (0, o.jsx)(h.Clickable, {
                                  className: W.topicsPillText,
                                  'aria-label': Y.intl.string(Y.t.RT3MPz),
                                  onClick: q,
                                  children: (0, o.jsxs)('div', {
                                      className: u()({
                                          [W.topicsPillTextUnselected]: !K,
                                          [W.topicsPillTextSelected]: K
                                      }),
                                      children: [
                                          (0, o.jsx)(h.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: W.topicsPillSummaryIcon
                                          }),
                                          (0, o.jsx)(h.Text, {
                                              className: W.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: en
                                          }),
                                          (0, o.jsx)(k.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: k.Z.Directions.DOWN,
                                              className: W.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, o.jsxs)('div', {
                                  className: W.topicsPillCarets,
                                  children: [
                                      (0, o.jsx)(h.Clickable, {
                                          'aria-label': Y.intl.string(Y.t['4huCnJ']),
                                          onClick: J,
                                          className: u()(W.topicsPillCaret, W.topicsCaretLeft, { [W.topicsPillCaretDisabled]: null == G }),
                                          children: (0, o.jsx)(k.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: k.Z.Directions.UP
                                          })
                                      }),
                                      (0, o.jsx)(h.Clickable, {
                                          'aria-label': Y.intl.string(Y.t['58KOoK']),
                                          onClick: X,
                                          className: u()(W.topicsPillCaret, W.topicsCaretRight, { [W.topicsPillCaretDisabled]: null == P }),
                                          children: (0, o.jsx)(k.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: k.Z.Directions.DOWN
                                          })
                                      })
                                  ]
                              })
                          ]
                      }),
                      K &&
                          (0, o.jsxs)('div', {
                              className: W.topicsDropdown,
                              children: [
                                  (0, o.jsxs)('div', {
                                      className: W.topicsDropdownHeading,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: W.topicsDropdownHeadingText,
                                              children: [
                                                  (0, o.jsx)(h.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: W.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, o.jsx)(h.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Y.intl.string(Y.t.q21fUl)
                                                  }),
                                                  (0, o.jsx)(A.Z, { className: W.summariesBetaTag })
                                              ]
                                          }),
                                          (0, o.jsx)(h.Clickable, {
                                              'aria-label': Y.intl.string(Y.t.cpT0Cg),
                                              onClick: q,
                                              className: W.topicsDropdownClose,
                                              children: (0, o.jsx)(h.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, o.jsx)(h.Scroller, {
                                      ref: S,
                                      className: W.topicsScroller,
                                      fade: !0,
                                      children: et
                                  })
                              ]
                          })
                  ]
              })
    );
}
let ef = function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, o.jsxs)('div', {
            className: W.tooltip,
            children: [
                (0, o.jsx)(h.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: W.tooltipEmojiName,
                    children: e
                }),
                n &&
                    (0, o.jsx)(h.Text, {
                        className: W.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: Y.intl.string(Y.t['515vjI'])
                    })
            ]
        });
    },
    ep = (e) => {
        let { children: n, className: r } = e;
        return (0, o.jsx)('div', {
            className: u()(W.popoutContainer, r),
            children: n
        });
    },
    eh = (e) => {
        let { className: n } = e;
        return (0, o.jsx)(ep, {
            className: n,
            children: (0, o.jsx)('div', {
                className: W.popoutLoadingBackground,
                children: (0, o.jsx)('div', { className: W.popoutLoadingForeground })
            })
        });
    };
