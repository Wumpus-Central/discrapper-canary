n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(596454),
    c = n(225433),
    d = n(318766),
    u = n(907040),
    m = n(273039),
    g = n(176354),
    p = n(434404),
    h = n(185923),
    f = n(388032),
    b = n(186667),
    x = n(381109);
function j(e) {
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
}
let N = { label: '' };
function _(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: p, disabled: f } = e,
        x = i.useCallback(() => {
            p(t, s, { emoji: void 0 });
        }, [t, s, p]),
        N = i.useCallback(
            (e) => (n, r) => {
                p(t, s, { emoji: null != n ? n : void 0 }), r && e();
            },
            [t, s, p]
        ),
        _ = i.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              let n = g.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
                              return (0, r.jsx)(o.Z, {
                                  animated: null != (t = e.animated) && t,
                                  emojiId: e.id,
                                  emojiName: n
                              });
                          };
            return f
                ? (0, r.jsx)(d.Z, {
                      tabIndex: -1,
                      active: !1,
                      renderButtonContents: t
                  })
                : (0, r.jsx)(m.Z, {
                      className: b.emojiWrapper,
                      buttonClassName: b.removeButton,
                      look: c.Z.Looks.FILLED,
                      hasSetEmoji: null != e && null != e.name,
                      onClick: x,
                      children: (0, r.jsx)(l.yRy, {
                          position: 'bottom',
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, r.jsx)(u.Z, {
                                  closePopout: t,
                                  onSelectEmoji: N(t),
                                  pickerIntention: h.Hz.GUILD_PROFILE
                              });
                          },
                          children: (e, n) => {
                              var i, s;
                              let { isShown: a } = n;
                              return (0, r.jsx)(
                                  d.Z,
                                  ((i = j({}, e)),
                                  (s = s =
                                      {
                                          tabIndex: 0,
                                          active: a,
                                          renderButtonContents: t
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(s)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                        }),
                                  i)
                              );
                          }
                      })
                  });
        }, [n.emoji, f, x, N]),
        [v, C] = i.useState(!1),
        O = i.useCallback(() => C(!0), []),
        y = i.useCallback(() => C(!1), []),
        I = i.useCallback(
            (e) => {
                p(t, s, { label: e });
            },
            [t, s, p]
        );
    return (0, r.jsx)(l.oil, {
        'aria-disabled': f,
        disabled: f,
        value: n.label,
        onChange: I,
        maxLength: 24,
        prefixElement: _,
        className: a()(b.traitContainer, { [b.traitContainerFocused]: v }),
        inputClassName: b.traitInput,
        onFocus: O,
        onBlur: y
    });
}
let v = [0, 1, 2, 3, 4];
function C(e) {
    let { profile: t, canManageGuild: n } = e,
        s = i.useMemo(() => t.traits, [t]),
        a = i.useCallback(
            (e, t, n) => {
                let r = [...s];
                (r[t] = j({}, s[t], n)), p.Z.updateGuildProfile(e, { traits: r });
            },
            [s]
        );
    return (0, r.jsxs)(l.hjN, {
        className: x.section,
        children: [
            (0, r.jsxs)('div', {
                className: x.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: f.NW.string(f.t.S6JNrq) }),
                    (0, r.jsx)(l.R94, {
                        type: 'description',
                        children: f.NW.string(f.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: b.grid,
                children: v.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        _,
                        {
                            guildId: t.id,
                            trait: null != (i = s[e]) ? i : N,
                            index: e,
                            onTraitUpdate: a,
                            disabled: !n
                        },
                        'trait-'.concat(e)
                    );
                })
            })
        ]
    });
}
