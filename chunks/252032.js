n.d(t, { Z: () => S }), n(997841), n(388685);
var i = n(951288),
    r = n(647438),
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
    C = n(930282),
    y = n(955384),
    _ = n(981631),
    v = n(224837),
    x = n(5898);
function O(e) {
    let { value: t, channel: n } = e;
    return (0, b.v)({
        type: c.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function j(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        b = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        C = t.type === _.d4z.GUILD_ANNOUNCEMENT,
        j = null != b && b.features.has(_.oNc.NEWS),
        S = C && j,
        {
            editingMessage: P,
            editingTextValue: I,
            editingRichValue: Z,
        } = (0, l.cj)(
            [p.Z],
            () => ({
                editingMessage: p.Z.getEditingMessage(c),
                editingTextValue: p.Z.getEditingTextValue(c),
                editingRichValue: p.Z.getEditingRichValue(c),
            }),
            [c],
        ),
        T = (0, l.e7)([d.default], () => d.default.getId()),
        N = r.useCallback(
            (e, i, r) => {
                let { content: l } = r,
                    c = f.Z.can(_.Plq.MANAGE_MESSAGES, t),
                    u = null != P && null != P.author ? P.author.id : null,
                    d = S && (u === T || c),
                    p = {
                        content: l,
                        components: void 0,
                    };
                if (n.hasFlag(_.iLy.IS_COMPONENTS_V2)) {
                    var h;
                    let e = (null == (h = n.components[0]) ? void 0 : h.type) === s.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== s.re.TEXT_DISPLAY);
                    t.splice(+!!e, 0, {
                        type: s.re.TEXT_DISPLAY,
                        content: l,
                        id: "".concat(v.Kb),
                    }),
                        (p.content = ""),
                        (p.components = t);
                }
                return (
                    d && null != P && (0, g.yE)(P.flags, _.iLy.CROSSPOSTED)
                        ? o.Z.confirmEdit(e, i, p)
                        : a.Z.editMessage(e, i, p),
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
                            key: u,
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
            [u],
        );
    return null != I && null != Z
        ? (0, i.jsx)(y.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: I,
              richValue: Z,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: o.Z.confirmDelete,
              saveMessage: N,
              validateEdit: O,
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
            onSubmit: s,
            onKeyDown: d,
            renderLeftAccessories: p,
        } = e,
        [h, f] = r.useState(!0),
        g = r.useCallback(() => f(!0), []),
        b = r.useCallback(() => f(!1), []);
    return (
        r.useEffect(
            () => (
                m.S.subscribe(_.CkL.TEXTAREA_FOCUS, g),
                m.S.subscribe(_.CkL.TEXTAREA_BLUR, b),
                () => {
                    m.S.unsubscribe(_.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(_.CkL.TEXTAREA_BLUR, b);
                }
            ),
            [g, b],
        ),
        (0, i.jsx)(
            u.ZP,
            {
                className: x.channelTextArea,
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
                renderLeftAccessories: p,
            },
            l.id,
        )
    );
}
function S(e, t, n) {
    let { message: r, channel: l, compact: a } = e;
    return n
        ? (0, i.jsx)(j, {
              channel: l,
              message: r,
          })
        : (0, i.jsx)(C.ZP, {
              message: r,
              content: t,
              compact: null != a && a,
          });
}
