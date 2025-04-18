n.d(t, { Z: () => K }), n(997841), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(533800),
    a = n(756647),
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
    N = n(978684),
    b = n(264229),
    E = n(929809),
    v = n(703656),
    j = n(108427),
    I = n(314897),
    O = n(896797),
    S = n(701190),
    y = n(626135),
    C = n(630388),
    P = n(63063),
    A = n(782605),
    T = n(954824),
    Z = n(588705),
    R = n(781428),
    w = n(423527),
    L = n(981631),
    D = n(188785),
    k = n(701476),
    W = n(436620),
    M = n(388032),
    G = n(20493);
function B(e, t, n) {
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
    F = {
        REGISTER: 'register',
        LOGIN: 'login'
    };
async function z(e) {
    let { invite: t } = await d.ZP.resolveInvite(e, U);
    null != t && (0, p.A)(t);
}
class V extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((y.default.track(L.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, j.e)('invite'), !W.KO)) {
            let e = this.getInviteKey();
            T.Z.launch('discord://' + L.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, b.fU)(e);
            (0, v.dL)(L.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) z(s);
        else if (t.state === L.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === F.LOGIN && r !== e.authenticated && r) {
            let e = I.default.getFingerprint();
            if (null != e) {
                let t = (0, a.s)(e);
                this.track(L.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.ZP.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(U),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === L.kEZ.OPEN && this.track(L.rMx.INVITE_APP_INVOKED, !1), this.getMode() === F.REGISTER && r && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, E.c)(k.M5.INVITE_UNCLAIMED), null != t.guild ? i(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.ZP.transitionToInvite(t, i));
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return D.a ? F.REGISTER : e.login ? F.LOGIN : F.REGISTER;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, b.jX)(i),
            o = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: s
                  }
                : { invite_code: s };
        y.default.track(
            e,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            B(e, t, n[t]);
                        });
                }
                return e;
            })({}, o, n)
        );
    }
    renderSpinner(e) {
        return (0, r.jsxs)(m.ZP, {
            children: [(0, r.jsx)(m.Dx, { children: e }), (0, r.jsx)(m.Hh, {})]
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Ee, {
                    src: n(167969),
                    className: G.marginBottom8
                }),
                (0, r.jsx)(m.Dx, {
                    className: o()(G.marginTop8, G.marginBottom8),
                    children: M.NW.string(M.t.kux01N)
                }),
                (0, r.jsx)(m.DK, { children: e ? M.NW.string(M.t['5AkWAQ']) : M.NW.string(M.t['+qUJAg']) }),
                this.renderButton(M.NW.string(M.t.fIv16O)),
                (0, r.jsx)(m.zx, {
                    onClick: () => window.open(P.Z.getArticleURL(L.BhN.INVALID_INVITES), '_blank'),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    className: G.marginTop8,
                    children: M.NW.string(M.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(Z.Z, {
                    invite: this.props.invite,
                    error: null == (e = this.state.error) ? void 0 : e.message
                }),
                (null == (t = this.state.error) ? void 0 : t.code) === L.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(M.NW.string(M.t.fIv16O)) : this.renderButton(M.NW.string(M.t.ohMvm5), this.handleAccept)
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
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)(m.Dx, {
                    className: G.marginBottom8,
                    children: M.NW.string(M.t.csrAMD)
                }),
                (0, r.jsx)(m.DK, { children: M.NW.string(M.t['m1+IBg']) }),
                this.renderButton(M.NW.string(M.t.fIv16O), () => t())
            ]
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, r.jsx)(_.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : null != e.guild_scheduled_event
              ? (0, r.jsx)(f.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(Z.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, r.jsx)(m.ZP, {
                  className: G.marginTop20,
                  children: (0, r.jsx)(_.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count
                  })
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? M.NW.string(M.t['5UKyUl']) : M.NW.string(M.t.ohMvm5);
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(m.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }),
                this.renderAuthenicatedFooter()
            ]
        });
    }
    renderContinue() {
        return (0, r.jsxs)(m.ZP, {
            children: [(0, r.jsx)(m.Dx, { children: M.NW.string(M.t.fOc4go) }), this.renderButton(M.NW.string(M.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === L.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case L.r2o.APP_OPENED:
                return this.renderAppOpened();
            case L.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case L.r2o.RESOLVING:
                return D.a ? this.renderSpinner(M.NW.string(M.t.MKDeyM)) : this.renderSpinner(M.NW.string(M.t['Z+hCVV']));
            case L.r2o.APP_OPENING:
                return this.renderSpinner(M.NW.string(M.t['Z+hCVV']));
            case L.r2o.RESOLVED:
                var o;
                if (n && (0, C.yE)(null != (o = e.flags) ? o : 0, l.$.IS_GUEST_INVITE)) return d.ZP.openApp(e.code), u.x.set(N.J, e.code), this.renderAppOpened(() => i(L.Z5c.APP));
                if (n || !W.KO) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === F.LOGIN)
                    return (0, r.jsx)(R.Z, {
                        invite: e,
                        transitionTo: i,
                        location: s
                    });
                else
                    return (0, r.jsx)(w.Z, {
                        invite: e,
                        onLoginStart: () => this.track(L.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i
                    });
            case L.r2o.ACCEPTING:
                return this.renderSpinner(M.NW.string(M.t['6wsY19']));
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
            B(this, 'state', { error: null }),
            B(this, 'getAcceptInviteContext', (e) => d.ZP.getInviteContext(e, this.props.invite)),
            B(this, 'handleContinue', (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null ? n(L.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.ZP.transitionToInvite(null != e ? e : t, n);
                }
            }),
            B(this, 'handleAccept', () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                d.ZP.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(U),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && d.ZP.openApp(e, t.channel.id);
                    }
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, A.O)(e.code);
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
                                message: M.NW.string(M.t.dDZRd3)
                            }
                        });
                });
            }),
            B(this, 'handleDefaultTransition', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            B(this, 'renderButton', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.stage_instance || null != i.guild_scheduled_event;
                return W.KO
                    ? (0, r.jsx)(m.zx, {
                          className: s ? G.marginTop20 : G.marginTop40,
                          onClick: n,
                          color: s ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, r.jsx)(m.v6, { className: G.marginTop40 });
            });
    }
}
let K = c.ZP.connectStores([S.Z, O.Z, I.default, x.Z, g.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = S.Z.getInvite(n)) ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: I.default.isAuthenticated(),
        defaultRoute: O.Z.defaultRoute,
        isUnderage: g.Z.isUnderageAnonymous()
    };
})(V);
