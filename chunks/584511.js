var i,
    a,
    s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(686546),
    f = r(15588);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.OUTGOING = 0)] = 'OUTGOING'), (e[(e.INCOMING = 1)] = 'INCOMING');
})(i || (i = {}));
class h extends (a = o.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: n } = this.props,
            r = n ? c.HeadphonesSlashIcon : c.MicrophoneSlashIcon;
        return e || n
            ? (0, s.jsx)(
                  r,
                  {
                      className: f.status,
                      color: c.tokens.colors.WHITE.css
                  },
                  'status'
              )
            : null;
    }
    renderBorder() {
        let { speaking: e } = this.props;
        return (0, s.jsx)('div', { className: u()(f.border, { [f.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: n, deafen: r } = this.props;
        return e && n
            ? (0, s.jsxs)(s.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || r
              ? (0, s.jsx)(s.Fragment, { children: this.renderStatus() })
              : (0, s.jsx)(s.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: n, ringing: r, ringingType: i, avatarClassName: a, muted: o, deafen: l, size: _, renderIcon: h } = this.props,
            p = (0, c.getAvatarSize)(_),
            m = (0, s.jsx)('img', {
                src: e,
                alt: ' ',
                className: u()(f.voiceAvatar, a, { [f.ringingOutgoing]: r && 0 === i })
            });
        if (n) return m;
        let g = d.QS.AVATAR_DEFAULT;
        return (
            null != h ? (g = _ === c.AvatarSizes.SIZE_32 ? d.QS.AVATAR_CALL_ICON_32 : d.QS.AVATAR_CALL_ICON) : (o || l) && (g = d.QS.AVATAR_VOICE_CALL_80),
            (0, s.jsxs)('div', {
                className: f.callAvatarMaskContainer,
                children: [
                    (0, s.jsxs)(d.ZP, {
                        className: f.callAvatarMask,
                        width: p,
                        height: p,
                        mask: g,
                        children: [null == h ? void 0 : h(), m]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: n, style: r, onContextMenu: i, className: a, ringingType: o, ringing: l } = this.props,
            d = u()(
                f.wrapper,
                {
                    [f.clickable]: null != n,
                    [f.ringingOutgoing]: l && 0 === o,
                    [f.ringingIncoming]: l && 1 === o
                },
                a
            ),
            _ = (0, c.getAvatarSize)(e),
            h = {
                height: _,
                width: _,
                ...r
            };
        return (0, s.jsx)('div', {
            style: h,
            onContextMenu: i,
            className: d,
            children: this.renderVoiceCallAvatar()
        });
    }
}
_(h, 'defaultProps', {
    size: c.AvatarSizes.SIZE_80,
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
    _(h, 'RingingType', i),
    (n.Z = h);
