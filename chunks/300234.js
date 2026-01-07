n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    i = n(493773),
    c = n(884338),
    u = n(592125),
    d = n(720202),
    h = n(594174),
    g = n(260483),
    m = n(314208),
    f = n(124368),
    j = n(565365);
let v = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: i } = e,
        c = (0, a.e7)([u.Z], () => u.Z.getChannel(t)),
        d = (0, a.e7)([u.Z], () => u.Z.getChannel(c.parent_id));
    return (0, r.jsxs)(s.P3F, {
        className: j.container,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("90508"), n.e("92091"), n.e("12632")]).then(
                    n.bind(n, 422200),
                );
                return (t) => {
                    var n, l;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (l = l = { channel: c }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    );
                };
            }),
        children: [
            (0, r.jsxs)("div", {
                className: j.left,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        className: j.threadNameLine,
                        variant: "heading-md/semibold",
                        children: [
                            (0, r.jsx)("span", {
                                className: j.threadName,
                                children: c.name,
                            }),
                            i && null != d
                                ? (0, r.jsx)("span", {
                                      className: j.parentName,
                                      children: "#".concat(d.name),
                                  })
                                : null,
                        ],
                    }),
                    (0, m.Z)(c),
                ],
            }),
            (0, r.jsx)(x, { channel: c }),
        ],
    });
});
function x(e) {
    let { channel: t } = e,
        n = (0, a.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getMemberIdsPreview(t.id)) ? e : [];
        }),
        l = (0, a.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getMemberCount(t.id)) ? e : 0;
        }),
        s = (0, a.Wu)([h.default], () => n.map((e) => h.default.getUser(e)));
    return ((0, i.ZP)(() => {
        n.filter((e, t) => null == s[t]).forEach((e) => {
            d.Z.requestMember(t.guild_id, e);
        });
    }),
    0 === n.length)
        ? null
        : (0, r.jsx)(c.ZP, {
              className: j.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: s,
              count: l,
              max: f.yX,
          });
}
