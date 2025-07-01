(n.d(t, { default: () => eh }), n(388685), n(539854), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(695469),
    d = n(209739),
    u = n.n(d),
    f = n(442837),
    m = n(704215),
    h = n(179538),
    p = n(257465),
    x = n(369585),
    g = n(530392),
    _ = n(37148),
    v = n(481060),
    j = n(668781),
    b = n(872810),
    S = n(410575),
    C = n(579806),
    y = n(89425),
    O = n(812206),
    Z = n(600164),
    I = n(313201),
    w = n(724723),
    N = n(243778),
    T = n(594190),
    E = n(751571),
    P = n(970731),
    R = n(695346),
    k = n(361291),
    A = n(592125),
    M = n(430824),
    L = n(131951),
    D = n(944486),
    B = n(594174),
    G = n(449224),
    U = n(626135),
    W = n(63063),
    z = n(358085),
    F = n(998502),
    H = n(668519),
    V = n(451467),
    Y = n(537413),
    X = n(299570),
    J = n(960861),
    K = n(989941),
    q = n(399299),
    Q = n(351152),
    $ = n(567126),
    ee = n(143135),
    et = n(717298),
    en = n(70722),
    er = n(37113),
    ei = n(981631),
    el = n(921944),
    es = n(761274),
    eo = n(388032),
    ea = n(347226),
    ec = n(402163);
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function eu(e, t) {
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
let ef = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(P.ZP, {
              content: eo.intl.string(eo.t.sFyFJy),
              buttonCTA: eo.intl.string(eo.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(W.Z.getArticleURL(ei.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: eo.intl.string(eo.t.hvVgAQ),
              caretPosition: P.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function em(e) {
    var t, l, o, d, P, W;
    let { selectGuild: H = !1, selectSource: et = !0, guildId: em, analyticsLocation: eh, onClose: ep, transitionState: ex } = e,
        eg = w.Z.getCurrentConfig({ location: 'GoLiveModal' }, { autoTrackExposure: !0 }).enabled,
        { preset: e_, resolution: ev, fps: ej, soundshareEnabled: eb } = (0, f.cj)([k.Z], () => k.Z.getState()),
        eS = i.useRef(null),
        eC = i.useRef(Date.now()),
        ey = (0, f.e7)([D.Z, A.Z], () => A.Z.getChannel(D.Z.getVoiceChannelId())),
        eO = (0, f.e7)([T.ZP, G.Z], () => ((0, z.isWindows)() ? (0, K.Z)(T.ZP, G.Z) : null)),
        eZ = (0, f.e7)([B.default], () => {
            let e = B.default.getCurrentUser();
            return (a()(null != e, 'GoLiveModal: user cannot be undefined'), e);
        }),
        eI = null != (t = null == ey ? void 0 : ey.getGuildId()) ? t : em,
        ew = (0, f.e7)([M.Z], () => {
            var e;
            return null != eI ? (null == (e = M.Z.getGuild(eI)) ? void 0 : e.premiumTier) : null;
        }),
        [eN, eT] = null != (l = (0, Y.Z)(e_, eZ, ew)) ? l : [er.LY.RESOLUTION_720, er.ws.FPS_30],
        { lastPickerAction: eE } = (0, f.e7)([J.ZP], () => J.ZP.getPickerState()),
        eP = L.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let eR = eP && (0, z.isMac)() && u().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, en.jR),
        ek = [];
    ex === v.Dvm.ENTERED && eP && (0, z.isMac)() && ek.push(m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eA, eM] = (0, N.US)(ek, void 0, !0);
    (e_ !== er.tI.PRESET_CUSTOM && ((ev = eN), (ej = eT)), (0, V.Z)(e_, ev, ej, eZ, ew) || ((ev = eN), (ej = eT)));
    let eL = (0, I.Dt)(),
        [eD, eB] = i.useState(((W = et && !eR), H ? 0 : W ? 2 : 3)),
        [eG, eU] = i.useState(eR),
        [eW, ez] = i.useState(null),
        [eF, eH] = i.useState(
            eR
                ? {
                      id: 'prepicked:',
                      name: eo.intl.string(eo.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eV, eY] = i.useState(null),
        [eX, eJ] = i.useState(e_),
        [eK, eq] = i.useState(ev),
        [eQ, e$] = i.useState(ej),
        [e1, e0] = i.useState(eb),
        [e2, e5] = i.useState(null != (o = R.I0.getSetting()) && o),
        [e3, e7] = i.useState(null != em ? em : null),
        e4 = null != (d = null == ey ? void 0 : ey.id) ? d : eW,
        [e8, e6] = i.useState(eR ? '' : void 0);
    async function e9() {
        var e, t;
        a()(null != eO || null != eF, 'got nothing to stream');
        let n = null != (e = null == ey ? void 0 : ey.id) ? e : eW;
        a()(null != n, 'Received null target channel ID');
        let r = A.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : em;
        if (null == ey && !(await (0, y.Z)({ channelId: n }))) return;
        let l = eX,
            s = eK,
            o = eQ;
        ((0, V.Z)(l, s, o, eZ, ew, r) || ((l = er.tI.PRESET_VIDEO), (s = er.LY.RESOLUTION_720), (o = er.ws.FPS_30)),
            (0, b.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: e1
            }));
        let c = {};
        if (null == eF ? void 0 : eF.id.startsWith('prepicked:')) c = J.ZP.getStreamStartOptions();
        else {
            let e = (0, ee.Z)(eO, eF, T.ZP.getRunningGames()),
                t = !(0, z.isWindows)() || null == e || (null == eF ? void 0 : eF.id.startsWith('camera:'));
            ((c.pid = t || null == e ? void 0 : e.pid), null == c.pid && null != eF && ((c.sourceId = eF.id), (c.sourceName = eF.name)));
        }
        ((0, b.WH)(
            i,
            n,
            eu(ed({}, c), {
                audioSourceId: eV,
                sound: e1,
                previewDisabled: e2,
                nativePickerStyleUsed: e8,
                goLiveModalDurationMs: Date.now() - eC.current
            })
        ),
            null != eA && eM(el.L.AUTO_DISMISS),
            eP ||
                (async () => {
                    (await E.Z.hasPermission(es.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        j.Z.show({
                            title: eo.intl.string(eo.t['X+mXen']),
                            body: eo.intl.string(eo.t.MIJCzs)
                        });
                })());
    }
    function te() {
        (e9(), ep());
    }
    i.useEffect(() => {
        let e = (0, z.isWindows)() ? (0, K.Z)(T.ZP, G.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? O.Z.getApplication(e.id) : null;
        U.default.track(ei.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eh
        });
    }, [eh]);
    let tt = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, Y.Z)(e, eZ, ew),
                    [l, s] = null != i ? i : [t, n];
                e !== eX && ((t = l), (n = s));
                let o = null != (r = null == ey ? void 0 : ey.id) ? r : eW;
                a()(null != o, 'Received null target channel ID');
                let c = A.Z.getChannel(o);
                if (!(0, V.Z)(e, t, n, eZ, ew, c)) {
                    let [e, r] = (0, Y.Z)(er.tI.PRESET_VIDEO, eZ, ew);
                    ((t = e), (n = r));
                }
                (n !== eQ && e$(n), t !== eK && eq(t), l !== t || s !== n ? eJ(er.tI.PRESET_CUSTOM) : e !== eX && eJ(e));
            },
            [ey, eW, eZ, ew, eQ, eK, eX]
        ),
        tn = i.useCallback(
            (e) => {
                ((0, X.t)(), (0, X.T)(null != e ? e : e8));
            },
            [e8]
        );
    function tr(e) {
        if ((e.preventDefault(), 1 === eD)) return tn();
        if (2 === eD) return eB(3);
        if (null != e8) return eB(1);
        let t = (0, ee.Z)(eO, eF, T.ZP.getRunningGames());
        if (F.ZP.supportsFeature(ei.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == eO ? void 0 : eO.pid) ? i : null;
            (0, v.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        eu(ed({}, n), {
                            handleStream: te,
                            pid: e
                        })
                    );
            });
        } else te();
    }
    let ti = i.useCallback(
            (e) => {
                (eH(e), null != e && (eP && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e6(e.id.split(':')[1]) : e6(void 0), eB(3), eU(!0)));
            },
            [eP]
        ),
        tl = i.useCallback(
            (e) => {
                e7(e);
                var t = 3;
                eB(et ? 2 : 3);
            },
            [et]
        ),
        ts = !(1 === eD && eP && eE === J.Uc.Error),
        to = (function (e) {
            switch (e) {
                case 2:
                    return eo.intl.string(eo.t['aC4/Zm']);
                case 1:
                    return eo.intl.formatToPlainString(eo.t.sbbPhY, { buttonName: eo.intl.string(eo.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return eo.intl.string(eo.t['1hKIam']);
            }
        })(eD),
        ta = (0, r.jsx)(v.xBx, {
            className: ea.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(Z.Z, {
                direction: Z.Z.Direction.VERTICAL,
                align: Z.Z.Align.CENTER,
                className: ea.header,
                children: [
                    (0, r.jsx)(v.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eL,
                        className: ea.headerText,
                        children: eo.intl.string(eo.t.RDkJQ0)
                    }),
                    ts && null != to
                        ? (0, r.jsx)(v.Text, {
                              className: ea.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: to
                          })
                        : null
                ]
            })
        }),
        tc = i.useCallback(() => {
            (eP && (0, X.t)(), eB(2));
        }, [eP]),
        td = (function (e, t, n, r) {
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
        })(eD, H, et, eG),
        tu = 1 !== eD && (3 !== eD || (null == eF && null == eO) || null == e4),
        tf = i.useCallback(() => {
            null != td && eB(td);
        }, [td]),
        tm = (0, r.jsxs)(v.MyZ, {
            springConfig: eu(ed({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eD,
            width: 480,
            children: [
                (0, r.jsx)(v.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(Q.Z, { onSelectGuild: tl })
                    })
                }),
                (0, r.jsx)(v.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: eP
                            ? (0, r.jsx)($.se, { onSourceSelect: ti })
                            : (0, r.jsx)($.oA, {
                                  selectedSource: eF,
                                  onChangeSelectedSource: ti
                              })
                    })
                }),
                (0, r.jsx)(v.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(q.Z, {
                            selectedChannelId: null != (P = null == ey ? void 0 : ey.id) ? P : eW,
                            selectedPreset: eX,
                            selectedResolution: eK,
                            selectedSource: eF,
                            selectedFPS: eQ,
                            sound: e1,
                            previewDisabled: e2,
                            sourceChanged: eG,
                            selectSource: et,
                            onChangeSelectedFPS: (e) => tt(eX, eK, e),
                            onChangeSelectedResolution: (e) => tt(eX, e, eQ),
                            onChangeSelectedPreset: (e) => tt(e, eK, eQ),
                            onChangeSelectedChannelId: ez,
                            onChangeSelectedSource: ti,
                            onChangeSource: () => tc(),
                            onChangeAudioDevice: (e) => eY(e),
                            onChangeGuild: () => eB(0),
                            onChangeSound: (e) => e0(e),
                            onChangePreviewDisabled: (e) => e5(e),
                            onClose: ep,
                            selectedGuildId: e3,
                            targetGuildPremiumTier: ew,
                            selectGuild: H
                        })
                    })
                }),
                (0, r.jsx)(v.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)($.Hu, {
                            onSourceSelect: te,
                            onCancel: tf,
                            pickerType: e8
                        })
                    })
                })
            ]
        }),
        th = 1 === eD || (eR && 3 === eD) ? eo.intl.string(eo.t.FiBjwc) : eP && (3 !== eD || null != e8) ? eo.intl.string(eo.t.PDTjLC) : eo.intl.string(eo.t['UE/rPz']);
    if (eg)
        return (0, r.jsxs)(p.IX, {
            transitionState: ex,
            size: 'md',
            onClose: ep,
            children: [
                (0, r.jsx)(_.x, {
                    gradientColor: 'purple',
                    image: ec,
                    title: eo.intl.string(eo.t.RDkJQ0),
                    titleTextVariant: 'heading-xl/semibold',
                    body: ts && null != to ? to : void 0,
                    alignCenter: !0
                }),
                (0, r.jsx)(g.h, {
                    children: (0, r.jsx)('div', {
                        className: ea.manaDesktopModalContent,
                        children: tm
                    })
                }),
                (0, r.jsx)(x.G, {
                    leading:
                        null != td
                            ? (0, r.jsx)(h.A, {
                                  variant: 'secondary',
                                  textVariant: 'text-md/medium',
                                  text: eo.intl.string(eo.t['13/7kZ']),
                                  onClick: tf
                              })
                            : void 0,
                    actions: [
                        {
                            variant: 'secondary',
                            text: eo.intl.string(eo.t['ETE/oK']),
                            onClick: ep
                        },
                        {
                            variant: 'primary',
                            text: th,
                            disabled: tu,
                            onClick: tr
                        }
                    ],
                    actionsFullWidth: null == td
                })
            ]
        });
    let tp = (0, r.jsxs)(v.mzw, {
        className: ea.modalFooter,
        direction: Z.Z.Direction.HORIZONTAL,
        justify: null == td ? Z.Z.Justify.END : Z.Z.Justify.BETWEEN,
        children: [
            null != td
                ? (0, r.jsx)('div', {
                      children: (0, r.jsx)(v.zxk, {
                          size: v.zxk.Sizes.SMALL,
                          color: v.Ttl.PRIMARY,
                          onClick: tf,
                          children: eo.intl.string(eo.t['13/7kZ'])
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: ea.buttonContainer,
                children: [
                    (0, r.jsx)(v.zxk, {
                        type: 'submit',
                        size: v.zxk.Sizes.SMALL,
                        disabled: tu,
                        autoFocus: !0,
                        children: th
                    }),
                    (0, r.jsx)(v.zxk, {
                        className: ea.cancelButton,
                        look: v.zxk.Looks.LINK,
                        size: v.zxk.Sizes.SMALL,
                        color: v.Ttl.PRIMARY,
                        onClick: ep,
                        children: eo.intl.string(eo.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
    return (0, r.jsx)(S.Z, {
        page: ei.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(v.Y0X, {
            'aria-labelledby': eL,
            transitionState: ex,
            size: v.CgR.DYNAMIC,
            className: s()(ea.modalSize, ea.border),
            parentComponent: 'GoLiveModal',
            children: [
                (0, r.jsxs)('div', {
                    className: ea.container,
                    children: [
                        (0, r.jsx)(v.olH, {
                            onClick: ep,
                            className: ea.modalCloseButton
                        }),
                        (0, r.jsx)('div', {
                            className: ea.artContainer,
                            children: (0, r.jsx)('img', {
                                className: ea.refreshedArt,
                                alt: '',
                                src: ec
                            })
                        }),
                        (0, r.jsx)('div', { children: ta })
                    ]
                }),
                (0, r.jsx)(v.yRy, {
                    targetElementRef: eS,
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eA,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ef, {
                            visibleContent: eA,
                            markAsDismissed: eM
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: tr,
                            ref: eS,
                            children: [tm, tp]
                        })
                })
            ]
        })
    });
}
function eh(e) {
    let { showRefreshedGoLiveModal: t } = (0, H.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([T.ZP], () => (null != e.sourcePID ? T.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              et.Z,
              eu(ed({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(em, ed({}, e));
}
