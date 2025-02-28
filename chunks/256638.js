n.d(t, {
    Z: () => eS,
    c: () => eC
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
    T = n(600164),
    P = n(605236),
    A = n(749277),
    w = n(131130),
    Z = n(785141),
    k = n(272395),
    R = n(492435),
    D = n(353926),
    L = n(506357),
    M = n(36459),
    W = n(236069),
    F = n(305325),
    U = n(281956),
    B = n(574650),
    G = n(665302),
    H = n(434404),
    V = n(918658),
    z = n(859428),
    K = n(963249),
    Y = n(774276),
    X = n(14335),
    q = n(246965),
    Q = n(272008),
    J = n(523255),
    $ = n(496729),
    ee = n(852923),
    et = n(592125),
    en = n(430824),
    er = n(131951),
    ei = n(19780),
    ea = n(914010),
    eo = n(594174),
    el = n(55563),
    es = n(695103),
    ec = n(933429),
    ed = n(626135),
    eu = n(63063),
    ep = n(72924),
    em = n(69499),
    ef = n(912193),
    eh = n(981631),
    eg = n(474936),
    e_ = n(610674),
    eb = n(65154),
    ev = n(388032),
    ey = n(24060);
function ex(e) {
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
let eO = (e) => {
        var t;
        let { error: n, location: i } = e,
            a = null === (t = (0, Z.hp)(n)) || void 0 === t ? void 0 : t.errorCode,
            o = ev.NW.formatToPlainString(ev.t['ejOT9/'], { errorCode: a }),
            { avErrorUIEnabled: l } = (0, k.J)({ location: i });
        return (
            l &&
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                tag: 'span',
                style: { marginLeft: '8px' },
                selectable: !0,
                children: o
            })
        );
    },
    eE = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eC();
                    }
                }),
                ev.NW.string(ev.t.o3zuY2),
                (0, r.jsx)(eO, {
                    error: Z.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ev.NW.string(ev.t.RYKKo6)
                })
            ]
        }),
    ej = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eC(), (0, ef.b)();
                    }
                }),
                ev.NW.string(ev.t.nCO9bG),
                (0, r.jsx)(eO, {
                    error: Z.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ev.NW.string(ev.t.RYKKo6)
                })
            ]
        }),
    eN = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eC(), (0, ef.b)();
                    }
                }),
                ev.NW.string(ev.t.dNAJ19),
                (0, r.jsx)(eO, {
                    error: Z.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(eh.S9g.USER_SETTINGS), E.Z.setSection(eh.oAB.VOICE);
                    },
                    children: ev.NW.string(ev.t.I6YlBw)
                })
            ]
        });
function eC(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: o()(e) } : void 0);
}
let eI =
    12633 == n.j
        ? i.memo(function () {
              var e, t, a;
              let h = (0, s.e7)([eo.default], () => eo.default.getCurrentUser()),
                  N = (0, s.e7)([ea.Z], () => ea.Z.getGuildId()),
                  Z = (0, s.e7)([ec.ZP], () => ec.ZP.getNotice()),
                  k = (0, s.e7)([en.Z], () => en.Z.getGuild(N)),
                  { analyticsLocations: ef } = (0, C.ZP)(),
                  eO = null == Z ? void 0 : Z.type,
                  eI = (0, U.J)(N);
              i.useEffect(() => {
                  null != eO &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), ed.default.track(eh.rMx.APP_NOTICE_VIEWED, n);
                      })(eO, N);
              }, [eO, N]),
                  i.useEffect(() => {
                      if (null != Z && Z.type === eh.kVF.SURVEY && null != Z.metadata) {
                          let { metadata: e } = Z,
                              t = D.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, R.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null === (e = Z.metadata) || void 0 === e ? void 0 : e.id) != null && (await (0, x.g8)(null === (t = Z.metadata) || void 0 === t ? void 0 : t.id));
                              })();
                      }
                  }, [Z]);
              let eS = null != eO ? ec.o[eO] : null,
                  eT = (function (e) {
                      let { enabled: t } = (0, Y.ZP)(!0, e !== eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
                      return t || null == e ? null : ec.m9[e];
                  })(eO);
              if (null == Z) return null;
              if (null != eS)
                  return (0, r.jsx)(w.q, {
                      dismissibleContent: eS,
                      noticeType: Z.type
                  });
              if (null != eT)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eT,
                      noticeType: Z.type
                  });
              let eP = null === (e = Z.metadata) || void 0 === e ? void 0 : e.premiumType;
              switch (Z.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, r.jsx)(z.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(B.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(ee.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eA } = Z.metadata;
                      return (0, r.jsx)(L.Z, { onDismiss: () => eC(eA) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ew } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(ew),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              ev.NW.format(ev.t['08KQ1N'], { helpCenterLink: eu.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(eZ),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              ev.NW.format(ev.t['8Je+dX'], { helpCenterLink: eu.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: ek } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(ek),
                                  noticeType: eh.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              ev.NW.format(ev.t.q8VPLi, { helpCenterLink: eu.Z.getArticleURL(eh.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.GENERIC
                              }),
                              Z.message,
                              null != Z.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: Z.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: Z.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE
                              }),
                              Z.message,
                              null != Z.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: Z.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: Z.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.VOICE_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eC();
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED
                              }),
                              ev.NW.string(ev.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: ev.NW.string(ev.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eC();
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              ev.NW.string(ev.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getLastSessionVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: ev.NW.string(ev.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let eR = j.Z.get(eh.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: ey.platformIcon,
                                  src: eR.icon.whiteSVG
                              }),
                              ev.NW.string(ev.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => E.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: ev.NW.string(ev.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: ey.textLinkSmall,
                                  href: eu.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: ev.NW.string(ev.t.CiqAIS)
                              })
                          ]
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ev.NW.string(ev.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eI && null != N ? (0, F.hk)(N) : S.j()),
                                  children: ev.NW.string(ev.t.fiNVio)
                              })
                          ]
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ev.NW.string(ev.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          d.Z.show({
                                              title: ev.NW.string(ev.t.LykQYm),
                                              body: ev.NW.format(ev.t.azKEPz, { email: null == h ? void 0 : h.email }),
                                              secondaryConfirmText: ev.NW.string(ev.t.oP5zGB),
                                              onConfirmSecondary: S.j
                                          });
                                  },
                                  children: ev.NW.string(ev.t.WnX4Jy)
                              })
                          ]
                      });
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == Z.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE
                              }),
                              ev.NW.format(ev.t.yb96S0, Z.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS, '/incidents/').concat(Z.metadata.id),
                                  children: ev.NW.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!er.Z.supports(eb.AN.LOOPBACK)) return (0, r.jsx)(ej, {});
                      return (0, r.jsx)(eN, {});
                  case eh.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(eE, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == Z.metadata) return null;
                      let { vendor: eD, model: eL } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ev.NW.format(ev.t.qoDex8, {
                                  vendorName: eD.name,
                                  modelName: eL.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      u.Z.setEnableHardwareMuteNotice(!1), eC();
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eL.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: ev.NW.string(ev.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eh.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.STREAMER_MODE
                              }),
                              ev.NW.string(ev.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => y.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: ev.NW.string(ev.t.R9GHyc)
                              })
                          ]
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eC();
                                  }
                              }),
                              ev.NW.string(ev.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(eh.S9g.USER_SETTINGS), E.Z.setSection(eh.oAB.VOICE);
                                  },
                                  children: ev.NW.string(ev.t['51hI/v'])
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == Z.metadata) return null;
                      let { skuId: eM, applicationId: eW } = Z.metadata,
                          eF = el.Z.get(eM),
                          eU = I.Z.getApplication(eW);
                      if (null == eF || null == eU) return null;
                      let eB = { page: eh.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eF.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ey.premiumIcon
                              }),
                              ev.NW.format(ev.t['g3MU//'], {
                                  applicationName: eU.name,
                                  skuName: eF.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ep.S)({
                                          applicationId: eU.id,
                                          skuId: eF.id,
                                          openPremiumPaymentModal: () => {
                                              (0, K.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eg.Si.TIER_2,
                                                  analyticsLocations: ef,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: ef,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP
                                      }).then(() => m.Z(eF.id)),
                                  children: ev.NW.string(ev.t.KEwPY2)
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == Z.metadata) return null;
                      let { skuId: e, applicationId: t } = Z.metadata,
                          n = el.Z.get(e),
                          i = I.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ey.premiumIcon
                              }),
                              ev.NW.format(ev.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(l.rU, {
                                      onClick: () => eC(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: ev.NW.string(ev.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = Z.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: a } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (0, x.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(a, '_blank'), (0, x.hZ)(t, !1);
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case eh.kVF.SERVER_USAGE_SURVEY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      eC();
                                  }
                              }),
                              ev.NW.format(ev.t.RomvGB, { guildName: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : 'this server' }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == h ? void 0 : h.id, '&guild_id=').concat(null == k ? void 0 : k.id), '_blank'), eC();
                                  },
                                  additionalTrackingProps: { guild_id: null == k ? void 0 : k.id },
                                  children: ev.NW.string(ev.t['4RQks7'])
                              })
                          ]
                      });
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ev.NW.string(ev.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: eu.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: ev.NW.string(ev.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              ev.NW.string(ev.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ex({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: ev.NW.string(ev.t['1WjMbG'])
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == Z.metadata) return null;
                      let { error: eG } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                  children: ev.NW.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == Z.metadata) return null;
                      let { progress: eH, total: eV, name: ez } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? ev.NW.formatToPlainString(ev.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eH,
                                                total: eV
                                            })
                                          : ev.NW.formatToPlainString(ev.t['lHZn+P'], {
                                                progress: eH,
                                                total: eV
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: ey.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == Z.metadata) return null;
                      if (null != es.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  align: T.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: ev.NW.format(ev.t['1qxVe3'], { applicationName: Z.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: O.mc,
                                          noticeType: eh.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, r.jsx)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: (0, r.jsxs)(T.Z, {
                              justify: T.Z.Justify.CENTER,
                              align: T.Z.Align.CENTER,
                              children: [
                                  (0, r.jsx)('div', { children: ev.NW.format(ev.t.Fv5HrK, { applicationName: Z.metadata.applicationName }) }),
                                  (0, r.jsx)(em.Z, {
                                      dropdownSize: em.E.DropdownSizes.SMALL,
                                      className: ey.testModeSKUSelector,
                                      color: em.E.Colors.WHITE,
                                      look: em.E.Looks.OUTLINED,
                                      size: em.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          v.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: Z.metadata.applicationId,
                                      children: ev.NW.string(ev.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: O.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eh.kVF.OUTBOUND_PROMOTION:
                      return (0, r.jsx)(X.Z, {});
                  case eh.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(V.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eP === eg.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eP === eg.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ey.premiumIcon
                              }),
                              eP === eg.p9.TIER_1 ? ev.NW.formatToPlainString(ev.t.fXv4ws, { daysLeft: Z.metadata.daysLeft }) : eP === eg.p9.TIER_0 ? ev.NW.formatToPlainString(ev.t.ZOHZMj, { daysLeft: Z.metadata.daysLeft }) : ev.NW.formatToPlainString(ev.t.outyHh, { daysLeft: Z.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('29681')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ex({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: Z.metadata.daysLeft,
                                                              premiumType: eP,
                                                              analyticsSource: 'Nag Bar',
                                                              premiumSubscription: Z.metadata.premiumSubscription
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
                                  children: eP === eg.p9.TIER_1 ? ev.NW.string(ev.t.BkbUPD) : eP === eg.p9.TIER_0 ? ev.NW.string(ev.t.Px978f) : ev.NW.string(ev.t.LW5tCA)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eK, dismissUntil: eY } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eO,
                                  onClick: () => {
                                      eC(eY);
                                  }
                              }),
                              ev.NW.format(ev.t.zxU0Ki, { daysPastDue: eK }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eC(eY), E.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ev.NW.string(ev.t.q8rxeX)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ev.NW.string(ev.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ev.NW.string(ev.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ev.NW.string(ev.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ev.NW.string(ev.t.U5pKWF)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eP === eg.p9.TIER_1 ? ev.NW.formatToPlainString(ev.t.b6QUvb, { daysLeft: Z.metadata.daysLeft }) : eP === eg.p9.TIER_0 ? ev.NW.formatToPlainString(ev.t['tURZ/P'], { daysLeft: Z.metadata.daysLeft }) : ev.NW.formatToPlainString(ev.t.AyC74O, { daysLeft: Z.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null === (t = Z.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), E.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eP === eg.p9.TIER_1 ? ev.NW.string(ev.t.lboF5O) : eP === eg.p9.TIER_0 ? ev.NW.string(ev.t['4UPwOj']) : ev.NW.string(ev.t['P/VvGR'])
                              })
                          ]
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(G.h, {
                          buttonText: null !== (a = Z.buttonText) && void 0 !== a ? a : ev.NW.string(ev.t['/g10LC']),
                          onGoBack: Z.callback,
                          onDismiss: () => eC(),
                          showCloseButton: !0
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, r.jsx)(W.Z, {
                          guildId: N,
                          analyticsLocations: ef,
                          analyticsLocation: e
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: ey.quarantineNotice,
                          children: [
                              ev.NW.string(ev.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: e_.Z,
                                  target: '_blank',
                                  children: ev.NW.string(ev.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: eu.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: ey.quarantineLearnMoreLink,
                                  children: ev.NW.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              ev.NW.string(ev.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS),
                                  children: ev.NW.string(ev.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eX, decisionId: eq } = Z.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != N && (0, M.T9)(N), eC(eX);
                                  }
                              }),
                              ev.NW.string(ev.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != N &&
                                          (0, M.UE)(N, eq, () => {
                                              eC(eX), (0, M.T9)(N);
                                          });
                                  },
                                  children: ev.NW.string(ev.t.oX14Eh)
                              }),
                              null != N
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => H.Z.open(N, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: ev.NW.string(ev.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      J.hZ(), eC();
                                  }
                              }),
                              ev.NW.string(ev.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                          J.hZ(),
                                          eC();
                                  },
                                  children: ev.NW.string(ev.t.l5xYnJ)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eQ = o()().add(5, 'days').toDate();
                      return (0, r.jsx)(q.Z, {
                          dismissCurrentNotice: () => {
                              (0, P.EW)(ec.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eC(eQ);
                          },
                          subscriptionTier: eg.Si.TIER_2
                      });
                  case eh.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null === (e = Z.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, Q.nE)(Z.metadata.streamKey);
                                  }
                              }),
                              ev.NW.string(ev.t.rOx44u)
                          ]
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eC(null === (e = Z.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              ev.NW.string(ev.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, $.Z)(), eC(null === (e = Z.metadata) || void 0 === e ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ev.NW.string(ev.t.e4y2VF)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eS() {
    let { analyticsLocations: e } = (0, C.ZP)(N.Z.NOTICE);
    return (0, r.jsx)(C.Gt, {
        value: e,
        children: (0, r.jsx)(eI, {})
    });
}
