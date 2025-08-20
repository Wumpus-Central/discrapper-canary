n.d(t, { Z: () => W }), n(997841), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(533800),
    a = n(756647),
    c = n(442837),
    u = n(298444),
    d = n(447543),
    h = n(881052),
    f = n(899370),
    p = n(267394),
    g = n(388905),
    m = n(639946),
    _ = n(792766),
    x = n(362762),
    v = n(978684),
    E = n(264229),
    b = n(929809),
    j = n(703656),
    I = n(108427),
    N = n(314897),
    O = n(896797),
    y = n(701190),
    S = n(626135),
    C = n(630388),
    Z = n(63063),
    A = n(782605),
    T = n(954824),
    P = n(588705),
    R = n(781428),
    w = n(423527),
    L = n(981631),
    D = n(188785),
    k = n(701476),
    M = n(436620),
    B = n(388032),
    F = n(197571);
function U(e, t, n) {
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
let G = "Accept Invite Page",
    z = "register",
    V = "login";
async function K(e) {
    let { invite: t } = await d.ZP.resolveInvite(e, G);
    null != t && (0, p.A)(t);
}
class H extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((S.default.track(L.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, I.e)("invite"), !M.KO)) {
            let e = this.getInviteKey();
            T.Z.launch("discord://" + L.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, E.fU)(e);
            (0, j.dL)(L.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            l = this.getInviteKey();
        if (l !== this.getInviteKey(e)) K(l);
        else if (t.state === L.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === V && r !== e.authenticated && r) {
            let e = N.default.getFingerprint();
            if (null != e) {
                let t = (0, a.s)(e);
                this.track(L.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.ZP.acceptInvite({
                inviteKey: l,
                context: this.getAcceptInviteContext(G),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === L.kEZ.OPEN && this.track(L.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === z && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, b.c)(k.M5.INVITE_UNCLAIMED), null != t.guild)) {
                    var o, c, u;
                    let e = (0, C.yE)(null != (u = t.flags) ? u : 0, s.$.IS_APPLICATION_BYPASS),
                        n =
                            (null == (o = t.guild.features)
                                ? void 0
                                : o.includes(L.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (c = t.guild.features)
                                ? void 0
                                : c.includes(L.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? L.Z5c.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
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
            l = (0, E.jX)(i),
            o = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: l,
                  }
                : { invite_code: l };
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
                            U(e, t, n[t]);
                        });
                }
                return e;
            })({}, o, n),
        );
    }
    renderSpinner(e) {
        return (0, r.jsxs)(g.ZP, {
            children: [(0, r.jsx)(g.Dx, { children: e }), (0, r.jsx)(g.Hh, {})],
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, {
                    src: n(167969),
                    className: F.marginBottom8,
                }),
                (0, r.jsx)(g.Dx, {
                    className: o()(F.marginTop8, F.marginBottom8),
                    children: B.intl.string(B.t.kux01N),
                }),
                (0, r.jsx)(g.DK, { children: e ? B.intl.string(B.t["5AkWAQ"]) : B.intl.string(B.t["+qUJAg"]) }),
                this.renderButton(B.intl.string(B.t.fIv16O)),
                (0, r.jsx)(g.zx, {
                    onClick: () => window.open(Z.Z.getArticleURL(L.BhN.INVALID_INVITES), "_blank"),
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    className: F.marginTop8,
                    children: B.intl.string(B.t.urIwn5),
                }),
            ],
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(P.Z, {
                    invite: this.props.invite,
                    error: null == (e = this.state.error) ? void 0 : e.message,
                }),
                (null == (t = this.state.error) ? void 0 : t.code) === L.evJ.INVALID_CANNOT_FRIEND_SELF
                    ? this.renderButton(B.intl.string(B.t.fIv16O))
                    : this.renderButton(B.intl.string(B.t.ohMvm5), this.handleAccept),
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
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Dx, {
                    className: F.marginBottom8,
                    children: B.intl.string(B.t.csrAMD),
                }),
                (0, r.jsx)(g.DK, { children: B.intl.string(B.t["m1+IBg"]) }),
                this.renderButton(B.intl.string(B.t.fIv16O), () => t()),
            ],
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event
            ? (0, r.jsx)(m.r, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, r.jsx)(P.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(g.ZP, {
                  className: F.marginTop20,
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
                (0, r.jsxs)(g.ZP, {
                    children: [
                        this.renderAuthenticatedHeader(),
                        this.renderButton(B.intl.string(B.t.ohMvm5), this.handleAccept),
                    ],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Dx, { children: B.intl.string(B.t.fOc4go) }),
                this.renderButton(B.intl.string(B.t.fIv16O)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (t === L.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case L.r2o.APP_OPENED:
                return this.renderAppOpened();
            case L.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case L.r2o.RESOLVING:
                return D.a
                    ? this.renderSpinner(B.intl.string(B.t.MKDeyM))
                    : this.renderSpinner(B.intl.string(B.t["Z+hCVV"]));
            case L.r2o.APP_OPENING:
                return this.renderSpinner(B.intl.string(B.t["Z+hCVV"]));
            case L.r2o.RESOLVED:
                var o;
                if (n && (0, C.yE)(null != (o = e.flags) ? o : 0, s.$.IS_GUEST_INVITE))
                    return d.ZP.openApp(e.code), u.x.set(v.J, e.code), this.renderAppOpened(() => i(L.Z5c.APP));
                if (n || !M.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === V)
                    return (0, r.jsx)(R.Z, {
                        invite: e,
                        transitionTo: i,
                        location: l,
                    });
                else
                    return (0, r.jsx)(w.Z, {
                        invite: e,
                        onLoginStart: () => this.track(L.rMx.INVITE_LOGIN, !0),
                        location: l,
                        transitionTo: i,
                    });
            case L.r2o.ACCEPTING:
                return this.renderSpinner(B.intl.string(B.t["6wsY19"]));
            case L.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case L.r2o.BANNED:
                return this.renderBannedInvite();
            case L.r2o.ERROR:
                return this.renderErrorInvite();
            case L.r2o.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            U(this, "state", { error: null }),
            U(this, "getAcceptInviteContext", (e) => d.ZP.getInviteContext(e, this.props.invite)),
            U(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : d.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            U(this, "handleAccept", () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                d.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(G),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, A.O)(e.code);
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
                                message: B.intl.string(B.t.dDZRd3),
                            },
                        });
                });
            }),
            U(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            U(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    l = null != i.guild_scheduled_event;
                return M.KO
                    ? (0, r.jsx)(g.zx, {
                          className: l ? F.marginTop20 : F.marginTop40,
                          onClick: n,
                          color: l ? g.zx.Colors.GREEN : g.zx.Colors.BRAND,
                          children: e,
                      })
                    : (0, r.jsx)(g.v6, { className: F.marginTop40 });
            });
    }
}
let W = c.ZP.connectStores([y.Z, O.Z, N.default, x.Z, f.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = y.Z.getInvite(n)) ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: N.default.isAuthenticated(),
        defaultRoute: O.Z.defaultRoute,
        isUnderage: f.Z.isUnderageAnonymous(),
    };
})(H);
