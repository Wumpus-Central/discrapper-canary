n.d(t, { default: () => em }), n(388685), n(539854), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(200100),
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
    N = n(812206),
    C = n(835473),
    y = n(600164),
    Z = n(313201),
    I = n(540059),
    w = n(243778),
    O = n(594190),
    T = n(751571),
    E = n(970731),
    P = n(695346),
    R = n(361291),
    W = n(592125),
    k = n(430824),
    A = n(131951),
    M = n(944486),
    L = n(594174),
    D = n(449224),
    G = n(626135),
    B = n(63063),
    U = n(358085),
    z = n(998502),
    F = n(668519),
    H = n(451467),
    V = n(537413),
    Y = n(299570),
    J = n(960861),
    X = n(989941),
    K = n(399299),
    q = n(351152),
    Q = n(567126),
    $ = n(143135),
    ee = n(717298),
    et = n(70722),
    en = n(37113),
    er = n(981631),
    ei = n(921944),
    el = n(761274),
    es = n(388032),
    ea = n(347226),
    eo = n(402163);
function ec(e) {
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
function ed(e, t) {
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
let eu = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(E.ZP, {
              content: es.NW.string(es.t.sFyFJy),
              buttonCTA: es.NW.string(es.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(B.Z.getArticleURL(er.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: es.NW.string(es.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ef(e) {
    var t, l, a, d, E, B;
    let { selectGuild: F = !1, selectSource: ee = !0, guildId: ef, analyticsLocation: em, onClose: eh, transitionState: ex } = e,
        { preset: ep, resolution: eg, fps: e_, soundshareEnabled: ej } = (0, m.cj)([R.Z], () => R.Z.getState()),
        ev = i.useRef(Date.now()),
        eb = (0, m.e7)([M.Z, W.Z], () => W.Z.getChannel(M.Z.getVoiceChannelId())),
        eS = (0, m.e7)([O.ZP, D.Z], () => ((0, U.isWindows)() ? (0, X.Z)(O.ZP, D.Z) : null)),
        eN = (0, m.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        eC = (null == eN ? void 0 : eN.location.kind) === f.E.CONTEXTLESS,
        ey = (0, C.q)(null == eN ? void 0 : eN.applicationId),
        [eZ, eI] = i.useState(null);
    i.useEffect(() => {
        (0, v.R)({ isContextless: eC }) &&
            (async () => {
                var e;
                eI(await (null === j.Z || void 0 === j.Z || null == (e = j.Z.window) ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [eC]);
    let ew = (0, m.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eO = null != (t = null == eb ? void 0 : eb.getGuildId()) ? t : ef,
        eT = (0, m.e7)([k.Z], () => {
            var e;
            return null != eO ? (null == (e = k.Z.getGuild(eO)) ? void 0 : e.premiumTier) : null;
        }),
        [eE, eP] = null != (l = (0, V.Z)(ep, ew, eT)) ? l : [en.LY.RESOLUTION_720, en.ws.FPS_30],
        { lastPickerAction: eR } = (0, m.e7)([J.ZP], () => J.ZP.getPickerState()),
        eW = A.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let ek = eW && (0, U.isMac)() && u().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, et.jR),
        eA = [];
    ex === x.Dvm.ENTERED && eW && (0, U.isMac)() && eA.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eM, eL] = (0, w.US)(eA, void 0, !0);
    ep !== en.tI.PRESET_CUSTOM && ((eg = eE), (e_ = eP)), (0, H.Z)(ep, eg, e_, ew, eT) || ((eg = eE), (e_ = eP));
    let eD = (0, Z.Dt)(),
        [eG, eB] = i.useState(((B = ee && !ek), F ? 0 : B ? 2 : 3)),
        [eU, ez] = i.useState(ek),
        [eF, eH] = i.useState(null),
        [eV, eY] = i.useState(
            ek
                ? {
                      id: 'prepicked:',
                      name: es.NW.string(es.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eJ, eX] = i.useState(null),
        [eK, eq] = i.useState(ep),
        [eQ, e$] = i.useState(eg),
        [e1, e0] = i.useState(e_),
        [e2, e5] = i.useState(ej),
        [e3, e4] = i.useState(null != (a = P.I0.getSetting()) && a),
        [e8, e7] = i.useState(null != ef ? ef : null),
        e9 = null != (d = null == eb ? void 0 : eb.id) ? d : eF,
        [e6, te] = i.useState(ek ? '' : void 0),
        tt = (0, I.Q3)('GoLiveModal');
    async function tn() {
        var e, t;
        o()(null != eS || null != eV || (null != eN && null != eZ), 'got nothing to stream');
        let n = null != (e = null == eb ? void 0 : eb.id) ? e : eF;
        o()(null != n, 'Received null target channel ID');
        let r = W.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : ef;
        if (null == eb && !(await (0, S.Z)({ channelId: n }))) return;
        let l = eK,
            s = eQ,
            a = e1;
        (0, H.Z)(l, s, a, ew, eT, r) || ((l = en.tI.PRESET_VIDEO), (s = en.LY.RESOLUTION_720), (a = en.ws.FPS_30)),
            (0, g.Rc)({
                preset: l,
                resolution: s,
                frameRate: a,
                soundshareEnabled: e2
            });
        let c = {};
        if (null == eV ? void 0 : eV.id.startsWith('prepicked:')) c = J.ZP.getStreamStartOptions();
        else {
            let e = (0, $.Z)(eS, eV, O.ZP.getRunningGames()),
                t = !(0, U.isWindows)() || null == e || (null == eV ? void 0 : eV.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && (null != eV ? ((c.sourceId = eV.id), (c.sourceName = eV.name)) : null != eZ && ((c.sourceId = eZ), (c.sourceName = null == ey ? void 0 : ey.name)));
        }
        (0, g.WH)(
            i,
            n,
            ed(ec({}, c), {
                audioSourceId: eJ,
                sound: e2,
                previewDisabled: e3,
                nativePickerStyleUsed: e6,
                goLiveModalDurationMs: Date.now() - ev.current
            })
        ),
            null != eM && eL(ei.L.AUTO_DISMISS),
            eW ||
                (async () => {
                    (await T.Z.hasPermission(el.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: es.NW.string(es.t['X+mXen']),
                            body: es.NW.string(es.t.MIJCzs)
                        });
                })();
    }
    function tr() {
        tn(), eh();
    }
    i.useEffect(() => {
        let e = (0, U.isWindows)() ? (0, X.Z)(O.ZP, D.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? N.Z.getApplication(e.id) : null;
        G.default.track(er.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: em
        });
    }, [em]);
    let ti = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, V.Z)(e, ew, eT),
                    [l, s] = null != i ? i : [t, n];
                e !== eK && ((t = l), (n = s));
                let a = null != (r = null == eb ? void 0 : eb.id) ? r : eF;
                o()(null != a, 'Received null target channel ID');
                let c = W.Z.getChannel(a);
                if (!(0, H.Z)(e, t, n, ew, eT, c)) {
                    let [e, r] = (0, V.Z)(en.tI.PRESET_VIDEO, ew, eT);
                    (t = e), (n = r);
                }
                n !== e1 && e0(n), t !== eQ && e$(t), l !== t || s !== n ? eq(en.tI.PRESET_CUSTOM) : e !== eK && eq(e);
            },
            [eb, eF, ew, eT, e1, eQ, eK]
        ),
        tl = i.useCallback(
            (e) => {
                (0, Y.t)(), (0, Y.T)(null != e ? e : e6);
            },
            [e6]
        );
    function ts(e) {
        if ((e.preventDefault(), 1 === eG)) return tl();
        if (2 === eG) return eB(3);
        if (null != e6) return eB(1);
        let t = (0, $.Z)(eS, eV, O.ZP.getRunningGames());
        if (z.ZP.supportsFeature(er.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == eS ? void 0 : eS.pid) ? i : null;
            (0, x.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        ed(ec({}, n), {
                            handleStream: tr,
                            pid: e
                        })
                    );
            });
        } else tr();
    }
    let ta = i.useCallback(
            (e) => {
                eY(e), null != e && (eW && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? te(e.id.split(':')[1]) : te(void 0), eB(3), ez(!0));
            },
            [eW]
        ),
        to = i.useCallback(
            (e) => {
                e7(e);
                var t = 3;
                eB(ee ? 2 : 3);
            },
            [ee]
        ),
        tc = !(1 === eG && eW && eR === J.Uc.Error),
        td = (function (e) {
            switch (e) {
                case 2:
                    return es.NW.string(es.t['aC4/Zm']);
                case 1:
                    return es.NW.formatToPlainString(es.t.sbbPhY, { buttonName: es.NW.string(es.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return es.NW.string(es.t['1hKIam']);
            }
        })(eG),
        tu = (0, r.jsx)(x.xBx, {
            className: ea.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(y.Z, {
                direction: y.Z.Direction.VERTICAL,
                align: y.Z.Align.CENTER,
                className: ea.header,
                children: [
                    (0, r.jsx)(x.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eD,
                        className: ea.headerText,
                        children: es.NW.string(es.t.RDkJQ0)
                    }),
                    tc && null != td
                        ? (0, r.jsx)(x.Text, {
                              className: ea.headerDescription,
                              variant: 'text-md/normal',
                              color: tt ? 'text-secondary' : 'text-normal',
                              children: td
                          })
                        : null
                ]
            })
        }),
        tf = i.useCallback(() => {
            eW && (0, Y.t)(), eB(2);
        }, [eW]),
        tm = (function (e, t, n, r) {
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
        })(eG, F, ee, eU),
        th = 1 !== eG && (3 !== eG || (null == eV && null == eS && null == eZ) || null == e9),
        tx = i.useCallback(() => {
            null != tm && eB(tm);
        }, [tm]),
        tp = (0, r.jsxs)(x.MyZ, {
            springConfig: ed(ec({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eG,
            width: 480,
            children: [
                (0, r.jsx)(x.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(q.Z, { onSelectGuild: to })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: eW
                            ? (0, r.jsx)(Q.se, { onSourceSelect: ta })
                            : (0, r.jsx)(Q.oA, {
                                  selectedSource: eV,
                                  onChangeSelectedSource: ta
                              })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(K.Z, {
                            selectedChannelId: null != (E = null == eb ? void 0 : eb.id) ? E : eF,
                            selectedPreset: eK,
                            selectedResolution: eQ,
                            selectedSource: eV,
                            selectedFPS: e1,
                            sound: e2,
                            previewDisabled: e3,
                            sourceChanged: eU,
                            selectSource: ee,
                            onChangeSelectedFPS: (e) => ti(eK, eQ, e),
                            onChangeSelectedResolution: (e) => ti(eK, e, e1),
                            onChangeSelectedPreset: (e) => ti(e, eQ, e1),
                            onChangeSelectedChannelId: eH,
                            onChangeSelectedSource: ta,
                            onChangeSource: () => tf(),
                            onChangeAudioDevice: (e) => eX(e),
                            onChangeGuild: () => eB(0),
                            onChangeSound: (e) => e5(e),
                            onChangePreviewDisabled: (e) => e4(e),
                            onClose: eh,
                            selectedGuildId: e8,
                            targetGuildPremiumTier: eT,
                            selectGuild: F
                        })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(Q.Hu, {
                            onSourceSelect: tr,
                            onCancel: tx,
                            pickerType: e6
                        })
                    })
                })
            ]
        }),
        tg = 1 === eG || (ek && 3 === eG) ? es.NW.string(es.t.FiBjwc) : eW && (3 !== eG || null != e6) ? es.NW.string(es.t.PDTjLC) : es.NW.string(es.t['UE/rPz']),
        t_ = tt
            ? (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  direction: y.Z.Direction.HORIZONTAL,
                  justify: null == tm ? y.Z.Justify.END : y.Z.Justify.BETWEEN,
                  children: [
                      null != tm
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(x.zxk, {
                                    size: x.zxk.Sizes.SMALL,
                                    color: x.Ttl.PRIMARY,
                                    onClick: tx,
                                    children: es.NW.string(es.t['13/7kZ'])
                                })
                            })
                          : null,
                      (0, r.jsxs)('div', {
                          className: ea.buttonContainer,
                          children: [
                              (0, r.jsx)(x.zxk, {
                                  type: 'submit',
                                  size: x.zxk.Sizes.SMALL,
                                  disabled: th,
                                  autoFocus: !0,
                                  children: tg
                              }),
                              (0, r.jsx)(x.zxk, {
                                  className: ea.cancelButton,
                                  look: x.zxk.Looks.LINK,
                                  size: x.zxk.Sizes.SMALL,
                                  color: x.Ttl.PRIMARY,
                                  onClick: eh,
                                  children: es.NW.string(es.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  justify: null == tm ? y.Z.Justify.START : y.Z.Justify.BETWEEN,
                  children: [
                      (0, r.jsx)(x.zxk, {
                          type: 'submit',
                          size: x.zxk.Sizes.SMALL,
                          disabled: th,
                          autoFocus: !0,
                          children: tg
                      }),
                      null == tm
                          ? (0, r.jsx)(x.zxk, {
                                className: ea.cancelButton,
                                look: x.zxk.Looks.LINK,
                                size: x.zxk.Sizes.SMALL,
                                color: x.Ttl.PRIMARY,
                                onClick: eh,
                                children: es.NW.string(es.t['ETE/oK'])
                            })
                          : (0, r.jsx)(x.zxk, {
                                size: x.zxk.Sizes.SMALL,
                                color: x.Ttl.PRIMARY,
                                onClick: tx,
                                children: es.NW.string(es.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(_.Z, {
        page: er.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(x.Y0X, {
            'aria-labelledby': eD,
            transitionState: ex,
            size: x.CgR.DYNAMIC,
            className: s()(ea.modalSize, ea.border),
            children: [
                tt
                    ? (0, r.jsxs)('div', {
                          className: ea.container,
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: eh,
                                  className: ea.modalCloseButton
                              }),
                              (0, r.jsx)('div', {
                                  className: ea.artContainer,
                                  children: (0, r.jsx)('img', {
                                      className: ea.refreshedArt,
                                      alt: '',
                                      src: eo
                                  })
                              }),
                              (0, r.jsx)('div', { children: tu })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: eh,
                                  className: ea.modalCloseButton
                              }),
                              (0, r.jsx)('div', { className: ea.art })
                          ]
                      }),
                (0, r.jsx)(x.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eM,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eu, {
                            visibleContent: eM,
                            markAsDismissed: eL
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: ts,
                            children: [!tt && tu, tp, t_]
                        })
                })
            ]
        })
    });
}
function em(e) {
    let { showRefreshedGoLiveModal: t } = (0, F.a)({ location: e.analyticsLocation }),
        n = (0, m.e7)([O.ZP], () => (null != e.sourcePID ? O.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              ee.Z,
              ed(ec({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(ef, ec({}, e));
}
