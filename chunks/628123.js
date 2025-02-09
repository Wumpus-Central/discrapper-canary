n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(818405),
    l = n(587158),
    u = n(286379),
    c = n(903772),
    d = n(442837),
    f = n(481060),
    _ = n(386506),
    p = n(304761),
    h = n(865427),
    m = n(406128),
    g = n(797614),
    E = n(703656),
    v = n(626135),
    y = n(960048),
    I = n(998502),
    T = n(981631),
    b = n(388032),
    S = n(540280);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N() {
    let [e, t] = r.useState(!1);
    if (
        null ==
        (0, d.e7)([p.C], () => {
            var e;
            return (0, h.fD)() ? (null === (e = p.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
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
    return (0, i.jsx)(f.zxk, {
        size: f.PhG.LARGE,
        onClick: n,
        submitting: e,
        className: S.clearOverrideButton,
        children: b.intl.string(b.t['/Nz9ra'])
    });
}
let C = s().throttle(
    (e) => {
        g.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(o.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class R extends r.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, E.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, c.e)(),
            r = y.Z.captureCrash(e, { extra: t });
        v.default.track(T.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            uses_client_mods: i,
            error_level: 'fatal'
        }),
            C(i),
            I.ZP.cleanupDisplaySleep();
    }
    _handleSubmitReport() {
        location.reload(!0);
    }
    componentDidMount() {
        null == window.DiscordErrors &&
            ((window.DiscordErrors = {
                softCrash: (e) => {
                    this.triggerSoftCrash(e);
                }
            }),
            (this.discordErrorsSet = !0));
    }
    componentWillUnmount() {
        this.discordErrorsSet && ((window.DiscordErrors = null), (this.discordErrorsSet = !1));
    }
    render() {
        let { children: e, renderCustomMessage: t } = this.props;
        if (null !== this.state.error) {
            let e = (0, i.jsxs)('div', {
                    children: [(0, i.jsx)('p', { children: b.intl.string(b.t.tx8CkJ) }), (0, i.jsx)('p', { children: b.intl.string(b.t.CvQlAA) })]
                }),
                n = (0, i.jsxs)('div', {
                    className: S.buttons,
                    children: [
                        (0, i.jsx)(f.zxk, {
                            size: f.PhG.LARGE,
                            onClick: this._handleSubmitReport,
                            children: b.intl.string(b.t['+hivLS'])
                        }),
                        (0, i.jsx)(N, {})
                    ]
                });
            return (0, i.jsx)(m.Z, {
                title: b.intl.string(b.t['3h+n+/']),
                note: null != t ? t() : e,
                action: n,
                className: S.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                error: null,
                info: null
            }),
            A(this, 'discordErrorsSet', !1);
    }
}
let O = R;
