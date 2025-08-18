n.d(t, {
    Z: () => eN,
    c: () => eT,
});
var r = n(951288),
    i = n(647438),
    l = n(913527),
    o = n.n(l);
if (12633 == n.j) var a = n(799899);
var s = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    p = n(893776),
    m = n(117266),
    f = n(37234),
    g = n(254854),
    _ = n(195500),
    h = n(287734),
    b = n(205355),
    E = n(558381),
    C = n(223245),
    O = n(491428),
    v = n(401430),
    y = n(230711),
    x = n(726542),
    j = n(100527),
    I = n(906732),
    S = n(812206),
    T = n(391650),
    P = n(600164),
    N = n(266454),
    A = n(749277),
    w = n(196068),
    Z = n(132144),
    R = n(131130),
    D = n(458725),
    L = n(386146),
    M = n(492435),
    k = n(353926),
    U = n(506357),
    F = n(36459),
    B = n(236069),
    G = n(305325),
    H = n(281956),
    V = n(574650),
    z = n(665302),
    W = n(434404),
    Y = n(918658),
    K = n(859428),
    X = n(963249),
    q = n(96320),
    J = n(535278),
    Q = n(246965),
    $ = n(272008),
    ee = n(523255),
    et = n(101879),
    en = n(496729),
    er = n(852923),
    ei = n(592125),
    el = n(131951),
    eo = n(19780),
    ea = n(914010),
    es = n(594174),
    ec = n(55563),
    eu = n(695103),
    ed = n(933429),
    ep = n(626135),
    em = n(63063),
    ef = n(72924),
    eg = n(69499),
    e_ = n(912193),
    eh = n(981631),
    eb = n(474936),
    eE = n(610674),
    eC = n(65154),
    eO = n(388032),
    ev = n(50953);
function ey(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ex = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            o = null == (t = (0, D.hp)(n)) ? void 0 : t.errorCode,
            a = eO.intl.formatToPlainString(eO.t["ejOT9/"], { errorCode: o }),
            { avErrorUIEnabled: s } = (0, L.JN)({ location: i });
        if (!s) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: "text-sm/bold",
            color: "currentColor",
            tag: "span",
            className: ev.errorCodeNoticeText,
            selectable: !0,
            children: a,
        });
        return l
            ? (0, r.jsx)(c.P3F, {
                  tag: "span",
                  className: ev.errorCodeNoticeClickable,
                  onClick: () => l && open(em.Z.getArticleURL(eh.BhN.AV_ERROR_CODES)),
                  children: u,
              })
            : u;
    },
    ej = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eT();
                    },
                }),
                eO.intl.string(eO.t.o3zuY2),
                (0, r.jsx)(ex, {
                    error: D.u.NO_INPUT_DEVICES,
                    location: "AudioIssueNoticeInputDevices",
                }),
                (0, r.jsx)(c.u3T, {
                    href: em.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: eO.intl.string(eO.t.RYKKo6),
                }),
            ],
        }),
    eI = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eT(), (0, e_.b)();
                    },
                }),
                eO.intl.string(eO.t.nCO9bG),
                (0, r.jsx)(ex, {
                    error: D.u.NO_AUDIO_INPUT_DETECTED,
                    location: "AudioIssueNoticeHelpdesk",
                }),
                (0, r.jsx)(c.u3T, {
                    href: em.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: eO.intl.string(eO.t.RYKKo6),
                }),
            ],
        }),
    eS = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eT(), (0, e_.b)();
                    },
                }),
                eO.intl.string(eO.t.dNAJ19),
                (0, r.jsx)(ex, {
                    allowClick: !0,
                    error: D.u.NO_AUDIO_INPUT_DETECTED,
                    location: "AudioIssueNoticeMicTester",
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(eh.S9g.USER_SETTINGS), y.Z.setSection(eh.oAB.VOICE);
                    },
                    children: eO.intl.string(eO.t.I6YlBw),
                }),
            ],
        });
function eT(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let eP =
    12633 == n.j
        ? i.memo(function () {
              var e, t;
              let l = (0, s.e7)([es.default], () => es.default.getCurrentUser()),
                  g = (0, s.e7)([ea.Z], () => ea.Z.getGuildId()),
                  j = (0, s.e7)([ed.ZP], () => ed.ZP.getNotice()),
                  { analyticsLocations: D } = (0, I.ZP)(),
                  L = null == j ? void 0 : j.type,
                  e_ = (0, H.J)(g);
              i.useEffect(() => {
                  null != L &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), ep.default.track(eh.rMx.APP_NOTICE_VIEWED, n);
                      })(L, g);
              }, [L, g]),
                  i.useEffect(() => {
                      if (null != j && j.type === eh.kVF.SURVEY && null != j.metadata) {
                          let { metadata: e } = j,
                              t = k.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, M.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = j.metadata) ? void 0 : e.id) != null &&
                                      (await (0, O.g8)(null == (t = j.metadata) ? void 0 : t.id));
                              })();
                      }
                  }, [j]);
              let ex = null != L ? ed.zD[L] : null,
                  eP = null != L ? ed.o[L] : null,
                  eN = null != L ? ed.nA[L] : null,
                  eA = null != L ? ed.m9[L] : null;
              if (null == j) return null;
              let { useRecurringNotices: ew } = q.b.getCurrentConfig({ location: "AppNotice" });
              if (
                  ew &&
                  null != ex &&
                  (L === eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING || L === eh.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
              )
                  return (0, r.jsx)(Z.W, {
                      dismissibleContent: ex,
                      noticeType: j.type,
                  });
              if (null != eP)
                  return (0, r.jsx)(R.q, {
                      dismissibleContent: eP,
                      noticeType: j.type,
                  });
              if (null != eN) return (0, r.jsx)(w.c, { dismissibleContent: eN });
              if (null != eA)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eA,
                      noticeType: j.type,
                  });
              let eZ = null == (e = j.metadata) ? void 0 : e.premiumType;
              switch (j.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, r.jsx)(K.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(V.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(er.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eR } = j.metadata;
                      return (0, r.jsx)(U.Z, { onDismiss: () => eT(eR) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eD } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eD),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE,
                              }),
                              eO.intl.format(eO.t["08KQ1N"], {
                                  helpCenterLink: em.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE),
                              }),
                          ],
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eL),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE,
                              }),
                              eO.intl.format(eO.t["8Je+dX"], {
                                  helpCenterLink: em.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE),
                              }),
                          ],
                      });
                  case eh.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eM } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eM),
                                  noticeType: eh.kVF.MACOS_19_DEPRECATED_MESSAGE,
                              }),
                              eO.intl.format(eO.t.q8VPLi, {
                                  helpCenterLink: em.Z.getArticleURL(eh.BhN.MACOS_19_DEPRECATE),
                              }),
                          ],
                      });
                  case eh.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.GENERIC,
                              }),
                              j.message,
                              null != j.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: j.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: j.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                              }),
                              j.message,
                              null != j.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: j.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: j.buttonText,
                                    })
                                  : null,
                          ],
                      });
                  case eh.kVF.VOICE_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      _.Z.clearRemoteDisconnectVoiceChannelId(), eT();
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                              }),
                              eO.intl.string(eO.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = eo.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != ei.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: eO.intl.string(eO.t.vD60Pj),
                              }),
                          ],
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      _.Z.clearLastSessionVoiceChannelId(), eT();
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                              }),
                              eO.intl.string(eO.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = eo.Z.getLastSessionVoiceChannelId();
                                      null != e && null != ei.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eO.intl.string(eO.t.vD60Pj),
                              }),
                          ],
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let ek = x.Z.get(eh.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                              }),
                              (0, r.jsx)("img", {
                                  alt: "",
                                  className: ev.platformIcon,
                                  src: ek.icon.whiteSVG,
                              }),
                              eO.intl.string(eO.t["D8Cp7+"]),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => y.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eO.intl.string(eO.t.NiTd0d),
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: ev.textLinkSmall,
                                  href: em.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: "_blank",
                                  children: eO.intl.string(eO.t.CiqAIS),
                              }),
                          ],
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eO.intl.string(eO.t["f+Zaoq"]),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (e_ && null != g ? (0, G.hk)(g) : T.j()),
                                  children: eO.intl.string(eO.t.fiNVio),
                              }),
                          ],
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eO.intl.string(eO.t["3sWbf3"]),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          u.Z.show({
                                              title: eO.intl.string(eO.t.LykQYm),
                                              body: eO.intl.format(eO.t.azKEPz, {
                                                  email: null == l ? void 0 : l.email,
                                              }),
                                              secondaryConfirmText: eO.intl.string(eO.t.oP5zGB),
                                              onConfirmSecondary: T.j,
                                          });
                                  },
                                  children: eO.intl.string(eO.t.WnX4Jy),
                              }),
                          ],
                      });
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == j.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE,
                              }),
                              eO.intl.format(eO.t.yb96S0, j.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: "".concat(eh.yXt.STATUS, "/incidents/").concat(j.metadata.id),
                                  children: eO.intl.string(eO.t.hvVgAQ),
                              }),
                          ],
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!el.Z.supports(eC.AN.LOOPBACK)) return (0, r.jsx)(eI, {});
                      return (0, r.jsx)(eS, {});
                  case eh.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(ej, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == j.metadata) return null;
                      let { vendor: eU, model: eF } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eO.intl.format(eO.t.qoDex8, {
                                  vendorName: eU.name,
                                  modelName: eF.name,
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), eT();
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
                  case eh.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.STREAMER_MODE,
                              }),
                              eO.intl.string(eO.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => C.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: eO.intl.string(eO.t.R9GHyc),
                              }),
                          ],
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eT();
                                  },
                              }),
                              eO.intl.string(eO.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(eh.S9g.USER_SETTINGS), y.Z.setSection(eh.oAB.VOICE);
                                  },
                                  children: eO.intl.string(eO.t["51hI/v"]),
                              }),
                          ],
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == j.metadata) return null;
                      let { skuId: eB, applicationId: eG } = j.metadata,
                          eH = ec.Z.get(eB),
                          eV = S.Z.getApplication(eG);
                      if (null == eH || null == eV) return null;
                      let ez = { page: eh.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eH.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ev.premiumIcon,
                              }),
                              eO.intl.format(eO.t["g3MU//"], {
                                  applicationName: eV.name,
                                  skuName: eH.name,
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ef.S)({
                                          applicationId: eV.id,
                                          skuId: eH.id,
                                          openPremiumPaymentModal: () => {
                                              (0, X.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eb.Si.TIER_2,
                                                  analyticsLocations: D,
                                                  analyticsObject: ez,
                                              });
                                          },
                                          analyticsLocations: D,
                                          analyticsLocationObject: ez,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP,
                                      }).then(() => m.Z(eH.id)),
                                  children: eO.intl.string(eO.t.KEwPY2),
                              }),
                          ],
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == j.metadata) return null;
                      let { skuId: e, applicationId: t } = j.metadata,
                          n = ec.Z.get(e),
                          i = S.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
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
                                  children: (0, r.jsx)(a.rU, {
                                      onClick: () => eT(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 },
                                      },
                                      children: eO.intl.string(eO.t.hvVgAQ),
                                  }),
                              }),
                          ],
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = j.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (0, O.hZ)(t, !0);
                                  },
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, "_blank"), (0, O.hZ)(t, !1);
                                  },
                                  children: i,
                              }),
                          ],
                      });
                  }
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eO.intl.string(eO.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: em.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: "_blank",
                                  children: eO.intl.string(eO.t["6ik4Xl"]),
                              }),
                          ],
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                              }),
                              eO.intl.string(eO.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(
                                              n.bind(n, 431583),
                                          );
                                          return (t) => (0, r.jsx)(e, ey({ source: "Video unsupported browser" }, t));
                                      });
                                  },
                                  children: eO.intl.string(eO.t["1WjMbG"]),
                              }),
                          ],
                      });
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == j.metadata) return null;
                      let { error: eW } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                              }),
                              null == eW ? void 0 : eW.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e("20212").then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ey({}, t));
                                      }),
                                  children: eO.intl.string(eO.t.hvVgAQ),
                              }),
                          ],
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == j.metadata) return null;
                      let { progress: eY, total: eK, name: eX } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                              }),
                              (0, r.jsxs)(P.Z, {
                                  justify: P.Z.Justify.CENTER,
                                  children: [
                                      null != eX
                                          ? eO.intl.formatToPlainString(eO.t["pHj+z8"], {
                                                name: "".concat(eX),
                                                progress: eY,
                                                total: eK,
                                            })
                                          : eO.intl.formatToPlainString(eO.t["lHZn+P"], {
                                                progress: eY,
                                                total: eK,
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: ev.ellipsis,
                                      }),
                                  ],
                              }),
                          ],
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == j.metadata) return null;
                      if (null != eu.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(P.Z, {
                                  justify: P.Z.Justify.CENTER,
                                  align: P.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)("div", {
                                          children: eO.intl.format(eO.t["1qxVe3"], {
                                              applicationName: j.metadata.applicationName,
                                          }),
                                      }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: v.mc,
                                          noticeType: eh.kVF.APPLICATION_TEST_MODE,
                                      }),
                                  ],
                              }),
                          });
                      return (0, r.jsx)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: (0, r.jsxs)(P.Z, {
                              justify: P.Z.Justify.CENTER,
                              align: P.Z.Align.CENTER,
                              children: [
                                  (0, r.jsx)("div", {
                                      children: eO.intl.format(eO.t.Fv5HrK, {
                                          applicationName: j.metadata.applicationName,
                                      }),
                                  }),
                                  (0, r.jsx)(eg.Z, {
                                      dropdownSize: eg.E.DropdownSizes.SMALL,
                                      className: ev.testModeSKUSelector,
                                      color: eg.E.Colors.WHITE,
                                      look: eg.E.Looks.OUTLINED,
                                      size: eg.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          E.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK,
                                              },
                                          }),
                                      applicationId: j.metadata.applicationId,
                                      children: eO.intl.string(eO.t.Q5ZgpK),
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: v.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE,
                                  }),
                              ],
                          }),
                      });
                  case eh.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(Y.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color:
                              eZ === eb.p9.TIER_1
                                  ? c.DM8.PREMIUM_TIER_1
                                  : eZ === eb.p9.TIER_0
                                    ? c.DM8.PREMIUM_TIER_0
                                    : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
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
                              eZ === eb.p9.TIER_1
                                  ? eO.intl.formatToPlainString(eO.t.fXv4ws, { daysLeft: j.metadata.daysLeft })
                                  : eZ === eb.p9.TIER_0
                                    ? eO.intl.formatToPlainString(eO.t.ZOHZMj, { daysLeft: j.metadata.daysLeft })
                                    : eO.intl.formatToPlainString(eO.t.outyHh, { daysLeft: j.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  n.e("8016"),
                                                  n.e("17938"),
                                                  n.e("84992"),
                                                  n.e("23062"),
                                              ]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ey({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: j.metadata.daysLeft,
                                                              premiumType: eZ,
                                                              analyticsSource: "Nag Bar",
                                                              premiumSubscription: j.metadata.premiumSubscription,
                                                          }),
                                                      Object.getOwnPropertyDescriptors
                                                          ? Object.defineProperties(
                                                                n,
                                                                Object.getOwnPropertyDescriptors(i),
                                                            )
                                                          : (function (e, t) {
                                                                var n = Object.keys(e);
                                                                if (Object.getOwnPropertySymbols) {
                                                                    var r = Object.getOwnPropertySymbols(e);
                                                                    n.push.apply(n, r);
                                                                }
                                                                return n;
                                                            })(Object(i)).forEach(function (e) {
                                                                Object.defineProperty(
                                                                    n,
                                                                    e,
                                                                    Object.getOwnPropertyDescriptor(i, e),
                                                                );
                                                            }),
                                                      n),
                                                  );
                                              };
                                          });
                                  },
                                  children:
                                      eZ === eb.p9.TIER_1
                                          ? eO.intl.string(eO.t.BkbUPD)
                                          : eZ === eb.p9.TIER_0
                                            ? eO.intl.string(eO.t.Px978f)
                                            : eO.intl.string(eO.t.LW5tCA),
                              }),
                          ],
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eq, dismissUntil: eJ } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: L,
                                  onClick: () => {
                                      eT(eJ);
                                  },
                              }),
                              eO.intl.format(eO.t.zxU0Ki, { daysPastDue: eq }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eT(eJ), y.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eO.intl.string(eO.t.q8rxeX),
                              }),
                          ],
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              eO.intl.string(eO.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          y.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eO.intl.string(eO.t["Zpd+Ym"]),
                              }),
                          ],
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              eO.intl.string(eO.t["30YfCg"]),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          y.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eO.intl.string(eO.t.U5pKWF),
                              }),
                          ],
                      });
                  case eh.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      );
                                  },
                              }),
                              eZ === eb.p9.TIER_1
                                  ? eO.intl.formatToPlainString(eO.t.b6QUvb, { daysLeft: j.metadata.daysLeft })
                                  : eZ === eb.p9.TIER_0
                                    ? eO.intl.formatToPlainString(eO.t["tURZ/P"], { daysLeft: j.metadata.daysLeft })
                                    : eO.intl.formatToPlainString(eO.t.AyC74O, { daysLeft: j.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eT(
                                          null == (t = j.metadata) || null == (e = t.premiumSubscription)
                                              ? void 0
                                              : e.currentPeriodEnd,
                                      ),
                                          y.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children:
                                      eZ === eb.p9.TIER_1
                                          ? eO.intl.string(eO.t.lboF5O)
                                          : eZ === eb.p9.TIER_0
                                            ? eO.intl.string(eO.t["4UPwOj"])
                                            : eO.intl.string(eO.t["P/VvGR"]),
                              }),
                          ],
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(z.h, {
                          buttonText: null != (t = j.buttonText) ? t : eO.intl.string(eO.t["/g10LC"]),
                          onGoBack: j.callback,
                          onDismiss: () => eT(),
                          showCloseButton: !0,
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, r.jsx)(B.Z, {
                          guildId: g,
                          analyticsLocations: D,
                          analyticsLocation: e,
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eO.intl.string(eO.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eE.Z,
                                  target: "_blank",
                                  children: eO.intl.string(eO.t.kvHdFB),
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: em.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: "_blank",
                                  className: ev.quarantineLearnMoreLink,
                                  children: eO.intl.string(eO.t.hvVgAQ),
                              }),
                          ],
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              eO.intl.string(eO.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: "".concat(eh.yXt.STATUS),
                                  children: eO.intl.string(eO.t.hvVgAQ),
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY,
                              }),
                          ],
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eQ, decisionId: e$ } = j.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != g && (0, F.T9)(g), eT(eQ);
                                  },
                              }),
                              eO.intl.string(eO.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != g &&
                                          (0, F.UE)(g, e$, () => {
                                              eT(eQ), (0, F.T9)(g);
                                          });
                                  },
                                  children: eO.intl.string(eO.t.oX14Eh),
                              }),
                              null != g
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () =>
                                            W.Z.open(g, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eO.intl.string(eO.t["1R7QIy"]),
                                    })
                                  : null,
                          ],
                      });
                  case eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      ee.hZ(), eT();
                                  },
                              }),
                              eO.intl.string(eO.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(
                                              n.bind(n, 349994),
                                          );
                                          return (t) => (0, r.jsx)(e, ey({}, t));
                                      }),
                                          ee.hZ(),
                                          eT();
                                  },
                                  children: eO.intl.string(eO.t.l5xYnJ),
                              }),
                          ],
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let e0 = o()().add(5, "days").toDate();
                      return (0, r.jsx)(Q.Z, {
                          dismissCurrentNotice: () => {
                              (0, N.Q3)(ed.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eT(e0);
                          },
                          subscriptionTier: eb.Si.TIER_2,
                      });
                  case eh.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                      let e1 = o()().add(5, "days").toDate();
                      return (0, r.jsx)(J.Z, {
                          dismissCurrentNotice: () => {
                              eT(e1);
                          },
                          subscriptionTier: eb.Si.TIER_2,
                      });
                  case eh.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null == (e = j.metadata) ? void 0 : e.streamKey) != null &&
                                          (0, $.nE)(j.metadata.streamKey);
                                  },
                              }),
                              eO.intl.string(eO.t.rOx44u),
                          ],
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eT(null == (e = j.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                              }),
                              eO.intl.string(eO.t["0klLS0"]),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, en.ZZ)(), eT(null == (e = j.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eO.intl.string(eO.t.e4y2VF),
                              }),
                          ],
                      });
                  case eh.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)(et.Z, {});
                  default:
                      return null;
              }
          })
        : null;
function eN() {
    let { analyticsLocations: e } = (0, I.ZP)(j.Z.NOTICE);
    return (0, r.jsx)(I.Gt, {
        value: e,
        children: (0, r.jsx)(eP, {}),
    });
}
