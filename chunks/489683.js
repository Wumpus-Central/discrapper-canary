n.d(t, { A: () => e6 });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(758879),
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
    N = n(951001),
    T = n(707606),
    S = n(155718),
    x = n(933958),
    v = n(967812),
    b = n(404522),
    y = n(782091),
    L = n(641703),
    O = n(521588),
    R = n(793574),
    P = n(688810),
    j = n(975412),
    D = n(17143),
    w = n(750765),
    M = n(384059),
    U = n(480890),
    G = n(47167),
    k = n(235986),
    V = n(379848),
    B = n(643501),
    H = n(857253),
    F = n(41261),
    Y = n(880144),
    W = n(338771),
    q = n(421838),
    z = n(891540),
    K = n(164956),
    $ = n(267102),
    Q = n(3527),
    X = n(976860),
    Z = n(178442),
    J = n(104357),
    ee = n(478564),
    et = n(729081),
    en = n(123973),
    ei = n(477835),
    er = n(63995),
    ea = n(69407),
    el = n(96566),
    es = n(302884),
    eo = n(30108),
    ed = n(39938),
    ec = n(105530),
    eu = n(253932),
    eA = n(151476),
    eh = n(405018),
    e_ = n(704877),
    em = n(848362),
    ep = n(222692),
    eg = n(702904),
    eE = n(471993),
    eI = n(442353),
    ef = n(970636),
    eC = n(616356),
    eN = n(961350),
    eT = n(734057),
    eS = n(71393),
    ex = n(186111),
    ev = n(430452),
    eb = n(576705),
    ey = n(383501),
    eL = n(994500),
    eO = n(287809),
    eR = n(977997),
    eP = n(607567),
    ej = n(954571),
    eD = n(975571),
    ew = n(427262),
    eM = n(42473),
    eU = n(994314),
    eG = n(40234),
    ek = n(253742),
    eV = n(652215),
    eB = n(806931),
    eH = n(49999),
    eF = n(897513),
    eY = n(509381),
    eW = n(985018),
    eq = n(255259);
let ez = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eK(e) {
    let t = e.currentTarget;
    ej.default.track(eV.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eV.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function e$() {
    let e = r.useRef(null);
    (0, I.tjt)(e),
        r.useEffect(() => {
            ej.default.track(eV.HAw.OPEN_POPOUT, { type: eV.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let { noiseCancellationActive: t, systemMicrophoneMode: n } = (0, c.cf)([ev.Ay], () => ({
            noiseCancellationActive: ev.Ay.getNoiseCancellation(),
            systemMicrophoneMode: ev.Ay.getSystemMicrophoneMode(),
        })),
        a = !(0, Q.A)(!0, n, { location: "NoiseCancellationPopout" }),
        l = (0, c.bG)([ev.Ay], () => ev.Ay.getActiveInputProfile()),
        s = null != l && l !== eY.my.CUSTOM,
        o = eW.intl.string(eW.t.uKdWn6),
        d = eW.intl.string(eW.t.uKdWn6);
    return (
        a
            ? ((o = eW.intl.string(eW.t.mXZgC9)),
              (d = eW.intl.format(eW.t.F6lrb4, {
                  onSettingsClick: () => {
                      ev.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : s &&
              (o = eW.intl.formatToPlainString(eW.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: l })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eq.dD,
            children: [
                (0, i.jsx)(g.m_, {
                    text: o,
                    shouldShow: s || a,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(I.dOG, {
                            label: eW.intl.string(eW.t["WGWHv/"]),
                            checked: t && !a,
                            disabled: s || a,
                            onChange: () => f.A.setNoiseCancellation(!t, { section: eV.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(I.Text, { variant: "text-sm/normal", children: d }),
                (0, i.jsx)(D.A, {
                    title: eW.intl.string(eW.t.JdUas1),
                    notchBackground: D.V.BLACK,
                    buttonTest: eW.intl.string(eW.t["sG+MGg"]),
                    buttonStop: eW.intl.string(eW.t.Yp3SbJ),
                    location: { section: eV.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(I.D0$, {
                    label: eW.intl.string(eW.t.k6h1F4),
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.BETWEEN,
                        className: eq.__invalid_footer,
                        children: [
                            (0, i.jsx)(I.MzZ, {
                                href: eV.X7G.KRISP,
                                onClick: (e) => eK(e),
                                children: (0, i.jsx)("div", { className: eq.zQ }),
                            }),
                            (0, i.jsx)(I.MzZ, {
                                href: eD.A.getArticleURL(eV.MVz.NOISE_SUPPRESSION),
                                className: eq.W,
                                onClick: (e) => eK(e),
                                children: eW.intl.string(eW.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eQ() {
    let { parentAnalyticsLocation: e } = (0, P.Ay)(),
        t = (0, c.bG)([ed.A], () => ed.A.isMuted()),
        n = t ? eW.intl.string(eW.t.ScHlfl) : eW.intl.string(eW.t.zqxfrf);
    return (0, i.jsx)(eM.A, {
        tooltipText: n,
        icon: t ? I.CIB : I.T7G,
        onClick: () => {
            (0, M.X)(e, M.O.STAGE_MUSIC, t), (0, es.k)(!t);
        },
    });
}
function eX(e) {
    let { channel: t, enableActivities: n, disabled: a } = e,
        s = r.useRef(null),
        { parentAnalyticsLocation: o } = (0, P.Ay)(),
        d = (0, eA.A)(),
        u = (0, e_.A)(t),
        A = (0, c.bG)(
            [x.Ay],
            () => null != x.Ay.getSelfEmbeddedActivityForLocation(x.Ay.getConnectedActivityLocation()),
        ),
        h = (0, en.Ay)(t),
        { reachedLimit: _, limit: p } = (0, eh.A)(t),
        C = r.useCallback(() => {
            (0, ep.A)();
        }, []),
        N = (0, $.Us)(),
        T = r.useCallback(
            (e) => {
                if (ev.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    f.A.setVideoEnabled(e), e && (0, X.pX)(eV.BVt.CHANNEL(t.getGuildId() ?? eV.ME, t.id));
                };
                (0, M.X)(o, M.O.CAMERA, e), e ? (0, eI.A)(n, N) : n();
            },
            [t, N, o],
        ),
        S = A || n || h,
        { Component: v, play: b, events: y } = (0, m.K)(d.enabled ? "disable" : "enable");
    return (
        r.useEffect(() => () => b(), [d.enabled, b]),
        (0, i.jsx)(ef.r, {
            onChange: T,
            onCameraUnavailable: C,
            hasPermission: u,
            channelLimit: p,
            channelLimitReached: _,
            ...d,
            enabled: !a && d.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: r, iconComponent: a, iconColor: d, ...c } = e,
                    u = (0, i.jsx)(v, { size: "md", className: l()(eq.iA, { [eq.ij]: !S }), color: "currentColor" });
                return (0, i.jsx)(I.YNO, {
                    targetElementRef: s,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(w.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, U.s)("VideoDeviceMenu", o),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: I.YNO.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: o, ...d } = e,
                            { isShown: A } = a;
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
                                    d.onMouseEnter?.(), y.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    y.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    o(e);
                                },
                                size: E.$n.Sizes.MEDIUM,
                                className: l()(eq.x6, eq.Sq, { [eq.rK]: n, [eq.tU]: t, [eq.r9]: c.disabled }),
                                innerClassName: eq.bk,
                                wrapperClassName: eq.x6,
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
function eZ(e) {
    let { channel: t, enableActivities: n } = e,
        r = (0, $.Us)(),
        { parentAnalyticsLocation: a, newestAnalyticsLocation: s } = (0, P.Ay)(),
        o = r === eV.BRT.POPOUT,
        d = (0, y.et)(t.id),
        h = (0, y.dL)(d),
        { userInActivity: _ } = (0, c.cf)([x.Ay], () => ({
            userInActivity: null != x.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        m = (0, b.b)({ surface: S.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        p = d !== y.xy.CAN_LAUNCH,
        { Component: I, events: f, play: C } = (0, A.c)();
    return n
        ? (0, i.jsx)(V.GY, {
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
                                  (0, M.X)(a, M.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eH.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              f.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              f.onMouseLeave();
                          },
                          disabled: p,
                          className: l()(eq.x6, eq.Sq, { [eq.rK]: _, [eq.r9]: p }),
                          innerClassName: eq.bk,
                          wrapperClassName: eq.x6,
                          focusProps: ez,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(O.a, { top: -1, right: -1 }),
                              (0, i.jsx)(I, { size: "md", color: "currentColor", className: eq.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function eJ(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        { parentAnalyticsLocation: a } = (0, P.Ay)(),
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
        N = r.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(et.A, { channel: t, closePopout: n, isHovered: _ });
            },
            [t, _],
        ),
        T = r.useCallback(() => {
            o(),
                _ ? m(!1) : m(!0),
                (0, M.X)(a, M.O.GIFTING),
                p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && f(eH.i.TAKE_ACTION);
        }, [a, o, _, p, f]);
    return (0, i.jsx)(I.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: I.YNO.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "left",
        spacing: 16,
        onRequestClose: C,
        renderPopout: N,
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
                    onClick: T,
                    className: l()(eq.x6, eq.Sq),
                    innerClassName: eq.bk,
                    wrapperClassName: eq.x6,
                    focusProps: ez,
                    children: [
                        p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(O.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(s, { size: "md", color: "currentColor", className: eq.iA }),
                    ],
                }),
            }),
    });
}
function e0(e) {
    let t,
        { channel: n, canGoLive: a, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: A } = (0, P.Ay)(),
        h = (0, c.bG)([eO.default], () => eO.default.getCurrentUser()),
        m = (0, c.yK)([eC.A], () => eC.A.getAllActiveStreams()),
        p = (0, e_.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([x.Ay], () => null != x.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        N = (0, en.Ay)(n),
        T = r.useCallback(() => {
            (0, eE.A)(f, n.id, A);
        }, [f, n.id, A]),
        S = m.find((e) => e.ownerId === h?.id),
        v = (0, em.T)(n, h, m);
    t = null == S ? (a ? T : eg.A) : () => (0, W.A)(S);
    let b = null != S || v.length > 0,
        y = p ? eW.intl.string(eW.t.fjBNo1) : eW.intl.string(eW.t.uQn9B8),
        L = C || s || N,
        O = null != S,
        { Component: R, events: j, play: D } = (0, _.c)(O ? "disable" : "enable");
    r.useEffect(() => () => D(), [D, O]);
    let w = (0, i.jsx)(R, { size: "md", color: "currentColor", className: l()(eq.iA, { [eq.ij]: !L }) });
    return (0, i.jsx)(I.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(em.A, {
                channel: n,
                currentUser: h,
                activeStreams: m,
                onClose: t,
                handleGoLive: a ? T : eg.A,
                onInteraction: (0, U.s)("ManageStreamsMenu", u, { entrypoint: eB.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: I.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...a } = e;
            return (0, i.jsx)(g.m_, {
                text: y,
                children: (0, i.jsx)(E.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: E.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, M.X)(u, M.O.STREAM, null == S), b ? n(e) : t();
                    },
                    disabled: !p || o,
                    className: l()(eq.x6, eq.Sq, { [eq.rK]: null != S, [eq.r9]: !p || o }),
                    ...(b ? a : null),
                    onMouseEnter: () => {
                        r?.(), j.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        j.onMouseLeave();
                    },
                    innerClassName: eq.bk,
                    wrapperClassName: eq.x6,
                    focusProps: ez,
                    children: L
                        ? w
                        : (0, i.jsxs)(k.A, { align: k.A.Align.CENTER, children: [w, eW.intl.string(eW.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class e1 extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            N.A.channelListScrollTo(t?.id ?? eV.ME, n.id),
            (0, M.X)(R.A.RTC_PANEL, M.O.CHANNEL_LINK);
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
        q.sF(eF._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, G.m1)(t, eO.default, eL.A);
        return (
            null != n
                ? ((e = eV.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eV.BVt.CHANNEL(eV.ME, t.id)),
            (0, i.jsx)(Z.A, {
                channelId: t.id,
                quality: r,
                state: a,
                lastPing: l,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(I.vN3, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(eU.A, {
                            className: eq.Ix,
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
            channel: a,
            voiceStates: l,
        } = this.props;
        return null != r
            ? null
            : a?.isGuildStageVoice() &&
                null ==
                    l.find((e) => e.user.id === eN.default.getId() && (0, ec.eY)(e.voiceState) === ec.zF.ON_STAGE) &&
                (0, eo.Zl)(a.id)
              ? (0, i.jsx)(eQ, {})
              : !n && t
                ? (0, i.jsx)(g.m_, {
                      text: eW.intl.string(eW.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eM.A, {
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
                          renderPopout: () => (0, i.jsx)(e$, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(e7, {
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
            ? (0, i.jsx)(ek.A, { voiceStates: t, channel: e, className: eq.Xk })
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
            showSocialLayerStorefrontGiftingButton: o,
        } = this.props;
        if (null == e || null != n) return null;
        let d = eN.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, el.Bw)(e.guild_id) || !t) return null;
            let n = a.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, eh.M)(e),
            A = (0, el.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eq.uu,
            children: [
                (0, i.jsx)(eX, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(e0, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == l) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(eZ, { channel: e, enableActivities: r }) : null,
                o ? (0, i.jsx)(eJ, { channel: e }) : null,
                (0, en.Ay)(e) ? (0, i.jsx)(ei.A, { channel: e, focusProps: ez }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: l()(eq.SC, "theme-light"),
            children: [
                (0, i.jsx)(I.Heading, {
                    className: eq.oN,
                    variant: "heading-md/semibold",
                    children: eW.intl.string(eW.t["ba/rL2"]),
                }),
                (0, i.jsx)(I.Text, {
                    className: eq.uf,
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
                          className: eq.kL,
                          children: [
                              (0, i.jsxs)(k.A, {
                                  className: eq.FI,
                                  align: k.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: eq.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(k.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eq.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(eG.A, { channel: e }),
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
function e7(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: a, ref: l } = e,
        { parentAnalyticsLocation: s } = (0, P.Ay)(),
        { play: o, Component: d, events: c } = (0, p.G)(a ? "disable" : "enable");
    return (
        r.useEffect(() => () => o(), [a, o]),
        (0, i.jsx)(eM.A, {
            ...t,
            ref: l,
            onClick: (e) => {
                (0, M.X)(s, M.O.KRISP, !a), t.onClick(e);
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
let e6 = (0, T.A)(function (e) {
    let t = (0, H.A)(),
        n = (0, c.bG)([B.default], () => B.default.getAwaitingRemoteSessionInfo()),
        a = (0, c.bG)([eO.default], () => eO.default.getCurrentUser()),
        { channelId: l, ...s } = (0, c.cf)([ey.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eV.bFR.FINE,
                      rtcConnectionState: eV.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ey.A.getChannelId(),
                      rtcConnectionQuality: ey.A.getQuality(),
                      rtcConnectionState: ey.A.getState(),
                      rtcConnectionLastPing: ey.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eT.A], () => eT.A.getChannel(l), [l]),
        d = o?.getGuildId(),
        u = (0, c.bG)([eS.A], () => eS.A.getGuild(d), [d]),
        A = (0, c.cf)([ev.Ay], () => ({
            noiseCancellationSupported: ev.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, Q.A)(ev.Ay.getNoiseCancellation(), ev.Ay.getSystemMicrophoneMode(), {
                location: "RTCConnection",
            }),
            noiseCancellationError: ev.Ay.isNoiseCancellationError(),
            canGoLive: (0, Y.A)(ev.Ay),
        })),
        h = (0, c.bG)(
            [ev.Ay, z.A],
            () =>
                z.A.hasHotspot(eF._.VOICE_PANEL_INTRODUCTION) &&
                (0, ew.mv)(a) &&
                !ev.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, c.bG)([eR.A], () => null != l && eR.A.hasVideo(l), [l]),
        m = (0, c.bG)([eC.A], () => eC.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([ex.A], () => ex.A.hasLayers()),
        g = (0, c.bG)([K.A], () => K.A.isViewingRoles(d)),
        E = (0, c.bG)([eb.A], () => g && !eb.A.can(eV.xBc.VIEW_CHANNEL, o), [g, o]),
        f = eu.vL.useSetting(),
        [C, N, T] = (0, c.yK)(
            [eP.Ay, er.A],
            () =>
                o?.isGuildStageVoice()
                    ? [er.A.getMutableParticipants(o.id, ea.ip.SPEAKER), er.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? eP.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        S = r.useMemo(
            () =>
                C?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                T ??
                [],
            [C, N, T],
        ),
        [x, b] = r.useState(!1);
    r.useEffect(() => {
        (g || E) && b(!1);
    }, [g, E, b]);
    let { analyticsLocations: y } = (0, P.Ay)(R.A.RTC_PANEL),
        O = (0, v.A)(d ?? eV.dJq, o?.id),
        j = (0, L.A)(o?.id),
        D = (0, J.T)({ location: "RTCConnection" }),
        w = (0, ee.A)({ channelId: o?.id, location: "RTCConnection" });
    return (0, i.jsx)(P.f5, {
        value: y,
        children: (0, i.jsxs)("div", {
            className: eq.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(F.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(e1, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: O,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: _,
                    selfStream: m,
                    hasLayers: p,
                    voiceStates: S,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    showSocialLayerStorefrontGiftingButton: D && w,
                    isPrivateChannelWithEnabledActivities: j,
                    analyticsLocations: y,
                }),
                !x && g && null != d
                    ? (0, i.jsxs)("div", {
                          className: eq.BT,
                          children: [
                              (0, i.jsx)(I.Text, {
                                  variant: "text-sm/normal",
                                  className: eq.u0,
                                  children: E ? eW.intl.string(eW.t.efjuQJ) : eW.intl.string(eW.t.br8H2N),
                              }),
                              (0, i.jsx)(I.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      b(!0);
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
