n.d(t, { A: () => eZ });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    c = n(311907),
    u = n(554146),
    A = n(435371),
    h = n(421380),
    _ = n(397927),
    m = n(827343),
    p = n(442433),
    g = n(951001),
    E = n(707606),
    I = n(155718),
    f = n(933958),
    C = n(967812),
    T = n(404522),
    N = n(782091),
    S = n(641703),
    x = n(521588),
    v = n(793574),
    y = n(688810),
    b = n(975412),
    O = n(17143),
    L = n(750765),
    R = n(384059),
    P = n(480890),
    j = n(47167),
    D = n(235986),
    M = n(379848),
    w = n(643501),
    U = n(857253),
    G = n(41261),
    k = n(880144),
    V = n(338771),
    B = n(421838),
    H = n(891540),
    F = n(164956),
    Y = n(267102),
    W = n(3527),
    q = n(976860),
    K = n(178442),
    z = n(104357),
    $ = n(478564),
    Q = n(729081),
    X = n(123973),
    Z = n(477835),
    J = n(63995),
    ee = n(69407),
    et = n(96566),
    en = n(302884),
    ei = n(30108),
    er = n(39938),
    el = n(105530),
    ea = n(253932),
    es = n(151476),
    eo = n(405018),
    ed = n(704877),
    ec = n(848362),
    eu = n(222692),
    eA = n(702904),
    eh = n(471993),
    e_ = n(442353),
    em = n(970636),
    ep = n(616356),
    eg = n(961350),
    eE = n(734057),
    eI = n(71393),
    ef = n(186111),
    eC = n(430452),
    eT = n(576705),
    eN = n(383501),
    eS = n(994500),
    ex = n(287809),
    ev = n(977997),
    ey = n(607567),
    eb = n(954571),
    eO = n(975571),
    eL = n(427262),
    eR = n(42473),
    eP = n(994314),
    ej = n(40234),
    eD = n(253742),
    eM = n(652215),
    ew = n(806931),
    eU = n(49999),
    eG = n(897513),
    ek = n(509381),
    eV = n(985018),
    eB = n(255259);
let eH = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eF(e) {
    let t = e.currentTarget;
    eb.default.track(eM.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eM.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eY() {
    let e = r.useRef(null);
    (0, _.tjt)(e),
        r.useEffect(() => {
            eb.default.track(eM.HAw.OPEN_POPOUT, { type: eM.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let { noiseCancellationActive: t, systemMicrophoneMode: n } = (0, c.cf)([eC.Ay], () => ({
            noiseCancellationActive: eC.Ay.getNoiseCancellation(),
            systemMicrophoneMode: eC.Ay.getSystemMicrophoneMode(),
        })),
        l = !(0, W.A)(!0, n, { location: "NoiseCancellationPopout" }),
        a = (0, c.bG)([eC.Ay], () => eC.Ay.getActiveInputProfile()),
        s = null != a && a !== ek.m.CUSTOM,
        o = eV.intl.string(eV.t.uKdWn6),
        d = eV.intl.string(eV.t.uKdWn6);
    return (
        l
            ? ((o = eV.intl.string(eV.t.mXZgC9)),
              (d = eV.intl.format(eV.t.F6lrb4, {
                  onSettingsClick: () => {
                      eC.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : s &&
              (o = eV.intl.formatToPlainString(eV.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eB.dD,
            children: [
                (0, i.jsx)(A.m_, {
                    text: o,
                    shouldShow: s || l,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(_.dOG, {
                            label: eV.intl.string(eV.t["WGWHv/"]),
                            checked: t && !l,
                            disabled: s || l,
                            onChange: () => m.A.setNoiseCancellation(!t, { section: eM.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(_.Text, { variant: "text-sm/normal", children: d }),
                (0, i.jsx)(O.A, {
                    title: eV.intl.string(eV.t.JdUas1),
                    notchBackground: O.V.BLACK,
                    buttonTest: eV.intl.string(eV.t["sG+MGg"]),
                    buttonStop: eV.intl.string(eV.t.Yp3SbJ),
                    location: { section: eM.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(_.D0$, {
                    label: eV.intl.string(eV.t.k6h1F4),
                    children: (0, i.jsxs)(D.A, {
                        justify: D.A.Justify.BETWEEN,
                        className: eB.__invalid_footer,
                        children: [
                            (0, i.jsx)(_.MzZ, {
                                href: eM.X7G.KRISP,
                                onClick: (e) => eF(e),
                                children: (0, i.jsx)("div", { className: eB.zQ }),
                            }),
                            (0, i.jsx)(_.MzZ, {
                                href: eO.A.getArticleURL(eM.MVz.NOISE_SUPPRESSION),
                                className: eB.W,
                                onClick: (e) => eF(e),
                                children: eV.intl.string(eV.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eW() {
    let { parentAnalyticsLocation: e } = (0, y.Ay)(),
        t = (0, c.bG)([er.A], () => er.A.isMuted()),
        n = t ? eV.intl.string(eV.t.ScHlfl) : eV.intl.string(eV.t.zqxfrf);
    return (0, i.jsx)(eR.A, {
        tooltipText: n,
        icon: t ? _.CIB : _.T7G,
        onClick: () => {
            (0, R.X)(e, R.O.STAGE_MUSIC, t), (0, en.k)(!t);
        },
    });
}
function eq(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = r.useRef(null),
        { parentAnalyticsLocation: o } = (0, y.Ay)(),
        d = (0, es.A)(),
        u = (0, ed.A)(t),
        p = (0, c.bG)(
            [f.Ay],
            () => null != f.Ay.getSelfEmbeddedActivityForLocation(f.Ay.getConnectedActivityLocation()),
        ),
        g = (0, X.Ay)(t),
        { reachedLimit: E, limit: I } = (0, eo.A)(t),
        C = r.useCallback(() => {
            (0, eu.A)();
        }, []),
        T = (0, Y.Us)(),
        N = r.useCallback(
            (e) => {
                if (eC.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    m.A.setVideoEnabled(e), e && (0, q.pX)(eM.BVt.CHANNEL(t.getGuildId() ?? eM.ME, t.id));
                };
                (0, R.X)(o, R.O.CAMERA, e), e ? (0, e_.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = p || n || g;
    return (0, i.jsx)(em.r, {
        onChange: N,
        onCameraUnavailable: C,
        hasPermission: u,
        channelLimit: I,
        channelLimitReached: E,
        ...d,
        enabled: !l && d.enabled,
        children: (e) => {
            let { unavailable: t, isActive: n, label: r, ...l } = e,
                c = (0, i.jsx)(_.gau, {
                    allowAnimationWhileUnfocused: !0,
                    defaultViewModelInstance: d.enabled ? "CamOn" : "CamOff",
                    eventTargetRef: s,
                    className: a()(_.d5l.sm, { [eB.ij]: !S }),
                    dataBinding: { fill: "currentColor", on: d.enabled },
                });
            return (0, i.jsx)(_.YNO, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(L.A, { onClose: t, minimal: !0, onInteraction: (0, P.s)("VideoDeviceMenu", o) });
                },
                position: "top",
                align: "center",
                animation: _.YNO.Animation.FADE,
                children: (e, o) => {
                    let { onClick: d, ...u } = e,
                        { isShown: _ } = o;
                    return (0, i.jsx)(A.m_, {
                        text: r,
                        children: (0, i.jsx)(h.$n, {
                            "data-migration-pending": !0,
                            buttonRef: s,
                            ...l,
                            ...u,
                            onClick: (e) => {
                                l.onClick(e), _ && d(e);
                            },
                            onContextMenu: (e) => {
                                d(e);
                            },
                            size: h.$n.Sizes.MEDIUM,
                            className: a()(eB.x6, eB.Sq, { [eB.rK]: n, [eB.tU]: t, [eB.r9]: l.disabled }),
                            innerClassName: eB.bk,
                            wrapperClassName: eB.x6,
                            fullWidth: !0,
                            focusProps: eH,
                            children: S
                                ? c
                                : (0, i.jsxs)(D.A, {
                                      align: D.A.Align.CENTER,
                                      children: [c, eV.intl.string(eV.t.FlNoSV)],
                                  }),
                        }),
                    });
                },
            });
        },
    });
}
function eK(e) {
    let { channel: t, enableActivities: n } = e,
        l = (0, Y.Us)(),
        { parentAnalyticsLocation: s, newestAnalyticsLocation: o } = (0, y.Ay)(),
        d = l === eM.BRT.POPOUT,
        m = (0, N.et)(t.id),
        p = (0, N.dL)(m),
        { userInActivity: g } = (0, c.cf)([f.Ay], () => ({
            userInActivity: null != f.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        E = (0, T.b)({ surface: I.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        C = m !== N.xy.CAN_LAUNCH,
        S = r.useRef(null);
    return n
        ? (0, i.jsx)(M.GY, {
              contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: E,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: r } = e;
                  return (0, i.jsx)(A.m_, {
                      text: p,
                      children: (0, i.jsxs)(h.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: h.$n.Sizes.MEDIUM,
                          buttonRef: S,
                          onClick: () => {
                              (0, b.A)({
                                  context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                  openInPopout: d,
                                  analyticsLocation: o,
                              }),
                                  (0, R.X)(s, R.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eU.i.TAKE_ACTION);
                          },
                          disabled: C,
                          className: a()(eB.x6, eB.Sq, { [eB.rK]: g, [eB.r9]: C }),
                          innerClassName: eB.bk,
                          wrapperClassName: eB.x6,
                          focusProps: eH,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(x.a, { top: -1, right: -1 }),
                              (0, i.jsx)(_.lmr, {
                                  eventTargetRef: S,
                                  className: _.d5l.sm,
                                  dataBinding: { fill: "currentColor" },
                              }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function ez(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        { parentAnalyticsLocation: l } = (0, y.Ay)(),
        [s, o] = r.useState(!1),
        [d, c] = (0, M.kn)([u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        m = r.useCallback(() => {
            o(!1);
        }, []),
        p = r.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(Q.A, { channel: t, closePopout: n, isHovered: s });
            },
            [t, s],
        ),
        g = r.useCallback(() => {
            s ? o(!1) : o(!0),
                (0, R.X)(l, R.O.GIFTING),
                d === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && c(eU.i.TAKE_ACTION);
        }, [l, s, d, c]);
    return (0, i.jsx)(_.YNO, {
        targetElementRef: n,
        shouldShow: s,
        animation: _.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: m,
        renderPopout: p,
        children: () =>
            (0, i.jsx)(A.m_, {
                text: eV.intl.string(eV.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !s,
                children: (0, i.jsxs)(h.$n, {
                    "data-migration-pending": !0,
                    fullWidth: !0,
                    size: h.$n.Sizes.MEDIUM,
                    buttonRef: n,
                    onClick: g,
                    className: a()(eB.x6, eB.Sq),
                    innerClassName: eB.bk,
                    wrapperClassName: eB.x6,
                    focusProps: eH,
                    children: [
                        d === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(x.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(_.xBs, {
                            dataBinding: { fill: "currentColor" },
                            className: a()(eB.iA, _.d5l.refresh_sm),
                            eventTargetRef: n,
                        }),
                    ],
                }),
            }),
    });
}
function e$(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: m } = (0, y.Ay)(),
        p = (0, c.bG)([ex.default], () => ex.default.getCurrentUser()),
        g = (0, c.yK)([ep.A], () => ep.A.getAllActiveStreams()),
        E = (0, ed.A)(n),
        I = n.getGuildId(),
        C = (0, c.cf)([f.Ay], () => null != f.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, X.Ay)(n),
        N = r.useCallback(() => {
            (0, eh.A)(I, n.id, m);
        }, [I, n.id, m]),
        S = g.find((e) => e.ownerId === p?.id),
        x = (0, ec.T)(n, p, g);
    t = null == S ? (l ? N : eA.A) : () => (0, V.A)(S);
    let v = null != S || x.length > 0,
        b = E ? eV.intl.string(eV.t.fjBNo1) : eV.intl.string(eV.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        j = (0, i.jsx)(_.gxO, {
            allowAnimationWhileUnfocused: !0,
            defaultViewModelInstance: L ? "Off" : "On",
            eventTargetRef: d,
            dataBinding: { fill: "currentColor", on: !L },
            className: a()(_.d5l.sm, { [eB.ij]: !O }),
        });
    return (0, i.jsx)(_.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ec.A, {
                channel: n,
                currentUser: p,
                activeStreams: g,
                onClose: t,
                handleGoLive: l ? N : eA.A,
                onInteraction: (0, P.s)("ManageStreamsMenu", u, { entrypoint: ew.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: _.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...l } = e;
            return (0, i.jsx)(A.m_, {
                text: b,
                children: (0, i.jsx)(h.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: h.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, R.X)(u, R.O.STREAM, null == S), v ? n(e) : t();
                    },
                    disabled: !E || o,
                    className: a()(eB.x6, eB.Sq, { [eB.rK]: null != S, [eB.r9]: !E || o }),
                    ...(v ? l : null),
                    onMouseEnter: () => {
                        r?.();
                    },
                    innerClassName: eB.bk,
                    wrapperClassName: eB.x6,
                    focusProps: eH,
                    children: O
                        ? j
                        : (0, i.jsxs)(D.A, { align: D.A.Align.CENTER, children: [j, eV.intl.string(eV.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class eQ extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            g.A.channelListScrollTo(t?.id ?? eM.ME, n.id),
            (0, R.X)(v.A.RTC_PANEL, R.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: r } = this.props;
        (0, p.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, i.jsx)(y.f5, {
                    value: r,
                    children: (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, P.s)("RTCConnectionMenu", v.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        B.sF(eG._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, j.m1)(t, ex.default, eS.A);
        return (
            null != n
                ? ((e = eM.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eM.BVt.CHANNEL(eM.ME, t.id)),
            (0, i.jsx)(K.A, {
                channelId: t.id,
                quality: r,
                state: l,
                lastPing: a,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(_.vN3, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eP.A, {
                            className: eB.Ix,
                            children: (0, i.jsx)(_.Text, {
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
                    a.find((e) => e.user.id === eg.default.getId() && (0, el.eY)(e.voiceState) === el.zF.ON_STAGE) &&
                (0, ei.Zl)(l.id)
              ? (0, i.jsx)(eW, {})
              : !n && t
                ? (0, i.jsx)(A.m_, {
                      text: eV.intl.string(eV.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eR.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: _.mXj,
                          "aria-label": eV.intl.string(eV.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      _.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eY, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(eX, {
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
            ? (0, i.jsx)(eD.A, { voiceStates: t, channel: e, className: eB.Xk })
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
        let d = eg.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, et.Bw)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, eo.M)(e),
            A = (0, et.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eB.uu,
            children: [
                (0, i.jsx)(eq, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(e$, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == a) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(eK, { channel: e, enableActivities: r }) : null,
                o ? (0, i.jsx)(ez, { channel: e }) : null,
                (0, X.Ay)(e) ? (0, i.jsx)(Z.A, { channel: e, focusProps: eH }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: a()(eB.SC, "theme-light"),
            children: [
                (0, i.jsx)(_.Heading, {
                    className: eB.oN,
                    variant: "heading-md/semibold",
                    children: eV.intl.string(eV.t["ba/rL2"]),
                }),
                (0, i.jsx)(_.Text, {
                    className: eB.uf,
                    variant: "text-sm/normal",
                    children: eV.intl.string(eV.t.Ne1Eew),
                }),
                (0, i.jsx)(_.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eV.intl.string(eV.t.shaBeH),
                    focusProps: eH,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(_.YNO, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: _.YNO.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)("div", {
                          ref: this.ref,
                          className: eB.kL,
                          children: [
                              (0, i.jsxs)(D.A, {
                                  className: eB.FI,
                                  align: D.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: eB.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(D.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eB.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(ej.A, { channel: e }),
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
function eX(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: r, ref: l } = e,
        { parentAnalyticsLocation: a } = (0, y.Ay)();
    return (0, i.jsx)(eR.A, {
        ...t,
        ref: l,
        onClick: (e) => {
            (0, R.X)(a, R.O.KRISP, !r), t.onClick(e);
        },
        onMouseEnter: () => {
            t.onMouseEnter?.();
        },
        tooltipText: n ? null : eV.intl.string(eV.t.vFiCSx),
        icon: (0, i.jsx)(_.syq, {
            eventTargetRef: l,
            dataBinding: { on: r, fill: "currentColor" },
            className: _.d5l.refresh_sm,
            defaultViewModelInstance: r ? "On" : "Off",
        }),
    });
}
let eZ = (0, E.A)(function (e) {
    let t = (0, U.A)(),
        n = (0, c.bG)([w.default], () => w.default.getAwaitingRemoteSessionInfo()),
        l = (0, c.bG)([ex.default], () => ex.default.getCurrentUser()),
        { channelId: a, ...s } = (0, c.cf)([eN.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eM.bFR.FINE,
                      rtcConnectionState: eM.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eN.A.getChannelId(),
                      rtcConnectionQuality: eN.A.getQuality(),
                      rtcConnectionState: eN.A.getState(),
                      rtcConnectionLastPing: eN.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eE.A], () => eE.A.getChannel(a), [a]),
        d = o?.getGuildId(),
        u = (0, c.bG)([eI.A], () => eI.A.getGuild(d), [d]),
        A = (0, c.cf)([eC.Ay], () => ({
            noiseCancellationSupported: eC.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, W.A)(eC.Ay.getNoiseCancellation(), eC.Ay.getSystemMicrophoneMode(), {
                location: "RTCConnection",
            }),
            noiseCancellationError: eC.Ay.isNoiseCancellationError(),
            canGoLive: (0, k.A)(eC.Ay),
        })),
        h = (0, c.bG)(
            [eC.Ay, H.A],
            () =>
                H.A.hasHotspot(eG._.VOICE_PANEL_INTRODUCTION) &&
                (0, eL.mv)(l) &&
                !eC.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        m = (0, c.bG)([ev.A], () => null != a && ev.A.hasVideo(a), [a]),
        p = (0, c.bG)([ep.A], () => ep.A.getCurrentUserActiveStream()),
        g = (0, c.bG)([ef.A], () => ef.A.hasLayers()),
        E = (0, c.bG)([F.A], () => F.A.isViewingRoles(d)),
        I = (0, c.bG)([eT.A], () => E && !eT.A.can(eM.xBc.VIEW_CHANNEL, o), [E, o]),
        f = ea.vL.useSetting(),
        [T, N, x] = (0, c.yK)(
            [ey.Ay, J.A],
            () =>
                o?.isGuildStageVoice()
                    ? [J.A.getMutableParticipants(o.id, ee.ip.SPEAKER), J.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? ey.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        b = r.useMemo(
            () =>
                T?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                x ??
                [],
            [T, N, x],
        ),
        [O, L] = r.useState(!1);
    r.useEffect(() => {
        (E || I) && L(!1);
    }, [E, I, L]);
    let { analyticsLocations: R } = (0, y.Ay)(v.A.RTC_PANEL),
        P = (0, C.A)(d ?? eM.dJq, o?.id),
        j = (0, S.A)(o?.id),
        D = (0, z.T)({ location: "RTCConnection" }),
        M = (0, $.A)({ channelId: o?.id, location: "RTCConnection" });
    return (0, i.jsx)(y.f5, {
        value: R,
        children: (0, i.jsxs)("div", {
            className: eB.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(G.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(eQ, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: P,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: m,
                    selfStream: p,
                    hasLayers: g,
                    voiceStates: b,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    showSocialLayerStorefrontGiftingButton: D && M,
                    isPrivateChannelWithEnabledActivities: j,
                    analyticsLocations: R,
                }),
                !O && E && null != d
                    ? (0, i.jsxs)("div", {
                          className: eB.BT,
                          children: [
                              (0, i.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  className: eB.u0,
                                  children: I ? eV.intl.string(eV.t.efjuQJ) : eV.intl.string(eV.t.br8H2N),
                              }),
                              (0, i.jsx)(_.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: eV.intl.string(eV.t.WAI6xu),
                                  focusProps: eH,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
