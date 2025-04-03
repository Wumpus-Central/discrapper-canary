t.d(n, { default: () => T });
var r = t(200651),
    i = t(192379),
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
    N = t(710679),
    P = t(74562),
    C = t(576749),
    E = t(765305),
    k = t(981631),
    w = t(490897),
    I = t(388032),
    S = t(781324);
function T(e) {
    let { transitionState: n, onClose: l, guildId: T } = e,
        _ = (0, d.Dt)(),
        D = (0, c.e7)([v.Z], () => v.Z.getGuild(T)),
        G = (0, Z.Z)(null == D ? void 0 : D.id),
        W = (0, O.ZP)(T),
        L = i.useRef(m.ZP.ackMessageId(T, w.W.GUILD_EVENT)),
        R = (0, C.Z)();
    return (
        i.useEffect(() => {
            W.forEach((e) => x.Z.getGuildEventUserCounts(T, e.id, [])), x.Z.getGuildEventsForCurrentUser(T);
        }, [W, T]),
        i.useEffect(() => {
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
                type: E.zw,
                guild_id: T,
                guild_events_count: W.length
            });
        }),
        i.useEffect(() => {
            o()(W)
                .map((e) => e.creator_id)
                .filter(b.lm)
                .uniq()
                .forEach((e) => {
                    f.Z.requestMember(T, e);
                });
        }, [T, W]),
        i.useEffect(() => {
            null != T && (0, s.Ju)(T, w.W.GUILD_EVENT);
        }, [T]),
        (0, r.jsxs)(a.Y0X, {
            size: a.CgR.MEDIUM,
            transitionState: n,
            'aria-labelledby': _,
            children: [
                (0, r.jsxs)(a.xBx, {
                    className: S.header,
                    children: [
                        (0, r.jsx)(a.Que, {
                            size: 'md',
                            color: 'currentColor',
                            className: S.icon
                        }),
                        (0, r.jsx)(a.X6q, {
                            id: _,
                            variant: 'heading-md/semibold',
                            children: W.length > 0 ? I.NW.formatToPlainString(I.t.IBdqSk, { number: W.length }) : I.NW.string(I.t.tlopTE)
                        }),
                        G &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', {
                                        className: S.divider,
                                        children: '|'
                                    }),
                                    (0, r.jsx)(a.zxk, {
                                        size: a.zxk.Sizes.MIN,
                                        onClick: () => {
                                            (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([t.e('49049'), t.e('82758'), t.e('58023'), t.e('91463')]).then(t.bind(t, 779250));
                                                return (n) => {
                                                    var t, i;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, n)),
                                                        (i = i = { guildId: T }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                              }),
                                                        t)
                                                    );
                                                };
                                            }, R);
                                        },
                                        innerClassName: S.button,
                                        children: I.NW.string(I.t['60lJ0N'])
                                    })
                                ]
                            }),
                        (0, r.jsx)(a.P3F, {
                            onClick: l,
                            className: S.iconButton,
                            'aria-label': I.NW.string(I.t.cpT0Cg),
                            children: (0, r.jsx)(a.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.icon
                            })
                        })
                    ]
                }),
                (0, r.jsx)(a.hzk, {
                    className: S.content,
                    children:
                        W.length > 0
                            ? W.map((e) =>
                                  (0, r.jsx)(
                                      N.Z,
                                      {
                                          guildEvent: e,
                                          guildId: T,
                                          onActionTaken: l,
                                          isNew: null != L.current && y.default.compare(e.id, L.current) > 0
                                      },
                                      e.id
                                  )
                              )
                            : (0, r.jsx)(P.Z, {
                                  guildId: T,
                                  onClose: l
                              })
                })
            ]
        })
    );
}
