n.d(t, { A: () => T });
var r = n(477900),
    i = n(582128),
    s = n(435558),
    l = n.n(s),
    o = n(258873),
    a = n(622242),
    c = n(731738),
    d = n(70298),
    u = n(821609),
    h = n(825484),
    f = n(17928),
    g = n(397613),
    p = n(148810),
    m = n(521502),
    A = n(380610),
    v = n(807393),
    y = n(976860),
    x = n(174459),
    w = n(38405),
    E = n(19575),
    C = n(721668),
    b = n(652215),
    N = n(375708),
    O = n(684637);
function _() {
    let [e, t] = i.useState(!1);
    if (null == (0, f.bG)([m.A], () => ((0, A.kK)() ? m.A.getCurrentBuildOverride().overrides?.discord_web : null)))
        return null;
    async function n() {
        try {
            (t(!0), await (0, p.iD)(), window.location.reload(!0));
        } catch (e) {
            t(!1);
        }
    }
    return (0, r.jsx)(u.$, {
        variant: "primary",
        size: "md",
        text: N.intl.string(N.t["/Nz9rY"]),
        onClick: n,
        loading: e,
    });
}
let D = l().throttle(
    (e) => {
        v.A.increment(
            {
                name: c.K.APP_CRASHED,
                tags: [`reason:${o.J.UNHANDLED_JS_ERROR}`, `level:${a.k.FATAL}`, `modded_client:${e}`],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class I extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, y.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, d.b)(),
            i = w.A.captureCrash(e, { extra: t });
        (x.default.track(b.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            D(r),
            E.Ay.cleanupDisplaySleep());
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
                        (0, r.jsx)(u.$, {
                            variant: "primary",
                            size: "md",
                            text: N.intl.string(N.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(_, {}),
                    ],
                });
            return (0, r.jsx)(C.A, {
                title: N.intl.string(N.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: O.W,
                illustration: (0, r.jsx)("div", {
                    className: O.b,
                    children: (0, r.jsx)(g.e, { alt: "", ariaHidden: !0 }),
                }),
                hideBackground: !0,
            });
        }
        return e;
    }
}
let T = I;
