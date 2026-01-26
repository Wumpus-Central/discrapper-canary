a.d(t, {
    default: () => f,
});
var n = a(627968),
    r = a(64700),
    l = a(311907),
    i = a(397927),
    o = a(442433),
    s = a(391973),
    c = a(684013),
    u = a(555528),
    d = a(256415),
    p = a(395011),
    v = a(897720);
a(392164);
var g = a(652215),
    m = a(985018);

function f(e) {
    var t, a;
    let { onSelect: f, onClose: b } = e,
        {
            avatarSizeMode: y,
            displayNameMode: O,
            displayUserMode: j,
        } = (0, l.cf)([d.default], () => ({
            avatarSizeMode: d.default.getAvatarSizeMode(),
            displayNameMode: d.default.getDisplayNameMode(),
            displayUserMode: d.default.getDisplayUserMode(),
        })),
        h = r.useRef(b);
    r.useEffect(() => {
        h.current = b;
    }),
        r.useEffect(
            () => () => {
                var e;
                return null == (e = h.current) ? void 0 : e.call(h);
            },
            [],
        );
    let A = (0, l.bG)([p.A, u.A], () => {
            let e = p.A.getWidgetByType(g.uss.VOICE_V3);
            if (null == e) return null;
            let t = u.A.getWidget(e.id);
            return null != t && (0, v.ZO)(t) ? t : null;
        }),
        S = null != (t = null == A || null == (a = A.meta) ? void 0 : a.voiceStatesMaxShown) ? t : 8;

    function w(e) {
        null != A &&
            (e < 1
                ? (0, s.cC)(A.id, {
                      voiceStatesMaxShown: -1,
                  })
                : (0, s.cC)(A.id, {
                      voiceStatesMaxShown: Math.floor(e),
                  }));
    }
    return (0, n.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "overlay-voice-widget-context-menu",
        onClose: o.Z_,
        "aria-label": m.intl.string(m.t.tPfVWi),
        onSelect: f,
        children: [
            (0, n.jsx)(i.rXV, {
                label: m.intl.string(m.t.dnvZSg),
                children: [
                    {
                        value: g.OSZ.LARGE,
                        name: m.intl.string(m.t.YcOxtr),
                    },
                    {
                        value: g.OSZ.SMALL,
                        name: m.intl.string(m.t.BKIKqx),
                    },
                ].map((e) =>
                    (0, n.jsx)(
                        i.iDA,
                        {
                            label: e.name,
                            checked: y === e.value,
                            id: "avatar-size-mode-".concat(e.value),
                            group: "avatar-size-mode",
                            action: () => c.A.setAvatarSizeMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, n.jsx)(i.rXV, {
                label: m.intl.string(m.t.J0dpcB),
                children: [
                    {
                        value: g.pwA.ALWAYS,
                        name: m.intl.string(m.t.nBmDrT),
                    },
                    {
                        value: g.pwA.ONLY_WHILE_SPEAKING,
                        name: m.intl.string(m.t["2OvIZY"]),
                    },
                    {
                        value: g.pwA.NEVER,
                        name: m.intl.string(m.t.ekjlPL),
                    },
                ].map((e) =>
                    (0, n.jsx)(
                        i.iDA,
                        {
                            label: e.name,
                            checked: O === e.value,
                            id: "display-name-mode-".concat(e.value),
                            group: "display-name-mode",
                            action: () => c.A.setDisplayNameMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, n.jsx)(i.rXV, {
                label: m.intl.string(m.t.swsWWC),
                children: [
                    {
                        value: g.f5z.ALWAYS,
                        name: m.intl.string(m.t.nBmDrT),
                    },
                    {
                        value: g.f5z.ONLY_WHILE_SPEAKING,
                        name: m.intl.string(m.t["2OvIZY"]),
                    },
                ].map((e) =>
                    (0, n.jsx)(
                        i.iDA,
                        {
                            label: e.name,
                            checked: j === e.value,
                            id: "display-user-mode-".concat(e.value),
                            group: "display-user-mode",
                            action: () => c.A.setDisplayUserMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, n.jsx)(i.rXV, {
                children: (0, n.jsx)(i.aK1, {
                    id: "voice-widget-max-users-displayed",
                    label: m.intl.string(m.t["X/Uyzc"]),
                    control: (e, t) => {
                        var a, r;
                        return (0, n.jsx)(
                            i.i42,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(a);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(a).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = a[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (r = r =
                                {
                                    ref: t,
                                    value: S,
                                    minValue: 0,
                                    maxValue: 25,
                                    onChange: w,
                                    renderValue: (e) => (e < 1 ? m.intl.string(m.t.nrUzFL) : "".concat(Math.floor(e))),
                                    "aria-label": m.intl.string(m.t["X/Uyzc"]),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var a = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          a.push.apply(a, n);
                                      }
                                      return a;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            a),
                        );
                    },
                }),
            }),
        ],
    });
}
