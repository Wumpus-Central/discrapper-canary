n.d(t, { A: () => e5 });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    c = n(311907),
    u = n(554146),
    A = n(697744),
    h = n(533781),
    _ = n(416696),
    m = n(446080),
    p = n(385278),
    g = n(435371),
    E = n(421380),
    I = n(397927),
    f = n(827343),
    C = n(442433),
    T = n(951001),
    N = n(707606),
    S = n(155718),
    x = n(933958),
    v = n(967812),
    y = n(404522),
    b = n(782091),
    O = n(641703),
    L = n(521588),
    R = n(793574),
    P = n(688810),
    j = n(975412),
    D = n(17143),
    M = n(750765),
    w = n(384059),
    U = n(480890),
    G = n(47167),
    k = n(235986),
    V = n(932001),
    B = n(379848),
    H = n(643501),
    F = n(857253),
    Y = n(41261),
    q = n(880144),
    W = n(338771),
    K = n(421838),
    z = n(891540),
    $ = n(164956),
    Q = n(267102),
    X = n(3527),
    Z = n(976860),
    J = n(178442),
    ee = n(104357),
    et = n(478564),
    en = n(729081),
    ei = n(123973),
    er = n(477835),
    el = n(63995),
    ea = n(69407),
    es = n(96566),
    eo = n(302884),
    ed = n(30108),
    ec = n(39938),
    eu = n(105530),
    eA = n(253932),
    eh = n(151476),
    e_ = n(405018),
    em = n(704877),
    ep = n(848362),
    eg = n(222692),
    eE = n(702904),
    eI = n(471993),
    ef = n(442353),
    eC = n(970636),
    eT = n(616356),
    eN = n(961350),
    eS = n(734057),
    ex = n(71393),
    ev = n(186111),
    ey = n(430452),
    eb = n(576705),
    eO = n(383501),
    eL = n(994500),
    eR = n(287809),
    eP = n(977997),
    ej = n(607567),
    eD = n(954571),
    eM = n(975571),
    ew = n(427262),
    eU = n(42473),
    eG = n(994314),
    ek = n(40234),
    eV = n(253742),
    eB = n(652215),
    eH = n(806931),
    eF = n(49999),
    eY = n(897513),
    eq = n(509381),
    eW = n(985018),
    eK = n(255259);
let ez = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function e$(e) {
    let t = e.currentTarget;
    eD.default.track(eB.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eB.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eQ() {
    let e = r.useRef(null);
    (0, I.tjt)(e),
        r.useEffect(() => {
            eD.default.track(eB.HAw.OPEN_POPOUT, { type: eB.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let { noiseCancellationActive: t, systemMicrophoneMode: n } = (0, c.cf)([ey.Ay], () => ({
            noiseCancellationActive: ey.Ay.getNoiseCancellation(),
            systemMicrophoneMode: ey.Ay.getSystemMicrophoneMode(),
        })),
        l = !(0, X.A)(!0, n, { location: "NoiseCancellationPopout" }),
        a = (0, c.bG)([ey.Ay], () => ey.Ay.getActiveInputProfile()),
        s = null != a && a !== eq.m.CUSTOM,
        o = eW.intl.string(eW.t.uKdWn6),
        d = eW.intl.string(eW.t.uKdWn6);
    return (
        l
            ? ((o = eW.intl.string(eW.t.mXZgC9)),
              (d = eW.intl.format(eW.t.F6lrb4, {
                  onSettingsClick: () => {
                      ey.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : s &&
              (o = eW.intl.formatToPlainString(eW.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eK.dD,
            children: [
                (0, i.jsx)(g.m_, {
                    text: o,
                    shouldShow: s || l,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(I.dOG, {
                            label: eW.intl.string(eW.t["WGWHv/"]),
                            checked: t && !l,
                            disabled: s || l,
                            onChange: () => f.A.setNoiseCancellation(!t, { section: eB.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(I.Text, { variant: "text-sm/normal", children: d }),
                (0, i.jsx)(D.A, {
                    title: eW.intl.string(eW.t.JdUas1),
                    notchBackground: D.V.BLACK,
                    buttonTest: eW.intl.string(eW.t["sG+MGg"]),
                    buttonStop: eW.intl.string(eW.t.Yp3SbJ),
                    location: { section: eB.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(I.D0$, {
                    label: eW.intl.string(eW.t.k6h1F4),
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.BETWEEN,
                        className: eK.__invalid_footer,
                        children: [
                            (0, i.jsx)(I.MzZ, {
                                href: eB.X7G.KRISP,
                                onClick: (e) => e$(e),
                                children: (0, i.jsx)("div", { className: eK.zQ }),
                            }),
                            (0, i.jsx)(I.MzZ, {
                                href: eM.A.getArticleURL(eB.MVz.NOISE_SUPPRESSION),
                                className: eK.W,
                                onClick: (e) => e$(e),
                                children: eW.intl.string(eW.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eX() {
    let { parentAnalyticsLocation: e } = (0, P.Ay)(),
        t = (0, c.bG)([ec.A], () => ec.A.isMuted()),
        n = t ? eW.intl.string(eW.t.ScHlfl) : eW.intl.string(eW.t.zqxfrf);
    return (0, i.jsx)(eU.A, {
        tooltipText: n,
        icon: t ? I.CIB : I.T7G,
        onClick: () => {
            (0, w.X)(e, w.O.STAGE_MUSIC, t), (0, eo.k)(!t);
        },
    });
}
function eZ(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = r.useRef(null),
        { parentAnalyticsLocation: o } = (0, P.Ay)(),
        d = (0, eh.A)(),
        u = (0, em.A)(t),
        A = (0, c.bG)(
            [x.Ay],
            () => null != x.Ay.getSelfEmbeddedActivityForLocation(x.Ay.getConnectedActivityLocation()),
        ),
        h = (0, ei.Ay)(t),
        { reachedLimit: _, limit: p } = (0, e_.A)(t),
        C = r.useCallback(() => {
            (0, eg.A)();
        }, []),
        T = (0, Q.Us)(),
        N = r.useCallback(
            (e) => {
                if (ey.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    f.A.setVideoEnabled(e), e && (0, Z.pX)(eB.BVt.CHANNEL(t.getGuildId() ?? eB.ME, t.id));
                };
                (0, w.X)(o, w.O.CAMERA, e), e ? (0, ef.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = A || n || h,
        { Component: v, play: y, events: b } = (0, m.K)(d.enabled ? "disable" : "enable");
    return (
        r.useEffect(() => () => y(), [d.enabled, y]),
        (0, i.jsx)(eC.r, {
            onChange: N,
            onCameraUnavailable: C,
            hasPermission: u,
            channelLimit: p,
            channelLimitReached: _,
            ...d,
            enabled: !l && d.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: r, iconComponent: l, iconColor: d, ...c } = e,
                    u = (0, i.jsx)(v, { size: "md", className: a()(eK.iA, { [eK.ij]: !S }), color: "currentColor" });
                return (0, i.jsx)(I.YNO, {
                    targetElementRef: s,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(M.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, U.s)("VideoDeviceMenu", o),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: I.YNO.Animation.FADE,
                    children: (e, l) => {
                        let { onClick: o, ...d } = e,
                            { isShown: A } = l;
                        return (0, i.jsx)(g.m_, {
                            text: r,
                            children: (0, i.jsx)(E.$n, {
                                "data-migration-pending": !0,
                                buttonRef: s,
                                ...c,
                                ...d,
                                onClick: (e) => {
                                    c.onClick(e), A && o(e);
                                },
                                onMouseEnter: () => {
                                    d.onMouseEnter?.(), b.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    b.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    o(e);
                                },
                                size: E.$n.Sizes.MEDIUM,
                                className: a()(eK.x6, eK.Sq, { [eK.rK]: n, [eK.tU]: t, [eK.r9]: c.disabled }),
                                innerClassName: eK.bk,
                                wrapperClassName: eK.x6,
                                fullWidth: !0,
                                focusProps: ez,
                                children: S
                                    ? u
                                    : (0, i.jsxs)(k.A, {
                                          align: k.A.Align.CENTER,
                                          children: [u, eW.intl.string(eW.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function eJ(e) {
    let { channel: t, enableActivities: n } = e,
        r = (0, Q.Us)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, P.Ay)(),
        o = r === eB.BRT.POPOUT,
        d = (0, b.et)(t.id),
        h = (0, b.dL)(d),
        { userInActivity: _ } = (0, c.cf)([x.Ay], () => ({
            userInActivity: null != x.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        m = (0, y.b)({ surface: S.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        p = d !== b.xy.CAN_LAUNCH,
        { Component: I, events: f, play: C } = (0, A.c)();
    return n
        ? (0, i.jsx)(B.GY, {
              contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: m,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: r } = e;
                  return (0, i.jsx)(g.m_, {
                      text: h,
                      children: (0, i.jsxs)(E.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: E.$n.Sizes.MEDIUM,
                          ...f,
                          onClick: () => {
                              C(),
                                  (0, j.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: o,
                                      analyticsLocation: s,
                                  }),
                                  (0, w.X)(l, w.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eF.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              f.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              f.onMouseLeave();
                          },
                          disabled: p,
                          className: a()(eK.x6, eK.Sq, { [eK.rK]: _, [eK.r9]: p }),
                          innerClassName: eK.bk,
                          wrapperClassName: eK.x6,
                          focusProps: ez,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(L.a, { top: -1, right: -1 }),
                              (0, i.jsx)(I, { size: "md", color: "currentColor", className: eK.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function e0(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        { parentAnalyticsLocation: l } = (0, P.Ay)(),
        {
            Component: s,
            play: o,
            events: { onMouseEnter: d, onMouseLeave: c, ...A },
        } = (0, h.T)(),
        [_, m] = r.useState(!1),
        [p, f] = (0, V.kn)([u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        C = r.useCallback(() => {
            m(!1);
        }, []),
        T = r.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(en.A, { channel: t, closePopout: n, isHovered: _ });
            },
            [t, _],
        ),
        N = r.useCallback(() => {
            o(),
                _ ? m(!1) : m(!0),
                (0, w.X)(l, w.O.GIFTING),
                p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && f(eF.i.TAKE_ACTION);
        }, [l, o, _, p, f]);
    return (0, i.jsx)(I.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: I.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: C,
        renderPopout: T,
        children: () =>
            (0, i.jsx)(g.m_, {
                text: eW.intl.string(eW.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !_,
                onTooltipShow: d,
                onTooltipHide: c,
                children: (0, i.jsxs)(E.$n, {
                    "data-migration-pending": !0,
                    fullWidth: !0,
                    size: E.$n.Sizes.MEDIUM,
                    buttonRef: n,
                    ...A,
                    onClick: N,
                    className: a()(eK.x6, eK.Sq),
                    innerClassName: eK.bk,
                    wrapperClassName: eK.x6,
                    focusProps: ez,
                    children: [
                        p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(L.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(s, { size: "md", color: "currentColor", className: eK.iA }),
                    ],
                }),
            }),
    });
}
function e1(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: A } = (0, P.Ay)(),
        h = (0, c.bG)([eR.default], () => eR.default.getCurrentUser()),
        m = (0, c.yK)([eT.A], () => eT.A.getAllActiveStreams()),
        p = (0, em.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([x.Ay], () => null != x.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, ei.Ay)(n),
        N = r.useCallback(() => {
            (0, eI.A)(f, n.id, A);
        }, [f, n.id, A]),
        S = m.find((e) => e.ownerId === h?.id),
        v = (0, ep.T)(n, h, m);
    t = null == S ? (l ? N : eE.A) : () => (0, W.A)(S);
    let y = null != S || v.length > 0,
        b = p ? eW.intl.string(eW.t.fjBNo1) : eW.intl.string(eW.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        { Component: R, events: j, play: D } = (0, _.c)(L ? "disable" : "enable");
    r.useEffect(() => () => D(), [D, L]);
    let M = (0, i.jsx)(R, { size: "md", color: "currentColor", className: a()(eK.iA, { [eK.ij]: !O }) });
    return (0, i.jsx)(I.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ep.A, {
                channel: n,
                currentUser: h,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? N : eE.A,
                onInteraction: (0, U.s)("ManageStreamsMenu", u, { entrypoint: eH.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: I.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...l } = e;
            return (0, i.jsx)(g.m_, {
                text: b,
                children: (0, i.jsx)(E.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: E.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, w.X)(u, w.O.STREAM, null == S), y ? n(e) : t();
                    },
                    disabled: !p || o,
                    className: a()(eK.x6, eK.Sq, { [eK.rK]: null != S, [eK.r9]: !p || o }),
                    ...(y ? l : null),
                    onMouseEnter: () => {
                        r?.(), j.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        j.onMouseLeave();
                    },
                    innerClassName: eK.bk,
                    wrapperClassName: eK.x6,
                    focusProps: ez,
                    children: O
                        ? M
                        : (0, i.jsxs)(k.A, { align: k.A.Align.CENTER, children: [M, eW.intl.string(eW.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class e7 extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            T.A.channelListScrollTo(t?.id ?? eB.ME, n.id),
            (0, w.X)(R.A.RTC_PANEL, w.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: r } = this.props;
        (0, C.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, i.jsx)(P.f5, {
                    value: r,
                    children: (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, U.s)("RTCConnectionMenu", R.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        K.sF(eY._.VOICE_PANEL_INTRODUCTION);
    };
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: r,
                rtcConnectionState: l,
                rtcConnectionLastPing: a,
                hasVideo: s,
            } = this.props;
        if (null == t) return null;
        let o = (0, G.m1)(t, eR.default, eL.A);
        return (
            null != n
                ? ((e = eB.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eB.BVt.CHANNEL(eB.ME, t.id)),
            (0, i.jsx)(J.A, {
                channelId: t.id,
                quality: r,
                state: l,
                lastPing: a,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(I.vN3, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eG.A, {
                            className: eK.Ix,
                            children: (0, i.jsx)(I.Text, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: o,
                            }),
                        }),
                    }),
                }),
            })
        );
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: r,
            channel: l,
            voiceStates: a,
        } = this.props;
        return null != r
            ? null
            : l?.isGuildStageVoice() &&
                null ==
                    a.find((e) => e.user.id === eN.default.getId() && (0, eu.eY)(e.voiceState) === eu.zF.ON_STAGE) &&
                (0, ed.Zl)(l.id)
              ? (0, i.jsx)(eX, {})
              : !n && t
                ? (0, i.jsx)(g.m_, {
                      text: eW.intl.string(eW.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eU.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: I.mXj,
                          "aria-label": eW.intl.string(eW.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      I.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eQ, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(e6, {
                                  popoutProps: t,
                                  isShown: r,
                                  noiseCancellationActive: e,
                                  ref: this.krispButtonRef,
                              });
                          },
                      },
                      "krisp-popout",
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, i.jsx)(eV.A, { voiceStates: t, channel: e, className: eK.Xk })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: r,
            voiceStates: l,
            selfStream: a,
            isPrivateChannelWithEnabledActivities: s,
            showSocialLayerStorefrontGiftingButton: o,
        } = this.props;
        if (null == e || null != n) return null;
        let d = eN.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, es.Bw)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, e_.M)(e),
            A = (0, es.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eK.uu,
            children: [
                (0, i.jsx)(eZ, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(e1, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == a) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(eJ, { channel: e, enableActivities: r }) : null,
                o ? (0, i.jsx)(e0, { channel: e }) : null,
                (0, ei.Ay)(e) ? (0, i.jsx)(er.A, { channel: e, focusProps: ez }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: a()(eK.SC, "theme-light"),
            children: [
                (0, i.jsx)(I.Heading, {
                    className: eK.oN,
                    variant: "heading-md/semibold",
                    children: eW.intl.string(eW.t["ba/rL2"]),
                }),
                (0, i.jsx)(I.Text, {
                    className: eK.uf,
                    variant: "text-sm/normal",
                    children: eW.intl.string(eW.t.Ne1Eew),
                }),
                (0, i.jsx)(I.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eW.intl.string(eW.t.shaBeH),
                    focusProps: ez,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(I.YNO, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: I.YNO.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)("div", {
                          ref: this.ref,
                          className: eK.kL,
                          children: [
                              (0, i.jsxs)(k.A, {
                                  className: eK.FI,
                                  align: k.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: eK.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(k.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eK.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(ek.A, { channel: e }),
                                          ],
                                      }),
                                  ],
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons(),
                          ],
                      }),
              });
    }
}
function e6(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, P.Ay)(),
        { play: o, Component: d, events: c } = (0, p.G)(l ? "disable" : "enable");
    return (
        r.useEffect(() => () => o(), [l, o]),
        (0, i.jsx)(eU.A, {
            ...t,
            ref: a,
            onClick: (e) => {
                (0, w.X)(s, w.O.KRISP, !l), t.onClick(e);
            },
            onMouseEnter: () => {
                t.onMouseEnter?.(), c.onMouseEnter();
            },
            onMouseLeave: () => {
                c.onMouseLeave();
            },
            tooltipText: n ? null : eW.intl.string(eW.t.vFiCSx),
            icon: (0, i.jsx)(d, { size: "refresh_sm" }),
        })
    );
}
let e5 = (0, N.A)(function (e) {
    let t = (0, F.A)(),
        n = (0, c.bG)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        l = (0, c.bG)([eR.default], () => eR.default.getCurrentUser()),
        { channelId: a, ...s } = (0, c.cf)([eO.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eB.bFR.FINE,
                      rtcConnectionState: eB.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eO.A.getChannelId(),
                      rtcConnectionQuality: eO.A.getQuality(),
                      rtcConnectionState: eO.A.getState(),
                      rtcConnectionLastPing: eO.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eS.A], () => eS.A.getChannel(a), [a]),
        d = o?.getGuildId(),
        u = (0, c.bG)([ex.A], () => ex.A.getGuild(d), [d]),
        A = (0, c.cf)([ey.Ay], () => ({
            noiseCancellationSupported: ey.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, X.A)(ey.Ay.getNoiseCancellation(), ey.Ay.getSystemMicrophoneMode(), {
                location: "RTCConnection",
            }),
            noiseCancellationError: ey.Ay.isNoiseCancellationError(),
            canGoLive: (0, q.A)(ey.Ay),
        })),
        h = (0, c.bG)(
            [ey.Ay, z.A],
            () =>
                z.A.hasHotspot(eY._.VOICE_PANEL_INTRODUCTION) &&
                (0, ew.mv)(l) &&
                !ey.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, c.bG)([eP.A], () => null != a && eP.A.hasVideo(a), [a]),
        m = (0, c.bG)([eT.A], () => eT.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([ev.A], () => ev.A.hasLayers()),
        g = (0, c.bG)([$.A], () => $.A.isViewingRoles(d)),
        E = (0, c.bG)([eb.A], () => g && !eb.A.can(eB.xBc.VIEW_CHANNEL, o), [g, o]),
        f = eA.vL.useSetting(),
        [C, T, N] = (0, c.yK)(
            [ej.Ay, el.A],
            () =>
                o?.isGuildStageVoice()
                    ? [el.A.getMutableParticipants(o.id, ea.ip.SPEAKER), el.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? ej.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        S = r.useMemo(
            () =>
                C?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                N ??
                [],
            [C, T, N],
        ),
        [x, y] = r.useState(!1);
    r.useEffect(() => {
        (g || E) && y(!1);
    }, [g, E, y]);
    let { analyticsLocations: b } = (0, P.Ay)(R.A.RTC_PANEL),
        L = (0, v.A)(d ?? eB.dJq, o?.id),
        j = (0, O.A)(o?.id),
        D = (0, ee.T)({ location: "RTCConnection" }),
        M = (0, et.A)({ channelId: o?.id, location: "RTCConnection" });
    return (0, i.jsx)(P.f5, {
        value: b,
        children: (0, i.jsxs)("div", {
            className: eK.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(Y.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(e7, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: L,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: _,
                    selfStream: m,
                    hasLayers: p,
                    voiceStates: S,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    showSocialLayerStorefrontGiftingButton: D && M,
                    isPrivateChannelWithEnabledActivities: j,
                    analyticsLocations: b,
                }),
                !x && g && null != d
                    ? (0, i.jsxs)("div", {
                          className: eK.BT,
                          children: [
                              (0, i.jsx)(I.Text, {
                                  variant: "text-sm/normal",
                                  className: eK.u0,
                                  children: E ? eW.intl.string(eW.t.efjuQJ) : eW.intl.string(eW.t.br8H2N),
                              }),
                              (0, i.jsx)(I.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      y(!0);
                                  },
                                  text: eW.intl.string(eW.t.WAI6xu),
                                  focusProps: ez,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
