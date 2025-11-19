n.d(t, {
    Z: () => eK,
    c: () => eY,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(319498),
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
    D = n(812206),
    w = n(391650),
    L = n(600164),
    x = n(266454),
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
    er = n(947245),
    ei = n(126916),
    ea = n(22095),
    eo = n(523255),
    es = n(101879),
    el = n(496729),
    ec = n(852923),
    eu = n(957030),
    ed = n(313789),
    ef = n(518596),
    e_ = n(475808),
    ep = n(592125),
    eh = n(131951),
    em = n(19780),
    eg = n(914010),
    eE = n(594174),
    eb = n(55563),
    ey = n(695103),
    eO = n(933429),
    ev = n(626135),
    eI = n(63063),
    eT = n(358085),
    eS = n(981631),
    eA = n(70722),
    eC = n(474936),
    eN = n(610674),
    eR = n(65154),
    eP = n(388032),
    eD = n(655227);
function ew(e, t, n) {
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
function eL(e) {
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
                ew(e, t, n[t]);
            });
    }
    return e;
}
function ex(e, t) {
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
function eM(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ex(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ek = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.hp)(n)) ? void 0 : t.errorCode,
            o = eP.intl.formatToPlainString(eP.t.ejOT95, { errorCode: a }),
            s = (0, r.jsx)(f.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eD.errorCodeNoticeText,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(f.P3F, {
                  tag: "span",
                  className: eD.errorCodeNoticeClickable,
                  onClick: () => i && open(eI.Z.getArticleURL(eS.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ej = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: t,
                    onClick: () => {
                        eY();
                    },
                }),
                eP.intl.string(eP.t.o3zuYz),
                (0, r.jsx)(ek, { error: G.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(f.u3T, {
                    href: eI.Z.getArticleURL(eS.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
                }),
            ],
        });
    },
    eU = "ms-settings:sound-properties";
function eG(e) {
    return (0, eT.isWindows)() && c().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eA.lb)
        ? "".concat(eU, "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eB = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: n,
                    onClick: () => {
                        eY(), (0, e_.b)();
                    },
                }),
                eP.intl.string(eP.t.ppW3ri),
                (0, r.jsx)(ek, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eG(t),
                    noticeType: n,
                    children: eP.intl.string(eP.t.pxYBbM),
                }),
            ],
        });
    },
    eZ = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: n,
                    onClick: () => {
                        eY(), (0, e_.b)();
                    },
                }),
                eP.intl.string(eP.t.j4gGA4),
                (0, r.jsx)(ek, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eG(t),
                    noticeType: n,
                    children: eP.intl.string(eP.t.pxYBbM),
                }),
            ],
        });
    },
    eF = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: t,
                    onClick: () => {
                        eY(), (0, e_.b)();
                    },
                }),
                eP.intl.string(eP.t.nCO9bI),
                (0, r.jsx)(ek, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eI.Z.getArticleURL(eS.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
                }),
            ],
        });
    },
    eV = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: t,
                    onClick: () => {
                        eY(), (0, e_.b)();
                    },
                }),
                eP.intl.string(eP.t.dNAJ18),
                (0, r.jsx)(ek, {
                    allowClick: !0,
                    error: G.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.EyT, {
                    onClick: () => {
                        (0, ef.openUserSettings)(ed.n.VOICE_AND_VIDEO_PANEL, { section: eS.oAB.VOICE });
                    },
                    children: eP.intl.string(eP.t.I6YlB4),
                }),
            ],
        });
    };
function eH(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), ev.default.track(eS.rMx.APP_NOTICE_VIEWED, n);
}
function eY(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let eW = i.memo(function () {
    var e, t;
    let a = (0, u.e7)([eE.default], () => eE.default.getCurrentUser()),
        l = (0, u.e7)([eg.Z], () => eg.Z.getGuildId()),
        c = (0, u.e7)([eO.ZP], () => eO.ZP.getNotice()),
        { analyticsLocations: g } = (0, P.ZP)(),
        C = (0, W.J)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: R } = (0, J.U)({ location: "AppNotice" }),
        { enableEmbeddedSurvey: G } = er.E.useConfig({ location: "AppNotice" });
    i.useEffect(() => {
        (null == c ? void 0 : c.type) != null && eH(c.type, l);
    }, [null == c ? void 0 : c.type, l]),
        i.useEffect(() => {
            if (null != c && c.type === eS.kVF.SURVEY && null != c.metadata) {
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
    let e_ = (0, $.p6)(eR.h7.AUDIO_INPUT),
        [ev, eA] = i.useState(""),
        [ew, ex] = i.useState(null),
        [ek, eU] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, eT.isWindows)() && R) {
                let i = (0, d.zS)();
                if ((null == e_ ? void 0 : e_.guid) != null) {
                    var e, t, n, r;
                    eA(e_.guid),
                        null == (t = i.getDeviceOSMuted) || null == (e = t.call(i, e_.guid)) || e.then((e) => ex(e)),
                        null == (r = i.getDeviceOSVolume) || null == (n = r.call(i, e_.guid)) || n.then((e) => eU(e));
                }
            }
        }, [R, e_.guid]),
        null == c)
    )
        return null;
    let eG = null != c.type ? eO.zD[c.type] : null,
        eW = null != c.type ? eO.o[c.type] : null,
        eK = null != c.type ? eO.nA[c.type] : null,
        ez = eO.m9[c.type];
    if (null != eG)
        return (0, r.jsx)(j.W, {
            dismissibleContent: eG,
            noticeType: c.type,
        });
    if (null != eW)
        return (0, r.jsx)(U.q, {
            dismissibleContent: eW,
            noticeType: c.type,
        });
    if (null != eK) return (0, r.jsx)(k.c, { dismissibleContent: eK });
    if (null != ez)
        return (0, r.jsx)(M.A, {
            dismissibleContent: ez,
            noticeType: c.type,
        });
    let eq = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eS.kVF.LURKING_GUILD:
            return (0, r.jsx)(Q.Z, {});
        case eS.kVF.PENDING_MEMBER:
            return (0, r.jsx)(K.Z, {});
        case eS.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(ec.Z, {});
        case eS.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eX } = c.metadata;
            return (0, r.jsx)(F.Z, { onDismiss: () => eY(eX) });
        case eS.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(eQ),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["08KQ1P"], { helpCenterLink: eI.Z.getArticleURL(eS.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case eS.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eJ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(eJ),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["8Je+dX"], { helpCenterLink: eI.Z.getArticleURL(eS.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case eS.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: e$ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(e$),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t.q8VPLo, { helpCenterLink: eI.Z.getArticleURL(eS.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case eS.kVF.GENERIC:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: c.type,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.NoS, {
                              onClick: c.callback,
                              noticeType: c.type,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eS.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: c.type,
                    }),
                    c.message,
                    null != c.buttonText
                        ? (0, r.jsx)(f.NoS, {
                              onClick: c.callback,
                              noticeType: c.type,
                              children: c.buttonText,
                          })
                        : null,
                ],
            });
        case eS.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearRemoteDisconnectVoiceChannelId(), eY();
                        },
                        noticeType: c.type,
                    }),
                    eP.intl.string(eP.t.bOQ3jV),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = em.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ep.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.vD60Pv),
                    }),
                ],
            });
        case eS.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearLastSessionVoiceChannelId(), eY();
                        },
                        noticeType: c.type,
                    }),
                    eP.intl.string(eP.t.jY2lUA),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = em.Z.getLastSessionVoiceChannelId();
                            null != e && null != ep.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.vD60Pv),
                    }),
                ],
            });
        case eS.kVF.SPOTIFY_AUTO_PAUSED:
            let e0 = N.Z.get(eS.ABu.SPOTIFY);
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: c.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eD.platformIcon,
                        src: e0.icon.whiteSVG,
                    }),
                    eP.intl.string(eP.t.D8Cp76),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => (0, ef.openUserSettings)(ed.n.VOICE_AND_VIDEO_PANEL, { section: eS.oAB.VOICE }),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: eD.textLinkSmall,
                        href: eI.Z.getArticleURL(eS.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eP.intl.string(eP.t.CiqAIU),
                    }),
                ],
            });
        case eS.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eP.intl.string(eP.t["f+Zaol"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => (C && null != l ? (0, Y.hk)(l) : w.j()),
                        children: eP.intl.string(eP.t.fiNVin),
                    }),
                ],
            });
        case eS.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eP.intl.string(eP.t["3sWbf3"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => {
                            h.Z.verifyResend(),
                                _.Z.show({
                                    title: eP.intl.string(eP.t.LykQYk),
                                    body: eP.intl.format(eP.t.azKEPy, { email: null == a ? void 0 : a.email }),
                                    cancelText: eP.intl.string(eP.t.Vm8akB),
                                    onCancel: w.j,
                                });
                        },
                        children: eP.intl.string(eP.t.WnX4J2),
                    }),
                ],
            });
        case eS.kVF.SCHEDULED_MAINTENANCE:
            if (null == c.metadata) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => y.Z.ackScheduledMaintenance(),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["yb96S+"], c.metadata),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eS.yXt.STATUS, "/incidents/").concat(c.metadata.id),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kVF.NO_INPUT_DETECTED:
            if (((0, J.q)({ location: "AppNotice.trueTriggerPoint" }), (0, eT.isWindows)() && R)) {
                if (!0 === ew)
                    return (0, r.jsx)(eB, {
                        deviceGuid: ev,
                        noticeType: c.type,
                    });
                else if (0 === ek)
                    return (0, r.jsx)(eZ, {
                        deviceGuid: ev,
                        noticeType: c.type,
                    });
            }
            if (!eh.Z.supports(eR.AN.LOOPBACK)) return (0, r.jsx)(eF, { noticeType: c.type });
            return (0, r.jsx)(eV, { noticeType: c.type });
        case eS.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ej, { noticeType: c.type });
        case eS.kVF.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e1, model: e3 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eP.intl.format(eP.t.qoDex7, {
                        vendorName: e1.name,
                        modelName: e3.name,
                    }),
                    (0, r.jsx)(f.RyX, {
                        noticeType: c.type,
                        onClick: () => {
                            p.Z.setEnableHardwareMuteNotice(!1), eY();
                        },
                    }),
                    (0, r.jsx)(f.u3T, {
                        href: e3.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["Yl/Riu"]),
                    }),
                ],
            });
        case eS.kVF.STREAMER_MODE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.STREAMER_MODE,
                    }),
                    eP.intl.string(eP.t.iEgBXp),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => v.Z.setEnabled(!1),
                        noticeType: eS.kVF.STREAMER_MODE,
                        children: eP.intl.string(eP.t.R9GHya),
                    }),
                ],
            });
        case eS.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e2, applicationId: e4 } = c.metadata,
                e5 = eb.Z.get(e2),
                e8 = D.Z.getApplication(e4);
            if (null == e5 || null == e8) return null;
            let e6 = { page: eS.ZY5.IN_APP };
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => m.Z(e5.id),
                        noticeType: eS.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eD.premiumIcon,
                    }),
                    eP.intl.format(eP.t["g3MU/+"], {
                        applicationName: e8.name,
                        skuName: e5.name,
                    }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, S.S)({
                                applicationId: e8.id,
                                skuId: e5.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eC.Si.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e6,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e6,
                                context: __OVERLAY__ ? eS.IlC.OVERLAY : eS.IlC.APP,
                            }).then(() => m.Z(e5.id)),
                        children: eP.intl.string(eP.t.KEwPYx),
                    }),
                ],
            });
        case eS.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == c.metadata) return null;
            let { skuId: e, applicationId: t } = c.metadata,
                n = eb.Z.get(e),
                i = D.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eD.premiumIcon,
                    }),
                    eP.intl.format(eP.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eY(),
                            to: {
                                pathname: eS.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eP.intl.string(eP.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eS.kVF.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a, embedded: o, id: s } = e;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.SURVEY,
                        onClick: () => {
                            (0, I.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.SURVEY,
                        onClick: () => {
                            o && G ? (0, ei.q)(s) : window.open(a, "_blank"), (0, I.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eS.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eP.intl.string(eP.t["ugxmk/"]),
                    (0, r.jsx)(f.u3T, {
                        href: eI.Z.getArticleURL(eS.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["6ik4Xk"]),
                    }),
                ],
            });
        case eS.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eP.intl.string(eP.t.wVjKGi),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                    n.bind(n, 431583),
                                );
                                return (t) => (0, r.jsx)(e, eL({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: eP.intl.string(eP.t["1WjMbC"]),
                    }),
                ],
            });
        case eS.kVF.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e7 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.DISPATCH_ERROR,
                    }),
                    null == e7 ? void 0 : e7.displayMessage,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, eL({}, t));
                            }),
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e9, total: te, name: tt } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(L.Z, {
                        justify: L.Z.Justify.CENTER,
                        children: [
                            null != tt
                                ? eP.intl.formatToPlainString(eP.t["pHj+z4"], {
                                      name: "".concat(tt),
                                      progress: e9,
                                      total: te,
                                  })
                                : eP.intl.formatToPlainString(eP.t["lHZn+A"], {
                                      progress: e9,
                                      total: te,
                                  }),
                            (0, r.jsx)(f.$jN, {
                                type: f.$jN.Type.PULSING_ELLIPSIS,
                                className: eD.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case eS.kVF.APPLICATION_TEST_MODE:
            if (null == c.metadata) return null;
            if (null != ey.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.qXd, {
                    color: f.DM8.WARNING,
                    children: (0, r.jsxs)(L.Z, {
                        justify: L.Z.Justify.CENTER,
                        align: L.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eP.intl.format(eP.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.RyX, {
                                onClick: T.mc,
                                noticeType: eS.kVF.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(f.qXd, {
                color: f.DM8.WARNING,
                children: (0, r.jsxs)(L.Z, {
                    justify: L.Z.Justify.CENTER,
                    align: L.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eP.intl.format(eP.t.Fv5HrE, { applicationName: c.metadata.applicationName }),
                        }),
                        (0, r.jsx)(A.Z, {
                            dropdownSize: A.E.DropdownSizes.SMALL,
                            className: eD.testModeSKUSelector,
                            color: A.E.Colors.WHITE,
                            look: A.E.Looks.OUTLINED,
                            size: A.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eS.jXE.NOTIFICATION_BAR,
                                        object: eS.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: eP.intl.string(eP.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.RyX, {
                            onClick: T.mc,
                            noticeType: eS.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eS.kVF.VIEWING_ROLES:
            return (0, r.jsx)(X.Z, {});
        case eS.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.qXd, {
                color:
                    eq === eC.PremiumTypes.TIER_1
                        ? f.DM8.PREMIUM_TIER_1
                        : eq === eC.PremiumTypes.TIER_0
                          ? f.DM8.PREMIUM_TIER_0
                          : f.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eD.premiumIcon,
                    }),
                    eq === eC.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.fXv4wm, { daysLeft: c.metadata.daysLeft })
                        : eq === eC.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t.ZOHZMr, { daysLeft: c.metadata.daysLeft })
                          : eP.intl.formatToPlainString(eP.t.outyHh, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, f.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e("84992"), n.e("56158")]).then(
                                        n.bind(n, 561623),
                                    );
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eM(eL({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: eq,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eq === eC.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.BkbUPM)
                                : eq === eC.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t.Px978X)
                                  : eP.intl.string(eP.t.LW5tCE),
                    }),
                ],
            });
        case eS.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: tn, dismissUntil: tr } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: c.type,
                        onClick: () => {
                            eY(tr);
                        },
                    }),
                    eP.intl.format(eP.t.zxU0Kp, { daysPastDue: tn }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eY(tr),
                                (0, ef.openUserSettings)(ed.n.SUBSCRIPTIONS_PANEL, { section: eS.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t.q8rxeS),
                    }),
                ],
            });
        case eS.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t.LlZaoX),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ef.openUserSettings)(ed.n.SUBSCRIPTIONS_PANEL, { section: eS.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eS.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t["30YfCr"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ef.openUserSettings)(ed.n.SUBSCRIPTIONS_PANEL, { section: eS.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t.U5pKWA),
                    }),
                ],
            });
        case eS.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eq === eC.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.b6QUvf, { daysLeft: c.metadata.daysLeft })
                        : eq === eC.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t["tURZ/M"], { daysLeft: c.metadata.daysLeft })
                          : eP.intl.formatToPlainString(eP.t.AyC74I, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eY(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ef.openUserSettings)(ed.n.SUBSCRIPTIONS_PANEL, { section: eS.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            eq === eC.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.lboF5O)
                                : eq === eC.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t["4UPwOq"])
                                  : eP.intl.string(eP.t["P/VvGb"]),
                    }),
                ],
            });
        case eS.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(z.h, {
                buttonText: null != (t = c.buttonText) ? t : eP.intl.string(eP.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eY(),
                showCloseButton: !0,
            });
        case eS.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(H.Z, {
                guildId: l,
                analyticsLocations: g,
            });
        case eS.kVF.QUARANTINED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eP.intl.string(eP.t.DVFJYf),
                    (0, r.jsx)(f.u3T, {
                        href: eN.Z,
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        href: eI.Z.getArticleURL(eS.BhN.QUARANTINE),
                        target: "_blank",
                        className: eD.quarantineLearnMoreLink,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eS.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    eP.intl.string(eP.t.Ugijzi),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eS.yXt.STATUS),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eY(),
                        noticeType: eS.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eS.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: ti, decisionId: ta } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, V.T9)(l), eY(ti);
                        },
                    }),
                    eP.intl.string(eP.t.B8ruyY),
                    (0, r.jsx)(f.EyT, {
                        onClick: () => {
                            null != l &&
                                (0, V.UE)(l, ta, () => {
                                    eY(ti), (0, V.T9)(l);
                                });
                        },
                        children: eP.intl.string(eP.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.EyT, {
                              onClick: () => q.Z.open(l, eS.pNK.GUILD_AUTOMOD, void 0, eS.KsC.AUTOMOD_MENTION_SPAM),
                              children: eP.intl.string(eP.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eS.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            eo.hZ(), eY();
                        },
                    }),
                    eP.intl.string(eP.t.I1nKfO),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eS.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, eL({}, t));
                            }),
                                eo.hZ(),
                                eY();
                        },
                        children: eP.intl.string(eP.t.l5xYnH),
                    }),
                ],
            });
        case eS.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let to = o()().add(5, "days").toDate();
            return (0, r.jsx)(en.Z, {
                dismissCurrentNotice: () => {
                    (0, x.Q3)(eO.m9[eS.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eY(to);
                },
                subscriptionTier: eC.Si.TIER_2,
            });
        case eS.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let ts = o()().add(5, "days").toDate();
            return (0, r.jsx)(et.Z, {
                dismissCurrentNotice: () => {
                    eY(ts);
                },
                subscriptionTier: eC.Si.TIER_2,
            });
        case eS.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eS.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                (0, ea.nE)(c.metadata.streamKey);
                        },
                    }),
                    eP.intl.string(eP.t.rOx44m),
                ],
            });
        case eS.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            var e;
                            eY(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eS.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eP.intl.string(eP.t["0klLS7"]),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            var e;
                            (0, el.ZZ)(), eY(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eS.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eP.intl.string(eP.t.e4y2VM),
                    }),
                ],
            });
        case eS.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(es.Z, {});
        case eS.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(eu.Z, {});
        default:
            return null;
    }
});
function eK() {
    let { analyticsLocations: e } = (0, P.ZP)(R.Z.NOTICE);
    return (0, r.jsx)(P.Gt, {
        value: e,
        children: (0, r.jsx)(eW, {}),
    });
}
