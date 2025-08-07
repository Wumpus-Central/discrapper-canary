n.d(t, { Z: () => K }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(533800),
    a = n(756647),
    c = n(442837),
    u = n(298444),
    d = n(447543),
    h = n(881052),
    p = n(899370),
    f = n(267394),
    m = n(388905),
    g = n(639946),
    _ = n(792766),
    x = n(362762),
    b = n(978684),
    E = n(264229),
    v = n(929809),
    j = n(703656),
    I = n(108427),
    O = n(314897),
    S = n(896797),
    N = n(701190),
    y = n(626135),
    C = n(630388),
    A = n(63063),
    T = n(782605),
    Z = n(954824),
    P = n(588705),
    R = n(781428),
    w = n(423527),
    L = n(981631),
    D = n(188785),
    k = n(701476),
    B = n(436620),
    M = n(388032),
    U = n(20493);
function G(e, t, n) {
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
    z = {
        REGISTER: "register",
        LOGIN: "login",
    };
async function V(e) {
    let { invite: t } = await d.ZP.resolveInvite(e, F);
    null != t && (0, f.A)(t);
}
class H extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((y.default.track(L.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, I.e)("invite"), !B.KO)) {
            let e = this.getInviteKey();
            Z.Z.launch("discord://" + L.Z5c.INVITE(e), () => void 0);
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
        if (l !== this.getInviteKey(e)) V(l);
        else if (t.state === L.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && r !== e.authenticated && r) {
            let e = O.default.getFingerprint();
            if (null != e) {
                let t = (0, a.s)(e);
                this.track(L.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.ZP.acceptInvite({
                inviteKey: l,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === L.kEZ.OPEN && this.track(L.rMx.INVITE_APP_INVOKED, !1),
            this.getMode() === z.REGISTER && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, v.c)(k.M5.INVITE_UNCLAIMED), null != t.guild)) {
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
        return D.a ? z.REGISTER : e.login ? z.LOGIN : z.REGISTER;
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
        y.default.track(
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
                            G(e, t, n[t]);
                        });
                }
                return e;
            })({}, o, n),
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
                    className: U.marginBottom8,
                }),
                (0, r.jsx)(m.Dx, {
                    className: o()(U.marginTop8, U.marginBottom8),
                    children: M.intl.string(M.t.kux01N),
                }),
                (0, r.jsx)(m.DK, { children: e ? M.intl.string(M.t["5AkWAQ"]) : M.intl.string(M.t["+qUJAg"]) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
                (0, r.jsx)(m.zx, {
                    onClick: () => window.open(A.Z.getArticleURL(L.BhN.INVALID_INVITES), "_blank"),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    className: U.marginTop8,
                    children: M.intl.string(M.t.urIwn5),
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
                (null == (t = this.state.error) ? void 0 : t.code) === L.evJ.INVALID_CANNOT_FRIEND_SELF
                    ? this.renderButton(M.intl.string(M.t.fIv16O))
                    : this.renderButton(M.intl.string(M.t.ohMvm5), this.handleAccept),
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
                    className: U.marginBottom8,
                    children: M.intl.string(M.t.csrAMD),
                }),
                (0, r.jsx)(m.DK, { children: M.intl.string(M.t["m1+IBg"]) }),
                this.renderButton(M.intl.string(M.t.fIv16O), () => t()),
            ],
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, r.jsx)(_.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild,
              })
            : null != e.guild_scheduled_event
              ? (0, r.jsx)(g.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event,
                })
              : (0, r.jsx)(P.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, r.jsx)(m.ZP, {
                  className: U.marginTop20,
                  children: (0, r.jsx)(_.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                  }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? M.intl.string(M.t["5UKyUl"]) : M.intl.string(M.t.ohMvm5);
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(m.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Dx, { children: M.intl.string(M.t.fOc4go) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
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
                    ? this.renderSpinner(M.intl.string(M.t.MKDeyM))
                    : this.renderSpinner(M.intl.string(M.t["Z+hCVV"]));
            case L.r2o.APP_OPENING:
                return this.renderSpinner(M.intl.string(M.t["Z+hCVV"]));
            case L.r2o.RESOLVED:
                var o;
                if (n && (0, C.yE)(null != (o = e.flags) ? o : 0, s.$.IS_GUEST_INVITE))
                    return d.ZP.openApp(e.code), u.x.set(b.J, e.code), this.renderAppOpened(() => i(L.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z.LOGIN)
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
                return this.renderSpinner(M.intl.string(M.t["6wsY19"]));
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
            G(this, "state", { error: null }),
            G(this, "getAcceptInviteContext", (e) => d.ZP.getInviteContext(e, this.props.invite)),
            G(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : d.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            G(this, "handleAccept", () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                d.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(F),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, f.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id);
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
                                message: M.intl.string(M.t.dDZRd3),
                            },
                        });
                });
            }),
            G(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            G(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    l = null != i.stage_instance || null != i.guild_scheduled_event;
                return B.KO
                    ? (0, r.jsx)(m.zx, {
                          className: l ? U.marginTop20 : U.marginTop40,
                          onClick: n,
                          color: l ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                          children: e,
                      })
                    : (0, r.jsx)(m.v6, { className: U.marginTop40 });
            });
    }
}
let K = c.ZP.connectStores([N.Z, S.Z, O.default, x.Z, p.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = N.Z.getInvite(n)) ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: O.default.isAuthenticated(),
        defaultRoute: S.Z.defaultRoute,
        isUnderage: p.Z.isUnderageAnonymous(),
    };
})(H);
