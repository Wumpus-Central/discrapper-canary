n.d(t, { Z: () => _ }), n(997841), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(95015),
    a = n(442837),
    o = n(904245),
    s = n(911969),
    c = n(541716),
    u = n(893718),
    d = n(314897),
    p = n(323873),
    f = n(430824),
    h = n(496675),
    m = n(585483),
    g = n(838440),
    b = n(819514),
    C = n(930282),
    y = n(955384),
    v = n(981631),
    x = n(224837),
    O = n(548498);
function E(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
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
        g = (0, a.e7)([f.Z], () => f.Z.getGuild(m), [m]),
        C = t.type === v.d4z.GUILD_ANNOUNCEMENT,
        j = null != g && g.features.has(v.GuildFeatures.NEWS),
        _ = C && j,
        {
            editingMessage: P,
            editingTextValue: I,
            editingRichValue: Z,
        } = (0, a.cj)(
            [p.Z],
            () => ({
                editingMessage: p.Z.getEditingMessage(c),
                editingTextValue: p.Z.getEditingTextValue(c),
                editingRichValue: p.Z.getEditingRichValue(c),
            }),
            [c],
        ),
        T = (0, a.e7)([d.default], () => d.default.getId()),
        N = r.useCallback(
            (e, i, r) => {
                let { content: a } = r,
                    c = h.Z.can(v.Plq.MANAGE_MESSAGES, t),
                    u = null != P && null != P.author ? P.author.id : null,
                    d = _ && (u === T || c),
                    p = {
                        content: a,
                        components: void 0,
                    };
                if (n.hasFlag(v.iLy.IS_COMPONENTS_V2)) {
                    var f;
                    let e = (null == (f = n.components[0]) ? void 0 : f.type) === s.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== s.re.TEXT_DISPLAY);
                    t.splice(+!!e, 0, {
                        type: s.re.TEXT_DISPLAY,
                        content: a,
                        id: "".concat(x.Kb),
                    }),
                        (p.content = ""),
                        (p.components = t);
                }
                return (
                    d && null != P && (0, l.yE)(P.flags, v.iLy.CROSSPOSTED)
                        ? b.Z.confirmEdit(e, i, p)
                        : o.Z.editMessage(e, i, p),
                    Promise.resolve()
                );
            },
            [P, _, T, t, n],
        ),
        A = r.useCallback(
            (e) => {
                var t, n;
                return (0, r.createElement)(
                    S,
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
                            className: O.channelTextArea,
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
              onCancel: o.Z.endEditMessage,
              onChange: o.Z.updateEditMessage,
              onConfirmDelete: b.Z.confirmDelete,
              saveMessage: N,
              validateEdit: E,
              children: A,
          })
        : null;
}
function S(e) {
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
        [f, h] = r.useState(!0),
        g = r.useCallback(() => h(!0), []),
        b = r.useCallback(() => h(!1), []);
    return (
        r.useEffect(
            () => (
                m.S.subscribe(v.CkL.TEXTAREA_FOCUS, g),
                m.S.subscribe(v.CkL.TEXTAREA_BLUR, b),
                () => {
                    m.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(v.CkL.TEXTAREA_BLUR, b);
                }
            ),
            [g, b],
        ),
        (0, i.jsx)(
            u.ZP,
            {
                className: O.channelTextArea,
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
                focused: f,
                onFocus: g,
                onBlur: b,
                renderLeftAccessories: p,
            },
            l.id,
        )
    );
}
function _(e, t, n) {
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
