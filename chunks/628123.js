n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(818405),
    l = n(587158),
    c = n(286379),
    u = n(903772),
    d = n(442837),
    f = n(481060),
    _ = n(386506),
    p = n(304761),
    h = n(865427),
    m = n(406128),
    g = n(797614),
    E = n(703656),
    b = n(626135),
    y = n(960048),
    v = n(998502),
    O = n(981631),
    I = n(388032),
    S = n(804683);
function T(e, t, n) {
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
    let [e, t] = i.useState(!1);
    if (
        null ==
        (0, d.e7)([p.C], () => {
            var e;
            return (0, h.fD)() ? (null == (e = p.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
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
    return (0, r.jsx)(f.zxk, {
        size: f.PhG.LARGE,
        onClick: n,
        submitting: e,
        className: S.clearOverrideButton,
        children: I.NW.string(I.t['/Nz9ra'])
    });
}
let A = a().throttle(
    (e) => {
        g.Z.increment(
            {
                name: c.V.APP_CRASHED,
                tags: ['reason:'.concat(s.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class C extends i.PureComponent {
    componentDidCatch(e, t) {
        this.triggerSoftCrash(e, t);
    }
    triggerSoftCrash(e, t) {
        let n = (0, E.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, u.e)(),
            i = y.Z.captureCrash(e, { extra: t });
        b.default.track(O.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            uses_client_mods: r,
            error_level: 'fatal'
        }),
            A(r),
            v.ZP.cleanupDisplaySleep();
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
            let e = (0, r.jsxs)('div', {
                    children: [(0, r.jsx)('p', { children: I.NW.string(I.t.tx8CkJ) }), (0, r.jsx)('p', { children: I.NW.string(I.t.CvQlAA) })]
                }),
                n = (0, r.jsxs)('div', {
                    className: S.buttons,
                    children: [
                        (0, r.jsx)(f.zxk, {
                            size: f.PhG.LARGE,
                            onClick: this._handleSubmitReport,
                            children: I.NW.string(I.t['+hivLS'])
                        }),
                        (0, r.jsx)(N, {})
                    ]
                });
            return (0, r.jsx)(m.Z, {
                title: I.NW.string(I.t['3h+n+/']),
                note: null != t ? t() : e,
                action: n,
                className: S.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                error: null,
                info: null
            }),
            T(this, 'discordErrorsSet', !1);
    }
}
let R = C;
