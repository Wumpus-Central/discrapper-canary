n.d(t, {
    Z: () => eF,
    c: () => eG,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(799899),
    l = n(442837),
    c = n(992774),
    u = n(481060),
    d = n(668781),
    f = n(846027),
    _ = n(893776),
    p = n(117266),
    h = n(254854),
    m = n(195500),
    g = n(287734),
    E = n(205355),
    b = n(558381),
    y = n(223245),
    O = n(491428),
    v = n(401430),
    I = n(726542),
    T = n(100527),
    S = n(906732),
    A = n(812206),
    C = n(391650),
    N = n(600164),
    R = n(266454),
    P = n(749277),
    w = n(196068),
    D = n(132144),
    L = n(131130),
    x = n(458725),
    M = n(492435),
    k = n(353926),
    j = n(506357),
    U = n(36459),
    G = n(236069),
    B = n(305325),
    Z = n(281956),
    F = n(574650),
    V = n(665302),
    H = n(434404),
    Y = n(918658),
    W = n(859428),
    K = n(647085),
    z = n(72897),
    q = n(963249),
    X = n(535278),
    Q = n(246965),
    J = n(272008),
    $ = n(523255),
    ee = n(101879),
    et = n(496729),
    en = n(852923),
    er = n(957030),
    ei = n(313789),
    ea = n(518596),
    eo = n(592125),
    es = n(131951),
    el = n(19780),
    ec = n(914010),
    eu = n(594174),
    ed = n(55563),
    ef = n(695103),
    e_ = n(933429),
    ep = n(626135),
    eh = n(63063),
    em = n(358085),
    eg = n(72924),
    eE = n(69499),
    eb = n(912193),
    ey = n(981631),
    eO = n(474936),
    ev = n(610674),
    eI = n(65154),
    eT = n(388032),
    eS = n(50953);
function eA(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eA(e, t, n[t]);
            });
    }
    return e;
}
function eN(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eR(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eN(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eP = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, x.hp)(n)) ? void 0 : t.errorCode,
            o = eT.intl.formatToPlainString(eT.t["ejOT9/"], { errorCode: a }),
            s = (0, r.jsx)(u.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eS.errorCodeNoticeText,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(u.P3F, {
                  tag: "span",
                  className: eS.errorCodeNoticeClickable,
                  onClick: () => i && open(eh.Z.getArticleURL(ey.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ew = () =>
        (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG();
                    },
                }),
                eT.intl.string(eT.t.o3zuY2),
                (0, r.jsx)(eP, { error: x.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(u.u3T, {
                    href: eh.Z.getArticleURL(ey.BhN.NO_INPUT_DETECTED),
                    children: eT.intl.string(eT.t.RYKKo6),
                }),
            ],
        }),
    eD = "ms-settings:sound-properties",
    eL = (e) => "".concat(eD, "?endpointId=").concat(e),
    ex = (e) => {
        let { deviceGuid: t } = e;
        return (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, eb.b)();
                    },
                }),
                eT.intl.string(eT.t.ppW3rq),
                (0, r.jsx)(eP, { error: x.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: eL(t),
                    children: eT.intl.string(eT.t.pxYBbG),
                }),
            ],
        });
    },
    eM = (e) => {
        let { deviceGuid: t } = e;
        return (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, eb.b)();
                    },
                }),
                eT.intl.string(eT.t.j4gGAw),
                (0, r.jsx)(eP, { error: x.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: eL(t),
                    children: eT.intl.string(eT.t.pxYBbG),
                }),
            ],
        });
    },
    ek = () =>
        (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, eb.b)();
                    },
                }),
                eT.intl.string(eT.t.nCO9bG),
                (0, r.jsx)(eP, { error: x.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: eh.Z.getArticleURL(ey.BhN.NO_INPUT_DETECTED),
                    children: eT.intl.string(eT.t.RYKKo6),
                }),
            ],
        }),
    ej = () =>
        (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, eb.b)();
                    },
                }),
                eT.intl.string(eT.t.dNAJ19),
                (0, r.jsx)(eP, {
                    allowClick: !0,
                    error: x.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(u.EyT, {
                    onClick: () => {
                        (0, ea.openUserSettings)(ei.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE });
                    },
                    children: eT.intl.string(eT.t.I6YlBw),
                }),
            ],
        });
function eU(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), ep.default.track(ey.rMx.APP_NOTICE_VIEWED, n);
}
function eG(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eB(e) {
    return null != e ? e_.m9[e] : null;
}
let eZ = i.memo(function () {
    var e, t;
    let a = (0, l.e7)([eu.default], () => eu.default.getCurrentUser()),
        h = (0, l.e7)([ec.Z], () => ec.Z.getGuildId()),
        T = (0, l.e7)([e_.ZP], () => e_.ZP.getNotice()),
        { analyticsLocations: x } = (0, S.ZP)(),
        ep = null == T ? void 0 : T.type,
        eb = (0, Z.J)(h),
        { windowsMuteAndZeroVolumeDetectionEnabled: eA } = (0, K.U)({ location: "AppNotice" });
    i.useEffect(() => {
        null != ep && eU(ep, h);
    }, [ep, h]),
        i.useEffect(() => {
            if (null != T && T.type === ey.kVF.SURVEY && null != T.metadata) {
                let { metadata: e } = T,
                    t = k.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, M.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = T.metadata) ? void 0 : e.id) != null &&
                            (await (0, O.g8)(null == (t = T.metadata) ? void 0 : t.id));
                    })();
            }
        }, [T]);
    let eN = (0, z.p6)(eI.h7.AUDIO_INPUT),
        [eP, eD] = i.useState(""),
        [eL, eZ] = i.useState(null),
        [eF, eV] = i.useState(null);
    i.useEffect(() => {
        if ((0, em.isWindows)() && eA) {
            let e = (0, c.zS)();
            e.getInputDevices((t) => {
                let n = t.find((e) => e.hardwareId === eN.hardwareId);
                if ((null == n ? void 0 : n.guid) != null) {
                    var r, i, a, o;
                    eD(n.guid),
                        null == (i = e.getDeviceOSMuted) || null == (r = i.call(e, n.guid)) || r.then((e) => eZ(e)),
                        null == (o = e.getDeviceOSVolume) || null == (a = o.call(e, n.guid)) || a.then((e) => eV(e));
                }
            });
        }
    }, [eA, eN.hardwareId]);
    let eH = null != ep ? e_.zD[ep] : null,
        eY = null != ep ? e_.o[ep] : null,
        eW = null != ep ? e_.nA[ep] : null,
        eK = eB(ep);
    if (null == T) return null;
    if (null != eH)
        return (0, r.jsx)(D.W, {
            dismissibleContent: eH,
            noticeType: T.type,
        });
    if (null != eY)
        return (0, r.jsx)(L.q, {
            dismissibleContent: eY,
            noticeType: T.type,
        });
    if (null != eW) return (0, r.jsx)(w.c, { dismissibleContent: eW });
    if (null != eK)
        return (0, r.jsx)(P.A, {
            dismissibleContent: eK,
            noticeType: T.type,
        });
    let ez = null == (e = T.metadata) ? void 0 : e.premiumType;
    switch (T.type) {
        case ey.kVF.LURKING_GUILD:
            return (0, r.jsx)(W.Z, {});
        case ey.kVF.PENDING_MEMBER:
            return (0, r.jsx)(F.Z, {});
        case ey.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(en.Z, {});
        case ey.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eq } = T.metadata;
            return (0, r.jsx)(j.Z, { onDismiss: () => eG(eq) });
        case ey.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eX } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eX),
                        noticeType: ey.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t["08KQ1N"], { helpCenterLink: eh.Z.getArticleURL(ey.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case ey.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eQ),
                        noticeType: ey.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t["8Je+dX"], { helpCenterLink: eh.Z.getArticleURL(ey.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case ey.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eJ } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eJ),
                        noticeType: ey.kVF.MACOS_19_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t.q8VPLi, { helpCenterLink: eh.Z.getArticleURL(ey.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case ey.kVF.GENERIC:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.GENERIC,
                    }),
                    T.message,
                    null != T.buttonText
                        ? (0, r.jsx)(u.NoS, {
                              onClick: T.callback,
                              noticeType: ey.kVF.GENERIC,
                              children: T.buttonText,
                          })
                        : null,
                ],
            });
        case ey.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.LAUNCH_GAME_FAILURE,
                    }),
                    T.message,
                    null != T.buttonText
                        ? (0, r.jsx)(u.NoS, {
                              onClick: T.callback,
                              noticeType: ey.kVF.LAUNCH_GAME_FAILURE,
                              children: T.buttonText,
                          })
                        : null,
                ],
            });
        case ey.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            m.Z.clearRemoteDisconnectVoiceChannelId(), eG();
                        },
                        noticeType: ey.kVF.VOICE_DISABLED,
                    }),
                    eT.intl.string(eT.t.bOQ3jY),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            let e = el.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != eo.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: ey.kVF.VOICE_DISABLED,
                        children: eT.intl.string(eT.t.vD60Pj),
                    }),
                ],
            });
        case ey.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            m.Z.clearLastSessionVoiceChannelId(), eG();
                        },
                        noticeType: ey.kVF.VOICE_CONNECTED_LAST_SESSION,
                    }),
                    eT.intl.string(eT.t.jY2lUF),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            let e = el.Z.getLastSessionVoiceChannelId();
                            null != e && null != eo.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: ey.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: eT.intl.string(eT.t.vD60Pj),
                    }),
                ],
            });
        case ey.kVF.SPOTIFY_AUTO_PAUSED:
            let e$ = I.Z.get(ey.ABu.SPOTIFY);
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.SPOTIFY_AUTO_PAUSED,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eS.platformIcon,
                        src: e$.icon.whiteSVG,
                    }),
                    eT.intl.string(eT.t["D8Cp7+"]),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => (0, ea.openUserSettings)(ei.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE }),
                        noticeType: ey.kVF.SPOTIFY_AUTO_PAUSED,
                        children: eT.intl.string(eT.t.NiTd0d),
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: eS.textLinkSmall,
                        href: eh.Z.getArticleURL(ey.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eT.intl.string(eT.t.CiqAIS),
                    }),
                ],
            });
        case ey.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    eT.intl.string(eT.t["f+Zaoq"]),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (eb && null != h ? (0, B.hk)(h) : C.j()),
                        children: eT.intl.string(eT.t.fiNVio),
                    }),
                ],
            });
        case ey.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    eT.intl.string(eT.t["3sWbf3"]),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.UNVERIFIED_ACCOUNT,
                        onClick: () => {
                            _.Z.verifyResend(),
                                d.Z.show({
                                    title: eT.intl.string(eT.t.LykQYm),
                                    body: eT.intl.format(eT.t.azKEPz, { email: null == a ? void 0 : a.email }),
                                    secondaryConfirmText: eT.intl.string(eT.t.oP5zGB),
                                    onConfirmSecondary: C.j,
                                });
                        },
                        children: eT.intl.string(eT.t.WnX4Jy),
                    }),
                ],
            });
        case ey.kVF.SCHEDULED_MAINTENANCE:
            if (null == T.metadata) return null;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => E.Z.ackScheduledMaintenance(),
                        noticeType: ey.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    eT.intl.format(eT.t.yb96S0, T.metadata),
                    (0, r.jsx)(u.u3T, {
                        href: "".concat(ey.yXt.STATUS, "/incidents/").concat(T.metadata.id),
                        children: eT.intl.string(eT.t.hvVgAQ),
                    }),
                ],
            });
        case ey.kVF.NO_INPUT_DETECTED:
            if ((0, em.isWindows)() && eA) {
                if (!0 === eL) return (0, r.jsx)(ex, { deviceGuid: eP });
                else if (0 === eF) return (0, r.jsx)(eM, { deviceGuid: eP });
            }
            if (!es.Z.supports(eI.AN.LOOPBACK)) return (0, r.jsx)(ek, {});
            return (0, r.jsx)(ej, {});
        case ey.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ew, {});
        case ey.kVF.HARDWARE_MUTE:
            if (null == T.metadata) return null;
            let { vendor: e0, model: e1 } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    eT.intl.format(eT.t.qoDex8, {
                        vendorName: e0.name,
                        modelName: e1.name,
                    }),
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            f.Z.setEnableHardwareMuteNotice(!1), eG();
                        },
                    }),
                    (0, r.jsx)(u.u3T, {
                        href: e1.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: eT.intl.string(eT.t["Yl/Rio"]),
                    }),
                ],
            });
        case ey.kVF.STREAMER_MODE:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.STREAMER_MODE,
                    }),
                    eT.intl.string(eT.t.iEgBXl),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => y.Z.setEnabled(!1),
                        noticeType: ey.kVF.STREAMER_MODE,
                        children: eT.intl.string(eT.t.R9GHyc),
                    }),
                ],
            });
        case ey.kVF.H264_DISABLED:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            eG();
                        },
                    }),
                    eT.intl.string(eT.t.HcErZW),
                    (0, r.jsx)(u.EyT, {
                        onClick: () => {
                            (0, ea.openUserSettings)(ei.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE });
                        },
                        children: eT.intl.string(eT.t["51hI/v"]),
                    }),
                ],
            });
        case ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == T.metadata) return null;
            let { skuId: e2, applicationId: e3 } = T.metadata,
                e4 = ed.Z.get(e2),
                e8 = A.Z.getApplication(e3);
            if (null == e4 || null == e8) return null;
            let e5 = { page: ey.ZY5.IN_APP };
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => p.Z(e4.id),
                        noticeType: ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(u.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eS.premiumIcon,
                    }),
                    eT.intl.format(eT.t["g3MU//"], {
                        applicationName: e8.name,
                        skuName: e4.name,
                    }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, eg.S)({
                                applicationId: e8.id,
                                skuId: e4.id,
                                openPremiumPaymentModal: () => {
                                    (0, q.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eO.Si.TIER_2,
                                        analyticsLocations: x,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: x,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? ey.IlC.OVERLAY : ey.IlC.APP,
                            }).then(() => p.Z(e4.id)),
                        children: eT.intl.string(eT.t.KEwPY2),
                    }),
                ],
            });
        case ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == T.metadata) return null;
            let { skuId: e, applicationId: t } = T.metadata,
                n = ed.Z.get(e),
                i = A.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(u.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eS.premiumIcon,
                    }),
                    eT.intl.format(eT.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(u.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eG(),
                            to: {
                                pathname: ey.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eT.intl.string(eT.t.hvVgAQ),
                        }),
                    }),
                ],
            });
        }
        case ey.kVF.SURVEY: {
            let e = T.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a } = e;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.SURVEY,
                        onClick: () => {
                            (0, O.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.SURVEY,
                        onClick: () => {
                            window.open(a, "_blank"), (0, O.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case ey.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    eT.intl.string(eT.t.ugxmk5),
                    (0, r.jsx)(u.u3T, {
                        href: eh.Z.getArticleURL(ey.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        children: eT.intl.string(eT.t["6ik4Xl"]),
                    }),
                ],
            });
        case ey.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eT.intl.string(eT.t.wVjKGh),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, u.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                    n.bind(n, 431583),
                                );
                                return (t) => (0, r.jsx)(e, eC({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: eT.intl.string(eT.t["1WjMbG"]),
                    }),
                ],
            });
        case ey.kVF.DISPATCH_ERROR:
            if (null == T.metadata) return null;
            let { error: e6 } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.DISPATCH_ERROR,
                    }),
                    null == e6 ? void 0 : e6.displayMessage,
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, u.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, eC({}, t));
                            }),
                        children: eT.intl.string(eT.t.hvVgAQ),
                    }),
                ],
            });
        case ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == T.metadata) return null;
            let { progress: e7, total: e9, name: te } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(N.Z, {
                        justify: N.Z.Justify.CENTER,
                        children: [
                            null != te
                                ? eT.intl.formatToPlainString(eT.t["pHj+z8"], {
                                      name: "".concat(te),
                                      progress: e7,
                                      total: e9,
                                  })
                                : eT.intl.formatToPlainString(eT.t["lHZn+P"], {
                                      progress: e7,
                                      total: e9,
                                  }),
                            (0, r.jsx)(u.$jN, {
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                className: eS.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case ey.kVF.APPLICATION_TEST_MODE:
            if (null == T.metadata) return null;
            if (null != ef.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(u.qXd, {
                    color: u.DM8.WARNING,
                    children: (0, r.jsxs)(N.Z, {
                        justify: N.Z.Justify.CENTER,
                        align: N.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eT.intl.format(eT.t["1qxVe3"], {
                                    applicationName: T.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(u.RyX, {
                                onClick: v.mc,
                                noticeType: ey.kVF.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(u.qXd, {
                color: u.DM8.WARNING,
                children: (0, r.jsxs)(N.Z, {
                    justify: N.Z.Justify.CENTER,
                    align: N.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eT.intl.format(eT.t.Fv5HrK, { applicationName: T.metadata.applicationName }),
                        }),
                        (0, r.jsx)(eE.Z, {
                            dropdownSize: eE.E.DropdownSizes.SMALL,
                            className: eS.testModeSKUSelector,
                            color: eE.E.Colors.WHITE,
                            look: eE.E.Looks.OUTLINED,
                            size: eE.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                b.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: ey.jXE.NOTIFICATION_BAR,
                                        object: ey.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: T.metadata.applicationId,
                            children: eT.intl.string(eT.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(u.RyX, {
                            onClick: v.mc,
                            noticeType: ey.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case ey.kVF.VIEWING_ROLES:
            return (0, r.jsx)(Y.Z, {});
        case ey.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(u.qXd, {
                color:
                    ez === eO.PremiumTypes.TIER_1
                        ? u.DM8.PREMIUM_TIER_1
                        : ez === eO.PremiumTypes.TIER_0
                          ? u.DM8.PREMIUM_TIER_0
                          : u.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(u.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eS.premiumIcon,
                    }),
                    ez === eO.PremiumTypes.TIER_1
                        ? eT.intl.formatToPlainString(eT.t.fXv4ws, { daysLeft: T.metadata.daysLeft })
                        : ez === eO.PremiumTypes.TIER_0
                          ? eT.intl.formatToPlainString(eT.t.ZOHZMj, { daysLeft: T.metadata.daysLeft })
                          : eT.intl.formatToPlainString(eT.t.outyHh, { daysLeft: T.metadata.daysLeft }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, u.ZDy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("17938"),
                                        n.e("84992"),
                                        n.e("11394"),
                                    ]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eR(eC({}, t), {
                                                daysLeft: T.metadata.daysLeft,
                                                premiumType: ez,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: T.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            ez === eO.PremiumTypes.TIER_1
                                ? eT.intl.string(eT.t.BkbUPD)
                                : ez === eO.PremiumTypes.TIER_0
                                  ? eT.intl.string(eT.t.Px978f)
                                  : eT.intl.string(eT.t.LW5tCA),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tt, dismissUntil: tn } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ep,
                        onClick: () => {
                            eG(tn);
                        },
                    }),
                    eT.intl.format(eT.t.zxU0Ki, { daysPastDue: tt }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eG(tn),
                                (0, ea.openUserSettings)(ei.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t.q8rxeX),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eT.intl.string(eT.t.LlZaoa),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ea.openUserSettings)(ei.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t["Zpd+Ym"]),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eT.intl.string(eT.t["30YfCg"]),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ea.openUserSettings)(ei.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t.U5pKWF),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ez === eO.PremiumTypes.TIER_1
                        ? eT.intl.formatToPlainString(eT.t.b6QUvb, { daysLeft: T.metadata.daysLeft })
                        : ez === eO.PremiumTypes.TIER_0
                          ? eT.intl.formatToPlainString(eT.t["tURZ/P"], { daysLeft: T.metadata.daysLeft })
                          : eT.intl.formatToPlainString(eT.t.AyC74O, { daysLeft: T.metadata.daysLeft }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = T.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ea.openUserSettings)(ei.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            ez === eO.PremiumTypes.TIER_1
                                ? eT.intl.string(eT.t.lboF5O)
                                : ez === eO.PremiumTypes.TIER_0
                                  ? eT.intl.string(eT.t["4UPwOj"])
                                  : eT.intl.string(eT.t["P/VvGR"]),
                    }),
                ],
            });
        case ey.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(V.h, {
                buttonText: null != (t = T.buttonText) ? t : eT.intl.string(eT.t["/g10LC"]),
                onGoBack: T.callback,
                onDismiss: () => eG(),
                showCloseButton: !0,
            });
        case ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(G.Z, {
                guildId: h,
                analyticsLocations: x,
            });
        case ey.kVF.QUARANTINED:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    eT.intl.string(eT.t.DVFJYW),
                    (0, r.jsx)(u.u3T, {
                        href: ev.Z,
                        target: "_blank",
                        children: eT.intl.string(eT.t.kvHdFB),
                    }),
                    (0, r.jsx)(u.Anchor, {
                        href: eh.Z.getArticleURL(ey.BhN.QUARANTINE),
                        target: "_blank",
                        className: eS.quarantineLearnMoreLink,
                        children: eT.intl.string(eT.t.hvVgAQ),
                    }),
                ],
            });
        case ey.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    eT.intl.string(eT.t.Ugijzs),
                    (0, r.jsx)(u.u3T, {
                        href: "".concat(ey.yXt.STATUS),
                        children: eT.intl.string(eT.t.hvVgAQ),
                    }),
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tr, decisionId: ti } = T.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != h && (0, U.T9)(h), eG(tr);
                        },
                    }),
                    eT.intl.string(eT.t.B8ruyc),
                    (0, r.jsx)(u.EyT, {
                        onClick: () => {
                            null != h &&
                                (0, U.UE)(h, ti, () => {
                                    eG(tr), (0, U.T9)(h);
                                });
                        },
                        children: eT.intl.string(eT.t.oX14Eh),
                    }),
                    null != h
                        ? (0, r.jsx)(u.EyT, {
                              onClick: () => H.Z.open(h, ey.pNK.GUILD_AUTOMOD, void 0, ey.KsC.AUTOMOD_MENTION_SPAM),
                              children: eT.intl.string(eT.t["1R7QIy"]),
                          })
                        : null,
                ],
            });
        case ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.BRAND,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            $.hZ(), eG();
                        },
                    }),
                    eT.intl.string(eT.t.I1nKfH),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, u.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, eC({}, t));
                            }),
                                $.hZ(),
                                eG();
                        },
                        children: eT.intl.string(eT.t.l5xYnJ),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let ta = o()().add(5, "days").toDate();
            return (0, r.jsx)(Q.Z, {
                dismissCurrentNotice: () => {
                    (0, R.Q3)(e_.m9[ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eG(ta);
                },
                subscriptionTier: eO.Si.TIER_2,
            });
        case ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let to = o()().add(5, "days").toDate();
            return (0, r.jsx)(X.Z, {
                dismissCurrentNotice: () => {
                    eG(to);
                },
                subscriptionTier: eO.Si.TIER_2,
            });
        case ey.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = T.metadata) ? void 0 : e.streamKey) != null &&
                                (0, J.nE)(T.metadata.streamKey);
                        },
                    }),
                    eT.intl.string(eT.t.rOx44u),
                ],
            });
        case ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.BRAND,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            var e;
                            eG(null == (e = T.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eT.intl.string(eT.t["0klLS0"]),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            var e;
                            (0, et.ZZ)(), eG(null == (e = T.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eT.intl.string(eT.t.e4y2VF),
                    }),
                ],
            });
        case ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(ee.Z, {});
        case ey.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(er.Z, {});
        default:
            return null;
    }
});
function eF() {
    let { analyticsLocations: e } = (0, S.ZP)(T.Z.NOTICE);
    return (0, r.jsx)(S.Gt, {
        value: e,
        children: (0, r.jsx)(eZ, {}),
    });
}
