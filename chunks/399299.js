t.d(n, {
    Z: function () {
        return q;
    }
});
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(442837),
    o = t(481060),
    u = t(230711),
    c = t(812206),
    d = t(605436),
    m = t(600164),
    g = t(594190),
    h = t(925329),
    x = t(565138),
    S = t(977059),
    v = t(695346),
    Z = t(494620),
    C = t(592125),
    f = t(650774),
    j = t(430824),
    p = t(131951),
    N = t(944486),
    I = t(594174),
    T = t(449224),
    E = t(626135),
    R = t(823379),
    P = t(63063),
    A = t(358085),
    b = t(653255),
    M = t(989941),
    _ = t(618407),
    k = t(586290),
    L = t(233037),
    D = t(810013),
    U = t(537135),
    w = t(641115),
    B = t(143135),
    y = t(70722),
    G = t(981631),
    F = t(526761),
    O = t(388032),
    z = t(949949),
    V = t(456963);
function W(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: i, onChangeSource: s } = e,
        r = (0, a.e7)([g.ZP, T.Z], () => ((0, A.isWindows)() ? (0, M.Z)(g.ZP, T.Z) : null)),
        u = (0, a.e7)([c.Z], () => ((null == r ? void 0 : r.id) != null ? c.Z.getApplication(r.id) : null)),
        d = (0, a.e7)([g.ZP], () => g.ZP.getRunningGames()),
        m = (0, a.Wu)([c.Z], () => d.map((e) => (null != e.id ? c.Z.getApplication(e.id) : null)).filter(R.lm), [d]),
        x = null;
    if ((null != n ? (x = n.name) : null != r && (x = r.name), null == x)) return null;
    let S = (0, B.Z)(r, n, d),
        v = i
            ? m.find((e) => {
                  let { id: n } = e;
                  return n === (null == S ? void 0 : S.id);
              })
            : u,
        Z = null != n && n.id.startsWith('screen') ? o.ScreenIcon : o.BrowserIcon;
    return (0, l.jsx)(o.FormItem, {
        title: O.intl.string(O.t.TC7Ev7),
        className: V.modalContent,
        titleClassName: V.formItemTitleVerySlim,
        children: (0, l.jsxs)(U.Z, {
            children: [
                null != v
                    ? (0, l.jsx)(h.Z, {
                          game: v,
                          size: h.Z.Sizes.XSMALL,
                          className: z.selectedIcon
                      })
                    : (0, l.jsx)(Z, { className: z.selectedIcon }),
                (0, l.jsx)('span', {
                    className: z.ellipsisText,
                    children: x
                }),
                t
                    ? (0, l.jsx)(o.Button, {
                          className: z.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: s,
                          children: O.intl.string(O.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function H(e) {
    let { onChange: n, guildId: t } = e,
        i = (0, a.e7)([j.Z], () => j.Z.getGuild(t));
    return null == i
        ? (n(), null)
        : (0, l.jsx)(o.FormItem, {
              title: O.intl.string(O.t.WC3u3t),
              className: V.modalContent,
              titleClassName: V.formItemTitle,
              children: (0, l.jsxs)(U.Z, {
                  children: [
                      (0, l.jsx)(x.Z, {
                          guild: i,
                          size: x.Z.Sizes.SMALLER,
                          className: z.selectedIcon
                      }),
                      (0, l.jsx)('span', {
                          className: z.ellipsisText,
                          children: i.toString()
                      }),
                      (0, l.jsx)(o.Button, {
                          className: z.changeButton,
                          color: o.Button.Colors.PRIMARY,
                          size: o.Button.Sizes.SMALL,
                          onClick: n,
                          children: O.intl.string(O.t.GEgsAw)
                      })
                  ]
              })
          });
}
function Y(e) {
    let { text: n } = e;
    return (0, l.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: z.warning,
        children: [
            (0, l.jsx)(o.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: z.warningIcon
            }),
            (0, l.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: n
            })
        ]
    });
}
function K(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getMemberCount(n)) && void 0 !== e ? e : 0;
        }),
        s = v.eo.useSetting(),
        u = i.useCallback((e, n) => {
            v.eo.updateSetting(n), E.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: n });
        }, []);
    return t >= 2 && t <= y.tB
        ? (0, l.jsx)(o.FormItem, {
              className: r()(V.modalContent, z.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  value: !!s,
                  type: o.Checkbox.Types.INVERTED,
                  onChange: u,
                  children: (0, l.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: O.intl.string(O.t.Cef4t7)
                  })
              })
          })
        : null;
}
function X(e) {
    let { enabled: n, onChange: t, screen: s } = e,
        a = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(V.modalContent, z.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: a,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: s ? O.intl.string(O.t['5Adrtb']) : O.intl.string(O.t.gRpbRE)
            })
        })
    });
}
function J(e) {
    let { enabled: n, onChange: t } = e,
        s = i.useCallback(
            (e, n) => {
                t(n);
            },
            [t]
        );
    return (0, l.jsx)(o.FormItem, {
        className: r()(V.modalContent, z.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            value: n,
            type: o.Checkbox.Types.INVERTED,
            onChange: s,
            children: (0, l.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: O.intl.string(O.t.JE73jI)
            })
        })
    });
}
function q(e) {
    let { selectedSource: n, selectedFPS: t, selectedChannelId: s, selectedPreset: r, selectedResolution: o, sourceChanged: c, selectedGuildId: m, targetGuildPremiumTier: g, selectSource: h, selectGuild: x, sound: v, previewDisabled: f, onClose: j, onChangeSelectedFPS: T, onChangeSelectedResolution: E, onChangeSelectedPreset: R, onChangeSelectedChannelId: A, onChangeSource: M, onChangeAudioDevice: U, onChangeGuild: B, onChangeSound: y, onChangePreviewDisabled: V } = e,
        q = (0, a.e7)([N.Z, C.Z], () => C.Z.getChannel(N.Z.getVoiceChannelId())),
        Q = (0, a.e7)([b.Z], () => b.Z.GPUDriversOutdated),
        $ = (0, a.e7)([b.Z], () => b.Z.problematicGPUDriver),
        ee = (0, a.e7)([I.default], () => I.default.getCurrentUser()),
        en = (0, _.Z)();
    null != n && n.id.startsWith('screen') && !p.Z.supportsScreenSoundshare() && (en = O.intl.string(O.t['1b0Gm5']));
    let et = !!(null == n ? void 0 : n.id.startsWith('camera')),
        el = null != ee && ee.verified && !ee.bot,
        ei = null != q && !(0, d.Yk)(q),
        es = !(0, a.e7)([p.Z], () => p.Z.getHardwareEncoding()),
        { enabled: er } = (0, S.S)({ location: 'GoLiveModal_Confirm' });
    return (0, l.jsxs)(i.Fragment, {
        children: [
            et
                ? (0, l.jsx)(k.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: M,
                      onChangeAudioDevice: U
                  })
                : (0, l.jsxs)('div', {
                      children: [
                          (0, l.jsx)(W, {
                              selectSource: h,
                              sourceChanged: c,
                              onChangeSource: M,
                              selectedSource: n
                          }),
                          null != en ? (0, l.jsx)(Y, { text: en }) : null,
                          null != n && null == en
                              ? (0, l.jsx)(X, {
                                    enabled: v,
                                    onChange: y,
                                    screen: n.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != m
                ? (0, l.jsx)(H, {
                      guildId: m,
                      onChange: B
                  })
                : null,
            null != q
                ? (0, l.jsx)(D.Z, { channel: q })
                : (0, l.jsx)(L.Z, {
                      guildId: m,
                      selectedChannelId: s,
                      onChangeSelectedChannelId: A
                  }),
            null != m && el && ei ? (0, l.jsx)(K, { guildId: m }) : null,
            Q ? (0, l.jsx)(Y, { text: O.intl.string(O.t.q65tS0) }) : null,
            $ ? (0, l.jsx)(Y, { text: O.intl.format(O.t.RrLvub, { helpCenterLink: P.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            es &&
                (0, l.jsx)(Z.Z, {
                    look: Z.z.WARNING,
                    className: z.hardwareWarning,
                    children: O.intl.format(O.t.zCLXws, {
                        onClick: () => {
                            j(), u.Z.open(G.oAB.VOICE, null, { scrollPosition: F.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, l.jsx)(w.Z, {
                selectedPreset: r,
                selectedFPS: t,
                selectedResolution: o,
                targetGuildPremiumTier: g,
                onClose: j,
                onFPSChange: T,
                onResolutionChange: E,
                onPresetChange: R,
                captureDeviceSelected: et
            }),
            er &&
                (0, l.jsx)(J, {
                    enabled: f,
                    onChange: V
                })
        ]
    });
}
