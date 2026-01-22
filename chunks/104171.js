n.d(t, {
    Ay: () => P,
    DN: () => b,
    mt: () => S,
}),
    n(321073),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(573435),
    u = n(342296),
    d = n(427157),
    f = n(287809),
    p = n(820883),
    _ = n(688963);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56,
    },
    y = 10,
    O = 15,
    A = 20,
    v = 35,
    S = "user-icon";
function I(e, t) {
    if (e === S) return "user-icon-".concat(t);
    let n = e instanceof d.A ? e : null != e ? e.user : null;
    return null != n ? n.id : "user-".concat(t);
}
function T(e) {
    return (0, i.jsx)("div", {
        className: _.In,
        children: e,
    });
}
function C(e) {
    return (0, i.jsx)("div", {
        className: o()(_.In, _.iq),
        children: e,
    });
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.SIZE_24;
    switch (e) {
        case b.SIZE_16:
            return _.nc;
        case b.SIZE_24:
            return _.q1;
        case b.SIZE_32:
            return _.Hb;
        case b.SIZE_56:
            return _.dl;
        default:
            return _.q1;
    }
}
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.SIZE_24;
    switch (e) {
        case b.SIZE_16:
            return y;
        case b.SIZE_24:
            return O;
        case b.SIZE_32:
            return A;
        case b.SIZE_56:
            return v;
        default:
            return y;
    }
}
class w extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: r, extraDetail: a } = this.props,
            s = [],
            o = e.length === t ? e.length : t - 1,
            l = this.renderMoreUsers(o),
            u = 0;
        for (; u < o && u < e.length; ) {
            var d;
            let t = null == l && null == a && u === e.length - 1,
                o = n(e[u], t, u);
            s.push(
                t
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: _.H,
                              children: o,
                          },
                          I(null != (d = e[u]) ? d : null, u),
                      )
                    : (0, i.jsx)(
                          c.Ay,
                          {
                              className: _.aV,
                              height: r,
                              width: r,
                              mask: c.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: o,
                          },
                          I(e[u], u),
                      ),
            ),
                u++;
        }
        return null != a ? s.push(a) : null != l && s.push(l), s;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: r, renderMoreUsers: s, users: o, dimEmptyUsers: l } = this.props,
            c = Math.min(e, o.length),
            u = l ? C : s;
        if (!r) {
            if (null != n) {
                if (n >= t) return (0, i.jsx)(a.Fragment, { children: u("".concat(t, "+"), t) }, "more-users");
                else if (n > o.length) {
                    let e = n - o.length;
                    return (0, i.jsx)(a.Fragment, { children: u("+".concat(e), e) }, "more-users");
                }
            } else if (c < o.length) {
                let e = Math.min(o.length - c, 99);
                return (0, i.jsx)(a.Fragment, { children: u("+".concat(e), e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(_.Kk)
                : (0, i.jsx)(l.HKD, {
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
                guildId: r,
                showUserPopout: a,
                useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: l } = this.state;
        if (null == l)
            return (0, i.jsxs)("div", {
                className: o()(e, _.kL, N(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let c = n.find((e) => e instanceof d.A && e.id === l),
            p = s && null == f.default.getUser(l);
        return (0, i.jsx)(u.A, {
            targetElementRef: this._ref,
            userId: l,
            user: p && null != c ? c : void 0,
            guildId: r,
            fixed: !0,
            shouldShow: !0 === a && null != l,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, i.jsxs)(
                    "div",
                    E(
                        m(
                            {
                                className: o()(e, _.kL, N(t)),
                                ref: this._ref,
                            },
                            n,
                        ),
                        {
                            children: [this.renderIcon(), this.renderUsers()],
                        },
                    ),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", { popoutUserId: null }),
            h(this, "_ref", a.createRef()),
            h(this, "defaultRenderUser", (e, t, n) => {
                let r,
                    { showUserPopout: a, guildId: s, size: c, dimEmptyUsers: u } = this.props;
                if (null == e)
                    if (!this.props.showDefaultAvatarsForNullUsers)
                        return (0, i.jsx)("div", { className: o()(_.F2, { [_.F_]: u }) });
                    else {
                        let e = (null != n ? n : 0) % p.A.DEFAULT_AVATARS.length,
                            t = p.A.DEFAULT_AVATARS[e];
                        return (0, i.jsx)("img", {
                            src: t,
                            alt: "",
                            className: _.my,
                        });
                    }
                if (e === S) {
                    let e = R(c);
                    r = (0, i.jsx)(l.nys, {
                        size: "custom",
                        color: "currentColor",
                        width: e,
                        height: e,
                    });
                } else
                    r = (0, i.jsx)("img", {
                        src: e.getAvatarURL(s, c),
                        alt: e.username,
                        className: _.my,
                    });
                let d = (0, i.jsx)(
                    "div",
                    {
                        className: _.WK,
                        children: r,
                    },
                    I(e, n),
                );
                return a && e !== S
                    ? (0, i.jsx)(
                          l.DUT,
                          {
                              className: _.UC,
                              onClick: () => {
                                  null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                              },
                              tabIndex: -1,
                              children: d,
                          },
                          I(e, n),
                      )
                    : d;
            });
    }
}
h(w, "defaultProps", {
    max: 10,
    renderMoreUsers: T,
    renderIcon: !1,
    showDefaultAvatarsForNullUsers: !1,
    size: b.SIZE_24,
});
let P = w;
