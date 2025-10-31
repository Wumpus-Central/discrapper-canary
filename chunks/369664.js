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
    I = n(72924),
    T = n(69499),
    S = n(726542),
    A = n(100527),
    C = n(906732),
    N = n(812206),
    R = n(391650),
    P = n(600164),
    w = n(266454),
    D = n(749277),
    x = n(196068),
    L = n(132144),
    M = n(131130),
    k = n(458725),
    j = n(492435),
    U = n(353926),
    G = n(506357),
    B = n(36459),
    Z = n(236069),
    F = n(305325),
    V = n(281956),
    H = n(574650),
    Y = n(665302),
    W = n(434404),
    K = n(918658),
    z = n(859428),
    q = n(647085),
    X = n(72897),
    Q = n(963249),
    J = n(535278),
    $ = n(246965),
    ee = n(22095),
    et = n(523255),
    en = n(101879),
    er = n(496729),
    ei = n(852923),
    ea = n(957030),
    eo = n(313789),
    es = n(518596),
    el = n(475808),
    ec = n(592125),
    eu = n(131951),
    ed = n(19780),
    ef = n(914010),
    e_ = n(594174),
    ep = n(55563),
    eh = n(695103),
    em = n(933429),
    eg = n(626135),
    eE = n(63063),
    eb = n(358085),
    ey = n(981631),
    eO = n(474936),
    ev = n(610674),
    eI = n(65154),
    eT = n(388032),
    eS = n(627881);
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
            a = null == (t = (0, k.hp)(n)) ? void 0 : t.errorCode,
            o = eT.intl.formatToPlainString(eT.t.ejOT95, { errorCode: a }),
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
                  onClick: () => i && open(eE.Z.getArticleURL(ey.BhN.AV_ERROR_CODES)),
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
                eT.intl.string(eT.t.o3zuYz),
                (0, r.jsx)(eP, { error: k.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(u.u3T, {
                    href: eE.Z.getArticleURL(ey.BhN.NO_INPUT_DETECTED),
                    children: eT.intl.string(eT.t.RYKKox),
                }),
            ],
        }),
    eD = "ms-settings:sound-properties",
    ex = (e) => "".concat(eD, "?endpointId=").concat(e),
    eL = (e) => {
        let { deviceGuid: t } = e;
        return (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, el.b)();
                    },
                }),
                eT.intl.string(eT.t.ppW3ri),
                (0, r.jsx)(eP, { error: k.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: ex(t),
                    children: eT.intl.string(eT.t.pxYBbM),
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
                        eG(), (0, el.b)();
                    },
                }),
                eT.intl.string(eT.t.j4gGA4),
                (0, r.jsx)(eP, { error: k.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: ex(t),
                    children: eT.intl.string(eT.t.pxYBbM),
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
                        eG(), (0, el.b)();
                    },
                }),
                eT.intl.string(eT.t.nCO9bI),
                (0, r.jsx)(eP, { error: k.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(u.u3T, {
                    href: eE.Z.getArticleURL(ey.BhN.NO_INPUT_DETECTED),
                    children: eT.intl.string(eT.t.RYKKox),
                }),
            ],
        }),
    ej = () =>
        (0, r.jsxs)(u.qXd, {
            color: u.DM8.DANGER,
            children: [
                (0, r.jsx)(u.RyX, {
                    onClick: () => {
                        eG(), (0, el.b)();
                    },
                }),
                eT.intl.string(eT.t.dNAJ18),
                (0, r.jsx)(eP, {
                    allowClick: !0,
                    error: k.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(u.EyT, {
                    onClick: () => {
                        (0, es.openUserSettings)(eo.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE });
                    },
                    children: eT.intl.string(eT.t.I6YlB4),
                }),
            ],
        });
function eU(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), eg.default.track(ey.rMx.APP_NOTICE_VIEWED, n);
}
function eG(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eB(e) {
    return null != e ? em.m9[e] : null;
}
let eZ = i.memo(function () {
    var e, t;
    let a = (0, l.e7)([e_.default], () => e_.default.getCurrentUser()),
        h = (0, l.e7)([ef.Z], () => ef.Z.getGuildId()),
        A = (0, l.e7)([em.ZP], () => em.ZP.getNotice()),
        { analyticsLocations: k } = (0, C.ZP)(),
        el = null == A ? void 0 : A.type,
        eg = (0, V.J)(h),
        { windowsMuteAndZeroVolumeDetectionEnabled: eA } = (0, q.U)({ location: "AppNotice" });
    i.useEffect(() => {
        null != el && eU(el, h);
    }, [el, h]),
        i.useEffect(() => {
            if (null != A && A.type === ey.kVF.SURVEY && null != A.metadata) {
                let { metadata: e } = A,
                    t = U.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, j.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = A.metadata) ? void 0 : e.id) != null &&
                            (await (0, O.g8)(null == (t = A.metadata) ? void 0 : t.id));
                    })();
            }
        }, [A]);
    let eN = (0, X.p6)(eI.h7.AUDIO_INPUT),
        [eP, eD] = i.useState(""),
        [ex, eZ] = i.useState(null),
        [eF, eV] = i.useState(null);
    i.useEffect(() => {
        if ((0, eb.isWindows)() && eA) {
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
    let eH = null != el ? em.zD[el] : null,
        eY = null != el ? em.o[el] : null,
        eW = null != el ? em.nA[el] : null,
        eK = eB(el);
    if (null == A) return null;
    if (null != eH)
        return (0, r.jsx)(L.W, {
            dismissibleContent: eH,
            noticeType: A.type,
        });
    if (null != eY)
        return (0, r.jsx)(M.q, {
            dismissibleContent: eY,
            noticeType: A.type,
        });
    if (null != eW) return (0, r.jsx)(x.c, { dismissibleContent: eW });
    if (null != eK)
        return (0, r.jsx)(D.A, {
            dismissibleContent: eK,
            noticeType: A.type,
        });
    let ez = null == (e = A.metadata) ? void 0 : e.premiumType;
    switch (A.type) {
        case ey.kVF.LURKING_GUILD:
            return (0, r.jsx)(z.Z, {});
        case ey.kVF.PENDING_MEMBER:
            return (0, r.jsx)(H.Z, {});
        case ey.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(ei.Z, {});
        case ey.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eq } = A.metadata;
            return (0, r.jsx)(G.Z, { onDismiss: () => eG(eq) });
        case ey.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eX } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eX),
                        noticeType: ey.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t["08KQ1P"], { helpCenterLink: eE.Z.getArticleURL(ey.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case ey.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eQ),
                        noticeType: ey.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t["8Je+dX"], { helpCenterLink: eE.Z.getArticleURL(ey.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case ey.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eJ } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(eJ),
                        noticeType: ey.kVF.MACOS_19_DEPRECATED_MESSAGE,
                    }),
                    eT.intl.format(eT.t.q8VPLo, { helpCenterLink: eE.Z.getArticleURL(ey.BhN.MACOS_19_DEPRECATE) }),
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
                    A.message,
                    null != A.buttonText
                        ? (0, r.jsx)(u.NoS, {
                              onClick: A.callback,
                              noticeType: ey.kVF.GENERIC,
                              children: A.buttonText,
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
                    A.message,
                    null != A.buttonText
                        ? (0, r.jsx)(u.NoS, {
                              onClick: A.callback,
                              noticeType: ey.kVF.LAUNCH_GAME_FAILURE,
                              children: A.buttonText,
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
                    eT.intl.string(eT.t.bOQ3jV),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            let e = ed.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ec.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: ey.kVF.VOICE_DISABLED,
                        children: eT.intl.string(eT.t.vD60Pv),
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
                    eT.intl.string(eT.t.jY2lUA),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            let e = ed.Z.getLastSessionVoiceChannelId();
                            null != e && null != ec.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: ey.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: eT.intl.string(eT.t.vD60Pv),
                    }),
                ],
            });
        case ey.kVF.SPOTIFY_AUTO_PAUSED:
            let e$ = S.Z.get(ey.ABu.SPOTIFY);
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
                    eT.intl.string(eT.t.D8Cp76),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => (0, es.openUserSettings)(eo.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE }),
                        noticeType: ey.kVF.SPOTIFY_AUTO_PAUSED,
                        children: eT.intl.string(eT.t.NiTd0e),
                    }),
                    (0, r.jsx)(u.Anchor, {
                        className: eS.textLinkSmall,
                        href: eE.Z.getArticleURL(ey.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eT.intl.string(eT.t.CiqAIU),
                    }),
                ],
            });
        case ey.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    eT.intl.string(eT.t["f+Zaol"]),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (eg && null != h ? (0, F.hk)(h) : R.j()),
                        children: eT.intl.string(eT.t.fiNVin),
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
                                    title: eT.intl.string(eT.t.LykQYk),
                                    body: eT.intl.format(eT.t.azKEPy, { email: null == a ? void 0 : a.email }),
                                    secondaryConfirmText: eT.intl.string(eT.t.oP5zGA),
                                    onConfirmSecondary: R.j,
                                });
                        },
                        children: eT.intl.string(eT.t.WnX4J2),
                    }),
                ],
            });
        case ey.kVF.SCHEDULED_MAINTENANCE:
            if (null == A.metadata) return null;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => E.Z.ackScheduledMaintenance(),
                        noticeType: ey.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    eT.intl.format(eT.t["yb96S+"], A.metadata),
                    (0, r.jsx)(u.u3T, {
                        href: "".concat(ey.yXt.STATUS, "/incidents/").concat(A.metadata.id),
                        children: eT.intl.string(eT.t.hvVgAZ),
                    }),
                ],
            });
        case ey.kVF.NO_INPUT_DETECTED:
            if ((0, eb.isWindows)() && eA) {
                if (!0 === ex) return (0, r.jsx)(eL, { deviceGuid: eP });
                else if (0 === eF) return (0, r.jsx)(eM, { deviceGuid: eP });
            }
            if (!eu.Z.supports(eI.AN.LOOPBACK)) return (0, r.jsx)(ek, {});
            return (0, r.jsx)(ej, {});
        case ey.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ew, {});
        case ey.kVF.HARDWARE_MUTE:
            if (null == A.metadata) return null;
            let { vendor: e0, model: e1 } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    eT.intl.format(eT.t.qoDex7, {
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
                        children: eT.intl.string(eT.t["Yl/Riu"]),
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
                    eT.intl.string(eT.t.iEgBXp),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => y.Z.setEnabled(!1),
                        noticeType: ey.kVF.STREAMER_MODE,
                        children: eT.intl.string(eT.t.R9GHya),
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
                    eT.intl.string(eT.t.HcErZT),
                    (0, r.jsx)(u.EyT, {
                        onClick: () => {
                            (0, es.openUserSettings)(eo.n.VOICE_AND_VIDEO_PANEL, { section: ey.oAB.VOICE });
                        },
                        children: eT.intl.string(eT.t["51hI/g"]),
                    }),
                ],
            });
        case ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == A.metadata) return null;
            let { skuId: e2, applicationId: e3 } = A.metadata,
                e4 = ep.Z.get(e2),
                e8 = N.Z.getApplication(e3);
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
                    eT.intl.format(eT.t["g3MU/+"], {
                        applicationName: e8.name,
                        skuName: e4.name,
                    }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, I.S)({
                                applicationId: e8.id,
                                skuId: e4.id,
                                openPremiumPaymentModal: () => {
                                    (0, Q.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eO.Si.TIER_2,
                                        analyticsLocations: k,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: k,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? ey.IlC.OVERLAY : ey.IlC.APP,
                            }).then(() => p.Z(e4.id)),
                        children: eT.intl.string(eT.t.KEwPYx),
                    }),
                ],
            });
        case ey.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == A.metadata) return null;
            let { skuId: e, applicationId: t } = A.metadata,
                n = ep.Z.get(e),
                i = N.Z.getApplication(t);
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
                            children: eT.intl.string(eT.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case ey.kVF.SURVEY: {
            let e = A.metadata;
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
                    eT.intl.string(eT.t["ugxmk/"]),
                    (0, r.jsx)(u.u3T, {
                        href: eE.Z.getArticleURL(ey.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        children: eT.intl.string(eT.t["6ik4Xk"]),
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
                    eT.intl.string(eT.t.wVjKGi),
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
                        children: eT.intl.string(eT.t["1WjMbC"]),
                    }),
                ],
            });
        case ey.kVF.DISPATCH_ERROR:
            if (null == A.metadata) return null;
            let { error: e6 } = A.metadata;
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
                        children: eT.intl.string(eT.t.hvVgAZ),
                    }),
                ],
            });
        case ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == A.metadata) return null;
            let { progress: e7, total: e9, name: te } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(P.Z, {
                        justify: P.Z.Justify.CENTER,
                        children: [
                            null != te
                                ? eT.intl.formatToPlainString(eT.t["pHj+z4"], {
                                      name: "".concat(te),
                                      progress: e7,
                                      total: e9,
                                  })
                                : eT.intl.formatToPlainString(eT.t["lHZn+A"], {
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
            if (null == A.metadata) return null;
            if (null != eh.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(u.qXd, {
                    color: u.DM8.WARNING,
                    children: (0, r.jsxs)(P.Z, {
                        justify: P.Z.Justify.CENTER,
                        align: P.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eT.intl.format(eT.t["1qxVe4"], {
                                    applicationName: A.metadata.applicationName,
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
                children: (0, r.jsxs)(P.Z, {
                    justify: P.Z.Justify.CENTER,
                    align: P.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eT.intl.format(eT.t.Fv5HrE, { applicationName: A.metadata.applicationName }),
                        }),
                        (0, r.jsx)(T.Z, {
                            dropdownSize: T.E.DropdownSizes.SMALL,
                            className: eS.testModeSKUSelector,
                            color: T.E.Colors.WHITE,
                            look: T.E.Looks.OUTLINED,
                            size: T.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                b.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: ey.jXE.NOTIFICATION_BAR,
                                        object: ey.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: A.metadata.applicationId,
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
            return (0, r.jsx)(K.Z, {});
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
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
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
                        ? eT.intl.formatToPlainString(eT.t.fXv4wm, { daysLeft: A.metadata.daysLeft })
                        : ez === eO.PremiumTypes.TIER_0
                          ? eT.intl.formatToPlainString(eT.t.ZOHZMr, { daysLeft: A.metadata.daysLeft })
                          : eT.intl.formatToPlainString(eT.t.outyHh, { daysLeft: A.metadata.daysLeft }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, u.ZDy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("17938"),
                                        n.e("84992"),
                                        n.e("12222"),
                                    ]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eR(eC({}, t), {
                                                daysLeft: A.metadata.daysLeft,
                                                premiumType: ez,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: A.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            ez === eO.PremiumTypes.TIER_1
                                ? eT.intl.string(eT.t.BkbUPM)
                                : ez === eO.PremiumTypes.TIER_0
                                  ? eT.intl.string(eT.t.Px978X)
                                  : eT.intl.string(eT.t.LW5tCE),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tt, dismissUntil: tn } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: el,
                        onClick: () => {
                            eG(tn);
                        },
                    }),
                    eT.intl.format(eT.t.zxU0Kp, { daysPastDue: tt }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eG(tn),
                                (0, es.openUserSettings)(eo.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t.q8rxeS),
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
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eT.intl.string(eT.t.LlZaoX),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, es.openUserSettings)(eo.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t["Zpd+Yq"]),
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
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eT.intl.string(eT.t["30YfCr"]),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, es.openUserSettings)(eo.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children: eT.intl.string(eT.t.U5pKWA),
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
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ez === eO.PremiumTypes.TIER_1
                        ? eT.intl.formatToPlainString(eT.t.b6QUvf, { daysLeft: A.metadata.daysLeft })
                        : ez === eO.PremiumTypes.TIER_0
                          ? eT.intl.formatToPlainString(eT.t["tURZ/M"], { daysLeft: A.metadata.daysLeft })
                          : eT.intl.formatToPlainString(eT.t.AyC74I, { daysLeft: A.metadata.daysLeft }),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eG(
                                null == (t = A.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, es.openUserSettings)(eo.n.SUBSCRIPTIONS_PANEL, { section: ey.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            ez === eO.PremiumTypes.TIER_1
                                ? eT.intl.string(eT.t.lboF5O)
                                : ez === eO.PremiumTypes.TIER_0
                                  ? eT.intl.string(eT.t["4UPwOq"])
                                  : eT.intl.string(eT.t["P/VvGb"]),
                    }),
                ],
            });
        case ey.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(Y.h, {
                buttonText: null != (t = A.buttonText) ? t : eT.intl.string(eT.t["/g10LC"]),
                onGoBack: A.callback,
                onDismiss: () => eG(),
                showCloseButton: !0,
            });
        case ey.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(Z.Z, {
                guildId: h,
                analyticsLocations: k,
            });
        case ey.kVF.QUARANTINED:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.DANGER,
                children: [
                    eT.intl.string(eT.t.DVFJYf),
                    (0, r.jsx)(u.u3T, {
                        href: ev.Z,
                        target: "_blank",
                        children: eT.intl.string(eT.t.kvHdFN),
                    }),
                    (0, r.jsx)(u.Anchor, {
                        href: eE.Z.getArticleURL(ey.BhN.QUARANTINE),
                        target: "_blank",
                        className: eS.quarantineLearnMoreLink,
                        children: eT.intl.string(eT.t.hvVgAZ),
                    }),
                ],
            });
        case ey.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    eT.intl.string(eT.t.Ugijzi),
                    (0, r.jsx)(u.u3T, {
                        href: "".concat(ey.yXt.STATUS),
                        children: eT.intl.string(eT.t.hvVgAZ),
                    }),
                    (0, r.jsx)(u.RyX, {
                        onClick: () => eG(),
                        noticeType: ey.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tr, decisionId: ti } = A.metadata;
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.WARNING,
                children: [
                    (0, r.jsx)(u.RyX, {
                        noticeType: ey.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != h && (0, B.T9)(h), eG(tr);
                        },
                    }),
                    eT.intl.string(eT.t.B8ruyY),
                    (0, r.jsx)(u.EyT, {
                        onClick: () => {
                            null != h &&
                                (0, B.UE)(h, ti, () => {
                                    eG(tr), (0, B.T9)(h);
                                });
                        },
                        children: eT.intl.string(eT.t.oX14El),
                    }),
                    null != h
                        ? (0, r.jsx)(u.EyT, {
                              onClick: () => W.Z.open(h, ey.pNK.GUILD_AUTOMOD, void 0, ey.KsC.AUTOMOD_MENTION_SPAM),
                              children: eT.intl.string(eT.t["1R7QIx"]),
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
                            et.hZ(), eG();
                        },
                    }),
                    eT.intl.string(eT.t.I1nKfO),
                    (0, r.jsx)(u.NoS, {
                        noticeType: ey.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, u.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, eC({}, t));
                            }),
                                et.hZ(),
                                eG();
                        },
                        children: eT.intl.string(eT.t.l5xYnH),
                    }),
                ],
            });
        case ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let ta = o()().add(5, "days").toDate();
            return (0, r.jsx)($.Z, {
                dismissCurrentNotice: () => {
                    (0, w.Q3)(em.m9[ey.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eG(ta);
                },
                subscriptionTier: eO.Si.TIER_2,
            });
        case ey.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let to = o()().add(5, "days").toDate();
            return (0, r.jsx)(J.Z, {
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
                            (null == (e = A.metadata) ? void 0 : e.streamKey) != null &&
                                (0, ee.nE)(A.metadata.streamKey);
                        },
                    }),
                    eT.intl.string(eT.t.rOx44m),
                ],
            });
        case ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(u.qXd, {
                color: u.DM8.BRAND,
                children: [
                    (0, r.jsx)(u.RyX, {
                        onClick: () => {
                            var e;
                            eG(null == (e = A.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eT.intl.string(eT.t["0klLS7"]),
                    (0, r.jsx)(u.NoS, {
                        onClick: () => {
                            var e;
                            (0, er.ZZ)(), eG(null == (e = A.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: ey.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eT.intl.string(eT.t.e4y2VM),
                    }),
                ],
            });
        case ey.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(en.Z, {});
        case ey.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ea.Z, {});
        default:
            return null;
    }
});
function eF() {
    let { analyticsLocations: e } = (0, C.ZP)(A.Z.NOTICE);
    return (0, r.jsx)(C.Gt, {
        value: e,
        children: (0, r.jsx)(eZ, {}),
    });
}
