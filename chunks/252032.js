(n.d(t, { Z: () => S }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(904245),
    o = n(257559),
    s = n(911969),
    c = n(541716),
    u = n(893718),
    d = n(314897),
    p = n(323873),
    h = n(430824),
    f = n(496675),
    m = n(585483),
    g = n(630388),
    b = n(838440),
    _ = n(930282),
    y = n(955384),
    C = n(981631),
    x = n(224837),
    v = n(30804);
function j(e) {
    let { value: t, channel: n } = e;
    return (0, b.v)({
        type: c.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function O(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        b = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        _ = t.type === C.d4z.GUILD_ANNOUNCEMENT,
        O = null != b && b.features.has(C.oNc.NEWS),
        S = _ && O,
        {
            editingMessage: P,
            editingTextValue: I,
            editingRichValue: Z
        } = (0, l.cj)(
            [p.Z],
            () => ({
                editingMessage: p.Z.getEditingMessage(c),
                editingTextValue: p.Z.getEditingTextValue(c),
                editingRichValue: p.Z.getEditingRichValue(c)
            }),
            [c]
        ),
        T = (0, l.e7)([d.default], () => d.default.getId()),
        N = i.useCallback(
            (e, r, i) => {
                let { content: l } = i,
                    c = f.Z.can(C.Plq.MANAGE_MESSAGES, t),
                    u = null != P && null != P.author ? P.author.id : null,
                    d = S && (u === T || c),
                    p = {
                        content: l,
                        components: void 0
                    };
                if (n.hasFlag(C.iLy.IS_COMPONENTS_V2)) {
                    var h;
                    let e = (null == (h = n.components[0]) ? void 0 : h.type) === s.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== s.re.TEXT_DISPLAY);
                    (t.splice(+!!e, 0, {
                        type: s.re.TEXT_DISPLAY,
                        content: l,
                        id: ''.concat(x.Kb)
                    }),
                        (p.content = ''),
                        (p.components = t));
                }
                return (d && null != P && (0, g.yE)(P.flags, C.iLy.CROSSPOSTED) ? o.Z.confirmEdit(e, r, p) : a.Z.editMessage(e, r, p), Promise.resolve());
            },
            [P, S, T, t, n]
        ),
        A = i.useCallback(
            (e) => {
                var t, n;
                return (0, i.createElement)(
                    E,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            className: v.channelTextArea,
                            key: u
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            },
            [u]
        );
    return null != I && null != Z
        ? (0, r.jsx)(y.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: I,
              richValue: Z,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: o.Z.confirmDelete,
              saveMessage: N,
              validateEdit: j,
              children: A
          })
        : null;
}
function E(e) {
    let { textValue: t, richValue: n, message: l, channel: a, onChange: o, onSubmit: s, onKeyDown: d, renderLeftAccessories: p } = e,
        [h, f] = i.useState(!0),
        g = i.useCallback(() => f(!0), []),
        b = i.useCallback(() => f(!1), []);
    return (
        i.useEffect(
            () => (
                m.S.subscribe(C.CkL.TEXTAREA_FOCUS, g),
                m.S.subscribe(C.CkL.TEXTAREA_BLUR, b),
                () => {
                    (m.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(C.CkL.TEXTAREA_BLUR, b));
                }
            ),
            [g, b]
        ),
        (0, r.jsx)(
            u.ZP,
            {
                className: v.channelTextArea,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.Ie.EDIT,
                onChange: o,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return s(t);
                },
                onKeyDown: d,
                focused: h,
                onFocus: g,
                onBlur: b,
                renderLeftAccessories: p
            },
            l.id
        )
    );
}
function S(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return n
        ? (0, r.jsx)(O, {
              channel: l,
              message: i
          })
        : (0, r.jsx)(_.ZP, {
              message: i,
              content: t,
              compact: null != a && a
          });
}
