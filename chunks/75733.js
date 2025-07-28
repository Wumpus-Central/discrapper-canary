(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(596454),
    d = n(318766),
    u = n(907040),
    m = n(176354),
    g = n(434404),
    p = n(185923),
    h = n(388032),
    f = n(186667),
    x = n(381109);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let j = { label: '' };
function v(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: l } = e,
        a = i.useRef(null),
        s = i.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          var e;
                          let n = m.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, r.jsx)(c.Z, {
                              animated: null != (e = t.animated) && e,
                              emojiId: t.id,
                              emojiName: n
                          });
                      },
            [t]
        );
    return n
        ? (0, r.jsx)(d.Z, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: s
          })
        : (0, r.jsx)(o.yRy, {
              targetElementRef: a,
              position: 'bottom',
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(u.Z, {
                      closePopout: t,
                      onSelectEmoji: l(t),
                      pickerIntention: p.Hz.GUILD_PROFILE
                  });
              },
              children: (e, t) => {
                  var n, i;
                  let { isShown: l } = t;
                  return (0, r.jsx)(
                      d.Z,
                      ((n = b({}, e)),
                      (i = i =
                          {
                              ref: a,
                              tabIndex: 0,
                              active: l,
                              renderButtonContents: s
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
                      n)
                  );
              }
          });
}
function _(e) {
    let { guildId: t, trait: n, index: l, onTraitUpdate: c, disabled: d } = e,
        u = i.useCallback(() => {
            c(t, l, {
                emoji: void 0,
                label: ''
            });
        }, [t, l, c]),
        m = i.useCallback(
            (e) => (n) => {
                let { emoji: r, willClose: i } = n;
                (c(t, l, { emoji: null != r ? r : void 0 }), i && e());
            },
            [t, l, c]
        ),
        [g, p] = i.useState(!1),
        h = i.useCallback(() => p(!0), []),
        x = i.useCallback(() => p(!1), []),
        b = i.useCallback(
            (e) => {
                c(t, l, { label: e });
            },
            [t, l, c]
        ),
        j = i.useMemo(() => n.emoji, [n.emoji]),
        _ = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, r.jsxs)('div', {
        className: f.traitWrapper,
        children: [
            (0, r.jsx)(s.Is, {
                'aria-disabled': d,
                disabled: d,
                value: n.label,
                onChange: b,
                maxLength: 24,
                prefixElement: (0, r.jsx)(v, {
                    emoji: j,
                    disabled: d,
                    handleSelectEmoji: m
                }),
                className: a()(f.traitContainer, { [f.traitContainerFocused]: g }),
                inputClassName: f.traitInput,
                onFocus: h,
                onBlur: x
            }),
            _ &&
                (0, r.jsx)(o.P3F, {
                    onClick: u,
                    className: f.traitRemoveButton,
                    children: (0, r.jsx)(o.k$p, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
        ]
    });
}
let O = [0, 1, 2, 3, 4];
function y(e) {
    let { profile: t, canManageGuild: n } = e,
        l = i.useMemo(() => t.traits, [t]),
        a = i.useCallback(
            (e, t, n) => {
                let r = [...l];
                ((r[t] = b({}, l[t], n)), g.Z.updateGuildProfile(e, { traits: r }));
            },
            [l]
        );
    return (0, r.jsxs)(o.hjN, {
        className: x.section,
        children: [
            (0, r.jsxs)('div', {
                className: x.sectionHeader,
                children: [
                    (0, r.jsx)(o.vwX, { children: h.intl.string(h.t.S6JNrq) }),
                    (0, r.jsx)(o.R94, {
                        type: 'description',
                        children: h.intl.string(h.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: f.grid,
                children: O.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        _,
                        {
                            guildId: t.id,
                            trait: null != (i = l[e]) ? i : j,
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
