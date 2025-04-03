n.d(t, { default: () => eh }), n(47120), n(653041), n(301563);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(512722),
    a = n.n(o),
    c = n(642128),
    d = n(209739),
    u = n.n(d),
    f = n(252258),
    m = n(442837),
    h = n(704215),
    x = n(481060),
    p = n(668781),
    g = n(872810),
    _ = n(410575),
    j = n(579806),
    v = n(636449),
    b = n(317381),
    S = n(89425),
    C = n(812206),
    N = n(835473),
    y = n(600164),
    Z = n(313201),
    I = n(540059),
    w = n(243778),
    O = n(594190),
    T = n(998594),
    E = n(751571),
    P = n(970731),
    R = n(695346),
    W = n(361291),
    k = n(592125),
    A = n(430824),
    M = n(131951),
    L = n(944486),
    D = n(594174),
    G = n(449224),
    U = n(626135),
    B = n(63063),
    z = n(358085),
    F = n(998502),
    H = n(668519),
    V = n(451467),
    Y = n(537413),
    J = n(299570),
    X = n(960861),
    K = n(989941),
    q = n(399299),
    Q = n(351152),
    $ = n(567126),
    ee = n(143135),
    et = n(717298),
    en = n(70722),
    er = n(37113),
    el = n(981631),
    ei = n(921944),
    es = n(761274),
    eo = n(388032),
    ea = n(347226),
    ec = n(402163);
function ed(e) {
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
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(P.ZP, {
              content: eo.NW.string(eo.t.sFyFJy),
              buttonCTA: eo.NW.string(eo.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(B.Z.getArticleURL(el.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: eo.NW.string(eo.t.hvVgAQ),
              caretPosition: P.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function em(e) {
    var t, i, o, d, P, B;
    let { selectGuild: H = !1, selectSource: et = !0, guildId: em, analyticsLocation: eh, onClose: ex, transitionState: ep } = e,
        { preset: eg, resolution: e_, fps: ej, soundshareEnabled: ev } = (0, m.cj)([W.Z], () => W.Z.getState()),
        eb = l.useRef(Date.now()),
        eS = (0, m.e7)([L.Z, k.Z], () => k.Z.getChannel(L.Z.getVoiceChannelId())),
        eC = (0, m.e7)([O.ZP, G.Z], () => ((0, z.isWindows)() ? (0, K.Z)(O.ZP, G.Z) : null)),
        eN = (0, m.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        ey = (null == eN ? void 0 : eN.location.kind) === f.E.CONTEXTLESS,
        eZ = (0, N.q)(null == eN ? void 0 : eN.applicationId),
        [eI, ew] = l.useState(null);
    l.useEffect(() => {
        (0, v.R)({ isContextless: ey }) &&
            (async () => {
                var e;
                ew(await (null === j.Z || void 0 === j.Z || null == (e = j.Z.window) ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [ey]);
    let eO = (0, m.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eT = null != (t = null == eS ? void 0 : eS.getGuildId()) ? t : em,
        eE = (0, m.e7)([A.Z], () => {
            var e;
            return null != eT ? (null == (e = A.Z.getGuild(eT)) ? void 0 : e.premiumTier) : null;
        }),
        [eP, eR] = null != (i = (0, Y.Z)(eg, eO, eE)) ? i : [er.LY.RESOLUTION_720, er.ws.FPS_30],
        { lastPickerAction: eW } = (0, m.e7)([X.ZP], () => X.ZP.getPickerState()),
        ek = M.Z.getUseSystemScreensharePicker();
    (0, X.UB)();
    let eA = ek && (0, z.isMac)() && u().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, en.jR),
        eM = [];
    ep === x.Dvm.ENTERED && ek && (0, z.isMac)() && eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eL, eD] = (0, w.US)(eM, void 0, !0);
    eg !== er.tI.PRESET_CUSTOM && ((e_ = eP), (ej = eR)), (0, V.Z)(eg, e_, ej, eO, eE) || ((e_ = eP), (ej = eR));
    let eG = (0, Z.Dt)(),
        [eU, eB] = l.useState(((B = et && !eA), H ? 0 : B ? 2 : 3)),
        [ez, eF] = l.useState(eA),
        [eH, eV] = l.useState(null),
        [eY, eJ] = l.useState(
            eA
                ? {
                      id: 'prepicked:',
                      name: eo.NW.string(eo.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eX, eK] = l.useState(null),
        [eq, eQ] = l.useState(eg),
        [e$, e1] = l.useState(e_),
        [e0, e2] = l.useState(ej),
        [e5, e3] = l.useState(ev),
        [e4, e7] = l.useState(null != (o = R.I0.getSetting()) && o),
        [e8, e6] = l.useState(null != em ? em : null),
        e9 = null != (d = null == eS ? void 0 : eS.id) ? d : eH,
        [te, tt] = l.useState(eA ? '' : void 0),
        tn = (0, I.Q3)('GoLiveModal');
    async function tr() {
        var e, t;
        a()(null != eC || null != eY || (null != eN && null != eI), 'got nothing to stream');
        let n = null != (e = null == eS ? void 0 : eS.id) ? e : eH;
        a()(null != n, 'Received null target channel ID');
        let r = k.Z.getChannel(n),
            l = null != (t = null == r ? void 0 : r.getGuildId()) ? t : em;
        if (null == eS && !(await (0, S.Z)({ channelId: n }))) return;
        let i = eq,
            s = e$,
            o = e0;
        (0, V.Z)(i, s, o, eO, eE, r) || ((i = er.tI.PRESET_VIDEO), (s = er.LY.RESOLUTION_720), (o = er.ws.FPS_30)),
            (0, g.Rc)({
                preset: i,
                resolution: s,
                frameRate: o,
                soundshareEnabled: e5
            });
        let c = {};
        if (null == eY ? void 0 : eY.id.startsWith('prepicked:')) c = X.ZP.getStreamStartOptions();
        else {
            let e = (0, ee.Z)(eC, eY, O.ZP.getRunningGames()),
                t = !(0, z.isWindows)() || null == e || (null == eY ? void 0 : eY.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && (null != eY ? ((c.sourceId = eY.id), (c.sourceName = eY.name)) : null != eI && ((c.sourceId = eI), (c.sourceName = null == eZ ? void 0 : eZ.name)));
        }
        (0, g.WH)(
            l,
            n,
            eu(ed({}, c), {
                audioSourceId: eX,
                sound: e5,
                previewDisabled: e4,
                nativePickerStyleUsed: te,
                goLiveModalDurationMs: Date.now() - eb.current
            })
        ),
            null != eL && eD(ei.L.AUTO_DISMISS),
            ek ||
                (async () => {
                    (await E.Z.hasPermission(es.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: eo.NW.string(eo.t['X+mXen']),
                            body: eo.NW.string(eo.t.MIJCzs)
                        });
                })();
    }
    function tl() {
        tr(), ex();
    }
    l.useEffect(() => {
        let e = (0, z.isWindows)() ? (0, K.Z)(O.ZP, G.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        U.default.track(el.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eh
        }),
            T.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eh]);
    let ti = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, Y.Z)(e, eO, eE),
                    [i, s] = null != l ? l : [t, n];
                e !== eq && ((t = i), (n = s));
                let o = null != (r = null == eS ? void 0 : eS.id) ? r : eH;
                a()(null != o, 'Received null target channel ID');
                let c = k.Z.getChannel(o);
                if (!(0, V.Z)(e, t, n, eO, eE, c)) {
                    let [e, r] = (0, Y.Z)(er.tI.PRESET_VIDEO, eO, eE);
                    (t = e), (n = r);
                }
                n !== e0 && e2(n), t !== e$ && e1(t), i !== t || s !== n ? eQ(er.tI.PRESET_CUSTOM) : e !== eq && eQ(e);
            },
            [eS, eH, eO, eE, e0, e$, eq]
        ),
        ts = l.useCallback(
            (e) => {
                (0, J.t)(), (0, J.T)(null != e ? e : te);
            },
            [te]
        );
    function to(e) {
        if ((e.preventDefault(), 1 === eU)) return ts();
        if (2 === eU) return eB(3);
        if (null != te) return eB(1);
        let t = (0, ee.Z)(eC, eY, O.ZP.getRunningGames());
        if (F.ZP.supportsFeature(el.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var l;
            let e = null != (l = null == eC ? void 0 : eC.pid) ? l : null;
            (0, x.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        eu(ed({}, n), {
                            handleStream: tl,
                            pid: e
                        })
                    );
            });
        } else tl();
    }
    let ta = l.useCallback(
            (e) => {
                eJ(e), null != e && (ek && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? tt(e.id.split(':')[1]) : tt(void 0), eB(3), eF(!0));
            },
            [ek]
        ),
        tc = l.useCallback(
            (e) => {
                e6(e);
                var t = 3;
                eB(et ? 2 : 3);
            },
            [et]
        ),
        td = !(1 === eU && ek && eW === X.Uc.Error),
        tu = (function (e) {
            switch (e) {
                case 2:
                    return eo.NW.string(eo.t['aC4/Zm']);
                case 1:
                    return eo.NW.formatToPlainString(eo.t.sbbPhY, { buttonName: eo.NW.string(eo.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return eo.NW.string(eo.t['1hKIam']);
            }
        })(eU),
        tf = (0, r.jsx)(x.xBx, {
            className: ea.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(y.Z, {
                direction: y.Z.Direction.VERTICAL,
                align: y.Z.Align.CENTER,
                className: ea.header,
                children: [
                    (0, r.jsx)(x.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eG,
                        className: ea.headerText,
                        children: eo.NW.string(eo.t.RDkJQ0)
                    }),
                    td && null != tu
                        ? (0, r.jsx)(x.Text, {
                              className: ea.headerDescription,
                              variant: 'text-md/normal',
                              color: tn ? 'text-secondary' : 'text-normal',
                              children: tu
                          })
                        : null
                ]
            })
        }),
        tm = l.useCallback(() => {
            ek && (0, J.t)(), eB(2);
        }, [ek]),
        th = (function (e, t, n, r) {
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
        })(eU, H, et, ez),
        tx = 1 !== eU && (3 !== eU || (null == eY && null == eC && null == eI) || null == e9),
        tp = l.useCallback(() => {
            null != th && eB(th);
        }, [th]),
        tg = (0, r.jsxs)(x.MyZ, {
            springConfig: eu(ed({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eU,
            width: 480,
            children: [
                (0, r.jsx)(x.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(Q.Z, { onSelectGuild: tc })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: ek
                            ? (0, r.jsx)($.se, { onSourceSelect: ta })
                            : (0, r.jsx)($.oA, {
                                  selectedSource: eY,
                                  onChangeSelectedSource: ta
                              })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(q.Z, {
                            selectedChannelId: null != (P = null == eS ? void 0 : eS.id) ? P : eH,
                            selectedPreset: eq,
                            selectedResolution: e$,
                            selectedSource: eY,
                            selectedFPS: e0,
                            sound: e5,
                            previewDisabled: e4,
                            sourceChanged: ez,
                            selectSource: et,
                            onChangeSelectedFPS: (e) => ti(eq, e$, e),
                            onChangeSelectedResolution: (e) => ti(eq, e, e0),
                            onChangeSelectedPreset: (e) => ti(e, e$, e0),
                            onChangeSelectedChannelId: eV,
                            onChangeSelectedSource: ta,
                            onChangeSource: () => tm(),
                            onChangeAudioDevice: (e) => eK(e),
                            onChangeGuild: () => eB(0),
                            onChangeSound: (e) => e3(e),
                            onChangePreviewDisabled: (e) => e7(e),
                            onClose: ex,
                            selectedGuildId: e8,
                            targetGuildPremiumTier: eE,
                            selectGuild: H
                        })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)($.Hu, {
                            onSourceSelect: tl,
                            onCancel: tp,
                            pickerType: te
                        })
                    })
                })
            ]
        }),
        t_ = 1 === eU || (eA && 3 === eU) ? eo.NW.string(eo.t.FiBjwc) : ek && (3 !== eU || null != te) ? eo.NW.string(eo.t.PDTjLC) : eo.NW.string(eo.t['UE/rPz']),
        tj = tn
            ? (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  direction: y.Z.Direction.HORIZONTAL,
                  justify: null == th ? y.Z.Justify.END : y.Z.Justify.BETWEEN,
                  children: [
                      null != th
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(x.zxk, {
                                    size: x.zxk.Sizes.SMALL,
                                    color: x.Ttl.PRIMARY,
                                    onClick: tp,
                                    children: eo.NW.string(eo.t['13/7kZ'])
                                })
                            })
                          : null,
                      (0, r.jsxs)('div', {
                          className: ea.buttonContainer,
                          children: [
                              (0, r.jsx)(x.zxk, {
                                  type: 'submit',
                                  size: x.zxk.Sizes.SMALL,
                                  disabled: tx,
                                  autoFocus: !0,
                                  children: t_
                              }),
                              (0, r.jsx)(x.zxk, {
                                  className: ea.cancelButton,
                                  look: x.zxk.Looks.LINK,
                                  size: x.zxk.Sizes.SMALL,
                                  color: x.Ttl.PRIMARY,
                                  onClick: ex,
                                  children: eo.NW.string(eo.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  justify: null == th ? y.Z.Justify.START : y.Z.Justify.BETWEEN,
                  children: [
                      (0, r.jsx)(x.zxk, {
                          type: 'submit',
                          size: x.zxk.Sizes.SMALL,
                          disabled: tx,
                          autoFocus: !0,
                          children: t_
                      }),
                      null == th
                          ? (0, r.jsx)(x.zxk, {
                                className: ea.cancelButton,
                                look: x.zxk.Looks.LINK,
                                size: x.zxk.Sizes.SMALL,
                                color: x.Ttl.PRIMARY,
                                onClick: ex,
                                children: eo.NW.string(eo.t['ETE/oK'])
                            })
                          : (0, r.jsx)(x.zxk, {
                                size: x.zxk.Sizes.SMALL,
                                color: x.Ttl.PRIMARY,
                                onClick: tp,
                                children: eo.NW.string(eo.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(_.Z, {
        page: el.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(x.Y0X, {
            'aria-labelledby': eG,
            transitionState: ep,
            size: x.CgR.DYNAMIC,
            className: s()(ea.modalSize, ea.border),
            children: [
                tn
                    ? (0, r.jsxs)('div', {
                          className: ea.container,
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: ex,
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
                              (0, r.jsx)('div', { children: tf })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: ex,
                                  className: ea.modalCloseButton
                              }),
                              (0, r.jsx)('div', { className: ea.art })
                          ]
                      }),
                (0, r.jsx)(x.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eL,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ef, {
                            visibleContent: eL,
                            markAsDismissed: eD
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: to,
                            children: [!tn && tf, tg, tj]
                        })
                })
            ]
        })
    });
}
function eh(e) {
    let { showRefreshedGoLiveModal: t } = (0, H.a)({ location: e.analyticsLocation }),
        n = (0, m.e7)([O.ZP], () => (null != e.sourcePID ? O.ZP.getGameForPID(e.sourcePID) : void 0));
    return t ? (0, r.jsx)(et.Z, eu(ed({}, e), { sourceApplication: null != n ? n : void 0 })) : (0, r.jsx)(em, ed({}, e));
}
