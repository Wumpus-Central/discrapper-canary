n.d(t, { Z: () => f }), n(290780);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(565138),
    o = n(430824),
    c = n(771845),
    d = n(823379),
    u = n(997950),
    m = n(816108),
    p = n(388032),
    g = n(867198);
let h = {
    label: () => p.intl.string(p.t['32u1Dw']),
    value: u.Th
};
function f() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, u.xu)(),
        n = (0, s.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        p = (0, s.e7)([o.Z], () => o.Z.getGuilds()),
        { hideGuildOptions: f, hideGlobalOption: b } = (0, m.b)(),
        _ = n[0];
    r.useEffect(() => {
        (b && f) || (e === u.Th && e !== _ && b && t(_), e !== u.Th && f && t(u.Th));
    }, [e, t, b, f, _]);
    let x = r.useMemo(() => {
            var e, t;
            let i = f
                ? []
                : n
                      .map((e) => {
                          let t = p[e];
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
                    i.unshift(
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
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
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              }),
                        e)
                    ),
                i
            );
        }, [f, n, b, p]),
        E = r.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === h.label() && (null == e ? void 0 : e.value) === h.value;
                return null == e || '' === e.value || t
                    ? (0, i.jsx)('div', {
                          className: g.clydeIconContainer,
                          children: (0, i.jsx)(l.gw7, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: g.guildSelectOptionIcon
                          })
                      })
                    : (0, i.jsx)(a.Z, {
                          className: g.guildSelectOptionIcon,
                          guild: p[e.value],
                          size: a.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [p]
        );
    return (0, i.jsx)(l.VcW, {
        wrapperClassName: g.searchableSelect,
        onChange: (e) => {
            t(e);
        },
        value: e,
        options: x,
        renderOptionPrefix: E
    });
}
