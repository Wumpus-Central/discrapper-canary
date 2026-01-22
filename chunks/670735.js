n.d(t, { A: () => R }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(258873),
    l = n(622242),
    c = n(731738),
    u = n(70298),
    d = n(158954),
    f = n(311907),
    p = n(148810),
    _ = n(521502),
    h = n(380610),
    m = n(831062),
    g = n(976860),
    E = n(954571),
    b = n(728458),
    y = n(837921),
    O = n(721668),
    A = n(652215),
    v = n(985018),
    S = n(502167);
function I(e, t, n) {
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
function T() {
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, f.bG)([_.A], () => {
            var e;
            return (0, h.kK)()
                ? null == (e = _.A.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        })
    )
        return null;
    let n = async () => {
        try {
            t(!0), await (0, p.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(d.$nd, {
        variant: "primary",
        size: "md",
        text: v.intl.string(v.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let C = s().throttle(
    (e) => {
        m.A.increment(
            {
                name: c.K.APP_CRASHED,
                tags: [
                    "reason:".concat(o.J.UNHANDLED_JS_ERROR),
                    "level:".concat(l.k.FATAL),
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
        let n = (0, g.JK)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = (0, u.b)(),
            i = b.A.captureCrash(e, { extra: t });
        E.default.track(A.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            C(r),
            y.Ay.cleanupDisplaySleep();
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
                        (0, r.jsx)("p", { children: v.intl.string(v.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: v.intl.string(v.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)(d.e2v, {
                    children: [
                        (0, r.jsx)(d.$nd, {
                            variant: "primary",
                            size: "md",
                            text: v.intl.string(v.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(T, {}),
                    ],
                });
            return (0, r.jsx)(O.A, {
                title: v.intl.string(v.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: S.W,
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            I(this, "state", {
                error: null,
                info: null,
            }),
            I(this, "discordErrorsSet", !1);
    }
}
let R = N;
