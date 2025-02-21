n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(596454),
    c = n(318766),
    d = n(907040),
    u = n(273039),
    m = n(176354),
    p = n(434404),
    g = n(185923),
    h = n(388032),
    f = n(565208),
    b = n(541946);
function x(e) {
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
let j = { label: '' };
function N(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: p } = e,
        h = i.useCallback(() => {
            p(t, s, { emoji: void 0 });
        }, [t, s, p]),
        b = i.useCallback(
            (e) => (n, r) => {
                p(t, s, { emoji: null != n ? n : void 0 }), r && e();
            },
            [t, s, p]
        ),
        j = i.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              let n = m.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
                              return (0, r.jsx)(o.Z, {
                                  animated: null !== (t = e.animated) && void 0 !== t && t,
                                  emojiId: e.id,
                                  emojiName: n
                              });
                          };
            return (0, r.jsx)(u.Z, {
                className: f.emojiWrapper,
                hasSetEmoji: null != e && null != e.name,
                onClick: h,
                children: (0, r.jsx)(l.yRy, {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(d.Z, {
                            closePopout: t,
                            onSelectEmoji: b(t),
                            pickerIntention: g.Hz.GUILD_PROFILE
                        });
                    },
                    children: (e, n) => {
                        var i, s;
                        let { isShown: a } = n;
                        return (0, r.jsx)(
                            c.Z,
                            ((i = x({}, e)),
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
        }, [n.emoji, h, b]),
        [N, v] = i.useState(!1),
        _ = i.useCallback(() => v(!0), []),
        O = i.useCallback(() => v(!1), []),
        y = i.useCallback(
            (e) => {
                p(t, s, { label: e });
            },
            [t, s, p]
        );
    return (0, r.jsx)(l.oil, {
        value: n.label,
        onChange: y,
        maxLength: 24,
        prefixElement: j,
        className: a()(f.traitContainer, { [f.traitContainerFocused]: N }),
        inputClassName: f.traitInput,
        onFocus: _,
        onBlur: O
    });
}
let v = [0, 1, 2, 3, 4];
function _(e) {
    let { profile: t } = e,
        n = i.useMemo(() => t.traits, [t]),
        s = i.useCallback(
            (e, t, r) => {
                let i = [...n];
                (i[t] = x({}, n[t], r)), p.Z.updateGuildProfile(e, { traits: i });
            },
            [n]
        );
    return (0, r.jsxs)(l.hjN, {
        className: b.section,
        children: [
            (0, r.jsxs)('div', {
                className: b.sectionHeader,
                children: [
                    (0, r.jsx)(l.vwX, { children: h.NW.string(h.t.S6JNrq) }),
                    (0, r.jsx)(l.R94, {
                        type: 'description',
                        children: h.NW.string(h.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: f.grid,
                children: v.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        N,
                        {
                            guildId: t.id,
                            trait: null !== (i = n[e]) && void 0 !== i ? i : j,
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
