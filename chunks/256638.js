n.d(t, {
    Z: () => eP,
    c: () => eT
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
    g = n(254854),
    _ = n(195500),
    h = n(287734),
    b = n(205355),
    E = n(558381),
    C = n(223245),
    v = n(491428),
    O = n(401430),
    x = n(230711),
    y = n(726542),
    I = n(100527),
    j = n(906732),
    S = n(812206),
    T = n(391650),
    N = n(600164),
    P = n(266454),
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
    V = n(281956),
    H = n(574650),
    z = n(665302),
    W = n(434404),
    K = n(918658),
    Y = n(859428),
    X = n(963249),
    q = n(96320),
    Q = n(535278),
    J = n(246965),
    $ = n(272008),
    ee = n(523255),
    et = n(101879),
    en = n(496729),
    er = n(852923),
    ei = n(592125),
    el = n(131951),
    ea = n(19780),
    eo = n(914010),
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
    ev = n(388032),
    eO = n(131715);
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let ey = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            a = null == (t = (0, D.hp)(n)) ? void 0 : t.errorCode,
            o = ev.intl.formatToPlainString(ev.t['ejOT9/'], { errorCode: a }),
            { avErrorUIEnabled: s } = (0, L.JN)({ location: i });
        if (!s) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: 'text-sm/bold',
            color: 'currentColor',
            tag: 'span',
            className: eO.errorCodeNoticeText,
            selectable: !0,
            children: o
        });
        return l
            ? (0, r.jsx)(c.P3F, {
                  tag: 'span',
                  className: eO.errorCodeNoticeClickable,
                  onClick: () => l && open(em.Z.getArticleURL(eh.BhN.AV_ERROR_CODES)),
                  children: u
              })
            : u;
    },
    eI = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eT();
                    }
                }),
                ev.intl.string(ev.t.o3zuY2),
                (0, r.jsx)(ey, {
                    error: D.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: em.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ev.intl.string(ev.t.RYKKo6)
                })
            ]
        }),
    ej = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        (eT(), (0, e_.b)());
                    }
                }),
                ev.intl.string(ev.t.nCO9bG),
                (0, r.jsx)(ey, {
                    error: D.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: em.Z.getArticleURL(eh.BhN.NO_INPUT_DETECTED),
                    children: ev.intl.string(ev.t.RYKKo6)
                })
            ]
        }),
    eS = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        (eT(), (0, e_.b)());
                    }
                }),
                ev.intl.string(ev.t.dNAJ19),
                (0, r.jsx)(ey, {
                    allowClick: !0,
                    error: D.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        ((0, f.jN)(eh.S9g.USER_SETTINGS), x.Z.setSection(eh.oAB.VOICE));
                    },
                    children: ev.intl.string(ev.t.I6YlBw)
                })
            ]
        });
function eT(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eN =
    12633 == n.j
        ? i.memo(function () {
              var e, t;
              let l = (0, s.e7)([es.default], () => es.default.getCurrentUser()),
                  g = (0, s.e7)([eo.Z], () => eo.Z.getGuildId()),
                  I = (0, s.e7)([ed.ZP], () => ed.ZP.getNotice()),
                  { analyticsLocations: D } = (0, j.ZP)(),
                  L = null == I ? void 0 : I.type,
                  e_ = (0, V.J)(g);
              (i.useEffect(() => {
                  null != L &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          (null != t && (n.guild_id = t), ep.default.track(eh.rMx.APP_NOTICE_VIEWED, n));
                      })(L, g);
              }, [L, g]),
                  i.useEffect(() => {
                      if (null != I && I.type === eh.kVF.SURVEY && null != I.metadata) {
                          let { metadata: e } = I,
                              t = k.Z.getUserExperimentDescriptor(e.id);
                          (null != t && (0, M.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = I.metadata) ? void 0 : e.id) != null && (await (0, v.g8)(null == (t = I.metadata) ? void 0 : t.id));
                              })());
                      }
                  }, [I]));
              let ey = null != L ? ed.zD[L] : null,
                  eN = null != L ? ed.o[L] : null,
                  eP = null != L ? ed.nA[L] : null,
                  eA = null != L ? ed.m9[L] : null;
              if (null == I) return null;
              let { useRecurringNotices: ew } = q.b.getCurrentConfig({ location: 'AppNotice' });
              if (ew && null != ey && (L === eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING || L === eh.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING))
                  return (0, r.jsx)(Z.W, {
                      dismissibleContent: ey,
                      noticeType: I.type
                  });
              if (null != eN)
                  return (0, r.jsx)(R.q, {
                      dismissibleContent: eN,
                      noticeType: I.type
                  });
              if (null != eP) return (0, r.jsx)(w.c, { dismissibleContent: eP });
              if (null != eA)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eA,
                      noticeType: I.type
                  });
              let eZ = null == (e = I.metadata) ? void 0 : e.premiumType;
              switch (I.type) {
                  case eh.kVF.LURKING_GUILD:
                      return (0, r.jsx)(Y.Z, {});
                  case eh.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(H.Z, {});
                  case eh.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(er.Z, {});
                  case eh.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eR } = I.metadata;
                      return (0, r.jsx)(U.Z, { onDismiss: () => eT(eR) });
                  case eh.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eD } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eD),
                                  noticeType: eh.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              ev.intl.format(ev.t['08KQ1N'], { helpCenterLink: em.Z.getArticleURL(eh.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eL } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eL),
                                  noticeType: eh.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              ev.intl.format(ev.t['8Je+dX'], { helpCenterLink: em.Z.getArticleURL(eh.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eM } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(eM),
                                  noticeType: eh.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              ev.intl.format(ev.t.q8VPLi, { helpCenterLink: em.Z.getArticleURL(eh.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case eh.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.GENERIC
                              }),
                              I.message,
                              null != I.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: I.callback,
                                        noticeType: eh.kVF.GENERIC,
                                        children: I.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eh.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.LAUNCH_GAME_FAILURE
                              }),
                              I.message,
                              null != I.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: I.callback,
                                        noticeType: eh.kVF.LAUNCH_GAME_FAILURE,
                                        children: I.buttonText
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
                                      (_.Z.clearRemoteDisconnectVoiceChannelId(), eT());
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED
                              }),
                              ev.intl.string(ev.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ea.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != ei.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_DISABLED,
                                  children: ev.intl.string(ev.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      (_.Z.clearLastSessionVoiceChannelId(), eT());
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              ev.intl.string(ev.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ea.Z.getLastSessionVoiceChannelId();
                                      null != e && null != ei.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eh.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: ev.intl.string(ev.t.vD60Pj)
                              })
                          ]
                      });
                  case eh.kVF.SPOTIFY_AUTO_PAUSED:
                      let ek = y.Z.get(eh.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: eO.platformIcon,
                                  src: ek.icon.whiteSVG
                              }),
                              ev.intl.string(ev.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => x.Z.open(eh.oAB.VOICE),
                                  noticeType: eh.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: ev.intl.string(ev.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: eO.textLinkSmall,
                                  href: em.Z.getArticleURL(eh.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: ev.intl.string(ev.t.CiqAIS)
                              })
                          ]
                      });
                  case eh.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ev.intl.string(ev.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (e_ && null != g ? (0, G.hk)(g) : T.j()),
                                  children: ev.intl.string(ev.t.fiNVio)
                              })
                          ]
                      });
                  case eh.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              ev.intl.string(ev.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      (p.Z.verifyResend(),
                                          u.Z.show({
                                              title: ev.intl.string(ev.t.LykQYm),
                                              body: ev.intl.format(ev.t.azKEPz, { email: null == l ? void 0 : l.email }),
                                              secondaryConfirmText: ev.intl.string(ev.t.oP5zGB),
                                              onConfirmSecondary: T.j
                                          }));
                                  },
                                  children: ev.intl.string(ev.t.WnX4Jy)
                              })
                          ]
                      });
                  case eh.kVF.SCHEDULED_MAINTENANCE:
                      if (null == I.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: eh.kVF.SCHEDULED_MAINTENANCE
                              }),
                              ev.intl.format(ev.t.yb96S0, I.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS, '/incidents/').concat(I.metadata.id),
                                  children: ev.intl.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.NO_INPUT_DETECTED:
                      if (!el.Z.supports(eC.AN.LOOPBACK)) return (0, r.jsx)(ej, {});
                      return (0, r.jsx)(eS, {});
                  case eh.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(eI, {});
                  case eh.kVF.HARDWARE_MUTE:
                      if (null == I.metadata) return null;
                      let { vendor: eU, model: eF } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ev.intl.format(ev.t.qoDex8, {
                                  vendorName: eU.name,
                                  modelName: eF.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      (d.Z.setEnableHardwareMuteNotice(!1), eT());
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eF.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: ev.intl.string(ev.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eh.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.STREAMER_MODE
                              }),
                              ev.intl.string(ev.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => C.Z.setEnabled(!1),
                                  noticeType: eh.kVF.STREAMER_MODE,
                                  children: ev.intl.string(ev.t.R9GHyc)
                              })
                          ]
                      });
                  case eh.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eT();
                                  }
                              }),
                              ev.intl.string(ev.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      ((0, f.jN)(eh.S9g.USER_SETTINGS), x.Z.setSection(eh.oAB.VOICE));
                                  },
                                  children: ev.intl.string(ev.t['51hI/v'])
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == I.metadata) return null;
                      let { skuId: eB, applicationId: eG } = I.metadata,
                          eV = ec.Z.get(eB),
                          eH = S.Z.getApplication(eG);
                      if (null == eV || null == eH) return null;
                      let ez = { page: eh.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eV.id),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eO.premiumIcon
                              }),
                              ev.intl.format(ev.t['g3MU//'], {
                                  applicationName: eH.name,
                                  skuName: eV.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ef.S)({
                                          applicationId: eH.id,
                                          skuId: eV.id,
                                          openPremiumPaymentModal: () => {
                                              (0, X.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eb.Si.TIER_2,
                                                  analyticsLocations: D,
                                                  analyticsObject: ez
                                              });
                                          },
                                          analyticsLocations: D,
                                          analyticsLocationObject: ez,
                                          context: __OVERLAY__ ? eh.IlC.OVERLAY : eh.IlC.APP
                                      }).then(() => m.Z(eV.id)),
                                  children: ev.intl.string(ev.t.KEwPY2)
                              })
                          ]
                      });
                  case eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == I.metadata) return null;
                      let { skuId: e, applicationId: t } = I.metadata,
                          n = ec.Z.get(e),
                          i = S.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eO.premiumIcon
                              }),
                              ev.intl.format(ev.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(o.rU, {
                                      onClick: () => eT(),
                                      to: {
                                          pathname: eh.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: ev.intl.string(ev.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eh.kVF.SURVEY: {
                      let e = I.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (0, v.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SURVEY,
                                  onClick: () => {
                                      (window.open(l, '_blank'), (0, v.hZ)(t, !1));
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case eh.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ev.intl.string(ev.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: em.Z.getArticleURL(eh.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: ev.intl.string(ev.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eh.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              ev.intl.string(ev.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ex({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: ev.intl.string(ev.t['1WjMbG'])
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_ERROR:
                      if (null == I.metadata) return null;
                      let { error: eW } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DISPATCH_ERROR
                              }),
                              null == eW ? void 0 : eW.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                  children: ev.intl.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == I.metadata) return null;
                      let { progress: eK, total: eY, name: eX } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(N.Z, {
                                  justify: N.Z.Justify.CENTER,
                                  children: [
                                      null != eX
                                          ? ev.intl.formatToPlainString(ev.t['pHj+z8'], {
                                                name: ''.concat(eX),
                                                progress: eK,
                                                total: eY
                                            })
                                          : ev.intl.formatToPlainString(ev.t['lHZn+P'], {
                                                progress: eK,
                                                total: eY
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: eO.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eh.kVF.APPLICATION_TEST_MODE:
                      if (null == I.metadata) return null;
                      if (null != eu.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(N.Z, {
                                  justify: N.Z.Justify.CENTER,
                                  align: N.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: ev.intl.format(ev.t['1qxVe3'], { applicationName: I.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: O.mc,
                                          noticeType: eh.kVF.APPLICATION_TEST_MODE
                                      })
                                  ]
                              })
                          });
                      return (0, r.jsx)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: (0, r.jsxs)(N.Z, {
                              justify: N.Z.Justify.CENTER,
                              align: N.Z.Align.CENTER,
                              children: [
                                  (0, r.jsx)('div', { children: ev.intl.format(ev.t.Fv5HrK, { applicationName: I.metadata.applicationName }) }),
                                  (0, r.jsx)(eg.Z, {
                                      dropdownSize: eg.E.DropdownSizes.SMALL,
                                      className: eO.testModeSKUSelector,
                                      color: eg.E.Colors.WHITE,
                                      look: eg.E.Looks.OUTLINED,
                                      size: eg.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          E.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eh.jXE.NOTIFICATION_BAR,
                                                  object: eh.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: I.metadata.applicationId,
                                      children: ev.intl.string(ev.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: O.mc,
                                      noticeType: eh.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eh.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(K.Z, {});
                  case eh.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eZ === eb.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eZ === eb.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eO.premiumIcon
                              }),
                              eZ === eb.p9.TIER_1 ? ev.intl.formatToPlainString(ev.t.fXv4ws, { daysLeft: I.metadata.daysLeft }) : eZ === eb.p9.TIER_0 ? ev.intl.formatToPlainString(ev.t.ZOHZMj, { daysLeft: I.metadata.daysLeft }) : ev.intl.formatToPlainString(ev.t.outyHh, { daysLeft: I.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      (eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('84992'), n.e('5491')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ex({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: I.metadata.daysLeft,
                                                              premiumType: eZ,
                                                              analyticsSource: 'Nag Bar',
                                                              premiumSubscription: I.metadata.premiumSubscription
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
                                          }));
                                  },
                                  children: eZ === eb.p9.TIER_1 ? ev.intl.string(ev.t.BkbUPD) : eZ === eb.p9.TIER_0 ? ev.intl.string(ev.t.Px978f) : ev.intl.string(ev.t.LW5tCA)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eq, dismissUntil: eQ } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: L,
                                  onClick: () => {
                                      eT(eQ);
                                  }
                              }),
                              ev.intl.format(ev.t.zxU0Ki, { daysPastDue: eq }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      (eT(eQ), x.Z.open(eh.oAB.SUBSCRIPTIONS));
                                  },
                                  children: ev.intl.string(ev.t.q8rxeX)
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
                                      eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ev.intl.string(ev.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eh.oAB.SUBSCRIPTIONS));
                                  },
                                  children: ev.intl.string(ev.t['Zpd+Ym'])
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
                                      eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              ev.intl.string(ev.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eh.oAB.SUBSCRIPTIONS));
                                  },
                                  children: ev.intl.string(ev.t.U5pKWF)
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
                                      eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eZ === eb.p9.TIER_1 ? ev.intl.formatToPlainString(ev.t.b6QUvb, { daysLeft: I.metadata.daysLeft }) : eZ === eb.p9.TIER_0 ? ev.intl.formatToPlainString(ev.t['tURZ/P'], { daysLeft: I.metadata.daysLeft }) : ev.intl.formatToPlainString(ev.t.AyC74O, { daysLeft: I.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (eT(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eh.oAB.SUBSCRIPTIONS));
                                  },
                                  children: eZ === eb.p9.TIER_1 ? ev.intl.string(ev.t.lboF5O) : eZ === eb.p9.TIER_0 ? ev.intl.string(ev.t['4UPwOj']) : ev.intl.string(ev.t['P/VvGR'])
                              })
                          ]
                      });
                  case eh.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(z.h, {
                          buttonText: null != (t = I.buttonText) ? t : ev.intl.string(ev.t['/g10LC']),
                          onGoBack: I.callback,
                          onDismiss: () => eT(),
                          showCloseButton: !0
                      });
                  case eh.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eh.ZY5.IN_APP };
                      return (0, r.jsx)(B.Z, {
                          guildId: g,
                          analyticsLocations: D,
                          analyticsLocation: e
                      });
                  }
                  case eh.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              ev.intl.string(ev.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eE.Z,
                                  target: '_blank',
                                  children: ev.intl.string(ev.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: em.Z.getArticleURL(eh.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eO.quarantineLearnMoreLink,
                                  children: ev.intl.string(ev.t.hvVgAQ)
                              })
                          ]
                      });
                  case eh.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              ev.intl.string(ev.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eh.yXt.STATUS),
                                  children: ev.intl.string(ev.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eT(),
                                  noticeType: eh.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eJ, decisionId: e$ } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != g && (0, F.T9)(g), eT(eJ));
                                  }
                              }),
                              ev.intl.string(ev.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != g &&
                                          (0, F.UE)(g, e$, () => {
                                              (eT(eJ), (0, F.T9)(g));
                                          });
                                  },
                                  children: ev.intl.string(ev.t.oX14Eh)
                              }),
                              null != g
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => W.Z.open(g, eh.pNK.GUILD_AUTOMOD, void 0, eh.KsC.AUTOMOD_MENTION_SPAM),
                                        children: ev.intl.string(ev.t['1R7QIy'])
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
                                      (ee.hZ(), eT());
                                  }
                              }),
                              ev.intl.string(ev.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eh.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      ((0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ex({}, t));
                                      }),
                                          ee.hZ(),
                                          eT());
                                  },
                                  children: ev.intl.string(ev.t.l5xYnJ)
                              })
                          ]
                      });
                  case eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let e0 = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(J.Z, {
                          dismissCurrentNotice: () => {
                              ((0, P.Q3)(ed.m9[eh.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eT(e0));
                          },
                          subscriptionTier: eb.Si.TIER_2
                      });
                  case eh.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                      let e1 = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(Q.Z, {
                          dismissCurrentNotice: () => {
                              eT(e1);
                          },
                          subscriptionTier: eb.Si.TIER_2
                      });
                  case eh.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eh.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null == (e = I.metadata) ? void 0 : e.streamKey) != null && (0, $.nE)(I.metadata.streamKey);
                                  }
                              }),
                              ev.intl.string(ev.t.rOx44u)
                          ]
                      });
                  case eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eT(null == (e = I.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              ev.intl.string(ev.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      ((0, en.ZZ)(), eT(null == (e = I.metadata) ? void 0 : e.dismissUntil));
                                  },
                                  noticeType: eh.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: ev.intl.string(ev.t.e4y2VF)
                              })
                          ]
                      });
                  case eh.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)(et.Z, {});
                  default:
                      return null;
              }
          })
        : null;
function eP() {
    let { analyticsLocations: e } = (0, j.ZP)(I.Z.NOTICE);
    return (0, r.jsx)(j.Gt, {
        value: e,
        children: (0, r.jsx)(eN, {})
    });
}
