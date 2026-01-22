n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(155718),
    a = n(751258),
    s = n(451909),
    o = n(652215),
    c = n(650583),
    u = n(985018),
    d = n(921522);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    e.stopPropagation();
}

function h() {
    let e = window.getSelection();
    if (null == e)
        return {
            selection: null,
            rangeStartContainer: null,
            rangeStartOffset: null,
        };
    let t = e.getRangeAt(0);
    return {
        selection: e,
        rangeStartContainer: t.startContainer,
        rangeStartOffset: t.startOffset,
    };
}

function b(e, t, n) {
    let r = document.createRange();
    r.setStart(t, n), r.collapse(!0), e.removeAllRanges(), e.addRange(r);
}
class g extends l.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: l, channel: i, onCancel: a, children: s } = this.props,
            o = (0, r.jsx)("div", {
                className: d.z,
                children: u.intl.format(u.t.wDsPXs, {
                    onCancel: () => a(i.id),
                    onSave: this.onClickSave,
                }),
            });
        return (0, r.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: p,
            children: [
                s({
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: i,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => o,
                }),
                o,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "node", l.createRef()),
            f(this, "onClickSave", () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            f(this, "onSubmit", (e) => {
                let {
                    message: t,
                    channel: n,
                    onConfirmDelete: r,
                    onCancel: l,
                    saveMessage: c,
                    validateEdit: u,
                } = this.props;
                return 0 === e.length
                    ? (r(n, t),
                      l(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1,
                      }))
                    : u({
                          value: e,
                          channel: n,
                      }).then((r) => {
                          let { valid: u } = r;
                          if (!u)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1,
                              });
                          let d = (0, a.S)(e, {
                              channel: n,
                              isEdit: !0,
                          });
                          if (
                              ((null == d ? void 0 : d.content) != null && (e = d.content),
                              t.hasFlag(o.pr7.IS_COMPONENTS_V2) && this.props.channel.type === o.rbe.GUILD_ANNOUNCEMENT)
                          ) {
                              let t = s.Ay.parse(this.props.channel, e),
                                  n = this.props.message.components.filter((e) => e.type === i.I5.TEXT_DISPLAY);
                              if (1 === n.length) {
                                  let r = n[0];
                                  e !== r.content && c(this.props.channel.id, this.props.message.id, t);
                              }
                          } else {
                              let t = s.Ay.parse(this.props.channel, e);
                              t.content !== this.props.message.content &&
                                  c(this.props.channel.id, this.props.message.id, t);
                          }
                          return (
                              l(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0,
                              })
                          );
                      });
            }),
            f(this, "onChange", (e, t, n) => {
                let { channel: r, onChange: l } = this.props;
                l(r.id, t, n);
            }),
            f(this, "onKeyDown", (e) => {
                if (e.key === c.dh.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
                if (e.key === c.dh.HOME && !(e.shiftKey || e.ctrlKey)) {
                    e.preventDefault();
                    let { selection: t, rangeStartContainer: n, rangeStartOffset: r } = h();
                    if (null == t || null == n || null == r) return;
                    b(t, n, 0);
                }
                if (e.key === c.dh.END && !(e.shiftKey || e.ctrlKey)) {
                    e.preventDefault();
                    let { selection: t, rangeStartContainer: n, rangeStartOffset: r } = h();
                    if (null == t || null == n || null == r) return;
                    let l = n.textContent;
                    if (null == l) return;
                    b(t, n, l.length);
                }
            });
    }
}
