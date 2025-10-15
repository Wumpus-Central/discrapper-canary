n.d(t, {
    Z: () => ex,
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
    p = n(254854),
    h = n(195500),
    m = n(287734),
    g = n(205355),
    E = n(558381),
    b = n(223245),
    y = n(491428),
    O = n(401430),
    v = n(726542),
    I = n(100527),
    T = n(906732),
    S = n(812206),
    A = n(391650),
    C = n(600164),
    N = n(266454),
    R = n(749277),
    P = n(196068),
    w = n(132144),
    D = n(131130),
    L = n(458725),
    x = n(492435),
    M = n(353926),
    j = n(506357),
    k = n(36459),
    U = n(236069),
    G = n(305325),
    B = n(281956),
    Z = n(574650),
    F = n(665302),
    V = n(434404),
    H = n(918658),
    Y = n(859428),
    W = n(963249),
    K = n(535278),
    z = n(246965),
    q = n(272008),
    X = n(523255),
    Q = n(101879),
    J = n(496729),
    $ = n(852923),
    ee = n(957030),
    et = n(313789),
    en = n(518596),
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
            a = null == (t = (0, L.hp)(n)) ? void 0 : t.errorCode,
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
                (0, r.jsx)(eA, { error: L.u.NO_INPUT_DEVICES }),
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
                (0, r.jsx)(eA, { error: L.u.NO_AUDIO_INPUT_DETECTED }),
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
                    error: L.u.NO_AUDIO_INPUT_DETECTED,
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, en.openUserSettings)(et.n.VOICE_AND_VIDEO_PANEL, { section: em.oAB.VOICE });
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
    p.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
function eD(e) {
    return null != e ? eu.m9[e] : null;
}
let eL = i.memo(function () {
    var e, t;
    let a = (0, l.e7)([es.default], () => es.default.getCurrentUser()),
        p = (0, l.e7)([eo.Z], () => eo.Z.getGuildId()),
        I = (0, l.e7)([eu.ZP], () => eu.ZP.getNotice()),
        { analyticsLocations: L } = (0, T.ZP)(),
        ed = null == I ? void 0 : I.type,
        eh = (0, B.J)(p);
    i.useEffect(() => {
        null != ed && eP(ed, p);
    }, [ed, p]),
        i.useEffect(() => {
            if (null != I && I.type === em.kVF.SURVEY && null != I.metadata) {
                let { metadata: e } = I,
                    t = M.Z.getUserExperimentDescriptor(e.id);
                null != t && (0, x.W9)(e.id, t),
                    (async () => {
                        var e, t;
                        (null == (e = I.metadata) ? void 0 : e.id) != null &&
                            (await (0, y.g8)(null == (t = I.metadata) ? void 0 : t.id));
                    })();
            }
        }, [I]);
    let ev = null != ed ? eu.zD[ed] : null,
        eT = null != ed ? eu.o[ed] : null,
        eA = null != ed ? eu.nA[ed] : null,
        eL = eD(ed);
    if (null == I) return null;
    if (null != ev)
        return (0, r.jsx)(w.W, {
            dismissibleContent: ev,
            noticeType: I.type,
        });
    if (null != eT)
        return (0, r.jsx)(D.q, {
            dismissibleContent: eT,
            noticeType: I.type,
        });
    if (null != eA) return (0, r.jsx)(P.c, { dismissibleContent: eA });
    if (null != eL)
        return (0, r.jsx)(R.A, {
            dismissibleContent: eL,
            noticeType: I.type,
        });
    let ex = null == (e = I.metadata) ? void 0 : e.premiumType;
    switch (I.type) {
        case em.kVF.LURKING_GUILD:
            return (0, r.jsx)(Y.Z, {});
        case em.kVF.PENDING_MEMBER:
            return (0, r.jsx)(Z.Z, {});
        case em.kVF.INVITED_TO_SPEAK:
            return (0, r.jsx)($.Z, {});
        case em.kVF.GUILD_RAID_NOTIFICATION:
            let { dismissUntil: eM } = I.metadata;
            return (0, r.jsx)(j.Z, { onDismiss: () => ew(eM) });
        case em.kVF.WIN32_DEPRECATED_MESSAGE:
            let { dismissUntil: ej } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(ej),
                        noticeType: em.kVF.WIN32_DEPRECATED_MESSAGE,
                    }),
                    ey.intl.format(ey.t["08KQ1N"], { helpCenterLink: ef.Z.getArticleURL(em.BhN.WIN32_DEPRECATE) }),
                ],
            });
        case em.kVF.WIN7_8_DEPRECATED_MESSAGE:
            let { dismissUntil: ek } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(ek),
                        noticeType: em.kVF.WIN7_8_DEPRECATED_MESSAGE,
                    }),
                    ey.intl.format(ey.t["8Je+dX"], { helpCenterLink: ef.Z.getArticleURL(em.BhN.WIN7_8_DEPRECATE) }),
                ],
            });
        case em.kVF.MACOS_19_DEPRECATED_MESSAGE:
            let { dismissUntil: eU } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(eU),
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
                    I.message,
                    null != I.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: I.callback,
                              noticeType: em.kVF.GENERIC,
                              children: I.buttonText,
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
                    I.message,
                    null != I.buttonText
                        ? (0, r.jsx)(c.NoS, {
                              onClick: I.callback,
                              noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                              children: I.buttonText,
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
                            h.Z.clearRemoteDisconnectVoiceChannelId(), ew();
                        },
                        noticeType: em.kVF.VOICE_DISABLED,
                    }),
                    ey.intl.string(ey.t.bOQ3jY),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getRemoteDisconnectVoiceChannelId();
                            null != e && null != er.Z.getChannel(e) && m.default.selectVoiceChannel(e);
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
                            h.Z.clearLastSessionVoiceChannelId(), ew();
                        },
                        noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                    }),
                    ey.intl.string(ey.t.jY2lUF),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            let e = ea.Z.getLastSessionVoiceChannelId();
                            null != e && null != er.Z.getChannel(e) && m.default.selectVoiceChannel(e);
                        },
                        noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                        children: ey.intl.string(ey.t.vD60Pj),
                    }),
                ],
            });
        case em.kVF.SPOTIFY_AUTO_PAUSED:
            let eG = v.Z.get(em.ABu.SPOTIFY);
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
                        src: eG.icon.whiteSVG,
                    }),
                    ey.intl.string(ey.t["D8Cp7+"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => (0, en.openUserSettings)(et.n.VOICE_AND_VIDEO_PANEL, { section: em.oAB.VOICE }),
                        noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                        children: ey.intl.string(ey.t.NiTd0d),
                    }),
                    (0, r.jsx)(c.Anchor, {
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
                        onClick: () => (eh && null != p ? (0, G.hk)(p) : A.j()),
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
                                    onConfirmSecondary: A.j,
                                });
                        },
                        children: ey.intl.string(ey.t.WnX4Jy),
                    }),
                ],
            });
        case em.kVF.SCHEDULED_MAINTENANCE:
            if (null == I.metadata) return null;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => g.Z.ackScheduledMaintenance(),
                        noticeType: em.kVF.SCHEDULED_MAINTENANCE,
                    }),
                    ey.intl.format(ey.t.yb96S0, I.metadata),
                    (0, r.jsx)(c.u3T, {
                        href: "".concat(em.yXt.STATUS, "/incidents/").concat(I.metadata.id),
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
            if (null == I.metadata) return null;
            let { vendor: eB, model: eZ } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    ey.intl.format(ey.t.qoDex8, {
                        vendorName: eB.name,
                        modelName: eZ.name,
                    }),
                    (0, r.jsx)(c.RyX, {
                        onClick: () => {
                            d.Z.setEnableHardwareMuteNotice(!1), ew();
                        },
                    }),
                    (0, r.jsx)(c.u3T, {
                        href: eZ.url,
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
                        onClick: () => b.Z.setEnabled(!1),
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
                            (0, en.openUserSettings)(et.n.VOICE_AND_VIDEO_PANEL, { section: em.oAB.VOICE });
                        },
                        children: ey.intl.string(ey.t["51hI/v"]),
                    }),
                ],
            });
        case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
            if (null == I.metadata) return null;
            let { skuId: eF, applicationId: eV } = I.metadata,
                eH = el.Z.get(eF),
                eY = S.Z.getApplication(eV);
            if (null == eH || null == eY) return null;
            let eW = { page: em.ZY5.IN_APP };
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.PREMIUM_TIER_1,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => _.Z(eH.id),
                        noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    }),
                    (0, r.jsx)(c.SrA, {
                        size: "md",
                        color: "currentColor",
                        className: eO.premiumIcon,
                    }),
                    ey.intl.format(ey.t["g3MU//"], {
                        applicationName: eY.name,
                        skuName: eH.name,
                    }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: () =>
                            (0, e_.S)({
                                applicationId: eY.id,
                                skuId: eH.id,
                                openPremiumPaymentModal: () => {
                                    (0, W.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: eg.Si.TIER_2,
                                        analyticsLocations: L,
                                        analyticsObject: eW,
                                    });
                                },
                                analyticsLocations: L,
                                analyticsLocationObject: eW,
                                context: __OVERLAY__ ? em.IlC.OVERLAY : em.IlC.APP,
                            }).then(() => _.Z(eH.id)),
                        children: ey.intl.string(ey.t.KEwPY2),
                    }),
                ],
            });
        case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == I.metadata) return null;
            let { skuId: e, applicationId: t } = I.metadata,
                n = el.Z.get(e),
                i = S.Z.getApplication(t);
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
            let e = I.metadata;
            if (null == e) return null;
            let { key: t, prompt: n, cta: i, url: a } = e;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.CUSTOM,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.SURVEY,
                        onClick: () => {
                            (0, y.hZ)(t, !0);
                        },
                    }),
                    n,
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.SURVEY,
                        onClick: () => {
                            window.open(a, "_blank"), (0, y.hZ)(t, !1);
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
            if (null == I.metadata) return null;
            let { error: eK } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DANGER,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.DISPATCH_ERROR,
                    }),
                    null == eK ? void 0 : eK.displayMessage,
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
            if (null == I.metadata) return null;
            let { progress: ez, total: eq, name: eX } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.DEFAULT,
                children: [
                    (0, r.jsx)(c.RyX, {
                        onClick: () => ew(),
                        noticeType: em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                    }),
                    (0, r.jsxs)(C.Z, {
                        justify: C.Z.Justify.CENTER,
                        children: [
                            null != eX
                                ? ey.intl.formatToPlainString(ey.t["pHj+z8"], {
                                      name: "".concat(eX),
                                      progress: ez,
                                      total: eq,
                                  })
                                : ey.intl.formatToPlainString(ey.t["lHZn+P"], {
                                      progress: ez,
                                      total: eq,
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
            if (null == I.metadata) return null;
            if (null != ec.Z.testModeEmbeddedApplicationId)
                return (0, r.jsx)(c.qXd, {
                    color: c.DM8.WARNING,
                    children: (0, r.jsxs)(C.Z, {
                        justify: C.Z.Justify.CENTER,
                        align: C.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)("div", {
                                children: ey.intl.format(ey.t["1qxVe3"], {
                                    applicationName: I.metadata.applicationName,
                                }),
                            }),
                            (0, r.jsx)(c.RyX, {
                                onClick: O.mc,
                                noticeType: em.kVF.APPLICATION_TEST_MODE,
                            }),
                        ],
                    }),
                });
            return (0, r.jsx)(c.qXd, {
                color: c.DM8.WARNING,
                children: (0, r.jsxs)(C.Z, {
                    justify: C.Z.Justify.CENTER,
                    align: C.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", {
                            children: ey.intl.format(ey.t.Fv5HrK, { applicationName: I.metadata.applicationName }),
                        }),
                        (0, r.jsx)(ep.Z, {
                            dropdownSize: ep.E.DropdownSizes.SMALL,
                            className: eO.testModeSKUSelector,
                            color: ep.E.Colors.WHITE,
                            look: ep.E.Looks.OUTLINED,
                            size: ep.E.Sizes.MIN,
                            onSKUSelect: (e) =>
                                E.yt(e.id, {
                                    analyticsSource: {
                                        page: null,
                                        section: em.jXE.NOTIFICATION_BAR,
                                        object: em.qAy.NAVIGATION_LINK,
                                    },
                                }),
                            applicationId: I.metadata.applicationId,
                            children: ey.intl.string(ey.t.Q5ZgpK),
                        }),
                        (0, r.jsx)(c.RyX, {
                            onClick: O.mc,
                            noticeType: em.kVF.APPLICATION_TEST_MODE,
                        }),
                    ],
                }),
            });
        case em.kVF.VIEWING_ROLES:
            return (0, r.jsx)(H.Z, {});
        case em.kVF.PREMIUM_UNCANCEL:
            return (0, r.jsxs)(c.qXd, {
                color:
                    ex === eg.PremiumTypes.TIER_1
                        ? c.DM8.PREMIUM_TIER_1
                        : ex === eg.PremiumTypes.TIER_0
                          ? c.DM8.PREMIUM_TIER_0
                          : c.DM8.PREMIUM_TIER_2,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
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
                    ex === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.fXv4ws, { daysLeft: I.metadata.daysLeft })
                        : ex === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t.ZOHZMj, { daysLeft: I.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: I.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_UNCANCEL,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, c.ZDy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("17938"),
                                        n.e("84992"),
                                        n.e("11394"),
                                    ]).then(n.bind(n, 561623));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            eS(eI({}, t), {
                                                daysLeft: I.metadata.daysLeft,
                                                premiumType: ex,
                                                analyticsSource: "Nag Bar",
                                                premiumSubscription: I.metadata.premiumSubscription,
                                            }),
                                        );
                                });
                        },
                        children:
                            ex === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.BkbUPD)
                                : ex === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t.Px978f)
                                  : ey.intl.string(ey.t.LW5tCA),
                    }),
                ],
            });
        case em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
            let { daysPastDue: eQ, dismissUntil: eJ } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: ed,
                        onClick: () => {
                            ew(eJ);
                        },
                    }),
                    ey.intl.format(ey.t.zxU0Ki, { daysPastDue: eQ }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                            ew(eJ),
                                (0, en.openUserSettings)(et.n.SUBSCRIPTIONS_PANEL, { section: em.oAB.SUBSCRIPTIONS });
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
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
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
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, en.openUserSettings)(et.n.SUBSCRIPTIONS_PANEL, { section: em.oAB.SUBSCRIPTIONS });
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
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
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
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, en.openUserSettings)(et.n.SUBSCRIPTIONS_PANEL, { section: em.oAB.SUBSCRIPTIONS });
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
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            );
                        },
                    }),
                    ex === eg.PremiumTypes.TIER_1
                        ? ey.intl.formatToPlainString(ey.t.b6QUvb, { daysLeft: I.metadata.daysLeft })
                        : ex === eg.PremiumTypes.TIER_0
                          ? ey.intl.formatToPlainString(ey.t["tURZ/P"], { daysLeft: I.metadata.daysLeft })
                          : ey.intl.formatToPlainString(ey.t.AyC74O, { daysLeft: I.metadata.daysLeft }),
                    (0, r.jsx)(c.NoS, {
                        noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                            var e, t;
                            ew(
                                null == (t = I.metadata) || null == (e = t.premiumSubscription)
                                    ? void 0
                                    : e.currentPeriodEnd,
                            ),
                                (0, en.openUserSettings)(et.n.SUBSCRIPTIONS_PANEL, { section: em.oAB.SUBSCRIPTIONS });
                        },
                        children:
                            ex === eg.PremiumTypes.TIER_1
                                ? ey.intl.string(ey.t.lboF5O)
                                : ex === eg.PremiumTypes.TIER_0
                                  ? ey.intl.string(ey.t["4UPwOj"])
                                  : ey.intl.string(ey.t["P/VvGR"]),
                    }),
                ],
            });
        case em.kVF.BACK_TO_PREVIOUS_SCREEN:
            return (0, r.jsx)(F.h, {
                buttonText: null != (t = I.buttonText) ? t : ey.intl.string(ey.t["/g10LC"]),
                onGoBack: I.callback,
                onDismiss: () => ew(),
                showCloseButton: !0,
            });
        case em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
            return (0, r.jsx)(U.Z, {
                guildId: p,
                analyticsLocations: L,
            });
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
                    (0, r.jsx)(c.Anchor, {
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
            let { dismissUntil: e$, decisionId: e0 } = I.metadata;
            return (0, r.jsxs)(c.qXd, {
                color: c.DM8.WARNING,
                children: [
                    (0, r.jsx)(c.RyX, {
                        noticeType: em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                            null != p && (0, k.T9)(p), ew(e$);
                        },
                    }),
                    ey.intl.string(ey.t.B8ruyc),
                    (0, r.jsx)(c.EyT, {
                        onClick: () => {
                            null != p &&
                                (0, k.UE)(p, e0, () => {
                                    ew(e$), (0, k.T9)(p);
                                });
                        },
                        children: ey.intl.string(ey.t.oX14Eh),
                    }),
                    null != p
                        ? (0, r.jsx)(c.EyT, {
                              onClick: () => V.Z.open(p, em.pNK.GUILD_AUTOMOD, void 0, em.KsC.AUTOMOD_MENTION_SPAM),
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
                            X.hZ(), ew();
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
                                X.hZ(),
                                ew();
                        },
                        children: ey.intl.string(ey.t.l5xYnJ),
                    }),
                ],
            });
        case em.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
            let e1 = o()().add(5, "days").toDate();
            return (0, r.jsx)(z.Z, {
                dismissCurrentNotice: () => {
                    (0, N.Q3)(eu.m9[em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ew(e1);
                },
                subscriptionTier: eg.Si.TIER_2,
            });
        case em.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let e2 = o()().add(5, "days").toDate();
            return (0, r.jsx)(K.Z, {
                dismissCurrentNotice: () => {
                    ew(e2);
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
                            (null == (e = I.metadata) ? void 0 : e.streamKey) != null &&
                                (0, q.nE)(I.metadata.streamKey);
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
                            ew(null == (e = I.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                    }),
                    ey.intl.string(ey.t["0klLS0"]),
                    (0, r.jsx)(c.NoS, {
                        onClick: () => {
                            var e;
                            (0, J.ZZ)(), ew(null == (e = I.metadata) ? void 0 : e.dismissUntil);
                        },
                        noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: ey.intl.string(ey.t.e4y2VF),
                    }),
                ],
            });
        case em.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
            return (0, r.jsx)(Q.Z, {});
        case em.kVF.SYSTEM_SERVICE_WARNING:
            return (0, r.jsx)(ee.Z, {});
        default:
            return null;
    }
});
function ex() {
    let { analyticsLocations: e } = (0, T.ZP)(I.Z.NOTICE);
    return (0, r.jsx)(T.Gt, {
        value: e,
        children: (0, r.jsx)(eL, {}),
    });
}
