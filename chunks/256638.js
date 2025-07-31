n.d(t, {
    Z: () => eT,
    c: () => ej
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
    Z = n(131130),
    R = n(458725),
    D = n(386146),
    L = n(492435),
    M = n(353926),
    k = n(506357),
    U = n(36459),
    F = n(236069),
    B = n(305325),
    G = n(281956),
    V = n(574650),
    H = n(665302),
    z = n(434404),
    W = n(918658),
    K = n(859428),
    Y = n(963249),
    X = n(535278),
    q = n(246965),
    Q = n(272008),
    J = n(523255),
    $ = n(101879),
    ee = n(496729),
    et = n(852923),
    en = n(592125),
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
    eg = n(981631),
    e_ = n(474936),
    eh = n(610674),
    eb = n(65154),
    eE = n(388032),
    eC = n(131715);
function ev(e) {
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
let eO = (e) => {
        var t;
        let { error: n, location: i, allowClick: l = !1 } = e,
            a = null == (t = (0, R.hp)(n)) ? void 0 : t.errorCode,
            o = eE.intl.formatToPlainString(eE.t['ejOT9/'], { errorCode: a }),
            { avErrorUIEnabled: s } = (0, D.JN)({ location: i });
        if (!s) return null;
        let u = (0, r.jsx)(c.Text, {
            variant: 'text-sm/bold',
            color: 'currentColor',
            tag: 'span',
            className: eC.errorCodeNoticeText,
            selectable: !0,
            children: o
        });
        return l
            ? (0, r.jsx)(c.P3F, {
                  tag: 'span',
                  className: eC.errorCodeNoticeClickable,
                  onClick: () => l && open(ed.Z.getArticleURL(eg.BhN.AV_ERROR_CODES)),
                  children: u
              })
            : u;
    },
    ex = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        ej();
                    }
                }),
                eE.intl.string(eE.t.o3zuY2),
                (0, r.jsx)(eO, {
                    error: R.u.NO_INPUT_DEVICES,
                    location: 'AudioIssueNoticeInputDevices'
                }),
                (0, r.jsx)(c.u3T, {
                    href: ed.Z.getArticleURL(eg.BhN.NO_INPUT_DETECTED),
                    children: eE.intl.string(eE.t.RYKKo6)
                })
            ]
        }),
    ey = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        (ej(), (0, ef.b)());
                    }
                }),
                eE.intl.string(eE.t.nCO9bG),
                (0, r.jsx)(eO, {
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeHelpdesk'
                }),
                (0, r.jsx)(c.u3T, {
                    href: ed.Z.getArticleURL(eg.BhN.NO_INPUT_DETECTED),
                    children: eE.intl.string(eE.t.RYKKo6)
                })
            ]
        }),
    eI = () =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.DANGER,
            children: [
                (0, r.jsx)(c.RyX, {
                    onClick: () => {
                        (ej(), (0, ef.b)());
                    }
                }),
                eE.intl.string(eE.t.dNAJ19),
                (0, r.jsx)(eO, {
                    allowClick: !0,
                    error: R.u.NO_AUDIO_INPUT_DETECTED,
                    location: 'AudioIssueNoticeMicTester'
                }),
                (0, r.jsx)(c.EyT, {
                    onClick: () => {
                        ((0, f.jN)(eg.S9g.USER_SETTINGS), x.Z.setSection(eg.oAB.VOICE));
                    },
                    children: eE.intl.string(eE.t.I6YlBw)
                })
            ]
        });
function ej(e) {
    g.Z.dismiss(null != e ? { untilAtLeast: a()(e) } : void 0);
}
let eS =
    12633 == n.j
        ? i.memo(function () {
              var e, t;
              let l = (0, s.e7)([ea.default], () => ea.default.getCurrentUser()),
                  g = (0, s.e7)([el.Z], () => el.Z.getGuildId()),
                  I = (0, s.e7)([ec.ZP], () => ec.ZP.getNotice()),
                  { analyticsLocations: R } = (0, j.ZP)(),
                  D = null == I ? void 0 : I.type,
                  ef = (0, G.J)(g);
              (i.useEffect(() => {
                  null != D &&
                      (function (e, t) {
                          let n = { notice_type: e };
                          (null != t && (n.guild_id = t), eu.default.track(eg.rMx.APP_NOTICE_VIEWED, n));
                      })(D, g);
              }, [D, g]),
                  i.useEffect(() => {
                      if (null != I && I.type === eg.kVF.SURVEY && null != I.metadata) {
                          let { metadata: e } = I,
                              t = M.Z.getUserExperimentDescriptor(e.id);
                          (null != t && (0, L.W9)(e.id, t),
                              (async () => {
                                  var e, t;
                                  (null == (e = I.metadata) ? void 0 : e.id) != null && (await (0, v.g8)(null == (t = I.metadata) ? void 0 : t.id));
                              })());
                      }
                  }, [I]));
              let eO = null != D ? ec.o[D] : null,
                  eS = null != D ? ec.nA[D] : null,
                  eT = null != D ? ec.m9[D] : null;
              if (null == I) return null;
              if (null != eO)
                  return (0, r.jsx)(Z.q, {
                      dismissibleContent: eO,
                      noticeType: I.type
                  });
              if (null != eS) return (0, r.jsx)(w.c, { dismissibleContent: eS });
              if (null != eT)
                  return (0, r.jsx)(A.A, {
                      dismissibleContent: eT,
                      noticeType: I.type
                  });
              let eN = null == (e = I.metadata) ? void 0 : e.premiumType;
              switch (I.type) {
                  case eg.kVF.LURKING_GUILD:
                      return (0, r.jsx)(K.Z, {});
                  case eg.kVF.PENDING_MEMBER:
                      return (0, r.jsx)(V.Z, {});
                  case eg.kVF.INVITED_TO_SPEAK:
                      return (0, r.jsx)(et.Z, {});
                  case eg.kVF.GUILD_RAID_NOTIFICATION:
                      let { dismissUntil: eP } = I.metadata;
                      return (0, r.jsx)(k.Z, { onDismiss: () => ej(eP) });
                  case eg.kVF.WIN32_DEPRECATED_MESSAGE:
                      let { dismissUntil: eA } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(eA),
                                  noticeType: eg.kVF.WIN32_DEPRECATED_MESSAGE
                              }),
                              eE.intl.format(eE.t['08KQ1N'], { helpCenterLink: ed.Z.getArticleURL(eg.BhN.WIN32_DEPRECATE) })
                          ]
                      });
                  case eg.kVF.WIN7_8_DEPRECATED_MESSAGE:
                      let { dismissUntil: ew } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(ew),
                                  noticeType: eg.kVF.WIN7_8_DEPRECATED_MESSAGE
                              }),
                              eE.intl.format(eE.t['8Je+dX'], { helpCenterLink: ed.Z.getArticleURL(eg.BhN.WIN7_8_DEPRECATE) })
                          ]
                      });
                  case eg.kVF.MACOS_19_DEPRECATED_MESSAGE:
                      let { dismissUntil: eZ } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(eZ),
                                  noticeType: eg.kVF.MACOS_19_DEPRECATED_MESSAGE
                              }),
                              eE.intl.format(eE.t.q8VPLi, { helpCenterLink: ed.Z.getArticleURL(eg.BhN.MACOS_19_DEPRECATE) })
                          ]
                      });
                  case eg.kVF.GENERIC:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.GENERIC
                              }),
                              I.message,
                              null != I.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: I.callback,
                                        noticeType: eg.kVF.GENERIC,
                                        children: I.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eg.kVF.LAUNCH_GAME_FAILURE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.LAUNCH_GAME_FAILURE
                              }),
                              I.message,
                              null != I.buttonText
                                  ? (0, r.jsx)(c.NoS, {
                                        onClick: I.callback,
                                        noticeType: eg.kVF.LAUNCH_GAME_FAILURE,
                                        children: I.buttonText
                                    })
                                  : null
                          ]
                      });
                  case eg.kVF.VOICE_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      (_.Z.clearRemoteDisconnectVoiceChannelId(), ej());
                                  },
                                  noticeType: eg.kVF.VOICE_DISABLED
                              }),
                              eE.intl.string(eE.t.bOQ3jY),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getRemoteDisconnectVoiceChannelId();
                                      null != e && null != en.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eg.kVF.VOICE_DISABLED,
                                  children: eE.intl.string(eE.t.vD60Pj)
                              })
                          ]
                      });
                  case eg.kVF.VOICE_CONNECTED_LAST_SESSION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      (_.Z.clearLastSessionVoiceChannelId(), ej());
                                  },
                                  noticeType: eg.kVF.VOICE_CONNECTED_LAST_SESSION
                              }),
                              eE.intl.string(eE.t.jY2lUF),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      let e = ei.Z.getLastSessionVoiceChannelId();
                                      null != e && null != en.Z.getChannel(e) && h.default.selectVoiceChannel(e);
                                  },
                                  noticeType: eg.kVF.VOICE_CONNECTED_LAST_SESSION,
                                  children: eE.intl.string(eE.t.vD60Pj)
                              })
                          ]
                      });
                  case eg.kVF.SPOTIFY_AUTO_PAUSED:
                      let eR = y.Z.get(eg.ABu.SPOTIFY);
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.SPOTIFY_AUTO_PAUSED
                              }),
                              (0, r.jsx)('img', {
                                  alt: '',
                                  className: eC.platformIcon,
                                  src: eR.icon.whiteSVG
                              }),
                              eE.intl.string(eE.t['D8Cp7+']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => x.Z.open(eg.oAB.VOICE),
                                  noticeType: eg.kVF.SPOTIFY_AUTO_PAUSED,
                                  children: eE.intl.string(eE.t.NiTd0d)
                              }),
                              (0, r.jsx)(c.eee, {
                                  className: eC.textLinkSmall,
                                  href: ed.Z.getArticleURL(eg.BhN.SPOTIFY_AUTO_PAUSED),
                                  target: '_blank',
                                  children: eE.intl.string(eE.t.CiqAIS)
                              })
                          ]
                      });
                  case eg.kVF.UNCLAIMED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eE.intl.string(eE.t['f+Zaoq']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.UNCLAIMED_ACCOUNT,
                                  onClick: () => (ef && null != g ? (0, B.hk)(g) : T.j()),
                                  children: eE.intl.string(eE.t.fiNVio)
                              })
                          ]
                      });
                  case eg.kVF.UNVERIFIED_ACCOUNT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              eE.intl.string(eE.t['3sWbf3']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.UNVERIFIED_ACCOUNT,
                                  onClick: () => {
                                      (p.Z.verifyResend(),
                                          u.Z.show({
                                              title: eE.intl.string(eE.t.LykQYm),
                                              body: eE.intl.format(eE.t.azKEPz, { email: null == l ? void 0 : l.email }),
                                              secondaryConfirmText: eE.intl.string(eE.t.oP5zGB),
                                              onConfirmSecondary: T.j
                                          }));
                                  },
                                  children: eE.intl.string(eE.t.WnX4Jy)
                              })
                          ]
                      });
                  case eg.kVF.SCHEDULED_MAINTENANCE:
                      if (null == I.metadata) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => b.Z.ackScheduledMaintenance(),
                                  noticeType: eg.kVF.SCHEDULED_MAINTENANCE
                              }),
                              eE.intl.format(eE.t.yb96S0, I.metadata),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eg.yXt.STATUS, '/incidents/').concat(I.metadata.id),
                                  children: eE.intl.string(eE.t.hvVgAQ)
                              })
                          ]
                      });
                  case eg.kVF.NO_INPUT_DETECTED:
                      if (!er.Z.supports(eb.AN.LOOPBACK)) return (0, r.jsx)(ey, {});
                      return (0, r.jsx)(eI, {});
                  case eg.kVF.NO_INPUT_DEVICES_DETECTED:
                      return (0, r.jsx)(ex, {});
                  case eg.kVF.HARDWARE_MUTE:
                      if (null == I.metadata) return null;
                      let { vendor: eD, model: eL } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eE.intl.format(eE.t.qoDex8, {
                                  vendorName: eD.name,
                                  modelName: eL.name
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      (d.Z.setEnableHardwareMuteNotice(!1), ej());
                                  }
                              }),
                              (0, r.jsx)(c.u3T, {
                                  href: eL.url,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  children: eE.intl.string(eE.t['Yl/Rio'])
                              })
                          ]
                      });
                  case eg.kVF.STREAMER_MODE:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.STREAMER_MODE,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.STREAMER_MODE
                              }),
                              eE.intl.string(eE.t.iEgBXl),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => C.Z.setEnabled(!1),
                                  noticeType: eg.kVF.STREAMER_MODE,
                                  children: eE.intl.string(eE.t.R9GHyc)
                              })
                          ]
                      });
                  case eg.kVF.H264_DISABLED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      ej();
                                  }
                              }),
                              eE.intl.string(eE.t.HcErZW),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      ((0, f.jN)(eg.S9g.USER_SETTINGS), x.Z.setSection(eg.oAB.VOICE));
                                  },
                                  children: eE.intl.string(eE.t['51hI/v'])
                              })
                          ]
                      });
                  case eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                      if (null == I.metadata) return null;
                      let { skuId: eM, applicationId: ek } = I.metadata,
                          eU = eo.Z.get(eM),
                          eF = S.Z.getApplication(ek);
                      if (null == eU || null == eF) return null;
                      let eB = { page: eg.ZY5.IN_APP };
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => m.Z(eU.id),
                                  noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eC.premiumIcon
                              }),
                              eE.intl.format(eE.t['g3MU//'], {
                                  applicationName: eF.name,
                                  skuName: eU.name
                              }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                                  onClick: () =>
                                      (0, ep.S)({
                                          applicationId: eF.id,
                                          skuId: eU.id,
                                          openPremiumPaymentModal: () => {
                                              (0, Y.Z)({
                                                  initialPlanId: null,
                                                  subscriptionTier: e_.Si.TIER_2,
                                                  analyticsLocations: R,
                                                  analyticsObject: eB
                                              });
                                          },
                                          analyticsLocations: R,
                                          analyticsLocationObject: eB,
                                          context: __OVERLAY__ ? eg.IlC.OVERLAY : eg.IlC.APP
                                      }).then(() => m.Z(eU.id)),
                                  children: eE.intl.string(eE.t.KEwPY2)
                              })
                          ]
                      });
                  case eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                      if (null == I.metadata) return null;
                      let { skuId: e, applicationId: t } = I.metadata,
                          n = eo.Z.get(e),
                          i = S.Z.getApplication(t);
                      if (null == n || null == i) return null;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.PREMIUM_TIER_1,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eC.premiumIcon
                              }),
                              eE.intl.format(eE.t.LquIKC, {
                                  applicationName: i.name,
                                  skuName: n.name
                              }),
                              (0, r.jsx)(c.EyT, {
                                  children: (0, r.jsx)(o.rU, {
                                      onClick: () => ej(),
                                      to: {
                                          pathname: eg.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                          state: { scrollRestoration: !1 }
                                      },
                                      children: eE.intl.string(eE.t.hvVgAQ)
                                  })
                              })
                          ]
                      });
                  }
                  case eg.kVF.SURVEY: {
                      let e = I.metadata;
                      if (null == e) return null;
                      let { key: t, prompt: n, cta: i, url: l } = e;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.CUSTOM,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.SURVEY,
                                  onClick: () => {
                                      (0, v.hZ)(t, !0);
                                  }
                              }),
                              n,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.SURVEY,
                                  onClick: () => {
                                      (window.open(l, '_blank'), (0, v.hZ)(t, !1));
                                  },
                                  children: i
                              })
                          ]
                      });
                  }
                  case eg.kVF.CORRUPT_INSTALLATION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eE.intl.string(eE.t.ugxmk5),
                              (0, r.jsx)(c.u3T, {
                                  href: ed.Z.getArticleURL(eg.BhN.CORRUPT_INSTALLATION),
                                  target: '_blank',
                                  children: eE.intl.string(eE.t['6ik4Xl'])
                              })
                          ]
                      });
                  case eg.kVF.VIDEO_UNSUPPORTED_BROWSER:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.VIDEO_UNSUPPORTED_BROWSER
                              }),
                              eE.intl.string(eE.t.wVjKGh),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.VIDEO_UNSUPPORTED_BROWSER,
                                  onClick: () => {
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                                          return (t) => (0, r.jsx)(e, ev({ source: 'Video unsupported browser' }, t));
                                      });
                                  },
                                  children: eE.intl.string(eE.t['1WjMbG'])
                              })
                          ]
                      });
                  case eg.kVF.DISPATCH_ERROR:
                      if (null == I.metadata) return null;
                      let { error: eG } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.DISPATCH_ERROR
                              }),
                              null == eG ? void 0 : eG.displayMessage,
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.DISPATCH_ERROR,
                                  onClick: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('20212').then(n.bind(n, 915194));
                                          return (t) => (0, r.jsx)(e, ev({}, t));
                                      }),
                                  children: eE.intl.string(eE.t.hvVgAQ)
                              })
                          ]
                      });
                  case eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                      if (null == I.metadata) return null;
                      let { progress: eV, total: eH, name: ez } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DEFAULT,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                              }),
                              (0, r.jsxs)(N.Z, {
                                  justify: N.Z.Justify.CENTER,
                                  children: [
                                      null != ez
                                          ? eE.intl.formatToPlainString(eE.t['pHj+z8'], {
                                                name: ''.concat(ez),
                                                progress: eV,
                                                total: eH
                                            })
                                          : eE.intl.formatToPlainString(eE.t['lHZn+P'], {
                                                progress: eV,
                                                total: eH
                                            }),
                                      (0, r.jsx)(c.$jN, {
                                          type: c.$jN.Type.PULSING_ELLIPSIS,
                                          className: eC.ellipsis
                                      })
                                  ]
                              })
                          ]
                      });
                  case eg.kVF.APPLICATION_TEST_MODE:
                      if (null == I.metadata) return null;
                      if (null != es.Z.testModeEmbeddedApplicationId)
                          return (0, r.jsx)(c.qXd, {
                              color: c.DM8.WARNING,
                              children: (0, r.jsxs)(N.Z, {
                                  justify: N.Z.Justify.CENTER,
                                  align: N.Z.Align.CENTER,
                                  children: [
                                      (0, r.jsx)('div', { children: eE.intl.format(eE.t['1qxVe3'], { applicationName: I.metadata.applicationName }) }),
                                      (0, r.jsx)(c.RyX, {
                                          onClick: O.mc,
                                          noticeType: eg.kVF.APPLICATION_TEST_MODE
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
                                  (0, r.jsx)('div', { children: eE.intl.format(eE.t.Fv5HrK, { applicationName: I.metadata.applicationName }) }),
                                  (0, r.jsx)(em.Z, {
                                      dropdownSize: em.E.DropdownSizes.SMALL,
                                      className: eC.testModeSKUSelector,
                                      color: em.E.Colors.WHITE,
                                      look: em.E.Looks.OUTLINED,
                                      size: em.E.Sizes.MIN,
                                      onSKUSelect: (e) =>
                                          E.yt(e.id, {
                                              analyticsSource: {
                                                  page: null,
                                                  section: eg.jXE.NOTIFICATION_BAR,
                                                  object: eg.qAy.NAVIGATION_LINK
                                              }
                                          }),
                                      applicationId: I.metadata.applicationId,
                                      children: eE.intl.string(eE.t.Q5ZgpK)
                                  }),
                                  (0, r.jsx)(c.RyX, {
                                      onClick: O.mc,
                                      noticeType: eg.kVF.APPLICATION_TEST_MODE
                                  })
                              ]
                          })
                      });
                  case eg.kVF.VIEWING_ROLES:
                      return (0, r.jsx)(W.Z, {});
                  case eg.kVF.PREMIUM_UNCANCEL:
                      return (0, r.jsxs)(c.qXd, {
                          color: eN === e_.p9.TIER_1 ? c.DM8.PREMIUM_TIER_1 : eN === e_.p9.TIER_0 ? c.DM8.PREMIUM_TIER_0 : c.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              (0, r.jsx)(c.SrA, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: eC.premiumIcon
                              }),
                              eN === e_.p9.TIER_1 ? eE.intl.formatToPlainString(eE.t.fXv4ws, { daysLeft: I.metadata.daysLeft }) : eN === e_.p9.TIER_0 ? eE.intl.formatToPlainString(eE.t.ZOHZMj, { daysLeft: I.metadata.daysLeft }) : eE.intl.formatToPlainString(eE.t.outyHh, { daysLeft: I.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.PREMIUM_UNCANCEL,
                                  onClick: () => {
                                      var e, t;
                                      (ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd),
                                          (0, c.ZDy)(async () => {
                                              let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('84992'), n.e('5491')]).then(n.bind(n, 561623));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = ev({}, t)),
                                                      (i = i =
                                                          {
                                                              daysLeft: I.metadata.daysLeft,
                                                              premiumType: eN,
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
                                  children: eN === e_.p9.TIER_1 ? eE.intl.string(eE.t.BkbUPD) : eN === e_.p9.TIER_0 ? eE.intl.string(eE.t.Px978f) : eE.intl.string(eE.t.LW5tCA)
                              })
                          ]
                      });
                  case eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                      let { daysPastDue: eW, dismissUntil: eK } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: D,
                                  onClick: () => {
                                      ej(eK);
                                  }
                              }),
                              eE.intl.format(eE.t.zxU0Ki, { daysPastDue: eW }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                                  onClick: () => {
                                      (ej(eK), x.Z.open(eg.oAB.SUBSCRIPTIONS));
                                  },
                                  children: eE.intl.string(eE.t.q8rxeX)
                              })
                          ]
                      });
                  case eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eE.intl.string(eE.t.LlZaoa),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eg.oAB.SUBSCRIPTIONS));
                                  },
                                  children: eE.intl.string(eE.t['Zpd+Ym'])
                              })
                          ]
                      });
                  case eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eE.intl.string(eE.t['30YfCg']),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eg.oAB.SUBSCRIPTIONS));
                                  },
                                  children: eE.intl.string(eE.t.U5pKWF)
                              })
                          ]
                      });
                  case eg.kVF.PREMIUM_MISSING_PAYMENT:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd);
                                  }
                              }),
                              eN === e_.p9.TIER_1 ? eE.intl.formatToPlainString(eE.t.b6QUvb, { daysLeft: I.metadata.daysLeft }) : eN === e_.p9.TIER_0 ? eE.intl.formatToPlainString(eE.t['tURZ/P'], { daysLeft: I.metadata.daysLeft }) : eE.intl.formatToPlainString(eE.t.AyC74O, { daysLeft: I.metadata.daysLeft }),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.PREMIUM_MISSING_PAYMENT,
                                  onClick: () => {
                                      var e, t;
                                      (ej(null == (t = I.metadata) || null == (e = t.premiumSubscription) ? void 0 : e.currentPeriodEnd), x.Z.open(eg.oAB.SUBSCRIPTIONS));
                                  },
                                  children: eN === e_.p9.TIER_1 ? eE.intl.string(eE.t.lboF5O) : eN === e_.p9.TIER_0 ? eE.intl.string(eE.t['4UPwOj']) : eE.intl.string(eE.t['P/VvGR'])
                              })
                          ]
                      });
                  case eg.kVF.BACK_TO_PREVIOUS_SCREEN:
                      return (0, r.jsx)(H.h, {
                          buttonText: null != (t = I.buttonText) ? t : eE.intl.string(eE.t['/g10LC']),
                          onGoBack: I.callback,
                          onDismiss: () => ej(),
                          showCloseButton: !0
                      });
                  case eg.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
                      let e = { page: eg.ZY5.IN_APP };
                      return (0, r.jsx)(F.Z, {
                          guildId: g,
                          analyticsLocations: R,
                          analyticsLocation: e
                      });
                  }
                  case eg.kVF.QUARANTINED:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              eE.intl.string(eE.t.DVFJYW),
                              (0, r.jsx)(c.u3T, {
                                  href: eh.Z,
                                  target: '_blank',
                                  children: eE.intl.string(eE.t.kvHdFB)
                              }),
                              (0, r.jsx)(c.eee, {
                                  href: ed.Z.getArticleURL(eg.BhN.QUARANTINE),
                                  target: '_blank',
                                  className: eC.quarantineLearnMoreLink,
                                  children: eE.intl.string(eE.t.hvVgAQ)
                              })
                          ]
                      });
                  case eg.kVF.BLOCKED_BY_PROXY:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              eE.intl.string(eE.t.Ugijzs),
                              (0, r.jsx)(c.u3T, {
                                  href: ''.concat(eg.yXt.STATUS),
                                  children: eE.intl.string(eE.t.hvVgAQ)
                              }),
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => ej(),
                                  noticeType: eg.kVF.BLOCKED_BY_PROXY
                              })
                          ]
                      });
                  case eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
                      let { dismissUntil: eY, decisionId: eX } = I.metadata;
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.WARNING,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                                  onClick: () => {
                                      (null != g && (0, U.T9)(g), ej(eY));
                                  }
                              }),
                              eE.intl.string(eE.t.B8ruyc),
                              (0, r.jsx)(c.EyT, {
                                  onClick: () => {
                                      null != g &&
                                          (0, U.UE)(g, eX, () => {
                                              (ej(eY), (0, U.T9)(g));
                                          });
                                  },
                                  children: eE.intl.string(eE.t.oX14Eh)
                              }),
                              null != g
                                  ? (0, r.jsx)(c.EyT, {
                                        onClick: () => z.Z.open(g, eg.pNK.GUILD_AUTOMOD, void 0, eg.KsC.AUTOMOD_MENTION_SPAM),
                                        children: eE.intl.string(eE.t['1R7QIy'])
                                    })
                                  : null
                          ]
                      });
                  case eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      (J.hZ(), ej());
                                  }
                              }),
                              eE.intl.string(eE.t.I1nKfH),
                              (0, r.jsx)(c.NoS, {
                                  noticeType: eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                                  onClick: () => {
                                      ((0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('52432').then(n.bind(n, 349994));
                                          return (t) => (0, r.jsx)(e, ev({}, t));
                                      }),
                                          J.hZ(),
                                          ej());
                                  },
                                  children: eE.intl.string(eE.t.l5xYnJ)
                              })
                          ]
                      });
                  case eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                      let eq = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(q.Z, {
                          dismissCurrentNotice: () => {
                              ((0, P.Q3)(ec.m9[eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), ej(eq));
                          },
                          subscriptionTier: e_.Si.TIER_2
                      });
                  case eg.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                      let eQ = a()().add(5, 'days').toDate();
                      return (0, r.jsx)(X.Z, {
                          dismissCurrentNotice: () => {
                              ej(eQ);
                          },
                          subscriptionTier: e_.Si.TIER_2
                      });
                  case eg.kVF.QUESTS_PROGRESS_INTERRUPTION:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.DANGER,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  noticeType: eg.kVF.QUESTS_PROGRESS_INTERRUPTION,
                                  onClick: () => {
                                      var e;
                                      (null == (e = I.metadata) ? void 0 : e.streamKey) != null && (0, Q.nE)(I.metadata.streamKey);
                                  }
                              }),
                              eE.intl.string(eE.t.rOx44u)
                          ]
                      });
                  case eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsxs)(c.qXd, {
                          color: c.DM8.BRAND,
                          children: [
                              (0, r.jsx)(c.RyX, {
                                  onClick: () => {
                                      var e;
                                      ej(null == (e = I.metadata) ? void 0 : e.dismissUntil);
                                  },
                                  noticeType: eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR
                              }),
                              eE.intl.string(eE.t['0klLS0']),
                              (0, r.jsx)(c.NoS, {
                                  onClick: () => {
                                      var e;
                                      ((0, ee.ZZ)(), ej(null == (e = I.metadata) ? void 0 : e.dismissUntil));
                                  },
                                  noticeType: eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
                                  children: eE.intl.string(eE.t.e4y2VF)
                              })
                          ]
                      });
                  case eg.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
                      return (0, r.jsx)($.Z, {});
                  default:
                      return null;
              }
          })
        : null;
function eT() {
    let { analyticsLocations: e } = (0, j.ZP)(I.Z.NOTICE);
    return (0, r.jsx)(j.Gt, {
        value: e,
        children: (0, r.jsx)(eS, {})
    });
}
