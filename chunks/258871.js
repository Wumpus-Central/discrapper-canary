n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(434479),
    a = n(593364),
    s = n(703656),
    c = n(944486),
    u = n(688438),
    d = n(981631),
    f = n(388032);
function h(e) {
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
function p(e, t) {
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
let g = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) =>
                (0, r.jsx)(l.Jmo, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            getName: () => f.intl.string(f.t.K50GHd),
            handler: (e, t) => (0, s.XU)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) =>
                (0, r.jsx)(l.qJs, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            getName: () => f.intl.string(f.t.emRpdS),
            handler: (e, t) =>
                (0, l.ZDy)(async () => {
                    let { default: i } = await n.e("79764").then(n.bind(n, 533202));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            p(h({}, n), {
                                directoryGuildName: e.name,
                                directoryGuildId: e.id,
                                directoryChannelId: t.id,
                            }),
                        );
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) => (0, r.jsx)(l.ejJ, { className: e }),
            getName: () => f.intl.string(f.t.MJQOuJ),
            handler: (e, t) =>
                (0, l.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e("7654"), n.e("77653")]).then(n.bind(n, 560114));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            p(h({}, n), {
                                guild: e,
                                channel: t,
                                source: d.t4x.HUB_SIDEBAR,
                            }),
                        );
                }),
        },
    ],
    m = (e) => {
        let { guild: t, channel: n } = e,
            l = (0, i.e7)([c.Z], () => null != n && c.Z.getChannelId() === n.id),
            s = (0, u.t)(n);
        return (0, r.jsx)(r.Fragment, {
            children: g.map((e) => {
                let { key: i, getName: c, handler: u, renderIcon: d } = e,
                    f = "".concat(i, "-").concat(t.id);
                return (0, r.jsx)(
                    o.m,
                    {
                        id: f,
                        renderIcon: d,
                        text: c(),
                        selected: l && "JOIN_SERVERS" === i,
                        onClick: null != n ? () => u(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === i && s > 0 ? (0, a.N)(s) : null,
                    },
                    f,
                );
            }),
        });
    };
