n.d(t, { Z: () => f }), n(733860);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(565138),
    o = n(430824),
    c = n(771845),
    d = n(823379),
    u = n(997950),
    m = n(816108),
    g = n(388032),
    p = n(867198);
let h = {
    label: () => g.NW.string(g.t['32u1Dw']),
    value: u.Th
};
function f() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, s.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        g = (0, s.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: f, hideGlobalOption: b } = (0, m.b)(),
        N = n[0];
    i.useEffect(() => {
        (b && f) || (e === u.Th && e !== N && b && t(N), e !== u.Th && f && t(u.Th));
    }, [e, t, b, f, N]);
    let x = i.useMemo(() => {
            var e, t;
            let r = f
                ? []
                : n
                      .map((e) => {
                          let t = g[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id
                                };
                      })
                      .filter(d.lm);
            return (
                b ||
                    r.unshift(
                        ((e = (function (e) {
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
                        })({}, h)),
                        (t = t = { label: h.label() }),
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
                        e)
                    ),
                r
            );
        }, [f, n, b, g]),
        _ = i.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === h.label() && (null == e ? void 0 : e.value) === h.value;
                return null == e || '' === e.value || t
                    ? (0, r.jsx)('div', {
                          className: p.clydeIconContainer,
                          children: (0, r.jsx)(a.gw7, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: p.guildSelectOptionIcon
                          })
                      })
                    : (0, r.jsx)(l.Z, {
                          className: p.guildSelectOptionIcon,
                          guild: g[e.value],
                          size: l.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [g]
        );
    return (0, r.jsx)(a.VcW, {
        wrapperClassName: p.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: x,
        renderOptionPrefix: _
    });
}
