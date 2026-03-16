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
    g = n(385278),
    p = n(435371),
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
    D = n(975412),
    j = n(17143),
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
    W = n(880144),
    q = n(338771),
    z = n(421838),
    K = n(891540),
    $ = n(164956),
    Q = n(267102),
    X = n(195895),
    Z = n(3527),
    J = n(976860),
    ee = n(178442),
    et = n(104357),
    en = n(478564),
    ei = n(729081),
    er = n(123973),
    el = n(477835),
    ea = n(63995),
    es = n(69407),
    eo = n(96566),
    ed = n(302884),
    ec = n(30108),
    eu = n(39938),
    eA = n(105530),
    eh = n(253932),
    e_ = n(151476),
    em = n(405018),
    eg = n(704877),
    ep = n(848362),
    eE = n(222692),
    eI = n(702904),
    ef = n(471993),
    eC = n(442353),
    eT = n(970636),
    eN = n(616356),
    eS = n(961350),
    ex = n(734057),
    ev = n(71393),
    ey = n(186111),
    eb = n(430452),
    eO = n(576705),
    eL = n(383501),
    eR = n(994500),
    eP = n(287809),
    eD = n(977997),
    ej = n(607567),
    eM = n(954571),
    ew = n(975571),
    eU = n(427262),
    eG = n(42473),
    ek = n(994314),
    eV = n(40234),
    eB = n(253742),
    eH = n(652215),
    eF = n(806931),
    eY = n(49999),
    eW = n(897513),
    eq = n(509381),
    ez = n(985018),
    eK = n(255259);
let e$ = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eQ(e) {
    let t = e.currentTarget;
    eM.default.track(eH.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eH.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eX() {
    let e = r.useRef(null);
    (0, I.tjt)(e),
        r.useEffect(() => {
            eM.default.track(eH.HAw.OPEN_POPOUT, { type: eH.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, c.bG)([eb.Ay], () => eb.Ay.getNoiseCancellation()),
        n = (0, X.c)(),
        l = (0, c.bG)([eb.Ay], () => eb.Ay.getActiveInputProfile()),
        a = null != l && l !== eq.m.CUSTOM,
        s = ez.intl.string(ez.t.uKdWn6),
        o = ez.intl.string(ez.t.uKdWn6);
    return (
        n
            ? ((s = ez.intl.string(ez.t.mXZgC9)),
              (o = ez.intl.format(ez.t.F6lrb4, {
                  onSettingsClick: () => {
                      eb.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : a &&
              (s = ez.intl.formatToPlainString(ez.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: l })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eK.dD,
            children: [
                (0, i.jsx)(p.m_, {
                    text: s,
                    shouldShow: a || n,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(I.dOG, {
                            label: ez.intl.string(ez.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: a || n,
                            onChange: () => f.A.setNoiseCancellation(!t, { section: eH.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(I.Text, { variant: "text-sm/normal", children: o }),
                (0, i.jsx)(j.A, {
                    title: ez.intl.string(ez.t.JdUas1),
                    notchBackground: j.V.BLACK,
                    buttonTest: ez.intl.string(ez.t["sG+MGg"]),
                    buttonStop: ez.intl.string(ez.t.Yp3SbJ),
                    location: { section: eH.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(I.D0$, {
                    label: ez.intl.string(ez.t.k6h1F4),
                    children: (0, i.jsxs)(k.A, {
                        justify: k.A.Justify.BETWEEN,
                        className: eK.__invalid_footer,
                        children: [
                            (0, i.jsx)(I.MzZ, {
                                href: eH.X7G.KRISP,
                                onClick: (e) => eQ(e),
                                children: (0, i.jsx)("div", { className: eK.zQ }),
                            }),
                            (0, i.jsx)(I.MzZ, {
                                href: ew.A.getArticleURL(eH.MVz.NOISE_SUPPRESSION),
                                className: eK.W,
                                onClick: (e) => eQ(e),
                                children: ez.intl.string(ez.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eZ() {
    let { parentAnalyticsLocation: e } = (0, P.Ay)(),
        t = (0, c.bG)([eu.A], () => eu.A.isMuted()),
        n = t ? ez.intl.string(ez.t.ScHlfl) : ez.intl.string(ez.t.zqxfrf);
    return (0, i.jsx)(eG.A, {
        tooltipText: n,
        icon: t ? I.CIB : I.T7G,
        onClick: () => {
            (0, w.X)(e, w.O.STAGE_MUSIC, t), (0, ed.k)(!t);
        },
    });
}
function eJ(e) {
    let { channel: t, enableActivities: n, disabled: l } = e,
        s = r.useRef(null),
        { parentAnalyticsLocation: o } = (0, P.Ay)(),
        d = (0, e_.A)(),
        u = (0, eg.A)(t),
        A = (0, c.bG)(
            [x.Ay],
            () => null != x.Ay.getSelfEmbeddedActivityForLocation(x.Ay.getConnectedActivityLocation()),
        ),
        h = (0, er.Ay)(t),
        { reachedLimit: _, limit: g } = (0, em.A)(t),
        C = r.useCallback(() => {
            (0, eE.A)();
        }, []),
        T = (0, Q.Us)(),
        N = r.useCallback(
            (e) => {
                if (eb.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    f.A.setVideoEnabled(e), e && (0, J.pX)(eH.BVt.CHANNEL(t.getGuildId() ?? eH.ME, t.id));
                };
                (0, w.X)(o, w.O.CAMERA, e), e ? (0, eC.A)(n, T) : n();
            },
            [t, T, o],
        ),
        S = A || n || h,
        { Component: v, play: y, events: b } = (0, m.K)(d.enabled ? "disable" : "enable");
    return (
        r.useEffect(() => () => y(), [d.enabled, y]),
        (0, i.jsx)(eT.r, {
            onChange: N,
            onCameraUnavailable: C,
            hasPermission: u,
            channelLimit: g,
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
                        return (0, i.jsx)(p.m_, {
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
                                focusProps: e$,
                                children: S
                                    ? u
                                    : (0, i.jsxs)(k.A, {
                                          align: k.A.Align.CENTER,
                                          children: [u, ez.intl.string(ez.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function e0(e) {
    let { channel: t, enableActivities: n } = e,
        r = (0, Q.Us)(),
        { parentAnalyticsLocation: l, newestAnalyticsLocation: s } = (0, P.Ay)(),
        o = r === eH.BRT.POPOUT,
        d = (0, b.et)(t.id),
        h = (0, b.dL)(d),
        { userInActivity: _ } = (0, c.cf)([x.Ay], () => ({
            userInActivity: null != x.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        m = (0, y.b)({ surface: S.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        g = d !== b.xy.CAN_LAUNCH,
        { Component: I, events: f, play: C } = (0, A.c)();
    return n
        ? (0, i.jsx)(B.GY, {
              contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: m,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: r } = e;
                  return (0, i.jsx)(p.m_, {
                      text: h,
                      children: (0, i.jsxs)(E.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: E.$n.Sizes.MEDIUM,
                          ...f,
                          onClick: () => {
                              C(),
                                  (0, D.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: o,
                                      analyticsLocation: s,
                                  }),
                                  (0, w.X)(l, w.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && r(eY.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              f.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              f.onMouseLeave();
                          },
                          disabled: g,
                          className: a()(eK.x6, eK.Sq, { [eK.rK]: _, [eK.r9]: g }),
                          innerClassName: eK.bk,
                          wrapperClassName: eK.x6,
                          focusProps: e$,
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
function e1(e) {
    let { channel: t } = e,
        n = r.useRef(null),
        { parentAnalyticsLocation: l } = (0, P.Ay)(),
        {
            Component: s,
            play: o,
            events: { onMouseEnter: d, onMouseLeave: c, ...A },
        } = (0, h.T)(),
        [_, m] = r.useState(!1),
        [g, f] = (0, V.kn)([u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE], void 0, !0),
        C = r.useCallback(() => {
            m(!1);
        }, []),
        T = r.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(ei.A, { channel: t, closePopout: n, isHovered: _ });
            },
            [t, _],
        ),
        N = r.useCallback(() => {
            o(),
                _ ? m(!1) : m(!0),
                (0, w.X)(l, w.O.GIFTING),
                g === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && f(eY.i.TAKE_ACTION);
        }, [l, o, _, g, f]);
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
            (0, i.jsx)(p.m_, {
                text: ez.intl.string(ez.t.PEjaCx),
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
                    focusProps: e$,
                    children: [
                        g === u.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE && (0, i.jsx)(L.a, { top: -4, right: -4, alert: !0 }),
                        (0, i.jsx)(s, { size: "md", color: "currentColor", className: eK.iA }),
                    ],
                }),
            }),
    });
}
function e7(e) {
    let t,
        { channel: n, canGoLive: l, enableActivities: s, disabled: o } = e,
        d = r.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: A } = (0, P.Ay)(),
        h = (0, c.bG)([eP.default], () => eP.default.getCurrentUser()),
        m = (0, c.yK)([eN.A], () => eN.A.getAllActiveStreams()),
        g = (0, eg.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([x.Ay], () => null != x.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, er.Ay)(n),
        N = r.useCallback(() => {
            (0, ef.A)(f, n.id, A);
        }, [f, n.id, A]),
        S = m.find((e) => e.ownerId === h?.id),
        v = (0, ep.T)(n, h, m);
    t = null == S ? (l ? N : eI.A) : () => (0, q.A)(S);
    let y = null != S || v.length > 0,
        b = g ? ez.intl.string(ez.t.fjBNo1) : ez.intl.string(ez.t.uQn9B8),
        O = C || s || T,
        L = null != S,
        { Component: R, events: D, play: j } = (0, _.c)(L ? "disable" : "enable");
    r.useEffect(() => () => j(), [j, L]);
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
                handleGoLive: l ? N : eI.A,
                onInteraction: (0, U.s)("ManageStreamsMenu", u, { entrypoint: eF.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: I.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: r, ...l } = e;
            return (0, i.jsx)(p.m_, {
                text: b,
                children: (0, i.jsx)(E.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: E.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, w.X)(u, w.O.STREAM, null == S), y ? n(e) : t();
                    },
                    disabled: !g || o,
                    className: a()(eK.x6, eK.Sq, { [eK.rK]: null != S, [eK.r9]: !g || o }),
                    ...(y ? l : null),
                    onMouseEnter: () => {
                        r?.(), D.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        D.onMouseLeave();
                    },
                    innerClassName: eK.bk,
                    wrapperClassName: eK.x6,
                    focusProps: e$,
                    children: O
                        ? M
                        : (0, i.jsxs)(k.A, { align: k.A.Align.CENTER, children: [M, ez.intl.string(ez.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class e6 extends r.PureComponent {
    ref = r.createRef();
    krispButtonRef = r.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            T.A.channelListScrollTo(t?.id ?? eH.ME, n.id),
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
        z.sF(eW._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, G.m1)(t, eP.default, eR.A);
        return (
            null != n
                ? ((e = eH.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eH.BVt.CHANNEL(eH.ME, t.id)),
            (0, i.jsx)(ee.A, {
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
                        children: (0, i.jsx)(ek.A, {
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
                    a.find((e) => e.user.id === eS.default.getId() && (0, eA.eY)(e.voiceState) === eA.zF.ON_STAGE) &&
                (0, ec.Zl)(l.id)
              ? (0, i.jsx)(eZ, {})
              : !n && t
                ? (0, i.jsx)(p.m_, {
                      text: ez.intl.string(ez.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eG.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: I.mXj,
                          "aria-label": ez.intl.string(ez.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      I.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eX, {}),
                          children: (t, n) => {
                              let { isShown: r } = n;
                              return (0, i.jsx)(e9, {
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
            ? (0, i.jsx)(eB.A, { voiceStates: t, channel: e, className: eK.Xk })
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
        let d = eS.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, eo.Bw)(e.guild_id) || !t) return null;
            let n = l.find((e) => e.user.id === d);
            if (null == n || n.voiceState.suppress) return null;
        }
        let c = (e.isGuildVoice() || s) && r,
            { reachedLimit: u } = (0, em.M)(e),
            A = (0, eo.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eK.uu,
            children: [
                (0, i.jsx)(eJ, { channel: e, enableActivities: c, disabled: !A && u }),
                (0, i.jsx)(e7, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: c,
                    disabled: e.isGuildStageVoice() && ((A && null == a) || (!A && u)),
                }),
                c && !o ? (0, i.jsx)(e0, { channel: e, enableActivities: r }) : null,
                o ? (0, i.jsx)(e1, { channel: e }) : null,
                (0, er.Ay)(e) ? (0, i.jsx)(el.A, { channel: e, focusProps: e$ }) : null,
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
                    children: ez.intl.string(ez.t["ba/rL2"]),
                }),
                (0, i.jsx)(I.Text, {
                    className: eK.uf,
                    variant: "text-sm/normal",
                    children: ez.intl.string(ez.t.Ne1Eew),
                }),
                (0, i.jsx)(I.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: ez.intl.string(ez.t.shaBeH),
                    focusProps: e$,
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
                                              (0, i.jsx)(eV.A, { channel: e }),
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
function e9(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: l, ref: a } = e,
        { parentAnalyticsLocation: s } = (0, P.Ay)(),
        { play: o, Component: d, events: c } = (0, g.G)(l ? "disable" : "enable");
    return (
        r.useEffect(() => () => o(), [l, o]),
        (0, i.jsx)(eG.A, {
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
            tooltipText: n ? null : ez.intl.string(ez.t.vFiCSx),
            icon: (0, i.jsx)(d, { size: "refresh_sm" }),
        })
    );
}
let e5 = (0, N.A)(function (e) {
    let t = (0, F.A)(),
        n = (0, c.bG)([H.default], () => H.default.getAwaitingRemoteSessionInfo()),
        l = (0, c.bG)([eP.default], () => eP.default.getCurrentUser()),
        { channelId: a, ...s } = (0, c.cf)([eL.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eH.bFR.FINE,
                      rtcConnectionState: eH.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: eL.A.getChannelId(),
                      rtcConnectionQuality: eL.A.getQuality(),
                      rtcConnectionState: eL.A.getState(),
                      rtcConnectionLastPing: eL.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([ex.A], () => ex.A.getChannel(a), [a]),
        d = o?.getGuildId(),
        u = (0, c.bG)([ev.A], () => ev.A.getGuild(d), [d]),
        A = (0, c.cf)([eb.Ay], () => ({
            noiseCancellationSupported: eb.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, Z.A)(eb.Ay.getNoiseCancellation(), eb.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eb.Ay.isNoiseCancellationError(),
            canGoLive: (0, W.A)(eb.Ay),
        })),
        h = (0, c.bG)(
            [eb.Ay, K.A],
            () =>
                K.A.hasHotspot(eW._.VOICE_PANEL_INTRODUCTION) &&
                (0, eU.mv)(l) &&
                !eb.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, c.bG)([eD.A], () => null != a && eD.A.hasVideo(a), [a]),
        m = (0, c.bG)([eN.A], () => eN.A.getCurrentUserActiveStream()),
        g = (0, c.bG)([ey.A], () => ey.A.hasLayers()),
        p = (0, c.bG)([$.A], () => $.A.isViewingRoles(d)),
        E = (0, c.bG)([eO.A], () => p && !eO.A.can(eH.xBc.VIEW_CHANNEL, o), [p, o]),
        f = eh.vL.useSetting(),
        [C, T, N] = (0, c.yK)(
            [ej.Ay, ea.A],
            () =>
                o?.isGuildStageVoice()
                    ? [ea.A.getMutableParticipants(o.id, es.ip.SPEAKER), ea.A.getParticipantsVersion(o.id), null]
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
        (p || E) && y(!1);
    }, [p, E, y]);
    let { analyticsLocations: b } = (0, P.Ay)(R.A.RTC_PANEL),
        L = (0, v.A)(d ?? eH.dJq, o?.id),
        D = (0, O.A)(o?.id),
        j = (0, et.T)({ location: "RTCConnection" }),
        M = (0, en.A)({ channelId: o?.id });
    return (0, i.jsx)(P.f5, {
        value: b,
        children: (0, i.jsxs)("div", {
            className: eK.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(Y.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(e6, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: L,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: _,
                    selfStream: m,
                    hasLayers: g,
                    voiceStates: S,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    showSocialLayerStorefrontGiftingButton: j && M,
                    isPrivateChannelWithEnabledActivities: D,
                    analyticsLocations: b,
                }),
                !x && p && null != d
                    ? (0, i.jsxs)("div", {
                          className: eK.BT,
                          children: [
                              (0, i.jsx)(I.Text, {
                                  variant: "text-sm/normal",
                                  className: eK.u0,
                                  children: E ? ez.intl.string(ez.t.efjuQJ) : ez.intl.string(ez.t.br8H2N),
                              }),
                              (0, i.jsx)(I.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      y(!0);
                                  },
                                  text: ez.intl.string(ez.t.WAI6xu),
                                  focusProps: e$,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
