"use strict";
n.d(t, { A: () => o });
var r = n(562465),
    i = n(843472),
    a = n(652215),
    s = n(985018);
let o = {
    changeNickname: (e, t, n, o) =>
        r.Bo.patch({
            url: a.Rsh.GUILD_MEMBER_NICK(e, n),
            body: { nick: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => {
                (o = e.body.nick),
                    i.A.sendBotMessage(
                        t,
                        null != o && "" !== o
                            ? s.intl.formatToMarkdownString(s.t["gz+HRq"], { nick: o })
                            : s.intl.string(s.t.Vhpd9A),
                    );
            },
            (e) => {
                403 === e.status
                    ? i.A.sendBotMessage(t, s.intl.formatToMarkdownString(s.t.Izf9jO, {}))
                    : i.A.sendBotMessage(t, s.intl.string(s.t["5LO/Ss"]));
            },
        ),
};
