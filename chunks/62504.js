"use strict";
n.d(t, { L: () => u });
var r = n(64700),
    i = n(554146),
    s = n(771781),
    a = n(826673),
    o = n(367727),
    l = n(49999);
function u() {
    let e = (0, a.JZ)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
    return (
        r.useEffect(() => {
            if (!e)
                return (
                    (0, o.Vh)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                    () => {
                        (0, s.pd)({ content: i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                    }
                );
        }, [e]),
        {
            shouldShowNewBadge: !e,
            markNewBadgeAsDismissed: r.useCallback(() => {
                (0, a.Dr)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: l.i.TAKE_ACTION });
            }, []),
        }
    );
}
