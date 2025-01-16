var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(392711),
    l = r.n(o),
    u = r(818405),
    c = r(587158),
    d = r(286379),
    f = r(903772),
    _ = r(442837),
    h = r(481060),
    p = r(386506),
    m = r(304761),
    g = r(865427),
    E = r(406128),
    v = r(797614),
    I = r(703656),
    T = r(626135),
    b = r(960048),
    y = r(998502),
    S = r(981631),
    A = r(388032),
    N = r(146390);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function R() {
    let [e, n] = s.useState(!1);
    if (
        null ==
        (0, _.e7)([m.C], () => {
            var e;
            return (0, g.fD)() ? (null === (e = m.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        })
    )
        return null;
    let r = async () => {
        try {
            n(!0), await (0, p.bF)(), window.location.reload(!0);
        } catch (e) {
            n(!1);
        }
    };
    return (0, a.jsx)(h.Button, {
        size: h.ButtonSizes.LARGE,
        onClick: r,
        submitting: e,
        className: N.clearOverrideButton,
        children: A.intl.string(A.t['/Nz9ra'])
    });
}
let O = l().throttle(
    (e) => {
        v.Z.increment(
            {
                name: d.V.APP_CRASHED,
                tags: ['reason:'.concat(u.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL), 'modded_client:'.concat(e)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class D extends s.PureComponent {
    componentDidCatch(e, n) {
        this.triggerSoftCrash(e, n);
    }
    triggerSoftCrash(e, n) {
        let r = (0, I.s1)().location;
        this.setState({
            error: e,
            info: n
        });
        let i = (0, f.e)(),
            a = b.Z.captureCrash(e, { extra: n });
        T.default.track(S.rMx.APP_CRASHED, {
            path: r.pathname,
            extra: n,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            uses_client_mods: i,
            error_level: 'fatal'
        }),
            O(i),
            y.ZP.cleanupDisplaySleep();
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
        let { children: e, renderCustomMessage: n } = this.props;
        if (null !== this.state.error) {
            let e = (0, a.jsxs)('div', {
                    children: [(0, a.jsx)('p', { children: A.intl.string(A.t.tx8CkJ) }), (0, a.jsx)('p', { children: A.intl.string(A.t.CvQlAA) })]
                }),
                r = (0, a.jsxs)('div', {
                    className: N.buttons,
                    children: [
                        (0, a.jsx)(h.Button, {
                            size: h.ButtonSizes.LARGE,
                            onClick: this._handleSubmitReport,
                            children: A.intl.string(A.t['+hivLS'])
                        }),
                        (0, a.jsx)(R, {})
                    ]
                });
            return (0, a.jsx)(E.Z, {
                title: A.intl.string(A.t['3h+n+/']),
                note: null != n ? n() : e,
                action: r,
                className: N.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', {
                error: null,
                info: null
            }),
            C(this, 'discordErrorsSet', !1);
    }
}
n.Z = D;
