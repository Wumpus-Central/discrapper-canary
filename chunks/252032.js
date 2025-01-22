n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(789020),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(904245),
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
    C = n(838440),
    x = n(930282),
    v = n(955384),
    _ = n(981631),
    I = n(46124);
function E(e) {
    let { value: t, channel: n } = e;
    return (0, C.v)({
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
        C = (0, r.e7)([p.Z], () => p.Z.getGuild(f), [f]),
        x = t.type === _.d4z.GUILD_ANNOUNCEMENT,
        b = null != C && C.hasFeature(_.oNc.NEWS),
        N = x && b,
        {
            editingMessage: S,
            editingTextValue: T,
            editingRichValue: j
        } = (0, r.cj)(
            [h.Z],
            () => ({
                editingMessage: h.Z.getEditingMessage(o),
                editingTextValue: h.Z.getEditingTextValue(o),
                editingRichValue: h.Z.getEditingRichValue(o)
            }),
            [o]
        ),
        A = (0, r.e7)([u.default], () => u.default.getId()),
        y = l.useCallback(
            (e, n, i) => {
                let { content: l } = i,
                    r = m.Z.can(_.Plq.MANAGE_MESSAGES, t),
                    o = null != S && null != S.author ? S.author.id : null;
                return N && (o === A || r) && null != S && (0, g.yE)(S.flags, _.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, n, l) : a.Z.editMessage(e, n, { content: l }), Promise.resolve();
            },
            [S, N, A, t]
        ),
        P = l.useCallback(
            (e) =>
                (0, l.createElement)(Z, {
                    ...e,
                    className: I.channelTextArea,
                    key: c
                }),
            [c]
        ),
        M = (0, d.Q3)('EditorWrapper');
    return null != T && null != j
        ? (0, i.jsx)(v.Z, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: T,
              richValue: j,
              onCancel: a.Z.endEditMessage,
              onChange: a.Z.updateEditMessage,
              onConfirmDelete: s.Z.confirmDelete,
              saveMessage: y,
              validateEdit: E,
              isRefreshEnabled: M,
              children: P
          })
        : null;
}
function Z(e) {
    let { textValue: t, richValue: n, message: r, channel: a, onChange: s, onSubmit: d, onKeyDown: u, renderLeftAccessories: h } = e,
        [p, m] = l.useState(!0),
        g = l.useCallback(() => m(!0), []),
        C = l.useCallback(() => m(!1), []);
    return (
        l.useEffect(
            () => (
                f.S.subscribe(_.CkL.TEXTAREA_FOCUS, g),
                f.S.subscribe(_.CkL.TEXTAREA_BLUR, C),
                () => {
                    f.S.unsubscribe(_.CkL.TEXTAREA_FOCUS, g), f.S.unsubscribe(_.CkL.TEXTAREA_BLUR, C);
                }
            ),
            [g, C]
        ),
        (0, i.jsx)(
            c.Z,
            {
                className: I.channelTextArea,
                textValue: t,
                richValue: n,
                channel: a,
                type: o.Ie.EDIT,
                onChange: s,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return d(t);
                },
                onKeyDown: u,
                focused: p,
                onFocus: g,
                onBlur: C,
                renderLeftAccessories: h
            },
            r.id
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: r } = e;
    return n
        ? (0, i.jsx)(b, {
              channel: r,
              message: l
          })
        : (0, i.jsx)(x.ZP, {
              message: l,
              content: t
          });
}
