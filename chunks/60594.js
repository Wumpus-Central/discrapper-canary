(n.d(t, { default: () => ea }), n(388685), n(539854), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(71347),
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
    b = n(600164),
    S = n(313201),
    C = n(243778),
    y = n(594190),
    O = n(751571),
    Z = n(970731),
    w = n(695346),
    I = n(361291),
    N = n(592125),
    T = n(430824),
    E = n(131951),
    P = n(944486),
    R = n(594174),
    A = n(449224),
    k = n(626135),
    M = n(63063),
    L = n(358085),
    D = n(998502),
    B = n(668519),
    U = n(451467),
    G = n(537413),
    W = n(299570),
    F = n(960861),
    z = n(989941),
    H = n(399299),
    V = n(351152),
    Y = n(567126),
    X = n(143135),
    J = n(717298),
    K = n(70722),
    q = n(37113),
    Q = n(981631),
    $ = n(921944),
    ee = n(761274),
    et = n(388032),
    en = n(347226),
    er = n(402163);
function ei(e) {
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
function el(e, t) {
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
let es = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(Z.ZP, {
              content: et.intl.string(et.t.sFyFJy),
              buttonCTA: et.intl.string(et.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(M.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: et.intl.string(et.t.hvVgAQ),
              caretPosition: Z.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function eo(e) {
    var t, l, o, d, Z;
    let { selectGuild: M = !1, selectSource: B = !0, guildId: J, analyticsLocation: eo, onClose: ea, transitionState: ec } = e,
        { preset: ed, resolution: eu, fps: ef, soundshareEnabled: em } = (0, f.cj)([I.Z], () => I.Z.getState()),
        eh = i.useRef(null),
        ep = i.useRef(Date.now()),
        ex = (0, f.e7)([P.Z, N.Z], () => N.Z.getChannel(P.Z.getVoiceChannelId())),
        eg = (0, f.e7)([y.ZP, A.Z], () => ((0, L.isWindows)() ? (0, z.Z)(y.ZP, A.Z) : null)),
        e_ = (0, f.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return (a()(null != e, 'GoLiveModal: user cannot be undefined'), e);
        }),
        ev = null != (t = null == ex ? void 0 : ex.getGuildId()) ? t : J,
        ej = (0, f.e7)([T.Z], () => {
            var e;
            return null != ev ? (null == (e = T.Z.getGuild(ev)) ? void 0 : e.premiumTier) : null;
        }),
        [eb, eS] = null != (l = (0, G.Z)(ed, e_, ej)) ? l : [q.LY.RESOLUTION_720, q.ws.FPS_30],
        { lastPickerAction: eC } = (0, f.e7)([F.ZP], () => F.ZP.getPickerState()),
        ey = E.Z.getUseSystemScreensharePicker();
    (0, F.UB)();
    let eO = ey && (0, L.isMac)() && u().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, K.jR),
        eZ = [];
    ec === h.Dvm.ENTERED && ey && (0, L.isMac)() && eZ.push(m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [ew, eI] = (0, C.US)(eZ, void 0, !0);
    (ed !== q.tI.PRESET_CUSTOM && ((eu = eb), (ef = eS)), (0, U.Z)(ed, eu, ef, e_, ej) || ((eu = eb), (ef = eS)));
    let eN = (0, S.Dt)(),
        [eT, eE] = i.useState(((Z = B && !eO), M ? 0 : Z ? 2 : 3)),
        [eP, eR] = i.useState(eO),
        [eA, ek] = i.useState(null),
        [eM, eL] = i.useState(
            eO
                ? {
                      id: 'prepicked:',
                      name: et.intl.string(et.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eD, eB] = i.useState(null),
        [eU, eG] = i.useState(ed),
        [eW, eF] = i.useState(eu),
        [ez, eH] = i.useState(ef),
        [eV, eY] = i.useState(em),
        [eX, eJ] = i.useState(null != (o = w.I0.getSetting()) && o),
        [eK, eq] = i.useState(null != J ? J : null),
        eQ = null != (d = null == ex ? void 0 : ex.id) ? d : eA,
        [e$, e1] = i.useState(eO ? '' : void 0);
    async function e0() {
        var e, t;
        a()(null != eg || null != eM, 'got nothing to stream');
        let n = null != (e = null == ex ? void 0 : ex.id) ? e : eA;
        a()(null != n, 'Received null target channel ID');
        let r = N.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : J;
        if (null == ex && !(await (0, v.Z)({ channelId: n }))) return;
        let l = eU,
            s = eW,
            o = ez;
        ((0, U.Z)(l, s, o, e_, ej, r) || ((l = q.tI.PRESET_VIDEO), (s = q.LY.RESOLUTION_720), (o = q.ws.FPS_30)),
            (0, x.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: eV
            }));
        let c = {};
        if (null == eM ? void 0 : eM.id.startsWith('prepicked:')) c = F.ZP.getStreamStartOptions();
        else {
            let e = (0, X.Z)(eg, eM, y.ZP.getRunningGames()),
                t = !(0, L.isWindows)() || null == e || (null == eM ? void 0 : eM.id.startsWith('camera:'));
            ((c.pid = t || null == e ? void 0 : e.pid), null == c.pid && null != eM && ((c.sourceId = eM.id), (c.sourceName = eM.name)));
        }
        ((0, x.WH)(
            i,
            n,
            el(ei({}, c), {
                audioSourceId: eD,
                sound: eV,
                previewDisabled: eX,
                nativePickerStyleUsed: e$,
                goLiveModalDurationMs: Date.now() - ep.current
            })
        ),
            null != ew && eI($.L.AUTO_DISMISS),
            ey ||
                (async () => {
                    (await O.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: et.intl.string(et.t['X+mXen']),
                            body: et.intl.string(et.t.MIJCzs)
                        });
                })());
    }
    function e2() {
        (e0(), ea());
    }
    i.useEffect(() => {
        let e = (0, L.isWindows)() ? (0, z.Z)(y.ZP, A.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
        k.default.track(Q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eo
        });
    }, [eo]);
    let e5 = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, G.Z)(e, e_, ej),
                    [l, s] = null != i ? i : [t, n];
                e !== eU && ((t = l), (n = s));
                let o = null != (r = null == ex ? void 0 : ex.id) ? r : eA;
                a()(null != o, 'Received null target channel ID');
                let c = N.Z.getChannel(o);
                if (!(0, U.Z)(e, t, n, e_, ej, c)) {
                    let [e, r] = (0, G.Z)(q.tI.PRESET_VIDEO, e_, ej);
                    ((t = e), (n = r));
                }
                (n !== ez && eH(n), t !== eW && eF(t), l !== t || s !== n ? eG(q.tI.PRESET_CUSTOM) : e !== eU && eG(e));
            },
            [ex, eA, e_, ej, ez, eW, eU]
        ),
        e3 = i.useCallback(
            (e) => {
                ((0, W.t)(), (0, W.T)(null != e ? e : e$));
            },
            [e$]
        );
    function e7(e) {
        if ((e.preventDefault(), 1 === eT)) return e3();
        if (2 === eT) return eE(3);
        if (null != e$) return eE(1);
        let t = (0, X.Z)(eg, eM, y.ZP.getRunningGames());
        if (D.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == eg ? void 0 : eg.pid) ? i : null;
            (0, h.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        el(ei({}, n), {
                            handleStream: e2,
                            pid: e
                        })
                    );
            });
        } else e2();
    }
    let e4 = i.useCallback(
            (e) => {
                (eL(e), null != e && (ey && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e1(e.id.split(':')[1]) : e1(void 0), eE(3), eR(!0)));
            },
            [ey]
        ),
        e8 = i.useCallback(
            (e) => {
                eq(e);
                var t = 3;
                eE(B ? 2 : 3);
            },
            [B]
        ),
        e6 = !(1 === eT && ey && eC === F.Uc.Error),
        e9 = (function (e) {
            switch (e) {
                case 2:
                    return et.intl.string(et.t['aC4/Zm']);
                case 1:
                    return et.intl.formatToPlainString(et.t.sbbPhY, { buttonName: et.intl.string(et.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return et.intl.string(et.t['1hKIam']);
            }
        })(eT),
        te = (0, r.jsx)(h.xBx, {
            className: en.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                align: b.Z.Align.CENTER,
                className: en.header,
                children: [
                    (0, r.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eN,
                        className: en.headerText,
                        children: et.intl.string(et.t.RDkJQ0)
                    }),
                    e6 && null != e9
                        ? (0, r.jsx)(h.Text, {
                              className: en.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: e9
                          })
                        : null
                ]
            })
        }),
        tt = i.useCallback(() => {
            (ey && (0, W.t)(), eE(2));
        }, [ey]),
        tn = (function (e, t, n, r) {
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
        })(eT, M, B, eP),
        tr = 1 !== eT && (3 !== eT || (null == eM && null == eg) || null == eQ),
        ti = i.useCallback(() => {
            null != tn && eE(tn);
        }, [tn]),
        tl = 1 === eT || (eO && 3 === eT) ? et.intl.string(et.t.FiBjwc) : ey && (3 !== eT || null != e$) ? et.intl.string(et.t.PDTjLC) : et.intl.string(et.t['UE/rPz']),
        ts = (0, r.jsxs)(h.mzw, {
            className: en.modalFooter,
            direction: b.Z.Direction.HORIZONTAL,
            justify: null == tn ? b.Z.Justify.END : b.Z.Justify.BETWEEN,
            children: [
                null != tn
                    ? (0, r.jsx)('div', {
                          children: (0, r.jsx)(h.zxk, {
                              variant: 'secondary',
                              size: 'sm',
                              text: et.intl.string(et.t['13/7kZ']),
                              onClick: ti
                          })
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: en.buttonContainer,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: tl,
                            type: 'submit',
                            disabled: tr,
                            autoFocus: !0
                        }),
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: en.cancelButton,
                            children: (0, r.jsx)(h.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: et.intl.string(et.t['ETE/oK']),
                                onClick: ea
                            })
                        })
                    ]
                })
            ]
        });
    return (0, r.jsx)(g.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(h.Y0X, {
            'aria-labelledby': eN,
            transitionState: ec,
            size: h.CgR.DYNAMIC,
            className: s()(en.modalSize, en.border),
            parentComponent: 'GoLiveModal',
            children: [
                (0, r.jsxs)('div', {
                    className: en.container,
                    children: [
                        (0, r.jsx)(h.olH, {
                            onClick: ea,
                            className: en.modalCloseButton
                        }),
                        (0, r.jsx)('div', {
                            className: en.artContainer,
                            children: (0, r.jsx)('img', {
                                className: en.refreshedArt,
                                alt: '',
                                src: er
                            })
                        }),
                        (0, r.jsx)('div', { children: te })
                    ]
                }),
                (0, r.jsx)(h.yRy, {
                    targetElementRef: eh,
                    position: 'right',
                    align: 'center',
                    shouldShow: null != ew,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(es, {
                            visibleContent: ew,
                            markAsDismissed: eI
                        }),
                    children: () => {
                        var e;
                        return (0, r.jsxs)('form', {
                            onSubmit: e7,
                            ref: eh,
                            children: [
                                (0, r.jsxs)(h.MyZ, {
                                    springConfig: el(ei({}, c.config.stiff), { clamp: !0 }),
                                    activeSlide: eT,
                                    width: 480,
                                    children: [
                                        (0, r.jsx)(h.Mi4, {
                                            id: 0,
                                            children: (0, r.jsx)('div', {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(V.Z, { onSelectGuild: e8 })
                                            })
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 2,
                                            children: (0, r.jsx)('div', {
                                                className: en.modalSize,
                                                children: ey
                                                    ? (0, r.jsx)(Y.se, { onSourceSelect: e4 })
                                                    : (0, r.jsx)(Y.oA, {
                                                          selectedSource: eM,
                                                          onChangeSelectedSource: e4
                                                      })
                                            })
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 3,
                                            children: (0, r.jsx)('div', {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(H.Z, {
                                                    selectedChannelId: null != (e = null == ex ? void 0 : ex.id) ? e : eA,
                                                    selectedPreset: eU,
                                                    selectedResolution: eW,
                                                    selectedSource: eM,
                                                    selectedFPS: ez,
                                                    sound: eV,
                                                    previewDisabled: eX,
                                                    sourceChanged: eP,
                                                    selectSource: B,
                                                    onChangeSelectedFPS: (e) => e5(eU, eW, e),
                                                    onChangeSelectedResolution: (e) => e5(eU, e, ez),
                                                    onChangeSelectedPreset: (e) => e5(e, eW, ez),
                                                    onChangeSelectedChannelId: ek,
                                                    onChangeSelectedSource: e4,
                                                    onChangeSource: () => tt(),
                                                    onChangeAudioDevice: (e) => eB(e),
                                                    onChangeGuild: () => eE(0),
                                                    onChangeSound: (e) => eY(e),
                                                    onChangePreviewDisabled: (e) => eJ(e),
                                                    onClose: ea,
                                                    selectedGuildId: eK,
                                                    targetGuildPremiumTier: ej,
                                                    selectGuild: M
                                                })
                                            })
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 1,
                                            children: (0, r.jsx)('div', {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(Y.Hu, {
                                                    onSourceSelect: e2,
                                                    onCancel: ti,
                                                    pickerType: e$
                                                })
                                            })
                                        })
                                    ]
                                }),
                                ts
                            ]
                        });
                    }
                })
            ]
        })
    });
}
function ea(e) {
    let { showRefreshedGoLiveModal: t } = (0, B.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([y.ZP], () => (null != e.sourcePID ? y.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              J.Z,
              el(ei({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(eo, ei({}, e));
}
