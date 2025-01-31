t.d(n, { Z: () => q });
var l = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    r = t(442837),
    o = t(481060),
    u = t(230711),
    c = t(812206),
    d = t(605436),
    m = t(600164),
    x = t(594190),
    g = t(925329),
    h = t(565138),
    v = t(977059),
    Z = t(695346),
    S = t(494620),
    j = t(592125),
    C = t(650774),
    f = t(430824),
    p = t(131951),
    N = t(944486),
    T = t(594174),
    E = t(449224),
    I = t(626135),
    P = t(823379),
    R = t(63063),
    k = t(358085),
    A = t(653255),
    b = t(989941),
    M = t(618407),
    D = t(586290),
    _ = t(233037),
    L = t(810013),
    z = t(537135),
    w = t(641115),
    U = t(143135),
    y = t(70722),
    G = t(981631),
    O = t(526761),
    W = t(388032),
    F = t(949949),
    B = t(456963);
function J(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: i, onChangeSource: s } = e,
        a = (0, r.e7)([x.ZP, E.Z], () => ((0, k.isWindows)() ? (0, b.Z)(x.ZP, E.Z) : null)),
        u = (0, r.e7)([c.Z], () => ((null == a ? void 0 : a.id) != null ? c.Z.getApplication(a.id) : null)),
        d = (0, r.e7)([x.ZP], () => x.ZP.getRunningGames()),
        m = (0, r.Wu)([c.Z], () => d.map((e) => (null != e.id ? c.Z.getApplication(e.id) : null)).filter(P.lm), [d]),
        h = null;
    if ((null != n ? (h = n.name) : null != a && (h = a.name), null == h)) return null;
    let v = (0, U.Z)(a, n, d),
        Z = i
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == v ? void 0 : v.id);
              })
            : u,
        S = null != n && n.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, l.jsx)(o.xJW, {
        title: W.intl.string(W.t.TC7Ev7),
        className: B.modalContent,
        titleClassName: B.formItemTitleVerySlim,
        children: (0, l.jsxs)(z.Z, {
            children: [
                null != Z
                    ? (0, l.jsx)(g.Z, {
                          game: Z,
                          size: g.Z.Sizes.XSMALL,
                          className: F.selectedIcon
                      })
                    : (0, l.jsx)(S, { className: F.selectedIcon }),
                (0, l.jsx)('span', {
                    className: F.ellipsisText,
                    children: h
                }),
                t
                    ? (0, l.jsx)(o.zxk, {
                          className: F.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: s,
                          children: W.intl.string(W.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function V(e) {
    let { onChange: n, guildId: t } = e,
        i = (0, r.e7)([f.Z], () => f.Z.getGuild(t));
    return null == i
        ? (n(), null)
        : (0, l.jsx)(o.xJW, {
              title: W.intl.string(W.t.WC3u3t),
              className: B.modalContent,
              titleClassName: B.formItemTitle,
              children: (0, l.jsxs)(z.Z, {
                  children: [
                      (0, l.jsx)(h.Z, {
                          guild: i,
                          size: h.Z.Sizes.SMALLER,
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
                          children: W.intl.string(W.t.GEgsAw)
                      })
                  ]
              })
          });
}
function Y(e) {
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
function H(e) {
    let { guildId: n } = e,
        t = (0, r.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        s = Z.eo.useSetting(),
        u = i.useCallback((e, n) => {
            Z.eo.updateSetting(n), I.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return t >= 2 && t <= y.tB
        ? (0, l.jsx)(o.xJW, {
              className: a()(B.modalContent, F.checkboxRow),
              children: (0, l.jsx)(o.XZJ, {
                  value: !!s,
                  type: o.XZJ.Types.INVERTED,
                  onChange: u,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: W.intl.string(W.t.Cef4t7)
                  })
              })
          })
        : null;
}
function X(e) {
    let { enabled: n, onChange: t, screen: s } = e,
        r = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.xJW, {
        className: a()(B.modalContent, F.checkboxRow),
        children: (0, l.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: r,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: s ? W.intl.string(W.t['5Adrtb']) : W.intl.string(W.t.gRpbRE)
            })
        })
    });
}
function K(e) {
    let { enabled: n, onChange: t } = e,
        s = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.xJW, {
        className: a()(B.modalContent, F.checkboxRow),
        children: (0, l.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: s,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: W.intl.string(W.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: n, selectedFPS: t, selectedChannelId: s, selectedPreset: a, selectedResolution: o, sourceChanged: c, selectedGuildId: m, targetGuildPremiumTier: x, selectSource: g, selectGuild: h, sound: Z, previewDisabled: C, onClose: f, onChangeSelectedFPS: E, onChangeSelectedResolution: I, onChangeSelectedPreset: P, onChangeSelectedChannelId: k, onChangeSource: b, onChangeAudioDevice: z, onChangeGuild: U, onChangeSound: y, onChangePreviewDisabled: B } = e,
        q = (0, r.e7)([N.Z, j.Z], () => j.Z.getChannel(N.Z.getVoiceChannelId())),
        Q = (0, r.e7)([A.Z], () => A.Z.GPUDriversOutdated),
        $ = (0, r.e7)([A.Z], () => A.Z.problematicGPUDriver),
        ee = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        en = (0, M.Z)();
    null != n && n.id.startsWith('screen') && !p.Z.supportsScreenSoundshare() && (en = W.intl.string(W.t['1b0Gm5']));
    let et = !!(null == n ? void 0 : n.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, d.Yk)(q),
        es = !(0, r.e7)([p.Z], () => p.Z.getHardwareEncoding()),
        { enabled: ea } = (0, v.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            et
                ? (0, l.jsx)(D.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: b,
                      onChangeAudioDevice: z
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(J, {
                              selectSource: g,
                              sourceChanged: c,
                              onChangeSource: b,
                              selectedSource: n
                          }),
                          null != en ? (0, l.jsx)(Y, { text: en }) : null,
                          null != n && null == en
                              ? (0, l.jsx)(X, {
                                    enabled: Z,
                                    onChange: y,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            h && null != m
                ? (0, l.jsx)(V, {
                      guildId: m,
                      onChange: U
                  })
                : null,
            null != q
                ? (0, l.jsx)(L.Z, { channel: q })
                : (0, l.jsx)(_.Z, {
                      guildId: m,
                      selectedChannelId: s,
                      onChangeSelectedChannelId: k
                  }),
            null != m && el && ei ? (0, l.jsx)(H, { guildId: m }) : null,
            Q ? (0, l.jsx)(Y, { text: W.intl.string(W.t.q65tS0) }) : null,
            $ ? (0, l.jsx)(Y, { text: W.intl.format(W.t.RrLvub, { helpCenterLink: R.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            es &&
                (0, l.jsx)(S.Z, {
                    look: S.z.WARNING,
                    className: F.hardwareWarning,
                    children: W.intl.format(W.t.zCLXws, {
                        onClick: () => {
                            f(), u.Z.open(G.oAB.VOICE, null, { scrollPosition: O.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(w.Z, {
                selectedPreset: a,
                selectedFPS: t,
                selectedResolution: o,
                targetGuildPremiumTier: x,
                onClose: f,
                onFPSChange: E,
                onResolutionChange: I,
                onPresetChange: P,
                captureDeviceSelected: et
            }),
            ea &&
                (0, l.jsx)(K, {
                    enabled: C,
                    onChange: B
                })
        ]
    });
}
