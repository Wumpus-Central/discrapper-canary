n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    l = n(192379),
    s = n(209739),
    i = n.n(s),
    a = n(435935),
    o = n(268146),
    c = n(442837),
    u = n(481060),
    d = n(668781),
    m = n(872810),
    p = n(579806),
    h = n(89425),
    g = n(100527),
    x = n(906732),
    f = n(594190),
    v = n(751571),
    j = n(695346),
    S = n(592125),
    N = n(430824),
    Z = n(131951),
    b = n(944486),
    O = n(594174),
    y = n(358085),
    C = n(74538),
    P = n(451467),
    E = n(537413),
    T = n(299570),
    I = n(143135),
    w = n(560749),
    _ = n(615161),
    R = n(289989),
    W = n(328242),
    A = n(565574),
    k = n(51708),
    L = n(934192),
    D = n(70722),
    M = n(37113),
    z = n(761274),
    U = n(388032),
    G = n(115427);
function F(e) {
    let { onClose: t, transitionState: n, sourceApplication: s } = e,
        { state: F, dispatch: V } = (0, _.Ti)(s),
        Y = (0, c.e7)([Z.Z], () => Z.Z.getUseSystemScreensharePicker() && (0, y.isMac)() && i().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, D.jR)),
        B = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        J = !C.ZP.canStreamQuality(C.ZP.StreamQuality.HIGH, B),
        { analyticsLocations: X } = (0, x.ZP)(g.Z.GO_LIVE_MODAL_V2),
        H = l.useMemo(() => {
            let e = [
                {
                    name: U.NW.string(U.t.tHoi7u),
                    value: o.vA.WINDOW,
                    icon: u.GON
                },
                {
                    name: U.NW.string(U.t.MhJ43N),
                    value: o.vA.CAMERA,
                    icon: u.Odl
                }
            ];
            return (
                Y ||
                    e.splice(1, 0, {
                        name: U.NW.string(U.t.slM8rK),
                        value: o.vA.SCREEN,
                        icon: u.pzj
                    }),
                e
            );
        }, [Y]),
        { sourceType: K } = F;
    async function q(e) {
        (await (0, h.Z)({ channelId: e })) && null != F.sourceApplication && Q(F.sourceApplication);
    }
    function Q(e) {
        var n, r, l, s, i;
        let a = b.Z.getVoiceChannelId();
        if (null == a) return;
        let c = S.Z.getChannel(a),
            u = null == c ? void 0 : c.getGuildId(),
            p = null === (n = N.Z.getGuild(u)) || void 0 === n ? void 0 : n.premiumTier,
            h = F.preset,
            [g, x] = null !== (r = (0, E.Z)(F.preset, B, p)) && void 0 !== r ? r : [],
            Z = null != g ? g : F.resolution,
            O = null != x ? x : F.fps;
        (0, P.Z)(h, Z, O, B, p, c) || ((h = M.tI.PRESET_VIDEO), (Z = M.LY.RESOLUTION_720), (O = M.ws.FPS_30)),
            (0, m.Rc)({
                preset: h,
                resolution: Z,
                frameRate: O,
                soundshareEnabled: !F.muteStreamAudio
            }),
            (0, m.WH)(
                u,
                a,
                ((s = (function (e) {
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
                        let t = (0, I.Z)(void 0, e, f.ZP.getRunningGames()),
                            n = !(0, y.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(o.vA.CAMERA)) || null == t ? null : t.pid;
                        return null != n
                            ? { pid: n }
                            : {
                                  sourceId: e.id,
                                  sourceName: e.name,
                                  sourceIcon: e.icon
                              };
                    })(e)
                )),
                (i = i =
                    {
                        sound: !F.muteStreamAudio,
                        previewDisabled: null !== (l = j.I0.getSetting()) && void 0 !== l && l,
                        nativePickerStyleUsed: Y ? '' : void 0
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                s)
            ),
            Y ||
                (async () => {
                    (await v.Z.hasPermission(z.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        d.Z.show({
                            title: U.NW.string(U.t['X+mXen']),
                            body: U.NW.string(U.t.MIJCzs)
                        });
                })(),
            t();
    }
    return (0, r.jsx)(_.Yw, {
        state: F,
        dispatch: V,
        children: (0, r.jsxs)(u.Y0X, {
            className: G.root,
            size: u.CgR.LARGE,
            transitionState: n,
            children: [
                null != F.sourceApplication
                    ? (0, r.jsx)(w.Z, { onSelectChannel: q })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.xBx, {
                                  separator: !1,
                                  className: G.header,
                                  children: (0, r.jsx)(u.sY7, {
                                      className: G.segmentedControl,
                                      value: K,
                                      look: 'pill',
                                      onChange: (e) => {
                                          let { value: t } = e;
                                          return V({
                                              type: 'set_source_type',
                                              sourceType: t
                                          });
                                      },
                                      options: H
                                  })
                              }),
                              (0, r.jsx)(u.hzk, {
                                  className: G.content,
                                  children:
                                      Y && K !== o.vA.CAMERA
                                          ? (0, r.jsx)(R.Z, {
                                                onSourceSelect: function () {
                                                    Q({
                                                        id: 'prepicked:',
                                                        name: U.NW.string(U.t['KKcy9/']),
                                                        url: ''
                                                    });
                                                }
                                            })
                                          : (0, r.jsx)(W.Z, { onClick: Q })
                              })
                          ]
                      }),
                J && (0, r.jsx)(k.Z, { onClose: t }),
                (0, r.jsxs)(u.mzw, {
                    className: G.footer,
                    separator: !1,
                    justify: a.k.Justify.BETWEEN,
                    align: a.k.Align.CENTER,
                    direction: a.k.Direction.HORIZONTAL,
                    children: [
                        (0, r.jsx)(L.Z, { onClose: t }),
                        (0, r.jsxs)('div', {
                            className: G.rightButtonGroup,
                            children: [
                                Y &&
                                    K !== o.vA.CAMERA &&
                                    (0, r.jsx)(u.zxk, {
                                        size: u.zxk.Sizes.LARGE,
                                        onClick: () => {
                                            (0, T.t)(), (0, T.T)('');
                                        },
                                        children: U.NW.string(U.t.FiBjwc)
                                    }),
                                (0, r.jsx)(A.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
