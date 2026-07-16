n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(435558),
    o = n.n(s),
    l = n(258873),
    a = n(622242),
    c = n(731738),
    u = n(70298),
    d = n(821609),
    h = n(825484),
    f = n(17928),
    p = n(148810),
    m = n(521502),
    g = n(380610),
    A = n(807393),
    y = n(976860),
    v = n(174459),
    x = n(38405),
    w = n(19575),
    E = n(721668),
    C = n(652215),
    N = n(375708),
    b = n(772620);
function O() {
    let [e, t] = i.useState(!1);
    if (null == (0, f.bG)([m.A], () => ((0, g.kK)() ? m.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    async function n() {
        try {
            t(!0), await (0, p.iD)(), window.location.reload(!0);
        } catch (e) {
            t(!1);
        }
    }
    return (0, r.jsx)(d.$, {
        variant: "primary",
        size: "md",
        text: N.intl.string(N.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let _ = o().throttle(
    (e) => {
        A.A.increment(
            {
                name: c.K.APP_CRASHED,
                tags: [`reason:${l.J.UNHANDLED_JS_ERROR}`, `level:${a.k.FATAL}`, `modded_client:${e}`],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class D extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, y.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, u.b)(),
            i = x.A.captureCrash(e, { extra: t });
        v.default.track(C.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            _(r),
            w.Ay.cleanupDisplaySleep();
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
                n = (0, r.jsxs)(h.e, {
                    children: [
                        (0, r.jsx)(d.$, {
                            variant: "primary",
                            size: "md",
                            text: N.intl.string(N.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(O, {}),
                    ],
                });
            return (0, r.jsx)(E.A, {
                title: N.intl.string(N.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: b.W,
            });
        }
        return e;
    }
}
let I = D;
