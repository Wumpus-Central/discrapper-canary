"use strict";
n.d(t, { A: () => o });
var i = n(636537),
    r = n(720149),
    s = n(652215),
    a = n(375708);
let o = {
    changeNickname: (e, t, n, o) =>
        i.Bo.patch({
            url: s.Rsh.GUILD_MEMBER_NICK(e, n),
            body: { nick: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                (o = e.body.nick),
                    r.A.sendBotMessage(
                        t,
                        null != o && "" !== o
                            ? a.intl.formatToMarkdownString(a.t["gz+HRq"], { nick: o })
                            : a.intl.string(a.t.Vhpd9A),
                    );
            },
            (e) => {
                403 === e.status
                    ? r.A.sendBotMessage(t, a.intl.formatToMarkdownString(a.t.Izf9jO, {}))
                    : r.A.sendBotMessage(t, a.intl.string(a.t["5LO/Ss"]));
            },
        ),
};
