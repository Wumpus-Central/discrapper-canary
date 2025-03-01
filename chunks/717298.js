n.d(t, { Z: () => J }), n(47120);
var r = n(200651),
    l = n(192379),
    s = n(209739),
    i = n.n(s),
    a = n(990547),
    o = n(435935),
    c = n(268146),
    u = n(442837),
    d = n(481060),
    m = n(668781),
    p = n(872810),
    h = n(579806),
    g = n(89425),
    x = n(100527),
    v = n(906732),
    f = n(594190),
    j = n(751571),
    S = n(695346),
    N = n(592125),
    Z = n(430824),
    O = n(131951),
    b = n(19780),
    y = n(944486),
    P = n(594174),
    C = n(449224),
    E = n(358085),
    I = n(74538),
    T = n(451467),
    w = n(537413),
    _ = n(299570),
    R = n(989941),
    W = n(143135),
    A = n(560749),
    k = n(615161),
    L = n(289989),
    D = n(328242),
    M = n(565574),
    z = n(51708),
    U = n(934192),
    G = n(70722),
    F = n(37113),
    V = n(761274),
    Y = n(388032),
    B = n(312253);
function J(e) {
    var t;
    let { onClose: n, transitionState: s, sourceApplication: J } = e,
        X = l.useRef(performance.now()),
        { state: H, dispatch: K } = (0, k.Ti)(J),
        q = (0, u.e7)([O.Z], () => O.Z.getUseSystemScreensharePicker() && (0, E.isMac)() && i().satisfies(null === h.Z || void 0 === h.Z ? void 0 : h.Z.os.release, G.jR)),
        Q = (0, u.e7)([P.default], () => P.default.getCurrentUser()),
        $ = !I.ZP.canStreamQuality(I.ZP.StreamQuality.HIGH, Q),
        { analyticsLocations: ee } = (0, v.ZP)(x.Z.GO_LIVE_MODAL_V2),
        et = l.useMemo(() => {
            let e = [
                {
                    name: Y.NW.string(Y.t.tHoi7u),
                    value: c.vA.WINDOW,
                    icon: d.GON
                },
                {
                    name: Y.NW.string(Y.t.MhJ43N),
                    value: c.vA.CAMERA,
                    icon: d.Odl
                }
            ];
            return (
                q ||
                    e.splice(1, 0, {
                        name: Y.NW.string(Y.t.slM8rK),
                        value: c.vA.SCREEN,
                        icon: d.pzj
                    }),
                e
            );
        }, [q]),
        { sourceType: en } = H;
    async function er(e) {
        (await (0, g.Z)({ channelId: e })) && null != H.sourceApplication && el(H.sourceApplication);
    }
    function el(e) {
        var t, r, l, s;
        let i = y.Z.getVoiceChannelId();
        if (null == i) return;
        let a = N.Z.getChannel(i),
            o = null == a ? void 0 : a.getGuildId(),
            u = null === (t = Z.Z.getGuild(o)) || void 0 === t ? void 0 : t.premiumTier,
            d = H.preset,
            [h, g] = null !== (r = (0, w.Z)(H.preset, Q, u)) && void 0 !== r ? r : [],
            x = null != h ? h : H.resolution,
            v = null != g ? g : H.fps;
        (0, T.Z)(d, x, v, Q, u, a) || ((d = F.tI.PRESET_VIDEO), (x = F.LY.RESOLUTION_720), (v = F.ws.FPS_30)),
            S.I0.updateSetting(H.hidePreview),
            (0, p.Rc)({
                preset: d,
                resolution: x,
                frameRate: v,
                soundshareEnabled: !H.muteStreamAudio
            }),
            (0, p.WH)(
                o,
                i,
                ((l = (function (e) {
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
                })(
                    {},
                    (function (e) {
                        if (e.hasOwnProperty('pid')) return { pid: e.pid };
                        let t = (0, W.Z)(void 0, e, f.ZP.getRunningGames()),
                            n = !(0, E.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(c.vA.CAMERA)) || null == t ? null : t.pid;
                        return null != n
                            ? { pid: n }
                            : {
                                  sourceId: e.id,
                                  sourceName: e.name,
                                  sourceIcon: e.icon
                              };
                    })(e)
                )),
                (s = s =
                    {
                        sound: !H.muteStreamAudio,
                        previewDisabled: H.hidePreview,
                        nativePickerStyleUsed: q ? '' : void 0,
                        goLiveModalDurationMs: performance.now() - X.current
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l)
            ),
            q ||
                (async () => {
                    (await j.Z.hasPermission(V.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        m.Z.show({
                            title: Y.NW.string(Y.t['X+mXen']),
                            body: Y.NW.string(Y.t.MIJCzs)
                        });
                })(),
            n();
    }
    return (0, r.jsx)(k.Yw, {
        state: H,
        dispatch: K,
        children: (0, r.jsxs)(d.Y0X, {
            impression: {
                impressionName: a.ImpressionNames.GO_LIVE_MODAL,
                impressionProperties: {
                    location_stack: ee,
                    application_id: (0, E.isWindows)() ? (null === (t = (0, R.Z)(f.ZP, C.Z)) || void 0 === t ? void 0 : t.id) : void 0,
                    parent_media_session_id: b.Z.getMediaSessionId()
                }
            },
            className: B.root,
            size: d.CgR.LARGE,
            transitionState: s,
            children: [
                null != H.sourceApplication
                    ? (0, r.jsx)(A.Z, { onSelectChannel: er })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.xBx, {
                                  separator: !1,
                                  className: B.header,
                                  children: (0, r.jsx)(d.sY7, {
                                      className: B.segmentedControl,
                                      value: en,
                                      look: 'pill',
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return K({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: et
                                  })
                              }),
                              (0, r.jsx)(d.hzk, {
                                  className: B.content,
                                  children:
                                      q && en !== c.vA.CAMERA
                                          ? (0, r.jsx)(L.Z, {
                                                onSourceSelect: function () {
                                                    el({
                                                        id: 'prepicked:',
                                                        name: Y.NW.string(Y.t['KKcy9/']),
                                                        url: ''
                                                    });
                                                }
                                            })
                                          : (0, r.jsx)(D.Z, { onClick: el })
                              })
                          ]
                      }),
                $ && (0, r.jsx)(z.Z, { onClose: n }),
                (0, r.jsxs)(d.mzw, {
                    className: B.footer,
                    separator: !1,
                    justify: o.k.Justify.BETWEEN,
                    align: o.k.Align.CENTER,
                    direction: o.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(U.Z, { onClose: n }),
                        (0, r.jsxs)('div', {
                            className: B.rightButtonGroup,
                            children: [
                                q &&
                                    en !== c.vA.CAMERA &&
                                    (0, r.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, _.t)(), (0, _.T)('');
                                        },
                                        children: Y.NW.string(Y.t.FiBjwc)
                                    }),
                                (0, r.jsx)(M.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
