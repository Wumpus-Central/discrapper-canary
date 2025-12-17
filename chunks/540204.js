n.d(t, { Z: () => O }), n(290780);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(668339),
    s = n(481060),
    l = n(565138),
    c = n(430824),
    u = n(771845),
    d = n(823379),
    f = n(997950),
    p = n(816108),
    _ = n(388032),
    m = n(913498);
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
function g(e) {
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
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = {
    label: () => _.intl.string(_.t["32u1Dx"]),
    value: f.Th,
};
function O() {
    let { selectedGuildId: e, setSelectedGuildId: t } = (0, f.xu)(),
        n = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        _ = (0, a.e7)([c.Z], () => c.Z.getGuilds()),
        { hideGuildOptions: h, hideGlobalOption: E } = (0, p.b)(),
        O = n[0];
    i.useEffect(() => {
        (E && h) || (e === f.Th && e !== O && E && t(O), e !== f.Th && h && t(f.Th));
    }, [e, t, E, h, O]);
    let v = (e) => {
            t(e);
        },
        S = i.useMemo(() => {
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
                      .filter(d.lm);
            return E || e.unshift(b(g({}, y), { label: y.label() })), e;
        }, [h, n, E, _]),
        I = i.useCallback(
            (e) => {
                let t = (null == e ? void 0 : e.label) === y.label() && (null == e ? void 0 : e.value) === y.value;
                return null == e || "" === e.value || t
                    ? (0, r.jsx)("div", {
                          className: m.clydeIconContainer,
                          children: (0, r.jsx)(s.gw7, {
                              size: "sm",
                              color: "white",
                              "aria-hidden": !0,
                              className: m.guildSelectOptionIcon,
                          }),
                      })
                    : (0, r.jsx)(l.Z, {
                          className: m.guildSelectOptionIcon,
                          guild: _[e.value],
                          size: l.Z.Sizes.SMALLER,
                          active: !0,
                      });
            },
            [_],
        );
    return (0, r.jsx)(o.d, {
        wrapperClassName: m.searchableSelect,
        onChange: v,
        value: e,
        options: S,
        renderOptionPrefix: I,
    });
}
