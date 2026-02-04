n.d(t, {
    A: () => Y,
}),
    n(938796),
    n(896048);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(821418),
    o = n(665260),
    c = n(80703),
    u = n(311907),
    d = n(362474),
    h = n(397927),
    p = n(73153),
    g = n(846293),
    f = n(198982),
    _ = n(17841),
    m = n(829691),
    A = n(854378),
    x = n(359438),
    E = n(383302),
    v = n(10088),
    y = n(921037),
    b = n(21599),
    j = n(942614),
    O = n(976860),
    I = n(210714),
    S = n(961350),
    N = n(650048),
    C = n(71393),
    T = n(299091),
    R = n(954571),
    w = n(975571),
    P = n(4274),
    k = n(877062),
    L = n(890698),
    D = n(129851),
    B = n(229),
    U = n(652215);
n(436317);
var G = n(172799),
    M = n(771016),
    F = n(396574),
    V = n(985018),
    W = n(473169);

function H(e, t, n) {
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
u.Ay.initialize();
let K = "register",
    z = "login";
async function Q(e) {
    let { invite: t } = await g.Ay.resolveInvite(e, U.S3d.INVITE);
    null != t && (0, m.v)(t);
}
class q extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props,
            r = S.default.getAnalyticsToken();
        if (
            (null != r &&
                p.h.dispatch({
                    type: "SET_ANALYTICS_TOKEN",
                    analyticsToken: r,
                    userId: S.default.getId(),
                }),
            R.default.track(
                U.HAw.INVITE_VIEWED,
                {
                    invite_code: n,
                },
                {
                    flush: !0,
                },
            ),
            (0, I.d)("invite"),
            !F.VP)
        ) {
            let e = this.getInviteKey();
            k.A.launch("discord://" + U.BVt.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, b.y$)(e);
            (0, O.bG)(U.BVt.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) Q(s);
        else if (t.state === U.elq.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z && r !== e.authenticated && r) {
            let e = S.default.getFingerprint();
            if (null != e) {
                let t = (0, c.d)(e);
                this.track(U.HAw.INVITE_LOGIN_SUCCESSFUL, {
                    prev_user_id: t,
                });
            }
            g.Ay.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(U.S3d.INVITE),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState &&
                n === U.fAW.OPEN &&
                this.track(U.HAw.INVITE_APP_INVOKED, {
                    user_is_member: null != t.guild && null != C.A.getGuild(t.guild.id),
                    size_total: t.approximate_member_count,
                    invite_type: null != t.type ? G.Xd[t.type] : void 0,
                }),
            this.getMode() === K && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, j.C)(M.zY.INVITE_UNCLAIMED), null != t.guild)) {
                    var l, u, d;
                    let e = (0, o.Lt)(null != (l = t.flags) ? l : 0, a.Q.IS_APPLICATION_BYPASS),
                        n =
                            (null == (u = t.guild.features)
                                ? void 0
                                : u.includes(U.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (d = t.guild.features)
                                ? void 0
                                : d.includes(U.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? U.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : U.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else g.Ay.transitionToInvite(t, i);
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? z : K;
    }
    track(e, t) {
        let { invite: n } = this.props,
            r = (0, b.m0)(this.getInviteKey());
        R.default.track(
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
                            H(e, t, n[t]);
                        });
                }
                return e;
            })(
                {
                    guild_id: null != n.guild ? n.guild.id : null,
                    channel_id: null != n.channel ? n.channel.id : null,
                    inviter_id: null != n.inviter ? n.inviter.id : null,
                    invite_code: r,
                },
                t,
            ),
        );
    }
    renderSpinner(e) {
        return (0, r.jsxs)(A.Ay, {
            children: [
                (0, r.jsx)(A.hE, {
                    children: e,
                }),
                (0, r.jsx)(A.CK, {}),
            ],
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, r.jsxs)(A.Ay, {
            children: [
                (0, r.jsx)(A._V, {
                    src: n(428721),
                    className: W.QB,
                }),
                (0, r.jsx)(A.hE, {
                    className: l()(W.Ot, W.QB),
                    children: V.intl.string(V.t.kux01N),
                }),
                (0, r.jsx)(A.tK, {
                    children: e ? V.intl.string(V.t["5AkWAd"]) : V.intl.string(V.t["+qUJAj"]),
                }),
                this.renderButton(V.intl.string(V.t.fIv16B)),
                (0, r.jsx)("div", {
                    className: W.Ot,
                    style: {
                        textAlign: "left",
                    },
                    children: (0, r.jsx)(h.QWc, {
                        size: "sm",
                        textVariant: "text-sm/medium",
                        text: V.intl.string(V.t.urIwn4),
                        onClick: () => window.open(w.A.getArticleURL(U.MVz.INVALID_INVITES), "_blank"),
                    }),
                }),
            ],
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, r.jsx)(A.Ay, {
            children: (0, r.jsxs)(h.BJc, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsx)(L.A, {
                        invite: this.props.invite,
                        error: null == (e = this.state.error) ? void 0 : e.message,
                    }),
                    (null == (t = this.state.error) ? void 0 : t.code) === U.t02.INVALID_CANNOT_FRIEND_SELF
                        ? this.renderButton(V.intl.string(V.t.fIv16B))
                        : this.renderButton(V.intl.string(V.t.ohMvm1), this.handleAccept),
                ],
            }),
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
        return (0, r.jsxs)(A.Ay, {
            children: [
                (0, r.jsx)(A.hE, {
                    className: W.QB,
                    children: V.intl.string(V.t.csrAMJ),
                }),
                (0, r.jsx)(A.tK, {
                    children: V.intl.string(V.t["m1+IBn"]),
                }),
                this.renderButton(V.intl.string(V.t.fIv16B), () => t()),
            ],
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event
            ? (0, r.jsx)(x.X, {
                  channel: e.channel,
                  guildScheduledEvent: e.guild_scheduled_event,
              })
            : (0, r.jsx)("div", {
                  className: W.S3,
                  children: (0, r.jsx)(L.A, {
                      invite: e,
                  }),
              });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(A.Ay, {
                  className: W.QX,
                  children: (0, r.jsx)(E.N, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count,
                  }),
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(A.Ay, {
                    children: [
                        this.renderAuthenticatedHeader(),
                        this.renderButton(V.intl.string(V.t.ohMvm1), this.handleAccept),
                    ],
                }),
                this.renderAuthenicatedFooter(),
            ],
        });
    }
    renderContinue() {
        return (0, r.jsxs)(A.Ay, {
            children: [
                (0, r.jsx)(A.hE, {
                    children: V.intl.string(V.t.fOc4gn),
                }),
                this.renderButton(V.intl.string(V.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === U.fAW.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case U.elq.APP_OPENED:
                return this.renderAppOpened();
            case U.elq.APP_NOT_OPENED:
                return this.renderContinue();
            case U.elq.RESOLVING:
            case U.elq.APP_OPENING:
                return this.renderSpinner(V.intl.string(V.t["Z+hCVU"]));
            case U.elq.RESOLVED:
                var l;
                if (n && (0, o.Lt)(null != (l = e.flags) ? l : 0, a.Q.IS_GUEST_INVITE))
                    return g.Ay.openApp(e.code), d.u.set(y.B, e.code), this.renderAppOpened(() => i(U.BVt.APP));
                if (n || !F.VP) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === z)
                    return (0, r.jsx)(D.A, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(B.A, {
                        invite: e,
                        onLoginStart: () => this.track(U.HAw.INVITE_LOGIN),
                        location: s,
                        transitionTo: i,
                    });
            case U.elq.ACCEPTING:
                return this.renderSpinner(V.intl.string(V.t["6wsY16"]));
            case U.elq.EXPIRED:
                return this.renderExpiredInvite();
            case U.elq.BANNED:
                return this.renderBannedInvite();
            case U.elq.ERROR:
                return this.renderErrorInvite();
            case U.elq.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            H(this, "state", {
                error: null,
            }),
            H(this, "getAcceptInviteContext", (e) => g.Ay.getInviteContext(e, this.props.invite)),
            H(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(U.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : g.Ay.transitionToInvite(null != e ? e : t, n);
                }
            }),
            H(this, "handleAccept", () => {
                this.setState({
                    error: null,
                });
                let e = this.getInviteKey();
                g.Ay.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(U.S3d.INVITE),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, m.v)(t), null != t.channel && g.Ay.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof f.Wl || e instanceof f.LG) {
                        let t = (0, P.s)(e.code);
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
                                message: V.intl.string(V.t.dDZRdy),
                            },
                        });
                });
            }),
            H(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            H(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.guild_scheduled_event;
                return F.VP
                    ? (0, r.jsx)("div", {
                          className: s ? W.QX : W.eT,
                          children: (0, r.jsx)(h.Button, {
                              text: e,
                              onClick: n,
                              variant: s ? "active" : "primary",
                              fullWidth: !0,
                          }),
                      })
                    : (0, r.jsx)(A.KE, {
                          className: W.eT,
                      });
            });
    }
}
let Y = u.Ay.connectStores([T.A, N.A, S.default, v.A, _.A], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = T.A.getInvite(n)) ? t : {},
        nativeAppState: v.A.getState(n),
        authenticated: S.default.isAuthenticated(),
        defaultRoute: N.A.defaultRoute,
        isUnderage: _.A.isUnderageAnonymous(),
    };
})(q);
