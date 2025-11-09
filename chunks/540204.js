n.d(t, { Z: () => y }), n(290780);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(565138),
    l = n(430824),
    c = n(771845),
    u = n(823379),
    d = n(997950),
    f = n(816108),
    _ = n(388032),
    p = n(64068);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
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
    label: () => _.intl.string(_.t["32u1Dx"]),
    value: d.Th,
};
function y() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, d.xu)(),
        n = (0, a.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        _ = (0, a.e7)([l.Z], () => l.Z.getGuilds()),
        { hideGuildOptions: h, hideGlobalOption: g } = (0, f.b)(),
        y = n[0];
    i.useEffect(() => {
        (g && h) || (e === d.Th && e !== y && g && t(y), e !== d.Th && h && t(d.Th));
    }, [e, t, g, h, y]);
    let O = (e) => {
            t(e);
        },
        v = i.useMemo(() => {
            let e = h
                ? []
                : n
                      .map((e) => {
                          let t = _[e];
                          return null == t
                              ? null
                              : {
                                    label: t.name,
                                    value: t.id,
                                };
                      })
                      .filter(u.lm);
            return g || e.unshift(E(m({}, b), { label: b.label() })), e;
        }, [h, n, g, _]),
        I = i.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === b.label() && (null == e ? void 0 : e.value) === b.value;
                return null == e || "" === e.value || t
                    ? (0, r.jsx)("div", {
                          className: p.clydeIconContainer,
                          children: (0, r.jsx)(o.gw7, {
                              size: "sm",
                              color: "white",
                              "aria-hidden": !0,
                              className: p.guildSelectOptionIcon,
                          }),
                      })
                    : (0, r.jsx)(s.Z, {
                          className: p.guildSelectOptionIcon,
                          guild: _[e.value],
                          size: s.Z.Sizes.SMALLER,
                          active: !0,
                      });
            },
            [_],
        );
    return (0, r.jsx)(o.VcW, {
        wrapperClassName: p.searchableSelect,
        onChange: O,
        value: e,
        options: v,
        renderOptionPrefix: I,
    });
}
