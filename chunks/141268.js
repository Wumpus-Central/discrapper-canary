n.d(t, { A: () => R }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(665260),
    a = n(17928),
    r = n(720149),
    o = n(155718),
    c = n(355622),
    d = n(201349),
    u = n(495544),
    h = n(580745),
    m = n(71393),
    p = n(576705),
    g = n(625494),
    A = n(806150),
    f = n(145530),
    _ = n(291812),
    E = n(751258),
    C = n(451909),
    x = n(652215),
    b = n(650583),
    S = n(985018),
    I = n(818289);
function y(e) {
    e.stopPropagation();
}
class T extends l.PureComponent {
    node = l.createRef();
    onClickSave = () => {
        let { textValue: e } = this.props;
        this.onSubmit(e);
    };
    onSubmit = (e) => {
        let { message: t, channel: n, onConfirmDelete: i, onCancel: l, saveMessage: s, validateEdit: a } = this.props;
        return 0 === e.length
            ? (i(n, t), l(n.id), Promise.resolve({ shouldClear: !1, shouldRefocus: !1 }))
            : a({ value: e, channel: n }).then((i) => {
                  let { valid: a } = i;
                  if (!a) return Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
                  let r = (0, E.S)(e, { channel: n, isEdit: !0 });
                  if (
                      (r?.content != null && (e = r.content),
                      t.hasFlag(x.pr7.IS_COMPONENTS_V2) && this.props.channel.type === x.rbe.GUILD_ANNOUNCEMENT)
                  ) {
                      let t = C.Ay.parse(this.props.channel, e),
                          n = this.props.message.components.filter((e) => e.type === o.I5.TEXT_DISPLAY);
                      if (1 === n.length) {
                          let i = n[0];
                          e !== i.content && s(this.props.channel.id, this.props.message.id, t);
                      }
                  } else {
                      let t = C.Ay.parse(this.props.channel, e);
                      t.content !== this.props.message.content && s(this.props.channel.id, this.props.message.id, t);
                  }
                  return l(n.id), Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
              });
    };
    onChange = (e, t, n) => {
        let { channel: i, onChange: l } = this.props;
        l(i.id, t, n);
    };
    onKeyDown = (e) => {
        if (e.key === b.dh.ESCAPE && !e.shiftKey) {
            let { channel: t, onCancel: n } = this.props;
            e.preventDefault(), e.stopPropagation(), n(t.id);
        }
    };
    render() {
        let { className: e, textValue: t, richValue: n, message: l, channel: s, onCancel: a, children: r } = this.props,
            o = (0, i.jsx)("div", {
                className: I.z,
                children: S.intl.format(S.t.wDsPXs, { onCancel: () => a(s.id), onSave: this.onClickSave }),
            });
        return (0, i.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: y,
            children: [
                r({
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: s,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => o,
                }),
                o,
            ],
        });
    }
}
n(294920);
var v = n(701628);
function N(e) {
    let { value: t, channel: n } = e;
    return (0, A.i)({ type: c.oU.EDIT, content: t, channel: n, restrictMentions: !1, respectCooldown: !1 });
}
function j(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: d } = n,
        g = t.getGuildId(),
        A = (0, a.bG)([m.A], () => m.A.getGuild(g), [g]),
        _ = t.type === x.rbe.GUILD_ANNOUNCEMENT,
        E = null != A && A.features.has(x.GuildFeatures.NEWS),
        C = _ && E,
        {
            editingMessage: b,
            editingTextValue: S,
            editingRichValue: I,
        } = (0, a.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        y = (0, a.bG)([u.default], () => u.default.getId()),
        j = l.useCallback(
            (e, i, l) => {
                let { content: a } = l,
                    c = p.A.can(x.xBc.MANAGE_MESSAGES, t),
                    d = null != b && null != b.author ? b.author.id : null,
                    u = C && (d === y || c),
                    h = { content: a, components: void 0 };
                if (n.hasFlag(x.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: o.I5.TEXT_DISPLAY, content: a, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    u && null != b && (0, s.Lt)(b.flags, x.pr7.CROSSPOSTED)
                        ? f.A.confirmEdit(e, i, h)
                        : r.A.editMessage(e, i, h),
                    Promise.resolve()
                );
            },
            [b, C, y, t, n],
        ),
        R = l.useCallback((e) => (0, l.createElement)(M, { ...e, className: v.gM, key: d }), [d]);
    return null != S && null != I
        ? (0, i.jsx)(T, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: S,
              richValue: I,
              onCancel: r.A.endEditMessage,
              onChange: r.A.updateEditMessage,
              onConfirmDelete: f.A.confirmDelete,
              saveMessage: j,
              validateEdit: N,
              children: R,
          })
        : null;
}
function M(e) {
    let {
            textValue: t,
            richValue: n,
            message: s,
            channel: a,
            onChange: r,
            onSubmit: o,
            onKeyDown: u,
            renderLeftAccessories: h,
        } = e,
        [m, p] = l.useState(!0),
        A = l.useCallback(() => p(!0), []),
        f = l.useCallback(() => p(!1), []);
    return (
        l.useEffect(
            () => (
                g._.subscribe(x.jej.TEXTAREA_FOCUS, A),
                g._.subscribe(x.jej.TEXTAREA_BLUR, f),
                () => {
                    g._.unsubscribe(x.jej.TEXTAREA_FOCUS, A), g._.unsubscribe(x.jej.TEXTAREA_BLUR, f);
                }
            ),
            [A, f],
        ),
        (0, i.jsx)(
            d.Ay,
            {
                className: v.gM,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.oU.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: u,
                focused: m,
                onFocus: A,
                onBlur: f,
                renderLeftAccessories: h,
            },
            s.id,
        )
    );
}
function R(e, t, n) {
    let { message: l, channel: s, compact: a } = e;
    return n
        ? (0, i.jsx)(j, { channel: s, message: l })
        : (0, i.jsx)(_.Ay, { message: l, content: t, compact: a ?? !1 });
}
