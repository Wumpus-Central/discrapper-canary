s.d(r, { Ay: () => U, DN: () => _, mt: () => I }), s(321073);
var t = s(627968),
    n = s(64700),
    l = s(503698),
    i = s.n(l),
    u = s(950305),
    a = s(939249),
    c = s(983851),
    d = s(573435),
    h = s(342296),
    o = s(889227),
    f = s(287809),
    m = s(3451),
    p = s(227568);
let _ = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    I = "user-icon";
function g(e, r) {
    if (e === I) return `user-icon-${r}`;
    let s = e instanceof o.A ? e : null != e ? e.user : null;
    return null != s ? s.id : `user-${r}`;
}
function x(e) {
    return (0, t.jsx)("div", { className: p.In, children: e });
}
function S(e) {
    return (0, t.jsx)("div", { className: i()(p.In, p.iq), children: e });
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.SIZE_24;
    switch (e) {
        case _.SIZE_16:
            return p.nc;
        case _.SIZE_24:
            return p.q1;
        case _.SIZE_32:
            return p.Hb;
        case _.SIZE_56:
            return p.dl;
        default:
            return p.q1;
    }
}
class A extends n.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: x,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: _.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = n.createRef();
    defaultRenderUser = (e, r, s) => {
        let n,
            { showUserPopout: l, guildId: c, size: d, dimEmptyUsers: h } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, t.jsx)("div", { className: i()(p.F2, { [p.F_]: h }) });
            else {
                let e = (s ?? 0) % m.A.DEFAULT_AVATARS.length,
                    r = m.A.DEFAULT_AVATARS[e];
                return (0, t.jsx)("img", { src: r, alt: "", className: p.my });
            }
        if (e === I) {
            let e = (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.SIZE_24;
                switch (e) {
                    case _.SIZE_16:
                        return 10;
                    case _.SIZE_24:
                        return 15;
                    case _.SIZE_32:
                        return 20;
                    case _.SIZE_56:
                        return 35;
                    default:
                        return 10;
                }
            })(d);
            n = (0, t.jsx)(u.n, { size: "custom", color: "currentColor", width: e, height: e });
        } else n = (0, t.jsx)("img", { src: e.getAvatarURL(c, d), alt: e.username, className: p.my });
        let o = (0, t.jsx)("div", { className: p.WK, children: n }, g(e, s));
        return l && e !== I
            ? (0, t.jsx)(
                  a.D,
                  {
                      className: p.UC,
                      onClick: () => {
                          null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: o,
                  },
                  g(e, s),
              )
            : o;
    };
    renderUsers() {
        let { users: e, max: r, renderUser: s = this.defaultRenderUser, size: n, extraDetail: l } = this.props,
            i = [],
            u = e.length === r ? e.length : r - 1,
            a = this.renderMoreUsers(u),
            c = 0;
        for (; c < u && c < e.length; ) {
            let r = null == a && null == l && c === e.length - 1,
                u = s(e[c], r, c);
            i.push(
                r
                    ? (0, t.jsx)("div", { className: p.H, children: u }, g(e[c] ?? null, c))
                    : (0, t.jsx)(
                          d.Ay,
                          {
                              className: p.aV,
                              height: n,
                              width: n,
                              mask: d.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: u,
                          },
                          g(e[c], c),
                      ),
            ),
                c++;
        }
        return null != l ? i.push(l) : null != a && i.push(a), i;
    }
    renderMoreUsers(e) {
        let { max: r, count: s, hideMoreUsers: l, renderMoreUsers: i, users: u, dimEmptyUsers: a } = this.props,
            c = Math.min(e, u.length),
            d = a ? S : i;
        if (!l) {
            if (null != s) {
                if (s >= r) return (0, t.jsx)(n.Fragment, { children: d(`${r}+`, r) }, "more-users");
                else if (s > u.length) {
                    let e = s - u.length;
                    return (0, t.jsx)(n.Fragment, { children: d(`+${e}`, e) }, "more-users");
                }
            } else if (c < u.length) {
                let e = Math.min(u.length - c, 99);
                return (0, t.jsx)(n.Fragment, { children: d(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: r } = this.props;
        return r
            ? null != e
                ? e(p.Kk)
                : (0, t.jsx)(c.H, {
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
                size: r,
                users: s,
                guildId: n,
                showUserPopout: l,
                useFallbackUserForPopout: u,
            } = this.props,
            { popoutUserId: a } = this.state;
        if (null == a)
            return (0, t.jsxs)("div", {
                ref: this._ref,
                className: i()(e, p.kL, E(r)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let c = s.find((e) => e instanceof o.A && e.id === a),
            d = u && null == f.default.getUser(a);
        return (0, t.jsx)(h.A, {
            targetElementRef: this._ref,
            userId: a,
            user: d && null != c ? c : void 0,
            guildId: n,
            fixed: !0,
            shouldShow: !0 === l && null != a,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (s) =>
                (0, t.jsxs)("div", {
                    className: i()(e, p.kL, E(r)),
                    ref: this._ref,
                    ...s,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let U = A;
})})}}
let N = S;
