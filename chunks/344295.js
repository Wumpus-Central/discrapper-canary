n.d(t, { Z: () => Q }), n(997841), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(533800),
    o = n(756647),
    c = n(442837),
    u = n(298444),
    d = n(755721),
    h = n(447543),
    g = n(881052),
    m = n(899370),
    p = n(267394),
    f = n(388905),
    _ = n(639946),
    x = n(792766),
    E = n(362762),
    v = n(978684),
    j = n(264229),
    b = n(929809),
    I = n(703656),
    y = n(108427),
    S = n(314897),
    N = n(896797),
    O = n(701190),
    C = n(626135),
    T = n(630388),
    A = n(63063),
    Z = n(782605),
    P = n(954824),
    R = n(588705),
    L = n(781428),
    w = n(423527),
    D = n(981631),
    k = n(188785),
    M = n(701476),
    B = n(436620),
    U = n(388032),
    G = n(646668),
    F = n(10198);
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
c.ZP.initialize();
let H = "Accept Invite Page",
    K = "register",
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
        let i = n.look === d.zx.Looks.LINK;
        return (0, r.jsx)(
            d.zx,
            W(
                {
                    size: i ? d.zx.Sizes.MIN : d.zx.Sizes.LARGE,
                    fullWidth: !i,
                    className: l()(t, {
                        [G.button]: !i,
                        [G.linkButton]: i,
                    }),
                },
                n,
            ),
        );
    };
async function Y(e) {
    let { invite: t } = await h.ZP.resolveInvite(e, H);
    null != t && (0, p.A)(t);
}
(q.Looks = d.zx.Looks), (q.Colors = d.zx.Colors), (q.Sizes = d.zx.Sizes);
class J extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((C.default.track(D.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, y.e)("invite"), !B.KO)) {
            let e = this.getInviteKey();
            P.Z.launch("discord://" + D.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, j.fU)(e);
            (0, I.dL)(D.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) Y(s);
        else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z && r !== e.authenticated && r) {
            let e = S.default.getFingerprint();
            if (null != e) {
                let t = (0, o.s)(e);
                this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            h.ZP.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(H),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === D.kEZ.OPEN && this.track(D.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === K && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, b.c)(M.M5.INVITE_UNCLAIMED), null != t.guild)) {
                    var l, c, u;
                    let e = (0, T.yE)(null != (u = t.flags) ? u : 0, a.$.IS_APPLICATION_BYPASS),
                        n =
                            (null == (l = t.guild.features)
                                ? void 0
                                : l.includes(D.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (c = t.guild.features)
                                ? void 0
                                : c.includes(D.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? D.Z5c.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else h.ZP.transitionToInvite(t, i);
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return k.a ? K : e.login ? z : K;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, j.jX)(i),
            l = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: s,
                  }
                : { invite_code: s };
        C.default.track(e, W({}, l, n));
    }
    renderSpinner(e) {
        return (0, r.jsxs)(f.ZP, {
            children: [(0, r.jsx)(f.Dx, { children: e }), (0, r.jsx)(f.Hh, {})],
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(f.Ee, {
                    src: n(167969),
                    className: F.marginBottom8,
                }),
                (0, r.jsx)(f.Dx, {
                    className: l()(F.marginTop8, F.marginBottom8),
                    children: U.intl.string(U.t.kux01N),
                }),
                (0, r.jsx)(f.DK, { children: e ? U.intl.string(U.t["5AkWAd"]) : U.intl.string(U.t["+qUJAj"]) }),
                this.renderButton(U.intl.string(U.t.fIv16B)),
                (0, r.jsx)(q, {
                    onClick: () => window.open(A.Z.getArticleURL(D.BhN.INVALID_INVITES), "_blank"),
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
        return (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(R.Z, {
                    invite: this.props.invite,
                    error: null == (e = this.state.error) ? void 0 : e.message,
                }),
                (null == (t = this.state.error) ? void 0 : t.code) === D.evJ.INVALID_CANNOT_FRIEND_SELF
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
        return (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(f.Dx, {
                    className: F.marginBottom8,
                    children: U.intl.string(U.t.csrAMJ),
                }),
                (0, r.jsx)(f.DK, { children: U.intl.string(U.t["m1+IBn"]) }),
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
            ? (0, r.jsx)(f.ZP, {
                  className: F.marginTop20,
                  children: (0, r.jsx)(x.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                  }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(f.ZP, {
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
        return (0, r.jsxs)(f.ZP, {
            children: [
                (0, r.jsx)(f.Dx, { children: U.intl.string(U.t.fOc4gn) }),
                this.renderButton(U.intl.string(U.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === D.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case D.r2o.APP_OPENED:
                return this.renderAppOpened();
            case D.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case D.r2o.RESOLVING:
                return k.a
                    ? this.renderSpinner(U.intl.string(U.t.MKDeyL))
                    : this.renderSpinner(U.intl.string(U.t["Z+hCVU"]));
            case D.r2o.APP_OPENING:
                return this.renderSpinner(U.intl.string(U.t["Z+hCVU"]));
            case D.r2o.RESOLVED:
                var l;
                if (n && (0, T.yE)(null != (l = e.flags) ? l : 0, a.$.IS_GUEST_INVITE))
                    return h.ZP.openApp(e.code), u.x.set(v.J, e.code), this.renderAppOpened(() => i(D.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z)
                    return (0, r.jsx)(L.Z, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(w.Z, {
                        invite: e,
                        onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i,
                    });
            case D.r2o.ACCEPTING:
                return this.renderSpinner(U.intl.string(U.t["6wsY16"]));
            case D.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case D.r2o.BANNED:
                return this.renderBannedInvite();
            case D.r2o.ERROR:
                return this.renderErrorInvite();
            case D.r2o.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            V(this, "state", { error: null }),
            V(this, "getAcceptInviteContext", (e) => h.ZP.getInviteContext(e, this.props.invite)),
            V(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : h.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            V(this, "handleAccept", () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                h.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(H),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && h.ZP.openApp(e, t.channel.id);
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
                    : (0, r.jsx)(f.v6, { className: F.marginTop40 });
            });
    }
}
let Q = c.ZP.connectStores([O.Z, N.Z, S.default, E.Z, m.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = O.Z.getInvite(n)) ? t : {},
        nativeAppState: E.Z.getState(n),
        authenticated: S.default.isAuthenticated(),
        defaultRoute: N.Z.defaultRoute,
        isUnderage: m.Z.isUnderageAnonymous(),
    };
})(J);
