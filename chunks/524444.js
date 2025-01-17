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
        return eo;
    },
    Rp: function () {
        return es;
    },
    SE: function () {
        return eh;
    },
    W_: function () {
        return e_;
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
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(513431),
    _ = r(442837),
    h = r(481060),
    p = r(904245),
    m = r(45114),
    g = r(431279),
    E = r(794295),
    v = r(593472),
    I = r(110924),
    T = r(40330),
    b = r(249458),
    y = r(313201),
    S = r(540059),
    A = r(688465),
    N = r(425886),
    C = r(80966),
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
        _ = q(r);
    return (
        (i = null == i ? G.FC : i),
        (a = null == a ? G.rs : a),
        (0, s.jsxs)(o.Fragment, {
            children: [
                (0, s.jsx)(C.Z, {
                    ...d,
                    alt: l,
                    volume: i,
                    autoMute: a,
                    onVolumeChange: f,
                    onMute: _,
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
    let _ = () => !1;
    return (0, s.jsxs)(o.Fragment, {
        children: [
            (0, s.jsx)(N.Z, {
                ...c,
                onVolumeChange: d,
                onMute: f,
                onVolumeShow: a,
                onVolumeHide: l,
                volume: r,
                autoMute: _,
                renderLinkComponent: ee
            }),
            null != u && u()
        ]
    });
}
function J(e) {
    let { onVolumeChange: n, volume: r, onMute: i, ...a } = e,
        o = z(n),
        l = q(i);
    return (
        (r = null == r ? G.FC : r),
        (0, s.jsx)(w.Z, {
            ...a,
            onVolumeChange: o,
            onMute: l,
            volume: r
        })
    );
}
function $(e) {
    let { alt: n, hiddenSpoilers: r, renderAdjacentContent: i, containerClassName: a, imageContainerClassName: l, disableAltTextDisplay: c = !1, mediaLayoutType: d, imageContainerStyle: f } = e,
        _ = d === F.hV.MOSAIC,
        p = !c && x.H1.getSetting() && null != n && '' !== n && !0 !== r,
        m = (e) => {
            let { altText: n } = e;
            return (0, s.jsxs)(h.Dialog, {
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
                    (0, s.jsx)('span', {
                        className: W.mediaMosaicAltTextPopoutTitle,
                        children: Y.intl.string(Y.t.fSiQ3N)
                    }),
                    (0, s.jsx)('span', {
                        className: W.mediaMosaicAltTextPopoutDescription,
                        children: n
                    })
                ]
            });
        },
        E = o.createRef();
    return (0, s.jsxs)('div', {
        className: u()(W.imageContent, a),
        children: [
            (0, s.jsxs)('div', {
                className: u()(W.imageContainer, l),
                style: f,
                children: [(0, s.jsx)(g.Z, { ...e }), null != i && i()]
            }),
            _ &&
                p &&
                (0, s.jsx)('div', {
                    className: W.mediaMosaicAltTextContainer,
                    children: (0, s.jsx)(h.Popout, {
                        animation: h.Popout.Animation.FADE,
                        renderPopout: () => (0, s.jsx)(m, { altText: n }),
                        children: (e) =>
                            (0, s.jsx)(h.FocusRing, {
                                offset: 4,
                                children: (0, s.jsx)('button', {
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
            !_ &&
                p &&
                (0, s.jsx)('span', {
                    className: W.altText,
                    children: n
                })
        ]
    });
}
function ee(e) {
    return (0, s.jsx)(E.Z, { ...e });
}
function et(e) {
    let { renderAdjacentContent: n, ...r } = e;
    return (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)(R.Z, { ...r }), null != n && n()]
    });
}
function en(e) {
    return (0, s.jsx)(T.Z, { ...e });
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
        return (0, s.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, s.jsxs)('div', {
                          className: u()(W.jumpToPresentBar, i),
                          children: [
                              (0, s.jsx)(h.FocusRing, {
                                  offset: 4,
                                  children: (0, s.jsx)('button', {
                                      type: 'button',
                                      onClick: r,
                                      className: W.barButtonMain,
                                      children: er(n)
                                  })
                              }),
                              null != r
                                  ? (0, s.jsx)(h.FocusRing, {
                                        offset: 4,
                                        children: a
                                            ? (0, s.jsx)(h.Button, {
                                                  size: 'sm',
                                                  onClick: r,
                                                  children: ei(n)
                                              })
                                            : (0, s.jsxs)('button', {
                                                  type: 'button',
                                                  onClick: r,
                                                  className: W.barButtonAlt,
                                                  children: [ei(n), (0, s.jsx)(k.Z, { className: W.barButtonIcon })]
                                              })
                                    })
                                  : (0, s.jsx)(h.Spinner, {
                                        type: h.Spinner.Type.PULSING_ELLIPSIS,
                                        className: W.spinner,
                                        itemClassName: W.spinnerItem
                                    })
                          ]
                      })
        });
    },
    es = (e) => {
        let { onClick: n, loading: r, className: i } = e;
        return (0, s.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, s.jsxs)(h.Clickable, {
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
                              (0, s.jsx)('div', {
                                  className: W.barButtonMain,
                                  children: Y.intl.string(Y.t['1zUvl5'])
                              }),
                              r
                                  ? (0, s.jsx)(h.Spinner, {
                                        type: h.Spinner.Type.PULSING_ELLIPSIS,
                                        className: W.spinner,
                                        itemClassName: W.spinnerItem
                                    })
                                  : (0, s.jsx)('div', {
                                        className: W.barButtonAlt,
                                        children: Y.intl.string(Y.t.TdQXAw)
                                    })
                          ]
                      })
        });
    };
function eo(e) {
    let { content: n, channelId: r } = e,
        [i] = o.useState(() => (0, y.hQ)('NewMessagesBarJumpToNewMessages_')),
        a = o.useCallback(() => {
            let e = P.ZP.ackMessageId(r);
            null != e
                ? p.Z.jumpToMessage({
                      channelId: r,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : p.Z.jumpToMessage({
                      channelId: r,
                      messageId: Z.default.castChannelIdAsMessageId(r),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [r]),
        l = o.useCallback(() => {
            (0, m.In)(r);
        }, [r]),
        { disableInteractions: c } = o.useContext(b.G);
    return c
        ? null
        : (0, s.jsxs)('div', {
              className: u()(W.newMessagesBar, { [W.disableInteractions]: c }),
              children: [
                  (0, s.jsx)(h.FocusRing, {
                      offset: 4,
                      children: (0, s.jsx)('button', {
                          type: 'button',
                          className: W.barButtonMain,
                          onClick: a,
                          'aria-label': Y.intl.string(Y.t.z0Mkp6),
                          'aria-describedby': i,
                          children: (0, s.jsx)('span', {
                              id: i,
                              className: W.span,
                              children: n
                          })
                      })
                  }),
                  (0, s.jsx)(h.FocusRing, {
                      offset: 4,
                      children: (0, s.jsxs)('button', {
                          type: 'button',
                          onClick: l,
                          className: W.barButtonAlt,
                          children: [
                              Y.intl.string(Y.t.e6RscX),
                              (0, s.jsx)(h.ChatCheckIcon, {
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
        { disableInteractions: g } = o.useContext(b.G),
        [E, T] = o.useState(null),
        y = o.useRef(null),
        [S, N] = o.useState(null),
        C = o.useRef(null),
        R = (0, _.Wu)(
            [D.Z],
            () => {
                var e;
                return null !== (e = D.Z.summaries(a.id)) && void 0 !== e ? e : [];
            },
            [a]
        ),
        x = (0, I.Z)(R);
    o.useEffect(() => {
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
    let w = (0, _.e7)(
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
        G = null !== (r = (0, _.e7)([D.Z], () => D.Z.visibleSummaryIndex())) && void 0 !== r ? r : -1,
        F = null == R ? void 0 : null === (n = R[G]) || void 0 === n ? void 0 : n.topic;
    null == F && null == E && (null == R ? void 0 : R.length) >= 1 && (F = null === (i = R[0]) || void 0 === i ? void 0 : i.topic);
    let j = o.useMemo(
            () =>
                d().debounce((e) => {
                    var n;
                    T(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null);
                }, 64),
            [T]
        ),
        K = o.useMemo(
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
        z = o.useCallback(
            (e) => {
                K(), j(e);
            },
            [j, K]
        ),
        [q, Q] = o.useState(!1),
        X = o.useCallback(() => {
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
        J = o.useCallback(
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
                    p.Z.jumpToMessage({
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
        $ = o.useCallback((e) => {
            var n;
            Q(e);
            let r = null === (n = C.current) || void 0 === n ? void 0 : n.scrollTop;
            null != r && N(r);
        }, []);
    o.useEffect(() => {
        if (null != S && q) {
            var e;
            null === (e = C.current) || void 0 === e || e.scrollTo({ top: S });
        }
    }, [S, q]);
    let ee = o.useCallback(
        (e) => {
            var n;
            if (!((0, f.k)(e.target) && (null === (n = y.current) || void 0 === n ? void 0 : n.contains(e.target))))
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
    o.useEffect(
        () => (
            c.addAutomaticAnchorCallback(z),
            () => {
                c.removeAutomaticAnchorCallback(z);
            }
        ),
        [c, z]
    ),
        o.useEffect(() => {
            (0, O.G1)(a.id);
        }, [a.id]),
        o.useEffect(
            () => (
                document.addEventListener('mousedown', ee),
                () => {
                    document.removeEventListener('mousedown', ee);
                }
            ),
            [ee]
        );
    let et = o.useMemo(
            () =>
                (0, s.jsx)(L.Z, {
                    channel: a,
                    summaries: R,
                    summariesMembers: w,
                    selectTopic: J,
                    setOpen: $
                }),
            [R, w, J, $, a]
        ),
        en = o.useCallback(() => {
            let e = P.ZP.ackMessageId(a.id);
            null != e
                ? p.Z.jumpToMessage({
                      channelId: a.id,
                      messageId: e,
                      offset: 1,
                      context: 'Mark As Read'
                  })
                : p.Z.jumpToMessage({
                      channelId: a.id,
                      messageId: Z.default.castChannelIdAsMessageId(a.id),
                      offset: 1,
                      context: 'Mark As Read'
                  });
        }, [a.id]),
        er = o.useCallback(() => {
            (0, m.In)(a.id);
        }, [a.id]),
        ei = Y.intl.string(Y.t['38qwgI']);
    return (
        R.length > 0 && (ei = '' === F || null == F ? Y.intl.string(Y.t.DwnFuL) : F),
        g
            ? null
            : (0, s.jsxs)('div', {
                  ref: y,
                  className: u()(W.newTopicsBarContainer, W.containerMarginTop),
                  children: [
                      (0, s.jsx)('div', {
                          className: u()(W.newTopicsBarTopicSection),
                          children: (0, s.jsx)(h.Clickable, {
                              className: W.newTopicsBarTextClickable,
                              'aria-label': Y.intl.string(Y.t.RT3MPz),
                              onClick: X,
                              children: (0, s.jsxs)('div', {
                                  className: u()({
                                      [W.newTopicsBarTextUnselected]: !q,
                                      [W.newTopicsBarTextSelected]: q
                                  }),
                                  children: [
                                      (0, s.jsx)(h.TopicsIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: W.newTopicsBarIcon
                                      }),
                                      (0, s.jsx)(h.Text, {
                                          variant: 'text-sm/medium',
                                          className: u()(W.newTopicsBarCompact, W.newTopicsBarText),
                                          children: ei
                                      }),
                                      (0, s.jsx)(k.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: k.Z.Directions.DOWN,
                                          className: W.newTopicsBarCaret
                                      })
                                  ]
                              })
                          })
                      }),
                      (0, s.jsx)(h.Clickable, {
                          onClick: en,
                          className: u()(W.barButtonMain, W.newTopicsBarInitial),
                          children: l
                      }),
                      (0, s.jsxs)(h.Clickable, {
                          onClick: er,
                          className: u()(W.barButtonAlt, W.flexEnd),
                          children: [
                              (0, s.jsx)('div', {
                                  className: W.newTopicsBarCompact,
                                  children: Y.intl.string(Y.t.e6RscX)
                              }),
                              (0, s.jsx)(h.ChatCheckIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: W.barButtonIcon
                              })
                          ]
                      }),
                      q &&
                          (0, s.jsxs)('div', {
                              className: W.topicsDropdown,
                              children: [
                                  (0, s.jsxs)('div', {
                                      className: W.topicsDropdownHeading,
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: W.topicsDropdownHeadingText,
                                              children: [
                                                  (0, s.jsx)(h.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: W.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, s.jsx)(h.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Y.intl.string(Y.t.q21fUl)
                                                  }),
                                                  (0, s.jsx)(A.Z, { className: W.summariesBetaTag })
                                              ]
                                          }),
                                          (0, s.jsx)(h.Clickable, {
                                              'aria-label': Y.intl.string(Y.t.cpT0Cg),
                                              onClick: X,
                                              className: W.topicsDropdownClose,
                                              children: (0, s.jsx)(h.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, s.jsx)(h.Scroller, {
                                      ref: C,
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
        { disableInteractions: c } = o.useContext(b.G),
        [m, g] = o.useState(null),
        E = o.useRef(null),
        [T, y] = o.useState(null),
        S = o.useRef(null),
        N = (0, _.Wu)(
            [D.Z],
            () => {
                var e;
                return null !== (e = D.Z.summaries(a.id)) && void 0 !== e ? e : [];
            },
            [a]
        ),
        C = (0, I.Z)(N);
    o.useEffect(() => {
        !d().isEqual(C, N) &&
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            });
    }, [N, C, a.guild_id, a.id, a.type]);
    let R = (0, _.e7)(
            [M.default],
            () => {
                var e;
                return null !==
                    (e =
                        null == N
                            ? void 0
                            : N.map((e) => {
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
            [N],
            ec
        ),
        x = null !== (r = (0, _.e7)([D.Z], () => D.Z.visibleSummaryIndex())) && void 0 !== r ? r : -1,
        w = null == N ? void 0 : null === (n = N[x]) || void 0 === n ? void 0 : n.topic;
    null == w && null == m && (null == N ? void 0 : N.length) >= 1 && (w = null === (i = N[0]) || void 0 === i ? void 0 : i.topic);
    let P = o.useMemo(() => d().get(N, x - 1), [x, N]),
        G = o.useMemo(() => d().get(N, x + 1), [x, N]),
        Z = o.useMemo(
            () =>
                d().debounce((e) => {
                    var n;
                    g(null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null);
                }, 64),
            [g]
        ),
        F = o.useMemo(
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
        j = o.useCallback(
            (e) => {
                F(), Z(e);
            },
            [Z, F]
        ),
        [K, z] = o.useState(!1),
        q = o.useCallback(() => {
            U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !K,
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: a.guild_id,
                channel_id: a.id,
                channel_type: a.type
            }),
                z(!K);
        }, [K, N, z, a]),
        Q = o.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.DZ.PILL_DROPDOWN,
                    r = N[e];
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
                    p.Z.jumpToMessage({
                        channelId: a.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: v.SR.ANIMATED,
                        context: 'Summary Jump'
                    });
            },
            [N, a, j, l]
        ),
        X = o.useCallback(() => {
            Q(x - 1, H.DZ.PILL_NEXT_ARROW);
        }, [Q, x]),
        J = o.useCallback(() => {
            Q(x + 1, H.DZ.PILL_PREVIOUS_ARROW);
        }, [x, Q]),
        $ = o.useCallback((e) => {
            var n;
            z(e);
            let r = null === (n = S.current) || void 0 === n ? void 0 : n.scrollTop;
            null != r && y(r);
        }, []);
    o.useEffect(() => {
        if (null != T && K) {
            var e;
            null === (e = S.current) || void 0 === e || e.scrollTo({ top: T });
        }
    }, [T, K]);
    let ee = o.useCallback(
        (e) => {
            var n;
            if (!((0, f.k)(e.target) && (null === (n = E.current) || void 0 === n ? void 0 : n.contains(e.target))))
                K &&
                    U.default.track(V.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: N.length,
                        message_counts: N.map((e) => e.count),
                        start_message_ids: N.map((e) => e.startId),
                        end_message_ids: N.map((e) => e.endId),
                        num_participants: N.map((e) => e.people.length),
                        guild_id: a.guild_id,
                        channel_id: a.id,
                        channel_type: a.type
                    }),
                    $(!1);
        },
        [K, N, a, $]
    );
    o.useEffect(
        () => (
            l.addAutomaticAnchorCallback(j),
            () => {
                l.removeAutomaticAnchorCallback(j);
            }
        ),
        [l, j]
    ),
        o.useEffect(() => {
            (0, O.G1)(a.id);
        }, [a.id]),
        o.useEffect(
            () => (
                document.addEventListener('mousedown', ee),
                () => {
                    document.removeEventListener('mousedown', ee);
                }
            ),
            [ee]
        );
    let et = o.useMemo(
        () =>
            (0, s.jsx)(L.Z, {
                channel: a,
                summaries: N,
                summariesMembers: R,
                selectTopic: Q,
                setOpen: $
            }),
        [N, R, Q, $, a]
    );
    if (!(0, _.e7)([D.Z], () => D.Z.shouldShowTopicsBar())) return null;
    let en = Y.intl.string(Y.t['38qwgI']);
    return (
        N.length > 0 && (en = '' === w || null == w ? Y.intl.string(Y.t.DwnFuL) : w),
        c
            ? null
            : (0, s.jsxs)('div', {
                  ref: E,
                  className: u()(W.topicsPillContainer, W.containerMarginTop),
                  children: [
                      (0, s.jsxs)('div', {
                          className: W.topicsPill,
                          children: [
                              (0, s.jsx)(h.Clickable, {
                                  className: W.topicsPillText,
                                  'aria-label': Y.intl.string(Y.t.RT3MPz),
                                  onClick: q,
                                  children: (0, s.jsxs)('div', {
                                      className: u()({
                                          [W.topicsPillTextUnselected]: !K,
                                          [W.topicsPillTextSelected]: K
                                      }),
                                      children: [
                                          (0, s.jsx)(h.TopicsIcon, {
                                              size: 'xs',
                                              color: 'currentColor',
                                              className: W.topicsPillSummaryIcon
                                          }),
                                          (0, s.jsx)(h.Text, {
                                              className: W.topicsPillTextTitle,
                                              variant: 'text-sm/medium',
                                              children: en
                                          }),
                                          (0, s.jsx)(k.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: k.Z.Directions.DOWN,
                                              className: W.topicsPillDropdownCaret
                                          })
                                      ]
                                  })
                              }),
                              (0, s.jsxs)('div', {
                                  className: W.topicsPillCarets,
                                  children: [
                                      (0, s.jsx)(h.Clickable, {
                                          'aria-label': Y.intl.string(Y.t['4huCnJ']),
                                          onClick: J,
                                          className: u()(W.topicsPillCaret, W.topicsCaretLeft, { [W.topicsPillCaretDisabled]: null == G }),
                                          children: (0, s.jsx)(k.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: k.Z.Directions.UP
                                          })
                                      }),
                                      (0, s.jsx)(h.Clickable, {
                                          'aria-label': Y.intl.string(Y.t['58KOoK']),
                                          onClick: X,
                                          className: u()(W.topicsPillCaret, W.topicsCaretRight, { [W.topicsPillCaretDisabled]: null == P }),
                                          children: (0, s.jsx)(k.Z, {
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
                          (0, s.jsxs)('div', {
                              className: W.topicsDropdown,
                              children: [
                                  (0, s.jsxs)('div', {
                                      className: W.topicsDropdownHeading,
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: W.topicsDropdownHeadingText,
                                              children: [
                                                  (0, s.jsx)(h.TopicsIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      className: W.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20
                                                  }),
                                                  (0, s.jsx)(h.Heading, {
                                                      variant: 'heading-md/bold',
                                                      color: 'header-primary',
                                                      lineClamp: 1,
                                                      children: Y.intl.string(Y.t.q21fUl)
                                                  }),
                                                  (0, s.jsx)(A.Z, { className: W.summariesBetaTag })
                                              ]
                                          }),
                                          (0, s.jsx)(h.Clickable, {
                                              'aria-label': Y.intl.string(Y.t.cpT0Cg),
                                              onClick: q,
                                              className: W.topicsDropdownClose,
                                              children: (0, s.jsx)(h.XSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                                  (0, s.jsx)(h.Scroller, {
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
        return (0, s.jsxs)('div', {
            className: W.tooltip,
            children: [
                (0, s.jsx)(h.Text, {
                    color: 'none',
                    variant: 'text-sm/semibold',
                    lineClamp: 1,
                    className: W.tooltipEmojiName,
                    children: e
                }),
                n &&
                    (0, s.jsx)(h.Text, {
                        className: W.clickCTA,
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: Y.intl.string(Y.t['515vjI'])
                    })
            ]
        });
    },
    e_ = (e) => {
        let { children: n, className: r } = e;
        return (0, s.jsx)('div', {
            className: u()(W.popoutContainer, r),
            children: n
        });
    },
    eh = (e) => {
        let { className: n } = e;
        return (0, s.jsx)(e_, {
            className: n,
            children: (0, s.jsx)('div', {
                className: W.popoutLoadingBackground,
                children: (0, s.jsx)('div', { className: W.popoutLoadingForeground })
            })
        });
    };
