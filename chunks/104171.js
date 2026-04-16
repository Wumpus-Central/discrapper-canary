"use strict";
n.d(t, { Ay: () => C, DN: () => p, mt: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(573435),
    u = n(342296),
    c = n(427157),
    d = n(287809),
    _ = n(820883),
    f = n(227568);
let p = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
    h = 10,
    m = 15,
    E = 20,
    g = 35,
    A = "user-icon";
function I(e, t) {
    if (e === A) return `user-icon-${t}`;
    let n = e instanceof c.A ? e : null != e ? e.user : null;
    return null != n ? n.id : `user-${t}`;
}
function T(e) {
    return (0, r.jsx)("div", { className: f.In, children: e });
}
function S(e) {
    return (0, r.jsx)("div", { className: a()(f.In, f.iq), children: e });
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
    switch (e) {
        case p.SIZE_16:
            return f.nc;
        case p.SIZE_24:
            return f.q1;
        case p.SIZE_32:
            return f.Hb;
        case p.SIZE_56:
            return f.dl;
        default:
            return f.q1;
    }
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.SIZE_24;
    switch (e) {
        case p.SIZE_16:
            return h;
        case p.SIZE_24:
            return m;
        case p.SIZE_32:
            return E;
        case p.SIZE_56:
            return g;
        default:
            return h;
    }
}
class N extends i.PureComponent {
    static defaultProps = {
        max: 10,
        renderMoreUsers: T,
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: p.SIZE_24,
    };
    state = { popoutUserId: null };
    _ref = i.createRef();
    defaultRenderUser = (e, t, n) => {
        let i,
            { showUserPopout: s, guildId: l, size: u, dimEmptyUsers: c } = this.props;
        if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
                return (0, r.jsx)("div", { className: a()(f.F2, { [f.F_]: c }) });
            else {
                let e = (n ?? 0) % _.A.DEFAULT_AVATARS.length,
                    t = _.A.DEFAULT_AVATARS[e];
                return (0, r.jsx)("img", { src: t, alt: "", className: f.my });
            }
        if (e === A) {
            let e = v(u);
            i = (0, r.jsx)(o.nys, { size: "custom", color: "currentColor", width: e, height: e });
        } else i = (0, r.jsx)("img", { src: e.getAvatarURL(l, u), alt: e.username, className: f.my });
        let d = (0, r.jsx)("div", { className: f.WK, children: i }, I(e, n));
        return s && e !== A
            ? (0, r.jsx)(
                  o.DUT,
                  {
                      className: f.UC,
                      onClick: () => {
                          null != this._ref.current && null != e && this.setState({ popoutUserId: e.id });
                      },
                      tabIndex: -1,
                      children: d,
                  },
                  I(e, n),
              )
            : d;
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, size: i, extraDetail: s } = this.props,
            a = [],
            o = e.length === t ? e.length : t - 1,
            u = this.renderMoreUsers(o),
            c = 0;
        for (; c < o && c < e.length; ) {
            let t = null == u && null == s && c === e.length - 1,
                o = n(e[c], t, c);
            a.push(
                t
                    ? (0, r.jsx)("div", { className: f.H, children: o }, I(e[c] ?? null, c))
                    : (0, r.jsx)(
                          l.Ay,
                          {
                              className: f.aV,
                              height: i,
                              width: i,
                              mask: l.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                              children: o,
                          },
                          I(e[c], c),
                      ),
            ),
                c++;
        }
        return null != s ? a.push(s) : null != u && a.push(u), a;
    }
    renderMoreUsers(e) {
        let { max: t, count: n, hideMoreUsers: s, renderMoreUsers: a, users: o, dimEmptyUsers: l } = this.props,
            u = Math.min(e, o.length),
            c = l ? S : a;
        if (!s) {
            if (null != n) {
                if (n >= t) return (0, r.jsx)(i.Fragment, { children: c(`${t}+`, t) }, "more-users");
                else if (n > o.length) {
                    let e = n - o.length;
                    return (0, r.jsx)(i.Fragment, { children: c(`+${e}`, e) }, "more-users");
                }
            } else if (u < o.length) {
                let e = Math.min(o.length - u, 99);
                return (0, r.jsx)(i.Fragment, { children: c(`+${e}`, e) }, "more-users");
            }
        }
    }
    renderIcon() {
        let { renderLeadingIcon: e, renderIcon: t } = this.props;
        return t
            ? null != e
                ? e(f.Kk)
                : (0, r.jsx)(o.HKD, {
                      size: "md",
                      color: "currentColor",
                      colorClass: f.__invalid_foreground,
                      className: f.Kk,
                  })
            : null;
    }
    render() {
        let {
                className: e,
                size: t,
                users: n,
                guildId: i,
                showUserPopout: s,
                useFallbackUserForPopout: o,
            } = this.props,
            { popoutUserId: l } = this.state;
        if (null == l)
            return (0, r.jsxs)("div", {
                className: a()(e, f.kL, y(t)),
                children: [this.renderIcon(), this.renderUsers()],
            });
        let _ = n.find((e) => e instanceof c.A && e.id === l),
            p = o && null == d.default.getUser(l);
        return (0, r.jsx)(u.A, {
            targetElementRef: this._ref,
            userId: l,
            user: p && null != _ ? _ : void 0,
            guildId: i,
            fixed: !0,
            shouldShow: !0 === s && null != l,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
                (0, r.jsxs)("div", {
                    className: a()(e, f.kL, y(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()],
                }),
        });
    }
}
let C = N;
