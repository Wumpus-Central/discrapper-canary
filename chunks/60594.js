t.d(n, { default: () => ec }), t(47120), t(653041), t(301563);
var l = t(200651),
    i = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(642128),
    o = t(209739),
    c = t.n(o),
    u = t(442837),
    d = t(704215),
    m = t(481060),
    g = t(668781),
    h = t(872810),
    x = t(410575),
    v = t(579806),
    f = t(636449),
    j = t(317381),
    Z = t(89425),
    N = t(812206),
    S = t(835473),
    p = t(600164),
    C = t(313201),
    b = t(243778),
    P = t(594190),
    T = t(998594),
    E = t(751571),
    I = t(970731),
    O = t(695346),
    y = t(361291),
    R = t(592125),
    W = t(430824),
    k = t(131951),
    w = t(944486),
    A = t(594174),
    D = t(449224),
    M = t(626135),
    _ = t(63063),
    L = t(358085),
    z = t(998502),
    U = t(668519),
    G = t(451467),
    F = t(537413),
    V = t(299570),
    J = t(960861),
    B = t(989941),
    X = t(399299),
    Y = t(351152),
    H = t(567126),
    K = t(143135),
    q = t(717298),
    Q = t(70722),
    $ = t(37113),
    ee = t(981631),
    en = t(921944),
    et = t(761274),
    el = t(388032),
    ei = t(382840);
function er(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function es(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let ea = (e) => {
    let { visibleContent: n, markAsDismissed: t } = e;
    return n === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, l.jsx)(I.ZP, {
              content: el.NW.string(el.t.sFyFJy),
              buttonCTA: el.NW.string(el.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(_.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: el.NW.string(el.t.hvVgAQ),
              caretPosition: I.DF.LEFT_CENTER,
              markAsDismissed: t
          })
        : null;
};
function eo(e) {
    var n, r, o, I, _, U;
    let { selectGuild: q = !1, selectSource: eo = !0, guildId: ec, analyticsLocation: eu, onClose: ed, transitionState: em } = e,
        { preset: eg, resolution: eh, fps: ex, soundshareEnabled: ev } = (0, u.cj)([y.Z], () => y.Z.getState()),
        ef = i.useRef(Date.now()),
        ej = (0, u.e7)([w.Z, R.Z], () => R.Z.getChannel(w.Z.getVoiceChannelId())),
        eZ = (0, u.e7)([P.ZP, D.Z], () => ((0, L.isWindows)() ? (0, B.Z)(P.ZP, D.Z) : null)),
        eN = (0, u.e7)([j.ZP], () => j.ZP.getCurrentEmbeddedActivity()),
        eS = (0, S.q)(null == eN ? void 0 : eN.applicationId),
        [ep, eC] = i.useState(null);
    i.useEffect(() => {
        (0, f.R)() &&
            (async () => {
                var e;
                eC(await (null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let eb = (0, u.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eP = null !== (n = null == ej ? void 0 : ej.getGuildId()) && void 0 !== n ? n : ec,
        eT = (0, u.e7)([W.Z], () => {
            var e;
            return null != eP ? (null === (e = W.Z.getGuild(eP)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eE, eI] = null !== (r = (0, F.Z)(eg, eb, eT)) && void 0 !== r ? r : [$.LY.RESOLUTION_720, $.ws.FPS_30],
        { lastPickerAction: eO } = (0, u.e7)([J.ZP], () => J.ZP.getPickerState()),
        ey = k.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let eR = ey && (0, L.isMac)() && c().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, Q.jR),
        eW = [];
    em === m.Dvm.ENTERED && ey && (0, L.isMac)() && eW.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [ek, ew] = (0, b.US)(eW, void 0, !0);
    eg !== $.tI.PRESET_CUSTOM && ((eh = eE), (ex = eI)), (0, G.Z)(eg, eh, ex, eb, eT) || ((eh = eE), (ex = eI));
    let eA = (0, C.Dt)(),
        [eD, eM] = i.useState(((U = eo && !eR), q ? 0 : U ? 2 : 3)),
        [e_, eL] = i.useState(eR),
        [ez, eU] = i.useState(null),
        [eG, eF] = i.useState(
            eR
                ? {
                      id: 'prepicked:',
                      name: el.NW.string(el.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eV, eJ] = i.useState(null),
        [eB, eX] = i.useState(eg),
        [eY, eH] = i.useState(eh),
        [eK, eq] = i.useState(ex),
        [eQ, e$] = i.useState(ev),
        [e0, e1] = i.useState(null !== (o = O.I0.getSetting()) && void 0 !== o && o),
        [e3, e2] = i.useState(null != ec ? ec : null),
        e4 = null !== (I = null == ej ? void 0 : ej.id) && void 0 !== I ? I : ez,
        [e7, e5] = i.useState(eR ? '' : void 0);
    async function e9() {
        var e, n;
        s()(null != eZ || null != eG || (null != eN && null != ep), 'got nothing to stream');
        let t = null !== (e = null == ej ? void 0 : ej.id) && void 0 !== e ? e : ez;
        s()(null != t, 'Received null target channel ID');
        let l = R.Z.getChannel(t),
            i = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : ec;
        if (null == ej && !(await (0, Z.Z)({ channelId: t }))) return;
        let r = eB,
            a = eY,
            o = eK;
        (0, G.Z)(r, a, o, eb, eT, l) || ((r = $.tI.PRESET_VIDEO), (a = $.LY.RESOLUTION_720), (o = $.ws.FPS_30)),
            (0, h.Rc)({
                preset: r,
                resolution: a,
                frameRate: o,
                soundshareEnabled: eQ
            });
        let c = (0, K.Z)(eZ, eG, P.ZP.getRunningGames()),
            u = !(0, L.isWindows)() || null == c || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == c ? null : c.pid,
            d = null,
            m = null;
        null == u && (null != eG ? ((d = eG.id), (m = eG.name)) : null != ep && ((d = ep), (m = null == eS ? void 0 : eS.name))),
            (0, h.WH)(i, t, {
                pid: u,
                sourceId: d,
                sourceName: m,
                audioSourceId: eV,
                sound: eQ,
                previewDisabled: e0,
                nativePickerStyleUsed: e7,
                goLiveModalDurationMs: Date.now() - ef.current
            }),
            null != ek && ew(en.L.AUTO_DISMISS),
            ey ||
                (async () => {
                    (await E.Z.hasPermission(et.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        g.Z.show({
                            title: el.NW.string(el.t['X+mXen']),
                            body: el.NW.string(el.t.MIJCzs)
                        });
                })();
    }
    function e8() {
        e9(), ed();
    }
    i.useEffect(() => {
        let e = (0, L.isWindows)() ? (0, B.Z)(P.ZP, D.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? N.Z.getApplication(e.id) : null;
        M.default.track(ee.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eu
        }),
            T.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eu]);
    let e6 = i.useCallback(
            (e, n, t) => {
                var l;
                let i = (0, F.Z)(e, eb, eT),
                    [r, a] = null != i ? i : [n, t];
                e !== eB && ((n = r), (t = a));
                let o = null !== (l = null == ej ? void 0 : ej.id) && void 0 !== l ? l : ez;
                s()(null != o, 'Received null target channel ID');
                let c = R.Z.getChannel(o);
                if (!(0, G.Z)(e, n, t, eb, eT, c)) {
                    let [e, l] = (0, F.Z)($.tI.PRESET_VIDEO, eb, eT);
                    (n = e), (t = l);
                }
                t !== eK && eq(t), n !== eY && eH(n), r !== n || a !== t ? eX($.tI.PRESET_CUSTOM) : e !== eB && eX(e);
            },
            [ej, ez, eb, eT, eK, eY, eB]
        ),
        ne = i.useCallback(
            (e) => {
                (0, V.t)(), (0, V.T)(null != e ? e : e7);
            },
            [e7]
        );
    function nn(e) {
        if ((e.preventDefault(), 1 === eD)) return ne();
        if (2 === eD) return eM(3);
        if (null != e7) return eM(1);
        let n = (0, K.Z)(eZ, eG, P.ZP.getRunningGames());
        z.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated)
            ? (function () {
                  var e;
                  let n = null !== (e = null == eZ ? void 0 : eZ.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await t.e('74300').then(t.bind(t, 566852));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              es(er({}, t), {
                                  handleStream: e8,
                                  pid: n
                              })
                          );
                  });
              })()
            : e8();
    }
    let nt = i.useCallback(
            (e) => {
                eF(e), null != e && (ey && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e5(e.id.split(':')[1]) : e5(void 0), eM(3), eL(!0));
            },
            [ey]
        ),
        nl = i.useCallback(
            (e) => {
                e2(e);
                var n = 3;
                eM(eo ? 2 : 3);
            },
            [eo]
        ),
        ni = !(1 === eD && ey && eO === J.Uc.Error),
        nr = (function (e) {
            switch (e) {
                case 2:
                    return el.NW.string(el.t['aC4/Zm']);
                case 1:
                    return el.NW.formatToPlainString(el.t.sbbPhY, { buttonName: el.NW.string(el.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return el.NW.string(el.t['1hKIam']);
            }
        })(eD),
        ns = (0, l.jsx)(m.xBx, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, l.jsxs)(p.Z, {
                direction: p.Z.Direction.VERTICAL,
                align: p.Z.Align.CENTER,
                className: ei.header,
                children: [
                    (0, l.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eA,
                        className: ei.headerText,
                        children: el.NW.string(el.t.RDkJQ0)
                    }),
                    ni && null != nr
                        ? (0, l.jsx)(m.Text, {
                              className: ei.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: nr
                          })
                        : null
                ]
            })
        }),
        na = i.useCallback(() => {
            ey && (0, V.t)(), eM(2);
        }, [ey]),
        no = (function (e, n, t, l) {
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
        })(eD, q, eo, e_),
        nc = 1 !== eD && (3 !== eD || (null == eG && null == eZ && null == ep) || null == e4),
        nu = i.useCallback(() => {
            null != no && eM(no);
        }, [no]),
        nd = (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(m.MyZ, {
                springConfig: es(er({}, a.config.stiff), { clamp: !0 }),
                activeSlide: eD,
                width: 480,
                children: [
                    (0, l.jsx)(m.Mi4, {
                        id: 0,
                        children: (0, l.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, l.jsx)(Y.Z, { onSelectGuild: nl })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 2,
                        children: (0, l.jsx)('div', {
                            className: ei.modalSize,
                            children: ey
                                ? (0, l.jsx)(H.se, { onSourceSelect: nt })
                                : (0, l.jsx)(H.oA, {
                                      selectedSource: eG,
                                      onChangeSelectedSource: nt
                                  })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 3,
                        children: (0, l.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, l.jsx)(X.Z, {
                                selectedChannelId: null !== (_ = null == ej ? void 0 : ej.id) && void 0 !== _ ? _ : ez,
                                selectedPreset: eB,
                                selectedResolution: eY,
                                selectedSource: eG,
                                selectedFPS: eK,
                                sound: eQ,
                                previewDisabled: e0,
                                sourceChanged: e_,
                                selectSource: eo,
                                onChangeSelectedFPS: (e) => e6(eB, eY, e),
                                onChangeSelectedResolution: (e) => e6(eB, e, eK),
                                onChangeSelectedPreset: (e) => e6(e, eY, eK),
                                onChangeSelectedChannelId: eU,
                                onChangeSelectedSource: nt,
                                onChangeSource: () => na(),
                                onChangeAudioDevice: (e) => eJ(e),
                                onChangeGuild: () => eM(0),
                                onChangeSound: (e) => e$(e),
                                onChangePreviewDisabled: (e) => e1(e),
                                onClose: ed,
                                selectedGuildId: e3,
                                targetGuildPremiumTier: eT,
                                selectGuild: q
                            })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 1,
                        children: (0, l.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, l.jsx)(H.Hu, {
                                onSourceSelect: e8,
                                onCancel: nu,
                                pickerType: e7
                            })
                        })
                    })
                ]
            })
        }),
        nm = 1 === eD || (eR && 3 === eD) ? el.NW.string(el.t.FiBjwc) : ey && (3 !== eD || null != e7) ? el.NW.string(el.t.PDTjLC) : el.NW.string(el.t['UE/rPz']),
        ng = (0, l.jsxs)(m.mzw, {
            justify: null == no ? p.Z.Justify.START : p.Z.Justify.BETWEEN,
            children: [
                (0, l.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: nc,
                    autoFocus: !0,
                    children: nm
                }),
                null == no
                    ? (0, l.jsx)(m.zxk, {
                          className: ei.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: ed,
                          children: el.NW.string(el.t['ETE/oK'])
                      })
                    : (0, l.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: nu,
                          children: el.NW.string(el.t['13/7kZ'])
                      })
            ]
        });
    return (0, l.jsx)(x.Z, {
        page: ee.ZY5.GO_LIVE_MODAL,
        children: (0, l.jsxs)(m.Y0X, {
            'aria-labelledby': eA,
            transitionState: em,
            size: m.CgR.DYNAMIC,
            className: ei.modalSize,
            children: [
                (0, l.jsx)(m.olH, {
                    onClick: ed,
                    className: ei.modalCloseButton
                }),
                (0, l.jsx)('div', { className: ei.art }),
                (0, l.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != ek,
                    spacing: 18,
                    renderPopout: () =>
                        (0, l.jsx)(ea, {
                            visibleContent: ek,
                            markAsDismissed: ew
                        }),
                    children: () =>
                        (0, l.jsxs)('form', {
                            onSubmit: nn,
                            children: [ns, nd, ng]
                        })
                })
            ]
        })
    });
}
function ec(e) {
    let { showRefreshedGoLiveModal: n } = (0, U.a)({ location: e.analyticsLocation });
    return n ? (0, l.jsx)(q.Z, er({}, e)) : (0, l.jsx)(eo, er({}, e));
}
