l.d(n, { Z: () => q });
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(442837),
    o = l(481060),
    u = l(230711),
    c = l(812206),
    d = l(605436),
    m = l(600164),
    x = l(594190),
    h = l(925329),
    g = l(565138),
    Z = l(977059),
    v = l(695346),
    S = l(494620),
    j = l(592125),
    C = l(650774),
    f = l(430824),
    N = l(131951),
    p = l(944486),
    T = l(594174),
    E = l(449224),
    I = l(626135),
    P = l(823379),
    R = l(63063),
    k = l(358085),
    b = l(653255),
    A = l(989941),
    M = l(618407),
    _ = l(586290),
    L = l(233037),
    D = l(810013),
    z = l(537135),
    w = l(641115),
    y = l(143135),
    U = l(70722),
    G = l(981631),
    O = l(526761),
    W = l(388032),
    V = l(642725),
    F = l(760416);
function J(e) {
    let { selectedSource: n, selectSource: l, sourceChanged: i, onChangeSource: s } = e,
        a = (0, r.e7)([x.ZP, E.Z], () => ((0, k.isWindows)() ? (0, A.Z)(x.ZP, E.Z) : null)),
        u = (0, r.e7)([c.Z], () => ((null == a ? void 0 : a.id) != null ? c.Z.getApplication(a.id) : null)),
        d = (0, r.e7)([x.ZP], () => x.ZP.getRunningGames()),
        m = (0, r.Wu)([c.Z], () => d.map((e) => (null != e.id ? c.Z.getApplication(e.id) : null)).filter(P.lm), [d]),
        g = null;
    if ((null != n ? (g = n.name) : null != a && (g = a.name), null == g)) return null;
    let Z = (0, y.Z)(a, n, d),
        v = i
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == Z ? void 0 : Z.id);
              })
            : u,
        S = null != n && n.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, t.jsx)(o.xJW, {
        title: W.intl.string(W.t.TC7Ev7),
        className: F.modalContent,
        titleClassName: F.formItemTitleVerySlim,
        children: (0, t.jsxs)(z.Z, {
            children: [
                null != v
                    ? (0, t.jsx)(h.Z, {
                          game: v,
                          size: h.Z.Sizes.XSMALL,
                          className: V.selectedIcon
                      })
                    : (0, t.jsx)(S, { className: V.selectedIcon }),
                (0, t.jsx)('span', {
                    className: V.ellipsisText,
                    children: g
                }),
                l
                    ? (0, t.jsx)(o.zxk, {
                          className: V.changeButton,
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
function B(e) {
    let { onChange: n, guildId: l } = e,
        i = (0, r.e7)([f.Z], () => f.Z.getGuild(l));
    return null == i
        ? (n(), null)
        : (0, t.jsx)(o.xJW, {
              title: W.intl.string(W.t.WC3u3t),
              className: F.modalContent,
              titleClassName: F.formItemTitle,
              children: (0, t.jsxs)(z.Z, {
                  children: [
                      (0, t.jsx)(g.Z, {
                          guild: i,
                          size: g.Z.Sizes.SMALLER,
                          className: V.selectedIcon
                      }),
                      (0, t.jsx)('span', {
                          className: V.ellipsisText,
                          children: i.toString()
                      }),
                      (0, t.jsx)(o.zxk, {
                          className: V.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: n,
                          children: W.intl.string(W.t.GEgsAw)
                      })
                  ]
              })
          });
}
function X(e) {
    let { text: n } = e;
    return (0, t.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: V.warning,
        children: [
            (0, t.jsx)(o.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: V.warningIcon
            }),
            (0, t.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
function Y(e) {
    let { guildId: n } = e,
        l = (0, r.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        s = v.eo.useSetting(),
        u = i.useCallback((e, n) => {
            v.eo.updateSetting(n), I.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return l >= 2 && l <= U.tB
        ? (0, t.jsx)(o.xJW, {
              className: a()(F.modalContent, V.checkboxRow),
              children: (0, t.jsx)(o.XZJ, {
                  value: !!s,
                  type: o.XZJ.Types.INVERTED,
                  onChange: u,
                  children: (0, t.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: W.intl.string(W.t.Cef4t7)
                  })
              })
          })
        : null;
}
function H(e) {
    let { enabled: n, onChange: l, screen: s } = e,
        r = i.useCallback(
            (e, n) => {
                l(n);
            },
            [l]
        );
    return (0, t.jsx)(o.xJW, {
        className: a()(F.modalContent, V.checkboxRow),
        children: (0, t.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: r,
            children: (0, t.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: s ? W.intl.string(W.t['5Adrtb']) : W.intl.string(W.t.gRpbRE)
            })
        })
    });
}
function K(e) {
    let { enabled: n, onChange: l } = e,
        s = i.useCallback(
            (e, n) => {
                l(n);
            },
            [l]
        );
    return (0, t.jsx)(o.xJW, {
        className: a()(F.modalContent, V.checkboxRow),
        children: (0, t.jsx)(o.XZJ, {
            value: n,
            type: o.XZJ.Types.INVERTED,
            onChange: s,
            children: (0, t.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: W.intl.string(W.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: n, selectedFPS: l, selectedChannelId: s, selectedPreset: a, selectedResolution: o, sourceChanged: c, selectedGuildId: m, targetGuildPremiumTier: x, selectSource: h, selectGuild: g, sound: v, previewDisabled: C, onClose: f, onChangeSelectedFPS: E, onChangeSelectedResolution: I, onChangeSelectedPreset: P, onChangeSelectedChannelId: k, onChangeSource: A, onChangeAudioDevice: z, onChangeGuild: y, onChangeSound: U, onChangePreviewDisabled: F } = e,
        q = (0, r.e7)([p.Z, j.Z], () => j.Z.getChannel(p.Z.getVoiceChannelId())),
        Q = (0, r.e7)([b.Z], () => b.Z.GPUDriversOutdated),
        $ = (0, r.e7)([b.Z], () => b.Z.problematicGPUDriver),
        ee = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        en = (0, M.Z)();
    null != n && n.id.startsWith('screen') && !N.Z.supportsScreenSoundshare() && (en = W.intl.string(W.t['1b0Gm5']));
    let el = !!(null == n ? void 0 : n.id.startsWith('camera')),
        et = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, d.Yk)(q),
        es = !(0, r.e7)([N.Z], () => N.Z.getHardwareEncoding()),
        { enabled: ea } = (0, Z.S)({ location: 'GoLiveModal_Confirm' });
    return (0, t.jsxs)(i.Fragment, {
        children: [
            el
                ? (0, t.jsx)(_.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: A,
                      onChangeAudioDevice: z
                  })
                : (0, t.jsxs)('div', {
                      children: [
                          (0, t.jsx)(J, {
                              selectSource: h,
                              sourceChanged: c,
                              onChangeSource: A,
                              selectedSource: n
                          }),
                          null != en ? (0, t.jsx)(X, { text: en }) : null,
                          null != n && null == en
                              ? (0, t.jsx)(H, {
                                    enabled: v,
                                    onChange: U,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            g && null != m
                ? (0, t.jsx)(B, {
                      guildId: m,
                      onChange: y
                  })
                : null,
            null != q
                ? (0, t.jsx)(D.Z, { channel: q })
                : (0, t.jsx)(L.Z, {
                      guildId: m,
                      selectedChannelId: s,
                      onChangeSelectedChannelId: k
                  }),
            null != m && et && ei ? (0, t.jsx)(Y, { guildId: m }) : null,
            Q ? (0, t.jsx)(X, { text: W.intl.string(W.t.q65tS0) }) : null,
            $ ? (0, t.jsx)(X, { text: W.intl.format(W.t.RrLvub, { helpCenterLink: R.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            es &&
                (0, t.jsx)(S.Z, {
                    look: S.z.WARNING,
                    className: V.hardwareWarning,
                    children: W.intl.format(W.t.zCLXws, {
                        onClick: () => {
                            f(), u.Z.open(G.oAB.VOICE, null, { scrollPosition: O.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, t.jsx)(w.Z, {
                selectedPreset: a,
                selectedFPS: l,
                selectedResolution: o,
                targetGuildPremiumTier: x,
                onClose: f,
                onFPSChange: E,
                onResolutionChange: I,
                onPresetChange: P,
                captureDeviceSelected: el
            }),
            ea &&
                (0, t.jsx)(K, {
                    enabled: C,
                    onChange: F
                })
        ]
    });
}
