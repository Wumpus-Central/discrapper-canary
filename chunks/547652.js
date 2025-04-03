n.d(t, { default: () => j }), n(411104);
var r = n(200651),
    o = n(192379),
    i = n(817080),
    a = n(442837),
    c = n(481060),
    u = n(668781),
    s = n(239091),
    l = n(883385),
    d = n(108843),
    f = n(100527),
    b = n(299206),
    p = n(496675),
    y = n(358085),
    w = n(998502),
    O = n(22382),
    g = n(51078),
    v = n(710111),
    h = n(981631),
    m = n(388032);
let j = (0, d.Z)(
    (0, l.Z)(
        function (e) {
            let { soundGuild: t, sound: l, activeCallGuildId: d, onSelect: f } = e,
                h = (function (e, t) {
                    let { canManageGuildExpressions: i } = (0, a.cj)([p.Z], () => (null == t ? { canManageGuildExpressions: !1 } : p.Z.getGuildPermissionProps(t)), [t]),
                        u = o.useCallback(() => {
                            if ((null == t ? void 0 : t.id) == null) return null;
                            (0, c.ZDy)(async () => {
                                let { default: o } = await Promise.all([n.e('56035'), n.e('34057')]).then(n.bind(n, 758961));
                                return (n) => {
                                    var i, a;
                                    return (0, r.jsx)(
                                        o,
                                        ((i = (function (e) {
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
                                        })({}, n)),
                                        (a = a =
                                            {
                                                existingSound: e,
                                                guildId: t.id
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        i)
                                    );
                                };
                            });
                        }, [t, e]);
                    return i
                        ? (0, r.jsx)(
                              c.sNh,
                              {
                                  id: 'edit-soundboard-sound',
                                  label: m.NW.string(m.t.ponZcH),
                                  action: u
                              },
                              'edit-soundboard-sound'
                          )
                        : null;
                })(l, t),
                j = (function (e) {
                    let { soundId: t } = e,
                        n = o.useCallback(async () => {
                            try {
                                let e = (0, O.Z)(t),
                                    n = await fetch(e),
                                    r = await n.blob(),
                                    o = (function (e) {
                                        switch (e.type) {
                                            case 'audio/mpeg':
                                            case 'audio/mpeg3':
                                                return 'mp3';
                                            case 'audio/ogg':
                                                return 'ogg';
                                            default:
                                                throw Error('unable to determine file type');
                                        }
                                    })(r),
                                    a = ''.concat(t, '.').concat(o);
                                y.isPlatformEmbedded ? await w.ZP.saveFile(e, a) : (0, i.saveAs)(r, a);
                            } catch (e) {
                                u.Z.show({
                                    title: m.NW.string(m.t.mK3tDA),
                                    body: m.NW.string(m.t.jLlfDA),
                                    confirmText: m.NW.string(m.t.BddRzc)
                                });
                            }
                        }, [t]);
                    return e.guildId === v.X8
                        ? null
                        : (0, r.jsx)(
                              c.sNh,
                              {
                                  id: 'download-soundboard-sound',
                                  label: m.NW.string(m.t['/fzLLC']),
                                  action: n
                              },
                              'download-soundboard-sound'
                          );
                })(l),
                S = (0, g.Z)(l, d),
                N = (0, b.Z)({
                    id: l.soundId,
                    label: m.NW.string(m.t.HJikXl)
                });
            return (0, r.jsx)(c.v2r, {
                navId: 'sound-button-context',
                onClose: s.Zy,
                'aria-label': m.NW.string(m.t.liqwPD),
                onSelect: f,
                children: (0, r.jsxs)(c.kSQ, {
                    children: [h, S, j, N]
                })
            });
        },
        { object: h.qAy.CONTEXT_MENU }
    ),
    [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON]
);
