t.d(n, { default: () => T });
var i = t(255367),
    r = t(73800),
    l = t(392711),
    o = t.n(l),
    c = t(442837),
    a = t(481060),
    s = t(45114),
    u = t(493773),
    d = t(313201),
    g = t(597),
    p = t(147754),
    h = t(984933),
    f = t(720202),
    v = t(430824),
    m = t(306680),
    j = t(626135),
    b = t(823379);
t(981888);
var y = t(709054),
    x = t(897285),
    Z = t(518756),
    O = t(554747),
    P = t(710679),
    C = t(74562),
    E = t(576749),
    N = t(765305),
    k = t(981631),
    w = t(490897),
    I = t(388032),
    S = t(781324);
function T(e) {
    let { transitionState: n, onClose: l, guildId: T } = e,
        _ = (0, d.Dt)(),
        D = (0, c.e7)([v.Z], () => v.Z.getGuild(T)),
        G = (0, Z.Z)(null == D ? void 0 : D.id),
        L = (0, O.ZP)(T),
        R = r.useRef(m.ZP.ackMessageId(T, w.W.GUILD_EVENT)),
        M = (0, E.Z)();
    return (
        r.useEffect(() => {
            L.forEach((e) => x.Z.getGuildEventUserCounts(T, e.id, [])), x.Z.getGuildEventsForCurrentUser(T);
        }, [L, T]),
        r.useEffect(() => {
            let e = v.Z.getGuild(T);
            if (!(null == e ? void 0 : e.hasFeature(k.oNc.HUB))) return;
            let { showHubEventsList: n } = p.Z.getCurrentConfig({
                guildId: T,
                location: 'd3755f_1'
            });
            if (!n) return;
            let t = h.ZP.getDefaultChannel(T);
            null != t && g.c(t.id);
        }, [T]),
        (0, u.ZP)(() => {
            j.default.track(k.rMx.OPEN_MODAL, {
                type: N.zw,
                guild_id: T,
                guild_events_count: L.length
            });
        }),
        r.useEffect(() => {
            o()(L)
                .map((e) => e.creator_id)
                .filter(b.lm)
                .uniq()
                .forEach((e) => {
                    f.Z.requestMember(T, e);
                });
        }, [T, L]),
        r.useEffect(() => {
            null != T && (0, s.Ju)(T, w.W.GUILD_EVENT);
        }, [T]),
        (0, i.jsxs)(a.Y0X, {
            size: a.CgR.MEDIUM,
            transitionState: n,
            'aria-labelledby': _,
            children: [
                (0, i.jsxs)(a.xBx, {
                    className: S.header,
                    children: [
                        (0, i.jsx)(a.Que, {
                            size: 'md',
                            color: 'currentColor',
                            className: S.icon
                        }),
                        (0, i.jsx)(a.X6q, {
                            id: _,
                            variant: 'heading-md/semibold',
                            children: L.length > 0 ? I.intl.formatToPlainString(I.t.IBdqSk, { number: L.length }) : I.intl.string(I.t.tlopTE)
                        }),
                        G &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: S.divider,
                                        children: '|'
                                    }),
                                    (0, i.jsx)(a.zxk, {
                                        size: a.zxk.Sizes.MIN,
                                        onClick: () => {
                                            (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([t.e('49049'), t.e('82758'), t.e('58023'), t.e('76010')]).then(t.bind(t, 779250));
                                                return (n) => {
                                                    var t, r;
                                                    return (0, i.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    i = Object.keys(t);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (i = i.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    i.forEach(function (n) {
                                                                        var i;
                                                                        (i = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: i,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = i);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (r = r = { guildId: T }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var i = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, i);
                                                                  }
                                                                  return t;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                                              }),
                                                        t)
                                                    );
                                                };
                                            }, M);
                                        },
                                        innerClassName: S.button,
                                        children: I.intl.string(I.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, i.jsx)(a.P3F, {
                            onClick: l,
                            className: S.iconButton,
                            'aria-label': I.intl.string(I.t.cpT0Cg),
                            children: (0, i.jsx)(a.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.icon
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.hzk, {
                    className: S.content,
                    children:
                        L.length > 0
                            ? L.map((e) =>
                                  (0, i.jsx)(
                                      P.Z,
                                      {
                                          guildEvent: e,
                                          guildId: T,
                                          onActionTaken: l,
                                          isNew: null != R.current && y.default.compare(e.id, R.current) > 0
                                      },
                                      e.id
                                  )
                              )
                            : (0, i.jsx)(C.Z, {
                                  guildId: T,
                                  onClose: l
                              })
                })
            ]
        })
    );
}
