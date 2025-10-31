n.d(t, {
    Z: () => eW,
    c: () => eV,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(799899),
    l = n(209739),
    c = n.n(l),
    u = n(442837),
    d = n(992774),
    f = n(481060),
    _ = n(668781),
    p = n(846027),
    h = n(893776),
    m = n(117266),
    g = n(254854),
    E = n(195500),
    b = n(287734),
    y = n(205355),
    O = n(558381),
    v = n(223245),
    I = n(491428),
    T = n(401430),
    S = n(72924),
    A = n(69499),
    C = n(579806),
    N = n(726542),
    R = n(100527),
    P = n(906732),
    w = n(812206),
    D = n(391650),
    x = n(600164),
    L = n(266454),
    M = n(749277),
    k = n(196068),
    j = n(132144),
    U = n(131130),
    G = n(458725),
    B = n(492435),
    Z = n(353926),
    F = n(506357),
    V = n(36459),
    H = n(236069),
    Y = n(305325),
    W = n(281956),
    K = n(574650),
    z = n(665302),
    q = n(434404),
    X = n(918658),
    Q = n(859428),
    J = n(647085),
    $ = n(72897),
    ee = n(963249),
    et = n(535278),
    en = n(246965),
    er = n(22095),
    ei = n(523255),
    ea = n(101879),
    eo = n(496729),
    es = n(852923),
    el = n(957030),
    ec = n(313789),
    eu = n(518596),
    ed = n(475808),
    ef = n(592125),
    e_ = n(131951),
    ep = n(19780),
    eh = n(914010),
    em = n(594174),
    eg = n(55563),
    eE = n(695103),
    eb = n(933429),
    ey = n(626135),
    eO = n(63063),
    ev = n(358085),
    eI = n(981631),
    eT = n(70722),
    eS = n(474936),
    eA = n(610674),
    eC = n(65154),
    eN = n(388032),
    eR = n(627881);
function eP(e, t, n) {
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
function ew(e) {
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
                eP(e, t, n[t]);
            });
    }
    return e;
}
function eD(e, t) {
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
function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.hp)(n)) ? void 0 : t.errorCode,
            o = eN.intl.formatToPlainString(eN.t.ejOT95, { errorCode: a }),
            s = (0, r.jsx)(f.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eR.errorCodeNoticeText,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(f.P3F, {
                  tag: "span",
                  className: eR.errorCodeNoticeClickable,
                  onClick: () => i && open(eO.Z.getArticleURL(eI.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eM = () =>
        (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    onClick: () => {
                        eV();
                    },
                }),
                eN.intl.string(eN.t.o3zuYz),
                (0, r.jsx)(eL, { error: G.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(f.u3T, {
                    href: eO.Z.getArticleURL(eI.BhN.NO_INPUT_DETECTED),
                    children: eN.intl.string(eN.t.RYKKox),
                }),
            ],
        }),
    ek = "ms-settings:sound-properties";
function ej(e) {
    return (0, ev.isWindows)() && c().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eT.lb)
        ? "".concat(ek, "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eU = (e) => {
        let { deviceGuid: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    onClick: () => {
                        eV(), (0, ed.b)();
                    },
                }),
                eN.intl.string(eN.t.ppW3ri),
                (0, r.jsx)(eL, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: ej(t),
                    children: eN.intl.string(eN.t.pxYBbM),
                }),
            ],
        });
    },
    eG = (e) => {
        let { deviceGuid: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    onClick: () => {
                        eV(), (0, ed.b)();
                    },
                }),
                eN.intl.string(eN.t.j4gGA4),
                (0, r.jsx)(eL, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: ej(t),
                    children: eN.intl.string(eN.t.pxYBbM),
                }),
            ],
        });
    },
    eB = () =>
        (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    onClick: () => {
                        eV(), (0, ed.b)();
                    },
                }),
                eN.intl.string(eN.t.nCO9bI),
                (0, r.jsx)(eL, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eO.Z.getArticleURL(eI.BhN.NO_INPUT_DETECTED),
                    children: eN.intl.string(eN.t.RYKKox),
                }),
            ],
        }),
    eZ = () =>
        (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    onClick: () => {
                        eV(), (0, ed.b)();
                    },
                }),
                eN.intl.string(eN.t.dNAJ18),
                (0, r.jsx)(eL, {
                    allowClick: !0,
                    error: G.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.EyT, {
                    onClick: () => {
                        (0, eu.openUserSettings)(ec.n.VOICE_AND_VIDEO_PANEL, { section: eI.oAB.VOICE });
                    },
                    children: eN.intl.string(eN.t.I6YlB4),
                }),
            ],
        });
function eF(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), ey.default.track(eI.rMx.APP_NOTICE_VIEWED, n);
}
function eV(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eH(e) {
    return null != e ? eb.m9[e] : null;
}
let eY = i.memo(function () {
    var e, t;
    let a = (0, u.e7)([em.default], () => em.default.getCurrentUser()),
        l = (0, u.e7)([eh.Z], () => eh.Z.getGuildId()),
        c = (0, u.e7)([eb.ZP], () => eb.ZP.getNotice()),
        { analyticsLocations: g } = (0, P.ZP)(),
        C = null == c ? void 0 : c.type,
        R = (0, W.J)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: G } = (0, J.U)({ location: "AppNotice" });
    i.useEffect(() => {
        null != C && eF(C, l);
    }, [C, l]),
        i.useEffect(() => {
            if (null != c && c.type === eI.kVF.SURVEY && null != c.metadata) {
                let { metadata: e } = c,
                    t = Z.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, B.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = c.metadata) ? void 0 : e.id) != null &&
                            (await (0, I.g8)(null == (t = c.metadata) ? void 0 : t.id));
                    })();
            }
        }, [c]);
    let ed = (0, $.p6)(eC.h7.AUDIO_INPUT),
        [ey, eT] = i.useState(""),
        [eP, eD] = i.useState(null),
        [eL, ek] = i.useState(null);
    i.useEffect(() => {
        if ((0, ev.isWindows)() && G) {
            let e = (0, d.zS)();
            e.getInputDevices((t) => {
                let n = t.find((e) => e.hardwareId === ed.hardwareId);
                if ((null == n ? void 0 : n.guid) != null) {
                    var r, i, a, o;
                    eT(n.guid),
                        null == (i = e.getDeviceOSMuted) || null == (r = i.call(e, n.guid)) || r.then((e) => eD(e)),
                        null == (o = e.getDeviceOSVolume) || null == (a = o.call(e, n.guid)) || a.then((e) => ek(e));
                }
            });
        }
    }, [G, ed.hardwareId]);
    let ej = null != C ? eb.zD[C] : null,
        eY = null != C ? eb.o[C] : null,
        eW = null != C ? eb.nA[C] : null,
        eK = eH(C);
    if (null == c) return null;
    if (null != ej)
        return (0, r.jsx)(j.W, {
            dismissibleContent: ej,
            noticeType: c.type,
        });
    if (null != eY)
        return (0, r.jsx)(U.q, {
            dismissibleContent: eY,
            noticeType: c.type,
        });
    if (null != eW) return (0, r.jsx)(k.c, { dismissibleContent: eW });
    if (null != eK)
        return (0, r.jsx)(M.A, {
            dismissibleContent: eK,
            noticeType: c.type,
        });
    let ez = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eI.kVF.LURKING_GUILD:
            return (0, r.jsx)(Q.Z, {});
        case eI.kVF.PENDING_MEMBER:
            return (0, r.jsx)(K.Z, {});
        case eI.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(es.Z, {});
        case eI.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eq } = c.metadata;
            return (0, r.jsx)(F.Z, { onDismiss: () => eV(eq) });
        case eI.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eX } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(eX),
                        noticeType: eI.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    eN.intl.format(eN.t["08KQ1P"], { helpCenterLink: eO.Z.getArticleURL(eI.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case eI.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(eQ),
                        noticeType: eI.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    eN.intl.format(eN.t["8Je+dX"], { helpCenterLink: eO.Z.getArticleURL(eI.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case eI.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eJ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(eJ),
                        noticeType: eI.kVF.MACOS_19_DEPRECATED_MESSAGE,
                    }),
                    eN.intl.format(eN.t.q8VPLo, { helpCenterLink: eO.Z.getArticleURL(eI.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case eI.kVF.GENERIC:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.GENERIC,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.NoS, {
                              onClick: c.callback,
                              noticeType: eI.kVF.GENERIC,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eI.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.LAUNCH_GAME_FAILURE,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.NoS, {
                              onClick: c.callback,
                              noticeType: eI.kVF.LAUNCH_GAME_FAILURE,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eI.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearRemoteDisconnectVoiceChannelId(), eV();
                        },
                        noticeType: eI.kVF.VOICE_DISABLED,
                    }),
                    eN.intl.string(eN.t.bOQ3jV),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = ep.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ef.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: eI.kVF.VOICE_DISABLED,
                        children: eN.intl.string(eN.t.vD60Pv),
                    }),
                ],
            });
        case eI.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearLastSessionVoiceChannelId(), eV();
                        },
                        noticeType: eI.kVF.VOICE_CONNECTED_LAST_SESSION,
                    }),
                    eN.intl.string(eN.t.jY2lUA),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = ep.Z.getLastSessionVoiceChannelId();
                            null != e && null != ef.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: eI.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: eN.intl.string(eN.t.vD60Pv),
                    }),
                ],
            });
        case eI.kVF.SPOTIFY_AUTO_PAUSED:
            let e$ = N.Z.get(eI.ABu.SPOTIFY);
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.SPOTIFY_AUTO_PAUSED,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eR.platformIcon,
                        src: e$.icon.whiteSVG,
                    }),
                    eN.intl.string(eN.t.D8Cp76),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => (0, eu.openUserSettings)(ec.n.VOICE_AND_VIDEO_PANEL, { section: eI.oAB.VOICE }),
                        noticeType: eI.kVF.SPOTIFY_AUTO_PAUSED,
                        children: eN.intl.string(eN.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: eR.textLinkSmall,
                        href: eO.Z.getArticleURL(eI.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eN.intl.string(eN.t.CiqAIU),
                    }),
                ],
            });
        case eI.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eN.intl.string(eN.t["f+Zaol"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (R && null != l ? (0, Y.hk)(l) : D.j()),
                        children: eN.intl.string(eN.t.fiNVin),
                    }),
                ],
            });
        case eI.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eN.intl.string(eN.t["3sWbf3"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.UNVERIFIED_ACCOUNT,
                        onClick: () => {
                            h.Z.verifyResend(),
                                _.Z.show({
                                    title: eN.intl.string(eN.t.LykQYk),
                                    body: eN.intl.format(eN.t.azKEPy, { email: null == a ? void 0 : a.email }),
                                    secondaryConfirmText: eN.intl.string(eN.t.oP5zGA),
                                    onConfirmSecondary: D.j,
                                });
                        },
                        children: eN.intl.string(eN.t.WnX4J2),
                    }),
                ],
            });
        case eI.kVF.SCHEDULED_MAINTENANCE:
            if (null == c.metadata) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => y.Z.ackScheduledMaintenance(),
                        noticeType: eI.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    eN.intl.format(eN.t["yb96S+"], c.metadata),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eI.yXt.STATUS, "/incidents/").concat(c.metadata.id),
                        children: eN.intl.string(eN.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.NO_INPUT_DETECTED:
            if ((0, ev.isWindows)() && G) {
                if (!0 === eP) return (0, r.jsx)(eU, { deviceGuid: ey });
                else if (0 === eL) return (0, r.jsx)(eG, { deviceGuid: ey });
            }
            if (!e_.Z.supports(eC.AN.LOOPBACK)) return (0, r.jsx)(eB, {});
            return (0, r.jsx)(eZ, {});
        case eI.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eM, {});
        case eI.kVF.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e0, model: e1 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eN.intl.format(eN.t.qoDex7, {
                        vendorName: e0.name,
                        modelName: e1.name,
                    }),
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            p.Z.setEnableHardwareMuteNotice(!1), eV();
                        },
                    }),
                    (0, r.jsx)(f.u3T, {
                        href: e1.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: eN.intl.string(eN.t["Yl/Riu"]),
                    }),
                ],
            });
        case eI.kVF.STREAMER_MODE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.STREAMER_MODE,
                    }),
                    eN.intl.string(eN.t.iEgBXp),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => v.Z.setEnabled(!1),
                        noticeType: eI.kVF.STREAMER_MODE,
                        children: eN.intl.string(eN.t.R9GHya),
                    }),
                ],
            });
        case eI.kVF.H264_DISABLED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            eV();
                        },
                    }),
                    eN.intl.string(eN.t.HcErZT),
                    (0, r.jsx)(f.EyT, {
                        onClick: () => {
                            (0, eu.openUserSettings)(ec.n.VOICE_AND_VIDEO_PANEL, { section: eI.oAB.VOICE });
                        },
                        children: eN.intl.string(eN.t["51hI/g"]),
                    }),
                ],
            });
        case eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e2, applicationId: e3 } = c.metadata,
                e4 = eg.Z.get(e2),
                e8 = w.Z.getApplication(e3);
            if (null == e4 || null == e8) return null;
            let e5 = { page: eI.ZY5.IN_APP };
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => m.Z(e4.id),
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eR.premiumIcon,
                    }),
                    eN.intl.format(eN.t["g3MU/+"], {
                        applicationName: e8.name,
                        skuName: e4.name,
                    }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, S.S)({
                                applicationId: e8.id,
                                skuId: e4.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eS.Si.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? eI.IlC.OVERLAY : eI.IlC.APP,
                            }).then(() => m.Z(e4.id)),
                        children: eN.intl.string(eN.t.KEwPYx),
                    }),
                ],
            });
        case eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == c.metadata) return null;
            let { skuId: e, applicationId: t } = c.metadata,
                n = eg.Z.get(e),
                i = w.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eR.premiumIcon,
                    }),
                    eN.intl.format(eN.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eV(),
                            to: {
                                pathname: eI.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eN.intl.string(eN.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eI.kVF.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a } = e;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.SURVEY,
                        onClick: () => {
                            (0, I.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.SURVEY,
                        onClick: () => {
                            window.open(a, "_blank"), (0, I.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eI.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eN.intl.string(eN.t["ugxmk/"]),
                    (0, r.jsx)(f.u3T, {
                        href: eO.Z.getArticleURL(eI.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        children: eN.intl.string(eN.t["6ik4Xk"]),
                    }),
                ],
            });
        case eI.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eN.intl.string(eN.t.wVjKGi),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                    n.bind(n, 431583),
                                );
                                return (t) => (0, r.jsx)(e, ew({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: eN.intl.string(eN.t["1WjMbC"]),
                    }),
                ],
            });
        case eI.kVF.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e6 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.DISPATCH_ERROR,
                    }),
                    null == e6 ? void 0 : e6.displayMessage,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, ew({}, t));
                            }),
                        children: eN.intl.string(eN.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e7, total: e9, name: te } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(x.Z, {
                        justify: x.Z.Justify.CENTER,
                        children: [
                            null != te
                                ? eN.intl.formatToPlainString(eN.t["pHj+z4"], {
                                      name: "".concat(te),
                                      progress: e7,
                                      total: e9,
                                  })
                                : eN.intl.formatToPlainString(eN.t["lHZn+A"], {
                                      progress: e7,
                                      total: e9,
                                  }),
                            (0, r.jsx)(f.$jN, {
                                type: f.$jN.Type.PULSING_ELLIPSIS,
                                className: eR.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case eI.kVF.APPLICATION_TEST_MODE:
            if (null == c.metadata) return null;
            if (null != eE.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.qXd, {
                    color: f.DM8.WARNING,
                    children: (0, r.jsxs)(x.Z, {
                        justify: x.Z.Justify.CENTER,
                        align: x.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eN.intl.format(eN.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.RyX, {
                                onClick: T.mc,
                                noticeType: eI.kVF.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(f.qXd, {
                color: f.DM8.WARNING,
                children: (0, r.jsxs)(x.Z, {
                    justify: x.Z.Justify.CENTER,
                    align: x.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eN.intl.format(eN.t.Fv5HrE, { applicationName: c.metadata.applicationName }),
                        }),
                        (0, r.jsx)(A.Z, {
                            dropdownSize: A.E.DropdownSizes.SMALL,
                            className: eR.testModeSKUSelector,
                            color: A.E.Colors.WHITE,
                            look: A.E.Looks.OUTLINED,
                            size: A.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eI.jXE.NOTIFICATION_BAR,
                                        object: eI.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: eN.intl.string(eN.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.RyX, {
                            onClick: T.mc,
                            noticeType: eI.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eI.kVF.VIEWING_ROLES:
            return (0, r.jsx)(X.Z, {});
        case eI.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.qXd, {
                color:
                    ez === eS.PremiumTypes.TIER_1
                        ? f.DM8.PREMIUM_TIER_1
                        : ez === eS.PremiumTypes.TIER_0
                          ? f.DM8.PREMIUM_TIER_0
                          : f.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eR.premiumIcon,
                    }),
                    ez === eS.PremiumTypes.TIER_1
                        ? eN.intl.formatToPlainString(eN.t.fXv4wm, { daysLeft: c.metadata.daysLeft })
                        : ez === eS.PremiumTypes.TIER_0
                          ? eN.intl.formatToPlainString(eN.t.ZOHZMr, { daysLeft: c.metadata.daysLeft })
                          : eN.intl.formatToPlainString(eN.t.outyHh, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, f.ZDy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("17938"),
                                        n.e("84992"),
                                        n.e("12222"),
                                    ]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            ex(ew({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: ez,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            ez === eS.PremiumTypes.TIER_1
                                ? eN.intl.string(eN.t.BkbUPM)
                                : ez === eS.PremiumTypes.TIER_0
                                  ? eN.intl.string(eN.t.Px978X)
                                  : eN.intl.string(eN.t.LW5tCE),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tt, dismissUntil: tn } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: C,
                        onClick: () => {
                            eV(tn);
                        },
                    }),
                    eN.intl.format(eN.t.zxU0Kp, { daysPastDue: tt }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eV(tn),
                                (0, eu.openUserSettings)(ec.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eN.intl.string(eN.t.q8rxeS),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eN.intl.string(eN.t.LlZaoX),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, eu.openUserSettings)(ec.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eN.intl.string(eN.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eN.intl.string(eN.t["30YfCr"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, eu.openUserSettings)(ec.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eN.intl.string(eN.t.U5pKWA),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ez === eS.PremiumTypes.TIER_1
                        ? eN.intl.formatToPlainString(eN.t.b6QUvf, { daysLeft: c.metadata.daysLeft })
                        : ez === eS.PremiumTypes.TIER_0
                          ? eN.intl.formatToPlainString(eN.t["tURZ/M"], { daysLeft: c.metadata.daysLeft })
                          : eN.intl.formatToPlainString(eN.t.AyC74I, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eV(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, eu.openUserSettings)(ec.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            ez === eS.PremiumTypes.TIER_1
                                ? eN.intl.string(eN.t.lboF5O)
                                : ez === eS.PremiumTypes.TIER_0
                                  ? eN.intl.string(eN.t["4UPwOq"])
                                  : eN.intl.string(eN.t["P/VvGb"]),
                    }),
                ],
            });
        case eI.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(z.h, {
                buttonText: null != (t = c.buttonText) ? t : eN.intl.string(eN.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eV(),
                showCloseButton: !0,
            });
        case eI.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(H.Z, {
                guildId: l,
                analyticsLocations: g,
            });
        case eI.kVF.QUARANTINED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eN.intl.string(eN.t.DVFJYf),
                    (0, r.jsx)(f.u3T, {
                        href: eA.Z,
                        target: "_blank",
                        children: eN.intl.string(eN.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        href: eO.Z.getArticleURL(eI.BhN.QUARANTINE),
                        target: "_blank",
                        className: eR.quarantineLearnMoreLink,
                        children: eN.intl.string(eN.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    eN.intl.string(eN.t.Ugijzi),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eI.yXt.STATUS),
                        children: eN.intl.string(eN.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eV(),
                        noticeType: eI.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tr, decisionId: ti } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, V.T9)(l), eV(tr);
                        },
                    }),
                    eN.intl.string(eN.t.B8ruyY),
                    (0, r.jsx)(f.EyT, {
                        onClick: () => {
                            null != l &&
                                (0, V.UE)(l, ti, () => {
                                    eV(tr), (0, V.T9)(l);
                                });
                        },
                        children: eN.intl.string(eN.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.EyT, {
                              onClick: () => q.Z.open(l, eI.pNK.GUILD_AUTOMOD, void 0, eI.KsC.AUTOMOD_MENTION_SPAM),
                              children: eN.intl.string(eN.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ei.hZ(), eV();
                        },
                    }),
                    eN.intl.string(eN.t.I1nKfO),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, ew({}, t));
                            }),
                                ei.hZ(),
                                eV();
                        },
                        children: eN.intl.string(eN.t.l5xYnH),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let ta = o()().add(5, "days").toDate();
            return (0, r.jsx)(en.Z, {
                dismissCurrentNotice: () => {
                    (0, L.Q3)(eb.m9[eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eV(ta);
                },
                subscriptionTier: eS.Si.TIER_2,
            });
        case eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let to = o()().add(5, "days").toDate();
            return (0, r.jsx)(et.Z, {
                dismissCurrentNotice: () => {
                    eV(to);
                },
                subscriptionTier: eS.Si.TIER_2,
            });
        case eI.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                (0, er.nE)(c.metadata.streamKey);
                        },
                    }),
                    eN.intl.string(eN.t.rOx44m),
                ],
            });
        case eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            var e;
                            eV(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eN.intl.string(eN.t["0klLS7"]),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            var e;
                            (0, eo.ZZ)(), eV(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eN.intl.string(eN.t.e4y2VM),
                    }),
                ],
            });
        case eI.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(ea.Z, {});
        case eI.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(el.Z, {});
        default:
            return null;
    }
});
function eW() {
    let { analyticsLocations: e } = (0, P.ZP)(R.Z.NOTICE);
    return (0, r.jsx)(P.Gt, {
        value: e,
        children: (0, r.jsx)(eY, {}),
    });
}
