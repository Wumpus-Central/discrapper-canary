t.r(n),
    t.d(n, {
        default: function () {
            return er;
        }
    }),
    t(47120),
    t(653041);
var l,
    i,
    s = t(200651),
    r = t(192379),
    a = t(512722),
    o = t.n(a),
    u = t(666912),
    c = t(553813),
    d = t.n(c),
    m = t(442837),
    g = t(704215),
    h = t(481060),
    x = t(668781),
    S = t(872810),
    v = t(410575),
    Z = t(579806),
    C = t(636449),
    f = t(317381),
    j = t(89425),
    p = t(812206),
    N = t(835473),
    I = t(600164),
    T = t(313201),
    E = t(243778),
    R = t(594190),
    P = t(998594),
    A = t(751571),
    b = t(970731),
    M = t(695346),
    _ = t(361291),
    k = t(592125),
    L = t(430824),
    D = t(131951),
    U = t(944486),
    w = t(594174),
    B = t(449224),
    y = t(626135),
    G = t(63063),
    F = t(358085),
    O = t(998502),
    z = t(451467),
    V = t(537413),
    W = t(299570),
    H = t(960861),
    Y = t(989941),
    K = t(399299),
    X = t(351152),
    J = t(567126),
    q = t(143135),
    Q = t(70722),
    $ = t(37113),
    ee = t(981631),
    en = t(921944),
    et = t(761274),
    el = t(388032),
    ei = t(456963);
((i = l || (l = {}))[(i.GUILD = 0)] = 'GUILD'), (i[(i.NATIVE_PICKER_SOURCE = 1)] = 'NATIVE_PICKER_SOURCE'), (i[(i.SOURCE = 2)] = 'SOURCE'), (i[(i.CONFIRM = 3)] = 'CONFIRM');
let es = (e) => {
    let { visibleContent: n, markAsDismissed: t } = e;
    return n === g.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, s.jsx)(b.ZP, {
              content: el.intl.string(el.t.sFyFJy),
              buttonCTA: el.intl.string(el.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(G.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: el.intl.string(el.t.hvVgAQ),
              caretPosition: b.DF.LEFT_CENTER,
              markAsDismissed: t
          })
        : null;
};
function er(e) {
    var n, l, i, a, c, b, G;
    let { selectGuild: er = !1, selectSource: ea = !0, guildId: eo, analyticsLocation: eu, onClose: ec, transitionState: ed } = e,
        { preset: em, resolution: eg, fps: eh, soundshareEnabled: ex } = (0, m.cj)([_.Z], () => _.Z.getState()),
        eS = (0, m.e7)([U.Z, k.Z], () => k.Z.getChannel(U.Z.getVoiceChannelId())),
        ev = (0, m.e7)([R.ZP, B.Z], () => ((0, F.isWindows)() ? (0, Y.Z)(R.ZP, B.Z) : null)),
        eZ = (0, m.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity()),
        eC = (0, N.q)(null == eZ ? void 0 : eZ.applicationId),
        [ef, ej] = r.useState(null);
    r.useEffect(() => {
        (0, C.R)() &&
            (async () => {
                var e;
                ej(await (null === Z.Z || void 0 === Z.Z ? void 0 : null === (e = Z.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let ep = (0, m.e7)([w.default], () => {
            let e = w.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eN = null !== (n = null == eS ? void 0 : eS.getGuildId()) && void 0 !== n ? n : eo,
        eI = (0, m.e7)([L.Z], () => {
            var e;
            return null != eN ? (null === (e = L.Z.getGuild(eN)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eT, eE] = null !== (l = (0, V.Z)(em, ep, eI)) && void 0 !== l ? l : [$.LY.RESOLUTION_720, $.ws.FPS_30],
        { lastPickerAction: eR } = (0, m.e7)([H.ZP], () => H.ZP.getPickerState()),
        eP = D.Z.getUseSystemScreensharePicker();
    (0, H.UB)();
    let eA = eP && (0, F.isMac)() && d().satisfies(null === Z.Z || void 0 === Z.Z ? void 0 : Z.Z.os.release, Q.jR),
        eb = [];
    ed === h.ModalTransitionState.ENTERED && eP && (0, F.isMac)() && eb.push(g.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eM, e_] = (0, E.US)(eb, void 0, !0);
    em !== $.tI.PRESET_CUSTOM && ((eg = eT), (eh = eE)), !(0, z.Z)(em, eg, eh, ep, eI) && ((eg = eT), (eh = eE));
    let ek = (0, T.Dt)();
    let [eL, eD] = r.useState(((b = er), (G = ea && !eA), b ? 0 : G ? 2 : 3)),
        [eU, ew] = r.useState(eA),
        [eB, ey] = r.useState(null),
        [eG, eF] = r.useState(
            eA
                ? {
                      id: 'prepicked:',
                      name: el.intl.string(el.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eO, ez] = r.useState(null),
        [eV, eW] = r.useState(em),
        [eH, eY] = r.useState(eg),
        [eK, eX] = r.useState(eh),
        [eJ, eq] = r.useState(ex),
        [eQ, e$] = r.useState(null !== (i = M.I0.getSetting()) && void 0 !== i && i),
        [e0, e1] = r.useState(null != eo ? eo : null),
        e3 = null !== (a = null == eS ? void 0 : eS.id) && void 0 !== a ? a : eB;
    async function e4() {
        var e, n;
        o()(null != ev || null != eG || (null != eZ && null != ef), 'got nothing to stream');
        let t = null !== (e = null == eS ? void 0 : eS.id) && void 0 !== e ? e : eB;
        o()(null != t, 'Received null target channel ID');
        let l = k.Z.getChannel(t),
            i = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : eo;
        if (null == eS && !(await (0, j.Z)({ channelId: t }))) return;
        let s = eV,
            r = eH,
            a = eK;
        !(0, z.Z)(s, r, a, ep, eI, l) && ((s = $.tI.PRESET_VIDEO), (r = $.LY.RESOLUTION_720), (a = $.ws.FPS_30)),
            (0, S.Rc)({
                preset: s,
                resolution: r,
                frameRate: a,
                soundshareEnabled: eJ
            });
        let u = (0, q.Z)(ev, eG, R.ZP.getRunningGames()),
            c = !(0, F.isWindows)() || null == u || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == u ? null : u.pid,
            d = null,
            m = null;
        null == c && (null != eG ? ((d = eG.id), (m = eG.name)) : null != ef && ((d = ef), (m = null == eC ? void 0 : eC.name))),
            (0, S.WH)(i, t, {
                pid: c,
                sourceId: d,
                sourceName: m,
                audioSourceId: eO,
                sound: eJ,
                previewDisabled: eQ
            }),
            null != eM && e_(en.L.AUTO_DISMISS),
            !eP &&
                (async () => {
                    !(await A.Z.hasPermission(et.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) &&
                        x.Z.show({
                            title: el.intl.string(el.t['X+mXen']),
                            body: el.intl.string(el.t.MIJCzs)
                        });
                })();
    }
    function e2() {
        e4(), ec();
    }
    r.useEffect(() => {
        let e = (0, F.isWindows)() ? (0, Y.Z)(R.ZP, B.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? p.Z.getApplication(e.id) : null;
        y.default.track(ee.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eu
        }),
            P.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eu]);
    let e7 = r.useCallback(
            (e, n, t) => {
                var l;
                let i = (0, V.Z)(e, ep, eI),
                    [s, r] = null != i ? i : [n, t];
                e !== eV && ((n = s), (t = r));
                let a = null !== (l = null == eS ? void 0 : eS.id) && void 0 !== l ? l : eB;
                o()(null != a, 'Received null target channel ID');
                let u = k.Z.getChannel(a);
                if (!(0, z.Z)(e, n, t, ep, eI, u)) {
                    let [e, l] = (0, V.Z)($.tI.PRESET_VIDEO, ep, eI);
                    (n = e), (t = l);
                }
                t !== eK && eX(t), n !== eH && eY(n), s !== n || r !== t ? eW($.tI.PRESET_CUSTOM) : e !== eV && eW(e);
            },
            [eS, eB, ep, eI, eK, eH, eV]
        ),
        [e9, e5] = r.useState(eA ? '' : void 0),
        e6 = r.useCallback(
            (e) => {
                (0, W.t)(), (0, W.T)(null != e ? e : e9);
            },
            [e9]
        );
    function e8(e) {
        if ((e.preventDefault(), 1 === eL)) return e6();
        if (2 === eL) return eD(3);
        if (null != e9) return eD(1);
        let n = (0, q.Z)(ev, eG, R.ZP.getRunningGames());
        O.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated)
            ? !(function () {
                  var e;
                  let n = null !== (e = null == ev ? void 0 : ev.pid) && void 0 !== e ? e : null;
                  (0, h.openModalLazy)(async () => {
                      let { default: e } = await t.e('74300').then(t.bind(t, 566852));
                      return (t) =>
                          (0, s.jsx)(e, {
                              ...t,
                              handleStream: e2,
                              pid: n
                          });
                  });
              })()
            : e2();
    }
    let ne = r.useCallback(
            (e) => {
                eF(e), null != e && (eP && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e5(e.id.split(':')[1]) : e5(void 0), eD(3), ew(!0));
            },
            [eP]
        ),
        nn = r.useCallback(
            (e) => {
                e1(e);
                var n = 3;
                eD((n = ea ? 2 : 3));
            },
            [ea]
        ),
        nt = !(1 === eL && eP && eR === H.Uc.Error),
        nl = (function (e) {
            switch (e) {
                case 2:
                    return el.intl.string(el.t['aC4/Zm']);
                case 1:
                    return el.intl.formatToPlainString(el.t.sbbPhY, { buttonName: el.intl.string(el.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return el.intl.string(el.t['1hKIam']);
            }
        })(eL),
        ni = (0, s.jsx)(h.ModalHeader, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, s.jsxs)(I.Z, {
                direction: I.Z.Direction.VERTICAL,
                align: I.Z.Align.CENTER,
                className: ei.header,
                children: [
                    (0, s.jsx)(h.Heading, {
                        variant: 'heading-xl/semibold',
                        id: ek,
                        className: ei.headerText,
                        children: el.intl.string(el.t.RDkJQ0)
                    }),
                    nt && null != nl
                        ? (0, s.jsx)(h.Text, {
                              className: ei.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: nl
                          })
                        : null
                ]
            })
        }),
        ns = r.useCallback(() => {
            eP && (0, W.t)(), eD(2);
        }, [eP]),
        nr = (function (e, n, t, l) {
            switch (e) {
                case 2:
                    return n ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (l) return 2;
                    if (!t && n) return 0;
                    return null;
                default:
                    return null;
            }
        })(eL, er, ea, eU),
        na = 1 !== eL && (3 !== eL || (null == eG && null == ev && null == ef) || null == e3),
        no = r.useCallback(() => {
            null != nr && eD(nr);
        }, [nr]),
        nu = (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(h.Slides, {
                springConfig: {
                    ...u.config.stiff,
                    clamp: !0
                },
                activeSlide: eL,
                width: 480,
                children: [
                    (0, s.jsx)(h.Slide, {
                        id: 0,
                        children: (0, s.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, s.jsx)(X.Z, { onSelectGuild: nn })
                        })
                    }),
                    (0, s.jsx)(h.Slide, {
                        id: 2,
                        children: (0, s.jsx)('div', {
                            className: ei.modalSize,
                            children: eP
                                ? (0, s.jsx)(J.se, { onSourceSelect: ne })
                                : (0, s.jsx)(J.oA, {
                                      selectedSource: eG,
                                      onChangeSelectedSource: ne
                                  })
                        })
                    }),
                    (0, s.jsx)(h.Slide, {
                        id: 3,
                        children: (0, s.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, s.jsx)(K.Z, {
                                selectedChannelId: null !== (c = null == eS ? void 0 : eS.id) && void 0 !== c ? c : eB,
                                selectedPreset: eV,
                                selectedResolution: eH,
                                selectedSource: eG,
                                selectedFPS: eK,
                                sound: eJ,
                                previewDisabled: eQ,
                                sourceChanged: eU,
                                selectSource: ea,
                                onChangeSelectedFPS: (e) => e7(eV, eH, e),
                                onChangeSelectedResolution: (e) => e7(eV, e, eK),
                                onChangeSelectedPreset: (e) => e7(e, eH, eK),
                                onChangeSelectedChannelId: ey,
                                onChangeSelectedSource: ne,
                                onChangeSource: () => ns(),
                                onChangeAudioDevice: (e) => ez(e),
                                onChangeGuild: () => eD(0),
                                onChangeSound: (e) => eq(e),
                                onChangePreviewDisabled: (e) => e$(e),
                                onClose: ec,
                                selectedGuildId: e0,
                                targetGuildPremiumTier: eI,
                                selectGuild: er
                            })
                        })
                    }),
                    (0, s.jsx)(h.Slide, {
                        id: 1,
                        children: (0, s.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, s.jsx)(J.Hu, {
                                onSourceSelect: e2,
                                onCancel: no,
                                pickerType: e9
                            })
                        })
                    })
                ]
            })
        }),
        nc = 1 === eL || (eA && 3 === eL) ? el.intl.string(el.t.FiBjwc) : eP && (3 !== eL || null != e9) ? el.intl.string(el.t.PDTjLC) : el.intl.string(el.t['UE/rPz']),
        nd = (0, s.jsxs)(h.ModalFooter, {
            justify: null == nr ? I.Z.Justify.START : I.Z.Justify.BETWEEN,
            children: [
                (0, s.jsx)(h.Button, {
                    type: 'submit',
                    size: h.Button.Sizes.SMALL,
                    disabled: na,
                    autoFocus: !0,
                    children: nc
                }),
                null == nr
                    ? (0, s.jsx)(h.Button, {
                          className: ei.cancelButton,
                          look: h.Button.Looks.LINK,
                          size: h.Button.Sizes.SMALL,
                          color: h.ButtonColors.PRIMARY,
                          onClick: ec,
                          children: el.intl.string(el.t['ETE/oK'])
                      })
                    : (0, s.jsx)(h.Button, {
                          size: h.Button.Sizes.SMALL,
                          color: h.ButtonColors.PRIMARY,
                          onClick: no,
                          children: el.intl.string(el.t['13/7kZ'])
                      })
            ]
        });
    return (0, s.jsx)(v.Z, {
        page: ee.ZY5.GO_LIVE_MODAL,
        children: (0, s.jsxs)(h.ModalRoot, {
            'aria-labelledby': ek,
            transitionState: ed,
            size: h.ModalSize.DYNAMIC,
            className: ei.modalSize,
            children: [
                (0, s.jsx)(h.ModalCloseButton, {
                    onClick: ec,
                    className: ei.modalCloseButton
                }),
                (0, s.jsx)('div', { className: ei.art }),
                (0, s.jsx)(h.Popout, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eM,
                    spacing: 18,
                    renderPopout: () =>
                        (0, s.jsx)(es, {
                            visibleContent: eM,
                            markAsDismissed: e_
                        }),
                    children: () =>
                        (0, s.jsxs)('form', {
                            onSubmit: e8,
                            children: [ni, nu, nd]
                        })
                })
            ]
        })
    });
}
