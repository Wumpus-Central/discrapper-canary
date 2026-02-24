n.d(t, { A: () => e6 });
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
    V = n(379848),
    B = n(643501),
    H = n(857253),
    F = n(41261),
    Y = n(880144),
    W = n(338771),
    q = n(421838),
    K = n(891540),
    z = n(164956),
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
    el = n(69407),
    ea = n(96566),
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
    eT = n(961350),
    eN = n(734057),
    eS = n(71393),
    ex = n(186111),
    ev = n(430452),
    ey = n(576705),
    eb = n(383501),
    eO = n(994500),
    eL = n(287809),
    eR = n(977997),
    eP = n(607567),
    ej = n(954571),
    eD = n(975571),
    eM = n(427262),
    ew = n(42473),
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
let eK = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function ez(e) {
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
        l = !(0, Q.A)(!0, n, { location: "NoiseCancellationPopout" }),
        a = (0, c.bG)([ev.Ay], () => ev.Ay.getActiveInputProfile()),
        s = null != a && a !== eY.m.CUSTOM,
        o = eW.intl.string(eW.t.uKdWn6),
        d = eW.intl.string(eW.t.uKdWn6);
    return (
        l
            ? ((o = eW.intl.string(eW.t.mXZgC9)),
              (d = eW.intl.format(eW.t.F6lrb4, {
                  onSettingsClick: () => {
                      ev.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : s &&
              (o = eW.intl.formatToPlainString(eW.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eq.dD,
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
                                onClick: (e) => ez(e),
                                children: (0, i.jsx)("div", { className: eq.zQ }),
                            }),
                            (0, i.jsx)(I.MzZ, {
                                href: eD.A.getArticleURL(eV.MVz.NOISE_SUPPRESSION),
                                className: eq.W,
                                onClick: (e) => ez(e),
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
    return (0, i.jsx)(ew.A, {
        tooltipText: n,
        icon: t ? I.CIB : I.T7G,
        onClick: () => {
            (0, w.X)(e, w.O.STAGE_MUSIC, t), (0, es.k)(!t);
        },
    });
}
function eX(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
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
        T = (0, $.Us)(),
        N = r.useCallback(
            (e) => {
                if (ev.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    f.A.setVideoEnabled(e), e && (0, X.pX)(eV.BVt.CHANNEL(t.getGuildId() ?? eV.ME, t.id));
                };
                (0, w.X)(o, w.O.CAMERA, e), e ? (0, eI.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = A || n || h,
        { Component: v, play: y, events: b } = (0, m.K)(d.enabled ? "disable" : "enable");
    return (
        r.useEffect(() => () => y(), [d.enabled, y]),
        (0, i.jsx)(ef.r, {
            onChange: N,
            onCameraUnavailable: C,
            hasPermission: u,
            channelLimit: p,
            channelLimitReached: _,
            ...d,
            enabled: !l && d.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: r, iconComponent: l, iconColor: d, ...c } = e,
                    u = (0, i.jsx)(v, { size: "md", className: a()(eq.iA, { [eq.ij]: !S }), color: "currentColor" });
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
                                className: a()(eq.x6, eq.Sq, { [eq.rK]: n, [eq.tU]: t, [eq.r9]: c.disabled }),
                                innerClassName: eq.bk,
                                wrapperClassName: eq.x6,
                                fullWidth: !0,
                                focusProps: eK,
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
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, P.Ay)(),
        o = r === eV.BRT.POPOUT,
        d = (0, b.et)(t.id),
        h = (0, b.dL)(d),
        { userInActivity: _ } = (0, c.cf)([x.Ay], () => ({
            userInActivity: null != x.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        m = (0, y.b)({ surface: S.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        p = d !== b.xy.CAN_LAUNCH,
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
                                  (0, w.X)(l, w.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eH.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              f.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              f.onMouseLeave();
                          },
                          disabled: p,
                          className: a()(eq.x6, eq.Sq, { [eq.rK]: _, [eq.r9]: p }),
                          innerClassName: eq.bk,
                          wrapperClassName: eq.x6,
                          focusProps: eK,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(L.a, { top: -1, right: -1 }),
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
                return (0, i.jsx)(et.A, { channel: t, closePopout: n, isHovered: _ });
            },
            [t, _],
        ),
        N = r.useCallback(() => {
            o(),
                _ ? m(!1) : m(!0),
                (0, w.X)(l, w.O.GIFTING),
                p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && f(eH.i.TAKE_ACTION);
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
                    className: a()(eq.x6, eq.Sq),
                    innerClassName: eq.bk,
                    wrapperClassName: eq.x6,
                    focusProps: eK,
                    children: [
                        p === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(L.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(s, { size: "md", color: "currentColor", className: eq.iA }),
                    ],
                }),
            }),
    });
}
function e0(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: A } = (0, P.Ay)(),
        h = (0, c.bG)([eL.default], () => eL.default.getCurrentUser()),
        m = (0, c.yK)([eC.A], () => eC.A.getAllActiveStreams()),
        p = (0, e_.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([x.Ay], () => null != x.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, en.Ay)(n),
        N = r.useCallback(() => {
            (0, eE.A)(f, n.id, A);
        }, [f, n.id, A]),
        S = m.find((e) => e.ownerId === h?.id),
        v = (0, em.T)(n, h, m);
    t = null == S ? (l ? N : eg.A) : () => (0, W.A)(S);
    let y = null != S || v.length > 0,
        b = p ? eW.intl.string(eW.t.fjBNo1) : eW.intl.string(eW.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        { Component: R, events: j, play: D } = (0, _.c)(L ? "disable" : "enable");
    r.useEffect(() => () => D(), [D, L]);
    let M = (0, i.jsx)(R, { size: "md", color: "currentColor", className: a()(eq.iA, { [eq.ij]: !O }) });
    return (0, i.jsx)(I.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(em.A, {
                channel: n,
                currentUser: h,
                activeStreams: m,
                onClose: t,
                handleGoLive: l ? N : eg.A,
                onInteraction: (0, U.s)("ManageStreamsMenu", u, { entrypoint: eB.GK.OTHER_BUTTON }),
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
                    className: a()(eq.x6, eq.Sq, { [eq.rK]: null != S, [eq.r9]: !p || o }),
                    ...(y ? l : null),
                    onMouseEnter: () => {
                        r?.(), j.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        j.onMouseLeave();
                    },
                    innerClassName: eq.bk,
                    wrapperClassName: eq.x6,
                    focusProps: eK,
                    children: O
                        ? M
                        : (0, i.jsxs)(k.A, { align: k.A.Align.CENTER, children: [M, eW.intl.string(eW.t["r0/+v7"])] }),
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
            T.A.channelListScrollTo(t?.id ?? eV.ME, n.id),
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
        q.sF(eF._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, G.m1)(t, eL.default, eO.A);
        return (
            null != n
                ? ((e = eV.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eV.BVt.CHANNEL(eV.ME, t.id)),
            (0, i.jsx)(Z.A, {
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
            channel: l,
            voiceStates: a,
        } = this.props;
        return null != r
            ? null
            : l?.isGuildStageVoice() &&
                null ==
                    a.find((e) => e.user.id === eT.default.getId() && (0, ec.eY)(e.voiceState) === ec.zF.ON_STAGE) &&
                (0, eo.Zl)(l.id)
              ? (0, i.jsx)(eQ, {})
              : !n && t
                ? (0, i.jsx)(g.m_, {
                      text: eW.intl.string(eW.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(ew.A, {
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
            voiceStates: l,
            selfStream: a,
            isPrivateChannelWithEnabledActivities: s,
            showSocialLayerStorefrontGiftingButton: o,
        } = this.props;
        if (null == e || null != n) return null;
        let d = eT.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ea.Bw)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, eh.M)(e),
            A = (0, ea.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eq.uu,
            children: [
                (0, i.jsx)(eX, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(e0, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == a) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(eZ, { channel: e, enableActivities: r }) : null,
                o ? (0, i.jsx)(eJ, { channel: e }) : null,
                (0, en.Ay)(e) ? (0, i.jsx)(ei.A, { channel: e, focusProps: eK }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: a()(eq.SC, "theme-light"),
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
                    focusProps: eK,
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
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, P.Ay)(),
        { play: o, Component: d, events: c } = (0, p.G)(l ? "disable" : "enable");
    return (
        r.useEffect(() => () => o(), [l, o]),
        (0, i.jsx)(ew.A, {
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
let e6 = (0, N.A)(function (e) {
    let t = (0, H.A)(),
        n = (0, c.bG)([B.default], () => B.default.getAwaitingRemoteSessionInfo()),
        l = (0, c.bG)([eL.default], () => eL.default.getCurrentUser()),
        { channelId: a, ...s } = (0, c.cf)([eb.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eV.bFR.FINE,
                      rtcConnectionState: eV.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eb.A.getChannelId(),
                      rtcConnectionQuality: eb.A.getQuality(),
                      rtcConnectionState: eb.A.getState(),
                      rtcConnectionLastPing: eb.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([eN.A], () => eN.A.getChannel(a), [a]),
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
            [ev.Ay, K.A],
            () =>
                K.A.hasHotspot(eF._.VOICE_PANEL_INTRODUCTION) &&
                (0, eM.mv)(l) &&
                !ev.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, c.bG)([eR.A], () => null != a && eR.A.hasVideo(a), [a]),
        m = (0, c.bG)([eC.A], () => eC.A.getCurrentUserActiveStream()),
        p = (0, c.bG)([ex.A], () => ex.A.hasLayers()),
        g = (0, c.bG)([z.A], () => z.A.isViewingRoles(d)),
        E = (0, c.bG)([ey.A], () => g && !ey.A.can(eV.xBc.VIEW_CHANNEL, o), [g, o]),
        f = eu.vL.useSetting(),
        [C, T, N] = (0, c.yK)(
            [eP.Ay, er.A],
            () =>
                o?.isGuildStageVoice()
                    ? [er.A.getMutableParticipants(o.id, el.ip.SPEAKER), er.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? eP.Ay.getVoiceStatesForChannel(o) : null],
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
        L = (0, v.A)(d ?? eV.dJq, o?.id),
        j = (0, O.A)(o?.id),
        D = (0, J.T)({ location: "RTCConnection" }),
        M = (0, ee.A)({ channelId: o?.id, location: "RTCConnection" });
    return (0, i.jsx)(P.f5, {
        value: b,
        children: (0, i.jsxs)("div", {
            className: eq.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(F.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(e1, {
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
                                      y(!0);
                                  },
                                  text: eW.intl.string(eW.t.WAI6xu),
                                  focusProps: eK,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
