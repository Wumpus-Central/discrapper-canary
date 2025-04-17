n.d(t, {
    Z: () => eS,
    c: () => ej
});
var r = n(200651),
    i = n(192379),
    l = n(913527),
    a = n.n(l);
if (12633 == n.j) var o = n(568611);
var s = n(442837),
    c = n(481060),
    u = n(668781),
    d = n(846027),
    p = n(893776),
    m = n(117266),
    f = n(37234),
    h = n(254854),
    g = n(195500),
    _ = n(287734),
    b = n(205355),
    x = n(558381),
    y = n(223245),
    E = n(491428),
    v = n(401430),
    N = n(230711),
    O = n(726542),
    j = n(100527),
    C = n(906732),
    S = n(812206),
    I = n(391650),
    T = n(600164),
    P = n(605236),
    A = n(749277),
    w = n(196068),
    Z = n(131130),
    R = n(458725),
    k = n(386146),
    D = n(492435),
    L = n(353926),
    M = n(506357),
    W = n(36459),
    U = n(236069),
    F = n(305325),
    B = n(281956),
    G = n(574650),
    H = n(665302),
    V = n(434404),
    z = n(918658),
    K = n(859428),
    Y = n(963249),
    X = n(246965),
    q = n(272008),
    Q = n(523255),
    J = n(496729),
    $ = n(852923),
    ee = n(592125),
    et = n(430824),
    en = n(131951),
    er = n(19780),
    ei = n(914010),
    el = n(594174),
    ea = n(55563),
    eo = n(695103),
    es = n(933429),
    ec = n(626135),
    eu = n(63063),
    ed = n(72924),
    ep = n(69499),
    em = n(912193),
    ef = n(981631),
    eh = n(474936),
    eg = n(610674),
    e_ = n(65154),
    eb = n(388032),
    ex = n(131715);
function ey(e) {
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
let eE = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            a = null == (t = (0, R.hp)(n)) ? void 0 : t.errorCode,
            o = eb.NW.formatToPlainString(eb.t['ejOT9/'], { errorCode: a }),
            { avErrorUIEnabled: s } = (0, k.JN)({ location: i });
        if (!s) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: 'text-sm/bold',
            color: 'currentColor',
            tag: 'span',
            className: ex.errorCodeNoticeText,
            selectable: !0,
            children: o
        });
        return l
            ? (0, r.jsx)(c.P3F, {
                  tag: 'span',
                  className: ex.errorCodeNoticeClickable,
                  onClick: () => l && open(eu.Z.getArticleURL(ef.BhN.AV_ERROR_CODES)),
                  children: u
              })
            : u;
    },
    ev = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ej();
                    }
                }),
                eb.NW.string(eb.t.o3zuY2),
                (0, r.jsx)(eE, {
                    error: R.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
                    children: eb.NW.string(eb.t.RYKKo6)
                })
            ]
        }),
    eN = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ej(), (0, em.b)();
                    }
                }),
                eb.NW.string(eb.t.nCO9bG),
                (0, r.jsx)(eE, {
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
                    children: eb.NW.string(eb.t.RYKKo6)
                })
            ]
        }),
    eO = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ej(), (0, em.b)();
                    }
                }),
                eb.NW.string(eb.t.dNAJ19),
                (0, r.jsx)(eE, {
                    allowClick: !0,
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(ef.S9g.USER_SETTINGS), N.Z.setSection(ef.oAB.VOICE);
                    },
                    children: eb.NW.string(eb.t.I6YlBw)
                })
            ]
        });
function ej(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eC =
    12633 == n.j
        ? i.memo(function () {
              var e, t, l;
              let h = (0, s.e7)([el.default], () => el.default.getCurrentUser()),
                  j = (0, s.e7)([ei.Z], () => ei.Z.getGuildId()),
                  R = (0, s.e7)([es.ZP], () => es.ZP.getNotice()),
                  k = (0, s.e7)([et.Z], () => et.Z.getGuild(j)),
                  { analyticsLocations: em } = (0, C.ZP)(),
                  eE = null == R ? void 0 : R.type,
                  eC = (0, B.J)(j);
              i.useEffect(() => {
                  null != eE &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), ec.default.track(ef.rMx.APP_NOTICE_VIEWED, n);
                      })(eE, j);
              }, [eE, j]),
                  i.useEffect(() => {
                      if (null != R && R.type === ef.kVF.SURVEY && null != R.metadata) {
                          let { metadata: e } = R,
                              t = L.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, D.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = R.metadata) ? void 0 : e.id) != null && (await (0, E.g8)(null == (t = R.metadata) ? void 0 : t.id));
                              })();
                      }
                  }, [R]);
              let eS = null != eE ? es.o[eE] : null,
                  eI = null != eE ? es.nA[eE] : null,
                  eT = null != eE ? es.m9[eE] : null;
              if (null == R) return null;
              if (null != eS)
                  return (0, r.jsx)(Z.q, {
                      dismissibleContent: eS,
                      noticeType: R.type
                  });
              if (null != eI) return (0, r.jsx)(w.c, { dismissibleContent: eI });
              if (null != eT)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eT,
                      noticeType: R.type
                  });
              let eP = null == (e = R.metadata) ? void 0 : e.premiumType;
              switch (R.type) {
                  case ef.kVF.LURKING_GUILD:
                      return (0, r.jsx)(K.Z, {});
                  case ef.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(G.Z, {});
                  case ef.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)($.Z, {});
                  case ef.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eA } = R.metadata;
                      return (0, r.jsx)(M.Z, { onDismiss: () => ej(eA) });
                  case ef.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: ew } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(ew),
                                  noticeType: ef.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eb.NW.format(eb.t['08KQ1N'], { helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(eZ),
                                  noticeType: ef.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eb.NW.format(eb.t['8Je+dX'], { helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(eR),
                                  noticeType: ef.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              eb.NW.format(eb.t.q8VPLi, { helpCenterLink: eu.Z.getArticleURL(ef.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.GENERIC
                              }),
                              R.message,
                              null != R.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: R.callback,
                                        noticeType: ef.kVF.GENERIC,
                                        children: R.buttonText
                                    })
                                  : null
                          ]
                      });
                  case ef.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.LAUNCH_GAME_FAILURE
                              }),
                              R.message,
                              null != R.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: R.callback,
                                        noticeType: ef.kVF.LAUNCH_GAME_FAILURE,
                                        children: R.buttonText
                                    })
                                  : null
                          ]
                      });
                  case ef.kVF.VOICE_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), ej();
                                  },
                                  noticeType: ef.kVF.VOICE_DISABLED
                              }),
                              eb.NW.string(eb.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = er.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != ee.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ef.kVF.VOICE_DISABLED,
                                  children: eb.NW.string(eb.t.vD60Pj)
                              })
                          ]
                      });
                  case ef.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), ej();
                                  },
                                  noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eb.NW.string(eb.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = er.Z.getLastSessionVoiceChannelId();
                                      null != e && null != ee.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eb.NW.string(eb.t.vD60Pj)
                              })
                          ]
                      });
                  case ef.kVF.SPOTIFY_AUTO_PAUSED:
                      let ek = O.Z.get(ef.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: ex.platformIcon,
                                  src: ek.icon.whiteSVG
                              }),
                              eb.NW.string(eb.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => N.Z.open(ef.oAB.VOICE),
                                  noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eb.NW.string(eb.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: ex.textLinkSmall,
                                  href: eu.Z.getArticleURL(ef.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eb.NW.string(eb.t.CiqAIS)
                              })
                          ]
                      });
                  case ef.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eb.NW.string(eb.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eC && null != j ? (0, F.hk)(j) : I.j()),
                                  children: eb.NW.string(eb.t.fiNVio)
                              })
                          ]
                      });
                  case ef.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eb.NW.string(eb.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          u.Z.show({
                                              title: eb.NW.string(eb.t.LykQYm),
                                              body: eb.NW.format(eb.t.azKEPz, { email: null == h ? void 0 : h.email }),
                                              secondaryConfirmText: eb.NW.string(eb.t.oP5zGB),
                                              onConfirmSecondary: I.j
                                          });
                                  },
                                  children: eb.NW.string(eb.t.WnX4Jy)
                              })
                          ]
                      });
                  case ef.kVF.SCHEDULED_MAINTENANCE:
                      if (null == R.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: ef.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eb.NW.format(eb.t.yb96S0, R.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(ef.yXt.STATUS, '/incidents/').concat(R.metadata.id),
                                  children: eb.NW.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.NO_INPUT_DETECTED:
                      if (!en.Z.supports(e_.AN.LOOPBACK)) return (0, r.jsx)(eN, {});
                      return (0, r.jsx)(eO, {});
                  case ef.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(ev, {});
                  case ef.kVF.HARDWARE_MUTE:
                      if (null == R.metadata) return null;
                      let { vendor: eD, model: eL } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eb.NW.format(eb.t.qoDex8, {
                                  vendorName: eD.name,
                                  modelName: eL.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), ej();
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eL.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eb.NW.string(eb.t['Yl/Rio'])
                              })
                          ]
                      });
                  case ef.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.STREAMER_MODE
                              }),
                              eb.NW.string(eb.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => y.Z.setEnabled(!1),
                                  noticeType: ef.kVF.STREAMER_MODE,
                                  children: eb.NW.string(eb.t.R9GHyc)
                              })
                          ]
                      });
                  case ef.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      ej();
                                  }
                              }),
                              eb.NW.string(eb.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(ef.S9g.USER_SETTINGS), N.Z.setSection(ef.oAB.VOICE);
                                  },
                                  children: eb.NW.string(eb.t['51hI/v'])
                              })
                          ]
                      });
                  case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == R.metadata) return null;
                      let { skuId: eM, applicationId: eW } = R.metadata,
                          eU = ea.Z.get(eM),
                          eF = S.Z.getApplication(eW);
                      if (null == eU || null == eF) return null;
                      let eB = { page: ef.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eU.id),
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eb.NW.format(eb.t['g3MU//'], {
                                  applicationName: eF.name,
                                  skuName: eU.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ed.S)({
                                          applicationId: eF.id,
                                          skuId: eU.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Y.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.Si.TIER_2,
                                                  analyticsLocations: em,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: em,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? ef.IlC.OVERLAY : ef.IlC.APP
                                      }).then(() => m.Z(eU.id)),
                                  children: eb.NW.string(eb.t.KEwPY2)
                              })
                          ]
                      });
                  case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == R.metadata) return null;
                      let { skuId: e, applicationId: t } = R.metadata,
                          n = ea.Z.get(e),
                          i = S.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eb.NW.format(eb.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(o.rU, {
                                      onClick: () => ej(),
                                      to: {
                                          pathname: ef.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eb.NW.string(eb.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case ef.kVF.SURVEY: {
                      let e = R.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.SURVEY,
                                  onClick: () => {
                                      (0, E.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, E.hZ)(t, !1);
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case ef.kVF.SERVER_USAGE_SURVEY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      ej();
                                  }
                              }),
                              eb.NW.format(eb.t.RomvGB, { guildName: null != (t = null == k ? void 0 : k.name) ? t : 'this server' }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == h ? void 0 : h.id, '&guild_id=').concat(null == k ? void 0 : k.id), '_blank'), ej();
                                  },
                                  additionalTrackingProps: { guild_id: null == k ? void 0 : k.id },
                                  children: eb.NW.string(eb.t['4RQks7'])
                              })
                          ]
                      });
                  case ef.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eb.NW.string(eb.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: eu.Z.getArticleURL(ef.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eb.NW.string(eb.t['6ik4Xl'])
                              })
                          ]
                      });
                  case ef.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eb.NW.string(eb.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ey({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: eb.NW.string(eb.t['1WjMbG'])
                              })
                          ]
                      });
                  case ef.kVF.DISPATCH_ERROR:
                      if (null == R.metadata) return null;
                      let { error: eG } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ey({}, t));
                                      }),
                                  children: eb.NW.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == R.metadata) return null;
                      let { progress: eH, total: eV, name: ez } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? eb.NW.formatToPlainString(eb.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eH,
                                                total: eV
                                            })
                                          : eb.NW.formatToPlainString(eb.t['lHZn+P'], {
                                                progress: eH,
                                                total: eV
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: ex.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case ef.kVF.APPLICATION_TEST_MODE:
                      if (null == R.metadata) return null;
                      if (null != eo.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  align: T.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: eb.NW.format(eb.t['1qxVe3'], { applicationName: R.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: v.mc,
                                          noticeType: ef.kVF.APPLICATION_TEST_MODE
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
                                  (0, r.jsx)('div', { children: eb.NW.format(eb.t.Fv5HrK, { applicationName: R.metadata.applicationName }) }),
                                  (0, r.jsx)(ep.Z, {
                                      dropdownSize: ep.E.DropdownSizes.SMALL,
                                      className: ex.testModeSKUSelector,
                                      color: ep.E.Colors.WHITE,
                                      look: ep.E.Looks.OUTLINED,
                                      size: ep.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          x.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: ef.jXE.NOTIFICATION_BAR,
                                                  object: ef.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: R.metadata.applicationId,
                                      children: eb.NW.string(eb.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: v.mc,
                                      noticeType: ef.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case ef.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(z.Z, {});
                  case ef.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eP === eh.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eP === eh.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eP === eh.p9.TIER_1 ? eb.NW.formatToPlainString(eb.t.fXv4ws, { daysLeft: R.metadata.daysLeft }) : eP === eh.p9.TIER_0 ? eb.NW.formatToPlainString(eb.t.ZOHZMj, { daysLeft: R.metadata.daysLeft }) : eb.NW.formatToPlainString(eb.t.outyHh, { daysLeft: R.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('17938'), n.e('85334')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ey({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: R.metadata.daysLeft,
                                                              premiumType: eP,
                                                              analyticsSource: 'Nag Bar',
                                                              premiumSubscription: R.metadata.premiumSubscription
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
                                  children: eP === eh.p9.TIER_1 ? eb.NW.string(eb.t.BkbUPD) : eP === eh.p9.TIER_0 ? eb.NW.string(eb.t.Px978f) : eb.NW.string(eb.t.LW5tCA)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eK, dismissUntil: eY } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eE,
                                  onClick: () => {
                                      ej(eY);
                                  }
                              }),
                              eb.NW.format(eb.t.zxU0Ki, { daysPastDue: eK }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      ej(eY), N.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.NW.string(eb.t.q8rxeX)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eb.NW.string(eb.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), N.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.NW.string(eb.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eb.NW.string(eb.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), N.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.NW.string(eb.t.U5pKWF)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eP === eh.p9.TIER_1 ? eb.NW.formatToPlainString(eb.t.b6QUvb, { daysLeft: R.metadata.daysLeft }) : eP === eh.p9.TIER_0 ? eb.NW.formatToPlainString(eb.t['tURZ/P'], { daysLeft: R.metadata.daysLeft }) : eb.NW.formatToPlainString(eb.t.AyC74O, { daysLeft: R.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), N.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eP === eh.p9.TIER_1 ? eb.NW.string(eb.t.lboF5O) : eP === eh.p9.TIER_0 ? eb.NW.string(eb.t['4UPwOj']) : eb.NW.string(eb.t['P/VvGR'])
                              })
                          ]
                      });
                  case ef.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(H.h, {
                          buttonText: null != (l = R.buttonText) ? l : eb.NW.string(eb.t['/g10LC']),
                          onGoBack: R.callback,
                          onDismiss: () => ej(),
                          showCloseButton: !0
                      });
                  case ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: ef.ZY5.IN_APP };
                      return (0, r.jsx)(U.Z, {
                          guildId: j,
                          analyticsLocations: em,
                          analyticsLocation: e
                      });
                  }
                  case ef.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: ex.quarantineNotice,
                          children: [
                              eb.NW.string(eb.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eg.Z,
                                  target: '_blank',
                                  children: eb.NW.string(eb.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: eu.Z.getArticleURL(ef.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: ex.quarantineLearnMoreLink,
                                  children: eb.NW.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              eb.NW.string(eb.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(ef.yXt.STATUS),
                                  children: eb.NW.string(eb.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: ef.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eX, decisionId: eq } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != j && (0, W.T9)(j), ej(eX);
                                  }
                              }),
                              eb.NW.string(eb.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != j &&
                                          (0, W.UE)(j, eq, () => {
                                              ej(eX), (0, W.T9)(j);
                                          });
                                  },
                                  children: eb.NW.string(eb.t.oX14Eh)
                              }),
                              null != j
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => V.Z.open(j, ef.pNK.GUILD_AUTOMOD, void 0, ef.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eb.NW.string(eb.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      Q.hZ(), ej();
                                  }
                              }),
                              eb.NW.string(eb.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ey({}, t));
                                      }),
                                          Q.hZ(),
                                          ej();
                                  },
                                  children: eb.NW.string(eb.t.l5xYnJ)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eQ = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(X.Z, {
                          dismissCurrentNotice: () => {
                              (0, P.EW)(es.m9[ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ej(eQ);
                          },
                          subscriptionTier: eh.Si.TIER_2
                      });
                  case ef.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null == (e = R.metadata) ? void 0 : e.streamKey) != null && (0, q.nE)(R.metadata.streamKey);
                                  }
                              }),
                              eb.NW.string(eb.t.rOx44u)
                          ]
                      });
                  case ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      ej(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              eb.NW.string(eb.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, J.ZZ)(), ej(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eb.NW.string(eb.t.e4y2VF)
                              })
                          ]
                      });
                  case ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      ej(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR
                              }),
                              eb.NW.string(eb.t.XkeW9P),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, J.v3)(), ej(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR,
                                  children: eb.NW.string(eb.t.vcdNKi)
                              })
                          ]
                      });
                  default:
                      return null;
              }
          })
        : null;
function eS() {
    let { analyticsLocations: e } = (0, C.ZP)(j.Z.NOTICE);
    return (0, r.jsx)(C.Gt, {
        value: e,
        children: (0, r.jsx)(eC, {})
    });
}
