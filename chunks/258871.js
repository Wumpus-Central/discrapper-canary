n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(554747),
    s = n(434479),
    c = n(593364),
    u = n(703656),
    d = n(944486),
    p = n(147754),
    h = n(688438),
    f = n(981631),
    g = n(388032);
function m(e) {
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
function b(e, t) {
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
let y = [
        {
            key: 'EVENTS',
            renderIcon: (e) =>
                (0, r.jsx)(o.Que, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: (e) => {
                let { numEvents: t } = e;
                return t > 0 ? g.NW.formatToPlainString(g.t.IBdqSk, { number: t }) : g.NW.string(g.t.tlopTE);
            },
            handler: (e) =>
                (0, o.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e('22347'), n.e('56236'), n.e('79010')]).then(n.bind(n, 17671));
                    return (n) => (0, r.jsx)(t, b(m({}, n), { guildId: e.id }));
                })
        },
        {
            key: 'JOIN_SERVERS',
            renderIcon: (e) =>
                (0, r.jsx)(o.Jmo, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: () => g.NW.string(g.t.K50GHR),
            handler: (e, t) => (0, u.XU)(e.id, t.id)
        },
        {
            key: 'ADD_SERVERS',
            renderIcon: (e) =>
                (0, r.jsx)(o.qJs, {
                    size: 'md',
                    color: 'currentColor',
                    className: e
                }),
            getName: () => g.NW.string(g.t.emRpdX),
            handler: (e, t) =>
                (0, o.ZDy)(async () => {
                    let { default: i } = await n.e('79764').then(n.bind(n, 533202));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            b(m({}, n), {
                                directoryGuildName: e.name,
                                directoryGuildId: e.id,
                                directoryChannelId: t.id
                            })
                        );
                })
        },
        {
            key: 'INVITE_MEMBERS',
            renderIcon: (e) => (0, r.jsx)(o.ejJ, { className: e }),
            getName: () => g.NW.string(g.t.MJQOuL),
            handler: (e, t) =>
                (0, o.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            b(m({}, n), {
                                guild: e,
                                channel: t,
                                source: f.t4x.HUB_SIDEBAR
                            })
                        );
                })
        }
    ],
    _ = (e) => {
        let { guild: t, channel: n } = e,
            o = (0, a.ZP)(t.id);
        i.useEffect(() => {
            p.Z.trackExposure({
                guildId: t.id,
                location: '543af8_1'
            });
        }, [t.id]);
        let { showHubEventsList: u } = p.Z.useExperiment(
                {
                    guildId: t.id,
                    location: '543af8_2'
                },
                { autoTrackExposure: !1 }
            ),
            f = (0, l.e7)([d.Z], () => null != n && d.Z.getChannelId() === n.id),
            g = i.useMemo(() => ({ numEvents: o.length }), [o.length]),
            m = (0, h.t)(n);
        return (0, r.jsx)(r.Fragment, {
            children: y.map((e) => {
                let { key: i, getName: l, handler: o, renderIcon: a } = e;
                if (!u && 'EVENTS' === i) return null;
                let d = ''.concat(i, '-').concat(t.id);
                return (0, r.jsx)(
                    s.m,
                    {
                        id: d,
                        renderIcon: a,
                        text: l(g),
                        selected: f && 'JOIN_SERVERS' === i,
                        onClick: null != n ? () => o(t, n) : void 0,
                        trailing: 'JOIN_SERVERS' === i && m > 0 ? (0, c.N)(m) : null
                    },
                    d
                );
            })
        });
    };
