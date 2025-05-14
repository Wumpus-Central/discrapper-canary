n.d(t, {
    Z: () => eI,
    c: () => eC
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
    x = n(558381),
    E = n(223245),
    y = n(491428),
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
function eE(e) {
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
let ey = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            a = null == (t = (0, R.hp)(n)) ? void 0 : t.errorCode,
            o = eb.intl.formatToPlainString(eb.t['ejOT9/'], { errorCode: a }),
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
                        eC();
                    }
                }),
                eb.intl.string(eb.t.o3zuY2),
                (0, r.jsx)(ey, {
                    error: R.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
                    children: eb.intl.string(eb.t.RYKKo6)
                })
            ]
        }),
    eO = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eC(), (0, em.b)();
                    }
                }),
                eb.intl.string(eb.t.nCO9bG),
                (0, r.jsx)(ey, {
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: eu.Z.getArticleURL(ef.BhN.NO_INPUT_DETECTED),
                    children: eb.intl.string(eb.t.RYKKo6)
                })
            ]
        }),
    ej = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        eC(), (0, em.b)();
                    }
                }),
                eb.intl.string(eb.t.dNAJ19),
                (0, r.jsx)(ey, {
                    allowClick: !0,
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        (0, f.jN)(ef.S9g.USER_SETTINGS), O.Z.setSection(ef.oAB.VOICE);
                    },
                    children: eb.intl.string(eb.t.I6YlBw)
                })
            ]
        });
function eC(e) {
    h.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eS =
    12633 == n.j
        ? i.memo(function () {
              var e, t;
              let l = (0, s.e7)([el.default], () => el.default.getCurrentUser()),
                  h = (0, s.e7)([ei.Z], () => ei.Z.getGuildId()),
                  C = (0, s.e7)([es.ZP], () => es.ZP.getNotice()),
                  { analyticsLocations: R } = (0, S.ZP)(),
                  k = null == C ? void 0 : C.type,
                  em = (0, G.J)(h);
              i.useEffect(() => {
                  null != k &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          null != t && (n.guild_id = t), ec.default.track(ef.rMx.APP_NOTICE_VIEWED, n);
                      })(k, h);
              }, [k, h]),
                  i.useEffect(() => {
                      if (null != C && C.type === ef.kVF.SURVEY && null != C.metadata) {
                          let { metadata: e } = C,
                              t = L.Z.getUserExperimentDescriptor(e.id);
                          null != t && (0, D.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = C.metadata) ? void 0 : e.id) != null && (await (0, y.g8)(null == (t = C.metadata) ? void 0 : t.id));
                              })();
                      }
                  }, [C]);
              let ey = null != k ? es.o[k] : null,
                  eS = null != k ? es.nA[k] : null,
                  eI = null != k ? es.m9[k] : null;
              if (null == C) return null;
              if (null != ey)
                  return (0, r.jsx)(Z.q, {
                      dismissibleContent: ey,
                      noticeType: C.type
                  });
              if (null != eS) return (0, r.jsx)(w.c, { dismissibleContent: eS });
              if (null != eI)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eI,
                      noticeType: C.type
                  });
              let eN = null == (e = C.metadata) ? void 0 : e.premiumType;
              switch (C.type) {
                  case ef.kVF.LURKING_GUILD:
                      return (0, r.jsx)(K.Z, {});
                  case ef.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(H.Z, {});
                  case ef.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(ee.Z, {});
                  case ef.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eT } = C.metadata;
                      return (0, r.jsx)(M.Z, { onDismiss: () => eC(eT) });
                  case ef.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eP } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(eP),
                                  noticeType: ef.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eb.intl.format(eb.t['08KQ1N'], { helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: eA } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(eA),
                                  noticeType: ef.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eb.intl.format(eb.t['8Je+dX'], { helpCenterLink: eu.Z.getArticleURL(ef.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: ew } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(ew),
                                  noticeType: ef.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              eb.intl.format(eb.t.q8VPLi, { helpCenterLink: eu.Z.getArticleURL(ef.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case ef.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.GENERIC
                              }),
                              C.message,
                              null != C.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: C.callback,
                                        noticeType: ef.kVF.GENERIC,
                                        children: C.buttonText
                                    })
                                  : null
                          ]
                      });
                  case ef.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.LAUNCH_GAME_FAILURE
                              }),
                              C.message,
                              null != C.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: C.callback,
                                        noticeType: ef.kVF.LAUNCH_GAME_FAILURE,
                                        children: C.buttonText
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
                                      g.Z.clearRemoteDisconnectVoiceChannelId(), eC();
                                  },
                                  noticeType: ef.kVF.VOICE_DISABLED
                              }),
                              eb.intl.string(eb.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = er.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ef.kVF.VOICE_DISABLED,
                                  children: eb.intl.string(eb.t.vD60Pj)
                              })
                          ]
                      });
                  case ef.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      g.Z.clearLastSessionVoiceChannelId(), eC();
                                  },
                                  noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eb.intl.string(eb.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = er.Z.getLastSessionVoiceChannelId();
                                      null != e && null != et.Z.getChannel(e) && _.default.selectVoiceChannel(e);
                                  },
                                  noticeType: ef.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eb.intl.string(eb.t.vD60Pj)
                              })
                          ]
                      });
                  case ef.kVF.SPOTIFY_AUTO_PAUSED:
                      let eZ = j.Z.get(ef.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: ex.platformIcon,
                                  src: eZ.icon.whiteSVG
                              }),
                              eb.intl.string(eb.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => O.Z.open(ef.oAB.VOICE),
                                  noticeType: ef.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eb.intl.string(eb.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: ex.textLinkSmall,
                                  href: eu.Z.getArticleURL(ef.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eb.intl.string(eb.t.CiqAIS)
                              })
                          ]
                      });
                  case ef.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eb.intl.string(eb.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (em && null != h ? (0, B.hk)(h) : N.j()),
                                  children: eb.intl.string(eb.t.fiNVio)
                              })
                          ]
                      });
                  case ef.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eb.intl.string(eb.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      p.Z.verifyResend(),
                                          u.Z.show({
                                              title: eb.intl.string(eb.t.LykQYm),
                                              body: eb.intl.format(eb.t.azKEPz, { email: null == l ? void 0 : l.email }),
                                              secondaryConfirmText: eb.intl.string(eb.t.oP5zGB),
                                              onConfirmSecondary: N.j
                                          });
                                  },
                                  children: eb.intl.string(eb.t.WnX4Jy)
                              })
                          ]
                      });
                  case ef.kVF.SCHEDULED_MAINTENANCE:
                      if (null == C.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: ef.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eb.intl.format(eb.t.yb96S0, C.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(ef.yXt.STATUS, '/incidents/').concat(C.metadata.id),
                                  children: eb.intl.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.NO_INPUT_DETECTED:
                      if (!en.Z.supports(e_.AN.LOOPBACK)) return (0, r.jsx)(eO, {});
                      return (0, r.jsx)(ej, {});
                  case ef.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(ev, {});
                  case ef.kVF.HARDWARE_MUTE:
                      if (null == C.metadata) return null;
                      let { vendor: eR, model: ek } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eb.intl.format(eb.t.qoDex8, {
                                  vendorName: eR.name,
                                  modelName: ek.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      d.Z.setEnableHardwareMuteNotice(!1), eC();
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: ek.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eb.intl.string(eb.t['Yl/Rio'])
                              })
                          ]
                      });
                  case ef.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.STREAMER_MODE
                              }),
                              eb.intl.string(eb.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => E.Z.setEnabled(!1),
                                  noticeType: ef.kVF.STREAMER_MODE,
                                  children: eb.intl.string(eb.t.R9GHyc)
                              })
                          ]
                      });
                  case ef.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      eC();
                                  }
                              }),
                              eb.intl.string(eb.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      (0, f.jN)(ef.S9g.USER_SETTINGS), O.Z.setSection(ef.oAB.VOICE);
                                  },
                                  children: eb.intl.string(eb.t['51hI/v'])
                              })
                          ]
                      });
                  case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == C.metadata) return null;
                      let { skuId: eD, applicationId: eL } = C.metadata,
                          eM = ea.Z.get(eD),
                          eU = I.Z.getApplication(eL);
                      if (null == eM || null == eU) return null;
                      let eF = { page: ef.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eM.id),
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eb.intl.format(eb.t['g3MU//'], {
                                  applicationName: eU.name,
                                  skuName: eM.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ed.S)({
                                          applicationId: eU.id,
                                          skuId: eM.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Y.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: eh.Si.TIER_2,
                                                  analyticsLocations: R,
                                                  analyticsObject: eF
                                              });
                                          },
                                          analyticsLocations: R,
                                          analyticsLocationObject: eF,
                                          context: __OVERLAY__ ? ef.IlC.OVERLAY : ef.IlC.APP
                                      }).then(() => m.Z(eM.id)),
                                  children: eb.intl.string(eb.t.KEwPY2)
                              })
                          ]
                      });
                  case ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == C.metadata) return null;
                      let { skuId: e, applicationId: t } = C.metadata,
                          n = ea.Z.get(e),
                          i = I.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eb.intl.format(eb.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(o.rU, {
                                      onClick: () => eC(),
                                      to: {
                                          pathname: ef.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eb.intl.string(eb.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case ef.kVF.SURVEY: {
                      let e = C.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.SURVEY,
                                  onClick: () => {
                                      (0, y.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.SURVEY,
                                  onClick: () => {
                                      window.open(l, '_blank'), (0, y.hZ)(t, !1);
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case ef.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eb.intl.string(eb.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: eu.Z.getArticleURL(ef.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eb.intl.string(eb.t['6ik4Xl'])
                              })
                          ]
                      });
                  case ef.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eb.intl.string(eb.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, eE({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: eb.intl.string(eb.t['1WjMbG'])
                              })
                          ]
                      });
                  case ef.kVF.DISPATCH_ERROR:
                      if (null == C.metadata) return null;
                      let { error: eB } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.DISPATCH_ERROR
                              }),
                              null == eB ? void 0 : eB.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, eE({}, t));
                                      }),
                                  children: eb.intl.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == C.metadata) return null;
                      let { progress: eG, total: eH, name: eV } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  children: [
                                      null != eV
                                          ? eb.intl.formatToPlainString(eb.t['pHj+z8'], {
                                                name: ''.concat(eV),
                                                progress: eG,
                                                total: eH
                                            })
                                          : eb.intl.formatToPlainString(eb.t['lHZn+P'], {
                                                progress: eG,
                                                total: eH
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
                      if (null == C.metadata) return null;
                      if (null != eo.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(T.Z, {
                                  justify: T.Z.Justify.CENTER,
                                  align: T.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: eb.intl.format(eb.t['1qxVe3'], { applicationName: C.metadata.applicationName }) }),
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
                                  (0, r.jsx)('div', { children: eb.intl.format(eb.t.Fv5HrK, { applicationName: C.metadata.applicationName }) }),
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
                                      applicationId: C.metadata.applicationId,
                                      children: eb.intl.string(eb.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: v.mc,
                                      noticeType: ef.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case ef.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(W.Z, {});
                  case ef.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eN === eh.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eN === eh.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ex.premiumIcon
                              }),
                              eN === eh.p9.TIER_1 ? eb.intl.formatToPlainString(eb.t.fXv4ws, { daysLeft: C.metadata.daysLeft }) : eN === eh.p9.TIER_0 ? eb.intl.formatToPlainString(eb.t.ZOHZMj, { daysLeft: C.metadata.daysLeft }) : eb.intl.formatToPlainString(eb.t.outyHh, { daysLeft: C.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('17938'), n.e('85334')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = eE({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: C.metadata.daysLeft,
                                                              premiumType: eN,
                                                              analyticsSource: 'Nag Bar',
                                                              premiumSubscription: C.metadata.premiumSubscription
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
                                  children: eN === eh.p9.TIER_1 ? eb.intl.string(eb.t.BkbUPD) : eN === eh.p9.TIER_0 ? eb.intl.string(eb.t.Px978f) : eb.intl.string(eb.t.LW5tCA)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: ez, dismissUntil: eW } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: k,
                                  onClick: () => {
                                      eC(eW);
                                  }
                              }),
                              eb.intl.format(eb.t.zxU0Ki, { daysPastDue: ez }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      eC(eW), O.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.intl.string(eb.t.q8rxeX)
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
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eb.intl.string(eb.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.intl.string(eb.t['Zpd+Ym'])
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
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eb.intl.string(eb.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eb.intl.string(eb.t.U5pKWF)
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
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eN === eh.p9.TIER_1 ? eb.intl.formatToPlainString(eb.t.b6QUvb, { daysLeft: C.metadata.daysLeft }) : eN === eh.p9.TIER_0 ? eb.intl.formatToPlainString(eb.t['tURZ/P'], { daysLeft: C.metadata.daysLeft }) : eb.intl.formatToPlainString(eb.t.AyC74O, { daysLeft: C.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      eC(null == (t = C.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), O.Z.open(ef.oAB.SUBSCRIPTIONS);
                                  },
                                  children: eN === eh.p9.TIER_1 ? eb.intl.string(eb.t.lboF5O) : eN === eh.p9.TIER_0 ? eb.intl.string(eb.t['4UPwOj']) : eb.intl.string(eb.t['P/VvGR'])
                              })
                          ]
                      });
                  case ef.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(V.h, {
                          buttonText: null != (t = C.buttonText) ? t : eb.intl.string(eb.t['/g10LC']),
                          onGoBack: C.callback,
                          onDismiss: () => eC(),
                          showCloseButton: !0
                      });
                  case ef.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: ef.ZY5.IN_APP };
                      return (0, r.jsx)(F.Z, {
                          guildId: h,
                          analyticsLocations: R,
                          analyticsLocation: e
                      });
                  }
                  case ef.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          className: ex.quarantineNotice,
                          children: [
                              eb.intl.string(eb.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eg.Z,
                                  target: '_blank',
                                  children: eb.intl.string(eb.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: eu.Z.getArticleURL(ef.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: ex.quarantineLearnMoreLink,
                                  children: eb.intl.string(eb.t.hvVgAQ)
                              })
                          ]
                      });
                  case ef.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              eb.intl.string(eb.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(ef.yXt.STATUS),
                                  children: eb.intl.string(eb.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => eC(),
                                  noticeType: ef.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eK, decisionId: eY } = C.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: ef.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      null != h && (0, U.T9)(h), eC(eK);
                                  }
                              }),
                              eb.intl.string(eb.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != h &&
                                          (0, U.UE)(h, eY, () => {
                                              eC(eK), (0, U.T9)(h);
                                          });
                                  },
                                  children: eb.intl.string(eb.t.oX14Eh)
                              }),
                              null != h
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => z.Z.open(h, ef.pNK.GUILD_AUTOMOD, void 0, ef.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eb.intl.string(eb.t['1R7QIy'])
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
                                      Q.hZ(), eC();
                                  }
                              }),
                              eb.intl.string(eb.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: ef.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, eE({}, t));
                                      }),
                                          Q.hZ(),
                                          eC();
                                  },
                                  children: eb.intl.string(eb.t.l5xYnJ)
                              })
                          ]
                      });
                  case ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eX = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(X.Z, {
                          dismissCurrentNotice: () => {
                              (0, P.EW)(es.m9[ef.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eC(eX);
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
                                      (null == (e = C.metadata) ? void 0 : e.streamKey) != null && (0, q.nE)(C.metadata.streamKey);
                                  }
                              }),
                              eb.intl.string(eb.t.rOx44u)
                          ]
                      });
                  case ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      eC(null == (e = C.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              eb.intl.string(eb.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      (0, $.ZZ)(), eC(null == (e = C.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: ef.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eb.intl.string(eb.t.e4y2VF)
                              })
                          ]
                      });
                  case ef.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)(J.Z, {});
                  default:
                      return null;
              }
          })
        : null;
function eI() {
    let { analyticsLocations: e } = (0, S.ZP)(C.Z.NOTICE);
    return (0, r.jsx)(S.Gt, {
        value: e,
        children: (0, r.jsx)(eS, {})
    });
}
