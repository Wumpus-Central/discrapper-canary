"use strict";
n.d(t, { _: () => o });
var i = n(627968),
    r = n(296489),
    a = n.n(r),
    s = n(192308);
let l = null;
function o() {
    let {
        initialBadgeId: e,
        targetUserId: t,
        targetUsername: r,
        viewingCurrentUserBadges: o,
        stackingBehavior: d,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != l && (0, s.closeModalInAllContexts)(l);
    let c = a()("badge-directory-modal");
    return (
        (l = c),
        (0, s.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([n.e("58877"), n.e("98400")]).then(n.bind(n, 734883));
                return (n) =>
                    (0, i.jsx)(a, {
                        ...n,
                        initialBadgeId: e,
                        targetUserId: t,
                        targetUsername: r,
                        viewingCurrentUserBadges: o,
                    });
            },
            {
                modalKey: c,
                stackingBehavior: d ?? "stack",
                onCloseCallback: () => {
                    l === c && (l = null);
                },
            },
        )
    );
}
