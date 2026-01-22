n.d(t, { A: () => j }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(565645),
    a = n(375499),
    c = n(937773),
    o = n(690521),
    d = n(997509),
    u = n(307731),
    f = n(985018),
    g = n(200967);
function b(e) {
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
let m = { label: "" };
function p(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: d } = e,
        f = i.useRef(null),
        g = i.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          var e;
                          let n = o.Ay.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, r.jsx)(s.A, {
                              animated: null != (e = t.animated) && e,
                              emojiId: t.id,
                              emojiName: n,
                          });
                      },
            [t],
        );
    return n
        ? (0, r.jsx)(a.A, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: g,
          })
        : (0, r.jsx)(l.YNO, {
              targetElementRef: f,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(c.A, {
                      closePopout: t,
                      onSelectEmoji: d(t),
                      pickerIntention: u.b_.GUILD_PROFILE,
                  });
              },
              children: (e, t) => {
                  var n, i;
                  let { isShown: l } = t;
                  return (0, r.jsx)(
                      a.A,
                      ((n = b({}, e)),
                      (i = i =
                          {
                              ref: f,
                              tabIndex: 0,
                              active: l,
                              renderButtonContents: g,
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      n),
                  );
              },
          });
}
function x(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: a, disabled: c } = e,
        o = i.useCallback(() => {
            a(t, s, {
                emoji: void 0,
                label: "",
            });
        }, [t, s, a]),
        d = i.useCallback(
            (e) => (n) => {
                let { emoji: r, willClose: i } = n;
                a(t, s, { emoji: null != r ? r : void 0 }), i && e();
            },
            [t, s, a],
        ),
        u = i.useCallback(
            (e) => {
                a(t, s, { label: e });
            },
            [t, s, a],
        ),
        f = i.useMemo(() => n.emoji, [n.emoji]),
        b = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, r.jsx)("div", {
        className: g.II,
        children: (0, r.jsx)(l.ksK, {
            disabled: c,
            value: n.label,
            onChange: u,
            maxLength: 24,
            leading: {
                type: "emoji",
                button: (0, r.jsx)(p, {
                    emoji: f,
                    disabled: c,
                    handleSelectEmoji: d,
                }),
            },
            clearable: { show: b },
            onClear: o,
        }),
    });
}
let h = [0, 1, 2, 3, 4];
function j(e) {
    let { profile: t, canManageGuild: n } = e,
        s = i.useMemo(() => t.traits, [t]),
        a = i.useCallback(
            (e, t, n) => {
                let r = [...s];
                (r[t] = b({}, s[t], n)), d.A.updateGuildProfile(e, { traits: r });
            },
            [s],
        );
    return (0, r.jsx)(l.D0$, {
        label: f.intl.string(f.t.S6JNrh),
        description: f.intl.string(f.t.l7Ig5Z),
        children: (0, r.jsx)("div", {
            className: g.Vg,
            children: h.map((e) => {
                var i;
                return (0, r.jsx)(
                    x,
                    {
                        guildId: t.id,
                        trait: null != (i = s[e]) ? i : m,
                        index: e,
                        onTraitUpdate: a,
                        disabled: !n,
                    },
                    "trait-".concat(e),
                );
            }),
        }),
    });
}
