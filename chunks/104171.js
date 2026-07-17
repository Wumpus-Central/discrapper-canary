"use strict";
n.d(t, { Ay: () => N, DN: () => I, mt: () => f }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(950305),
    o = n(939249),
    d = n(983851),
    c = n(573435),
    u = n(342296),
    _ = n(889227),
    E = n(287809),
    A = n(3451),
    h = n(227568);
let I = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    f = "user-icon";
function p(e, t) {
    if (e === f) return `user-icon-${t}`;
    let n = e instanceof _.A ? e : null != e ? e.user : null;
    return null != n ? n.id : `user-${t}`;
}
function T(e) {
    return (0, i.jsx)("div", { className: h.In, children: e });
}
function m(e) {
    return (0, i.jsx)("div", { className: s()(h.In, h.iq), children: e });
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
    switch (e) {
        case I.SIZE_16:
            return h.nc;
        case I.SIZE_24:
            return h.q1;
        case I.SIZE_32:
            return h.Hb;
        case I.SIZE_56:
            return h.dl;
        default:
            return h.q1;
    }
}
class S extends r.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: T,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: I.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = r.createRef();
    defaultRenderUser = (e, t, n) => {
        let r,
            { showUserPopout: a, guildId: d, size: c, dimEmptyUsers: u } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, i.jsx)("div", { className: s()(h.F2, { [h.F_]: u }) });
            else {
                let e = (n ?? 0) % A.A.DEFAULT_AVATARS.length,
                    t = A.A.DEFAULT_AVATARS[e];
                return (0, i.jsx)("img", { src: t, alt: "", className: h.my });
            }
        if (e === f) {
            let e = (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.SIZE_24;
                switch (e) {
                    case I.SIZE_16:
                        return 10;
                    case I.SIZE_24:
                        return 15;
                    case I.SIZE_32:
                        return 20;
                    case I.SIZE_56:
                        return 35;
                    default:
                        return 10;
                }
            })(c);
            r = (0, i.jsx)(l.n, { size: "custom", color: "currentColor", width: e, height: e });
        } else r = (0, i.jsx)("img", { src: e.getAvatarURL(d, c), alt: e.username, className: h.my });
        let _ = (0, i.jsx)("div", { className: h.WK, children: r }, p(e, n));
        return a && e !== f
            ? (0, i.jsx)(
                  o.D,
                  {
                      className: h.UC,
                      onClick: () => {
                          null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: _,
                  },
                  p(e, n),
              )
            : _;
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: a } = this.props,
            s = [],
            l = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(l),
            d = 0;
        for (; d < l && d < e.length; ) {
            let t = null == o && null == a && d === e.length - 1,
                l = n(e[d], t, d);
            s.push(
                t
                    ? (0, i.jsx)("div", { className: h.H, children: l }, p(e[d] ?? null, d))
                    : (0, i.jsx)(
                          c.Ay,
                          {
                              className: h.aV,
                              height: r,
                              width: r,
                              mask: c.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: l,
                          },
                          p(e[d], d),
                      ),
            ),
                d++;
        }
        return null != a ? s.push(a) : null != o && s.push(o), s;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: a, renderMoreUsers: s, users: l, dimEmptyUsers: o } = this.props,
            d = Math.min(e, l.length),
            c = o ? m : s;
        if (!a) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(r.Fragment, { children: c(`${t}+`, t) }, "more-users");
                else if (n > l.length) {
                    let e = n - l.length;
                    return (0, i.jsx)(r.Fragment, { children: c(`+${e}`, e) }, "more-users");
                }
            } else if (d < l.length) {
                let e = Math.min(l.length - d, 99);
                return (0, i.jsx)(r.Fragment, { children: c(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(h.Kk)
                : (0, i.jsx)(d.H, {
                      size: "md",
                      color: "currentColor",
                      colorClass: h.__invalid_foreground,
                      className: h.Kk,
                  })
            : null;
    }
    render() {
        let {
                className: e,
                size: t,
                users: n,
                guildId: r,
                showUserPopout: a,
                useFallbackUserForPopout: l,
            } = this.props,
            { popoutUserId: o } = this.state;
        if (null == o)
            return (0, i.jsxs)("div", {
                ref: this._ref,
                className: s()(e, h.kL, g(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let d = n.find((e) => e instanceof _.A && e.id === o),
            c = l && null == E.default.getUser(o);
        return (0, i.jsx)(u.A, {
            targetElementRef: this._ref,
            userId: o,
            user: c && null != d ? d : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === a && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)("div", {
                    className: s()(e, h.kL, g(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let N = S;
