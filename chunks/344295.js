n(789020), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(533800),
    a = n(756647),
    c = n(442837),
    d = n(298444),
    u = n(447543),
    h = n(881052),
    g = n(899370),
    m = n(267394),
    f = n(388905),
    p = n(639946),
    x = n(792766),
    _ = n(362762),
    E = n(978684),
    I = n(264229),
    N = n(929809),
    v = n(703656),
    C = n(108427),
    b = n(314897),
    Z = n(896797),
    j = n(701190),
    T = n(626135),
    S = n(630388),
    A = n(63063),
    R = n(782605),
    P = n(954824),
    L = n(588705),
    y = n(781428),
    O = n(423527),
    D = n(981631),
    k = n(188785),
    w = n(701476),
    B = n(436620),
    M = n(388032),
    G = n(232186);
function F(e, t, n) {
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
let U = 'Accept Invite Page',
    z = {
        REGISTER: 'register',
        LOGIN: 'login'
    };
async function V(e) {
    let { invite: t } = await u.Z.resolveInvite(e, U);
    if (null != t) (0, m.A)(t);
}
class K extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((T.default.track(D.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, C.e)('invite'), !B.KO)) {
            let e = this.getInviteKey();
            P.Z.launch('discord://' + D.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, I.fU)(e);
            (0, v.dL)(D.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) V(s);
        else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = b.default.getFingerprint();
            if (null != e) {
                let t = (0, a.s)(e);
                this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            u.Z.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(U),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === D.kEZ.OPEN && this.track(D.rMx.INVITE_APP_INVOKED, !1), this.getMode() === z.REGISTER && i && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, N.c)(w.M5.INVITE_UNCLAIMED), null != t.guild ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(t, r));
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
            s = (0, I.jX)(r),
            l = t
                ? {
                      guild_id: null != i.guild ? i.guild.id : null,
                      channel_id: null != i.channel ? i.channel.id : null,
                      inviter_id: null != i.inviter ? i.inviter.id : null,
                      invite_code: s
                  }
                : { invite_code: s };
        T.default.track(e, {
            ...l,
            ...n
        });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(f.ZP, {
            children: [(0, i.jsx)(f.Dx, { children: e }), (0, i.jsx)(f.Hh, {})]
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(f.Ee, {
                    src: n(167969),
                    className: G.marginBottom8
                }),
                (0, i.jsx)(f.Dx, {
                    className: l()(G.marginTop8, G.marginBottom8),
                    children: M.intl.string(M.t.kux01N)
                }),
                (0, i.jsx)(f.DK, { children: e ? M.intl.string(M.t['5AkWAQ']) : M.intl.string(M.t['+qUJAg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
                (0, i.jsx)(f.zx, {
                    onClick: () => window.open(A.Z.getArticleURL(D.BhN.INVALID_INVITES), '_blank'),
                    look: f.zx.Looks.LINK,
                    color: f.zx.Colors.LINK,
                    className: G.marginTop8,
                    children: M.intl.string(M.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(L.Z, {
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
        return (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(f.Dx, {
                    className: G.marginBottom8,
                    children: M.intl.string(M.t.csrAMD)
                }),
                (0, i.jsx)(f.DK, { children: M.intl.string(M.t['m1+IBg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O), () => t())
            ]
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(x.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : null != e.guild_scheduled_event
              ? (0, i.jsx)(p.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(L.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, i.jsx)(f.ZP, {
                  className: G.marginTop20,
                  children: (0, i.jsx)(x.y, {
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
                (0, i.jsxs)(f.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }),
                this.renderAuthenicatedFooter()
            ]
        });
    }
    renderContinue() {
        return (0, i.jsxs)(f.ZP, {
            children: [(0, i.jsx)(f.Dx, { children: M.intl.string(M.t.fOc4go) }), this.renderButton(M.intl.string(M.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
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
                var l;
                if (n && (0, S.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, o.$.IS_GUEST_INVITE)) return u.Z.openApp(e.code), d.x.set(E.J, e.code), this.renderAppOpened(() => r(D.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                else if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(y.Z, {
                        invite: e,
                        transitionTo: r,
                        location: s
                    });
                else
                    return (0, i.jsx)(O.Z, {
                        invite: e,
                        onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                        location: s,
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
            F(this, 'state', { error: null }),
            F(this, 'getAcceptInviteContext', (e) => u.Z.getInviteContext(e, this.props.invite)),
            F(this, 'handleContinue', (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var i;
                    (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(null != e ? e : t, n);
                }
            }),
            F(this, 'handleAccept', () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                u.Z.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(U),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, m.A)(t), null != t.channel && u.Z.openApp(e, t.channel.id);
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
            F(this, 'handleDefaultTransition', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            F(this, 'renderButton', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: r } = t.props,
                    s = null != r.stage_instance || null != r.guild_scheduled_event;
                return B.KO
                    ? (0, i.jsx)(f.zx, {
                          className: s ? G.marginTop20 : G.marginTop40,
                          onClick: n,
                          color: s ? f.zx.Colors.GREEN : f.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, i.jsx)(f.v6, { className: G.marginTop40 });
            });
    }
}
t.Z = c.ZP.connectStores([j.Z, Z.Z, b.default, _.Z, g.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = j.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: _.Z.getState(n),
        authenticated: b.default.isAuthenticated(),
        defaultRoute: Z.Z.defaultRoute,
        isUnderage: g.Z.isUnderageAnonymous()
    };
})(K);
