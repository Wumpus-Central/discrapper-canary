n.d(t, { A: () => p });
var s = n(477900),
    i = n(582128),
    a = n(155718),
    l = n(751258),
    o = n(451909),
    r = n(652215),
    c = n(650583),
    u = n(660183),
    d = n(17728);
function h(e) {
    e.stopPropagation();
}
class p extends i.PureComponent {
    node = i.createRef();
    onClickSave = () => {
        let { textValue: e } = this.props;
        this.onSubmit(e);
    };
    onSubmit = (e) => {
        let { message: t, channel: n, onConfirmDelete: s, onCancel: i, saveMessage: c, validateEdit: u } = this.props;
        return 0 === e.length &&
            0 === t.attachments.length &&
            0 === t.components.length &&
            0 === t.stickerItems.length &&
            0 === t.stickers.length
            ? (s(n, t), i(n.id), Promise.resolve({ shouldClear: !1, shouldRefocus: !1 }))
            : u({ value: e, channel: n, message: t }).then((s) => {
                  let { valid: u } = s;
                  if (!u) return Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
                  let d = (0, l.S)(e, { channel: n, isEdit: !0 });
                  if (
                      (d?.content != null && (e = d.content),
                      t.hasFlag(r.pr7.IS_COMPONENTS_V2) && this.props.channel.type === r.rbe.GUILD_ANNOUNCEMENT)
                  ) {
                      let t = o.Ay.parse(this.props.channel, e),
                          n = this.props.message.components.filter((e) => e.type === a.I5.TEXT_DISPLAY);
                      if (1 === n.length) {
                          let s = n[0];
                          e !== s.content && c(this.props.channel.id, this.props.message.id, t);
                      }
                  } else {
                      let t = o.Ay.parse(this.props.channel, e);
                      t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t);
                  }
                  return (i(n.id), Promise.resolve({ shouldClear: !0, shouldRefocus: !0 }));
              });
    };
    onChange = (e, t, n) => {
        let { channel: s, onChange: i } = this.props;
        i(s.id, t, n);
    };
    onKeyDown = (e) => {
        if (e.key === c.dh.ESCAPE && !e.shiftKey) {
            let { channel: t, onCancel: n } = this.props;
            (e.preventDefault(), e.stopPropagation(), n(t.id));
        }
    };
    render() {
        let { className: e, textValue: t, richValue: n, message: i, channel: a, onCancel: l, children: o } = this.props,
            r = (0, s.jsx)("div", {
                className: d.z,
                children: u.intl.format(u.t.wDsPXs, { onCancel: () => l(a.id), onSave: this.onClickSave }),
            });
        return (0, s.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: h,
            children: [
                o({
                    textValue: t,
                    richValue: n,
                    message: i,
                    channel: a,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => r,
                }),
                r,
            ],
        });
    }
}
