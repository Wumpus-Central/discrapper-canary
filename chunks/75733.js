n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(318766),
    u = n(907040),
    m = n(273039),
    p = n(176354),
    g = n(434404),
    h = n(999382),
    f = n(185923),
    b = n(388032),
    x = n(565208),
    j = n(541946);
function N(e) {
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
let v = { label: '' };
function _(e) {
    let { guild: t, trait: n, index: s, onTraitUpdate: l } = e,
        g = t.id,
        h = i.useCallback(() => {
            l(g, s, { emoji: void 0 });
        }, [g, s, l]),
        b = i.useCallback(
            (e) => (t, n) => {
                l(g, s, { emoji: null != t ? t : void 0 }), n && e();
            },
            [g, s, l]
        ),
        j = i.useMemo(() => {
            let e = n.emoji,
                t =
                    null == e || null == e.name
                        ? null
                        : () => {
                              var t;
                              let n = p.ZP.isCustomEmoji(e) ? e.name : e.surrogates;
                              return (0, r.jsx)(c.Z, {
                                  animated: null !== (t = e.animated) && void 0 !== t && t,
                                  emojiId: e.id,
                                  emojiName: n
                              });
                          };
            return (0, r.jsx)(m.Z, {
                className: x.emojiWrapper,
                hasSetEmoji: null != e && null != e.name,
                onClick: h,
                children: (0, r.jsx)(o.yRy, {
                    position: 'bottom',
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(u.Z, {
                            closePopout: t,
                            onSelectEmoji: b(t),
                            pickerIntention: f.Hz.PROFILE
                        });
                    },
                    children: (e, n) => {
                        var i, s;
                        let { isShown: a } = n;
                        return (0, r.jsx)(
                            d.Z,
                            ((i = N({}, e)),
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
        [v, _] = i.useState(!1),
        O = i.useCallback(() => _(!0), []),
        y = i.useCallback(() => _(!1), []),
        C = i.useCallback(
            (e) => {
                l(g, s, { label: e });
            },
            [g, s, l]
        );
    return (0, r.jsx)(o.oil, {
        value: n.label,
        onChange: C,
        maxLength: 24,
        prefixElement: j,
        className: a()(x.traitContainer, { [x.traitContainerFocused]: v }),
        inputClassName: x.traitInput,
        onFocus: O,
        onBlur: y
    });
}
let O = [0, 1, 2, 3, 4];
function y(e) {
    let { guild: t } = e,
        n = (0, l.e7)([h.Z], () => h.Z.getGuildProfile()),
        s = i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.traits) && void 0 !== e ? e : [];
        }, [n]),
        a = i.useCallback(
            (e, t, n) => {
                let r = [...s];
                (r[t] = N({}, s[t], n)), g.Z.updateGuildProfile(e, { traits: r });
            },
            [s]
        );
    return (0, r.jsxs)(o.hjN, {
        className: j.section,
        children: [
            (0, r.jsxs)('div', {
                className: j.sectionHeader,
                children: [
                    (0, r.jsx)(o.vwX, { children: b.NW.string(b.t.S6JNrq) }),
                    (0, r.jsx)(o.R94, {
                        type: 'description',
                        children: b.NW.string(b.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: x.grid,
                children: O.map((e) => {
                    var n;
                    return (0, r.jsx)(
                        _,
                        {
                            guild: t,
                            trait: null !== (n = s[e]) && void 0 !== n ? n : v,
                            index: e,
                            onTraitUpdate: a
                        },
                        'trait-'.concat(e)
                    );
                })
            })
        ]
    });
}
