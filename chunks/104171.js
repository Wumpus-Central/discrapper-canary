"use strict";
n.d(t, { Ay: () => N, DN: () => E, mt: () => m }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(950305),
    l = n(939249),
    u = n(983851),
    c = n(573435),
    d = n(342296),
    _ = n(889227),
    f = n(287809),
    h = n(3451),
    p = n(227568);
let E = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    m = "user-icon";
function g(e, t) {
    if (e === m) return `user-icon-${t}`;
    let n = e instanceof _.A ? e : null != e ? e.user : null;
    return null != n ? n.id : `user-${t}`;
}
function A(e) {
    return (0, i.jsx)("div", { className: p.In, children: e });
}
function I(e) {
    return (0, i.jsx)("div", { className: a()(p.In, p.iq), children: e });
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.SIZE_24;
    switch (e) {
        case E.SIZE_16:
            return p.nc;
        case E.SIZE_24:
            return p.q1;
        case E.SIZE_32:
            return p.Hb;
        case E.SIZE_56:
            return p.dl;
        default:
            return p.q1;
    }
}
class S extends r.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: A,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: E.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = r.createRef();
    defaultRenderUser = (e, t, n) => {
        let r,
            { showUserPopout: s, guildId: u, size: c, dimEmptyUsers: d } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, i.jsx)("div", { className: a()(p.F2, { [p.F_]: d }) });
            else {
                let e = (n ?? 0) % h.A.DEFAULT_AVATARS.length,
                    t = h.A.DEFAULT_AVATARS[e];
                return (0, i.jsx)("img", { src: t, alt: "", className: p.my });
            }
        if (e === m) {
            let e = (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.SIZE_24;
                switch (e) {
                    case E.SIZE_16:
                        return 10;
                    case E.SIZE_24:
                        return 15;
                    case E.SIZE_32:
                        return 20;
                    case E.SIZE_56:
                        return 35;
                    default:
                        return 10;
                }
            })(c);
            r = (0, i.jsx)(o.n, { size: "custom", color: "currentColor", width: e, height: e });
        } else r = (0, i.jsx)("img", { src: e.getAvatarURL(u, c), alt: e.username, className: p.my });
        let _ = (0, i.jsx)("div", { className: p.WK, children: r }, g(e, n));
        return s && e !== m
            ? (0, i.jsx)(
                  l.D,
                  {
                      className: p.UC,
                      onClick: () => {
                          null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: _,
                  },
                  g(e, n),
              )
            : _;
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: s } = this.props,
            a = [],
            o = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(o),
            u = 0;
        for (; u < o && u < e.length; ) {
            let t = null == l && null == s && u === e.length - 1,
                o = n(e[u], t, u);
            a.push(
                t
                    ? (0, i.jsx)("div", { className: p.H, children: o }, g(e[u] ?? null, u))
                    : (0, i.jsx)(
                          c.Ay,
                          {
                              className: p.aV,
                              height: r,
                              width: r,
                              mask: c.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: o,
                          },
                          g(e[u], u),
                      ),
            ),
                u++;
        }
        return null != s ? a.push(s) : null != l && a.push(l), a;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: s, renderMoreUsers: a, users: o, dimEmptyUsers: l } = this.props,
            u = Math.min(e, o.length),
            c = l ? I : a;
        if (!s) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(r.Fragment, { children: c(`${t}+`, t) }, "more-users");
                else if (n > o.length) {
                    let e = n - o.length;
                    return (0, i.jsx)(r.Fragment, { children: c(`+${e}`, e) }, "more-users");
                }
            } else if (u < o.length) {
                let e = Math.min(o.length - u, 99);
                return (0, i.jsx)(r.Fragment, { children: c(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(p.Kk)
                : (0, i.jsx)(u.H, {
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
                showUserPopout: s,
                useFallbackUserForPopout: o,
            } = this.props,
            { popoutUserId: l } = this.state;
        if (null == l)
            return (0, i.jsxs)("div", {
                className: a()(e, p.kL, T(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let u = n.find((e) => e instanceof _.A && e.id === l),
            c = o && null == f.default.getUser(l);
        return (0, i.jsx)(d.A, {
            targetElementRef: this._ref,
            userId: l,
            user: c && null != u ? u : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === s && null != l,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)("div", {
                    className: a()(e, p.kL, T(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let N = S;
