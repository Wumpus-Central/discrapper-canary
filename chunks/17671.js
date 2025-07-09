t.d(n, { default: () => _ });
var i = t(255367),
    r = t(73800),
    l = t(392711),
    o = t.n(l),
    c = t(442837),
    a = t(755721),
    s = t(481060),
    u = t(45114),
    d = t(493773),
    g = t(313201),
    p = t(597),
    f = t(147754),
    h = t(984933),
    v = t(720202),
    m = t(430824),
    j = t(306680),
    b = t(626135),
    y = t(823379);
t(981888);
var x = t(709054),
    Z = t(897285),
    O = t(518756),
    P = t(554747),
    C = t(710679),
    E = t(74562),
    N = t(576749),
    k = t(765305),
    w = t(981631),
    I = t(490897),
    S = t(388032),
    T = t(781324);
function _(e) {
    let { transitionState: n, onClose: l, guildId: _ } = e,
        D = (0, g.Dt)(),
        G = (0, c.e7)([m.Z], () => m.Z.getGuild(_)),
        L = (0, O.Z)(null == G ? void 0 : G.id),
        M = (0, P.ZP)(_),
        R = r.useRef(j.ZP.ackMessageId(_, I.W.GUILD_EVENT)),
        U = (0, N.Z)();
    return (
        r.useEffect(() => {
            (M.forEach((e) => Z.Z.getGuildEventUserCounts(_, e.id, [])), Z.Z.getGuildEventsForCurrentUser(_));
        }, [M, _]),
        r.useEffect(() => {
            let e = m.Z.getGuild(_);
            if (!(null == e ? void 0 : e.features.has(w.oNc.HUB))) return;
            let { showHubEventsList: n } = f.Z.getCurrentConfig({
                guildId: _,
                location: 'd3755f_1'
            });
            if (!n) return;
            let t = h.ZP.getDefaultChannel(_);
            null != t && p.c(t.id);
        }, [_]),
        (0, d.ZP)(() => {
            b.default.track(w.rMx.OPEN_MODAL, {
                type: k.zw,
                guild_id: _,
                guild_events_count: M.length
            });
        }),
        r.useEffect(() => {
            o()(M)
                .map((e) => e.creator_id)
                .filter(y.lm)
                .uniq()
                .forEach((e) => {
                    v.Z.requestMember(_, e);
                });
        }, [_, M]),
        r.useEffect(() => {
            null != _ && (0, u.Ju)(_, I.W.GUILD_EVENT);
        }, [_]),
        (0, i.jsxs)(s.Y0X, {
            size: s.CgR.MEDIUM,
            transitionState: n,
            'aria-labelledby': D,
            parentComponent: 'GuildEventsModal',
            children: [
                (0, i.jsxs)(s.xBx, {
                    className: T.header,
                    children: [
                        (0, i.jsx)(s.Que, {
                            size: 'md',
                            color: 'currentColor',
                            className: T.icon
                        }),
                        (0, i.jsx)(s.X6q, {
                            id: D,
                            variant: 'heading-md/semibold',
                            children: M.length > 0 ? S.intl.formatToPlainString(S.t.IBdqSk, { number: M.length }) : S.intl.string(S.t.tlopTE)
                        }),
                        L &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: T.divider,
                                        children: '|'
                                    }),
                                    (0, i.jsx)(a.zx, {
                                        size: a.zx.Sizes.MIN,
                                        onClick: () => {
                                            (0, s.ZDy)(async () => {
                                                let { default: e } = await Promise.all([t.e('71418'), t.e('49049'), t.e('82758'), t.e('61'), t.e('76010')]).then(t.bind(t, 779250));
                                                return (n) => {
                                                    var t, r;
                                                    return (0, i.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    i = Object.keys(t);
                                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                                    (i = i.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    i.forEach(function (n) {
                                                                        var i;
                                                                        ((i = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: i,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = i));
                                                                    }));
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (r = r = { guildId: _ }),
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
                                            }, U);
                                        },
                                        innerClassName: T.button,
                                        children: S.intl.string(S.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, i.jsx)(s.P3F, {
                            onClick: l,
                            className: T.iconButton,
                            'aria-label': S.intl.string(S.t.cpT0Cg),
                            children: (0, i.jsx)(s.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.icon
                            })
                        })
                    ]
                }),
                (0, i.jsx)(s.hzk, {
                    className: T.content,
                    children:
                        M.length > 0
                            ? M.map((e) =>
                                  (0, i.jsx)(
                                      C.Z,
                                      {
                                          guildEvent: e,
                                          guildId: _,
                                          onActionTaken: l,
                                          isNew: null != R.current && x.default.compare(e.id, R.current) > 0
                                      },
                                      e.id
                                  )
                              )
                            : (0, i.jsx)(E.Z, {
                                  guildId: _,
                                  onClose: l
                              })
                })
            ]
        })
    );
}
