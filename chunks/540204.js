n.d(t, { Z: () => y }), n(290780);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(565138),
    l = n(430824),
    c = n(771845),
    u = n(823379),
    d = n(997950),
    f = n(816108),
    p = n(388032),
    _ = n(790604);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {
    label: () => p.intl.string(p.t["32u1Dx"]),
    value: d.Th,
};
function y() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, d.xu)(),
        n = (0, a.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        p = (0, a.e7)([l.Z], () => l.Z.getGuilds()),
        { hideGuildOptions: m, hideGlobalOption: g } = (0, f.b)(),
        y = n[0];
    i.useEffect(() => {
        (g && m) || (e === d.Th && e !== y && g && t(y), e !== d.Th && m && t(d.Th));
    }, [e, t, g, m, y]);
    let O = (e) => {
            t(e);
        },
        v = i.useMemo(() => {
            let e = m
                ? []
                : n
                      .map((e) => {
                          let t = p[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id,
                                };
                      })
                      .filter(u.lm);
            return g || e.unshift(E(h({}, b), { label: b.label() })), e;
        }, [m, n, g, p]),
        S = i.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === b.label() && (null == e ? void 0 : e.value) === b.value;
                return null == e || "" === e.value || t
                    ? (0, r.jsx)("div", {
                          className: _.clydeIconContainer,
                          children: (0, r.jsx)(o.gw7, {
                              size: "sm",
                              color: "white",
                              "aria-hidden": !0,
                              className: _.guildSelectOptionIcon,
                          }),
                      })
                    : (0, r.jsx)(s.Z, {
                          className: _.guildSelectOptionIcon,
                          guild: p[e.value],
                          size: s.Z.Sizes.SMALLER,
                          active: !0,
                      });
            },
            [p],
        );
    return (0, r.jsx)(o.VcW, {
        wrapperClassName: _.searchableSelect,
        onChange: O,
        value: e,
        options: v,
        renderOptionPrefix: S,
    });
}
