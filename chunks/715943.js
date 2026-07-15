"use strict";
n.d(t, { A: () => l });
var i = n(636537),
    r = n(493336),
    a = n(652215),
    s = n(375708);
let l = {
    changeNickname: (e, t, n, l) =>
        i.Bo.patch({
            url: a.Rsh.GUILD_MEMBER_NICK(e, n),
            body: { nick: l },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        }).then(
            (e) => {
                (l = e.body.nick),
                    r.A.sendBotMessage(
                        t,
                        null != l && "" !== l
                            ? s.intl.formatToMarkdownString(s.t["gz+HRq"], { nick: l })
                            : s.intl.string(s.t.Vhpd9A),
                    );
            },
            (e) => {
                403 === e.status
                    ? r.A.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jO, {}))
                    : r.A.sendBotMessage(t, s.intl.string(s.t["5LO/Ss"]));
            },
        ),
};
