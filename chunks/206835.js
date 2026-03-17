"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(159001),
    s = n(780964);
n(652215);
var a = n(355097);
function o() {
    let {
        guild: e,
        scrollPosition: t,
        analyticsLocation: o,
        analyticsLocations: l,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return (0, r.useCallback)(() => {
        null != e && (0, i.V2)(e.id);
        {
            let { openUserSettings: r } = n(840065),
                { default: i } = n(955838);
            i.setState({ subsection: null != e ? a.Eq.GUILD : a.Eq.USER_PROFILE, scrollPosition: t }),
                r(s.X.PROFILE_PANEL, { analyticsLocation: o, analyticsLocations: l });
        }
    }, [e, t, o, l]);
}
n(836602), n(628965);
