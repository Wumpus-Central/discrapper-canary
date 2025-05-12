n.d(t, { Z: () => K });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(481060),
    c = n(230711),
    d = n(812206),
    u = n(605436),
    f = n(600164),
    m = n(594190),
    h = n(925329),
    p = n(565138),
    x = n(695346),
    g = n(494620),
    _ = n(592125),
    v = n(650774),
    j = n(430824),
    S = n(131951),
    b = n(944486),
    C = n(594174),
    y = n(449224),
    O = n(626135),
    Z = n(823379),
    w = n(63063),
    I = n(358085),
    N = n(653255),
    E = n(989941),
    T = n(618407),
    P = n(586290),
    R = n(233037),
    k = n(810013),
    A = n(537135),
    M = n(641115),
    L = n(143135),
    D = n(70722),
    B = n(981631),
    U = n(526761),
    G = n(388032),
    W = n(14383),
    z = n(347226);
function F(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: l, onChangeSource: i } = e,
        s = (0, o.e7)([m.ZP, y.Z], () => ((0, I.isWindows)() ? (0, E.Z)(m.ZP, y.Z) : null)),
        c = (0, o.e7)([d.Z], () => ((null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null)),
        u = (0, o.e7)([m.ZP], () => m.ZP.getRunningGames()),
        f = (0, o.Wu)([d.Z], () => u.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(Z.lm), [u]),
        p = null;
    if ((null != t ? (p = t.name) : null != s && (p = s.name), null == p)) return null;
    let x = (0, L.Z)(s, t, u),
        g = l
            ? f.find((e) => {
                  let { id: t } = e;
                  return t === (null == x ? void 0 : x.id);
              })
            : c,
        _ = null != t && t.id.startsWith('screen') ? a.pzj : a.GON;
    return (0, r.jsx)(a.xJW, {
        title: G.intl.string(G.t.TC7Ev7),
        className: z.modalContent,
        titleClassName: z.formItemTitleVerySlim,
        children: (0, r.jsxs)(A.Z, {
            children: [
                null != g
                    ? (0, r.jsx)(h.Z, {
                          game: g,
                          size: h.Z.Sizes.XSMALL,
                          className: W.selectedIcon
                      })
                    : (0, r.jsx)(_, { className: W.selectedIcon }),
                (0, r.jsx)('span', {
                    className: W.ellipsisText,
                    children: p
                }),
                n
                    ? (0, r.jsx)(a.zxk, {
                          className: W.changeButton,
                          color: a.zxk.Colors.PRIMARY,
                          size: a.zxk.Sizes.SMALL,
                          onClick: i,
                          children: G.intl.string(G.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function H(e) {
    let { onChange: t, guildId: n } = e,
        l = (0, o.e7)([j.Z], () => j.Z.getGuild(n));
    return null == l
        ? (t(), null)
        : (0, r.jsx)(a.xJW, {
              title: G.intl.string(G.t.WC3u3t),
              className: z.modalContent,
              titleClassName: z.formItemTitle,
              children: (0, r.jsxs)(A.Z, {
                  children: [
                      (0, r.jsx)(p.Z, {
                          guild: l,
                          size: p.Z.Sizes.SMALLER,
                          className: W.selectedIcon
                      }),
                      (0, r.jsx)('span', {
                          className: W.ellipsisText,
                          children: l.toString()
                      }),
                      (0, r.jsx)(a.zxk, {
                          className: W.changeButton,
                          color: a.zxk.Colors.PRIMARY,
                          size: a.zxk.Sizes.SMALL,
                          onClick: t,
                          children: G.intl.string(G.t.GEgsAw)
                      })
                  ]
              })
          });
}
function V(e) {
    let { text: t } = e;
    return (0, r.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
        className: W.warning,
        children: [
            (0, r.jsx)(a.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: W.warningIcon
            }),
            (0, r.jsx)(a.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: t
            })
        ]
    });
}
function Y(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getMemberCount(t)) ? e : 0;
        }),
        i = x.eo.useSetting(),
        c = l.useCallback((e, t) => {
            x.eo.updateSetting(t), O.default.track(B.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
        }, []);
    return n >= 2 && n <= D.tB
        ? (0, r.jsx)(a.xJW, {
              className: s()(z.modalContent, W.checkboxRow),
              children: (0, r.jsx)(a.XZJ, {
                  value: !!i,
                  type: a.XZJ.Types.INVERTED,
                  onChange: c,
                  children: (0, r.jsx)(a.Text, {
                      variant: 'text-sm/normal',
                      children: G.intl.string(G.t.Cef4t7)
                  })
              })
          })
        : null;
}
function J(e) {
    let { enabled: t, onChange: n, screen: i } = e,
        o = l.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, r.jsx)(a.xJW, {
        className: s()(z.modalContent, W.checkboxRow),
        children: (0, r.jsx)(a.XZJ, {
            value: t,
            type: a.XZJ.Types.INVERTED,
            onChange: o,
            children: (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: i ? G.intl.string(G.t['5Adrtb']) : G.intl.string(G.t.gRpbRE)
            })
        })
    });
}
function X(e) {
    let { enabled: t, onChange: n } = e,
        i = l.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, r.jsx)(a.xJW, {
        className: s()(z.modalContent, W.checkboxRow),
        children: (0, r.jsx)(a.XZJ, {
            value: t,
            type: a.XZJ.Types.INVERTED,
            onChange: i,
            children: (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: G.intl.string(G.t.JE73jI)
            })
        })
    });
}
function K(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: i, selectedPreset: s, selectedResolution: a, sourceChanged: d, selectedGuildId: f, targetGuildPremiumTier: m, selectSource: h, selectGuild: p, sound: x, previewDisabled: v, onClose: j, onChangeSelectedFPS: y, onChangeSelectedResolution: O, onChangeSelectedPreset: Z, onChangeSelectedChannelId: I, onChangeSource: E, onChangeAudioDevice: A, onChangeGuild: L, onChangeSound: D, onChangePreviewDisabled: z } = e,
        K = (0, o.e7)([b.Z, _.Z], () => _.Z.getChannel(b.Z.getVoiceChannelId())),
        q = (0, o.e7)([N.Z], () => N.Z.GPUDriversOutdated),
        Q = (0, o.e7)([N.Z], () => N.Z.problematicGPUDriver),
        $ = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, T.Z)();
    null != t && t.id.startsWith('screen') && !S.Z.supportsScreenSoundshare() && (ee = G.intl.string(G.t['1b0Gm5']));
    let et = !!(null == t ? void 0 : t.id.startsWith('camera')),
        en = null != $ && $.verified && !$.bot,
        er = null != K && !(0, u.Yk)(K),
        el = !(0, o.e7)([S.Z], () => S.Z.getHardwareEncoding());
    return (0, r.jsxs)(l.Fragment, {
        children: [
            et
                ? (0, r.jsx)(P.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: E,
                      onChangeAudioDevice: A
                  })
                : (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(F, {
                              selectSource: h,
                              sourceChanged: d,
                              onChangeSource: E,
                              selectedSource: t
                          }),
                          null != ee ? (0, r.jsx)(V, { text: ee }) : null,
                          null != t && null == ee
                              ? (0, r.jsx)(J, {
                                    enabled: x,
                                    onChange: D,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            p && null != f
                ? (0, r.jsx)(H, {
                      guildId: f,
                      onChange: L
                  })
                : null,
            null != K
                ? (0, r.jsx)(k.Z, { channel: K })
                : (0, r.jsx)(R.Z, {
                      guildId: f,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: I
                  }),
            null != f && en && er ? (0, r.jsx)(Y, { guildId: f }) : null,
            q ? (0, r.jsx)(V, { text: G.intl.string(G.t.q65tS0) }) : null,
            Q ? (0, r.jsx)(V, { text: G.intl.format(G.t.RrLvub, { helpCenterLink: w.Z.getArticleURL(B.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            el &&
                (0, r.jsx)(g.Z, {
                    look: g.z.WARNING,
                    className: W.hardwareWarning,
                    children: G.intl.format(G.t.zCLXws, {
                        onClick: () => {
                            j(), c.Z.open(B.oAB.VOICE, U.gP, { scrollPosition: U.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, r.jsx)(M.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: a,
                targetGuildPremiumTier: m,
                onClose: j,
                onFPSChange: y,
                onResolutionChange: O,
                onPresetChange: Z,
                captureDeviceSelected: et
            }),
            (0, r.jsx)(X, {
                enabled: v,
                onChange: z
            })
        ]
    });
}
