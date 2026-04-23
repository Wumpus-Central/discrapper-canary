"use strict";
n.d(t, { A: () => D });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(258873),
    l = n(622242),
    d = n(731738),
    _ = n(70298),
    u = n(821609),
    c = n(825484),
    E = n(17928),
    h = n(148810),
    m = n(521502),
    f = n(380610),
    g = n(831062),
    p = n(976860),
    A = n(954571),
    I = n(38405),
    T = n(19575),
    S = n(721668),
    N = n(652215),
    C = n(985018),
    R = n(772620);
function O() {
    let [e, t] = r.useState(!1);
    if (null == (0, E.bG)([m.A], () => ((0, f.kK)() ? m.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    let n = async () => {
        try {
            t(!0), await (0, h.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, i.jsx)(u.$, {
        variant: "primary",
        size: "md",
        text: C.intl.string(C.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let y = a().throttle(
    (e) => {
        g.A.increment(
            {
                name: d.K.APP_CRASHED,
                tags: [`reason:${o.J.UNHANDLED_JS_ERROR}`, `level:${l.k.FATAL}`, `modded_client:${e}`],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class v extends r.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, p.JK)().location;
        this.setState({ error: e, info: t });
        let i = (0, _.b)(),
            r = I.A.captureCrash(e, { extra: t });
        A.default.track(N.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            uses_client_mods: i,
            error_level: "fatal",
        }),
            y(i),
            T.Ay.cleanupDisplaySleep();
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
            let e = (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("p", { children: C.intl.string(C.t.tx8CkI) }),
                        (0, i.jsx)("p", { children: C.intl.string(C.t.CvQlAH) }),
                    ],
                }),
                n = (0, i.jsxs)(c.e, {
                    children: [
                        (0, i.jsx)(u.$, {
                            variant: "primary",
                            size: "md",
                            text: C.intl.string(C.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, i.jsx)(O, {}),
                    ],
                });
            return (0, i.jsx)(S.A, {
                title: C.intl.string(C.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: R.W,
            });
        }
        return e;
    }
}
let D = v;
