n.d(t, {
    Z: () => eS,
    c: () => eI
});
var i = n(200651),
    l = n(192379),
    a = n(913527),
    r = n.n(a);
if (12633 == n.j) var s = n(568611);
var o = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    m = n(893776),
    _ = n(117266),
    h = n(37234),
    p = n(254854),
    g = n(195500),
    f = n(287734),
    x = n(205355),
    C = n(558381),
    v = n(223245),
    E = n(491428),
    I = n(401430),
    N = n(230711),
    S = n(726542),
    T = n(100527),
    b = n(906732),
    A = n(812206),
    j = n(391650),
    y = n(600164),
    Z = n(605236),
    R = n(749277),
    L = n(131130),
    P = n(492435),
    k = n(353926),
    M = n(506357),
    O = n(36459),
    D = n(236069),
    w = n(305325),
    F = n(281956),
    U = n(574650),
    B = n(665302),
    G = n(434404),
    H = n(918658),
    V = n(859428),
    z = n(963249),
    W = n(774276),
    K = n(14335),
    Y = n(246965),
    X = n(272008),
    q = n(523255),
    Q = n(496729),
    J = n(852923),
    $ = n(592125),
    ee = n(430824),
    et = n(131951),
    en = n(19780),
    ei = n(914010),
    el = n(594174),
    ea = n(55563),
    er = n(695103),
    es = n(933429),
    eo = n(626135),
    ec = n(63063),
    ed = n(72924),
    eu = n(69499),
    em = n(912193),
    e_ = n(981631),
    eh = n(474936),
    ep = n(610674),
    eg = n(65154),
    ef = n(388032),
    ex = n(693763);
let eC = () =>
        (0, i.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, i.jsx)(c.RyX, {
                    onClick: () => {
                        eI();
                    }
                }),
                ef.intl.string(ef.t.o3zuY2),
                (0, i.jsx)(c.u3T, {
                    href: ec.Z.getArticleURL(e_.BhN.NO_INPUT_DETECTED),
                    children: ef.intl.string(ef.t.RYKKo6)
                })
            ]
        }),
    ev = () =>
        (0, i.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, i.jsx)(c.RyX, {
                    onClick: () => {
                        eI(), (0, em.b)();
                    }
                }),
                ef.intl.string(ef.t.nCO9bG),
                (0, i.jsx)(c.u3T, {
                    href: ec.Z.getArticleURL(e_.BhN.NO_INPUT_DETECTED),
                    children: ef.intl.string(ef.t.RYKKo6)
                })
            ]
        }),
    eE = () =>
        (0, i.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, i.jsx)(c.RyX, {
                    onClick: () => {
                        eI(), (0, em.b)();
                    }
                }),
                ef.intl.string(ef.t.dNAJ19),
                (0, i.jsx)(c.EyT, {
                    onClick: () => {
                        (0, h.jN)(e_.S9g.USER_SETTINGS), N.Z.setSection(e_.oAB.VOICE);
                    },
                    children: ef.intl.string(ef.t.I6YlBw)
                })
            ]
        });
function eI(e) {
    p.Z.dismiss(null != e ? { untilAtLeast: r()(e) } : void 0);
}
let eN =
    12633 == n.j
        ? l.memo(function () {
              var e, t, a;
              let p = (0, o.e7)([el.default], () => el.default.getCurrentUser()),
                  T = (0, o.e7)([ei.Z], () => ei.Z.getGuildId()),
                  em = (0, o.e7)([es.ZP], () => es.ZP.getNotice()),
                  eN = (0, o.e7)([ee.Z], () => ee.Z.getGuild(T)),
                  { analyticsLocations: eS } = (0, b.ZP)(),
                  eT = null == em ? void 0 : em.type,
                  eb = (0, F.J)(T);
              l.useEffect(() => {
                  null != eT &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), eo.default.track(e_.rMx.APP_NOTICE_VIEWED, n);
                      })(eT, T);
              }, [eT, T]),
                  l.useEffect(() => {
                      if (null != em && em.type === e_.kVF.SURVEY && null != em.metadata) {
                          let { metadata: e } = em,
                              t = k.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, P.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = em.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, E.g8)(null === (t = em.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [em]);
              let eA = null != eT ? es.o[eT] : null,
                  ej = (function (e) {
                      let { enabled: t } = (0, W.ZP)(!0, e !== e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                      return t || null == e ? null : es.m9[e];
                  })(eT);
              if (null == em) return null;
              if (null != eA)
                  return (0, i.jsx)(L.q, {
                      dismissibleContent: eA,
                      noticeType: em.type
                  });
              if (null != ej)
                  return (0, i.jsx)(R.A, {
                      dismissibleContent: ej,
                      noticeType: em.type
                  });
              let ey = null === (e = em.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (em.type) {
                  case e_.kVF.LURKING_GUILD:
                      return (0, i.jsx)(V.Z, {});
                  case e_.kVF.PENDING_MEMBER:
                      return (0, i.jsx)(U.Z, {});
                  case e_.kVF.INVITED_TO_SPEAK:
                      return (0, i.jsx)(J.Z, {});
                  case e_.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eZ } = em.metadata;
                      return (0, i.jsx)(M.Z, { onDismiss: () => eI(eZ) });
                  case e_.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(eR),
                                  noticeType: e_.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              ef.intl.format(ef.t['08KQ1N'], { helpCenterLink: ec.Z.getArticleURL(e_.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(eL),
                                  noticeType: e_.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              ef.intl.format(ef.t['8Je+dX'], { helpCenterLink: ec.Z.getArticleURL(e_.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eP } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(eP),
                                  noticeType: e_.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              ef.intl.format(ef.t.q8VPLi, { helpCenterLink: ec.Z.getArticleURL(e_.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case e_.kVF.GENERIC:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.GENERIC
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.NoS, {
                                        onClick: em.callback,
                                        noticeType: e_.kVF.GENERIC,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.LAUNCH_GAME_FAILURE:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.LAUNCH_GAME_FAILURE
                              }),
                              em.message,
                              null != em.buttonText
                                  ? (0, i.jsx)(c.NoS, {
                                        onClick: em.callback,
                                        noticeType: e_.kVF.LAUNCH_GAME_FAILURE,
                                        children: em.buttonText
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.VOICE_DISABLED:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eI();
                                  },
                                  noticeType: e_.kVF.VOICE_DISABLED
                              }),
                              ef.intl.string(ef.t.bOQ3jY),
                              (0, i.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = en.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: e_.kVF.VOICE_DISABLED,
                                  children: ef.intl.string(ef.t.vD60Pj)
                              })
                          ]
                      });
                  case e_.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eI();
                                  },
                                  noticeType: e_.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              ef.intl.string(ef.t.jY2lUF),
                              (0, i.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = en.Z.getLastSessionVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && f.default.selectVoiceChannel(e);
                                  },
                                  noticeType: e_.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: ef.intl.string(ef.t.vD60Pj)
                              })
                          ]
                      });
                  case e_.kVF.SPOTIFY_AUTO_PAUSED:
                      let ek = S.Z.get(e_.ABu.SPOTIFY);
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, i.jsx)('img', {
                                  alt: '',
                                  className: ex.platformIcon,
                                  src: ek.icon.whiteSVG
                              }),
                              ef.intl.string(ef.t['D8Cp7+']),
                              (0, i.jsx)(c.NoS, {
                                  onClick: () => N.Z.open(e_.oAB.VOICE),
                                  noticeType: e_.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: ef.intl.string(ef.t.NiTd0d)
                              }),
                              (0, i.jsx)(c.eee, {
                                  className: ex.textLinkSmall,
                                  href: ec.Z.getArticleURL(e_.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: ef.intl.string(ef.t.CiqAIS)
                              })
                          ]
                      });
                  case e_.kVF.UNCLAIMED_ACCOUNT:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ef.intl.string(ef.t['f+Zaoq']),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eb && null != T ? (0, w.hk)(T) : j.j()),
                                  children: ef.intl.string(ef.t.fiNVio)
                              })
                          ]
                      });
                  case e_.kVF.UNVERIFIED_ACCOUNT:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ef.intl.string(ef.t['3sWbf3']),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      m.Z.verifyResend(),
                                          d.Z.show({
                                              title: ef.intl.string(ef.t.LykQYm),
                                              body: ef.intl.format(ef.t.azKEPz, { email: null == p ? void 0 : p.email }),
                                              secondaryConfirmText: ef.intl.string(ef.t.oP5zGB),
                                              onConfirmSecondary: j.j
                                          });
                                  },
                                  children: ef.intl.string(ef.t.WnX4Jy)
                              })
                          ]
                      });
                  case e_.kVF.SCHEDULED_MAINTENANCE:
                      if (null == em.metadata) return null;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => x.Z.ackScheduledMaintenance(),
                                  noticeType: e_.kVF.SCHEDULED_MAINTENANCE
                              }),
                              ef.intl.format(ef.t.yb96S0, em.metadata),
                              (0, i.jsx)(c.u3T, {
                                  href: ''.concat(e_.yXt.STATUS, '/incidents/').concat(em.metadata.id),
                                  children: ef.intl.string(ef.t.hvVgAQ)
                              })
                          ]
                      });
                  case e_.kVF.NO_INPUT_DETECTED:
                      if (!et.Z.supports(eg.AN.LOOPBACK)) return (0, i.jsx)(ev, {});
                      return (0, i.jsx)(eE, {});
                  case e_.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, i.jsx)(eC, {});
                  case e_.kVF.HARDWARE_MUTE:
                      if (null == em.metadata) return null;
                      let { vendor: eM, model: eO } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ef.intl.format(ef.t.qoDex8, {
                                  vendorName: eM.name,
                                  modelName: eO.name
                              }),
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eI();
                                  }
                              }),
                              (0, i.jsx)(c.u3T, {
                                  href: eO.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: ef.intl.string(ef.t['Yl/Rio'])
                              })
                          ]
                      });
                  case e_.kVF.STREAMER_MODE:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.STREAMER_MODE
                              }),
                              ef.intl.string(ef.t.iEgBXl),
                              (0, i.jsx)(c.NoS, {
                                  onClick: () => v.Z.setEnabled(!1),
                                  noticeType: e_.kVF.STREAMER_MODE,
                                  children: ef.intl.string(ef.t.R9GHyc)
                              })
                          ]
                      });
                  case e_.kVF.H264_DISABLED:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              ef.intl.string(ef.t.HcErZW),
                              (0, i.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, h.jN)(e_.S9g.USER_SETTINGS), N.Z.setSection(e_.oAB.VOICE);
                                  },
                                  children: ef.intl.string(ef.t['51hI/v'])
                              })
                          ]
                      });
                  case e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == em.metadata) return null;
                      let { skuId: eD, applicationId: ew } = em.metadata,
                          eF = ea.Z.get(eD),
                          eU = A.Z.getApplication(ew);
                      if (null == eF || null == eU) return null;
                      let eB = { page: e_.ZY5.IN_APP };
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => _.Z(eF.id),
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, i.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              ef.intl.format(ef.t['g3MU//'], {
                                  applicationName: eU.name,
                                  skuName: eF.name
                              }),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ed.S)({
                                          applicationId: eU.id,
                                          skuId: eF.id,
                                          openPremiumPaymentModal: () => {
                                              (0, z.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.Si.TIER_2,
                                                  analyticsLocations: eS,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: eS,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? e_.IlC.OVERLAY : e_.IlC.APP
                                      }).then(() => _.Z(eF.id)),
                                  children: ef.intl.string(ef.t.KEwPY2)
                              })
                          ]
                      });
                  case e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == em.metadata) return null;
                      let { skuId: e, applicationId: t } = em.metadata,
                          n = ea.Z.get(e),
                          l = A.Z.getApplication(t);
                      if (null == n || null == l) return null;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, i.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              ef.intl.format(ef.t.LquIKC, {
                                  applicationName: l.name,
                                  skuName: n.name
                              }),
                              (0, i.jsx)(c.EyT, {
                                  children: (0, i.jsx)(s.rU, {
                                      onClick: () => eI(),
                                      to: {
                                          pathname: e_.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: ef.intl.string(ef.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case e_.kVF.SURVEY: {
                      let e = em.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: l, url: a } = e;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.SURVEY,
                                  onClick: () => {
                                      (0, E.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(a, '_blank'), (0, E.hZ)(t, !1);
                                  },
                                  children: l
                              })
                          ]
                      });
                  }
                  case e_.kVF.SERVER_USAGE_SURVEY:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eI();
                                  }
                              }),
                              ef.intl.format(ef.t.RomvGB, { guildName: null !== (t = null == eN ? void 0 : eN.name) && void 0 !== t ? t : 'this server' }),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == p ? void 0 : p.id, '&guild_id=').concat(null == eN ? void 0 : eN.id), '_blank'), eI();
                                  },
                                  additionalTrackingProps: { guild_id: null == eN ? void 0 : eN.id },
                                  children: ef.intl.string(ef.t['4RQks7'])
                              })
                          ]
                      });
                  case e_.kVF.CORRUPT_INSTALLATION:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ef.intl.string(ef.t.ugxmk5),
                              (0, i.jsx)(c.u3T, {
                                  href: ec.Z.getArticleURL(e_.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: ef.intl.string(ef.t['6ik4Xl'])
                              })
                          ]
                      });
                  case e_.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              ef.intl.string(ef.t.wVjKGh),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  source: 'Video unsupported browser',
                                                  ...t
                                              });
                                      });
                                  },
                                  children: ef.intl.string(ef.t['1WjMbG'])
                              })
                          ]
                      });
                  case e_.kVF.DISPATCH_ERROR:
                      if (null == em.metadata) return null;
                      let { error: eG } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                  children: ef.intl.string(ef.t.hvVgAQ)
                              })
                          ]
                      });
                  case e_.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == em.metadata) return null;
                      let { progress: eH, total: eV, name: ez } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, i.jsxs)(y.Z, {
                                  justify: y.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? ef.intl.formatToPlainString(ef.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eH,
                                                total: eV
                                            })
                                          : ef.intl.formatToPlainString(ef.t['lHZn+P'], {
                                                progress: eH,
                                                total: eV
                                            }),
                                      (0, i.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: ex.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case e_.kVF.APPLICATION_TEST_MODE:
                      if (null == em.metadata) return null;
                      if (null != er.Z.testModeEmbeddedApplicationId)
                          return (0, i.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, i.jsxs)(y.Z, {
                                  justify: y.Z.Justify.CENTER,
                                  align: y.Z.Align.CENTER,
                                  children: [
                                      (0, i.jsx)('div', { children: ef.intl.format(ef.t['1qxVe3'], { applicationName: em.metadata.applicationName }) }),
                                      (0, i.jsx)(c.RyX, {
                                          onClick: I.mc,
                                          noticeType: e_.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, i.jsx)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: (0, i.jsxs)(y.Z, {
                              justify: y.Z.Justify.CENTER,
                              align: y.Z.Align.CENTER,
                              children: [
                                  (0, i.jsx)('div', { children: ef.intl.format(ef.t.Fv5HrK, { applicationName: em.metadata.applicationName }) }),
                                  (0, i.jsx)(eu.Z, {
                                      dropdownSize: eu.E.DropdownSizes.SMALL,
                                      className: ex.testModeSKUSelector,
                                      color: eu.E.Colors.WHITE,
                                      look: eu.E.Looks.OUTLINED,
                                      size: eu.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          C.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: e_.jXE.NOTIFICATION_BAR,
                                                  object: e_.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: em.metadata.applicationId,
                                      children: ef.intl.string(ef.t.Q5ZgpK)
                                  }),
                                  (0, i.jsx)(c.RyX, {
                                      onClick: I.mc,
                                      noticeType: e_.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case e_.kVF.OUTBOUND_PROMOTION:
                      return (0, i.jsx)(K.Z, {});
                  case e_.kVF.VIEWING_ROLES:
                      return (0, i.jsx)(H.Z, {});
                  case e_.kVF.PREMIUM_UNCANCEL:
                      return (0, i.jsxs)(c.qXd, {
                          color: ey === eh.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : ey === eh.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, i.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              ey === eh.p9.TIER_1 ? ef.intl.formatToPlainString(ef.t.fXv4ws, { daysLeft: em.metadata.daysLeft }) : ey === eh.p9.TIER_0 ? ef.intl.formatToPlainString(ef.t.ZOHZMj, { daysLeft: em.metadata.daysLeft }) : ef.intl.formatToPlainString(ef.t.outyHh, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('21367')]).then(n.bind(n, 561623));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      daysLeft: em.metadata.daysLeft,
                                                      premiumType: ey,
                                                      analyticsSource: 'Nag Bar',
                                                      premiumSubscription: em.metadata.premiumSubscription
                                                  });
                                          });
                                  },
                                  children: ey === eh.p9.TIER_1 ? ef.intl.string(ef.t.BkbUPD) : ey === eh.p9.TIER_0 ? ef.intl.string(ef.t.Px978f) : ef.intl.string(ef.t.LW5tCA)
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eW, dismissUntil: eK } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: eT,
                                  onClick: () => {
                                      eI(eK);
                                  }
                              }),
                              ef.intl.format(ef.t.zxU0Ki, { daysPastDue: eW }),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eI(eK), N.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.intl.string(ef.t.q8rxeX)
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ef.intl.string(ef.t.LlZaoa),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.intl.string(ef.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ef.intl.string(ef.t['30YfCg']),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ef.intl.string(ef.t.U5pKWF)
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ey === eh.p9.TIER_1 ? ef.intl.formatToPlainString(ef.t.b6QUvb, { daysLeft: em.metadata.daysLeft }) : ey === eh.p9.TIER_0 ? ef.intl.formatToPlainString(ef.t['tURZ/P'], { daysLeft: em.metadata.daysLeft }) : ef.intl.formatToPlainString(ef.t.AyC74O, { daysLeft: em.metadata.daysLeft }),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eI(null === (t = em.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), N.Z.open(e_.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ey === eh.p9.TIER_1 ? ef.intl.string(ef.t.lboF5O) : ey === eh.p9.TIER_0 ? ef.intl.string(ef.t['4UPwOj']) : ef.intl.string(ef.t['P/VvGR'])
                              })
                          ]
                      });
                  case e_.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, i.jsx)(B.h, {
                          buttonText: null !== (a = em.buttonText) && void 0 !== a ? a : ef.intl.string(ef.t['/g10LC']),
                          onGoBack: em.callback,
                          onDismiss: () => eI(),
                          showCloseButton: !0
                      });
                  case e_.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: e_.ZY5.IN_APP };
                      return (0, i.jsx)(D.Z, {
                          guildId: T,
                          analyticsLocations: eS,
                          analyticsLocation: e
                      });
                  }
                  case e_.kVF.QUARANTINED:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: ex.quarantineNotice,
                          children: [
                              ef.intl.string(ef.t.DVFJYW),
                              (0, i.jsx)(c.u3T, {
                                  href: ep.Z,
                                  target: '_blank',
                                  children: ef.intl.string(ef.t.kvHdFB)
                              }),
                              (0, i.jsx)(c.eee, {
                                  href: ec.Z.getArticleURL(e_.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: ex.quarantineLearnMoreLink,
                                  children: ef.intl.string(ef.t.hvVgAQ)
                              })
                          ]
                      });
                  case e_.kVF.BLOCKED_BY_PROXY:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              ef.intl.string(ef.t.Ugijzs),
                              (0, i.jsx)(c.u3T, {
                                  href: ''.concat(e_.yXt.STATUS),
                                  children: ef.intl.string(ef.t.hvVgAQ)
                              }),
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => eI(),
                                  noticeType: e_.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case e_.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eY, decisionId: eX } = em.metadata;
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != T && (0, O.T9)(T), eI(eY);
                                  }
                              }),
                              ef.intl.string(ef.t.B8ruyc),
                              (0, i.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != T &&
                                          (0, O.UE)(T, eX, () => {
                                              eI(eY), (0, O.T9)(T);
                                          });
                                  },
                                  children: ef.intl.string(ef.t.oX14Eh)
                              }),
                              null != T
                                  ? (0, i.jsx)(c.EyT, {
                                        onClick: () => G.Z.open(T, e_.pNK.GUILD_AUTOMOD, void 0, e_.KsC.AUTOMOD_MENTION_SPAM),
                                        children: ef.intl.string(ef.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      q.hZ(), eI();
                                  }
                              }),
                              ef.intl.string(ef.t.I1nKfH),
                              (0, i.jsx)(c.NoS, {
                                  noticeType: e_.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, i.jsx)(e, { ...t });
                                      }),
                                          q.hZ(),
                                          eI();
                                  },
                                  children: ef.intl.string(ef.t.l5xYnJ)
                              })
                          ]
                      });
                  case e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eq = r()().add(5, 'days').toDate();
                      return (0, i.jsx)(Y.Z, {
                          dismissCurrentNotice: () => {
                              (0, Z.EW)(es.m9[e_.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eI(eq);
                          },
                          subscriptionTier: eh.Si.TIER_2
                      });
                  case e_.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  noticeType: e_.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = em.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, X.nE)(em.metadata.streamKey);
                                  }
                              }),
                              ef.intl.string(ef.t.rOx44u)
                          ]
                      });
                  case e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, i.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, i.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eI(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              ef.intl.string(ef.t['0klLS0']),
                              (0, i.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, Q.Z)(), eI(null === (e = em.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: e_.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ef.intl.string(ef.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eS() {
    let { analyticsLocations: e } = (0, b.ZP)(T.Z.NOTICE);
    return (0, i.jsx)(b.Gt, {
        value: e,
        children: (0, i.jsx)(eN, {})
    });
}
