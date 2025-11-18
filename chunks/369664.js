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
    e_ = n(592125),
    ep = n(131951),
    eh = n(19780),
    em = n(914010),
    eg = n(594174),
    eE = n(55563),
    eb = n(695103),
    ey = n(933429),
    eO = n(626135),
    ev = n(63063),
    eI = n(358085),
    eT = n(981631),
    eS = n(70722),
    eA = n(474936),
    eC = n(610674),
    eN = n(65154),
    eR = n(388032),
    eP = n(655227);
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
function eL(e, t) {
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
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eM = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, G.hp)(n)) ? void 0 : t.errorCode,
            o = eR.intl.formatToPlainString(eR.t.ejOT95, { errorCode: a }),
            s = (0, r.jsx)(f.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eP.errorCodeNoticeText,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(f.P3F, {
                  tag: "span",
                  className: eP.errorCodeNoticeClickable,
                  onClick: () => i && open(ev.Z.getArticleURL(eT.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    ek = (e) => {
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
                eR.intl.string(eR.t.o3zuYz),
                (0, r.jsx)(eM, { error: G.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(f.u3T, {
                    href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eR.intl.string(eR.t.RYKKox),
                }),
            ],
        });
    },
    ej = "ms-settings:sound-properties";
function eU(e) {
    return (0, eI.isWindows)() && c().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eS.lb)
        ? "".concat(ej, "?endpointId=").concat(e)
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
                eR.intl.string(eR.t.ppW3ri),
                (0, r.jsx)(eM, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eU(t),
                    noticeType: n,
                    children: eR.intl.string(eR.t.pxYBbM),
                }),
            ],
        });
    },
    eB = (e) => {
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
                eR.intl.string(eR.t.j4gGA4),
                (0, r.jsx)(eM, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: eU(t),
                    noticeType: n,
                    children: eR.intl.string(eR.t.pxYBbM),
                }),
            ],
        });
    },
    eZ = (e) => {
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
                eR.intl.string(eR.t.nCO9bI),
                (0, r.jsx)(eM, { error: G.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(f.u3T, {
                    href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
                    noticeType: t,
                    children: eR.intl.string(eR.t.RYKKox),
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
                eR.intl.string(eR.t.dNAJ18),
                (0, r.jsx)(eM, {
                    allowClick: !0,
                    error: G.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(f.EyT, {
                    onClick: () => {
                        (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, { section: eT.oAB.VOICE });
                    },
                    children: eR.intl.string(eR.t.I6YlB4),
                }),
            ],
        });
    };
function eV(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), eO.default.track(eT.rMx.APP_NOTICE_VIEWED, n);
}
function eH(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let eY = i.memo(function () {
    var e, t;
    let a = (0, u.e7)([eg.default], () => eg.default.getCurrentUser()),
        l = (0, u.e7)([em.Z], () => em.Z.getGuildId()),
        c = (0, u.e7)([ey.ZP], () => ey.ZP.getNotice()),
        { analyticsLocations: g } = (0, P.ZP)(),
        C = (0, W.J)(l),
        { windowsMuteAndZeroVolumeDetectionEnabled: R } = (0, J.U)({ location: "AppNotice" });
    i.useEffect(() => {
        (null == c ? void 0 : c.type) != null && eV(c.type, l);
    }, [null == c ? void 0 : c.type, l]),
        i.useEffect(() => {
            if (null != c && c.type === eT.kVF.SURVEY && null != c.metadata) {
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
    let G = (0, $.p6)(eN.h7.AUDIO_INPUT),
        [ef, eO] = i.useState(""),
        [eS, eD] = i.useState(null),
        [eL, eM] = i.useState(null);
    if (
        (i.useEffect(() => {
            if ((0, eI.isWindows)() && R) {
                let i = (0, d.zS)();
                if ((null == G ? void 0 : G.guid) != null) {
                    var e, t, n, r;
                    eO(G.guid),
                        null == (t = i.getDeviceOSMuted) || null == (e = t.call(i, G.guid)) || e.then((e) => eD(e)),
                        null == (r = i.getDeviceOSVolume) || null == (n = r.call(i, G.guid)) || n.then((e) => eM(e));
                }
            }
        }, [R, G.guid]),
        null == c)
    )
        return null;
    let ej = null != c.type ? ey.zD[c.type] : null,
        eU = null != c.type ? ey.o[c.type] : null,
        eY = null != c.type ? ey.nA[c.type] : null,
        eW = ey.m9[c.type];
    if (null != ej)
        return (0, r.jsx)(j.W, {
            dismissibleContent: ej,
            noticeType: c.type,
        });
    if (null != eU)
        return (0, r.jsx)(U.q, {
            dismissibleContent: eU,
            noticeType: c.type,
        });
    if (null != eY) return (0, r.jsx)(k.c, { dismissibleContent: eY });
    if (null != eW)
        return (0, r.jsx)(M.A, {
            dismissibleContent: eW,
            noticeType: c.type,
        });
    let eK = null == (e = c.metadata) ? void 0 : e.premiumType;
    switch (c.type) {
        case eT.kVF.LURKING_GUILD:
            return (0, r.jsx)(Q.Z, {});
        case eT.kVF.PENDING_MEMBER:
            return (0, r.jsx)(K.Z, {});
        case eT.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(el.Z, {});
        case eT.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ez } = c.metadata;
            return (0, r.jsx)(F.Z, { onDismiss: () => eH(ez) });
        case eT.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: eq } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eq),
                        noticeType: c.type,
                    }),
                    eR.intl.format(eR.t["08KQ1P"], { helpCenterLink: ev.Z.getArticleURL(eT.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case eT.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eX } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eX),
                        noticeType: c.type,
                    }),
                    eR.intl.format(eR.t["8Je+dX"], { helpCenterLink: ev.Z.getArticleURL(eT.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case eT.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eQ } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(eQ),
                        noticeType: c.type,
                    }),
                    eR.intl.format(eR.t.q8VPLo, { helpCenterLink: ev.Z.getArticleURL(eT.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case eT.kVF.GENERIC:
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
        case eT.kVF.LAUNCH_GAME_FAILURE:
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
        case eT.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearRemoteDisconnectVoiceChannelId(), eH();
                        },
                        noticeType: c.type,
                    }),
                    eR.intl.string(eR.t.bOQ3jV),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = eh.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != e_.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.vD60Pv),
                    }),
                ],
            });
        case eT.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            E.Z.clearLastSessionVoiceChannelId(), eH();
                        },
                        noticeType: c.type,
                    }),
                    eR.intl.string(eR.t.jY2lUA),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            let e = eh.Z.getLastSessionVoiceChannelId();
                            null != e && null != e_.Z.getChannel(e) && b.default.selectVoiceChannel(e);
                        },
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.vD60Pv),
                    }),
                ],
            });
        case eT.kVF.SPOTIFY_AUTO_PAUSED:
            let eJ = N.Z.get(eT.ABu.SPOTIFY);
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: c.type,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eP.platformIcon,
                        src: eJ.icon.whiteSVG,
                    }),
                    eR.intl.string(eR.t.D8Cp76),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, { section: eT.oAB.VOICE }),
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.NiTd0e),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: eP.textLinkSmall,
                        href: ev.Z.getArticleURL(eT.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eR.intl.string(eR.t.CiqAIU),
                    }),
                ],
            });
        case eT.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eR.intl.string(eR.t["f+Zaol"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => (C && null != l ? (0, Y.hk)(l) : w.j()),
                        children: eR.intl.string(eR.t.fiNVin),
                    }),
                ],
            });
        case eT.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    eR.intl.string(eR.t["3sWbf3"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: c.type,
                        onClick: () => {
                            h.Z.verifyResend(),
                                _.Z.show({
                                    title: eR.intl.string(eR.t.LykQYk),
                                    body: eR.intl.format(eR.t.azKEPy, { email: null == a ? void 0 : a.email }),
                                    cancelText: eR.intl.string(eR.t.Vm8akB),
                                    onCancel: w.j,
                                });
                        },
                        children: eR.intl.string(eR.t.WnX4J2),
                    }),
                ],
            });
        case eT.kVF.SCHEDULED_MAINTENANCE:
            if (null == c.metadata) return null;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => y.Z.ackScheduledMaintenance(),
                        noticeType: c.type,
                    }),
                    eR.intl.format(eR.t["yb96S+"], c.metadata),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eT.yXt.STATUS, "/incidents/").concat(c.metadata.id),
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kVF.NO_INPUT_DETECTED:
            if (((0, J.q)({ location: "AppNotice.trueTriggerPoint" }), (0, eI.isWindows)() && R)) {
                if (!0 === eS)
                    return (0, r.jsx)(eG, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
                else if (0 === eL)
                    return (0, r.jsx)(eB, {
                        deviceGuid: ef,
                        noticeType: c.type,
                    });
            }
            if (!ep.Z.supports(eN.AN.LOOPBACK)) return (0, r.jsx)(eZ, { noticeType: c.type });
            return (0, r.jsx)(eF, { noticeType: c.type });
        case eT.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(ek, { noticeType: c.type });
        case eT.kVF.HARDWARE_MUTE:
            if (null == c.metadata) return null;
            let { vendor: e$, model: e0 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eR.intl.format(eR.t.qoDex7, {
                        vendorName: e$.name,
                        modelName: e0.name,
                    }),
                    (0, r.jsx)(f.RyX, {
                        noticeType: c.type,
                        onClick: () => {
                            p.Z.setEnableHardwareMuteNotice(!1), eH();
                        },
                    }),
                    (0, r.jsx)(f.u3T, {
                        href: e0.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        noticeType: c.type,
                        children: eR.intl.string(eR.t["Yl/Riu"]),
                    }),
                ],
            });
        case eT.kVF.STREAMER_MODE:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eT.kVF.STREAMER_MODE,
                    }),
                    eR.intl.string(eR.t.iEgBXp),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => v.Z.setEnabled(!1),
                        noticeType: eT.kVF.STREAMER_MODE,
                        children: eR.intl.string(eR.t.R9GHya),
                    }),
                ],
            });
        case eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == c.metadata) return null;
            let { skuId: e1, applicationId: e3 } = c.metadata,
                e2 = eE.Z.get(e1),
                e4 = D.Z.getApplication(e3);
            if (null == e2 || null == e4) return null;
            let e5 = { page: eT.ZY5.IN_APP };
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => m.Z(e2.id),
                        noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eP.premiumIcon,
                    }),
                    eR.intl.format(eR.t["g3MU/+"], {
                        applicationName: e4.name,
                        skuName: e2.name,
                    }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, S.S)({
                                applicationId: e4.id,
                                skuId: e2.id,
                                openPremiumPaymentModal: () => {
                                    (0, ee.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eA.Si.TIER_2,
                                        analyticsLocations: g,
                                        analyticsObject: e5,
                                    });
                                },
                                analyticsLocations: g,
                                analyticsLocationObject: e5,
                                context: __OVERLAY__ ? eT.IlC.OVERLAY : eT.IlC.APP,
                            }).then(() => m.Z(e2.id)),
                        children: eR.intl.string(eR.t.KEwPYx),
                    }),
                ],
            });
        case eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
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
                        noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(f.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eP.premiumIcon,
                    }),
                    eR.intl.format(eR.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(f.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eH(),
                            to: {
                                pathname: eT.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eR.intl.string(eR.t.hvVgAZ),
                        }),
                    }),
                ],
            });
        }
        case eT.kVF.SURVEY: {
            let e = c.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a, embedded: o, id: s } = e;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.SURVEY,
                        onClick: () => {
                            (0, I.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.SURVEY,
                        onClick: () => {
                            o ? (0, er.q)(s) : window.open(a, "_blank"), (0, I.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eT.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eR.intl.string(eR.t["ugxmk/"]),
                    (0, r.jsx)(f.u3T, {
                        href: ev.Z.getArticleURL(eT.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: c.type,
                        children: eR.intl.string(eR.t["6ik4Xk"]),
                    }),
                ],
            });
        case eT.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eT.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eR.intl.string(eR.t.wVjKGi),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, f.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                    n.bind(n, 431583),
                                );
                                return (t) => (0, r.jsx)(e, ew({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: eR.intl.string(eR.t["1WjMbC"]),
                    }),
                ],
            });
        case eT.kVF.DISPATCH_ERROR:
            if (null == c.metadata) return null;
            let { error: e8 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eT.kVF.DISPATCH_ERROR,
                    }),
                    null == e8 ? void 0 : e8.displayMessage,
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, ew({}, t));
                            }),
                        children: eR.intl.string(eR.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == c.metadata) return null;
            let { progress: e6, total: e7, name: e9 } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(L.Z, {
                        justify: L.Z.Justify.CENTER,
                        children: [
                            null != e9
                                ? eR.intl.formatToPlainString(eR.t["pHj+z4"], {
                                      name: "".concat(e9),
                                      progress: e6,
                                      total: e7,
                                  })
                                : eR.intl.formatToPlainString(eR.t["lHZn+A"], {
                                      progress: e6,
                                      total: e7,
                                  }),
                            (0, r.jsx)(f.$jN, {
                                type: f.$jN.Type.PULSING_ELLIPSIS,
                                className: eP.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case eT.kVF.APPLICATION_TEST_MODE:
            if (null == c.metadata) return null;
            if (null != eb.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(f.qXd, {
                    color: f.DM8.WARNING,
                    children: (0, r.jsxs)(L.Z, {
                        justify: L.Z.Justify.CENTER,
                        align: L.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eR.intl.format(eR.t["1qxVe4"], {
                                    applicationName: c.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(f.RyX, {
                                onClick: T.mc,
                                noticeType: eT.kVF.APPLICATION_TEST_MODE,
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
                            children: eR.intl.format(eR.t.Fv5HrE, { applicationName: c.metadata.applicationName }),
                        }),
                        (0, r.jsx)(A.Z, {
                            dropdownSize: A.E.DropdownSizes.SMALL,
                            className: eP.testModeSKUSelector,
                            color: A.E.Colors.WHITE,
                            look: A.E.Looks.OUTLINED,
                            size: A.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                O.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eT.jXE.NOTIFICATION_BAR,
                                        object: eT.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: c.metadata.applicationId,
                            children: eR.intl.string(eR.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(f.RyX, {
                            onClick: T.mc,
                            noticeType: eT.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eT.kVF.VIEWING_ROLES:
            return (0, r.jsx)(X.Z, {});
        case eT.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(f.qXd, {
                color:
                    eK === eA.PremiumTypes.TIER_1
                        ? f.DM8.PREMIUM_TIER_1
                        : eK === eA.PremiumTypes.TIER_0
                          ? f.DM8.PREMIUM_TIER_0
                          : f.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.PREMIUM_UNCANCEL,
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
                        className: eP.premiumIcon,
                    }),
                    eK === eA.PremiumTypes.TIER_1
                        ? eR.intl.formatToPlainString(eR.t.fXv4wm, { daysLeft: c.metadata.daysLeft })
                        : eK === eA.PremiumTypes.TIER_0
                          ? eR.intl.formatToPlainString(eR.t.ZOHZMr, { daysLeft: c.metadata.daysLeft })
                          : eR.intl.formatToPlainString(eR.t.outyHh, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.PREMIUM_UNCANCEL,
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
                                            ex(ew({}, t), {
                                                daysLeft: c.metadata.daysLeft,
                                                premiumType: eK,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: c.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eK === eA.PremiumTypes.TIER_1
                                ? eR.intl.string(eR.t.BkbUPM)
                                : eK === eA.PremiumTypes.TIER_0
                                  ? eR.intl.string(eR.t.Px978X)
                                  : eR.intl.string(eR.t.LW5tCE),
                    }),
                ],
            });
        case eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
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
                    eR.intl.format(eR.t.zxU0Kp, { daysPastDue: te }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eH(tt),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eT.oAB.SUBSCRIPTIONS });
                        },
                        children: eR.intl.string(eR.t.q8rxeS),
                    }),
                ],
            });
        case eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eR.intl.string(eR.t.LlZaoX),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eT.oAB.SUBSCRIPTIONS });
                        },
                        children: eR.intl.string(eR.t["Zpd+Yq"]),
                    }),
                ],
            });
        case eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eR.intl.string(eR.t["30YfCr"]),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eT.oAB.SUBSCRIPTIONS });
                        },
                        children: eR.intl.string(eR.t.U5pKWA),
                    }),
                ],
            });
        case eT.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eK === eA.PremiumTypes.TIER_1
                        ? eR.intl.formatToPlainString(eR.t.b6QUvf, { daysLeft: c.metadata.daysLeft })
                        : eK === eA.PremiumTypes.TIER_0
                          ? eR.intl.formatToPlainString(eR.t["tURZ/M"], { daysLeft: c.metadata.daysLeft })
                          : eR.intl.formatToPlainString(eR.t.AyC74I, { daysLeft: c.metadata.daysLeft }),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eH(
                                null == (t = c.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, { section: eT.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            eK === eA.PremiumTypes.TIER_1
                                ? eR.intl.string(eR.t.lboF5O)
                                : eK === eA.PremiumTypes.TIER_0
                                  ? eR.intl.string(eR.t["4UPwOq"])
                                  : eR.intl.string(eR.t["P/VvGb"]),
                    }),
                ],
            });
        case eT.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(z.h, {
                buttonText: null != (t = c.buttonText) ? t : eR.intl.string(eR.t["/g10LC"]),
                onGoBack: c.callback,
                onDismiss: () => eH(),
                showCloseButton: !0,
            });
        case eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(H.Z, {
                guildId: l,
                analyticsLocations: g,
            });
        case eT.kVF.QUARANTINED:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    eR.intl.string(eR.t.DVFJYf),
                    (0, r.jsx)(f.u3T, {
                        href: eC.Z,
                        target: "_blank",
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.kvHdFN),
                    }),
                    (0, r.jsx)(f.Anchor, {
                        href: ev.Z.getArticleURL(eT.BhN.QUARANTINE),
                        target: "_blank",
                        className: eP.quarantineLearnMoreLink,
                        children: eR.intl.string(eR.t.hvVgAZ),
                    }),
                ],
            });
        case eT.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    eR.intl.string(eR.t.Ugijzi),
                    (0, r.jsx)(f.u3T, {
                        href: "".concat(eT.yXt.STATUS),
                        noticeType: c.type,
                        children: eR.intl.string(eR.t.hvVgAZ),
                    }),
                    (0, r.jsx)(f.RyX, {
                        onClick: () => eH(),
                        noticeType: eT.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: tn, decisionId: tr } = c.metadata;
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.WARNING,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != l && (0, V.T9)(l), eH(tn);
                        },
                    }),
                    eR.intl.string(eR.t.B8ruyY),
                    (0, r.jsx)(f.EyT, {
                        onClick: () => {
                            null != l &&
                                (0, V.UE)(l, tr, () => {
                                    eH(tn), (0, V.T9)(l);
                                });
                        },
                        children: eR.intl.string(eR.t.oX14El),
                    }),
                    null != l
                        ? (0, r.jsx)(f.EyT, {
                              onClick: () => q.Z.open(l, eT.pNK.GUILD_AUTOMOD, void 0, eT.KsC.AUTOMOD_MENTION_SPAM),
                              children: eR.intl.string(eR.t["1R7QIx"]),
                          })
                        : null,
                ],
            });
        case eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ea.hZ(), eH();
                        },
                    }),
                    eR.intl.string(eR.t.I1nKfO),
                    (0, r.jsx)(f.NoS, {
                        noticeType: eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
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
                        children: eR.intl.string(eR.t.l5xYnH),
                    }),
                ],
            });
        case eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let ti = o()().add(5, "days").toDate();
            return (0, r.jsx)(en.Z, {
                dismissCurrentNotice: () => {
                    (0, x.Q3)(ey.m9[eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eH(ti);
                },
                subscriptionTier: eA.Si.TIER_2,
            });
        case eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let ta = o()().add(5, "days").toDate();
            return (0, r.jsx)(et.Z, {
                dismissCurrentNotice: () => {
                    eH(ta);
                },
                subscriptionTier: eA.Si.TIER_2,
            });
        case eT.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.DANGER,
                children: [
                    (0, r.jsx)(f.RyX, {
                        noticeType: eT.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = c.metadata) ? void 0 : e.streamKey) != null &&
                                (0, ei.nE)(c.metadata.streamKey);
                        },
                    }),
                    eR.intl.string(eR.t.rOx44m),
                ],
            });
        case eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(f.qXd, {
                color: f.DM8.BRAND,
                children: [
                    (0, r.jsx)(f.RyX, {
                        onClick: () => {
                            var e;
                            eH(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eR.intl.string(eR.t["0klLS7"]),
                    (0, r.jsx)(f.NoS, {
                        onClick: () => {
                            var e;
                            (0, es.ZZ)(), eH(null == (e = c.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eR.intl.string(eR.t.e4y2VM),
                    }),
                ],
            });
        case eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(eo.Z, {});
        case eT.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ec.Z, {});
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
