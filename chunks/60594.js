n.d(t, { default: () => ec }), n(388685), n(539854), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(524979),
    d = n(209739),
    u = n.n(d),
    f = n(442837),
    m = n(704215),
    h = n(481060),
    p = n(668781),
    x = n(872810),
    g = n(410575),
    _ = n(579806),
    v = n(89425),
    j = n(812206),
    S = n(600164),
    b = n(313201),
    C = n(540059),
    y = n(243778),
    O = n(594190),
    Z = n(751571),
    I = n(970731),
    w = n(695346),
    N = n(361291),
    T = n(592125),
    E = n(430824),
    P = n(131951),
    R = n(944486),
    k = n(594174),
    A = n(449224),
    M = n(626135),
    L = n(63063),
    D = n(358085),
    B = n(998502),
    U = n(668519),
    G = n(451467),
    z = n(537413),
    W = n(299570),
    F = n(960861),
    H = n(989941),
    V = n(399299),
    Y = n(351152),
    X = n(567126),
    J = n(143135),
    K = n(717298),
    q = n(70722),
    Q = n(37113),
    $ = n(981631),
    ee = n(921944),
    et = n(761274),
    en = n(388032),
    er = n(347226),
    ei = n(402163);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eo = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(I.ZP, {
              content: en.intl.string(en.t.sFyFJy),
              buttonCTA: en.intl.string(en.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(L.Z.getArticleURL($.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: en.intl.string(en.t.hvVgAQ),
              caretPosition: I.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ea(e) {
    var t, l, o, d, I, L;
    let { selectGuild: U = !1, selectSource: K = !0, guildId: ea, analyticsLocation: ec, onClose: ed, transitionState: eu } = e,
        { preset: ef, resolution: em, fps: eh, soundshareEnabled: ep } = (0, f.cj)([N.Z], () => N.Z.getState()),
        ex = i.useRef(null),
        eg = i.useRef(Date.now()),
        e_ = (0, f.e7)([R.Z, T.Z], () => T.Z.getChannel(R.Z.getVoiceChannelId())),
        ev = (0, f.e7)([O.ZP, A.Z], () => ((0, D.isWindows)() ? (0, H.Z)(O.ZP, A.Z) : null)),
        ej = (0, f.e7)([k.default], () => {
            let e = k.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eS = null != (t = null == e_ ? void 0 : e_.getGuildId()) ? t : ea,
        eb = (0, f.e7)([E.Z], () => {
            var e;
            return null != eS ? (null == (e = E.Z.getGuild(eS)) ? void 0 : e.premiumTier) : null;
        }),
        [eC, ey] = null != (l = (0, z.Z)(ef, ej, eb)) ? l : [Q.LY.RESOLUTION_720, Q.ws.FPS_30],
        { lastPickerAction: eO } = (0, f.e7)([F.ZP], () => F.ZP.getPickerState()),
        eZ = P.Z.getUseSystemScreensharePicker();
    (0, F.UB)();
    let eI = eZ && (0, D.isMac)() && u().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, q.jR),
        ew = [];
    eu === h.Dvm.ENTERED && eZ && (0, D.isMac)() && ew.push(m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eN, eT] = (0, y.US)(ew, void 0, !0);
    ef !== Q.tI.PRESET_CUSTOM && ((em = eC), (eh = ey)), (0, G.Z)(ef, em, eh, ej, eb) || ((em = eC), (eh = ey));
    let eE = (0, b.Dt)(),
        [eP, eR] = i.useState(((L = K && !eI), U ? 0 : L ? 2 : 3)),
        [ek, eA] = i.useState(eI),
        [eM, eL] = i.useState(null),
        [eD, eB] = i.useState(
            eI
                ? {
                      id: 'prepicked:',
                      name: en.intl.string(en.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eU, eG] = i.useState(null),
        [ez, eW] = i.useState(ef),
        [eF, eH] = i.useState(em),
        [eV, eY] = i.useState(eh),
        [eX, eJ] = i.useState(ep),
        [eK, eq] = i.useState(null != (o = w.I0.getSetting()) && o),
        [eQ, e$] = i.useState(null != ea ? ea : null),
        e1 = null != (d = null == e_ ? void 0 : e_.id) ? d : eM,
        [e0, e2] = i.useState(eI ? '' : void 0),
        e5 = (0, C.Q3)('GoLiveModal');
    async function e3() {
        var e, t;
        a()(null != ev || null != eD, 'got nothing to stream');
        let n = null != (e = null == e_ ? void 0 : e_.id) ? e : eM;
        a()(null != n, 'Received null target channel ID');
        let r = T.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : ea;
        if (null == e_ && !(await (0, v.Z)({ channelId: n }))) return;
        let l = ez,
            s = eF,
            o = eV;
        (0, G.Z)(l, s, o, ej, eb, r) || ((l = Q.tI.PRESET_VIDEO), (s = Q.LY.RESOLUTION_720), (o = Q.ws.FPS_30)),
            (0, x.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: eX
            });
        let c = {};
        if (null == eD ? void 0 : eD.id.startsWith('prepicked:')) c = F.ZP.getStreamStartOptions();
        else {
            let e = (0, J.Z)(ev, eD, O.ZP.getRunningGames()),
                t = !(0, D.isWindows)() || null == e || (null == eD ? void 0 : eD.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && null != eD && ((c.sourceId = eD.id), (c.sourceName = eD.name));
        }
        (0, x.WH)(
            i,
            n,
            es(el({}, c), {
                audioSourceId: eU,
                sound: eX,
                previewDisabled: eK,
                nativePickerStyleUsed: e0,
                goLiveModalDurationMs: Date.now() - eg.current
            })
        ),
            null != eN && eT(ee.L.AUTO_DISMISS),
            eZ ||
                (async () => {
                    (await Z.Z.hasPermission(et.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: en.intl.string(en.t['X+mXen']),
                            body: en.intl.string(en.t.MIJCzs)
                        });
                })();
    }
    function e7() {
        e3(), ed();
    }
    i.useEffect(() => {
        let e = (0, D.isWindows)() ? (0, H.Z)(O.ZP, A.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
        M.default.track($.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: ec
        });
    }, [ec]);
    let e4 = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, z.Z)(e, ej, eb),
                    [l, s] = null != i ? i : [t, n];
                e !== ez && ((t = l), (n = s));
                let o = null != (r = null == e_ ? void 0 : e_.id) ? r : eM;
                a()(null != o, 'Received null target channel ID');
                let c = T.Z.getChannel(o);
                if (!(0, G.Z)(e, t, n, ej, eb, c)) {
                    let [e, r] = (0, z.Z)(Q.tI.PRESET_VIDEO, ej, eb);
                    (t = e), (n = r);
                }
                n !== eV && eY(n), t !== eF && eH(t), l !== t || s !== n ? eW(Q.tI.PRESET_CUSTOM) : e !== ez && eW(e);
            },
            [e_, eM, ej, eb, eV, eF, ez]
        ),
        e8 = i.useCallback(
            (e) => {
                (0, W.t)(), (0, W.T)(null != e ? e : e0);
            },
            [e0]
        );
    function e6(e) {
        if ((e.preventDefault(), 1 === eP)) return e8();
        if (2 === eP) return eR(3);
        if (null != e0) return eR(1);
        let t = (0, J.Z)(ev, eD, O.ZP.getRunningGames());
        if (B.ZP.supportsFeature($.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == ev ? void 0 : ev.pid) ? i : null;
            (0, h.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        es(el({}, n), {
                            handleStream: e7,
                            pid: e
                        })
                    );
            });
        } else e7();
    }
    let e9 = i.useCallback(
            (e) => {
                eB(e), null != e && (eZ && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e2(e.id.split(':')[1]) : e2(void 0), eR(3), eA(!0));
            },
            [eZ]
        ),
        te = i.useCallback(
            (e) => {
                e$(e);
                var t = 3;
                eR(K ? 2 : 3);
            },
            [K]
        ),
        tt = !(1 === eP && eZ && eO === F.Uc.Error),
        tn = (function (e) {
            switch (e) {
                case 2:
                    return en.intl.string(en.t['aC4/Zm']);
                case 1:
                    return en.intl.formatToPlainString(en.t.sbbPhY, { buttonName: en.intl.string(en.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return en.intl.string(en.t['1hKIam']);
            }
        })(eP),
        tr = (0, r.jsx)(h.xBx, {
            className: er.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(S.Z, {
                direction: S.Z.Direction.VERTICAL,
                align: S.Z.Align.CENTER,
                className: er.header,
                children: [
                    (0, r.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eE,
                        className: er.headerText,
                        children: en.intl.string(en.t.RDkJQ0)
                    }),
                    tt && null != tn
                        ? (0, r.jsx)(h.Text, {
                              className: er.headerDescription,
                              variant: 'text-md/normal',
                              color: e5 ? 'text-secondary' : 'text-normal',
                              children: tn
                          })
                        : null
                ]
            })
        }),
        ti = i.useCallback(() => {
            eZ && (0, W.t)(), eR(2);
        }, [eZ]),
        tl = (function (e, t, n, r) {
            switch (e) {
                case 2:
                    return t ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (r) return 2;
                    if (!n && t) return 0;
                    return null;
                default:
                    return null;
            }
        })(eP, U, K, ek),
        ts = 1 !== eP && (3 !== eP || (null == eD && null == ev) || null == e1),
        to = i.useCallback(() => {
            null != tl && eR(tl);
        }, [tl]),
        ta = (0, r.jsxs)(h.MyZ, {
            springConfig: es(el({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eP,
            width: 480,
            children: [
                (0, r.jsx)(h.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: er.modalSize,
                        children: (0, r.jsx)(Y.Z, { onSelectGuild: te })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: er.modalSize,
                        children: eZ
                            ? (0, r.jsx)(X.se, { onSourceSelect: e9 })
                            : (0, r.jsx)(X.oA, {
                                  selectedSource: eD,
                                  onChangeSelectedSource: e9
                              })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: er.modalSize,
                        children: (0, r.jsx)(V.Z, {
                            selectedChannelId: null != (I = null == e_ ? void 0 : e_.id) ? I : eM,
                            selectedPreset: ez,
                            selectedResolution: eF,
                            selectedSource: eD,
                            selectedFPS: eV,
                            sound: eX,
                            previewDisabled: eK,
                            sourceChanged: ek,
                            selectSource: K,
                            onChangeSelectedFPS: (e) => e4(ez, eF, e),
                            onChangeSelectedResolution: (e) => e4(ez, e, eV),
                            onChangeSelectedPreset: (e) => e4(e, eF, eV),
                            onChangeSelectedChannelId: eL,
                            onChangeSelectedSource: e9,
                            onChangeSource: () => ti(),
                            onChangeAudioDevice: (e) => eG(e),
                            onChangeGuild: () => eR(0),
                            onChangeSound: (e) => eJ(e),
                            onChangePreviewDisabled: (e) => eq(e),
                            onClose: ed,
                            selectedGuildId: eQ,
                            targetGuildPremiumTier: eb,
                            selectGuild: U
                        })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: er.modalSize,
                        children: (0, r.jsx)(X.Hu, {
                            onSourceSelect: e7,
                            onCancel: to,
                            pickerType: e0
                        })
                    })
                })
            ]
        }),
        tc = 1 === eP || (eI && 3 === eP) ? en.intl.string(en.t.FiBjwc) : eZ && (3 !== eP || null != e0) ? en.intl.string(en.t.PDTjLC) : en.intl.string(en.t['UE/rPz']),
        td = e5
            ? (0, r.jsxs)(h.mzw, {
                  className: er.modalFooter,
                  direction: S.Z.Direction.HORIZONTAL,
                  justify: null == tl ? S.Z.Justify.END : S.Z.Justify.BETWEEN,
                  children: [
                      null != tl
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(h.zxk, {
                                    size: h.zxk.Sizes.SMALL,
                                    color: h.Ttl.PRIMARY,
                                    onClick: to,
                                    children: en.intl.string(en.t['13/7kZ'])
                                })
                            })
                          : null,
                      (0, r.jsxs)('div', {
                          className: er.buttonContainer,
                          children: [
                              (0, r.jsx)(h.zxk, {
                                  type: 'submit',
                                  size: h.zxk.Sizes.SMALL,
                                  disabled: ts,
                                  autoFocus: !0,
                                  children: tc
                              }),
                              (0, r.jsx)(h.zxk, {
                                  className: er.cancelButton,
                                  look: h.zxk.Looks.LINK,
                                  size: h.zxk.Sizes.SMALL,
                                  color: h.Ttl.PRIMARY,
                                  onClick: ed,
                                  children: en.intl.string(en.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)(h.mzw, {
                  className: er.modalFooter,
                  justify: null == tl ? S.Z.Justify.START : S.Z.Justify.BETWEEN,
                  children: [
                      (0, r.jsx)(h.zxk, {
                          type: 'submit',
                          size: h.zxk.Sizes.SMALL,
                          disabled: ts,
                          autoFocus: !0,
                          children: tc
                      }),
                      null == tl
                          ? (0, r.jsx)(h.zxk, {
                                className: er.cancelButton,
                                look: h.zxk.Looks.LINK,
                                size: h.zxk.Sizes.SMALL,
                                color: h.Ttl.PRIMARY,
                                onClick: ed,
                                children: en.intl.string(en.t['ETE/oK'])
                            })
                          : (0, r.jsx)(h.zxk, {
                                size: h.zxk.Sizes.SMALL,
                                color: h.Ttl.PRIMARY,
                                onClick: to,
                                children: en.intl.string(en.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(g.Z, {
        page: $.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(h.Y0X, {
            'aria-labelledby': eE,
            transitionState: eu,
            size: h.CgR.DYNAMIC,
            className: s()(er.modalSize, er.border),
            parentComponent: 'GoLiveModal',
            children: [
                e5
                    ? (0, r.jsxs)('div', {
                          className: er.container,
                          children: [
                              (0, r.jsx)(h.olH, {
                                  onClick: ed,
                                  className: er.modalCloseButton
                              }),
                              (0, r.jsx)('div', {
                                  className: er.artContainer,
                                  children: (0, r.jsx)('img', {
                                      className: er.refreshedArt,
                                      alt: '',
                                      src: ei
                                  })
                              }),
                              (0, r.jsx)('div', { children: tr })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.olH, {
                                  onClick: ed,
                                  className: er.modalCloseButton
                              }),
                              (0, r.jsx)('div', { className: er.art })
                          ]
                      }),
                (0, r.jsx)(h.yRy, {
                    targetElementRef: ex,
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eN,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eo, {
                            visibleContent: eN,
                            markAsDismissed: eT
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: e6,
                            ref: ex,
                            children: [!e5 && tr, ta, td]
                        })
                })
            ]
        })
    });
}
function ec(e) {
    let { showRefreshedGoLiveModal: t } = (0, U.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([O.ZP], () => (null != e.sourcePID ? O.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              K.Z,
              es(el({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(ea, el({}, e));
}
