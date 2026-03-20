"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(159001),
    s = n(780964),
    a = n(507553);
n(652215);
var o = n(355097);
function l() {
    let {
        guild: e,
        scrollPosition: t,
        analyticsLocation: l,
        analyticsLocations: u,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = n(840065);
            a.A.setState({ subsection: null != e ? o.Eq.GUILD : o.Eq.USER_PROFILE, scrollPosition: t }),
                r(s.X.PROFILE_PANEL, { analyticsLocation: l, analyticsLocations: u });
        }
    }, [e, t, l, u]);
}
n(836602), n(628965);
