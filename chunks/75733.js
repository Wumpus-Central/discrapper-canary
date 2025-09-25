n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(596454),
    a = n(318766),
    o = n(907040),
    c = n(176354),
    d = n(434404),
    u = n(185923),
    m = n(388032),
    g = n(988167),
    p = n(998918);
function f(e) {
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
let h = { label: "" };
function x(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: d } = e,
        m = i.useRef(null),
        g = i.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          var e;
                          let n = c.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, r.jsx)(s.Z, {
                              animated: null != (e = t.animated) && e,
                              emojiId: t.id,
                              emojiName: n,
                          });
                      },
            [t],
        );
    return n
        ? (0, r.jsx)(a.Z, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: g,
          })
        : (0, r.jsx)(l.yRy, {
              targetElementRef: m,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.Z, {
                      closePopout: t,
                      onSelectEmoji: d(t),
                      pickerIntention: u.Hz.GUILD_PROFILE,
                  });
              },
              children: (e, t) => {
                  var n, i;
                  let { isShown: l } = t;
                  return (0, r.jsx)(
                      a.Z,
                      ((n = f({}, e)),
                      (i = i =
                          {
                              ref: m,
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
function b(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: a, disabled: o } = e,
        c = i.useCallback(() => {
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
        m = i.useMemo(() => n.emoji, [n.emoji]),
        p = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, r.jsx)("div", {
        className: g.traitWrapper,
        children: (0, r.jsx)(l.oil, {
            disabled: o,
            value: n.label,
            onChange: u,
            maxLength: 24,
            leading: {
                type: "emoji",
                button: (0, r.jsx)(x, {
                    emoji: m,
                    disabled: o,
                    handleSelectEmoji: d,
                }),
            },
            clearable: { show: p },
            onClear: c,
        }),
    });
}
let j = [0, 1, 2, 3, 4];
function v(e) {
    let { profile: t, canManageGuild: n } = e,
        s = i.useMemo(() => t.traits, [t]),
        a = i.useCallback(
            (e, t, n) => {
                let r = [...s];
                (r[t] = f({}, s[t], n)), d.Z.updateGuildProfile(e, { traits: r });
            },
            [s],
        );
    return (0, r.jsxs)(l.hjN, {
        className: p.section,
        children: [
            (0, r.jsxs)("div", {
                className: p.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: m.intl.string(m.t.S6JNrq) }),
                    (0, r.jsx)(l.R94, {
                        type: "description",
                        children: m.intl.string(m.t.l7Ig5e),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.grid,
                children: j.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        b,
                        {
                            guildId: t.id,
                            trait: null != (i = s[e]) ? i : h,
                            index: e,
                            onTraitUpdate: a,
                            disabled: !n,
                        },
                        "trait-".concat(e),
                    );
                }),
            }),
        ],
    });
}
