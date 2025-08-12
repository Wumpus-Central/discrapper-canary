n.d(t, {
    Z: () => eM,
    c: () => eD,
});
var r = n(255367),
    i = n(73800),
    o = n(913527),
    a = n.n(o),
    s = n(688642),
    l = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    f = n(893776),
    _ = n(117266),
    p = n(37234),
    h = n(254854),
    m = n(195500),
    g = n(287734),
    E = n(205355),
    b = n(558381),
    y = n(223245),
    O = n(491428),
    v = n(401430),
    I = n(230711),
    T = n(726542),
    S = n(100527),
    A = n(906732),
    N = n(812206),
    C = n(391650),
    R = n(600164),
    P = n(266454),
    w = n(749277),
    D = n(196068),
    L = n(132144),
    x = n(131130),
    M = n(458725),
    k = n(386146),
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
    q = n(963249),
    X = n(96320),
    Q = n(535278),
    J = n(246965),
    $ = n(272008),
    ee = n(523255),
    et = n(101879),
    en = n(496729),
    er = n(852923),
    ei = n(592125),
    eo = n(131951),
    ea = n(19780),
    es = n(914010),
    el = n(594174),
    ec = n(55563),
    eu = n(695103),
    ed = n(933429),
    ef = n(626135),
    e_ = n(63063),
    ep = n(72924),
    eh = n(69499),
    em = n(912193),
    eg = n(981631),
    eE = n(474936),
    eb = n(610674),
    ey = n(65154),
    eO = n(388032),
    ev = n(768339);
function eI(e, t, n) {
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
function eT(e) {
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
                eI(e, t, n[t]);
            });
    }
    return e;
}
function eS(e, t) {
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
function eA(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = (e) => {
        var t;
        let { error: n, location: i, allowClick: o = !1 } = e,
            a = null == (t = (0, M.hp)(n)) ? void 0 : t.errorCode,
            s = eO.intl.formatToPlainString(eO.t["ejOT9/"], { errorCode: a }),
            { avErrorUIEnabled: l } = (0, k.JN)({ location: i });
        if (!l) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: ev.errorCodeNoticeText,
            selectable: !0,
            children: s,
        });
        return o
            ? (0, r.jsx)(c.P3F, {
                  tag: "span",
                  className: ev.errorCodeNoticeClickable,
                  onClick: () => o && open(e_.Z.getArticleURL(eg.BhN.AV_ERROR_CODES)),
                  children: u,
              })
            : u;
    },
    eC = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eD();
                    },
                }),
                eO.intl.string(eO.t.o3zuY2),
                (0, r.jsx)(eN, {
                    error: M.u.NO_INPUT_DEVICES,
                    location: "AudioIssueNoticeInputDevices",
                }),
                (0, r.jsx)(c.u3T, {
                    href: e_.Z.getArticleURL(eg.BhN.NO_INPUT_DETECTED),
                    children: eO.intl.string(eO.t.RYKKo6),
                }),
            ],
        }),
    eR = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eD(), (0, em.b)();
                    },
                }),
                eO.intl.string(eO.t.nCO9bG),
                (0, r.jsx)(eN, {
                    error: M.u.NO_AUDIO_INPUT_DETECTED,
                    location: "AudioIssueNoticeHelpdesk",
                }),
                (0, r.jsx)(c.u3T, {
                    href: e_.Z.getArticleURL(eg.BhN.NO_INPUT_DETECTED),
                    children: eO.intl.string(eO.t.RYKKo6),
                }),
            ],
        }),
    eP = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eD(), (0, em.b)();
                    },
                }),
                eO.intl.string(eO.t.dNAJ19),
                (0, r.jsx)(eN, {
                    allowClick: !0,
                    error: M.u.NO_AUDIO_INPUT_DETECTED,
                    location: "AudioIssueNoticeMicTester",
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, p.jN)(eg.S9g.USER_SETTINGS), I.Z.setSection(eg.oAB.VOICE);
                    },
                    children: eO.intl.string(eO.t.I6YlBw),
                }),
            ],
        });
function ew(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), ef.default.track(eg.rMx.APP_NOTICE_VIEWED, n);
}
function eD(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
function eL(e) {
    return null != e ? ed.m9[e] : null;
}
let ex = i.memo(function () {
    var e, t;
    let o = (0, l.e7)([el.default], () => el.default.getCurrentUser()),
        h = (0, l.e7)([es.Z], () => es.Z.getGuildId()),
        S = (0, l.e7)([ed.ZP], () => ed.ZP.getNotice()),
        { analyticsLocations: M } = (0, A.ZP)(),
        k = null == S ? void 0 : S.type,
        ef = (0, V.J)(h);
    i.useEffect(() => {
        null != k && ew(k, h);
    }, [k, h]),
        i.useEffect(() => {
            if (null != S && S.type === eg.kVF.SURVEY && null != S.metadata) {
                let { metadata: e } = S,
                    t = U.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, j.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = S.metadata) ? void 0 : e.id) != null &&
                            (await (0, O.g8)(null == (t = S.metadata) ? void 0 : t.id));
                    })();
            }
        }, [S]);
    let em = null != k ? ed.zD[k] : null,
        eI = null != k ? ed.o[k] : null,
        eS = null != k ? ed.nA[k] : null,
        eN = eL(k);
    if (null == S) return null;
    let { useRecurringNotices: ex } = X.b.getCurrentConfig({ location: "AppNotice" });
    if (ex && null != em && (k === eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING || k === eg.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING))
        return (0, r.jsx)(L.W, {
            dismissibleContent: em,
            noticeType: S.type,
        });
    if (null != eI)
        return (0, r.jsx)(x.q, {
            dismissibleContent: eI,
            noticeType: S.type,
        });
    if (null != eS) return (0, r.jsx)(D.c, { dismissibleContent: eS });
    if (null != eN)
        return (0, r.jsx)(w.A, {
            dismissibleContent: eN,
            noticeType: S.type,
        });
    let eM = null == (e = S.metadata) ? void 0 : e.premiumType;
    switch (S.type) {
        case eg.kVF.LURKING_GUILD:
            return (0, r.jsx)(z.Z, {});
        case eg.kVF.PENDING_MEMBER:
            return (0, r.jsx)(H.Z, {});
        case eg.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(er.Z, {});
        case eg.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: ek } = S.metadata;
            return (0, r.jsx)(G.Z, { onDismiss: () => eD(ek) });
        case eg.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ej } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(ej),
                        noticeType: eg.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    eO.intl.format(eO.t["08KQ1N"], { helpCenterLink: e_.Z.getArticleURL(eg.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case eg.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eU } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(eU),
                        noticeType: eg.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    eO.intl.format(eO.t["8Je+dX"], { helpCenterLink: e_.Z.getArticleURL(eg.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case eg.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eG } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(eG),
                        noticeType: eg.kVF.MACOS_19_DEPRECATED_MESSAGE,
                    }),
                    eO.intl.format(eO.t.q8VPLi, { helpCenterLink: e_.Z.getArticleURL(eg.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case eg.kVF.GENERIC:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.GENERIC,
                    }),
                    S.message,
                    null != S.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: S.callback,
                              noticeType: eg.kVF.GENERIC,
                              children: S.buttonText,
                          })
                        : null,
                ],
            });
        case eg.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.LAUNCH_GAME_FAILURE,
                    }),
                    S.message,
                    null != S.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: S.callback,
                              noticeType: eg.kVF.LAUNCH_GAME_FAILURE,
                              children: S.buttonText,
                          })
                        : null,
                ],
            });
        case eg.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            m.Z.clearRemoteDisconnectVoiceChannelId(), eD();
                        },
                        noticeType: eg.kVF.VOICE_DISABLED,
                    }),
                    eO.intl.string(eO.t.bOQ3jY),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != ei.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: eg.kVF.VOICE_DISABLED,
                        children: eO.intl.string(eO.t.vD60Pj),
                    }),
                ],
            });
        case eg.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            m.Z.clearLastSessionVoiceChannelId(), eD();
                        },
                        noticeType: eg.kVF.VOICE_CONNECTED_LAST_SESSION,
                    }),
                    eO.intl.string(eO.t.jY2lUF),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getLastSessionVoiceChannelId();
                            null != e && null != ei.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: eg.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: eO.intl.string(eO.t.vD60Pj),
                    }),
                ],
            });
        case eg.kVF.SPOTIFY_AUTO_PAUSED:
            let eB = T.Z.get(eg.ABu.SPOTIFY);
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.SPOTIFY_AUTO_PAUSED,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: ev.platformIcon,
                        src: eB.icon.whiteSVG,
                    }),
                    eO.intl.string(eO.t["D8Cp7+"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => I.Z.open(eg.oAB.VOICE),
                        noticeType: eg.kVF.SPOTIFY_AUTO_PAUSED,
                        children: eO.intl.string(eO.t.NiTd0d),
                    }),
                    (0, r.jsx)(c.eee, {
                        className: ev.textLinkSmall,
                        href: e_.Z.getArticleURL(eg.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: eO.intl.string(eO.t.CiqAIS),
                    }),
                ],
            });
        case eg.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    eO.intl.string(eO.t["f+Zaoq"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (ef && null != h ? (0, F.hk)(h) : C.j()),
                        children: eO.intl.string(eO.t.fiNVio),
                    }),
                ],
            });
        case eg.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    eO.intl.string(eO.t["3sWbf3"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.UNVERIFIED_ACCOUNT,
                        onClick: () => {
                            f.Z.verifyResend(),
                                u.Z.show({
                                    title: eO.intl.string(eO.t.LykQYm),
                                    body: eO.intl.format(eO.t.azKEPz, { email: null == o ? void 0 : o.email }),
                                    secondaryConfirmText: eO.intl.string(eO.t.oP5zGB),
                                    onConfirmSecondary: C.j,
                                });
                        },
                        children: eO.intl.string(eO.t.WnX4Jy),
                    }),
                ],
            });
        case eg.kVF.SCHEDULED_MAINTENANCE:
            if (null == S.metadata) return null;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => E.Z.ackScheduledMaintenance(),
                        noticeType: eg.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    eO.intl.format(eO.t.yb96S0, S.metadata),
                    (0, r.jsx)(c.u3T, {
                        href: "".concat(eg.yXt.STATUS, "/incidents/").concat(S.metadata.id),
                        children: eO.intl.string(eO.t.hvVgAQ),
                    }),
                ],
            });
        case eg.kVF.NO_INPUT_DETECTED:
            if (!eo.Z.supports(ey.AN.LOOPBACK)) return (0, r.jsx)(eR, {});
            return (0, r.jsx)(eP, {});
        case eg.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eC, {});
        case eg.kVF.HARDWARE_MUTE:
            if (null == S.metadata) return null;
            let { vendor: eZ, model: eF } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    eO.intl.format(eO.t.qoDex8, {
                        vendorName: eZ.name,
                        modelName: eF.name,
                    }),
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            d.Z.setEnableHardwareMuteNotice(!1), eD();
                        },
                    }),
                    (0, r.jsx)(c.u3T, {
                        href: eF.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: eO.intl.string(eO.t["Yl/Rio"]),
                    }),
                ],
            });
        case eg.kVF.STREAMER_MODE:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.STREAMER_MODE,
                    }),
                    eO.intl.string(eO.t.iEgBXl),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => y.Z.setEnabled(!1),
                        noticeType: eg.kVF.STREAMER_MODE,
                        children: eO.intl.string(eO.t.R9GHyc),
                    }),
                ],
            });
        case eg.kVF.H264_DISABLED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            eD();
                        },
                    }),
                    eO.intl.string(eO.t.HcErZW),
                    (0, r.jsx)(c.EyT, {
                        onClick: () => {
                            (0, p.jN)(eg.S9g.USER_SETTINGS), I.Z.setSection(eg.oAB.VOICE);
                        },
                        children: eO.intl.string(eO.t["51hI/v"]),
                    }),
                ],
            });
        case eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == S.metadata) return null;
            let { skuId: eV, applicationId: eH } = S.metadata,
                eY = ec.Z.get(eV),
                eW = N.Z.getApplication(eH);
            if (null == eY || null == eW) return null;
            let eK = { page: eg.ZY5.IN_APP };
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => _.Z(eY.id),
                        noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: ev.premiumIcon,
                    }),
                    eO.intl.format(eO.t["g3MU//"], {
                        applicationName: eW.name,
                        skuName: eY.name,
                    }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, ep.S)({
                                applicationId: eW.id,
                                skuId: eY.id,
                                openPremiumPaymentModal: () => {
                                    (0, q.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eE.Si.TIER_2,
                                        analyticsLocations: M,
                                        analyticsObject: eK,
                                    });
                                },
                                analyticsLocations: M,
                                analyticsLocationObject: eK,
                                context: __OVERLAY__ ? eg.IlC.OVERLAY : eg.IlC.APP,
                            }).then(() => _.Z(eY.id)),
                        children: eO.intl.string(eO.t.KEwPY2),
                    }),
                ],
            });
        case eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == S.metadata) return null;
            let { skuId: e, applicationId: t } = S.metadata,
                n = ec.Z.get(e),
                i = N.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: ev.premiumIcon,
                    }),
                    eO.intl.format(eO.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(c.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => eD(),
                            to: {
                                pathname: eg.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: eO.intl.string(eO.t.hvVgAQ),
                        }),
                    }),
                ],
            });
        }
        case eg.kVF.SURVEY: {
            let e = S.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: o } = e;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.SURVEY,
                        onClick: () => {
                            (0, O.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.SURVEY,
                        onClick: () => {
                            window.open(o, "_blank"), (0, O.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case eg.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    eO.intl.string(eO.t.ugxmk5),
                    (0, r.jsx)(c.u3T, {
                        href: e_.Z.getArticleURL(eg.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        children: eO.intl.string(eO.t["6ik4Xl"]),
                    }),
                ],
            });
        case eg.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    eO.intl.string(eO.t.wVjKGh),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e("74023").then(n.bind(n, 431583));
                                return (t) => (0, r.jsx)(e, eT({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: eO.intl.string(eO.t["1WjMbG"]),
                    }),
                ],
            });
        case eg.kVF.DISPATCH_ERROR:
            if (null == S.metadata) return null;
            let { error: ez } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.DISPATCH_ERROR,
                    }),
                    null == ez ? void 0 : ez.displayMessage,
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, eT({}, t));
                            }),
                        children: eO.intl.string(eO.t.hvVgAQ),
                    }),
                ],
            });
        case eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == S.metadata) return null;
            let { progress: eq, total: eX, name: eQ } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(R.Z, {
                        justify: R.Z.Justify.CENTER,
                        children: [
                            null != eQ
                                ? eO.intl.formatToPlainString(eO.t["pHj+z8"], {
                                      name: "".concat(eQ),
                                      progress: eq,
                                      total: eX,
                                  })
                                : eO.intl.formatToPlainString(eO.t["lHZn+P"], {
                                      progress: eq,
                                      total: eX,
                                  }),
                            (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: ev.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case eg.kVF.APPLICATION_TEST_MODE:
            if (null == S.metadata) return null;
            if (null != eu.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(c.qXd, {
                    color: c.DM8.WARNING,
                    children: (0, r.jsxs)(R.Z, {
                        justify: R.Z.Justify.CENTER,
                        align: R.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: eO.intl.format(eO.t["1qxVe3"], {
                                    applicationName: S.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(c.RyX, {
                                onClick: v.mc,
                                noticeType: eg.kVF.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(c.qXd, {
                color: c.DM8.WARNING,
                children: (0, r.jsxs)(R.Z, {
                    justify: R.Z.Justify.CENTER,
                    align: R.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: eO.intl.format(eO.t.Fv5HrK, { applicationName: S.metadata.applicationName }),
                        }),
                        (0, r.jsx)(eh.Z, {
                            dropdownSize: eh.E.DropdownSizes.SMALL,
                            className: ev.testModeSKUSelector,
                            color: eh.E.Colors.WHITE,
                            look: eh.E.Looks.OUTLINED,
                            size: eh.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                b.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: eg.jXE.NOTIFICATION_BAR,
                                        object: eg.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: S.metadata.applicationId,
                            children: eO.intl.string(eO.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(c.RyX, {
                            onClick: v.mc,
                            noticeType: eg.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case eg.kVF.VIEWING_ROLES:
            return (0, r.jsx)(K.Z, {});
        case eg.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(c.qXd, {
                color:
                    eM === eE.p9.TIER_1
                        ? c.DM8.PREMIUM_TIER_1
                        : eM === eE.p9.TIER_0
                          ? c.DM8.PREMIUM_TIER_0
                          : c.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: ev.premiumIcon,
                    }),
                    eM === eE.p9.TIER_1
                        ? eO.intl.formatToPlainString(eO.t.fXv4ws, { daysLeft: S.metadata.daysLeft })
                        : eM === eE.p9.TIER_0
                          ? eO.intl.formatToPlainString(eO.t.ZOHZMj, { daysLeft: S.metadata.daysLeft })
                          : eO.intl.formatToPlainString(eO.t.outyHh, { daysLeft: S.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, c.ZDy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("8016"),
                                        n.e("17938"),
                                        n.e("84992"),
                                        n.e("72490"),
                                    ]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eA(eT({}, t), {
                                                daysLeft: S.metadata.daysLeft,
                                                premiumType: eM,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: S.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            eM === eE.p9.TIER_1
                                ? eO.intl.string(eO.t.BkbUPD)
                                : eM === eE.p9.TIER_0
                                  ? eO.intl.string(eO.t.Px978f)
                                  : eO.intl.string(eO.t.LW5tCA),
                    }),
                ],
            });
        case eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eJ, dismissUntil: e$ } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: k,
                        onClick: () => {
                            eD(e$);
                        },
                    }),
                    eO.intl.format(eO.t.zxU0Ki, { daysPastDue: eJ }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            eD(e$), I.Z.open(eg.oAB.SUBSCRIPTIONS);
                        },
                        children: eO.intl.string(eO.t.q8rxeX),
                    }),
                ],
            });
        case eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eO.intl.string(eO.t.LlZaoa),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(eg.oAB.SUBSCRIPTIONS);
                        },
                        children: eO.intl.string(eO.t["Zpd+Ym"]),
                    }),
                ],
            });
        case eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eO.intl.string(eO.t["30YfCg"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(eg.oAB.SUBSCRIPTIONS);
                        },
                        children: eO.intl.string(eO.t.U5pKWF),
                    }),
                ],
            });
        case eg.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    eM === eE.p9.TIER_1
                        ? eO.intl.formatToPlainString(eO.t.b6QUvb, { daysLeft: S.metadata.daysLeft })
                        : eM === eE.p9.TIER_0
                          ? eO.intl.formatToPlainString(eO.t["tURZ/P"], { daysLeft: S.metadata.daysLeft })
                          : eO.intl.formatToPlainString(eO.t.AyC74O, { daysLeft: S.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            eD(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(eg.oAB.SUBSCRIPTIONS);
                        },
                        children:
                            eM === eE.p9.TIER_1
                                ? eO.intl.string(eO.t.lboF5O)
                                : eM === eE.p9.TIER_0
                                  ? eO.intl.string(eO.t["4UPwOj"])
                                  : eO.intl.string(eO.t["P/VvGR"]),
                    }),
                ],
            });
        case eg.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(Y.h, {
                buttonText: null != (t = S.buttonText) ? t : eO.intl.string(eO.t["/g10LC"]),
                onGoBack: S.callback,
                onDismiss: () => eD(),
                showCloseButton: !0,
            });
        case eg.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
            let e = { page: eg.ZY5.IN_APP };
            return (0, r.jsx)(Z.Z, {
                guildId: h,
                analyticsLocations: M,
                analyticsLocation: e,
            });
        }
        case eg.kVF.QUARANTINED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    eO.intl.string(eO.t.DVFJYW),
                    (0, r.jsx)(c.u3T, {
                        href: eb.Z,
                        target: "_blank",
                        children: eO.intl.string(eO.t.kvHdFB),
                    }),
                    (0, r.jsx)(c.eee, {
                        href: e_.Z.getArticleURL(eg.BhN.QUARANTINE),
                        target: "_blank",
                        className: ev.quarantineLearnMoreLink,
                        children: eO.intl.string(eO.t.hvVgAQ),
                    }),
                ],
            });
        case eg.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    eO.intl.string(eO.t.Ugijzs),
                    (0, r.jsx)(c.u3T, {
                        href: "".concat(eg.yXt.STATUS),
                        children: eO.intl.string(eO.t.hvVgAQ),
                    }),
                    (0, r.jsx)(c.RyX, {
                        onClick: () => eD(),
                        noticeType: eg.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: e0, decisionId: e1 } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != h && (0, B.T9)(h), eD(e0);
                        },
                    }),
                    eO.intl.string(eO.t.B8ruyc),
                    (0, r.jsx)(c.EyT, {
                        onClick: () => {
                            null != h &&
                                (0, B.UE)(h, e1, () => {
                                    eD(e0), (0, B.T9)(h);
                                });
                        },
                        children: eO.intl.string(eO.t.oX14Eh),
                    }),
                    null != h
                        ? (0, r.jsx)(c.EyT, {
                              onClick: () => W.Z.open(h, eg.pNK.GUILD_AUTOMOD, void 0, eg.KsC.AUTOMOD_MENTION_SPAM),
                              children: eO.intl.string(eO.t["1R7QIy"]),
                          })
                        : null,
                ],
            });
        case eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.BRAND,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            ee.hZ(), eD();
                        },
                    }),
                    eO.intl.string(eO.t.I1nKfH),
                    (0, r.jsx)(c.NoS, {
                        noticeType: eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e("52432").then(n.bind(n, 349994));
                                return (t) => (0, r.jsx)(e, eT({}, t));
                            }),
                                ee.hZ(),
                                eD();
                        },
                        children: eO.intl.string(eO.t.l5xYnJ),
                    }),
                ],
            });
        case eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let e2 = a()().add(5, "days").toDate();
            return (0, r.jsx)(J.Z, {
                dismissCurrentNotice: () => {
                    (0, P.Q3)(ed.m9[eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eD(e2);
                },
                subscriptionTier: eE.Si.TIER_2,
            });
        case eg.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let e3 = a()().add(5, "days").toDate();
            return (0, r.jsx)(Q.Z, {
                dismissCurrentNotice: () => {
                    eD(e3);
                },
                subscriptionTier: eE.Si.TIER_2,
            });
        case eg.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: eg.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = S.metadata) ? void 0 : e.streamKey) != null &&
                                (0, $.nE)(S.metadata.streamKey);
                        },
                    }),
                    eO.intl.string(eO.t.rOx44u),
                ],
            });
        case eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.BRAND,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            var e;
                            eD(null == (e = S.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    eO.intl.string(eO.t["0klLS0"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            var e;
                            (0, en.ZZ)(), eD(null == (e = S.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: eO.intl.string(eO.t.e4y2VF),
                    }),
                ],
            });
        case eg.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(et.Z, {});
        default:
            return null;
    }
});
function eM() {
    let { analyticsLocations: e } = (0, A.ZP)(S.Z.NOTICE);
    return (0, r.jsx)(A.Gt, {
        value: e,
        children: (0, r.jsx)(ex, {}),
    });
}
