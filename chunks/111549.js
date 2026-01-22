n.d(t, {
    A: () => z,
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
    f = n(846293),
    p = n(198982),
    g = n(17841),
    m = n(829691),
    A = n(854378),
    x = n(359438),
    _ = n(383302),
    E = n(10088),
    b = n(921037),
    v = n(21599),
    j = n(942614),
    y = n(976860),
    S = n(210714),
    N = n(961350),
    O = n(650048),
    I = n(299091),
    T = n(954571),
    C = n(975571),
    R = n(4274),
    w = n(877062),
    P = n(890698),
    L = n(129851),
    k = n(229),
    D = n(652215);
n(436317);
var B = n(771016),
    U = n(396574),
    G = n(985018),
    M = n(473169);

function F(e, t, n) {
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
let V = "Accept Invite Page",
    W = "register",
    H = "login";
async function K(e) {
    let { invite: t } = await f.Ay.resolveInvite(e, V);
    null != t && (0, m.v)(t);
}
class Q extends i.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if (
            (T.default.track(
                D.HAw.INVITE_VIEWED,
                {
                    invite_code: n,
                },
                {
                    flush: !0,
                },
            ),
            (0, S.d)("invite"),
            !U.VP)
        ) {
            let e = this.getInviteKey();
            w.A.launch("discord://" + D.BVt.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, v.y$)(e);
            (0, y.bG)(D.BVt.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) K(s);
        else if (t.state === D.elq.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === H && r !== e.authenticated && r) {
            let e = N.default.getFingerprint();
            if (null != e) {
                let t = (0, c.d)(e);
                this.track(D.HAw.INVITE_LOGIN_SUCCESSFUL, !0, {
                    prev_user_id: t,
                });
            }
            f.Ay.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(V),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === D.fAW.OPEN && this.track(D.HAw.INVITE_APP_INVOKED, !1),
            this.getMode() === W && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, j.C)(B.zY.INVITE_UNCLAIMED), null != t.guild)) {
                    var l, u, d;
                    let e = (0, o.Lt)(null != (l = t.flags) ? l : 0, a.Q.IS_APPLICATION_BYPASS),
                        n =
                            (null == (u = t.guild.features)
                                ? void 0
                                : u.includes(D.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (d = t.guild.features)
                                ? void 0
                                : d.includes(D.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? D.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : D.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
                    );
                } else f.Ay.transitionToInvite(t, i);
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? H : W;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, v.m0)(i),
            l = t
                ? {
                      guild_id: null != r.guild ? r.guild.id : null,
                      channel_id: null != r.channel ? r.channel.id : null,
                      inviter_id: null != r.inviter ? r.inviter.id : null,
                      invite_code: s,
                  }
                : {
                      invite_code: s,
                  };
        T.default.track(
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
                            F(e, t, n[t]);
                        });
                }
                return e;
            })({}, l, n),
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
                    className: M.QB,
                }),
                (0, r.jsx)(A.hE, {
                    className: l()(M.Ot, M.QB),
                    children: G.intl.string(G.t.kux01N),
                }),
                (0, r.jsx)(A.tK, {
                    children: e ? G.intl.string(G.t["5AkWAd"]) : G.intl.string(G.t["+qUJAj"]),
                }),
                this.renderButton(G.intl.string(G.t.fIv16B)),
                (0, r.jsx)("div", {
                    className: M.Ot,
                    style: {
                        textAlign: "left",
                    },
                    children: (0, r.jsx)(h.QWc, {
                        size: "sm",
                        textVariant: "text-sm/medium",
                        text: G.intl.string(G.t.urIwn4),
                        onClick: () => window.open(C.A.getArticleURL(D.MVz.INVALID_INVITES), "_blank"),
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
                    (0, r.jsx)(P.A, {
                        invite: this.props.invite,
                        error: null == (e = this.state.error) ? void 0 : e.message,
                    }),
                    (null == (t = this.state.error) ? void 0 : t.code) === D.t02.INVALID_CANNOT_FRIEND_SELF
                        ? this.renderButton(G.intl.string(G.t.fIv16B))
                        : this.renderButton(G.intl.string(G.t.ohMvm1), this.handleAccept),
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
                    className: M.QB,
                    children: G.intl.string(G.t.csrAMJ),
                }),
                (0, r.jsx)(A.tK, {
                    children: G.intl.string(G.t["m1+IBn"]),
                }),
                this.renderButton(G.intl.string(G.t.fIv16B), () => t()),
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
                  className: M.S3,
                  children: (0, r.jsx)(P.A, {
                      invite: e,
                  }),
              });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(A.Ay, {
                  className: M.QX,
                  children: (0, r.jsx)(_.N, {
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
                        this.renderButton(G.intl.string(G.t.ohMvm1), this.handleAccept),
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
                    children: G.intl.string(G.t.fOc4gn),
                }),
                this.renderButton(G.intl.string(G.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === D.fAW.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case D.elq.APP_OPENED:
                return this.renderAppOpened();
            case D.elq.APP_NOT_OPENED:
                return this.renderContinue();
            case D.elq.RESOLVING:
            case D.elq.APP_OPENING:
                return this.renderSpinner(G.intl.string(G.t["Z+hCVU"]));
            case D.elq.RESOLVED:
                var l;
                if (n && (0, o.Lt)(null != (l = e.flags) ? l : 0, a.Q.IS_GUEST_INVITE))
                    return f.Ay.openApp(e.code), d.u.set(b.B, e.code), this.renderAppOpened(() => i(D.BVt.APP));
                if (n || !U.VP) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === H)
                    return (0, r.jsx)(L.A, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(k.A, {
                        invite: e,
                        onLoginStart: () => this.track(D.HAw.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i,
                    });
            case D.elq.ACCEPTING:
                return this.renderSpinner(G.intl.string(G.t["6wsY16"]));
            case D.elq.EXPIRED:
                return this.renderExpiredInvite();
            case D.elq.BANNED:
                return this.renderBannedInvite();
            case D.elq.ERROR:
                return this.renderErrorInvite();
            case D.elq.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            F(this, "state", {
                error: null,
            }),
            F(this, "getAcceptInviteContext", (e) => f.Ay.getInviteContext(e, this.props.invite)),
            F(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(D.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : f.Ay.transitionToInvite(null != e ? e : t, n);
                }
            }),
            F(this, "handleAccept", () => {
                this.setState({
                    error: null,
                });
                let e = this.getInviteKey();
                f.Ay.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(V),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, m.v)(t), null != t.channel && f.Ay.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof p.Wl || e instanceof p.LG) {
                        let t = (0, R.s)(e.code);
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
                                message: G.intl.string(G.t.dDZRdy),
                            },
                        });
                });
            }),
            F(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            F(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.guild_scheduled_event;
                return U.VP
                    ? (0, r.jsx)("div", {
                          className: s ? M.QX : M.eT,
                          children: (0, r.jsx)(h.Button, {
                              text: e,
                              onClick: n,
                              variant: s ? "active" : "primary",
                              fullWidth: !0,
                          }),
                      })
                    : (0, r.jsx)(A.KE, {
                          className: M.eT,
                      });
            });
    }
}
let z = u.Ay.connectStores([I.A, O.A, N.default, E.A, g.A], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = I.A.getInvite(n)) ? t : {},
        nativeAppState: E.A.getState(n),
        authenticated: N.default.isAuthenticated(),
        defaultRoute: O.A.defaultRoute,
        isUnderage: g.A.isUnderageAnonymous(),
    };
})(Q);
