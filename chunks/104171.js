n.d(t, { Ay: () => C, DN: () => p, mt: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(950305),
    o = n(939249),
    d = n(983851),
    u = n(573435),
    c = n(342296),
    h = n(889227),
    E = n(287809),
    A = n(3451),
    _ = n(227568);
let p = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    g = "user-icon";
function f(e, t) {
    if (e === g) return `user-icon-${t}`;
    let n = e instanceof h.A ? e : null != e ? e.user : null;
    return null != n ? n.id : `user-${t}`;
}
function I(e) {
    return (0, i.jsx)("div", { className: _.In, children: e });
}
function S(e) {
    return (0, i.jsx)("div", { className: r()(_.In, _.iq), children: e });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
    switch (e) {
        case p.SIZE_16:
            return _.nc;
        case p.SIZE_24:
            return _.q1;
        case p.SIZE_32:
            return _.Hb;
        case p.SIZE_56:
            return _.dl;
        default:
            return _.q1;
    }
}
class m extends l.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: I,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: p.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = l.createRef();
    defaultRenderUser = (e, t, n) => {
        let l,
            { showUserPopout: a, guildId: d, size: u, dimEmptyUsers: c } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, i.jsx)("div", { className: r()(_.F2, { [_.F_]: c }) });
            else {
                let e = (n ?? 0) % A.A.DEFAULT_AVATARS.length,
                    t = A.A.DEFAULT_AVATARS[e];
                return (0, i.jsx)("img", { src: t, alt: "", className: _.my });
            }
        if (e === g) {
            let e = (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
                switch (e) {
                    case p.SIZE_16:
                        return 10;
                    case p.SIZE_24:
                        return 15;
                    case p.SIZE_32:
                        return 20;
                    case p.SIZE_56:
                        return 35;
                    default:
                        return 10;
                }
            })(u);
            l = (0, i.jsx)(s.n, { size: "custom", color: "currentColor", width: e, height: e });
        } else l = (0, i.jsx)("img", { src: e.getAvatarURL(d, u), alt: e.username, className: _.my });
        let h = (0, i.jsx)("div", { className: _.WK, children: l }, f(e, n));
        return a && e !== g
            ? (0, i.jsx)(
                  o.D,
                  {
                      className: _.UC,
                      onClick: () => {
                          null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: h,
                  },
                  f(e, n),
              )
            : h;
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: l, extraDetail: a } = this.props,
            r = [],
            s = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(s),
            d = 0;
        for (; d < s && d < e.length; ) {
            let t = null == o && null == a && d === e.length - 1,
                s = n(e[d], t, d);
            r.push(
                t
                    ? (0, i.jsx)("div", { className: _.H, children: s }, f(e[d] ?? null, d))
                    : (0, i.jsx)(
                          u.Ay,
                          {
                              className: _.aV,
                              height: l,
                              width: l,
                              mask: u.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: s,
                          },
                          f(e[d], d),
                      ),
            ),
                d++;
        }
        return null != a ? r.push(a) : null != o && r.push(o), r;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: a, renderMoreUsers: r, users: s, dimEmptyUsers: o } = this.props,
            d = Math.min(e, s.length),
            u = o ? S : r;
        if (!a) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(l.Fragment, { children: u(`${t}+`, t) }, "more-users");
                else if (n > s.length) {
                    let e = n - s.length;
                    return (0, i.jsx)(l.Fragment, { children: u(`+${e}`, e) }, "more-users");
                }
            } else if (d < s.length) {
                let e = Math.min(s.length - d, 99);
                return (0, i.jsx)(l.Fragment, { children: u(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(_.Kk)
                : (0, i.jsx)(d.H, {
                      size: "md",
                      color: "currentColor",
                      colorClass: _.__invalid_foreground,
                      className: _.Kk,
                  })
            : null;
    }
    render() {
        let {
                className: e,
                size: t,
                users: n,
                guildId: l,
                showUserPopout: a,
                useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: o } = this.state;
        if (null == o)
            return (0, i.jsxs)("div", {
                className: r()(e, _.kL, T(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let d = n.find((e) => e instanceof h.A && e.id === o),
            u = s && null == E.default.getUser(o);
        return (0, i.jsx)(c.A, {
            targetElementRef: this._ref,
            userId: o,
            user: u && null != d ? d : void 0,
            guildId: l,
            fixed: !0,
            shouldShow: !0 === a && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)("div", {
                    className: r()(e, _.kL, T(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let C = m;
