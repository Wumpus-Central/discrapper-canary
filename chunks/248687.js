n.d(t, { Z: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(818405),
    l = n(587158),
    c = n(286379),
    u = n(903772),
    d = n(442837),
    f = n(755721),
    _ = n(386506),
    p = n(304761),
    h = n(865427),
    m = n(797614),
    g = n(703656),
    E = n(626135),
    b = n(960048),
    y = n(998502),
    O = n(406128),
    v = n(981631),
    I = n(388032),
    T = n(365861);
function S(e, t, n) {
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
function A() {
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, d.e7)([p.C], () => {
            var e;
            return (0, h.fD)()
                ? null == (e = p.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, _.bF)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(f.zx, {
        size: f.Ph.LARGE,
        onClick: n,
        submitting: e,
        className: T.clearOverrideButton,
        children: I.intl.string(I.t["/Nz9rY"]),
    });
}
let C = o().throttle(
    (e) => {
        m.Z.increment(
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
            C(r),
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
                        (0, r.jsx)("p", { children: I.intl.string(I.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: I.intl.string(I.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)("div", {
                    className: T.buttons,
                    children: [
                        (0, r.jsx)(f.zx, {
                            size: f.Ph.LARGE,
                            onClick: this._handleSubmitReport,
                            children: I.intl.string(I.t["+hivLW"]),
                        }),
                        (0, r.jsx)(A, {}),
                    ],
                });
            return (0, r.jsx)(O.Z, {
                title: I.intl.string(I.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: T.errorPage,
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            S(this, "state", {
                error: null,
                info: null,
            }),
            S(this, "discordErrorsSet", !1);
    }
}
let R = N;
