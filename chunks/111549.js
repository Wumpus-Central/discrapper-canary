n.d(t, {
    A: () => Q,
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
    C = n(299091),
    T = n(954571),
    R = n(975571),
    w = n(4274),
    P = n(877062),
    k = n(890698),
    L = n(129851),
    D = n(229),
    B = n(652215);
n(436317);
var U = n(771016),
    G = n(396574),
    M = n(985018),
    F = n(473169);

function V(e, t, n) {
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
let W = "register",
    H = "login";
async function K(e) {
    let { invite: t } = await g.Ay.resolveInvite(e, B.S3d.INVITE);
    null != t && (0, m.v)(t);
}
class z extends i.PureComponent {
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
            T.default.track(
                B.HAw.INVITE_VIEWED,
                {
                    invite_code: n,
                },
                {
                    flush: !0,
                },
            ),
            (0, I.d)("invite"),
            !G.VP)
        ) {
            let e = this.getInviteKey();
            P.A.launch("discord://" + B.BVt.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, b.y$)(e);
            (0, O.bG)(B.BVt.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: r, transitionTo: i } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) K(s);
        else if (t.state === B.elq.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === H && r !== e.authenticated && r) {
            let e = S.default.getFingerprint();
            if (null != e) {
                let t = (0, c.d)(e);
                this.track(B.HAw.INVITE_LOGIN_SUCCESSFUL, !0, {
                    prev_user_id: t,
                });
            }
            g.Ay.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(B.S3d.INVITE),
                skipOnboarding: !0,
                callback: this.handleContinue,
            });
        }
        if (
            (n !== e.nativeAppState && n === B.fAW.OPEN && this.track(B.HAw.INVITE_APP_INVOKED, !1),
            this.getMode() === W && r && !e.authenticated)
        ) {
            let { channel: e } = t;
            if (null != e)
                if (((0, j.C)(U.zY.INVITE_UNCLAIMED), null != t.guild)) {
                    var l, u, d;
                    let e = (0, o.Lt)(null != (l = t.flags) ? l : 0, a.Q.IS_APPLICATION_BYPASS),
                        n =
                            (null == (u = t.guild.features)
                                ? void 0
                                : u.includes(B.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                            (null == (d = t.guild.features)
                                ? void 0
                                : d.includes(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL));
                    i(
                        !e && n
                            ? B.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id)
                            : B.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code),
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
        return e.login ? H : W;
    }
    track(e, t, n) {
        let { invite: r } = this.props,
            i = this.getInviteKey(),
            s = (0, b.m0)(i),
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
                            V(e, t, n[t]);
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
                    className: F.QB,
                }),
                (0, r.jsx)(A.hE, {
                    className: l()(F.Ot, F.QB),
                    children: M.intl.string(M.t.kux01N),
                }),
                (0, r.jsx)(A.tK, {
                    children: e ? M.intl.string(M.t["5AkWAd"]) : M.intl.string(M.t["+qUJAj"]),
                }),
                this.renderButton(M.intl.string(M.t.fIv16B)),
                (0, r.jsx)("div", {
                    className: F.Ot,
                    style: {
                        textAlign: "left",
                    },
                    children: (0, r.jsx)(h.QWc, {
                        size: "sm",
                        textVariant: "text-sm/medium",
                        text: M.intl.string(M.t.urIwn4),
                        onClick: () => window.open(R.A.getArticleURL(B.MVz.INVALID_INVITES), "_blank"),
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
                    (0, r.jsx)(k.A, {
                        invite: this.props.invite,
                        error: null == (e = this.state.error) ? void 0 : e.message,
                    }),
                    (null == (t = this.state.error) ? void 0 : t.code) === B.t02.INVALID_CANNOT_FRIEND_SELF
                        ? this.renderButton(M.intl.string(M.t.fIv16B))
                        : this.renderButton(M.intl.string(M.t.ohMvm1), this.handleAccept),
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
                    className: F.QB,
                    children: M.intl.string(M.t.csrAMJ),
                }),
                (0, r.jsx)(A.tK, {
                    children: M.intl.string(M.t["m1+IBn"]),
                }),
                this.renderButton(M.intl.string(M.t.fIv16B), () => t()),
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
                  className: F.S3,
                  children: (0, r.jsx)(k.A, {
                      invite: e,
                  }),
              });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return null != e.guild_scheduled_event && null != e.guild
            ? (0, r.jsx)(A.Ay, {
                  className: F.QX,
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
                        this.renderButton(M.intl.string(M.t.ohMvm1), this.handleAccept),
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
                    children: M.intl.string(M.t.fOc4gn),
                }),
                this.renderButton(M.intl.string(M.t.fIv16B)),
            ],
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: i, location: s } = this.props;
        if (t === B.fAW.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case B.elq.APP_OPENED:
                return this.renderAppOpened();
            case B.elq.APP_NOT_OPENED:
                return this.renderContinue();
            case B.elq.RESOLVING:
            case B.elq.APP_OPENING:
                return this.renderSpinner(M.intl.string(M.t["Z+hCVU"]));
            case B.elq.RESOLVED:
                var l;
                if (n && (0, o.Lt)(null != (l = e.flags) ? l : 0, a.Q.IS_GUEST_INVITE))
                    return g.Ay.openApp(e.code), d.u.set(y.B, e.code), this.renderAppOpened(() => i(B.BVt.APP));
                if (n || !G.VP) return this.renderAuthenticatedOrDownload();
                if (this.getMode() === H)
                    return (0, r.jsx)(L.A, {
                        invite: e,
                        transitionTo: i,
                        location: s,
                    });
                else
                    return (0, r.jsx)(D.A, {
                        invite: e,
                        onLoginStart: () => this.track(B.HAw.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: i,
                    });
            case B.elq.ACCEPTING:
                return this.renderSpinner(M.intl.string(M.t["6wsY16"]));
            case B.elq.EXPIRED:
                return this.renderExpiredInvite();
            case B.elq.BANNED:
                return this.renderBannedInvite();
            case B.elq.ERROR:
                return this.renderErrorInvite();
            case B.elq.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            V(this, "state", {
                error: null,
            }),
            V(this, "getAcceptInviteContext", (e) => g.Ay.getInviteContext(e, this.props.invite)),
            V(this, "handleContinue", (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var r;
                    (null == (r = t.guild) ? void 0 : r.id) != null
                        ? n(B.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code))
                        : g.Ay.transitionToInvite(null != e ? e : t, n);
                }
            }),
            V(this, "handleAccept", () => {
                this.setState({
                    error: null,
                });
                let e = this.getInviteKey();
                g.Ay.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(B.S3d.INVITE),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, m.v)(t), null != t.channel && g.Ay.openApp(e, t.channel.id);
                    },
                }).catch((e) => {
                    if (e instanceof f.Wl || e instanceof f.LG) {
                        let t = (0, w.s)(e.code);
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
                                message: M.intl.string(M.t.dDZRdy),
                            },
                        });
                });
            }),
            V(this, "handleDefaultTransition", () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            V(this, "renderButton", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: i } = t.props,
                    s = null != i.guild_scheduled_event;
                return G.VP
                    ? (0, r.jsx)("div", {
                          className: s ? F.QX : F.eT,
                          children: (0, r.jsx)(h.Button, {
                              text: e,
                              onClick: n,
                              variant: s ? "active" : "primary",
                              fullWidth: !0,
                          }),
                      })
                    : (0, r.jsx)(A.KE, {
                          className: F.eT,
                      });
            });
    }
}
let Q = u.Ay.connectStores([C.A, N.A, S.default, v.A, _.A], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null != (t = C.A.getInvite(n)) ? t : {},
        nativeAppState: v.A.getState(n),
        authenticated: S.default.isAuthenticated(),
        defaultRoute: N.A.defaultRoute,
        isUnderage: _.A.isUnderageAnonymous(),
    };
})(z);
