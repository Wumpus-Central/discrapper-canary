"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
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
    g = n(976860),
    E = n(954571),
    A = n(728458),
    I = n(837921),
    T = n(721668),
    y = n(652215),
    S = n(985018),
    v = n(502167);
function C() {
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
        text: S.intl.string(S.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let b = s().throttle(
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
class N extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, g.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, c.b)(),
            i = A.A.captureCrash(e, { extra: t });
        E.default.track(y.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            b(r),
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
                        (0, r.jsx)("p", { children: S.intl.string(S.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: S.intl.string(S.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)(d.e2v, {
                    children: [
                        (0, r.jsx)(d.$nd, {
                            variant: "primary",
                            size: "md",
                            text: S.intl.string(S.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(C, {}),
                    ],
                });
            return (0, r.jsx)(T.A, {
                title: S.intl.string(S.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: v.W,
            });
        }
        return e;
    }
}
let R = N;
