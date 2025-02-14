n.d(t, { Z: () => H }), n(789020), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(533800),
    o = n(756647),
    c = n(442837),
    d = n(298444),
    u = n(447543),
    h = n(881052),
    _ = n(899370),
    m = n(267394),
    g = n(388905),
    p = n(639946),
    f = n(792766),
    x = n(362762),
    E = n(978684),
    I = n(264229),
    v = n(929809),
    C = n(703656),
    N = n(108427),
    b = n(314897),
    S = n(896797),
    T = n(701190),
    A = n(626135),
    R = n(630388),
    Z = n(63063),
    j = n(782605),
    O = n(954824),
    L = n(588705),
    y = n(781428),
    P = n(423527),
    k = n(981631),
    D = n(188785),
    w = n(701476),
    B = n(436620),
    M = n(388032),
    U = n(483938);
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
let G = 'Accept Invite Page',
    z = {
        REGISTER: 'register',
        LOGIN: 'login'
    };
async function V(e) {
    let { invite: t } = await u.Z.resolveInvite(e, G);
    null != t && (0, m.A)(t);
}
class K extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((A.default.track(k.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, N.e)('invite'), !B.KO)) {
            let e = this.getInviteKey();
            O.Z.launch('discord://' + k.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, I.fU)(e);
            (0, C.dL)(k.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            a = this.getInviteKey();
        if (a !== this.getInviteKey(e)) V(a);
        else if (t.state === k.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = b.default.getFingerprint();
            if (null != e) {
                let t = (0, o.s)(e);
                this.track(k.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            u.Z.acceptInvite({
                inviteKey: a,
                context: this.getAcceptInviteContext(G),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === k.kEZ.OPEN && this.track(k.rMx.INVITE_APP_INVOKED, !1), this.getMode() === z.REGISTER && i && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, v.c)(w.M5.INVITE_UNCLAIMED), null != t.guild ? r(k.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(t, r));
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
    track(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { invite: i } = this.props,
            r = this.getInviteKey(),
            a = (0, I.jX)(r),
            l = t
                ? {
                      guild_id: null != i.guild ? i.guild.id : null,
                      channel_id: null != i.channel ? i.channel.id : null,
                      inviter_id: null != i.inviter ? i.inviter.id : null,
                      invite_code: a
                  }
                : { invite_code: a };
        A.default.track(e, {
            ...l,
            ...n
        });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(g.ZP, {
            children: [(0, i.jsx)(g.Dx, { children: e }), (0, i.jsx)(g.Hh, {})]
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, {
                    src: n(167969),
                    className: U.marginBottom8
                }),
                (0, i.jsx)(g.Dx, {
                    className: l()(U.marginTop8, U.marginBottom8),
                    children: M.intl.string(M.t.kux01N)
                }),
                (0, i.jsx)(g.DK, { children: e ? M.intl.string(M.t['5AkWAQ']) : M.intl.string(M.t['+qUJAg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
                (0, i.jsx)(g.zx, {
                    onClick: () => window.open(Z.Z.getArticleURL(k.BhN.INVALID_INVITES), '_blank'),
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    className: U.marginTop8,
                    children: M.intl.string(M.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(L.Z, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }),
                (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === k.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(M.intl.string(M.t.fIv16O)) : this.renderButton(M.intl.string(M.t.ohMvm5), this.handleAccept)
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
        return (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Dx, {
                    className: U.marginBottom8,
                    children: M.intl.string(M.t.csrAMD)
                }),
                (0, i.jsx)(g.DK, { children: M.intl.string(M.t['m1+IBg']) }),
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
              ? (0, i.jsx)(p.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(L.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, i.jsx)(g.ZP, {
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
                (0, i.jsxs)(g.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }),
                this.renderAuthenicatedFooter()
            ]
        });
    }
    renderContinue() {
        return (0, i.jsxs)(g.ZP, {
            children: [(0, i.jsx)(g.Dx, { children: M.intl.string(M.t.fOc4go) }), this.renderButton(M.intl.string(M.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: r, location: a } = this.props;
        if (t === k.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case k.r2o.APP_OPENED:
                return this.renderAppOpened();
            case k.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case k.r2o.RESOLVING:
                return D.a ? this.renderSpinner(M.intl.string(M.t.MKDeyM)) : this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case k.r2o.APP_OPENING:
                return this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case k.r2o.RESOLVED:
                var l;
                if (n && (0, R.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, s.$.IS_GUEST_INVITE)) return u.Z.openApp(e.code), d.x.set(E.J, e.code), this.renderAppOpened(() => r(k.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(y.Z, {
                        invite: e,
                        transitionTo: r,
                        location: a
                    });
                else
                    return (0, i.jsx)(P.Z, {
                        invite: e,
                        onLoginStart: () => this.track(k.rMx.INVITE_LOGIN, !0),
                        location: a,
                        transitionTo: r
                    });
            case k.r2o.ACCEPTING:
                return this.renderSpinner(M.intl.string(M.t['6wsY19']));
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
            F(this, 'state', { error: null }),
            F(this, 'getAcceptInviteContext', (e) => u.Z.getInviteContext(e, this.props.invite)),
            F(this, 'handleContinue', (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var i;
                    (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null ? n(k.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : u.Z.transitionToInvite(null != e ? e : t, n);
                }
            }),
            F(this, 'handleAccept', () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                u.Z.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(G),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, m.A)(t), null != t.channel && u.Z.openApp(e, t.channel.id);
                    }
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, j.O)(e.code);
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
                    a = null != r.stage_instance || null != r.guild_scheduled_event;
                return B.KO
                    ? (0, i.jsx)(g.zx, {
                          className: a ? U.marginTop20 : U.marginTop40,
                          onClick: n,
                          color: a ? g.zx.Colors.GREEN : g.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, i.jsx)(g.v6, { className: U.marginTop40 });
            });
    }
}
let H = c.ZP.connectStores([T.Z, S.Z, b.default, x.Z, _.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = T.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: b.default.isAuthenticated(),
        defaultRoute: S.Z.defaultRoute,
        isUnderage: _.Z.isUnderageAnonymous()
    };
})(K);
