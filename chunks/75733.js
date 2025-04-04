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
    let { emoji: t, disabled: n, handleClearEmoji: s, handleSelectEmoji: a } = e,
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
        ? (0, r.jsx)(d.Z, {
              tabIndex: -1,
              active: !1,
              renderButtonContents: f
          })
        : (0, r.jsx)(m.Z, {
              className: b.emojiWrapper,
              buttonClassName: b.removeButton,
              look: c.Z.Looks.FILLED,
              hasSetEmoji: null != t && null != t.name,
              onClick: s,
              children: (0, r.jsx)(l.yRy, {
                  targetElementRef: p,
                  position: 'bottom',
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(u.Z, {
                          closePopout: t,
                          onSelectEmoji: a(t),
                          pickerIntention: h.Hz.GUILD_PROFILE
                      });
                  },
                  children: (e, t) => {
                      var n, i;
                      let { isShown: s } = t;
                      return (0, r.jsx)(
                          d.Z,
                          ((n = j({}, e)),
                          (i = i =
                              {
                                  ref: p,
                                  tabIndex: 0,
                                  active: s,
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
function v(e) {
    let { guildId: t, trait: n, index: s, onTraitUpdate: o, disabled: c } = e,
        d = i.useCallback(() => {
            o(t, s, { emoji: void 0 });
        }, [t, s, o]),
        u = i.useCallback(
            (e) => (n, r) => {
                o(t, s, { emoji: null != n ? n : void 0 }), r && e();
            },
            [t, s, o]
        ),
        [m, g] = i.useState(!1),
        p = i.useCallback(() => g(!0), []),
        h = i.useCallback(() => g(!1), []),
        f = i.useCallback(
            (e) => {
                o(t, s, { label: e });
            },
            [t, s, o]
        ),
        x = i.useMemo(() => n.emoji, [n.emoji]);
    return (0, r.jsx)(l.oil, {
        'aria-disabled': c,
        disabled: c,
        value: n.label,
        onChange: f,
        maxLength: 24,
        prefixElement: (0, r.jsx)(_, {
            emoji: x,
            disabled: c,
            handleClearEmoji: d,
            handleSelectEmoji: u
        }),
        className: a()(b.traitContainer, { [b.traitContainerFocused]: m }),
        inputClassName: b.traitInput,
        onFocus: p,
        onBlur: h
    });
}
let C = [0, 1, 2, 3, 4];
function O(e) {
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
                children: C.map((e) => {
                    var i;
                    return (0, r.jsx)(
                        v,
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
