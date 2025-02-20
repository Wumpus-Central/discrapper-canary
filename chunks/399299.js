t.d(n, { Z: () => q });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(442837),
    o = t(481060),
    c = t(230711),
    u = t(812206),
    d = t(605436),
    m = t(600164),
    g = t(594190),
    h = t(925329),
    x = t(565138),
    v = t(977059),
    f = t(695346),
    j = t(494620),
    Z = t(592125),
    N = t(650774),
    S = t(430824),
    p = t(131951),
    C = t(944486),
    b = t(594174),
    P = t(449224),
    T = t(626135),
    E = t(823379),
    I = t(63063),
    O = t(358085),
    y = t(653255),
    R = t(989941),
    W = t(618407),
    k = t(586290),
    w = t(233037),
    A = t(810013),
    D = t(537135),
    M = t(641115),
    _ = t(143135),
    L = t(70722),
    z = t(981631),
    U = t(526761),
    G = t(388032),
    F = t(557616),
    V = t(382840);
function J(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: i, onChangeSource: r } = e,
        s = (0, a.e7)([g.ZP, P.Z], () => ((0, O.isWindows)() ? (0, R.Z)(g.ZP, P.Z) : null)),
        c = (0, a.e7)([u.Z], () => ((null == s ? void 0 : s.id) != null ? u.Z.getApplication(s.id) : null)),
        d = (0, a.e7)([g.ZP], () => g.ZP.getRunningGames()),
        m = (0, a.Wu)([u.Z], () => d.map((e) => (null != e.id ? u.Z.getApplication(e.id) : null)).filter(E.lm), [d]),
        x = null;
    if ((null != n ? (x = n.name) : null != s && (x = s.name), null == x)) return null;
    let v = (0, _.Z)(s, n, d),
        f = i
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == v ? void 0 : v.id);
              })
            : c,
        j = null != n && n.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, l.jsx)(o.xJW, {
        title: G.NW.string(G.t.TC7Ev7),
        className: V.modalContent,
        titleClassName: V.formItemTitleVerySlim,
        children: (0, l.jsxs)(D.Z, {
            children: [
                null != f
                    ? (0, l.jsx)(h.Z, {
                          game: f,
                          size: h.Z.Sizes.XSMALL,
                          className: F.selectedIcon
                      })
                    : (0, l.jsx)(j, { className: F.selectedIcon }),
                (0, l.jsx)('span', {
                    className: F.ellipsisText,
                    children: x
                }),
                t
                    ? (0, l.jsx)(o.zxk, {
                          className: F.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: r,
                          children: G.NW.string(G.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function B(e) {
    let { onChange: n, guildId: t } = e,
        i = (0, a.e7)([S.Z], () => S.Z.getGuild(t));
    return null == i
        ? (n(), null)
        : (0, l.jsx)(o.xJW, {
              title: G.NW.string(G.t.WC3u3t),
              className: V.modalContent,
              titleClassName: V.formItemTitle,
              children: (0, l.jsxs)(D.Z, {
                  children: [
                      (0, l.jsx)(x.Z, {
                          guild: i,
                          size: x.Z.Sizes.SMALLER,
                          className: F.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: F.ellipsisText,
                          children: i.toString()
                      }),
                      (0, l.jsx)(o.zxk, {
                          className: F.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: n,
                          children: G.NW.string(G.t.GEgsAw)
                      })
                  ]
              })
          });
}
function X(e) {
    let { text: n } = e;
    return (0, l.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: F.warning,
        children: [
            (0, l.jsx)(o.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: F.warningIcon
            }),
            (0, l.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
function Y(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([N.Z], () => {
            var e;
            return null !== (e = N.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        r = f.eo.useSetting(),
        c = i.useCallback((e, n) => {
            f.eo.updateSetting(n), T.default.track(z.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return t >= 2 && t <= L.tB
        ? (0, l.jsx)(o.xJW, {
              className: s()(V.modalContent, F.checkboxRow),
              children: (0, l.jsx)(o.XZJ, {
                  value: !!r,
                  type: o.XZJ.Types.INVERTED,
                  onChange: c,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: G.NW.string(G.t.Cef4t7)
                  })
              })
          })
        : null;
}
function H(e) {
    let { enabled: n, onChange: t, screen: r } = e,
        a = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.xJW, {
        className: s()(V.modalContent, F.checkboxRow),
        children: (0, l.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: r ? G.NW.string(G.t['5Adrtb']) : G.NW.string(G.t.gRpbRE)
            })
        })
    });
}
function K(e) {
    let { enabled: n, onChange: t } = e,
        r = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.xJW, {
        className: s()(V.modalContent, F.checkboxRow),
        children: (0, l.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: G.NW.string(G.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: n, selectedFPS: t, selectedChannelId: r, selectedPreset: s, selectedResolution: o, sourceChanged: u, selectedGuildId: m, targetGuildPremiumTier: g, selectSource: h, selectGuild: x, sound: f, previewDisabled: N, onClose: S, onChangeSelectedFPS: P, onChangeSelectedResolution: T, onChangeSelectedPreset: E, onChangeSelectedChannelId: O, onChangeSource: R, onChangeAudioDevice: D, onChangeGuild: _, onChangeSound: L, onChangePreviewDisabled: V } = e,
        q = (0, a.e7)([C.Z, Z.Z], () => Z.Z.getChannel(C.Z.getVoiceChannelId())),
        Q = (0, a.e7)([y.Z], () => y.Z.GPUDriversOutdated),
        $ = (0, a.e7)([y.Z], () => y.Z.problematicGPUDriver),
        ee = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        en = (0, W.Z)();
    null != n && n.id.startsWith('screen') && !p.Z.supportsScreenSoundshare() && (en = G.NW.string(G.t['1b0Gm5']));
    let et = !!(null == n ? void 0 : n.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, d.Yk)(q),
        er = !(0, a.e7)([p.Z], () => p.Z.getHardwareEncoding()),
        { enabled: es } = (0, v.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            et
                ? (0, l.jsx)(k.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: R,
                      onChangeAudioDevice: D
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(J, {
                              selectSource: h,
                              sourceChanged: u,
                              onChangeSource: R,
                              selectedSource: n
                          }),
                          null != en ? (0, l.jsx)(X, { text: en }) : null,
                          null != n && null == en
                              ? (0, l.jsx)(H, {
                                    enabled: f,
                                    onChange: L,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != m
                ? (0, l.jsx)(B, {
                      guildId: m,
                      onChange: _
                  })
                : null,
            null != q
                ? (0, l.jsx)(A.Z, { channel: q })
                : (0, l.jsx)(w.Z, {
                      guildId: m,
                      selectedChannelId: r,
                      onChangeSelectedChannelId: O
                  }),
            null != m && el && ei ? (0, l.jsx)(Y, { guildId: m }) : null,
            Q ? (0, l.jsx)(X, { text: G.NW.string(G.t.q65tS0) }) : null,
            $ ? (0, l.jsx)(X, { text: G.NW.format(G.t.RrLvub, { helpCenterLink: I.Z.getArticleURL(z.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            er &&
                (0, l.jsx)(j.Z, {
                    look: j.z.WARNING,
                    className: F.hardwareWarning,
                    children: G.NW.format(G.t.zCLXws, {
                        onClick: () => {
                            S(), c.Z.open(z.oAB.VOICE, null, { scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(M.Z, {
                selectedPreset: s,
                selectedFPS: t,
                selectedResolution: o,
                targetGuildPremiumTier: g,
                onClose: S,
                onFPSChange: P,
                onResolutionChange: T,
                onPresetChange: E,
                captureDeviceSelected: et
            }),
            es &&
                (0, l.jsx)(K, {
                    enabled: N,
                    onChange: V
                })
        ]
    });
}
