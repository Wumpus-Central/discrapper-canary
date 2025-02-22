n.d(t, { Z: () => O }), n(47120);
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
    p = n(176354),
    g = n(434404),
    h = n(185923),
    f = n(388032),
    b = n(565208),
    x = n(541946);
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
function v(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: g } = e,
        f = i.useCallback(() => {
            g(t, s, { emoji: void 0 });
        }, [t, s, g]),
        x = i.useCallback(
            (e) => (n, r) => {
                g(t, s, { emoji: null != n ? n : void 0 }), r && e();
            },
            [t, s, g]
        ),
        N = i.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              let n = p.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
                              return (0, r.jsx)(o.Z, {
                                  animated: null !== (t = e.animated) && void 0 !== t && t,
                                  emojiId: e.id,
                                  emojiName: n
                              });
                          };
            return (0, r.jsx)(m.Z, {
                className: b.emojiWrapper,
                look: c.Z.Looks.FILLED,
                hasSetEmoji: null != e && null != e.name,
                onClick: f,
                children: (0, r.jsx)(l.yRy, {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(u.Z, {
                            closePopout: t,
                            onSelectEmoji: x(t),
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
        }, [n.emoji, f, x]),
        [v, _] = i.useState(!1),
        O = i.useCallback(() => _(!0), []),
        y = i.useCallback(() => _(!1), []),
        C = i.useCallback(
            (e) => {
                g(t, s, { label: e });
            },
            [t, s, g]
        );
    return (0, r.jsx)(l.oil, {
        value: n.label,
        onChange: C,
        maxLength: 24,
        prefixElement: N,
        className: a()(b.traitContainer, { [b.traitContainerFocused]: v }),
        inputClassName: b.traitInput,
        onFocus: O,
        onBlur: y
    });
}
let _ = [0, 1, 2, 3, 4];
function O(e) {
    let { profile: t } = e,
        n = i.useMemo(() => t.traits, [t]),
        s = i.useCallback(
            (e, t, r) => {
                let i = [...n];
                (i[t] = j({}, n[t], r)), g.Z.updateGuildProfile(e, { traits: i });
            },
            [n]
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
                children: _.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        v,
                        {
                            guildId: t.id,
                            trait: null !== (i = n[e]) && void 0 !== i ? i : N,
                            index: e,
                            onTraitUpdate: s
                        },
                        'trait-'.concat(e)
                    );
                })
            })
        ]
    });
}
