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
    E = n(362762),
    I = n(978684),
    x = n(264229),
    C = n(929809),
    N = n(703656),
    v = n(108427),
    T = n(314897),
    S = n(896797),
    A = n(701190),
    b = n(626135),
    Z = n(630388),
    R = n(63063),
    L = n(782605),
    j = n(954824),
    O = n(588705),
    P = n(781428),
    y = n(423527),
    D = n(981631),
    k = n(188785),
    U = n(701476),
    w = n(436620),
    B = n(388032),
    M = n(232186);
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
async function H(e) {
    let { invite: t } = await u.Z.resolveInvite(e, F);
    null != t && (0, g.A)(t);
}
class V extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((b.default.track(D.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, v.e)('invite'), !w.KO)) {
            let e = this.getInviteKey();
            j.Z.launch('discord://' + D.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, x.fU)(e);
            (0, N.dL)(D.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            l = this.getInviteKey();
        if (l !== this.getInviteKey(e)) H(l);
        else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = T.default.getFingerprint();
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
            null != e && ((0, C.c)(U.M5.INVITE_UNCLAIMED), null != t.guild ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(t, r));
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
            l = (0, x.jX)(r),
            a = t
                ? {
                      guild_id: null != i.guild ? i.guild.id : null,
                      channel_id: null != i.channel ? i.channel.id : null,
                      inviter_id: null != i.inviter ? i.inviter.id : null,
                      invite_code: l
                  }
                : { invite_code: l };
        b.default.track(e, {
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
                    className: M.marginBottom8
                }),
                (0, i.jsx)(p.Dx, {
                    className: a()(M.marginTop8, M.marginBottom8),
                    children: B.intl.string(B.t.kux01N)
                }),
                (0, i.jsx)(p.DK, { children: e ? B.intl.string(B.t['5AkWAQ']) : B.intl.string(B.t['+qUJAg']) }),
                this.renderButton(B.intl.string(B.t.fIv16O)),
                (0, i.jsx)(p.zx, {
                    onClick: () => window.open(R.Z.getArticleURL(D.BhN.INVALID_INVITES), '_blank'),
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    className: M.marginTop8,
                    children: B.intl.string(B.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(O.Z, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }),
                (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === D.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(B.intl.string(B.t.fIv16O)) : this.renderButton(B.intl.string(B.t.ohMvm5), this.handleAccept)
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
                    className: M.marginBottom8,
                    children: B.intl.string(B.t.csrAMD)
                }),
                (0, i.jsx)(p.DK, { children: B.intl.string(B.t['m1+IBg']) }),
                this.renderButton(B.intl.string(B.t.fIv16O), () => t())
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
              : (0, i.jsx)(O.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, i.jsx)(p.ZP, {
                  className: M.marginTop20,
                  children: (0, i.jsx)(f.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count
                  })
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? B.intl.string(B.t['5UKyUl']) : B.intl.string(B.t.ohMvm5);
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
            children: [(0, i.jsx)(p.Dx, { children: B.intl.string(B.t.fOc4go) }), this.renderButton(B.intl.string(B.t.fIv16O))]
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
                return k.a ? this.renderSpinner(B.intl.string(B.t.MKDeyM)) : this.renderSpinner(B.intl.string(B.t['Z+hCVV']));
            case D.r2o.APP_OPENING:
                return this.renderSpinner(B.intl.string(B.t['Z+hCVV']));
            case D.r2o.RESOLVED:
                var a;
                if (n && (0, Z.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, o.$.IS_GUEST_INVITE)) return u.Z.openApp(e.code), d.x.set(I.J, e.code), this.renderAppOpened(() => r(D.Z5c.APP));
                if (n || !w.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(P.Z, {
                        invite: e,
                        transitionTo: r,
                        location: l
                    });
                else
                    return (0, i.jsx)(y.Z, {
                        invite: e,
                        onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                        location: l,
                        transitionTo: r
                    });
            case D.r2o.ACCEPTING:
                return this.renderSpinner(B.intl.string(B.t['6wsY19']));
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
                        let t = (0, L.O)(e.code);
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
                                message: B.intl.string(B.t.dDZRd3)
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
                return w.KO
                    ? (0, i.jsx)(p.zx, {
                          className: l ? M.marginTop20 : M.marginTop40,
                          onClick: n,
                          color: l ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, i.jsx)(p.v6, { className: M.marginTop40 });
            });
    }
}
let K = c.ZP.connectStores([A.Z, S.Z, T.default, E.Z, _.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = A.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: E.Z.getState(n),
        authenticated: T.default.isAuthenticated(),
        defaultRoute: S.Z.defaultRoute,
        isUnderage: _.Z.isUnderageAnonymous()
    };
})(V);
