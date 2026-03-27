"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(258873),
    l = n(622242),
    u = n(731738),
    c = n(70298),
    d = n(158954),
    _ = n(311907),
    f = n(148810),
    p = n(521502),
    h = n(380610),
    m = n(831062),
    E = n(976860),
    g = n(954571),
    A = n(728458),
    I = n(837921),
    T = n(721668),
    S = n(652215),
    y = n(985018),
    v = n(90321);
function N() {
    let [e, t] = i.useState(!1);
    if (null == (0, _.bG)([p.A], () => ((0, h.kK)() ? p.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    let n = async () => {
        try {
            t(!0), await (0, f.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(d.$nd, {
        variant: "primary",
        size: "md",
        text: y.intl.string(y.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let C = a().throttle(
    (e) => {
        m.A.increment(
            {
                name: u.K.APP_CRASHED,
                tags: [`reason:${o.J.UNHANDLED_JS_ERROR}`, `level:${l.k.FATAL}`, `modded_client:${e}`],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class R extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, E.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, c.b)(),
            i = A.A.captureCrash(e, { extra: t });
        g.default.track(S.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            C(r),
            I.Ay.cleanupDisplaySleep();
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
                        (0, r.jsx)("p", { children: y.intl.string(y.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: y.intl.string(y.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)(d.e2v, {
                    children: [
                        (0, r.jsx)(d.$nd, {
                            variant: "primary",
                            size: "md",
                            text: y.intl.string(y.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(N, {}),
                    ],
                });
            return (0, r.jsx)(T.A, {
                title: y.intl.string(y.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: v.W,
            });
        }
        return e;
    }
}
let O = R;
