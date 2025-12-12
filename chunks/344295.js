n.d(t, { Z: () => Q }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(533800),
    o = n(95015),
    c = n(756647),
    u = n(442837),
    d = n(298444),
    h = n(755721),
    f = n(447543),
    g = n(881052),
    m = n(899370),
    p = n(267394),
    x = n(388905),
    _ = n(639946),
    E = n(792766),
    v = n(362762),
    b = n(978684),
    j = n(264229),
    I = n(929809),
    N = n(703656),
    y = n(108427),
    S = n(314897),
    C = n(896797),
    O = n(701190),
    T = n(626135),
    A = n(63063),
    Z = n(782605),
    P = n(954824),
    R = n(588705),
    L = n(781428),
    D = n(423527),
    k = n(981631),
    w = n(188785),
    M = n(701476),
    B = n(436620),
    U = n(388032),
    G = n(356897),
    F = n(478411);
function V(e, t, n) {
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
function W(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
u.ZP.initialize();
let K = "Accept Invite Page",
    H = "register",
    z = "login",
    q = (e) => {
        var { className: t } = e,
            n = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["className"]);
        let i = n.look === h.zx.Looks.LINK;
        return (0, r.jsx)(
            h.zx,
            W(
                {
                    size: i ? h.zx.Sizes.MIN : h.zx.Sizes.LARGE,
                    fullWidth: !i,
                    className: a()(t, {
                        [G.button]: !i,
                        [G.linkButton]: i,
                    }),
                },
                n,
            ),
        );
    };
async function Y(e) {
    let { invite: t } = await f.ZP.resolveInvite(e, K);
    null != t && (0, p.A)(t);
}
(q.Looks = h.zx.Looks), (q.Colors = h.zx.Colors), (q.Sizes = h.zx.Sizes);
class J extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((T.default.track(k.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, y.e)("invite"), !B.KO)) {
            let e = this.getInviteKey();
            P.Z.launch("discord://" + k.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, j.fU)(e);
            (0, N.dL)(k.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) Y(s);
        else if (t.state === k.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z && r !== e.authenticated && r) {
            let e = S.default.getFingerprint();
            if (null != e) {
                let t = (0, c.s)(e);
                this.track(k.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            f.ZP.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(K),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === k.kEZ.OPEN && this.track(k.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === H && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, I.c)(M.M5.INVITE_UNCLAIMED), null != t.guild)) {
                    var a, u, d;
                    let e = (0, o.yE)(null != (d = t.flags) ? d : 0, l.$.IS_APPLICATION_BYPASS),
                        n =
                            (null == (a = t.guild.features)
                                ? void 0
                                : a.includes(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (u = t.guild.features)
                                ? void 0
                                : u.includes(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? k.Z5c.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : k.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else f.ZP.transitionToInvite(t, i);
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return w.a ? H : e.login ? z : H;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, j.jX)(i),
            a = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: s,
                  }
                : { invite_code: s };
        T.default.track(e, W({}, a, n));
    }
    renderSpinner(e) {
        return (0, r.jsxs)(x.ZP, {
            children: [(0, r.jsx)(x.Dx, { children: e }), (0, r.jsx)(x.Hh, {})],
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(x.ZP, {
            children: [
                (0, r.jsx)(x.Ee, {
                    src: n(167969),
                    className: F.marginBottom8,
                }),
                (0, r.jsx)(x.Dx, {
                    className: a()(F.marginTop8, F.marginBottom8),
                    children: U.intl.string(U.t.kux01N),
                }),
                (0, r.jsx)(x.DK, { children: e ? U.intl.string(U.t["5AkWAd"]) : U.intl.string(U.t["+qUJAj"]) }),
                this.renderButton(U.intl.string(U.t.fIv16B)),
                (0, r.jsx)(q, {
                    onClick: () => window.open(A.Z.getArticleURL(k.BhN.INVALID_INVITES), "_blank"),
                    look: q.Looks.LINK,
                    color: q.Colors.LINK,
                    className: F.marginTop8,
                    children: U.intl.string(U.t.urIwn4),
                }),
            ],
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, r.jsxs)(x.ZP, {
            children: [
                (0, r.jsx)(R.Z, {
                    invite: this.props.invite,
                    error: null == (e = this.state.error) ? void 0 : e.message,
                }),
                (null == (t = this.state.error) ? void 0 : t.code) === k.evJ.INVALID_CANNOT_FRIEND_SELF
                    ? this.renderButton(U.intl.string(U.t.fIv16B))
                    : this.renderButton(U.intl.string(U.t.ohMvm1), this.handleAccept),
            ],
        });
    }
    renderExpiredInvite() {
        return this.renderInvalidInvite(!1);
    }
    renderBannedInvite() {
        return this.renderInvalidInvite(!0);
    }
    renderAppOpened(e) {
        let t = null != e ? e : this.handleContinue;
        return (0, r.jsxs)(x.ZP, {
            children: [
                (0, r.jsx)(x.Dx, {
                    className: F.marginBottom8,
                    children: U.intl.string(U.t.csrAMJ),
                }),
                (0, r.jsx)(x.DK, { children: U.intl.string(U.t["m1+IBn"]) }),
                this.renderButton(U.intl.string(U.t.fIv16B), () => t()),
            ],
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event
            ? (0, r.jsx)(_.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, r.jsx)(R.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(x.ZP, {
                  className: F.marginTop20,
                  children: (0, r.jsx)(E.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                  }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(x.ZP, {
                    children: [
                        this.renderAuthenticatedHeader(),
                        this.renderButton(U.intl.string(U.t.ohMvm1), this.handleAccept),
                    ],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, r.jsxs)(x.ZP, {
            children: [
                (0, r.jsx)(x.Dx, { children: U.intl.string(U.t.fOc4gn) }),
                this.renderButton(U.intl.string(U.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === k.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case k.r2o.APP_OPENED:
                return this.renderAppOpened();
            case k.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case k.r2o.RESOLVING:
                return w.a
                    ? this.renderSpinner(U.intl.string(U.t.MKDeyL))
                    : this.renderSpinner(U.intl.string(U.t["Z+hCVU"]));
            case k.r2o.APP_OPENING:
                return this.renderSpinner(U.intl.string(U.t["Z+hCVU"]));
            case k.r2o.RESOLVED:
                var a;
                if (n && (0, o.yE)(null != (a = e.flags) ? a : 0, l.$.IS_GUEST_INVITE))
                    return f.ZP.openApp(e.code), d.x.set(b.J, e.code), this.renderAppOpened(() => i(k.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z)
                    return (0, r.jsx)(L.Z, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(D.Z, {
                        invite: e,
                        onLoginStart: () => this.track(k.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i,
                    });
            case k.r2o.ACCEPTING:
                return this.renderSpinner(U.intl.string(U.t["6wsY16"]));
            case k.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case k.r2o.BANNED:
                return this.renderBannedInvite();
            case k.r2o.ERROR:
                return this.renderErrorInvite();
            case k.r2o.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            V(this, "state", { error: null }),
            V(this, "getAcceptInviteContext", (e) => f.ZP.getInviteContext(e, this.props.invite)),
            V(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(k.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : f.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            V(this, "handleAccept", () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                f.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(K),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && f.ZP.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof g.yZ || e instanceof g.Hx) {
                        let t = (0, Z.O)(e.code);
                        this.setState({
                            error: {
                                code: e.code,
                                message: t,
                            },
                        });
                    } else
                        this.setState({
                            error: {
                                code: e.code,
                                message: U.intl.string(U.t.dDZRdy),
                            },
                        });
                });
            }),
            V(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            V(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.guild_scheduled_event;
                return B.KO
                    ? (0, r.jsx)(q, {
                          className: s ? F.marginTop20 : F.marginTop40,
                          onClick: n,
                          color: s ? q.Colors.GREEN : q.Colors.BRAND,
                          children: e,
                      })
                    : (0, r.jsx)(x.v6, { className: F.marginTop40 });
            });
    }
}
let Q = u.ZP.connectStores([O.Z, C.Z, S.default, v.Z, m.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = O.Z.getInvite(n)) ? t : {},
        nativeAppState: v.Z.getState(n),
        authenticated: S.default.isAuthenticated(),
        defaultRoute: C.Z.defaultRoute,
        isUnderage: m.Z.isUnderageAnonymous(),
    };
})(J);
