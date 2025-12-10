n.d(t, {
    Z: () => eW,
    c: () => eH,
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
    p = n(668781),
    _ = n(846027),
    m = n(893776),
    h = n(117266),
    g = n(254854),
    E = n(195500),
    b = n(287734),
    y = n(205355),
    O = n(558381),
    v = n(223245),
    S = n(491428),
    I = n(401430),
    T = n(72924),
    C = n(69499),
    A = n(579806),
    N = n(726542),
    P = n(100527),
    R = n(906732),
    D = n(812206),
    w = n(391650),
    x = n(600164),
    L = n(266454),
    j = n(749277),
    M = n(196068),
    k = n(132144),
    U = n(131130),
    G = n(458725),
    Z = n(492435),
    B = n(353926),
    F = n(506357),
    V = n(36459),
    H = n(236069),
    Y = n(305325),
    W = n(281956),
    K = n(574650),
    z = n(665302),
    q = n(434404),
    Q = n(918658),
    X = n(859428),
    J = n(647085),
    $ = n(72897),
    ee = n(963249),
    et = n(535278),
    en = n(246965),
    er = n(126916),
    ei = n(22095),
    ea = n(523255),
    eo = n(101879),
    es = n(496729),
    el = n(852923),
    ec = n(957030),
    eu = n(313789),
    ed = n(518596),
    ef = n(475808),
    ep = n(592125),
    e_ = n(131951),
    em = n(19780),
    eh = n(914010),
    eg = n(594174),
    eE = n(55563),
    eb = n(695103),
    ey = n(933429),
    eO = n(626135),
    ev = n(63063),
    eS = n(358085),
    eI = n(981631),
    eT = n(70722),
    eC = n(474936),
    eA = n(610674),
    eN = n(65154),
    eP = n(388032),
    eR = n(655227);
function eD(e, t, n) {
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
                eD(e, t, n[t]);
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
function eL(e, t) {
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
let ej = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.hp)(n)) ? void 0 : t.errorCode,
            o = eP.intl.formatToPlainString(eP.t.ejOT95, { errorCode: a }),
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
                  onClick: () => i && open(ev.Z.getArticleURL(eI.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eM = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: t,
                    onClick: () => {
                        eH();
                    },
                }),
                eP.intl.string(eP.t.o3zuYz),
                (0, r.jsx)(ej, { error: G.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(f.u3T, {
                    href: ev.Z.getArticleURL(eI.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
                }),
            ],
        });
    },
    ek = "ms-settings:sound-properties";
function eU(e) {
    return (0, eS.isWindows)() && c().satisfies(null === A.Z || void 0 === A.Z ? void 0 : A.Z.os.release, eT.lb)
        ? "".concat(ek, "?endpointId=").concat(e)
        : "ms-settings:sound";
}
let eG = (e) => {
        let { deviceGuid: t, noticeType: n } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: n,
                    onClick: () => {
                        eH(), (0, ef.b)();
                    },
                }),
                eP.intl.string(eP.t.ppW3ri),
                (0, r.jsx)(ej, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eU(t),
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
                        eH(), (0, ef.b)();
                    },
                }),
                eP.intl.string(eP.t.j4gGA4),
                (0, r.jsx)(ej, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eU(t),
                    noticeType: n,
                    children: eP.intl.string(eP.t.pxYBbM),
                }),
            ],
        });
    },
    eB = (e) => {
        let { noticeType: t } = e;
        return (0, r.jsxs)(f.qXd, {
            color: f.DM8.DANGER,
            children: [
                (0, r.jsx)(f.RyX, {
                    noticeType: t,
                    onClick: () => {
                        eH(), (0, ef.b)();
                    },
                }),
                eP.intl.string(eP.t.nCO9bI),
                (0, r.jsx)(ej, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: ev.Z.getArticleURL(eI.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eP.intl.string(eP.t.RYKKox),
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
                        eH(), (0, ef.b)();
                    },
                }),
                eP.intl.string(eP.t.dNAJ18),
                (0, r.jsx)(ej, {
                    allowClick: !0,
                    error: G.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.EyT, {
                    onClick: () => {
                        (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, { section: eI.oAB.VOICE });
                    },
                    children: eP.intl.string(eP.t.I6YlB4),
                }),
            ],
        });
    };
function eV(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), eO.default.track(eI.rMx.APP_NOTICE_VIEWED, n);
}
function eH(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let eY = i.memo(function () {
    var e, t;
    let a = (0, u.e7)([eg.default], () => eg.default.getCurrentUser()),
        l = (0, u.e7)([eh.Z], () => eh.Z.getGuildId()),
        c = (0, u.e7)([ey.ZP], () => ey.ZP.getNotice()),
        { analyticsLocations: g } = (0, R.ZP)(),
        A = (0, W.J)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: P } = (0, J.U)({ location: "AppNotice" });
    i.useEffect(() => {
        (null == c ? void 0 : c.type) != null && eV(c.type, l);
    }, [null == c ? void 0 : c.type, l]),
        i.useEffect(() => {
            if (null != c && c.type === eI.kVF.SURVEY && null != c.metadata) {
                let { metadata: e } = c,
                    t = B.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, Z.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = c.metadata) ? void 0 : e.id) != null &&
                            (await (0, S.g8)(null == (t = c.metadata) ? void 0 : t.id));
                    })();
            }
        }, [c]);
    let G = (0, $.p6)(eN.h7.AUDIO_INPUT),
        [ef, eO] = i.useState(""),
        [eT, eD] = i.useState(null),
        [ex, ej] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, eS.isWindows)() && P) {
                let i = (0, d.zS)();
                if ((null == G ? void 0 : G.guid) != null) {
                    var e, t, n, r;
                    eO(G.guid),
                        null == (t = i.getDeviceOSMuted) || null == (e = t.call(i, G.guid)) || e.then((e) => eD(e)),
                        null == (r = i.getDeviceOSVolume) || null == (n = r.call(i, G.guid)) || n.then((e) => ej(e));
                }
            }
        }, [P, G.guid]),
        null == c)
    )
        return null;
    let ek = null != c.type ? ey.zD[c.type] : null,
        eU = null != c.type ? ey.o[c.type] : null,
        eY = null != c.type ? ey.nA[c.type] : null,
        eW = ey.m9[c.type];
    if (null != ek)
        return (0, r.jsx)(k.W, {
            dismissibleContent: ek,
            noticeType: c.type,
        });
    if (null != eU)
        return (0, r.jsx)(U.q, {
            dismissibleContent: eU,
            noticeType: c.type,
        });
    if (null != eY) return (0, r.jsx)(M.c, { dismissibleContent: eY });
    if (null != eW)
        return (0, r.jsx)(j.A, {
            dismissibleContent: eW,
            noticeType: c.type,
        });
    let eK = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eI.kVF.LURKING_GUILD:
            return (0, r.jsx)(X.Z, {});
        case eI.kVF.PENDING_MEMBER:
            return (0, r.jsx)(K.Z, {});
        case eI.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(el.Z, {});
        case eI.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ez } = c.metadata;
            return (0, r.jsx)(F.Z, { onDismiss: () => eH(ez) });
        case eI.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eq } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eq),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["08KQ1P"], { helpCenterLink: ev.Z.getArticleURL(eI.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case eI.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eQ),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t["8Je+dX"], { helpCenterLink: ev.Z.getArticleURL(eI.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case eI.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eX } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eX),
                        noticeType: c.type,
                    }),
                    eP.intl.format(eP.t.q8VPLo, { helpCenterLink: ev.Z.getArticleURL(eI.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case eI.kVF.GENERIC:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
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
        case eI.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
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
        case eI.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearRemoteDisconnectVoiceChannelId(), eH();
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
        case eI.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearLastSessionVoiceChannelId(), eH();
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
        case eI.kVF.SPOTIFY_AUTO_PAUSED:
            let eJ = N.Z.get(eI.ABu.SPOTIFY);
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: c.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eR.platformIcon,
                        src: eJ.icon.whiteSVG,
                    }),
                    eP.intl.string(eP.t.D8Cp76),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, { section: eI.oAB.VOICE }),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: eR.textLinkSmall,
                        href: ev.Z.getArticleURL(eI.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eP.intl.string(eP.t.CiqAIU),
                    }),
                ],
            });
        case eI.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eP.intl.string(eP.t["f+Zaol"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => (A && null != l ? (0, Y.hk)(l) : w.j()),
                        children: eP.intl.string(eP.t.fiNVin),
                    }),
                ],
            });
        case eI.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eP.intl.string(eP.t["3sWbf3"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => {
                            m.Z.verifyResend(),
                                p.Z.show({
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
        case eI.kVF.SCHEDULED_MAINTENANCE:
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
                        href: "".concat(eI.yXt.STATUS, "/incidents/").concat(c.metadata.id),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.NO_INPUT_DETECTED:
            if (((0, J.q)({ location: "AppNotice.trueTriggerPoint" }), (0, eS.isWindows)() && P)) {
                if (!0 === eT)
                    return (0, r.jsx)(eG, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
                else if (0 === ex)
                    return (0, r.jsx)(eZ, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
            }
            if (!e_.Z.supports(eN.AN.LOOPBACK)) return (0, r.jsx)(eB, { noticeType: c.type });
            return (0, r.jsx)(eF, { noticeType: c.type });
        case eI.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eM, { noticeType: c.type });
        case eI.kVF.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e$, model: e0 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eP.intl.format(eP.t.qoDex7, {
                        vendorName: e$.name,
                        modelName: e0.name,
                    }),
                    (0, r.jsx)(f.RyX, {
                        noticeType: c.type,
                        onClick: () => {
                            _.Z.setEnableHardwareMuteNotice(!1), eH();
                        },
                    }),
                    (0, r.jsx)(f.u3T, {
                        href: e0.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["Yl/Riu"]),
                    }),
                ],
            });
        case eI.kVF.STREAMER_MODE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.STREAMER_MODE,
                    }),
                    eP.intl.string(eP.t.iEgBXp),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => v.Z.setEnabled(!1),
                        noticeType: eI.kVF.STREAMER_MODE,
                        children: eP.intl.string(eP.t.R9GHya),
                    }),
                ],
            });
        case eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e1, applicationId: e3 } = c.metadata,
                e2 = eE.Z.get(e1),
                e4 = D.Z.getApplication(e3);
            if (null == e2 || null == e4) return null;
            let e5 = { page: eI.ZY5.IN_APP };
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => h.Z(e2.id),
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eR.premiumIcon,
                    }),
                    eP.intl.format(eP.t["g3MU/+"], {
                        applicationName: e4.name,
                        skuName: e2.name,
                    }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, T.S)({
                                applicationId: e4.id,
                                skuId: e2.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eC.Si.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? eI.IlC.OVERLAY : eI.IlC.APP,
                            }).then(() => h.Z(e2.id)),
                        children: eP.intl.string(eP.t.KEwPYx),
                    }),
                ],
            });
        case eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == c.metadata) return null;
            let { skuId: e, applicationId: t } = c.metadata,
                n = eE.Z.get(e),
                i = D.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eR.premiumIcon,
                    }),
                    eP.intl.format(eP.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eH(),
                            to: {
                                pathname: eI.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eP.intl.string(eP.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eI.kVF.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a, embedded: o, id: s } = e;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.SURVEY,
                        onClick: () => {
                            (0, S.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.SURVEY,
                        onClick: () => {
                            o ? (0, er.q)(s) : window.open(a, "_blank"), (0, S.hZ)(t, !1);
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
                    eP.intl.string(eP.t["ugxmk/"]),
                    (0, r.jsx)(f.u3T, {
                        href: ev.Z.getArticleURL(eI.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t["6ik4Xk"]),
                    }),
                ],
            });
        case eI.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eP.intl.string(eP.t.wVjKGi),
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
                        children: eP.intl.string(eP.t["1WjMbC"]),
                    }),
                ],
            });
        case eI.kVF.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e8 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.DISPATCH_ERROR,
                    }),
                    null == e8 ? void 0 : e8.displayMessage,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, ew({}, t));
                            }),
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e6, total: e7, name: e9 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(x.Z, {
                        justify: x.Z.Justify.CENTER,
                        children: [
                            null != e9
                                ? eP.intl.formatToPlainString(eP.t["pHj+z4"], {
                                      name: "".concat(e9),
                                      progress: e6,
                                      total: e7,
                                  })
                                : eP.intl.formatToPlainString(eP.t["lHZn+A"], {
                                      progress: e6,
                                      total: e7,
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
            if (null != eb.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.qXd, {
                    color: f.DM8.WARNING,
                    children: (0, r.jsxs)(x.Z, {
                        justify: x.Z.Justify.CENTER,
                        align: x.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eP.intl.format(eP.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.RyX, {
                                onClick: I.mc,
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
                            children: eP.intl.format(eP.t.Fv5HrE, { applicationName: c.metadata.applicationName }),
                        }),
                        (0, r.jsx)(C.Z, {
                            dropdownSize: C.E.DropdownSizes.SMALL,
                            className: eR.testModeSKUSelector,
                            color: C.E.Colors.WHITE,
                            look: C.E.Looks.OUTLINED,
                            size: C.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eI.jXE.NOTIFICATION_BAR,
                                        object: eI.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: eP.intl.string(eP.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.RyX, {
                            onClick: I.mc,
                            noticeType: eI.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eI.kVF.VIEWING_ROLES:
            return (0, r.jsx)(Q.Z, {});
        case eI.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.qXd, {
                color:
                    eK === eC.PremiumTypes.TIER_1
                        ? f.DM8.PREMIUM_TIER_1
                        : eK === eC.PremiumTypes.TIER_0
                          ? f.DM8.PREMIUM_TIER_0
                          : f.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eH(
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
                    eK === eC.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.fXv4wm, { daysLeft: c.metadata.daysLeft })
                        : eK === eC.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t.ZOHZMr, { daysLeft: c.metadata.daysLeft })
                          : eP.intl.formatToPlainString(eP.t.outyHh, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eH(
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
                                            eL(ew({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: eK,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eK === eC.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.BkbUPM)
                                : eK === eC.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t.Px978X)
                                  : eP.intl.string(eP.t.LW5tCE),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: te, dismissUntil: tt } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: c.type,
                        onClick: () => {
                            eH(tt);
                        },
                    }),
                    eP.intl.format(eP.t.zxU0Kp, { daysPastDue: te }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eH(tt),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t.q8rxeS),
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
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t.LlZaoX),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t["Zpd+Yq"]),
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
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eP.intl.string(eP.t["30YfCr"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children: eP.intl.string(eP.t.U5pKWA),
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
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eK === eC.PremiumTypes.TIER_1
                        ? eP.intl.formatToPlainString(eP.t.b6QUvf, { daysLeft: c.metadata.daysLeft })
                        : eK === eC.PremiumTypes.TIER_0
                          ? eP.intl.formatToPlainString(eP.t["tURZ/M"], { daysLeft: c.metadata.daysLeft })
                          : eP.intl.formatToPlainString(eP.t.AyC74I, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eI.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            eK === eC.PremiumTypes.TIER_1
                                ? eP.intl.string(eP.t.lboF5O)
                                : eK === eC.PremiumTypes.TIER_0
                                  ? eP.intl.string(eP.t["4UPwOq"])
                                  : eP.intl.string(eP.t["P/VvGb"]),
                    }),
                ],
            });
        case eI.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(z.h, {
                buttonText: null != (t = c.buttonText) ? t : eP.intl.string(eP.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eH(),
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
                    eP.intl.string(eP.t.DVFJYf),
                    (0, r.jsx)(f.u3T, {
                        href: eA.Z,
                        target: "_blank",
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        href: ev.Z.getArticleURL(eI.BhN.QUARANTINE),
                        target: "_blank",
                        className: eR.quarantineLearnMoreLink,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                ],
            });
        case eI.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    eP.intl.string(eP.t.Ugijzi),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eI.yXt.STATUS),
                        noticeType: c.type,
                        children: eP.intl.string(eP.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eI.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tn, decisionId: tr } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eI.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, V.T9)(l), eH(tn);
                        },
                    }),
                    eP.intl.string(eP.t.B8ruyY),
                    (0, r.jsx)(f.EyT, {
                        onClick: () => {
                            null != l &&
                                (0, V.UE)(l, tr, () => {
                                    eH(tn), (0, V.T9)(l);
                                });
                        },
                        children: eP.intl.string(eP.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.EyT, {
                              onClick: () => q.Z.open(l, eI.pNK.GUILD_AUTOMOD, void 0, eI.KsC.AUTOMOD_MENTION_SPAM),
                              children: eP.intl.string(eP.t["1R7QIx"]),
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
                            ea.hZ(), eH();
                        },
                    }),
                    eP.intl.string(eP.t.I1nKfO),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eI.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, ew({}, t));
                            }),
                                ea.hZ(),
                                eH();
                        },
                        children: eP.intl.string(eP.t.l5xYnH),
                    }),
                ],
            });
        case eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let ti = o()().add(5, "days").toDate();
            return (0, r.jsx)(en.Z, {
                dismissCurrentNotice: () => {
                    (0, L.Q3)(ey.m9[eI.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eH(ti);
                },
                subscriptionTier: eC.Si.TIER_2,
            });
        case eI.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let ta = o()().add(5, "days").toDate();
            return (0, r.jsx)(et.Z, {
                dismissCurrentNotice: () => {
                    eH(ta);
                },
                subscriptionTier: eC.Si.TIER_2,
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
                                (0, ei.nE)(c.metadata.streamKey);
                        },
                    }),
                    eP.intl.string(eP.t.rOx44m),
                ],
            });
        case eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            var e;
                            eH(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eP.intl.string(eP.t["0klLS7"]),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            var e;
                            (0, es.Z)(), eH(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eI.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eP.intl.string(eP.t.e4y2VM),
                    }),
                ],
            });
        case eI.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(eo.Z, {});
        case eI.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ec.Z, {});
        default:
            return null;
    }
});
function eW() {
    let { analyticsLocations: e } = (0, R.ZP)(P.Z.NOTICE);
    return (0, r.jsx)(R.Gt, {
        value: e,
        children: (0, r.jsx)(eY, {}),
    });
}
