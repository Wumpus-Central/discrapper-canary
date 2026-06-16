"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(258873),
    l = n(622242),
    u = n(731738),
    c = n(70298),
    d = n(821609),
    _ = n(825484),
    h = n(17928),
    f = n(148810),
    p = n(521502),
    E = n(380610),
    m = n(807393),
    g = n(976860),
    A = n(174459),
    I = n(38405),
    T = n(19575),
    S = n(721668),
    y = n(652215),
    C = n(375708),
    N = n(772620);
function v() {
    let [e, t] = r.useState(!1);
    if (null == (0, h.bG)([p.A], () => ((0, E.kK)() ? p.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    let n = async () => {
        try {
            t(!0), await (0, f.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, i.jsx)(d.$, {
        variant: "primary",
        size: "md",
        text: C.intl.string(C.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let R = a().throttle(
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
class O extends r.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, g.JK)().location;
        this.setState({ error: e, info: t });
        let i = (0, c.b)(),
            r = I.A.captureCrash(e, { extra: t });
        A.default.track(y.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            uses_client_mods: i,
            error_level: "fatal",
        }),
            R(i),
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
                n = (0, i.jsxs)(_.e, {
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "primary",
                            size: "md",
                            text: C.intl.string(C.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, i.jsx)(v, {}),
                    ],
                });
            return (0, i.jsx)(S.A, {
                title: C.intl.string(C.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: N.W,
            });
        }
        return e;
    }
}
let b = O;
