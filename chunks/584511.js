n.d(t, { Z: () => p });
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(686546),
    c = n(15588);
function d(e, t, n) {
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
var f = (function (e) {
    return (e[(e.OUTGOING = 0)] = 'OUTGOING'), (e[(e.INCOMING = 1)] = 'INCOMING'), e;
})(f || {});
class _ extends (i = a.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: t } = this.props,
            n = t ? l.wE8 : l.nRN;
        return e || t
            ? (0, r.jsx)(
                  n,
                  {
                      className: c.status,
                      color: l.TVs.colors.WHITE.css
                  },
                  'status'
              )
            : null;
    }
    renderBorder() {
        let { speaking: e } = this.props;
        return (0, r.jsx)('div', { className: o()(c.border, { [c.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: t, deafen: n } = this.props;
        return e && t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || n
              ? (0, r.jsx)(r.Fragment, { children: this.renderStatus() })
              : (0, r.jsx)(r.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: t, ringing: n, ringingType: i, avatarClassName: a, muted: s, deafen: d, size: f, renderIcon: _ } = this.props,
            p = (0, l.pxk)(f),
            h = (0, r.jsx)('img', {
                src: e,
                alt: ' ',
                className: o()(c.voiceAvatar, a, { [c.ringingOutgoing]: n && 0 === i })
            });
        if (t) return h;
        let m = u.QS.AVATAR_DEFAULT;
        return (
            null != _ ? (m = f === l.EFr.SIZE_32 ? u.QS.AVATAR_CALL_ICON_32 : u.QS.AVATAR_CALL_ICON) : (s || d) && (m = u.QS.AVATAR_VOICE_CALL_80),
            (0, r.jsxs)('div', {
                className: c.callAvatarMaskContainer,
                children: [
                    (0, r.jsxs)(u.ZP, {
                        className: c.callAvatarMask,
                        width: p,
                        height: p,
                        mask: m,
                        children: [null == _ ? void 0 : _(), h]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: t, style: n, onContextMenu: i, className: a, ringingType: s, ringing: u } = this.props,
            d = o()(
                c.wrapper,
                {
                    [c.clickable]: null != t,
                    [c.ringingOutgoing]: u && 0 === s,
                    [c.ringingIncoming]: u && 1 === s
                },
                a
            ),
            f = (0, l.pxk)(e),
            _ = {
                height: f,
                width: f,
                ...n
            };
        return (0, r.jsx)('div', {
            style: _,
            onContextMenu: i,
            className: d,
            children: this.renderVoiceCallAvatar()
        });
    }
}
d(_, 'defaultProps', {
    size: l.EFr.SIZE_80,
    ringingType: 0,
    speaking: !1,
    soundsharing: !1,
    ringing: !1,
    muted: !1,
    deafen: !1,
    hasVideo: !1,
    mirror: !1,
    disabled: !1,
    paused: !1
}),
    d(_, 'RingingType', f);
let p = _;
