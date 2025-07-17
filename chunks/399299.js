n.d(t, { Z: () => q });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(230711),
    u = n(812206),
    f = n(605436),
    m = n(600164),
    h = n(594190),
    p = n(925329),
    x = n(565138),
    g = n(695346),
    _ = n(494620),
    v = n(592125),
    j = n(650774),
    b = n(430824),
    S = n(131951),
    C = n(944486),
    y = n(594174),
    O = n(449224),
    Z = n(626135),
    w = n(823379),
    I = n(63063),
    N = n(358085),
    E = n(653255),
    T = n(989941),
    P = n(618407),
    R = n(586290),
    A = n(233037),
    k = n(810013),
    M = n(537135),
    L = n(641115),
    D = n(143135),
    B = n(70722),
    G = n(981631),
    U = n(526761),
    W = n(388032),
    F = n(14383),
    z = n(347226);
function H(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: i, onChangeSource: l } = e,
        s = (0, o.e7)([h.ZP, O.Z], () => ((0, N.isWindows)() ? (0, T.Z)(h.ZP, O.Z) : null)),
        d = (0, o.e7)([u.Z], () => ((null == s ? void 0 : s.id) != null ? u.Z.getApplication(s.id) : null)),
        f = (0, o.e7)([h.ZP], () => h.ZP.getRunningGames()),
        m = (0, o.Wu)([u.Z], () => f.map((e) => (null != e.id ? u.Z.getApplication(e.id) : null)).filter(w.lm), [f]),
        x = null;
    if ((null != t ? (x = t.name) : null != s && (x = s.name), null == x)) return null;
    let g = (0, D.Z)(s, t, f),
        _ = i
            ? m.find((e) => {
                  let { id: t } = e;
                  return t === (null == g ? void 0 : g.id);
              })
            : d,
        v = null != t && t.id.startsWith('screen') ? c.pzj : c.GON;
    return (0, r.jsx)(c.xJW, {
        title: W.intl.string(W.t.TC7Ev7),
        className: z.modalContent,
        titleClassName: z.formItemTitleVerySlim,
        children: (0, r.jsxs)(M.Z, {
            children: [
                null != _
                    ? (0, r.jsx)(p.Z, {
                          game: _,
                          size: p.Z.Sizes.XSMALL,
                          className: F.selectedIcon
                      })
                    : (0, r.jsx)(v, { className: F.selectedIcon }),
                (0, r.jsx)('span', {
                    className: F.ellipsisText,
                    children: x
                }),
                n
                    ? (0, r.jsx)(a.zx, {
                          className: F.changeButton,
                          color: a.zx.Colors.PRIMARY,
                          size: a.zx.Sizes.SMALL,
                          onClick: l,
                          children: W.intl.string(W.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function V(e) {
    let { onChange: t, guildId: n } = e,
        i = (0, o.e7)([b.Z], () => b.Z.getGuild(n));
    return null == i
        ? (t(), null)
        : (0, r.jsx)(c.xJW, {
              title: W.intl.string(W.t.WC3u3t),
              className: z.modalContent,
              titleClassName: z.formItemTitle,
              children: (0, r.jsxs)(M.Z, {
                  children: [
                      (0, r.jsx)(x.Z, {
                          guild: i,
                          size: x.Z.Sizes.SMALLER,
                          className: F.selectedIcon
                      }),
                      (0, r.jsx)('span', {
                          className: F.ellipsisText,
                          children: i.name
                      }),
                      (0, r.jsx)(a.zx, {
                          className: F.changeButton,
                          color: a.zx.Colors.PRIMARY,
                          size: a.zx.Sizes.SMALL,
                          onClick: t,
                          children: W.intl.string(W.t.GEgsAw)
                      })
                  ]
              })
          });
}
function Y(e) {
    let { text: t } = e;
    return (0, r.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: F.warning,
        children: [
            (0, r.jsx)(c.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: F.warningIcon
            }),
            (0, r.jsx)(c.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: t
            })
        ]
    });
}
function X(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([j.Z], () => {
            var e;
            return null != (e = j.Z.getMemberCount(t)) ? e : 0;
        }),
        l = g.eo.useSetting(),
        a = i.useCallback((e, t) => {
            (g.eo.updateSetting(t), Z.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t }));
        }, []);
    return n >= 2 && n <= B.tB
        ? (0, r.jsx)(c.xJW, {
              className: s()(z.modalContent, F.checkboxRow),
              children: (0, r.jsx)(c.XZJ, {
                  value: !!l,
                  type: c.XZJ.Types.INVERTED,
                  onChange: a,
                  children: (0, r.jsx)(c.Text, {
                      variant: 'text-sm/normal',
                      children: W.intl.string(W.t.Cef4t7)
                  })
              })
          })
        : null;
}
function J(e) {
    let { enabled: t, onChange: n, screen: l } = e,
        a = i.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        ),
        d = (0, o.e7)([S.Z], () => S.Z.getUseSystemScreensharePicker() && (0, N.isLinux)());
    return (0, r.jsx)(c.xJW, {
        className: s()(z.modalContent, F.checkboxRow),
        children: (0, r.jsx)(c.XZJ, {
            value: t,
            type: c.XZJ.Types.INVERTED,
            onChange: a,
            children: (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: l || d ? W.intl.string(W.t['5Adrtb']) : W.intl.string(W.t.gRpbRE)
            })
        })
    });
}
function K(e) {
    let { enabled: t, onChange: n } = e,
        l = i.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, r.jsx)(c.xJW, {
        className: s()(z.modalContent, F.checkboxRow),
        children: (0, r.jsx)(c.XZJ, {
            value: t,
            type: c.XZJ.Types.INVERTED,
            onChange: l,
            children: (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: W.intl.string(W.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: l, selectedPreset: s, selectedResolution: a, sourceChanged: c, selectedGuildId: u, targetGuildPremiumTier: m, selectSource: h, selectGuild: p, sound: x, previewDisabled: g, onClose: j, onChangeSelectedFPS: b, onChangeSelectedResolution: O, onChangeSelectedPreset: Z, onChangeSelectedChannelId: w, onChangeSource: N, onChangeAudioDevice: T, onChangeGuild: M, onChangeSound: D, onChangePreviewDisabled: B } = e,
        z = (0, o.e7)([C.Z, v.Z], () => v.Z.getChannel(C.Z.getVoiceChannelId())),
        q = (0, o.e7)([E.Z], () => E.Z.GPUDriversOutdated),
        Q = (0, o.e7)([E.Z], () => E.Z.problematicGPUDriver),
        $ = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        ee = (0, P.Z)();
    null != t && t.id.startsWith('screen') && !S.Z.supportsScreenSoundshare() && (ee = W.intl.string(W.t['1b0Gm5']));
    let et = !!(null == t ? void 0 : t.id.startsWith('camera')),
        en = null != $ && $.verified && !$.bot,
        er = null != z && !(0, f.Yk)(z),
        ei = !(0, o.e7)([S.Z], () => S.Z.getHardwareEncoding());
    return (0, r.jsxs)(i.Fragment, {
        children: [
            et
                ? (0, r.jsx)(R.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: N,
                      onChangeAudioDevice: T
                  })
                : (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(H, {
                              selectSource: h,
                              sourceChanged: c,
                              onChangeSource: N,
                              selectedSource: t
                          }),
                          null != ee ? (0, r.jsx)(Y, { text: ee }) : null,
                          null != t && null == ee
                              ? (0, r.jsx)(J, {
                                    enabled: x,
                                    onChange: D,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            p && null != u
                ? (0, r.jsx)(V, {
                      guildId: u,
                      onChange: M
                  })
                : null,
            null != z
                ? (0, r.jsx)(k.Z, { channel: z })
                : (0, r.jsx)(A.Z, {
                      guildId: u,
                      selectedChannelId: l,
                      onChangeSelectedChannelId: w
                  }),
            null != u && en && er ? (0, r.jsx)(X, { guildId: u }) : null,
            q ? (0, r.jsx)(Y, { text: W.intl.string(W.t.q65tS0) }) : null,
            Q ? (0, r.jsx)(Y, { text: W.intl.format(W.t.RrLvub, { helpCenterLink: I.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            ei &&
                (0, r.jsx)(_.Z, {
                    look: _.z.WARNING,
                    className: F.hardwareWarning,
                    children: W.intl.format(W.t.zCLXws, {
                        onClick: () => {
                            (j(), d.Z.open(G.oAB.VOICE, U.gP, { scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }));
                        }
                    })
                }),
            (0, r.jsx)(L.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: a,
                targetGuildPremiumTier: m,
                onClose: j,
                onFPSChange: b,
                onResolutionChange: O,
                onPresetChange: Z,
                captureDeviceSelected: et
            }),
            (0, r.jsx)(K, {
                enabled: g,
                onChange: B
            })
        ]
    });
}
