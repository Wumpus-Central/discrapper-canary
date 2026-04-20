n.d(t, { A: () => eJ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(936504),
    c = n(311907),
    u = n(554146),
    A = n(697744),
    h = n(416696),
    _ = n(446080),
    m = n(385278),
    g = n(435371),
    p = n(421380),
    E = n(397927),
    I = n(827343),
    f = n(442433),
    C = n(951001),
    T = n(707606),
    N = n(155718),
    S = n(933958),
    x = n(967812),
    b = n(404522),
    v = n(782091),
    y = n(641703),
    O = n(521588),
    L = n(793574),
    R = n(688810),
    P = n(975412),
    D = n(17143),
    j = n(750765),
    M = n(384059),
    w = n(480890),
    U = n(47167),
    G = n(235986),
    k = n(379848),
    V = n(643501),
    B = n(857253),
    H = n(41261),
    F = n(880144),
    Y = n(338771),
    W = n(421838),
    K = n(891540),
    q = n(164956),
    z = n(267102),
    $ = n(195895),
    Q = n(3527),
    X = n(976860),
    Z = n(178442),
    J = n(123973),
    ee = n(477835),
    et = n(63995),
    en = n(69407),
    ei = n(96566),
    el = n(302884),
    ea = n(30108),
    er = n(39938),
    es = n(105530),
    eo = n(253932),
    ed = n(151476),
    ec = n(405018),
    eu = n(704877),
    eA = n(848362),
    eh = n(222692),
    e_ = n(702904),
    em = n(471993),
    eg = n(442353),
    ep = n(970636),
    eE = n(616356),
    eI = n(961350),
    ef = n(734057),
    eC = n(71393),
    eT = n(186111),
    eN = n(430452),
    eS = n(576705),
    ex = n(383501),
    eb = n(994500),
    ev = n(287809),
    ey = n(977997),
    eO = n(607567),
    eL = n(954571),
    eR = n(975571),
    eP = n(427262),
    eD = n(42473),
    ej = n(994314),
    eM = n(40234),
    ew = n(253742),
    eU = n(652215),
    eG = n(806931),
    ek = n(49999),
    eV = n(897513),
    eB = n(509381),
    eH = n(985018),
    eF = n(395766);
let eY = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function eW(e) {
    let t = e.currentTarget;
    eL.default.track(eU.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: eU.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function eK() {
    let e = l.useRef(null);
    (0, E.tjt)(e),
        l.useEffect(() => {
            eL.default.track(eU.HAw.OPEN_POPOUT, { type: eU.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, c.bG)([eN.Ay], () => eN.Ay.getNoiseCancellation()),
        n = (0, $.c)(),
        a = (0, c.bG)([eN.Ay], () => eN.Ay.getActiveInputProfile()),
        r = null != a && a !== eB.m.CUSTOM,
        s = eH.intl.string(eH.t.uKdWn6),
        o = eH.intl.string(eH.t.uKdWn6);
    return (
        n
            ? ((s = eH.intl.string(eH.t.mXZgC9)),
              (o = eH.intl.format(eH.t.F6lrb4, {
                  onSettingsClick: () => {
                      eN.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r &&
              (s = eH.intl.formatToPlainString(eH.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: a })),
        (0, i.jsxs)("div", {
            ref: e,
            className: eF.dD,
            children: [
                (0, i.jsx)(g.m_, {
                    text: s,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(E.dOG, {
                            label: eH.intl.string(eH.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => I.A.setNoiseCancellation(!t, { section: eU.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, i.jsx)(E.Text, { variant: "text-sm/normal", children: o }),
                (0, i.jsx)(D.A, {
                    title: eH.intl.string(eH.t.JdUas1),
                    notchBackground: D.V.BLACK,
                    buttonTest: eH.intl.string(eH.t["sG+MGg"]),
                    buttonStop: eH.intl.string(eH.t.Yp3SbJ),
                    location: { section: eU.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, i.jsx)(E.D0$, {
                    label: eH.intl.string(eH.t.k6h1F4),
                    children: (0, i.jsxs)(G.A, {
                        justify: G.A.Justify.BETWEEN,
                        className: eF.__invalid_footer,
                        children: [
                            (0, i.jsx)(E.MzZ, {
                                href: eU.X7G.KRISP,
                                onClick: (e) => eW(e),
                                children: (0, i.jsx)("div", { className: eF.zQ }),
                            }),
                            (0, i.jsx)(E.MzZ, {
                                href: eR.A.getArticleURL(eU.MVz.NOISE_SUPPRESSION),
                                className: eF.W,
                                onClick: (e) => eW(e),
                                children: eH.intl.string(eH.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function eq() {
    let { parentAnalyticsLocation: e } = (0, R.Ay)(),
        t = (0, c.bG)([er.A], () => er.A.isMuted()),
        n = t ? eH.intl.string(eH.t.ScHlfl) : eH.intl.string(eH.t.zqxfrf);
    return (0, i.jsx)(eD.A, {
        tooltipText: n,
        icon: t ? E.CIB : E.T7G,
        onClick: () => {
            (0, M.X)(e, M.O.STAGE_MUSIC, t), (0, el.k)(!t);
        },
    });
}
function ez(e) {
    let { channel: t, enableActivities: n, disabled: a } = e,
        s = l.useRef(null),
        { parentAnalyticsLocation: o } = (0, R.Ay)(),
        d = (0, ed.A)(),
        u = (0, eu.A)(t),
        A = (0, c.bG)(
            [S.Ay],
            () => null != S.Ay.getSelfEmbeddedActivityForLocation(S.Ay.getConnectedActivityLocation()),
        ),
        h = (0, J.Ay)(t),
        { reachedLimit: m, limit: f } = (0, ec.A)(t),
        C = l.useCallback(() => {
            (0, eh.A)();
        }, []),
        T = (0, z.Us)(),
        N = l.useCallback(
            (e) => {
                if (eN.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    I.A.setVideoEnabled(e), e && (0, X.pX)(eU.BVt.CHANNEL(t.getGuildId() ?? eU.ME, t.id));
                };
                (0, M.X)(o, M.O.CAMERA, e), e ? (0, eg.A)(n, T) : n();
            },
            [t, T, o],
        ),
        x = A || n || h,
        { Component: b, play: v, events: y } = (0, _.K)(d.enabled ? "disable" : "enable");
    return (
        l.useEffect(() => () => v(), [d.enabled, v]),
        (0, i.jsx)(ep.r, {
            onChange: N,
            onCameraUnavailable: C,
            hasPermission: u,
            channelLimit: f,
            channelLimitReached: m,
            ...d,
            enabled: !a && d.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: l, iconComponent: a, iconColor: d, ...c } = e,
                    u = (0, i.jsx)(b, { size: "md", className: r()(eF.iA, { [eF.ij]: !x }), color: "currentColor" });
                return (0, i.jsx)(E.YNO, {
                    targetElementRef: s,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsx)(j.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, w.s)("VideoDeviceMenu", o),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: E.YNO.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: o, ...d } = e,
                            { isShown: A } = a;
                        return (0, i.jsx)(g.m_, {
                            text: l,
                            children: (0, i.jsx)(p.$n, {
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
                                size: p.$n.Sizes.MEDIUM,
                                className: r()(eF.x6, eF.Sq, { [eF.rK]: n, [eF.tU]: t, [eF.r9]: c.disabled }),
                                innerClassName: eF.bk,
                                wrapperClassName: eF.x6,
                                fullWidth: !0,
                                focusProps: eY,
                                children: x
                                    ? u
                                    : (0, i.jsxs)(G.A, {
                                          align: G.A.Align.CENTER,
                                          children: [u, eH.intl.string(eH.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function e$(e) {
    let { channel: t, enableActivities: n } = e,
        l = (0, z.Us)(),
        { parentAnalyticsLocation: a, newestAnalyticsLocation: s } = (0, R.Ay)(),
        o = l === eU.BRT.POPOUT,
        d = (0, v.et)(t.id),
        h = (0, v.dL)(d),
        { userInActivity: _ } = (0, c.cf)([S.Ay], () => ({
            userInActivity: null != S.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        m = (0, b.b)({ surface: N.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        E = d !== v.xy.CAN_LAUNCH,
        { Component: I, events: f, play: C } = (0, A.c)();
    return n
        ? (0, i.jsx)(k.GY, {
              contentType: u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: m,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: l } = e;
                  return (0, i.jsx)(g.m_, {
                      text: h,
                      children: (0, i.jsxs)(p.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: p.$n.Sizes.MEDIUM,
                          ...f,
                          onClick: () => {
                              C(),
                                  (0, P.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: o,
                                      analyticsLocation: s,
                                  }),
                                  (0, M.X)(a, M.O.ACTIVITY),
                                  n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && l(ek.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              f.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              f.onMouseLeave();
                          },
                          disabled: E,
                          className: r()(eF.x6, eF.Sq, { [eF.rK]: _, [eF.r9]: E }),
                          innerClassName: eF.bk,
                          wrapperClassName: eF.x6,
                          focusProps: eY,
                          children: [
                              n === u.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, i.jsx)(O.a, { top: -1, right: -1 }),
                              (0, i.jsx)(I, { size: "md", color: "currentColor", className: eF.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function eQ(e) {
    let t,
        { channel: n, canGoLive: a, enableActivities: s, disabled: o } = e,
        d = l.useRef(null),
        { parentAnalyticsLocation: u, analyticsLocations: A } = (0, R.Ay)(),
        _ = (0, c.bG)([ev.default], () => ev.default.getCurrentUser()),
        m = (0, c.yK)([eE.A], () => eE.A.getAllActiveStreams()),
        I = (0, eu.A)(n),
        f = n.getGuildId(),
        C = (0, c.cf)([S.Ay], () => null != S.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        T = (0, J.Ay)(n),
        N = l.useCallback(() => {
            (0, em.A)(f, n.id, A);
        }, [f, n.id, A]),
        x = m.find((e) => e.ownerId === _?.id),
        b = (0, eA.T)(n, _, m);
    t = null == x ? (a ? N : e_.A) : () => (0, Y.A)(x);
    let v = null != x || b.length > 0,
        y = I ? eH.intl.string(eH.t.fjBNo1) : eH.intl.string(eH.t.uQn9B8),
        O = C || s || T,
        L = null != x,
        { Component: P, events: D, play: j } = (0, h.c)(L ? "disable" : "enable");
    l.useEffect(() => () => j(), [j, L]);
    let U = (0, i.jsx)(P, { size: "md", color: "currentColor", className: r()(eF.iA, { [eF.ij]: !O }) });
    return (0, i.jsx)(E.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eA.A, {
                channel: n,
                currentUser: _,
                activeStreams: m,
                onClose: t,
                handleGoLive: a ? N : e_.A,
                onInteraction: (0, w.s)("ManageStreamsMenu", u, { entrypoint: eG.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: E.YNO.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: l, ...a } = e;
            return (0, i.jsx)(g.m_, {
                text: y,
                children: (0, i.jsx)(p.$n, {
                    "data-migration-pending": !0,
                    buttonRef: d,
                    size: p.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, M.X)(u, M.O.STREAM, null == x), v ? n(e) : t();
                    },
                    disabled: !I || o,
                    className: r()(eF.x6, eF.Sq, { [eF.rK]: null != x, [eF.r9]: !I || o }),
                    ...(v ? a : null),
                    onMouseEnter: () => {
                        l?.(), D.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        D.onMouseLeave();
                    },
                    innerClassName: eF.bk,
                    wrapperClassName: eF.x6,
                    focusProps: eY,
                    children: O
                        ? U
                        : (0, i.jsxs)(G.A, { align: G.A.Align.CENTER, children: [U, eH.intl.string(eH.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class eX extends l.PureComponent {
    ref = l.createRef();
    krispButtonRef = l.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        o()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            C.A.channelListScrollTo(t?.id ?? eU.ME, n.id),
            (0, M.X)(L.A.RTC_PANEL, M.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: l } = this.props;
        (0, f.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, i.jsx)(R.f5, {
                    value: l,
                    children: (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, w.s)("RTCConnectionMenu", L.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        W.sF(eV._.VOICE_PANEL_INTRODUCTION);
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
        let o = (0, U.m1)(t, ev.default, eb.A);
        return (
            null != n
                ? ((e = eU.BVt.CHANNEL(n.id, t.id)), (o = `${o} / ${n.name}`))
                : (e = eU.BVt.CHANNEL(eU.ME, t.id)),
            (0, i.jsx)(Z.A, {
                channelId: t.id,
                quality: l,
                state: a,
                lastPing: r,
                hasVideo: s,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, i.jsx)(E.vN3, {
                    children: (0, i.jsx)(d.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, i.jsx)(ej.A, {
                            className: eF.Ix,
                            children: (0, i.jsx)(E.Text, {
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
                    r.find((e) => e.user.id === eI.default.getId() && (0, es.eY)(e.voiceState) === es.zF.ON_STAGE) &&
                (0, ea.Zl)(a.id)
              ? (0, i.jsx)(eq, {})
              : !n && t
                ? (0, i.jsx)(g.m_, {
                      text: eH.intl.string(eH.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, i.jsx)(eD.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: E.mXj,
                          "aria-label": eH.intl.string(eH.t["i+SO/U"]),
                      }),
                  })
                : (0, i.jsx)(
                      E.YNO,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, i.jsx)(eK, {}),
                          children: (t, n) => {
                              let { isShown: l } = n;
                              return (0, i.jsx)(eZ, {
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
            ? (0, i.jsx)(ew.A, { voiceStates: t, channel: e, className: eF.Xk })
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
        let o = eI.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, ei.Bw)(e.guild_id) || !t) return null;
            let n = a.find((e) => e.user.id === o);
            if (null == n || n.voiceState.suppress) return null;
        }
        let d = (e.isGuildVoice() || s) && l,
            { reachedLimit: c } = (0, ec.M)(e),
            u = (0, ei.xn)(e.id);
        return (0, i.jsxs)("div", {
            className: eF.uu,
            children: [
                (0, i.jsx)(ez, { channel: e, enableActivities: d, disabled: !u && c }),
                (0, i.jsx)(eQ, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: d,
                    disabled: e.isGuildStageVoice() && ((u && null == r) || (!u && c)),
                }),
                d ? (0, i.jsx)(e$, { channel: e, enableActivities: l }) : null,
                (0, J.Ay)(e) ? (0, i.jsx)(ee.A, { channel: e, focusProps: eY }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, i.jsxs)("div", {
            className: r()(eF.SC, "theme-light"),
            children: [
                (0, i.jsx)(E.Heading, {
                    className: eF.oN,
                    variant: "heading-md/semibold",
                    children: eH.intl.string(eH.t["ba/rL2"]),
                }),
                (0, i.jsx)(E.Text, {
                    className: eF.uf,
                    variant: "text-sm/normal",
                    children: eH.intl.string(eH.t.Ne1Eew),
                }),
                (0, i.jsx)(E.Button, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: eH.intl.string(eH.t.shaBeH),
                    focusProps: eY,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(E.YNO, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: E.YNO.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, i.jsxs)("div", {
                          ref: this.ref,
                          className: eF.kL,
                          children: [
                              (0, i.jsxs)(G.A, {
                                  className: eF.FI,
                                  align: G.A.Align.CENTER,
                                  children: [
                                      (0, i.jsx)("div", { className: eF.vW, children: this.renderConnectionStatus() }),
                                      (0, i.jsxs)(G.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: eF.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, i.jsx)(eM.A, { channel: e }),
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
function eZ(e) {
    let { popoutProps: t, isShown: n, noiseCancellationActive: a, ref: r } = e,
        { parentAnalyticsLocation: s } = (0, R.Ay)(),
        { play: o, Component: d, events: c } = (0, m.G)(a ? "disable" : "enable");
    return (
        l.useEffect(() => () => o(), [a, o]),
        (0, i.jsx)(eD.A, {
            ...t,
            ref: r,
            onClick: (e) => {
                (0, M.X)(s, M.O.KRISP, !a), t.onClick(e);
            },
            onMouseEnter: () => {
                t.onMouseEnter?.(), c.onMouseEnter();
            },
            onMouseLeave: () => {
                c.onMouseLeave();
            },
            tooltipText: n ? null : eH.intl.string(eH.t.vFiCSx),
            icon: (0, i.jsx)(d, { size: "refresh_sm" }),
        })
    );
}
let eJ = (0, T.A)(function (e) {
    let t = (0, B.A)(),
        n = (0, c.bG)([V.default], () => V.default.getAwaitingRemoteSessionInfo()),
        a = (0, c.bG)([ev.default], () => ev.default.getCurrentUser()),
        { channelId: r, ...s } = (0, c.cf)([ex.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: eU.bFR.FINE,
                      rtcConnectionState: eU.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: ex.A.getChannelId(),
                      rtcConnectionQuality: ex.A.getQuality(),
                      rtcConnectionState: ex.A.getState(),
                      rtcConnectionLastPing: ex.A.getLastPing(),
                  },
        ),
        o = (0, c.bG)([ef.A], () => ef.A.getChannel(r), [r]),
        d = o?.getGuildId(),
        u = (0, c.bG)([eC.A], () => eC.A.getGuild(d), [d]),
        A = (0, c.cf)([eN.Ay], () => ({
            noiseCancellationSupported: eN.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, Q.A)(eN.Ay.getNoiseCancellation(), eN.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eN.Ay.isNoiseCancellationError(),
            canGoLive: (0, F.A)(eN.Ay),
        })),
        h = (0, c.bG)(
            [eN.Ay, K.A],
            () =>
                K.A.hasHotspot(eV._.VOICE_PANEL_INTRODUCTION) &&
                (0, eP.mv)(a) &&
                !eN.Ay.isInteractionRequired() &&
                !o?.isGuildStageVoice(),
        ),
        _ = (0, c.bG)([ey.A], () => null != r && ey.A.hasVideo(r), [r]),
        m = (0, c.bG)([eE.A], () => eE.A.getCurrentUserActiveStream()),
        g = (0, c.bG)([eT.A], () => eT.A.hasLayers()),
        p = (0, c.bG)([q.A], () => q.A.isViewingRoles(d)),
        I = (0, c.bG)([eS.A], () => p && !eS.A.can(eU.xBc.VIEW_CHANNEL, o), [p, o]),
        f = eo.vL.useSetting(),
        [C, T, N] = (0, c.yK)(
            [eO.Ay, et.A],
            () =>
                o?.isGuildStageVoice()
                    ? [et.A.getMutableParticipants(o.id, en.ip.SPEAKER), et.A.getParticipantsVersion(o.id), null]
                    : [null, null, null != o ? eO.Ay.getVoiceStatesForChannel(o) : null],
            [o],
        ),
        S = l.useMemo(
            () =>
                C?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                N ??
                [],
            [C, T, N],
        ),
        [b, v] = l.useState(!1);
    l.useEffect(() => {
        (p || I) && v(!1);
    }, [p, I, v]);
    let { analyticsLocations: O } = (0, R.Ay)(L.A.RTC_PANEL),
        P = (0, x.A)(d ?? eU.dJq, o?.id),
        D = (0, y.A)(o?.id);
    return (0, i.jsx)(R.f5, {
        value: O,
        children: (0, i.jsxs)("div", {
            className: eF.iE,
            children: [
                null != t || null != n ? (0, i.jsx)(H.A, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, i.jsx)(eX, {
                    ...e,
                    ...A,
                    ...s,
                    enableActivities: P,
                    remoteVoiceState: t,
                    guild: u,
                    channel: o,
                    hasVideo: _,
                    selfStream: m,
                    hasLayers: g,
                    voiceStates: S,
                    showVoiceStates: f,
                    shouldShowVoicePanelIntroduction: h,
                    isPrivateChannelWithEnabledActivities: D,
                    analyticsLocations: O,
                }),
                !b && p && null != d
                    ? (0, i.jsxs)("div", {
                          className: eF.BT,
                          children: [
                              (0, i.jsx)(E.Text, {
                                  variant: "text-sm/normal",
                                  className: eF.u0,
                                  children: I ? eH.intl.string(eH.t.efjuQJ) : eH.intl.string(eH.t.br8H2N),
                              }),
                              (0, i.jsx)(E.Button, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      v(!0);
                                  },
                                  text: eH.intl.string(eH.t.WAI6xu),
                                  focusProps: eY,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
