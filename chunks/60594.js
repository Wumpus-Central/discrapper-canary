l.d(n, { default: () => ei }), l(47120), l(653041);
var t = l(200651),
    i = l(192379),
    s = l(512722),
    a = l.n(s),
    r = l(642128),
    o = l(209739),
    u = l.n(o),
    c = l(442837),
    d = l(704215),
    m = l(481060),
    x = l(668781),
    g = l(872810),
    h = l(410575),
    Z = l(579806),
    v = l(636449),
    S = l(317381),
    C = l(89425),
    j = l(812206),
    N = l(835473),
    f = l(600164),
    p = l(313201),
    T = l(243778),
    I = l(594190),
    E = l(998594),
    P = l(751571),
    R = l(970731),
    k = l(695346),
    A = l(361291),
    b = l(592125),
    M = l(430824),
    D = l(131951),
    _ = l(944486),
    L = l(594174),
    z = l(449224),
    w = l(626135),
    U = l(63063),
    y = l(358085),
    G = l(998502),
    O = l(451467),
    W = l(537413),
    F = l(299570),
    J = l(960861),
    B = l(989941),
    V = l(399299),
    X = l(351152),
    Y = l(567126),
    H = l(143135),
    K = l(70722),
    q = l(37113),
    Q = l(981631),
    $ = l(921944),
    ee = l(761274),
    en = l(388032),
    el = l(456963);
let et = (e) => {
    let { visibleContent: n, markAsDismissed: l } = e;
    return n === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, t.jsx)(R.ZP, {
              content: en.intl.string(en.t.sFyFJy),
              buttonCTA: en.intl.string(en.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(U.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: en.intl.string(en.t.hvVgAQ),
              caretPosition: R.DF.LEFT_CENTER,
              markAsDismissed: l
          })
        : null;
};
function ei(e) {
    var n, s, o, R, U, ei;
    let { selectGuild: es = !1, selectSource: ea = !0, guildId: er, analyticsLocation: eo, onClose: eu, transitionState: ec } = e,
        { preset: ed, resolution: em, fps: ex, soundshareEnabled: eg } = (0, c.cj)([A.Z], () => A.Z.getState()),
        eh = i.useRef(Date.now()),
        eZ = (0, c.e7)([_.Z, b.Z], () => b.Z.getChannel(_.Z.getVoiceChannelId())),
        ev = (0, c.e7)([I.ZP, z.Z], () => ((0, y.isWindows)() ? (0, B.Z)(I.ZP, z.Z) : null)),
        eS = (0, c.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        eC = (0, N.q)(null == eS ? void 0 : eS.applicationId),
        [ej, eN] = i.useState(null);
    i.useEffect(() => {
        (0, v.R)() &&
            (async () => {
                var e;
                eN(await (null === Z.Z || void 0 === Z.Z ? void 0 : null === (e = Z.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let ef = (0, c.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ep = null !== (n = null == eZ ? void 0 : eZ.getGuildId()) && void 0 !== n ? n : er,
        eT = (0, c.e7)([M.Z], () => {
            var e;
            return null != ep ? (null === (e = M.Z.getGuild(ep)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eI, eE] = null !== (s = (0, W.Z)(ed, ef, eT)) && void 0 !== s ? s : [q.LY.RESOLUTION_720, q.ws.FPS_30],
        { lastPickerAction: eP } = (0, c.e7)([J.ZP], () => J.ZP.getPickerState()),
        eR = D.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let ek = eR && (0, y.isMac)() && u().satisfies(null === Z.Z || void 0 === Z.Z ? void 0 : Z.Z.os.release, K.jR),
        eA = [];
    ec === m.Dvm.ENTERED && eR && (0, y.isMac)() && eA.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eb, eM] = (0, T.US)(eA, void 0, !0);
    ed !== q.tI.PRESET_CUSTOM && ((em = eI), (ex = eE)), (0, O.Z)(ed, em, ex, ef, eT) || ((em = eI), (ex = eE));
    let eD = (0, p.Dt)(),
        [e_, eL] = i.useState(((ei = ea && !ek), es ? 0 : ei ? 2 : 3)),
        [ez, ew] = i.useState(ek),
        [eU, ey] = i.useState(null),
        [eG, eO] = i.useState(
            ek
                ? {
                      id: 'prepicked:',
                      name: en.intl.string(en.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eW, eF] = i.useState(null),
        [eJ, eB] = i.useState(ed),
        [eV, eX] = i.useState(em),
        [eY, eH] = i.useState(ex),
        [eK, eq] = i.useState(eg),
        [eQ, e$] = i.useState(null !== (o = k.I0.getSetting()) && void 0 !== o && o),
        [e0, e1] = i.useState(null != er ? er : null),
        e3 = null !== (R = null == eZ ? void 0 : eZ.id) && void 0 !== R ? R : eU,
        [e2, e4] = i.useState(ek ? '' : void 0);
    async function e7() {
        var e, n;
        a()(null != ev || null != eG || (null != eS && null != ej), 'got nothing to stream');
        let l = null !== (e = null == eZ ? void 0 : eZ.id) && void 0 !== e ? e : eU;
        a()(null != l, 'Received null target channel ID');
        let t = b.Z.getChannel(l),
            i = null !== (n = null == t ? void 0 : t.getGuildId()) && void 0 !== n ? n : er;
        if (null == eZ && !(await (0, C.Z)({ channelId: l }))) return;
        let s = eJ,
            r = eV,
            o = eY;
        (0, O.Z)(s, r, o, ef, eT, t) || ((s = q.tI.PRESET_VIDEO), (r = q.LY.RESOLUTION_720), (o = q.ws.FPS_30)),
            (0, g.Rc)({
                preset: s,
                resolution: r,
                frameRate: o,
                soundshareEnabled: eK
            });
        let u = (0, H.Z)(ev, eG, I.ZP.getRunningGames()),
            c = !(0, y.isWindows)() || null == u || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == u ? null : u.pid,
            d = null,
            m = null;
        null == c && (null != eG ? ((d = eG.id), (m = eG.name)) : null != ej && ((d = ej), (m = null == eC ? void 0 : eC.name))),
            (0, g.WH)(i, l, {
                pid: c,
                sourceId: d,
                sourceName: m,
                audioSourceId: eW,
                sound: eK,
                previewDisabled: eQ,
                nativePickerStyleUsed: e2,
                goLiveModalDurationMs: Date.now() - eh.current
            }),
            null != eb && eM($.L.AUTO_DISMISS),
            eR ||
                (async () => {
                    (await P.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        x.Z.show({
                            title: en.intl.string(en.t['X+mXen']),
                            body: en.intl.string(en.t.MIJCzs)
                        });
                })();
    }
    function e9() {
        e7(), eu();
    }
    i.useEffect(() => {
        let e = (0, y.isWindows)() ? (0, B.Z)(I.ZP, z.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
        w.default.track(Q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eo
        }),
            E.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eo]);
    let e5 = i.useCallback(
            (e, n, l) => {
                var t;
                let i = (0, W.Z)(e, ef, eT),
                    [s, r] = null != i ? i : [n, l];
                e !== eJ && ((n = s), (l = r));
                let o = null !== (t = null == eZ ? void 0 : eZ.id) && void 0 !== t ? t : eU;
                a()(null != o, 'Received null target channel ID');
                let u = b.Z.getChannel(o);
                if (!(0, O.Z)(e, n, l, ef, eT, u)) {
                    let [e, t] = (0, W.Z)(q.tI.PRESET_VIDEO, ef, eT);
                    (n = e), (l = t);
                }
                l !== eY && eH(l), n !== eV && eX(n), s !== n || r !== l ? eB(q.tI.PRESET_CUSTOM) : e !== eJ && eB(e);
            },
            [eZ, eU, ef, eT, eY, eV, eJ]
        ),
        e6 = i.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : e2);
            },
            [e2]
        );
    function e8(e) {
        if ((e.preventDefault(), 1 === e_)) return e6();
        if (2 === e_) return eL(3);
        if (null != e2) return eL(1);
        let n = (0, H.Z)(ev, eG, I.ZP.getRunningGames());
        G.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated)
            ? (function () {
                  var e;
                  let n = null !== (e = null == ev ? void 0 : ev.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await l.e('74300').then(l.bind(l, 566852));
                      return (l) =>
                          (0, t.jsx)(e, {
                              ...l,
                              handleStream: e9,
                              pid: n
                          });
                  });
              })()
            : e9();
    }
    let ne = i.useCallback(
            (e) => {
                eO(e), null != e && (eR && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e4(e.id.split(':')[1]) : e4(void 0), eL(3), ew(!0));
            },
            [eR]
        ),
        nn = i.useCallback(
            (e) => {
                e1(e);
                var n = 3;
                eL(ea ? 2 : 3);
            },
            [ea]
        ),
        nl = !(1 === e_ && eR && eP === J.Uc.Error),
        nt = (function (e) {
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
        })(e_),
        ni = (0, t.jsx)(m.xBx, {
            className: el.modalHeader,
            separator: !1,
            children: (0, t.jsxs)(f.Z, {
                direction: f.Z.Direction.VERTICAL,
                align: f.Z.Align.CENTER,
                className: el.header,
                children: [
                    (0, t.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eD,
                        className: el.headerText,
                        children: en.intl.string(en.t.RDkJQ0)
                    }),
                    nl && null != nt
                        ? (0, t.jsx)(m.Text, {
                              className: el.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: nt
                          })
                        : null
                ]
            })
        }),
        ns = i.useCallback(() => {
            eR && (0, F.t)(), eL(2);
        }, [eR]),
        na = (function (e, n, l, t) {
            switch (e) {
                case 2:
                    return n ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (t) return 2;
                    if (!l && n) return 0;
                    return null;
                default:
                    return null;
            }
        })(e_, es, ea, ez),
        nr = 1 !== e_ && (3 !== e_ || (null == eG && null == ev && null == ej) || null == e3),
        no = i.useCallback(() => {
            null != na && eL(na);
        }, [na]),
        nu = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(m.MyZ, {
                springConfig: {
                    ...r.config.stiff,
                    clamp: !0
                },
                activeSlide: e_,
                width: 480,
                children: [
                    (0, t.jsx)(m.Mi4, {
                        id: 0,
                        children: (0, t.jsx)('div', {
                            className: el.modalSize,
                            children: (0, t.jsx)(X.Z, { onSelectGuild: nn })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 2,
                        children: (0, t.jsx)('div', {
                            className: el.modalSize,
                            children: eR
                                ? (0, t.jsx)(Y.se, { onSourceSelect: ne })
                                : (0, t.jsx)(Y.oA, {
                                      selectedSource: eG,
                                      onChangeSelectedSource: ne
                                  })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 3,
                        children: (0, t.jsx)('div', {
                            className: el.modalSize,
                            children: (0, t.jsx)(V.Z, {
                                selectedChannelId: null !== (U = null == eZ ? void 0 : eZ.id) && void 0 !== U ? U : eU,
                                selectedPreset: eJ,
                                selectedResolution: eV,
                                selectedSource: eG,
                                selectedFPS: eY,
                                sound: eK,
                                previewDisabled: eQ,
                                sourceChanged: ez,
                                selectSource: ea,
                                onChangeSelectedFPS: (e) => e5(eJ, eV, e),
                                onChangeSelectedResolution: (e) => e5(eJ, e, eY),
                                onChangeSelectedPreset: (e) => e5(e, eV, eY),
                                onChangeSelectedChannelId: ey,
                                onChangeSelectedSource: ne,
                                onChangeSource: () => ns(),
                                onChangeAudioDevice: (e) => eF(e),
                                onChangeGuild: () => eL(0),
                                onChangeSound: (e) => eq(e),
                                onChangePreviewDisabled: (e) => e$(e),
                                onClose: eu,
                                selectedGuildId: e0,
                                targetGuildPremiumTier: eT,
                                selectGuild: es
                            })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 1,
                        children: (0, t.jsx)('div', {
                            className: el.modalSize,
                            children: (0, t.jsx)(Y.Hu, {
                                onSourceSelect: e9,
                                onCancel: no,
                                pickerType: e2
                            })
                        })
                    })
                ]
            })
        }),
        nc = 1 === e_ || (ek && 3 === e_) ? en.intl.string(en.t.FiBjwc) : eR && (3 !== e_ || null != e2) ? en.intl.string(en.t.PDTjLC) : en.intl.string(en.t['UE/rPz']),
        nd = (0, t.jsxs)(m.mzw, {
            justify: null == na ? f.Z.Justify.START : f.Z.Justify.BETWEEN,
            children: [
                (0, t.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: nr,
                    autoFocus: !0,
                    children: nc
                }),
                null == na
                    ? (0, t.jsx)(m.zxk, {
                          className: el.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: eu,
                          children: en.intl.string(en.t['ETE/oK'])
                      })
                    : (0, t.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: no,
                          children: en.intl.string(en.t['13/7kZ'])
                      })
            ]
        });
    return (0, t.jsx)(h.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, t.jsxs)(m.Y0X, {
            'aria-labelledby': eD,
            transitionState: ec,
            size: m.CgR.DYNAMIC,
            className: el.modalSize,
            children: [
                (0, t.jsx)(m.olH, {
                    onClick: eu,
                    className: el.modalCloseButton
                }),
                (0, t.jsx)('div', { className: el.art }),
                (0, t.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eb,
                    spacing: 18,
                    renderPopout: () =>
                        (0, t.jsx)(et, {
                            visibleContent: eb,
                            markAsDismissed: eM
                        }),
                    children: () =>
                        (0, t.jsxs)('form', {
                            onSubmit: e8,
                            children: [ni, nu, nd]
                        })
                })
            ]
        })
    });
}
