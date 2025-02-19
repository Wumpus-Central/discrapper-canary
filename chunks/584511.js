n.d(t, { Z: () => h });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(686546),
    u = n(738251);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
var p = (function (e) {
    return (e[(e.OUTGOING = 0)] = 'OUTGOING'), (e[(e.INCOMING = 1)] = 'INCOMING'), e;
})(p || {});
class _ extends (r = o.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: t } = this.props,
            n = t ? l.wE8 : l.nRN;
        return e || t
            ? (0, i.jsx)(
                  n,
                  {
                      className: u.status,
                      color: l.TVs.colors.WHITE.css
                  },
                  'status'
              )
            : null;
    }
    renderBorder() {
        let { speaking: e } = this.props;
        return (0, i.jsx)('div', { className: s()(u.border, { [u.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: t, deafen: n } = this.props;
        return e && t
            ? (0, i.jsxs)(i.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || n
              ? (0, i.jsx)(i.Fragment, { children: this.renderStatus() })
              : (0, i.jsx)(i.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: t, ringing: n, ringingType: r, avatarClassName: o, muted: a, deafen: d, size: f, renderIcon: p } = this.props,
            _ = (0, l.pxk)(f),
            h = (0, i.jsx)('img', {
                src: e,
                alt: ' ',
                className: s()(u.voiceAvatar, o, { [u.ringingOutgoing]: n && 0 === r })
            });
        if (t) return h;
        let m = c.QS.AVATAR_DEFAULT;
        return (
            null != p ? (m = f === l.EFr.SIZE_32 ? c.QS.AVATAR_CALL_ICON_32 : c.QS.AVATAR_CALL_ICON) : (a || d) && (m = c.QS.AVATAR_VOICE_CALL_80),
            (0, i.jsxs)('div', {
                className: u.callAvatarMaskContainer,
                children: [
                    (0, i.jsxs)(c.ZP, {
                        className: u.callAvatarMask,
                        width: _,
                        height: _,
                        mask: m,
                        children: [null == p ? void 0 : p(), h]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: t, style: n, onContextMenu: r, className: o, ringingType: a, ringing: c } = this.props,
            d = s()(
                u.wrapper,
                {
                    [u.clickable]: null != t,
                    [u.ringingOutgoing]: c && 0 === a,
                    [u.ringingIncoming]: c && 1 === a
                },
                o
            ),
            p = (0, l.pxk)(e),
            _ = f(
                {
                    height: p,
                    width: p
                },
                n
            );
        return (0, i.jsx)('div', {
            style: _,
            onContextMenu: r,
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
    d(_, 'RingingType', p);
let h = _;
