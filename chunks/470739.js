t.d(a, { openBadgeDirectoryModal: () => s });
var l = t(477900),
    n = t(277057),
    r = t.n(n),
    d = t(192308);
let i = null;
function s() {
    let {
        initialBadgeId: e,
        targetUserId: a,
        targetUsername: n,
        viewingCurrentUserBadges: s,
        stackingBehavior: o,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    null != i && (0, d.closeModalInAllContexts)(i);
    let c = r()("badge-directory-modal");
    return (
        (i = c),
        (0, d.openModalLazy)(
            async () => {
                let { default: r } = await Promise.all([
                    t.e("638781"),
                    t.e("352456"),
                    t.e("188941"),
                    t.e("482815"),
                    t.e("463095"),
                    t.e("90373"),
                    t.e("920282"),
                    t.e("195468"),
                    t.e("374035"),
                ]).then(t.bind(t, 397214));
                return (t) =>
                    (0, l.jsx)(r, {
                        ...t,
                        initialBadgeId: e,
                        targetUserId: a,
                        targetUsername: n,
                        viewingCurrentUserBadges: s,
                    });
            },
            {
                modalKey: c,
                stackingBehavior: o ?? "stack",
                onCloseCallback: () => {
                    i === c && (i = null);
                },
            },
        )
    );
}
