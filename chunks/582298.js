n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(430824),
    l = n(646504),
    o = n(834129),
    s = n(981631),
    c = n(388032),
    u = n(39028);
function d(e) {
    let t,
        { compact: d, isOwner: p, channel: m } = e,
        f = () => {
            let e = a.Z.getGuild(m.getGuildId());
            null != e &&
                ((0, i.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e('7654'), n.e('49049'), n.e('19476')]).then(n.bind(n, 560114));
                    return (n) => {
                        var i, a;
                        return (0, r.jsx)(
                            t,
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
                                    guild: e,
                                    channel: m,
                                    source: s.t4x.INVITE_SYSTEM_MESSAGE
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
                }),
                (0, l.w)());
        },
        h = (e, t) =>
            (0, r.jsx)(
                i.eee,
                {
                    className: u.inviteLink,
                    onClick: f,
                    children: e
                },
                t
            );
    return (
        (t = d
            ? (0, r.jsx)('div', {
                  className: u.inviteContent,
                  children: p ? c.NW.format(c.t['9OheEh'], { inviteHook: h }) : c.NW.format(c.t['7hv6yM'], { inviteHook: h })
              })
            : (0, r.jsxs)('div', {
                  className: u.content,
                  children: [
                      (0, r.jsx)('div', {
                          className: u.inviteHeader,
                          children: p ? c.NW.string(c.t['Ry1T//']) : c.NW.string(c.t.ppUFLy)
                      }),
                      (0, r.jsx)('div', {
                          className: u.inviteContent,
                          children: p ? c.NW.string(c.t.kLfkNj) : c.NW.string(c.t.gRHGFB)
                      }),
                      (0, r.jsx)(i.zxk, {
                          onClick: f,
                          size: i.zxk.Sizes.SMALL,
                          className: u.inviteButton,
                          children: c.NW.string(c.t.K1BAQ0)
                      })
                  ]
              })),
        (0, r.jsx)(o.Z, {
            className: d ? u.compact : u.inviteContent,
            iconNode: d
                ? null
                : (0, r.jsx)('img', {
                      alt: '',
                      src: n(826926),
                      width: 40,
                      height: 40
                  }),
            iconContainerClassName: u.iconContainer,
            compact: d,
            children: t
        })
    );
}
