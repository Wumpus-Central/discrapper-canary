n.d(t, { Z: () => S }), n(997841), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(904245),
    o = n(911969),
    s = n(541716),
    c = n(893718),
    u = n(314897),
    d = n(323873),
    p = n(430824),
    h = n(496675),
    f = n(585483),
    m = n(630388),
    g = n(838440),
    b = n(819514),
    y = n(930282),
    C = n(955384),
    v = n(981631),
    _ = n(224837),
    x = n(5898);
function j(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
        type: s.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function O(e) {
    let { channel: t, message: n } = e,
        { id: s } = t,
        { id: c } = n,
        f = t.getGuildId(),
        g = (0, l.e7)([p.Z], () => p.Z.getGuild(f), [f]),
        y = t.type === v.d4z.GUILD_ANNOUNCEMENT,
        O = null != g && g.features.has(v.GuildFeatures.NEWS),
        S = y && O,
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
        N = r.useCallback(
            (e, i, r) => {
                let { content: l } = r,
                    s = h.Z.can(v.Plq.MANAGE_MESSAGES, t),
                    c = null != P && null != P.author ? P.author.id : null,
                    u = S && (c === T || s),
                    d = {
                        content: l,
                        components: void 0,
                    };
                if (n.hasFlag(v.iLy.IS_COMPONENTS_V2)) {
                    var p;
                    let e = (null == (p = n.components[0]) ? void 0 : p.type) === o.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.re.TEXT_DISPLAY);
                    t.splice(+!!e, 0, {
                        type: o.re.TEXT_DISPLAY,
                        content: l,
                        id: "".concat(_.Kb),
                    }),
                        (d.content = ""),
                        (d.components = t);
                }
                return (
                    u && null != P && (0, m.yE)(P.flags, v.iLy.CROSSPOSTED)
                        ? b.Z.confirmEdit(e, i, d)
                        : a.Z.editMessage(e, i, d),
                    Promise.resolve()
                );
            },
            [P, S, T, t, n],
        ),
        A = r.useCallback(
            (e) => {
                var t, n;
                return (0, r.createElement)(
                    E,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            className: x.channelTextArea,
                            key: c,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
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
        ? (0, i.jsx)(C.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: I,
              richValue: Z,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: b.Z.confirmDelete,
              saveMessage: N,
              validateEdit: j,
              children: A,
          })
        : null;
}
function E(e) {
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
        [h, m] = r.useState(!0),
        g = r.useCallback(() => m(!0), []),
        b = r.useCallback(() => m(!1), []);
    return (
        r.useEffect(
            () => (
                f.S.subscribe(v.CkL.TEXTAREA_FOCUS, g),
                f.S.subscribe(v.CkL.TEXTAREA_BLUR, b),
                () => {
                    f.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, g), f.S.unsubscribe(v.CkL.TEXTAREA_BLUR, b);
                }
            ),
            [g, b],
        ),
        (0, i.jsx)(
            c.ZP,
            {
                className: x.channelTextArea,
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
                focused: h,
                onFocus: g,
                onBlur: b,
                renderLeftAccessories: p,
            },
            l.id,
        )
    );
}
function S(e, t, n) {
    let { message: r, channel: l, compact: a } = e;
    return n
        ? (0, i.jsx)(O, {
              channel: l,
              message: r,
          })
        : (0, i.jsx)(y.ZP, {
              message: r,
              content: t,
              compact: null != a && a,
          });
}
