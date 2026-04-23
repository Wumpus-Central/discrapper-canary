n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(155718),
    s = n(751258),
    r = n(451909),
    o = n(652215),
    c = n(650583),
    d = n(985018),
    u = n(818289);
function h(e) {
    e.stopPropagation();
}
class m extends l.PureComponent {
    node = l.createRef();
    onClickSave = () => {
        let { textValue: e } = this.props;
        this.onSubmit(e);
    };
    onSubmit = (e) => {
        let { message: t, channel: n, onConfirmDelete: i, onCancel: l, saveMessage: c, validateEdit: d } = this.props;
        return 0 === e.length
            ? (i(n, t), l(n.id), Promise.resolve({ shouldClear: !1, shouldRefocus: !1 }))
            : d({ value: e, channel: n }).then((i) => {
                  let { valid: d } = i;
                  if (!d) return Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
                  let u = (0, s.S)(e, { channel: n, isEdit: !0 });
                  if (
                      (u?.content != null && (e = u.content),
                      t.hasFlag(o.pr7.IS_COMPONENTS_V2) && this.props.channel.type === o.rbe.GUILD_ANNOUNCEMENT)
                  ) {
                      let t = r.Ay.parse(this.props.channel, e),
                          n = this.props.message.components.filter((e) => e.type === a.I5.TEXT_DISPLAY);
                      if (1 === n.length) {
                          let i = n[0];
                          e !== i.content && c(this.props.channel.id, this.props.message.id, t);
                      }
                  } else {
                      let t = r.Ay.parse(this.props.channel, e);
                      t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t);
                  }
                  return l(n.id), Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
              });
    };
    onChange = (e, t, n) => {
        let { channel: i, onChange: l } = this.props;
        l(i.id, t, n);
    };
    onKeyDown = (e) => {
        if (e.key === c.dh.ESCAPE && !e.shiftKey) {
            let { channel: t, onCancel: n } = this.props;
            e.preventDefault(), e.stopPropagation(), n(t.id);
        }
    };
    render() {
        let { className: e, textValue: t, richValue: n, message: l, channel: a, onCancel: s, children: r } = this.props,
            o = (0, i.jsx)("div", {
                className: u.z,
                children: d.intl.format(d.t.wDsPXs, { onCancel: () => s(a.id), onSave: this.onClickSave }),
            });
        return (0, i.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: h,
            children: [
                r({
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: a,
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
