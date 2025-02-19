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
    p = n(775894);
let h = {
    label: () => g.NW.string(g.t['32u1Dw']),
    value: u.Th
};
function f() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, s.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        g = (0, s.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: f, hideGlobalOption: N } = (0, m.b)(),
        x = n[0];
    i.useEffect(() => {
        (!N || !f) && (e === u.Th && e !== x && N && t(x), e !== u.Th && f && t(u.Th));
    }, [e, t, N, f, x]);
    let b = i.useMemo(() => {
            let e = f
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
            if (!N) {
                var t, r;
                e.unshift(
                    ((t = (function (e) {
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
                    (r = r = { label: h.label() }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
            return e;
        }, [f, n, N, g]),
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
        options: b,
        renderOptionPrefix: _
    });
}
