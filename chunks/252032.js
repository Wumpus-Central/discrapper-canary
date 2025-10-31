n.d(t, { Z: () => S }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(904245),
    o = n(911969),
    s = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    p = n(430824),
    f = n(496675),
    h = n(585483),
    m = n(630388),
    g = n(838440),
    b = n(819514),
    _ = n(930282),
    y = n(955384),
    C = n(981631),
    v = n(224837),
    O = n(360514);
function x(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
        type: s.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function E(e) {
    let { channel: t, message: n } = e,
        { id: s } = t,
        { id: c } = n,
        h = t.getGuildId(),
        g = (0, l.e7)([p.Z], () => p.Z.getGuild(h), [h]),
        _ = t.type === C.d4z.GUILD_ANNOUNCEMENT,
        E = null != g && g.features.has(C.GuildFeatures.NEWS),
        S = _ && E,
        {
            editingMessage: P,
            editingTextValue: I,
            editingRichValue: Z,
        } = (0, l.cj)(
            [d.Z],
            () => ({
                editingMessage: d.Z.getEditingMessage(s),
                editingTextValue: d.Z.getEditingTextValue(s),
                editingRichValue: d.Z.getEditingRichValue(s),
            }),
            [s],
        ),
        T = (0, l.e7)([u.default], () => u.default.getId()),
        N = i.useCallback(
            (e, r, i) => {
                let { content: l } = i,
                    s = f.Z.can(C.Plq.MANAGE_MESSAGES, t),
                    c = null != P && null != P.author ? P.author.id : null,
                    u = S && (c === T || s),
                    d = {
                        content: l,
                        components: void 0,
                    };
                if (n.hasFlag(C.iLy.IS_COMPONENTS_V2)) {
                    var p;
                    let e = (null == (p = n.components[0]) ? void 0 : p.type) === o.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.re.TEXT_DISPLAY);
                    t.splice(+!!e, 0, {
                        type: o.re.TEXT_DISPLAY,
                        content: l,
                        id: "".concat(v.Kb),
                    }),
                        (d.content = ""),
                        (d.components = t);
                }
                return (
                    u && null != P && (0, m.yE)(P.flags, C.iLy.CROSSPOSTED)
                        ? b.Z.confirmEdit(e, r, d)
                        : a.Z.editMessage(e, r, d),
                    Promise.resolve()
                );
            },
            [P, S, T, t, n],
        ),
        A = i.useCallback(
            (e) => {
                var t, n;
                return (0, i.createElement)(
                    j,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            className: O.channelTextArea,
                            key: c,
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
                    t),
                );
            },
            [c],
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
              onConfirmDelete: b.Z.confirmDelete,
              saveMessage: N,
              validateEdit: x,
              children: A,
          })
        : null;
}
function j(e) {
    let {
            textValue: t,
            richValue: n,
            message: l,
            channel: a,
            onChange: o,
            onSubmit: u,
            onKeyDown: d,
            renderLeftAccessories: p,
        } = e,
        [f, m] = i.useState(!0),
        g = i.useCallback(() => m(!0), []),
        b = i.useCallback(() => m(!1), []);
    return (
        i.useEffect(
            () => (
                h.S.subscribe(C.CkL.TEXTAREA_FOCUS, g),
                h.S.subscribe(C.CkL.TEXTAREA_BLUR, b),
                () => {
                    h.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, g), h.S.unsubscribe(C.CkL.TEXTAREA_BLUR, b);
                }
            ),
            [g, b],
        ),
        (0, r.jsx)(
            c.ZP,
            {
                className: O.channelTextArea,
                textValue: t,
                richValue: n,
                channel: a,
                type: s.Ie.EDIT,
                onChange: o,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return u(t);
                },
                onKeyDown: d,
                focused: f,
                onFocus: g,
                onBlur: b,
                renderLeftAccessories: p,
            },
            l.id,
        )
    );
}
function S(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return n
        ? (0, r.jsx)(E, {
              channel: l,
              message: i,
          })
        : (0, r.jsx)(_.ZP, {
              message: i,
              content: t,
              compact: null != a && a,
          });
}
