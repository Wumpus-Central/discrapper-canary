var r = n(477900),
    i = n(582128),
    l = n(435558),
    s = n.n(l),
    o = n(258873),
    a = n(622242),
    u = n(731738),
    d = n(70298),
    c = n(855986),
    h = n(143592),
    f = n(821609),
    g = n(825484),
    p = n(148810),
    m = n(521502),
    A = n(380610),
    y = n(913379),
    v = n(976860),
    E = n(129230),
    x = n(856383),
    w = n(253400),
    b = n(721668),
    C = n(652215),
    N = n(792996),
    O = n(684637);
function _() {
    let [e, t] = i.useState(!1);
    return null == (0, c.bG)([m.A], () => ((0, A.kK)() ? m.A.getCurrentBuildOverride().overrides?.discord_web : null))
        ? null
        : (0, r.jsx)(f.$, {
              variant: "primary",
              size: "md",
              text: N.intl.string(N.t["/Nz9rY"]),
              onClick: async function () {
                  try {
                      (t(!0), await (0, p.iD)(), window.location.reload(!0));
                  } catch (e) {
                      t(!1);
                  }
              },
              loading: e,
          });
}
let D = s().throttle(
    (e) => {
        y.A.increment(
            {
                name: u.K.APP_CRASHED,
                tags: [`reason:${o.J.UNHANDLED_JS_ERROR}`, `level:${a.k.FATAL}`, `modded_client:${e}`],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class S extends i.PureComponent {
    state = { error: null, info: null };
    discordErrorsSet = !1;
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, v.JK)().location;
        this.setState({ error: e, info: t });
        let r = (0, d.b)(),
            i = x.A.captureCrash(e, { extra: t });
        (E.default.track(C.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: "fatal",
        }),
            D(r),
            w.Ay.cleanupDisplaySleep());
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
                n = (0, r.jsxs)(g.e, {
                    children: [
                        (0, r.jsx)(f.$, {
                            variant: "primary",
                            size: "md",
                            text: N.intl.string(N.t["+hivLW"]),
                            onClick: this._handleSubmitReport,
                        }),
                        (0, r.jsx)(_, {}),
                    ],
                });
            return (0, r.jsx)(b.A, {
                title: N.intl.string(N.t["3h+n+8"]),
                note: null != t ? t() : e,
                action: n,
                className: O.W,
                illustration: (0, r.jsx)("div", {
                    className: O.b,
                    children: (0, r.jsx)(h.e, { alt: "", ariaHidden: !0 }),
                }),
                hideBackground: !0,
            });
        }
        return e;
    }
}
n.d(t, {}, { A: S });
