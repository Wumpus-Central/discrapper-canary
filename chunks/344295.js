n.d(t, { Z: () => K }), n(789020), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(533800),
    s = n(756647),
    c = n(442837),
    d = n(298444),
    u = n(447543),
    h = n(881052),
    _ = n(899370),
    g = n(267394),
    p = n(388905),
    m = n(639946),
    f = n(792766),
    x = n(362762),
    E = n(978684),
    I = n(264229),
    v = n(929809),
    N = n(703656),
    b = n(108427),
    C = n(314897),
    T = n(896797),
    S = n(701190),
    A = n(626135),
    Z = n(630388),
    j = n(63063),
    R = n(782605),
    L = n(954824),
    y = n(588705),
    O = n(781428),
    P = n(423527),
    D = n(981631),
    k = n(188785),
    w = n(701476),
    B = n(436620),
    M = n(388032),
    U = n(232186);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
c.ZP.initialize();
let F = 'Accept Invite Page',
    z = {
        REGISTER: 'register',
        LOGIN: 'login'
    };
async function V(e) {
    let { invite: t } = await u.Z.resolveInvite(e, F);
    null != t && (0, g.A)(t);
}
class W extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((A.default.track(D.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, b.e)('invite'), !B.KO)) {
            let e = this.getInviteKey();
            L.Z.launch('discord://' + D.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, I.fU)(e);
            (0, N.dL)(D.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            l = this.getInviteKey();
        if (l !== this.getInviteKey(e)) V(l);
        else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = C.default.getFingerprint();
            if (null != e) {
                let t = (0, s.s)(e);
                this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            u.Z.acceptInvite({
                inviteKey: l,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === D.kEZ.OPEN && this.track(D.rMx.INVITE_APP_INVOKED, !1), this.getMode() === z.REGISTER && i && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, v.c)(w.M5.INVITE_UNCLAIMED), null != t.guild ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(t, r));
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return k.a ? z.REGISTER : e.login ? z.LOGIN : z.REGISTER;
    }
    track(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { invite: i } = this.props,
            r = this.getInviteKey(),
            l = (0, I.jX)(r),
            a = t
                ? {
                      guild_id: null != i.guild ? i.guild.id : null,
                      channel_id: null != i.channel ? i.channel.id : null,
                      inviter_id: null != i.inviter ? i.inviter.id : null,
                      invite_code: l
                  }
                : { invite_code: l };
        A.default.track(e, {
            ...a,
            ...n
        });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(p.ZP, {
            children: [(0, i.jsx)(p.Dx, { children: e }), (0, i.jsx)(p.Hh, {})]
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Ee, {
                    src: n(167969),
                    className: U.marginBottom8
                }),
                (0, i.jsx)(p.Dx, {
                    className: a()(U.marginTop8, U.marginBottom8),
                    children: M.intl.string(M.t.kux01N)
                }),
                (0, i.jsx)(p.DK, { children: e ? M.intl.string(M.t['5AkWAQ']) : M.intl.string(M.t['+qUJAg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
                (0, i.jsx)(p.zx, {
                    onClick: () => window.open(j.Z.getArticleURL(D.BhN.INVALID_INVITES), '_blank'),
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    className: U.marginTop8,
                    children: M.intl.string(M.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(y.Z, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }),
                (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === D.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(M.intl.string(M.t.fIv16O)) : this.renderButton(M.intl.string(M.t.ohMvm5), this.handleAccept)
            ]
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
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Dx, {
                    className: U.marginBottom8,
                    children: M.intl.string(M.t.csrAMD)
                }),
                (0, i.jsx)(p.DK, { children: M.intl.string(M.t['m1+IBg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O), () => t())
            ]
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(f.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : null != e.guild_scheduled_event
              ? (0, i.jsx)(m.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(y.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, i.jsx)(p.ZP, {
                  className: U.marginTop20,
                  children: (0, i.jsx)(f.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count
                  })
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? M.intl.string(M.t['5UKyUl']) : M.intl.string(M.t.ohMvm5);
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)(p.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }),
                this.renderAuthenicatedFooter()
            ]
        });
    }
    renderContinue() {
        return (0, i.jsxs)(p.ZP, {
            children: [(0, i.jsx)(p.Dx, { children: M.intl.string(M.t.fOc4go) }), this.renderButton(M.intl.string(M.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: r, location: l } = this.props;
        if (t === D.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case D.r2o.APP_OPENED:
                return this.renderAppOpened();
            case D.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case D.r2o.RESOLVING:
                return k.a ? this.renderSpinner(M.intl.string(M.t.MKDeyM)) : this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case D.r2o.APP_OPENING:
                return this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case D.r2o.RESOLVED:
                var a;
                if (n && (0, Z.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, o.$.IS_GUEST_INVITE)) return u.Z.openApp(e.code), d.x.set(E.J, e.code), this.renderAppOpened(() => r(D.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(O.Z, {
                        invite: e,
                        transitionTo: r,
                        location: l
                    });
                else
                    return (0, i.jsx)(P.Z, {
                        invite: e,
                        onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                        location: l,
                        transitionTo: r
                    });
            case D.r2o.ACCEPTING:
                return this.renderSpinner(M.intl.string(M.t['6wsY19']));
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
            G(this, 'state', { error: null }),
            G(this, 'getAcceptInviteContext', (e) => u.Z.getInviteContext(e, this.props.invite)),
            G(this, 'handleContinue', (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var i;
                    (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(null != e ? e : t, n);
                }
            }),
            G(this, 'handleAccept', () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                u.Z.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(F),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, g.A)(t), null != t.channel && u.Z.openApp(e, t.channel.id);
                    }
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, R.O)(e.code);
                        this.setState({
                            error: {
                                code: e.code,
                                message: t
                            }
                        });
                    } else
                        this.setState({
                            error: {
                                code: e.code,
                                message: M.intl.string(M.t.dDZRd3)
                            }
                        });
                });
            }),
            G(this, 'handleDefaultTransition', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            G(this, 'renderButton', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: r } = t.props,
                    l = null != r.stage_instance || null != r.guild_scheduled_event;
                return B.KO
                    ? (0, i.jsx)(p.zx, {
                          className: l ? U.marginTop20 : U.marginTop40,
                          onClick: n,
                          color: l ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, i.jsx)(p.v6, { className: U.marginTop40 });
            });
    }
}
let K = c.ZP.connectStores([S.Z, T.Z, C.default, x.Z, _.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = S.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: C.default.isAuthenticated(),
        defaultRoute: T.Z.defaultRoute,
        isUnderage: _.Z.isUnderageAnonymous()
    };
})(W);
