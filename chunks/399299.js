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
    g = l(925329),
    h = l(565138),
    Z = l(977059),
    v = l(695346),
    S = l(494620),
    C = l(592125),
    j = l(650774),
    N = l(430824),
    f = l(131951),
    p = l(944486),
    T = l(594174),
    I = l(449224),
    E = l(626135),
    P = l(823379),
    R = l(63063),
    k = l(358085),
    A = l(653255),
    b = l(989941),
    M = l(618407),
    D = l(586290),
    _ = l(233037),
    L = l(810013),
    z = l(537135),
    w = l(641115),
    U = l(143135),
    y = l(70722),
    G = l(981631),
    O = l(526761),
    W = l(388032),
    F = l(642725),
    J = l(760416);
function B(e) {
    let { selectedSource: n, selectSource: l, sourceChanged: i, onChangeSource: s } = e,
        a = (0, r.e7)([x.ZP, I.Z], () => ((0, k.isWindows)() ? (0, b.Z)(x.ZP, I.Z) : null)),
        u = (0, r.e7)([c.Z], () => ((null == a ? void 0 : a.id) != null ? c.Z.getApplication(a.id) : null)),
        d = (0, r.e7)([x.ZP], () => x.ZP.getRunningGames()),
        m = (0, r.Wu)([c.Z], () => d.map((e) => (null != e.id ? c.Z.getApplication(e.id) : null)).filter(P.lm), [d]),
        h = null;
    if ((null != n ? (h = n.name) : null != a && (h = a.name), null == h)) return null;
    let Z = (0, U.Z)(a, n, d),
        v = i
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == Z ? void 0 : Z.id);
              })
            : u,
        S = null != n && n.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, t.jsx)(o.xJW, {
        title: W.intl.string(W.t.TC7Ev7),
        className: J.modalContent,
        titleClassName: J.formItemTitleVerySlim,
        children: (0, t.jsxs)(z.Z, {
            children: [
                null != v
                    ? (0, t.jsx)(g.Z, {
                          game: v,
                          size: g.Z.Sizes.XSMALL,
                          className: F.selectedIcon
                      })
                    : (0, t.jsx)(S, { className: F.selectedIcon }),
                (0, t.jsx)('span', {
                    className: F.ellipsisText,
                    children: h
                }),
                l
                    ? (0, t.jsx)(o.zxk, {
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
    let { onChange: n, guildId: l } = e,
        i = (0, r.e7)([N.Z], () => N.Z.getGuild(l));
    return null == i
        ? (n(), null)
        : (0, t.jsx)(o.xJW, {
              title: W.intl.string(W.t.WC3u3t),
              className: J.modalContent,
              titleClassName: J.formItemTitle,
              children: (0, t.jsxs)(z.Z, {
                  children: [
                      (0, t.jsx)(h.Z, {
                          guild: i,
                          size: h.Z.Sizes.SMALLER,
                          className: F.selectedIcon
                      }),
                      (0, t.jsx)('span', {
                          className: F.ellipsisText,
                          children: i.toString()
                      }),
                      (0, t.jsx)(o.zxk, {
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
function X(e) {
    let { text: n } = e;
    return (0, t.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: F.warning,
        children: [
            (0, t.jsx)(o.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: F.warningIcon
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
        l = (0, r.e7)([j.Z], () => {
            var e;
            return null !== (e = j.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        s = v.eo.useSetting(),
        u = i.useCallback((e, n) => {
            v.eo.updateSetting(n), E.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return l >= 2 && l <= y.tB
        ? (0, t.jsx)(o.xJW, {
              className: a()(J.modalContent, F.checkboxRow),
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
        className: a()(J.modalContent, F.checkboxRow),
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
        className: a()(J.modalContent, F.checkboxRow),
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
    let { selectedSource: n, selectedFPS: l, selectedChannelId: s, selectedPreset: a, selectedResolution: o, sourceChanged: c, selectedGuildId: m, targetGuildPremiumTier: x, selectSource: g, selectGuild: h, sound: v, previewDisabled: j, onClose: N, onChangeSelectedFPS: I, onChangeSelectedResolution: E, onChangeSelectedPreset: P, onChangeSelectedChannelId: k, onChangeSource: b, onChangeAudioDevice: z, onChangeGuild: U, onChangeSound: y, onChangePreviewDisabled: J } = e,
        q = (0, r.e7)([p.Z, C.Z], () => C.Z.getChannel(p.Z.getVoiceChannelId())),
        Q = (0, r.e7)([A.Z], () => A.Z.GPUDriversOutdated),
        $ = (0, r.e7)([A.Z], () => A.Z.problematicGPUDriver),
        ee = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        en = (0, M.Z)();
    null != n && n.id.startsWith('screen') && !f.Z.supportsScreenSoundshare() && (en = W.intl.string(W.t['1b0Gm5']));
    let el = !!(null == n ? void 0 : n.id.startsWith('camera')),
        et = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, d.Yk)(q),
        es = !(0, r.e7)([f.Z], () => f.Z.getHardwareEncoding()),
        { enabled: ea } = (0, Z.S)({ location: 'GoLiveModal_Confirm' });
    return (0, t.jsxs)(i.Fragment, {
        children: [
            el
                ? (0, t.jsx)(D.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: b,
                      onChangeAudioDevice: z
                  })
                : (0, t.jsxs)('div', {
                      children: [
                          (0, t.jsx)(B, {
                              selectSource: g,
                              sourceChanged: c,
                              onChangeSource: b,
                              selectedSource: n
                          }),
                          null != en ? (0, t.jsx)(X, { text: en }) : null,
                          null != n && null == en
                              ? (0, t.jsx)(H, {
                                    enabled: v,
                                    onChange: y,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            h && null != m
                ? (0, t.jsx)(V, {
                      guildId: m,
                      onChange: U
                  })
                : null,
            null != q
                ? (0, t.jsx)(L.Z, { channel: q })
                : (0, t.jsx)(_.Z, {
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
                    className: F.hardwareWarning,
                    children: W.intl.format(W.t.zCLXws, {
                        onClick: () => {
                            N(), u.Z.open(G.oAB.VOICE, null, { scrollPosition: O.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, t.jsx)(w.Z, {
                selectedPreset: a,
                selectedFPS: l,
                selectedResolution: o,
                targetGuildPremiumTier: x,
                onClose: N,
                onFPSChange: I,
                onResolutionChange: E,
                onPresetChange: P,
                captureDeviceSelected: el
            }),
            ea &&
                (0, t.jsx)(K, {
                    enabled: j,
                    onChange: J
                })
        ]
    });
}
