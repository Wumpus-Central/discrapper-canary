r.d(e, { default: () => o }), r(896048);
var n = r(627968);
r(64700);
var i = r(158954),
    l = r(366098),
    s = r(918192),
    a = r(985018);
function o(t) {
    let { channel: e, onAccept: r, transitionState: o, onClose: c } = t,
        d = (0, l.mT)(e.id),
        u = (0, l.Iv)(e.id);
    return (0, n.jsx)(i.Modal, {
        onClose: c,
        transitionState: o,
        actions: [
            {
                text: a.intl.string(a.t.CZGqeT),
                variant: "secondary",
                onClick: c,
            },
            {
                text: a.intl.string(a.t.mbD50D),
                variant: "primary",
                onClick: () => {
                    r(e), c();
                },
            },
        ],
        title: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: r } = t;
            return e > 0 && r > 0
                ? a.intl.formatToPlainString(a.t.Uzdyho, { number: e + r })
                : r > 0
                  ? a.intl.formatToPlainString(a.t.wvygk8, { number: r })
                  : a.intl.formatToPlainString(a.t.HviVA9, { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        subtitle: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: r } = t;
            return e > 0 && r > 0
                ? a.intl.string(a.t["P/KFXz"])
                : r > 0
                  ? a.intl.format(a.t.Ri3o33, { number: r })
                  : a.intl.format(a.t["28qZMU"], { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        children: [...d, ...u].map((t) => {
            let { user: r, id: i, speaker: l } = t;
            return (0, n.jsx)(
                s.ld,
                {
                    user: r,
                    speaker: l,
                    showStatus: !0,
                    channelId: e.id,
                },
                i,
            );
        }),
    });
}
