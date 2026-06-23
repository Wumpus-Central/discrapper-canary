i.d(n, { default: () => s });
var r = i(627968);
i(64700);
var e = i(189213),
    o = i(366098),
    l = i(918192),
    a = i(375708);
function s(t) {
    let { channel: n, onAccept: i, transitionState: s, onClose: u } = t,
        d = (0, o.mT)(n.id),
        c = (0, o.Iv)(n.id);
    return (0, r.jsx)(e.Modal, {
        onClose: u,
        transitionState: s,
        actions: [
            { text: a.intl.string(a.t.CZGqeT), variant: "secondary", onClick: u },
            {
                text: a.intl.string(a.t.mbD50D),
                variant: "primary",
                onClick: function () {
                    i(n), u();
                },
            },
        ],
        title: (function (t) {
            let { blockedUsersCount: n, ignoredUsersCount: i } = t;
            return n > 0 && i > 0
                ? a.intl.formatToPlainString(a.t.Uzdyho, { number: n + i })
                : i > 0
                  ? a.intl.formatToPlainString(a.t.wvygk8, { number: i })
                  : a.intl.formatToPlainString(a.t.HviVA9, { number: n });
        })({ blockedUsersCount: d.length, ignoredUsersCount: c.length }),
        subtitle: (function (t) {
            let { blockedUsersCount: n, ignoredUsersCount: i } = t;
            return n > 0 && i > 0
                ? a.intl.string(a.t["P/KFXz"])
                : i > 0
                  ? a.intl.format(a.t.Ri3o33, { number: i })
                  : a.intl.format(a.t["28qZMU"], { number: n });
        })({ blockedUsersCount: d.length, ignoredUsersCount: c.length }),
        children: [...d, ...c].map((t) => {
            let { user: i, id: e, speaker: o } = t;
            return (0, r.jsx)(l.ld, { user: i, speaker: o, showStatus: !0, channelId: n.id }, e);
        }),
    });
}
