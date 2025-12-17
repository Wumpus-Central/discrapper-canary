n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(239091),
    s = n(266454),
    c = n(554747),
    u = n(306680),
    d = n(9156),
    f = n(434479),
    h = n(490897),
    p = n(388032),
    g = n(323453);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
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
        { hasUnread: O, mentionCount: v } = (0, i.cj)(
            [u.ZP],
            () => ({
                hasUnread: u.ZP.hasUnread(t.id, h.W.GUILD_EVENT),
                mentionCount: u.ZP.getMentionCount(t.id, h.W.GUILD_EVENT),
            }),
            [t.id],
        ),
        j = (0, i.e7)([d.ZP], () => d.ZP.isMuteScheduledEventsEnabled(t.id));
    async function C() {
        await (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("4096"), n.e("56236"), n.e("27097")]).then(n.bind(n, 17671));
            return (n) => (0, r.jsx)(e, m(b({}, n), { guildId: t.id }));
        }),
            (0, s.Q3)(l.z.GUILD_HEADER_EVENT_UPSELL);
    }
    let x = (0, c.ZP)(t.id),
        E = x.length > 0 ? p.intl.formatToPlainString(p.t.IBdqSu, { number: x.length }) : p.intl.string(p.t.tlopTM);
    return (0, r.jsx)(f.m, {
        id: "upcoming-events-".concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(a.Que, {
                size: "md",
                color: "currentColor",
                className: e,
            }),
        text: E,
        selected: y,
        onClick: C,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await n.e("95307").then(n.bind(n, 867757));
                return (n) => (0, r.jsx)(e, m(b({}, n), { guildId: t.id }));
            });
        },
        showUnread: O && !j,
        trailing:
            !j && v > 0
                ? (0, r.jsx)(a.mAB, {
                      className: g.numberBadge,
                      disableColor: !0,
                      count: v,
                  })
                : null,
    });
}
