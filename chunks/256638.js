n.d(t, {
    Z: function () {
        return eT;
    },
    c: function () {
        return eN;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(568611),
    s = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    m = n(893776),
    h = n(117266),
    f = n(37234),
    p = n(254854),
    _ = n(195500),
    g = n(287734),
    E = n(205355),
    C = n(558381),
    I = n(223245),
    x = n(491428),
    N = n(401430),
    v = n(230711),
    T = n(726542),
    S = n(100527),
    A = n(906732),
    b = n(812206),
    j = n(391650),
    R = n(600164),
    Z = n(605236),
    P = n(749277),
    L = n(131130),
    y = n(492435),
    O = n(353926),
    M = n(506357),
    D = n(36459),
    k = n(236069),
    U = n(305325),
    B = n(281956),
    w = n(574650),
    F = n(665302),
    G = n(434404),
    V = n(918658),
    H = n(859428),
    z = n(963249),
    W = n(774276),
    K = n(14335),
    Y = n(246965),
    X = n(272008),
    Q = n(523255),
    q = n(496729),
    J = n(852923),
    $ = n(592125),
    ee = n(430824),
    et = n(131951),
    en = n(19780),
    ei = n(914010),
    er = n(594174),
    el = n(55563),
    ea = n(695103),
    eo = n(933429),
    es = n(626135),
    ec = n(63063),
    ed = n(72924),
    eu = n(69499),
    em = n(912193),
    eh = n(981631),
    ef = n(474936),
    ep = n(610674),
    e_ = n(65154),
    eg = n(388032),
    eE = n(230278);
let eC = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN();
                    }
                }),
                eg.intl.string(eg.t.o3zuY2),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: ec.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: eg.intl.string(eg.t.RYKKo6)
                })
            ]
        }),
    eI = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN(), (0, em.b)();
                    }
                }),
                eg.intl.string(eg.t.nCO9bG),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: ec.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: eg.intl.string(eg.t.RYKKo6)
                })
            ]
        }),
    ex = () =>
        (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN(), (0, em.b)();
                    }
                }),
                eg.intl.string(eg.t.dNAJ19),
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, f.jN)(eh.S9g.USER_SETTINGS), v.Z.setSection(eh.oAB.VOICE);
                    },
                    children: eg.intl.string(eg.t.I6YlBw)
                })
            ]
        });
function eN(e) {
    p.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let ev =
    12633 == n.j
        ? r.memo(function () {
              var e, t, l;
              let p = (0, s.e7)([er.default], () => er.default.getCurrentUser()),
                  S = (0, s.e7)([ei.Z], () => ei.Z.getGuildId()),
                  em = (0, s.e7)([eo.ZP], () => eo.ZP.getNotice()),
                  ev = (0, s.e7)([ee.Z], () => ee.Z.getGuild(S)),
                  { analyticsLocations: eT } = (0, A.ZP)(),
                  eS = null == em ? void 0 : em.type,
                  eA = (0, B.J)(S);
              r.useEffect(() => {
                  null != eS &&
                      !(function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), es.default.track(eh.rMx.APP_NOTICE_VIEWED, n);
                      })(eS, S);
              }, [eS, S]),
                  r.useEffect(() => {
                      if (null != em && em.type === eh.kVF.SURVEY && null != em.metadata) {
                          let { metadata: e } = em,
                              t = O.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, y.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = em.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = em.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [em]);
              let eb = null != eS ? eo.o[eS] : null,
                  ej = (function (e) {
                      let { enabled: t } = (0, W.ZP)(!0, e !== eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                      return t || null == e ? null : eo.m9[e];
                  })(eS);
              if (null == em) return null;
              if (null != eb)
                  return (0, i.jsx)(L.q, {
                      dismissibleContent: eb,
                      noticeType: em.type
                  });
              if (null != ej)
                  return (0, i.jsx)(P.A, {
                      dismissibleContent: ej,
                      noticeType: em.type
                  });
              let eR = null === (e = em.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (em.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, i.jsx)(H.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(w.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(J.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eZ } = em.metadata;
                      return (0, i.jsx)(M.Z, { onDismiss: () => eN(eZ) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eP } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(eP),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t['08KQ1N'], { helpCenterLink: ec.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(eL),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t['8Je+dX'], { helpCenterLink: ec.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: ey } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(ey),
                                  noticeType: eh.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              eg.intl.format(eg.t.q8VPLi, { helpCenterLink: ec.Z.getArticleURL(eh.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.GENERIC:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.GENERIC
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: em.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                        onClick: em.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      _.Z.clearRemoteDisconnectVoiceChannelId(), eN();
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED
                              }),
                              eg.intl.string(eg.t.bOQ3jY),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = en.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: eg.intl.string(eg.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      _.Z.clearLastSessionVoiceChannelId(), eN();
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eg.intl.string(eg.t.jY2lUF),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      let e = en.Z.getLastSessionVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && g.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eg.intl.string(eg.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let eO = T.Z.get(eh.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: eE.platformIcon,
                                  src: eO.icon.whiteSVG
                              }),
                              eg.intl.string(eg.t['D8Cp7+']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => v.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eg.intl.string(eg.t.NiTd0d)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  className: eE.textLinkSmall,
                                  href: ec.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eg.intl.string(eg.t.CiqAIS)
                              })
                          ]
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eg.intl.string(eg.t['f+Zaoq']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eA && null != S ? (0, U.hk)(S) : j.j()),
                                  children: eg.intl.string(eg.t.fiNVio)
                              })
                          ]
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              eg.intl.string(eg.t['3sWbf3']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      m.Z.verifyResend(),
                                          d.Z.show({
                                              title: eg.intl.string(eg.t.LykQYm),
                                              body: eg.intl.format(eg.t.azKEPz, { email: null == p ? void 0 : p.email }),
                                              secondaryConfirmText: eg.intl.string(eg.t.oP5zGB),
                                              onConfirmSecondary: j.j
                                          });
                                  },
                                  children: eg.intl.string(eg.t.WnX4Jy)
                              })
                          ]
                      });
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == em.metadata) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => E.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eg.intl.format(eg.t.yb96S0, em.metadata),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eh.yXt.STATUS, '/incidents/').concat(em.metadata.id),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!et.Z.supports(e_.AN.LOOPBACK)) return (0, i.jsx)(eI, {});
                      return (0, i.jsx)(ex, {});
                  case eh.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(eC, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == em.metadata) return null;
                      let { vendor: eM, model: eD } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eg.intl.format(eg.t.qoDex8, {
                                  vendorName: eM.name,
                                  modelName: eD.name
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eN();
                                  }
                              }),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: eD.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eg.intl.string(eg.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eh.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.STREAMER_MODE
                              }),
                              eg.intl.string(eg.t.iEgBXl),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => I.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: eg.intl.string(eg.t.R9GHyc)
                              })
                          ]
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      eN();
                                  }
                              }),
                              eg.intl.string(eg.t.HcErZW),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      (0, f.jN)(eh.S9g.USER_SETTINGS), v.Z.setSection(eh.oAB.VOICE);
                                  },
                                  children: eg.intl.string(eg.t['51hI/v'])
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == em.metadata) return null;
                      let { skuId: ek, applicationId: eU } = em.metadata,
                          eB = el.Z.get(ek),
                          ew = b.Z.getApplication(eU);
                      if (null == eB || null == ew) return null;
                      let eF = { page: eh.ZY5.IN_APP };
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => h.Z(eB.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              eg.intl.format(eg.t['g3MU//'], {
                                  applicationName: ew.name,
                                  skuName: eB.name
                              }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ed.S)({
                                          applicationId: ew.id,
                                          skuId: eB.id,
                                          openPremiumPaymentModal: () => {
                                              (0, z.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: ef.Si.TIER_2,
                                                  analyticsLocations: eT,
                                                  analyticsObject: eF
                                              });
                                          },
                                          analyticsLocations: eT,
                                          analyticsLocationObject: eF,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP
                                      }).then(() => h.Z(eB.id)),
                                  children: eg.intl.string(eg.t.KEwPY2)
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == em.metadata) return null;
                      let { skuId: e, applicationId: t } = em.metadata,
                          n = el.Z.get(e),
                          r = b.Z.getApplication(t);
                      if (null == n || null == r) return null;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              eg.intl.format(eg.t.LquIKC, {
                                  applicationName: r.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.NoticeButton, {
                                  children: (0, i.jsx)(o.rU, {
                                      onClick: () => eN(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eg.intl.string(eg.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = em.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: r, url: l } = e;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: r
                              })
                          ]
                      });
                  }
                  case eh.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eN();
                                  }
                              }),
                              eg.intl.format(eg.t.RomvGB, { guildName: null !== (t = null == ev ? void 0 : ev.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == p ? void 0 : p.id, '&guild_id=').concat(null == ev ? void 0 : ev.id), '_blank'), eN();
                                  },
                                  additionalTrackingProps: { guild_id: null == ev ? void 0 : ev.id },
                                  children: eg.intl.string(eg.t['4RQks7'])
                              })
                          ]
                      });
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              eg.intl.string(eg.t.ugxmk5),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ec.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eg.intl.string(eg.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eg.intl.string(eg.t.wVjKGh),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  source: 'Video unsupported browser',
                                                  ...t
                                              });
                                      });
                                  },
                                  children: eg.intl.string(eg.t['1WjMbG'])
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == em.metadata) return null;
                      let { error: eG } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == em.metadata) return null;
                      let { progress: eV, total: eH, name: ez } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DEFAULT,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(R.Z, {
                                  justify: R.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? eg.intl.formatToPlainString(eg.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eV,
                                                total: eH
                                            })
                                          : eg.intl.formatToPlainString(eg.t['lHZn+P'], {
                                                progress: eV,
                                                total: eH
                                            }),
                                      (0, i.jsx)(c.Spinner, {
                                          type: c.Spinner.Type.PULSING_ELLIPSIS,
                                          className: eE.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == em.metadata) return null;
                      if (null != ea.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.Notice, {
                              color: c.NoticeColors.WARNING,
                              children: (0, i.jsxs)(R.Z, {
                                  justify: R.Z.Justify.CENTER,
                                  align: R.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: eg.intl.format(eg.t['1qxVe3'], { applicationName: em.metadata.applicationName }) }),
                                      (0, i.jsx)(c.NoticeCloseButton, {
                                          onClick: N.mc,
                                          noticeType: eh.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: (0, i.jsxs)(R.Z, {
                              justify: R.Z.Justify.CENTER,
                              align: R.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: eg.intl.format(eg.t.Fv5HrK, { applicationName: em.metadata.applicationName }) }),
                                  (0, i.jsx)(eu.Z, {
                                      dropdownSize: eu.E.DropdownSizes.SMALL,
                                      className: eE.testModeSKUSelector,
                                      color: eu.E.Colors.WHITE,
                                      look: eu.E.Looks.OUTLINED,
                                      size: eu.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          C.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: em.metadata.applicationId,
                                      children: eg.intl.string(eg.t.Q5ZgpK)
                                  }),
                                  (0, i.jsx)(c.NoticeCloseButton, {
                                      onClick: N.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eh.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(K.Z, {});
                  case eh.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(V.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.Notice, {
                          color: eR === ef.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eR === ef.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.NitroWheelIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              eR === ef.p9.TIER_1 ? eg.intl.formatToPlainString(eg.t.fXv4ws, { daysLeft: em.metadata.daysLeft }) : eR === ef.p9.TIER_0 ? eg.intl.formatToPlainString(eg.t.ZOHZMj, { daysLeft: em.metadata.daysLeft }) : eg.intl.formatToPlainString(eg.t.outyHh, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('9236')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: em.metadata.daysLeft,
                                                      premiumType: eR,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: em.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: eR === ef.p9.TIER_1 ? eg.intl.string(eg.t.BkbUPD) : eR === ef.p9.TIER_0 ? eg.intl.string(eg.t.Px978f) : eg.intl.string(eg.t.LW5tCA)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eW, dismissUntil: eK } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eS,
                                  onClick: () => {
                                      eN(eK);
                                  }
                              }),
                              eg.intl.format(eg.t.zxU0Ki, { daysPastDue: eW }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eN(eK), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t.q8rxeX)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eg.intl.string(eg.t.LlZaoa),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eg.intl.string(eg.t['30YfCg']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eg.intl.string(eg.t.U5pKWF)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eR === ef.p9.TIER_1 ? eg.intl.formatToPlainString(eg.t.b6QUvb, { daysLeft: em.metadata.daysLeft }) : eR === ef.p9.TIER_0 ? eg.intl.formatToPlainString(eg.t['tURZ/P'], { daysLeft: em.metadata.daysLeft }) : eg.intl.formatToPlainString(eg.t.AyC74O, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eN(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), v.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eR === ef.p9.TIER_1 ? eg.intl.string(eg.t.lboF5O) : eR === ef.p9.TIER_0 ? eg.intl.string(eg.t['4UPwOj']) : eg.intl.string(eg.t['P/VvGR'])
                              })
                          ]
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(F.h, {
                          buttonText: null !== (l = em.buttonText) && void 0 !== l ? l : eg.intl.string(eg.t['/g10LC']),
                          onGoBack: em.callback,
                          onDismiss: () => eN(),
                          showCloseButton: !0
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, i.jsx)(k.Z, {
                          guildId: S,
                          analyticsLocations: eT,
                          analyticsLocation: e
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.CUSTOM,
                          className: eE.quarantineNotice,
                          children: [
                              eg.intl.string(eg.t.DVFJYW),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ep.Z,
                                  target: '_blank',
                                  children: eg.intl.string(eg.t.kvHdFB)
                              }),
                              (0, i.jsx)(c.Anchor, {
                                  href: ec.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eE.quarantineLearnMoreLink,
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              eg.intl.string(eg.t.Ugijzs),
                              (0, i.jsx)(c.NoticeButtonAnchor, {
                                  href: ''.concat(eh.yXt.STATUS),
                                  children: eg.intl.string(eg.t.hvVgAQ)
                              }),
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => eN(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eY, decisionId: eX } = em.metadata;
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.WARNING,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != S && (0, D.T9)(S), eN(eY);
                                  }
                              }),
                              eg.intl.string(eg.t.B8ruyc),
                              (0, i.jsx)(c.NoticeButton, {
                                  onClick: () => {
                                      null != S &&
                                          (0, D.UE)(S, eX, () => {
                                              eN(eY), (0, D.T9)(S);
                                          });
                                  },
                                  children: eg.intl.string(eg.t.oX14Eh)
                              }),
                              null != S
                                  ? (0, i.jsx)(c.NoticeButton, {
                                        onClick: () => G.Z.open(S, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eg.intl.string(eg.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      Q.hZ(), eN();
                                  }
                              }),
                              eg.intl.string(eg.t.I1nKfH),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.openModalLazy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          Q.hZ(),
                                          eN();
                                  },
                                  children: eg.intl.string(eg.t.l5xYnJ)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eQ = a()().add(5, 'days').toDate();
                      return (0, i.jsx)(Y.Z, {
                          dismissCurrentNotice: () => {
                              (0, Z.EW)(eo.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eN(eQ);
                          },
                          subscriptionTier: ef.Si.TIER_2
                      });
                  case eh.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.DANGER,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  noticeType: eh.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = em.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, X.nE)(em.metadata.streamKey);
                                  }
                              }),
                              eg.intl.string(eg.t.rOx44u)
                          ]
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.Notice, {
                          color: c.NoticeColors.BRAND,
                          children: [
                              (0, i.jsx)(c.NoticeCloseButton, {
                                  onClick: () => {
                                      var e;
                                      eN(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              eg.intl.string(eg.t['0klLS0']),
                              (0, i.jsx)(c.PrimaryCTANoticeButton, {
                                  onClick: () => {
                                      var e;
                                      (0, q.Z)(), eN(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eg.intl.string(eg.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eT() {
    let { analyticsLocations: e } = (0, A.ZP)(S.Z.NOTICE);
    return (0, i.jsx)(A.Gt, {
        value: e,
        children: (0, i.jsx)(ev, {})
    });
}
