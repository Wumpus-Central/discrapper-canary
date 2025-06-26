n.d(t, { Z: () => O }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(904245),
    a = n(257559),
    s = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    p = n(430824),
    h = n(496675),
    f = n(585483),
    m = n(630388),
    g = n(838440),
    b = n(930282),
    _ = n(955384),
    y = n(981631),
    C = n(30804);
function x(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
        type: s.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function v(e) {
    let { channel: t, message: n } = e,
        { id: s } = t,
        { id: c } = n,
        f = t.getGuildId(),
        g = (0, l.e7)([p.Z], () => p.Z.getGuild(f), [f]),
        b = t.type === y.d4z.GUILD_ANNOUNCEMENT,
        v = null != g && g.hasFeature(y.oNc.NEWS),
        O = b && v,
        {
            editingMessage: E,
            editingTextValue: I,
            editingRichValue: S
        } = (0, l.cj)(
            [d.Z],
            () => ({
                editingMessage: d.Z.getEditingMessage(s),
                editingTextValue: d.Z.getEditingTextValue(s),
                editingRichValue: d.Z.getEditingRichValue(s)
            }),
            [s]
        ),
        P = (0, l.e7)([u.default], () => u.default.getId()),
        Z = i.useCallback(
            (e, n, r) => {
                let { content: i } = r,
                    l = h.Z.can(y.Plq.MANAGE_MESSAGES, t),
                    s = null != E && null != E.author ? E.author.id : null;
                return O && (s === P || l) && null != E && (0, m.yE)(E.flags, y.iLy.CROSSPOSTED) ? a.Z.confirmEdit(e, n, i) : o.Z.editMessage(e, n, { content: i }), Promise.resolve();
            },
            [E, O, P, t]
        ),
        N = i.useCallback(
            (e) => {
                var t, n;
                return (0, i.createElement)(
                    j,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            className: C.channelTextArea,
                            key: c
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
            [c]
        );
    return null != I && null != S
        ? (0, r.jsx)(_.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: I,
              richValue: S,
              onCancel: o.Z.endEditMessage,
              onChange: o.Z.updateEditMessage,
              onConfirmDelete: a.Z.confirmDelete,
              saveMessage: Z,
              validateEdit: x,
              children: N
          })
        : null;
}
function j(e) {
    let { textValue: t, richValue: n, message: l, channel: o, onChange: a, onSubmit: u, onKeyDown: d, renderLeftAccessories: p } = e,
        [h, m] = i.useState(!0),
        g = i.useCallback(() => m(!0), []),
        b = i.useCallback(() => m(!1), []);
    return (
        i.useEffect(
            () => (
                f.S.subscribe(y.CkL.TEXTAREA_FOCUS, g),
                f.S.subscribe(y.CkL.TEXTAREA_BLUR, b),
                () => {
                    f.S.unsubscribe(y.CkL.TEXTAREA_FOCUS, g), f.S.unsubscribe(y.CkL.TEXTAREA_BLUR, b);
                }
            ),
            [g, b]
        ),
        (0, r.jsx)(
            c.Z,
            {
                className: C.channelTextArea,
                textValue: t,
                richValue: n,
                channel: o,
                type: s.Ie.EDIT,
                onChange: a,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return u(t);
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
function O(e, t, n) {
    let { message: i, channel: l, compact: o } = e;
    return n
        ? (0, r.jsx)(v, {
              channel: l,
              message: i
          })
        : (0, r.jsx)(b.ZP, {
              message: i,
              content: t,
              compact: null != o && o
          });
}
