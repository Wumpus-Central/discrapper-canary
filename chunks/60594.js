n.d(t, { default: () => em }), n(388685), n(539854), n(35282);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    c = n(272573),
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
    y = n(835473),
    Z = n(600164),
    I = n(313201),
    w = n(540059),
    O = n(243778),
    N = n(594190),
    T = n(751571),
    E = n(970731),
    P = n(695346),
    R = n(361291),
    k = n(592125),
    A = n(430824),
    M = n(131951),
    L = n(944486),
    D = n(594174),
    G = n(449224),
    B = n(626135),
    U = n(63063),
    z = n(358085),
    W = n(998502),
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
    el = n(921944),
    ei = n(761274),
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
              content: es.intl.string(es.t.sFyFJy),
              buttonCTA: es.intl.string(es.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(U.Z.getArticleURL(er.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: es.intl.string(es.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ef(e) {
    var t, i, a, d, E, U;
    let { selectGuild: F = !1, selectSource: ee = !0, guildId: ef, analyticsLocation: em, onClose: eh, transitionState: ex } = e,
        { preset: ep, resolution: eg, fps: e_, soundshareEnabled: ej } = (0, m.cj)([R.Z], () => R.Z.getState()),
        ev = l.useRef(Date.now()),
        eb = (0, m.e7)([L.Z, k.Z], () => k.Z.getChannel(L.Z.getVoiceChannelId())),
        eS = (0, m.e7)([N.ZP, G.Z], () => ((0, z.isWindows)() ? (0, X.Z)(N.ZP, G.Z) : null)),
        eC = (0, m.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        ey = (null == eC ? void 0 : eC.location.kind) === f.E.CONTEXTLESS,
        eZ = (0, y.q)(null == eC ? void 0 : eC.applicationId),
        [eI, ew] = l.useState(null);
    l.useEffect(() => {
        (0, v.R)() &&
            (async () => {
                var e;
                ew(await (null === j.Z || void 0 === j.Z || null == (e = j.Z.window) ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [ey]);
    let eO = (0, m.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eN = null != (t = null == eb ? void 0 : eb.getGuildId()) ? t : ef,
        eT = (0, m.e7)([A.Z], () => {
            var e;
            return null != eN ? (null == (e = A.Z.getGuild(eN)) ? void 0 : e.premiumTier) : null;
        }),
        [eE, eP] = null != (i = (0, V.Z)(ep, eO, eT)) ? i : [en.LY.RESOLUTION_720, en.ws.FPS_30],
        { lastPickerAction: eR } = (0, m.e7)([J.ZP], () => J.ZP.getPickerState()),
        ek = M.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let eA = ek && (0, z.isMac)() && u().satisfies(null === j.Z || void 0 === j.Z ? void 0 : j.Z.os.release, et.jR),
        eM = [];
    ex === x.Dvm.ENTERED && ek && (0, z.isMac)() && eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eL, eD] = (0, O.US)(eM, void 0, !0);
    ep !== en.tI.PRESET_CUSTOM && ((eg = eE), (e_ = eP)), (0, H.Z)(ep, eg, e_, eO, eT) || ((eg = eE), (e_ = eP));
    let eG = (0, I.Dt)(),
        [eB, eU] = l.useState(((U = ee && !eA), F ? 0 : U ? 2 : 3)),
        [ez, eW] = l.useState(eA),
        [eF, eH] = l.useState(null),
        [eV, eY] = l.useState(
            eA
                ? {
                      id: 'prepicked:',
                      name: es.intl.string(es.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eJ, eX] = l.useState(null),
        [eK, eq] = l.useState(ep),
        [eQ, e$] = l.useState(eg),
        [e1, e0] = l.useState(e_),
        [e2, e5] = l.useState(ej),
        [e3, e4] = l.useState(null != (a = P.I0.getSetting()) && a),
        [e8, e7] = l.useState(null != ef ? ef : null),
        e9 = null != (d = null == eb ? void 0 : eb.id) ? d : eF,
        [e6, te] = l.useState(eA ? '' : void 0),
        tt = (0, w.Q3)('GoLiveModal');
    async function tn() {
        var e, t;
        o()(null != eS || null != eV || (null != eC && null != eI), 'got nothing to stream');
        let n = null != (e = null == eb ? void 0 : eb.id) ? e : eF;
        o()(null != n, 'Received null target channel ID');
        let r = k.Z.getChannel(n),
            l = null != (t = null == r ? void 0 : r.getGuildId()) ? t : ef;
        if (null == eb && !(await (0, S.Z)({ channelId: n }))) return;
        let i = eK,
            s = eQ,
            a = e1;
        (0, H.Z)(i, s, a, eO, eT, r) || ((i = en.tI.PRESET_VIDEO), (s = en.LY.RESOLUTION_720), (a = en.ws.FPS_30)),
            (0, g.Rc)({
                preset: i,
                resolution: s,
                frameRate: a,
                soundshareEnabled: e2
            });
        let c = {};
        if (null == eV ? void 0 : eV.id.startsWith('prepicked:')) c = J.ZP.getStreamStartOptions();
        else {
            let e = (0, $.Z)(eS, eV, N.ZP.getRunningGames()),
                t = !(0, z.isWindows)() || null == e || (null == eV ? void 0 : eV.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && (null != eV ? ((c.sourceId = eV.id), (c.sourceName = eV.name)) : null != eI && ((c.sourceId = eI), (c.sourceName = null == eZ ? void 0 : eZ.name)));
        }
        (0, g.WH)(
            l,
            n,
            ed(ec({}, c), {
                audioSourceId: eJ,
                sound: e2,
                previewDisabled: e3,
                nativePickerStyleUsed: e6,
                goLiveModalDurationMs: Date.now() - ev.current
            })
        ),
            null != eL && eD(el.L.AUTO_DISMISS),
            ek ||
                (async () => {
                    (await T.Z.hasPermission(ei.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: es.intl.string(es.t['X+mXen']),
                            body: es.intl.string(es.t.MIJCzs)
                        });
                })();
    }
    function tr() {
        tn(), eh();
    }
    l.useEffect(() => {
        let e = (0, z.isWindows)() ? (0, X.Z)(N.ZP, G.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        B.default.track(er.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: em
        });
    }, [em]);
    let tl = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, V.Z)(e, eO, eT),
                    [i, s] = null != l ? l : [t, n];
                e !== eK && ((t = i), (n = s));
                let a = null != (r = null == eb ? void 0 : eb.id) ? r : eF;
                o()(null != a, 'Received null target channel ID');
                let c = k.Z.getChannel(a);
                if (!(0, H.Z)(e, t, n, eO, eT, c)) {
                    let [e, r] = (0, V.Z)(en.tI.PRESET_VIDEO, eO, eT);
                    (t = e), (n = r);
                }
                n !== e1 && e0(n), t !== eQ && e$(t), i !== t || s !== n ? eq(en.tI.PRESET_CUSTOM) : e !== eK && eq(e);
            },
            [eb, eF, eO, eT, e1, eQ, eK]
        ),
        ti = l.useCallback(
            (e) => {
                (0, Y.t)(), (0, Y.T)(null != e ? e : e6);
            },
            [e6]
        );
    function ts(e) {
        if ((e.preventDefault(), 1 === eB)) return ti();
        if (2 === eB) return eU(3);
        if (null != e6) return eU(1);
        let t = (0, $.Z)(eS, eV, N.ZP.getRunningGames());
        if (W.ZP.supportsFeature(er.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var l;
            let e = null != (l = null == eS ? void 0 : eS.pid) ? l : null;
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
    let ta = l.useCallback(
            (e) => {
                eY(e), null != e && (ek && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? te(e.id.split(':')[1]) : te(void 0), eU(3), eW(!0));
            },
            [ek]
        ),
        to = l.useCallback(
            (e) => {
                e7(e);
                var t = 3;
                eU(ee ? 2 : 3);
            },
            [ee]
        ),
        tc = !(1 === eB && ek && eR === J.Uc.Error),
        td = (function (e) {
            switch (e) {
                case 2:
                    return es.intl.string(es.t['aC4/Zm']);
                case 1:
                    return es.intl.formatToPlainString(es.t.sbbPhY, { buttonName: es.intl.string(es.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return es.intl.string(es.t['1hKIam']);
            }
        })(eB),
        tu = (0, r.jsx)(x.xBx, {
            className: ea.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(Z.Z, {
                direction: Z.Z.Direction.VERTICAL,
                align: Z.Z.Align.CENTER,
                className: ea.header,
                children: [
                    (0, r.jsx)(x.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eG,
                        className: ea.headerText,
                        children: es.intl.string(es.t.RDkJQ0)
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
        tf = l.useCallback(() => {
            ek && (0, Y.t)(), eU(2);
        }, [ek]),
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
        })(eB, F, ee, ez),
        th = 1 !== eB && (3 !== eB || (null == eV && null == eS && null == eI) || null == e9),
        tx = l.useCallback(() => {
            null != tm && eU(tm);
        }, [tm]),
        tp = (0, r.jsxs)(x.MyZ, {
            springConfig: ed(ec({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eB,
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
                        children: ek
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
                            sourceChanged: ez,
                            selectSource: ee,
                            onChangeSelectedFPS: (e) => tl(eK, eQ, e),
                            onChangeSelectedResolution: (e) => tl(eK, e, e1),
                            onChangeSelectedPreset: (e) => tl(e, eQ, e1),
                            onChangeSelectedChannelId: eH,
                            onChangeSelectedSource: ta,
                            onChangeSource: () => tf(),
                            onChangeAudioDevice: (e) => eX(e),
                            onChangeGuild: () => eU(0),
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
        tg = 1 === eB || (eA && 3 === eB) ? es.intl.string(es.t.FiBjwc) : ek && (3 !== eB || null != e6) ? es.intl.string(es.t.PDTjLC) : es.intl.string(es.t['UE/rPz']),
        t_ = tt
            ? (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  direction: Z.Z.Direction.HORIZONTAL,
                  justify: null == tm ? Z.Z.Justify.END : Z.Z.Justify.BETWEEN,
                  children: [
                      null != tm
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(x.zxk, {
                                    size: x.zxk.Sizes.SMALL,
                                    color: x.Ttl.PRIMARY,
                                    onClick: tx,
                                    children: es.intl.string(es.t['13/7kZ'])
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
                                  children: es.intl.string(es.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)(x.mzw, {
                  className: ea.modalFooter,
                  justify: null == tm ? Z.Z.Justify.START : Z.Z.Justify.BETWEEN,
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
                                children: es.intl.string(es.t['ETE/oK'])
                            })
                          : (0, r.jsx)(x.zxk, {
                                size: x.zxk.Sizes.SMALL,
                                color: x.Ttl.PRIMARY,
                                onClick: tx,
                                children: es.intl.string(es.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(_.Z, {
        page: er.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(x.Y0X, {
            'aria-labelledby': eG,
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
                    shouldShow: null != eL,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eu, {
                            visibleContent: eL,
                            markAsDismissed: eD
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
        n = (0, m.e7)([N.ZP], () => (null != e.sourcePID ? N.ZP.getGameForPID(e.sourcePID) : void 0));
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
