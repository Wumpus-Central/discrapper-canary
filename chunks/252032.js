n.d(t, { Z: () => N }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(904245),
    s = n(257559),
    o = n(541716),
    c = n(893718),
    d = n(540059),
    u = n(314897),
    h = n(323873),
    p = n(430824),
    m = n(496675),
    f = n(585483),
    g = n(630388),
    _ = n(838440),
    C = n(930282),
    x = n(955384),
    v = n(981631),
    E = n(46124);
function I(e) {
    let { value: t, channel: n } = e;
    return (0, _.v)({
        type: o.Ie.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1
    });
}
function b(e) {
    let { channel: t, message: n } = e,
        { id: o } = t,
        { id: c } = n,
        f = t.getGuildId(),
        _ = (0, a.e7)([p.Z], () => p.Z.getGuild(f), [f]),
        C = t.type === v.d4z.GUILD_ANNOUNCEMENT,
        b = null != _ && _.hasFeature(v.oNc.NEWS),
        N = C && b,
        {
            editingMessage: T,
            editingTextValue: S,
            editingRichValue: j
        } = (0, a.cj)(
            [h.Z],
            () => ({
                editingMessage: h.Z.getEditingMessage(o),
                editingTextValue: h.Z.getEditingTextValue(o),
                editingRichValue: h.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        A = (0, a.e7)([u.default], () => u.default.getId()),
        y = l.useCallback(
            (e, n, i) => {
                let { content: l } = i,
                    a = m.Z.can(v.Plq.MANAGE_MESSAGES, t),
                    o = null != T && null != T.author ? T.author.id : null;
                return N && (o === A || a) && null != T && (0, g.yE)(T.flags, v.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, n, l) : r.Z.editMessage(e, n, { content: l }), Promise.resolve();
            },
            [T, N, A, t]
        ),
        P = l.useCallback(
            (e) =>
                (0, l.createElement)(Z, {
                    ...e,
                    className: E.channelTextArea,
                    key: c
                }),
            [c]
        ),
        R = (0, d.R6)('EditorWrapper');
    return null != S && null != j
        ? (0, i.jsx)(x.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: S,
              richValue: j,
              onCancel: r.Z.endEditMessage,
              onChange: r.Z.updateEditMessage,
              onConfirmDelete: s.Z.confirmDelete,
              saveMessage: y,
              validateEdit: I,
              isRefreshEnabled: R,
              children: P
          })
        : null;
}
function Z(e) {
    let { textValue: t, richValue: n, message: a, channel: r, onChange: s, onSubmit: d, onKeyDown: u, renderLeftAccessories: h } = e,
        [p, m] = l.useState(!0),
        g = l.useCallback(() => m(!0), []),
        _ = l.useCallback(() => m(!1), []);
    return (
        l.useEffect(
            () => (
                f.S.subscribe(v.CkL.TEXTAREA_FOCUS, g),
                f.S.subscribe(v.CkL.TEXTAREA_BLUR, _),
                () => {
                    f.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, g), f.S.unsubscribe(v.CkL.TEXTAREA_BLUR, _);
                }
            ),
            [g, _]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: E.channelTextArea,
                textValue: t,
                richValue: n,
                channel: r,
                type: o.Ie.EDIT,
                onChange: s,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return d(t);
                },
                onKeyDown: u,
                focused: p,
                onFocus: g,
                onBlur: _,
                renderLeftAccessories: h
            },
            a.id
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: a } = e;
    return n
        ? (0, i.jsx)(b, {
              channel: a,
              message: l
          })
        : (0, i.jsx)(C.ZP, {
              message: l,
              content: t
          });
}
