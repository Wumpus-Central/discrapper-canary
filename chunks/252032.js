(n.d(t, { Z: () => P }), n(997841), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(904245),
    s = n(257559),
    l = n(911969),
    c = n(541716),
    u = n(893718),
    d = n(314897),
    f = n(323873),
    _ = n(430824),
    p = n(496675),
    h = n(585483),
    m = n(630388),
    g = n(838440),
    E = n(930282),
    b = n(955384),
    y = n(981631),
    O = n(224837),
    v = n(30804);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
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
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { value: t, channel: n } = e;
    return (0, g.v)({
        type: c.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function C(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        h = t.getGuildId(),
        g = (0, o.e7)([_.Z], () => _.Z.getGuild(h), [h]),
        E = t.type === y.d4z.GUILD_ANNOUNCEMENT,
        I = null != g && g.features.has(y.oNc.NEWS),
        S = E && I,
        {
            editingMessage: C,
            editingTextValue: P,
            editingRichValue: w
        } = (0, o.cj)(
            [f.Z],
            () => ({
                editingMessage: f.Z.getEditingMessage(c),
                editingTextValue: f.Z.getEditingTextValue(c),
                editingRichValue: f.Z.getEditingRichValue(c)
            }),
            [c]
        ),
        D = (0, o.e7)([d.default], () => d.default.getId()),
        L = i.useCallback(
            (e, r, i) => {
                let { content: o } = i,
                    c = p.Z.can(y.Plq.MANAGE_MESSAGES, t),
                    u = null != C && null != C.author ? C.author.id : null,
                    d = S && (u === D || c),
                    f = {
                        content: o,
                        components: void 0
                    };
                if (n.hasFlag(y.iLy.IS_COMPONENTS_V2)) {
                    var _;
                    let e = (null == (_ = n.components[0]) ? void 0 : _.type) === l.re.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== l.re.TEXT_DISPLAY);
                    (t.splice(+!!e, 0, {
                        type: l.re.TEXT_DISPLAY,
                        content: o,
                        id: ''.concat(O.Kb)
                    }),
                        (f.content = ''),
                        (f.components = t));
                }
                return (d && null != C && (0, m.yE)(C.flags, y.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, r, f) : a.Z.editMessage(e, r, f), Promise.resolve());
            },
            [C, S, D, t, n]
        ),
        x = i.useCallback(
            (e) =>
                (0, i.createElement)(
                    R,
                    A(T({}, e), {
                        className: v.channelTextArea,
                        key: u
                    })
                ),
            [u]
        );
    return null != P && null != w
        ? (0, r.jsx)(b.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: P,
              richValue: w,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: s.Z.confirmDelete,
              saveMessage: L,
              validateEdit: N,
              children: x
          })
        : null;
}
function R(e) {
    let { textValue: t, richValue: n, message: o, channel: a, onChange: s, onSubmit: l, onKeyDown: d, renderLeftAccessories: f } = e,
        [_, p] = i.useState(!0),
        m = i.useCallback(() => p(!0), []),
        g = i.useCallback(() => p(!1), []);
    return (
        i.useEffect(
            () => (
                h.S.subscribe(y.CkL.TEXTAREA_FOCUS, m),
                h.S.subscribe(y.CkL.TEXTAREA_BLUR, g),
                () => {
                    (h.S.unsubscribe(y.CkL.TEXTAREA_FOCUS, m), h.S.unsubscribe(y.CkL.TEXTAREA_BLUR, g));
                }
            ),
            [m, g]
        ),
        (0, r.jsx)(
            u.ZP,
            {
                className: v.channelTextArea,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.Ie.EDIT,
                onChange: s,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return l(t);
                },
                onKeyDown: d,
                focused: _,
                onFocus: m,
                onBlur: g,
                renderLeftAccessories: f
            },
            o.id
        )
    );
}
function P(e, t, n) {
    let { message: i, channel: o, compact: a } = e;
    return n
        ? (0, r.jsx)(C, {
              channel: o,
              message: i
          })
        : (0, r.jsx)(E.ZP, {
              message: i,
              content: t,
              compact: null != a && a
          });
}
