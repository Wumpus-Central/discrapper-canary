n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(596454),
    c = n(318766),
    u = n(907040),
    d = n(176354),
    m = n(434404),
    g = n(185923),
    p = n(388032),
    f = n(186667),
    h = n(381109);
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
let b = { label: '' };
function j(e) {
    let { emoji: t, disabled: n, handleSelectEmoji: l } = e,
        s = i.useRef(null),
        m = i.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          var e;
                          let n = d.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, r.jsx)(o.Z, {
                              animated: null != (e = t.animated) && e,
                              emojiId: t.id,
                              emojiName: n
                          });
                      },
            [t]
        );
    return n
        ? (0, r.jsx)(c.Z, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: m
          })
        : (0, r.jsx)(a.yRy, {
              targetElementRef: s,
              position: 'bottom',
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(u.Z, {
                      closePopout: t,
                      onSelectEmoji: l(t),
                      pickerIntention: g.Hz.GUILD_PROFILE
                  });
              },
              children: (e, t) => {
                  var n, i;
                  let { isShown: l } = t;
                  return (0, r.jsx)(
                      c.Z,
                      ((n = x({}, e)),
                      (i = i =
                          {
                              ref: s,
                              tabIndex: 0,
                              active: l,
                              renderButtonContents: m
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
    let { guildId: t, trait: n, index: l, onTraitUpdate: o, disabled: c } = e,
        u = i.useCallback(() => {
            o(t, l, {
                emoji: void 0,
                label: ''
            });
        }, [t, l, o]),
        d = i.useCallback(
            (e) => (n) => {
                let { emoji: r, willClose: i } = n;
                o(t, l, { emoji: null != r ? r : void 0 }), i && e();
            },
            [t, l, o]
        ),
        [m, g] = i.useState(!1),
        p = i.useCallback(() => g(!0), []),
        h = i.useCallback(() => g(!1), []),
        x = i.useCallback(
            (e) => {
                o(t, l, { label: e });
            },
            [t, l, o]
        ),
        b = i.useMemo(() => n.emoji, [n.emoji]),
        _ = (null != n.label && n.label.length > 0) || null != n.emoji;
    return (0, r.jsxs)('div', {
        className: f.traitWrapper,
        children: [
            (0, r.jsx)(a.oil, {
                'aria-disabled': c,
                disabled: c,
                value: n.label,
                onChange: x,
                maxLength: 24,
                prefixElement: (0, r.jsx)(j, {
                    emoji: b,
                    disabled: c,
                    handleSelectEmoji: d
                }),
                className: s()(f.traitContainer, { [f.traitContainerFocused]: m }),
                inputClassName: f.traitInput,
                onFocus: p,
                onBlur: h
            }),
            _ &&
                (0, r.jsx)(a.P3F, {
                    onClick: u,
                    className: f.traitRemoveButton,
                    children: (0, r.jsx)(a.k$p, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
        ]
    });
}
let v = [0, 1, 2, 3, 4];
function O(e) {
    let { profile: t, canManageGuild: n } = e,
        l = i.useMemo(() => t.traits, [t]),
        s = i.useCallback(
            (e, t, n) => {
                let r = [...l];
                (r[t] = x({}, l[t], n)), m.Z.updateGuildProfile(e, { traits: r });
            },
            [l]
        );
    return (0, r.jsxs)(a.hjN, {
        className: h.section,
        children: [
            (0, r.jsxs)('div', {
                className: h.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: p.intl.string(p.t.S6JNrq) }),
                    (0, r.jsx)(a.R94, {
                        type: 'description',
                        children: p.intl.string(p.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: f.grid,
                children: v.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        _,
                        {
                            guildId: t.id,
                            trait: null != (i = l[e]) ? i : b,
                            index: e,
                            onTraitUpdate: s,
                            disabled: !n
                        },
                        'trait-'.concat(e)
                    );
                })
            })
        ]
    });
}
