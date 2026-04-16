n.d(t, { A: () => e1 });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    c = n(311907),
    u = n(554146),
    A = n(435371),
    h = n(421380),
    _ = n(397927),
    m = n(827343),
    g = n(442433),
    p = n(951001),
    E = n(707606),
    I = n(155718),
    f = n(933958),
    C = n(967812),
    T = n(404522),
    N = n(782091),
    S = n(641703),
    x = n(521588),
    v = n(793574),
    b = n(688810),
    y = n(975412),
    O = n(17143),
    L = n(750765),
    R = n(384059),
    P = n(480890),
    D = n(47167),
    j = n(235986),
    M = n(932001),
    w = n(379848),
    U = n(643501),
    G = n(857253),
    k = n(41261),
    V = n(880144),
    B = n(338771),
    H = n(421838),
    F = n(891540),
    Y = n(164956),
    W = n(267102),
    K = n(195895),
    q = n(3527),
    z = n(976860),
    $ = n(178442),
    Q = n(38185),
    X = n(104357),
    Z = n(478564),
    J = n(729081),
    ee = n(123973),
    et = n(477835),
    en = n(63995),
    ei = n(69407),
    el = n(96566),
    ea = n(302884),
    er = n(30108),
    es = n(39938),
    eo = n(105530),
    ed = n(253932),
    ec = n(151476),
    eu = n(405018),
    eA = n(704877),
    eh = n(848362),
    e_ = n(222692),
    em = n(702904),
    eg = n(471993),
    ep = n(442353),
    eE = n(970636),
    eI = n(616356),
    ef = n(961350),
    eC = n(734057),
    eT = n(71393),
    eN = n(186111),
    eS = n(430452),
    ex = n(576705),
    ev = n(383501),
    eb = n(994500),
    ey = n(287809),
    eO = n(977997),
    eL = n(607567),
    eR = n(954571),
    eP = n(975571),
    eD = n(427262),
    ej = n(42473),
    eM = n(994314),
    ew = n(40234),
    eU = n(253742),
    eG = n(652215),
    ek = n(806931),
    eV = n(49999),
    eB = n(897513),
    eH = n(509381),
    eF = n(985018),
    eY = n(395766);
let eW = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eK(e) {
    let t = e.currentTarget;
    eR.default.track(eG.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eG.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eq() {
    let e = l.useRef(null);
    (0, _.tjt)(e),
        l.useEffect(() => {
            eR.default.track(eG.HAw.OPEN_POPOUT, { type: eG.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, c.bG)([eS.Ay], () => eS.Ay.getNoiseCancellation()),
        n = (0, K.c)(),
        a = (0, c.bG)([eS.Ay], () => eS.Ay.getActiveInputProfile()),
        r = null != a && a !== eH.m.CUSTOM,
        s = eF.intl.string(eF.t.uKdWn6),
        o = eF.intl.string(eF.t.uKdWn6);
    return (
        n
            ? ((s = eF.intl.string(eF.t.mXZgC9)),
              (o = eF.intl.format(eF.t.F6lrb4, {
                  onSettingsClick: () => {
                      eS.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r &&
              (s = eF.intl.formatToPlainString(eF.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eY.dD,
            children: [
                (0, i.jsx)(A.m_, {
                    text: s,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(_.dOG, {
                            label: eF.intl.string(eF.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => m.A.setNoiseCancellation(!t, { section: eG.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(_.Text, { variant: "text-sm/normal", children: o }),
                (0, i.jsx)(O.A, {
                    title: eF.intl.string(eF.t.JdUas1),
                    notchBackground: O.V.BLACK,
                    buttonTest: eF.intl.string(eF.t["sG+MGg"]),
                    buttonStop: eF.intl.string(eF.t.Yp3SbJ),
                    location: { section: eG.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(_.D0$, {
                    label: eF.intl.string(eF.t.k6h1F4),
                    children: (0, i.jsxs)(j.A, {
                        justify: j.A.Justify.BETWEEN,
                        className: eY.__invalid_footer,
                        children: [
                            (0, i.jsx)(_.MzZ, {
                                href: eG.X7G.KRISP,
                                onClick: (e) => eK(e),
                                children: (0, i.jsx)("div", { className: eY.zQ }),
                            }),
                            (0, i.jsx)(_.MzZ, {
                                href: eP.A.getArticleURL(eG.MVz.NOISE_SUPPRESSION),
                                className: eY.W,
                                onClick: (e) => eK(e),
                                children: eF.intl.string(eF.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function ez() {
    let { parentAnalyticsLocation: e } = (0, b.Ay)(),
        t = (0, c.bG)([es.A], () => es.A.isMuted()),
        n = t ? eF.intl.string(eF.t.ScHlfl) : eF.intl.string(eF.t.zqxfrf);
    return (0, i.jsx)(ej.A, {
        tooltipText: n,
        icon: t ? _.CIB : _.T7G,
        onClick: () => {
            (0, R.X)(e, R.O.STAGE_MUSIC, t), (0, ea.k)(!t);
        },
    });
}
function e$(e) {
    let { channel: t, enableActivities: n, disabled: a } = e,
        s = l.useRef(null),
        { parentAnalyticsLocation: o } = (0, b.Ay)(),
        d = (0, ec.A)(),
        u = (0, eA.A)(t),
        g = (0, c.bG)(
            [f.Ay],
            () => null != f.Ay.getSelfEmbeddedActivityForLocation(f.Ay.getConnectedActivityLocation()),
        ),
        p = (0, ee.Ay)(t),
        { reachedLimit: E, limit: I } = (0, eu.A)(t),
        C = l.useCallback(() => {
            (0, e_.A)();
        }, []),
        T = (0, W.Us)(),
        N = l.useCallback(
            (e) => {
                if (eS.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    m.A.setVideoEnabled(e), e && (0, z.pX)(eG.BVt.CHANNEL(t.getGuildId() ?? eG.ME, t.id));
                };
                (0, R.X)(o, R.O.CAMERA, e), e ? (0, ep.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = g || n || p;
    return (0, i.jsx)(eE.r, {
        onChange: N,
        onCameraUnavailable: C,
        hasPermission: u,
        channelLimit: I,
        channelLimitReached: E,
        ...d,
        enabled: !a && d.enabled,
        children: (e) => {
            let { unavailable: t, isActive: n, label: l, ...a } = e,
                c = (0, i.jsx)(_.gau, {
                    allowAnimationWhileUnfocused: !0,
                    defaultViewModelInstance: d.enabled ? "CamOn" : "CamOff",
                    eventTargetRef: s,
                    className: r()(_.d5l.refresh_sm, { [eY.ij]: !S }),
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
                        text: l,
                        children: (0, i.jsx)(h.$n, {
                            "data-migration-pending": !0,
                            buttonRef: s,
                            ...a,
                            ...u,
                            onClick: (e) => {
                                a.onClick(e), _ && d(e);
                            },
                            onContextMenu: (e) => {
                                d(e);
                            },
                            size: h.$n.Sizes.MEDIUM,
                            className: r()(eY.x6, eY.Sq, { [eY.rK]: n, [eY.tU]: t, [eY.r9]: a.disabled }),
                            innerClassName: eY.bk,
                            wrapperClassName: eY.x6,
                            fullWidth: !0,
                            focusProps: eW,
                            children: S
                                ? c
                                : (0, i.jsxs)(j.A, {
                                      align: j.A.Align.CENTER,
                                      children: [c, eF.intl.string(eF.t.FlNoSV)],
                                  }),
                        }),
                    });
                },
            });
        },
    });
}
function eQ(e) {
    let { channel: t, enableActivities: n } = e,
        a = (0, W.Us)(),
        { parentAnalyticsLocation: s, newestAnalyticsLocation: o } = (0, b.Ay)(),
        d = a === eG.BRT.POPOUT,
        m = (0, N.et)(t.id),
        g = (0, N.dL)(m),
        { userInActivity: p } = (0, c.cf)([f.Ay], () => ({
            userInActivity: null != f.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        E = (0, T.b)({ surface: I.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        C = m !== N.xy.CAN_LAUNCH,
        S = l.useRef(null);
    return n
        ? (0, i.jsx)(w.GY, {
              contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: E,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: l } = e;
                  return (0, i.jsx)(A.m_, {
                      text: g,
                      children: (0, i.jsxs)(h.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: h.$n.Sizes.MEDIUM,
                          buttonRef: S,
                          onClick: () => {
                              (0, y.A)({
                                  context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                  openInPopout: d,
                                  analyticsLocation: o,
                              }),
                                  (0, R.X)(s, R.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && l(eV.i.TAKE_ACTION);
                          },
                          disabled: C,
                          className: r()(eY.x6, eY.Sq, { [eY.rK]: p, [eY.r9]: C }),
                          innerClassName: eY.bk,
                          wrapperClassName: eY.x6,
                          focusProps: eW,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(x.a, { top: -1, right: -1 }),
                              (0, i.jsx)(_.lmr, {
                                  eventTargetRef: S,
                                  className: _.d5l.refresh_sm,
                                  dataBinding: { fill: "currentColor" },
                              }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function eX(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        { parentAnalyticsLocation: a } = (0, b.Ay)(),
        [s, o] = l.useState(!1),
        [d, c] = (0, M.kn)([u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        m = l.useCallback(() => {
            o(!1);
        }, []),
        g = l.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(J.A, { channel: t, closePopout: n, isHovered: s });
            },
            [t, s],
        ),
        p = l.useCallback(() => {
            s ? o(!1) : o(!0),
                (0, R.X)(a, R.O.GIFTING),
                d === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && c(eV.i.TAKE_ACTION);
        }, [a, s, d, c]);
    return (0, i.jsx)(_.YNO, {
        targetElementRef: n,
        shouldShow: s,
        animation: _.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: m,
        renderPopout: g,
        children: () =>
            (0, i.jsx)(A.m_, {
                text: eF.intl.string(eF.t.PEjaCx),
                targetElementRef: n,
                shouldShow: !s,
                children: (0, i.jsxs)(h.$n, {
                    "data-migration-pending": !0,
                    fullWidth: !0,
                    size: h.$n.Sizes.MEDIUM,
                    buttonRef: n,
                    onClick: p,
                    className: r()(eY.x6, eY.Sq),
                    innerClassName: eY.bk,
                    wrapperClassName: eY.x6,
                    focusProps: eW,
                    children: [
                        d === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(x.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(_.xBs, {
                            dataBinding: { fill: "currentColor" },
                            className: r()(eY.iA, _.d5l.md),
                            eventTargetRef: n,
                        }),
                    ],
                }),
            }),
    });
}
function eZ(e) {
    let t,
        { channel: n, canGoLive: a, enableActivities: s, disabled: o } = e,
        d = l.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: m } = (0, b.Ay)(),
        g = (0, c.bG)([ey.default], () => ey.default.getCurrentUser()),
        p = (0, c.yK)([eI.A], () => eI.A.getAllActiveStreams()),
        E = (0, eA.A)(n),
        I = n.getGuildId(),
        C = (0, c.cf)([f.Ay], () => null != f.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, ee.Ay)(n),
        N = l.useCallback(() => {
            (0, eg.A)(I, n.id, m);
        }, [I, n.id, m]),
        S = p.find((e) => e.ownerId === g?.id),
        x = (0, eh.T)(n, g, p);
    t = null == S ? (a ? N : em.A) : () => (0, B.A)(S);
    let v = null != S || x.length > 0,
        y = E ? eF.intl.string(eF.t.fjBNo1) : eF.intl.string(eF.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        D = (0, i.jsx)(_.gxO, {
            allowAnimationWhileUnfocused: !0,
            defaultViewModelInstance: L ? "Off" : "On",
            eventTargetRef: d,
            dataBinding: { fill: "currentColor", on: !L },
            className: r()(_.d5l.refresh_sm, { [eY.ij]: !O }),
        });
    return (0, i.jsx)(_.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eh.A, {
                channel: n,
                currentUser: g,
                activeStreams: p,
                onClose: t,
                handleGoLive: a ? N : em.A,
                onInteraction: (0, P.s)("ManageStreamsMenu", u, { entrypoint: ek.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: _.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: l, ...a } = e;
            return (0, i.jsx)(A.m_, {
                text: y,
                children: (0, i.jsx)(h.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: h.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, R.X)(u, R.O.STREAM, null == S), v ? n(e) : t();
                    },
                    disabled: !E || o,
                    className: r()(eY.x6, eY.Sq, { [eY.rK]: null != S, [eY.r9]: !E || o }),
                    ...(v ? a : null),
                    onMouseEnter: () => {
                        l?.();
                    },
                    innerClassName: eY.bk,
                    wrapperClassName: eY.x6,
                    focusProps: eW,
                    children: O
                        ? D
                        : (0, i.jsxs)(j.A, { align: j.A.Align.CENTER, children: [D, eF.intl.string(eF.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class eJ extends l.PureComponent {
    ref = l.createRef();
    krispButtonRef = l.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            p.A.channelListScrollTo(t?.id ?? eG.ME, n.id),
            (0, R.X)(v.A.RTC_PANEL, R.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: l } = this.props;
        (0, g.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, i.jsx)(b.f5, {
                    value: l,
                    children: (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, P.s)("RTCConnectionMenu", v.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        H.sF(eB._.VOICE_PANEL_INTRODUCTION);
    };
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: l,
                rtcConnectionState: a,
                rtcConnectionLastPing: r,
                hasVideo: s,
            } = this.props;
        if (null == t) return null;
        let o = (0, D.m1)(t, ey.default, eb.A);
        return (
            null != n
                ? ((e = eG.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eG.BVt.CHANNEL(eG.ME, t.id)),
            (0, i.jsx)($.A, {
                channelId: t.id,
                quality: l,
                state: a,
                lastPing: r,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(_.vN3, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eM.A, {
                            className: eY.Ix,
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
            remoteVoiceState: l,
            channel: a,
            voiceStates: r,
        } = this.props;
        return null != l
            ? null
            : a?.isGuildStageVoice() &&
                null ==
                    r.find((e) => e.user.id === ef.default.getId() && (0, eo.eY)(e.voiceState) === eo.zF.ON_STAGE) &&
                (0, er.Zl)(a.id)
              ? (0, i.jsx)(ez, {})
              : !n && t
                ? (0, i.jsx)(A.m_, {
                      text: eF.intl.string(eF.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(ej.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: _.mXj,
                          "aria-label": eF.intl.string(eF.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      _.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eq, {}),
                          children: (t, n) => {
                              let { isShown: l } = n;
                              return (0, i.jsx)(e0, {
                                  popoutProps: t,
                                  isShown: l,
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
            ? (0, i.jsx)(eU.A, { voiceStates: t, channel: e, className: eY.Xk })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: l,
            voiceStates: a,
            selfStream: r,
            isPrivateChannelWithEnabledActivities: s,
            showSocialLayerStorefrontGiftingButton: o,
        } = this.props;
        if (null == e || null != n) return null;
        let d = ef.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, el.Bw)(e.guild_id) || !t) return null;
            let n = a.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && l,
            { reachedLimit: u } = (0, eu.M)(e),
            A = (0, el.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eY.uu,
            children: [
                (0, i.jsx)(e$, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(eZ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == r) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(eQ, { channel: e, enableActivities: l }) : null,
                o ? (0, i.jsx)(eX, { channel: e }) : null,
                (0, ee.Ay)(e) ? (0, i.jsx)(et.A, { channel: e, focusProps: eW }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: r()(eY.SC, "theme-light"),
            children: [
                (0, i.jsx)(_.Heading, {
                    className: eY.oN,
                    variant: "heading-md/semibold",
                    children: eF.intl.string(eF.t["ba/rL2"]),
                }),
                (0, i.jsx)(_.Text, {
                    className: eY.uf,
                    variant: "text-sm/normal",
                    children: eF.intl.string(eF.t.Ne1Eew),
                }),
                (0, i.jsx)(_.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eF.intl.string(eF.t.shaBeH),
                    focusProps: eW,
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
                          className: eY.kL,
                          children: [
                              (0, i.jsxs)(j.A, {
                                  className: eY.FI,
                                  align: j.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: eY.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(j.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eY.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(ew.A, { channel: e }),
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
function e0(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: r } = (0, b.Ay)();
    return (0, i.jsx)(ej.A, {
        ...t,
        ref: a,
        onClick: (e) => {
            (0, R.X)(r, R.O.KRISP, !l), t.onClick(e);
        },
        onMouseEnter: () => {
            t.onMouseEnter?.();
        },
        tooltipText: n ? null : eF.intl.string(eF.t.vFiCSx),
        icon: (0, i.jsx)(_.syq, {
            eventTargetRef: a,
            dataBinding: { on: l, fill: "currentColor" },
            className: _.d5l.refresh_sm,
            defaultViewModelInstance: l ? "On" : "Off",
        }),
    });
}
let e1 = (0, E.A)(function (e) {
    let t = (0, G.A)(),
        n = (0, c.bG)([U.default], () => U.default.getAwaitingRemoteSessionInfo()),
        a = (0, c.bG)([ey.default], () => ey.default.getCurrentUser()),
        { channelId: r, ...s } = (0, c.cf)([ev.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eG.bFR.FINE,
                      rtcConnectionState: eG.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ev.A.getChannelId(),
                      rtcConnectionQuality: ev.A.getQuality(),
                      rtcConnectionState: ev.A.getState(),
                      rtcConnectionLastPing: ev.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eC.A], () => eC.A.getChannel(r), [r]),
        d = o?.getGuildId(),
        u = (0, c.bG)([eT.A], () => eT.A.getGuild(d), [d]),
        A = (0, c.cf)([eS.Ay], () => ({
            noiseCancellationSupported: eS.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, q.A)(eS.Ay.getNoiseCancellation(), eS.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eS.Ay.isNoiseCancellationError(),
            canGoLive: (0, V.A)(eS.Ay),
        })),
        h = (0, c.bG)(
            [eS.Ay, F.A],
            () =>
                F.A.hasHotspot(eB._.VOICE_PANEL_INTRODUCTION) &&
                (0, eD.mv)(a) &&
                !eS.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        m = (0, c.bG)([eO.A], () => null != r && eO.A.hasVideo(r), [r]),
        g = (0, c.bG)([eI.A], () => eI.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([eN.A], () => eN.A.hasLayers()),
        E = (0, c.bG)([Y.A], () => Y.A.isViewingRoles(d)),
        I = (0, c.bG)([ex.A], () => E && !ex.A.can(eG.xBc.VIEW_CHANNEL, o), [E, o]),
        f = ed.vL.useSetting(),
        [T, N, x] = (0, c.yK)(
            [eL.Ay, en.A],
            () =>
                o?.isGuildStageVoice()
                    ? [en.A.getMutableParticipants(o.id, ei.ip.SPEAKER), en.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? eL.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        y = l.useMemo(
            () =>
                T?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                x ??
                [],
            [T, N, x],
        ),
        [O, L] = l.useState(!1);
    l.useEffect(() => {
        (E || I) && L(!1);
    }, [E, I, L]);
    let { analyticsLocations: R } = (0, b.Ay)(v.A.RTC_PANEL),
        P = (0, C.A)(d ?? eG.dJq, o?.id),
        D = (0, S.A)(o?.id),
        j = (0, X.T)({ location: "RTCConnection" }),
        M = (0, Z.A)({ channelId: o?.id }),
        w = (0, Q.i)({ location: "RTCConnection" });
    return (0, i.jsx)(b.f5, {
        value: R,
        children: (0, i.jsxs)("div", {
            className: eY.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(k.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(eJ, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: P,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: m,
                    selfStream: g,
                    hasLayers: p,
                    voiceStates: y,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    showSocialLayerStorefrontGiftingButton: j && M && w,
                    isPrivateChannelWithEnabledActivities: D,
                    analyticsLocations: R,
                }),
                !O && E && null != d
                    ? (0, i.jsxs)("div", {
                          className: eY.BT,
                          children: [
                              (0, i.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  className: eY.u0,
                                  children: I ? eF.intl.string(eF.t.efjuQJ) : eF.intl.string(eF.t.br8H2N),
                              }),
                              (0, i.jsx)(_.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: eF.intl.string(eF.t.WAI6xu),
                                  focusProps: eW,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
