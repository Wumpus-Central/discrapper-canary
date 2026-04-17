n.d(t, { A: () => e$ });
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
    W = n(195895),
    K = n(3527),
    q = n(976860),
    z = n(178442),
    $ = n(123973),
    Q = n(477835),
    X = n(63995),
    Z = n(69407),
    J = n(96566),
    ee = n(302884),
    et = n(30108),
    en = n(39938),
    ei = n(105530),
    el = n(253932),
    ea = n(151476),
    er = n(405018),
    es = n(704877),
    eo = n(848362),
    ed = n(222692),
    ec = n(702904),
    eu = n(471993),
    eA = n(442353),
    eh = n(970636),
    e_ = n(616356),
    em = n(961350),
    eg = n(734057),
    ep = n(71393),
    eE = n(186111),
    eI = n(430452),
    ef = n(576705),
    eC = n(383501),
    eT = n(994500),
    eN = n(287809),
    eS = n(977997),
    ex = n(607567),
    ev = n(954571),
    eb = n(975571),
    ey = n(427262),
    eO = n(42473),
    eL = n(994314),
    eR = n(40234),
    eP = n(253742),
    eD = n(652215),
    ej = n(806931),
    eM = n(49999),
    ew = n(897513),
    eU = n(509381),
    eG = n(985018),
    ek = n(395766);
let eV = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eB(e) {
    let t = e.currentTarget;
    ev.default.track(eD.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eD.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eH() {
    let e = l.useRef(null);
    (0, _.tjt)(e),
        l.useEffect(() => {
            ev.default.track(eD.HAw.OPEN_POPOUT, { type: eD.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, c.bG)([eI.Ay], () => eI.Ay.getNoiseCancellation()),
        n = (0, W.c)(),
        a = (0, c.bG)([eI.Ay], () => eI.Ay.getActiveInputProfile()),
        r = null != a && a !== eU.m.CUSTOM,
        s = eG.intl.string(eG.t.uKdWn6),
        o = eG.intl.string(eG.t.uKdWn6);
    return (
        n
            ? ((s = eG.intl.string(eG.t.mXZgC9)),
              (o = eG.intl.format(eG.t.F6lrb4, {
                  onSettingsClick: () => {
                      eI.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r &&
              (s = eG.intl.formatToPlainString(eG.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: ek.dD,
            children: [
                (0, i.jsx)(A.m_, {
                    text: s,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(_.dOG, {
                            label: eG.intl.string(eG.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => m.A.setNoiseCancellation(!t, { section: eD.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(_.Text, { variant: "text-sm/normal", children: o }),
                (0, i.jsx)(O.A, {
                    title: eG.intl.string(eG.t.JdUas1),
                    notchBackground: O.V.BLACK,
                    buttonTest: eG.intl.string(eG.t["sG+MGg"]),
                    buttonStop: eG.intl.string(eG.t.Yp3SbJ),
                    location: { section: eD.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(_.D0$, {
                    label: eG.intl.string(eG.t.k6h1F4),
                    children: (0, i.jsxs)(j.A, {
                        justify: j.A.Justify.BETWEEN,
                        className: ek.__invalid_footer,
                        children: [
                            (0, i.jsx)(_.MzZ, {
                                href: eD.X7G.KRISP,
                                onClick: (e) => eB(e),
                                children: (0, i.jsx)("div", { className: ek.zQ }),
                            }),
                            (0, i.jsx)(_.MzZ, {
                                href: eb.A.getArticleURL(eD.MVz.NOISE_SUPPRESSION),
                                className: ek.W,
                                onClick: (e) => eB(e),
                                children: eG.intl.string(eG.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eF() {
    let { parentAnalyticsLocation: e } = (0, b.Ay)(),
        t = (0, c.bG)([en.A], () => en.A.isMuted()),
        n = t ? eG.intl.string(eG.t.ScHlfl) : eG.intl.string(eG.t.zqxfrf);
    return (0, i.jsx)(eO.A, {
        tooltipText: n,
        icon: t ? _.CIB : _.T7G,
        onClick: () => {
            (0, R.X)(e, R.O.STAGE_MUSIC, t), (0, ee.k)(!t);
        },
    });
}
function eY(e) {
    let { channel: t, enableActivities: n, disabled: a } = e,
        s = l.useRef(null),
        { parentAnalyticsLocation: o } = (0, b.Ay)(),
        d = (0, ea.A)(),
        u = (0, es.A)(t),
        g = (0, c.bG)(
            [f.Ay],
            () => null != f.Ay.getSelfEmbeddedActivityForLocation(f.Ay.getConnectedActivityLocation()),
        ),
        p = (0, $.Ay)(t),
        { reachedLimit: E, limit: I } = (0, er.A)(t),
        C = l.useCallback(() => {
            (0, ed.A)();
        }, []),
        T = (0, Y.Us)(),
        N = l.useCallback(
            (e) => {
                if (eI.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    m.A.setVideoEnabled(e), e && (0, q.pX)(eD.BVt.CHANNEL(t.getGuildId() ?? eD.ME, t.id));
                };
                (0, R.X)(o, R.O.CAMERA, e), e ? (0, eA.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = g || n || p;
    return (0, i.jsx)(eh.r, {
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
                    className: r()(_.d5l.refresh_sm, { [ek.ij]: !S }),
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
                            className: r()(ek.x6, ek.Sq, { [ek.rK]: n, [ek.tU]: t, [ek.r9]: a.disabled }),
                            innerClassName: ek.bk,
                            wrapperClassName: ek.x6,
                            fullWidth: !0,
                            focusProps: eV,
                            children: S
                                ? c
                                : (0, i.jsxs)(j.A, {
                                      align: j.A.Align.CENTER,
                                      children: [c, eG.intl.string(eG.t.FlNoSV)],
                                  }),
                        }),
                    });
                },
            });
        },
    });
}
function eW(e) {
    let { channel: t, enableActivities: n } = e,
        a = (0, Y.Us)(),
        { parentAnalyticsLocation: s, newestAnalyticsLocation: o } = (0, b.Ay)(),
        d = a === eD.BRT.POPOUT,
        m = (0, N.et)(t.id),
        g = (0, N.dL)(m),
        { userInActivity: p } = (0, c.cf)([f.Ay], () => ({
            userInActivity: null != f.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        E = (0, T.b)({ surface: I.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        C = m !== N.xy.CAN_LAUNCH,
        S = l.useRef(null);
    return n
        ? (0, i.jsx)(M.GY, {
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
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && l(eM.i.TAKE_ACTION);
                          },
                          disabled: C,
                          className: r()(ek.x6, ek.Sq, { [ek.rK]: p, [ek.r9]: C }),
                          innerClassName: ek.bk,
                          wrapperClassName: ek.x6,
                          focusProps: eV,
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
function eK(e) {
    let t,
        { channel: n, canGoLive: a, enableActivities: s, disabled: o } = e,
        d = l.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: m } = (0, b.Ay)(),
        g = (0, c.bG)([eN.default], () => eN.default.getCurrentUser()),
        p = (0, c.yK)([e_.A], () => e_.A.getAllActiveStreams()),
        E = (0, es.A)(n),
        I = n.getGuildId(),
        C = (0, c.cf)([f.Ay], () => null != f.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, $.Ay)(n),
        N = l.useCallback(() => {
            (0, eu.A)(I, n.id, m);
        }, [I, n.id, m]),
        S = p.find((e) => e.ownerId === g?.id),
        x = (0, eo.T)(n, g, p);
    t = null == S ? (a ? N : ec.A) : () => (0, V.A)(S);
    let v = null != S || x.length > 0,
        y = E ? eG.intl.string(eG.t.fjBNo1) : eG.intl.string(eG.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        D = (0, i.jsx)(_.gxO, {
            allowAnimationWhileUnfocused: !0,
            defaultViewModelInstance: L ? "Off" : "On",
            eventTargetRef: d,
            dataBinding: { fill: "currentColor", on: !L },
            className: r()(_.d5l.refresh_sm, { [ek.ij]: !O }),
        });
    return (0, i.jsx)(_.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eo.A, {
                channel: n,
                currentUser: g,
                activeStreams: p,
                onClose: t,
                handleGoLive: a ? N : ec.A,
                onInteraction: (0, P.s)("ManageStreamsMenu", u, { entrypoint: ej.GK.OTHER_BUTTON }),
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
                    className: r()(ek.x6, ek.Sq, { [ek.rK]: null != S, [ek.r9]: !E || o }),
                    ...(v ? a : null),
                    onMouseEnter: () => {
                        l?.();
                    },
                    innerClassName: ek.bk,
                    wrapperClassName: ek.x6,
                    focusProps: eV,
                    children: O
                        ? D
                        : (0, i.jsxs)(j.A, { align: j.A.Align.CENTER, children: [D, eG.intl.string(eG.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class eq extends l.PureComponent {
    ref = l.createRef();
    krispButtonRef = l.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            p.A.channelListScrollTo(t?.id ?? eD.ME, n.id),
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
        B.sF(ew._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, D.m1)(t, eN.default, eT.A);
        return (
            null != n
                ? ((e = eD.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eD.BVt.CHANNEL(eD.ME, t.id)),
            (0, i.jsx)(z.A, {
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
                        children: (0, i.jsx)(eL.A, {
                            className: ek.Ix,
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
                    r.find((e) => e.user.id === em.default.getId() && (0, ei.eY)(e.voiceState) === ei.zF.ON_STAGE) &&
                (0, et.Zl)(a.id)
              ? (0, i.jsx)(eF, {})
              : !n && t
                ? (0, i.jsx)(A.m_, {
                      text: eG.intl.string(eG.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eO.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: _.mXj,
                          "aria-label": eG.intl.string(eG.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      _.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eH, {}),
                          children: (t, n) => {
                              let { isShown: l } = n;
                              return (0, i.jsx)(ez, {
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
            ? (0, i.jsx)(eP.A, { voiceStates: t, channel: e, className: ek.Xk })
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
        } = this.props;
        if (null == e || null != n) return null;
        let o = em.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, J.Bw)(e.guild_id) || !t) return null;
            let n = a.find((e) => e.user.id === o);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || s) && l,
            { reachedLimit: c } = (0, er.M)(e),
            u = (0, J.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: ek.uu,
            children: [
                (0, i.jsx)(eY, { channel: e, enableActivities: d, disabled: !u && c }),
                (0, i.jsx)(eK, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((u && null == r) || (!u && c)),
                }),
                d ? (0, i.jsx)(eW, { channel: e, enableActivities: l }) : null,
                (0, $.Ay)(e) ? (0, i.jsx)(Q.A, { channel: e, focusProps: eV }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: r()(ek.SC, "theme-light"),
            children: [
                (0, i.jsx)(_.Heading, {
                    className: ek.oN,
                    variant: "heading-md/semibold",
                    children: eG.intl.string(eG.t["ba/rL2"]),
                }),
                (0, i.jsx)(_.Text, {
                    className: ek.uf,
                    variant: "text-sm/normal",
                    children: eG.intl.string(eG.t.Ne1Eew),
                }),
                (0, i.jsx)(_.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eG.intl.string(eG.t.shaBeH),
                    focusProps: eV,
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
                          className: ek.kL,
                          children: [
                              (0, i.jsxs)(j.A, {
                                  className: ek.FI,
                                  align: j.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: ek.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(j.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ek.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(eR.A, { channel: e }),
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
function ez(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: r } = (0, b.Ay)();
    return (0, i.jsx)(eO.A, {
        ...t,
        ref: a,
        onClick: (e) => {
            (0, R.X)(r, R.O.KRISP, !l), t.onClick(e);
        },
        onMouseEnter: () => {
            t.onMouseEnter?.();
        },
        tooltipText: n ? null : eG.intl.string(eG.t.vFiCSx),
        icon: (0, i.jsx)(_.syq, {
            eventTargetRef: a,
            dataBinding: { on: l, fill: "currentColor" },
            className: _.d5l.refresh_sm,
            defaultViewModelInstance: l ? "On" : "Off",
        }),
    });
}
let e$ = (0, E.A)(function (e) {
    let t = (0, U.A)(),
        n = (0, c.bG)([w.default], () => w.default.getAwaitingRemoteSessionInfo()),
        a = (0, c.bG)([eN.default], () => eN.default.getCurrentUser()),
        { channelId: r, ...s } = (0, c.cf)([eC.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eD.bFR.FINE,
                      rtcConnectionState: eD.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eC.A.getChannelId(),
                      rtcConnectionQuality: eC.A.getQuality(),
                      rtcConnectionState: eC.A.getState(),
                      rtcConnectionLastPing: eC.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eg.A], () => eg.A.getChannel(r), [r]),
        d = o?.getGuildId(),
        u = (0, c.bG)([ep.A], () => ep.A.getGuild(d), [d]),
        A = (0, c.cf)([eI.Ay], () => ({
            noiseCancellationSupported: eI.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, K.A)(eI.Ay.getNoiseCancellation(), eI.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eI.Ay.isNoiseCancellationError(),
            canGoLive: (0, k.A)(eI.Ay),
        })),
        h = (0, c.bG)(
            [eI.Ay, H.A],
            () =>
                H.A.hasHotspot(ew._.VOICE_PANEL_INTRODUCTION) &&
                (0, ey.mv)(a) &&
                !eI.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        m = (0, c.bG)([eS.A], () => null != r && eS.A.hasVideo(r), [r]),
        g = (0, c.bG)([e_.A], () => e_.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([eE.A], () => eE.A.hasLayers()),
        E = (0, c.bG)([F.A], () => F.A.isViewingRoles(d)),
        I = (0, c.bG)([ef.A], () => E && !ef.A.can(eD.xBc.VIEW_CHANNEL, o), [E, o]),
        f = el.vL.useSetting(),
        [T, N, x] = (0, c.yK)(
            [ex.Ay, X.A],
            () =>
                o?.isGuildStageVoice()
                    ? [X.A.getMutableParticipants(o.id, Z.ip.SPEAKER), X.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? ex.Ay.getVoiceStatesForChannel(o) : null],
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
        P = (0, C.A)(d ?? eD.dJq, o?.id),
        D = (0, S.A)(o?.id);
    return (0, i.jsx)(b.f5, {
        value: R,
        children: (0, i.jsxs)("div", {
            className: ek.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(G.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(eq, {
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
                    isPrivateChannelWithEnabledActivities: D,
                    analyticsLocations: R,
                }),
                !O && E && null != d
                    ? (0, i.jsxs)("div", {
                          className: ek.BT,
                          children: [
                              (0, i.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  className: ek.u0,
                                  children: I ? eG.intl.string(eG.t.efjuQJ) : eG.intl.string(eG.t.br8H2N),
                              }),
                              (0, i.jsx)(_.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: eG.intl.string(eG.t.WAI6xu),
                                  focusProps: eV,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
