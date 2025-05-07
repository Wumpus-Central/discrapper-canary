n.d(t, {
    Z: () => eN,
    c: () => eS
});
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l);
if (12633 == n.j) var o = n(688642);
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
    y = n(558381),
    E = n(223245),
    x = n(491428),
    v = n(401430),
    O = n(230711),
    j = n(726542),
    C = n(100527),
    S = n(906732),
    I = n(812206),
    N = n(391650),
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
    U = n(36459),
    F = n(236069),
    B = n(305325),
    G = n(281956),
    H = n(574650),
    V = n(665302),
    z = n(434404),
    W = n(918658),
    K = n(859428),
    Y = n(963249),
    X = n(246965),
    q = n(272008),
    Q = n(523255),
    J = n(101879),
    $ = n(496729),
    ee = n(852923),
    et = n(592125),
    en = n(430824),
    er = n(131951),
    ei = n(19780),
    el = n(914010),
    ea = n(594174),
    eo = n(55563),
    es = n(695103),
    ec = n(933429),
    eu = n(626135),
    ed = n(63063),
    ep = n(72924),
    em = n(69499),
    ef = n(912193),
    eh = n(981631),
    eg = n(474936),
    e_ = n(610674),
    eb = n(65154),
    ey = n(388032),
    eE = n(131715);
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
let ev = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            a = null == (t = (0, R.hp)(n)) ? void 0 : t.errorCode,
            o = ey.intl.formatToPlainString(ey.t['ejOT9/'], { errorCode: a }),
            { avErrorUIEnabled: s } = (0, k.JN)({ location: i });
        if (!s) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: 'text-sm/bold',
            color: 'currentColor',
            tag: 'span',
            className: eE.errorCodeNoticeText,
            selectable: !0,
            children: o
        });
        return l
            ? (0, r.jsx)(c.P3F, {
                  tag: 'span',
                  className: eE.errorCodeNoticeClickable,
                  onClick: () => l && open(ed.Z.getArticleURL(eh.BhN.AV_ERROR_CODES)),
                  children: u
              })
            : u;
    },
    eO = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eS();
                    }
                }),
                ey.intl.string(ey.t.o3zuY2),
                (0, r.jsx)(ev, {
                    error: R.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: ed.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ey.intl.string(ey.t.RYKKo6)
                })
            ]
        }),
    ej = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eS(), (0, ef.b)();
                    }
                }),
                ey.intl.string(ey.t.nCO9bG),
                (0, r.jsx)(ev, {
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: ed.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ey.intl.string(ey.t.RYKKo6)
                })
            ]
        }),
    eC = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eS(), (0, ef.b)();
                    }
                }),
                ey.intl.string(ey.t.dNAJ19),
                (0, r.jsx)(ev, {
                    allowClick: !0,
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(eh.S9g.USER_SETTINGS), O.Z.setSection(eh.oAB.VOICE);
                    },
                    children: ey.intl.string(ey.t.I6YlBw)
                })
            ]
        });
function eS(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eI =
    12633 == n.j
        ? i.memo(function () {
              var e, t, l;
              let h = (0, s.e7)([ea.default], () => ea.default.getCurrentUser()),
                  C = (0, s.e7)([el.Z], () => el.Z.getGuildId()),
                  R = (0, s.e7)([ec.ZP], () => ec.ZP.getNotice()),
                  k = (0, s.e7)([en.Z], () => en.Z.getGuild(C)),
                  { analyticsLocations: ef } = (0, S.ZP)(),
                  ev = null == R ? void 0 : R.type,
                  eI = (0, G.J)(C);
              i.useEffect(() => {
                  null != ev &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), eu.default.track(eh.rMx.APP_NOTICE_VIEWED, n);
                      })(ev, C);
              }, [ev, C]),
                  i.useEffect(() => {
                      if (null != R && R.type === eh.kVF.SURVEY && null != R.metadata) {
                          let { metadata: e } = R,
                              t = L.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, D.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = R.metadata) ? void 0 : e.id) != null && (await (0, x.g8)(null == (t = R.metadata) ? void 0 : t.id));
                              })();
                      }
                  }, [R]);
              let eN = null != ev ? ec.o[ev] : null,
                  eT = null != ev ? ec.nA[ev] : null,
                  eP = null != ev ? ec.m9[ev] : null;
              if (null == R) return null;
              if (null != eN)
                  return (0, r.jsx)(Z.q, {
                      dismissibleContent: eN,
                      noticeType: R.type
                  });
              if (null != eT) return (0, r.jsx)(w.c, { dismissibleContent: eT });
              if (null != eP)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eP,
                      noticeType: R.type
                  });
              let eA = null == (e = R.metadata) ? void 0 : e.premiumType;
              switch (R.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, r.jsx)(K.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(H.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(ee.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: ew } = R.metadata;
                      return (0, r.jsx)(M.Z, { onDismiss: () => eS(ew) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(eZ),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              ey.intl.format(ey.t['08KQ1N'], { helpCenterLink: ed.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eR } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(eR),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              ey.intl.format(ey.t['8Je+dX'], { helpCenterLink: ed.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: ek } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(ek),
                                  noticeType: eh.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              ey.intl.format(ey.t.q8VPLi, { helpCenterLink: ed.Z.getArticleURL(eh.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.GENERIC
                              }),
                              R.message,
                              null != R.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: R.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: R.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE
                              }),
                              R.message,
                              null != R.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: R.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: R.buttonText
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
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eS();
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED
                              }),
                              ey.intl.string(ey.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: ey.intl.string(ey.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eS();
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              ey.intl.string(ey.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getLastSessionVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: ey.intl.string(ey.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let eD = j.Z.get(eh.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: eE.platformIcon,
                                  src: eD.icon.whiteSVG
                              }),
                              ey.intl.string(ey.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => O.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: ey.intl.string(ey.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: eE.textLinkSmall,
                                  href: ed.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: ey.intl.string(ey.t.CiqAIS)
                              })
                          ]
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ey.intl.string(ey.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (eI && null != C ? (0, B.hk)(C) : N.j()),
                                  children: ey.intl.string(ey.t.fiNVio)
                              })
                          ]
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ey.intl.string(ey.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          u.Z.show({
                                              title: ey.intl.string(ey.t.LykQYm),
                                              body: ey.intl.format(ey.t.azKEPz, { email: null == h ? void 0 : h.email }),
                                              secondaryConfirmText: ey.intl.string(ey.t.oP5zGB),
                                              onConfirmSecondary: N.j
                                          });
                                  },
                                  children: ey.intl.string(ey.t.WnX4Jy)
                              })
                          ]
                      });
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == R.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE
                              }),
                              ey.intl.format(ey.t.yb96S0, R.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS, '/incidents/').concat(R.metadata.id),
                                  children: ey.intl.string(ey.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!er.Z.supports(eb.AN.LOOPBACK)) return (0, r.jsx)(ej, {});
                      return (0, r.jsx)(eC, {});
                  case eh.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(eO, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == R.metadata) return null;
                      let { vendor: eL, model: eM } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ey.intl.format(ey.t.qoDex8, {
                                  vendorName: eL.name,
                                  modelName: eM.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), eS();
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eM.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: ey.intl.string(ey.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eh.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.STREAMER_MODE
                              }),
                              ey.intl.string(ey.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => E.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: ey.intl.string(ey.t.R9GHyc)
                              })
                          ]
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eS();
                                  }
                              }),
                              ey.intl.string(ey.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(eh.S9g.USER_SETTINGS), O.Z.setSection(eh.oAB.VOICE);
                                  },
                                  children: ey.intl.string(ey.t['51hI/v'])
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == R.metadata) return null;
                      let { skuId: eU, applicationId: eF } = R.metadata,
                          eB = eo.Z.get(eU),
                          eG = I.Z.getApplication(eF);
                      if (null == eB || null == eG) return null;
                      let eH = { page: eh.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eB.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              ey.intl.format(ey.t['g3MU//'], {
                                  applicationName: eG.name,
                                  skuName: eB.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ep.S)({
                                          applicationId: eG.id,
                                          skuId: eB.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Y.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eg.Si.TIER_2,
                                                  analyticsLocations: ef,
                                                  analyticsObject: eH
                                              });
                                          },
                                          analyticsLocations: ef,
                                          analyticsLocationObject: eH,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP
                                      }).then(() => m.Z(eB.id)),
                                  children: ey.intl.string(ey.t.KEwPY2)
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == R.metadata) return null;
                      let { skuId: e, applicationId: t } = R.metadata,
                          n = eo.Z.get(e),
                          i = I.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              ey.intl.format(ey.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(o.rU, {
                                      onClick: () => eS(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: ey.intl.string(ey.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = R.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
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
                                      window.open(l, '_blank'), (0, x.hZ)(t, !1);
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
                                      eS();
                                  }
                              }),
                              ey.intl.format(ey.t.RomvGB, { guildName: null != (t = null == k ? void 0 : k.name) ? t : 'this server' }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SERVER_USAGE_SURVEY,
                                  onClick: () => {
                                      window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == h ? void 0 : h.id, '&guild_id=').concat(null == k ? void 0 : k.id), '_blank'), eS();
                                  },
                                  additionalTrackingProps: { guild_id: null == k ? void 0 : k.id },
                                  children: ey.intl.string(ey.t['4RQks7'])
                              })
                          ]
                      });
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ey.intl.string(ey.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: ed.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: ey.intl.string(ey.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              ey.intl.string(ey.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ex({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: ey.intl.string(ey.t['1WjMbG'])
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == R.metadata) return null;
                      let { error: eV } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.DISPATCH_ERROR
                              }),
                              null == eV ? void 0 : eV.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                  children: ey.intl.string(ey.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == R.metadata) return null;
                      let { progress: ez, total: eW, name: eK } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  children: [
                                      null != eK
                                          ? ey.intl.formatToPlainString(ey.t['pHj+z8'], {
                                                name: ''.concat(eK),
                                                progress: ez,
                                                total: eW
                                            })
                                          : ey.intl.formatToPlainString(ey.t['lHZn+P'], {
                                                progress: ez,
                                                total: eW
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: eE.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == R.metadata) return null;
                      if (null != es.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  align: T.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: ey.intl.format(ey.t['1qxVe3'], { applicationName: R.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: v.mc,
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
                                  (0, r.jsx)('div', { children: ey.intl.format(ey.t.Fv5HrK, { applicationName: R.metadata.applicationName }) }),
                                  (0, r.jsx)(em.Z, {
                                      dropdownSize: em.E.DropdownSizes.SMALL,
                                      className: eE.testModeSKUSelector,
                                      color: em.E.Colors.WHITE,
                                      look: em.E.Looks.OUTLINED,
                                      size: em.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          y.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: R.metadata.applicationId,
                                      children: ey.intl.string(ey.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: v.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eh.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(W.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eA === eg.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eA === eg.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eE.premiumIcon
                              }),
                              eA === eg.p9.TIER_1 ? ey.intl.formatToPlainString(ey.t.fXv4ws, { daysLeft: R.metadata.daysLeft }) : eA === eg.p9.TIER_0 ? ey.intl.formatToPlainString(ey.t.ZOHZMj, { daysLeft: R.metadata.daysLeft }) : ey.intl.formatToPlainString(ey.t.outyHh, { daysLeft: R.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('17938'), n.e('85334')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ex({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: R.metadata.daysLeft,
                                                              premiumType: eA,
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
                                  children: eA === eg.p9.TIER_1 ? ey.intl.string(ey.t.BkbUPD) : eA === eg.p9.TIER_0 ? ey.intl.string(ey.t.Px978f) : ey.intl.string(ey.t.LW5tCA)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eY, dismissUntil: eX } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ev,
                                  onClick: () => {
                                      eS(eX);
                                  }
                              }),
                              ey.intl.format(ey.t.zxU0Ki, { daysPastDue: eY }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eS(eX), O.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ey.intl.string(ey.t.q8rxeX)
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
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ey.intl.string(ey.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ey.intl.string(ey.t['Zpd+Ym'])
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
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ey.intl.string(ey.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: ey.intl.string(ey.t.U5pKWF)
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
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eA === eg.p9.TIER_1 ? ey.intl.formatToPlainString(ey.t.b6QUvb, { daysLeft: R.metadata.daysLeft }) : eA === eg.p9.TIER_0 ? ey.intl.formatToPlainString(ey.t['tURZ/P'], { daysLeft: R.metadata.daysLeft }) : ey.intl.formatToPlainString(ey.t.AyC74O, { daysLeft: R.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eS(null == (t = R.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(eh.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eA === eg.p9.TIER_1 ? ey.intl.string(ey.t.lboF5O) : eA === eg.p9.TIER_0 ? ey.intl.string(ey.t['4UPwOj']) : ey.intl.string(ey.t['P/VvGR'])
                              })
                          ]
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(V.h, {
                          buttonText: null != (l = R.buttonText) ? l : ey.intl.string(ey.t['/g10LC']),
                          onGoBack: R.callback,
                          onDismiss: () => eS(),
                          showCloseButton: !0
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, r.jsx)(F.Z, {
                          guildId: C,
                          analyticsLocations: ef,
                          analyticsLocation: e
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: eE.quarantineNotice,
                          children: [
                              ey.intl.string(ey.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: e_.Z,
                                  target: '_blank',
                                  children: ey.intl.string(ey.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: ed.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eE.quarantineLearnMoreLink,
                                  children: ey.intl.string(ey.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              ey.intl.string(ey.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS),
                                  children: ey.intl.string(ey.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eS(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eq, decisionId: eQ } = R.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != C && (0, U.T9)(C), eS(eq);
                                  }
                              }),
                              ey.intl.string(ey.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != C &&
                                          (0, U.UE)(C, eQ, () => {
                                              eS(eq), (0, U.T9)(C);
                                          });
                                  },
                                  children: ey.intl.string(ey.t.oX14Eh)
                              }),
                              null != C
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => z.Z.open(C, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: ey.intl.string(ey.t['1R7QIy'])
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
                                      Q.hZ(), eS();
                                  }
                              }),
                              ey.intl.string(ey.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                          Q.hZ(),
                                          eS();
                                  },
                                  children: ey.intl.string(ey.t.l5xYnJ)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eJ = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(X.Z, {
                          dismissCurrentNotice: () => {
                              (0, P.EW)(ec.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eS(eJ);
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
                                      (null == (e = R.metadata) ? void 0 : e.streamKey) != null && (0, q.nE)(R.metadata.streamKey);
                                  }
                              }),
                              ey.intl.string(ey.t.rOx44u)
                          ]
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eS(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              ey.intl.string(ey.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, $.ZZ)(), eS(null == (e = R.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ey.intl.string(ey.t.e4y2VF)
                              })
                          ]
                      });
                  case eh.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)(J.Z, {});
                  default:
                      return null;
              }
          })
        : null;
function eN() {
    let { analyticsLocations: e } = (0, S.ZP)(C.Z.NOTICE);
    return (0, r.jsx)(S.Gt, {
        value: e,
        children: (0, r.jsx)(eI, {})
    });
}
