"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(258873),
    l = n(622242),
    u = n(731738),
    d = n(70298),
    c = n(821609),
    _ = n(825484),
    f = n(311907),
    E = n(148810),
    h = n(521502),
    p = n(380610),
    m = n(831062),
    g = n(976860),
    A = n(954571),
    I = n(728458),
    T = n(837921),
    S = n(721668),
    y = n(652215),
    N = n(985018),
    O = n(772620);
function R() {
    let [e, t] = i.useState(!1);
    if (null == (0, f.bG)([h.A], () => ((0, p.kK)() ? h.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    let n = async () => {
        try {
            t(!0), await (0, E.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    };
    return (0, r.jsx)(c.$, {
        variant: "primary",
        size: "md",
        text: N.intl.string(N.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let v = a().throttle(
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
class C extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, g.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, d.b)(),
            i = I.A.captureCrash(e, { extra: t });
        A.default.track(y.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            v(r),
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
            let e = (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("p", { children: N.intl.string(N.t.tx8CkI) }),
                        (0, r.jsx)("p", { children: N.intl.string(N.t.CvQlAH) }),
                    ],
                }),
                n = (0, r.jsxs)(_.e, {
                    children: [
                        (0, r.jsx)(c.$, {
                            variant: "primary",
                            size: "md",
                            text: N.intl.string(N.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(R, {}),
                    ],
                });
            return (0, r.jsx)(S.A, {
                title: N.intl.string(N.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: O.W,
            });
        }
        return e;
    }
}
let b = C;
