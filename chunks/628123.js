var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(392711),
    l = r.n(s),
    u = r(818405),
    c = r(587158),
    d = r(286379),
    f = r(903772),
    p = r(442837),
    h = r(481060),
    _ = r(386506),
    m = r(304761),
    g = r(865427),
    E = r(406128),
    v = r(797614),
    y = r(703656),
    b = r(626135),
    I = r(960048),
    T = r(998502),
    S = r(981631),
    A = r(388032),
    C = r(146390);
function N(e, n, r) {
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
    let [e, n] = o.useState(!1);
    if (
        null ==
        (0, p.e7)([m.C], () => {
            var e;
            return (0, g.fD)() ? (null === (e = m.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        })
    )
        return null;
    let r = async () => {
        try {
            n(!0), await (0, _.bF)(), window.location.reload(!0);
        } catch (e) {
            n(!1);
        }
    };
    return (0, a.jsx)(h.Button, {
        size: h.ButtonSizes.LARGE,
        onClick: r,
        submitting: e,
        className: C.clearOverrideButton,
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
class D extends o.PureComponent {
    componentDidCatch(e, n) {
        this.triggerSoftCrash(e, n);
    }
    triggerSoftCrash(e, n) {
        let r = (0, y.s1)().location;
        this.setState({
            error: e,
            info: n
        });
        let i = (0, f.e)(),
            a = I.Z.captureCrash(e, { extra: n });
        b.default.track(S.rMx.APP_CRASHED, {
            path: r.pathname,
            extra: n,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            uses_client_mods: i,
            error_level: 'fatal'
        }),
            O(i),
            T.ZP.cleanupDisplaySleep();
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
                    className: C.buttons,
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
                className: C.errorPage
            });
        }
        return e;
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                error: null,
                info: null
            }),
            N(this, 'discordErrorsSet', !1);
    }
}
n.Z = D;
