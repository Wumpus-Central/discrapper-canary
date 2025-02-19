n.d(t, {
    Z: () => eN,
    c: () => eE
});
var r = n(200651),
    i = n(192379),
    a = n(913527),
    o = n.n(a);
if (12633 == n.j) var l = n(568611);
var s = n(442837),
    c = n(481060),
    d = n(668781),
    u = n(846027),
    p = n(893776),
    m = n(117266),
    f = n(37234),
    h = n(254854),
    g = n(195500),
    _ = n(287734),
    b = n(205355),
    v = n(558381),
    y = n(223245),
    x = n(491428),
    O = n(401430),
    E = n(230711),
    j = n(726542),
    N = n(100527),
    C = n(906732),
    I = n(812206),
    S = n(391650),
    P = n(600164),
    T = n(605236),
    A = n(749277),
    w = n(131130),
    Z = n(492435),
    k = n(353926),
    R = n(506357),
    L = n(36459),
    D = n(236069),
    M = n(305325),
    W = n(281956),
    F = n(574650),
    U = n(665302),
    B = n(434404),
    G = n(918658),
    H = n(859428),
    V = n(963249),
    z = n(774276),
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
    er = n(914010),
    ei = n(594174),
    ea = n(55563),
    eo = n(695103),
    el = n(933429),
    es = n(626135),
    ec = n(63063),
    ed = n(72924),
    eu = n(69499),
    ep = n(912193),
    em = n(981631),
    ef = n(474936),
    eh = n(610674),
    eg = n(65154),
    e_ = n(388032),
    eb = n(923627);
function ev(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let ey = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eE();
                    }
                }),
                e_.NW.string(e_.t.o3zuY2),
                (0, r.jsx)(c.u3T, {
                    href: ec.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: e_.NW.string(e_.t.RYKKo6)
                })
            ]
        }),
    ex = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eE(), (0, ep.b)();
                    }
                }),
                e_.NW.string(e_.t.nCO9bG),
                (0, r.jsx)(c.u3T, {
                    href: ec.Z.getArticleURL(em.BhN.NO_INPUT_DETECTED),
                    children: e_.NW.string(e_.t.RYKKo6)
                })
            ]
        }),
    eO = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eE(), (0, ep.b)();
                    }
                }),
                e_.NW.string(e_.t.dNAJ19),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(em.S9g.USER_SETTINGS), E.Z.setSection(em.oAB.VOICE);
                    },
                    children: e_.NW.string(e_.t.I6YlBw)
                })
            ]
        });
function eE(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let ej =
    12633 == n.j
        ? i.memo(function () {
              var e, t, a;
              let h = (0, s.e7)([ei.default], () => ei.default.getCurrentUser()),
                  N = (0, s.e7)([er.Z], () => er.Z.getGuildId()),
                  ep = (0, s.e7)([el.ZP], () => el.ZP.getNotice()),
                  ej = (0, s.e7)([ee.Z], () => ee.Z.getGuild(N)),
                  { analyticsLocations: eN } = (0, C.ZP)(),
                  eC = null == ep ? void 0 : ep.type,
                  eI = (0, W.J)(N);
              i.useEffect(() => {
                  null != eC &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), es.default.track(em.rMx.APP_NOTICE_VIEWED, n);
                      })(eC, N);
              }, [eC, N]),
                  i.useEffect(() => {
                      if (null != ep && ep.type === em.kVF.SURVEY && null != ep.metadata) {
                          let { metadata: e } = ep,
                              t = k.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, Z.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = ep.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = ep.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [ep]);
              let eS = null != eC ? el.o[eC] : null,
                  eP = (function (e) {
                      let { enabled: t } = (0, z.ZP)(!0, e !== em.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                      return t || null == e ? null : el.m9[e];
                  })(eC);
              if (null == ep) return null;
              if (null != eS)
                  return (0, r.jsx)(w.q, {
                      dismissibleContent: eS,
                      noticeType: ep.type
                  });
              if (null != eP)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eP,
                      noticeType: ep.type
                  });
              let eT = null === (e = ep.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (ep.type) {
                  case em.kVF.LURKING_GUILD:
                      return (0, r.jsx)(H.Z, {});
                  case em.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(F.Z, {});
                  case em.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(J.Z, {});
                  case em.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eA } = ep.metadata;
                      return (0, r.jsx)(R.Z, { onDismiss: () => eE(eA) });
                  case em.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ew } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(ew),
                                  noticeType: em.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              e_.NW.format(e_.t['08KQ1N'], { helpCenterLink: ec.Z.getArticleURL(em.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case em.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(eZ),
                                  noticeType: em.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              e_.NW.format(e_.t['8Je+dX'], { helpCenterLink: ec.Z.getArticleURL(em.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case em.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: ek } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(ek),
                                  noticeType: em.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              e_.NW.format(e_.t.q8VPLi, { helpCenterLink: ec.Z.getArticleURL(em.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case em.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.GENERIC
                              }),
                              ep.message,
                              null != ep.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: ep.callback,
                                        noticeType: em.kVF.GENERIC,
                                        children: ep.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.LAUNCH_GAME_FAILURE
                              }),
                              ep.message,
                              null != ep.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: ep.callback,
                                        noticeType: em.kVF.LAUNCH_GAME_FAILURE,
                                        children: ep.buttonText
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.VOICE_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eE();
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED
                              }),
                              e_.NW.string(e_.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = en.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_DISABLED,
                                  children: e_.NW.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eE();
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              e_.NW.string(e_.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = en.Z.getLastSessionVoiceChannelId();
                                      null != e && null != $.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: em.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: e_.NW.string(e_.t.vD60Pj)
                              })
                          ]
                      });
                  case em.kVF.SPOTIFY_AUTO_PAUSED:
                      let eR = j.Z.get(em.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: eb.platformIcon,
                                  src: eR.icon.whiteSVG
                              }),
                              e_.NW.string(e_.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => E.Z.open(em.oAB.VOICE),
                                  noticeType: em.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: e_.NW.string(e_.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: eb.textLinkSmall,
                                  href: ec.Z.getArticleURL(em.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: e_.NW.string(e_.t.CiqAIS)
                              })
                          ]
                      });
                  case em.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              e_.NW.string(e_.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eI && null != N ? (0, M.hk)(N) : S.j()),
                                  children: e_.NW.string(e_.t.fiNVio)
                              })
                          ]
                      });
                  case em.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              e_.NW.string(e_.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          d.Z.show({
                                              title: e_.NW.string(e_.t.LykQYm),
                                              body: e_.NW.format(e_.t.azKEPz, { email: null == h ? void 0 : h.email }),
                                              secondaryConfirmText: e_.NW.string(e_.t.oP5zGB),
                                              onConfirmSecondary: S.j
                                          });
                                  },
                                  children: e_.NW.string(e_.t.WnX4Jy)
                              })
                          ]
                      });
                  case em.kVF.SCHEDULED_MAINTENANCE:
                      if (null == ep.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: em.kVF.SCHEDULED_MAINTENANCE
                              }),
                              e_.NW.format(e_.t.yb96S0, ep.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(em.yXt.STATUS, '/incidents/').concat(ep.metadata.id),
                                  children: e_.NW.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.NO_INPUT_DETECTED:
                      if (!et.Z.supports(eg.AN.LOOPBACK)) return (0, r.jsx)(ex, {});
                      return (0, r.jsx)(eO, {});
                  case em.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(ey, {});
                  case em.kVF.HARDWARE_MUTE:
                      if (null == ep.metadata) return null;
                      let { vendor: eL, model: eD } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              e_.NW.format(e_.t.qoDex8, {
                                  vendorName: eL.name,
                                  modelName: eD.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eE();
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eD.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: e_.NW.string(e_.t['Yl/Rio'])
                              })
                          ]
                      });
                  case em.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.STREAMER_MODE
                              }),
                              e_.NW.string(e_.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => y.Z.setEnabled(!1),
                                  noticeType: em.kVF.STREAMER_MODE,
                                  children: e_.NW.string(e_.t.R9GHyc)
                              })
                          ]
                      });
                  case em.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eE();
                                  }
                              }),
                              e_.NW.string(e_.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(em.S9g.USER_SETTINGS), E.Z.setSection(em.oAB.VOICE);
                                  },
                                  children: e_.NW.string(e_.t['51hI/v'])
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == ep.metadata) return null;
                      let { skuId: eM, applicationId: eW } = ep.metadata,
                          eF = ea.Z.get(eM),
                          eU = I.Z.getApplication(eW);
                      if (null == eF || null == eU) return null;
                      let eB = { page: em.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eF.id),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eb.premiumIcon
                              }),
                              e_.NW.format(e_.t['g3MU//'], {
                                  applicationName: eU.name,
                                  skuName: eF.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ed.S)({
                                          applicationId: eU.id,
                                          skuId: eF.id,
                                          openPremiumPaymentModal: () => {
                                              (0, V.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: ef.Si.TIER_2,
                                                  analyticsLocations: eN,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: eN,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? em.IlC.OVERLAY : em.IlC.APP
                                      }).then(() => m.Z(eF.id)),
                                  children: e_.NW.string(e_.t.KEwPY2)
                              })
                          ]
                      });
                  case em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == ep.metadata) return null;
                      let { skuId: e, applicationId: t } = ep.metadata,
                          n = ea.Z.get(e),
                          i = I.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eb.premiumIcon
                              }),
                              e_.NW.format(e_.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(l.rU, {
                                      onClick: () => eE(),
                                      to: {
                                          pathname: em.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: e_.NW.string(e_.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case em.kVF.SURVEY: {
                      let e = ep.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: a } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(a, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case em.kVF.SERVER_USAGE_SURVEY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eE();
                                  }
                              }),
                              e_.NW.format(e_.t.RomvGB, { guildName: null !== (t = null == ej ? void 0 : ej.name) && void 0 !== t ? t : 'this server' }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == h ? void 0 : h.id, '&guild_id=').concat(null == ej ? void 0 : ej.id), '_blank'), eE();
                                  },
                                  additionalTrackingProps: { guild_id: null == ej ? void 0 : ej.id },
                                  children: e_.NW.string(e_.t['4RQks7'])
                              })
                          ]
                      });
                  case em.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              e_.NW.string(e_.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: ec.Z.getArticleURL(em.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: e_.NW.string(e_.t['6ik4Xl'])
                              })
                          ]
                      });
                  case em.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              e_.NW.string(e_.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ev({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: e_.NW.string(e_.t['1WjMbG'])
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_ERROR:
                      if (null == ep.metadata) return null;
                      let { error: eG } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ev({}, t));
                                      }),
                                  children: e_.NW.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == ep.metadata) return null;
                      let { progress: eH, total: eV, name: ez } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(P.Z, {
                                  justify: P.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? e_.NW.formatToPlainString(e_.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eH,
                                                total: eV
                                            })
                                          : e_.NW.formatToPlainString(e_.t['lHZn+P'], {
                                                progress: eH,
                                                total: eV
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: eb.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case em.kVF.APPLICATION_TEST_MODE:
                      if (null == ep.metadata) return null;
                      if (null != eo.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(P.Z, {
                                  justify: P.Z.Justify.CENTER,
                                  align: P.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: e_.NW.format(e_.t['1qxVe3'], { applicationName: ep.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: O.mc,
                                          noticeType: em.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, r.jsx)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: (0, r.jsxs)(P.Z, {
                              justify: P.Z.Justify.CENTER,
                              align: P.Z.Align.CENTER,
                              children: [
                                  (0, r.jsx)('div', { children: e_.NW.format(e_.t.Fv5HrK, { applicationName: ep.metadata.applicationName }) }),
                                  (0, r.jsx)(eu.Z, {
                                      dropdownSize: eu.E.DropdownSizes.SMALL,
                                      className: eb.testModeSKUSelector,
                                      color: eu.E.Colors.WHITE,
                                      look: eu.E.Looks.OUTLINED,
                                      size: eu.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          v.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: em.jXE.NOTIFICATION_BAR,
                                                  object: em.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: ep.metadata.applicationId,
                                      children: e_.NW.string(e_.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: O.mc,
                                      noticeType: em.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case em.kVF.OUTBOUND_PROMOTION:
                      return (0, r.jsx)(K.Z, {});
                  case em.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(G.Z, {});
                  case em.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eT === ef.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eT === ef.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eb.premiumIcon
                              }),
                              eT === ef.p9.TIER_1 ? e_.NW.formatToPlainString(e_.t.fXv4ws, { daysLeft: ep.metadata.daysLeft }) : eT === ef.p9.TIER_0 ? e_.NW.formatToPlainString(e_.t.ZOHZMj, { daysLeft: ep.metadata.daysLeft }) : e_.NW.formatToPlainString(e_.t.outyHh, { daysLeft: ep.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('94949')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ev({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: ep.metadata.daysLeft,
                                                              premiumType: eT,
                                                              analyticsSource: 'Nag Bar',
                                                              premiumSubscription: ep.metadata.premiumSubscription
                                                          }),
                                                      Object.getOwnPropertyDescriptors
                                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                          : (function (e, t) {
                                                                var n = Object.keys(e);
                                                                if (Object.getOwnPropertySymbols) {
                                                                    var r = Object.getOwnPropertySymbols(e);
                                                                    n.push.apply(n, r);
                                                                }
                                                                return n;
                                                            })(Object(i)).forEach(function (e) {
                                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                            }),
                                                      n)
                                                  );
                                              };
                                          });
                                  },
                                  children: eT === ef.p9.TIER_1 ? e_.NW.string(e_.t.BkbUPD) : eT === ef.p9.TIER_0 ? e_.NW.string(e_.t.Px978f) : e_.NW.string(e_.t.LW5tCA)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eK, dismissUntil: eY } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eC,
                                  onClick: () => {
                                      eE(eY);
                                  }
                              }),
                              e_.NW.format(e_.t.zxU0Ki, { daysPastDue: eK }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eE(eY), E.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.NW.string(e_.t.q8rxeX)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.NW.string(e_.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.NW.string(e_.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              e_.NW.string(e_.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: e_.NW.string(e_.t.U5pKWF)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eT === ef.p9.TIER_1 ? e_.NW.formatToPlainString(e_.t.b6QUvb, { daysLeft: ep.metadata.daysLeft }) : eT === ef.p9.TIER_0 ? e_.NW.formatToPlainString(e_.t['tURZ/P'], { daysLeft: ep.metadata.daysLeft }) : e_.NW.formatToPlainString(e_.t.AyC74O, { daysLeft: ep.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eE(null === (t = ep.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(em.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eT === ef.p9.TIER_1 ? e_.NW.string(e_.t.lboF5O) : eT === ef.p9.TIER_0 ? e_.NW.string(e_.t['4UPwOj']) : e_.NW.string(e_.t['P/VvGR'])
                              })
                          ]
                      });
                  case em.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(U.h, {
                          buttonText: null !== (a = ep.buttonText) && void 0 !== a ? a : e_.NW.string(e_.t['/g10LC']),
                          onGoBack: ep.callback,
                          onDismiss: () => eE(),
                          showCloseButton: !0
                      });
                  case em.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: em.ZY5.IN_APP };
                      return (0, r.jsx)(D.Z, {
                          guildId: N,
                          analyticsLocations: eN,
                          analyticsLocation: e
                      });
                  }
                  case em.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: eb.quarantineNotice,
                          children: [
                              e_.NW.string(e_.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eh.Z,
                                  target: '_blank',
                                  children: e_.NW.string(e_.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: ec.Z.getArticleURL(em.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eb.quarantineLearnMoreLink,
                                  children: e_.NW.string(e_.t.hvVgAQ)
                              })
                          ]
                      });
                  case em.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              e_.NW.string(e_.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(em.yXt.STATUS),
                                  children: e_.NW.string(e_.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eE(),
                                  noticeType: em.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eX, decisionId: eq } = ep.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != N && (0, L.T9)(N), eE(eX);
                                  }
                              }),
                              e_.NW.string(e_.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != N &&
                                          (0, L.UE)(N, eq, () => {
                                              eE(eX), (0, L.T9)(N);
                                          });
                                  },
                                  children: e_.NW.string(e_.t.oX14Eh)
                              }),
                              null != N
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => B.Z.open(N, em.pNK.GUILD_AUTOMOD, void 0, em.KsC.AUTOMOD_MENTION_SPAM),
                                        children: e_.NW.string(e_.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case em.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      q.hZ(), eE();
                                  }
                              }),
                              e_.NW.string(e_.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: em.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ev({}, t));
                                      }),
                                          q.hZ(),
                                          eE();
                                  },
                                  children: e_.NW.string(e_.t.l5xYnJ)
                              })
                          ]
                      });
                  case em.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eQ = o()().add(5, 'days').toDate();
                      return (0, r.jsx)(Y.Z, {
                          dismissCurrentNotice: () => {
                              (0, T.EW)(el.m9[em.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eE(eQ);
                          },
                          subscriptionTier: ef.Si.TIER_2
                      });
                  case em.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: em.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = ep.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, X.nE)(ep.metadata.streamKey);
                                  }
                              }),
                              e_.NW.string(e_.t.rOx44u)
                          ]
                      });
                  case em.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eE(null === (e = ep.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              e_.NW.string(e_.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, Q.Z)(), eE(null === (e = ep.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: em.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: e_.NW.string(e_.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eN() {
    let { analyticsLocations: e } = (0, C.ZP)(N.Z.NOTICE);
    return (0, r.jsx)(C.Gt, {
        value: e,
        children: (0, r.jsx)(ej, {})
    });
}
