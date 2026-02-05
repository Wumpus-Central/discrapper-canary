n.d(e, { default: () => o });
var r = n(627968);
n(64700);
var s = n(158954),
    l = n(366098),
    i = n(918192),
    a = n(985018);
function o(t) {
    let { channel: e, onAccept: n, transitionState: o, onClose: c } = t,
        d = (0, l.mT)(e.id),
        x = (0, l.Iv)(e.id);
    return (0, r.jsx)(s.Modal, {
        onClose: c,
        transitionState: o,
        actions: [
            { text: a.intl.string(a.t.CZGqeT), variant: "secondary", onClick: c },
            {
                text: a.intl.string(a.t.mbD50D),
                variant: "primary",
                onClick: () => {
                    n(e), c();
                },
            },
        ],
        title: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? a.intl.formatToPlainString(a.t.Uzdyho, { number: e + n })
                : n > 0
                  ? a.intl.formatToPlainString(a.t.wvygk8, { number: n })
                  : a.intl.formatToPlainString(a.t.HviVA9, { number: e });
        })({ blockedUsersCount: d.length, ignoredUsersCount: x.length }),
        subtitle: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? a.intl.string(a.t["P/KFXz"])
                : n > 0
                  ? a.intl.format(a.t.Ri3o33, { number: n })
                  : a.intl.format(a.t["28qZMU"], { number: e });
        })({ blockedUsersCount: d.length, ignoredUsersCount: x.length }),
        children: [...d, ...x].map((t) => {
            let { user: n, id: s, speaker: l } = t;
            return (0, r.jsx)(i.ld, { user: n, speaker: l, showStatus: !0, channelId: e.id }, s);
        }),
    });
}
