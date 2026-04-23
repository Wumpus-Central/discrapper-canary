n.d(t, { Ay: () => O, DN: () => A, mt: () => f }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(950305),
    o = n(939249),
    d = n(983851),
    u = n(573435),
    c = n(342296),
    h = n(889227),
    E = n(287809),
    _ = n(3451),
    p = n(227568);
let A = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    f = "user-icon";
function g(e, t) {
    if (e === f) return `user-icon-${t}`;
    let n = e instanceof h.A ? e : null != e ? e.user : null;
    return null != n ? n.id : `user-${t}`;
}
function I(e) {
    return (0, i.jsx)("div", { className: p.In, children: e });
}
function T(e) {
    return (0, i.jsx)("div", { className: a()(p.In, p.iq), children: e });
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.SIZE_24;
    switch (e) {
        case A.SIZE_16:
            return p.nc;
        case A.SIZE_24:
            return p.q1;
        case A.SIZE_32:
            return p.Hb;
        case A.SIZE_56:
            return p.dl;
        default:
            return p.q1;
    }
}
class m extends r.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: I,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: A.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = r.createRef();
    defaultRenderUser = (e, t, n) => {
        let r,
            { showUserPopout: l, guildId: d, size: u, dimEmptyUsers: c } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, i.jsx)("div", { className: a()(p.F2, { [p.F_]: c }) });
            else {
                let e = (n ?? 0) % _.A.DEFAULT_AVATARS.length,
                    t = _.A.DEFAULT_AVATARS[e];
                return (0, i.jsx)("img", { src: t, alt: "", className: p.my });
            }
        if (e === f) {
            let e = (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.SIZE_24;
                switch (e) {
                    case A.SIZE_16:
                        return 10;
                    case A.SIZE_24:
                        return 15;
                    case A.SIZE_32:
                        return 20;
                    case A.SIZE_56:
                        return 35;
                    default:
                        return 10;
                }
            })(u);
            r = (0, i.jsx)(s.n, { size: "custom", color: "currentColor", width: e, height: e });
        } else r = (0, i.jsx)("img", { src: e.getAvatarURL(d, u), alt: e.username, className: p.my });
        let h = (0, i.jsx)("div", { className: p.WK, children: r }, g(e, n));
        return l && e !== f
            ? (0, i.jsx)(
                  o.D,
                  {
                      className: p.UC,
                      onClick: () => {
                          null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: h,
                  },
                  g(e, n),
              )
            : h;
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: l } = this.props,
            a = [],
            s = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(s),
            d = 0;
        for (; d < s && d < e.length; ) {
            let t = null == o && null == l && d === e.length - 1,
                s = n(e[d], t, d);
            a.push(
                t
                    ? (0, i.jsx)("div", { className: p.H, children: s }, g(e[d] ?? null, d))
                    : (0, i.jsx)(
                          u.Ay,
                          {
                              className: p.aV,
                              height: r,
                              width: r,
                              mask: u.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: s,
                          },
                          g(e[d], d),
                      ),
            ),
                d++;
        }
        return null != l ? a.push(l) : null != o && a.push(o), a;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: l, renderMoreUsers: a, users: s, dimEmptyUsers: o } = this.props,
            d = Math.min(e, s.length),
            u = o ? T : a;
        if (!l) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(r.Fragment, { children: u(`${t}+`, t) }, "more-users");
                else if (n > s.length) {
                    let e = n - s.length;
                    return (0, i.jsx)(r.Fragment, { children: u(`+${e}`, e) }, "more-users");
                }
            } else if (d < s.length) {
                let e = Math.min(s.length - d, 99);
                return (0, i.jsx)(r.Fragment, { children: u(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(p.Kk)
                : (0, i.jsx)(d.H, {
                      size: "md",
                      color: "currentColor",
                      colorClass: p.__invalid_foreground,
                      className: p.Kk,
                  })
            : null;
    }
    render() {
        let {
                className: e,
                size: t,
                users: n,
                guildId: r,
                showUserPopout: l,
                useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: o } = this.state;
        if (null == o)
            return (0, i.jsxs)("div", {
                className: a()(e, p.kL, S(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let d = n.find((e) => e instanceof h.A && e.id === o),
            u = s && null == E.default.getUser(o);
        return (0, i.jsx)(c.A, {
            targetElementRef: this._ref,
            userId: o,
            user: u && null != d ? d : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === l && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)("div", {
                    className: a()(e, p.kL, S(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let O = m;
