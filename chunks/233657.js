n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(704215),
    o = n(481060),
    a = n(239091),
    s = n(605236),
    c = n(554747),
    u = n(306680),
    d = n(9156),
    p = n(434479),
    h = n(490897),
    f = n(388032),
    g = n(768107);
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
function y(e) {
    let { guild: t, selected: y } = e,
        { hasUnread: _, mentionCount: v } = (0, i.cj)(
            [u.ZP],
            () => ({
                hasUnread: u.ZP.hasUnread(t.id, h.W.GUILD_EVENT),
                mentionCount: u.ZP.getMentionCount(t.id, h.W.GUILD_EVENT)
            }),
            [t.id]
        ),
        O = (0, i.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
    async function j() {
        await (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('22347'), n.e('56236'), n.e('79010')]).then(n.bind(n, 17671));
            return (n) => (0, r.jsx)(e, b(m({}, n), { guildId: t.id }));
        }),
            (0, s.EW)(l.z.GUILD_HEADER_EVENT_UPSELL);
    }
    let x = (0, c.ZP)(t.id),
        C = x.length > 0 ? f.NW.formatToPlainString(f.t.IBdqSk, { number: x.length }) : f.NW.string(f.t.tlopTE);
    return (0, r.jsx)(p.m, {
        id: 'upcoming-events-'.concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(o.Que, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: C,
        selected: y,
        onClick: j,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await n.e('95307').then(n.bind(n, 867757));
                return (n) => (0, r.jsx)(e, b(m({}, n), { guildId: t.id }));
            });
        },
        showUnread: _ && !O,
        trailing:
            !O && v > 0
                ? (0, r.jsx)(o.mAB, {
                      className: g.numberBadge,
                      disableColor: !0,
                      count: v
                  })
                : null
    });
}
