n.d(t, { Z: () => y }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(596454),
    c = n(225433),
    u = n(318766),
    d = n(907040),
    m = n(273039),
    g = n(176354),
    p = n(434404),
    h = n(185923),
    f = n(388032),
    x = n(186667),
    b = n(381109);
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
let _ = { label: '' };
function v(e) {
    let { emoji: t, disabled: n, handleClearEmoji: l, handleSelectEmoji: s } = e,
        p = i.useRef(null),
        f = i.useMemo(
            () =>
                null == t || null == t.name
                    ? null
                    : function () {
                          var e;
                          let n = g.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
                          return (0, r.jsx)(o.Z, {
                              animated: null != (e = t.animated) && e,
                              emojiId: t.id,
                              emojiName: n
                          });
                      },
            [t]
        );
    return n
        ? (0, r.jsx)(u.Z, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: f
          })
        : (0, r.jsx)(m.Z, {
              className: x.emojiWrapper,
              buttonClassName: x.removeButton,
              look: c.Z.Looks.FILLED,
              hasSetEmoji: null != t && null != t.name,
              onClick: l,
              children: (0, r.jsx)(a.yRy, {
                  targetElementRef: p,
                  position: 'bottom',
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(d.Z, {
                          closePopout: t,
                          onSelectEmoji: s(t),
                          pickerIntention: h.Hz.GUILD_PROFILE
                      });
                  },
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          u.Z,
                          ((n = j({}, e)),
                          (i = i =
                              {
                                  ref: p,
                                  tabIndex: 0,
                                  active: l,
                                  renderButtonContents: f
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
              })
          });
}
function O(e) {
    let { guildId: t, trait: n, index: l, onTraitUpdate: o, disabled: c } = e,
        u = i.useCallback(() => {
            o(t, l, { emoji: void 0 });
        }, [t, l, o]),
        d = i.useCallback(
            (e) => (n, r) => {
                o(t, l, { emoji: null != n ? n : void 0 }), r && e();
            },
            [t, l, o]
        ),
        [m, g] = i.useState(!1),
        p = i.useCallback(() => g(!0), []),
        h = i.useCallback(() => g(!1), []),
        f = i.useCallback(
            (e) => {
                o(t, l, { label: e });
            },
            [t, l, o]
        ),
        b = i.useMemo(() => n.emoji, [n.emoji]);
    return (0, r.jsx)(a.oil, {
        'aria-disabled': c,
        disabled: c,
        value: n.label,
        onChange: f,
        maxLength: 24,
        prefixElement: (0, r.jsx)(v, {
            emoji: b,
            disabled: c,
            handleClearEmoji: u,
            handleSelectEmoji: d
        }),
        className: s()(x.traitContainer, { [x.traitContainerFocused]: m }),
        inputClassName: x.traitInput,
        onFocus: p,
        onBlur: h
    });
}
let C = [0, 1, 2, 3, 4];
function y(e) {
    let { profile: t, canManageGuild: n } = e,
        l = i.useMemo(() => t.traits, [t]),
        s = i.useCallback(
            (e, t, n) => {
                let r = [...l];
                (r[t] = j({}, l[t], n)), p.Z.updateGuildProfile(e, { traits: r });
            },
            [l]
        );
    return (0, r.jsxs)(a.hjN, {
        className: b.section,
        children: [
            (0, r.jsxs)('div', {
                className: b.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: f.intl.string(f.t.S6JNrq) }),
                    (0, r.jsx)(a.R94, {
                        type: 'description',
                        children: f.intl.string(f.t.l7Ig5e)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: x.grid,
                children: C.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        O,
                        {
                            guildId: t.id,
                            trait: null != (i = l[e]) ? i : _,
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
