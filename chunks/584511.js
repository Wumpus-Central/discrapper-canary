var i,
    a,
    o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(686546),
    f = r(15588);
function p(e, n, r) {
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
class h extends (a = s.PureComponent) {
    renderStatus() {
        let { muted: e, deafen: n } = this.props,
            r = n ? c.HeadphonesSlashIcon : c.MicrophoneSlashIcon;
        return e || n
            ? (0, o.jsx)(
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
        return (0, o.jsx)('div', { className: u()(f.border, { [f.speaking]: e }) }, 'border');
    }
    renderMask() {
        let { muted: e, speaking: n, deafen: r } = this.props;
        return e && n
            ? (0, o.jsxs)(o.Fragment, {
                  children: [this.renderBorder(), this.renderStatus()]
              })
            : e || r
              ? (0, o.jsx)(o.Fragment, { children: this.renderStatus() })
              : (0, o.jsx)(o.Fragment, { children: this.renderBorder() });
    }
    renderVoiceCallAvatar() {
        let { src: e, disabled: n, ringing: r, ringingType: i, avatarClassName: a, muted: s, deafen: l, size: p, renderIcon: h } = this.props,
            _ = (0, c.getAvatarSize)(p),
            m = (0, o.jsx)('img', {
                src: e,
                alt: ' ',
                className: u()(f.voiceAvatar, a, { [f.ringingOutgoing]: r && 0 === i })
            });
        if (n) return m;
        let g = d.QS.AVATAR_DEFAULT;
        return (
            null != h ? (g = p === c.AvatarSizes.SIZE_32 ? d.QS.AVATAR_CALL_ICON_32 : d.QS.AVATAR_CALL_ICON) : (s || l) && (g = d.QS.AVATAR_VOICE_CALL_80),
            (0, o.jsxs)('div', {
                className: f.callAvatarMaskContainer,
                children: [
                    (0, o.jsxs)(d.ZP, {
                        className: f.callAvatarMask,
                        width: _,
                        height: _,
                        mask: g,
                        children: [null == h ? void 0 : h(), m]
                    }),
                    this.renderMask()
                ]
            })
        );
    }
    render() {
        let { size: e, onClick: n, style: r, onContextMenu: i, className: a, ringingType: s, ringing: l } = this.props,
            d = u()(
                f.wrapper,
                {
                    [f.clickable]: null != n,
                    [f.ringingOutgoing]: l && 0 === s,
                    [f.ringingIncoming]: l && 1 === s
                },
                a
            ),
            p = (0, c.getAvatarSize)(e),
            h = {
                height: p,
                width: p,
                ...r
            };
        return (0, o.jsx)('div', {
            style: h,
            onContextMenu: i,
            className: d,
            children: this.renderVoiceCallAvatar()
        });
    }
}
p(h, 'defaultProps', {
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
    p(h, 'RingingType', i),
    (n.Z = h);
