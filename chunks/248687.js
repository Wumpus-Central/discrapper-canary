n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(818405),
    l = n(587158),
    c = n(286379),
    u = n(903772),
    d = n(793030),
    f = n(442837),
    p = n(386506),
    _ = n(304761),
    m = n(865427),
    h = n(797614),
    g = n(703656),
    E = n(626135),
    b = n(960048),
    y = n(998502),
    O = n(406128),
    v = n(981631),
    S = n(388032),
    I = n(365861);
function T(e, t, n) {
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
function C() {
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, f.e7)([_.C], () => {
            var e;
            return (0, m.fD)()
                ? null == (e = _.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, p.bF)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(d.zxk, {
        variant: "primary",
        size: "md",
        text: S.intl.string(S.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let A = o().throttle(
    (e) => {
        h.Z.increment(
            {
                name: c.V.APP_CRASHED,
                tags: [
                    "reason:".concat(s.v.UNHANDLED_JS_ERROR),
                    "level:".concat(l.c.FATAL),
                    "modded_client:".concat(e),
                ],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class N extends i.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = (0, u.e)(),
            i = b.Z.captureCrash(e, { extra: t });
        E.default.track(v.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            A(r),
            y.ZP.cleanupDisplaySleep();
    }
    _handleSubmitReport() {
        location.reload(!0);
    }
    componentDidMount() {
        null == window.DiscordErrors &&
            ((window.DiscordErrors = {
                softCrash: (e) => {
                    this.triggerSoftCrash(e);
                },
            }),
            (this.discordErrorsSet = !0));
    }
    componentWillUnmount() {
        this.discordErrorsSet && ((window.DiscordErrors = null), (this.discordErrorsSet = !1));
    }
    render() {
        let { children: e, renderCustomMessage: t } = this.props;
        if (null !== this.state.error) {
            let e = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("p", { children: S.intl.string(S.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: S.intl.string(S.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)(d.hE2, {
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: "primary",
                            size: "md",
                            text: S.intl.string(S.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(C, {}),
                    ],
                });
            return (0, r.jsx)(O.Z, {
                title: S.intl.string(S.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: I.errorPage,
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            T(this, "state", {
                error: null,
                info: null,
            }),
            T(this, "discordErrorsSet", !1);
    }
}
let P = N;
