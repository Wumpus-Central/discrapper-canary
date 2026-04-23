n.d(t, { A: () => te });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    u = n(311907),
    c = n(554146),
    A = n(697744),
    h = n(416696),
    _ = n(446080),
    E = n(385278),
    p = n(990078),
    m = n(862482),
    g = n(315710),
    I = n(243721),
    C = n(834730),
    f = n(452027),
    T = n(349288),
    S = n(532676),
    N = n(432017),
    O = n(265872),
    L = n(187322),
    y = n(125628),
    v = n(534514),
    b = n(821609),
    D = n(827343),
    R = n(442433),
    P = n(951001),
    w = n(707606),
    M = n(155718),
    U = n(933958),
    x = n(967812),
    G = n(404522),
    k = n(782091),
    j = n(641703),
    V = n(521588),
    H = n(793574),
    B = n(688810),
    F = n(975412),
    Y = n(17143),
    K = n(750765),
    z = n(384059),
    W = n(480890),
    $ = n(47167),
    q = n(235986),
    X = n(379848),
    Q = n(643501),
    Z = n(857253),
    J = n(41261),
    ee = n(880144),
    et = n(338771),
    en = n(421838),
    ei = n(891540),
    er = n(164956),
    ea = n(267102),
    el = n(195895),
    es = n(3527),
    eo = n(976860),
    ed = n(178442),
    eu = n(123973),
    ec = n(477835),
    eA = n(63995),
    eh = n(69407),
    e_ = n(96566),
    eE = n(302884),
    ep = n(30108),
    em = n(39938),
    eg = n(105530),
    eI = n(253932),
    eC = n(151476),
    ef = n(405018),
    eT = n(704877),
    eS = n(848362),
    eN = n(222692),
    eO = n(702904),
    eL = n(471993),
    ey = n(442353),
    ev = n(970636),
    eb = n(616356),
    eD = n(961350),
    eR = n(734057),
    eP = n(71393),
    ew = n(186111),
    eM = n(430452),
    eU = n(576705),
    ex = n(383501),
    eG = n(994500),
    ek = n(287809),
    ej = n(977997),
    eV = n(607567),
    eH = n(954571),
    eB = n(975571),
    eF = n(427262),
    eY = n(42473),
    eK = n(994314),
    ez = n(40234),
    eW = n(253742),
    e$ = n(652215),
    eq = n(806931),
    eX = n(49999),
    eQ = n(897513),
    eZ = n(509381),
    eJ = n(985018),
    e0 = n(395766);
let e1 = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function e5(e) {
    let t = e.currentTarget;
    eH.default.track(e$.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: e$.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function e6() {
    let e = r.useRef(null);
    (0, g.t)(e),
        r.useEffect(() => {
            eH.default.track(e$.HAw.OPEN_POPOUT, { type: e$.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, u.bG)([eM.Ay], () => eM.Ay.getNoiseCancellation()),
        n = (0, el.c)(),
        a = (0, u.bG)([eM.Ay], () => eM.Ay.getActiveInputProfile()),
        l = null != a && a !== eZ.m.CUSTOM,
        s = eJ.intl.string(eJ.t.uKdWn6),
        o = eJ.intl.string(eJ.t.uKdWn6);
    return (
        n
            ? ((s = eJ.intl.string(eJ.t.mXZgC9)),
              (o = eJ.intl.format(eJ.t.F6lrb4, {
                  onSettingsClick: () => {
                      eM.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : l &&
              (s = eJ.intl.formatToPlainString(eJ.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: e0.dD,
            children: [
                (0, i.jsx)(p.m, {
                    text: s,
                    shouldShow: l || n,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(I.d, {
                            label: eJ.intl.string(eJ.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: l || n,
                            onChange: () => D.A.setNoiseCancellation(!t, { section: e$.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(C.E, { variant: "text-sm/normal", children: o }),
                (0, i.jsx)(Y.A, {
                    title: eJ.intl.string(eJ.t.JdUas1),
                    notchBackground: Y.V.BLACK,
                    buttonTest: eJ.intl.string(eJ.t["sG+MGg"]),
                    buttonStop: eJ.intl.string(eJ.t.Yp3SbJ),
                    location: { section: e$.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(f.D, {
                    label: eJ.intl.string(eJ.t.k6h1F4),
                    children: (0, i.jsxs)(q.A, {
                        justify: q.A.Justify.BETWEEN,
                        className: e0.__invalid_footer,
                        children: [
                            (0, i.jsx)(T.Anchor, {
                                href: e$.X7G.KRISP,
                                onClick: (e) => e5(e),
                                children: (0, i.jsx)("div", { className: e0.zQ }),
                            }),
                            (0, i.jsx)(T.Anchor, {
                                href: eB.A.getArticleURL(e$.MVz.NOISE_SUPPRESSION),
                                className: e0.W,
                                onClick: (e) => e5(e),
                                children: eJ.intl.string(eJ.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function e2() {
    let { parentAnalyticsLocation: e } = (0, B.Ay)(),
        t = (0, u.bG)([em.A], () => em.A.isMuted()),
        n = t ? eJ.intl.string(eJ.t.ScHlfl) : eJ.intl.string(eJ.t.zqxfrf);
    return (0, i.jsx)(eY.A, {
        tooltipText: n,
        icon: t ? S.C : N.T,
        onClick: () => {
            (0, z.X)(e, z.O.STAGE_MUSIC, t), (0, eE.k)(!t);
        },
    });
}
function e3(e) {
    let { channel: t, enableActivities: n, disabled: a } = e,
        s = r.useRef(null),
        { parentAnalyticsLocation: o } = (0, B.Ay)(),
        d = (0, eC.A)(),
        c = (0, eT.A)(t),
        A = (0, u.bG)(
            [U.Ay],
            () => null != U.Ay.getSelfEmbeddedActivityForLocation(U.Ay.getConnectedActivityLocation()),
        ),
        h = (0, eu.Ay)(t),
        { reachedLimit: E, limit: g } = (0, ef.A)(t),
        I = r.useCallback(() => {
            (0, eN.A)();
        }, []),
        C = (0, ea.Us)(),
        f = r.useCallback(
            (e) => {
                if (eM.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    D.A.setVideoEnabled(e), e && (0, eo.pX)(e$.BVt.CHANNEL(t.getGuildId() ?? e$.ME, t.id));
                };
                (0, z.X)(o, z.O.CAMERA, e), e ? (0, ey.A)(n, C) : n();
            },
            [t, C, o],
        ),
        T = A || n || h,
        { Component: S, play: N, events: L } = (0, _.K)(d.enabled ? "disable" : "enable");
    return (
        r.useEffect(() => () => N(), [d.enabled, N]),
        (0, i.jsx)(ev.r, {
            onChange: f,
            onCameraUnavailable: I,
            hasPermission: c,
            channelLimit: g,
            channelLimitReached: E,
            ...d,
            enabled: !a && d.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: r, iconComponent: a, iconColor: d, ...u } = e,
                    c = (0, i.jsx)(S, { size: "md", className: l()(e0.iA, { [e0.ij]: !T }), color: "currentColor" });
                return (0, i.jsx)(O.Y, {
                    targetElementRef: s,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(K.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, W.s)("VideoDeviceMenu", o),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: O.Y.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: o, ...d } = e,
                            { isShown: A } = a;
                        return (0, i.jsx)(p.m, {
                            text: r,
                            children: (0, i.jsx)(m.$n, {
                                "data-migration-pending": !0,
                                buttonRef: s,
                                ...u,
                                ...d,
                                onClick: (e) => {
                                    u.onClick(e), A && o(e);
                                },
                                onMouseEnter: () => {
                                    d.onMouseEnter?.(), L.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    L.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    o(e);
                                },
                                size: m.$n.Sizes.MEDIUM,
                                className: l()(e0.x6, e0.Sq, { [e0.rK]: n, [e0.tU]: t, [e0.r9]: u.disabled }),
                                innerClassName: e0.bk,
                                wrapperClassName: e0.x6,
                                fullWidth: !0,
                                focusProps: e1,
                                children: T
                                    ? c
                                    : (0, i.jsxs)(q.A, {
                                          align: q.A.Align.CENTER,
                                          children: [c, eJ.intl.string(eJ.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function e7(e) {
    let { channel: t, enableActivities: n } = e,
        r = (0, ea.Us)(),
        { parentAnalyticsLocation: a, newestAnalyticsLocation: s } = (0, B.Ay)(),
        o = r === e$.BRT.POPOUT,
        d = (0, k.et)(t.id),
        h = (0, k.dL)(d),
        { userInActivity: _ } = (0, u.cf)([U.Ay], () => ({
            userInActivity: null != U.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        E = (0, G.b)({ surface: M.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        g = d !== k.xy.CAN_LAUNCH,
        { Component: I, events: C, play: f } = (0, A.c)();
    return n
        ? (0, i.jsx)(X.GY, {
              contentType: c.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: E,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: r } = e;
                  return (0, i.jsx)(p.m, {
                      text: h,
                      children: (0, i.jsxs)(m.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: m.$n.Sizes.MEDIUM,
                          ...C,
                          onClick: () => {
                              f(),
                                  (0, F.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: o,
                                      analyticsLocation: s,
                                  }),
                                  (0, z.X)(a, z.O.ACTIVITY),
                                  n === c.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eX.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              C.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              C.onMouseLeave();
                          },
                          disabled: g,
                          className: l()(e0.x6, e0.Sq, { [e0.rK]: _, [e0.r9]: g }),
                          innerClassName: e0.bk,
                          wrapperClassName: e0.x6,
                          focusProps: e1,
                          children: [
                              n === c.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(V.a, { top: -1, right: -1 }),
                              (0, i.jsx)(I, { size: "md", color: "currentColor", className: e0.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function e9(e) {
    let t,
        { channel: n, canGoLive: a, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: c, analyticsLocations: A } = (0, B.Ay)(),
        _ = (0, u.bG)([ek.default], () => ek.default.getCurrentUser()),
        E = (0, u.yK)([eb.A], () => eb.A.getAllActiveStreams()),
        g = (0, eT.A)(n),
        I = n.getGuildId(),
        C = (0, u.cf)([U.Ay], () => null != U.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        f = (0, eu.Ay)(n),
        T = r.useCallback(() => {
            (0, eL.A)(I, n.id, A);
        }, [I, n.id, A]),
        S = E.find((e) => e.ownerId === _?.id),
        N = (0, eS.T)(n, _, E);
    t = null == S ? (a ? T : eO.A) : () => (0, et.A)(S);
    let L = null != S || N.length > 0,
        y = g ? eJ.intl.string(eJ.t.fjBNo1) : eJ.intl.string(eJ.t.uQn9B8),
        v = C || s || f,
        b = null != S,
        { Component: D, events: R, play: P } = (0, h.c)(b ? "disable" : "enable");
    r.useEffect(() => () => P(), [P, b]);
    let w = (0, i.jsx)(D, { size: "md", color: "currentColor", className: l()(e0.iA, { [e0.ij]: !v }) });
    return (0, i.jsx)(O.Y, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eS.A, {
                channel: n,
                currentUser: _,
                activeStreams: E,
                onClose: t,
                handleGoLive: a ? T : eO.A,
                onInteraction: (0, W.s)("ManageStreamsMenu", c, { entrypoint: eq.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: O.Y.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...a } = e;
            return (0, i.jsx)(p.m, {
                text: y,
                children: (0, i.jsx)(m.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: m.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, z.X)(c, z.O.STREAM, null == S), L ? n(e) : t();
                    },
                    disabled: !g || o,
                    className: l()(e0.x6, e0.Sq, { [e0.rK]: null != S, [e0.r9]: !g || o }),
                    ...(L ? a : null),
                    onMouseEnter: () => {
                        r?.(), R.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        R.onMouseLeave();
                    },
                    innerClassName: e0.bk,
                    wrapperClassName: e0.x6,
                    focusProps: e1,
                    children: v
                        ? w
                        : (0, i.jsxs)(q.A, { align: q.A.Align.CENTER, children: [w, eJ.intl.string(eJ.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class e4 extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            P.A.channelListScrollTo(t?.id ?? e$.ME, n.id),
            (0, z.X)(H.A.RTC_PANEL, z.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: r } = this.props;
        (0, R.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, i.jsx)(B.f5, {
                    value: r,
                    children: (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, W.s)("RTCConnectionMenu", H.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        en.sF(eQ._.VOICE_PANEL_INTRODUCTION);
    };
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: r,
                rtcConnectionState: a,
                rtcConnectionLastPing: l,
                hasVideo: s,
            } = this.props;
        if (null == t) return null;
        let o = (0, $.m1)(t, ek.default, eG.A);
        return (
            null != n
                ? ((e = e$.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = e$.BVt.CHANNEL(e$.ME, t.id)),
            (0, i.jsx)(ed.A, {
                channelId: t.id,
                quality: r,
                state: a,
                lastPing: l,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(L.vN, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eK.A, {
                            className: e0.Ix,
                            children: (0, i.jsx)(C.E, {
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
            channel: a,
            voiceStates: l,
        } = this.props;
        return null != r
            ? null
            : a?.isGuildStageVoice() &&
                null ==
                    l.find((e) => e.user.id === eD.default.getId() && (0, eg.eY)(e.voiceState) === eg.zF.ON_STAGE) &&
                (0, ep.Zl)(a.id)
              ? (0, i.jsx)(e2, {})
              : !n && t
                ? (0, i.jsx)(p.m, {
                      text: eJ.intl.string(eJ.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eY.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: y.m,
                          "aria-label": eJ.intl.string(eJ.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      O.Y,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(e6, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(e8, {
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
            ? (0, i.jsx)(eW.A, { voiceStates: t, channel: e, className: e0.Xk })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: r,
            voiceStates: a,
            selfStream: l,
            isPrivateChannelWithEnabledActivities: s,
        } = this.props;
        if (null == e || null != n) return null;
        let o = eD.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, e_.Bw)(e.guild_id) || !t) return null;
            let n = a.find((e) => e.user.id === o);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, ef.M)(e),
            c = (0, e_.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: e0.uu,
            children: [
                (0, i.jsx)(e3, { channel: e, enableActivities: d, disabled: !c && u }),
                (0, i.jsx)(e9, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((c && null == l) || (!c && u)),
                }),
                d ? (0, i.jsx)(e7, { channel: e, enableActivities: r }) : null,
                (0, eu.Ay)(e) ? (0, i.jsx)(ec.A, { channel: e, focusProps: e1 }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: l()(e0.SC, "theme-light"),
            children: [
                (0, i.jsx)(v.D, {
                    className: e0.oN,
                    variant: "heading-md/semibold",
                    children: eJ.intl.string(eJ.t["ba/rL2"]),
                }),
                (0, i.jsx)(C.E, { className: e0.uf, variant: "text-sm/normal", children: eJ.intl.string(eJ.t.Ne1Eew) }),
                (0, i.jsx)(b.$, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eJ.intl.string(eJ.t.shaBeH),
                    focusProps: e1,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(O.Y, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: O.Y.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)("div", {
                          ref: this.ref,
                          className: e0.kL,
                          children: [
                              (0, i.jsxs)(q.A, {
                                  className: e0.FI,
                                  align: q.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: e0.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(q.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: e0.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(ez.A, { channel: e }),
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
function e8(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: a, ref: l } = e,
        { parentAnalyticsLocation: s } = (0, B.Ay)(),
        { play: o, Component: d, events: u } = (0, E.G)(a ? "disable" : "enable");
    return (
        r.useEffect(() => () => o(), [a, o]),
        (0, i.jsx)(eY.A, {
            ...t,
            ref: l,
            onClick: (e) => {
                (0, z.X)(s, z.O.KRISP, !a), t.onClick(e);
            },
            onMouseEnter: () => {
                t.onMouseEnter?.(), u.onMouseEnter();
            },
            onMouseLeave: () => {
                u.onMouseLeave();
            },
            tooltipText: n ? null : eJ.intl.string(eJ.t.vFiCSx),
            icon: (0, i.jsx)(d, { size: "refresh_sm" }),
        })
    );
}
let te = (0, w.A)(function (e) {
    let t = (0, Z.A)(),
        n = (0, u.bG)([Q.default], () => Q.default.getAwaitingRemoteSessionInfo()),
        a = (0, u.bG)([ek.default], () => ek.default.getCurrentUser()),
        { channelId: l, ...s } = (0, u.cf)([ex.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: e$.bFR.FINE,
                      rtcConnectionState: e$.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ex.A.getChannelId(),
                      rtcConnectionQuality: ex.A.getQuality(),
                      rtcConnectionState: ex.A.getState(),
                      rtcConnectionLastPing: ex.A.getLastPing(),
                  },
        ),
        o = (0, u.bG)([eR.A], () => eR.A.getChannel(l), [l]),
        d = o?.getGuildId(),
        c = (0, u.bG)([eP.A], () => eP.A.getGuild(d), [d]),
        A = (0, u.cf)([eM.Ay], () => ({
            noiseCancellationSupported: eM.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, es.A)(eM.Ay.getNoiseCancellation(), eM.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eM.Ay.isNoiseCancellationError(),
            canGoLive: (0, ee.A)(eM.Ay),
        })),
        h = (0, u.bG)(
            [eM.Ay, ei.A],
            () =>
                ei.A.hasHotspot(eQ._.VOICE_PANEL_INTRODUCTION) &&
                (0, eF.mv)(a) &&
                !eM.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, u.bG)([ej.A], () => null != l && ej.A.hasVideo(l), [l]),
        E = (0, u.bG)([eb.A], () => eb.A.getCurrentUserActiveStream()),
        p = (0, u.bG)([ew.A], () => ew.A.hasLayers()),
        m = (0, u.bG)([er.A], () => er.A.isViewingRoles(d)),
        g = (0, u.bG)([eU.A], () => m && !eU.A.can(e$.xBc.VIEW_CHANNEL, o), [m, o]),
        I = eI.vL.useSetting(),
        [f, T, S] = (0, u.yK)(
            [eV.Ay, eA.A],
            () =>
                o?.isGuildStageVoice()
                    ? [eA.A.getMutableParticipants(o.id, eh.ip.SPEAKER), eA.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? eV.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        N = r.useMemo(
            () =>
                f?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                S ??
                [],
            [f, T, S],
        ),
        [O, L] = r.useState(!1);
    r.useEffect(() => {
        (m || g) && L(!1);
    }, [m, g, L]);
    let { analyticsLocations: y } = (0, B.Ay)(H.A.RTC_PANEL),
        v = (0, x.A)(d ?? e$.dJq, o?.id),
        D = (0, j.A)(o?.id);
    return (0, i.jsx)(B.f5, {
        value: y,
        children: (0, i.jsxs)("div", {
            className: e0.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(J.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(e4, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: v,
                    remoteVoiceState: t,
                    guild: c,
                    channel: o,
                    hasVideo: _,
                    selfStream: E,
                    hasLayers: p,
                    voiceStates: N,
                    showVoiceStates: I,
                    shouldShowVoicePanelIntroduction: h,
                    isPrivateChannelWithEnabledActivities: D,
                    analyticsLocations: y,
                }),
                !O && m && null != d
                    ? (0, i.jsxs)("div", {
                          className: e0.BT,
                          children: [
                              (0, i.jsx)(C.E, {
                                  variant: "text-sm/normal",
                                  className: e0.u0,
                                  children: g ? eJ.intl.string(eJ.t.efjuQJ) : eJ.intl.string(eJ.t.br8H2N),
                              }),
                              (0, i.jsx)(b.$, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: eJ.intl.string(eJ.t.WAI6xu),
                                  focusProps: e1,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
