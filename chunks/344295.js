n.d(t, { Z: () => W }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(533800),
    o = n(756647),
    c = n(442837),
    u = n(298444),
    d = n(447543),
    h = n(881052),
    g = n(899370),
    p = n(267394),
    m = n(388905),
    f = n(639946),
    _ = n(792766),
    x = n(362762),
    E = n(978684),
    v = n(264229),
    b = n(929809),
    j = n(703656),
    I = n(108427),
    N = n(314897),
    O = n(896797),
    y = n(701190),
    S = n(626135),
    C = n(630388),
    A = n(63063),
    T = n(782605),
    Z = n(954824),
    P = n(588705),
    R = n(781428),
    L = n(423527),
    w = n(981631),
    D = n(188785),
    k = n(701476),
    M = n(436620),
    U = n(388032),
    G = n(197571);
function B(e, t, n) {
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
c.ZP.initialize();
let F = "Accept Invite Page",
    z = "register",
    V = "login";
async function K(e) {
    let { invite: t } = await d.ZP.resolveInvite(e, F);
    null != t && (0, p.A)(t);
}
class H extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((S.default.track(w.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, I.e)("invite"), !M.KO)) {
            let e = this.getInviteKey();
            Z.Z.launch("discord://" + w.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, v.fU)(e);
            (0, j.dL)(w.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) K(s);
        else if (t.state === w.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === V && r !== e.authenticated && r) {
            let e = N.default.getFingerprint();
            if (null != e) {
                let t = (0, o.s)(e);
                this.track(w.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.ZP.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === w.kEZ.OPEN && this.track(w.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === z && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, b.c)(k.M5.INVITE_UNCLAIMED), null != t.guild)) {
                    var l, c, u;
                    let e = (0, C.yE)(null != (u = t.flags) ? u : 0, a.$.IS_APPLICATION_BYPASS),
                        n =
                            (null == (l = t.guild.features)
                                ? void 0
                                : l.includes(w.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (c = t.guild.features)
                                ? void 0
                                : c.includes(w.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? w.Z5c.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : w.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else d.ZP.transitionToInvite(t, i);
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return D.a ? z : e.login ? V : z;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, v.jX)(i),
            l = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: s,
                  }
                : { invite_code: s };
        S.default.track(
            e,
            (function (e) {
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
                            B(e, t, n[t]);
                        });
                }
                return e;
            })({}, l, n),
        );
    }
    renderSpinner(e) {
        return (0, r.jsxs)(m.ZP, {
            children: [(0, r.jsx)(m.Dx, { children: e }), (0, r.jsx)(m.Hh, {})],
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Ee, {
                    src: n(167969),
                    className: G.marginBottom8,
                }),
                (0, r.jsx)(m.Dx, {
                    className: l()(G.marginTop8, G.marginBottom8),
                    children: U.intl.string(U.t.kux01N),
                }),
                (0, r.jsx)(m.DK, { children: e ? U.intl.string(U.t["5AkWAQ"]) : U.intl.string(U.t["+qUJAg"]) }),
                this.renderButton(U.intl.string(U.t.fIv16O)),
                (0, r.jsx)(m.zx, {
                    onClick: () => window.open(A.Z.getArticleURL(w.BhN.INVALID_INVITES), "_blank"),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    className: G.marginTop8,
                    children: U.intl.string(U.t.urIwn5),
                }),
            ],
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(P.Z, {
                    invite: this.props.invite,
                    error: null == (e = this.state.error) ? void 0 : e.message,
                }),
                (null == (t = this.state.error) ? void 0 : t.code) === w.evJ.INVALID_CANNOT_FRIEND_SELF
                    ? this.renderButton(U.intl.string(U.t.fIv16O))
                    : this.renderButton(U.intl.string(U.t.ohMvm5), this.handleAccept),
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
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Dx, {
                    className: G.marginBottom8,
                    children: U.intl.string(U.t.csrAMD),
                }),
                (0, r.jsx)(m.DK, { children: U.intl.string(U.t["m1+IBg"]) }),
                this.renderButton(U.intl.string(U.t.fIv16O), () => t()),
            ],
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event
            ? (0, r.jsx)(f.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, r.jsx)(P.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(m.ZP, {
                  className: G.marginTop20,
                  children: (0, r.jsx)(_.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                  }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(m.ZP, {
                    children: [
                        this.renderAuthenticatedHeader(),
                        this.renderButton(U.intl.string(U.t.ohMvm5), this.handleAccept),
                    ],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Dx, { children: U.intl.string(U.t.fOc4go) }),
                this.renderButton(U.intl.string(U.t.fIv16O)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === w.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case w.r2o.APP_OPENED:
                return this.renderAppOpened();
            case w.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case w.r2o.RESOLVING:
                return D.a
                    ? this.renderSpinner(U.intl.string(U.t.MKDeyM))
                    : this.renderSpinner(U.intl.string(U.t["Z+hCVV"]));
            case w.r2o.APP_OPENING:
                return this.renderSpinner(U.intl.string(U.t["Z+hCVV"]));
            case w.r2o.RESOLVED:
                var l;
                if (n && (0, C.yE)(null != (l = e.flags) ? l : 0, a.$.IS_GUEST_INVITE))
                    return d.ZP.openApp(e.code), u.x.set(E.J, e.code), this.renderAppOpened(() => i(w.Z5c.APP));
                if (n || !M.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === V)
                    return (0, r.jsx)(R.Z, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(L.Z, {
                        invite: e,
                        onLoginStart: () => this.track(w.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i,
                    });
            case w.r2o.ACCEPTING:
                return this.renderSpinner(U.intl.string(U.t["6wsY19"]));
            case w.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case w.r2o.BANNED:
                return this.renderBannedInvite();
            case w.r2o.ERROR:
                return this.renderErrorInvite();
            case w.r2o.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(this, "state", { error: null }),
            B(this, "getAcceptInviteContext", (e) => d.ZP.getInviteContext(e, this.props.invite)),
            B(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(w.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : d.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            B(this, "handleAccept", () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                d.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(F),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, T.O)(e.code);
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
                                message: U.intl.string(U.t.dDZRd3),
                            },
                        });
                });
            }),
            B(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            B(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.guild_scheduled_event;
                return M.KO
                    ? (0, r.jsx)(m.zx, {
                          className: s ? G.marginTop20 : G.marginTop40,
                          onClick: n,
                          color: s ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                          children: e,
                      })
                    : (0, r.jsx)(m.v6, { className: G.marginTop40 });
            });
    }
}
let W = c.ZP.connectStores([y.Z, O.Z, N.default, x.Z, g.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = y.Z.getInvite(n)) ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: N.default.isAuthenticated(),
        defaultRoute: O.Z.defaultRoute,
        isUnderage: g.Z.isUnderageAnonymous(),
    };
})(H);
