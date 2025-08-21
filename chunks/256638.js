n.d(t, {
    Z: () => eL,
    c: () => ew,
});
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(799899),
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
    C = n(812206),
    N = n(391650),
    R = n(600164),
    P = n(266454),
    w = n(749277),
    D = n(196068),
    x = n(132144),
    L = n(131130),
    j = n(458725),
    M = n(492435),
    k = n(353926),
    U = n(506357),
    G = n(36459),
    B = n(236069),
    Z = n(305325),
    V = n(281956),
    F = n(574650),
    H = n(665302),
    Y = n(434404),
    W = n(918658),
    K = n(859428),
    z = n(963249),
    q = n(96320),
    X = n(535278),
    Q = n(246965),
    J = n(272008),
    $ = n(523255),
    ee = n(101879),
    et = n(496729),
    en = n(852923),
    er = n(592125),
    ei = n(131951),
    ea = n(19780),
    eo = n(914010),
    es = n(594174),
    el = n(55563),
    ec = n(695103),
    eu = n(933429),
    ed = n(626135),
    ef = n(63063),
    e_ = n(72924),
    ep = n(69499),
    eh = n(912193),
    em = n(981631),
    eg = n(474936),
    eE = n(610674),
    eb = n(65154),
    ey = n(388032),
    eO = n(50953);
function ev(e, t, n) {
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
function eI(e) {
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
                ev(e, t, n[t]);
            });
    }
    return e;
}
function eT(e, t) {
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
function eS(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eT(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eA = (e) => {
        var t;
        let { error: n, allowClick: i = !1 } = e,
            a = null == (t = (0, j.hp)(n)) ? void 0 : t.errorCode,
            o = ey.intl.formatToPlainString(ey.t["ejOT9/"], { errorCode: a }),
            s = (0, r.jsx)(c.Text, {
                variant: "text-sm/bold",
                color: "currentColor",
                tag: "span",
                className: eO.errorCodeNoticeText,
                selectable: !0,
                children: o,
            });
        return i
            ? (0, r.jsx)(c.P3F, {
                  tag: "span",
                  className: eO.errorCodeNoticeClickable,
                  onClick: () => i && open(ef.Z.getArticleURL(em.BhN.AV_ERROR_CODES)),
                  children: s,
              })
            : s;
    },
    eC = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ew();
                    },
                }),
                ey.intl.string(ey.t.o3zuY2),
                (0, r.jsx)(eA, { error: j.u.NO_INPUT_DEVICES }),
                (0, r.jsx)(c.u3T, {
                    href: ef.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: ey.intl.string(ey.t.RYKKo6),
                }),
            ],
        }),
    eN = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ew(), (0, eh.b)();
                    },
                }),
                ey.intl.string(ey.t.nCO9bG),
                (0, r.jsx)(eA, { error: j.u.NO_AUDIO_INPUT_DETECTED }),
                (0, r.jsx)(c.u3T, {
                    href: ef.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: ey.intl.string(ey.t.RYKKo6),
                }),
            ],
        }),
    eR = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ew(), (0, eh.b)();
                    },
                }),
                ey.intl.string(ey.t.dNAJ19),
                (0, r.jsx)(eA, {
                    allowClick: !0,
                    error: j.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, p.jN)(em.S9g.USER_SETTINGS), I.Z.setSection(em.oAB.VOICE);
                    },
                    children: ey.intl.string(ey.t.I6YlBw),
                }),
            ],
        });
function eP(e, t) {
    let n = { notice_type: e };
    null != t && (n.guild_id = t), ed.default.track(em.rMx.APP_NOTICE_VIEWED, n);
}
function ew(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eD(e) {
    return null != e ? eu.m9[e] : null;
}
let ex = i.memo(function () {
    var e, t;
    let a = (0, l.e7)([es.default], () => es.default.getCurrentUser()),
        h = (0, l.e7)([eo.Z], () => eo.Z.getGuildId()),
        S = (0, l.e7)([eu.ZP], () => eu.ZP.getNotice()),
        { analyticsLocations: j } = (0, A.ZP)(),
        ed = null == S ? void 0 : S.type,
        eh = (0, V.J)(h);
    i.useEffect(() => {
        null != ed && eP(ed, h);
    }, [ed, h]),
        i.useEffect(() => {
            if (null != S && S.type === em.kVF.SURVEY && null != S.metadata) {
                let { metadata: e } = S,
                    t = k.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, M.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = S.metadata) ? void 0 : e.id) != null &&
                            (await (0, O.g8)(null == (t = S.metadata) ? void 0 : t.id));
                    })();
            }
        }, [S]);
    let ev = null != ed ? eu.zD[ed] : null,
        eT = null != ed ? eu.o[ed] : null,
        eA = null != ed ? eu.nA[ed] : null,
        ex = eD(ed);
    if (null == S) return null;
    let { useRecurringNotices: eL } = q.b.getCurrentConfig({ location: "AppNotice" });
    if (eL && null != ev && (ed === em.kVF.PREMIUM_TIER_2_TRIAL_ENDING || ed === em.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING))
        return (0, r.jsx)(x.W, {
            dismissibleContent: ev,
            noticeType: S.type,
        });
    if (null != eT)
        return (0, r.jsx)(L.q, {
            dismissibleContent: eT,
            noticeType: S.type,
        });
    if (null != eA) return (0, r.jsx)(D.c, { dismissibleContent: eA });
    if (null != ex)
        return (0, r.jsx)(w.A, {
            dismissibleContent: ex,
            noticeType: S.type,
        });
    let ej = null == (e = S.metadata) ? void 0 : e.premiumType;
    switch (S.type) {
        case em.kVF.LURKING_GUILD:
            return (0, r.jsx)(K.Z, {});
        case em.kVF.PENDING_MEMBER:
            return (0, r.jsx)(F.Z, {});
        case em.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)(en.Z, {});
        case em.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eM } = S.metadata;
            return (0, r.jsx)(U.Z, { onDismiss: () => ew(eM) });
        case em.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ek } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(ek),
                        noticeType: em.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    ey.intl.format(ey.t["08KQ1N"], { helpCenterLink: ef.Z.getArticleURL(em.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case em.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: eU } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(eU),
                        noticeType: em.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    ey.intl.format(ey.t["8Je+dX"], { helpCenterLink: ef.Z.getArticleURL(em.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case em.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eG } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(eG),
                        noticeType: em.kVF.MACOS_19_DEPRECATED_MESSAGE,
                    }),
                    ey.intl.format(ey.t.q8VPLi, { helpCenterLink: ef.Z.getArticleURL(em.BhN.MACOS_19_DEPRECATE) }),
                ],
            });
        case em.kVF.GENERIC:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.GENERIC,
                    }),
                    S.message,
                    null != S.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: S.callback,
                              noticeType: em.kVF.GENERIC,
                              children: S.buttonText,
                          })
                        : null,
                ],
            });
        case em.kVF.LAUNCH_GAME_FAILURE:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                    }),
                    S.message,
                    null != S.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: S.callback,
                              noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                              children: S.buttonText,
                          })
                        : null,
                ],
            });
        case em.kVF.VOICE_DISABLED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            m.Z.clearRemoteDisconnectVoiceChannelId(), ew();
                        },
                        noticeType: em.kVF.VOICE_DISABLED,
                    }),
                    ey.intl.string(ey.t.bOQ3jY),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != er.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: em.kVF.VOICE_DISABLED,
                        children: ey.intl.string(ey.t.vD60Pj),
                    }),
                ],
            });
        case em.kVF.VOICE_CONNECTED_LAST_SESSION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            m.Z.clearLastSessionVoiceChannelId(), ew();
                        },
                        noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                    }),
                    ey.intl.string(ey.t.jY2lUF),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getLastSessionVoiceChannelId();
                            null != e && null != er.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                        },
                        noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: ey.intl.string(ey.t.vD60Pj),
                    }),
                ],
            });
        case em.kVF.SPOTIFY_AUTO_PAUSED:
            let eB = T.Z.get(em.ABu.SPOTIFY);
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                    }),
                    (0, r.jsx)("img", {
                        alt: "",
                        className: eO.platformIcon,
                        src: eB.icon.whiteSVG,
                    }),
                    ey.intl.string(ey.t["D8Cp7+"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => I.Z.open(em.oAB.VOICE),
                        noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                        children: ey.intl.string(ey.t.NiTd0d),
                    }),
                    (0, r.jsx)(c.eee, {
                        className: eO.textLinkSmall,
                        href: ef.Z.getArticleURL(em.BhN.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: ey.intl.string(ey.t.CiqAIS),
                    }),
                ],
            });
        case em.kVF.UNCLAIMED_ACCOUNT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    ey.intl.string(ey.t["f+Zaoq"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.UNCLAIMED_ACCOUNT,
                        onClick: () => (eh && null != h ? (0, Z.hk)(h) : N.j()),
                        children: ey.intl.string(ey.t.fiNVio),
                    }),
                ],
            });
        case em.kVF.UNVERIFIED_ACCOUNT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    ey.intl.string(ey.t["3sWbf3"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.UNVERIFIED_ACCOUNT,
                        onClick: () => {
                            f.Z.verifyResend(),
                                u.Z.show({
                                    title: ey.intl.string(ey.t.LykQYm),
                                    body: ey.intl.format(ey.t.azKEPz, { email: null == a ? void 0 : a.email }),
                                    secondaryConfirmText: ey.intl.string(ey.t.oP5zGB),
                                    onConfirmSecondary: N.j,
                                });
                        },
                        children: ey.intl.string(ey.t.WnX4Jy),
                    }),
                ],
            });
        case em.kVF.SCHEDULED_MAINTENANCE:
            if (null == S.metadata) return null;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => E.Z.ackScheduledMaintenance(),
                        noticeType: em.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    ey.intl.format(ey.t.yb96S0, S.metadata),
                    (0, r.jsx)(c.u3T, {
                        href: "".concat(em.yXt.STATUS, "/incidents/").concat(S.metadata.id),
                        children: ey.intl.string(ey.t.hvVgAQ),
                    }),
                ],
            });
        case em.kVF.NO_INPUT_DETECTED:
            if (!ei.Z.supports(eb.AN.LOOPBACK)) return (0, r.jsx)(eN, {});
            return (0, r.jsx)(eR, {});
        case em.kVF.NO_INPUT_DEVICES_DETECTED:
            return (0, r.jsx)(eC, {});
        case em.kVF.HARDWARE_MUTE:
            if (null == S.metadata) return null;
            let { vendor: eZ, model: eV } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    ey.intl.format(ey.t.qoDex8, {
                        vendorName: eZ.name,
                        modelName: eV.name,
                    }),
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            d.Z.setEnableHardwareMuteNotice(!1), ew();
                        },
                    }),
                    (0, r.jsx)(c.u3T, {
                        href: eV.url,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: ey.intl.string(ey.t["Yl/Rio"]),
                    }),
                ],
            });
        case em.kVF.STREAMER_MODE:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.STREAMER_MODE,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.STREAMER_MODE,
                    }),
                    ey.intl.string(ey.t.iEgBXl),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => y.Z.setEnabled(!1),
                        noticeType: em.kVF.STREAMER_MODE,
                        children: ey.intl.string(ey.t.R9GHyc),
                    }),
                ],
            });
        case em.kVF.H264_DISABLED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            ew();
                        },
                    }),
                    ey.intl.string(ey.t.HcErZW),
                    (0, r.jsx)(c.EyT, {
                        onClick: () => {
                            (0, p.jN)(em.S9g.USER_SETTINGS), I.Z.setSection(em.oAB.VOICE);
                        },
                        children: ey.intl.string(ey.t["51hI/v"]),
                    }),
                ],
            });
        case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == S.metadata) return null;
            let { skuId: eF, applicationId: eH } = S.metadata,
                eY = el.Z.get(eF),
                eW = C.Z.getApplication(eH);
            if (null == eY || null == eW) return null;
            let eK = { page: em.ZY5.IN_APP };
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => _.Z(eY.id),
                        noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eO.premiumIcon,
                    }),
                    ey.intl.format(ey.t["g3MU//"], {
                        applicationName: eW.name,
                        skuName: eY.name,
                    }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, e_.S)({
                                applicationId: eW.id,
                                skuId: eY.id,
                                openPremiumPaymentModal: () => {
                                    (0, z.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eg.Si.TIER_2,
                                        analyticsLocations: j,
                                        analyticsObject: eK,
                                    });
                                },
                                analyticsLocations: j,
                                analyticsLocationObject: eK,
                                context: __OVERLAY__ ? em.IlC.OVERLAY : em.IlC.APP,
                            }).then(() => _.Z(eY.id)),
                        children: ey.intl.string(ey.t.KEwPY2),
                    }),
                ],
            });
        case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == S.metadata) return null;
            let { skuId: e, applicationId: t } = S.metadata,
                n = el.Z.get(e),
                i = C.Z.getApplication(t);
            if (null == n || null == i) return null;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eO.premiumIcon,
                    }),
                    ey.intl.format(ey.t.LquIKC, {
                        applicationName: i.name,
                        skuName: n.name,
                    }),
                    (0, r.jsx)(c.EyT, {
                        children: (0, r.jsx)(s.rU, {
                            onClick: () => ew(),
                            to: {
                                pathname: em.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 },
                            },
                            children: ey.intl.string(ey.t.hvVgAQ),
                        }),
                    }),
                ],
            });
        }
        case em.kVF.SURVEY: {
            let e = S.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a } = e;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.SURVEY,
                        onClick: () => {
                            (0, O.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.SURVEY,
                        onClick: () => {
                            window.open(a, "_blank"), (0, O.hZ)(t, !1);
                        },
                        children: i,
                    }),
                ],
            });
        }
        case em.kVF.CORRUPT_INSTALLATION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    ey.intl.string(ey.t.ugxmk5),
                    (0, r.jsx)(c.u3T, {
                        href: ef.Z.getArticleURL(em.BhN.CORRUPT_INSTALLATION),
                        target: "_blank",
                        children: ey.intl.string(ey.t["6ik4Xl"]),
                    }),
                ],
            });
        case em.kVF.VIDEO_UNSUPPORTED_BROWSER:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    }),
                    ey.intl.string(ey.t.wVjKGh),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                    n.bind(n, 431583),
                                );
                                return (t) => (0, r.jsx)(e, eI({ source: "Video unsupported browser" }, t));
                            });
                        },
                        children: ey.intl.string(ey.t["1WjMbG"]),
                    }),
                ],
            });
        case em.kVF.DISPATCH_ERROR:
            if (null == S.metadata) return null;
            let { error: ez } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.DISPATCH_ERROR,
                    }),
                    null == ez ? void 0 : ez.displayMessage,
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.DISPATCH_ERROR,
                        onClick: () =>
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                return (t) => (0, r.jsx)(e, eI({}, t));
                            }),
                        children: ey.intl.string(ey.t.hvVgAQ),
                    }),
                ],
            });
        case em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
            if (null == S.metadata) return null;
            let { progress: eq, total: eX, name: eQ } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(R.Z, {
                        justify: R.Z.Justify.CENTER,
                        children: [
                            null != eQ
                                ? ey.intl.formatToPlainString(ey.t["pHj+z8"], {
                                      name: "".concat(eQ),
                                      progress: eq,
                                      total: eX,
                                  })
                                : ey.intl.formatToPlainString(ey.t["lHZn+P"], {
                                      progress: eq,
                                      total: eX,
                                  }),
                            (0, r.jsx)(c.$jN, {
                                type: c.$jN.Type.PULSING_ELLIPSIS,
                                className: eO.ellipsis,
                            }),
                        ],
                    }),
                ],
            });
        case em.kVF.APPLICATION_TEST_MODE:
            if (null == S.metadata) return null;
            if (null != ec.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(c.qXd, {
                    color: c.DM8.WARNING,
                    children: (0, r.jsxs)(R.Z, {
                        justify: R.Z.Justify.CENTER,
                        align: R.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: ey.intl.format(ey.t["1qxVe3"], {
                                    applicationName: S.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(c.RyX, {
                                onClick: v.mc,
                                noticeType: em.kVF.APPLICATION_TEST_MODE,
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
                            children: ey.intl.format(ey.t.Fv5HrK, { applicationName: S.metadata.applicationName }),
                        }),
                        (0, r.jsx)(ep.Z, {
                            dropdownSize: ep.E.DropdownSizes.SMALL,
                            className: eO.testModeSKUSelector,
                            color: ep.E.Colors.WHITE,
                            look: ep.E.Looks.OUTLINED,
                            size: ep.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                b.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: em.jXE.NOTIFICATION_BAR,
                                        object: em.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: S.metadata.applicationId,
                            children: ey.intl.string(ey.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(c.RyX, {
                            onClick: v.mc,
                            noticeType: em.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case em.kVF.VIEWING_ROLES:
            return (0, r.jsx)(W.Z, {});
        case em.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(c.qXd, {
                color:
                    ej === eg.p9.TIER_1
                        ? c.DM8.PREMIUM_TIER_1
                        : ej === eg.p9.TIER_0
                          ? c.DM8.PREMIUM_TIER_0
                          : c.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eO.premiumIcon,
                    }),
                    ej === eg.p9.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.fXv4ws, { daysLeft: S.metadata.daysLeft })
                        : ej === eg.p9.TIER_0
                          ? ey.intl.formatToPlainString(ey.t.ZOHZMj, { daysLeft: S.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: S.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, c.ZDy)(async () => {
                                    let { default: e } = await Promise.all([n.e("84992"), n.e("56158")]).then(
                                        n.bind(n, 561623),
                                    );
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eS(eI({}, t), {
                                                daysLeft: S.metadata.daysLeft,
                                                premiumType: ej,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: S.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            ej === eg.p9.TIER_1
                                ? ey.intl.string(ey.t.BkbUPD)
                                : ej === eg.p9.TIER_0
                                  ? ey.intl.string(ey.t.Px978f)
                                  : ey.intl.string(ey.t.LW5tCA),
                    }),
                ],
            });
        case em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eJ, dismissUntil: e$ } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: ed,
                        onClick: () => {
                            ew(e$);
                        },
                    }),
                    ey.intl.format(ey.t.zxU0Ki, { daysPastDue: eJ }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ew(e$), I.Z.open(em.oAB.SUBSCRIPTIONS);
                        },
                        children: ey.intl.string(ey.t.q8rxeX),
                    }),
                ],
            });
        case em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ey.intl.string(ey.t.LlZaoa),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(em.oAB.SUBSCRIPTIONS);
                        },
                        children: ey.intl.string(ey.t["Zpd+Ym"]),
                    }),
                ],
            });
        case em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ey.intl.string(ey.t["30YfCg"]),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(em.oAB.SUBSCRIPTIONS);
                        },
                        children: ey.intl.string(ey.t.U5pKWF),
                    }),
                ],
            });
        case em.kVF.PREMIUM_MISSING_PAYMENT:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ej === eg.p9.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.b6QUvb, { daysLeft: S.metadata.daysLeft })
                        : ej === eg.p9.TIER_0
                          ? ey.intl.formatToPlainString(ey.t["tURZ/P"], { daysLeft: S.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.AyC74O, { daysLeft: S.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = S.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                I.Z.open(em.oAB.SUBSCRIPTIONS);
                        },
                        children:
                            ej === eg.p9.TIER_1
                                ? ey.intl.string(ey.t.lboF5O)
                                : ej === eg.p9.TIER_0
                                  ? ey.intl.string(ey.t["4UPwOj"])
                                  : ey.intl.string(ey.t["P/VvGR"]),
                    }),
                ],
            });
        case em.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(H.h, {
                buttonText: null != (t = S.buttonText) ? t : ey.intl.string(ey.t["/g10LC"]),
                onGoBack: S.callback,
                onDismiss: () => ew(),
                showCloseButton: !0,
            });
        case em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
            let e = { page: em.ZY5.IN_APP };
            return (0, r.jsx)(B.Z, {
                guildId: h,
                analyticsLocations: j,
                analyticsLocation: e,
            });
        }
        case em.kVF.QUARANTINED:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    ey.intl.string(ey.t.DVFJYW),
                    (0, r.jsx)(c.u3T, {
                        href: eE.Z,
                        target: "_blank",
                        children: ey.intl.string(ey.t.kvHdFB),
                    }),
                    (0, r.jsx)(c.eee, {
                        href: ef.Z.getArticleURL(em.BhN.QUARANTINE),
                        target: "_blank",
                        className: eO.quarantineLearnMoreLink,
                        children: ey.intl.string(ey.t.hvVgAQ),
                    }),
                ],
            });
        case em.kVF.BLOCKED_BY_PROXY:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    ey.intl.string(ey.t.Ugijzs),
                    (0, r.jsx)(c.u3T, {
                        href: "".concat(em.yXt.STATUS),
                        children: ey.intl.string(ey.t.hvVgAQ),
                    }),
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.BLOCKED_BY_PROXY,
                    }),
                ],
            });
        case em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
            let { dismissUntil: e0, decisionId: e1 } = S.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != h && (0, G.T9)(h), ew(e0);
                        },
                    }),
                    ey.intl.string(ey.t.B8ruyc),
                    (0, r.jsx)(c.EyT, {
                        onClick: () => {
                            null != h &&
                                (0, G.UE)(h, e1, () => {
                                    ew(e0), (0, G.T9)(h);
                                });
                        },
                        children: ey.intl.string(ey.t.oX14Eh),
                    }),
                    null != h
                        ? (0, r.jsx)(c.EyT, {
                              onClick: () => Y.Z.open(h, em.pNK.GUILD_AUTOMOD, void 0, em.KsC.AUTOMOD_MENTION_SPAM),
                              children: ey.intl.string(ey.t["1R7QIy"]),
                          })
                        : null,
                ],
            });
        case em.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.BRAND,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            $.hZ(), ew();
                        },
                    }),
                    ey.intl.string(ey.t.I1nKfH),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                    n.bind(n, 349994),
                                );
                                return (t) => (0, r.jsx)(e, eI({}, t));
                            }),
                                $.hZ(),
                                ew();
                        },
                        children: ey.intl.string(ey.t.l5xYnJ),
                    }),
                ],
            });
        case em.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let e2 = o()().add(5, "days").toDate();
            return (0, r.jsx)(Q.Z, {
                dismissCurrentNotice: () => {
                    (0, P.Q3)(eu.m9[em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ew(e2);
                },
                subscriptionTier: eg.Si.TIER_2,
            });
        case em.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let e3 = o()().add(5, "days").toDate();
            return (0, r.jsx)(X.Z, {
                dismissCurrentNotice: () => {
                    ew(e3);
                },
                subscriptionTier: eg.Si.TIER_2,
            });
        case em.kVF.QUESTS_PROGRESS_INTERRUPTION:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                            var e;
                            (null == (e = S.metadata) ? void 0 : e.streamKey) != null &&
                                (0, J.nE)(S.metadata.streamKey);
                        },
                    }),
                    ey.intl.string(ey.t.rOx44u),
                ],
            });
        case em.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.BRAND,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            var e;
                            ew(null == (e = S.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ey.intl.string(ey.t["0klLS0"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            var e;
                            (0, et.ZZ)(), ew(null == (e = S.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ey.intl.string(ey.t.e4y2VF),
                    }),
                ],
            });
        case em.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(ee.Z, {});
        default:
            return null;
    }
});
function eL() {
    let { analyticsLocations: e } = (0, A.ZP)(S.Z.NOTICE);
    return (0, r.jsx)(A.Gt, {
        value: e,
        children: (0, r.jsx)(ex, {}),
    });
}
